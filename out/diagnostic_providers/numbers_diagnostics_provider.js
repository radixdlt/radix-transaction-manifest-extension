"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionManifestParser_1 = require("../antlr/TransactionManifestParser");
const TransactionManifestLexer_1 = require("../antlr/TransactionManifestLexer");
const antlr4ts_1 = require("antlr4ts");
const ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
const diagnostics_provider_1 = require("./diagnostics_provider");
const vscode = require("vscode");
/**
 * A diagnostics provider that validates numbers and ensures that they are of a correct format according to:
 *
 * 1- The number of bits they have.
 * 2- Whether they are signed or unsigned.
 */
class NumbersDiagnosticsProvider extends diagnostics_provider_1.default {
    // =======================================
    // Required `DiagnosticProvider` Methods.
    // =======================================
    prepareDiagnostics() {
        let charStream = antlr4ts_1.CharStreams.fromString(this.document.getText());
        let lexer = new TransactionManifestLexer_1.TransactionManifestLexer(charStream);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new TransactionManifestParser_1.TransactionManifestParser(tokenStream);
        let tree = parser.manifest();
        ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(this, tree);
    }
    // =========================================================
    // Method implementation from `TransactionManifestListener`
    // =========================================================
    enterDecimal(context) {
        this.addNumberDiagnostics(context);
    }
    enterPreciseDecimal(context) {
        this.addNumberDiagnostics(context);
    }
    enterI8(context) {
        this.addNumberDiagnostics(context);
    }
    enterI16(context) {
        this.addNumberDiagnostics(context);
    }
    enterI32(context) {
        this.addNumberDiagnostics(context);
    }
    enterI64(context) {
        this.addNumberDiagnostics(context);
    }
    enterI128(context) {
        this.addNumberDiagnostics(context);
    }
    enterU8(context) {
        this.addNumberDiagnostics(context);
    }
    enterU16(context) {
        this.addNumberDiagnostics(context);
    }
    enterU32(context) {
        this.addNumberDiagnostics(context);
    }
    enterU64(context) {
        this.addNumberDiagnostics(context);
    }
    enterU128(context) {
        this.addNumberDiagnostics(context);
    }
    // ==================================
    // Helper Methods and Internal Logic
    // ==================================
    /**
     * Adds diagnostics for a number given its type
     */
    addNumberDiagnostics(context) {
        let unparsedNumberString = this.getNumberString(context);
        if (Number.isNaN(Number(unparsedNumberString))) {
            this.addDiagnostic(context, `Invalid Number: The number "${unparsedNumberString}" is not a valid number`, vscode.DiagnosticSeverity.Error);
            return;
        }
        let number = parseFloat(unparsedNumberString);
        let numberRules = this.getNumberRules(context);
        if (number < numberRules.minimum) {
            this.addDiagnostic(context, `Below Minimum: This type has a minimum of ${numberRules.minimum} but the number given has a value of ${number}`, vscode.DiagnosticSeverity.Error);
            return;
        }
        if (number > numberRules.maximum) {
            this.addDiagnostic(context, `Above Maximum: This type has a maximum of ${numberRules.maximum} but the number given has a value of ${number}`, vscode.DiagnosticSeverity.Error);
            return;
        }
        let numberOfDecimalPoints;
        let splittedNumberString = number.toString().split('.');
        if (splittedNumberString.length === 2) {
            numberOfDecimalPoints = splittedNumberString[1].length;
        }
        else {
            numberOfDecimalPoints = 0;
        }
        if (numberOfDecimalPoints > numberRules.decimalPlaces) {
            this.addDiagnostic(context, `Invalid Decimal Points: This type allows for a maximum number of decimal points of ${numberRules.decimalPlaces} but there were ${numberOfDecimalPoints} in the number.`, vscode.DiagnosticSeverity.Error);
            return;
        }
    }
    /**
     * Takes an antlr number context and converts it to the underlying number.
     */
    getNumberString(context) {
        if (context instanceof TransactionManifestParser_1.U8Context || context instanceof TransactionManifestParser_1.U16Context || context instanceof TransactionManifestParser_1.U32Context || context instanceof TransactionManifestParser_1.U64Context || context instanceof TransactionManifestParser_1.U128Context) {
            return context.children[0].toString().split('u')[0];
        }
        else if (context instanceof TransactionManifestParser_1.I8Context || context instanceof TransactionManifestParser_1.I16Context || context instanceof TransactionManifestParser_1.I32Context || context instanceof TransactionManifestParser_1.I64Context || context instanceof TransactionManifestParser_1.I128Context) {
            return context.children[0].toString().split('i')[0];
        }
        else if (context instanceof TransactionManifestParser_1.DecimalContext || context instanceof TransactionManifestParser_1.PreciseDecimalContext) {
            return context.children[2].toString().slice(1, -1);
        }
        else {
            throw new Error("Should never be able to get here.");
        }
    }
    /**
     * Gets the rule corresponding to a specific numeric type. These are the rules that the number will be validated
     * against.
     */
    getNumberRules(context) {
        // Unsigned Numbers
        if (context instanceof TransactionManifestParser_1.U8Context) {
            return {
                minimum: 0n,
                maximum: 0xffn,
                decimalPlaces: 0,
            };
        }
        else if (context instanceof TransactionManifestParser_1.U16Context) {
            return {
                minimum: 0n,
                maximum: 0xffffn,
                decimalPlaces: 0,
            };
        }
        else if (context instanceof TransactionManifestParser_1.U32Context) {
            return {
                minimum: 0n,
                maximum: 0xffffffffn,
                decimalPlaces: 0,
            };
        }
        else if (context instanceof TransactionManifestParser_1.U64Context) {
            return {
                minimum: 0n,
                maximum: 0xffffffffffffffffn,
                decimalPlaces: 0,
            };
        }
        else if (context instanceof TransactionManifestParser_1.U128Context) {
            return {
                minimum: 0n,
                maximum: 0xffffffffffffffffffffffffffffffffn,
                decimalPlaces: 0,
            };
        }
        // Signed numbers
        else if (context instanceof TransactionManifestParser_1.I8Context) {
            return {
                minimum: -0x7fn,
                maximum: 0x80n,
                decimalPlaces: 0,
            };
        }
        else if (context instanceof TransactionManifestParser_1.I16Context) {
            return {
                minimum: -0x7fffn,
                maximum: 0x8000n,
                decimalPlaces: 0,
            };
        }
        else if (context instanceof TransactionManifestParser_1.I32Context) {
            return {
                minimum: -0x7fffffffn,
                maximum: 0x80000000n,
                decimalPlaces: 0,
            };
        }
        else if (context instanceof TransactionManifestParser_1.I64Context) {
            return {
                minimum: -0x7fffffffffffffffn,
                maximum: 0x8000000000000000n,
                decimalPlaces: 0,
            };
        }
        else if (context instanceof TransactionManifestParser_1.I128Context) {
            return {
                minimum: -0x7fffffffffffffffffffffffffffffffn,
                maximum: 0x80000000000000000000000000000000n,
                decimalPlaces: 0,
            };
        }
        // Decimals
        else if (context instanceof TransactionManifestParser_1.DecimalContext) {
            return {
                minimum: -0x9392ee8e921d5d073aff322e62439fcf32d7f344649470f90n,
                maximum: 0x9392ee8e921d5d073aff322e62439fcf32d7f344649470f90n,
                decimalPlaces: 18,
            };
        }
        else if (context instanceof TransactionManifestParser_1.PreciseDecimalContext) {
            return {
                minimum: -0x543ff513d29cf4d29f91cc6ba3d9b112150ff7206c855598870945aec9c67d9fb79018a3812n,
                maximum: 0x543ff513d29cf4d29f91cc6ba3d9b112150ff7206c855598870945aec9c67d9fb79018a3812n,
                decimalPlaces: 64,
            };
        }
        else {
            throw new Error("Should never happen");
        }
    }
}
exports.default = NumbersDiagnosticsProvider;
//# sourceMappingURL=numbers_diagnostics_provider.js.map