'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTerminal = exports.executeShell = void 0;
const cp = require("child_process");
const vscode = require("vscode");
function executeShell(...args) {
    return new Promise((resolve, reject) => {
        cp.exec(args.join(' '), (err, out) => {
            return err ? reject(err) : resolve(out);
        });
    });
}
exports.executeShell = executeShell;
function getTerminal(terminalName) {
    let terminals = vscode.window.terminals;
    let matchingNameIndex = terminals
        .map((x) => x.name === terminalName)
        .indexOf(true);
    if (matchingNameIndex !== -1) {
        return terminals[matchingNameIndex];
    }
    else {
        return undefined;
    }
}
exports.getTerminal = getTerminal;
//# sourceMappingURL=utils.js.map