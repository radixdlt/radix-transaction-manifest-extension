"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManifestErrorListener = void 0;
const vscode_1 = require("vscode");
class ManifestErrorListener {
    constructor() {
        this.errors = [];
    }
    /**
     * This method is called when an error is encountered. It is called with all of the information about that error
     */
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, message, e) {
        let offending = offendingSymbol;
        let offendingTokenLength = offending.stopIndex - offending.startIndex;
        this.errors.push({
            range: new vscode_1.Range(offending.line - 1, offending.charPositionInLine, offending.line - 1, offending.charPositionInLine + offendingTokenLength + 1),
            message,
        });
    }
    getErrors() {
        return this.errors;
    }
}
exports.ManifestErrorListener = ManifestErrorListener;
//# sourceMappingURL=error_listener.js.map