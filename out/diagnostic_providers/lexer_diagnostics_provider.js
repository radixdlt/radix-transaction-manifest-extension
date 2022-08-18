"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const TransactionManifestLexer_1 = require("../antlr/TransactionManifestLexer");
const TransactionManifestParser_1 = require("../antlr/TransactionManifestParser");
const diagnostics_provider_1 = require("./diagnostics_provider");
const vscode = require("vscode");
/**
 * Provides diagnostics for lexing errors.
 */
class LexerDiagnosticsProvider extends diagnostics_provider_1.default {
    // =======================================
    // Required `DiagnosticProvider` Methods.
    // =======================================
    prepareDiagnostics() {
        let charStream = antlr4ts_1.CharStreams.fromString(this.document.getText());
        let lexer = new TransactionManifestLexer_1.TransactionManifestLexer(charStream);
        lexer.removeErrorListeners();
        lexer.addErrorListener(this);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new TransactionManifestParser_1.TransactionManifestParser(tokenStream);
        parser.manifest();
    }
    // ================================================
    // Method implementation from `ANTLRErrorListener`
    // ================================================
    syntaxError(_recognizer, offendingSymbol, line, _charPositionInLine, message, _e) {
        let offending = offendingSymbol;
        let offendingTokenLength = offending.stopIndex - offending.startIndex;
        this.diagnostics.push(new vscode.Diagnostic(new vscode.Range(line - 1, offending.charPositionInLine, line - 1, offending.charPositionInLine + offendingTokenLength + 1), `Lexer Error: ${message}`, vscode.DiagnosticSeverity.Error));
    }
}
exports.default = LexerDiagnosticsProvider;
//# sourceMappingURL=lexer_diagnostics_provider.js.map