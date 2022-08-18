"use strict";

import { AddressesDiagnosticProvider, NumbersDiagnosticsProvider, ParsingDiagnosticsProvider, LexerDiagnosticsProvider } from './diagnostic_providers';
import * as vscode from 'vscode';

let diagnosticCollection: vscode.DiagnosticCollection = vscode.languages.createDiagnosticCollection("rtm");

export async function activate(_: vscode.ExtensionContext) {

    // ================
    // Document Events
    // ================

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
    const getDiagnostics = (document: vscode.TextDocument): vscode.Diagnostic[] => {
        let diagnostics: vscode.Diagnostic[] = [];
        
        diagnostics.push(...(new AddressesDiagnosticProvider(document).getDiagnostics()));
        diagnostics.push(...(new NumbersDiagnosticsProvider(document).getDiagnostics()));
        diagnostics.push(...(new ParsingDiagnosticsProvider(document).getDiagnostics()));
        diagnostics.push(...(new LexerDiagnosticsProvider(document).getDiagnostics()));

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
    const removeAllDiagnostics  = (document: vscode.TextDocument) => {
        diagnosticCollection.set(document.uri, []);
    };
}