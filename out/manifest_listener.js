"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManifestInstructionListener = void 0;
const vscode_1 = require("vscode");
class ManifestInstructionListener {
    constructor() {
        this.manifestInstructionRanges = [];
    }
    enterManifestInstruction(context) {
        let start = context._start;
        let end = context._stop;
        // Since we will be using this to format the document, we wish to ignore all cases where there is no defined
        // end. The only thing we care about are defined ends.
        if (end) {
            let startLine = start.line;
            let startChar = start.charPositionInLine;
            let startPosition = new vscode_1.Position(startLine - 1, startChar);
            let endLine = end.line;
            let endChar = end.charPositionInLine;
            let endPosition = new vscode_1.Position(endLine - 1, endChar + 2);
            let range = new vscode_1.Range(startPosition, endPosition);
            this.manifestInstructionRanges.push(range);
        }
        else {
            console.log("Was not able to find an end for an instruction beginning at:", start);
        }
    }
}
exports.ManifestInstructionListener = ManifestInstructionListener;
//# sourceMappingURL=manifest_listener.js.map