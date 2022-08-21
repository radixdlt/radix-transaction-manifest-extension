"use strict";

import { AddressesDiagnosticProvider, NumbersDiagnosticsProvider, ParsingDiagnosticsProvider, LexerDiagnosticsProvider, GeneralDiagnosticsProvider, IdValidationDiagnosticsProvider } from './diagnostic_providers';
import { BasicFormattingProvider } from './formatting_providers';
import * as vscode from 'vscode';
import { BasicHoverProvider } from './hover_providers';

let diagnosticCollection: vscode.DiagnosticCollection = vscode.languages.createDiagnosticCollection("rtm");

export async function activate(_: vscode.ExtensionContext) {

    // ================
    // Document Events
    // ================

    vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
        if (event.document.languageId === "rtm" && event.document.uri.scheme === "file") {
			updateDiagnostics(event.document);
		}
    });

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
        diagnostics.push(...(new GeneralDiagnosticsProvider(document).getDiagnostics()));
        diagnostics.push(...(new IdValidationDiagnosticsProvider(document).getDiagnostics()));

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

    // =====================
    // Formatting Providers 
    // =====================

    vscode.languages.registerDocumentFormattingEditProvider("rtm", new BasicFormattingProvider());

    // =====================
    // Formatting Providers 
    // =====================

    vscode.languages.registerHoverProvider("rtm", new BasicHoverProvider());
}