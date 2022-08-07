import * as vscode from 'vscode';

/**
 * Try to find a terminal with a matching name to run the manifest in, if we can not find any, then a new terminal is 
 * created. This is done to avoid cluttering the terminal if the user decides to press the button (or perform the 
 * command) multiple times. 
 * 
 * @param terminalName Name of the terminal to attempt to get. If no terminal with this name is available, when a new 
 * one will be created with this name
 * @returns The terminal
 */
export function getTerminal(terminalName: string): vscode.Terminal {
    let terminals: readonly vscode.Terminal[] = vscode.window.terminals;
    let matchingNameIndex: number = terminals.map((x) => x.name === terminalName).indexOf(true);

    let terminal: vscode.Terminal;
    if (matchingNameIndex === -1) {
        terminal = vscode.window.createTerminal(terminalName);
    } else {
        terminal = terminals[matchingNameIndex];
    }

    return terminal;
}