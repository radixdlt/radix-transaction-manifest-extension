"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionManifestParser_1 = require("../antlr/TransactionManifestParser");
const TransactionManifestLexer_1 = require("../antlr/TransactionManifestLexer");
const antlr4ts_1 = require("antlr4ts");
const ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
const diagnostics_provider_1 = require("./diagnostics_provider");
const vscode = require("vscode");
/**
 * A diagnostics provider with general knowledge of the rules of manifest files. It can provide errors in the following
 * cases:
 *
 * 1. When the `NonFungibleId` is a not a valid hex number.
 * 2. When the `NonFungibleAddress` has an invalid format.
 */
class GeneralDiagnosticsProvider extends diagnostics_provider_1.default {
    constructor() {
        super(...arguments);
        this.encounteredNetworkSpecifiers = [];
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
    enterNonFungibleId(context) {
        let nonFungibleId = context.children[2].toString().slice(1, -1);
        if (!this.isHex(nonFungibleId)) {
            this.addDiagnostic(context, "Invalid Hex: This NonFungibleId is not a valid hexadecimal number", vscode.DiagnosticSeverity.Error);
            return;
        }
    }
    enterNonFungibleAddress(context) {
        let nonFungibleAddress = context.children[2].toString().slice(1, -1);
        let resourceAddress = nonFungibleAddress.slice(0, 27);
        let nonFungibleId = nonFungibleAddress.slice(27, nonFungibleAddress.length);
        if (!resourceAddress.startsWith('00') || !this.isHex(resourceAddress)) {
            this.addDiagnostic(context, "Invalid Resource Address: The resource address portion of the NonFungibleAddress does not seem to be correct.", vscode.DiagnosticSeverity.Error);
        }
        if (!this.isHex(nonFungibleId)) {
            this.addDiagnostic(context, "Invalid Hex: This NonFungibleId is not a valid hexadecimal number", vscode.DiagnosticSeverity.Error);
            return;
        }
    }
    enterBytes(context) {
        let bytes = context.children[2].toString().slice(1, -1);
        if (!this.isHex(bytes)) {
            this.addDiagnostic(context, "Invalid Hex: This Bytes is not a valid hexadecimal number", vscode.DiagnosticSeverity.Error);
            return;
        }
    }
    // ==================================
    // Helper Methods and Internal Logic
    // ==================================
    /**
     * Checks if a string is a hexadecimal string.
     */
    isHex(string) {
        if (string.length % 2 === 0 && string.match(/([A-Fa-f0-9]+)/g)) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = GeneralDiagnosticsProvider;
//# sourceMappingURL=general_diagnostics_provider.js.map