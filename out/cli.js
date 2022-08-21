'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeShell = void 0;
const cp = require("child_process");
function executeShell(...args) {
    return new Promise((resolve, reject) => {
        cp.exec(args.join(' '), (err, out) => {
            return err ? reject(err) : resolve(out);
        });
    });
}
exports.executeShell = executeShell;
//# sourceMappingURL=cli.js.map