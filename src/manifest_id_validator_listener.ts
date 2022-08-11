"use strict";

import {
    ManifestInstructionContext,
    ManifestContext,
    BucketContext,
    ProofContext,
} from "./TransactionManifestParser";
import { TransactionManifestListener } from "./TransactionManifestListener";
import { Diagnostic, DiagnosticSeverity, Position, Range, TextDocument } from "vscode";
import { ParserRuleContext, Token } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

class Bucket {
    private bucketIdentifier: string | number;

    constructor(bucketIdentifier: string | number) {
        this.bucketIdentifier = bucketIdentifier;
    }

    isStringIdentifier(): boolean {
        return (typeof(this.bucketIdentifier) === "string");
    };
    
    isNumericIdentifier(): boolean {
        return (typeof(this.bucketIdentifier) === "number");
    };

    identifier(): string | number {
        return this.bucketIdentifier;
    }    

    toString(): string {
        switch (typeof(this.bucketIdentifier)) {
            case 'string':
                return `Bucket("${this.bucketIdentifier}")`;
            case 'number':
                return `Bucket(${this.bucketIdentifier}u32)`;
        }
    }

    /**
     * Creates a new bucket object from the bucket string.
     * @param bucketString A bucket string. Example: `Bucket("my_cool_bucket")`
     */
    static fromBucketString(bucketString: string): Bucket | undefined {
        let matches: RegExpMatchArray | null = bucketString.match(/Bucket\((\".*\"|\d+u32)\)/);
        if (matches) {
            let matchedString: string = matches[1];
            if (matchedString.startsWith('"') && matchedString.endsWith('"')) {
                return new Bucket(matchedString.slice(1, -1));
            } else {
                let bucketId: number = parseInt(matchedString.replace('u32', ''));
                return new Bucket(bucketId);
            }
        } else {
            return undefined;
        }
    }
}

interface BucketDefinition {
    range: Range,
    bucket: Bucket
}

class Proof {
    private proofIdentifier: string | number;

    constructor(proofIdentifier: string | number) {
        this.proofIdentifier = proofIdentifier;
    }

    isStringIdentifier(): boolean {
        return (typeof(this.proofIdentifier) === "string");
    };
    
    isNumericIdentifier(): boolean {
        return (typeof(this.proofIdentifier) === "number");
    };

    identifier(): string | number {
        return this.proofIdentifier;
    }    

    toString(): string {
        switch (typeof(this.proofIdentifier)) {
            case 'string':
                return `Proof("${this.proofIdentifier}")`;
            case 'number':
                return `Proof(${this.proofIdentifier}u32)`;
        }
    }

    /**
     * Creates a new proof object from the proof string.
     * @param proofString A proof string. Example: `Proof("my_cool_proof")`
     */
    static fromProofString(proofString: string): Proof | undefined {
        let matches: RegExpMatchArray | null = proofString.match(/Proof\((\".*\"|\d+u32)\)/);
        if (matches) {
            let matchedString: string = matches[1];
            if (matchedString.startsWith('"') && matchedString.endsWith('"')) {
                return new Proof(matchedString.slice(1, -1));
            } else {
                let proofId: number = parseInt(matchedString.replace('u32', ''));
                return new Proof(proofId);
            }
        } else {
            return undefined;
        }
    }
}

interface ProofDefinition {
    range: Range,
    proof: Proof
}


enum IdValidatorMode{
    add,
    remove,
    removeAllProofs,
    removeAllBuckets,
    none,
}

/**
 * This class represents an ID validator that is used to provide static analysis of the transaction manifest to provide
 * errors when buckets or proofs are moved in an illegal way. 
 */
export class ManifestIdValidator implements TransactionManifestListener {
    private document: TextDocument;
    private availableBuckets: BucketDefinition[] = [];
    private availableProofs: ProofDefinition[] = [];
    private diagnostics: Diagnostic[] = [];

    constructor(document: TextDocument) {
        this.document = document;
    }

    /**
     * An ANTLR callback function called when the parser enters into a transaction manifest instruction.
     */
    enterManifestInstruction(context: ManifestInstructionContext) {
        let diagnostics: Diagnostic[] = [];
        let start: Token = context._start;
        let end: Token | undefined = context._stop;

        if (end) {
            let children: ParseTree[] | undefined = context.children;
            if (children) {
                let flattenedChildren: ParseTree[] = flattenTree(children);

                // Determine the current idValidatorMode depending on the instruction.
                let idValidatorMode: IdValidatorMode;
                let instruction: string = flattenedChildren[0].toString();

                switch (instruction) {
                    case 'TAKE_FROM_WORKTOP':
                    case 'TAKE_FROM_WORKTOP_BY_AMOUNT':
                    case 'TAKE_FROM_WORKTOP_BY_IDS':
                    case 'POP_FROM_AUTH_ZONE':
                    case 'CREATE_PROOF_FROM_AUTH_ZONE':
                    case 'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT':
                    case 'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS':
                    case 'CREATE_PROOF_FROM_BUCKET':
                    case 'CLONE_PROOF':
                        idValidatorMode = IdValidatorMode.add;
                        break;
                    case 'RETURN_TO_WORKTOP':
                    case 'PUSH_TO_AUTH_ZONE':
                    case 'CALL_FUNCTION':
                    case 'CALL_METHOD':
                    case 'DROP_PROOF':
                        idValidatorMode = IdValidatorMode.remove;
                        break;
                    case 'DROP_ALL_PROOFS':
                        idValidatorMode = IdValidatorMode.removeAllProofs;
                        break;
                    case 'CALL_METHOD_WITH_ALL_RESOURCES':
                        idValidatorMode = IdValidatorMode.removeAllBuckets;
                        break;
                    default:
                        idValidatorMode = IdValidatorMode.none;
                        break;
                }
                console.log("validator mode is", idValidatorMode);

                // Analyze the instruction extracting out the bucket and proof definitions from the instruction
                let bucketDefs: BucketDefinition[] = [];
                let proofDefs: ProofDefinition[] = [];
                for (var token of flattenedChildren) {
                    if (token instanceof BucketContext) {
                        let bucketDefinition: BucketDefinition | undefined = this.getBucketDefinition(token);
                        if (bucketDefinition) {
                            bucketDefs.push(bucketDefinition);
                        }
                    } else if (token instanceof ProofContext) {
                        let proofDefinition: ProofDefinition | undefined = this.getProofDefinition(token);
                        if (proofDefinition) {
                            proofDefs.push(proofDefinition);
                        }
                    }
                }

                // TODO: This is a way to quickly get the IdValidator to work. Need to change
                switch (instruction) {
                    case 'CLONE_PROOF':
                        proofDefs.splice(0, 1);
                        break;
                    case 'CREATE_PROOF_FROM_BUCKET':
                        bucketDefs.splice(0, 1);
                        break;
                }

                switch (idValidatorMode) {
                    case IdValidatorMode.add:
                        for (var bucketDef of bucketDefs) {
                            if (!this.addBucketDefinition(bucketDef)) {
                                diagnostics.push(new Diagnostic(bucketDef.range, "Invalid Bucket Name or Id: A Bucket was previously created with the same name or Id. To resolve this issue, consider changing the name of the Bucket to a unique name. ", DiagnosticSeverity.Error));
                            }
                        }
                        for (var proofDef of proofDefs) {
                            if (!this.addProofDefinition(proofDef)) {
                                diagnostics.push(new Diagnostic(proofDef.range, "Invalid Proof Name or Id: A Proof was previously created with the same name or Id. To resolve this issue, consider changing the name of the Proof to a unique name. ", DiagnosticSeverity.Error));
                            }
                        }
                        break;
                    case IdValidatorMode.remove:
                        for (var bucketDef of bucketDefs) {
                            if (!this.removeBucket(bucketDef.bucket)) {
                                diagnostics.push(new Diagnostic(bucketDef.range, "Invalid Bucket: No Bucket with the given name of Id exists. This either means that the Bucket has been moved as a result of a previous instruction or that it never existed.", DiagnosticSeverity.Error));
                            }
                        }
                        for (var proofDef of proofDefs) {
                            if (!this.removeProof(proofDef.proof)) {
                                diagnostics.push(new Diagnostic(proofDef.range, "Invalid Proof: No Proof with the given name of Id exists. This either means that the Proof has been moved as a result of a previous instruction or that it never existed.", DiagnosticSeverity.Error));
                            }
                        }
                        break;
                    case IdValidatorMode.removeAllBuckets:
                        this.availableBuckets = [];
                        break;
                    case IdValidatorMode.removeAllProofs:
                        this.availableProofs = [];
                        break;
                    case IdValidatorMode.none:
                        break;
                    default:
                        console.log("Should never be able to get here");
                }
            }
        } else {
            console.log(
                "Was not able to find an end for an instruction beginning at:",
                start
            );
        }

        this.diagnostics.push(...diagnostics);
    }

    private getBucketDefinition = (bucketContext: BucketContext): BucketDefinition | undefined => {
        let start: Token = bucketContext.start;
        let stop: Token = bucketContext.stop!;

        let range: Range = new Range(start.line - 1, start.charPositionInLine, stop.line - 1, stop.charPositionInLine + 1);
        let bucketString: string = this.document.getText(range);
        let bucket: Bucket | undefined = Bucket.fromBucketString(bucketString);

        return bucket ? {range, bucket} : undefined;
    };
    
    private getProofDefinition = (proofContext: ProofContext): ProofDefinition | undefined => {
        let start: Token = proofContext.start;
        let stop: Token = proofContext.stop!;

        let range: Range = new Range(start.line - 1, start.charPositionInLine, stop.line - 1, stop.charPositionInLine + 1);
        let proofString: string = this.document.getText(range);
        let proof: Proof | undefined = Proof.fromProofString(proofString);

        return proof ? {range, proof} : undefined;
    };

    private addBucketDefinition = (bucketDefinition: BucketDefinition): boolean => {
        let bucketDefIndex: number = this.availableBuckets.map((x) => x.bucket.toString()).indexOf(bucketDefinition.bucket.toString());
        if (bucketDefIndex === -1) {
            this.availableBuckets.push(bucketDefinition);
            return true;
        } else {
            return false;
        }
    };
    
    private addProofDefinition = (proofDefinition: ProofDefinition): boolean => {
        let proofDefIndex: number = this.availableProofs.map((x) => x.proof.toString()).indexOf(proofDefinition.proof.toString());
        if (proofDefIndex === -1) {
            this.availableProofs.push(proofDefinition);
            return true;
        } else {
            return false;
        }
    };

    private removeBucket = (bucket: Bucket): boolean => {
        let bucketDefIndex: number = this.availableBuckets.map((x) => x.bucket.toString()).indexOf(bucket.toString());
        if (bucketDefIndex !== -1) {
            this.availableBuckets.splice(bucketDefIndex, 1);
            return true;
        } else {
            return false;
        }
    };
    
    private removeProof = (proof: Proof): boolean => {
        let proofDefIndex: number = this.availableProofs.map((x) => x.proof.toString()).indexOf(proof.toString());
        if (proofDefIndex !== -1) {
            this.availableProofs.splice(proofDefIndex, 1);
            return true;
        } else {
            return false;
        }
    };

    getDiagnostics = (): Diagnostic[] => {
        this.diagnostics.push(...this.availableBuckets.map((x) => new Diagnostic(x.range, "Dangling Bucket: This Bucket nas not been deposited anywhere during this transaction and will therefore lead the transaction to fail")));
        return this.diagnostics;
    };
}

function flattenTree(tree: ParseTree[]): ParseTree[] {
    let flattened: ParseTree[] = [];

    for (var token of tree) {
        if ((token instanceof BucketContext) || (token instanceof ProofContext)) {
            flattened.push(token);
        }
        // @ts-ignore
        if (token.children) {
            // @ts-ignore
            flattened.push(...flattenTree(token.children!));
        } else {
            flattened.push(token);
        }
    }

    return flattened;
}