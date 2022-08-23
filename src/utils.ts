"use strict";

import * as cp from "child_process";
import * as vscode from "vscode";

export function executeShell(...args: string[]): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		cp.exec(args.join(" "), (err, out) => {
			return err ? reject(err) : resolve(out);
		});
	});
}

export function getTerminal(terminalName: string): vscode.Terminal | undefined {
	let terminals: readonly vscode.Terminal[] = vscode.window.terminals;
	let matchingNameIndex: number = terminals
		.map((x) => x.name === terminalName)
		.indexOf(true);

	if (matchingNameIndex !== -1) {
		return terminals[matchingNameIndex];
	} else {
		return undefined;
	}
}
