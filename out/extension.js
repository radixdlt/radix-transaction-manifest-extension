"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const diagnostic_providers_1 = require("./diagnostic_providers");
const vscode = require("vscode");
let diagnosticCollection = vscode.languages.createDiagnosticCollection("rtm");
async function activate(_) {
    // ================
    // Document Events
    // ================
    vscode.workspace.onDidSaveTextDocument((document) => {
        if (document.languageId === "rtm" && document.uri.scheme === "file") {
            updateDiagnostics(document);
        }
    });
    vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.languageId === "rtm" && document.uri.scheme === "file") {
            updateDiagnostics(document);
        }
    });
    vscode.workspace.onDidCloseTextDocument((document) => {
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
    const getDiagnostics = (document) => {
        let diagnostics = [];
        diagnostics.push(...(new diagnostic_providers_1.AddressesDiagnosticProvider(document).getDiagnostics()));
        diagnostics.push(...(new diagnostic_providers_1.NumbersDiagnosticsProvider(document).getDiagnostics()));
        return diagnostics;
    };
    /**
     * Updates the document diagnostics.
     */
    const updateDiagnostics = (document) => {
        let diagnostics = getDiagnostics(document);
        diagnosticCollection.set(document.uri, diagnostics);
    };
    /**
     * Removes all diagnostic information from a document.
     */
    const removeAllDiagnostics = (document) => {
        diagnosticCollection.set(document.uri, []);
    };
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map