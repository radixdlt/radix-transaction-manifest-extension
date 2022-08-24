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
	BytesContext,
	NonFungibleAddressContext,
	NonFungibleIdContext,
	TransactionManifestParser,
} from "../antlr/TransactionManifestParser";
import { TransactionManifestListener } from "../antlr/TransactionManifestListener";
import { TransactionManifestLexer } from "../antlr/TransactionManifestLexer";
import { CharStream, CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

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

	enterNonFungibleId(context: NonFungibleIdContext) {
		let nonFungibleId: string = context
			.children![2].toString()
			.slice(1, -1);
		if (!this.isHex(nonFungibleId)) {
			this.addDiagnostic(
				context,
				"Invalid Hex: This NonFungibleId is not a valid hexadecimal number",
				vscode.DiagnosticSeverity.Error
			);
			return;
		}
	}

	enterNonFungibleAddress(context: NonFungibleAddressContext) {
		let nonFungibleAddress: string = context
			.children![2].toString()
			.slice(1, -1);
		let resourceAddress: string = nonFungibleAddress.slice(0, 27);
		let nonFungibleId: string = nonFungibleAddress.slice(
			27,
			nonFungibleAddress.length
		);

		if (!resourceAddress.startsWith("00") || !this.isHex(resourceAddress)) {
			this.addDiagnostic(
				context,
				"Invalid Resource Address: The resource address portion of the NonFungibleAddress does not seem to be correct.",
				vscode.DiagnosticSeverity.Error
			);
		}
		if (!this.isHex(nonFungibleId)) {
			this.addDiagnostic(
				context,
				"Invalid Hex: This NonFungibleId is not a valid hexadecimal number",
				vscode.DiagnosticSeverity.Error
			);
			return;
		}
	}

	enterBytes(context: BytesContext) {
		let bytes: string = context.children![2].toString().slice(1, -1);
		if (!this.isHex(bytes)) {
			this.addDiagnostic(
				context,
				"Invalid Hex: This Bytes is not a valid hexadecimal number",
				vscode.DiagnosticSeverity.Error
			);
			return;
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
