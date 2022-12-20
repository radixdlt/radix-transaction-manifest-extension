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

import {
	BlobContext,
	ExpressionContext,
	NonFungibleAddressContext,
	NonFungibleIdContext,
	TransactionManifestParser,
} from "../antlr/TransactionManifestParser";
import { TransactionManifestListener } from "../antlr/TransactionManifestListener";
import { TransactionManifestLexer } from "../antlr/TransactionManifestLexer";
import { CharStream, CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { Buffer } from "buffer";

import DiagnosticsProvider from "./diagnostics_provider";
import * as vscode from "vscode";

/**
 * A diagnostics provider with general knowledge of the rules of manifest files. It can provide errors in the following
 * cases:
 *
 * 1. When the `NonFungibleId` is a not a valid hex number.
 * 2. When the `NonFungibleAddress` has an invalid format.
 */
export default class GeneralDiagnosticsProvider
	extends DiagnosticsProvider
	implements TransactionManifestListener
{
	encounteredNetworkSpecifiers: string[] = [];

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
		let tree = parser.manifest();
		ParseTreeWalker.DEFAULT.walk(this as ParseTreeListener, tree);
	}

	// =========================================================
	// Method implementation from `TransactionManifestListener`
	// =========================================================

	enterBlob(context: BlobContext) {
		let blobHash: string = context.children![2].toString().slice(1, -1);
		if (!this.isHex(blobHash)) {
			this.addDiagnostic(
				context,
				"Invalid Hex: This blob is not a valid hexadecimal number"
			);
			return;
		}
		if (blobHash.length !== 64) {
			this.addDiagnostic(
				context,
				`Invalid Hash: In the manifest, blobs contain hashes of the blobs that they reference. A valid Sha256 hash is 64 characters long, however, this is ${blobHash.length} characters long.`
			);
		}
	}

	enterExpression(context: ExpressionContext) {
		let expressionString: string = context.text.split('"')[1];
		if (
			!["ENTIRE_WORKTOP", "ENTIRE_AUTH_ZONE"].includes(expressionString)
		) {
			this.addDiagnostic(
				context,
				"Invalid Expression: Invalid expression, the only two valid expressions are: ENTIRE_WORKTOP and ENTIRE_AUTH_ZONE"
			);
		}
	}

	// ==================================
	// Helper Methods and Internal Logic
	// ==================================

	/**
	 * Checks if a string is a hexadecimal string.
	 */
	private isHex(string: string): boolean {
		if (string.length % 2 === 0 && string.match(/([A-Fa-f0-9]+)/g)) {
			return true;
		} else {
			return false;
		}
	}
}
