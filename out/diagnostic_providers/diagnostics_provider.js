"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
/**
 * The abstract class defining the structure of a `DiagnosticsProvider`.
 */
class DiagnosticsProvider {
    constructor(document) {
        /**
         * An array of diagnostics where all diagnostics from an operation are collected and go to.
         */
        this.diagnostics = [];
        this.document = document;
    }
    /**
     * Adds a new diagnostic.
     *
     * @param context The token that a diagnostic is being added for. This is where the range is obtained from.
     * @param message The message that the diagnostic will have.
     * @param severity The severity of the diagnostic.
     */
    addDiagnostic(context, message, severity) {
        // Translate the context into a range
        let start = context._start;
        let stop = context._stop;
        if (stop) {
            let range = new vscode.Range(start.line - 1, start.charPositionInLine, stop.line - 1, stop.charPositionInLine);
            this.diagnostics.push(new vscode.Diagnostic(range, message, severity));
        }
        else {
            console.error(`Attempted to add a diagnostic for the token ${context} but no stop could be found`);
        }
    }
    /**
     * A method used to get the diagnostic information from a diagnostics operation.
     */
    getDiagnostics() {
        this.prepareDiagnostics();
        return this.diagnostics;
    }
    ;
}
exports.default = DiagnosticsProvider;
//# sourceMappingURL=diagnostics_provider.js.map