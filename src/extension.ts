'use strict';

import * as vscode from 'vscode';
import * as resimUtils from './resim_utils';
import * as extensionUtils from './extension_utils';

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