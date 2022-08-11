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
	public static readonly SAFE_I8_LITERAL = 13;
	public static readonly SAFE_I16_LITERAL = 14;
	public static readonly SAFE_I32_LITERAL = 15;
	public static readonly SAFE_I64_LITERAL = 16;
	public static readonly SAFE_I128_LITERAL = 17;
	public static readonly SAFE_I256_LITERAL = 18;
	public static readonly SAFE_I384_LITERAL = 19;
	public static readonly SAFE_I512_LITERAL = 20;
	public static readonly SAFE_U8_LITERAL = 21;
	public static readonly SAFE_U16_LITERAL = 22;
	public static readonly SAFE_U32_LITERAL = 23;
	public static readonly SAFE_U64_LITERAL = 24;
	public static readonly SAFE_U128_LITERAL = 25;
	public static readonly SAFE_U384_LITERAL = 26;
	public static readonly SAFE_U256_LITERAL = 27;
	public static readonly SAFE_U512_LITERAL = 28;
	public static readonly TRUE = 29;
	public static readonly FALSE = 30;
	public static readonly UNIT_TYPE = 31;
	public static readonly BOOL_TYPE = 32;
	public static readonly I8_TYPE = 33;
	public static readonly I16_TYPE = 34;
	public static readonly I32_TYPE = 35;
	public static readonly I64_TYPE = 36;
	public static readonly I128_TYPE = 37;
	public static readonly U8_TYPE = 38;
	public static readonly U16_TYPE = 39;
	public static readonly U32_TYPE = 40;
	public static readonly U64_TYPE = 41;
	public static readonly U128_TYPE = 42;
	public static readonly SAFE_I8_TYPE = 43;
	public static readonly SAFE_I16_TYPE = 44;
	public static readonly SAFE_I32_TYPE = 45;
	public static readonly SAFE_I64_TYPE = 46;
	public static readonly SAFE_I128_TYPE = 47;
	public static readonly SAFE_I256_TYPE = 48;
	public static readonly SAFE_I384_TYPE = 49;
	public static readonly SAFE_I512_TYPE = 50;
	public static readonly SAFE_U8_TYPE = 51;
	public static readonly SAFE_U16_TYPE = 52;
	public static readonly SAFE_U32_TYPE = 53;
	public static readonly SAFE_U64_TYPE = 54;
	public static readonly SAFE_U128_TYPE = 55;
	public static readonly SAFE_U384_TYPE = 56;
	public static readonly SAFE_U256_TYPE = 57;
	public static readonly SAFE_U512_TYPE = 58;
	public static readonly STRING_TYPE = 59;
	public static readonly STRUCT_TYPE = 60;
	public static readonly ENUM_TYPE = 61;
	public static readonly OPTION_TYPE = 62;
	public static readonly RESULT_TYPE = 63;
	public static readonly SOME_TYPE = 64;
	public static readonly NONE_TYPE = 65;
	public static readonly OK_TYPE = 66;
	public static readonly ERR_TYPE = 67;
	public static readonly ARRAY_TYPE = 68;
	public static readonly TUPLE_TYPE = 69;
	public static readonly LIST_TYPE = 70;
	public static readonly SET_TYPE = 71;
	public static readonly MAP_TYPE = 72;
	public static readonly DECIMAL_TYPE = 73;
	public static readonly PRECISE_DECIMAL_TYPE = 74;
	public static readonly PACKAGE_ADDRESS_TYPE = 75;
	public static readonly COMPONENT_ADDRESS_TYPE = 76;
	public static readonly RESOURCE_ADDRESS_TYPE = 77;
	public static readonly HASH_TYPE = 78;
	public static readonly BUCKET_TYPE = 79;
	public static readonly PROOF_TYPE = 80;
	public static readonly NON_FUNGIBLE_ID_TYPE = 81;
	public static readonly NON_FUNGIBLE_ADDRESS_TYPE = 82;
	public static readonly BYTES_TYPE = 83;
	public static readonly OPEN_PARENTHESIS = 84;
	public static readonly CLOED_PARENTHESIS = 85;
	public static readonly LESS_THAN = 86;
	public static readonly GREATER_THAN = 87;
	public static readonly COMMA = 88;
	public static readonly SEMICOLON = 89;
	public static readonly TAKE_FROM_WORKTOP = 90;
	public static readonly TAKE_FROM_WORKTOP_BY_AMOUNT = 91;
	public static readonly TAKE_FROM_WORKTOP_BY_IDS = 92;
	public static readonly ASSERT_WORKTOP_CONTAINS = 93;
	public static readonly ASSERT_WORKTOP_CONTAINS_BY_AMOUNT = 94;
	public static readonly ASSERT_WORKTOP_CONTAINS_BY_IDS = 95;
	public static readonly RETURN_TO_WORKTOP = 96;
	public static readonly POP_FROM_AUTH_ZONE = 97;
	public static readonly PUSH_TO_AUTH_ZONE = 98;
	public static readonly CLEAR_AUTHZONE = 99;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE = 100;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT = 101;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS = 102;
	public static readonly CREATE_PROOF_FROM_BUCKET = 103;
	public static readonly CLONE_PROOF = 104;
	public static readonly DROP_PROOF = 105;
	public static readonly DROP_ALL_PROOFS = 106;
	public static readonly CALL_FUNCTION = 107;
	public static readonly CALL_METHOD = 108;
	public static readonly CALL_METHOD_WITH_ALL_RESOURCES = 109;
	public static readonly PUBLISH_PACKAGE = 110;
	public static readonly STRING_LITERAL = 111;
	public static readonly DIGIT = 112;
	public static readonly LETTER = 113;
	public static readonly NUMBER = 114;
	public static readonly WS = 115;
	public static readonly COMMENT = 116;
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
	public static readonly RULE_safe_i8 = 14;
	public static readonly RULE_safe_i16 = 15;
	public static readonly RULE_safe_i32 = 16;
	public static readonly RULE_safe_i64 = 17;
	public static readonly RULE_safe_i128 = 18;
	public static readonly RULE_safe_i256 = 19;
	public static readonly RULE_safe_i384 = 20;
	public static readonly RULE_safe_i512 = 21;
	public static readonly RULE_safe_u8 = 22;
	public static readonly RULE_safe_u16 = 23;
	public static readonly RULE_safe_u32 = 24;
	public static readonly RULE_safe_u64 = 25;
	public static readonly RULE_safe_u128 = 26;
	public static readonly RULE_safe_u256 = 27;
	public static readonly RULE_safe_u384 = 28;
	public static readonly RULE_safe_u512 = 29;
	public static readonly RULE_string = 30;
	public static readonly RULE_struct = 31;
	public static readonly RULE_enum_ = 32;
	public static readonly RULE_option = 33;
	public static readonly RULE_some = 34;
	public static readonly RULE_none = 35;
	public static readonly RULE_ok = 36;
	public static readonly RULE_err = 37;
	public static readonly RULE_array = 38;
	public static readonly RULE_tuple = 39;
	public static readonly RULE_list = 40;
	public static readonly RULE_set = 41;
	public static readonly RULE_map = 42;
	public static readonly RULE_decimal = 43;
	public static readonly RULE_precise_decimal = 44;
	public static readonly RULE_package_address = 45;
	public static readonly RULE_component_address = 46;
	public static readonly RULE_resource_address = 47;
	public static readonly RULE_hash = 48;
	public static readonly RULE_bucket = 49;
	public static readonly RULE_proof = 50;
	public static readonly RULE_non_fungible_id = 51;
	public static readonly RULE_non_fungible_address = 52;
	public static readonly RULE_bytes = 53;
	public static readonly RULE_type = 54;
	public static readonly RULE_value = 55;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"manifest", "manifestInstruction", "unit", "bool", "i8", "i16", "i32", 
		"i64", "i128", "u8", "u16", "u32", "u64", "u128", "safe_i8", "safe_i16", 
		"safe_i32", "safe_i64", "safe_i128", "safe_i256", "safe_i384", "safe_i512", 
		"safe_u8", "safe_u16", "safe_u32", "safe_u64", "safe_u128", "safe_u256", 
		"safe_u384", "safe_u512", "string", "struct", "enum_", "option", "some", 
		"none", "ok", "err", "array", "tuple", "list", "set", "map", "decimal", 
		"precise_decimal", "package_address", "component_address", "resource_address", 
		"hash", "bucket", "proof", "non_fungible_id", "non_fungible_address", 
		"bytes", "type", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'()'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'true'", "'false'", "'Unit'", "'Bool'", "'I8'", "'I16'", "'I32'", 
		"'I64'", "'I128'", "'U8'", "'U16'", "'U32'", "'U64'", "'U128'", "'SafeI8'", 
		"'SafeI16'", "'SafeI32'", "'SafeI64'", "'SafeI128'", "'SafeI256'", "'SafeI384'", 
		"'SafeI512'", "'SafeU8'", "'SafeU16'", "'SafeU32'", "'SafeU64'", "'SafeU128'", 
		"'SafeU384'", "'SafeU256'", "'SafeU512'", "'String'", "'Struct'", "'Enum'", 
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
		"U64_LITERAL", "U128_LITERAL", "SAFE_I8_LITERAL", "SAFE_I16_LITERAL", 
		"SAFE_I32_LITERAL", "SAFE_I64_LITERAL", "SAFE_I128_LITERAL", "SAFE_I256_LITERAL", 
		"SAFE_I384_LITERAL", "SAFE_I512_LITERAL", "SAFE_U8_LITERAL", "SAFE_U16_LITERAL", 
		"SAFE_U32_LITERAL", "SAFE_U64_LITERAL", "SAFE_U128_LITERAL", "SAFE_U384_LITERAL", 
		"SAFE_U256_LITERAL", "SAFE_U512_LITERAL", "TRUE", "FALSE", "UNIT_TYPE", 
		"BOOL_TYPE", "I8_TYPE", "I16_TYPE", "I32_TYPE", "I64_TYPE", "I128_TYPE", 
		"U8_TYPE", "U16_TYPE", "U32_TYPE", "U64_TYPE", "U128_TYPE", "SAFE_I8_TYPE", 
		"SAFE_I16_TYPE", "SAFE_I32_TYPE", "SAFE_I64_TYPE", "SAFE_I128_TYPE", "SAFE_I256_TYPE", 
		"SAFE_I384_TYPE", "SAFE_I512_TYPE", "SAFE_U8_TYPE", "SAFE_U16_TYPE", "SAFE_U32_TYPE", 
		"SAFE_U64_TYPE", "SAFE_U128_TYPE", "SAFE_U384_TYPE", "SAFE_U256_TYPE", 
		"SAFE_U512_TYPE", "STRING_TYPE", "STRUCT_TYPE", "ENUM_TYPE", "OPTION_TYPE", 
		"RESULT_TYPE", "SOME_TYPE", "NONE_TYPE", "OK_TYPE", "ERR_TYPE", "ARRAY_TYPE", 
		"TUPLE_TYPE", "LIST_TYPE", "SET_TYPE", "MAP_TYPE", "DECIMAL_TYPE", "PRECISE_DECIMAL_TYPE", 
		"PACKAGE_ADDRESS_TYPE", "COMPONENT_ADDRESS_TYPE", "RESOURCE_ADDRESS_TYPE", 
		"HASH_TYPE", "BUCKET_TYPE", "PROOF_TYPE", "NON_FUNGIBLE_ID_TYPE", "NON_FUNGIBLE_ADDRESS_TYPE", 
		"BYTES_TYPE", "OPEN_PARENTHESIS", "CLOED_PARENTHESIS", "LESS_THAN", "GREATER_THAN", 
		"COMMA", "SEMICOLON", "TAKE_FROM_WORKTOP", "TAKE_FROM_WORKTOP_BY_AMOUNT", 
		"TAKE_FROM_WORKTOP_BY_IDS", "ASSERT_WORKTOP_CONTAINS", "ASSERT_WORKTOP_CONTAINS_BY_AMOUNT", 
		"ASSERT_WORKTOP_CONTAINS_BY_IDS", "RETURN_TO_WORKTOP", "POP_FROM_AUTH_ZONE", 
		"PUSH_TO_AUTH_ZONE", "CLEAR_AUTHZONE", "CREATE_PROOF_FROM_AUTH_ZONE", 
		"CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT", "CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS", 
		"CREATE_PROOF_FROM_BUCKET", "CLONE_PROOF", "DROP_PROOF", "DROP_ALL_PROOFS", 
		"CALL_FUNCTION", "CALL_METHOD", "CALL_METHOD_WITH_ALL_RESOURCES", "PUBLISH_PACKAGE", 
		"STRING_LITERAL", "DIGIT", "LETTER", "NUMBER", "WS", "COMMENT",
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
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (TransactionManifestParser.TAKE_FROM_WORKTOP - 90)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT - 90)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS - 90)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS - 90)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 90)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS - 90)) | (1 << (TransactionManifestParser.RETURN_TO_WORKTOP - 90)) | (1 << (TransactionManifestParser.POP_FROM_AUTH_ZONE - 90)) | (1 << (TransactionManifestParser.PUSH_TO_AUTH_ZONE - 90)) | (1 << (TransactionManifestParser.CLEAR_AUTHZONE - 90)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE - 90)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 90)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 90)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_BUCKET - 90)) | (1 << (TransactionManifestParser.CLONE_PROOF - 90)) | (1 << (TransactionManifestParser.DROP_PROOF - 90)) | (1 << (TransactionManifestParser.DROP_ALL_PROOFS - 90)) | (1 << (TransactionManifestParser.CALL_FUNCTION - 90)) | (1 << (TransactionManifestParser.CALL_METHOD - 90)) | (1 << (TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES - 90)) | (1 << (TransactionManifestParser.PUBLISH_PACKAGE - 90)))) !== 0)) {
				{
				{
				this.state = 112;
				this.manifestInstruction();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 118;
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
			this.state = 230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.CALL_FUNCTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.match(TransactionManifestParser.CALL_FUNCTION);
				this.state = 121;
				this.package_address();
				this.state = 122;
				this.string();
				this.state = 123;
				this.string();
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.SAFE_I8_LITERAL) | (1 << TransactionManifestParser.SAFE_I16_LITERAL) | (1 << TransactionManifestParser.SAFE_I32_LITERAL) | (1 << TransactionManifestParser.SAFE_I64_LITERAL) | (1 << TransactionManifestParser.SAFE_I128_LITERAL) | (1 << TransactionManifestParser.SAFE_I256_LITERAL) | (1 << TransactionManifestParser.SAFE_I384_LITERAL) | (1 << TransactionManifestParser.SAFE_I512_LITERAL) | (1 << TransactionManifestParser.SAFE_U8_LITERAL) | (1 << TransactionManifestParser.SAFE_U16_LITERAL) | (1 << TransactionManifestParser.SAFE_U32_LITERAL) | (1 << TransactionManifestParser.SAFE_U64_LITERAL) | (1 << TransactionManifestParser.SAFE_U128_LITERAL) | (1 << TransactionManifestParser.SAFE_U384_LITERAL) | (1 << TransactionManifestParser.SAFE_U256_LITERAL) | (1 << TransactionManifestParser.SAFE_U512_LITERAL))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (TransactionManifestParser.STRUCT_TYPE - 60)) | (1 << (TransactionManifestParser.ENUM_TYPE - 60)) | (1 << (TransactionManifestParser.SOME_TYPE - 60)) | (1 << (TransactionManifestParser.NONE_TYPE - 60)) | (1 << (TransactionManifestParser.OK_TYPE - 60)) | (1 << (TransactionManifestParser.ERR_TYPE - 60)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 60)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 60)) | (1 << (TransactionManifestParser.LIST_TYPE - 60)) | (1 << (TransactionManifestParser.SET_TYPE - 60)) | (1 << (TransactionManifestParser.MAP_TYPE - 60)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.HASH_TYPE - 60)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 60)) | (1 << (TransactionManifestParser.PROOF_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.BYTES_TYPE - 60)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
					{
					{
					this.state = 124;
					this.value();
					}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 130;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CALL_METHOD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 132;
				this.match(TransactionManifestParser.CALL_METHOD);
				this.state = 133;
				this.component_address();
				this.state = 134;
				this.string();
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.SAFE_I8_LITERAL) | (1 << TransactionManifestParser.SAFE_I16_LITERAL) | (1 << TransactionManifestParser.SAFE_I32_LITERAL) | (1 << TransactionManifestParser.SAFE_I64_LITERAL) | (1 << TransactionManifestParser.SAFE_I128_LITERAL) | (1 << TransactionManifestParser.SAFE_I256_LITERAL) | (1 << TransactionManifestParser.SAFE_I384_LITERAL) | (1 << TransactionManifestParser.SAFE_I512_LITERAL) | (1 << TransactionManifestParser.SAFE_U8_LITERAL) | (1 << TransactionManifestParser.SAFE_U16_LITERAL) | (1 << TransactionManifestParser.SAFE_U32_LITERAL) | (1 << TransactionManifestParser.SAFE_U64_LITERAL) | (1 << TransactionManifestParser.SAFE_U128_LITERAL) | (1 << TransactionManifestParser.SAFE_U384_LITERAL) | (1 << TransactionManifestParser.SAFE_U256_LITERAL) | (1 << TransactionManifestParser.SAFE_U512_LITERAL))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (TransactionManifestParser.STRUCT_TYPE - 60)) | (1 << (TransactionManifestParser.ENUM_TYPE - 60)) | (1 << (TransactionManifestParser.SOME_TYPE - 60)) | (1 << (TransactionManifestParser.NONE_TYPE - 60)) | (1 << (TransactionManifestParser.OK_TYPE - 60)) | (1 << (TransactionManifestParser.ERR_TYPE - 60)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 60)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 60)) | (1 << (TransactionManifestParser.LIST_TYPE - 60)) | (1 << (TransactionManifestParser.SET_TYPE - 60)) | (1 << (TransactionManifestParser.MAP_TYPE - 60)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.HASH_TYPE - 60)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 60)) | (1 << (TransactionManifestParser.PROOF_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.BYTES_TYPE - 60)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
					{
					{
					this.state = 135;
					this.value();
					}
					}
					this.state = 140;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 141;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 143;
				this.match(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES);
				this.state = 144;
				this.component_address();
				this.state = 145;
				this.string();
				this.state = 146;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.TAKE_FROM_WORKTOP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 148;
				this.match(TransactionManifestParser.TAKE_FROM_WORKTOP);
				this.state = 149;
				this.resource_address();
				this.state = 150;
				this.bucket();
				this.state = 151;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 153;
				this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT);
				this.state = 154;
				this.decimal();
				this.state = 155;
				this.resource_address();
				this.state = 156;
				this.bucket();
				this.state = 157;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 159;
				this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS);
				this.state = 160;
				this.set();
				this.state = 161;
				this.resource_address();
				this.state = 162;
				this.bucket();
				this.state = 163;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.RETURN_TO_WORKTOP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 165;
				this.match(TransactionManifestParser.RETURN_TO_WORKTOP);
				this.state = 166;
				this.bucket();
				this.state = 167;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 169;
				this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS);
				this.state = 170;
				this.resource_address();
				this.state = 171;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 173;
				this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
				this.state = 174;
				this.decimal();
				this.state = 175;
				this.resource_address();
				this.state = 176;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 178;
				this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS);
				this.state = 179;
				this.set();
				this.state = 180;
				this.resource_address();
				this.state = 181;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.POP_FROM_AUTH_ZONE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 183;
				this.match(TransactionManifestParser.POP_FROM_AUTH_ZONE);
				this.state = 184;
				this.proof();
				this.state = 185;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.PUSH_TO_AUTH_ZONE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 187;
				this.match(TransactionManifestParser.PUSH_TO_AUTH_ZONE);
				this.state = 188;
				this.proof();
				this.state = 189;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 191;
				this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE);
				this.state = 192;
				this.resource_address();
				this.state = 193;
				this.proof();
				this.state = 194;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 196;
				this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
				this.state = 197;
				this.decimal();
				this.state = 198;
				this.resource_address();
				this.state = 199;
				this.proof();
				this.state = 200;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 202;
				this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
				this.state = 203;
				this.set();
				this.state = 204;
				this.resource_address();
				this.state = 205;
				this.proof();
				this.state = 206;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_BUCKET:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 208;
				this.match(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET);
				this.state = 209;
				this.bucket();
				this.state = 210;
				this.proof();
				this.state = 211;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CLONE_PROOF:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 213;
				this.match(TransactionManifestParser.CLONE_PROOF);
				this.state = 214;
				this.proof();
				this.state = 215;
				this.proof();
				this.state = 216;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.DROP_PROOF:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 218;
				this.match(TransactionManifestParser.DROP_PROOF);
				this.state = 219;
				this.proof();
				this.state = 220;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.DROP_ALL_PROOFS:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 222;
				this.match(TransactionManifestParser.DROP_ALL_PROOFS);
				this.state = 223;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.CLEAR_AUTHZONE:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 224;
				this.match(TransactionManifestParser.CLEAR_AUTHZONE);
				this.state = 225;
				this.match(TransactionManifestParser.SEMICOLON);
				}
				break;
			case TransactionManifestParser.PUBLISH_PACKAGE:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 226;
				this.match(TransactionManifestParser.PUBLISH_PACKAGE);
				this.state = 227;
				this.bytes();
				this.state = 228;
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
			this.state = 232;
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
			this.state = 234;
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
			this.state = 236;
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
			this.state = 238;
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
			this.state = 240;
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
			this.state = 242;
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
			this.state = 244;
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
			this.state = 246;
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
			this.state = 248;
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
			this.state = 250;
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
			this.state = 252;
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
			this.state = 254;
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
	public safe_i8(): Safe_i8Context {
		let _localctx: Safe_i8Context = new Safe_i8Context(this._ctx, this.state);
		this.enterRule(_localctx, 28, TransactionManifestParser.RULE_safe_i8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(TransactionManifestParser.SAFE_I8_LITERAL);
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
	public safe_i16(): Safe_i16Context {
		let _localctx: Safe_i16Context = new Safe_i16Context(this._ctx, this.state);
		this.enterRule(_localctx, 30, TransactionManifestParser.RULE_safe_i16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(TransactionManifestParser.SAFE_I16_LITERAL);
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
	public safe_i32(): Safe_i32Context {
		let _localctx: Safe_i32Context = new Safe_i32Context(this._ctx, this.state);
		this.enterRule(_localctx, 32, TransactionManifestParser.RULE_safe_i32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(TransactionManifestParser.SAFE_I32_LITERAL);
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
	public safe_i64(): Safe_i64Context {
		let _localctx: Safe_i64Context = new Safe_i64Context(this._ctx, this.state);
		this.enterRule(_localctx, 34, TransactionManifestParser.RULE_safe_i64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(TransactionManifestParser.SAFE_I64_LITERAL);
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
	public safe_i128(): Safe_i128Context {
		let _localctx: Safe_i128Context = new Safe_i128Context(this._ctx, this.state);
		this.enterRule(_localctx, 36, TransactionManifestParser.RULE_safe_i128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(TransactionManifestParser.SAFE_I128_LITERAL);
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
	public safe_i256(): Safe_i256Context {
		let _localctx: Safe_i256Context = new Safe_i256Context(this._ctx, this.state);
		this.enterRule(_localctx, 38, TransactionManifestParser.RULE_safe_i256);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(TransactionManifestParser.SAFE_I256_LITERAL);
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
	public safe_i384(): Safe_i384Context {
		let _localctx: Safe_i384Context = new Safe_i384Context(this._ctx, this.state);
		this.enterRule(_localctx, 40, TransactionManifestParser.RULE_safe_i384);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(TransactionManifestParser.SAFE_I384_LITERAL);
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
	public safe_i512(): Safe_i512Context {
		let _localctx: Safe_i512Context = new Safe_i512Context(this._ctx, this.state);
		this.enterRule(_localctx, 42, TransactionManifestParser.RULE_safe_i512);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(TransactionManifestParser.SAFE_I512_LITERAL);
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
	public safe_u8(): Safe_u8Context {
		let _localctx: Safe_u8Context = new Safe_u8Context(this._ctx, this.state);
		this.enterRule(_localctx, 44, TransactionManifestParser.RULE_safe_u8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(TransactionManifestParser.SAFE_U8_LITERAL);
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
	public safe_u16(): Safe_u16Context {
		let _localctx: Safe_u16Context = new Safe_u16Context(this._ctx, this.state);
		this.enterRule(_localctx, 46, TransactionManifestParser.RULE_safe_u16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(TransactionManifestParser.SAFE_U16_LITERAL);
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
	public safe_u32(): Safe_u32Context {
		let _localctx: Safe_u32Context = new Safe_u32Context(this._ctx, this.state);
		this.enterRule(_localctx, 48, TransactionManifestParser.RULE_safe_u32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(TransactionManifestParser.SAFE_U32_LITERAL);
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
	public safe_u64(): Safe_u64Context {
		let _localctx: Safe_u64Context = new Safe_u64Context(this._ctx, this.state);
		this.enterRule(_localctx, 50, TransactionManifestParser.RULE_safe_u64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.match(TransactionManifestParser.SAFE_U64_LITERAL);
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
	public safe_u128(): Safe_u128Context {
		let _localctx: Safe_u128Context = new Safe_u128Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, TransactionManifestParser.RULE_safe_u128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.match(TransactionManifestParser.SAFE_U128_LITERAL);
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
	public safe_u256(): Safe_u256Context {
		let _localctx: Safe_u256Context = new Safe_u256Context(this._ctx, this.state);
		this.enterRule(_localctx, 54, TransactionManifestParser.RULE_safe_u256);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(TransactionManifestParser.SAFE_U256_LITERAL);
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
	public safe_u384(): Safe_u384Context {
		let _localctx: Safe_u384Context = new Safe_u384Context(this._ctx, this.state);
		this.enterRule(_localctx, 56, TransactionManifestParser.RULE_safe_u384);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(TransactionManifestParser.SAFE_U384_LITERAL);
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
	public safe_u512(): Safe_u512Context {
		let _localctx: Safe_u512Context = new Safe_u512Context(this._ctx, this.state);
		this.enterRule(_localctx, 58, TransactionManifestParser.RULE_safe_u512);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.match(TransactionManifestParser.SAFE_U512_LITERAL);
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
		this.enterRule(_localctx, 60, TransactionManifestParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
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
		this.enterRule(_localctx, 62, TransactionManifestParser.RULE_struct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(TransactionManifestParser.STRUCT_TYPE);
			this.state = 291;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.SAFE_I8_LITERAL) | (1 << TransactionManifestParser.SAFE_I16_LITERAL) | (1 << TransactionManifestParser.SAFE_I32_LITERAL) | (1 << TransactionManifestParser.SAFE_I64_LITERAL) | (1 << TransactionManifestParser.SAFE_I128_LITERAL) | (1 << TransactionManifestParser.SAFE_I256_LITERAL) | (1 << TransactionManifestParser.SAFE_I384_LITERAL) | (1 << TransactionManifestParser.SAFE_I512_LITERAL) | (1 << TransactionManifestParser.SAFE_U8_LITERAL) | (1 << TransactionManifestParser.SAFE_U16_LITERAL) | (1 << TransactionManifestParser.SAFE_U32_LITERAL) | (1 << TransactionManifestParser.SAFE_U64_LITERAL) | (1 << TransactionManifestParser.SAFE_U128_LITERAL) | (1 << TransactionManifestParser.SAFE_U384_LITERAL) | (1 << TransactionManifestParser.SAFE_U256_LITERAL) | (1 << TransactionManifestParser.SAFE_U512_LITERAL))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (TransactionManifestParser.STRUCT_TYPE - 60)) | (1 << (TransactionManifestParser.ENUM_TYPE - 60)) | (1 << (TransactionManifestParser.SOME_TYPE - 60)) | (1 << (TransactionManifestParser.NONE_TYPE - 60)) | (1 << (TransactionManifestParser.OK_TYPE - 60)) | (1 << (TransactionManifestParser.ERR_TYPE - 60)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 60)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 60)) | (1 << (TransactionManifestParser.LIST_TYPE - 60)) | (1 << (TransactionManifestParser.SET_TYPE - 60)) | (1 << (TransactionManifestParser.MAP_TYPE - 60)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.HASH_TYPE - 60)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 60)) | (1 << (TransactionManifestParser.PROOF_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.BYTES_TYPE - 60)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 292;
				this.value();
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 293;
					this.match(TransactionManifestParser.COMMA);
					this.state = 294;
					this.value();
					}
					}
					this.state = 299;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 302;
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
		this.enterRule(_localctx, 64, TransactionManifestParser.RULE_enum_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(TransactionManifestParser.ENUM_TYPE);
			this.state = 305;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			{
			this.state = 306;
			this.string();
			this.state = 307;
			this.match(TransactionManifestParser.COMMA);
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.SAFE_I8_LITERAL) | (1 << TransactionManifestParser.SAFE_I16_LITERAL) | (1 << TransactionManifestParser.SAFE_I32_LITERAL) | (1 << TransactionManifestParser.SAFE_I64_LITERAL) | (1 << TransactionManifestParser.SAFE_I128_LITERAL) | (1 << TransactionManifestParser.SAFE_I256_LITERAL) | (1 << TransactionManifestParser.SAFE_I384_LITERAL) | (1 << TransactionManifestParser.SAFE_I512_LITERAL) | (1 << TransactionManifestParser.SAFE_U8_LITERAL) | (1 << TransactionManifestParser.SAFE_U16_LITERAL) | (1 << TransactionManifestParser.SAFE_U32_LITERAL) | (1 << TransactionManifestParser.SAFE_U64_LITERAL) | (1 << TransactionManifestParser.SAFE_U128_LITERAL) | (1 << TransactionManifestParser.SAFE_U384_LITERAL) | (1 << TransactionManifestParser.SAFE_U256_LITERAL) | (1 << TransactionManifestParser.SAFE_U512_LITERAL))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (TransactionManifestParser.STRUCT_TYPE - 60)) | (1 << (TransactionManifestParser.ENUM_TYPE - 60)) | (1 << (TransactionManifestParser.SOME_TYPE - 60)) | (1 << (TransactionManifestParser.NONE_TYPE - 60)) | (1 << (TransactionManifestParser.OK_TYPE - 60)) | (1 << (TransactionManifestParser.ERR_TYPE - 60)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 60)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 60)) | (1 << (TransactionManifestParser.LIST_TYPE - 60)) | (1 << (TransactionManifestParser.SET_TYPE - 60)) | (1 << (TransactionManifestParser.MAP_TYPE - 60)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.HASH_TYPE - 60)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 60)) | (1 << (TransactionManifestParser.PROOF_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.BYTES_TYPE - 60)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 308;
				this.value();
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 309;
					this.match(TransactionManifestParser.COMMA);
					this.state = 310;
					this.value();
					}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
			this.state = 318;
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
		this.enterRule(_localctx, 66, TransactionManifestParser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.SOME_TYPE:
				{
				this.state = 320;
				this.some();
				}
				break;
			case TransactionManifestParser.NONE_TYPE:
				{
				this.state = 321;
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
		this.enterRule(_localctx, 68, TransactionManifestParser.RULE_some);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(TransactionManifestParser.SOME_TYPE);
			this.state = 325;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			{
			this.state = 326;
			this.value();
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TransactionManifestParser.COMMA) {
				{
				{
				this.state = 327;
				this.match(TransactionManifestParser.COMMA);
				this.state = 328;
				this.value();
				}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 334;
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
		this.enterRule(_localctx, 70, TransactionManifestParser.RULE_none);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
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
		this.enterRule(_localctx, 72, TransactionManifestParser.RULE_ok);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this.match(TransactionManifestParser.OK_TYPE);
			this.state = 339;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			{
			this.state = 340;
			this.value();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TransactionManifestParser.COMMA) {
				{
				{
				this.state = 341;
				this.match(TransactionManifestParser.COMMA);
				this.state = 342;
				this.value();
				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 348;
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
		this.enterRule(_localctx, 74, TransactionManifestParser.RULE_err);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.match(TransactionManifestParser.ERR_TYPE);
			this.state = 351;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
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
			this.state = 360;
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
		this.enterRule(_localctx, 76, TransactionManifestParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(TransactionManifestParser.ARRAY_TYPE);
			this.state = 363;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 364;
			this.type();
			this.state = 365;
			this.match(TransactionManifestParser.GREATER_THAN);
			this.state = 366;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.SAFE_I8_LITERAL) | (1 << TransactionManifestParser.SAFE_I16_LITERAL) | (1 << TransactionManifestParser.SAFE_I32_LITERAL) | (1 << TransactionManifestParser.SAFE_I64_LITERAL) | (1 << TransactionManifestParser.SAFE_I128_LITERAL) | (1 << TransactionManifestParser.SAFE_I256_LITERAL) | (1 << TransactionManifestParser.SAFE_I384_LITERAL) | (1 << TransactionManifestParser.SAFE_I512_LITERAL) | (1 << TransactionManifestParser.SAFE_U8_LITERAL) | (1 << TransactionManifestParser.SAFE_U16_LITERAL) | (1 << TransactionManifestParser.SAFE_U32_LITERAL) | (1 << TransactionManifestParser.SAFE_U64_LITERAL) | (1 << TransactionManifestParser.SAFE_U128_LITERAL) | (1 << TransactionManifestParser.SAFE_U384_LITERAL) | (1 << TransactionManifestParser.SAFE_U256_LITERAL) | (1 << TransactionManifestParser.SAFE_U512_LITERAL))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (TransactionManifestParser.STRUCT_TYPE - 60)) | (1 << (TransactionManifestParser.ENUM_TYPE - 60)) | (1 << (TransactionManifestParser.SOME_TYPE - 60)) | (1 << (TransactionManifestParser.NONE_TYPE - 60)) | (1 << (TransactionManifestParser.OK_TYPE - 60)) | (1 << (TransactionManifestParser.ERR_TYPE - 60)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 60)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 60)) | (1 << (TransactionManifestParser.LIST_TYPE - 60)) | (1 << (TransactionManifestParser.SET_TYPE - 60)) | (1 << (TransactionManifestParser.MAP_TYPE - 60)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.HASH_TYPE - 60)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 60)) | (1 << (TransactionManifestParser.PROOF_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.BYTES_TYPE - 60)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 367;
				this.value();
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 368;
					this.match(TransactionManifestParser.COMMA);
					this.state = 369;
					this.value();
					}
					}
					this.state = 374;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 377;
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
		this.enterRule(_localctx, 78, TransactionManifestParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(TransactionManifestParser.TUPLE_TYPE);
			this.state = 380;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 381;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.SAFE_I8_LITERAL) | (1 << TransactionManifestParser.SAFE_I16_LITERAL) | (1 << TransactionManifestParser.SAFE_I32_LITERAL) | (1 << TransactionManifestParser.SAFE_I64_LITERAL) | (1 << TransactionManifestParser.SAFE_I128_LITERAL) | (1 << TransactionManifestParser.SAFE_I256_LITERAL) | (1 << TransactionManifestParser.SAFE_I384_LITERAL) | (1 << TransactionManifestParser.SAFE_I512_LITERAL) | (1 << TransactionManifestParser.SAFE_U8_LITERAL) | (1 << TransactionManifestParser.SAFE_U16_LITERAL) | (1 << TransactionManifestParser.SAFE_U32_LITERAL) | (1 << TransactionManifestParser.SAFE_U64_LITERAL) | (1 << TransactionManifestParser.SAFE_U128_LITERAL) | (1 << TransactionManifestParser.SAFE_U384_LITERAL) | (1 << TransactionManifestParser.SAFE_U256_LITERAL) | (1 << TransactionManifestParser.SAFE_U512_LITERAL))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (TransactionManifestParser.STRUCT_TYPE - 60)) | (1 << (TransactionManifestParser.ENUM_TYPE - 60)) | (1 << (TransactionManifestParser.SOME_TYPE - 60)) | (1 << (TransactionManifestParser.NONE_TYPE - 60)) | (1 << (TransactionManifestParser.OK_TYPE - 60)) | (1 << (TransactionManifestParser.ERR_TYPE - 60)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 60)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 60)) | (1 << (TransactionManifestParser.LIST_TYPE - 60)) | (1 << (TransactionManifestParser.SET_TYPE - 60)) | (1 << (TransactionManifestParser.MAP_TYPE - 60)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.HASH_TYPE - 60)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 60)) | (1 << (TransactionManifestParser.PROOF_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.BYTES_TYPE - 60)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 382;
				this.value();
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 383;
					this.match(TransactionManifestParser.COMMA);
					this.state = 384;
					this.value();
					}
					}
					this.state = 389;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 392;
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
		this.enterRule(_localctx, 80, TransactionManifestParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(TransactionManifestParser.LIST_TYPE);
			this.state = 395;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 396;
			this.type();
			this.state = 397;
			this.match(TransactionManifestParser.GREATER_THAN);
			this.state = 398;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.SAFE_I8_LITERAL) | (1 << TransactionManifestParser.SAFE_I16_LITERAL) | (1 << TransactionManifestParser.SAFE_I32_LITERAL) | (1 << TransactionManifestParser.SAFE_I64_LITERAL) | (1 << TransactionManifestParser.SAFE_I128_LITERAL) | (1 << TransactionManifestParser.SAFE_I256_LITERAL) | (1 << TransactionManifestParser.SAFE_I384_LITERAL) | (1 << TransactionManifestParser.SAFE_I512_LITERAL) | (1 << TransactionManifestParser.SAFE_U8_LITERAL) | (1 << TransactionManifestParser.SAFE_U16_LITERAL) | (1 << TransactionManifestParser.SAFE_U32_LITERAL) | (1 << TransactionManifestParser.SAFE_U64_LITERAL) | (1 << TransactionManifestParser.SAFE_U128_LITERAL) | (1 << TransactionManifestParser.SAFE_U384_LITERAL) | (1 << TransactionManifestParser.SAFE_U256_LITERAL) | (1 << TransactionManifestParser.SAFE_U512_LITERAL))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (TransactionManifestParser.STRUCT_TYPE - 60)) | (1 << (TransactionManifestParser.ENUM_TYPE - 60)) | (1 << (TransactionManifestParser.SOME_TYPE - 60)) | (1 << (TransactionManifestParser.NONE_TYPE - 60)) | (1 << (TransactionManifestParser.OK_TYPE - 60)) | (1 << (TransactionManifestParser.ERR_TYPE - 60)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 60)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 60)) | (1 << (TransactionManifestParser.LIST_TYPE - 60)) | (1 << (TransactionManifestParser.SET_TYPE - 60)) | (1 << (TransactionManifestParser.MAP_TYPE - 60)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.HASH_TYPE - 60)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 60)) | (1 << (TransactionManifestParser.PROOF_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.BYTES_TYPE - 60)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 399;
				this.value();
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 400;
					this.match(TransactionManifestParser.COMMA);
					this.state = 401;
					this.value();
					}
					}
					this.state = 406;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 409;
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
		this.enterRule(_localctx, 82, TransactionManifestParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(TransactionManifestParser.SET_TYPE);
			this.state = 412;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 413;
			this.type();
			this.state = 414;
			this.match(TransactionManifestParser.GREATER_THAN);
			this.state = 415;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.SAFE_I8_LITERAL) | (1 << TransactionManifestParser.SAFE_I16_LITERAL) | (1 << TransactionManifestParser.SAFE_I32_LITERAL) | (1 << TransactionManifestParser.SAFE_I64_LITERAL) | (1 << TransactionManifestParser.SAFE_I128_LITERAL) | (1 << TransactionManifestParser.SAFE_I256_LITERAL) | (1 << TransactionManifestParser.SAFE_I384_LITERAL) | (1 << TransactionManifestParser.SAFE_I512_LITERAL) | (1 << TransactionManifestParser.SAFE_U8_LITERAL) | (1 << TransactionManifestParser.SAFE_U16_LITERAL) | (1 << TransactionManifestParser.SAFE_U32_LITERAL) | (1 << TransactionManifestParser.SAFE_U64_LITERAL) | (1 << TransactionManifestParser.SAFE_U128_LITERAL) | (1 << TransactionManifestParser.SAFE_U384_LITERAL) | (1 << TransactionManifestParser.SAFE_U256_LITERAL) | (1 << TransactionManifestParser.SAFE_U512_LITERAL))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (TransactionManifestParser.STRUCT_TYPE - 60)) | (1 << (TransactionManifestParser.ENUM_TYPE - 60)) | (1 << (TransactionManifestParser.SOME_TYPE - 60)) | (1 << (TransactionManifestParser.NONE_TYPE - 60)) | (1 << (TransactionManifestParser.OK_TYPE - 60)) | (1 << (TransactionManifestParser.ERR_TYPE - 60)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 60)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 60)) | (1 << (TransactionManifestParser.LIST_TYPE - 60)) | (1 << (TransactionManifestParser.SET_TYPE - 60)) | (1 << (TransactionManifestParser.MAP_TYPE - 60)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.HASH_TYPE - 60)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 60)) | (1 << (TransactionManifestParser.PROOF_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.BYTES_TYPE - 60)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				this.state = 416;
				this.value();
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TransactionManifestParser.COMMA) {
					{
					{
					this.state = 417;
					this.match(TransactionManifestParser.COMMA);
					this.state = 418;
					this.value();
					}
					}
					this.state = 423;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 426;
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
		this.enterRule(_localctx, 84, TransactionManifestParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(TransactionManifestParser.MAP_TYPE);
			this.state = 429;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 430;
			this.type();
			this.state = 431;
			this.match(TransactionManifestParser.COMMA);
			this.state = 432;
			this.type();
			this.state = 433;
			this.match(TransactionManifestParser.GREATER_THAN);
			this.state = 434;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.SAFE_I8_LITERAL) | (1 << TransactionManifestParser.SAFE_I16_LITERAL) | (1 << TransactionManifestParser.SAFE_I32_LITERAL) | (1 << TransactionManifestParser.SAFE_I64_LITERAL) | (1 << TransactionManifestParser.SAFE_I128_LITERAL) | (1 << TransactionManifestParser.SAFE_I256_LITERAL) | (1 << TransactionManifestParser.SAFE_I384_LITERAL) | (1 << TransactionManifestParser.SAFE_I512_LITERAL) | (1 << TransactionManifestParser.SAFE_U8_LITERAL) | (1 << TransactionManifestParser.SAFE_U16_LITERAL) | (1 << TransactionManifestParser.SAFE_U32_LITERAL) | (1 << TransactionManifestParser.SAFE_U64_LITERAL) | (1 << TransactionManifestParser.SAFE_U128_LITERAL) | (1 << TransactionManifestParser.SAFE_U384_LITERAL) | (1 << TransactionManifestParser.SAFE_U256_LITERAL) | (1 << TransactionManifestParser.SAFE_U512_LITERAL))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (TransactionManifestParser.STRUCT_TYPE - 60)) | (1 << (TransactionManifestParser.ENUM_TYPE - 60)) | (1 << (TransactionManifestParser.SOME_TYPE - 60)) | (1 << (TransactionManifestParser.NONE_TYPE - 60)) | (1 << (TransactionManifestParser.OK_TYPE - 60)) | (1 << (TransactionManifestParser.ERR_TYPE - 60)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 60)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 60)) | (1 << (TransactionManifestParser.LIST_TYPE - 60)) | (1 << (TransactionManifestParser.SET_TYPE - 60)) | (1 << (TransactionManifestParser.MAP_TYPE - 60)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 60)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.HASH_TYPE - 60)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 60)) | (1 << (TransactionManifestParser.PROOF_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 60)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 60)) | (1 << (TransactionManifestParser.BYTES_TYPE - 60)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				{
				this.state = 435;
				this.value();
				this.state = 436;
				this.match(TransactionManifestParser.COMMA);
				this.state = 437;
				this.value();
				}
				}
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 444;
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
		this.enterRule(_localctx, 86, TransactionManifestParser.RULE_decimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(TransactionManifestParser.DECIMAL_TYPE);
			this.state = 447;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 448;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 449;
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
	public precise_decimal(): Precise_decimalContext {
		let _localctx: Precise_decimalContext = new Precise_decimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, TransactionManifestParser.RULE_precise_decimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(TransactionManifestParser.PRECISE_DECIMAL_TYPE);
			this.state = 452;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 453;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 454;
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
	public package_address(): Package_addressContext {
		let _localctx: Package_addressContext = new Package_addressContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, TransactionManifestParser.RULE_package_address);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.match(TransactionManifestParser.PACKAGE_ADDRESS_TYPE);
			this.state = 457;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 458;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 459;
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
	public component_address(): Component_addressContext {
		let _localctx: Component_addressContext = new Component_addressContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, TransactionManifestParser.RULE_component_address);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(TransactionManifestParser.COMPONENT_ADDRESS_TYPE);
			this.state = 462;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 463;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 464;
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
	public resource_address(): Resource_addressContext {
		let _localctx: Resource_addressContext = new Resource_addressContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, TransactionManifestParser.RULE_resource_address);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.match(TransactionManifestParser.RESOURCE_ADDRESS_TYPE);
			this.state = 467;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 468;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 469;
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
		this.enterRule(_localctx, 96, TransactionManifestParser.RULE_hash);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(TransactionManifestParser.HASH_TYPE);
			this.state = 472;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 473;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 474;
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
		this.enterRule(_localctx, 98, TransactionManifestParser.RULE_bucket);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(TransactionManifestParser.BUCKET_TYPE);
			this.state = 477;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 478;
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
			this.state = 479;
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
		this.enterRule(_localctx, 100, TransactionManifestParser.RULE_proof);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(TransactionManifestParser.PROOF_TYPE);
			this.state = 482;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 483;
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
			this.state = 484;
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
	public non_fungible_id(): Non_fungible_idContext {
		let _localctx: Non_fungible_idContext = new Non_fungible_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, TransactionManifestParser.RULE_non_fungible_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE);
			this.state = 487;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 488;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 489;
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
	public non_fungible_address(): Non_fungible_addressContext {
		let _localctx: Non_fungible_addressContext = new Non_fungible_addressContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, TransactionManifestParser.RULE_non_fungible_address);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE);
			this.state = 492;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 493;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 494;
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
		this.enterRule(_localctx, 106, TransactionManifestParser.RULE_bytes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.match(TransactionManifestParser.BYTES_TYPE);
			this.state = 497;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 498;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 499;
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
		this.enterRule(_localctx, 108, TransactionManifestParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (TransactionManifestParser.UNIT_TYPE - 31)) | (1 << (TransactionManifestParser.BOOL_TYPE - 31)) | (1 << (TransactionManifestParser.I8_TYPE - 31)) | (1 << (TransactionManifestParser.I16_TYPE - 31)) | (1 << (TransactionManifestParser.I32_TYPE - 31)) | (1 << (TransactionManifestParser.I64_TYPE - 31)) | (1 << (TransactionManifestParser.I128_TYPE - 31)) | (1 << (TransactionManifestParser.U8_TYPE - 31)) | (1 << (TransactionManifestParser.U16_TYPE - 31)) | (1 << (TransactionManifestParser.U32_TYPE - 31)) | (1 << (TransactionManifestParser.U64_TYPE - 31)) | (1 << (TransactionManifestParser.U128_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_I8_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_I16_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_I32_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_I64_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_I128_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_I256_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_I384_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_I512_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_U8_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_U16_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_U32_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_U64_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_U128_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_U384_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_U256_TYPE - 31)) | (1 << (TransactionManifestParser.SAFE_U512_TYPE - 31)) | (1 << (TransactionManifestParser.STRING_TYPE - 31)) | (1 << (TransactionManifestParser.STRUCT_TYPE - 31)) | (1 << (TransactionManifestParser.ENUM_TYPE - 31)) | (1 << (TransactionManifestParser.OPTION_TYPE - 31)))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (TransactionManifestParser.RESULT_TYPE - 63)) | (1 << (TransactionManifestParser.SOME_TYPE - 63)) | (1 << (TransactionManifestParser.NONE_TYPE - 63)) | (1 << (TransactionManifestParser.OK_TYPE - 63)) | (1 << (TransactionManifestParser.ERR_TYPE - 63)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 63)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 63)) | (1 << (TransactionManifestParser.LIST_TYPE - 63)) | (1 << (TransactionManifestParser.SET_TYPE - 63)) | (1 << (TransactionManifestParser.MAP_TYPE - 63)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 63)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 63)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 63)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 63)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 63)) | (1 << (TransactionManifestParser.HASH_TYPE - 63)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 63)) | (1 << (TransactionManifestParser.PROOF_TYPE - 63)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 63)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 63)) | (1 << (TransactionManifestParser.BYTES_TYPE - 63)))) !== 0))) {
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
		this.enterRule(_localctx, 110, TransactionManifestParser.RULE_value);
		try {
			this.state = 555;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.unit();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 504;
				this.bool();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 505;
				this.i8();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 506;
				this.i16();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 507;
				this.i32();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 508;
				this.i64();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 509;
				this.i128();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 510;
				this.u8();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 511;
				this.u16();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 512;
				this.u32();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 513;
				this.u64();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 514;
				this.u128();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 515;
				this.safe_i8();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 516;
				this.safe_i16();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 517;
				this.safe_i32();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 518;
				this.safe_i64();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 519;
				this.safe_i128();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 520;
				this.safe_i256();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 521;
				this.safe_i384();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 522;
				this.safe_i512();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 523;
				this.safe_u8();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 524;
				this.safe_u16();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 525;
				this.safe_u32();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 526;
				this.safe_u64();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 527;
				this.safe_u128();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 528;
				this.safe_u256();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 529;
				this.safe_u384();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 530;
				this.safe_u512();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 531;
				this.string();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 532;
				this.struct();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 533;
				this.enum_();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 534;
				this.option();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 535;
				this.some();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 536;
				this.none();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 537;
				this.ok();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 538;
				this.err();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 539;
				this.array();
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 540;
				this.tuple();
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 541;
				this.list();
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 542;
				this.set();
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 543;
				this.map();
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 544;
				this.decimal();
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 545;
				this.precise_decimal();
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 546;
				this.package_address();
				}
				break;

			case 45:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 547;
				this.component_address();
				}
				break;

			case 46:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 548;
				this.resource_address();
				}
				break;

			case 47:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 549;
				this.hash();
				}
				break;

			case 48:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 550;
				this.bucket();
				}
				break;

			case 49:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 551;
				this.proof();
				}
				break;

			case 50:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 552;
				this.non_fungible_id();
				}
				break;

			case 51:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 553;
				this.non_fungible_address();
				}
				break;

			case 52:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 554;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03v\u0230\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x03\x02\x07\x02t\n\x02\f\x02" +
		"\x0E\x02w\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03\x80\n\x03\f\x03\x0E\x03\x83\v\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03\x8B\n\x03\f\x03\x0E\x03\x8E\v\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xE9\n" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		" \x03 \x03!\x03!\x03!\x03!\x03!\x07!\u012A\n!\f!\x0E!\u012D\v!\x05!\u012F" +
		"\n!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u013A\n" +
		"\"\f\"\x0E\"\u013D\v\"\x05\"\u013F\n\"\x03\"\x03\"\x03#\x03#\x05#\u0145" +
		"\n#\x03$\x03$\x03$\x03$\x03$\x07$\u014C\n$\f$\x0E$\u014F\v$\x03$\x03$" +
		"\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x07&\u015A\n&\f&\x0E&\u015D\v&\x03" +
		"&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u0166\n\'\f\'\x0E\'\u0169\v" +
		"\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u0175\n(\f" +
		"(\x0E(\u0178\v(\x05(\u017A\n(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)" +
		"\x07)\u0184\n)\f)\x0E)\u0187\v)\x05)\u0189\n)\x03)\x03)\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x07*\u0195\n*\f*\x0E*\u0198\v*\x05*\u019A\n" +
		"*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u01A6\n+\f+\x0E" +
		"+\u01A9\v+\x05+\u01AB\n+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03," +
		"\x03,\x03,\x03,\x03,\x07,\u01BA\n,\f,\x0E,\u01BD\v,\x03,\x03,\x03-\x03" +
		"-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03" +
		"0\x030\x030\x030\x030\x031\x031\x031\x031\x031\x032\x032\x032\x032\x03" +
		"2\x033\x033\x033\x033\x033\x034\x034\x034\x034\x034\x035\x035\x035\x03" +
		"5\x035\x036\x036\x036\x036\x036\x037\x037\x037\x037\x037\x038\x038\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x059\u022E\n9\x039\x02" +
		"\x02\x02:\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02\x02\x04\x04\x02\f\f" +
		"qq\x03\x02!U\x02\u0252\x02u\x03\x02\x02\x02\x04\xE8\x03\x02\x02\x02\x06" +
		"\xEA\x03\x02\x02\x02\b\xEC\x03\x02\x02\x02\n\xEE\x03\x02\x02\x02\f\xF0" +
		"\x03\x02\x02\x02\x0E\xF2\x03\x02\x02\x02\x10\xF4\x03\x02\x02\x02\x12\xF6" +
		"\x03\x02\x02\x02\x14\xF8\x03\x02\x02\x02\x16\xFA\x03\x02\x02\x02\x18\xFC" +
		"\x03\x02\x02\x02\x1A\xFE\x03\x02\x02\x02\x1C\u0100\x03\x02\x02\x02\x1E" +
		"\u0102\x03\x02\x02\x02 \u0104\x03\x02\x02\x02\"\u0106\x03\x02\x02\x02" +
		"$\u0108\x03\x02\x02\x02&\u010A\x03\x02\x02\x02(\u010C\x03\x02\x02\x02" +
		"*\u010E\x03\x02\x02\x02,\u0110\x03\x02\x02\x02.\u0112\x03\x02\x02\x02" +
		"0\u0114\x03\x02\x02\x022\u0116\x03\x02\x02\x024\u0118\x03\x02\x02\x02" +
		"6\u011A\x03\x02\x02\x028\u011C\x03\x02\x02\x02:\u011E\x03\x02\x02\x02" +
		"<\u0120\x03\x02\x02\x02>\u0122\x03\x02\x02\x02@\u0124\x03\x02\x02\x02" +
		"B\u0132\x03\x02\x02\x02D\u0144\x03\x02\x02\x02F\u0146\x03\x02\x02\x02" +
		"H\u0152\x03\x02\x02\x02J\u0154\x03\x02\x02\x02L\u0160\x03\x02\x02\x02" +
		"N\u016C\x03\x02\x02\x02P\u017D\x03\x02\x02\x02R\u018C\x03\x02\x02\x02" +
		"T\u019D\x03\x02\x02\x02V\u01AE\x03\x02\x02\x02X\u01C0\x03\x02\x02\x02" +
		"Z\u01C5\x03\x02\x02\x02\\\u01CA\x03\x02\x02\x02^\u01CF\x03\x02\x02\x02" +
		"`\u01D4\x03\x02\x02\x02b\u01D9\x03\x02\x02\x02d\u01DE\x03\x02\x02\x02" +
		"f\u01E3\x03\x02\x02\x02h\u01E8\x03\x02\x02\x02j\u01ED\x03\x02\x02\x02" +
		"l\u01F2\x03\x02\x02\x02n\u01F7\x03\x02\x02\x02p\u022D\x03\x02\x02\x02" +
		"rt\x05\x04\x03\x02sr\x03\x02\x02\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02" +
		"uv\x03\x02\x02\x02vx\x03\x02\x02\x02wu\x03\x02\x02\x02xy\x07\x02\x02\x03" +
		"y\x03\x03\x02\x02\x02z{\x07m\x02\x02{|\x05\\/\x02|}\x05> \x02}\x81\x05" +
		"> \x02~\x80\x05p9\x02\x7F~\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81" +
		"\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x84\x03\x02\x02\x02\x83" +
		"\x81\x03\x02\x02\x02\x84\x85\x07[\x02\x02\x85\xE9\x03\x02\x02\x02\x86" +
		"\x87\x07n\x02\x02\x87\x88\x05^0\x02\x88\x8C\x05> \x02\x89\x8B\x05p9\x02" +
		"\x8A\x89\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02" +
		"\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02" +
		"\x8F\x90\x07[\x02\x02\x90\xE9\x03\x02\x02\x02\x91\x92\x07o\x02\x02\x92" +
		"\x93\x05^0\x02\x93\x94\x05> \x02\x94\x95\x07[\x02\x02\x95\xE9\x03\x02" +
		"\x02\x02\x96\x97\x07\\\x02\x02\x97\x98\x05`1\x02\x98\x99\x05d3\x02\x99" +
		"\x9A\x07[\x02\x02\x9A\xE9\x03\x02\x02\x02\x9B\x9C\x07]\x02\x02\x9C\x9D" +
		"\x05X-\x02\x9D\x9E\x05`1\x02\x9E\x9F\x05d3\x02\x9F\xA0\x07[\x02\x02\xA0" +
		"\xE9\x03\x02\x02\x02\xA1\xA2\x07^\x02\x02\xA2\xA3\x05T+\x02\xA3\xA4\x05" +
		"`1\x02\xA4\xA5\x05d3\x02\xA5\xA6\x07[\x02\x02\xA6\xE9\x03\x02\x02\x02" +
		"\xA7\xA8\x07b\x02\x02\xA8\xA9\x05d3\x02\xA9\xAA\x07[\x02\x02\xAA\xE9\x03" +
		"\x02\x02\x02\xAB\xAC\x07_\x02\x02\xAC\xAD\x05`1\x02\xAD\xAE\x07[\x02\x02" +
		"\xAE\xE9\x03\x02\x02\x02\xAF\xB0\x07`\x02\x02\xB0\xB1\x05X-\x02\xB1\xB2" +
		"\x05`1\x02\xB2\xB3\x07[\x02\x02\xB3\xE9\x03\x02\x02\x02\xB4\xB5\x07a\x02" +
		"\x02\xB5\xB6\x05T+\x02\xB6\xB7\x05`1\x02\xB7\xB8\x07[\x02\x02\xB8\xE9" +
		"\x03\x02\x02\x02\xB9\xBA\x07c\x02\x02\xBA\xBB\x05f4\x02\xBB\xBC\x07[\x02" +
		"\x02\xBC\xE9\x03\x02\x02\x02\xBD\xBE\x07d\x02\x02\xBE\xBF\x05f4\x02\xBF" +
		"\xC0\x07[\x02\x02\xC0\xE9\x03\x02\x02\x02\xC1\xC2\x07f\x02\x02\xC2\xC3" +
		"\x05`1\x02\xC3\xC4\x05f4\x02\xC4\xC5\x07[\x02\x02\xC5\xE9\x03\x02\x02" +
		"\x02\xC6\xC7\x07g\x02\x02\xC7\xC8\x05X-\x02\xC8\xC9\x05`1\x02\xC9\xCA" +
		"\x05f4\x02\xCA\xCB\x07[\x02\x02\xCB\xE9\x03\x02\x02\x02\xCC\xCD\x07h\x02" +
		"\x02\xCD\xCE\x05T+\x02\xCE\xCF\x05`1\x02\xCF\xD0\x05f4\x02\xD0\xD1\x07" +
		"[\x02\x02\xD1\xE9\x03\x02\x02\x02\xD2\xD3\x07i\x02\x02\xD3\xD4\x05d3\x02" +
		"\xD4\xD5\x05f4\x02\xD5\xD6\x07[\x02\x02\xD6\xE9\x03\x02\x02\x02\xD7\xD8" +
		"\x07j\x02\x02\xD8\xD9\x05f4\x02\xD9\xDA\x05f4\x02\xDA\xDB\x07[\x02\x02" +
		"\xDB\xE9\x03\x02\x02\x02\xDC\xDD\x07k\x02\x02\xDD\xDE\x05f4\x02\xDE\xDF" +
		"\x07[\x02\x02\xDF\xE9\x03\x02\x02\x02\xE0\xE1\x07l\x02\x02\xE1\xE9\x07" +
		"[\x02\x02\xE2\xE3\x07e\x02\x02\xE3\xE9\x07[\x02\x02\xE4\xE5\x07p\x02\x02" +
		"\xE5\xE6\x05l7\x02\xE6\xE7\x07[\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8z\x03" +
		"\x02\x02\x02\xE8\x86\x03\x02\x02\x02\xE8\x91\x03\x02\x02\x02\xE8\x96\x03" +
		"\x02\x02\x02\xE8\x9B\x03\x02\x02\x02\xE8\xA1\x03\x02\x02\x02\xE8\xA7\x03" +
		"\x02\x02\x02\xE8\xAB\x03\x02\x02\x02\xE8\xAF\x03\x02\x02\x02\xE8\xB4\x03" +
		"\x02\x02\x02\xE8\xB9\x03\x02\x02\x02\xE8\xBD\x03\x02\x02\x02\xE8\xC1\x03" +
		"\x02\x02\x02\xE8\xC6\x03\x02\x02\x02\xE8\xCC\x03\x02\x02\x02\xE8\xD2\x03" +
		"\x02\x02\x02\xE8\xD7\x03\x02\x02\x02\xE8\xDC\x03\x02\x02\x02\xE8\xE0\x03" +
		"\x02\x02\x02\xE8\xE2\x03\x02\x02\x02\xE8\xE4\x03\x02\x02\x02\xE9\x05\x03" +
		"\x02\x02\x02\xEA\xEB\x07\x03\x02\x02\xEB\x07\x03\x02\x02\x02\xEC\xED\x07" +
		"\x04\x02\x02\xED\t\x03\x02\x02\x02\xEE\xEF\x07\x05\x02\x02\xEF\v\x03\x02" +
		"\x02\x02\xF0\xF1\x07\x06\x02\x02\xF1\r\x03\x02\x02\x02\xF2\xF3\x07\x07" +
		"\x02\x02\xF3\x0F\x03\x02\x02\x02\xF4\xF5\x07\b\x02\x02\xF5\x11\x03\x02" +
		"\x02\x02\xF6\xF7\x07\t\x02\x02\xF7\x13\x03\x02\x02\x02\xF8\xF9\x07\n\x02" +
		"\x02\xF9\x15\x03\x02\x02\x02\xFA\xFB\x07\v\x02\x02\xFB\x17\x03\x02\x02" +
		"\x02\xFC\xFD\x07\f\x02\x02\xFD\x19\x03\x02\x02\x02\xFE\xFF\x07\r\x02\x02" +
		"\xFF\x1B\x03\x02\x02\x02\u0100\u0101\x07\x0E\x02\x02\u0101\x1D\x03\x02" +
		"\x02\x02\u0102\u0103\x07\x0F\x02\x02\u0103\x1F\x03\x02\x02\x02\u0104\u0105" +
		"\x07\x10\x02\x02\u0105!\x03\x02\x02\x02\u0106\u0107\x07\x11\x02\x02\u0107" +
		"#\x03\x02\x02\x02\u0108\u0109\x07\x12\x02\x02\u0109%\x03\x02\x02\x02\u010A" +
		"\u010B\x07\x13\x02\x02\u010B\'\x03\x02\x02\x02\u010C\u010D\x07\x14\x02" +
		"\x02\u010D)\x03\x02\x02\x02\u010E\u010F\x07\x15\x02\x02\u010F+\x03\x02" +
		"\x02\x02\u0110\u0111\x07\x16\x02\x02\u0111-\x03\x02\x02\x02\u0112\u0113" +
		"\x07\x17\x02\x02\u0113/\x03\x02\x02\x02\u0114\u0115\x07\x18\x02\x02\u0115" +
		"1\x03\x02\x02\x02\u0116\u0117\x07\x19\x02\x02\u01173\x03\x02\x02\x02\u0118" +
		"\u0119\x07\x1A\x02\x02\u01195\x03\x02\x02\x02\u011A\u011B\x07\x1B\x02" +
		"\x02\u011B7\x03\x02\x02\x02\u011C\u011D\x07\x1D\x02\x02\u011D9\x03\x02" +
		"\x02\x02\u011E\u011F\x07\x1C\x02\x02\u011F;\x03\x02\x02\x02\u0120\u0121" +
		"\x07\x1E\x02\x02\u0121=\x03\x02\x02\x02\u0122\u0123\x07q\x02\x02\u0123" +
		"?\x03\x02\x02\x02\u0124\u0125\x07>\x02\x02\u0125\u012E\x07V\x02\x02\u0126" +
		"\u012B\x05p9\x02\u0127\u0128\x07Z\x02\x02\u0128\u012A\x05p9\x02\u0129" +
		"\u0127\x03\x02\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B\u0129\x03\x02" +
		"\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012F\x03\x02\x02\x02\u012D" +
		"\u012B\x03\x02\x02\x02\u012E\u0126\x03\x02\x02\x02\u012E\u012F\x03\x02" +
		"\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0131\x07W\x02\x02\u0131A\x03" +
		"\x02\x02\x02\u0132\u0133\x07?\x02\x02\u0133\u0134\x07V\x02\x02\u0134\u0135" +
		"\x05> \x02\u0135\u013E\x07Z\x02\x02\u0136\u013B\x05p9\x02\u0137\u0138" +
		"\x07Z\x02\x02\u0138\u013A\x05p9\x02\u0139\u0137\x03\x02\x02\x02\u013A" +
		"\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02" +
		"\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E" +
		"\u0136\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0140\x03\x02" +
		"\x02\x02\u0140\u0141\x07W\x02\x02\u0141C\x03\x02\x02\x02\u0142\u0145\x05" +
		"F$\x02\u0143\u0145\x05H%\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0143\x03" +
		"\x02\x02\x02\u0145E\x03\x02\x02\x02\u0146\u0147\x07B\x02\x02\u0147\u0148" +
		"\x07V\x02\x02\u0148\u014D\x05p9\x02\u0149\u014A\x07Z\x02\x02\u014A\u014C" +
		"\x05p9\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D" +
		"\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0150\x03\x02" +
		"\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0151\x07W\x02\x02\u0151G\x03" +
		"\x02\x02\x02\u0152\u0153\x07C\x02\x02\u0153I\x03\x02\x02\x02\u0154\u0155" +
		"\x07D\x02\x02\u0155\u0156\x07V\x02\x02\u0156\u015B\x05p9\x02\u0157\u0158" +
		"\x07Z\x02\x02\u0158\u015A\x05p9\x02\u0159\u0157\x03\x02\x02\x02\u015A" +
		"\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C\u015E\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E" +
		"\u015F\x07W\x02\x02\u015FK\x03\x02\x02\x02\u0160\u0161\x07E\x02\x02\u0161" +
		"\u0162\x07V\x02\x02\u0162\u0167\x05p9\x02\u0163\u0164\x07Z\x02\x02\u0164" +
		"\u0166\x05p9\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02" +
		"\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016A\x03" +
		"\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016B\x07W\x02\x02\u016B" +
		"M\x03\x02\x02\x02\u016C\u016D\x07F\x02\x02\u016D\u016E\x07X\x02\x02\u016E" +
		"\u016F\x05n8\x02\u016F\u0170\x07Y\x02\x02\u0170\u0179\x07V\x02\x02\u0171" +
		"\u0176\x05p9\x02\u0172\u0173\x07Z\x02\x02\u0173\u0175\x05p9\x02\u0174" +
		"\u0172\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0179\u0171\x03\x02\x02\x02\u0179\u017A\x03\x02" +
		"\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x07W\x02\x02\u017CO\x03" +
		"\x02\x02\x02\u017D\u017E\x07G\x02\x02\u017E\u017F\x07X\x02\x02\u017F\u0188" +
		"\x07V\x02\x02\u0180\u0185\x05p9\x02\u0181\u0182\x07Z\x02\x02\u0182\u0184" +
		"\x05p9\x02\u0183\u0181\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185" +
		"\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0189\x03\x02" +
		"\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0180\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x07W\x02" +
		"\x02\u018BQ\x03\x02\x02\x02\u018C\u018D\x07H\x02\x02\u018D\u018E\x07X" +
		"\x02\x02\u018E\u018F\x05n8\x02\u018F\u0190\x07Y\x02\x02\u0190\u0199\x07" +
		"V\x02\x02\u0191\u0196\x05p9\x02\u0192\u0193\x07Z\x02\x02\u0193\u0195\x05" +
		"p9\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194" +
		"\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02" +
		"\u0198\u0196\x03\x02\x02\x02\u0199\u0191\x03\x02\x02\x02\u0199\u019A\x03" +
		"\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x07W\x02\x02\u019C" +
		"S\x03\x02\x02\x02\u019D\u019E\x07I\x02\x02\u019E\u019F\x07X\x02\x02\u019F" +
		"\u01A0\x05n8\x02\u01A0\u01A1\x07Y\x02\x02\u01A1\u01AA\x07V\x02\x02\u01A2" +
		"\u01A7\x05p9\x02\u01A3\u01A4\x07Z\x02\x02\u01A4\u01A6\x05p9\x02\u01A5" +
		"\u01A3\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7\u01A5\x03\x02" +
		"\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9" +
		"\u01A7\x03\x02\x02\x02\u01AA\u01A2\x03\x02\x02\x02\u01AA\u01AB\x03\x02" +
		"\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD\x07W\x02\x02\u01ADU\x03" +
		"\x02\x02\x02\u01AE\u01AF\x07J\x02\x02\u01AF\u01B0\x07X\x02\x02\u01B0\u01B1" +
		"\x05n8\x02\u01B1\u01B2\x07Z\x02\x02\u01B2\u01B3\x05n8\x02\u01B3\u01B4" +
		"\x07Y\x02\x02\u01B4\u01BB\x07V\x02\x02\u01B5\u01B6\x05p9\x02\u01B6\u01B7" +
		"\x07Z\x02\x02\u01B7\u01B8\x05p9\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9" +
		"\u01B5\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02" +
		"\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BE\x03\x02\x02\x02\u01BD" +
		"\u01BB\x03\x02\x02\x02\u01BE\u01BF\x07W\x02\x02\u01BFW\x03\x02\x02\x02" +
		"\u01C0\u01C1\x07K\x02\x02\u01C1\u01C2\x07V\x02\x02\u01C2\u01C3\x07q\x02" +
		"\x02\u01C3\u01C4\x07W\x02\x02\u01C4Y\x03\x02\x02\x02\u01C5\u01C6\x07L" +
		"\x02\x02\u01C6\u01C7\x07V\x02\x02\u01C7\u01C8\x07q\x02\x02\u01C8\u01C9" +
		"\x07W\x02\x02\u01C9[\x03\x02\x02\x02\u01CA\u01CB\x07M\x02\x02\u01CB\u01CC" +
		"\x07V\x02\x02\u01CC\u01CD\x07q\x02\x02\u01CD\u01CE\x07W\x02\x02\u01CE" +
		"]\x03\x02\x02\x02\u01CF\u01D0\x07N\x02\x02\u01D0\u01D1\x07V\x02\x02\u01D1" +
		"\u01D2\x07q\x02\x02\u01D2\u01D3\x07W\x02\x02\u01D3_\x03\x02\x02\x02\u01D4" +
		"\u01D5\x07O\x02\x02\u01D5\u01D6\x07V\x02\x02\u01D6\u01D7\x07q\x02\x02" +
		"\u01D7\u01D8\x07W\x02\x02\u01D8a\x03\x02\x02\x02\u01D9\u01DA\x07P\x02" +
		"\x02\u01DA\u01DB\x07V\x02\x02\u01DB\u01DC\x07q\x02\x02\u01DC\u01DD\x07" +
		"W\x02\x02\u01DDc\x03\x02\x02\x02\u01DE\u01DF\x07Q\x02\x02\u01DF\u01E0" +
		"\x07V\x02\x02\u01E0\u01E1\t\x02\x02\x02\u01E1\u01E2\x07W\x02\x02\u01E2" +
		"e\x03\x02\x02\x02\u01E3\u01E4\x07R\x02\x02\u01E4\u01E5\x07V\x02\x02\u01E5" +
		"\u01E6\t\x02\x02\x02\u01E6\u01E7\x07W\x02\x02\u01E7g\x03\x02\x02\x02\u01E8" +
		"\u01E9\x07S\x02\x02\u01E9\u01EA\x07V\x02\x02\u01EA\u01EB\x07q\x02\x02" +
		"\u01EB\u01EC\x07W\x02\x02\u01ECi\x03\x02\x02\x02\u01ED\u01EE\x07T\x02" +
		"\x02\u01EE\u01EF\x07V\x02\x02\u01EF\u01F0\x07q\x02\x02\u01F0\u01F1\x07" +
		"W\x02\x02\u01F1k\x03\x02\x02\x02\u01F2\u01F3\x07U\x02\x02\u01F3\u01F4" +
		"\x07V\x02\x02\u01F4\u01F5\x07q\x02\x02\u01F5\u01F6\x07W\x02\x02\u01F6" +
		"m\x03\x02\x02\x02\u01F7\u01F8\t\x03\x02\x02\u01F8o\x03\x02\x02\x02\u01F9" +
		"\u022E\x05\x06\x04\x02\u01FA\u022E\x05\b\x05\x02\u01FB\u022E\x05\n\x06" +
		"\x02\u01FC\u022E\x05\f\x07\x02\u01FD\u022E\x05\x0E\b\x02\u01FE\u022E\x05" +
		"\x10\t\x02\u01FF\u022E\x05\x12\n\x02\u0200\u022E\x05\x14\v\x02\u0201\u022E" +
		"\x05\x16\f\x02\u0202\u022E\x05\x18\r\x02\u0203\u022E\x05\x1A\x0E\x02\u0204" +
		"\u022E\x05\x1C\x0F\x02\u0205\u022E\x05\x1E\x10\x02\u0206\u022E\x05 \x11" +
		"\x02\u0207\u022E\x05\"\x12\x02\u0208\u022E\x05$\x13\x02\u0209\u022E\x05" +
		"&\x14\x02\u020A\u022E\x05(\x15\x02\u020B\u022E\x05*\x16\x02\u020C\u022E" +
		"\x05,\x17\x02\u020D\u022E\x05.\x18\x02\u020E\u022E\x050\x19\x02\u020F" +
		"\u022E\x052\x1A\x02\u0210\u022E\x054\x1B\x02\u0211\u022E\x056\x1C\x02" +
		"\u0212\u022E\x058\x1D\x02\u0213\u022E\x05:\x1E\x02\u0214\u022E\x05<\x1F" +
		"\x02\u0215\u022E\x05> \x02\u0216\u022E\x05@!\x02\u0217\u022E\x05B\"\x02" +
		"\u0218\u022E\x05D#\x02\u0219\u022E\x05F$\x02\u021A\u022E\x05H%\x02\u021B" +
		"\u022E\x05J&\x02\u021C\u022E\x05L\'\x02\u021D\u022E\x05N(\x02\u021E\u022E" +
		"\x05P)\x02\u021F\u022E\x05R*\x02\u0220\u022E\x05T+\x02\u0221\u022E\x05" +
		"V,\x02\u0222\u022E\x05X-\x02\u0223\u022E\x05Z.\x02\u0224\u022E\x05\\/" +
		"\x02\u0225\u022E\x05^0\x02\u0226\u022E\x05`1\x02\u0227\u022E\x05b2\x02" +
		"\u0228\u022E\x05d3\x02\u0229\u022E\x05f4\x02\u022A\u022E\x05h5\x02\u022B" +
		"\u022E\x05j6\x02\u022C\u022E\x05l7\x02\u022D\u01F9\x03\x02\x02\x02\u022D" +
		"\u01FA\x03\x02\x02\x02\u022D\u01FB\x03\x02\x02\x02\u022D\u01FC\x03\x02" +
		"\x02\x02\u022D\u01FD\x03\x02\x02\x02\u022D\u01FE\x03\x02\x02\x02\u022D" +
		"\u01FF\x03\x02\x02\x02\u022D\u0200\x03\x02\x02\x02\u022D\u0201\x03\x02" +
		"\x02\x02\u022D\u0202\x03\x02\x02\x02\u022D\u0203\x03\x02\x02\x02\u022D" +
		"\u0204\x03\x02\x02\x02\u022D\u0205\x03\x02\x02\x02\u022D\u0206\x03\x02" +
		"\x02\x02\u022D\u0207\x03\x02\x02\x02\u022D\u0208\x03\x02\x02\x02\u022D" +
		"\u0209\x03\x02\x02\x02\u022D\u020A\x03\x02\x02\x02\u022D\u020B\x03\x02" +
		"\x02\x02\u022D\u020C\x03\x02\x02\x02\u022D\u020D\x03\x02\x02\x02\u022D" +
		"\u020E\x03\x02\x02\x02\u022D\u020F\x03\x02\x02\x02\u022D\u0210\x03\x02" +
		"\x02\x02\u022D\u0211\x03\x02\x02\x02\u022D\u0212\x03\x02\x02\x02\u022D" +
		"\u0213\x03\x02\x02\x02\u022D\u0214\x03\x02\x02\x02\u022D\u0215\x03\x02" +
		"\x02\x02\u022D\u0216\x03\x02\x02\x02\u022D\u0217\x03\x02\x02\x02\u022D" +
		"\u0218\x03\x02\x02\x02\u022D\u0219\x03\x02\x02\x02\u022D\u021A\x03\x02" +
		"\x02\x02\u022D\u021B\x03\x02\x02\x02\u022D\u021C\x03\x02\x02\x02\u022D" +
		"\u021D\x03\x02\x02\x02\u022D\u021E\x03\x02\x02\x02\u022D\u021F\x03\x02" +
		"\x02\x02\u022D\u0220\x03\x02\x02\x02\u022D\u0221\x03\x02\x02\x02\u022D" +
		"\u0222\x03\x02\x02\x02\u022D\u0223\x03\x02\x02\x02\u022D\u0224\x03\x02" +
		"\x02\x02\u022D\u0225\x03\x02\x02\x02\u022D\u0226\x03\x02\x02\x02\u022D" +
		"\u0227\x03\x02\x02\x02\u022D\u0228\x03\x02\x02\x02\u022D\u0229\x03\x02" +
		"\x02\x02\u022D\u022A\x03\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D" +
		"\u022C\x03\x02\x02\x02\u022Eq\x03\x02\x02\x02\x18u\x81\x8C\xE8\u012B\u012E" +
		"\u013B\u013E\u0144\u014D\u015B\u0167\u0176\u0179\u0185\u0188\u0196\u0199" +
		"\u01A7\u01AA\u01BB\u022D";
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
	public package_address(): Package_addressContext | undefined {
		return this.tryGetRuleContext(0, Package_addressContext);
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
	public component_address(): Component_addressContext | undefined {
		return this.tryGetRuleContext(0, Component_addressContext);
	}
	public CALL_METHOD_WITH_ALL_RESOURCES(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES, 0); }
	public TAKE_FROM_WORKTOP(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0); }
	public resource_address(): Resource_addressContext | undefined {
		return this.tryGetRuleContext(0, Resource_addressContext);
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


export class Safe_i8Context extends ParserRuleContext {
	public SAFE_I8_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_I8_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_i8; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_i8) {
			listener.enterSafe_i8(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_i8) {
			listener.exitSafe_i8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_i8) {
			return visitor.visitSafe_i8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_i16Context extends ParserRuleContext {
	public SAFE_I16_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_I16_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_i16; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_i16) {
			listener.enterSafe_i16(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_i16) {
			listener.exitSafe_i16(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_i16) {
			return visitor.visitSafe_i16(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_i32Context extends ParserRuleContext {
	public SAFE_I32_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_I32_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_i32; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_i32) {
			listener.enterSafe_i32(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_i32) {
			listener.exitSafe_i32(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_i32) {
			return visitor.visitSafe_i32(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_i64Context extends ParserRuleContext {
	public SAFE_I64_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_I64_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_i64; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_i64) {
			listener.enterSafe_i64(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_i64) {
			listener.exitSafe_i64(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_i64) {
			return visitor.visitSafe_i64(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_i128Context extends ParserRuleContext {
	public SAFE_I128_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_I128_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_i128; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_i128) {
			listener.enterSafe_i128(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_i128) {
			listener.exitSafe_i128(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_i128) {
			return visitor.visitSafe_i128(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_i256Context extends ParserRuleContext {
	public SAFE_I256_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_I256_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_i256; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_i256) {
			listener.enterSafe_i256(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_i256) {
			listener.exitSafe_i256(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_i256) {
			return visitor.visitSafe_i256(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_i384Context extends ParserRuleContext {
	public SAFE_I384_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_I384_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_i384; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_i384) {
			listener.enterSafe_i384(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_i384) {
			listener.exitSafe_i384(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_i384) {
			return visitor.visitSafe_i384(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_i512Context extends ParserRuleContext {
	public SAFE_I512_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_I512_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_i512; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_i512) {
			listener.enterSafe_i512(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_i512) {
			listener.exitSafe_i512(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_i512) {
			return visitor.visitSafe_i512(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_u8Context extends ParserRuleContext {
	public SAFE_U8_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_U8_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_u8; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_u8) {
			listener.enterSafe_u8(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_u8) {
			listener.exitSafe_u8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_u8) {
			return visitor.visitSafe_u8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_u16Context extends ParserRuleContext {
	public SAFE_U16_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_U16_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_u16; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_u16) {
			listener.enterSafe_u16(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_u16) {
			listener.exitSafe_u16(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_u16) {
			return visitor.visitSafe_u16(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_u32Context extends ParserRuleContext {
	public SAFE_U32_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_U32_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_u32; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_u32) {
			listener.enterSafe_u32(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_u32) {
			listener.exitSafe_u32(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_u32) {
			return visitor.visitSafe_u32(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_u64Context extends ParserRuleContext {
	public SAFE_U64_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_U64_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_u64; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_u64) {
			listener.enterSafe_u64(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_u64) {
			listener.exitSafe_u64(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_u64) {
			return visitor.visitSafe_u64(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_u128Context extends ParserRuleContext {
	public SAFE_U128_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_U128_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_u128; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_u128) {
			listener.enterSafe_u128(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_u128) {
			listener.exitSafe_u128(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_u128) {
			return visitor.visitSafe_u128(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_u256Context extends ParserRuleContext {
	public SAFE_U256_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_U256_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_u256; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_u256) {
			listener.enterSafe_u256(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_u256) {
			listener.exitSafe_u256(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_u256) {
			return visitor.visitSafe_u256(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_u384Context extends ParserRuleContext {
	public SAFE_U384_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_U384_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_u384; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_u384) {
			listener.enterSafe_u384(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_u384) {
			listener.exitSafe_u384(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_u384) {
			return visitor.visitSafe_u384(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Safe_u512Context extends ParserRuleContext {
	public SAFE_U512_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.SAFE_U512_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_safe_u512; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSafe_u512) {
			listener.enterSafe_u512(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSafe_u512) {
			listener.exitSafe_u512(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSafe_u512) {
			return visitor.visitSafe_u512(this);
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


export class Precise_decimalContext extends ParserRuleContext {
	public PRECISE_DECIMAL_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_precise_decimal; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterPrecise_decimal) {
			listener.enterPrecise_decimal(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitPrecise_decimal) {
			listener.exitPrecise_decimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitPrecise_decimal) {
			return visitor.visitPrecise_decimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Package_addressContext extends ParserRuleContext {
	public PACKAGE_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_package_address; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterPackage_address) {
			listener.enterPackage_address(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitPackage_address) {
			listener.exitPackage_address(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitPackage_address) {
			return visitor.visitPackage_address(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Component_addressContext extends ParserRuleContext {
	public COMPONENT_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_component_address; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterComponent_address) {
			listener.enterComponent_address(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitComponent_address) {
			listener.exitComponent_address(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitComponent_address) {
			return visitor.visitComponent_address(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Resource_addressContext extends ParserRuleContext {
	public RESOURCE_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_resource_address; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterResource_address) {
			listener.enterResource_address(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitResource_address) {
			listener.exitResource_address(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitResource_address) {
			return visitor.visitResource_address(this);
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


export class Non_fungible_idContext extends ParserRuleContext {
	public NON_FUNGIBLE_ID_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_non_fungible_id; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterNon_fungible_id) {
			listener.enterNon_fungible_id(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitNon_fungible_id) {
			listener.exitNon_fungible_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitNon_fungible_id) {
			return visitor.visitNon_fungible_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_fungible_addressContext extends ParserRuleContext {
	public NON_FUNGIBLE_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_non_fungible_address; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterNon_fungible_address) {
			listener.enterNon_fungible_address(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitNon_fungible_address) {
			listener.exitNon_fungible_address(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitNon_fungible_address) {
			return visitor.visitNon_fungible_address(this);
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
	public SAFE_I8_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_I8_TYPE, 0); }
	public SAFE_I16_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_I16_TYPE, 0); }
	public SAFE_I32_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_I32_TYPE, 0); }
	public SAFE_I64_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_I64_TYPE, 0); }
	public SAFE_I128_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_I128_TYPE, 0); }
	public SAFE_I256_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_I256_TYPE, 0); }
	public SAFE_I384_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_I384_TYPE, 0); }
	public SAFE_I512_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_I512_TYPE, 0); }
	public SAFE_U8_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_U8_TYPE, 0); }
	public SAFE_U16_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_U16_TYPE, 0); }
	public SAFE_U32_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_U32_TYPE, 0); }
	public SAFE_U64_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_U64_TYPE, 0); }
	public SAFE_U128_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_U128_TYPE, 0); }
	public SAFE_U384_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_U384_TYPE, 0); }
	public SAFE_U256_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_U256_TYPE, 0); }
	public SAFE_U512_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SAFE_U512_TYPE, 0); }
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
	public safe_i8(): Safe_i8Context | undefined {
		return this.tryGetRuleContext(0, Safe_i8Context);
	}
	public safe_i16(): Safe_i16Context | undefined {
		return this.tryGetRuleContext(0, Safe_i16Context);
	}
	public safe_i32(): Safe_i32Context | undefined {
		return this.tryGetRuleContext(0, Safe_i32Context);
	}
	public safe_i64(): Safe_i64Context | undefined {
		return this.tryGetRuleContext(0, Safe_i64Context);
	}
	public safe_i128(): Safe_i128Context | undefined {
		return this.tryGetRuleContext(0, Safe_i128Context);
	}
	public safe_i256(): Safe_i256Context | undefined {
		return this.tryGetRuleContext(0, Safe_i256Context);
	}
	public safe_i384(): Safe_i384Context | undefined {
		return this.tryGetRuleContext(0, Safe_i384Context);
	}
	public safe_i512(): Safe_i512Context | undefined {
		return this.tryGetRuleContext(0, Safe_i512Context);
	}
	public safe_u8(): Safe_u8Context | undefined {
		return this.tryGetRuleContext(0, Safe_u8Context);
	}
	public safe_u16(): Safe_u16Context | undefined {
		return this.tryGetRuleContext(0, Safe_u16Context);
	}
	public safe_u32(): Safe_u32Context | undefined {
		return this.tryGetRuleContext(0, Safe_u32Context);
	}
	public safe_u64(): Safe_u64Context | undefined {
		return this.tryGetRuleContext(0, Safe_u64Context);
	}
	public safe_u128(): Safe_u128Context | undefined {
		return this.tryGetRuleContext(0, Safe_u128Context);
	}
	public safe_u256(): Safe_u256Context | undefined {
		return this.tryGetRuleContext(0, Safe_u256Context);
	}
	public safe_u384(): Safe_u384Context | undefined {
		return this.tryGetRuleContext(0, Safe_u384Context);
	}
	public safe_u512(): Safe_u512Context | undefined {
		return this.tryGetRuleContext(0, Safe_u512Context);
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
	public precise_decimal(): Precise_decimalContext | undefined {
		return this.tryGetRuleContext(0, Precise_decimalContext);
	}
	public package_address(): Package_addressContext | undefined {
		return this.tryGetRuleContext(0, Package_addressContext);
	}
	public component_address(): Component_addressContext | undefined {
		return this.tryGetRuleContext(0, Component_addressContext);
	}
	public resource_address(): Resource_addressContext | undefined {
		return this.tryGetRuleContext(0, Resource_addressContext);
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
	public non_fungible_id(): Non_fungible_idContext | undefined {
		return this.tryGetRuleContext(0, Non_fungible_idContext);
	}
	public non_fungible_address(): Non_fungible_addressContext | undefined {
		return this.tryGetRuleContext(0, Non_fungible_addressContext);
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


