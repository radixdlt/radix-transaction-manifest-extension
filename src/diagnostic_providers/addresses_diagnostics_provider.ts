"use strict";

import { ComponentAddressContext, PackageAddressContext, ResourceAddressContext, TransactionManifestParser } from "../antlr/TransactionManifestParser";
import { TransactionManifestListener } from "../antlr/TransactionManifestListener";
import { TransactionManifestLexer } from "../antlr/TransactionManifestLexer";
import { CharStream, CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParseTree } from "antlr4ts/tree/ParseTree";

import DiagnosticsProvider from "./diagnostics_provider";
import * as bech32 from 'bech32';
import * as vscode from 'vscode';

/**
 * A diagnostics provider that is able to understand the addressing format used in Scrypto and provide diagnostic
 * information related to addresses. This diagnostics provider provides the following features:
 * 
 * 1- Ensures that the addresses are a valid Bech32m.
 * 2- Ensures that the addresses Bech32 HRP and Entity type match.
 * 3- Ensures that the address string matches the object that it should belong to. 
 */
export default class AddressesDiagnosticProvider extends DiagnosticsProvider implements TransactionManifestListener {
    encounteredNetworkSpecifiers: string[] = [];
    
    // =======================================
    // Required `DiagnosticProvider` Methods.
    // =======================================
    
    protected prepareDiagnostics(): void {
        let charStream: CharStream = CharStreams.fromString(this.document.getText());
        let lexer: TransactionManifestLexer = new TransactionManifestLexer(charStream);
        let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
        let parser: TransactionManifestParser = new TransactionManifestParser(tokenStream);
        let tree = parser.manifest();
        ParseTreeWalker.DEFAULT.walk(this as ParseTreeListener, tree);
    }
    
    // =========================================================
    // Method implementation from `TransactionManifestListener`
    // =========================================================

    enterComponentAddress(context: ComponentAddressContext) {
        this.addAddressDiagnostics(context);
    }

    enterPackageAddress(context: PackageAddressContext) {
        this.addAddressDiagnostics(context);
    }
    
    enterResourceAddress(context: ResourceAddressContext) {
        this.addAddressDiagnostics(context);
    }

    // ==================================
    // Helper Methods and Internal Logic
    // ==================================

    /**
     * Adds diagnostics for a given address.
     */
    private addAddressDiagnostics(
        address: ComponentAddressContext | PackageAddressContext | ResourceAddressContext
    ): void {
        let addressString: string = this.extractAddressStringFromAddress(address)!;

        // Checking if the address is a valid Bech32m or not.
        let decodedAddress: bech32.Decoded | undefined = bech32.bech32m.decodeUnsafe(addressString);
        if (!decodedAddress) {
            this.addDiagnostic(address, "The address is not a valid Bech32m address.", vscode.DiagnosticSeverity.Error);
            return;
        }

        // Ensure that the HRP has an entity specifier and a network specifier.
        let hrp: string = decodedAddress.prefix;
        let splittedHrp: string[] = hrp.split('_');
        if (splittedHrp.length > 2) {
            this.addDiagnostic(address, "The address contains multiple specifier separators.", vscode.DiagnosticSeverity.Error);
            return;
        } else if (splittedHrp.length < 2) {
            this.addDiagnostic(address, "The address does not contain a network and entity specifiers.", vscode.DiagnosticSeverity.Error);
            return;
        }

        // Checking the entity specifier and the network specifier to make sure that they are valid.
        // TODO: the expected entity specifier should be dependent on the entity byte.
        let [entitySpecifier, networkSpecifier]: string[] = splittedHrp;
        let validEntitySpecifiers: string[] = [];
        let validEntityBytes: number[] = [];
        let addressType: string;
        if (address instanceof ComponentAddressContext) {
            addressType = 'ComponentAddress';
            validEntitySpecifiers.push(...['component', 'account', 'system']);
            validEntityBytes.push(...[0x02, 0x03, 0x04]);
        } else if (address instanceof ResourceAddressContext) {
            addressType = 'ResourceAddress';
            validEntitySpecifiers.push(...['resource']);
            validEntityBytes.push(...[0x00]);
        } else if (address instanceof PackageAddressContext) {
            addressType = 'PackageAddress';
            validEntitySpecifiers.push(...['package']);
            validEntityBytes.push(...[0x01]);
        } else {
            throw new Error("Should never be able to get here");
        }

        if (!validEntitySpecifiers.includes(entitySpecifier)) {
            this.addDiagnostic(address, `Invalid ${addressType}: A ${addressType} can not have an HRP beginning in "${entitySpecifier}"`, vscode.DiagnosticSeverity.Error);
            return;
        }
        
        let entityByte: number = bech32.bech32m.fromWords(decodedAddress.words)[0];
        if (!validEntityBytes.includes(entityByte)) {
            this.addDiagnostic(address, `Invalid Entity Byte: Expected an entity byte of ${validEntityBytes}", but received an entity byte of ${entityByte}.`, vscode.DiagnosticSeverity.Error);
            return;
        }

        // Ensure that the network specifier used is consistent throughout the application. If it is not, then add
        // a diagnostic informing the user that something here is wrong.
        // TODO: Consider making this optional
        if (!this.encounteredNetworkSpecifiers.includes(networkSpecifier)) {
            this.encounteredNetworkSpecifiers.push(networkSpecifier);
        }

        if (this.encounteredNetworkSpecifiers.length !== 1) {
            this.addDiagnostic(address, `Inconsistent Network Specifier: the document contains multiple network specifiers in the addresses which is likely to be an error. Encountered network specifiers are: ${this.encounteredNetworkSpecifiers}`, vscode.DiagnosticSeverity.Error);
            return;
        }
    }

    /**
     * Extracts the address string from the an address context object
     * 
     * @param address An address object to extract the address string from
     * @returns The address string.
     */
    private extractAddressStringFromAddress(
        address: ComponentAddressContext | PackageAddressContext | ResourceAddressContext
    ): string | undefined {
        let children: ParseTree[] | undefined = address.children;
        if (children) {
            return children[2].toString().slice(1, -1);
        } else {
            return undefined;
        }
    }
}