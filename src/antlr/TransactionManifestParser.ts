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
	public static readonly BOOL_LITERAL = 1;
	public static readonly I8_LITERAL = 2;
	public static readonly I16_LITERAL = 3;
	public static readonly I32_LITERAL = 4;
	public static readonly I64_LITERAL = 5;
	public static readonly I128_LITERAL = 6;
	public static readonly U8_LITERAL = 7;
	public static readonly U16_LITERAL = 8;
	public static readonly U32_LITERAL = 9;
	public static readonly U64_LITERAL = 10;
	public static readonly U128_LITERAL = 11;
	public static readonly TRUE = 12;
	public static readonly FALSE = 13;
	public static readonly UNIT_TYPE = 14;
	public static readonly BOOL_TYPE = 15;
	public static readonly I8_TYPE = 16;
	public static readonly I16_TYPE = 17;
	public static readonly I32_TYPE = 18;
	public static readonly I64_TYPE = 19;
	public static readonly I128_TYPE = 20;
	public static readonly U8_TYPE = 21;
	public static readonly U16_TYPE = 22;
	public static readonly U32_TYPE = 23;
	public static readonly U64_TYPE = 24;
	public static readonly U128_TYPE = 25;
	public static readonly STRING_TYPE = 26;
	public static readonly STRUCT_TYPE = 27;
	public static readonly ENUM_TYPE = 28;
	public static readonly OPTION_TYPE = 29;
	public static readonly RESULT_TYPE = 30;
	public static readonly SOME_TYPE = 31;
	public static readonly NONE_TYPE = 32;
	public static readonly OK_TYPE = 33;
	public static readonly ERR_TYPE = 34;
	public static readonly ARRAY_TYPE = 35;
	public static readonly TUPLE_TYPE = 36;
	public static readonly LIST_TYPE = 37;
	public static readonly SET_TYPE = 38;
	public static readonly MAP_TYPE = 39;
	public static readonly DECIMAL_TYPE = 40;
	public static readonly PRECISE_DECIMAL_TYPE = 41;
	public static readonly PACKAGE_ADDRESS_TYPE = 42;
	public static readonly COMPONENT_ADDRESS_TYPE = 43;
	public static readonly RESOURCE_ADDRESS_TYPE = 44;
	public static readonly HASH_TYPE = 45;
	public static readonly BUCKET_TYPE = 46;
	public static readonly PROOF_TYPE = 47;
	public static readonly NON_FUNGIBLE_ID_TYPE = 48;
	public static readonly NON_FUNGIBLE_ADDRESS_TYPE = 49;
	public static readonly BLOB_TYPE = 50;
	public static readonly EXPRESSION_TYPE = 51;
	public static readonly OPEN_PARENTHESIS = 52;
	public static readonly CLOED_PARENTHESIS = 53;
	public static readonly EMPTY_PARENTHESIS = 54;
	public static readonly LESS_THAN = 55;
	public static readonly GREATER_THAN = 56;
	public static readonly COMMA = 57;
	public static readonly SEMICOLON = 58;
	public static readonly TAKE_FROM_WORKTOP = 59;
	public static readonly TAKE_FROM_WORKTOP_BY_AMOUNT = 60;
	public static readonly TAKE_FROM_WORKTOP_BY_IDS = 61;
	public static readonly ASSERT_WORKTOP_CONTAINS = 62;
	public static readonly ASSERT_WORKTOP_CONTAINS_BY_AMOUNT = 63;
	public static readonly ASSERT_WORKTOP_CONTAINS_BY_IDS = 64;
	public static readonly RETURN_TO_WORKTOP = 65;
	public static readonly POP_FROM_AUTH_ZONE = 66;
	public static readonly PUSH_TO_AUTH_ZONE = 67;
	public static readonly CLEAR_AUTHZONE = 68;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE = 69;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT = 70;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS = 71;
	public static readonly CREATE_PROOF_FROM_BUCKET = 72;
	public static readonly CLONE_PROOF = 73;
	public static readonly DROP_PROOF = 74;
	public static readonly DROP_ALL_PROOFS = 75;
	public static readonly CALL_FUNCTION = 76;
	public static readonly CALL_METHOD = 77;
	public static readonly PUBLISH_PACKAGE = 78;
	public static readonly BURN_BUCKET = 79;
	public static readonly MINT_FUNGIBLE = 80;
	public static readonly CREATE_RESOURCE = 81;
	public static readonly STRING_LITERAL = 82;
	public static readonly DIGIT = 83;
	public static readonly LETTER = 84;
	public static readonly NUMBER = 85;
	public static readonly WS = 86;
	public static readonly COMMENT = 87;
	public static readonly RULE_manifest = 0;
	public static readonly RULE_manifestInstruction = 1;
	public static readonly RULE_callFunction = 2;
	public static readonly RULE_callMethod = 3;
	public static readonly RULE_takeFromWorktop = 4;
	public static readonly RULE_takeFromWorktopByAmount = 5;
	public static readonly RULE_takeFromWorktopByIds = 6;
	public static readonly RULE_returnToWorktop = 7;
	public static readonly RULE_assertWorktopContains = 8;
	public static readonly RULE_assertWorktopContainsByAmount = 9;
	public static readonly RULE_assertWorktopContainsByIds = 10;
	public static readonly RULE_popFromAuthZone = 11;
	public static readonly RULE_pushToAuthZone = 12;
	public static readonly RULE_createProofFromAuthZone = 13;
	public static readonly RULE_createProofFromAuthZoneByAmount = 14;
	public static readonly RULE_createProofFromAuthZoneByIds = 15;
	public static readonly RULE_createProofFromBucket = 16;
	public static readonly RULE_cloneProof = 17;
	public static readonly RULE_dropProof = 18;
	public static readonly RULE_dropAllProofs = 19;
	public static readonly RULE_clearAuthZone = 20;
	public static readonly RULE_publishPackage = 21;
	public static readonly RULE_burnBucket = 22;
	public static readonly RULE_mintFungible = 23;
	public static readonly RULE_createResource = 24;
	public static readonly RULE_unit = 25;
	public static readonly RULE_bool = 26;
	public static readonly RULE_i8 = 27;
	public static readonly RULE_i16 = 28;
	public static readonly RULE_i32 = 29;
	public static readonly RULE_i64 = 30;
	public static readonly RULE_i128 = 31;
	public static readonly RULE_u8 = 32;
	public static readonly RULE_u16 = 33;
	public static readonly RULE_u32 = 34;
	public static readonly RULE_u64 = 35;
	public static readonly RULE_u128 = 36;
	public static readonly RULE_string = 37;
	public static readonly RULE_struct = 38;
	public static readonly RULE_enum_ = 39;
	public static readonly RULE_option = 40;
	public static readonly RULE_some = 41;
	public static readonly RULE_none = 42;
	public static readonly RULE_ok = 43;
	public static readonly RULE_err = 44;
	public static readonly RULE_array = 45;
	public static readonly RULE_tuple = 46;
	public static readonly RULE_list = 47;
	public static readonly RULE_set = 48;
	public static readonly RULE_map = 49;
	public static readonly RULE_decimal = 50;
	public static readonly RULE_preciseDecimal = 51;
	public static readonly RULE_packageAddress = 52;
	public static readonly RULE_componentAddress = 53;
	public static readonly RULE_resourceAddress = 54;
	public static readonly RULE_hash = 55;
	public static readonly RULE_bucket = 56;
	public static readonly RULE_proof = 57;
	public static readonly RULE_nonFungibleId = 58;
	public static readonly RULE_nonFungibleAddress = 59;
	public static readonly RULE_blob = 60;
	public static readonly RULE_expression = 61;
	public static readonly RULE_type = 62;
	public static readonly RULE_value = 63;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"manifest",
		"manifestInstruction",
		"callFunction",
		"callMethod",
		"takeFromWorktop",
		"takeFromWorktopByAmount",
		"takeFromWorktopByIds",
		"returnToWorktop",
		"assertWorktopContains",
		"assertWorktopContainsByAmount",
		"assertWorktopContainsByIds",
		"popFromAuthZone",
		"pushToAuthZone",
		"createProofFromAuthZone",
		"createProofFromAuthZoneByAmount",
		"createProofFromAuthZoneByIds",
		"createProofFromBucket",
		"cloneProof",
		"dropProof",
		"dropAllProofs",
		"clearAuthZone",
		"publishPackage",
		"burnBucket",
		"mintFungible",
		"createResource",
		"unit",
		"bool",
		"i8",
		"i16",
		"i32",
		"i64",
		"i128",
		"u8",
		"u16",
		"u32",
		"u64",
		"u128",
		"string",
		"struct",
		"enum_",
		"option",
		"some",
		"none",
		"ok",
		"err",
		"array",
		"tuple",
		"list",
		"set",
		"map",
		"decimal",
		"preciseDecimal",
		"packageAddress",
		"componentAddress",
		"resourceAddress",
		"hash",
		"bucket",
		"proof",
		"nonFungibleId",
		"nonFungibleAddress",
		"blob",
		"expression",
		"type",
		"value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		"'true'",
		"'false'",
		"'Unit'",
		"'Bool'",
		"'I8'",
		"'I16'",
		"'I32'",
		"'I64'",
		"'I128'",
		"'U8'",
		"'U16'",
		"'U32'",
		"'U64'",
		"'U128'",
		"'String'",
		"'Struct'",
		"'Enum'",
		"'Option'",
		"'Result'",
		"'Some'",
		"'None'",
		"'Ok'",
		"'Err'",
		"'Array'",
		"'Tuple'",
		"'List'",
		"'Set'",
		"'Map'",
		"'Decimal'",
		"'PreciseDecimal'",
		"'PackageAddress'",
		"'ComponentAddress'",
		"'ResourceAddress'",
		"'Hash'",
		"'Bucket'",
		"'Proof'",
		"'NonFungibleId'",
		"'NonFungibleAddress'",
		"'Blob'",
		"'Expression'",
		"'('",
		"')'",
		"'()'",
		"'<'",
		"'>'",
		"','",
		"';'",
		"'TAKE_FROM_WORKTOP'",
		"'TAKE_FROM_WORKTOP_BY_AMOUNT'",
		"'TAKE_FROM_WORKTOP_BY_IDS'",
		"'ASSERT_WORKTOP_CONTAINS'",
		"'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT'",
		"'ASSERT_WORKTOP_CONTAINS_BY_IDS'",
		"'RETURN_TO_WORKTOP'",
		"'POP_FROM_AUTH_ZONE'",
		"'PUSH_TO_AUTH_ZONE'",
		"'CLEAR_AUTHZONE'",
		"'CREATE_PROOF_FROM_AUTH_ZONE'",
		"'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT'",
		"'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS'",
		"'CREATE_PROOF_FROM_BUCKET'",
		"'CLONE_PROOF'",
		"'DROP_PROOF'",
		"'DROP_ALL_PROOFS'",
		"'CALL_FUNCTION'",
		"'CALL_METHOD'",
		"'PUBLISH_PACKAGE'",
		"'BURN_BUCKET'",
		"'MINT_FUNGIBLE'",
		"'CREATE_RESOURCE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		"BOOL_LITERAL",
		"I8_LITERAL",
		"I16_LITERAL",
		"I32_LITERAL",
		"I64_LITERAL",
		"I128_LITERAL",
		"U8_LITERAL",
		"U16_LITERAL",
		"U32_LITERAL",
		"U64_LITERAL",
		"U128_LITERAL",
		"TRUE",
		"FALSE",
		"UNIT_TYPE",
		"BOOL_TYPE",
		"I8_TYPE",
		"I16_TYPE",
		"I32_TYPE",
		"I64_TYPE",
		"I128_TYPE",
		"U8_TYPE",
		"U16_TYPE",
		"U32_TYPE",
		"U64_TYPE",
		"U128_TYPE",
		"STRING_TYPE",
		"STRUCT_TYPE",
		"ENUM_TYPE",
		"OPTION_TYPE",
		"RESULT_TYPE",
		"SOME_TYPE",
		"NONE_TYPE",
		"OK_TYPE",
		"ERR_TYPE",
		"ARRAY_TYPE",
		"TUPLE_TYPE",
		"LIST_TYPE",
		"SET_TYPE",
		"MAP_TYPE",
		"DECIMAL_TYPE",
		"PRECISE_DECIMAL_TYPE",
		"PACKAGE_ADDRESS_TYPE",
		"COMPONENT_ADDRESS_TYPE",
		"RESOURCE_ADDRESS_TYPE",
		"HASH_TYPE",
		"BUCKET_TYPE",
		"PROOF_TYPE",
		"NON_FUNGIBLE_ID_TYPE",
		"NON_FUNGIBLE_ADDRESS_TYPE",
		"BLOB_TYPE",
		"EXPRESSION_TYPE",
		"OPEN_PARENTHESIS",
		"CLOED_PARENTHESIS",
		"EMPTY_PARENTHESIS",
		"LESS_THAN",
		"GREATER_THAN",
		"COMMA",
		"SEMICOLON",
		"TAKE_FROM_WORKTOP",
		"TAKE_FROM_WORKTOP_BY_AMOUNT",
		"TAKE_FROM_WORKTOP_BY_IDS",
		"ASSERT_WORKTOP_CONTAINS",
		"ASSERT_WORKTOP_CONTAINS_BY_AMOUNT",
		"ASSERT_WORKTOP_CONTAINS_BY_IDS",
		"RETURN_TO_WORKTOP",
		"POP_FROM_AUTH_ZONE",
		"PUSH_TO_AUTH_ZONE",
		"CLEAR_AUTHZONE",
		"CREATE_PROOF_FROM_AUTH_ZONE",
		"CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT",
		"CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS",
		"CREATE_PROOF_FROM_BUCKET",
		"CLONE_PROOF",
		"DROP_PROOF",
		"DROP_ALL_PROOFS",
		"CALL_FUNCTION",
		"CALL_METHOD",
		"PUBLISH_PACKAGE",
		"BURN_BUCKET",
		"MINT_FUNGIBLE",
		"CREATE_RESOURCE",
		"STRING_LITERAL",
		"DIGIT",
		"LETTER",
		"NUMBER",
		"WS",
		"COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
		TransactionManifestParser._LITERAL_NAMES,
		TransactionManifestParser._SYMBOLIC_NAMES,
		[]
	);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TransactionManifestParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string {
		return "TransactionManifest.g4";
	}

	// @Override
	public get ruleNames(): string[] {
		return TransactionManifestParser.ruleNames;
	}

	// @Override
	public get serializedATN(): string {
		return TransactionManifestParser._serializedATN;
	}

	protected createFailedPredicateException(
		predicate?: string,
		message?: string
	): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(
			TransactionManifestParser._ATN,
			this
		);
	}
	// @RuleVersion(0)
	public manifest(): ManifestContext {
		let _localctx: ManifestContext = new ManifestContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 0, TransactionManifestParser.RULE_manifest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (
					((_la - 59) & ~0x1f) === 0 &&
					((1 << (_la - 59)) &
						((1 <<
							(TransactionManifestParser.TAKE_FROM_WORKTOP -
								59)) |
							(1 <<
								(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT -
									59)) |
							(1 <<
								(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS -
									59)) |
							(1 <<
								(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS -
									59)) |
							(1 <<
								(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT -
									59)) |
							(1 <<
								(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS -
									59)) |
							(1 <<
								(TransactionManifestParser.RETURN_TO_WORKTOP -
									59)) |
							(1 <<
								(TransactionManifestParser.POP_FROM_AUTH_ZONE -
									59)) |
							(1 <<
								(TransactionManifestParser.PUSH_TO_AUTH_ZONE -
									59)) |
							(1 <<
								(TransactionManifestParser.CLEAR_AUTHZONE -
									59)) |
							(1 <<
								(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE -
									59)) |
							(1 <<
								(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT -
									59)) |
							(1 <<
								(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS -
									59)) |
							(1 <<
								(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET -
									59)) |
							(1 <<
								(TransactionManifestParser.CLONE_PROOF - 59)) |
							(1 << (TransactionManifestParser.DROP_PROOF - 59)) |
							(1 <<
								(TransactionManifestParser.DROP_ALL_PROOFS -
									59)) |
							(1 <<
								(TransactionManifestParser.CALL_FUNCTION -
									59)) |
							(1 <<
								(TransactionManifestParser.CALL_METHOD - 59)) |
							(1 <<
								(TransactionManifestParser.PUBLISH_PACKAGE -
									59)) |
							(1 <<
								(TransactionManifestParser.BURN_BUCKET - 59)) |
							(1 <<
								(TransactionManifestParser.MINT_FUNGIBLE -
									59)) |
							(1 <<
								(TransactionManifestParser.CREATE_RESOURCE -
									59)))) !==
						0
				) {
					{
						{
							this.state = 128;
							this.manifestInstruction();
						}
					}
					this.state = 133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 134;
				this.match(TransactionManifestParser.EOF);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public manifestInstruction(): ManifestInstructionContext {
		let _localctx: ManifestInstructionContext =
			new ManifestInstructionContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			2,
			TransactionManifestParser.RULE_manifestInstruction
		);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case TransactionManifestParser.CALL_FUNCTION:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 136;
						this.callFunction();
					}
					break;
				case TransactionManifestParser.CALL_METHOD:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 137;
						this.callMethod();
					}
					break;
				case TransactionManifestParser.RETURN_TO_WORKTOP:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 138;
						this.returnToWorktop();
					}
					break;
				case TransactionManifestParser.TAKE_FROM_WORKTOP:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 139;
						this.takeFromWorktop();
					}
					break;
				case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 140;
						this.takeFromWorktopByAmount();
					}
					break;
				case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 141;
						this.takeFromWorktopByIds();
					}
					break;
				case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS:
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 142;
						this.assertWorktopContains();
					}
					break;
				case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 143;
						this.assertWorktopContainsByAmount();
					}
					break;
				case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS:
					this.enterOuterAlt(_localctx, 9);
					{
						this.state = 144;
						this.assertWorktopContainsByIds();
					}
					break;
				case TransactionManifestParser.POP_FROM_AUTH_ZONE:
					this.enterOuterAlt(_localctx, 10);
					{
						this.state = 145;
						this.popFromAuthZone();
					}
					break;
				case TransactionManifestParser.PUSH_TO_AUTH_ZONE:
					this.enterOuterAlt(_localctx, 11);
					{
						this.state = 146;
						this.pushToAuthZone();
					}
					break;
				case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE:
					this.enterOuterAlt(_localctx, 12);
					{
						this.state = 147;
						this.createProofFromAuthZone();
					}
					break;
				case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
					this.enterOuterAlt(_localctx, 13);
					{
						this.state = 148;
						this.createProofFromAuthZoneByAmount();
					}
					break;
				case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
					this.enterOuterAlt(_localctx, 14);
					{
						this.state = 149;
						this.createProofFromAuthZoneByIds();
					}
					break;
				case TransactionManifestParser.CREATE_PROOF_FROM_BUCKET:
					this.enterOuterAlt(_localctx, 15);
					{
						this.state = 150;
						this.createProofFromBucket();
					}
					break;
				case TransactionManifestParser.CLONE_PROOF:
					this.enterOuterAlt(_localctx, 16);
					{
						this.state = 151;
						this.cloneProof();
					}
					break;
				case TransactionManifestParser.DROP_PROOF:
					this.enterOuterAlt(_localctx, 17);
					{
						this.state = 152;
						this.dropProof();
					}
					break;
				case TransactionManifestParser.DROP_ALL_PROOFS:
					this.enterOuterAlt(_localctx, 18);
					{
						this.state = 153;
						this.dropAllProofs();
					}
					break;
				case TransactionManifestParser.CLEAR_AUTHZONE:
					this.enterOuterAlt(_localctx, 19);
					{
						this.state = 154;
						this.clearAuthZone();
					}
					break;
				case TransactionManifestParser.PUBLISH_PACKAGE:
					this.enterOuterAlt(_localctx, 20);
					{
						this.state = 155;
						this.publishPackage();
					}
					break;
				case TransactionManifestParser.CREATE_RESOURCE:
					this.enterOuterAlt(_localctx, 21);
					{
						this.state = 156;
						this.createResource();
					}
					break;
				case TransactionManifestParser.BURN_BUCKET:
					this.enterOuterAlt(_localctx, 22);
					{
						this.state = 157;
						this.burnBucket();
					}
					break;
				case TransactionManifestParser.MINT_FUNGIBLE:
					this.enterOuterAlt(_localctx, 23);
					{
						this.state = 158;
						this.mintFungible();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callFunction(): CallFunctionContext {
		let _localctx: CallFunctionContext = new CallFunctionContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			4,
			TransactionManifestParser.RULE_callFunction
		);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 161;
				this.match(TransactionManifestParser.CALL_FUNCTION);
				this.state = 162;
				this.packageAddress();
				this.state = 163;
				this.string();
				this.state = 164;
				this.string();
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << TransactionManifestParser.BOOL_LITERAL) |
								(1 << TransactionManifestParser.I8_LITERAL) |
								(1 << TransactionManifestParser.I16_LITERAL) |
								(1 << TransactionManifestParser.I32_LITERAL) |
								(1 << TransactionManifestParser.I64_LITERAL) |
								(1 << TransactionManifestParser.I128_LITERAL) |
								(1 << TransactionManifestParser.U8_LITERAL) |
								(1 << TransactionManifestParser.U16_LITERAL) |
								(1 << TransactionManifestParser.U32_LITERAL) |
								(1 << TransactionManifestParser.U64_LITERAL) |
								(1 << TransactionManifestParser.U128_LITERAL) |
								(1 << TransactionManifestParser.STRUCT_TYPE) |
								(1 << TransactionManifestParser.ENUM_TYPE) |
								(1 << TransactionManifestParser.SOME_TYPE))) !==
							0) ||
					(((_la - 32) & ~0x1f) === 0 &&
						((1 << (_la - 32)) &
							((1 << (TransactionManifestParser.NONE_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.OK_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.ERR_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.ARRAY_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.TUPLE_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.LIST_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.SET_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.MAP_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.DECIMAL_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.PRECISE_DECIMAL_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.HASH_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.BUCKET_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.PROOF_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.BLOB_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.EXPRESSION_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.EMPTY_PARENTHESIS -
										32)))) !==
							0) ||
					_la === TransactionManifestParser.STRING_LITERAL
				) {
					{
						{
							this.state = 165;
							this.value();
						}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 171;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callMethod(): CallMethodContext {
		let _localctx: CallMethodContext = new CallMethodContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 6, TransactionManifestParser.RULE_callMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 173;
				this.match(TransactionManifestParser.CALL_METHOD);
				this.state = 174;
				this.componentAddress();
				this.state = 175;
				this.string();
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << TransactionManifestParser.BOOL_LITERAL) |
								(1 << TransactionManifestParser.I8_LITERAL) |
								(1 << TransactionManifestParser.I16_LITERAL) |
								(1 << TransactionManifestParser.I32_LITERAL) |
								(1 << TransactionManifestParser.I64_LITERAL) |
								(1 << TransactionManifestParser.I128_LITERAL) |
								(1 << TransactionManifestParser.U8_LITERAL) |
								(1 << TransactionManifestParser.U16_LITERAL) |
								(1 << TransactionManifestParser.U32_LITERAL) |
								(1 << TransactionManifestParser.U64_LITERAL) |
								(1 << TransactionManifestParser.U128_LITERAL) |
								(1 << TransactionManifestParser.STRUCT_TYPE) |
								(1 << TransactionManifestParser.ENUM_TYPE) |
								(1 << TransactionManifestParser.SOME_TYPE))) !==
							0) ||
					(((_la - 32) & ~0x1f) === 0 &&
						((1 << (_la - 32)) &
							((1 << (TransactionManifestParser.NONE_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.OK_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.ERR_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.ARRAY_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.TUPLE_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.LIST_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.SET_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.MAP_TYPE - 32)) |
								(1 <<
									(TransactionManifestParser.DECIMAL_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.PRECISE_DECIMAL_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.HASH_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.BUCKET_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.PROOF_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.BLOB_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.EXPRESSION_TYPE -
										32)) |
								(1 <<
									(TransactionManifestParser.EMPTY_PARENTHESIS -
										32)))) !==
							0) ||
					_la === TransactionManifestParser.STRING_LITERAL
				) {
					{
						{
							this.state = 176;
							this.value();
						}
					}
					this.state = 181;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 182;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public takeFromWorktop(): TakeFromWorktopContext {
		let _localctx: TakeFromWorktopContext = new TakeFromWorktopContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			8,
			TransactionManifestParser.RULE_takeFromWorktop
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 184;
				this.match(TransactionManifestParser.TAKE_FROM_WORKTOP);
				this.state = 185;
				this.resourceAddress();
				this.state = 186;
				this.bucket();
				this.state = 187;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public takeFromWorktopByAmount(): TakeFromWorktopByAmountContext {
		let _localctx: TakeFromWorktopByAmountContext =
			new TakeFromWorktopByAmountContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			10,
			TransactionManifestParser.RULE_takeFromWorktopByAmount
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 189;
				this.match(
					TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT
				);
				this.state = 190;
				this.decimal();
				this.state = 191;
				this.resourceAddress();
				this.state = 192;
				this.bucket();
				this.state = 193;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public takeFromWorktopByIds(): TakeFromWorktopByIdsContext {
		let _localctx: TakeFromWorktopByIdsContext =
			new TakeFromWorktopByIdsContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			12,
			TransactionManifestParser.RULE_takeFromWorktopByIds
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 195;
				this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS);
				this.state = 196;
				this.set();
				this.state = 197;
				this.resourceAddress();
				this.state = 198;
				this.bucket();
				this.state = 199;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnToWorktop(): ReturnToWorktopContext {
		let _localctx: ReturnToWorktopContext = new ReturnToWorktopContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			14,
			TransactionManifestParser.RULE_returnToWorktop
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 201;
				this.match(TransactionManifestParser.RETURN_TO_WORKTOP);
				this.state = 202;
				this.bucket();
				this.state = 203;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertWorktopContains(): AssertWorktopContainsContext {
		let _localctx: AssertWorktopContainsContext =
			new AssertWorktopContainsContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			16,
			TransactionManifestParser.RULE_assertWorktopContains
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 205;
				this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS);
				this.state = 206;
				this.resourceAddress();
				this.state = 207;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertWorktopContainsByAmount(): AssertWorktopContainsByAmountContext {
		let _localctx: AssertWorktopContainsByAmountContext =
			new AssertWorktopContainsByAmountContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			18,
			TransactionManifestParser.RULE_assertWorktopContainsByAmount
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 209;
				this.match(
					TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT
				);
				this.state = 210;
				this.decimal();
				this.state = 211;
				this.resourceAddress();
				this.state = 212;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assertWorktopContainsByIds(): AssertWorktopContainsByIdsContext {
		let _localctx: AssertWorktopContainsByIdsContext =
			new AssertWorktopContainsByIdsContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			20,
			TransactionManifestParser.RULE_assertWorktopContainsByIds
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 214;
				this.match(
					TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS
				);
				this.state = 215;
				this.set();
				this.state = 216;
				this.resourceAddress();
				this.state = 217;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public popFromAuthZone(): PopFromAuthZoneContext {
		let _localctx: PopFromAuthZoneContext = new PopFromAuthZoneContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			22,
			TransactionManifestParser.RULE_popFromAuthZone
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 219;
				this.match(TransactionManifestParser.POP_FROM_AUTH_ZONE);
				this.state = 220;
				this.proof();
				this.state = 221;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pushToAuthZone(): PushToAuthZoneContext {
		let _localctx: PushToAuthZoneContext = new PushToAuthZoneContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			24,
			TransactionManifestParser.RULE_pushToAuthZone
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 223;
				this.match(TransactionManifestParser.PUSH_TO_AUTH_ZONE);
				this.state = 224;
				this.proof();
				this.state = 225;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createProofFromAuthZone(): CreateProofFromAuthZoneContext {
		let _localctx: CreateProofFromAuthZoneContext =
			new CreateProofFromAuthZoneContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			26,
			TransactionManifestParser.RULE_createProofFromAuthZone
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 227;
				this.match(
					TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE
				);
				this.state = 228;
				this.resourceAddress();
				this.state = 229;
				this.proof();
				this.state = 230;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createProofFromAuthZoneByAmount(): CreateProofFromAuthZoneByAmountContext {
		let _localctx: CreateProofFromAuthZoneByAmountContext =
			new CreateProofFromAuthZoneByAmountContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			28,
			TransactionManifestParser.RULE_createProofFromAuthZoneByAmount
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 232;
				this.match(
					TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT
				);
				this.state = 233;
				this.decimal();
				this.state = 234;
				this.resourceAddress();
				this.state = 235;
				this.proof();
				this.state = 236;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createProofFromAuthZoneByIds(): CreateProofFromAuthZoneByIdsContext {
		let _localctx: CreateProofFromAuthZoneByIdsContext =
			new CreateProofFromAuthZoneByIdsContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			30,
			TransactionManifestParser.RULE_createProofFromAuthZoneByIds
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 238;
				this.match(
					TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS
				);
				this.state = 239;
				this.set();
				this.state = 240;
				this.resourceAddress();
				this.state = 241;
				this.proof();
				this.state = 242;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createProofFromBucket(): CreateProofFromBucketContext {
		let _localctx: CreateProofFromBucketContext =
			new CreateProofFromBucketContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			32,
			TransactionManifestParser.RULE_createProofFromBucket
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 244;
				this.match(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET);
				this.state = 245;
				this.bucket();
				this.state = 246;
				this.proof();
				this.state = 247;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cloneProof(): CloneProofContext {
		let _localctx: CloneProofContext = new CloneProofContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			34,
			TransactionManifestParser.RULE_cloneProof
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 249;
				this.match(TransactionManifestParser.CLONE_PROOF);
				this.state = 250;
				this.proof();
				this.state = 251;
				this.proof();
				this.state = 252;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropProof(): DropProofContext {
		let _localctx: DropProofContext = new DropProofContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 36, TransactionManifestParser.RULE_dropProof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 254;
				this.match(TransactionManifestParser.DROP_PROOF);
				this.state = 255;
				this.proof();
				this.state = 256;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropAllProofs(): DropAllProofsContext {
		let _localctx: DropAllProofsContext = new DropAllProofsContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			38,
			TransactionManifestParser.RULE_dropAllProofs
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 258;
				this.match(TransactionManifestParser.DROP_ALL_PROOFS);
				this.state = 259;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clearAuthZone(): ClearAuthZoneContext {
		let _localctx: ClearAuthZoneContext = new ClearAuthZoneContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			40,
			TransactionManifestParser.RULE_clearAuthZone
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 261;
				this.match(TransactionManifestParser.CLEAR_AUTHZONE);
				this.state = 262;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public publishPackage(): PublishPackageContext {
		let _localctx: PublishPackageContext = new PublishPackageContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			42,
			TransactionManifestParser.RULE_publishPackage
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 264;
				this.match(TransactionManifestParser.PUBLISH_PACKAGE);
				this.state = 265;
				this.blob();
				this.state = 266;
				this.blob();
				this.state = 267;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public burnBucket(): BurnBucketContext {
		let _localctx: BurnBucketContext = new BurnBucketContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			44,
			TransactionManifestParser.RULE_burnBucket
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 269;
				this.match(TransactionManifestParser.BURN_BUCKET);
				this.state = 270;
				this.bucket();
				this.state = 271;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mintFungible(): MintFungibleContext {
		let _localctx: MintFungibleContext = new MintFungibleContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			46,
			TransactionManifestParser.RULE_mintFungible
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 273;
				this.match(TransactionManifestParser.MINT_FUNGIBLE);
				this.state = 274;
				this.resourceAddress();
				this.state = 275;
				this.decimal();
				this.state = 276;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createResource(): CreateResourceContext {
		let _localctx: CreateResourceContext = new CreateResourceContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			48,
			TransactionManifestParser.RULE_createResource
		);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 278;
				this.match(TransactionManifestParser.CREATE_RESOURCE);
				this.state = 279;
				this.enum_();
				this.state = 280;
				this.map();
				this.state = 281;
				this.map();
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					_la === TransactionManifestParser.SOME_TYPE ||
					_la === TransactionManifestParser.NONE_TYPE
				) {
					{
						this.state = 282;
						this.option();
					}
				}

				this.state = 285;
				this.match(TransactionManifestParser.SEMICOLON);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TransactionManifestParser.RULE_unit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 287;
				this.match(TransactionManifestParser.EMPTY_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TransactionManifestParser.RULE_bool);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 289;
				this.match(TransactionManifestParser.BOOL_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i8(): I8Context {
		let _localctx: I8Context = new I8Context(this._ctx, this.state);
		this.enterRule(_localctx, 54, TransactionManifestParser.RULE_i8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 291;
				this.match(TransactionManifestParser.I8_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i16(): I16Context {
		let _localctx: I16Context = new I16Context(this._ctx, this.state);
		this.enterRule(_localctx, 56, TransactionManifestParser.RULE_i16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 293;
				this.match(TransactionManifestParser.I16_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i32(): I32Context {
		let _localctx: I32Context = new I32Context(this._ctx, this.state);
		this.enterRule(_localctx, 58, TransactionManifestParser.RULE_i32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 295;
				this.match(TransactionManifestParser.I32_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i64(): I64Context {
		let _localctx: I64Context = new I64Context(this._ctx, this.state);
		this.enterRule(_localctx, 60, TransactionManifestParser.RULE_i64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 297;
				this.match(TransactionManifestParser.I64_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i128(): I128Context {
		let _localctx: I128Context = new I128Context(this._ctx, this.state);
		this.enterRule(_localctx, 62, TransactionManifestParser.RULE_i128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 299;
				this.match(TransactionManifestParser.I128_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u8(): U8Context {
		let _localctx: U8Context = new U8Context(this._ctx, this.state);
		this.enterRule(_localctx, 64, TransactionManifestParser.RULE_u8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 301;
				this.match(TransactionManifestParser.U8_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u16(): U16Context {
		let _localctx: U16Context = new U16Context(this._ctx, this.state);
		this.enterRule(_localctx, 66, TransactionManifestParser.RULE_u16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 303;
				this.match(TransactionManifestParser.U16_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u32(): U32Context {
		let _localctx: U32Context = new U32Context(this._ctx, this.state);
		this.enterRule(_localctx, 68, TransactionManifestParser.RULE_u32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 305;
				this.match(TransactionManifestParser.U32_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u64(): U64Context {
		let _localctx: U64Context = new U64Context(this._ctx, this.state);
		this.enterRule(_localctx, 70, TransactionManifestParser.RULE_u64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 307;
				this.match(TransactionManifestParser.U64_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u128(): U128Context {
		let _localctx: U128Context = new U128Context(this._ctx, this.state);
		this.enterRule(_localctx, 72, TransactionManifestParser.RULE_u128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 309;
				this.match(TransactionManifestParser.U128_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, TransactionManifestParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 311;
				this.match(TransactionManifestParser.STRING_LITERAL);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct(): StructContext {
		let _localctx: StructContext = new StructContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, TransactionManifestParser.RULE_struct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 313;
				this.match(TransactionManifestParser.STRUCT_TYPE);
				this.state = 327;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case TransactionManifestParser.EMPTY_PARENTHESIS:
						{
							this.state = 314;
							this.match(
								TransactionManifestParser.EMPTY_PARENTHESIS
							);
						}
						break;
					case TransactionManifestParser.OPEN_PARENTHESIS:
						{
							this.state = 315;
							this.match(
								TransactionManifestParser.OPEN_PARENTHESIS
							);
							this.state = 324;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								((_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 <<
											TransactionManifestParser.BOOL_LITERAL) |
											(1 <<
												TransactionManifestParser.I8_LITERAL) |
											(1 <<
												TransactionManifestParser.I16_LITERAL) |
											(1 <<
												TransactionManifestParser.I32_LITERAL) |
											(1 <<
												TransactionManifestParser.I64_LITERAL) |
											(1 <<
												TransactionManifestParser.I128_LITERAL) |
											(1 <<
												TransactionManifestParser.U8_LITERAL) |
											(1 <<
												TransactionManifestParser.U16_LITERAL) |
											(1 <<
												TransactionManifestParser.U32_LITERAL) |
											(1 <<
												TransactionManifestParser.U64_LITERAL) |
											(1 <<
												TransactionManifestParser.U128_LITERAL) |
											(1 <<
												TransactionManifestParser.STRUCT_TYPE) |
											(1 <<
												TransactionManifestParser.ENUM_TYPE) |
											(1 <<
												TransactionManifestParser.SOME_TYPE))) !==
										0) ||
								(((_la - 32) & ~0x1f) === 0 &&
									((1 << (_la - 32)) &
										((1 <<
											(TransactionManifestParser.NONE_TYPE -
												32)) |
											(1 <<
												(TransactionManifestParser.OK_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ERR_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ARRAY_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.TUPLE_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.LIST_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.SET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.MAP_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PRECISE_DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.HASH_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BUCKET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PROOF_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BLOB_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EXPRESSION_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EMPTY_PARENTHESIS -
													32)))) !==
										0) ||
								_la === TransactionManifestParser.STRING_LITERAL
							) {
								{
									this.state = 316;
									this.value();
									this.state = 321;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									while (
										_la === TransactionManifestParser.COMMA
									) {
										{
											{
												this.state = 317;
												this.match(
													TransactionManifestParser.COMMA
												);
												this.state = 318;
												this.value();
											}
										}
										this.state = 323;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
									}
								}
							}

							this.state = 326;
							this.match(
								TransactionManifestParser.CLOED_PARENTHESIS
							);
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enum_(): Enum_Context {
		let _localctx: Enum_Context = new Enum_Context(this._ctx, this.state);
		this.enterRule(_localctx, 78, TransactionManifestParser.RULE_enum_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 329;
				this.match(TransactionManifestParser.ENUM_TYPE);
				this.state = 330;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				{
					this.state = 331;
					this.string();
					this.state = 332;
					this.match(TransactionManifestParser.COMMA);
					this.state = 341;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (
						((_la & ~0x1f) === 0 &&
							((1 << _la) &
								((1 << TransactionManifestParser.BOOL_LITERAL) |
									(1 <<
										TransactionManifestParser.I8_LITERAL) |
									(1 <<
										TransactionManifestParser.I16_LITERAL) |
									(1 <<
										TransactionManifestParser.I32_LITERAL) |
									(1 <<
										TransactionManifestParser.I64_LITERAL) |
									(1 <<
										TransactionManifestParser.I128_LITERAL) |
									(1 <<
										TransactionManifestParser.U8_LITERAL) |
									(1 <<
										TransactionManifestParser.U16_LITERAL) |
									(1 <<
										TransactionManifestParser.U32_LITERAL) |
									(1 <<
										TransactionManifestParser.U64_LITERAL) |
									(1 <<
										TransactionManifestParser.U128_LITERAL) |
									(1 <<
										TransactionManifestParser.STRUCT_TYPE) |
									(1 << TransactionManifestParser.ENUM_TYPE) |
									(1 <<
										TransactionManifestParser.SOME_TYPE))) !==
								0) ||
						(((_la - 32) & ~0x1f) === 0 &&
							((1 << (_la - 32)) &
								((1 <<
									(TransactionManifestParser.NONE_TYPE -
										32)) |
									(1 <<
										(TransactionManifestParser.OK_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.ERR_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.ARRAY_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.TUPLE_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.LIST_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.SET_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.MAP_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.DECIMAL_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.PRECISE_DECIMAL_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.HASH_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.BUCKET_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.PROOF_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.BLOB_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.EXPRESSION_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.EMPTY_PARENTHESIS -
											32)))) !==
								0) ||
						_la === TransactionManifestParser.STRING_LITERAL
					) {
						{
							this.state = 333;
							this.value();
							this.state = 338;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === TransactionManifestParser.COMMA) {
								{
									{
										this.state = 334;
										this.match(
											TransactionManifestParser.COMMA
										);
										this.state = 335;
										this.value();
									}
								}
								this.state = 340;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
						}
					}
				}
				this.state = 343;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, TransactionManifestParser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 347;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case TransactionManifestParser.SOME_TYPE:
						{
							this.state = 345;
							this.some();
						}
						break;
					case TransactionManifestParser.NONE_TYPE:
						{
							this.state = 346;
							this.none();
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public some(): SomeContext {
		let _localctx: SomeContext = new SomeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, TransactionManifestParser.RULE_some);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 349;
				this.match(TransactionManifestParser.SOME_TYPE);
				this.state = 350;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 351;
				this.value();
				this.state = 352;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public none(): NoneContext {
		let _localctx: NoneContext = new NoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, TransactionManifestParser.RULE_none);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 354;
				this.match(TransactionManifestParser.NONE_TYPE);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ok(): OkContext {
		let _localctx: OkContext = new OkContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, TransactionManifestParser.RULE_ok);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 356;
				this.match(TransactionManifestParser.OK_TYPE);
				this.state = 357;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 358;
				this.value();
				this.state = 359;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public err(): ErrContext {
		let _localctx: ErrContext = new ErrContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, TransactionManifestParser.RULE_err);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 361;
				this.match(TransactionManifestParser.ERR_TYPE);
				this.state = 362;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 363;
				this.value();
				this.state = 364;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, TransactionManifestParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 366;
				this.match(TransactionManifestParser.ARRAY_TYPE);
				this.state = 367;
				this.match(TransactionManifestParser.LESS_THAN);
				this.state = 368;
				this.type();
				this.state = 369;
				this.match(TransactionManifestParser.GREATER_THAN);
				this.state = 383;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case TransactionManifestParser.EMPTY_PARENTHESIS:
						{
							this.state = 370;
							this.match(
								TransactionManifestParser.EMPTY_PARENTHESIS
							);
						}
						break;
					case TransactionManifestParser.OPEN_PARENTHESIS:
						{
							this.state = 371;
							this.match(
								TransactionManifestParser.OPEN_PARENTHESIS
							);
							this.state = 380;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								((_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 <<
											TransactionManifestParser.BOOL_LITERAL) |
											(1 <<
												TransactionManifestParser.I8_LITERAL) |
											(1 <<
												TransactionManifestParser.I16_LITERAL) |
											(1 <<
												TransactionManifestParser.I32_LITERAL) |
											(1 <<
												TransactionManifestParser.I64_LITERAL) |
											(1 <<
												TransactionManifestParser.I128_LITERAL) |
											(1 <<
												TransactionManifestParser.U8_LITERAL) |
											(1 <<
												TransactionManifestParser.U16_LITERAL) |
											(1 <<
												TransactionManifestParser.U32_LITERAL) |
											(1 <<
												TransactionManifestParser.U64_LITERAL) |
											(1 <<
												TransactionManifestParser.U128_LITERAL) |
											(1 <<
												TransactionManifestParser.STRUCT_TYPE) |
											(1 <<
												TransactionManifestParser.ENUM_TYPE) |
											(1 <<
												TransactionManifestParser.SOME_TYPE))) !==
										0) ||
								(((_la - 32) & ~0x1f) === 0 &&
									((1 << (_la - 32)) &
										((1 <<
											(TransactionManifestParser.NONE_TYPE -
												32)) |
											(1 <<
												(TransactionManifestParser.OK_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ERR_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ARRAY_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.TUPLE_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.LIST_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.SET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.MAP_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PRECISE_DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.HASH_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BUCKET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PROOF_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BLOB_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EXPRESSION_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EMPTY_PARENTHESIS -
													32)))) !==
										0) ||
								_la === TransactionManifestParser.STRING_LITERAL
							) {
								{
									this.state = 372;
									this.value();
									this.state = 377;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									while (
										_la === TransactionManifestParser.COMMA
									) {
										{
											{
												this.state = 373;
												this.match(
													TransactionManifestParser.COMMA
												);
												this.state = 374;
												this.value();
											}
										}
										this.state = 379;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
									}
								}
							}

							this.state = 382;
							this.match(
								TransactionManifestParser.CLOED_PARENTHESIS
							);
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, TransactionManifestParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 385;
				this.match(TransactionManifestParser.TUPLE_TYPE);
				this.state = 386;
				this.match(TransactionManifestParser.LESS_THAN);
				this.state = 400;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case TransactionManifestParser.EMPTY_PARENTHESIS:
						{
							this.state = 387;
							this.match(
								TransactionManifestParser.EMPTY_PARENTHESIS
							);
						}
						break;
					case TransactionManifestParser.OPEN_PARENTHESIS:
						{
							this.state = 388;
							this.match(
								TransactionManifestParser.OPEN_PARENTHESIS
							);
							this.state = 397;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								((_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 <<
											TransactionManifestParser.BOOL_LITERAL) |
											(1 <<
												TransactionManifestParser.I8_LITERAL) |
											(1 <<
												TransactionManifestParser.I16_LITERAL) |
											(1 <<
												TransactionManifestParser.I32_LITERAL) |
											(1 <<
												TransactionManifestParser.I64_LITERAL) |
											(1 <<
												TransactionManifestParser.I128_LITERAL) |
											(1 <<
												TransactionManifestParser.U8_LITERAL) |
											(1 <<
												TransactionManifestParser.U16_LITERAL) |
											(1 <<
												TransactionManifestParser.U32_LITERAL) |
											(1 <<
												TransactionManifestParser.U64_LITERAL) |
											(1 <<
												TransactionManifestParser.U128_LITERAL) |
											(1 <<
												TransactionManifestParser.STRUCT_TYPE) |
											(1 <<
												TransactionManifestParser.ENUM_TYPE) |
											(1 <<
												TransactionManifestParser.SOME_TYPE))) !==
										0) ||
								(((_la - 32) & ~0x1f) === 0 &&
									((1 << (_la - 32)) &
										((1 <<
											(TransactionManifestParser.NONE_TYPE -
												32)) |
											(1 <<
												(TransactionManifestParser.OK_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ERR_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ARRAY_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.TUPLE_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.LIST_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.SET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.MAP_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PRECISE_DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.HASH_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BUCKET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PROOF_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BLOB_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EXPRESSION_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EMPTY_PARENTHESIS -
													32)))) !==
										0) ||
								_la === TransactionManifestParser.STRING_LITERAL
							) {
								{
									this.state = 389;
									this.value();
									this.state = 394;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									while (
										_la === TransactionManifestParser.COMMA
									) {
										{
											{
												this.state = 390;
												this.match(
													TransactionManifestParser.COMMA
												);
												this.state = 391;
												this.value();
											}
										}
										this.state = 396;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
									}
								}
							}

							this.state = 399;
							this.match(
								TransactionManifestParser.CLOED_PARENTHESIS
							);
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, TransactionManifestParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 402;
				this.match(TransactionManifestParser.LIST_TYPE);
				this.state = 403;
				this.match(TransactionManifestParser.LESS_THAN);
				this.state = 404;
				this.type();
				this.state = 405;
				this.match(TransactionManifestParser.GREATER_THAN);
				this.state = 419;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case TransactionManifestParser.EMPTY_PARENTHESIS:
						{
							this.state = 406;
							this.match(
								TransactionManifestParser.EMPTY_PARENTHESIS
							);
						}
						break;
					case TransactionManifestParser.OPEN_PARENTHESIS:
						{
							this.state = 407;
							this.match(
								TransactionManifestParser.OPEN_PARENTHESIS
							);
							this.state = 416;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								((_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 <<
											TransactionManifestParser.BOOL_LITERAL) |
											(1 <<
												TransactionManifestParser.I8_LITERAL) |
											(1 <<
												TransactionManifestParser.I16_LITERAL) |
											(1 <<
												TransactionManifestParser.I32_LITERAL) |
											(1 <<
												TransactionManifestParser.I64_LITERAL) |
											(1 <<
												TransactionManifestParser.I128_LITERAL) |
											(1 <<
												TransactionManifestParser.U8_LITERAL) |
											(1 <<
												TransactionManifestParser.U16_LITERAL) |
											(1 <<
												TransactionManifestParser.U32_LITERAL) |
											(1 <<
												TransactionManifestParser.U64_LITERAL) |
											(1 <<
												TransactionManifestParser.U128_LITERAL) |
											(1 <<
												TransactionManifestParser.STRUCT_TYPE) |
											(1 <<
												TransactionManifestParser.ENUM_TYPE) |
											(1 <<
												TransactionManifestParser.SOME_TYPE))) !==
										0) ||
								(((_la - 32) & ~0x1f) === 0 &&
									((1 << (_la - 32)) &
										((1 <<
											(TransactionManifestParser.NONE_TYPE -
												32)) |
											(1 <<
												(TransactionManifestParser.OK_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ERR_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ARRAY_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.TUPLE_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.LIST_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.SET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.MAP_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PRECISE_DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.HASH_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BUCKET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PROOF_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BLOB_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EXPRESSION_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EMPTY_PARENTHESIS -
													32)))) !==
										0) ||
								_la === TransactionManifestParser.STRING_LITERAL
							) {
								{
									this.state = 408;
									this.value();
									this.state = 413;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									while (
										_la === TransactionManifestParser.COMMA
									) {
										{
											{
												this.state = 409;
												this.match(
													TransactionManifestParser.COMMA
												);
												this.state = 410;
												this.value();
											}
										}
										this.state = 415;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
									}
								}
							}

							this.state = 418;
							this.match(
								TransactionManifestParser.CLOED_PARENTHESIS
							);
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, TransactionManifestParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 421;
				this.match(TransactionManifestParser.SET_TYPE);
				this.state = 422;
				this.match(TransactionManifestParser.LESS_THAN);
				this.state = 423;
				this.type();
				this.state = 424;
				this.match(TransactionManifestParser.GREATER_THAN);
				this.state = 438;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case TransactionManifestParser.EMPTY_PARENTHESIS:
						{
							this.state = 425;
							this.match(
								TransactionManifestParser.EMPTY_PARENTHESIS
							);
						}
						break;
					case TransactionManifestParser.OPEN_PARENTHESIS:
						{
							this.state = 426;
							this.match(
								TransactionManifestParser.OPEN_PARENTHESIS
							);
							this.state = 435;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								((_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 <<
											TransactionManifestParser.BOOL_LITERAL) |
											(1 <<
												TransactionManifestParser.I8_LITERAL) |
											(1 <<
												TransactionManifestParser.I16_LITERAL) |
											(1 <<
												TransactionManifestParser.I32_LITERAL) |
											(1 <<
												TransactionManifestParser.I64_LITERAL) |
											(1 <<
												TransactionManifestParser.I128_LITERAL) |
											(1 <<
												TransactionManifestParser.U8_LITERAL) |
											(1 <<
												TransactionManifestParser.U16_LITERAL) |
											(1 <<
												TransactionManifestParser.U32_LITERAL) |
											(1 <<
												TransactionManifestParser.U64_LITERAL) |
											(1 <<
												TransactionManifestParser.U128_LITERAL) |
											(1 <<
												TransactionManifestParser.STRUCT_TYPE) |
											(1 <<
												TransactionManifestParser.ENUM_TYPE) |
											(1 <<
												TransactionManifestParser.SOME_TYPE))) !==
										0) ||
								(((_la - 32) & ~0x1f) === 0 &&
									((1 << (_la - 32)) &
										((1 <<
											(TransactionManifestParser.NONE_TYPE -
												32)) |
											(1 <<
												(TransactionManifestParser.OK_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ERR_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.ARRAY_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.TUPLE_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.LIST_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.SET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.MAP_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PRECISE_DECIMAL_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.HASH_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BUCKET_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.PROOF_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.BLOB_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EXPRESSION_TYPE -
													32)) |
											(1 <<
												(TransactionManifestParser.EMPTY_PARENTHESIS -
													32)))) !==
										0) ||
								_la === TransactionManifestParser.STRING_LITERAL
							) {
								{
									this.state = 427;
									this.value();
									this.state = 432;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									while (
										_la === TransactionManifestParser.COMMA
									) {
										{
											{
												this.state = 428;
												this.match(
													TransactionManifestParser.COMMA
												);
												this.state = 429;
												this.value();
											}
										}
										this.state = 434;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
									}
								}
							}

							this.state = 437;
							this.match(
								TransactionManifestParser.CLOED_PARENTHESIS
							);
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map(): MapContext {
		let _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, TransactionManifestParser.RULE_map);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 440;
				this.match(TransactionManifestParser.MAP_TYPE);
				this.state = 441;
				this.match(TransactionManifestParser.LESS_THAN);
				this.state = 442;
				this.type();
				this.state = 443;
				this.match(TransactionManifestParser.COMMA);
				this.state = 444;
				this.type();
				this.state = 445;
				this.match(TransactionManifestParser.GREATER_THAN);
				this.state = 458;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case TransactionManifestParser.EMPTY_PARENTHESIS:
						{
							this.state = 446;
							this.match(
								TransactionManifestParser.EMPTY_PARENTHESIS
							);
						}
						break;
					case TransactionManifestParser.OPEN_PARENTHESIS:
						{
							this.state = 447;
							this.match(
								TransactionManifestParser.OPEN_PARENTHESIS
							);
							this.state = 454;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(
								this._input,
								23,
								this._ctx
							);
							while (
								_alt !== 1 &&
								_alt !== ATN.INVALID_ALT_NUMBER
							) {
								if (_alt === 1 + 1) {
									{
										{
											this.state = 448;
											this.value();
											this.state = 449;
											this.match(
												TransactionManifestParser.COMMA
											);
											this.state = 450;
											this.value();
										}
									}
								}
								this.state = 456;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(
									this._input,
									23,
									this._ctx
								);
							}
							this.state = 457;
							this.match(
								TransactionManifestParser.CLOED_PARENTHESIS
							);
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimal(): DecimalContext {
		let _localctx: DecimalContext = new DecimalContext(
			this._ctx,
			this.state
		);
		this.enterRule(_localctx, 100, TransactionManifestParser.RULE_decimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 460;
				this.match(TransactionManifestParser.DECIMAL_TYPE);
				this.state = 461;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 462;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 463;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public preciseDecimal(): PreciseDecimalContext {
		let _localctx: PreciseDecimalContext = new PreciseDecimalContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			102,
			TransactionManifestParser.RULE_preciseDecimal
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 465;
				this.match(TransactionManifestParser.PRECISE_DECIMAL_TYPE);
				this.state = 466;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 467;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 468;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageAddress(): PackageAddressContext {
		let _localctx: PackageAddressContext = new PackageAddressContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			104,
			TransactionManifestParser.RULE_packageAddress
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 470;
				this.match(TransactionManifestParser.PACKAGE_ADDRESS_TYPE);
				this.state = 471;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 472;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 473;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentAddress(): ComponentAddressContext {
		let _localctx: ComponentAddressContext = new ComponentAddressContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			106,
			TransactionManifestParser.RULE_componentAddress
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 475;
				this.match(TransactionManifestParser.COMPONENT_ADDRESS_TYPE);
				this.state = 476;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 477;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 478;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceAddress(): ResourceAddressContext {
		let _localctx: ResourceAddressContext = new ResourceAddressContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			108,
			TransactionManifestParser.RULE_resourceAddress
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 480;
				this.match(TransactionManifestParser.RESOURCE_ADDRESS_TYPE);
				this.state = 481;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 482;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 483;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hash(): HashContext {
		let _localctx: HashContext = new HashContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, TransactionManifestParser.RULE_hash);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 485;
				this.match(TransactionManifestParser.HASH_TYPE);
				this.state = 486;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 487;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 488;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bucket(): BucketContext {
		let _localctx: BucketContext = new BucketContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, TransactionManifestParser.RULE_bucket);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 490;
				this.match(TransactionManifestParser.BUCKET_TYPE);
				this.state = 491;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 492;
				_la = this._input.LA(1);
				if (
					!(
						_la === TransactionManifestParser.U32_LITERAL ||
						_la === TransactionManifestParser.STRING_LITERAL
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 493;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public proof(): ProofContext {
		let _localctx: ProofContext = new ProofContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, TransactionManifestParser.RULE_proof);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 495;
				this.match(TransactionManifestParser.PROOF_TYPE);
				this.state = 496;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 497;
				_la = this._input.LA(1);
				if (
					!(
						_la === TransactionManifestParser.U32_LITERAL ||
						_la === TransactionManifestParser.STRING_LITERAL
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 498;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonFungibleId(): NonFungibleIdContext {
		let _localctx: NonFungibleIdContext = new NonFungibleIdContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			116,
			TransactionManifestParser.RULE_nonFungibleId
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 500;
				this.match(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE);
				this.state = 501;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 502;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 503;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonFungibleAddress(): NonFungibleAddressContext {
		let _localctx: NonFungibleAddressContext =
			new NonFungibleAddressContext(this._ctx, this.state);
		this.enterRule(
			_localctx,
			118,
			TransactionManifestParser.RULE_nonFungibleAddress
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 505;
				this.match(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE);
				this.state = 506;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 507;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 508;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blob(): BlobContext {
		let _localctx: BlobContext = new BlobContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, TransactionManifestParser.RULE_blob);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 510;
				this.match(TransactionManifestParser.BLOB_TYPE);
				this.state = 511;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 512;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 513;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(
			this._ctx,
			this.state
		);
		this.enterRule(
			_localctx,
			122,
			TransactionManifestParser.RULE_expression
		);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 515;
				this.match(TransactionManifestParser.EXPRESSION_TYPE);
				this.state = 516;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 517;
				this.match(TransactionManifestParser.STRING_LITERAL);
				this.state = 518;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, TransactionManifestParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 520;
				_la = this._input.LA(1);
				if (
					!(
						((_la & ~0x1f) === 0 &&
							((1 << _la) &
								((1 << TransactionManifestParser.UNIT_TYPE) |
									(1 << TransactionManifestParser.BOOL_TYPE) |
									(1 << TransactionManifestParser.I8_TYPE) |
									(1 << TransactionManifestParser.I16_TYPE) |
									(1 << TransactionManifestParser.I32_TYPE) |
									(1 << TransactionManifestParser.I64_TYPE) |
									(1 << TransactionManifestParser.I128_TYPE) |
									(1 << TransactionManifestParser.U8_TYPE) |
									(1 << TransactionManifestParser.U16_TYPE) |
									(1 << TransactionManifestParser.U32_TYPE) |
									(1 << TransactionManifestParser.U64_TYPE) |
									(1 << TransactionManifestParser.U128_TYPE) |
									(1 <<
										TransactionManifestParser.STRING_TYPE) |
									(1 <<
										TransactionManifestParser.STRUCT_TYPE) |
									(1 << TransactionManifestParser.ENUM_TYPE) |
									(1 <<
										TransactionManifestParser.OPTION_TYPE) |
									(1 <<
										TransactionManifestParser.RESULT_TYPE) |
									(1 <<
										TransactionManifestParser.SOME_TYPE))) !==
								0) ||
						(((_la - 32) & ~0x1f) === 0 &&
							((1 << (_la - 32)) &
								((1 <<
									(TransactionManifestParser.NONE_TYPE -
										32)) |
									(1 <<
										(TransactionManifestParser.OK_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.ERR_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.ARRAY_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.TUPLE_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.LIST_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.SET_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.MAP_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.DECIMAL_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.PRECISE_DECIMAL_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.HASH_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.BUCKET_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.PROOF_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.BLOB_TYPE -
											32)) |
									(1 <<
										(TransactionManifestParser.EXPRESSION_TYPE -
											32)))) !==
								0)
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, TransactionManifestParser.RULE_value);
		try {
			this.state = 559;
			this._errHandler.sync(this);
			switch (
				this.interpreter.adaptivePredict(this._input, 25, this._ctx)
			) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 522;
						this.unit();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 523;
						this.bool();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 524;
						this.i8();
					}
					break;

				case 4:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 525;
						this.i16();
					}
					break;

				case 5:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 526;
						this.i32();
					}
					break;

				case 6:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 527;
						this.i64();
					}
					break;

				case 7:
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 528;
						this.i128();
					}
					break;

				case 8:
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 529;
						this.u8();
					}
					break;

				case 9:
					this.enterOuterAlt(_localctx, 9);
					{
						this.state = 530;
						this.u16();
					}
					break;

				case 10:
					this.enterOuterAlt(_localctx, 10);
					{
						this.state = 531;
						this.u32();
					}
					break;

				case 11:
					this.enterOuterAlt(_localctx, 11);
					{
						this.state = 532;
						this.u64();
					}
					break;

				case 12:
					this.enterOuterAlt(_localctx, 12);
					{
						this.state = 533;
						this.u128();
					}
					break;

				case 13:
					this.enterOuterAlt(_localctx, 13);
					{
						this.state = 534;
						this.string();
					}
					break;

				case 14:
					this.enterOuterAlt(_localctx, 14);
					{
						this.state = 535;
						this.struct();
					}
					break;

				case 15:
					this.enterOuterAlt(_localctx, 15);
					{
						this.state = 536;
						this.enum_();
					}
					break;

				case 16:
					this.enterOuterAlt(_localctx, 16);
					{
						this.state = 537;
						this.option();
					}
					break;

				case 17:
					this.enterOuterAlt(_localctx, 17);
					{
						this.state = 538;
						this.some();
					}
					break;

				case 18:
					this.enterOuterAlt(_localctx, 18);
					{
						this.state = 539;
						this.none();
					}
					break;

				case 19:
					this.enterOuterAlt(_localctx, 19);
					{
						this.state = 540;
						this.ok();
					}
					break;

				case 20:
					this.enterOuterAlt(_localctx, 20);
					{
						this.state = 541;
						this.err();
					}
					break;

				case 21:
					this.enterOuterAlt(_localctx, 21);
					{
						this.state = 542;
						this.array();
					}
					break;

				case 22:
					this.enterOuterAlt(_localctx, 22);
					{
						this.state = 543;
						this.tuple();
					}
					break;

				case 23:
					this.enterOuterAlt(_localctx, 23);
					{
						this.state = 544;
						this.list();
					}
					break;

				case 24:
					this.enterOuterAlt(_localctx, 24);
					{
						this.state = 545;
						this.set();
					}
					break;

				case 25:
					this.enterOuterAlt(_localctx, 25);
					{
						this.state = 546;
						this.map();
					}
					break;

				case 26:
					this.enterOuterAlt(_localctx, 26);
					{
						this.state = 547;
						this.decimal();
					}
					break;

				case 27:
					this.enterOuterAlt(_localctx, 27);
					{
						this.state = 548;
						this.preciseDecimal();
					}
					break;

				case 28:
					this.enterOuterAlt(_localctx, 28);
					{
						this.state = 549;
						this.packageAddress();
					}
					break;

				case 29:
					this.enterOuterAlt(_localctx, 29);
					{
						this.state = 550;
						this.componentAddress();
					}
					break;

				case 30:
					this.enterOuterAlt(_localctx, 30);
					{
						this.state = 551;
						this.resourceAddress();
					}
					break;

				case 31:
					this.enterOuterAlt(_localctx, 31);
					{
						this.state = 552;
						this.hash();
					}
					break;

				case 32:
					this.enterOuterAlt(_localctx, 32);
					{
						this.state = 553;
						this.bucket();
					}
					break;

				case 33:
					this.enterOuterAlt(_localctx, 33);
					{
						this.state = 554;
						this.proof();
					}
					break;

				case 34:
					this.enterOuterAlt(_localctx, 34);
					{
						this.state = 555;
						this.nonFungibleId();
					}
					break;

				case 35:
					this.enterOuterAlt(_localctx, 35);
					{
						this.state = 556;
						this.nonFungibleAddress();
					}
					break;

				case 36:
					this.enterOuterAlt(_localctx, 36);
					{
						this.state = 557;
						this.blob();
					}
					break;

				case 37:
					this.enterOuterAlt(_localctx, 37);
					{
						this.state = 558;
						this.expression();
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Y\u0234\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		'\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x03\x02\x07\x02\x84\n\x02\f\x02\x0E" +
		"\x02\x87\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03\xA2\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xA9" +
		"\n\x04\f\x04\x0E\x04\xAC\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x07\x05\xB4\n\x05\f\x05\x0E\x05\xB7\v\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u011E\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03" +
		' \x03!\x03!\x03"\x03"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'' +
		"\x03'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u0142\n(\f(\x0E(\u0145\v(\x05" +
		"(\u0147\n(\x03(\x05(\u014A\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x07)" +
		"\u0153\n)\f)\x0E)\u0156\v)\x05)\u0158\n)\x03)\x03)\x03*\x03*\x05*\u015E" +
		"\n*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u017A" +
		"\n/\f/\x0E/\u017D\v/\x05/\u017F\n/\x03/\x05/\u0182\n/\x030\x030\x030\x03" +
		"0\x030\x030\x030\x070\u018B\n0\f0\x0E0\u018E\v0\x050\u0190\n0\x030\x05" +
		"0\u0193\n0\x031\x031\x031\x031\x031\x031\x031\x031\x031\x071\u019E\n1" +
		"\f1\x0E1\u01A1\v1\x051\u01A3\n1\x031\x051\u01A6\n1\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x072\u01B1\n2\f2\x0E2\u01B4\v2\x052\u01B6\n" +
		"2\x032\x052\u01B9\n2\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
		"3\x033\x033\x073\u01C7\n3\f3\x0E3\u01CA\v3\x033\x053\u01CD\n3\x034\x03" +
		"4\x034\x034\x034\x035\x035\x035\x035\x035\x036\x036\x036\x036\x036\x03" +
		"7\x037\x037\x037\x037\x038\x038\x038\x038\x038\x039\x039\x039\x039\x03" +
		"9\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03" +
		"<\x03<\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03?\x03?\x03" +
		"?\x03?\x03?\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05" +
		"A\u0232\nA\x03A\x03\u01C8\x02\x02B\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		'\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02' +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x02\x04\x04\x02\v\vT" +
		"T\x03\x02\x105\x02\u0245\x02\x85\x03\x02\x02\x02\x04\xA1\x03\x02\x02\x02" +
		"\x06\xA3\x03\x02\x02\x02\b\xAF\x03\x02\x02\x02\n\xBA\x03\x02\x02\x02\f" +
		"\xBF\x03\x02\x02\x02\x0E\xC5\x03\x02\x02\x02\x10\xCB\x03\x02\x02\x02\x12" +
		"\xCF\x03\x02\x02\x02\x14\xD3\x03\x02\x02\x02\x16\xD8\x03\x02\x02\x02\x18" +
		"\xDD\x03\x02\x02\x02\x1A\xE1\x03\x02\x02\x02\x1C\xE5\x03\x02\x02\x02\x1E" +
		'\xEA\x03\x02\x02\x02 \xF0\x03\x02\x02\x02"\xF6\x03\x02\x02\x02$\xFB\x03' +
		"\x02\x02\x02&\u0100\x03\x02\x02\x02(\u0104\x03\x02\x02\x02*\u0107\x03" +
		"\x02\x02\x02,\u010A\x03\x02\x02\x02.\u010F\x03\x02\x02\x020\u0113\x03" +
		"\x02\x02\x022\u0118\x03\x02\x02\x024\u0121\x03\x02\x02\x026\u0123\x03" +
		"\x02\x02\x028\u0125\x03\x02\x02\x02:\u0127\x03\x02\x02\x02<\u0129\x03" +
		"\x02\x02\x02>\u012B\x03\x02\x02\x02@\u012D\x03\x02\x02\x02B\u012F\x03" +
		"\x02\x02\x02D\u0131\x03\x02\x02\x02F\u0133\x03\x02\x02\x02H\u0135\x03" +
		"\x02\x02\x02J\u0137\x03\x02\x02\x02L\u0139\x03\x02\x02\x02N\u013B\x03" +
		"\x02\x02\x02P\u014B\x03\x02\x02\x02R\u015D\x03\x02\x02\x02T\u015F\x03" +
		"\x02\x02\x02V\u0164\x03\x02\x02\x02X\u0166\x03\x02\x02\x02Z\u016B\x03" +
		"\x02\x02\x02\\\u0170\x03\x02\x02\x02^\u0183\x03\x02\x02\x02`\u0194\x03" +
		"\x02\x02\x02b\u01A7\x03\x02\x02\x02d\u01BA\x03\x02\x02\x02f\u01CE\x03" +
		"\x02\x02\x02h\u01D3\x03\x02\x02\x02j\u01D8\x03\x02\x02\x02l\u01DD\x03" +
		"\x02\x02\x02n\u01E2\x03\x02\x02\x02p\u01E7\x03\x02\x02\x02r\u01EC\x03" +
		"\x02\x02\x02t\u01F1\x03\x02\x02\x02v\u01F6\x03\x02\x02\x02x\u01FB\x03" +
		"\x02\x02\x02z\u0200\x03\x02\x02\x02|\u0205\x03\x02\x02\x02~\u020A\x03" +
		"\x02\x02\x02\x80\u0231\x03\x02\x02\x02\x82\x84\x05\x04\x03\x02\x83\x82" +
		"\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x88\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x89" +
		"\x07\x02\x02\x03\x89\x03\x03\x02\x02\x02\x8A\xA2\x05\x06\x04\x02\x8B\xA2" +
		"\x05\b\x05\x02\x8C\xA2\x05\x10\t\x02\x8D\xA2\x05\n\x06\x02\x8E\xA2\x05" +
		"\f\x07\x02\x8F\xA2\x05\x0E\b\x02\x90\xA2\x05\x12\n\x02\x91\xA2\x05\x14" +
		"\v\x02\x92\xA2\x05\x16\f\x02\x93\xA2\x05\x18\r\x02\x94\xA2\x05\x1A\x0E" +
		"\x02\x95\xA2\x05\x1C\x0F\x02\x96\xA2\x05\x1E\x10\x02\x97\xA2\x05 \x11" +
		'\x02\x98\xA2\x05"\x12\x02\x99\xA2\x05$\x13\x02\x9A\xA2\x05&\x14\x02\x9B' +
		"\xA2\x05(\x15\x02\x9C\xA2\x05*\x16\x02\x9D\xA2\x05,\x17\x02\x9E\xA2\x05" +
		"2\x1A\x02\x9F\xA2\x05.\x18\x02\xA0\xA2\x050\x19\x02\xA1\x8A\x03\x02\x02" +
		"\x02\xA1\x8B\x03\x02\x02\x02\xA1\x8C\x03\x02\x02\x02\xA1\x8D\x03\x02\x02" +
		"\x02\xA1\x8E\x03\x02\x02\x02\xA1\x8F\x03\x02\x02\x02\xA1\x90\x03\x02\x02" +
		"\x02\xA1\x91\x03\x02\x02\x02\xA1\x92\x03\x02\x02\x02\xA1\x93\x03\x02\x02" +
		"\x02\xA1\x94\x03\x02\x02\x02\xA1\x95\x03\x02\x02\x02\xA1\x96\x03\x02\x02" +
		"\x02\xA1\x97\x03\x02\x02\x02\xA1\x98\x03\x02\x02\x02\xA1\x99\x03\x02\x02" +
		"\x02\xA1\x9A\x03\x02\x02\x02\xA1\x9B\x03\x02\x02\x02\xA1\x9C\x03\x02\x02" +
		"\x02\xA1\x9D\x03\x02\x02\x02\xA1\x9E\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
		"\x02\xA1\xA0\x03\x02\x02\x02\xA2\x05\x03\x02\x02\x02\xA3\xA4\x07N\x02" +
		"\x02\xA4\xA5\x05j6\x02\xA5\xA6\x05L'\x02\xA6\xAA\x05L'\x02\xA7\xA9\x05" +
		"\x80A\x02\xA8\xA7\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03" +
		"\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC\xAA\x03" +
		"\x02\x02\x02\xAD\xAE\x07<\x02\x02\xAE\x07\x03\x02\x02\x02\xAF\xB0\x07" +
		"O\x02\x02\xB0\xB1\x05l7\x02\xB1\xB5\x05L'\x02\xB2\xB4\x05\x80A\x02\xB3" +
		"\xB2\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5" +
		"\xB6\x03\x02\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8" +
		"\xB9\x07<\x02\x02\xB9\t\x03\x02\x02\x02\xBA\xBB\x07=\x02\x02\xBB\xBC\x05" +
		"n8\x02\xBC\xBD\x05r:\x02\xBD\xBE\x07<\x02\x02\xBE\v\x03\x02\x02\x02\xBF" +
		"\xC0\x07>\x02\x02\xC0\xC1\x05f4\x02\xC1\xC2\x05n8\x02\xC2\xC3\x05r:\x02" +
		"\xC3\xC4\x07<\x02\x02\xC4\r\x03\x02\x02\x02\xC5\xC6\x07?\x02\x02\xC6\xC7" +
		"\x05b2\x02\xC7\xC8\x05n8\x02\xC8\xC9\x05r:\x02\xC9\xCA\x07<\x02\x02\xCA" +
		"\x0F\x03\x02\x02\x02\xCB\xCC\x07C\x02\x02\xCC\xCD\x05r:\x02\xCD\xCE\x07" +
		"<\x02\x02\xCE\x11\x03\x02\x02\x02\xCF\xD0\x07@\x02\x02\xD0\xD1\x05n8\x02" +
		"\xD1\xD2\x07<\x02\x02\xD2\x13\x03\x02\x02\x02\xD3\xD4\x07A\x02\x02\xD4" +
		"\xD5\x05f4\x02\xD5\xD6\x05n8\x02\xD6\xD7\x07<\x02\x02\xD7\x15\x03\x02" +
		"\x02\x02\xD8\xD9\x07B\x02\x02\xD9\xDA\x05b2\x02\xDA\xDB\x05n8\x02\xDB" +
		"\xDC\x07<\x02\x02\xDC\x17\x03\x02\x02\x02\xDD\xDE\x07D\x02\x02\xDE\xDF" +
		"\x05t;\x02\xDF\xE0\x07<\x02\x02\xE0\x19\x03\x02\x02\x02\xE1\xE2\x07E\x02" +
		"\x02\xE2\xE3\x05t;\x02\xE3\xE4\x07<\x02\x02\xE4\x1B\x03\x02\x02\x02\xE5" +
		"\xE6\x07G\x02\x02\xE6\xE7\x05n8\x02\xE7\xE8\x05t;\x02\xE8\xE9\x07<\x02" +
		"\x02\xE9\x1D\x03\x02\x02\x02\xEA\xEB\x07H\x02\x02\xEB\xEC\x05f4\x02\xEC" +
		"\xED\x05n8\x02\xED\xEE\x05t;\x02\xEE\xEF\x07<\x02\x02\xEF\x1F\x03\x02" +
		"\x02\x02\xF0\xF1\x07I\x02\x02\xF1\xF2\x05b2\x02\xF2\xF3\x05n8\x02\xF3" +
		"\xF4\x05t;\x02\xF4\xF5\x07<\x02\x02\xF5!\x03\x02\x02\x02\xF6\xF7\x07J" +
		"\x02\x02\xF7\xF8\x05r:\x02\xF8\xF9\x05t;\x02\xF9\xFA\x07<\x02\x02\xFA" +
		"#\x03\x02\x02\x02\xFB\xFC\x07K\x02\x02\xFC\xFD\x05t;\x02\xFD\xFE\x05t" +
		";\x02\xFE\xFF\x07<\x02\x02\xFF%\x03\x02\x02\x02\u0100\u0101\x07L\x02\x02" +
		"\u0101\u0102\x05t;\x02\u0102\u0103\x07<\x02\x02\u0103'\x03\x02\x02\x02" +
		"\u0104\u0105\x07M\x02\x02\u0105\u0106\x07<\x02\x02\u0106)\x03\x02\x02" +
		"\x02\u0107\u0108\x07F\x02\x02\u0108\u0109\x07<\x02\x02\u0109+\x03\x02" +
		"\x02\x02\u010A\u010B\x07P\x02\x02\u010B\u010C\x05z>\x02\u010C\u010D\x05" +
		"z>\x02\u010D\u010E\x07<\x02\x02\u010E-\x03\x02\x02\x02\u010F\u0110\x07" +
		"Q\x02\x02\u0110\u0111\x05r:\x02\u0111\u0112\x07<\x02\x02\u0112/\x03\x02" +
		"\x02\x02\u0113\u0114\x07R\x02\x02\u0114\u0115\x05n8\x02\u0115\u0116\x05" +
		"f4\x02\u0116\u0117\x07<\x02\x02\u01171\x03\x02\x02\x02\u0118\u0119\x07" +
		"S\x02\x02\u0119\u011A\x05P)\x02\u011A\u011B\x05d3\x02\u011B\u011D\x05" +
		"d3\x02\u011C\u011E\x05R*\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03" +
		"\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120\x07<\x02\x02\u0120" +
		"3\x03\x02\x02\x02\u0121\u0122\x078\x02\x02\u01225\x03\x02\x02\x02\u0123" +
		"\u0124\x07\x03\x02\x02\u01247\x03\x02\x02\x02\u0125\u0126\x07\x04\x02" +
		"\x02\u01269\x03\x02\x02\x02\u0127\u0128\x07\x05\x02\x02\u0128;\x03\x02" +
		"\x02\x02\u0129\u012A\x07\x06\x02\x02\u012A=\x03\x02\x02\x02\u012B\u012C" +
		"\x07\x07\x02\x02\u012C?\x03\x02\x02\x02\u012D\u012E\x07\b\x02\x02\u012E" +
		"A\x03\x02\x02\x02\u012F\u0130\x07\t\x02\x02\u0130C\x03\x02\x02\x02\u0131" +
		"\u0132\x07\n\x02\x02\u0132E\x03\x02\x02\x02\u0133\u0134\x07\v\x02\x02" +
		"\u0134G\x03\x02\x02\x02\u0135\u0136\x07\f\x02\x02\u0136I\x03\x02\x02\x02" +
		"\u0137\u0138\x07\r\x02\x02\u0138K\x03\x02\x02\x02\u0139\u013A\x07T\x02" +
		"\x02\u013AM\x03\x02\x02\x02\u013B\u0149\x07\x1D\x02\x02\u013C\u014A\x07" +
		"8\x02\x02\u013D\u0146\x076\x02\x02\u013E\u0143\x05\x80A\x02\u013F\u0140" +
		"\x07;\x02\x02\u0140\u0142\x05\x80A\x02\u0141\u013F\x03\x02\x02\x02\u0142" +
		"\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02" +
		"\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146" +
		"\u013E\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\u014A\x077\x02\x02\u0149\u013C\x03\x02\x02\x02\u0149\u013D" +
		"\x03\x02\x02\x02\u014AO\x03\x02\x02\x02\u014B\u014C\x07\x1E\x02\x02\u014C" +
		"\u014D\x076\x02\x02\u014D\u014E\x05L'\x02\u014E\u0157\x07;\x02\x02\u014F" +
		"\u0154\x05\x80A\x02\u0150\u0151\x07;\x02\x02\u0151\u0153\x05\x80A\x02" +
		"\u0152\u0150\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03" +
		"\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156" +
		"\u0154\x03\x02\x02\x02\u0157\u014F\x03\x02\x02\x02\u0157\u0158\x03\x02" +
		"\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x077\x02\x02\u015AQ\x03" +
		"\x02\x02\x02\u015B\u015E\x05T+\x02\u015C\u015E\x05V,\x02\u015D\u015B\x03" +
		"\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015ES\x03\x02\x02\x02\u015F" +
		"\u0160\x07!\x02\x02\u0160\u0161\x076\x02\x02\u0161\u0162\x05\x80A\x02" +
		'\u0162\u0163\x077\x02\x02\u0163U\x03\x02\x02\x02\u0164\u0165\x07"\x02' +
		"\x02\u0165W\x03\x02\x02\x02\u0166\u0167\x07#\x02\x02\u0167\u0168\x076" +
		"\x02\x02\u0168\u0169\x05\x80A\x02\u0169\u016A\x077\x02\x02\u016AY\x03" +
		"\x02\x02\x02\u016B\u016C\x07$\x02\x02\u016C\u016D\x076\x02\x02\u016D\u016E" +
		"\x05\x80A\x02\u016E\u016F\x077\x02\x02\u016F[\x03\x02\x02\x02\u0170\u0171" +
		"\x07%\x02\x02\u0171\u0172\x079\x02\x02\u0172\u0173\x05~@\x02\u0173\u0181" +
		"\x07:\x02\x02\u0174\u0182\x078\x02\x02\u0175\u017E\x076\x02\x02\u0176" +
		"\u017B\x05\x80A\x02\u0177\u0178\x07;\x02\x02\u0178\u017A\x05\x80A\x02" +
		"\u0179\u0177\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03" +
		"\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D" +
		"\u017B\x03\x02\x02\x02\u017E\u0176\x03\x02\x02\x02\u017E\u017F\x03\x02" +
		"\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x077\x02\x02\u0181\u0174" +
		"\x03\x02\x02\x02\u0181\u0175\x03\x02\x02\x02\u0182]\x03\x02\x02\x02\u0183" +
		"\u0184\x07&\x02\x02\u0184\u0192\x079\x02\x02\u0185\u0193\x078\x02\x02" +
		"\u0186\u018F\x076\x02\x02\u0187\u018C\x05\x80A\x02\u0188\u0189\x07;\x02" +
		"\x02\u0189\u018B\x05\x80A\x02\u018A\u0188\x03\x02\x02\x02\u018B\u018E" +
		"\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02" +
		"\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F\u0187\x03" +
		"\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191" +
		"\u0193\x077\x02\x02\u0192\u0185\x03\x02\x02\x02\u0192\u0186\x03\x02\x02" +
		"\x02\u0193_\x03\x02\x02\x02\u0194\u0195\x07'\x02\x02\u0195\u0196\x07" +
		"9\x02\x02\u0196\u0197\x05~@\x02\u0197\u01A5\x07:\x02\x02\u0198\u01A6\x07" +
		"8\x02\x02\u0199\u01A2\x076\x02\x02\u019A\u019F\x05\x80A\x02\u019B\u019C" +
		"\x07;\x02\x02\u019C\u019E\x05\x80A\x02\u019D\u019B\x03\x02\x02\x02\u019E" +
		"\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02" +
		"\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2" +
		"\u019A\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
		"\x02\x02\u01A4\u01A6\x077\x02\x02\u01A5\u0198\x03\x02\x02\x02\u01A5\u0199" +
		"\x03\x02\x02\x02\u01A6a\x03\x02\x02\x02\u01A7\u01A8\x07(\x02\x02\u01A8" +
		"\u01A9\x079\x02\x02\u01A9\u01AA\x05~@\x02\u01AA\u01B8\x07:\x02\x02\u01AB" +
		"\u01B9\x078\x02\x02\u01AC\u01B5\x076\x02\x02\u01AD\u01B2\x05\x80A\x02" +
		"\u01AE\u01AF\x07;\x02\x02\u01AF\u01B1\x05\x80A\x02\u01B0\u01AE\x03\x02" +
		"\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02" +
		"\x02\x02\u01B5\u01AD\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6" +
		"\u01B7\x03\x02\x02\x02\u01B7\u01B9\x077\x02\x02\u01B8\u01AB\x03\x02\x02" +
		"\x02\u01B8\u01AC\x03\x02\x02\x02\u01B9c\x03\x02\x02\x02\u01BA\u01BB\x07" +
		")\x02\x02\u01BB\u01BC\x079\x02\x02\u01BC\u01BD\x05~@\x02\u01BD\u01BE\x07" +
		";\x02\x02\u01BE\u01BF\x05~@\x02\u01BF\u01CC\x07:\x02\x02\u01C0\u01CD\x07" +
		"8\x02\x02\u01C1\u01C8\x076\x02\x02\u01C2\u01C3\x05\x80A\x02\u01C3\u01C4" +
		"\x07;\x02\x02\u01C4\u01C5\x05\x80A\x02\u01C5\u01C7\x03\x02\x02\x02\u01C6" +
		"\u01C2\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C9\x03\x02" +
		"\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01CB\x03\x02\x02\x02\u01CA" +
		"\u01C8\x03\x02\x02\x02\u01CB\u01CD\x077\x02\x02\u01CC\u01C0\x03\x02\x02" +
		"\x02\u01CC\u01C1\x03\x02\x02\x02\u01CDe\x03\x02\x02\x02\u01CE\u01CF\x07" +
		"*\x02\x02\u01CF\u01D0\x076\x02\x02\u01D0\u01D1\x07T\x02\x02\u01D1\u01D2" +
		"\x077\x02\x02\u01D2g\x03\x02\x02\x02\u01D3\u01D4\x07+\x02\x02\u01D4\u01D5" +
		"\x076\x02\x02\u01D5\u01D6\x07T\x02\x02\u01D6\u01D7\x077\x02\x02\u01D7" +
		"i\x03\x02\x02\x02\u01D8\u01D9\x07,\x02\x02\u01D9\u01DA\x076\x02\x02\u01DA" +
		"\u01DB\x07T\x02\x02\u01DB\u01DC\x077\x02\x02\u01DCk\x03\x02\x02\x02\u01DD" +
		"\u01DE\x07-\x02\x02\u01DE\u01DF\x076\x02\x02\u01DF\u01E0\x07T\x02\x02" +
		"\u01E0\u01E1\x077\x02\x02\u01E1m\x03\x02\x02\x02\u01E2\u01E3\x07.\x02" +
		"\x02\u01E3\u01E4\x076\x02\x02\u01E4\u01E5\x07T\x02\x02\u01E5\u01E6\x07" +
		"7\x02\x02\u01E6o\x03\x02\x02\x02\u01E7\u01E8\x07/\x02\x02\u01E8\u01E9" +
		"\x076\x02\x02\u01E9\u01EA\x07T\x02\x02\u01EA\u01EB\x077\x02\x02\u01EB" +
		"q\x03\x02\x02\x02\u01EC\u01ED\x070\x02\x02\u01ED\u01EE\x076\x02\x02\u01EE" +
		"\u01EF\t\x02\x02\x02\u01EF\u01F0\x077\x02\x02\u01F0s\x03\x02\x02\x02\u01F1" +
		"\u01F2\x071\x02\x02\u01F2\u01F3\x076\x02\x02\u01F3\u01F4\t\x02\x02\x02" +
		"\u01F4\u01F5\x077\x02\x02\u01F5u\x03\x02\x02\x02\u01F6\u01F7\x072\x02" +
		"\x02\u01F7\u01F8\x076\x02\x02\u01F8\u01F9\x07T\x02\x02\u01F9\u01FA\x07" +
		"7\x02\x02\u01FAw\x03\x02\x02\x02\u01FB\u01FC\x073\x02\x02\u01FC\u01FD" +
		"\x076\x02\x02\u01FD\u01FE\x07T\x02\x02\u01FE\u01FF\x077\x02\x02\u01FF" +
		"y\x03\x02\x02\x02\u0200\u0201\x074\x02\x02\u0201\u0202\x076\x02\x02\u0202" +
		"\u0203\x07T\x02\x02\u0203\u0204\x077\x02\x02\u0204{\x03\x02\x02\x02\u0205" +
		"\u0206\x075\x02\x02\u0206\u0207\x076\x02\x02\u0207\u0208\x07T\x02\x02" +
		"\u0208\u0209\x077\x02\x02\u0209}\x03\x02\x02\x02\u020A\u020B\t\x03\x02" +
		"\x02\u020B\x7F\x03\x02\x02\x02\u020C\u0232\x054\x1B\x02\u020D\u0232\x05" +
		"6\x1C\x02\u020E\u0232\x058\x1D\x02\u020F\u0232\x05:\x1E\x02\u0210\u0232" +
		"\x05<\x1F\x02\u0211\u0232\x05> \x02\u0212\u0232\x05@!\x02\u0213\u0232" +
		'\x05B"\x02\u0214\u0232\x05D#\x02\u0215\u0232\x05F$\x02\u0216\u0232\x05' +
		"H%\x02\u0217\u0232\x05J&\x02\u0218\u0232\x05L'\x02\u0219\u0232\x05N(" +
		"\x02\u021A\u0232\x05P)\x02\u021B\u0232\x05R*\x02\u021C\u0232\x05T+\x02" +
		"\u021D\u0232\x05V,\x02\u021E\u0232\x05X-\x02\u021F\u0232\x05Z.\x02\u0220" +
		"\u0232\x05\\/\x02\u0221\u0232\x05^0\x02\u0222\u0232\x05`1\x02\u0223\u0232" +
		"\x05b2\x02\u0224\u0232\x05d3\x02\u0225\u0232\x05f4\x02\u0226\u0232\x05" +
		"h5\x02\u0227\u0232\x05j6\x02\u0228\u0232\x05l7\x02\u0229\u0232\x05n8\x02" +
		"\u022A\u0232\x05p9\x02\u022B\u0232\x05r:\x02\u022C\u0232\x05t;\x02\u022D" +
		"\u0232\x05v<\x02\u022E\u0232\x05x=\x02\u022F\u0232\x05z>\x02\u0230\u0232" +
		"\x05|?\x02\u0231\u020C\x03\x02\x02\x02\u0231\u020D\x03\x02\x02\x02\u0231" +
		"\u020E\x03\x02\x02\x02\u0231\u020F\x03\x02\x02\x02\u0231\u0210\x03\x02" +
		"\x02\x02\u0231\u0211\x03\x02\x02\x02\u0231\u0212\x03\x02\x02\x02\u0231" +
		"\u0213\x03\x02\x02\x02\u0231\u0214\x03\x02\x02\x02\u0231\u0215\x03\x02" +
		"\x02\x02\u0231\u0216\x03\x02\x02\x02\u0231\u0217\x03\x02\x02\x02\u0231" +
		"\u0218\x03\x02\x02\x02\u0231\u0219\x03\x02\x02\x02\u0231\u021A\x03\x02" +
		"\x02\x02\u0231\u021B\x03\x02\x02\x02\u0231\u021C\x03\x02\x02\x02\u0231" +
		"\u021D\x03\x02\x02\x02\u0231\u021E\x03\x02\x02\x02\u0231\u021F\x03\x02" +
		"\x02\x02\u0231\u0220\x03\x02\x02\x02\u0231\u0221\x03\x02\x02\x02\u0231" +
		"\u0222\x03\x02\x02\x02\u0231\u0223\x03\x02\x02\x02\u0231\u0224\x03\x02" +
		"\x02\x02\u0231\u0225\x03\x02\x02\x02\u0231\u0226\x03\x02\x02\x02\u0231" +
		"\u0227\x03\x02\x02\x02\u0231\u0228\x03\x02\x02\x02\u0231\u0229\x03\x02" +
		"\x02\x02\u0231\u022A\x03\x02\x02\x02\u0231\u022B\x03\x02\x02\x02\u0231" +
		"\u022C\x03\x02\x02\x02\u0231\u022D\x03\x02\x02\x02\u0231\u022E\x03\x02" +
		"\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0230\x03\x02\x02\x02\u0232" +
		"\x81\x03\x02\x02\x02\x1C\x85\xA1\xAA\xB5\u011D\u0143\u0146\u0149\u0154" +
		"\u0157\u015D\u017B\u017E\u0181\u018C\u018F\u0192\u019F\u01A2\u01A5\u01B2" +
		"\u01B5\u01B8\u01C8\u01CC\u0231";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TransactionManifestParser.__ATN) {
			TransactionManifestParser.__ATN = new ATNDeserializer().deserialize(
				Utils.toCharArray(TransactionManifestParser._serializedATN)
			);
		}

		return TransactionManifestParser.__ATN;
	}
}

export class ManifestContext extends ParserRuleContext {
	public EOF(): TerminalNode {
		return this.getToken(TransactionManifestParser.EOF, 0);
	}
	public manifestInstruction(): ManifestInstructionContext[];
	public manifestInstruction(i: number): ManifestInstructionContext;
	public manifestInstruction(
		i?: number
	): ManifestInstructionContext | ManifestInstructionContext[] {
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_manifest;
	}
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
	public callFunction(): CallFunctionContext | undefined {
		return this.tryGetRuleContext(0, CallFunctionContext);
	}
	public callMethod(): CallMethodContext | undefined {
		return this.tryGetRuleContext(0, CallMethodContext);
	}
	public returnToWorktop(): ReturnToWorktopContext | undefined {
		return this.tryGetRuleContext(0, ReturnToWorktopContext);
	}
	public takeFromWorktop(): TakeFromWorktopContext | undefined {
		return this.tryGetRuleContext(0, TakeFromWorktopContext);
	}
	public takeFromWorktopByAmount():
		| TakeFromWorktopByAmountContext
		| undefined {
		return this.tryGetRuleContext(0, TakeFromWorktopByAmountContext);
	}
	public takeFromWorktopByIds(): TakeFromWorktopByIdsContext | undefined {
		return this.tryGetRuleContext(0, TakeFromWorktopByIdsContext);
	}
	public assertWorktopContains(): AssertWorktopContainsContext | undefined {
		return this.tryGetRuleContext(0, AssertWorktopContainsContext);
	}
	public assertWorktopContainsByAmount():
		| AssertWorktopContainsByAmountContext
		| undefined {
		return this.tryGetRuleContext(0, AssertWorktopContainsByAmountContext);
	}
	public assertWorktopContainsByIds():
		| AssertWorktopContainsByIdsContext
		| undefined {
		return this.tryGetRuleContext(0, AssertWorktopContainsByIdsContext);
	}
	public popFromAuthZone(): PopFromAuthZoneContext | undefined {
		return this.tryGetRuleContext(0, PopFromAuthZoneContext);
	}
	public pushToAuthZone(): PushToAuthZoneContext | undefined {
		return this.tryGetRuleContext(0, PushToAuthZoneContext);
	}
	public createProofFromAuthZone():
		| CreateProofFromAuthZoneContext
		| undefined {
		return this.tryGetRuleContext(0, CreateProofFromAuthZoneContext);
	}
	public createProofFromAuthZoneByAmount():
		| CreateProofFromAuthZoneByAmountContext
		| undefined {
		return this.tryGetRuleContext(
			0,
			CreateProofFromAuthZoneByAmountContext
		);
	}
	public createProofFromAuthZoneByIds():
		| CreateProofFromAuthZoneByIdsContext
		| undefined {
		return this.tryGetRuleContext(0, CreateProofFromAuthZoneByIdsContext);
	}
	public createProofFromBucket(): CreateProofFromBucketContext | undefined {
		return this.tryGetRuleContext(0, CreateProofFromBucketContext);
	}
	public cloneProof(): CloneProofContext | undefined {
		return this.tryGetRuleContext(0, CloneProofContext);
	}
	public dropProof(): DropProofContext | undefined {
		return this.tryGetRuleContext(0, DropProofContext);
	}
	public dropAllProofs(): DropAllProofsContext | undefined {
		return this.tryGetRuleContext(0, DropAllProofsContext);
	}
	public clearAuthZone(): ClearAuthZoneContext | undefined {
		return this.tryGetRuleContext(0, ClearAuthZoneContext);
	}
	public publishPackage(): PublishPackageContext | undefined {
		return this.tryGetRuleContext(0, PublishPackageContext);
	}
	public createResource(): CreateResourceContext | undefined {
		return this.tryGetRuleContext(0, CreateResourceContext);
	}
	public burnBucket(): BurnBucketContext | undefined {
		return this.tryGetRuleContext(0, BurnBucketContext);
	}
	public mintFungible(): MintFungibleContext | undefined {
		return this.tryGetRuleContext(0, MintFungibleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_manifestInstruction;
	}
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

export class CallFunctionContext extends ParserRuleContext {
	public CALL_FUNCTION(): TerminalNode {
		return this.getToken(TransactionManifestParser.CALL_FUNCTION, 0);
	}
	public packageAddress(): PackageAddressContext {
		return this.getRuleContext(0, PackageAddressContext);
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
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_callFunction;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCallFunction) {
			listener.enterCallFunction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCallFunction) {
			listener.exitCallFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCallFunction) {
			return visitor.visitCallFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CallMethodContext extends ParserRuleContext {
	public CALL_METHOD(): TerminalNode {
		return this.getToken(TransactionManifestParser.CALL_METHOD, 0);
	}
	public componentAddress(): ComponentAddressContext {
		return this.getRuleContext(0, ComponentAddressContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_callMethod;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCallMethod) {
			listener.enterCallMethod(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCallMethod) {
			listener.exitCallMethod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCallMethod) {
			return visitor.visitCallMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TakeFromWorktopContext extends ParserRuleContext {
	public TAKE_FROM_WORKTOP(): TerminalNode {
		return this.getToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_takeFromWorktop;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterTakeFromWorktop) {
			listener.enterTakeFromWorktop(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitTakeFromWorktop) {
			listener.exitTakeFromWorktop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitTakeFromWorktop) {
			return visitor.visitTakeFromWorktop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TakeFromWorktopByAmountContext extends ParserRuleContext {
	public TAKE_FROM_WORKTOP_BY_AMOUNT(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT,
			0
		);
	}
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_takeFromWorktopByAmount;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterTakeFromWorktopByAmount) {
			listener.enterTakeFromWorktopByAmount(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitTakeFromWorktopByAmount) {
			listener.exitTakeFromWorktopByAmount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitTakeFromWorktopByAmount) {
			return visitor.visitTakeFromWorktopByAmount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TakeFromWorktopByIdsContext extends ParserRuleContext {
	public TAKE_FROM_WORKTOP_BY_IDS(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS,
			0
		);
	}
	public set(): SetContext {
		return this.getRuleContext(0, SetContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_takeFromWorktopByIds;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterTakeFromWorktopByIds) {
			listener.enterTakeFromWorktopByIds(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitTakeFromWorktopByIds) {
			listener.exitTakeFromWorktopByIds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitTakeFromWorktopByIds) {
			return visitor.visitTakeFromWorktopByIds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ReturnToWorktopContext extends ParserRuleContext {
	public RETURN_TO_WORKTOP(): TerminalNode {
		return this.getToken(TransactionManifestParser.RETURN_TO_WORKTOP, 0);
	}
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_returnToWorktop;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterReturnToWorktop) {
			listener.enterReturnToWorktop(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitReturnToWorktop) {
			listener.exitReturnToWorktop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitReturnToWorktop) {
			return visitor.visitReturnToWorktop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssertWorktopContainsContext extends ParserRuleContext {
	public ASSERT_WORKTOP_CONTAINS(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.ASSERT_WORKTOP_CONTAINS,
			0
		);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_assertWorktopContains;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterAssertWorktopContains) {
			listener.enterAssertWorktopContains(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitAssertWorktopContains) {
			listener.exitAssertWorktopContains(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitAssertWorktopContains) {
			return visitor.visitAssertWorktopContains(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssertWorktopContainsByAmountContext extends ParserRuleContext {
	public ASSERT_WORKTOP_CONTAINS_BY_AMOUNT(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT,
			0
		);
	}
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_assertWorktopContainsByAmount;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterAssertWorktopContainsByAmount) {
			listener.enterAssertWorktopContainsByAmount(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitAssertWorktopContainsByAmount) {
			listener.exitAssertWorktopContainsByAmount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitAssertWorktopContainsByAmount) {
			return visitor.visitAssertWorktopContainsByAmount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssertWorktopContainsByIdsContext extends ParserRuleContext {
	public ASSERT_WORKTOP_CONTAINS_BY_IDS(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS,
			0
		);
	}
	public set(): SetContext {
		return this.getRuleContext(0, SetContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_assertWorktopContainsByIds;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterAssertWorktopContainsByIds) {
			listener.enterAssertWorktopContainsByIds(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitAssertWorktopContainsByIds) {
			listener.exitAssertWorktopContainsByIds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitAssertWorktopContainsByIds) {
			return visitor.visitAssertWorktopContainsByIds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PopFromAuthZoneContext extends ParserRuleContext {
	public POP_FROM_AUTH_ZONE(): TerminalNode {
		return this.getToken(TransactionManifestParser.POP_FROM_AUTH_ZONE, 0);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_popFromAuthZone;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterPopFromAuthZone) {
			listener.enterPopFromAuthZone(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitPopFromAuthZone) {
			listener.exitPopFromAuthZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitPopFromAuthZone) {
			return visitor.visitPopFromAuthZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PushToAuthZoneContext extends ParserRuleContext {
	public PUSH_TO_AUTH_ZONE(): TerminalNode {
		return this.getToken(TransactionManifestParser.PUSH_TO_AUTH_ZONE, 0);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_pushToAuthZone;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterPushToAuthZone) {
			listener.enterPushToAuthZone(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitPushToAuthZone) {
			listener.exitPushToAuthZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitPushToAuthZone) {
			return visitor.visitPushToAuthZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CreateProofFromAuthZoneContext extends ParserRuleContext {
	public CREATE_PROOF_FROM_AUTH_ZONE(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE,
			0
		);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_createProofFromAuthZone;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCreateProofFromAuthZone) {
			listener.enterCreateProofFromAuthZone(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCreateProofFromAuthZone) {
			listener.exitCreateProofFromAuthZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCreateProofFromAuthZone) {
			return visitor.visitCreateProofFromAuthZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CreateProofFromAuthZoneByAmountContext extends ParserRuleContext {
	public CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT,
			0
		);
	}
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_createProofFromAuthZoneByAmount;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCreateProofFromAuthZoneByAmount) {
			listener.enterCreateProofFromAuthZoneByAmount(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCreateProofFromAuthZoneByAmount) {
			listener.exitCreateProofFromAuthZoneByAmount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCreateProofFromAuthZoneByAmount) {
			return visitor.visitCreateProofFromAuthZoneByAmount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CreateProofFromAuthZoneByIdsContext extends ParserRuleContext {
	public CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS,
			0
		);
	}
	public set(): SetContext {
		return this.getRuleContext(0, SetContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_createProofFromAuthZoneByIds;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCreateProofFromAuthZoneByIds) {
			listener.enterCreateProofFromAuthZoneByIds(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCreateProofFromAuthZoneByIds) {
			listener.exitCreateProofFromAuthZoneByIds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCreateProofFromAuthZoneByIds) {
			return visitor.visitCreateProofFromAuthZoneByIds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CreateProofFromBucketContext extends ParserRuleContext {
	public CREATE_PROOF_FROM_BUCKET(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.CREATE_PROOF_FROM_BUCKET,
			0
		);
	}
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_createProofFromBucket;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCreateProofFromBucket) {
			listener.enterCreateProofFromBucket(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCreateProofFromBucket) {
			listener.exitCreateProofFromBucket(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCreateProofFromBucket) {
			return visitor.visitCreateProofFromBucket(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CloneProofContext extends ParserRuleContext {
	public CLONE_PROOF(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLONE_PROOF, 0);
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
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_cloneProof;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCloneProof) {
			listener.enterCloneProof(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCloneProof) {
			listener.exitCloneProof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCloneProof) {
			return visitor.visitCloneProof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DropProofContext extends ParserRuleContext {
	public DROP_PROOF(): TerminalNode {
		return this.getToken(TransactionManifestParser.DROP_PROOF, 0);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_dropProof;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterDropProof) {
			listener.enterDropProof(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitDropProof) {
			listener.exitDropProof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitDropProof) {
			return visitor.visitDropProof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DropAllProofsContext extends ParserRuleContext {
	public DROP_ALL_PROOFS(): TerminalNode {
		return this.getToken(TransactionManifestParser.DROP_ALL_PROOFS, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_dropAllProofs;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterDropAllProofs) {
			listener.enterDropAllProofs(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitDropAllProofs) {
			listener.exitDropAllProofs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitDropAllProofs) {
			return visitor.visitDropAllProofs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClearAuthZoneContext extends ParserRuleContext {
	public CLEAR_AUTHZONE(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLEAR_AUTHZONE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_clearAuthZone;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterClearAuthZone) {
			listener.enterClearAuthZone(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitClearAuthZone) {
			listener.exitClearAuthZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitClearAuthZone) {
			return visitor.visitClearAuthZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PublishPackageContext extends ParserRuleContext {
	public PUBLISH_PACKAGE(): TerminalNode {
		return this.getToken(TransactionManifestParser.PUBLISH_PACKAGE, 0);
	}
	public blob(): BlobContext[];
	public blob(i: number): BlobContext;
	public blob(i?: number): BlobContext | BlobContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlobContext);
		} else {
			return this.getRuleContext(i, BlobContext);
		}
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_publishPackage;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterPublishPackage) {
			listener.enterPublishPackage(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitPublishPackage) {
			listener.exitPublishPackage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitPublishPackage) {
			return visitor.visitPublishPackage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BurnBucketContext extends ParserRuleContext {
	public BURN_BUCKET(): TerminalNode {
		return this.getToken(TransactionManifestParser.BURN_BUCKET, 0);
	}
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_burnBucket;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterBurnBucket) {
			listener.enterBurnBucket(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitBurnBucket) {
			listener.exitBurnBucket(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitBurnBucket) {
			return visitor.visitBurnBucket(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MintFungibleContext extends ParserRuleContext {
	public MINT_FUNGIBLE(): TerminalNode {
		return this.getToken(TransactionManifestParser.MINT_FUNGIBLE, 0);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_mintFungible;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterMintFungible) {
			listener.enterMintFungible(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitMintFungible) {
			listener.exitMintFungible(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitMintFungible) {
			return visitor.visitMintFungible(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CreateResourceContext extends ParserRuleContext {
	public CREATE_RESOURCE(): TerminalNode {
		return this.getToken(TransactionManifestParser.CREATE_RESOURCE, 0);
	}
	public enum_(): Enum_Context {
		return this.getRuleContext(0, Enum_Context);
	}
	public map(): MapContext[];
	public map(i: number): MapContext;
	public map(i?: number): MapContext | MapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapContext);
		} else {
			return this.getRuleContext(i, MapContext);
		}
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(TransactionManifestParser.SEMICOLON, 0);
	}
	public option(): OptionContext | undefined {
		return this.tryGetRuleContext(0, OptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_createResource;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCreateResource) {
			listener.enterCreateResource(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCreateResource) {
			listener.exitCreateResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCreateResource) {
			return visitor.visitCreateResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnitContext extends ParserRuleContext {
	public EMPTY_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_unit;
	}
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
	public BOOL_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.BOOL_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_bool;
	}
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
	public I8_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.I8_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_i8;
	}
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
	public I16_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.I16_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_i16;
	}
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
	public I32_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.I32_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_i32;
	}
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
	public I64_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.I64_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_i64;
	}
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
	public I128_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.I128_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_i128;
	}
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
	public U8_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.U8_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_u8;
	}
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
	public U16_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.U16_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_u16;
	}
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
	public U32_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.U32_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_u32;
	}
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
	public U64_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.U64_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_u64;
	}
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
	public U128_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.U128_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_u128;
	}
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
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_string;
	}
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
	public STRUCT_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRUCT_TYPE, 0);
	}
	public EMPTY_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_struct;
	}
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
	public ENUM_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.ENUM_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_enum_;
	}
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_option;
	}
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
	public SOME_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.SOME_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_some;
	}
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
	public NONE_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.NONE_TYPE, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_none;
	}
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
	public OK_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.OK_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_ok;
	}
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
	public ERR_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.ERR_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_err;
	}
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
	public ARRAY_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.ARRAY_TYPE, 0);
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(TransactionManifestParser.LESS_THAN, 0);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(TransactionManifestParser.GREATER_THAN, 0);
	}
	public EMPTY_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_array;
	}
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
	public TUPLE_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.TUPLE_TYPE, 0);
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(TransactionManifestParser.LESS_THAN, 0);
	}
	public EMPTY_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_tuple;
	}
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
	public LIST_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.LIST_TYPE, 0);
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(TransactionManifestParser.LESS_THAN, 0);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(TransactionManifestParser.GREATER_THAN, 0);
	}
	public EMPTY_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_list;
	}
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
	public SET_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.SET_TYPE, 0);
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(TransactionManifestParser.LESS_THAN, 0);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(TransactionManifestParser.GREATER_THAN, 0);
	}
	public EMPTY_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_set;
	}
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
	public MAP_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.MAP_TYPE, 0);
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(TransactionManifestParser.LESS_THAN, 0);
	}
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
	public GREATER_THAN(): TerminalNode {
		return this.getToken(TransactionManifestParser.GREATER_THAN, 0);
	}
	public EMPTY_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
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
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_map;
	}
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
	public DECIMAL_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.DECIMAL_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_decimal;
	}
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
	public PRECISE_DECIMAL_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_preciseDecimal;
	}
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
	public PACKAGE_ADDRESS_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_packageAddress;
	}
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
	public COMPONENT_ADDRESS_TYPE(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.COMPONENT_ADDRESS_TYPE,
			0
		);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_componentAddress;
	}
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
	public RESOURCE_ADDRESS_TYPE(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.RESOURCE_ADDRESS_TYPE,
			0
		);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_resourceAddress;
	}
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
	public HASH_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.HASH_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_hash;
	}
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
	public BUCKET_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.BUCKET_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public U32_LITERAL(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.U32_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_bucket;
	}
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
	public PROOF_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.PROOF_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public U32_LITERAL(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.U32_LITERAL, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_proof;
	}
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

export class NonFungibleIdContext extends ParserRuleContext {
	public NON_FUNGIBLE_ID_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_nonFungibleId;
	}
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

export class NonFungibleAddressContext extends ParserRuleContext {
	public NON_FUNGIBLE_ADDRESS_TYPE(): TerminalNode {
		return this.getToken(
			TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE,
			0
		);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_nonFungibleAddress;
	}
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

export class BlobContext extends ParserRuleContext {
	public BLOB_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.BLOB_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_blob;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterBlob) {
			listener.enterBlob(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitBlob) {
			listener.exitBlob(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitBlob) {
			return visitor.visitBlob(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionContext extends ParserRuleContext {
	public EXPRESSION_TYPE(): TerminalNode {
		return this.getToken(TransactionManifestParser.EXPRESSION_TYPE, 0);
	}
	public OPEN_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
	}
	public CLOED_PARENTHESIS(): TerminalNode {
		return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_expression;
	}
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeContext extends ParserRuleContext {
	public UNIT_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.UNIT_TYPE, 0);
	}
	public BOOL_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.BOOL_TYPE, 0);
	}
	public I8_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.I8_TYPE, 0);
	}
	public I16_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.I16_TYPE, 0);
	}
	public I32_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.I32_TYPE, 0);
	}
	public I64_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.I64_TYPE, 0);
	}
	public I128_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.I128_TYPE, 0);
	}
	public U8_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.U8_TYPE, 0);
	}
	public U16_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.U16_TYPE, 0);
	}
	public U32_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.U32_TYPE, 0);
	}
	public U64_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.U64_TYPE, 0);
	}
	public U128_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.U128_TYPE, 0);
	}
	public STRING_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.STRING_TYPE, 0);
	}
	public STRUCT_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.STRUCT_TYPE, 0);
	}
	public ENUM_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.ENUM_TYPE, 0);
	}
	public OPTION_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.OPTION_TYPE, 0);
	}
	public RESULT_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.RESULT_TYPE, 0);
	}
	public SOME_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.SOME_TYPE, 0);
	}
	public NONE_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.NONE_TYPE, 0);
	}
	public OK_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.OK_TYPE, 0);
	}
	public ERR_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.ERR_TYPE, 0);
	}
	public ARRAY_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.ARRAY_TYPE, 0);
	}
	public TUPLE_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.TUPLE_TYPE, 0);
	}
	public LIST_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.LIST_TYPE, 0);
	}
	public SET_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.SET_TYPE, 0);
	}
	public MAP_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.MAP_TYPE, 0);
	}
	public DECIMAL_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.DECIMAL_TYPE, 0);
	}
	public PRECISE_DECIMAL_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(
			TransactionManifestParser.PRECISE_DECIMAL_TYPE,
			0
		);
	}
	public PACKAGE_ADDRESS_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(
			TransactionManifestParser.PACKAGE_ADDRESS_TYPE,
			0
		);
	}
	public COMPONENT_ADDRESS_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(
			TransactionManifestParser.COMPONENT_ADDRESS_TYPE,
			0
		);
	}
	public RESOURCE_ADDRESS_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(
			TransactionManifestParser.RESOURCE_ADDRESS_TYPE,
			0
		);
	}
	public HASH_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.HASH_TYPE, 0);
	}
	public BUCKET_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.BUCKET_TYPE, 0);
	}
	public PROOF_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.PROOF_TYPE, 0);
	}
	public NON_FUNGIBLE_ID_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(
			TransactionManifestParser.NON_FUNGIBLE_ID_TYPE,
			0
		);
	}
	public NON_FUNGIBLE_ADDRESS_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(
			TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE,
			0
		);
	}
	public BLOB_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.BLOB_TYPE, 0);
	}
	public EXPRESSION_TYPE(): TerminalNode | undefined {
		return this.tryGetToken(TransactionManifestParser.EXPRESSION_TYPE, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_type;
	}
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
	public nonFungibleId(): NonFungibleIdContext | undefined {
		return this.tryGetRuleContext(0, NonFungibleIdContext);
	}
	public nonFungibleAddress(): NonFungibleAddressContext | undefined {
		return this.tryGetRuleContext(0, NonFungibleAddressContext);
	}
	public blob(): BlobContext | undefined {
		return this.tryGetRuleContext(0, BlobContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return TransactionManifestParser.RULE_value;
	}
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
