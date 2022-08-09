'use strict';

import * as vscode from 'vscode';
import * as resimUtils from './resim_utils';
import * as extensionUtils from './extension_utils';
import { CharStream, CharStreams, CommonToken, CommonTokenStream, Token } from 'antlr4ts';
import { TransactionManifestLexer } from './TransactionManifestLexer';
import { ManifestContext, ManifestInstructionContext, TransactionManifestParser } from './TransactionManifestParser';
import { TransactionManifestListener } from './TransactionManifestListener';
import { ManifestInstructionListener } from './manifest_listener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { identifierToHover } from './hover_strings';

/**
 * The address of the current resim default account.
 */
let defaultAccountAddress: string | undefined;
let defaultAccountButton: vscode.StatusBarItem;

export async function activate(context: vscode.ExtensionContext) {
	/**
	 * Updates the `defaultAccountAddress` variable with the current default account address
	 */
	const updateDefaultAccountAddress = async () => {
		let address: string | undefined = await resimUtils.getDefaultAccountAddress();
		internalUpdateDefaultAccountAddress(address);
		return address;
	};

	const internalUpdateDefaultAccountAddress = (address: string | undefined) => {
		console.log("Performing an internal update");
		defaultAccountAddress = address;
		updateDefaultAccountButtonText(address);
	};

	const updateDefaultAccountButtonText = (accountAddress: string | undefined) => {
		defaultAccountButton.text = accountAddress ? `$(account) ${accountAddress.slice(0, 7)}...${accountAddress.slice(accountAddress.length - 7, accountAddress.length)}` : 'No Default Account';
	};

	// =================================================================================================================
	// Command and item registration to the VSCode UI.
	// =================================================================================================================

	/**
	 * A command which runs the currently open transaction manifest
	 */
	const run = vscode.commands.registerCommand('extension.runManifest', () => {
		let filePath: string | undefined = vscode.window.activeTextEditor?.document.fileName;
		if (filePath === undefined) {
			console.log("file path is undefined");
			vscode.window.showErrorMessage("File path is undefined");
		} else {
			// Try to find a terminal with a matching name to run the manifest in, if we can not find any, then a new 
			// terminal is created. This is done to avoid cluttering the terminal if the user decides to press the 
			// button (or perform the command) multiple times. 
			let terminal: vscode.Terminal = extensionUtils.getTerminal('Run Manifest');
			terminal.show(true);
			terminal.sendText(`resim run "${filePath}"`);
		}
	});

	/**
	 * This command maps to a button at the bottom of the editor. This button either shows the current default account 
	 * or shows that there is no default account.
	 * 
	 * When there is a default account, clicking this button would copy the account's address to the clipboard. When 
	 * there is no default account, clicking this button (or performing this command) would create a new account and 
	 * copy its address to the clipboard.
	 */
	const defaultAccount = vscode.commands.registerCommand('extension.defaultAccount', async () => {
		let responseToUser: string;
		let currentAccountAddress: string;

		let currentDefaultAccount: string | undefined = await updateDefaultAccountAddress();
		if (currentDefaultAccount) {
			currentAccountAddress = currentDefaultAccount;
			responseToUser = "Address copied to clipboard";
		} else {
			let resimNewAccountResponse: string = await resimUtils.executeShell('resim new-account');
			currentAccountAddress = resimUtils.extractAccountAddressesFromString(resimNewAccountResponse)![0];
			responseToUser = "New account created and address copied to clipboard";
		}

		internalUpdateDefaultAccountAddress(currentAccountAddress);
		vscode.env.clipboard.writeText(currentAccountAddress);
		vscode.window.showInformationMessage(responseToUser);
	});
	defaultAccountButton = vscode.window.createStatusBarItem(1, 0);
	defaultAccountButton.tooltip = 'Copies the address of the current default account to the clipboard';
	defaultAccountButton.command = 'extension.defaultAccount';
	defaultAccountButton.show();

	/**
	 * A command used to create a new resim account for the user. This command simply runs `resim new-account`.
	 */
	const newAccount = vscode.commands.registerCommand('extension.newAccount', () => {
		let terminal: vscode.Terminal = extensionUtils.getTerminal('Run Manifest');
		terminal.show(true);
		terminal.sendText(`resim new-account`);
	});
	let newAccountButton: vscode.StatusBarItem = vscode.window.createStatusBarItem(1, 0);
	newAccountButton.text = '$(add) New Account';
	newAccountButton.tooltip = 'Creates a new account';
	newAccountButton.command = 'extension.newAccount';
	newAccountButton.show();

	vscode.languages.registerDocumentFormattingEditProvider('rtm', {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
			// Getting the entire document as a string which will then be fed into the antlr parser to make sense of it.
			let documentContents: string = document.getText();
			
			let charStream: CharStream = CharStreams.fromString(documentContents);
			let lexer: TransactionManifestLexer = new TransactionManifestLexer(charStream);
			let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
			let parser: TransactionManifestParser = new TransactionManifestParser(tokenStream);
			let tree = parser.manifest();

			const listener: TransactionManifestListener = new ManifestInstructionListener();
			ParseTreeWalker.DEFAULT.walk(listener, tree);

			// Getting the positions of the instructions to format them
			// @ts-ignore			
			let ranges: vscode.Range[] = listener.manifestInstructionRanges;
			let textEdits: vscode.TextEdit[] = [];
			for (var range of ranges) {
				// Reading the text at the positions so it can be formatted
				console.log('Formatting:', extensionUtils.rangeToString(range));
				let instruction: string = document.getText(range);
				let formattedInstruction: string = instruction.split(/[\s|\n|\r|\t]/).filter((x) => !(x.trim().length === 0)).join('\n\t');
				textEdits.push(new vscode.TextEdit(range, formattedInstruction));

				console.log("Formatting the instruction", instruction);
			}

			return textEdits;
		},
	});

	vscode.languages.registerHoverProvider('rtm', {
		provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.Hover | undefined {
			// We will determine what is shown in the hover through the lexer tokens and not throught the parsed tokens.
			// this makes the process of determining what to show miles easier. 
			
			let hoverResponse: vscode.Hover | undefined = undefined;
			let charStream: CharStream = CharStreams.fromString(document.getText());
			let lexer: TransactionManifestLexer = new TransactionManifestLexer(charStream);
			
			// @ts-ignore
			let lexerTokens: CommonToken[] = lexer.getAllTokens();
			let hoveredOverToken: CommonToken | undefined = undefined;
			for (var i = 0; i < lexerTokens.length; i++) {
				let token: CommonToken = lexerTokens[i];
				let tokenLength: number = token.stopIndex - token.startIndex;
				if (token.line - 1 === position.line && token.charPositionInLine <= position.character && token.charPositionInLine + tokenLength + 1 >= position.character) {
					hoveredOverToken = token;
					break;
				}
			}
			
			if (hoveredOverToken) {
				// To get the string representation of this token, we need to construct a range, and get the text in the
				// document that is at that range
				let tokenLength: number = hoveredOverToken.stopIndex - hoveredOverToken.startIndex;
				let range: vscode.Range = new vscode.Range(hoveredOverToken.line - 1, hoveredOverToken.charPositionInLine, hoveredOverToken.line - 1, hoveredOverToken.charPositionInLine + tokenLength + 1);
				let tokenStringRepresentation: string = document.getText(range);

				hoverResponse = identifierToHover(tokenStringRepresentation);
			}

			return hoverResponse;
		},
	});

	// =================================================================================================================
	// Post-registration code.
	// =================================================================================================================

	// Updating the defaultAccountAddress once the extension is active and setting a timer such that it updates 
	// periodically since there is no way to be notified for changes to the default account address.
	updateDefaultAccountButtonText(await updateDefaultAccountAddress());
	setInterval(updateDefaultAccountAddress, 10_000);

	context.subscriptions.push(run);
	context.subscriptions.push(defaultAccount);
	context.subscriptions.push(defaultAccountButton);
	context.subscriptions.push(newAccount);
	context.subscriptions.push(newAccountButton);
}