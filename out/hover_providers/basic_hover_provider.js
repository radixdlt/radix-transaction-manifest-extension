"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hover_provider_1 = require("./hover_provider");
const basicHoverInformation = require("./basic_hover_information");
const vscode_1 = require("vscode");
class BasicHoverProvider extends hover_provider_1.HoverProvider {
    getTokenHoverInformation(tokenKind) {
        switch (tokenKind) {
            case hover_provider_1.TokenKind.assertWorktopContains:
                return new vscode_1.Hover(basicHoverInformation.assertWorktopContains);
            case hover_provider_1.TokenKind.assertWorktopContainsByAmount:
                return new vscode_1.Hover(basicHoverInformation.assertWorktopContainsByAmount);
            case hover_provider_1.TokenKind.assertWorktopContainsByIds:
                return new vscode_1.Hover(basicHoverInformation.assertWorktopContainsByIds);
            case hover_provider_1.TokenKind.callFunction:
                return new vscode_1.Hover(basicHoverInformation.callFunction);
            case hover_provider_1.TokenKind.callMethod:
                return new vscode_1.Hover(basicHoverInformation.callMethod);
            case hover_provider_1.TokenKind.callMethodWithAllResources:
                return new vscode_1.Hover(basicHoverInformation.callMethodWithAllResources);
            case hover_provider_1.TokenKind.clearAuthZone:
                return new vscode_1.Hover(basicHoverInformation.clearAuthZone);
            case hover_provider_1.TokenKind.cloneProof:
                return new vscode_1.Hover(basicHoverInformation.cloneProof);
            case hover_provider_1.TokenKind.createProofFromAuthZone:
                return new vscode_1.Hover(basicHoverInformation.createProofFromAuthZone);
            case hover_provider_1.TokenKind.createProofFromAuthZoneByAmount:
                return new vscode_1.Hover(basicHoverInformation.createProofFromAuthZoneByAmount);
            case hover_provider_1.TokenKind.createProofFromAuthZoneByIds:
                return new vscode_1.Hover(basicHoverInformation.createProofFromAuthZoneByIds);
            case hover_provider_1.TokenKind.dropAllProofs:
                return new vscode_1.Hover(basicHoverInformation.dropAllProofs);
            case hover_provider_1.TokenKind.dropProof:
                return new vscode_1.Hover(basicHoverInformation.dropProof);
            case hover_provider_1.TokenKind.popFromAuthZone:
                return new vscode_1.Hover(basicHoverInformation.popFromAuthZone);
            case hover_provider_1.TokenKind.publishPackage:
                return new vscode_1.Hover(basicHoverInformation.publishPackage);
            case hover_provider_1.TokenKind.pushToAuthZone:
                return new vscode_1.Hover(basicHoverInformation.pushToAuthZone);
            case hover_provider_1.TokenKind.returnToWorktop:
                return new vscode_1.Hover(basicHoverInformation.returnToWorktop);
            case hover_provider_1.TokenKind.takeFromWorktop:
                return new vscode_1.Hover(basicHoverInformation.takeFromWorktop);
            case hover_provider_1.TokenKind.takeFromWorktopByAmount:
                return new vscode_1.Hover(basicHoverInformation.takeFromWorktopByAmount);
            case hover_provider_1.TokenKind.takeFromWorktopByIds:
                return new vscode_1.Hover(basicHoverInformation.takeFromWorktopByIds);
            default:
                return undefined;
        }
    }
}
exports.default = BasicHoverProvider;
//# sourceMappingURL=basic_hover_provider.js.map