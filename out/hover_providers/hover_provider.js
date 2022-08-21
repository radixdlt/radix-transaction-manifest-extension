"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverProvider = exports.TokenKind = void 0;
const TransactionManifestLexer_1 = require("../antlr/TransactionManifestLexer");
const antlr4ts_1 = require("antlr4ts");
/**
 * The abstract class defining the structure of a `HoverProvider`.
 */
class HoverProvider {
    // ===========================================
    // Method implementation from `HoverProvider`
    // ===========================================
    provideHover(document, position, _token) {
        let tokenKind = this.tokenKindAtPosition(document, position);
        if (tokenKind) {
            return this.getTokenHoverInformation(tokenKind);
        }
        else {
            return undefined;
        }
    }
    tokenKindAtPosition(document, position) {
        let charStream = antlr4ts_1.CharStreams.fromString(document.getText());
        let lexer = new TransactionManifestLexer_1.TransactionManifestLexer(charStream);
        let lexerTokens = lexer.getAllTokens();
        let hoveredOverToken = undefined;
        for (var token of lexerTokens) {
            if (this.tokenOverlapsPosition(token, position)) {
                hoveredOverToken = token;
                break;
            }
        }
        if (hoveredOverToken && hoveredOverToken.text) {
            let tokenText = hoveredOverToken.text.toUpperCase();
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
        }
        else {
            return undefined;
        }
    }
    tokenOverlapsPosition(token, position) {
        let tokenLength = token.stopIndex - token.startIndex;
        if (token.line - 1 === position.line &&
            token.charPositionInLine <= position.character &&
            token.charPositionInLine + tokenLength + 1 >= position.character) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.HoverProvider = HoverProvider;
/**
 * Represents the type of token encountered during the
 */
var TokenKind;
(function (TokenKind) {
    TokenKind[TokenKind["assertWorktopContains"] = 0] = "assertWorktopContains";
    TokenKind[TokenKind["assertWorktopContainsByAmount"] = 1] = "assertWorktopContainsByAmount";
    TokenKind[TokenKind["assertWorktopContainsByIds"] = 2] = "assertWorktopContainsByIds";
    TokenKind[TokenKind["callFunction"] = 3] = "callFunction";
    TokenKind[TokenKind["callMethod"] = 4] = "callMethod";
    TokenKind[TokenKind["callMethodWithAllResources"] = 5] = "callMethodWithAllResources";
    TokenKind[TokenKind["clearAuthZone"] = 6] = "clearAuthZone";
    TokenKind[TokenKind["cloneProof"] = 7] = "cloneProof";
    TokenKind[TokenKind["createProofFromAuthZone"] = 8] = "createProofFromAuthZone";
    TokenKind[TokenKind["createProofFromAuthZoneByAmount"] = 9] = "createProofFromAuthZoneByAmount";
    TokenKind[TokenKind["createProofFromAuthZoneByIds"] = 10] = "createProofFromAuthZoneByIds";
    TokenKind[TokenKind["dropAllProofs"] = 11] = "dropAllProofs";
    TokenKind[TokenKind["dropProof"] = 12] = "dropProof";
    TokenKind[TokenKind["popFromAuthZone"] = 13] = "popFromAuthZone";
    TokenKind[TokenKind["publishPackage"] = 14] = "publishPackage";
    TokenKind[TokenKind["pushToAuthZone"] = 15] = "pushToAuthZone";
    TokenKind[TokenKind["returnToWorktop"] = 16] = "returnToWorktop";
    TokenKind[TokenKind["takeFromWorktop"] = 17] = "takeFromWorktop";
    TokenKind[TokenKind["takeFromWorktopByAmount"] = 18] = "takeFromWorktopByAmount";
    TokenKind[TokenKind["takeFromWorktopByIds"] = 19] = "takeFromWorktopByIds";
})(TokenKind || (TokenKind = {}));
exports.TokenKind = TokenKind;
//# sourceMappingURL=hover_provider.js.map