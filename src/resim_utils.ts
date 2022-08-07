'use strict';

import * as cp from "child_process";

/**
 * Gets the current default account address. Returns `undefined` if the is no default account.
 */
export async function getDefaultAccountAddress(): Promise<string | undefined> {
    return new Promise<string | undefined>(async (resolve, _reject) => {
        let showConfigsResult: string = await executeShell('resim show-configs');
        let accountAddresses: string[] | undefined = extractAccountAddressesFromString(showConfigsResult);

        return accountAddresses ? resolve(accountAddresses[0]) : resolve(undefined);
    });
}

/**
 * Attempts to extract the account address from a passed string. An undefined is returned if no account addresses are
 * found in the string.
 * 
 * @param string 
 */
export function extractAccountAddressesFromString(string: string): string[] | undefined {
    // Since all account addresses are encoded in bech32 which is of known HRP (beginning), length, and charset, we can
    // define a regex expression to match that and return it.
    let regex: string = "(account_sim1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{50})";
    let matches: string[] | null = string.match(regex);
    return matches ? matches : undefined;
}

/**
 * Executes a shell command returning a string of the command response.
 * 
 * @param command The command to execute.
 * 
 * # Example
 * ```ts
 * let response = await executeShell('resim show-configs');
 * ```
 */
export function executeShell(command: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        cp.exec(command, (err, out) => {
            return err ? reject(err) : resolve(out);
        });
    });
}