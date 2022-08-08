// Generated from src/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TransactionManifestListener } from "./TransactionManifestListener";
import { TransactionManifestVisitor } from "./TransactionManifestVisitor";


export class TransactionManifestParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly UNSIGNED_INT = 49;
	public static readonly SIGNED_INT = 50;
	public static readonly UNSIGNED_FLOAT = 51;
	public static readonly SIGNED_FLOAT = 52;
	public static readonly NUMERIC_STRING = 53;
	public static readonly FULL_STRING = 54;
	public static readonly WS = 55;
	public static readonly COMMENT = 56;
	public static readonly RULE_manifest = 0;
	public static readonly RULE_manifestInstruction = 1;
	public static readonly RULE_u8 = 2;
	public static readonly RULE_u16 = 3;
	public static readonly RULE_u32 = 4;
	public static readonly RULE_u64 = 5;
	public static readonly RULE_u128 = 6;
	public static readonly RULE_i8 = 7;
	public static readonly RULE_i16 = 8;
	public static readonly RULE_i32 = 9;
	public static readonly RULE_i64 = 10;
	public static readonly RULE_i128 = 11;
	public static readonly RULE_simpleString = 12;
	public static readonly RULE_resourceAddress = 13;
	public static readonly RULE_componentAddress = 14;
	public static readonly RULE_packageAddress = 15;
	public static readonly RULE_bucket = 16;
	public static readonly RULE_proof = 17;
	public static readonly RULE_decimal = 18;
	public static readonly RULE_set = 19;
	public static readonly RULE_vec = 20;
	public static readonly RULE_list = 21;
	public static readonly RULE_map = 22;
	public static readonly RULE_nonFungibleIdsSet = 23;
	public static readonly RULE_nonFungibleId = 24;
	public static readonly RULE_bytes = 25;
	public static readonly RULE_value = 26;
	public static readonly RULE_type = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"manifest", "manifestInstruction", "u8", "u16", "u32", "u64", "u128", 
		"i8", "i16", "i32", "i64", "i128", "simpleString", "resourceAddress", 
		"componentAddress", "packageAddress", "bucket", "proof", "decimal", "set", 
		"vec", "list", "map", "nonFungibleIdsSet", "nonFungibleId", "bytes", "value", 
		"type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'CALL_FUNCTION'", "';'", "'CALL_METHOD'", "'CALL_METHOD_WITH_ALL_RESOURCES'", 
		"'TAKE_FROM_WORKTOP'", "'TAKE_FROM_WORKTOP_BY_AMOUNT'", "'TAKE_FROM_WORKTOP_BY_IDS'", 
		"'RETURN_TO_WORKTOP'", "'ASSERT_WORKTOP_CONTAINS'", "'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT'", 
		"'ASSERT_WORKTOP_CONTAINS_BY_IDS'", "'POP_FROM_AUTH_ZONE'", "'PUSH_TO_AUTH_ZONE'", 
		"'CREATE_PROOF_FROM_BUCKET'", "'CREATE_PROOF_FROM_AUTHZONE'", "'CREATE_PROOF_FROM_AUTHZONE_BY_AMOUNT'", 
		"'CREATE_PROOF_FROM_AUTHZONE_BY_IDS'", "'CLEAR_AUTHZONE'", "'CLONE_PROOF'", 
		"'DROP_PROOF'", "'PUBLISH_PACKAGE'", "'u8'", "'u16'", "'u32'", "'u64'", 
		"'u128'", "'i8'", "'i16'", "'i32'", "'i64'", "'i128'", "'ResourceAddress'", 
		"'('", "')'", "'ComponentAddress'", "'PackageAddress'", "'Bucket'", "'Proof'", 
		"'Decimal'", "'Set'", "'<'", "'>'", "','", "'Vec'", "'List'", "'NonFungibleId'", 
		"'Bytes'", "'U8'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"UNSIGNED_INT", "SIGNED_INT", "UNSIGNED_FLOAT", "SIGNED_FLOAT", "NUMERIC_STRING", 
		"FULL_STRING", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TransactionManifestParser._LITERAL_NAMES, TransactionManifestParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TransactionManifestParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TransactionManifest.g4"; }

	// @Override
	public get ruleNames(): string[] { return TransactionManifestParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TransactionManifestParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TransactionManifestParser._ATN, this);
	}
	// @RuleVersion(0)
	public manifest(): ManifestContext {
		let _localctx: ManifestContext = new ManifestContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TransactionManifestParser.RULE_manifest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.T__2) | (1 << TransactionManifestParser.T__3) | (1 << TransactionManifestParser.T__4) | (1 << TransactionManifestParser.T__5) | (1 << TransactionManifestParser.T__6) | (1 << TransactionManifestParser.T__7) | (1 << TransactionManifestParser.T__8) | (1 << TransactionManifestParser.T__9) | (1 << TransactionManifestParser.T__10) | (1 << TransactionManifestParser.T__11) | (1 << TransactionManifestParser.T__12) | (1 << TransactionManifestParser.T__13) | (1 << TransactionManifestParser.T__14) | (1 << TransactionManifestParser.T__15) | (1 << TransactionManifestParser.T__16) | (1 << TransactionManifestParser.T__17) | (1 << TransactionManifestParser.T__18) | (1 << TransactionManifestParser.T__19) | (1 << TransactionManifestParser.T__20))) !== 0)) {
				{
				{
				this.state = 56;
				this.manifestInstruction();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			this.match(TransactionManifestParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public manifestInstruction(): ManifestInstructionContext {
		let _localctx: ManifestInstructionContext = new ManifestInstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TransactionManifestParser.RULE_manifestInstruction);
		let _la: number;
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.match(TransactionManifestParser.T__0);
				this.state = 65;
				this.packageAddress();
				this.state = 66;
				this.simpleString();
				this.state = 67;
				this.simpleString();
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.T__31 - 32)) | (1 << (TransactionManifestParser.T__34 - 32)) | (1 << (TransactionManifestParser.T__35 - 32)) | (1 << (TransactionManifestParser.T__36 - 32)) | (1 << (TransactionManifestParser.T__37 - 32)) | (1 << (TransactionManifestParser.T__38 - 32)) | (1 << (TransactionManifestParser.T__39 - 32)) | (1 << (TransactionManifestParser.T__43 - 32)) | (1 << (TransactionManifestParser.T__44 - 32)) | (1 << (TransactionManifestParser.T__45 - 32)) | (1 << (TransactionManifestParser.UNSIGNED_INT - 32)))) !== 0)) {
					{
					{
					this.state = 68;
					this.value();
					}
					}
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 74;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.match(TransactionManifestParser.T__2);
				this.state = 77;
				this.componentAddress();
				this.state = 78;
				this.simpleString();
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.T__31 - 32)) | (1 << (TransactionManifestParser.T__34 - 32)) | (1 << (TransactionManifestParser.T__35 - 32)) | (1 << (TransactionManifestParser.T__36 - 32)) | (1 << (TransactionManifestParser.T__37 - 32)) | (1 << (TransactionManifestParser.T__38 - 32)) | (1 << (TransactionManifestParser.T__39 - 32)) | (1 << (TransactionManifestParser.T__43 - 32)) | (1 << (TransactionManifestParser.T__44 - 32)) | (1 << (TransactionManifestParser.T__45 - 32)) | (1 << (TransactionManifestParser.UNSIGNED_INT - 32)))) !== 0)) {
					{
					{
					this.state = 79;
					this.value();
					}
					}
					this.state = 84;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 85;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 87;
				this.match(TransactionManifestParser.T__3);
				this.state = 88;
				this.componentAddress();
				this.state = 89;
				this.simpleString();
				this.state = 90;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 92;
				this.match(TransactionManifestParser.T__4);
				this.state = 93;
				this.resourceAddress();
				this.state = 94;
				this.bucket();
				this.state = 95;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 97;
				this.match(TransactionManifestParser.T__5);
				this.state = 98;
				this.decimal();
				this.state = 99;
				this.resourceAddress();
				this.state = 100;
				this.bucket();
				this.state = 101;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 103;
				this.match(TransactionManifestParser.T__6);
				this.state = 104;
				this.nonFungibleIdsSet();
				this.state = 105;
				this.resourceAddress();
				this.state = 106;
				this.bucket();
				this.state = 107;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 109;
				this.match(TransactionManifestParser.T__7);
				this.state = 110;
				this.bucket();
				this.state = 111;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 113;
				this.match(TransactionManifestParser.T__8);
				this.state = 114;
				this.resourceAddress();
				this.state = 115;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 117;
				this.match(TransactionManifestParser.T__9);
				this.state = 118;
				this.decimal();
				this.state = 119;
				this.resourceAddress();
				this.state = 120;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 122;
				this.match(TransactionManifestParser.T__10);
				this.state = 123;
				this.nonFungibleIdsSet();
				this.state = 124;
				this.resourceAddress();
				this.state = 125;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 127;
				this.match(TransactionManifestParser.T__11);
				this.state = 128;
				this.proof();
				this.state = 129;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 131;
				this.match(TransactionManifestParser.T__12);
				this.state = 132;
				this.proof();
				this.state = 133;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 135;
				this.match(TransactionManifestParser.T__13);
				this.state = 136;
				this.bucket();
				this.state = 137;
				this.proof();
				this.state = 138;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 140;
				this.match(TransactionManifestParser.T__14);
				this.state = 141;
				this.resourceAddress();
				this.state = 142;
				this.proof();
				this.state = 143;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 145;
				this.match(TransactionManifestParser.T__15);
				this.state = 146;
				this.decimal();
				this.state = 147;
				this.resourceAddress();
				this.state = 148;
				this.proof();
				this.state = 149;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 151;
				this.match(TransactionManifestParser.T__16);
				this.state = 152;
				this.nonFungibleIdsSet();
				this.state = 153;
				this.resourceAddress();
				this.state = 154;
				this.proof();
				this.state = 155;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 157;
				this.match(TransactionManifestParser.T__17);
				this.state = 158;
				this.nonFungibleIdsSet();
				this.state = 159;
				this.resourceAddress();
				this.state = 160;
				this.proof();
				this.state = 161;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 163;
				this.match(TransactionManifestParser.T__18);
				this.state = 164;
				this.proof();
				this.state = 165;
				this.proof();
				this.state = 166;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 168;
				this.match(TransactionManifestParser.T__19);
				this.state = 169;
				this.proof();
				this.state = 170;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			case TransactionManifestParser.T__20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 172;
				this.match(TransactionManifestParser.T__20);
				this.state = 175;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TransactionManifestParser.T__43:
					{
					this.state = 173;
					this.vec();
					}
					break;
				case TransactionManifestParser.T__46:
					{
					this.state = 174;
					this.bytes();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 177;
				this.match(TransactionManifestParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u8(): U8Context {
		let _localctx: U8Context = new U8Context(this._ctx, this.state);
		this.enterRule(_localctx, 4, TransactionManifestParser.RULE_u8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 182;
			this.match(TransactionManifestParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u16(): U16Context {
		let _localctx: U16Context = new U16Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, TransactionManifestParser.RULE_u16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 185;
			this.match(TransactionManifestParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u32(): U32Context {
		let _localctx: U32Context = new U32Context(this._ctx, this.state);
		this.enterRule(_localctx, 8, TransactionManifestParser.RULE_u32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 188;
			this.match(TransactionManifestParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u64(): U64Context {
		let _localctx: U64Context = new U64Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, TransactionManifestParser.RULE_u64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 191;
			this.match(TransactionManifestParser.T__24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u128(): U128Context {
		let _localctx: U128Context = new U128Context(this._ctx, this.state);
		this.enterRule(_localctx, 12, TransactionManifestParser.RULE_u128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 194;
			this.match(TransactionManifestParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i8(): I8Context {
		let _localctx: I8Context = new I8Context(this._ctx, this.state);
		this.enterRule(_localctx, 14, TransactionManifestParser.RULE_i8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 197;
			this.match(TransactionManifestParser.T__26);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i16(): I16Context {
		let _localctx: I16Context = new I16Context(this._ctx, this.state);
		this.enterRule(_localctx, 16, TransactionManifestParser.RULE_i16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 200;
			this.match(TransactionManifestParser.T__27);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i32(): I32Context {
		let _localctx: I32Context = new I32Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, TransactionManifestParser.RULE_i32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 203;
			this.match(TransactionManifestParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i64(): I64Context {
		let _localctx: I64Context = new I64Context(this._ctx, this.state);
		this.enterRule(_localctx, 20, TransactionManifestParser.RULE_i64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 206;
			this.match(TransactionManifestParser.T__29);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i128(): I128Context {
		let _localctx: I128Context = new I128Context(this._ctx, this.state);
		this.enterRule(_localctx, 22, TransactionManifestParser.RULE_i128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(TransactionManifestParser.UNSIGNED_INT);
			this.state = 209;
			this.match(TransactionManifestParser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleString(): SimpleStringContext {
		let _localctx: SimpleStringContext = new SimpleStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TransactionManifestParser.RULE_simpleString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			_la = this._input.LA(1);
			if (!(_la === TransactionManifestParser.NUMERIC_STRING || _la === TransactionManifestParser.FULL_STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceAddress(): ResourceAddressContext {
		let _localctx: ResourceAddressContext = new ResourceAddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TransactionManifestParser.RULE_resourceAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(TransactionManifestParser.T__31);
			this.state = 214;
			this.match(TransactionManifestParser.T__32);
			this.state = 215;
			this.simpleString();
			this.state = 216;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentAddress(): ComponentAddressContext {
		let _localctx: ComponentAddressContext = new ComponentAddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TransactionManifestParser.RULE_componentAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(TransactionManifestParser.T__34);
			this.state = 219;
			this.match(TransactionManifestParser.T__32);
			this.state = 220;
			this.simpleString();
			this.state = 221;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageAddress(): PackageAddressContext {
		let _localctx: PackageAddressContext = new PackageAddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TransactionManifestParser.RULE_packageAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(TransactionManifestParser.T__35);
			this.state = 224;
			this.match(TransactionManifestParser.T__32);
			this.state = 225;
			this.simpleString();
			this.state = 226;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bucket(): BucketContext {
		let _localctx: BucketContext = new BucketContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TransactionManifestParser.RULE_bucket);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.match(TransactionManifestParser.T__36);
			this.state = 229;
			this.match(TransactionManifestParser.T__32);
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.UNSIGNED_INT:
				{
				this.state = 230;
				this.u32();
				}
				break;
			case TransactionManifestParser.NUMERIC_STRING:
			case TransactionManifestParser.FULL_STRING:
				{
				this.state = 231;
				this.simpleString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 234;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public proof(): ProofContext {
		let _localctx: ProofContext = new ProofContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TransactionManifestParser.RULE_proof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(TransactionManifestParser.T__37);
			this.state = 237;
			this.match(TransactionManifestParser.T__32);
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.UNSIGNED_INT:
				{
				this.state = 238;
				this.u32();
				}
				break;
			case TransactionManifestParser.NUMERIC_STRING:
			case TransactionManifestParser.FULL_STRING:
				{
				this.state = 239;
				this.simpleString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 242;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimal(): DecimalContext {
		let _localctx: DecimalContext = new DecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TransactionManifestParser.RULE_decimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(TransactionManifestParser.T__38);
			this.state = 245;
			this.match(TransactionManifestParser.T__32);
			this.state = 246;
			this.match(TransactionManifestParser.NUMERIC_STRING);
			this.state = 247;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TransactionManifestParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(TransactionManifestParser.T__39);
			this.state = 250;
			this.match(TransactionManifestParser.T__40);
			this.state = 251;
			this.type();
			this.state = 252;
			this.match(TransactionManifestParser.T__41);
			this.state = 253;
			this.match(TransactionManifestParser.T__32);
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.T__31 - 32)) | (1 << (TransactionManifestParser.T__34 - 32)) | (1 << (TransactionManifestParser.T__35 - 32)) | (1 << (TransactionManifestParser.T__36 - 32)) | (1 << (TransactionManifestParser.T__37 - 32)) | (1 << (TransactionManifestParser.T__38 - 32)) | (1 << (TransactionManifestParser.T__39 - 32)) | (1 << (TransactionManifestParser.T__43 - 32)) | (1 << (TransactionManifestParser.T__44 - 32)) | (1 << (TransactionManifestParser.T__45 - 32)) | (1 << (TransactionManifestParser.UNSIGNED_INT - 32)))) !== 0)) {
				{
				{
				this.state = 254;
				this.value();
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TransactionManifestParser.T__42) {
					{
					this.state = 255;
					this.match(TransactionManifestParser.T__42);
					}
				}

				}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 263;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vec(): VecContext {
		let _localctx: VecContext = new VecContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TransactionManifestParser.RULE_vec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(TransactionManifestParser.T__43);
			this.state = 266;
			this.match(TransactionManifestParser.T__40);
			this.state = 267;
			this.type();
			this.state = 268;
			this.match(TransactionManifestParser.T__41);
			this.state = 269;
			this.match(TransactionManifestParser.T__32);
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.T__31 - 32)) | (1 << (TransactionManifestParser.T__34 - 32)) | (1 << (TransactionManifestParser.T__35 - 32)) | (1 << (TransactionManifestParser.T__36 - 32)) | (1 << (TransactionManifestParser.T__37 - 32)) | (1 << (TransactionManifestParser.T__38 - 32)) | (1 << (TransactionManifestParser.T__39 - 32)) | (1 << (TransactionManifestParser.T__43 - 32)) | (1 << (TransactionManifestParser.T__44 - 32)) | (1 << (TransactionManifestParser.T__45 - 32)) | (1 << (TransactionManifestParser.UNSIGNED_INT - 32)))) !== 0)) {
				{
				{
				this.state = 270;
				this.value();
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TransactionManifestParser.T__42) {
					{
					this.state = 271;
					this.match(TransactionManifestParser.T__42);
					}
				}

				}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 279;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TransactionManifestParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(TransactionManifestParser.T__44);
			this.state = 282;
			this.match(TransactionManifestParser.T__40);
			this.state = 283;
			this.type();
			this.state = 284;
			this.match(TransactionManifestParser.T__41);
			this.state = 285;
			this.match(TransactionManifestParser.T__32);
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.T__31 - 32)) | (1 << (TransactionManifestParser.T__34 - 32)) | (1 << (TransactionManifestParser.T__35 - 32)) | (1 << (TransactionManifestParser.T__36 - 32)) | (1 << (TransactionManifestParser.T__37 - 32)) | (1 << (TransactionManifestParser.T__38 - 32)) | (1 << (TransactionManifestParser.T__39 - 32)) | (1 << (TransactionManifestParser.T__43 - 32)) | (1 << (TransactionManifestParser.T__44 - 32)) | (1 << (TransactionManifestParser.T__45 - 32)) | (1 << (TransactionManifestParser.UNSIGNED_INT - 32)))) !== 0)) {
				{
				{
				this.state = 286;
				this.value();
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TransactionManifestParser.T__42) {
					{
					this.state = 287;
					this.match(TransactionManifestParser.T__42);
					}
				}

				}
				}
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 295;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map(): MapContext {
		let _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TransactionManifestParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(TransactionManifestParser.T__44);
			this.state = 298;
			this.match(TransactionManifestParser.T__40);
			this.state = 299;
			this.type();
			this.state = 300;
			this.match(TransactionManifestParser.T__42);
			this.state = 301;
			this.type();
			this.state = 302;
			this.match(TransactionManifestParser.T__41);
			this.state = 303;
			this.match(TransactionManifestParser.T__32);
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.T__31 - 32)) | (1 << (TransactionManifestParser.T__34 - 32)) | (1 << (TransactionManifestParser.T__35 - 32)) | (1 << (TransactionManifestParser.T__36 - 32)) | (1 << (TransactionManifestParser.T__37 - 32)) | (1 << (TransactionManifestParser.T__38 - 32)) | (1 << (TransactionManifestParser.T__39 - 32)) | (1 << (TransactionManifestParser.T__43 - 32)) | (1 << (TransactionManifestParser.T__44 - 32)) | (1 << (TransactionManifestParser.T__45 - 32)) | (1 << (TransactionManifestParser.UNSIGNED_INT - 32)))) !== 0)) {
				{
				{
				this.state = 304;
				this.value();
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TransactionManifestParser.T__42) {
					{
					this.state = 305;
					this.match(TransactionManifestParser.T__42);
					}
				}

				}
				}
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 313;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonFungibleIdsSet(): NonFungibleIdsSetContext {
		let _localctx: NonFungibleIdsSetContext = new NonFungibleIdsSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TransactionManifestParser.RULE_nonFungibleIdsSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(TransactionManifestParser.T__39);
			this.state = 316;
			this.match(TransactionManifestParser.T__40);
			this.state = 317;
			this.match(TransactionManifestParser.T__45);
			this.state = 318;
			this.match(TransactionManifestParser.T__41);
			this.state = 319;
			this.match(TransactionManifestParser.T__32);
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TransactionManifestParser.T__45) {
				{
				{
				this.state = 320;
				this.nonFungibleId();
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TransactionManifestParser.T__42) {
					{
					this.state = 321;
					this.match(TransactionManifestParser.T__42);
					}
				}

				}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 329;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonFungibleId(): NonFungibleIdContext {
		let _localctx: NonFungibleIdContext = new NonFungibleIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TransactionManifestParser.RULE_nonFungibleId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(TransactionManifestParser.T__45);
			this.state = 332;
			this.match(TransactionManifestParser.T__32);
			this.state = 333;
			_la = this._input.LA(1);
			if (!(_la === TransactionManifestParser.NUMERIC_STRING || _la === TransactionManifestParser.FULL_STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 334;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bytes(): BytesContext {
		let _localctx: BytesContext = new BytesContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TransactionManifestParser.RULE_bytes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(TransactionManifestParser.T__46);
			this.state = 337;
			this.match(TransactionManifestParser.T__32);
			this.state = 338;
			this.simpleString();
			this.state = 339;
			this.match(TransactionManifestParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TransactionManifestParser.RULE_value);
		try {
			this.state = 362;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.u8();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.u16();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 343;
				this.u32();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 344;
				this.u64();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 345;
				this.u128();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 346;
				this.i8();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 347;
				this.i16();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 348;
				this.i32();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 349;
				this.i64();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 350;
				this.i128();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 351;
				this.resourceAddress();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 352;
				this.packageAddress();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 353;
				this.componentAddress();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 354;
				this.bucket();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 355;
				this.proof();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 356;
				this.decimal();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 357;
				this.set();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 358;
				this.vec();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 359;
				this.list();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 360;
				this.map();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 361;
				this.nonFungibleId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, TransactionManifestParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			_la = this._input.LA(1);
			if (!(_la === TransactionManifestParser.T__45 || _la === TransactionManifestParser.T__47)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03:\u0171\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x07\x02<\n\x02\f\x02\x0E\x02?\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03H\n\x03\f\x03\x0E\x03" +
		"K\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03S\n\x03" +
		"\f\x03\x0E\x03V\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\xB2\n\x03\x03\x03\x03\x03\x05\x03\xB6" +
		"\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x05\x12\xEB\n\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\xF3\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x05\x15\u0103\n\x15\x07\x15\u0105\n\x15\f\x15\x0E\x15\u0108\v\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x05\x16\u0113\n\x16\x07\x16\u0115\n\x16\f\x16\x0E\x16\u0118\v\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05" +
		"\x17\u0123\n\x17\x07\x17\u0125\n\x17\f\x17\x0E\x17\u0128\v\x17\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u0135\n\x18\x07\x18\u0137\n\x18\f\x18\x0E\x18\u013A\v" +
		"\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\u0145\n\x19\x07\x19\u0147\n\x19\f\x19\x0E\x19\u014A\v\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u016D\n\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x02\x02\x02\x1E\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02\x02\x04\x03\x0278\x04\x020022\x02\u018B\x02=\x03\x02\x02\x02\x04" +
		"\xB5\x03\x02\x02\x02\x06\xB7\x03\x02\x02\x02\b\xBA\x03\x02\x02\x02\n\xBD" +
		"\x03\x02\x02\x02\f\xC0\x03\x02\x02\x02\x0E\xC3\x03\x02\x02\x02\x10\xC6" +
		"\x03\x02\x02\x02\x12\xC9\x03\x02\x02\x02\x14\xCC\x03\x02\x02\x02\x16\xCF" +
		"\x03\x02\x02\x02\x18\xD2\x03\x02\x02\x02\x1A\xD5\x03\x02\x02\x02\x1C\xD7" +
		"\x03\x02\x02\x02\x1E\xDC\x03\x02\x02\x02 \xE1\x03\x02\x02\x02\"\xE6\x03" +
		"\x02\x02\x02$\xEE\x03\x02\x02\x02&\xF6\x03\x02\x02\x02(\xFB\x03\x02\x02" +
		"\x02*\u010B\x03\x02\x02\x02,\u011B\x03\x02\x02\x02.\u012B\x03\x02\x02" +
		"\x020\u013D\x03\x02\x02\x022\u014D\x03\x02\x02\x024\u0152\x03\x02\x02" +
		"\x026\u016C\x03\x02\x02\x028\u016E\x03\x02\x02\x02:<\x05\x04\x03\x02;" +
		":\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02" +
		">@\x03\x02\x02\x02?=\x03\x02\x02\x02@A\x07\x02\x02\x03A\x03\x03\x02\x02" +
		"\x02BC\x07\x03\x02\x02CD\x05 \x11\x02DE\x05\x1A\x0E\x02EI\x05\x1A\x0E" +
		"\x02FH\x056\x1C\x02GF\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02" +
		"\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KI\x03\x02\x02\x02LM\x07\x04\x02" +
		"\x02M\xB6\x03\x02\x02\x02NO\x07\x05\x02\x02OP\x05\x1E\x10\x02PT\x05\x1A" +
		"\x0E\x02QS\x056\x1C\x02RQ\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02" +
		"\x02\x02TU\x03\x02\x02\x02UW\x03\x02\x02\x02VT\x03\x02\x02\x02WX\x07\x04" +
		"\x02\x02X\xB6\x03\x02\x02\x02YZ\x07\x06\x02\x02Z[\x05\x1E\x10\x02[\\\x05" +
		"\x1A\x0E\x02\\]\x07\x04\x02\x02]\xB6\x03\x02\x02\x02^_\x07\x07\x02\x02" +
		"_`\x05\x1C\x0F\x02`a\x05\"\x12\x02ab\x07\x04\x02\x02b\xB6\x03\x02\x02" +
		"\x02cd\x07\b\x02\x02de\x05&\x14\x02ef\x05\x1C\x0F\x02fg\x05\"\x12\x02" +
		"gh\x07\x04\x02\x02h\xB6\x03\x02\x02\x02ij\x07\t\x02\x02jk\x050\x19\x02" +
		"kl\x05\x1C\x0F\x02lm\x05\"\x12\x02mn\x07\x04\x02\x02n\xB6\x03\x02\x02" +
		"\x02op\x07\n\x02\x02pq\x05\"\x12\x02qr\x07\x04\x02\x02r\xB6\x03\x02\x02" +
		"\x02st\x07\v\x02\x02tu\x05\x1C\x0F\x02uv\x07\x04\x02\x02v\xB6\x03\x02" +
		"\x02\x02wx\x07\f\x02\x02xy\x05&\x14\x02yz\x05\x1C\x0F\x02z{\x07\x04\x02" +
		"\x02{\xB6\x03\x02\x02\x02|}\x07\r\x02\x02}~\x050\x19\x02~\x7F\x05\x1C" +
		"\x0F\x02\x7F\x80\x07\x04\x02\x02\x80\xB6\x03\x02\x02\x02\x81\x82\x07\x0E" +
		"\x02\x02\x82\x83\x05$\x13\x02\x83\x84\x07\x04\x02\x02\x84\xB6\x03\x02" +
		"\x02\x02\x85\x86\x07\x0F\x02\x02\x86\x87\x05$\x13\x02\x87\x88\x07\x04" +
		"\x02\x02\x88\xB6\x03\x02\x02\x02\x89\x8A\x07\x10\x02\x02\x8A\x8B\x05\"" +
		"\x12\x02\x8B\x8C\x05$\x13\x02\x8C\x8D\x07\x04\x02\x02\x8D\xB6\x03\x02" +
		"\x02\x02\x8E\x8F\x07\x11\x02\x02\x8F\x90\x05\x1C\x0F\x02\x90\x91\x05$" +
		"\x13\x02\x91\x92\x07\x04\x02\x02\x92\xB6\x03\x02\x02\x02\x93\x94\x07\x12" +
		"\x02\x02\x94\x95\x05&\x14\x02\x95\x96\x05\x1C\x0F\x02\x96\x97\x05$\x13" +
		"\x02\x97\x98\x07\x04\x02\x02\x98\xB6\x03\x02\x02\x02\x99\x9A\x07\x13\x02" +
		"\x02\x9A\x9B\x050\x19\x02\x9B\x9C\x05\x1C\x0F\x02\x9C\x9D\x05$\x13\x02" +
		"\x9D\x9E\x07\x04\x02\x02\x9E\xB6\x03\x02\x02\x02\x9F\xA0\x07\x14\x02\x02" +
		"\xA0\xA1\x050\x19\x02\xA1\xA2\x05\x1C\x0F\x02\xA2\xA3\x05$\x13\x02\xA3" +
		"\xA4\x07\x04\x02\x02\xA4\xB6\x03\x02\x02\x02\xA5\xA6\x07\x15\x02\x02\xA6" +
		"\xA7\x05$\x13\x02\xA7\xA8\x05$\x13\x02\xA8\xA9\x07\x04\x02\x02\xA9\xB6" +
		"\x03\x02\x02\x02\xAA\xAB\x07\x16\x02\x02\xAB\xAC\x05$\x13\x02\xAC\xAD" +
		"\x07\x04\x02\x02\xAD\xB6\x03\x02\x02\x02\xAE\xB1\x07\x17\x02\x02\xAF\xB2" +
		"\x05*\x16\x02\xB0\xB2\x054\x1B\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB0\x03" +
		"\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x07\x04\x02\x02\xB4\xB6\x03" +
		"\x02\x02\x02\xB5B\x03\x02\x02\x02\xB5N\x03\x02\x02\x02\xB5Y\x03\x02\x02" +
		"\x02\xB5^\x03\x02\x02\x02\xB5c\x03\x02\x02\x02\xB5i\x03\x02\x02\x02\xB5" +
		"o\x03\x02\x02\x02\xB5s\x03\x02\x02\x02\xB5w\x03\x02\x02\x02\xB5|\x03\x02" +
		"\x02\x02\xB5\x81\x03\x02\x02\x02\xB5\x85\x03\x02\x02\x02\xB5\x89\x03\x02" +
		"\x02\x02\xB5\x8E\x03\x02\x02\x02\xB5\x93\x03\x02\x02\x02\xB5\x99\x03\x02" +
		"\x02\x02\xB5\x9F\x03\x02\x02\x02\xB5\xA5\x03\x02\x02\x02\xB5\xAA\x03\x02" +
		"\x02\x02\xB5\xAE\x03\x02\x02\x02\xB6\x05\x03\x02\x02\x02\xB7\xB8\x073" +
		"\x02\x02\xB8\xB9\x07\x18\x02\x02\xB9\x07\x03\x02\x02\x02\xBA\xBB\x073" +
		"\x02\x02\xBB\xBC\x07\x19\x02\x02\xBC\t\x03\x02\x02\x02\xBD\xBE\x073\x02" +
		"\x02\xBE\xBF\x07\x1A\x02\x02\xBF\v\x03\x02\x02\x02\xC0\xC1\x073\x02\x02" +
		"\xC1\xC2\x07\x1B\x02\x02\xC2\r\x03\x02\x02\x02\xC3\xC4\x073\x02\x02\xC4" +
		"\xC5\x07\x1C\x02\x02\xC5\x0F\x03\x02\x02\x02\xC6\xC7\x073\x02\x02\xC7" +
		"\xC8\x07\x1D\x02\x02\xC8\x11\x03\x02\x02\x02\xC9\xCA\x073\x02\x02\xCA" +
		"\xCB\x07\x1E\x02\x02\xCB\x13\x03\x02\x02\x02\xCC\xCD\x073\x02\x02\xCD" +
		"\xCE\x07\x1F\x02\x02\xCE\x15\x03\x02\x02\x02\xCF\xD0\x073\x02\x02\xD0" +
		"\xD1\x07 \x02\x02\xD1\x17\x03\x02\x02\x02\xD2\xD3\x073\x02\x02\xD3\xD4" +
		"\x07!\x02\x02\xD4\x19\x03\x02\x02\x02\xD5\xD6\t\x02\x02\x02\xD6\x1B\x03" +
		"\x02\x02\x02\xD7\xD8\x07\"\x02\x02\xD8\xD9\x07#\x02\x02\xD9\xDA\x05\x1A" +
		"\x0E\x02\xDA\xDB\x07$\x02\x02\xDB\x1D\x03\x02\x02\x02\xDC\xDD\x07%\x02" +
		"\x02\xDD\xDE\x07#\x02\x02\xDE\xDF\x05\x1A\x0E\x02\xDF\xE0\x07$\x02\x02" +
		"\xE0\x1F\x03\x02\x02\x02\xE1\xE2\x07&\x02\x02\xE2\xE3\x07#\x02\x02\xE3" +
		"\xE4\x05\x1A\x0E\x02\xE4\xE5\x07$\x02\x02\xE5!\x03\x02\x02\x02\xE6\xE7" +
		"\x07\'\x02\x02\xE7\xEA\x07#\x02\x02\xE8\xEB\x05\n\x06\x02\xE9\xEB\x05" +
		"\x1A\x0E\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEC\x03" +
		"\x02\x02\x02\xEC\xED\x07$\x02\x02\xED#\x03\x02\x02\x02\xEE\xEF\x07(\x02" +
		"\x02\xEF\xF2\x07#\x02\x02\xF0\xF3\x05\n\x06\x02\xF1\xF3\x05\x1A\x0E\x02" +
		"\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02" +
		"\xF4\xF5\x07$\x02\x02\xF5%\x03\x02\x02\x02\xF6\xF7\x07)\x02\x02\xF7\xF8" +
		"\x07#\x02\x02\xF8\xF9\x077\x02\x02\xF9\xFA\x07$\x02\x02\xFA\'\x03\x02" +
		"\x02\x02\xFB\xFC\x07*\x02\x02\xFC\xFD\x07+\x02\x02\xFD\xFE\x058\x1D\x02" +
		"\xFE\xFF\x07,\x02\x02\xFF\u0106\x07#\x02\x02\u0100\u0102\x056\x1C\x02" +
		"\u0101\u0103\x07-\x02\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03" +
		"\x02\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\u0100\x03\x02\x02\x02\u0105" +
		"\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02" +
		"\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109" +
		"\u010A\x07$\x02\x02\u010A)\x03\x02\x02\x02\u010B\u010C\x07.\x02\x02\u010C" +
		"\u010D\x07+\x02\x02\u010D\u010E\x058\x1D\x02\u010E\u010F\x07,\x02\x02" +
		"\u010F\u0116\x07#\x02\x02\u0110\u0112\x056\x1C\x02\u0111\u0113\x07-\x02" +
		"\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0115" +
		"\x03\x02\x02\x02\u0114\u0110\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02" +
		"\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03" +
		"\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\x07$\x02\x02\u011A" +
		"+\x03\x02\x02\x02\u011B\u011C\x07/\x02\x02\u011C\u011D\x07+\x02\x02\u011D" +
		"\u011E\x058\x1D\x02\u011E\u011F\x07,\x02\x02\u011F\u0126\x07#\x02\x02" +
		"\u0120\u0122\x056\x1C\x02\u0121\u0123\x07-\x02\x02\u0122\u0121\x03\x02" +
		"\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124" +
		"\u0120\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02" +
		"\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0129\x03\x02\x02\x02\u0128" +
		"\u0126\x03\x02\x02\x02\u0129\u012A\x07$\x02\x02\u012A-\x03\x02\x02\x02" +
		"\u012B\u012C\x07/\x02\x02\u012C\u012D\x07+\x02\x02\u012D\u012E\x058\x1D" +
		"\x02\u012E\u012F\x07-\x02\x02\u012F\u0130\x058\x1D\x02\u0130\u0131\x07" +
		",\x02\x02\u0131\u0138\x07#\x02\x02\u0132\u0134\x056\x1C\x02\u0133\u0135" +
		"\x07-\x02\x02\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02" +
		"\u0135\u0137\x03\x02\x02\x02\u0136\u0132\x03\x02\x02\x02\u0137\u013A\x03" +
		"\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139" +
		"\u013B\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013B\u013C\x07$\x02" +
		"\x02\u013C/\x03\x02\x02\x02\u013D\u013E\x07*\x02\x02\u013E\u013F\x07+" +
		"\x02\x02\u013F\u0140\x070\x02\x02\u0140\u0141\x07,\x02\x02\u0141\u0148" +
		"\x07#\x02\x02\u0142\u0144\x052\x1A\x02\u0143\u0145\x07-\x02\x02\u0144" +
		"\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x03\x02" +
		"\x02\x02\u0146\u0142\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148" +
		"\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014B\x03\x02" +
		"\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014C\x07$\x02\x02\u014C1\x03" +
		"\x02\x02\x02\u014D\u014E\x070\x02\x02\u014E\u014F\x07#\x02\x02\u014F\u0150" +
		"\t\x02\x02\x02\u0150\u0151\x07$\x02\x02\u01513\x03\x02\x02\x02\u0152\u0153" +
		"\x071\x02\x02\u0153\u0154\x07#\x02\x02\u0154\u0155\x05\x1A\x0E\x02\u0155" +
		"\u0156\x07$\x02\x02\u01565\x03\x02\x02\x02\u0157\u016D\x05\x06\x04\x02" +
		"\u0158\u016D\x05\b\x05\x02\u0159\u016D\x05\n\x06\x02\u015A\u016D\x05\f" +
		"\x07\x02\u015B\u016D\x05\x0E\b\x02\u015C\u016D\x05\x10\t\x02\u015D\u016D" +
		"\x05\x12\n\x02\u015E\u016D\x05\x14\v\x02\u015F\u016D\x05\x16\f\x02\u0160" +
		"\u016D\x05\x18\r\x02\u0161\u016D\x05\x1C\x0F\x02\u0162\u016D\x05 \x11" +
		"\x02\u0163\u016D\x05\x1E\x10\x02\u0164\u016D\x05\"\x12\x02\u0165\u016D" +
		"\x05$\x13\x02\u0166\u016D\x05&\x14\x02\u0167\u016D\x05(\x15\x02\u0168" +
		"\u016D\x05*\x16\x02\u0169\u016D\x05,\x17\x02\u016A\u016D\x05.\x18\x02" +
		"\u016B\u016D\x052\x1A\x02\u016C\u0157\x03\x02\x02\x02\u016C\u0158\x03" +
		"\x02\x02\x02\u016C\u0159\x03\x02\x02\x02\u016C\u015A\x03\x02\x02\x02\u016C" +
		"\u015B\x03\x02\x02\x02\u016C\u015C\x03\x02\x02\x02\u016C\u015D\x03\x02" +
		"\x02\x02\u016C\u015E\x03\x02\x02\x02\u016C\u015F\x03\x02\x02\x02\u016C" +
		"\u0160\x03\x02\x02\x02\u016C\u0161\x03\x02\x02\x02\u016C\u0162\x03\x02" +
		"\x02\x02\u016C\u0163\x03\x02\x02\x02\u016C\u0164\x03\x02\x02\x02\u016C" +
		"\u0165\x03\x02\x02\x02\u016C\u0166\x03\x02\x02\x02\u016C\u0167\x03\x02" +
		"\x02\x02\u016C\u0168\x03\x02\x02\x02\u016C\u0169\x03\x02\x02\x02\u016C" +
		"\u016A\x03\x02\x02\x02\u016C\u016B\x03\x02\x02\x02\u016D7\x03\x02\x02" +
		"\x02\u016E\u016F\t\x03\x02\x02\u016F9\x03\x02\x02\x02\x14=IT\xB1\xB5\xEA" +
		"\xF2\u0102\u0106\u0112\u0116\u0122\u0126\u0134\u0138\u0144\u0148\u016C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TransactionManifestParser.__ATN) {
			TransactionManifestParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TransactionManifestParser._serializedATN));
		}

		return TransactionManifestParser.__ATN;
	}

}

export class ManifestContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TransactionManifestParser.EOF, 0); }
	public manifestInstruction(): ManifestInstructionContext[];
	public manifestInstruction(i: number): ManifestInstructionContext;
	public manifestInstruction(i?: number): ManifestInstructionContext | ManifestInstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ManifestInstructionContext);
		} else {
			return this.getRuleContext(i, ManifestInstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_manifest; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterManifest) {
			listener.enterManifest(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitManifest) {
			listener.exitManifest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitManifest) {
			return visitor.visitManifest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ManifestInstructionContext extends ParserRuleContext {
	public packageAddress(): PackageAddressContext | undefined {
		return this.tryGetRuleContext(0, PackageAddressContext);
	}
	public simpleString(): SimpleStringContext[];
	public simpleString(i: number): SimpleStringContext;
	public simpleString(i?: number): SimpleStringContext | SimpleStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleStringContext);
		} else {
			return this.getRuleContext(i, SimpleStringContext);
		}
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public componentAddress(): ComponentAddressContext | undefined {
		return this.tryGetRuleContext(0, ComponentAddressContext);
	}
	public resourceAddress(): ResourceAddressContext | undefined {
		return this.tryGetRuleContext(0, ResourceAddressContext);
	}
	public bucket(): BucketContext | undefined {
		return this.tryGetRuleContext(0, BucketContext);
	}
	public decimal(): DecimalContext | undefined {
		return this.tryGetRuleContext(0, DecimalContext);
	}
	public nonFungibleIdsSet(): NonFungibleIdsSetContext | undefined {
		return this.tryGetRuleContext(0, NonFungibleIdsSetContext);
	}
	public proof(): ProofContext[];
	public proof(i: number): ProofContext;
	public proof(i?: number): ProofContext | ProofContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProofContext);
		} else {
			return this.getRuleContext(i, ProofContext);
		}
	}
	public vec(): VecContext | undefined {
		return this.tryGetRuleContext(0, VecContext);
	}
	public bytes(): BytesContext | undefined {
		return this.tryGetRuleContext(0, BytesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_manifestInstruction; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterManifestInstruction) {
			listener.enterManifestInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitManifestInstruction) {
			listener.exitManifestInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitManifestInstruction) {
			return visitor.visitManifestInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class U8Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_u8; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterU8) {
			listener.enterU8(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitU8) {
			listener.exitU8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitU8) {
			return visitor.visitU8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class U16Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_u16; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterU16) {
			listener.enterU16(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitU16) {
			listener.exitU16(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitU16) {
			return visitor.visitU16(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class U32Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_u32; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterU32) {
			listener.enterU32(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitU32) {
			listener.exitU32(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitU32) {
			return visitor.visitU32(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class U64Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_u64; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterU64) {
			listener.enterU64(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitU64) {
			listener.exitU64(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitU64) {
			return visitor.visitU64(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class U128Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_u128; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterU128) {
			listener.enterU128(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitU128) {
			listener.exitU128(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitU128) {
			return visitor.visitU128(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class I8Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_i8; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterI8) {
			listener.enterI8(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitI8) {
			listener.exitI8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitI8) {
			return visitor.visitI8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class I16Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_i16; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterI16) {
			listener.enterI16(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitI16) {
			listener.exitI16(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitI16) {
			return visitor.visitI16(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class I32Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_i32; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterI32) {
			listener.enterI32(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitI32) {
			listener.exitI32(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitI32) {
			return visitor.visitI32(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class I64Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_i64; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterI64) {
			listener.enterI64(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitI64) {
			listener.exitI64(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitI64) {
			return visitor.visitI64(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class I128Context extends ParserRuleContext {
	public UNSIGNED_INT(): TerminalNode { return this.getToken(TransactionManifestParser.UNSIGNED_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_i128; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterI128) {
			listener.enterI128(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitI128) {
			listener.exitI128(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitI128) {
			return visitor.visitI128(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStringContext extends ParserRuleContext {
	public NUMERIC_STRING(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.NUMERIC_STRING, 0); }
	public FULL_STRING(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.FULL_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_simpleString; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSimpleString) {
			listener.enterSimpleString(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSimpleString) {
			listener.exitSimpleString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSimpleString) {
			return visitor.visitSimpleString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceAddressContext extends ParserRuleContext {
	public simpleString(): SimpleStringContext {
		return this.getRuleContext(0, SimpleStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_resourceAddress; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterResourceAddress) {
			listener.enterResourceAddress(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitResourceAddress) {
			listener.exitResourceAddress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitResourceAddress) {
			return visitor.visitResourceAddress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentAddressContext extends ParserRuleContext {
	public simpleString(): SimpleStringContext {
		return this.getRuleContext(0, SimpleStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_componentAddress; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterComponentAddress) {
			listener.enterComponentAddress(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitComponentAddress) {
			listener.exitComponentAddress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitComponentAddress) {
			return visitor.visitComponentAddress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageAddressContext extends ParserRuleContext {
	public simpleString(): SimpleStringContext {
		return this.getRuleContext(0, SimpleStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_packageAddress; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterPackageAddress) {
			listener.enterPackageAddress(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitPackageAddress) {
			listener.exitPackageAddress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitPackageAddress) {
			return visitor.visitPackageAddress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BucketContext extends ParserRuleContext {
	public u32(): U32Context | undefined {
		return this.tryGetRuleContext(0, U32Context);
	}
	public simpleString(): SimpleStringContext | undefined {
		return this.tryGetRuleContext(0, SimpleStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_bucket; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterBucket) {
			listener.enterBucket(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitBucket) {
			listener.exitBucket(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitBucket) {
			return visitor.visitBucket(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProofContext extends ParserRuleContext {
	public u32(): U32Context | undefined {
		return this.tryGetRuleContext(0, U32Context);
	}
	public simpleString(): SimpleStringContext | undefined {
		return this.tryGetRuleContext(0, SimpleStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_proof; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterProof) {
			listener.enterProof(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitProof) {
			listener.exitProof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitProof) {
			return visitor.visitProof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecimalContext extends ParserRuleContext {
	public NUMERIC_STRING(): TerminalNode { return this.getToken(TransactionManifestParser.NUMERIC_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_decimal; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterDecimal) {
			listener.enterDecimal(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitDecimal) {
			listener.exitDecimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitDecimal) {
			return visitor.visitDecimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_set; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSet) {
			listener.enterSet(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSet) {
			listener.exitSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSet) {
			return visitor.visitSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VecContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_vec; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterVec) {
			listener.enterVec(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitVec) {
			listener.exitVec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitVec) {
			return visitor.visitVec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_list; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_map; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitMap) {
			return visitor.visitMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonFungibleIdsSetContext extends ParserRuleContext {
	public nonFungibleId(): NonFungibleIdContext[];
	public nonFungibleId(i: number): NonFungibleIdContext;
	public nonFungibleId(i?: number): NonFungibleIdContext | NonFungibleIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NonFungibleIdContext);
		} else {
			return this.getRuleContext(i, NonFungibleIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_nonFungibleIdsSet; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterNonFungibleIdsSet) {
			listener.enterNonFungibleIdsSet(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitNonFungibleIdsSet) {
			listener.exitNonFungibleIdsSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitNonFungibleIdsSet) {
			return visitor.visitNonFungibleIdsSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonFungibleIdContext extends ParserRuleContext {
	public FULL_STRING(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.FULL_STRING, 0); }
	public NUMERIC_STRING(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.NUMERIC_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_nonFungibleId; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterNonFungibleId) {
			listener.enterNonFungibleId(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitNonFungibleId) {
			listener.exitNonFungibleId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitNonFungibleId) {
			return visitor.visitNonFungibleId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BytesContext extends ParserRuleContext {
	public simpleString(): SimpleStringContext {
		return this.getRuleContext(0, SimpleStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_bytes; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterBytes) {
			listener.enterBytes(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitBytes) {
			listener.exitBytes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitBytes) {
			return visitor.visitBytes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public u8(): U8Context | undefined {
		return this.tryGetRuleContext(0, U8Context);
	}
	public u16(): U16Context | undefined {
		return this.tryGetRuleContext(0, U16Context);
	}
	public u32(): U32Context | undefined {
		return this.tryGetRuleContext(0, U32Context);
	}
	public u64(): U64Context | undefined {
		return this.tryGetRuleContext(0, U64Context);
	}
	public u128(): U128Context | undefined {
		return this.tryGetRuleContext(0, U128Context);
	}
	public i8(): I8Context | undefined {
		return this.tryGetRuleContext(0, I8Context);
	}
	public i16(): I16Context | undefined {
		return this.tryGetRuleContext(0, I16Context);
	}
	public i32(): I32Context | undefined {
		return this.tryGetRuleContext(0, I32Context);
	}
	public i64(): I64Context | undefined {
		return this.tryGetRuleContext(0, I64Context);
	}
	public i128(): I128Context | undefined {
		return this.tryGetRuleContext(0, I128Context);
	}
	public resourceAddress(): ResourceAddressContext | undefined {
		return this.tryGetRuleContext(0, ResourceAddressContext);
	}
	public packageAddress(): PackageAddressContext | undefined {
		return this.tryGetRuleContext(0, PackageAddressContext);
	}
	public componentAddress(): ComponentAddressContext | undefined {
		return this.tryGetRuleContext(0, ComponentAddressContext);
	}
	public bucket(): BucketContext | undefined {
		return this.tryGetRuleContext(0, BucketContext);
	}
	public proof(): ProofContext | undefined {
		return this.tryGetRuleContext(0, ProofContext);
	}
	public decimal(): DecimalContext | undefined {
		return this.tryGetRuleContext(0, DecimalContext);
	}
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public vec(): VecContext | undefined {
		return this.tryGetRuleContext(0, VecContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public map(): MapContext | undefined {
		return this.tryGetRuleContext(0, MapContext);
	}
	public nonFungibleId(): NonFungibleIdContext | undefined {
		return this.tryGetRuleContext(0, NonFungibleIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_value; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_type; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


