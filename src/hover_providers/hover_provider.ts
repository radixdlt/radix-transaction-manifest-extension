"use strict";

import { TransactionManifestLexer } from "../antlr/TransactionManifestLexer";
import { CharStream, CharStreams, Token } from "antlr4ts";

import * as vscode from "vscode";

/**
 * The abstract class defining the structure of a `HoverProvider`.
 */
abstract class HoverProvider implements vscode.HoverProvider {
	// ===========================================
	// Method implementation from `HoverProvider`
	// ===========================================

	provideHover(
		document: vscode.TextDocument,
		position: vscode.Position,
		_token: vscode.CancellationToken
	): vscode.Hover | undefined {
		let tokenKind: TokenKind | undefined = this.tokenKindAtPosition(
			document,
			position
		);
		if (tokenKind) {
			return this.getTokenHoverInformation(tokenKind);
		} else {
			return undefined;
		}
	}

	// ==================================
	// Helper Methods and Internal Logic
	// ==================================

	abstract getTokenHoverInformation(
		tokenKind: TokenKind
	): vscode.Hover | undefined;

	protected tokenKindAtPosition(
		document: vscode.TextDocument,
		position: vscode.Position
	): TokenKind | undefined {
		let charStream: CharStream = CharStreams.fromString(document.getText());
		let lexer: TransactionManifestLexer = new TransactionManifestLexer(
			charStream
		);
		let lexerTokens: Token[] = lexer.getAllTokens();
		let hoveredOverToken: Token | undefined = undefined;

		for (var token of lexerTokens) {
			if (this.tokenOverlapsPosition(token, position)) {
				hoveredOverToken = token;
				break;
			}
		}

		if (hoveredOverToken && hoveredOverToken.text) {
			let tokenText: string = hoveredOverToken.text!.toUpperCase();
			switch (tokenText) {
				case "ASSERT_WORKTOP_CONTAINS":
					return TokenKind.assertWorktopContains;
				case "ASSERT_WORKTOP_CONTAINS_BY_AMOUNT":
					return TokenKind.assertWorktopContainsByAmount;
				case "ASSERT_WORKTOP_CONTAINS_BY_IDS":
					return TokenKind.assertWorktopContainsByIds;
				case "CALL_FUNCTION":
					return TokenKind.callFunction;
				case "CALL_METHOD":
					return TokenKind.callMethod;
				case "CALL_METHOD_WITH_ALL_RESOURCES":
					return TokenKind.callMethodWithAllResources;
				case "CLEAR_AUTH_ZONE":
					return TokenKind.clearAuthZone;
				case "CLONE_PROOF":
					return TokenKind.cloneProof;
				case "CREATE_PROOF_FROM_AUTH_ZONE":
					return TokenKind.createProofFromAuthZone;
				case "CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT":
					return TokenKind.createProofFromAuthZoneByAmount;
				case "CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS":
					return TokenKind.createProofFromAuthZoneByIds;
				case "DROP_ALL_PROOFS":
					return TokenKind.dropAllProofs;
				case "DROP_PROOF":
					return TokenKind.dropProof;
				case "POP_FROM_AUTH_ZONE":
					return TokenKind.popFromAuthZone;
				case "PUBLISH_PACKAGE":
					return TokenKind.publishPackage;
				case "PUSH_TO_AUTH_ZONE":
					return TokenKind.pushToAuthZone;
				case "RETURN_TO_WORKTOP":
					return TokenKind.returnToWorktop;
				case "TAKE_FROM_WORKTOP":
					return TokenKind.takeFromWorktop;
				case "TAKE_FROM_WORKTOP_BY_AMOUNT":
					return TokenKind.takeFromWorktopByAmount;
				case "TAKE_FROM_WORKTOP_BY_IDS":
					return TokenKind.takeFromWorktopByIds;
				default:
					return undefined;
			}
		} else {
			return undefined;
		}
	}

	protected tokenOverlapsPosition(
		token: Token,
		position: vscode.Position
	): boolean {
		let tokenLength: number = token.stopIndex - token.startIndex;
		if (
			token.line - 1 === position.line &&
			token.charPositionInLine <= position.character &&
			token.charPositionInLine + tokenLength + 1 >= position.character
		) {
			return true;
		} else {
			return false;
		}
	}
}

/**
 * Represents the type of token encountered during the
 */
enum TokenKind {
	assertWorktopContains,
	assertWorktopContainsByAmount,
	assertWorktopContainsByIds,
	callFunction,
	callMethod,
	callMethodWithAllResources,
	clearAuthZone,
	cloneProof,
	createProofFromAuthZone,
	createProofFromAuthZoneByAmount,
	createProofFromAuthZoneByIds,
	dropAllProofs,
	dropProof,
	popFromAuthZone,
	publishPackage,
	pushToAuthZone,
	returnToWorktop,
	takeFromWorktop,
	takeFromWorktopByAmount,
	takeFromWorktopByIds,
}

export { TokenKind, HoverProvider };
