"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionManifestParser_1 = require("../antlr/TransactionManifestParser");
const antlr4ts_1 = require("antlr4ts");
const ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
const diagnostics_provider_1 = require("./diagnostics_provider");
const vscode = require("vscode");
const TransactionManifestLexer_1 = require("../antlr/TransactionManifestLexer");
/**
 * A diagnostics provider that analyzes the movements of buckets and proofs throughout the manifest file.
 */
class IdValidationDiagnosticsProvider extends diagnostics_provider_1.default {
    constructor() {
        super(...arguments);
        this.scryptoObjectDefinitions = [];
    }
    // =======================================
    // Required `DiagnosticProvider` Methods.
    // =======================================
    prepareDiagnostics() {
        let charStream = antlr4ts_1.CharStreams.fromString(this.document.getText());
        let lexer = new TransactionManifestLexer_1.TransactionManifestLexer(charStream);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new TransactionManifestParser_1.TransactionManifestParser(tokenStream);
        let tree = parser.manifest();
        ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(this, tree);
    }
    // =========================================================
    // Method implementation from `TransactionManifestListener`
    // =========================================================
    enterTakeFromWorktop(context) {
        this.addNewObject(context.children[context.children.length - 2]);
    }
    enterTakeFromWorktopByAmount(context) {
        this.addNewObject(context.children[context.children.length - 2]);
    }
    enterTakeFromWorktopByIds(context) {
        this.addNewObject(context.children[context.children.length - 2]);
    }
    enterReturnToWorktop(context) {
        this.removeObject(context.children[context.children.length - 2]);
    }
    enterPopFromAuthZone(context) {
        this.addNewObject(context.children[context.children.length - 2]);
    }
    enterPushToAuthZone(context) {
        this.removeObject(context.children[context.children.length - 2]);
    }
    enterCreateProofFromAuthZone(context) {
        this.addNewObject(context.children[context.children.length - 2]);
    }
    enterCreateProofFromAuthZoneByAmount(context) {
        this.addNewObject(context.children[context.children.length - 2]);
    }
    enterCreateProofFromAuthZoneByIds(context) {
        this.addNewObject(context.children[context.children.length - 2]);
    }
    enterCreateProofFromBucket(context) {
        let bucketContext = context.children[context.children.length - 3];
        let proofContext = context.children[context.children.length - 2];
        this.ensureExistence(bucketContext);
        this.addNewObject(proofContext);
    }
    enterCloneProof(context) {
        let originalProofContext = context.children[context.children.length - 3];
        let secondProofContext = context.children[context.children.length - 2];
        this.ensureExistence(originalProofContext);
        this.addNewObject(secondProofContext);
    }
    enterDropProof(context) {
        this.removeObject(context.children[context.children.length - 2]);
    }
    enterDropAllProofs(_) {
        for (var proof of this.getProofs()) {
            this.removeObject(proof);
        }
    }
    enterCallMethodWithAllResources(_) {
        for (var bucket of this.getBuckets()) {
            this.removeObject(bucket);
        }
    }
    enterCallMethod(context) {
        this.handleCallMethodOrFunction(context);
    }
    enterCallFunction(context) {
        this.handleCallMethodOrFunction(context);
    }
    // ==================================
    // Helper Methods and Internal Logic
    // ==================================
    /**
     * Gets all of the `ProofContext`s that are currently available.
     */
    getProofs() {
        return this.scryptoObjectDefinitions.filter((x) => x[0].getType() === ScryptoObjectType.proof).map((x) => x[1]);
    }
    /**
     * Gets all of the `BucketContext`s that are currently available.
     */
    getBuckets() {
        return this.scryptoObjectDefinitions.filter((x) => x[0].getType() === ScryptoObjectType.bucket).map((x) => x[1]);
    }
    /**
     * Adds a new object. If an object with the same identifier is there, then this adds a diagnostic.
     */
    addNewObject(context) {
        if (this.containsObject(context)) {
            this.addDiagnostic(context, "Repeated Object: A previous object with the same identifier already exists.", vscode.DiagnosticSeverity.Error);
            return;
        }
        this.scryptoObjectDefinitions.push([ScryptoObject.fromContext(context), context]);
    }
    /**
     * Removes an object if it exists. If not, then a diagnostic is added
     */
    removeObject(context) {
        let currentObject = ScryptoObject.fromContext(context);
        let index = this.scryptoObjectDefinitions.map((x) => x[0].isEqual(currentObject)).indexOf(true);
        if (index === -1) {
            this.addDiagnostic(context, "Object Doesn't Exist: No object can be found that matches this identifier.", vscode.DiagnosticSeverity.Error);
            return;
        }
        this.scryptoObjectDefinitions.splice(index, 1);
    }
    /**
     * Ensures that an object with a given context exists. If not, then a diagnostic message is added.
     */
    ensureExistence(context) {
        if (!this.containsObject(context)) {
            this.addDiagnostic(context, "Object Doesn't Exist: No object can be found that matches this identifier.", vscode.DiagnosticSeverity.Error);
            return;
        }
    }
    /**
     * Checks if an object exists that matches the identifier and type or not.
     */
    containsObject(context) {
        let currentObject = ScryptoObject.fromContext(context);
        return this.scryptoObjectDefinitions.map((x) => x[0]).filter((x) => x.isEqual(currentObject)).length !== 0;
    }
    /**
     * Handles the removal all of the buckets and proofs in call method and functions instructions.
     */
    handleCallMethodOrFunction(context) {
        let children = context.children;
        let flattenedChildren = flattenTree(children);
        for (var child of flattenedChildren) {
            if (child instanceof TransactionManifestParser_1.BucketContext || child instanceof TransactionManifestParser_1.ProofContext) {
                this.removeObject(child);
            }
        }
    }
}
exports.default = IdValidationDiagnosticsProvider;
/**
 * Represents the type of the Scrypto object the ID Validator is operating on
 */
var ScryptoObjectType;
(function (ScryptoObjectType) {
    ScryptoObjectType[ScryptoObjectType["bucket"] = 0] = "bucket";
    ScryptoObjectType[ScryptoObjectType["proof"] = 1] = "proof";
})(ScryptoObjectType || (ScryptoObjectType = {}));
/**
 * Represents a ScryptoObjet which may either be a bucket or a proof.
 */
class ScryptoObject {
    constructor(identifier, type) {
        this.identifier = identifier;
        this.type = type;
    }
    static fromContext(context) {
        let type;
        if (context instanceof TransactionManifestParser_1.BucketContext) {
            type = ScryptoObjectType.bucket;
        }
        else if (context instanceof TransactionManifestParser_1.ProofContext) {
            type = ScryptoObjectType.proof;
        }
        else {
            throw new Error("Should never get here");
        }
        let identifier;
        let objectIdentifier = context.children[2].toString();
        if (objectIdentifier.includes('"')) {
            identifier = objectIdentifier.slice(1, -1);
        }
        else {
            identifier = parseInt(objectIdentifier.split('u32')[0]);
        }
        return new ScryptoObject(identifier, type);
    }
    toString() {
        let type;
        switch (this.type) {
            case ScryptoObjectType.bucket:
                type = "Bucket";
                break;
            case ScryptoObjectType.proof:
                type = "Proof";
                break;
            default:
                throw new Error("Should never be able to get here");
                break;
        }
        let identifier;
        if (typeof this.identifier === "number") {
            identifier = `${this.identifier}u32`;
        }
        else if (typeof this.identifier === "string") {
            identifier = `"${this.identifier}"`;
        }
        else {
            throw new Error("Should never be able to get here");
        }
        return `${type}(${identifier})`;
    }
    isEqual(other) {
        return this.identifier === other.identifier && this.type === other.type;
    }
    getType() {
        return this.type;
    }
    getIdentifier() {
        return this.identifier;
    }
}
function flattenTree(tree) {
    let flattened = [];
    for (var token of tree) {
        if (token instanceof TransactionManifestParser_1.BucketContext || token instanceof TransactionManifestParser_1.ProofContext) {
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
//# sourceMappingURL=id_validation_diagnostics_provider.js.map