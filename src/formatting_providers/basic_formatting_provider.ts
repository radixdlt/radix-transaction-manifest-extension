// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at

//   http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

"use strict";

import { TransactionManifestListener } from "../antlr/TransactionManifestListener";
import {
	ManifestInstructionContext,
	TransactionManifestParser,
} from "../antlr/TransactionManifestParser";
import { TransactionManifestLexer } from "../antlr/TransactionManifestLexer";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import {
	CharStream,
	CharStreams,
	CommonTokenStream,
	ParserRuleContext,
	Token,
} from "antlr4ts";

import * as vscode from "vscode";

export default class BasicFormattingProvider
	implements
		vscode.DocumentFormattingEditProvider,
		TransactionManifestListener
{
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
		let lexer: TransactionManifestLexer = new TransactionManifestLexer(
			charStream
		);
		let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
		let parser: TransactionManifestParser = new TransactionManifestParser(
			tokenStream
		);
		let tree = parser.manifest();
		ParseTreeWalker.DEFAULT.walk(this as ParseTreeListener, tree);

		// Analyze each instruction
		let textEdits: vscode.TextEdit[] = [];
		for (var instruction of this.instructions) {
			let instructionStrings: string[] = [];
			let finalInstruction: ParserRuleContext =
				instruction.children![0] as ParserRuleContext;

			for (var child of finalInstruction.children!) {
				if (child.text.trim() !== ";") {
					instructionStrings.push(child.text);
				}
			}

			// Format the instruction
			let instructionRange: vscode.Range | undefined =
				this.getContextRange(instruction);
			if (instructionRange) {
				textEdits.push(
					new vscode.TextEdit(
						instructionRange,
						instructionStrings.join("\n\t") + ";"
					)
				);
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

	private getContextRange(
		context: ParserRuleContext
	): vscode.Range | undefined {
		let start: Token = context._start;
		let stop: Token | undefined = context._stop;

		if (stop) {
			return new vscode.Range(
				start.line - 1,
				start.charPositionInLine,
				stop.line - 1,
				stop.charPositionInLine + 1
			);
		} else {
			return undefined;
		}
	}
}
