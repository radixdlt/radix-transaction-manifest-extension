"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const diagnostic_providers_1 = require("./diagnostic_providers");
const formatting_providers_1 = require("./formatting_providers");
const vscode = require("vscode");
const hover_providers_1 = require("./hover_providers");
const utils_1 = require("./utils");
let diagnosticCollection = vscode.languages.createDiagnosticCollection("rtm");
async function activate(context) {
    // ================
    // Document Events
    // ================
    vscode.workspace.onDidChangeTextDocument((event) => {
        if (event.document.languageId === "rtm" && event.document.uri.scheme === "file") {
            updateDiagnostics(event.document);
        }
    });
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
        diagnostics.push(...(new diagnostic_providers_1.ParsingDiagnosticsProvider(document).getDiagnostics()));
        diagnostics.push(...(new diagnostic_providers_1.LexerDiagnosticsProvider(document).getDiagnostics()));
        diagnostics.push(...(new diagnostic_providers_1.GeneralDiagnosticsProvider(document).getDiagnostics()));
        diagnostics.push(...(new diagnostic_providers_1.IdValidationDiagnosticsProvider(document).getDiagnostics()));
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
    // =====================
    // Formatting Providers 
    // =====================
    vscode.languages.registerDocumentFormattingEditProvider("rtm", new formatting_providers_1.BasicFormattingProvider());
    // =====================
    // Formatting Providers 
    // =====================
    vscode.languages.registerHoverProvider("rtm", new hover_providers_1.BasicHoverProvider());
    // ===================================
    // Custom Extension-provided Commands
    // ===================================
    const run = vscode.commands.registerCommand("extension.runManifest", () => {
        let filePath = vscode.window.activeTextEditor?.document.fileName;
        if (filePath) {
            let currentTerminal = (0, utils_1.getTerminal)("Manifest Run");
            if (currentTerminal) {
                currentTerminal.dispose();
            }
            let terminal = vscode.window.createTerminal('Manifest Run');
            terminal.show(true);
            terminal.sendText(`resim run "${filePath}"`);
        }
        else {
            vscode.window.showErrorMessage("File path is undefined");
        }
    });
    // ============
    // Disposables
    // ============
    context.subscriptions.push(run);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map