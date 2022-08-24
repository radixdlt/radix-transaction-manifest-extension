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

import { ParserRuleContext, Token } from "antlr4ts";
import * as vscode from "vscode";

/**
 * The abstract class defining the structure of a `DiagnosticsProvider`.
 */
export default abstract class DiagnosticsProvider {
	/**
	 * The document that the diagnostic provider will operate on and read information from.
	 */
	protected document: vscode.TextDocument;

	/**
	 * An array of diagnostics where all diagnostics from an operation are collected and go to.
	 */
	protected diagnostics: vscode.Diagnostic[] = [];

	constructor(document: vscode.TextDocument) {
		this.document = document;
	}

	/**
	 * A method called to prepare the diagnostic information of a document. When this method is called, the diagnostics
	 * provider goes through the document to find the different errors it is equipped to find.
	 */
	protected abstract prepareDiagnostics(): void;

	/**
	 * Adds a new diagnostic.
	 *
	 * @param context The token that a diagnostic is being added for. This is where the range is obtained from.
	 * @param message The message that the diagnostic will have.
	 * @param severity The severity of the diagnostic.
	 */
	protected addDiagnostic(
		context: ParserRuleContext,
		message: string,
		severity: vscode.DiagnosticSeverity | undefined
	): void {
		// Translate the context into a range
		let start: Token = context._start;
		let stop: Token | undefined = context._stop;

		if (stop) {
			let range: vscode.Range = new vscode.Range(
				start.line - 1,
				start.charPositionInLine,
				stop.line - 1,
				stop.charPositionInLine + 1
			);
			this.diagnostics.push(
				new vscode.Diagnostic(range, message, severity)
			);
		} else {
			console.error(
				`Attempted to add a diagnostic for the token ${context} but no stop could be found`
			);
		}
	}

	/**
	 * A method used to get the diagnostic information from a diagnostics operation.
	 */
	getDiagnostics(): vscode.Diagnostic[] {
		this.prepareDiagnostics();
		return this.diagnostics;
	}
}
