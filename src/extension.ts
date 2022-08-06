'use strict';

import * as vscode from 'vscode';
import { workspace, Disposable, ExtensionContext } from 'vscode';
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
  } from 'vscode-languageclient/node';
import { Trace } from 'vscode-jsonrpc';

export function activate(context: ExtensionContext) {
	/// A command which runs the currently open transaction manifest
	const run = vscode.commands.registerCommand('extension.runManifest', () => {
		let filePath: string | undefined = vscode.window.activeTextEditor?.document.fileName;
		if (filePath === undefined) {
			console.log("file path is undefined");
			vscode.window.showErrorMessage("File path is undefined");
		} else {
			// Try to find a terminal with a matching name to run the manifest in, if we can not find any, then a new 
			// terminal is created. This is done to avoid cluttering the terminal if the user decides to press the 
			// button (or perform the command) multiple times. 
			const terminalName: string = "Run Manifest";
			let terminals: readonly vscode.Terminal[] = vscode.window.terminals;
			let matchingNameIndex: number = terminals.map((x) => x.name === terminalName).indexOf(true);

			let terminal: vscode.Terminal; 
			if (matchingNameIndex === -1) {
				terminal = vscode.window.createTerminal(terminalName);
			} else {
				terminal = terminals[matchingNameIndex];
			}

			terminal.show(false);
			terminal.sendText(`resim run "${filePath}"`);
		}
	});

	context.subscriptions.push(run);
}