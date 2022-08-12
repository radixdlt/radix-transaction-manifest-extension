/* eslint-disable @typescript-eslint/naming-convention */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManifestHoverListener = void 0;
const vscode_1 = require("vscode");
var TokenType;
(function (TokenType) {
	TokenType[(TokenType["Unit"] = 0)] = "Unit";
	TokenType[(TokenType["Bool"] = 1)] = "Bool";
	TokenType[(TokenType["I8"] = 2)] = "I8";
	TokenType[(TokenType["I16"] = 3)] = "I16";
	TokenType[(TokenType["I32"] = 4)] = "I32";
	TokenType[(TokenType["I64"] = 5)] = "I64";
	TokenType[(TokenType["I128"] = 6)] = "I128";
	TokenType[(TokenType["U8"] = 7)] = "U8";
	TokenType[(TokenType["U16"] = 8)] = "U16";
	TokenType[(TokenType["U32"] = 9)] = "U32";
	TokenType[(TokenType["U64"] = 10)] = "U64";
	TokenType[(TokenType["U128"] = 11)] = "U128";
})(TokenType || (TokenType = {}));
class ManifestHoverListener {
	constructor(tokenPosition) {
		this.hoverTokenType = undefined;
		this.tokenPosition = tokenPosition;
	}
	enterUnit(context) {
		this.determineContextEligibility(context, TokenType.Unit);
	}
	enterBool(context) {
		this.determineContextEligibility(context, TokenType.Bool);
	}
	enterI8(context) {
		this.determineContextEligibility(context, TokenType.I8);
	}
	enterI16(context) {
		this.determineContextEligibility(context, TokenType.I16);
	}
	enterI32(context) {
		this.determineContextEligibility(context, TokenType.I32);
	}
	enterI64(context) {
		this.determineContextEligibility(context, TokenType.I64);
	}
	enterI128(context) {
		this.determineContextEligibility(context, TokenType.I128);
	}
	enterU8(context) {
		this.determineContextEligibility(context, TokenType.U8);
	}
	enterU16(context) {
		this.determineContextEligibility(context, TokenType.U16);
	}
	enterU32(context) {
		this.determineContextEligibility(context, TokenType.U32);
	}
	enterU64(context) {
		this.determineContextEligibility(context, TokenType.U64);
	}
	enterU128(context) {
		this.determineContextEligibility(context, TokenType.U128);
	}
	determineContextEligibility(context, tokenType) {
		// Construct a range from the passed context. We only care about contexts that have an end. Anything else is
		// not important to us and we do not care about it.
		let start = context._start;
		let stop = context._stop;
		if (stop) {
			let range = new vscode_1.Range(
				start.line - 1,
				start.charPositionInLine,
				stop.line - 1,
				stop.charPositionInLine
			);
			this.determineEligibility(range, tokenType);
		}
	}
	determineEligibility(tokenRange, tokenType) {}
}
exports.ManifestHoverListener = ManifestHoverListener;
//# sourceMappingURL=manifest_hover_listener.js.map
