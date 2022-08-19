"use strict";

import { TransactionManifestListener } from "../antlr/TransactionManifestListener";
import { ManifestInstructionContext, TransactionManifestParser } from "../antlr/TransactionManifestParser";
import { TransactionManifestLexer } from "../antlr/TransactionManifestLexer";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { CharStream, CharStreams, CommonTokenStream, ParserRuleContext, Token } from "antlr4ts";

import * as vscode from 'vscode';
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export default class BasicFormattingProvider implements vscode.DocumentFormattingEditProvider, TransactionManifestListener {
    instructions: ManifestInstructionContext[] = [];

    // ===================================================
    // Required `DocumentFormattingEditProvider` Methods.
    // ===================================================

    provideDocumentFormattingEdits(
        document: vscode.TextDocument, 
        _options: vscode.FormattingOptions, 
        _token: vscode.CancellationToken
    ): vscode.TextEdit[] {
        // Lex and Parse the document
        let charStream: CharStream = CharStreams.fromString(document.getText());
        let lexer: TransactionManifestLexer = new TransactionManifestLexer(charStream);
        let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
        let parser: TransactionManifestParser = new TransactionManifestParser(tokenStream);
        let tree = parser.manifest();
        ParseTreeWalker.DEFAULT.walk(this as ParseTreeListener, tree);
        
        // Analyze each instruction
        let textEdits: vscode.TextEdit[] = [];
        for (var instruction of this.instructions) {
            let instructionStrings: string[] = [];
            let finalInstruction: ParserRuleContext = instruction.children![0] as ParserRuleContext;

            for (var child of finalInstruction.children!) {
                if (child.text.trim() !== ';') {
                    instructionStrings.push(child.text);
                }
            }

            // Format the instruction
            let instructionRange: vscode.Range | undefined = this.getContextRange(instruction);
            if (instructionRange) {
                textEdits.push(new vscode.TextEdit(instructionRange, instructionStrings.join('\n\t') + ';' ));
            }
        }

        // Return the resultant text edits
        return textEdits;
    }

    // =========================================================
    // Method implementation from `TransactionManifestListener`
    // =========================================================

    enterManifestInstruction(context: ManifestInstructionContext) {
        this.instructions.push(context);
    }

    // ==================================
    // Helper Methods and Internal Logic
    // ==================================

    private getContextRange(context: ParserRuleContext): vscode.Range | undefined {
        let start: Token = context._start;
        let stop: Token | undefined = context._stop;

        if (stop) {
            return new vscode.Range(
                start.line - 1,
                start.charPositionInLine,
                stop.line - 1,
                stop.charPositionInLine + 1,
            );
        } else {
            return undefined;
        }
    }
}