"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeShell =
	exports.extractAccountAddressesFromString =
	exports.getDefaultAccountAddress =
		void 0;
const cp = require("child_process");
/**
 * Gets the current default account address. Returns `undefined` if the is no default account.
 */
async function getDefaultAccountAddress() {
	return new Promise(async (resolve, _reject) => {
		let showConfigsResult = await executeShell("resim show-configs");
		let accountAddresses =
			extractAccountAddressesFromString(showConfigsResult);
		return accountAddresses
			? resolve(accountAddresses[0])
			: resolve(undefined);
	});
}
exports.getDefaultAccountAddress = getDefaultAccountAddress;
/**
 * Attempts to extract the account address from a passed string. An undefined is returned if no account addresses are
 * found in the string.
 *
 * @param string
 */
function extractAccountAddressesFromString(string) {
	// Since all account addresses are encoded in bech32 which is of known HRP (beginning), length, and charset, we can
	// define a regex expression to match that and return it.
	let regex = "(account_sim1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{50})";
	let matches = string.match(regex);
	return matches ? matches : undefined;
}
exports.extractAccountAddressesFromString = extractAccountAddressesFromString;
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
function executeShell(command) {
	return new Promise((resolve, reject) => {
		cp.exec(command, (err, out) => {
			return err ? reject(err) : resolve(out);
		});
	});
}
exports.executeShell = executeShell;
//# sourceMappingURL=resim_utils.js.map
