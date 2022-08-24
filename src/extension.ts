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
	AddressesDiagnosticProvider,
	NumbersDiagnosticsProvider,
	ParsingDiagnosticsProvider,
	LexerDiagnosticsProvider,
	GeneralDiagnosticsProvider,
	IdValidationDiagnosticsProvider,
	DiagnosticsProvider,
} from "./diagnostic_providers";
import { BasicFormattingProvider } from "./formatting_providers";
import * as vscode from "vscode";
import { BasicHoverProvider } from "./hover_providers";
import { getTerminal } from "./utils";

let diagnosticCollection: vscode.DiagnosticCollection =
	vscode.languages.createDiagnosticCollection("rtm");

export async function activate(context: vscode.ExtensionContext) {
	// ================
	// Document Events
	// ================

	vscode.workspace.onDidChangeTextDocument(
		(event: vscode.TextDocumentChangeEvent) => {
			if (
				event.document.languageId === "rtm" &&
				event.document.uri.scheme === "file"
			) {
				updateDiagnostics(event.document);
			}
		}
	);

	vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
		if (document.languageId === "rtm" && document.uri.scheme === "file") {
			updateDiagnostics(document);
		}
	});

	vscode.workspace.onDidOpenTextDocument((document: vscode.TextDocument) => {
		if (document.languageId === "rtm" && document.uri.scheme === "file") {
			updateDiagnostics(document);
		}
	});

	vscode.workspace.onDidCloseTextDocument((document: vscode.TextDocument) => {
		if (document.languageId === "rtm" && document.uri.scheme === "file") {
			removeAllDiagnostics(document);
		}
	});

	// ======================
	// Diagnostics Providers
	// ======================

	/**
	 * Gets document diagnostics from the available diagnostic providers.
	 */
	const getDiagnostics = (
		document: vscode.TextDocument
	): vscode.Diagnostic[] => {
		let diagnostics: vscode.Diagnostic[] = [];

		// Only add the diagnostic provider that the configuration allows for.
		let diagnosticConfigClassMapping: [string, typeof DiagnosticsProvider][] = [
			['enableIdValidatorDiagnostics', IdValidationDiagnosticsProvider],
			['enableAddressDiagnostics', AddressesDiagnosticProvider],
			['enableGeneralDiagnostics', GeneralDiagnosticsProvider],
			['enableNumbersDiagnostics', NumbersDiagnosticsProvider],
			['enableParserDiagnostics', ParsingDiagnosticsProvider],
			['enableLexerDiagnostics', LexerDiagnosticsProvider],
		];

		let diagnosticsConfiguration: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('rtm.diagnostics');
		for (const [configurationName, diagnosticsProvider] of diagnosticConfigClassMapping) {
			if (diagnosticsConfiguration.get(configurationName)) {
				// @ts-ignore
				diagnostics.push(...new diagnosticsProvider(document).getDiagnostics());
			}
		}

		return diagnostics;
	};

	/**
	 * Updates the document diagnostics.
	 */
	const updateDiagnostics = (document: vscode.TextDocument) => {
		let diagnostics: vscode.Diagnostic[] = getDiagnostics(document);
		diagnosticCollection.set(document.uri, diagnostics);
	};

	/**
	 * Removes all diagnostic information from a document.
	 */
	const removeAllDiagnostics = (document: vscode.TextDocument) => {
		diagnosticCollection.set(document.uri, []);
	};

	// =====================
	// Formatting Providers
	// =====================

	vscode.languages.registerDocumentFormattingEditProvider(
		"rtm",
		new BasicFormattingProvider()
	);

	// =====================
	// Formatting Providers
	// =====================

	vscode.languages.registerHoverProvider("rtm", new BasicHoverProvider());

	// ===================================
	// Custom Extension-provided Commands
	// ===================================

	const run = vscode.commands.registerCommand("extension.runManifest", () => {
		let filePath: string | undefined =
			vscode.window.activeTextEditor?.document.fileName;
		if (filePath) {
			let currentTerminal: vscode.Terminal | undefined =
				getTerminal("Manifest Run");
			if (currentTerminal) {
				currentTerminal.dispose();
			}

			let terminal: vscode.Terminal =
				vscode.window.createTerminal("Manifest Run");
			terminal.show(true);
			terminal.sendText(`resim run "${filePath}"`);
		} else {
			vscode.window.showErrorMessage("File path is undefined");
		}
	});

	// ============
	// Disposables
	// ============

	context.subscriptions.push(run);
}
