// Generated from src/antlr/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly BOOL_LITERAL = 2;
	public static readonly I8_LITERAL = 3;
	public static readonly I16_LITERAL = 4;
	public static readonly I32_LITERAL = 5;
	public static readonly I64_LITERAL = 6;
	public static readonly I128_LITERAL = 7;
	public static readonly U8_LITERAL = 8;
	public static readonly U16_LITERAL = 9;
	public static readonly U32_LITERAL = 10;
	public static readonly U64_LITERAL = 11;
	public static readonly U128_LITERAL = 12;
	public static readonly TRUE = 13;
	public static readonly FALSE = 14;
	public static readonly UNIT_TYPE = 15;
	public static readonly BOOL_TYPE = 16;
	public static readonly I8_TYPE = 17;
	public static readonly I16_TYPE = 18;
	public static readonly I32_TYPE = 19;
	public static readonly I64_TYPE = 20;
	public static readonly I128_TYPE = 21;
	public static readonly U8_TYPE = 22;
	public static readonly U16_TYPE = 23;
	public static readonly U32_TYPE = 24;
	public static readonly U64_TYPE = 25;
	public static readonly U128_TYPE = 26;
	public static readonly STRING_TYPE = 27;
	public static readonly STRUCT_TYPE = 28;
	public static readonly ENUM_TYPE = 29;
	public static readonly OPTION_TYPE = 30;
	public static readonly RESULT_TYPE = 31;
	public static readonly SOME_TYPE = 32;
	public static readonly NONE_TYPE = 33;
	public static readonly OK_TYPE = 34;
	public static readonly ERR_TYPE = 35;
	public static readonly ARRAY_TYPE = 36;
	public static readonly TUPLE_TYPE = 37;
	public static readonly LIST_TYPE = 38;
	public static readonly SET_TYPE = 39;
	public static readonly MAP_TYPE = 40;
	public static readonly DECIMAL_TYPE = 41;
	public static readonly PRECISE_DECIMAL_TYPE = 42;
	public static readonly PACKAGE_ADDRESS_TYPE = 43;
	public static readonly COMPONENT_ADDRESS_TYPE = 44;
	public static readonly RESOURCE_ADDRESS_TYPE = 45;
	public static readonly HASH_TYPE = 46;
	public static readonly BUCKET_TYPE = 47;
	public static readonly PROOF_TYPE = 48;
	public static readonly NON_FUNGIBLE_ID_TYPE = 49;
	public static readonly NON_FUNGIBLE_ADDRESS_TYPE = 50;
	public static readonly BYTES_TYPE = 51;
	public static readonly OPEN_PARENTHESIS = 52;
	public static readonly CLOED_PARENTHESIS = 53;
	public static readonly LESS_THAN = 54;
	public static readonly GREATER_THAN = 55;
	public static readonly COMMA = 56;
	public static readonly SEMICOLON = 57;
	public static readonly TAKE_FROM_WORKTOP = 58;
	public static readonly TAKE_FROM_WORKTOP_BY_AMOUNT = 59;
	public static readonly TAKE_FROM_WORKTOP_BY_IDS = 60;
	public static readonly ASSERT_WORKTOP_CONTAINS = 61;
	public static readonly ASSERT_WORKTOP_CONTAINS_BY_AMOUNT = 62;
	public static readonly ASSERT_WORKTOP_CONTAINS_BY_IDS = 63;
	public static readonly RETURN_TO_WORKTOP = 64;
	public static readonly POP_FROM_AUTH_ZONE = 65;
	public static readonly PUSH_TO_AUTH_ZONE = 66;
	public static readonly CLEAR_AUTHZONE = 67;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE = 68;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT = 69;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS = 70;
	public static readonly CREATE_PROOF_FROM_BUCKET = 71;
	public static readonly CLONE_PROOF = 72;
	public static readonly DROP_PROOF = 73;
	public static readonly DROP_ALL_PROOFS = 74;
	public static readonly CALL_FUNCTION = 75;
	public static readonly CALL_METHOD = 76;
	public static readonly CALL_METHOD_WITH_ALL_RESOURCES = 77;
	public static readonly PUBLISH_PACKAGE = 78;
	public static readonly STRING_LITERAL = 79;
	public static readonly DIGIT = 80;
	public static readonly LETTER = 81;
	public static readonly NUMBER = 82;
	public static readonly WS = 83;
	public static readonly COMMENT = 84;
	public static readonly RULE_manifest = 0;
	public static readonly RULE_manifestInstruction = 1;
	public static readonly RULE_unit = 2;
	public static readonly RULE_bool = 3;
	public static readonly RULE_i8 = 4;
	public static readonly RULE_i16 = 5;
	public static readonly RULE_i32 = 6;
	public static readonly RULE_i64 = 7;
	public static readonly RULE_i128 = 8;
	public static readonly RULE_u8 = 9;
	public static readonly RULE_u16 = 10;
	public static readonly RULE_u32 = 11;
	public static readonly RULE_u64 = 12;
	public static readonly RULE_u128 = 13;
	public static readonly RULE_string = 14;
	public static readonly RULE_struct = 15;
	public static readonly RULE_enum_ = 16;
	public static readonly RULE_option = 17;
	public static readonly RULE_some = 18;
	public static readonly RULE_none = 19;
	public static readonly RULE_ok = 20;
	public static readonly RULE_err = 21;
	public static readonly RULE_array = 22;
	public static readonly RULE_tuple = 23;
	public static readonly RULE_list = 24;
	public static readonly RULE_set = 25;
	public static readonly RULE_map = 26;
	public static readonly RULE_decimal = 27;
	public static readonly RULE_preciseDecimal = 28;
	public static readonly RULE_packageAddress = 29;
	public static readonly RULE_componentAddress = 30;
	public static readonly RULE_resourceAddress = 31;
	public static readonly RULE_hash = 32;
	public static readonly RULE_bucket = 33;
	public static readonly RULE_proof = 34;
	public static readonly RULE_nonFungible_id = 35;
	public static readonly RULE_nonFungibleAddress = 36;
	public static readonly RULE_bytes = 37;
	public static readonly RULE_type = 38;
	public static readonly RULE_value = 39;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"manifest", "manifestInstruction", "unit", "bool", "i8", "i16", "i32", 
		"i64", "i128", "u8", "u16", "u32", "u64", "u128", "string", "struct", 
		"enum_", "option", "some", "none", "ok", "err", "array", "tuple", "list", 
		"set", "map", "decimal", "preciseDecimal", "packageAddress", "componentAddress", 
		"resourceAddress", "hash", "bucket", "proof", "nonFungible_id", "nonFungibleAddress", 
		"bytes", "type", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'()'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'true'", 
		"'false'", "'Unit'", "'Bool'", "'I8'", "'I16'", "'I32'", "'I64'", "'I128'", 
		"'U8'", "'U16'", "'U32'", "'U64'", "'U128'", "'String'", "'Struct'", "'Enum'", 
		"'Option'", "'Result'", "'Some'", "'None'", "'Ok'", "'Err'", "'Array'", 
		"'Tuple'", "'List'", "'Set'", "'Map'", "'Decimal'", "'PreciseDecimal'", 
		"'PackageAddress'", "'ComponentAddress'", "'ResourceAddress'", "'Hash'", 
		"'Bucket'", "'Proof'", "'NonFungibleId'", "'NonFungibleAddress'", "'Bytes'", 
		"'('", "')'", "'<'", "'>'", "','", "';'", "'TAKE_FROM_WORKTOP'", "'TAKE_FROM_WORKTOP_BY_AMOUNT'", 
		"'TAKE_FROM_WORKTOP_BY_IDS'", "'ASSERT_WORKTOP_CONTAINS'", "'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT'", 
		"'ASSERT_WORKTOP_CONTAINS_BY_IDS'", "'RETURN_TO_WORKTOP'", "'POP_FROM_AUTH_ZONE'", 
		"'PUSH_TO_AUTH_ZONE'", "'CLEAR_AUTHZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE'", 
		"'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT'", "'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS'", 
		"'CREATE_PROOF_FROM_BUCKET'", "'CLONE_PROOF'", "'DROP_PROOF'", "'DROP_ALL_PROOFS'", 
		"'CALL_FUNCTION'", "'CALL_METHOD'", "'CALL_METHOD_WITH_ALL_RESOURCES'", 
		"'PUBLISH_PACKAGE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "BOOL_LITERAL", "I8_LITERAL", "I16_LITERAL", "I32_LITERAL", 
		"I64_LITERAL", "I128_LITERAL", "U8_LITERAL", "U16_LITERAL", "U32_LITERAL", 
		"U64_LITERAL", "U128_LITERAL", "TRUE", "FALSE", "UNIT_TYPE", "BOOL_TYPE", 
		"I8_TYPE", "I16_TYPE", "I32_TYPE", "I64_TYPE", "I128_TYPE", "U8_TYPE", 
		"U16_TYPE", "U32_TYPE", "U64_TYPE", "U128_TYPE", "STRING_TYPE", "STRUCT_TYPE", 
		"ENUM_TYPE", "OPTION_TYPE", "RESULT_TYPE", "SOME_TYPE", "NONE_TYPE", "OK_TYPE", 
		"ERR_TYPE", "ARRAY_TYPE", "TUPLE_TYPE", "LIST_TYPE", "SET_TYPE", "MAP_TYPE", 
		"DECIMAL_TYPE", "PRECISE_DECIMAL_TYPE", "PACKAGE_ADDRESS_TYPE", "COMPONENT_ADDRESS_TYPE", 
		"RESOURCE_ADDRESS_TYPE", "HASH_TYPE", "BUCKET_TYPE", "PROOF_TYPE", "NON_FUNGIBLE_ID_TYPE", 
		"NON_FUNGIBLE_ADDRESS_TYPE", "BYTES_TYPE", "OPEN_PARENTHESIS", "CLOED_PARENTHESIS", 
		"LESS_THAN", "GREATER_THAN", "COMMA", "SEMICOLON", "TAKE_FROM_WORKTOP", 
		"TAKE_FROM_WORKTOP_BY_AMOUNT", "TAKE_FROM_WORKTOP_BY_IDS", "ASSERT_WORKTOP_CONTAINS", 
		"ASSERT_WORKTOP_CONTAINS_BY_AMOUNT", "ASSERT_WORKTOP_CONTAINS_BY_IDS", 
		"RETURN_TO_WORKTOP", "POP_FROM_AUTH_ZONE", "PUSH_TO_AUTH_ZONE", "CLEAR_AUTHZONE", 
		"CREATE_PROOF_FROM_AUTH_ZONE", "CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT", 
		"CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS", "CREATE_PROOF_FROM_BUCKET", "CLONE_PROOF", 
		"DROP_PROOF", "DROP_ALL_PROOFS", "CALL_FUNCTION", "CALL_METHOD", "CALL_METHOD_WITH_ALL_RESOURCES", 
		"PUBLISH_PACKAGE", "STRING_LITERAL", "DIGIT", "LETTER", "NUMBER", "WS", 
		"COMMENT",
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
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (TransactionManifestParser.TAKE_FROM_WORKTOP - 58)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT - 58)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS - 58)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS - 58)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 58)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS - 58)) | (1 << (TransactionManifestParser.RETURN_TO_WORKTOP - 58)) | (1 << (TransactionManifestParser.POP_FROM_AUTH_ZONE - 58)) | (1 << (TransactionManifestParser.PUSH_TO_AUTH_ZONE - 58)) | (1 << (TransactionManifestParser.CLEAR_AUTHZONE - 58)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE - 58)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 58)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 58)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_BUCKET - 58)) | (1 << (TransactionManifestParser.CLONE_PROOF - 58)) | (1 << (TransactionManifestParser.DROP_PROOF - 58)) | (1 << (TransactionManifestParser.DROP_ALL_PROOFS - 58)) | (1 << (TransactionManifestParser.CALL_FUNCTION - 58)) | (1 << (TransactionManifestParser.CALL_METHOD - 58)) | (1 << (TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES - 58)) | (1 << (TransactionManifestParser.PUBLISH_PACKAGE - 58)))) !== 0)) {
				{
				{
				this.state = 80;
				this.manifestInstruction();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
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
			this.state = 198;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.CALL_FUNCTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.match(TransactionManifestParser.CALL_FUNCTION);
				this.state = 89;
				this.packageAddress();
				this.state = 90;
				this.string();
				this.state = 91;
				this.string();
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
					{
					{
					this.state = 92;
					this.value();
					}
					}
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 98;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CALL_METHOD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this.match(TransactionManifestParser.CALL_METHOD);
				this.state = 101;
				this.componentAddress();
				this.state = 102;
				this.string();
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
					{
					{
					this.state = 103;
					this.value();
					}
					}
					this.state = 108;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 109;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 111;
				this.match(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES);
				this.state = 112;
				this.componentAddress();
				this.state = 113;
				this.string();
				this.state = 114;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.TAKE_FROM_WORKTOP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 116;
				this.match(TransactionManifestParser.TAKE_FROM_WORKTOP);
				this.state = 117;
				this.resourceAddress();
				this.state = 118;
				this.bucket();
				this.state = 119;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 121;
				this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT);
				this.state = 122;
				this.decimal();
				this.state = 123;
				this.resourceAddress();
				this.state = 124;
				this.bucket();
				this.state = 125;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 127;
				this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS);
				this.state = 128;
				this.set();
				this.state = 129;
				this.resourceAddress();
				this.state = 130;
				this.bucket();
				this.state = 131;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.RETURN_TO_WORKTOP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 133;
				this.match(TransactionManifestParser.RETURN_TO_WORKTOP);
				this.state = 134;
				this.bucket();
				this.state = 135;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 137;
				this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS);
				this.state = 138;
				this.resourceAddress();
				this.state = 139;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 141;
				this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
				this.state = 142;
				this.decimal();
				this.state = 143;
				this.resourceAddress();
				this.state = 144;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 146;
				this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS);
				this.state = 147;
				this.set();
				this.state = 148;
				this.resourceAddress();
				this.state = 149;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.POP_FROM_AUTH_ZONE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 151;
				this.match(TransactionManifestParser.POP_FROM_AUTH_ZONE);
				this.state = 152;
				this.proof();
				this.state = 153;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.PUSH_TO_AUTH_ZONE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 155;
				this.match(TransactionManifestParser.PUSH_TO_AUTH_ZONE);
				this.state = 156;
				this.proof();
				this.state = 157;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 159;
				this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE);
				this.state = 160;
				this.resourceAddress();
				this.state = 161;
				this.proof();
				this.state = 162;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 164;
				this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
				this.state = 165;
				this.decimal();
				this.state = 166;
				this.resourceAddress();
				this.state = 167;
				this.proof();
				this.state = 168;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 170;
				this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
				this.state = 171;
				this.set();
				this.state = 172;
				this.resourceAddress();
				this.state = 173;
				this.proof();
				this.state = 174;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_BUCKET:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 176;
				this.match(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET);
				this.state = 177;
				this.bucket();
				this.state = 178;
				this.proof();
				this.state = 179;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CLONE_PROOF:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 181;
				this.match(TransactionManifestParser.CLONE_PROOF);
				this.state = 182;
				this.proof();
				this.state = 183;
				this.proof();
				this.state = 184;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.DROP_PROOF:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 186;
				this.match(TransactionManifestParser.DROP_PROOF);
				this.state = 187;
				this.proof();
				this.state = 188;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.DROP_ALL_PROOFS:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 190;
				this.match(TransactionManifestParser.DROP_ALL_PROOFS);
				this.state = 191;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CLEAR_AUTHZONE:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 192;
				this.match(TransactionManifestParser.CLEAR_AUTHZONE);
				this.state = 193;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.PUBLISH_PACKAGE:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 194;
				this.match(TransactionManifestParser.PUBLISH_PACKAGE);
				this.state = 195;
				this.bytes();
				this.state = 196;
				this.match(TransactionManifestParser.SEMICOLON);
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
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TransactionManifestParser.RULE_unit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(TransactionManifestParser.T__0);
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
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TransactionManifestParser.RULE_bool);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(TransactionManifestParser.BOOL_LITERAL);
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
		this.enterRule(_localctx, 8, TransactionManifestParser.RULE_i8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(TransactionManifestParser.I8_LITERAL);
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
		this.enterRule(_localctx, 10, TransactionManifestParser.RULE_i16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(TransactionManifestParser.I16_LITERAL);
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
		this.enterRule(_localctx, 12, TransactionManifestParser.RULE_i32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(TransactionManifestParser.I32_LITERAL);
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
		this.enterRule(_localctx, 14, TransactionManifestParser.RULE_i64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(TransactionManifestParser.I64_LITERAL);
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
		this.enterRule(_localctx, 16, TransactionManifestParser.RULE_i128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(TransactionManifestParser.I128_LITERAL);
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
		this.enterRule(_localctx, 18, TransactionManifestParser.RULE_u8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(TransactionManifestParser.U8_LITERAL);
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
		this.enterRule(_localctx, 20, TransactionManifestParser.RULE_u16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(TransactionManifestParser.U16_LITERAL);
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
		this.enterRule(_localctx, 22, TransactionManifestParser.RULE_u32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(TransactionManifestParser.U32_LITERAL);
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
		this.enterRule(_localctx, 24, TransactionManifestParser.RULE_u64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(TransactionManifestParser.U64_LITERAL);
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
		this.enterRule(_localctx, 26, TransactionManifestParser.RULE_u128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(TransactionManifestParser.U128_LITERAL);
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TransactionManifestParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(TransactionManifestParser.STRING_LITERAL);
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
	public struct(): StructContext {
		let _localctx: StructContext = new StructContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TransactionManifestParser.RULE_struct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(TransactionManifestParser.STRUCT_TYPE);
			this.state = 227;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 228;
				this.value();
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 229;
					this.match(TransactionManifestParser.COMMA);
					this.state = 230;
					this.value();
					}
					}
					this.state = 235;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 238;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public enum_(): Enum_Context {
		let _localctx: Enum_Context = new Enum_Context(this._ctx, this.state);
		this.enterRule(_localctx, 32, TransactionManifestParser.RULE_enum_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(TransactionManifestParser.ENUM_TYPE);
			this.state = 241;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			{
			this.state = 242;
			this.string();
			this.state = 243;
			this.match(TransactionManifestParser.COMMA);
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 244;
				this.value();
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 245;
					this.match(TransactionManifestParser.COMMA);
					this.state = 246;
					this.value();
					}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
			this.state = 254;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TransactionManifestParser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.SOME_TYPE:
				{
				this.state = 256;
				this.some();
				}
				break;
			case TransactionManifestParser.NONE_TYPE:
				{
				this.state = 257;
				this.none();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public some(): SomeContext {
		let _localctx: SomeContext = new SomeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TransactionManifestParser.RULE_some);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(TransactionManifestParser.SOME_TYPE);
			this.state = 261;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			{
			this.state = 262;
			this.value();
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TransactionManifestParser.COMMA) {
				{
				{
				this.state = 263;
				this.match(TransactionManifestParser.COMMA);
				this.state = 264;
				this.value();
				}
				}
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 270;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public none(): NoneContext {
		let _localctx: NoneContext = new NoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TransactionManifestParser.RULE_none);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(TransactionManifestParser.NONE_TYPE);
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
	public ok(): OkContext {
		let _localctx: OkContext = new OkContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TransactionManifestParser.RULE_ok);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(TransactionManifestParser.OK_TYPE);
			this.state = 275;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			{
			this.state = 276;
			this.value();
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TransactionManifestParser.COMMA) {
				{
				{
				this.state = 277;
				this.match(TransactionManifestParser.COMMA);
				this.state = 278;
				this.value();
				}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 284;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public err(): ErrContext {
		let _localctx: ErrContext = new ErrContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TransactionManifestParser.RULE_err);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.match(TransactionManifestParser.ERR_TYPE);
			this.state = 287;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			{
			this.state = 288;
			this.value();
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TransactionManifestParser.COMMA) {
				{
				{
				this.state = 289;
				this.match(TransactionManifestParser.COMMA);
				this.state = 290;
				this.value();
				}
				}
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 296;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TransactionManifestParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(TransactionManifestParser.ARRAY_TYPE);
			this.state = 299;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 300;
			this.type();
			this.state = 301;
			this.match(TransactionManifestParser.GREATER_THAN);
			this.state = 302;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 303;
				this.value();
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 304;
					this.match(TransactionManifestParser.COMMA);
					this.state = 305;
					this.value();
					}
					}
					this.state = 310;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 313;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TransactionManifestParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(TransactionManifestParser.TUPLE_TYPE);
			this.state = 316;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 317;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 318;
				this.value();
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 319;
					this.match(TransactionManifestParser.COMMA);
					this.state = 320;
					this.value();
					}
					}
					this.state = 325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 328;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 48, TransactionManifestParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(TransactionManifestParser.LIST_TYPE);
			this.state = 331;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 332;
			this.type();
			this.state = 333;
			this.match(TransactionManifestParser.GREATER_THAN);
			this.state = 334;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 335;
				this.value();
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 336;
					this.match(TransactionManifestParser.COMMA);
					this.state = 337;
					this.value();
					}
					}
					this.state = 342;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 345;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 50, TransactionManifestParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(TransactionManifestParser.SET_TYPE);
			this.state = 348;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 349;
			this.type();
			this.state = 350;
			this.match(TransactionManifestParser.GREATER_THAN);
			this.state = 351;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 352;
				this.value();
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 353;
					this.match(TransactionManifestParser.COMMA);
					this.state = 354;
					this.value();
					}
					}
					this.state = 359;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 362;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 52, TransactionManifestParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(TransactionManifestParser.MAP_TYPE);
			this.state = 365;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 366;
			this.type();
			this.state = 367;
			this.match(TransactionManifestParser.COMMA);
			this.state = 368;
			this.type();
			this.state = 369;
			this.match(TransactionManifestParser.GREATER_THAN);
			this.state = 370;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				{
				this.state = 371;
				this.value();
				this.state = 372;
				this.match(TransactionManifestParser.COMMA);
				this.state = 373;
				this.value();
				}
				}
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 380;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 54, TransactionManifestParser.RULE_decimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(TransactionManifestParser.DECIMAL_TYPE);
			this.state = 383;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 384;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 385;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public preciseDecimal(): PreciseDecimalContext {
		let _localctx: PreciseDecimalContext = new PreciseDecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, TransactionManifestParser.RULE_preciseDecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(TransactionManifestParser.PRECISE_DECIMAL_TYPE);
			this.state = 388;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 389;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 390;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 58, TransactionManifestParser.RULE_packageAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(TransactionManifestParser.PACKAGE_ADDRESS_TYPE);
			this.state = 393;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 394;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 395;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 60, TransactionManifestParser.RULE_componentAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(TransactionManifestParser.COMPONENT_ADDRESS_TYPE);
			this.state = 398;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 399;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 400;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 62, TransactionManifestParser.RULE_resourceAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.match(TransactionManifestParser.RESOURCE_ADDRESS_TYPE);
			this.state = 403;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 404;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 405;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public hash(): HashContext {
		let _localctx: HashContext = new HashContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, TransactionManifestParser.RULE_hash);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(TransactionManifestParser.HASH_TYPE);
			this.state = 408;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 409;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 410;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 66, TransactionManifestParser.RULE_bucket);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(TransactionManifestParser.BUCKET_TYPE);
			this.state = 413;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 414;
			_la = this._input.LA(1);
			if (!(_la === TransactionManifestParser.U32_LITERAL || _la === TransactionManifestParser.STRING_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 415;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 68, TransactionManifestParser.RULE_proof);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(TransactionManifestParser.PROOF_TYPE);
			this.state = 418;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 419;
			_la = this._input.LA(1);
			if (!(_la === TransactionManifestParser.U32_LITERAL || _la === TransactionManifestParser.STRING_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 420;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public nonFungible_id(): NonFungible_idContext {
		let _localctx: NonFungible_idContext = new NonFungible_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, TransactionManifestParser.RULE_nonFungible_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.match(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE);
			this.state = 423;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 424;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 425;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public nonFungibleAddress(): NonFungibleAddressContext {
		let _localctx: NonFungibleAddressContext = new NonFungibleAddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, TransactionManifestParser.RULE_nonFungibleAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE);
			this.state = 428;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 429;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 430;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 74, TransactionManifestParser.RULE_bytes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(TransactionManifestParser.BYTES_TYPE);
			this.state = 433;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 434;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 435;
			this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
		this.enterRule(_localctx, 76, TransactionManifestParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.UNIT_TYPE) | (1 << TransactionManifestParser.BOOL_TYPE) | (1 << TransactionManifestParser.I8_TYPE) | (1 << TransactionManifestParser.I16_TYPE) | (1 << TransactionManifestParser.I32_TYPE) | (1 << TransactionManifestParser.I64_TYPE) | (1 << TransactionManifestParser.I128_TYPE) | (1 << TransactionManifestParser.U8_TYPE) | (1 << TransactionManifestParser.U16_TYPE) | (1 << TransactionManifestParser.U32_TYPE) | (1 << TransactionManifestParser.U64_TYPE) | (1 << TransactionManifestParser.U128_TYPE) | (1 << TransactionManifestParser.STRING_TYPE) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE) | (1 << TransactionManifestParser.OPTION_TYPE) | (1 << TransactionManifestParser.RESULT_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0))) {
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, TransactionManifestParser.RULE_value);
		try {
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 439;
				this.unit();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 440;
				this.bool();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 441;
				this.i8();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 442;
				this.i16();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 443;
				this.i32();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 444;
				this.i64();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 445;
				this.i128();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 446;
				this.u8();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 447;
				this.u16();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 448;
				this.u32();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 449;
				this.u64();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 450;
				this.u128();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 451;
				this.string();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 452;
				this.struct();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 453;
				this.enum_();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 454;
				this.option();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 455;
				this.some();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 456;
				this.none();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 457;
				this.ok();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 458;
				this.err();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 459;
				this.array();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 460;
				this.tuple();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 461;
				this.list();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 462;
				this.set();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 463;
				this.map();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 464;
				this.decimal();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 465;
				this.preciseDecimal();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 466;
				this.packageAddress();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 467;
				this.componentAddress();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 468;
				this.resourceAddress();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 469;
				this.hash();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 470;
				this.bucket();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 471;
				this.proof();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 472;
				this.nonFungible_id();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 473;
				this.nonFungibleAddress();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 474;
				this.bytes();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03V\u01E0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x07\x02" +
		"T\n\x02\f\x02\x0E\x02W\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x07\x03`\n\x03\f\x03\x0E\x03c\v\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03k\n\x03\f\x03\x0E\x03n\v\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xC9\n\x03" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x07\x11\xEA\n\x11\f\x11\x0E\x11\xED\v\x11\x05\x11\xEF\n\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x07\x12\xFA\n\x12\f\x12\x0E\x12\xFD\v\x12\x05\x12\xFF\n\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x05\x13\u0105\n\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x07\x14\u010C\n\x14\f\x14\x0E\x14\u010F\v\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u011A" +
		"\n\x16\f\x16\x0E\x16\u011D\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x07\x17\u0126\n\x17\f\x17\x0E\x17\u0129\v\x17\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u0135\n\x18\f\x18\x0E\x18\u0138\v\x18\x05\x18\u013A\n\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0144" +
		"\n\x19\f\x19\x0E\x19\u0147\v\x19\x05\x19\u0149\n\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0155" +
		"\n\x1A\f\x1A\x0E\x1A\u0158\v\x1A\x05\x1A\u015A\n\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0166" +
		"\n\x1B\f\x1B\x0E\x1B\u0169\v\x1B\x05\x1B\u016B\n\x1B\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x07\x1C\u017A\n\x1C\f\x1C\x0E\x1C\u017D\v\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03" +
		"#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03" +
		"&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u01DE\n)\x03)\x02\x02\x02*\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02\x02\x04\x04\x02\f\fQQ\x03\x02\x115\x02\u0202\x02" +
		"U\x03\x02\x02\x02\x04\xC8\x03\x02\x02\x02\x06\xCA\x03\x02\x02\x02\b\xCC" +
		"\x03\x02\x02\x02\n\xCE\x03\x02\x02\x02\f\xD0\x03\x02\x02\x02\x0E\xD2\x03" +
		"\x02\x02\x02\x10\xD4\x03\x02\x02\x02\x12\xD6\x03\x02\x02\x02\x14\xD8\x03" +
		"\x02\x02\x02\x16\xDA\x03\x02\x02\x02\x18\xDC\x03\x02\x02\x02\x1A\xDE\x03" +
		"\x02\x02\x02\x1C\xE0\x03\x02\x02\x02\x1E\xE2\x03\x02\x02\x02 \xE4\x03" +
		"\x02\x02\x02\"\xF2\x03\x02\x02\x02$\u0104\x03\x02\x02\x02&\u0106\x03\x02" +
		"\x02\x02(\u0112\x03\x02\x02\x02*\u0114\x03\x02\x02\x02,\u0120\x03\x02" +
		"\x02\x02.\u012C\x03\x02\x02\x020\u013D\x03\x02\x02\x022\u014C\x03\x02" +
		"\x02\x024\u015D\x03\x02\x02\x026\u016E\x03\x02\x02\x028\u0180\x03\x02" +
		"\x02\x02:\u0185\x03\x02\x02\x02<\u018A\x03\x02\x02\x02>\u018F\x03\x02" +
		"\x02\x02@\u0194\x03\x02\x02\x02B\u0199\x03\x02\x02\x02D\u019E\x03\x02" +
		"\x02\x02F\u01A3\x03\x02\x02\x02H\u01A8\x03\x02\x02\x02J\u01AD\x03\x02" +
		"\x02\x02L\u01B2\x03\x02\x02\x02N\u01B7\x03\x02\x02\x02P\u01DD\x03\x02" +
		"\x02\x02RT\x05\x04\x03\x02SR\x03\x02\x02\x02TW\x03\x02\x02\x02US\x03\x02" +
		"\x02\x02UV\x03\x02\x02\x02VX\x03\x02\x02\x02WU\x03\x02\x02\x02XY\x07\x02" +
		"\x02\x03Y\x03\x03\x02\x02\x02Z[\x07M\x02\x02[\\\x05<\x1F\x02\\]\x05\x1E" +
		"\x10\x02]a\x05\x1E\x10\x02^`\x05P)\x02_^\x03\x02\x02\x02`c\x03\x02\x02" +
		"\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ca\x03\x02\x02" +
		"\x02de\x07;\x02\x02e\xC9\x03\x02\x02\x02fg\x07N\x02\x02gh\x05> \x02hl" +
		"\x05\x1E\x10\x02ik\x05P)\x02ji\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02\x02\x02nl\x03\x02\x02\x02op\x07" +
		";\x02\x02p\xC9\x03\x02\x02\x02qr\x07O\x02\x02rs\x05> \x02st\x05\x1E\x10" +
		"\x02tu\x07;\x02\x02u\xC9\x03\x02\x02\x02vw\x07<\x02\x02wx\x05@!\x02xy" +
		"\x05D#\x02yz\x07;\x02\x02z\xC9\x03\x02\x02\x02{|\x07=\x02\x02|}\x058\x1D" +
		"\x02}~\x05@!\x02~\x7F\x05D#\x02\x7F\x80\x07;\x02\x02\x80\xC9\x03\x02\x02" +
		"\x02\x81\x82\x07>\x02\x02\x82\x83\x054\x1B\x02\x83\x84\x05@!\x02\x84\x85" +
		"\x05D#\x02\x85\x86\x07;\x02\x02\x86\xC9\x03\x02\x02\x02\x87\x88\x07B\x02" +
		"\x02\x88\x89\x05D#\x02\x89\x8A\x07;\x02\x02\x8A\xC9\x03\x02\x02\x02\x8B" +
		"\x8C\x07?\x02\x02\x8C\x8D\x05@!\x02\x8D\x8E\x07;\x02\x02\x8E\xC9\x03\x02" +
		"\x02\x02\x8F\x90\x07@\x02\x02\x90\x91\x058\x1D\x02\x91\x92\x05@!\x02\x92" +
		"\x93\x07;\x02\x02\x93\xC9\x03\x02\x02\x02\x94\x95\x07A\x02\x02\x95\x96" +
		"\x054\x1B\x02\x96\x97\x05@!\x02\x97\x98\x07;\x02\x02\x98\xC9\x03\x02\x02" +
		"\x02\x99\x9A\x07C\x02\x02\x9A\x9B\x05F$\x02\x9B\x9C\x07;\x02\x02\x9C\xC9" +
		"\x03\x02\x02\x02\x9D\x9E\x07D\x02\x02\x9E\x9F\x05F$\x02\x9F\xA0\x07;\x02" +
		"\x02\xA0\xC9\x03\x02\x02\x02\xA1\xA2\x07F\x02\x02\xA2\xA3\x05@!\x02\xA3" +
		"\xA4\x05F$\x02\xA4\xA5\x07;\x02\x02\xA5\xC9\x03\x02\x02\x02\xA6\xA7\x07" +
		"G\x02\x02\xA7\xA8\x058\x1D\x02\xA8\xA9\x05@!\x02\xA9\xAA\x05F$\x02\xAA" +
		"\xAB\x07;\x02\x02\xAB\xC9\x03\x02\x02\x02\xAC\xAD\x07H\x02\x02\xAD\xAE" +
		"\x054\x1B\x02\xAE\xAF\x05@!\x02\xAF\xB0\x05F$\x02\xB0\xB1\x07;\x02\x02" +
		"\xB1\xC9\x03\x02\x02\x02\xB2\xB3\x07I\x02\x02\xB3\xB4\x05D#\x02\xB4\xB5" +
		"\x05F$\x02\xB5\xB6\x07;\x02\x02\xB6\xC9\x03\x02\x02\x02\xB7\xB8\x07J\x02" +
		"\x02\xB8\xB9\x05F$\x02\xB9\xBA\x05F$\x02\xBA\xBB\x07;\x02\x02\xBB\xC9" +
		"\x03\x02\x02\x02\xBC\xBD\x07K\x02\x02\xBD\xBE\x05F$\x02\xBE\xBF\x07;\x02" +
		"\x02\xBF\xC9\x03\x02\x02\x02\xC0\xC1\x07L\x02\x02\xC1\xC9\x07;\x02\x02" +
		"\xC2\xC3\x07E\x02\x02\xC3\xC9\x07;\x02\x02\xC4\xC5\x07P\x02\x02\xC5\xC6" +
		"\x05L\'\x02\xC6\xC7\x07;\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8Z\x03\x02" +
		"\x02\x02\xC8f\x03\x02\x02\x02\xC8q\x03\x02\x02\x02\xC8v\x03\x02\x02\x02" +
		"\xC8{\x03\x02\x02\x02\xC8\x81\x03\x02\x02\x02\xC8\x87\x03\x02\x02\x02" +
		"\xC8\x8B\x03\x02\x02\x02\xC8\x8F\x03\x02\x02\x02\xC8\x94\x03\x02\x02\x02" +
		"\xC8\x99\x03\x02\x02\x02\xC8\x9D\x03\x02\x02\x02\xC8\xA1\x03\x02\x02\x02" +
		"\xC8\xA6\x03\x02\x02\x02\xC8\xAC\x03\x02\x02\x02\xC8\xB2\x03\x02\x02\x02" +
		"\xC8\xB7\x03\x02\x02\x02\xC8\xBC\x03\x02\x02\x02\xC8\xC0\x03\x02\x02\x02" +
		"\xC8\xC2\x03\x02\x02\x02\xC8\xC4\x03\x02\x02\x02\xC9\x05\x03\x02\x02\x02" +
		"\xCA\xCB\x07\x03\x02\x02\xCB\x07\x03\x02\x02\x02\xCC\xCD\x07\x04\x02\x02" +
		"\xCD\t\x03\x02\x02\x02\xCE\xCF\x07\x05\x02\x02\xCF\v\x03\x02\x02\x02\xD0" +
		"\xD1\x07\x06\x02\x02\xD1\r\x03\x02\x02\x02\xD2\xD3\x07\x07\x02\x02\xD3" +
		"\x0F\x03\x02\x02\x02\xD4\xD5\x07\b\x02\x02\xD5\x11\x03\x02\x02\x02\xD6" +
		"\xD7\x07\t\x02\x02\xD7\x13\x03\x02\x02\x02\xD8\xD9\x07\n\x02\x02\xD9\x15" +
		"\x03\x02\x02\x02\xDA\xDB\x07\v\x02\x02\xDB\x17\x03\x02\x02\x02\xDC\xDD" +
		"\x07\f\x02\x02\xDD\x19\x03\x02\x02\x02\xDE\xDF\x07\r\x02\x02\xDF\x1B\x03" +
		"\x02\x02\x02\xE0\xE1\x07\x0E\x02\x02\xE1\x1D\x03\x02\x02\x02\xE2\xE3\x07" +
		"Q\x02\x02\xE3\x1F\x03\x02\x02\x02\xE4\xE5\x07\x1E\x02\x02\xE5\xEE\x07" +
		"6\x02\x02\xE6\xEB\x05P)\x02\xE7\xE8\x07:\x02\x02\xE8\xEA\x05P)\x02\xE9" +
		"\xE7\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB" +
		"\xEC\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xEE" +
		"\xE6\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0" +
		"\xF1\x077\x02\x02\xF1!\x03\x02\x02\x02\xF2\xF3\x07\x1F\x02\x02\xF3\xF4" +
		"\x076\x02\x02\xF4\xF5\x05\x1E\x10\x02\xF5\xFE\x07:\x02\x02\xF6\xFB\x05" +
		"P)\x02\xF7\xF8\x07:\x02\x02\xF8\xFA\x05P)\x02\xF9\xF7\x03\x02\x02\x02" +
		"\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02" +
		"\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\xF6\x03\x02\x02\x02" +
		"\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x077\x02" +
		"\x02\u0101#\x03\x02\x02\x02\u0102\u0105\x05&\x14\x02\u0103\u0105\x05(" +
		"\x15\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105" +
		"%\x03\x02\x02\x02\u0106\u0107\x07\"\x02\x02\u0107\u0108\x076\x02\x02\u0108" +
		"\u010D\x05P)\x02\u0109\u010A\x07:\x02\x02\u010A\u010C\x05P)\x02\u010B" +
		"\u0109\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02" +
		"\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0110\x03\x02\x02\x02\u010F" +
		"\u010D\x03\x02\x02\x02\u0110\u0111\x077\x02\x02\u0111\'\x03\x02\x02\x02" +
		"\u0112\u0113\x07#\x02\x02\u0113)\x03\x02\x02\x02\u0114\u0115\x07$\x02" +
		"\x02\u0115\u0116\x076\x02\x02\u0116\u011B\x05P)\x02\u0117\u0118\x07:\x02" +
		"\x02\u0118\u011A\x05P)\x02\u0119\u0117\x03\x02\x02\x02\u011A\u011D\x03" +
		"\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C" +
		"\u011E\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E\u011F\x077\x02" +
		"\x02\u011F+\x03\x02\x02\x02\u0120\u0121\x07%\x02\x02\u0121\u0122\x076" +
		"\x02\x02\u0122\u0127\x05P)\x02\u0123\u0124\x07:\x02\x02\u0124\u0126\x05" +
		"P)\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125" +
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x03\x02\x02\x02" +
		"\u0129\u0127\x03\x02\x02\x02\u012A\u012B\x077\x02\x02\u012B-\x03\x02\x02" +
		"\x02\u012C\u012D\x07&\x02\x02\u012D\u012E\x078\x02\x02\u012E\u012F\x05" +
		"N(\x02\u012F\u0130\x079\x02\x02\u0130\u0139\x076\x02\x02\u0131\u0136\x05" +
		"P)\x02\u0132\u0133\x07:\x02\x02\u0133\u0135\x05P)\x02\u0134\u0132\x03" +
		"\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136" +
		"\u0137\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02" +
		"\x02\x02\u0139\u0131\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A" +
		"\u013B\x03\x02\x02\x02\u013B\u013C\x077\x02\x02\u013C/\x03\x02\x02\x02" +
		"\u013D\u013E\x07\'\x02\x02\u013E\u013F\x078\x02\x02\u013F\u0148\x076\x02" +
		"\x02\u0140\u0145\x05P)\x02\u0141\u0142\x07:\x02\x02\u0142\u0144\x05P)" +
		"\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143" +
		"\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02" +
		"\u0147\u0145\x03\x02\x02\x02\u0148\u0140\x03\x02\x02\x02\u0148\u0149\x03" +
		"\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x077\x02\x02\u014B" +
		"1\x03\x02\x02\x02\u014C\u014D\x07(\x02\x02\u014D\u014E\x078\x02\x02\u014E" +
		"\u014F\x05N(\x02\u014F\u0150\x079\x02\x02\u0150\u0159\x076\x02\x02\u0151" +
		"\u0156\x05P)\x02\u0152\u0153\x07:\x02\x02\u0153\u0155\x05P)\x02\u0154" +
		"\u0152\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02" +
		"\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158" +
		"\u0156\x03\x02\x02\x02\u0159\u0151\x03\x02\x02\x02\u0159\u015A\x03\x02" +
		"\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x077\x02\x02\u015C3\x03" +
		"\x02\x02\x02\u015D\u015E\x07)\x02\x02\u015E\u015F\x078\x02\x02\u015F\u0160" +
		"\x05N(\x02\u0160\u0161\x079\x02\x02\u0161\u016A\x076\x02\x02\u0162\u0167" +
		"\x05P)\x02\u0163\u0164\x07:\x02\x02\u0164\u0166\x05P)\x02\u0165\u0163" +
		"\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02" +
		"\u0167\u0168\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03" +
		"\x02\x02\x02\u016A\u0162\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B" +
		"\u016C\x03\x02\x02\x02\u016C\u016D\x077\x02\x02\u016D5\x03\x02\x02\x02" +
		"\u016E\u016F\x07*\x02\x02\u016F\u0170\x078\x02\x02\u0170\u0171\x05N(\x02" +
		"\u0171\u0172\x07:\x02\x02\u0172\u0173\x05N(\x02\u0173\u0174\x079\x02\x02" +
		"\u0174\u017B\x076\x02\x02\u0175\u0176\x05P)\x02\u0176\u0177\x07:\x02\x02" +
		"\u0177\u0178\x05P)\x02\u0178\u017A\x03\x02\x02\x02\u0179\u0175\x03\x02" +
		"\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B" +
		"\u017C\x03\x02\x02\x02\u017C\u017E\x03\x02\x02\x02\u017D\u017B\x03\x02" +
		"\x02\x02\u017E\u017F\x077\x02\x02\u017F7\x03\x02\x02\x02\u0180\u0181\x07" +
		"+\x02\x02\u0181\u0182\x076\x02\x02\u0182\u0183\x07Q\x02\x02\u0183\u0184" +
		"\x077\x02\x02\u01849\x03\x02\x02\x02\u0185\u0186\x07,\x02\x02\u0186\u0187" +
		"\x076\x02\x02\u0187\u0188\x07Q\x02\x02\u0188\u0189\x077\x02\x02\u0189" +
		";\x03\x02\x02\x02\u018A\u018B\x07-\x02\x02\u018B\u018C\x076\x02\x02\u018C" +
		"\u018D\x07Q\x02\x02\u018D\u018E\x077\x02\x02\u018E=\x03\x02\x02\x02\u018F" +
		"\u0190\x07.\x02\x02\u0190\u0191\x076\x02\x02\u0191\u0192\x07Q\x02\x02" +
		"\u0192\u0193\x077\x02\x02\u0193?\x03\x02\x02\x02\u0194\u0195\x07/\x02" +
		"\x02\u0195\u0196\x076\x02\x02\u0196\u0197\x07Q\x02\x02\u0197\u0198\x07" +
		"7\x02\x02\u0198A\x03\x02\x02\x02\u0199\u019A\x070\x02\x02\u019A\u019B" +
		"\x076\x02\x02\u019B\u019C\x07Q\x02\x02\u019C\u019D\x077\x02\x02\u019D" +
		"C\x03\x02\x02\x02\u019E\u019F\x071\x02\x02\u019F\u01A0\x076\x02\x02\u01A0" +
		"\u01A1\t\x02\x02\x02\u01A1\u01A2\x077\x02\x02\u01A2E\x03\x02\x02\x02\u01A3" +
		"\u01A4\x072\x02\x02\u01A4\u01A5\x076\x02\x02\u01A5\u01A6\t\x02\x02\x02" +
		"\u01A6\u01A7\x077\x02\x02\u01A7G\x03\x02\x02\x02\u01A8\u01A9\x073\x02" +
		"\x02\u01A9\u01AA\x076\x02\x02\u01AA\u01AB\x07Q\x02\x02\u01AB\u01AC\x07" +
		"7\x02\x02\u01ACI\x03\x02\x02\x02\u01AD\u01AE\x074\x02\x02\u01AE\u01AF" +
		"\x076\x02\x02\u01AF\u01B0\x07Q\x02\x02\u01B0\u01B1\x077\x02\x02\u01B1" +
		"K\x03\x02\x02\x02\u01B2\u01B3\x075\x02\x02\u01B3\u01B4\x076\x02\x02\u01B4" +
		"\u01B5\x07Q\x02\x02\u01B5\u01B6\x077\x02\x02\u01B6M\x03\x02\x02\x02\u01B7" +
		"\u01B8\t\x03\x02\x02\u01B8O\x03\x02\x02\x02\u01B9\u01DE\x05\x06\x04\x02" +
		"\u01BA\u01DE\x05\b\x05\x02\u01BB\u01DE\x05\n\x06\x02\u01BC\u01DE\x05\f" +
		"\x07\x02\u01BD\u01DE\x05\x0E\b\x02\u01BE\u01DE\x05\x10\t\x02\u01BF\u01DE" +
		"\x05\x12\n\x02\u01C0\u01DE\x05\x14\v\x02\u01C1\u01DE\x05\x16\f\x02\u01C2" +
		"\u01DE\x05\x18\r\x02\u01C3\u01DE\x05\x1A\x0E\x02\u01C4\u01DE\x05\x1C\x0F" +
		"\x02\u01C5\u01DE\x05\x1E\x10\x02\u01C6\u01DE\x05 \x11\x02\u01C7\u01DE" +
		"\x05\"\x12\x02\u01C8\u01DE\x05$\x13\x02\u01C9\u01DE\x05&\x14\x02\u01CA" +
		"\u01DE\x05(\x15\x02\u01CB\u01DE\x05*\x16\x02\u01CC\u01DE\x05,\x17\x02" +
		"\u01CD\u01DE\x05.\x18\x02\u01CE\u01DE\x050\x19\x02\u01CF\u01DE\x052\x1A" +
		"\x02\u01D0\u01DE\x054\x1B\x02\u01D1\u01DE\x056\x1C\x02\u01D2\u01DE\x05" +
		"8\x1D\x02\u01D3\u01DE\x05:\x1E\x02\u01D4\u01DE\x05<\x1F\x02\u01D5\u01DE" +
		"\x05> \x02\u01D6\u01DE\x05@!\x02\u01D7\u01DE\x05B\"\x02\u01D8\u01DE\x05" +
		"D#\x02\u01D9\u01DE\x05F$\x02\u01DA\u01DE\x05H%\x02\u01DB\u01DE\x05J&\x02" +
		"\u01DC\u01DE\x05L\'\x02\u01DD\u01B9\x03\x02\x02\x02\u01DD\u01BA\x03\x02" +
		"\x02\x02\u01DD\u01BB\x03\x02\x02\x02\u01DD\u01BC\x03\x02\x02\x02\u01DD" +
		"\u01BD\x03\x02\x02\x02\u01DD\u01BE\x03\x02\x02\x02\u01DD\u01BF\x03\x02" +
		"\x02\x02\u01DD\u01C0\x03\x02\x02\x02\u01DD\u01C1\x03\x02\x02\x02\u01DD" +
		"\u01C2\x03\x02\x02\x02\u01DD\u01C3\x03\x02\x02\x02\u01DD\u01C4\x03\x02" +
		"\x02\x02\u01DD\u01C5\x03\x02\x02\x02\u01DD\u01C6\x03\x02\x02\x02\u01DD" +
		"\u01C7\x03\x02\x02\x02\u01DD\u01C8\x03\x02\x02\x02\u01DD\u01C9\x03\x02" +
		"\x02\x02\u01DD\u01CA\x03\x02\x02\x02\u01DD\u01CB\x03\x02\x02\x02\u01DD" +
		"\u01CC\x03\x02\x02\x02\u01DD\u01CD\x03\x02\x02\x02\u01DD\u01CE\x03\x02" +
		"\x02\x02\u01DD\u01CF\x03\x02\x02\x02\u01DD\u01D0\x03\x02\x02\x02\u01DD" +
		"\u01D1\x03\x02\x02\x02\u01DD\u01D2\x03\x02\x02\x02\u01DD\u01D3\x03\x02" +
		"\x02\x02\u01DD\u01D4\x03\x02\x02\x02\u01DD\u01D5\x03\x02\x02\x02\u01DD" +
		"\u01D6\x03\x02\x02\x02\u01DD\u01D7\x03\x02\x02\x02\u01DD\u01D8\x03\x02" +
		"\x02\x02\u01DD\u01D9\x03\x02\x02\x02\u01DD\u01DA\x03\x02\x02\x02\u01DD" +
		"\u01DB\x03\x02\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DEQ\x03\x02\x02" +
		"\x02\x18Ual\xC8\xEB\xEE\xFB\xFE\u0104\u010D\u011B\u0127\u0136\u0139\u0145" +
		"\u0148\u0156\u0159\u0167\u016A\u017B\u01DD";
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
	public CALL_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CALL_FUNCTION, 0); }
	public packageAddress(): PackageAddressContext | undefined {
		return this.tryGetRuleContext(0, PackageAddressContext);
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public CALL_METHOD(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CALL_METHOD, 0); }
	public componentAddress(): ComponentAddressContext | undefined {
		return this.tryGetRuleContext(0, ComponentAddressContext);
	}
	public CALL_METHOD_WITH_ALL_RESOURCES(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES, 0); }
	public TAKE_FROM_WORKTOP(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0); }
	public resourceAddress(): ResourceAddressContext | undefined {
		return this.tryGetRuleContext(0, ResourceAddressContext);
	}
	public bucket(): BucketContext | undefined {
		return this.tryGetRuleContext(0, BucketContext);
	}
	public TAKE_FROM_WORKTOP_BY_AMOUNT(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT, 0); }
	public decimal(): DecimalContext | undefined {
		return this.tryGetRuleContext(0, DecimalContext);
	}
	public TAKE_FROM_WORKTOP_BY_IDS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS, 0); }
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public RETURN_TO_WORKTOP(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.RETURN_TO_WORKTOP, 0); }
	public ASSERT_WORKTOP_CONTAINS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS, 0); }
	public ASSERT_WORKTOP_CONTAINS_BY_AMOUNT(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT, 0); }
	public ASSERT_WORKTOP_CONTAINS_BY_IDS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS, 0); }
	public POP_FROM_AUTH_ZONE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.POP_FROM_AUTH_ZONE, 0); }
	public proof(): ProofContext[];
	public proof(i: number): ProofContext;
	public proof(i?: number): ProofContext | ProofContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProofContext);
		} else {
			return this.getRuleContext(i, ProofContext);
		}
	}
	public PUSH_TO_AUTH_ZONE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.PUSH_TO_AUTH_ZONE, 0); }
	public CREATE_PROOF_FROM_AUTH_ZONE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE, 0); }
	public CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT, 0); }
	public CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS, 0); }
	public CREATE_PROOF_FROM_BUCKET(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET, 0); }
	public CLONE_PROOF(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CLONE_PROOF, 0); }
	public DROP_PROOF(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.DROP_PROOF, 0); }
	public DROP_ALL_PROOFS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.DROP_ALL_PROOFS, 0); }
	public CLEAR_AUTHZONE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CLEAR_AUTHZONE, 0); }
	public PUBLISH_PACKAGE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.PUBLISH_PACKAGE, 0); }
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


export class UnitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_unit; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public BOOL_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.BOOL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_bool; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class I8Context extends ParserRuleContext {
	public I8_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.I8_LITERAL, 0); }
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
	public I16_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.I16_LITERAL, 0); }
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
	public I32_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.I32_LITERAL, 0); }
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
	public I64_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.I64_LITERAL, 0); }
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
	public I128_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.I128_LITERAL, 0); }
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


export class U8Context extends ParserRuleContext {
	public U8_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.U8_LITERAL, 0); }
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
	public U16_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.U16_LITERAL, 0); }
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
	public U32_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.U32_LITERAL, 0); }
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
	public U64_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.U64_LITERAL, 0); }
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
	public U128_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.U128_LITERAL, 0); }
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


export class StringContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_string; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructContext extends ParserRuleContext {
	public STRUCT_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.STRUCT_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_struct; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterStruct) {
			listener.enterStruct(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitStruct) {
			listener.exitStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitStruct) {
			return visitor.visitStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_Context extends ParserRuleContext {
	public ENUM_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.ENUM_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
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
	public get ruleIndex(): number { return TransactionManifestParser.RULE_enum_; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterEnum_) {
			listener.enterEnum_(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitEnum_) {
			listener.exitEnum_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitEnum_) {
			return visitor.visitEnum_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public some(): SomeContext | undefined {
		return this.tryGetRuleContext(0, SomeContext);
	}
	public none(): NoneContext | undefined {
		return this.tryGetRuleContext(0, NoneContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_option; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitOption) {
			return visitor.visitOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SomeContext extends ParserRuleContext {
	public SOME_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.SOME_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_some; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSome) {
			listener.enterSome(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSome) {
			listener.exitSome(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSome) {
			return visitor.visitSome(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoneContext extends ParserRuleContext {
	public NONE_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.NONE_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_none; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterNone) {
			listener.enterNone(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitNone) {
			listener.exitNone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitNone) {
			return visitor.visitNone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OkContext extends ParserRuleContext {
	public OK_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.OK_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_ok; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterOk) {
			listener.enterOk(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitOk) {
			listener.exitOk(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitOk) {
			return visitor.visitOk(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrContext extends ParserRuleContext {
	public ERR_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.ERR_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_err; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterErr) {
			listener.enterErr(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitErr) {
			listener.exitErr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitErr) {
			return visitor.visitErr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public ARRAY_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.ARRAY_TYPE, 0); }
	public LESS_THAN(): TerminalNode { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public GREATER_THAN(): TerminalNode { return this.getToken(TransactionManifestParser.GREATER_THAN, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_array; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleContext extends ParserRuleContext {
	public TUPLE_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.TUPLE_TYPE, 0); }
	public LESS_THAN(): TerminalNode { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_tuple; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterTuple) {
			listener.enterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitTuple) {
			listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public LIST_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.LIST_TYPE, 0); }
	public LESS_THAN(): TerminalNode { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public GREATER_THAN(): TerminalNode { return this.getToken(TransactionManifestParser.GREATER_THAN, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
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


export class SetContext extends ParserRuleContext {
	public SET_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.SET_TYPE, 0); }
	public LESS_THAN(): TerminalNode { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public GREATER_THAN(): TerminalNode { return this.getToken(TransactionManifestParser.GREATER_THAN, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
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


export class MapContext extends ParserRuleContext {
	public MAP_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.MAP_TYPE, 0); }
	public LESS_THAN(): TerminalNode { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionManifestParser.COMMA);
		} else {
			return this.getToken(TransactionManifestParser.COMMA, i);
		}
	}
	public GREATER_THAN(): TerminalNode { return this.getToken(TransactionManifestParser.GREATER_THAN, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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


export class DecimalContext extends ParserRuleContext {
	public DECIMAL_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.DECIMAL_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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


export class PreciseDecimalContext extends ParserRuleContext {
	public PRECISE_DECIMAL_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_preciseDecimal; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterPreciseDecimal) {
			listener.enterPreciseDecimal(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitPreciseDecimal) {
			listener.exitPreciseDecimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitPreciseDecimal) {
			return visitor.visitPreciseDecimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageAddressContext extends ParserRuleContext {
	public PACKAGE_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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


export class ComponentAddressContext extends ParserRuleContext {
	public COMPONENT_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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


export class ResourceAddressContext extends ParserRuleContext {
	public RESOURCE_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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


export class HashContext extends ParserRuleContext {
	public HASH_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.HASH_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_hash; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterHash) {
			listener.enterHash(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitHash) {
			listener.exitHash(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitHash) {
			return visitor.visitHash(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BucketContext extends ParserRuleContext {
	public BUCKET_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.BUCKET_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public U32_LITERAL(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.U32_LITERAL, 0); }
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
	public PROOF_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.PROOF_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public U32_LITERAL(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.U32_LITERAL, 0); }
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


export class NonFungible_idContext extends ParserRuleContext {
	public NON_FUNGIBLE_ID_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_nonFungible_id; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterNonFungible_id) {
			listener.enterNonFungible_id(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitNonFungible_id) {
			listener.exitNonFungible_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitNonFungible_id) {
			return visitor.visitNonFungible_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonFungibleAddressContext extends ParserRuleContext {
	public NON_FUNGIBLE_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_nonFungibleAddress; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterNonFungibleAddress) {
			listener.enterNonFungibleAddress(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitNonFungibleAddress) {
			listener.exitNonFungibleAddress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitNonFungibleAddress) {
			return visitor.visitNonFungibleAddress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BytesContext extends ParserRuleContext {
	public BYTES_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.BYTES_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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


export class TypeContext extends ParserRuleContext {
	public UNIT_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.UNIT_TYPE, 0); }
	public BOOL_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.BOOL_TYPE, 0); }
	public I8_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.I8_TYPE, 0); }
	public I16_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.I16_TYPE, 0); }
	public I32_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.I32_TYPE, 0); }
	public I64_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.I64_TYPE, 0); }
	public I128_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.I128_TYPE, 0); }
	public U8_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.U8_TYPE, 0); }
	public U16_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.U16_TYPE, 0); }
	public U32_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.U32_TYPE, 0); }
	public U64_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.U64_TYPE, 0); }
	public U128_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.U128_TYPE, 0); }
	public STRING_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.STRING_TYPE, 0); }
	public STRUCT_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.STRUCT_TYPE, 0); }
	public ENUM_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ENUM_TYPE, 0); }
	public OPTION_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.OPTION_TYPE, 0); }
	public RESULT_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.RESULT_TYPE, 0); }
	public SOME_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SOME_TYPE, 0); }
	public NONE_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.NONE_TYPE, 0); }
	public OK_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.OK_TYPE, 0); }
	public ERR_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ERR_TYPE, 0); }
	public ARRAY_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ARRAY_TYPE, 0); }
	public TUPLE_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.TUPLE_TYPE, 0); }
	public LIST_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.LIST_TYPE, 0); }
	public SET_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SET_TYPE, 0); }
	public MAP_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.MAP_TYPE, 0); }
	public DECIMAL_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.DECIMAL_TYPE, 0); }
	public PRECISE_DECIMAL_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0); }
	public PACKAGE_ADDRESS_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
	public COMPONENT_ADDRESS_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
	public RESOURCE_ADDRESS_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
	public HASH_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.HASH_TYPE, 0); }
	public BUCKET_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.BUCKET_TYPE, 0); }
	public PROOF_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.PROOF_TYPE, 0); }
	public NON_FUNGIBLE_ID_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
	public NON_FUNGIBLE_ADDRESS_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
	public BYTES_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.BYTES_TYPE, 0); }
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


export class ValueContext extends ParserRuleContext {
	public unit(): UnitContext | undefined {
		return this.tryGetRuleContext(0, UnitContext);
	}
	public bool(): BoolContext | undefined {
		return this.tryGetRuleContext(0, BoolContext);
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
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public struct(): StructContext | undefined {
		return this.tryGetRuleContext(0, StructContext);
	}
	public enum_(): Enum_Context | undefined {
		return this.tryGetRuleContext(0, Enum_Context);
	}
	public option(): OptionContext | undefined {
		return this.tryGetRuleContext(0, OptionContext);
	}
	public some(): SomeContext | undefined {
		return this.tryGetRuleContext(0, SomeContext);
	}
	public none(): NoneContext | undefined {
		return this.tryGetRuleContext(0, NoneContext);
	}
	public ok(): OkContext | undefined {
		return this.tryGetRuleContext(0, OkContext);
	}
	public err(): ErrContext | undefined {
		return this.tryGetRuleContext(0, ErrContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public tuple(): TupleContext | undefined {
		return this.tryGetRuleContext(0, TupleContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public map(): MapContext | undefined {
		return this.tryGetRuleContext(0, MapContext);
	}
	public decimal(): DecimalContext | undefined {
		return this.tryGetRuleContext(0, DecimalContext);
	}
	public preciseDecimal(): PreciseDecimalContext | undefined {
		return this.tryGetRuleContext(0, PreciseDecimalContext);
	}
	public packageAddress(): PackageAddressContext | undefined {
		return this.tryGetRuleContext(0, PackageAddressContext);
	}
	public componentAddress(): ComponentAddressContext | undefined {
		return this.tryGetRuleContext(0, ComponentAddressContext);
	}
	public resourceAddress(): ResourceAddressContext | undefined {
		return this.tryGetRuleContext(0, ResourceAddressContext);
	}
	public hash(): HashContext | undefined {
		return this.tryGetRuleContext(0, HashContext);
	}
	public bucket(): BucketContext | undefined {
		return this.tryGetRuleContext(0, BucketContext);
	}
	public proof(): ProofContext | undefined {
		return this.tryGetRuleContext(0, ProofContext);
	}
	public nonFungible_id(): NonFungible_idContext | undefined {
		return this.tryGetRuleContext(0, NonFungible_idContext);
	}
	public nonFungibleAddress(): NonFungibleAddressContext | undefined {
		return this.tryGetRuleContext(0, NonFungibleAddressContext);
	}
	public bytes(): BytesContext | undefined {
		return this.tryGetRuleContext(0, BytesContext);
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


