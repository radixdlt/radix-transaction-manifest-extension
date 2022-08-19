"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionManifestParser_1 = require("../antlr/TransactionManifestParser");
const TransactionManifestLexer_1 = require("../antlr/TransactionManifestLexer");
const ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
const antlr4ts_1 = require("antlr4ts");
const vscode = require("vscode");
class BasicFormattingProvider {
    constructor() {
        this.instructions = [];
    }
    // ===================================================
    // Required `DocumentFormattingEditProvider` Methods.
    // ===================================================
    provideDocumentFormattingEdits(document, _options, _token) {
        // Lex and Parse the document
        let charStream = antlr4ts_1.CharStreams.fromString(document.getText());
        let lexer = new TransactionManifestLexer_1.TransactionManifestLexer(charStream);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new TransactionManifestParser_1.TransactionManifestParser(tokenStream);
        let tree = parser.manifest();
        ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(this, tree);
        // Analyze each instruction
        let textEdits = [];
        for (var instruction of this.instructions) {
            let instructionStrings = [];
            let finalInstruction = instruction.children[0];
            for (var child of finalInstruction.children) {
                if (child.text.trim() !== ';') {
                    instructionStrings.push(child.text);
                }
            }
            // Format the instruction
            let instructionRange = this.getContextRange(instruction);
            if (instructionRange) {
                textEdits.push(new vscode.TextEdit(instructionRange, instructionStrings.join('\n\t') + ';'));
            }
        }
        // Return the resultant text edits
        return textEdits;
    }
    // =========================================================
    // Method implementation from `TransactionManifestListener`
    // =========================================================
    enterManifestInstruction(context) {
        this.instructions.push(context);
    }
    // ==================================
    // Helper Methods and Internal Logic
    // ==================================
    getContextRange(context) {
        let start = context._start;
        let stop = context._stop;
        if (stop) {
            return new vscode.Range(start.line - 1, start.charPositionInLine, stop.line - 1, stop.charPositionInLine + 1);
        }
        else {
            return undefined;
        }
    }
}
exports.default = BasicFormattingProvider;
//# sourceMappingURL=basic_formatting_provider.js.map