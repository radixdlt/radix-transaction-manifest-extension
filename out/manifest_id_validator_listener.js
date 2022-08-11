"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManifestIdValidator = void 0;
const TransactionManifestParser_1 = require("./TransactionManifestParser");
const vscode_1 = require("vscode");
class Bucket {
    constructor(bucketIdentifier) {
        this.bucketIdentifier = bucketIdentifier;
    }
    isStringIdentifier() {
        return (typeof (this.bucketIdentifier) === "string");
    }
    ;
    isNumericIdentifier() {
        return (typeof (this.bucketIdentifier) === "number");
    }
    ;
    identifier() {
        return this.bucketIdentifier;
    }
    toString() {
        switch (typeof (this.bucketIdentifier)) {
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
    static fromBucketString(bucketString) {
        let matches = bucketString.match(/Bucket\((\".*\"|\d+u32)\)/);
        if (matches) {
            let matchedString = matches[1];
            if (matchedString.startsWith('"') && matchedString.endsWith('"')) {
                return new Bucket(matchedString.slice(1, -1));
            }
            else {
                let bucketId = parseInt(matchedString.replace('u32', ''));
                return new Bucket(bucketId);
            }
        }
        else {
            return undefined;
        }
    }
}
class Proof {
    constructor(proofIdentifier) {
        this.proofIdentifier = proofIdentifier;
    }
    isStringIdentifier() {
        return (typeof (this.proofIdentifier) === "string");
    }
    ;
    isNumericIdentifier() {
        return (typeof (this.proofIdentifier) === "number");
    }
    ;
    identifier() {
        return this.proofIdentifier;
    }
    toString() {
        switch (typeof (this.proofIdentifier)) {
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
    static fromProofString(proofString) {
        let matches = proofString.match(/Proof\((\".*\"|\d+u32)\)/);
        if (matches) {
            let matchedString = matches[1];
            if (matchedString.startsWith('"') && matchedString.endsWith('"')) {
                return new Proof(matchedString.slice(1, -1));
            }
            else {
                let proofId = parseInt(matchedString.replace('u32', ''));
                return new Proof(proofId);
            }
        }
        else {
            return undefined;
        }
    }
}
var IdValidatorMode;
(function (IdValidatorMode) {
    IdValidatorMode[IdValidatorMode["add"] = 0] = "add";
    IdValidatorMode[IdValidatorMode["remove"] = 1] = "remove";
    IdValidatorMode[IdValidatorMode["removeAllProofs"] = 2] = "removeAllProofs";
    IdValidatorMode[IdValidatorMode["removeAllBuckets"] = 3] = "removeAllBuckets";
    IdValidatorMode[IdValidatorMode["none"] = 4] = "none";
})(IdValidatorMode || (IdValidatorMode = {}));
/**
 * This class represents an ID validator that is used to provide static analysis of the transaction manifest to provide
 * errors when buckets or proofs are moved in an illegal way.
 */
class ManifestIdValidator {
    constructor(document) {
        this.availableBuckets = [];
        this.availableProofs = [];
        this.diagnostics = [];
        this.getBucketDefinition = (bucketContext) => {
            let start = bucketContext.start;
            let stop = bucketContext.stop;
            let range = new vscode_1.Range(start.line - 1, start.charPositionInLine, stop.line - 1, stop.charPositionInLine + 1);
            let bucketString = this.document.getText(range);
            let bucket = Bucket.fromBucketString(bucketString);
            return bucket ? { range, bucket } : undefined;
        };
        this.getProofDefinition = (proofContext) => {
            let start = proofContext.start;
            let stop = proofContext.stop;
            let range = new vscode_1.Range(start.line - 1, start.charPositionInLine, stop.line - 1, stop.charPositionInLine + 1);
            let proofString = this.document.getText(range);
            let proof = Proof.fromProofString(proofString);
            return proof ? { range, proof } : undefined;
        };
        this.addBucketDefinition = (bucketDefinition) => {
            let bucketDefIndex = this.availableBuckets.map((x) => x.bucket.toString()).indexOf(bucketDefinition.bucket.toString());
            if (bucketDefIndex === -1) {
                this.availableBuckets.push(bucketDefinition);
                return true;
            }
            else {
                return false;
            }
        };
        this.addProofDefinition = (proofDefinition) => {
            let proofDefIndex = this.availableProofs.map((x) => x.proof.toString()).indexOf(proofDefinition.proof.toString());
            if (proofDefIndex === -1) {
                this.availableProofs.push(proofDefinition);
                return true;
            }
            else {
                return false;
            }
        };
        this.removeBucket = (bucket) => {
            let bucketDefIndex = this.availableBuckets.map((x) => x.bucket.toString()).indexOf(bucket.toString());
            if (bucketDefIndex !== -1) {
                this.availableBuckets.splice(bucketDefIndex, 1);
                return true;
            }
            else {
                return false;
            }
        };
        this.removeProof = (proof) => {
            let proofDefIndex = this.availableProofs.map((x) => x.proof.toString()).indexOf(proof.toString());
            if (proofDefIndex !== -1) {
                this.availableProofs.splice(proofDefIndex, 1);
                return true;
            }
            else {
                return false;
            }
        };
        this.getDiagnostics = () => {
            console.log("Diagnostics are: {}", this.diagnostics);
            return this.diagnostics;
        };
        this.document = document;
    }
    /**
     * An ANTLR callback function called when the parser enters into a transaction manifest instruction.
     */
    enterManifestInstruction(context) {
        let diagnostics = [];
        let start = context._start;
        let end = context._stop;
        if (end) {
            let children = context.children;
            if (children) {
                let flattenedChildren = flattenTree(children);
                // Determine the current idValidatorMode depending on the instruction.
                let idValidatorMode;
                let instruction = flattenedChildren[0].toString();
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
                let bucketDefs = [];
                let proofDefs = [];
                for (var token of flattenedChildren) {
                    if (token instanceof TransactionManifestParser_1.BucketContext) {
                        let bucketDefinition = this.getBucketDefinition(token);
                        if (bucketDefinition) {
                            bucketDefs.push(bucketDefinition);
                        }
                    }
                    else if (token instanceof TransactionManifestParser_1.ProofContext) {
                        let proofDefinition = this.getProofDefinition(token);
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
                                diagnostics.push(new vscode_1.Diagnostic(bucketDef.range, "A Bucket was previously created with the same name or Id. To resolve this issue, consider changing the name of the Bucket to a unique name. ", vscode_1.DiagnosticSeverity.Error));
                            }
                        }
                        for (var proofDef of proofDefs) {
                            if (!this.addProofDefinition(proofDef)) {
                                diagnostics.push(new vscode_1.Diagnostic(proofDef.range, "A Proof was previously created with the same name or Id. To resolve this issue, consider changing the name of the Proof to a unique name. ", vscode_1.DiagnosticSeverity.Error));
                            }
                        }
                        break;
                    case IdValidatorMode.remove:
                        for (var bucketDef of bucketDefs) {
                            if (!this.removeBucket(bucketDef.bucket)) {
                                diagnostics.push(new vscode_1.Diagnostic(bucketDef.range, "No Bucket with the given name of Id exists. This either means that the Bucket has been moved as a result of a previous instruction or that it never existed.", vscode_1.DiagnosticSeverity.Error));
                            }
                        }
                        for (var proofDef of proofDefs) {
                            if (!this.removeProof(proofDef.proof)) {
                                diagnostics.push(new vscode_1.Diagnostic(proofDef.range, "No Proof with the given name of Id exists. This either means that the Proof has been moved as a result of a previous instruction or that it never existed.", vscode_1.DiagnosticSeverity.Error));
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
        }
        else {
            console.log("Was not able to find an end for an instruction beginning at:", start);
        }
        this.diagnostics.push(...diagnostics);
    }
}
exports.ManifestIdValidator = ManifestIdValidator;
function flattenTree(tree) {
    let flattened = [];
    for (var token of tree) {
        if ((token instanceof TransactionManifestParser_1.BucketContext) || (token instanceof TransactionManifestParser_1.ProofContext)) {
            flattened.push(token);
        }
        // @ts-ignore
        if (token.children) {
            // @ts-ignore
            flattened.push(...flattenTree(token.children));
        }
        else {
            flattened.push(token);
        }
    }
    return flattened;
}
//# sourceMappingURL=manifest_id_validator_listener.js.map