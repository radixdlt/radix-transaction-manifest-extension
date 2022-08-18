"use strict";

import { ComponentAddressContext, DecimalContext, I128Context, I16Context, I32Context, I64Context, I8Context, PackageAddressContext, PreciseDecimalContext, ResourceAddressContext, TransactionManifestParser, U128Context, U16Context, U32Context, U64Context, U8Context } from "../antlr/TransactionManifestParser";
import { TransactionManifestListener } from "../antlr/TransactionManifestListener";
import { TransactionManifestLexer } from "../antlr/TransactionManifestLexer";
import { CharStream, CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParseTree } from "antlr4ts/tree/ParseTree";

import DiagnosticsProvider from "./diagnostics_provider";

import * as vscode from 'vscode';

/**
 * Defines a union type containing all of the numerical types in Scrypto.
 */
type ManifestNumber = DecimalContext | PreciseDecimalContext |
U8Context | U16Context | U32Context | U64Context | U128Context | 
I8Context | I16Context | I32Context | I64Context | I128Context ;

/**
 * Defines the rules that a number type should have
 */
interface NumberRules {
    minimum: bigint,
    maximum: bigint,
    decimalPlaces: number,
}

/**
 * A diagnostics provider that validates numbers and ensures that they are of a correct format according to:
 * 
 * 1- The number of bits they have.
 * 2- Whether they are signed or unsigned. 
 */
export default class NumbersDiagnosticsProvider extends DiagnosticsProvider implements TransactionManifestListener {
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

    enterDecimal(context: DecimalContext) {
        this.addNumberDiagnostics(context);
    }
    
    enterPreciseDecimal(context: PreciseDecimalContext) {
        this.addNumberDiagnostics(context);
    }
    
    enterI8(context: I8Context) {
        this.addNumberDiagnostics(context);
    }
    
    enterI16(context: I16Context) {
        this.addNumberDiagnostics(context);
    }
    
    enterI32(context: I32Context) {
        this.addNumberDiagnostics(context);
    }
    
    enterI64(context: I64Context) {
        this.addNumberDiagnostics(context);
    }
    
    enterI128(context: I128Context) {
        this.addNumberDiagnostics(context);
    }
    
    enterU8(context: U8Context) {
        this.addNumberDiagnostics(context);
    }
    
    enterU16(context: U16Context) {
        this.addNumberDiagnostics(context);
    }
    
    enterU32(context: U32Context) {
        this.addNumberDiagnostics(context);
    }
    
    enterU64(context: U64Context) {
        this.addNumberDiagnostics(context);
    }
    
    enterU128(context: U128Context) {
        this.addNumberDiagnostics(context);
    }

    // ==================================
    // Helper Methods and Internal Logic
    // ==================================

    /**
     * Adds diagnostics for a number given its type
     */
    private addNumberDiagnostics(context: ManifestNumber) {

    }

    private getNumber(context: ManifestNumber): number {
        return 0;
    }

    private getNumberRules(context: ManifestNumber): NumberRules {
        // Unsigned Numbers
        if (context instanceof U8Context) {
            return {
                minimum: 0n,
                maximum: 0xFFn,
                decimalPlaces: 0,
            };
        } else if (context instanceof U16Context) {
            return {
                minimum: 0n,
                maximum: 0xFFFFn,
                decimalPlaces: 0,
            };
        } else if (context instanceof U32Context) {
            return {
                minimum: 0n,
                maximum: 0xFFFFFFFFn,
                decimalPlaces: 0,
            };
        } else if (context instanceof U64Context) {
            return {
                minimum: 0n,
                maximum: 0xFFFFFFFFFFFFFFFFn,
                decimalPlaces: 0,
            };
        } else if (context instanceof U128Context) {
            return {
                minimum: 0n,
                maximum: 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFn,
                decimalPlaces: 0,
            };
        }

        // Signed numbers
        else if (context instanceof I8Context) {
            return {
                minimum: -0x7Fn,
                maximum: 0x80n,
                decimalPlaces: 0,
            };
        } else if (context instanceof I16Context) {
            return {
                minimum: -0x7FFFn,
                maximum: 0x8000n,
                decimalPlaces: 0,
            };
        } else if (context instanceof I32Context) {
            return {
                minimum: -0x7FFFFFFFn,
                maximum: 0x80000000n,
                decimalPlaces: 0,
            };
        } else if (context instanceof I64Context) {
            return {
                minimum: -0x7FFFFFFFFFFFFFFFn,
                maximum: 0x8000000000000000n,
                decimalPlaces: 0,
            };
        } else if (context instanceof I128Context) {
            return {
                minimum: -0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFn,
                maximum: 0x80000000000000000000000000000000n,
                decimalPlaces: 0,
            };
        }

        // Decimals
        else if (context instanceof DecimalContext) {
            return {
                minimum: -0x9392EE8E921D5D073AFF322E62439FCF32D7F344649470F90n,
                maximum: 0x9392EE8E921D5D073AFF322E62439FCF32D7F344649470F90n,
                decimalPlaces: 18,
            };
        } else if (context instanceof PreciseDecimalContext) {
            return {
                minimum: -0x543FF513D29CF4D29F91CC6BA3D9B112150FF7206C855598870945AEC9C67D9FB79018A3812n,
                maximum: 0x543FF513D29CF4D29F91CC6BA3D9B112150FF7206C855598870945AEC9C67D9FB79018A3812n,
                decimalPlaces: 64,
            };
        } else {
            throw new Error("Should never happen");
        }
    }
}