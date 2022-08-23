"use strict";

import {
	ANTLRErrorListener,
	CharStream,
	CharStreams,
	CommonToken,
	CommonTokenStream,
	ParserRuleContext,
	RecognitionException,
	Recognizer,
} from "antlr4ts";
import { TransactionManifestLexer } from "../antlr/TransactionManifestLexer";
import { TransactionManifestParser } from "../antlr/TransactionManifestParser";

import DiagnosticsProvider from "./diagnostics_provider";
import * as vscode from "vscode";

/**
 * Provides diagnostics for parsing errors.
 */
export default class ParsingDiagnosticsProvider
	extends DiagnosticsProvider
	implements ANTLRErrorListener<any>
{
	// =======================================
	// Required `DiagnosticProvider` Methods.
	// =======================================

	protected prepareDiagnostics(): void {
		let charStream: CharStream = CharStreams.fromString(
			this.document.getText()
		);
		let lexer: TransactionManifestLexer = new TransactionManifestLexer(
			charStream
		);
		let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
		let parser: TransactionManifestParser = new TransactionManifestParser(
			tokenStream
		);
		parser.removeErrorListeners();
		parser.addErrorListener(this as ANTLRErrorListener<any>);
		parser.manifest();
	}

	// ================================================
	// Method implementation from `ANTLRErrorListener`
	// ================================================

	syntaxError(
		_recognizer: Recognizer<any, any>,
		offendingSymbol: any,
		line: number,
		_charPositionInLine: number,
		message: string,
		_e: RecognitionException | undefined
	): void {
		let offending: CommonToken = offendingSymbol;
		let offendingTokenLength: number =
			offending.stopIndex - offending.startIndex;
		this.diagnostics.push(
			new vscode.Diagnostic(
				new vscode.Range(
					line - 1,
					offending.charPositionInLine,
					line - 1,
					offending.charPositionInLine + offendingTokenLength + 1
				),
				`Parsing Error: ${message}`,
				vscode.DiagnosticSeverity.Error
			)
		);
	}

	// ==================================
	// Helper Methods and Internal Logic
	// ==================================
}
