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
	public static readonly BOOL_LITERAL = 14;
	public static readonly I8_LITERAL = 15;
	public static readonly I16_LITERAL = 16;
	public static readonly I32_LITERAL = 17;
	public static readonly I64_LITERAL = 18;
	public static readonly I128_LITERAL = 19;
	public static readonly U8_LITERAL = 20;
	public static readonly U16_LITERAL = 21;
	public static readonly U32_LITERAL = 22;
	public static readonly U64_LITERAL = 23;
	public static readonly U128_LITERAL = 24;
	public static readonly TRUE = 25;
	public static readonly FALSE = 26;
	public static readonly UNIT_TYPE = 27;
	public static readonly BOOL_TYPE = 28;
	public static readonly I8_TYPE = 29;
	public static readonly I16_TYPE = 30;
	public static readonly I32_TYPE = 31;
	public static readonly I64_TYPE = 32;
	public static readonly I128_TYPE = 33;
	public static readonly U8_TYPE = 34;
	public static readonly U16_TYPE = 35;
	public static readonly U32_TYPE = 36;
	public static readonly U64_TYPE = 37;
	public static readonly U128_TYPE = 38;
	public static readonly STRING_TYPE = 39;
	public static readonly ENUM_TYPE = 40;
	public static readonly ARRAY_TYPE = 41;
	public static readonly TUPLE_TYPE = 42;
	public static readonly BYTES_TYPE = 43;
	public static readonly PACKAGE_ADDRESS_TYPE = 44;
	public static readonly COMPONENT_ADDRESS_TYPE = 45;
	public static readonly RESOURCE_ADDRESS_TYPE = 46;
	public static readonly SYSTEM_ADDRESS_TYPE = 47;
	public static readonly COMPONENT_TYPE = 48;
	public static readonly KEY_VALUE_STORE_TYPE = 49;
	public static readonly BUCKET_TYPE = 50;
	public static readonly PROOF_TYPE = 51;
	public static readonly VAULT_TYPE = 52;
	public static readonly EXPRESSION_TYPE = 53;
	public static readonly BLOB_TYPE = 54;
	public static readonly NON_FUNGIBLE_ADDRESS_TYPE = 55;
	public static readonly HASH_TYPE = 56;
	public static readonly ECDSA_SECP256K1_PUBLIC_KEY_TYPE = 57;
	public static readonly ECDSA_SECP256K1_SIGNATURE_TYPE = 58;
	public static readonly EDDSA_ED25519_PUBLIC_KEY_TYPE = 59;
	public static readonly EDDSA_ED25519_SIGNATURE_TYPE = 60;
	public static readonly DECIMAL_TYPE = 61;
	public static readonly PRECISE_DECIMAL_TYPE = 62;
	public static readonly NON_FUNGIBLE_ID_TYPE = 63;
	public static readonly OPEN_PARENTHESIS = 64;
	public static readonly CLOED_PARENTHESIS = 65;
	public static readonly EMPTY_PARENTHESIS = 66;
	public static readonly LESS_THAN = 67;
	public static readonly GREATER_THAN = 68;
	public static readonly COMMA = 69;
	public static readonly SEMICOLON = 70;
	public static readonly TAKE_FROM_WORKTOP = 71;
	public static readonly TAKE_FROM_WORKTOP_BY_AMOUNT = 72;
	public static readonly TAKE_FROM_WORKTOP_BY_IDS = 73;
	public static readonly ASSERT_WORKTOP_CONTAINS = 74;
	public static readonly ASSERT_WORKTOP_CONTAINS_BY_AMOUNT = 75;
	public static readonly ASSERT_WORKTOP_CONTAINS_BY_IDS = 76;
	public static readonly RETURN_TO_WORKTOP = 77;
	public static readonly POP_FROM_AUTH_ZONE = 78;
	public static readonly PUSH_TO_AUTH_ZONE = 79;
	public static readonly CLEAR_AUTHZONE = 80;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE = 81;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT = 82;
	public static readonly CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS = 83;
	public static readonly CREATE_PROOF_FROM_BUCKET = 84;
	public static readonly CLONE_PROOF = 85;
	public static readonly DROP_PROOF = 86;
	public static readonly DROP_ALL_PROOFS = 87;
	public static readonly CALL_FUNCTION = 88;
	public static readonly CALL_METHOD = 89;
	public static readonly CALL_NATIVE_FUNCTION = 90;
	public static readonly CALL_NATIVE_METHOD = 91;
	public static readonly PUBLISH_PACKAGE_WITH_OWNER = 92;
	public static readonly BURN_BUCKET = 93;
	public static readonly MINT_FUNGIBLE = 94;
	public static readonly CREATE_RESOURCE = 95;
	public static readonly STRING_LITERAL = 96;
	public static readonly DIGIT = 97;
	public static readonly LETTER = 98;
	public static readonly NUMBER = 99;
	public static readonly WS = 100;
	public static readonly COMMENT = 101;
	public static readonly RULE_manifest = 0;
	public static readonly RULE_manifestInstruction = 1;
	public static readonly RULE_callFunction = 2;
	public static readonly RULE_callNativeFunction = 3;
	public static readonly RULE_callMethod = 4;
	public static readonly RULE_callNativeMethod = 5;
	public static readonly RULE_takeFromWorktop = 6;
	public static readonly RULE_takeFromWorktopByAmount = 7;
	public static readonly RULE_takeFromWorktopByIds = 8;
	public static readonly RULE_returnToWorktop = 9;
	public static readonly RULE_assertWorktopContains = 10;
	public static readonly RULE_assertWorktopContainsByAmount = 11;
	public static readonly RULE_assertWorktopContainsByIds = 12;
	public static readonly RULE_popFromAuthZone = 13;
	public static readonly RULE_pushToAuthZone = 14;
	public static readonly RULE_createProofFromAuthZone = 15;
	public static readonly RULE_createProofFromAuthZoneByAmount = 16;
	public static readonly RULE_createProofFromAuthZoneByIds = 17;
	public static readonly RULE_createProofFromBucket = 18;
	public static readonly RULE_cloneProof = 19;
	public static readonly RULE_dropProof = 20;
	public static readonly RULE_dropAllProofs = 21;
	public static readonly RULE_clearAuthZone = 22;
	public static readonly RULE_publishPackageWithOwner = 23;
	public static readonly RULE_burnBucket = 24;
	public static readonly RULE_mintFungible = 25;
	public static readonly RULE_createResource = 26;
	public static readonly RULE_unit = 27;
	public static readonly RULE_bool = 28;
	public static readonly RULE_i8 = 29;
	public static readonly RULE_i16 = 30;
	public static readonly RULE_i32 = 31;
	public static readonly RULE_i64 = 32;
	public static readonly RULE_i128 = 33;
	public static readonly RULE_u8 = 34;
	public static readonly RULE_u16 = 35;
	public static readonly RULE_u32 = 36;
	public static readonly RULE_u64 = 37;
	public static readonly RULE_u128 = 38;
	public static readonly RULE_string = 39;
	public static readonly RULE_enum_ = 40;
	public static readonly RULE_option = 41;
	public static readonly RULE_some = 42;
	public static readonly RULE_none = 43;
	public static readonly RULE_ok = 44;
	public static readonly RULE_err = 45;
	public static readonly RULE_array = 46;
	public static readonly RULE_tuple = 47;
	public static readonly RULE_decimal = 48;
	public static readonly RULE_preciseDecimal = 49;
	public static readonly RULE_packageAddress = 50;
	public static readonly RULE_componentAddress = 51;
	public static readonly RULE_resourceAddress = 52;
	public static readonly RULE_systemAddress = 53;
	public static readonly RULE_hash = 54;
	public static readonly RULE_bytes = 55;
	public static readonly RULE_component = 56;
	public static readonly RULE_vault = 57;
	public static readonly RULE_keyValueStore = 58;
	public static readonly RULE_bucket = 59;
	public static readonly RULE_proof = 60;
	public static readonly RULE_nonFungibleId = 61;
	public static readonly RULE_nonFungibleAddress = 62;
	public static readonly RULE_blob = 63;
	public static readonly RULE_ecdsaSecp256k1PublicKey = 64;
	public static readonly RULE_ecdsaSecp256k1Signature = 65;
	public static readonly RULE_eddsaEd25519PublicKey = 66;
	public static readonly RULE_eddsaEd25519Signature = 67;
	public static readonly RULE_expression = 68;
	public static readonly RULE_type = 69;
	public static readonly RULE_non_fungible_id_values = 70;
	public static readonly RULE_value = 71;
	public static readonly RULE_re_node_id = 72;
	public static readonly RULE_worktop = 73;
	public static readonly RULE_authZoneStack = 74;
	public static readonly RULE_feeReserve = 75;
	public static readonly RULE_global = 76;
	public static readonly RULE_nonFungibleStore = 77;
	public static readonly RULE_resourceManager = 78;
	public static readonly RULE_package_ = 79;
	public static readonly RULE_epochManager = 80;
	public static readonly RULE_clock = 81;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"manifest", "manifestInstruction", "callFunction", "callNativeFunction", 
		"callMethod", "callNativeMethod", "takeFromWorktop", "takeFromWorktopByAmount", 
		"takeFromWorktopByIds", "returnToWorktop", "assertWorktopContains", "assertWorktopContainsByAmount", 
		"assertWorktopContainsByIds", "popFromAuthZone", "pushToAuthZone", "createProofFromAuthZone", 
		"createProofFromAuthZoneByAmount", "createProofFromAuthZoneByIds", "createProofFromBucket", 
		"cloneProof", "dropProof", "dropAllProofs", "clearAuthZone", "publishPackageWithOwner", 
		"burnBucket", "mintFungible", "createResource", "unit", "bool", "i8", 
		"i16", "i32", "i64", "i128", "u8", "u16", "u32", "u64", "u128", "string", 
		"enum_", "option", "some", "none", "ok", "err", "array", "tuple", "decimal", 
		"preciseDecimal", "packageAddress", "componentAddress", "resourceAddress", 
		"systemAddress", "hash", "bytes", "component", "vault", "keyValueStore", 
		"bucket", "proof", "nonFungibleId", "nonFungibleAddress", "blob", "ecdsaSecp256k1PublicKey", 
		"ecdsaSecp256k1Signature", "eddsaEd25519PublicKey", "eddsaEd25519Signature", 
		"expression", "type", "non_fungible_id_values", "value", "re_node_id", 
		"worktop", "authZoneStack", "feeReserve", "global", "nonFungibleStore", 
		"resourceManager", "package_", "epochManager", "clock",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'Some'", "'None'", "'Ok'", "'Err'", "'Worktop'", "'AuthZoneStack'", 
		"'FeeReserve'", "'Global'", "'NonFungibleStore'", "'ResourceManager'", 
		"'Package'", "'EpochManager'", "'Clock'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'true'", "'false'", "'Unit'", "'Bool'", "'I8'", "'I16'", "'I32'", 
		"'I64'", "'I128'", "'U8'", "'U16'", "'U32'", "'U64'", "'U128'", "'String'", 
		"'Enum'", "'Array'", "'Tuple'", "'Bytes'", "'PackageAddress'", "'ComponentAddress'", 
		"'ResourceAddress'", "'SystemAddress'", "'Component'", "'KeyValueStore'", 
		"'Bucket'", "'Proof'", "'Vault'", "'Expression'", "'Blob'", "'NonFungibleAddress'", 
		"'Hash'", "'EcdsaSecp256K1PublicKey'", "'EcdsaSecp256K1Signature'", "'EddsaEd25519PublicKey'", 
		"'EddsaEd25519Signature'", "'Decimal'", "'PreciseDecimal'", "'NonFungibleId'", 
		"'('", "')'", "'()'", "'<'", "'>'", "','", "';'", "'TAKE_FROM_WORKTOP'", 
		"'TAKE_FROM_WORKTOP_BY_AMOUNT'", "'TAKE_FROM_WORKTOP_BY_IDS'", "'ASSERT_WORKTOP_CONTAINS'", 
		"'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT'", "'ASSERT_WORKTOP_CONTAINS_BY_IDS'", 
		"'RETURN_TO_WORKTOP'", "'POP_FROM_AUTH_ZONE'", "'PUSH_TO_AUTH_ZONE'", 
		"'CLEAR_AUTHZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT'", 
		"'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS'", "'CREATE_PROOF_FROM_BUCKET'", 
		"'CLONE_PROOF'", "'DROP_PROOF'", "'DROP_ALL_PROOFS'", "'CALL_FUNCTION'", 
		"'CALL_METHOD'", "'CALL_NATIVE_FUNCTION'", "'CALL_NATIVE_METHOD'", "'PUBLISH_PACKAGE_WITH_OWNER'", 
		"'BURN_BUCKET'", "'MINT_FUNGIBLE'", "'CREATE_RESOURCE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"BOOL_LITERAL", "I8_LITERAL", "I16_LITERAL", "I32_LITERAL", "I64_LITERAL", 
		"I128_LITERAL", "U8_LITERAL", "U16_LITERAL", "U32_LITERAL", "U64_LITERAL", 
		"U128_LITERAL", "TRUE", "FALSE", "UNIT_TYPE", "BOOL_TYPE", "I8_TYPE", 
		"I16_TYPE", "I32_TYPE", "I64_TYPE", "I128_TYPE", "U8_TYPE", "U16_TYPE", 
		"U32_TYPE", "U64_TYPE", "U128_TYPE", "STRING_TYPE", "ENUM_TYPE", "ARRAY_TYPE", 
		"TUPLE_TYPE", "BYTES_TYPE", "PACKAGE_ADDRESS_TYPE", "COMPONENT_ADDRESS_TYPE", 
		"RESOURCE_ADDRESS_TYPE", "SYSTEM_ADDRESS_TYPE", "COMPONENT_TYPE", "KEY_VALUE_STORE_TYPE", 
		"BUCKET_TYPE", "PROOF_TYPE", "VAULT_TYPE", "EXPRESSION_TYPE", "BLOB_TYPE", 
		"NON_FUNGIBLE_ADDRESS_TYPE", "HASH_TYPE", "ECDSA_SECP256K1_PUBLIC_KEY_TYPE", 
		"ECDSA_SECP256K1_SIGNATURE_TYPE", "EDDSA_ED25519_PUBLIC_KEY_TYPE", "EDDSA_ED25519_SIGNATURE_TYPE", 
		"DECIMAL_TYPE", "PRECISE_DECIMAL_TYPE", "NON_FUNGIBLE_ID_TYPE", "OPEN_PARENTHESIS", 
		"CLOED_PARENTHESIS", "EMPTY_PARENTHESIS", "LESS_THAN", "GREATER_THAN", 
		"COMMA", "SEMICOLON", "TAKE_FROM_WORKTOP", "TAKE_FROM_WORKTOP_BY_AMOUNT", 
		"TAKE_FROM_WORKTOP_BY_IDS", "ASSERT_WORKTOP_CONTAINS", "ASSERT_WORKTOP_CONTAINS_BY_AMOUNT", 
		"ASSERT_WORKTOP_CONTAINS_BY_IDS", "RETURN_TO_WORKTOP", "POP_FROM_AUTH_ZONE", 
		"PUSH_TO_AUTH_ZONE", "CLEAR_AUTHZONE", "CREATE_PROOF_FROM_AUTH_ZONE", 
		"CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT", "CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS", 
		"CREATE_PROOF_FROM_BUCKET", "CLONE_PROOF", "DROP_PROOF", "DROP_ALL_PROOFS", 
		"CALL_FUNCTION", "CALL_METHOD", "CALL_NATIVE_FUNCTION", "CALL_NATIVE_METHOD", 
		"PUBLISH_PACKAGE_WITH_OWNER", "BURN_BUCKET", "MINT_FUNGIBLE", "CREATE_RESOURCE", 
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
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (TransactionManifestParser.TAKE_FROM_WORKTOP - 71)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT - 71)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS - 71)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS - 71)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 71)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS - 71)) | (1 << (TransactionManifestParser.RETURN_TO_WORKTOP - 71)) | (1 << (TransactionManifestParser.POP_FROM_AUTH_ZONE - 71)) | (1 << (TransactionManifestParser.PUSH_TO_AUTH_ZONE - 71)) | (1 << (TransactionManifestParser.CLEAR_AUTHZONE - 71)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE - 71)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 71)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 71)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_BUCKET - 71)) | (1 << (TransactionManifestParser.CLONE_PROOF - 71)) | (1 << (TransactionManifestParser.DROP_PROOF - 71)) | (1 << (TransactionManifestParser.DROP_ALL_PROOFS - 71)) | (1 << (TransactionManifestParser.CALL_FUNCTION - 71)) | (1 << (TransactionManifestParser.CALL_METHOD - 71)) | (1 << (TransactionManifestParser.CALL_NATIVE_FUNCTION - 71)) | (1 << (TransactionManifestParser.CALL_NATIVE_METHOD - 71)) | (1 << (TransactionManifestParser.PUBLISH_PACKAGE_WITH_OWNER - 71)) | (1 << (TransactionManifestParser.BURN_BUCKET - 71)) | (1 << (TransactionManifestParser.MINT_FUNGIBLE - 71)) | (1 << (TransactionManifestParser.CREATE_RESOURCE - 71)))) !== 0)) {
				{
				{
				this.state = 164;
				this.manifestInstruction();
				}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 170;
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
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.CALL_FUNCTION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 172;
				this.callFunction();
				}
				break;
			case TransactionManifestParser.CALL_NATIVE_FUNCTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 173;
				this.callNativeFunction();
				}
				break;
			case TransactionManifestParser.CALL_METHOD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 174;
				this.callMethod();
				}
				break;
			case TransactionManifestParser.CALL_NATIVE_METHOD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 175;
				this.callNativeMethod();
				}
				break;
			case TransactionManifestParser.TAKE_FROM_WORKTOP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 176;
				this.takeFromWorktop();
				}
				break;
			case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 177;
				this.takeFromWorktopByAmount();
				}
				break;
			case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 178;
				this.takeFromWorktopByIds();
				}
				break;
			case TransactionManifestParser.RETURN_TO_WORKTOP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 179;
				this.returnToWorktop();
				}
				break;
			case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 180;
				this.assertWorktopContains();
				}
				break;
			case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 181;
				this.assertWorktopContainsByAmount();
				}
				break;
			case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 182;
				this.assertWorktopContainsByIds();
				}
				break;
			case TransactionManifestParser.POP_FROM_AUTH_ZONE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 183;
				this.popFromAuthZone();
				}
				break;
			case TransactionManifestParser.PUSH_TO_AUTH_ZONE:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 184;
				this.pushToAuthZone();
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 185;
				this.createProofFromAuthZone();
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 186;
				this.createProofFromAuthZoneByAmount();
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 187;
				this.createProofFromAuthZoneByIds();
				}
				break;
			case TransactionManifestParser.CREATE_PROOF_FROM_BUCKET:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 188;
				this.createProofFromBucket();
				}
				break;
			case TransactionManifestParser.CLONE_PROOF:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 189;
				this.cloneProof();
				}
				break;
			case TransactionManifestParser.DROP_PROOF:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 190;
				this.dropProof();
				}
				break;
			case TransactionManifestParser.DROP_ALL_PROOFS:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 191;
				this.dropAllProofs();
				}
				break;
			case TransactionManifestParser.CLEAR_AUTHZONE:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 192;
				this.clearAuthZone();
				}
				break;
			case TransactionManifestParser.PUBLISH_PACKAGE_WITH_OWNER:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 193;
				this.publishPackageWithOwner();
				}
				break;
			case TransactionManifestParser.BURN_BUCKET:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 194;
				this.burnBucket();
				}
				break;
			case TransactionManifestParser.MINT_FUNGIBLE:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 195;
				this.mintFungible();
				}
				break;
			case TransactionManifestParser.CREATE_RESOURCE:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 196;
				this.createResource();
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
	public callFunction(): CallFunctionContext {
		let _localctx: CallFunctionContext = new CallFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TransactionManifestParser.RULE_callFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(TransactionManifestParser.CALL_FUNCTION);
			this.state = 200;
			this.packageAddress();
			this.state = 201;
			this.string();
			this.state = 202;
			this.string();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.T__1) | (1 << TransactionManifestParser.T__2) | (1 << TransactionManifestParser.T__3) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (TransactionManifestParser.ENUM_TYPE - 40)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 40)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 40)) | (1 << (TransactionManifestParser.BYTES_TYPE - 40)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.SYSTEM_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_TYPE - 40)) | (1 << (TransactionManifestParser.KEY_VALUE_STORE_TYPE - 40)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 40)) | (1 << (TransactionManifestParser.PROOF_TYPE - 40)) | (1 << (TransactionManifestParser.VAULT_TYPE - 40)) | (1 << (TransactionManifestParser.EXPRESSION_TYPE - 40)) | (1 << (TransactionManifestParser.BLOB_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.HASH_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 40)) | (1 << (TransactionManifestParser.EMPTY_PARENTHESIS - 40)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				{
				this.state = 203;
				this.value();
				}
				}
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 209;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public callNativeFunction(): CallNativeFunctionContext {
		let _localctx: CallNativeFunctionContext = new CallNativeFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TransactionManifestParser.RULE_callNativeFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(TransactionManifestParser.CALL_NATIVE_FUNCTION);
			this.state = 212;
			this.string();
			this.state = 213;
			this.string();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.T__1) | (1 << TransactionManifestParser.T__2) | (1 << TransactionManifestParser.T__3) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (TransactionManifestParser.ENUM_TYPE - 40)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 40)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 40)) | (1 << (TransactionManifestParser.BYTES_TYPE - 40)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.SYSTEM_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_TYPE - 40)) | (1 << (TransactionManifestParser.KEY_VALUE_STORE_TYPE - 40)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 40)) | (1 << (TransactionManifestParser.PROOF_TYPE - 40)) | (1 << (TransactionManifestParser.VAULT_TYPE - 40)) | (1 << (TransactionManifestParser.EXPRESSION_TYPE - 40)) | (1 << (TransactionManifestParser.BLOB_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.HASH_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 40)) | (1 << (TransactionManifestParser.EMPTY_PARENTHESIS - 40)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				{
				this.state = 214;
				this.value();
				}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 220;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public callMethod(): CallMethodContext {
		let _localctx: CallMethodContext = new CallMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TransactionManifestParser.RULE_callMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(TransactionManifestParser.CALL_METHOD);
			this.state = 225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.COMPONENT_ADDRESS_TYPE:
				{
				this.state = 223;
				this.componentAddress();
				}
				break;
			case TransactionManifestParser.COMPONENT_TYPE:
				{
				this.state = 224;
				this.component();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 227;
			this.string();
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.T__1) | (1 << TransactionManifestParser.T__2) | (1 << TransactionManifestParser.T__3) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (TransactionManifestParser.ENUM_TYPE - 40)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 40)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 40)) | (1 << (TransactionManifestParser.BYTES_TYPE - 40)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.SYSTEM_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_TYPE - 40)) | (1 << (TransactionManifestParser.KEY_VALUE_STORE_TYPE - 40)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 40)) | (1 << (TransactionManifestParser.PROOF_TYPE - 40)) | (1 << (TransactionManifestParser.VAULT_TYPE - 40)) | (1 << (TransactionManifestParser.EXPRESSION_TYPE - 40)) | (1 << (TransactionManifestParser.BLOB_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.HASH_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 40)) | (1 << (TransactionManifestParser.EMPTY_PARENTHESIS - 40)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				{
				this.state = 228;
				this.value();
				}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 234;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public callNativeMethod(): CallNativeMethodContext {
		let _localctx: CallNativeMethodContext = new CallNativeMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TransactionManifestParser.RULE_callNativeMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(TransactionManifestParser.CALL_NATIVE_METHOD);
			this.state = 237;
			this.re_node_id();
			this.state = 238;
			this.string();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.T__1) | (1 << TransactionManifestParser.T__2) | (1 << TransactionManifestParser.T__3) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (TransactionManifestParser.ENUM_TYPE - 40)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 40)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 40)) | (1 << (TransactionManifestParser.BYTES_TYPE - 40)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.SYSTEM_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_TYPE - 40)) | (1 << (TransactionManifestParser.KEY_VALUE_STORE_TYPE - 40)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 40)) | (1 << (TransactionManifestParser.PROOF_TYPE - 40)) | (1 << (TransactionManifestParser.VAULT_TYPE - 40)) | (1 << (TransactionManifestParser.EXPRESSION_TYPE - 40)) | (1 << (TransactionManifestParser.BLOB_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.HASH_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 40)) | (1 << (TransactionManifestParser.EMPTY_PARENTHESIS - 40)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
				{
				{
				this.state = 239;
				this.value();
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 245;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public takeFromWorktop(): TakeFromWorktopContext {
		let _localctx: TakeFromWorktopContext = new TakeFromWorktopContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TransactionManifestParser.RULE_takeFromWorktop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(TransactionManifestParser.TAKE_FROM_WORKTOP);
			this.state = 248;
			this.resourceAddress();
			this.state = 249;
			this.bucket();
			this.state = 250;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public takeFromWorktopByAmount(): TakeFromWorktopByAmountContext {
		let _localctx: TakeFromWorktopByAmountContext = new TakeFromWorktopByAmountContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TransactionManifestParser.RULE_takeFromWorktopByAmount);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT);
			this.state = 253;
			this.decimal();
			this.state = 254;
			this.resourceAddress();
			this.state = 255;
			this.bucket();
			this.state = 256;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public takeFromWorktopByIds(): TakeFromWorktopByIdsContext {
		let _localctx: TakeFromWorktopByIdsContext = new TakeFromWorktopByIdsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TransactionManifestParser.RULE_takeFromWorktopByIds);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS);
			this.state = 259;
			this.array();
			this.state = 260;
			this.resourceAddress();
			this.state = 261;
			this.bucket();
			this.state = 262;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public returnToWorktop(): ReturnToWorktopContext {
		let _localctx: ReturnToWorktopContext = new ReturnToWorktopContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TransactionManifestParser.RULE_returnToWorktop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(TransactionManifestParser.RETURN_TO_WORKTOP);
			this.state = 265;
			this.bucket();
			this.state = 266;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public assertWorktopContains(): AssertWorktopContainsContext {
		let _localctx: AssertWorktopContainsContext = new AssertWorktopContainsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TransactionManifestParser.RULE_assertWorktopContains);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS);
			this.state = 269;
			this.resourceAddress();
			this.state = 270;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public assertWorktopContainsByAmount(): AssertWorktopContainsByAmountContext {
		let _localctx: AssertWorktopContainsByAmountContext = new AssertWorktopContainsByAmountContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TransactionManifestParser.RULE_assertWorktopContainsByAmount);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
			this.state = 273;
			this.decimal();
			this.state = 274;
			this.resourceAddress();
			this.state = 275;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public assertWorktopContainsByIds(): AssertWorktopContainsByIdsContext {
		let _localctx: AssertWorktopContainsByIdsContext = new AssertWorktopContainsByIdsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TransactionManifestParser.RULE_assertWorktopContainsByIds);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS);
			this.state = 278;
			this.array();
			this.state = 279;
			this.resourceAddress();
			this.state = 280;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public popFromAuthZone(): PopFromAuthZoneContext {
		let _localctx: PopFromAuthZoneContext = new PopFromAuthZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TransactionManifestParser.RULE_popFromAuthZone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(TransactionManifestParser.POP_FROM_AUTH_ZONE);
			this.state = 283;
			this.proof();
			this.state = 284;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public pushToAuthZone(): PushToAuthZoneContext {
		let _localctx: PushToAuthZoneContext = new PushToAuthZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TransactionManifestParser.RULE_pushToAuthZone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.match(TransactionManifestParser.PUSH_TO_AUTH_ZONE);
			this.state = 287;
			this.proof();
			this.state = 288;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public createProofFromAuthZone(): CreateProofFromAuthZoneContext {
		let _localctx: CreateProofFromAuthZoneContext = new CreateProofFromAuthZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TransactionManifestParser.RULE_createProofFromAuthZone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE);
			this.state = 291;
			this.resourceAddress();
			this.state = 292;
			this.proof();
			this.state = 293;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public createProofFromAuthZoneByAmount(): CreateProofFromAuthZoneByAmountContext {
		let _localctx: CreateProofFromAuthZoneByAmountContext = new CreateProofFromAuthZoneByAmountContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TransactionManifestParser.RULE_createProofFromAuthZoneByAmount);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
			this.state = 296;
			this.decimal();
			this.state = 297;
			this.resourceAddress();
			this.state = 298;
			this.proof();
			this.state = 299;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public createProofFromAuthZoneByIds(): CreateProofFromAuthZoneByIdsContext {
		let _localctx: CreateProofFromAuthZoneByIdsContext = new CreateProofFromAuthZoneByIdsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TransactionManifestParser.RULE_createProofFromAuthZoneByIds);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
			this.state = 302;
			this.array();
			this.state = 303;
			this.resourceAddress();
			this.state = 304;
			this.proof();
			this.state = 305;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public createProofFromBucket(): CreateProofFromBucketContext {
		let _localctx: CreateProofFromBucketContext = new CreateProofFromBucketContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TransactionManifestParser.RULE_createProofFromBucket);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET);
			this.state = 308;
			this.bucket();
			this.state = 309;
			this.proof();
			this.state = 310;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public cloneProof(): CloneProofContext {
		let _localctx: CloneProofContext = new CloneProofContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TransactionManifestParser.RULE_cloneProof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(TransactionManifestParser.CLONE_PROOF);
			this.state = 313;
			this.proof();
			this.state = 314;
			this.proof();
			this.state = 315;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public dropProof(): DropProofContext {
		let _localctx: DropProofContext = new DropProofContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TransactionManifestParser.RULE_dropProof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(TransactionManifestParser.DROP_PROOF);
			this.state = 318;
			this.proof();
			this.state = 319;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public dropAllProofs(): DropAllProofsContext {
		let _localctx: DropAllProofsContext = new DropAllProofsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TransactionManifestParser.RULE_dropAllProofs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(TransactionManifestParser.DROP_ALL_PROOFS);
			this.state = 322;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public clearAuthZone(): ClearAuthZoneContext {
		let _localctx: ClearAuthZoneContext = new ClearAuthZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TransactionManifestParser.RULE_clearAuthZone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(TransactionManifestParser.CLEAR_AUTHZONE);
			this.state = 325;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public publishPackageWithOwner(): PublishPackageWithOwnerContext {
		let _localctx: PublishPackageWithOwnerContext = new PublishPackageWithOwnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TransactionManifestParser.RULE_publishPackageWithOwner);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.match(TransactionManifestParser.PUBLISH_PACKAGE_WITH_OWNER);
			this.state = 328;
			this.blob();
			this.state = 329;
			this.blob();
			this.state = 330;
			this.nonFungibleAddress();
			this.state = 331;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public burnBucket(): BurnBucketContext {
		let _localctx: BurnBucketContext = new BurnBucketContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TransactionManifestParser.RULE_burnBucket);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(TransactionManifestParser.BURN_BUCKET);
			this.state = 334;
			this.bucket();
			this.state = 335;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public mintFungible(): MintFungibleContext {
		let _localctx: MintFungibleContext = new MintFungibleContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TransactionManifestParser.RULE_mintFungible);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(TransactionManifestParser.MINT_FUNGIBLE);
			this.state = 338;
			this.resourceAddress();
			this.state = 339;
			this.decimal();
			this.state = 340;
			this.match(TransactionManifestParser.SEMICOLON);
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
	public createResource(): CreateResourceContext {
		let _localctx: CreateResourceContext = new CreateResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TransactionManifestParser.RULE_createResource);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.match(TransactionManifestParser.CREATE_RESOURCE);
			this.state = 343;
			this.enum_();
			this.state = 344;
			this.array();
			this.state = 345;
			this.array();
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionManifestParser.T__0 || _la === TransactionManifestParser.T__1) {
				{
				this.state = 346;
				this.option();
				}
			}

			this.state = 349;
			this.match(TransactionManifestParser.SEMICOLON);
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
		this.enterRule(_localctx, 54, TransactionManifestParser.RULE_unit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(TransactionManifestParser.EMPTY_PARENTHESIS);
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
		this.enterRule(_localctx, 56, TransactionManifestParser.RULE_bool);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
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
		this.enterRule(_localctx, 58, TransactionManifestParser.RULE_i8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
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
		this.enterRule(_localctx, 60, TransactionManifestParser.RULE_i16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
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
		this.enterRule(_localctx, 62, TransactionManifestParser.RULE_i32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
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
		this.enterRule(_localctx, 64, TransactionManifestParser.RULE_i64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
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
		this.enterRule(_localctx, 66, TransactionManifestParser.RULE_i128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
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
		this.enterRule(_localctx, 68, TransactionManifestParser.RULE_u8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
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
		this.enterRule(_localctx, 70, TransactionManifestParser.RULE_u16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
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
		this.enterRule(_localctx, 72, TransactionManifestParser.RULE_u32);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
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
		this.enterRule(_localctx, 74, TransactionManifestParser.RULE_u64);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
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
		this.enterRule(_localctx, 76, TransactionManifestParser.RULE_u128);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
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
		this.enterRule(_localctx, 78, TransactionManifestParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
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
	public enum_(): Enum_Context {
		let _localctx: Enum_Context = new Enum_Context(this._ctx, this.state);
		this.enterRule(_localctx, 80, TransactionManifestParser.RULE_enum_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(TransactionManifestParser.ENUM_TYPE);
			this.state = 378;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 379;
			this.string();
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TransactionManifestParser.COMMA) {
				{
				{
				this.state = 380;
				this.match(TransactionManifestParser.COMMA);
				this.state = 381;
				this.value();
				}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 387;
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
		this.enterRule(_localctx, 82, TransactionManifestParser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.T__0:
				{
				this.state = 389;
				this.some();
				}
				break;
			case TransactionManifestParser.T__1:
				{
				this.state = 390;
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
		this.enterRule(_localctx, 84, TransactionManifestParser.RULE_some);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.match(TransactionManifestParser.T__0);
			this.state = 394;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 395;
			this.value();
			this.state = 396;
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
		this.enterRule(_localctx, 86, TransactionManifestParser.RULE_none);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(TransactionManifestParser.T__1);
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
		this.enterRule(_localctx, 88, TransactionManifestParser.RULE_ok);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.match(TransactionManifestParser.T__2);
			this.state = 401;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 402;
			this.value();
			this.state = 403;
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
		this.enterRule(_localctx, 90, TransactionManifestParser.RULE_err);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.match(TransactionManifestParser.T__3);
			this.state = 406;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 407;
			this.value();
			this.state = 408;
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
		this.enterRule(_localctx, 92, TransactionManifestParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.match(TransactionManifestParser.ARRAY_TYPE);
			this.state = 411;
			this.match(TransactionManifestParser.LESS_THAN);
			this.state = 412;
			this.type();
			this.state = 413;
			this.match(TransactionManifestParser.GREATER_THAN);
			this.state = 427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.EMPTY_PARENTHESIS:
				{
				this.state = 414;
				this.match(TransactionManifestParser.EMPTY_PARENTHESIS);
				}
				break;
			case TransactionManifestParser.OPEN_PARENTHESIS:
				{
				this.state = 415;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.T__1) | (1 << TransactionManifestParser.T__2) | (1 << TransactionManifestParser.T__3) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (TransactionManifestParser.ENUM_TYPE - 40)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 40)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 40)) | (1 << (TransactionManifestParser.BYTES_TYPE - 40)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.SYSTEM_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_TYPE - 40)) | (1 << (TransactionManifestParser.KEY_VALUE_STORE_TYPE - 40)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 40)) | (1 << (TransactionManifestParser.PROOF_TYPE - 40)) | (1 << (TransactionManifestParser.VAULT_TYPE - 40)) | (1 << (TransactionManifestParser.EXPRESSION_TYPE - 40)) | (1 << (TransactionManifestParser.BLOB_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.HASH_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 40)) | (1 << (TransactionManifestParser.EMPTY_PARENTHESIS - 40)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
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
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, TransactionManifestParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(TransactionManifestParser.TUPLE_TYPE);
			this.state = 443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.EMPTY_PARENTHESIS:
				{
				this.state = 430;
				this.match(TransactionManifestParser.EMPTY_PARENTHESIS);
				}
				break;
			case TransactionManifestParser.OPEN_PARENTHESIS:
				{
				this.state = 431;
				this.match(TransactionManifestParser.OPEN_PARENTHESIS);
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.T__1) | (1 << TransactionManifestParser.T__2) | (1 << TransactionManifestParser.T__3) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (TransactionManifestParser.ENUM_TYPE - 40)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 40)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 40)) | (1 << (TransactionManifestParser.BYTES_TYPE - 40)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.SYSTEM_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.COMPONENT_TYPE - 40)) | (1 << (TransactionManifestParser.KEY_VALUE_STORE_TYPE - 40)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 40)) | (1 << (TransactionManifestParser.PROOF_TYPE - 40)) | (1 << (TransactionManifestParser.VAULT_TYPE - 40)) | (1 << (TransactionManifestParser.EXPRESSION_TYPE - 40)) | (1 << (TransactionManifestParser.BLOB_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 40)) | (1 << (TransactionManifestParser.HASH_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE - 40)) | (1 << (TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE - 40)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 40)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 40)) | (1 << (TransactionManifestParser.EMPTY_PARENTHESIS - 40)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
					{
					this.state = 432;
					this.value();
					this.state = 437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === TransactionManifestParser.COMMA) {
						{
						{
						this.state = 433;
						this.match(TransactionManifestParser.COMMA);
						this.state = 434;
						this.value();
						}
						}
						this.state = 439;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 442;
				this.match(TransactionManifestParser.CLOED_PARENTHESIS);
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
	public decimal(): DecimalContext {
		let _localctx: DecimalContext = new DecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, TransactionManifestParser.RULE_decimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(TransactionManifestParser.DECIMAL_TYPE);
			this.state = 446;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 447;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 448;
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
		this.enterRule(_localctx, 98, TransactionManifestParser.RULE_preciseDecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(TransactionManifestParser.PRECISE_DECIMAL_TYPE);
			this.state = 451;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 452;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 453;
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
		this.enterRule(_localctx, 100, TransactionManifestParser.RULE_packageAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(TransactionManifestParser.PACKAGE_ADDRESS_TYPE);
			this.state = 456;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 457;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 458;
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
		this.enterRule(_localctx, 102, TransactionManifestParser.RULE_componentAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(TransactionManifestParser.COMPONENT_ADDRESS_TYPE);
			this.state = 461;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 462;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 463;
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
		this.enterRule(_localctx, 104, TransactionManifestParser.RULE_resourceAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(TransactionManifestParser.RESOURCE_ADDRESS_TYPE);
			this.state = 466;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 467;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 468;
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
	public systemAddress(): SystemAddressContext {
		let _localctx: SystemAddressContext = new SystemAddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, TransactionManifestParser.RULE_systemAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.match(TransactionManifestParser.SYSTEM_ADDRESS_TYPE);
			this.state = 471;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 472;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 473;
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
		this.enterRule(_localctx, 108, TransactionManifestParser.RULE_hash);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(TransactionManifestParser.HASH_TYPE);
			this.state = 476;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 477;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 478;
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
		this.enterRule(_localctx, 110, TransactionManifestParser.RULE_bytes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.match(TransactionManifestParser.BYTES_TYPE);
			this.state = 481;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 482;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 483;
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
	public component(): ComponentContext {
		let _localctx: ComponentContext = new ComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, TransactionManifestParser.RULE_component);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.match(TransactionManifestParser.COMPONENT_TYPE);
			this.state = 486;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 487;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 488;
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
	public vault(): VaultContext {
		let _localctx: VaultContext = new VaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, TransactionManifestParser.RULE_vault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(TransactionManifestParser.VAULT_TYPE);
			this.state = 491;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 492;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 493;
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
	public keyValueStore(): KeyValueStoreContext {
		let _localctx: KeyValueStoreContext = new KeyValueStoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, TransactionManifestParser.RULE_keyValueStore);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(TransactionManifestParser.KEY_VALUE_STORE_TYPE);
			this.state = 496;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 497;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 498;
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
		this.enterRule(_localctx, 118, TransactionManifestParser.RULE_bucket);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(TransactionManifestParser.BUCKET_TYPE);
			this.state = 501;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 502;
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
			this.state = 503;
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
		this.enterRule(_localctx, 120, TransactionManifestParser.RULE_proof);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.match(TransactionManifestParser.PROOF_TYPE);
			this.state = 506;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 507;
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
			this.state = 508;
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
	public nonFungibleId(): NonFungibleIdContext {
		let _localctx: NonFungibleIdContext = new NonFungibleIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, TransactionManifestParser.RULE_nonFungibleId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE);
			this.state = 511;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 512;
			this.non_fungible_id_values();
			this.state = 513;
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
		this.enterRule(_localctx, 124, TransactionManifestParser.RULE_nonFungibleAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.match(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE);
			this.state = 516;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 517;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 518;
			this.match(TransactionManifestParser.COMMA);
			this.state = 519;
			this.non_fungible_id_values();
			this.state = 520;
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
	public blob(): BlobContext {
		let _localctx: BlobContext = new BlobContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, TransactionManifestParser.RULE_blob);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.match(TransactionManifestParser.BLOB_TYPE);
			this.state = 523;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 524;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 525;
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
	public ecdsaSecp256k1PublicKey(): EcdsaSecp256k1PublicKeyContext {
		let _localctx: EcdsaSecp256k1PublicKeyContext = new EcdsaSecp256k1PublicKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, TransactionManifestParser.RULE_ecdsaSecp256k1PublicKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this.match(TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE);
			this.state = 528;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 529;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 530;
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
	public ecdsaSecp256k1Signature(): EcdsaSecp256k1SignatureContext {
		let _localctx: EcdsaSecp256k1SignatureContext = new EcdsaSecp256k1SignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, TransactionManifestParser.RULE_ecdsaSecp256k1Signature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.match(TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE);
			this.state = 533;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 534;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 535;
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
	public eddsaEd25519PublicKey(): EddsaEd25519PublicKeyContext {
		let _localctx: EddsaEd25519PublicKeyContext = new EddsaEd25519PublicKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, TransactionManifestParser.RULE_eddsaEd25519PublicKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE);
			this.state = 538;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 539;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 540;
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
	public eddsaEd25519Signature(): EddsaEd25519SignatureContext {
		let _localctx: EddsaEd25519SignatureContext = new EddsaEd25519SignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, TransactionManifestParser.RULE_eddsaEd25519Signature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.match(TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE);
			this.state = 543;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 544;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 545;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, TransactionManifestParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.match(TransactionManifestParser.EXPRESSION_TYPE);
			this.state = 548;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 549;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 550;
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
		this.enterRule(_localctx, 138, TransactionManifestParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.UNIT_TYPE) | (1 << TransactionManifestParser.BOOL_TYPE) | (1 << TransactionManifestParser.I8_TYPE) | (1 << TransactionManifestParser.I16_TYPE) | (1 << TransactionManifestParser.I32_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.I64_TYPE - 32)) | (1 << (TransactionManifestParser.I128_TYPE - 32)) | (1 << (TransactionManifestParser.U8_TYPE - 32)) | (1 << (TransactionManifestParser.U16_TYPE - 32)) | (1 << (TransactionManifestParser.U32_TYPE - 32)) | (1 << (TransactionManifestParser.U64_TYPE - 32)) | (1 << (TransactionManifestParser.U128_TYPE - 32)) | (1 << (TransactionManifestParser.STRING_TYPE - 32)) | (1 << (TransactionManifestParser.ENUM_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.SYSTEM_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_TYPE - 32)) | (1 << (TransactionManifestParser.KEY_VALUE_STORE_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.VAULT_TYPE - 32)) | (1 << (TransactionManifestParser.EXPRESSION_TYPE - 32)) | (1 << (TransactionManifestParser.BLOB_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE - 32)) | (1 << (TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE - 32)) | (1 << (TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE - 32)) | (1 << (TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)))) !== 0))) {
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
	public non_fungible_id_values(): Non_fungible_id_valuesContext {
		let _localctx: Non_fungible_id_valuesContext = new Non_fungible_id_valuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, TransactionManifestParser.RULE_non_fungible_id_values);
		try {
			this.state = 559;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.U32_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 554;
				this.u32();
				}
				break;
			case TransactionManifestParser.U64_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 555;
				this.u64();
				}
				break;
			case TransactionManifestParser.U128_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 556;
				this.u128();
				}
				break;
			case TransactionManifestParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 557;
				this.string();
				}
				break;
			case TransactionManifestParser.BYTES_TYPE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 558;
				this.bytes();
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, TransactionManifestParser.RULE_value);
		try {
			this.state = 602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.EMPTY_PARENTHESIS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 561;
				this.unit();
				}
				break;
			case TransactionManifestParser.BOOL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
				this.bool();
				}
				break;
			case TransactionManifestParser.I8_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 563;
				this.i8();
				}
				break;
			case TransactionManifestParser.I16_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 564;
				this.i16();
				}
				break;
			case TransactionManifestParser.I32_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 565;
				this.i32();
				}
				break;
			case TransactionManifestParser.I64_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 566;
				this.i64();
				}
				break;
			case TransactionManifestParser.I128_LITERAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 567;
				this.i128();
				}
				break;
			case TransactionManifestParser.U8_LITERAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 568;
				this.u8();
				}
				break;
			case TransactionManifestParser.U16_LITERAL:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 569;
				this.u16();
				}
				break;
			case TransactionManifestParser.U32_LITERAL:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 570;
				this.u32();
				}
				break;
			case TransactionManifestParser.U64_LITERAL:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 571;
				this.u64();
				}
				break;
			case TransactionManifestParser.U128_LITERAL:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 572;
				this.u128();
				}
				break;
			case TransactionManifestParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 573;
				this.string();
				}
				break;
			case TransactionManifestParser.ENUM_TYPE:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 574;
				this.enum_();
				}
				break;
			case TransactionManifestParser.ARRAY_TYPE:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 575;
				this.array();
				}
				break;
			case TransactionManifestParser.TUPLE_TYPE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 576;
				this.tuple();
				}
				break;
			case TransactionManifestParser.T__0:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 577;
				this.some();
				}
				break;
			case TransactionManifestParser.T__1:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 578;
				this.none();
				}
				break;
			case TransactionManifestParser.T__2:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 579;
				this.ok();
				}
				break;
			case TransactionManifestParser.T__3:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 580;
				this.err();
				}
				break;
			case TransactionManifestParser.BYTES_TYPE:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 581;
				this.bytes();
				}
				break;
			case TransactionManifestParser.PACKAGE_ADDRESS_TYPE:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 582;
				this.packageAddress();
				}
				break;
			case TransactionManifestParser.COMPONENT_ADDRESS_TYPE:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 583;
				this.componentAddress();
				}
				break;
			case TransactionManifestParser.RESOURCE_ADDRESS_TYPE:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 584;
				this.resourceAddress();
				}
				break;
			case TransactionManifestParser.SYSTEM_ADDRESS_TYPE:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 585;
				this.systemAddress();
				}
				break;
			case TransactionManifestParser.COMPONENT_TYPE:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 586;
				this.component();
				}
				break;
			case TransactionManifestParser.KEY_VALUE_STORE_TYPE:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 587;
				this.keyValueStore();
				}
				break;
			case TransactionManifestParser.BUCKET_TYPE:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 588;
				this.bucket();
				}
				break;
			case TransactionManifestParser.PROOF_TYPE:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 589;
				this.proof();
				}
				break;
			case TransactionManifestParser.VAULT_TYPE:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 590;
				this.vault();
				}
				break;
			case TransactionManifestParser.EXPRESSION_TYPE:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 591;
				this.expression();
				}
				break;
			case TransactionManifestParser.BLOB_TYPE:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 592;
				this.blob();
				}
				break;
			case TransactionManifestParser.NON_FUNGIBLE_ID_TYPE:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 593;
				this.nonFungibleId();
				}
				break;
			case TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 594;
				this.nonFungibleAddress();
				}
				break;
			case TransactionManifestParser.HASH_TYPE:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 595;
				this.hash();
				}
				break;
			case TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 596;
				this.ecdsaSecp256k1PublicKey();
				}
				break;
			case TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 597;
				this.ecdsaSecp256k1Signature();
				}
				break;
			case TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 598;
				this.eddsaEd25519PublicKey();
				}
				break;
			case TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 599;
				this.eddsaEd25519Signature();
				}
				break;
			case TransactionManifestParser.DECIMAL_TYPE:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 600;
				this.decimal();
				}
				break;
			case TransactionManifestParser.PRECISE_DECIMAL_TYPE:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 601;
				this.preciseDecimal();
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
	public re_node_id(): Re_node_idContext {
		let _localctx: Re_node_idContext = new Re_node_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, TransactionManifestParser.RULE_re_node_id);
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionManifestParser.BUCKET_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 604;
				this.bucket();
				}
				break;
			case TransactionManifestParser.PROOF_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 605;
				this.proof();
				}
				break;
			case TransactionManifestParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 606;
				this.authZoneStack();
				}
				break;
			case TransactionManifestParser.T__6:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 607;
				this.feeReserve();
				}
				break;
			case TransactionManifestParser.T__4:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 608;
				this.worktop();
				}
				break;
			case TransactionManifestParser.T__7:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 609;
				this.global();
				}
				break;
			case TransactionManifestParser.KEY_VALUE_STORE_TYPE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 610;
				this.keyValueStore();
				}
				break;
			case TransactionManifestParser.T__8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 611;
				this.nonFungibleStore();
				}
				break;
			case TransactionManifestParser.COMPONENT_TYPE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 612;
				this.component();
				}
				break;
			case TransactionManifestParser.VAULT_TYPE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 613;
				this.vault();
				}
				break;
			case TransactionManifestParser.T__9:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 614;
				this.resourceManager();
				}
				break;
			case TransactionManifestParser.T__10:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 615;
				this.package_();
				}
				break;
			case TransactionManifestParser.T__11:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 616;
				this.epochManager();
				}
				break;
			case TransactionManifestParser.T__12:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 617;
				this.clock();
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
	public worktop(): WorktopContext {
		let _localctx: WorktopContext = new WorktopContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, TransactionManifestParser.RULE_worktop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this.match(TransactionManifestParser.T__4);
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
	public authZoneStack(): AuthZoneStackContext {
		let _localctx: AuthZoneStackContext = new AuthZoneStackContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, TransactionManifestParser.RULE_authZoneStack);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.match(TransactionManifestParser.T__5);
			this.state = 623;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 624;
			this.match(TransactionManifestParser.U32_LITERAL);
			this.state = 625;
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
	public feeReserve(): FeeReserveContext {
		let _localctx: FeeReserveContext = new FeeReserveContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, TransactionManifestParser.RULE_feeReserve);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this.match(TransactionManifestParser.T__6);
			this.state = 628;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 629;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 630;
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
	public global(): GlobalContext {
		let _localctx: GlobalContext = new GlobalContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, TransactionManifestParser.RULE_global);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.match(TransactionManifestParser.T__7);
			this.state = 633;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 634;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 635;
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
	public nonFungibleStore(): NonFungibleStoreContext {
		let _localctx: NonFungibleStoreContext = new NonFungibleStoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, TransactionManifestParser.RULE_nonFungibleStore);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this.match(TransactionManifestParser.T__8);
			this.state = 638;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 639;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 640;
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
	public resourceManager(): ResourceManagerContext {
		let _localctx: ResourceManagerContext = new ResourceManagerContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, TransactionManifestParser.RULE_resourceManager);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.match(TransactionManifestParser.T__9);
			this.state = 643;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 644;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 645;
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
	public package_(): Package_Context {
		let _localctx: Package_Context = new Package_Context(this._ctx, this.state);
		this.enterRule(_localctx, 158, TransactionManifestParser.RULE_package_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.match(TransactionManifestParser.T__10);
			this.state = 648;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 649;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 650;
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
	public epochManager(): EpochManagerContext {
		let _localctx: EpochManagerContext = new EpochManagerContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, TransactionManifestParser.RULE_epochManager);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.match(TransactionManifestParser.T__11);
			this.state = 653;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 654;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 655;
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
	public clock(): ClockContext {
		let _localctx: ClockContext = new ClockContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, TransactionManifestParser.RULE_clock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.match(TransactionManifestParser.T__12);
			this.state = 658;
			this.match(TransactionManifestParser.OPEN_PARENTHESIS);
			this.state = 659;
			this.match(TransactionManifestParser.STRING_LITERAL);
			this.state = 660;
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03g\u0299\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x03\x02\x07\x02\xA8\n\x02\f\x02\x0E" +
		"\x02\xAB\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\xC8\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04\xCF\n\x04\f\x04\x0E\x04\xD2\v\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x07\x05\xDA\n\x05\f\x05\x0E\x05\xDD\v\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06\xE4\n\x06\x03\x06\x03\x06" +
		"\x07\x06\xE8\n\x06\f\x06\x0E\x06\xEB\v\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x07\x07\xF3\n\x07\f\x07\x0E\x07\xF6\v\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u015E\n\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03" +
		"\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)" +
		"\x03)\x03*\x03*\x03*\x03*\x03*\x07*\u0181\n*\f*\x0E*\u0184\v*\x03*\x03" +
		"*\x03+\x03+\x05+\u018A\n+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03.\x03" +
		".\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x070\u01A6\n0\f0\x0E0\u01A9\v0\x050\u01AB\n0\x030\x05" +
		"0\u01AE\n0\x031\x031\x031\x031\x031\x031\x071\u01B6\n1\f1\x0E1\u01B9\v" +
		"1\x051\u01BB\n1\x031\x051\u01BE\n1\x032\x032\x032\x032\x032\x033\x033" +
		"\x033\x033\x033\x034\x034\x034\x034\x034\x035\x035\x035\x035\x035\x03" +
		"6\x036\x036\x036\x036\x037\x037\x037\x037\x037\x038\x038\x038\x038\x03" +
		"8\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03" +
		";\x03;\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03" +
		">\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03" +
		"C\x03C\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03F\x03F\x03" +
		"F\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x05H\u0232\nH\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u025D\n" +
		"I\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x05J\u026D\nJ\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03M\x03M\x03M\x03" +
		"M\x03M\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03" +
		"P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03S\x03" +
		"S\x03S\x03S\x03S\x03S\x02\x02\x02T\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\x02\x04\x04\x02\x18\x18" +
		"bb\x03\x02\x1DA\x02\u02A6\x02\xA9\x03\x02\x02\x02\x04\xC7\x03\x02\x02" +
		"\x02\x06\xC9\x03\x02\x02\x02\b\xD5\x03\x02\x02\x02\n\xE0\x03\x02\x02\x02" +
		"\f\xEE\x03\x02\x02\x02\x0E\xF9\x03\x02\x02\x02\x10\xFE\x03\x02\x02\x02" +
		"\x12\u0104\x03\x02\x02\x02\x14\u010A\x03\x02\x02\x02\x16\u010E\x03\x02" +
		"\x02\x02\x18\u0112\x03\x02\x02\x02\x1A\u0117\x03\x02\x02\x02\x1C\u011C" +
		"\x03\x02\x02\x02\x1E\u0120\x03\x02\x02\x02 \u0124\x03\x02\x02\x02\"\u0129" +
		"\x03\x02\x02\x02$\u012F\x03\x02\x02\x02&\u0135\x03\x02\x02\x02(\u013A" +
		"\x03\x02\x02\x02*\u013F\x03\x02\x02\x02,\u0143\x03\x02\x02\x02.\u0146" +
		"\x03\x02\x02\x020\u0149\x03\x02\x02\x022\u014F\x03\x02\x02\x024\u0153" +
		"\x03\x02\x02\x026\u0158\x03\x02\x02\x028\u0161\x03\x02\x02\x02:\u0163" +
		"\x03\x02\x02\x02<\u0165\x03\x02\x02\x02>\u0167\x03\x02\x02\x02@\u0169" +
		"\x03\x02\x02\x02B\u016B\x03\x02\x02\x02D\u016D\x03\x02\x02\x02F\u016F" +
		"\x03\x02\x02\x02H\u0171\x03\x02\x02\x02J\u0173\x03\x02\x02\x02L\u0175" +
		"\x03\x02\x02\x02N\u0177\x03\x02\x02\x02P\u0179\x03\x02\x02\x02R\u017B" +
		"\x03\x02\x02\x02T\u0189\x03\x02\x02\x02V\u018B\x03\x02\x02\x02X\u0190" +
		"\x03\x02\x02\x02Z\u0192\x03\x02\x02\x02\\\u0197\x03\x02\x02\x02^\u019C" +
		"\x03\x02\x02\x02`\u01AF\x03\x02\x02\x02b\u01BF\x03\x02\x02\x02d\u01C4" +
		"\x03\x02\x02\x02f\u01C9\x03\x02\x02\x02h\u01CE\x03\x02\x02\x02j\u01D3" +
		"\x03\x02\x02\x02l\u01D8\x03\x02\x02\x02n\u01DD\x03\x02\x02\x02p\u01E2" +
		"\x03\x02\x02\x02r\u01E7\x03\x02\x02\x02t\u01EC\x03\x02\x02\x02v\u01F1" +
		"\x03\x02\x02\x02x\u01F6\x03\x02\x02\x02z\u01FB\x03\x02\x02\x02|\u0200" +
		"\x03\x02\x02\x02~\u0205\x03\x02\x02\x02\x80\u020C\x03\x02\x02\x02\x82" +
		"\u0211\x03\x02\x02\x02\x84\u0216\x03\x02\x02\x02\x86\u021B\x03\x02\x02" +
		"\x02\x88\u0220\x03\x02\x02\x02\x8A\u0225\x03\x02\x02\x02\x8C\u022A\x03" +
		"\x02\x02\x02\x8E\u0231\x03\x02\x02\x02\x90\u025C\x03\x02\x02\x02\x92\u026C" +
		"\x03\x02\x02\x02\x94\u026E\x03\x02\x02\x02\x96\u0270\x03\x02\x02\x02\x98" +
		"\u0275\x03\x02\x02\x02\x9A\u027A\x03\x02\x02\x02\x9C\u027F\x03\x02\x02" +
		"\x02\x9E\u0284\x03\x02\x02\x02\xA0\u0289\x03\x02\x02\x02\xA2\u028E\x03" +
		"\x02\x02\x02\xA4\u0293\x03\x02\x02\x02\xA6\xA8\x05\x04\x03\x02\xA7\xA6" +
		"\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA" +
		"\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD" +
		"\x07\x02\x02\x03\xAD\x03\x03\x02\x02\x02\xAE\xC8\x05\x06\x04\x02\xAF\xC8" +
		"\x05\b\x05\x02\xB0\xC8\x05\n\x06\x02\xB1\xC8\x05\f\x07\x02\xB2\xC8\x05" +
		"\x0E\b\x02\xB3\xC8\x05\x10\t\x02\xB4\xC8\x05\x12\n\x02\xB5\xC8\x05\x14" +
		"\v\x02\xB6\xC8\x05\x16\f\x02\xB7\xC8\x05\x18\r\x02\xB8\xC8\x05\x1A\x0E" +
		"\x02\xB9\xC8\x05\x1C\x0F\x02\xBA\xC8\x05\x1E\x10\x02\xBB\xC8\x05 \x11" +
		"\x02\xBC\xC8\x05\"\x12\x02\xBD\xC8\x05$\x13\x02\xBE\xC8\x05&\x14\x02\xBF" +
		"\xC8\x05(\x15\x02\xC0\xC8\x05*\x16\x02\xC1\xC8\x05,\x17\x02\xC2\xC8\x05" +
		".\x18\x02\xC3\xC8\x050\x19\x02\xC4\xC8\x052\x1A\x02\xC5\xC8\x054\x1B\x02" +
		"\xC6\xC8\x056\x1C\x02\xC7\xAE\x03\x02\x02\x02\xC7\xAF\x03\x02\x02\x02" +
		"\xC7\xB0\x03\x02\x02\x02\xC7\xB1\x03\x02\x02\x02\xC7\xB2\x03\x02\x02\x02" +
		"\xC7\xB3\x03\x02\x02\x02\xC7\xB4\x03\x02\x02\x02\xC7\xB5\x03\x02\x02\x02" +
		"\xC7\xB6\x03\x02\x02\x02\xC7\xB7\x03\x02\x02\x02\xC7\xB8\x03\x02\x02\x02" +
		"\xC7\xB9\x03\x02\x02\x02\xC7\xBA\x03\x02\x02\x02\xC7\xBB\x03\x02\x02\x02" +
		"\xC7\xBC\x03\x02\x02\x02\xC7\xBD\x03\x02\x02\x02\xC7\xBE\x03\x02\x02\x02" +
		"\xC7\xBF\x03\x02\x02\x02\xC7\xC0\x03\x02\x02\x02\xC7\xC1\x03\x02\x02\x02" +
		"\xC7\xC2\x03\x02\x02\x02\xC7\xC3\x03\x02\x02\x02\xC7\xC4\x03\x02\x02\x02" +
		"\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\x05\x03\x02\x02\x02" +
		"\xC9\xCA\x07Z\x02\x02\xCA\xCB\x05f4\x02\xCB\xCC\x05P)\x02\xCC\xD0\x05" +
		"P)\x02\xCD\xCF\x05\x90I\x02\xCE\xCD\x03\x02\x02\x02\xCF\xD2\x03\x02\x02" +
		"\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD3\x03\x02\x02" +
		"\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD4\x07H\x02\x02\xD4\x07\x03\x02\x02" +
		"\x02\xD5\xD6\x07\\\x02\x02\xD6\xD7\x05P)\x02\xD7\xDB\x05P)\x02\xD8\xDA" +
		"\x05\x90I\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xDB" +
		"\x03\x02\x02\x02\xDE\xDF\x07H\x02\x02\xDF\t\x03\x02\x02\x02\xE0\xE3\x07" +
		"[\x02\x02\xE1\xE4\x05h5\x02\xE2\xE4\x05r:\x02\xE3\xE1\x03\x02\x02\x02" +
		"\xE3\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE9\x05P)\x02\xE6" +
		"\xE8\x05\x90I\x02\xE7\xE6\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9" +
		"\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB" +
		"\xE9\x03\x02\x02\x02\xEC\xED\x07H\x02\x02\xED\v\x03\x02\x02\x02\xEE\xEF" +
		"\x07]\x02\x02\xEF\xF0\x05\x92J\x02\xF0\xF4\x05P)\x02\xF1\xF3\x05\x90I" +
		"\x02\xF2\xF1\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02" +
		"\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF4\x03\x02\x02" +
		"\x02\xF7\xF8\x07H\x02\x02\xF8\r\x03\x02\x02\x02\xF9\xFA\x07I\x02\x02\xFA" +
		"\xFB\x05j6\x02\xFB\xFC\x05x=\x02\xFC\xFD\x07H\x02\x02\xFD\x0F\x03\x02" +
		"\x02\x02\xFE\xFF\x07J\x02\x02\xFF\u0100\x05b2\x02\u0100\u0101\x05j6\x02" +
		"\u0101\u0102\x05x=\x02\u0102\u0103\x07H\x02\x02\u0103\x11\x03\x02\x02" +
		"\x02\u0104\u0105\x07K\x02\x02\u0105\u0106\x05^0\x02\u0106\u0107\x05j6" +
		"\x02\u0107\u0108\x05x=\x02\u0108\u0109\x07H\x02\x02\u0109\x13\x03\x02" +
		"\x02\x02\u010A\u010B\x07O\x02\x02\u010B\u010C\x05x=\x02\u010C\u010D\x07" +
		"H\x02\x02\u010D\x15\x03\x02\x02\x02\u010E\u010F\x07L\x02\x02\u010F\u0110" +
		"\x05j6\x02\u0110\u0111\x07H\x02\x02\u0111\x17\x03\x02\x02\x02\u0112\u0113" +
		"\x07M\x02\x02\u0113\u0114\x05b2\x02\u0114\u0115\x05j6\x02\u0115\u0116" +
		"\x07H\x02\x02\u0116\x19\x03\x02\x02\x02\u0117\u0118\x07N\x02\x02\u0118" +
		"\u0119\x05^0\x02\u0119\u011A\x05j6\x02\u011A\u011B\x07H\x02\x02\u011B" +
		"\x1B\x03\x02\x02\x02\u011C\u011D\x07P\x02\x02\u011D\u011E\x05z>\x02\u011E" +
		"\u011F\x07H\x02\x02\u011F\x1D\x03\x02\x02\x02\u0120\u0121\x07Q\x02\x02" +
		"\u0121\u0122\x05z>\x02\u0122\u0123\x07H\x02\x02\u0123\x1F\x03\x02\x02" +
		"\x02\u0124\u0125\x07S\x02\x02\u0125\u0126\x05j6\x02\u0126\u0127\x05z>" +
		"\x02\u0127\u0128\x07H\x02\x02\u0128!\x03\x02\x02\x02\u0129\u012A\x07T" +
		"\x02\x02\u012A\u012B\x05b2\x02\u012B\u012C\x05j6\x02\u012C\u012D\x05z" +
		">\x02\u012D\u012E\x07H\x02\x02\u012E#\x03\x02\x02\x02\u012F\u0130\x07" +
		"U\x02\x02\u0130\u0131\x05^0\x02\u0131\u0132\x05j6\x02\u0132\u0133\x05" +
		"z>\x02\u0133\u0134\x07H\x02\x02\u0134%\x03\x02\x02\x02\u0135\u0136\x07" +
		"V\x02\x02\u0136\u0137\x05x=\x02\u0137\u0138\x05z>\x02\u0138\u0139\x07" +
		"H\x02\x02\u0139\'\x03\x02\x02\x02\u013A\u013B\x07W\x02\x02\u013B\u013C" +
		"\x05z>\x02\u013C\u013D\x05z>\x02\u013D\u013E\x07H\x02\x02\u013E)\x03\x02" +
		"\x02\x02\u013F\u0140\x07X\x02\x02\u0140\u0141\x05z>\x02\u0141\u0142\x07" +
		"H\x02\x02\u0142+\x03\x02\x02\x02\u0143\u0144\x07Y\x02\x02\u0144\u0145" +
		"\x07H\x02\x02\u0145-\x03\x02\x02\x02\u0146\u0147\x07R\x02\x02\u0147\u0148" +
		"\x07H\x02\x02\u0148/\x03\x02\x02\x02\u0149\u014A\x07^\x02\x02\u014A\u014B" +
		"\x05\x80A\x02\u014B\u014C\x05\x80A\x02\u014C\u014D\x05~@\x02\u014D\u014E" +
		"\x07H\x02\x02\u014E1\x03\x02\x02\x02\u014F\u0150\x07_\x02\x02\u0150\u0151" +
		"\x05x=\x02\u0151\u0152\x07H\x02\x02\u01523\x03\x02\x02\x02\u0153\u0154" +
		"\x07`\x02\x02\u0154\u0155\x05j6\x02\u0155\u0156\x05b2\x02\u0156\u0157" +
		"\x07H\x02\x02\u01575\x03\x02\x02\x02\u0158\u0159\x07a\x02\x02\u0159\u015A" +
		"\x05R*\x02\u015A\u015B\x05^0\x02\u015B\u015D\x05^0\x02\u015C\u015E\x05" +
		"T+\x02\u015D\u015C\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F" +
		"\x03\x02\x02\x02\u015F\u0160\x07H\x02\x02\u01607\x03\x02\x02\x02\u0161" +
		"\u0162\x07D\x02\x02\u01629\x03\x02\x02\x02\u0163\u0164\x07\x10\x02\x02" +
		"\u0164;\x03\x02\x02\x02\u0165\u0166\x07\x11\x02\x02\u0166=\x03\x02\x02" +
		"\x02\u0167\u0168\x07\x12\x02\x02\u0168?\x03\x02\x02\x02\u0169\u016A\x07" +
		"\x13\x02\x02\u016AA\x03\x02\x02\x02\u016B\u016C\x07\x14\x02\x02\u016C" +
		"C\x03\x02\x02\x02\u016D\u016E\x07\x15\x02\x02\u016EE\x03\x02\x02\x02\u016F" +
		"\u0170\x07\x16\x02\x02\u0170G\x03\x02\x02\x02\u0171\u0172\x07\x17\x02" +
		"\x02\u0172I\x03\x02\x02\x02\u0173\u0174\x07\x18\x02\x02\u0174K\x03\x02" +
		"\x02\x02\u0175\u0176\x07\x19\x02\x02\u0176M\x03\x02\x02\x02\u0177\u0178" +
		"\x07\x1A\x02\x02\u0178O\x03\x02\x02\x02\u0179\u017A\x07b\x02\x02\u017A" +
		"Q\x03\x02\x02\x02\u017B\u017C\x07*\x02\x02\u017C\u017D\x07B\x02\x02\u017D" +
		"\u0182\x05P)\x02\u017E\u017F\x07G\x02\x02\u017F\u0181\x05\x90I\x02\u0180" +
		"\u017E\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02" +
		"\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0185\x03\x02\x02\x02\u0184" +
		"\u0182\x03\x02\x02\x02\u0185\u0186\x07C\x02\x02\u0186S\x03\x02\x02\x02" +
		"\u0187\u018A\x05V,\x02\u0188\u018A\x05X-\x02\u0189\u0187\x03\x02\x02\x02" +
		"\u0189\u0188\x03\x02\x02\x02\u018AU\x03\x02\x02\x02\u018B\u018C\x07\x03" +
		"\x02\x02\u018C\u018D\x07B\x02\x02\u018D\u018E\x05\x90I\x02\u018E\u018F" +
		"\x07C\x02\x02\u018FW\x03\x02\x02\x02\u0190\u0191\x07\x04\x02\x02\u0191" +
		"Y\x03\x02\x02\x02\u0192\u0193\x07\x05\x02\x02\u0193\u0194\x07B\x02\x02" +
		"\u0194\u0195\x05\x90I\x02\u0195\u0196\x07C\x02\x02\u0196[\x03\x02\x02" +
		"\x02\u0197\u0198\x07\x06\x02\x02\u0198\u0199\x07B\x02\x02\u0199\u019A" +
		"\x05\x90I\x02\u019A\u019B\x07C\x02\x02\u019B]\x03\x02\x02\x02\u019C\u019D" +
		"\x07+\x02\x02\u019D\u019E\x07E\x02\x02\u019E\u019F\x05\x8CG\x02\u019F" +
		"\u01AD\x07F\x02\x02\u01A0\u01AE\x07D\x02\x02\u01A1\u01AA\x07B\x02\x02" +
		"\u01A2\u01A7\x05\x90I\x02\u01A3\u01A4\x07G\x02\x02\u01A4\u01A6\x05\x90" +
		"I\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7\u01A5" +
		"\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02" +
		"\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01A2\x03\x02\x02\x02\u01AA\u01AB\x03" +
		"\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AE\x07C\x02\x02\u01AD" +
		"\u01A0\x03\x02\x02\x02\u01AD\u01A1\x03\x02\x02\x02\u01AE_\x03\x02\x02" +
		"\x02\u01AF\u01BD\x07,\x02\x02\u01B0\u01BE\x07D\x02\x02\u01B1\u01BA\x07" +
		"B\x02\x02\u01B2\u01B7\x05\x90I\x02\u01B3\u01B4\x07G\x02\x02\u01B4\u01B6" +
		"\x05\x90I\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02" +
		"\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BB\x03" +
		"\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01B2\x03\x02\x02\x02\u01BA" +
		"\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BE\x07C\x02" +
		"\x02\u01BD\u01B0\x03\x02\x02\x02\u01BD\u01B1\x03\x02\x02\x02\u01BEa\x03" +
		"\x02\x02\x02\u01BF\u01C0\x07?\x02\x02\u01C0\u01C1\x07B\x02\x02\u01C1\u01C2" +
		"\x07b\x02\x02\u01C2\u01C3\x07C\x02\x02\u01C3c\x03\x02\x02\x02\u01C4\u01C5" +
		"\x07@\x02\x02\u01C5\u01C6\x07B\x02\x02\u01C6\u01C7\x07b\x02\x02\u01C7" +
		"\u01C8\x07C\x02\x02\u01C8e\x03\x02\x02\x02\u01C9\u01CA\x07.\x02\x02\u01CA" +
		"\u01CB\x07B\x02\x02\u01CB\u01CC\x07b\x02\x02\u01CC\u01CD\x07C\x02\x02" +
		"\u01CDg\x03\x02\x02\x02\u01CE\u01CF\x07/\x02\x02\u01CF\u01D0\x07B\x02" +
		"\x02\u01D0\u01D1\x07b\x02\x02\u01D1\u01D2\x07C\x02\x02\u01D2i\x03\x02" +
		"\x02\x02\u01D3\u01D4\x070\x02\x02\u01D4\u01D5\x07B\x02\x02\u01D5\u01D6" +
		"\x07b\x02\x02\u01D6\u01D7\x07C\x02\x02\u01D7k\x03\x02\x02\x02\u01D8\u01D9" +
		"\x071\x02\x02\u01D9\u01DA\x07B\x02\x02\u01DA\u01DB\x07b\x02\x02\u01DB" +
		"\u01DC\x07C\x02\x02\u01DCm\x03\x02\x02\x02\u01DD\u01DE\x07:\x02\x02\u01DE" +
		"\u01DF\x07B\x02\x02\u01DF\u01E0\x07b\x02\x02\u01E0\u01E1\x07C\x02\x02" +
		"\u01E1o\x03\x02\x02\x02\u01E2\u01E3\x07-\x02\x02\u01E3\u01E4\x07B\x02" +
		"\x02\u01E4\u01E5\x07b\x02\x02\u01E5\u01E6\x07C\x02\x02\u01E6q\x03\x02" +
		"\x02\x02\u01E7\u01E8\x072\x02\x02\u01E8\u01E9\x07B\x02\x02\u01E9\u01EA" +
		"\x07b\x02\x02\u01EA\u01EB\x07C\x02\x02\u01EBs\x03\x02\x02\x02\u01EC\u01ED" +
		"\x076\x02\x02\u01ED\u01EE\x07B\x02\x02\u01EE\u01EF\x07b\x02\x02\u01EF" +
		"\u01F0\x07C\x02\x02\u01F0u\x03\x02\x02\x02\u01F1\u01F2\x073\x02\x02\u01F2" +
		"\u01F3\x07B\x02\x02\u01F3\u01F4\x07b\x02\x02\u01F4\u01F5\x07C\x02\x02" +
		"\u01F5w\x03\x02\x02\x02\u01F6\u01F7\x074\x02\x02\u01F7\u01F8\x07B\x02" +
		"\x02\u01F8\u01F9\t\x02\x02\x02\u01F9\u01FA\x07C\x02\x02\u01FAy\x03\x02" +
		"\x02\x02\u01FB\u01FC\x075\x02\x02\u01FC\u01FD\x07B\x02\x02\u01FD\u01FE" +
		"\t\x02\x02\x02\u01FE\u01FF\x07C\x02\x02\u01FF{\x03\x02\x02\x02\u0200\u0201" +
		"\x07A\x02\x02\u0201\u0202\x07B\x02\x02\u0202\u0203\x05\x8EH\x02\u0203" +
		"\u0204\x07C\x02\x02\u0204}\x03\x02\x02\x02\u0205\u0206\x079\x02\x02\u0206" +
		"\u0207\x07B\x02\x02\u0207\u0208\x07b\x02\x02\u0208\u0209\x07G\x02\x02" +
		"\u0209\u020A\x05\x8EH\x02\u020A\u020B\x07C\x02\x02\u020B\x7F\x03\x02\x02" +
		"\x02\u020C\u020D\x078\x02\x02\u020D\u020E\x07B\x02\x02\u020E\u020F\x07" +
		"b\x02\x02\u020F\u0210\x07C\x02\x02\u0210\x81\x03\x02\x02\x02\u0211\u0212" +
		"\x07;\x02\x02\u0212\u0213\x07B\x02\x02\u0213\u0214\x07b\x02\x02\u0214" +
		"\u0215\x07C\x02\x02\u0215\x83\x03\x02\x02\x02\u0216\u0217\x07<\x02\x02" +
		"\u0217\u0218\x07B\x02\x02\u0218\u0219\x07b\x02\x02\u0219\u021A\x07C\x02" +
		"\x02\u021A\x85\x03\x02\x02\x02\u021B\u021C\x07=\x02\x02\u021C\u021D\x07" +
		"B\x02\x02\u021D\u021E\x07b\x02\x02\u021E\u021F\x07C\x02\x02\u021F\x87" +
		"\x03\x02\x02\x02\u0220\u0221\x07>\x02\x02\u0221\u0222\x07B\x02\x02\u0222" +
		"\u0223\x07b\x02\x02\u0223\u0224\x07C\x02\x02\u0224\x89\x03\x02\x02\x02" +
		"\u0225\u0226\x077\x02\x02\u0226\u0227\x07B\x02\x02\u0227\u0228\x07b\x02" +
		"\x02\u0228\u0229\x07C\x02\x02\u0229\x8B\x03\x02\x02\x02\u022A\u022B\t" +
		"\x03\x02\x02\u022B\x8D\x03\x02\x02\x02\u022C\u0232\x05J&\x02\u022D\u0232" +
		"\x05L\'\x02\u022E\u0232\x05N(\x02\u022F\u0232\x05P)\x02\u0230\u0232\x05" +
		"p9\x02\u0231\u022C\x03\x02\x02\x02\u0231\u022D\x03\x02\x02\x02\u0231\u022E" +
		"\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0230\x03\x02\x02\x02" +
		"\u0232\x8F\x03\x02\x02\x02\u0233\u025D\x058\x1D\x02\u0234\u025D\x05:\x1E" +
		"\x02\u0235\u025D\x05<\x1F\x02\u0236\u025D\x05> \x02\u0237\u025D\x05@!" +
		"\x02\u0238\u025D\x05B\"\x02\u0239\u025D\x05D#\x02\u023A\u025D\x05F$\x02" +
		"\u023B\u025D\x05H%\x02\u023C\u025D\x05J&\x02\u023D\u025D\x05L\'\x02\u023E" +
		"\u025D\x05N(\x02\u023F\u025D\x05P)\x02\u0240\u025D\x05R*\x02\u0241\u025D" +
		"\x05^0\x02\u0242\u025D\x05`1\x02\u0243\u025D\x05V,\x02\u0244\u025D\x05" +
		"X-\x02\u0245\u025D\x05Z.\x02\u0246\u025D\x05\\/\x02\u0247\u025D\x05p9" +
		"\x02\u0248\u025D\x05f4\x02\u0249\u025D\x05h5\x02\u024A\u025D\x05j6\x02" +
		"\u024B\u025D\x05l7\x02\u024C\u025D\x05r:\x02\u024D\u025D\x05v<\x02\u024E" +
		"\u025D\x05x=\x02\u024F\u025D\x05z>\x02\u0250\u025D\x05t;\x02\u0251\u025D" +
		"\x05\x8AF\x02\u0252\u025D\x05\x80A\x02\u0253\u025D\x05|?\x02\u0254\u025D" +
		"\x05~@\x02\u0255\u025D\x05n8\x02\u0256\u025D\x05\x82B\x02\u0257\u025D" +
		"\x05\x84C\x02\u0258\u025D\x05\x86D\x02\u0259\u025D\x05\x88E\x02\u025A" +
		"\u025D\x05b2\x02\u025B\u025D\x05d3\x02\u025C\u0233\x03\x02\x02\x02\u025C" +
		"\u0234\x03\x02\x02\x02\u025C\u0235\x03\x02\x02\x02\u025C\u0236\x03\x02" +
		"\x02\x02\u025C\u0237\x03\x02\x02\x02\u025C\u0238\x03\x02\x02\x02\u025C" +
		"\u0239\x03\x02\x02\x02\u025C\u023A\x03\x02\x02\x02\u025C\u023B\x03\x02" +
		"\x02\x02\u025C\u023C\x03\x02\x02\x02\u025C\u023D\x03\x02\x02\x02\u025C" +
		"\u023E\x03\x02\x02\x02\u025C\u023F\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u025C\u0240\x03\x02\x02\x02\u025C\u0241\x03\x02\x02\x02\u025C" +
		"\u0242\x03\x02\x02\x02\u025C\u0243\x03\x02\x02\x02\u025C\u0244\x03\x02" +
		"\x02\x02\u025C\u0245\x03\x02\x02\x02\u025C\u0246\x03\x02\x02\x02\u025C" +
		"\u0247\x03\x02\x02\x02\u025C\u0248\x03\x02\x02\x02\u025C\u0249\x03\x02" +
		"\x02\x02\u025C\u024A\x03\x02\x02\x02\u025C\u024B\x03\x02\x02\x02\u025C" +
		"\u024C\x03\x02\x02\x02\u025C\u024D\x03\x02\x02\x02\u025C\u024E\x03\x02" +
		"\x02\x02\u025C\u024F\x03\x02\x02\x02\u025C\u0250\x03\x02\x02\x02\u025C" +
		"\u0251\x03\x02\x02\x02\u025C\u0252\x03\x02\x02\x02\u025C\u0253\x03\x02" +
		"\x02\x02\u025C\u0254\x03\x02\x02\x02\u025C\u0255\x03\x02\x02\x02\u025C" +
		"\u0256\x03\x02\x02\x02\u025C\u0257\x03\x02\x02\x02\u025C\u0258\x03\x02" +
		"\x02\x02\u025C\u0259\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C" +
		"\u025B\x03\x02\x02\x02\u025D\x91\x03\x02\x02\x02\u025E\u026D\x05x=\x02" +
		"\u025F\u026D\x05z>\x02\u0260\u026D\x05\x96L\x02\u0261\u026D\x05\x98M\x02" +
		"\u0262\u026D\x05\x94K\x02\u0263\u026D\x05\x9AN\x02\u0264\u026D\x05v<\x02" +
		"\u0265\u026D\x05\x9CO\x02\u0266\u026D\x05r:\x02\u0267\u026D\x05t;\x02" +
		"\u0268\u026D\x05\x9EP\x02\u0269\u026D\x05\xA0Q\x02\u026A\u026D\x05\xA2" +
		"R\x02\u026B\u026D\x05\xA4S\x02\u026C\u025E\x03\x02\x02\x02\u026C\u025F" +
		"\x03\x02\x02\x02\u026C\u0260\x03\x02\x02\x02\u026C\u0261\x03\x02\x02\x02" +
		"\u026C\u0262\x03\x02\x02\x02\u026C\u0263\x03\x02\x02\x02\u026C\u0264\x03" +
		"\x02\x02\x02\u026C\u0265\x03\x02\x02\x02\u026C\u0266\x03\x02\x02\x02\u026C" +
		"\u0267\x03\x02\x02\x02\u026C\u0268\x03\x02\x02\x02\u026C\u0269\x03\x02" +
		"\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B\x03\x02\x02\x02\u026D" +
		"\x93\x03\x02\x02\x02\u026E\u026F\x07\x07\x02\x02\u026F\x95\x03\x02\x02" +
		"\x02\u0270\u0271\x07\b\x02\x02\u0271\u0272\x07B\x02\x02\u0272\u0273\x07" +
		"\x18\x02\x02\u0273\u0274\x07C\x02\x02\u0274\x97\x03\x02\x02\x02\u0275" +
		"\u0276\x07\t\x02\x02\u0276\u0277\x07B\x02\x02\u0277\u0278\x07b\x02\x02" +
		"\u0278\u0279\x07C\x02\x02\u0279\x99\x03\x02\x02\x02\u027A\u027B\x07\n" +
		"\x02\x02\u027B\u027C\x07B\x02\x02\u027C\u027D\x07b\x02\x02\u027D\u027E" +
		"\x07C\x02\x02\u027E\x9B\x03\x02\x02\x02\u027F\u0280\x07\v\x02\x02\u0280" +
		"\u0281\x07B\x02\x02\u0281\u0282\x07b\x02\x02\u0282\u0283\x07C\x02\x02" +
		"\u0283\x9D\x03\x02\x02\x02\u0284\u0285\x07\f\x02\x02\u0285\u0286\x07B" +
		"\x02\x02\u0286\u0287\x07b\x02\x02\u0287\u0288\x07C\x02\x02\u0288\x9F\x03" +
		"\x02\x02\x02\u0289\u028A\x07\r\x02\x02\u028A\u028B\x07B\x02\x02\u028B" +
		"\u028C\x07b\x02\x02\u028C\u028D\x07C\x02\x02\u028D\xA1\x03\x02\x02\x02" +
		"\u028E\u028F\x07\x0E\x02\x02\u028F\u0290\x07B\x02\x02\u0290\u0291\x07" +
		"b\x02\x02\u0291\u0292\x07C\x02\x02\u0292\xA3\x03\x02\x02\x02\u0293\u0294" +
		"\x07\x0F\x02\x02\u0294\u0295\x07B\x02\x02\u0295\u0296\x07b\x02\x02\u0296" +
		"\u0297\x07C\x02\x02\u0297\xA5\x03\x02\x02\x02\x15\xA9\xC7\xD0\xDB\xE3" +
		"\xE9\xF4\u015D\u0182\u0189\u01A7\u01AA\u01AD\u01B7\u01BA\u01BD\u0231\u025C" +
		"\u026C";
	public static readonly _serializedATN: string = Utils.join(
		[
			TransactionManifestParser._serializedATNSegment0,
			TransactionManifestParser._serializedATNSegment1,
		],
		"",
	);
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
	public callFunction(): CallFunctionContext | undefined {
		return this.tryGetRuleContext(0, CallFunctionContext);
	}
	public callNativeFunction(): CallNativeFunctionContext | undefined {
		return this.tryGetRuleContext(0, CallNativeFunctionContext);
	}
	public callMethod(): CallMethodContext | undefined {
		return this.tryGetRuleContext(0, CallMethodContext);
	}
	public callNativeMethod(): CallNativeMethodContext | undefined {
		return this.tryGetRuleContext(0, CallNativeMethodContext);
	}
	public takeFromWorktop(): TakeFromWorktopContext | undefined {
		return this.tryGetRuleContext(0, TakeFromWorktopContext);
	}
	public takeFromWorktopByAmount(): TakeFromWorktopByAmountContext | undefined {
		return this.tryGetRuleContext(0, TakeFromWorktopByAmountContext);
	}
	public takeFromWorktopByIds(): TakeFromWorktopByIdsContext | undefined {
		return this.tryGetRuleContext(0, TakeFromWorktopByIdsContext);
	}
	public returnToWorktop(): ReturnToWorktopContext | undefined {
		return this.tryGetRuleContext(0, ReturnToWorktopContext);
	}
	public assertWorktopContains(): AssertWorktopContainsContext | undefined {
		return this.tryGetRuleContext(0, AssertWorktopContainsContext);
	}
	public assertWorktopContainsByAmount(): AssertWorktopContainsByAmountContext | undefined {
		return this.tryGetRuleContext(0, AssertWorktopContainsByAmountContext);
	}
	public assertWorktopContainsByIds(): AssertWorktopContainsByIdsContext | undefined {
		return this.tryGetRuleContext(0, AssertWorktopContainsByIdsContext);
	}
	public popFromAuthZone(): PopFromAuthZoneContext | undefined {
		return this.tryGetRuleContext(0, PopFromAuthZoneContext);
	}
	public pushToAuthZone(): PushToAuthZoneContext | undefined {
		return this.tryGetRuleContext(0, PushToAuthZoneContext);
	}
	public createProofFromAuthZone(): CreateProofFromAuthZoneContext | undefined {
		return this.tryGetRuleContext(0, CreateProofFromAuthZoneContext);
	}
	public createProofFromAuthZoneByAmount(): CreateProofFromAuthZoneByAmountContext | undefined {
		return this.tryGetRuleContext(0, CreateProofFromAuthZoneByAmountContext);
	}
	public createProofFromAuthZoneByIds(): CreateProofFromAuthZoneByIdsContext | undefined {
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
	public publishPackageWithOwner(): PublishPackageWithOwnerContext | undefined {
		return this.tryGetRuleContext(0, PublishPackageWithOwnerContext);
	}
	public burnBucket(): BurnBucketContext | undefined {
		return this.tryGetRuleContext(0, BurnBucketContext);
	}
	public mintFungible(): MintFungibleContext | undefined {
		return this.tryGetRuleContext(0, MintFungibleContext);
	}
	public createResource(): CreateResourceContext | undefined {
		return this.tryGetRuleContext(0, CreateResourceContext);
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


export class CallFunctionContext extends ParserRuleContext {
	public CALL_FUNCTION(): TerminalNode { return this.getToken(TransactionManifestParser.CALL_FUNCTION, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_callFunction; }
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


export class CallNativeFunctionContext extends ParserRuleContext {
	public CALL_NATIVE_FUNCTION(): TerminalNode { return this.getToken(TransactionManifestParser.CALL_NATIVE_FUNCTION, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_callNativeFunction; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCallNativeFunction) {
			listener.enterCallNativeFunction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCallNativeFunction) {
			listener.exitCallNativeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCallNativeFunction) {
			return visitor.visitCallNativeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallMethodContext extends ParserRuleContext {
	public CALL_METHOD(): TerminalNode { return this.getToken(TransactionManifestParser.CALL_METHOD, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	public componentAddress(): ComponentAddressContext | undefined {
		return this.tryGetRuleContext(0, ComponentAddressContext);
	}
	public component(): ComponentContext | undefined {
		return this.tryGetRuleContext(0, ComponentContext);
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
	public get ruleIndex(): number { return TransactionManifestParser.RULE_callMethod; }
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


export class CallNativeMethodContext extends ParserRuleContext {
	public CALL_NATIVE_METHOD(): TerminalNode { return this.getToken(TransactionManifestParser.CALL_NATIVE_METHOD, 0); }
	public re_node_id(): Re_node_idContext {
		return this.getRuleContext(0, Re_node_idContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_callNativeMethod; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterCallNativeMethod) {
			listener.enterCallNativeMethod(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitCallNativeMethod) {
			listener.exitCallNativeMethod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitCallNativeMethod) {
			return visitor.visitCallNativeMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TakeFromWorktopContext extends ParserRuleContext {
	public TAKE_FROM_WORKTOP(): TerminalNode { return this.getToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0); }
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_takeFromWorktop; }
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
	public TAKE_FROM_WORKTOP_BY_AMOUNT(): TerminalNode { return this.getToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT, 0); }
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_takeFromWorktopByAmount; }
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
	public TAKE_FROM_WORKTOP_BY_IDS(): TerminalNode { return this.getToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS, 0); }
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_takeFromWorktopByIds; }
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
	public RETURN_TO_WORKTOP(): TerminalNode { return this.getToken(TransactionManifestParser.RETURN_TO_WORKTOP, 0); }
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_returnToWorktop; }
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
	public ASSERT_WORKTOP_CONTAINS(): TerminalNode { return this.getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS, 0); }
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_assertWorktopContains; }
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
	public ASSERT_WORKTOP_CONTAINS_BY_AMOUNT(): TerminalNode { return this.getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT, 0); }
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_assertWorktopContainsByAmount; }
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
	public ASSERT_WORKTOP_CONTAINS_BY_IDS(): TerminalNode { return this.getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS, 0); }
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_assertWorktopContainsByIds; }
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
	public POP_FROM_AUTH_ZONE(): TerminalNode { return this.getToken(TransactionManifestParser.POP_FROM_AUTH_ZONE, 0); }
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_popFromAuthZone; }
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
	public PUSH_TO_AUTH_ZONE(): TerminalNode { return this.getToken(TransactionManifestParser.PUSH_TO_AUTH_ZONE, 0); }
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_pushToAuthZone; }
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
	public CREATE_PROOF_FROM_AUTH_ZONE(): TerminalNode { return this.getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE, 0); }
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_createProofFromAuthZone; }
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
	public CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT(): TerminalNode { return this.getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT, 0); }
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_createProofFromAuthZoneByAmount; }
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
	public CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS(): TerminalNode { return this.getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS, 0); }
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_createProofFromAuthZoneByIds; }
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
	public CREATE_PROOF_FROM_BUCKET(): TerminalNode { return this.getToken(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET, 0); }
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_createProofFromBucket; }
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
	public CLONE_PROOF(): TerminalNode { return this.getToken(TransactionManifestParser.CLONE_PROOF, 0); }
	public proof(): ProofContext[];
	public proof(i: number): ProofContext;
	public proof(i?: number): ProofContext | ProofContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProofContext);
		} else {
			return this.getRuleContext(i, ProofContext);
		}
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_cloneProof; }
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
	public DROP_PROOF(): TerminalNode { return this.getToken(TransactionManifestParser.DROP_PROOF, 0); }
	public proof(): ProofContext {
		return this.getRuleContext(0, ProofContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_dropProof; }
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
	public DROP_ALL_PROOFS(): TerminalNode { return this.getToken(TransactionManifestParser.DROP_ALL_PROOFS, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_dropAllProofs; }
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
	public CLEAR_AUTHZONE(): TerminalNode { return this.getToken(TransactionManifestParser.CLEAR_AUTHZONE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_clearAuthZone; }
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


export class PublishPackageWithOwnerContext extends ParserRuleContext {
	public PUBLISH_PACKAGE_WITH_OWNER(): TerminalNode { return this.getToken(TransactionManifestParser.PUBLISH_PACKAGE_WITH_OWNER, 0); }
	public blob(): BlobContext[];
	public blob(i: number): BlobContext;
	public blob(i?: number): BlobContext | BlobContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlobContext);
		} else {
			return this.getRuleContext(i, BlobContext);
		}
	}
	public nonFungibleAddress(): NonFungibleAddressContext {
		return this.getRuleContext(0, NonFungibleAddressContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_publishPackageWithOwner; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterPublishPackageWithOwner) {
			listener.enterPublishPackageWithOwner(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitPublishPackageWithOwner) {
			listener.exitPublishPackageWithOwner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitPublishPackageWithOwner) {
			return visitor.visitPublishPackageWithOwner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BurnBucketContext extends ParserRuleContext {
	public BURN_BUCKET(): TerminalNode { return this.getToken(TransactionManifestParser.BURN_BUCKET, 0); }
	public bucket(): BucketContext {
		return this.getRuleContext(0, BucketContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_burnBucket; }
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
	public MINT_FUNGIBLE(): TerminalNode { return this.getToken(TransactionManifestParser.MINT_FUNGIBLE, 0); }
	public resourceAddress(): ResourceAddressContext {
		return this.getRuleContext(0, ResourceAddressContext);
	}
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_mintFungible; }
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
	public CREATE_RESOURCE(): TerminalNode { return this.getToken(TransactionManifestParser.CREATE_RESOURCE, 0); }
	public enum_(): Enum_Context {
		return this.getRuleContext(0, Enum_Context);
	}
	public array(): ArrayContext[];
	public array(i: number): ArrayContext;
	public array(i?: number): ArrayContext | ArrayContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayContext);
		} else {
			return this.getRuleContext(i, ArrayContext);
		}
	}
	public SEMICOLON(): TerminalNode { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
	public option(): OptionContext | undefined {
		return this.tryGetRuleContext(0, OptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_createResource; }
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
	public EMPTY_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0); }
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


export class Enum_Context extends ParserRuleContext {
	public ENUM_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.ENUM_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
	public EMPTY_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0); }
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
	public EMPTY_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0); }
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public CLOED_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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


export class SystemAddressContext extends ParserRuleContext {
	public SYSTEM_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.SYSTEM_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_systemAddress; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterSystemAddress) {
			listener.enterSystemAddress(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitSystemAddress) {
			listener.exitSystemAddress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitSystemAddress) {
			return visitor.visitSystemAddress(this);
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


export class ComponentContext extends ParserRuleContext {
	public COMPONENT_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.COMPONENT_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_component; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterComponent) {
			listener.enterComponent(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitComponent) {
			listener.exitComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitComponent) {
			return visitor.visitComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VaultContext extends ParserRuleContext {
	public VAULT_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.VAULT_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_vault; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterVault) {
			listener.enterVault(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitVault) {
			listener.exitVault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitVault) {
			return visitor.visitVault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyValueStoreContext extends ParserRuleContext {
	public KEY_VALUE_STORE_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.KEY_VALUE_STORE_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_keyValueStore; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterKeyValueStore) {
			listener.enterKeyValueStore(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitKeyValueStore) {
			listener.exitKeyValueStore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitKeyValueStore) {
			return visitor.visitKeyValueStore(this);
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


export class NonFungibleIdContext extends ParserRuleContext {
	public NON_FUNGIBLE_ID_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public non_fungible_id_values(): Non_fungible_id_valuesContext {
		return this.getRuleContext(0, Non_fungible_id_valuesContext);
	}
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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


export class NonFungibleAddressContext extends ParserRuleContext {
	public NON_FUNGIBLE_ADDRESS_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public COMMA(): TerminalNode { return this.getToken(TransactionManifestParser.COMMA, 0); }
	public non_fungible_id_values(): Non_fungible_id_valuesContext {
		return this.getRuleContext(0, Non_fungible_id_valuesContext);
	}
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


export class BlobContext extends ParserRuleContext {
	public BLOB_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.BLOB_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_blob; }
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


export class EcdsaSecp256k1PublicKeyContext extends ParserRuleContext {
	public ECDSA_SECP256K1_PUBLIC_KEY_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_ecdsaSecp256k1PublicKey; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterEcdsaSecp256k1PublicKey) {
			listener.enterEcdsaSecp256k1PublicKey(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitEcdsaSecp256k1PublicKey) {
			listener.exitEcdsaSecp256k1PublicKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitEcdsaSecp256k1PublicKey) {
			return visitor.visitEcdsaSecp256k1PublicKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EcdsaSecp256k1SignatureContext extends ParserRuleContext {
	public ECDSA_SECP256K1_SIGNATURE_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_ecdsaSecp256k1Signature; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterEcdsaSecp256k1Signature) {
			listener.enterEcdsaSecp256k1Signature(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitEcdsaSecp256k1Signature) {
			listener.exitEcdsaSecp256k1Signature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitEcdsaSecp256k1Signature) {
			return visitor.visitEcdsaSecp256k1Signature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EddsaEd25519PublicKeyContext extends ParserRuleContext {
	public EDDSA_ED25519_PUBLIC_KEY_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_eddsaEd25519PublicKey; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterEddsaEd25519PublicKey) {
			listener.enterEddsaEd25519PublicKey(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitEddsaEd25519PublicKey) {
			listener.exitEddsaEd25519PublicKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitEddsaEd25519PublicKey) {
			return visitor.visitEddsaEd25519PublicKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EddsaEd25519SignatureContext extends ParserRuleContext {
	public EDDSA_ED25519_SIGNATURE_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_eddsaEd25519Signature; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterEddsaEd25519Signature) {
			listener.enterEddsaEd25519Signature(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitEddsaEd25519Signature) {
			listener.exitEddsaEd25519Signature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitEddsaEd25519Signature) {
			return visitor.visitEddsaEd25519Signature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public EXPRESSION_TYPE(): TerminalNode { return this.getToken(TransactionManifestParser.EXPRESSION_TYPE, 0); }
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_expression; }
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
	public ENUM_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ENUM_TYPE, 0); }
	public ARRAY_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ARRAY_TYPE, 0); }
	public TUPLE_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.TUPLE_TYPE, 0); }
	public BYTES_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.BYTES_TYPE, 0); }
	public PACKAGE_ADDRESS_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
	public COMPONENT_ADDRESS_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
	public RESOURCE_ADDRESS_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
	public SYSTEM_ADDRESS_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.SYSTEM_ADDRESS_TYPE, 0); }
	public COMPONENT_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.COMPONENT_TYPE, 0); }
	public KEY_VALUE_STORE_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.KEY_VALUE_STORE_TYPE, 0); }
	public BUCKET_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.BUCKET_TYPE, 0); }
	public PROOF_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.PROOF_TYPE, 0); }
	public VAULT_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.VAULT_TYPE, 0); }
	public EXPRESSION_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.EXPRESSION_TYPE, 0); }
	public BLOB_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.BLOB_TYPE, 0); }
	public NON_FUNGIBLE_ADDRESS_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
	public HASH_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.HASH_TYPE, 0); }
	public ECDSA_SECP256K1_PUBLIC_KEY_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE, 0); }
	public ECDSA_SECP256K1_SIGNATURE_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE, 0); }
	public EDDSA_ED25519_PUBLIC_KEY_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE, 0); }
	public EDDSA_ED25519_SIGNATURE_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE, 0); }
	public DECIMAL_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.DECIMAL_TYPE, 0); }
	public PRECISE_DECIMAL_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0); }
	public NON_FUNGIBLE_ID_TYPE(): TerminalNode | undefined { return this.tryGetToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
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


export class Non_fungible_id_valuesContext extends ParserRuleContext {
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
	public bytes(): BytesContext | undefined {
		return this.tryGetRuleContext(0, BytesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_non_fungible_id_values; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterNon_fungible_id_values) {
			listener.enterNon_fungible_id_values(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitNon_fungible_id_values) {
			listener.exitNon_fungible_id_values(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitNon_fungible_id_values) {
			return visitor.visitNon_fungible_id_values(this);
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
	public enum_(): Enum_Context | undefined {
		return this.tryGetRuleContext(0, Enum_Context);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public tuple(): TupleContext | undefined {
		return this.tryGetRuleContext(0, TupleContext);
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
	public bytes(): BytesContext | undefined {
		return this.tryGetRuleContext(0, BytesContext);
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
	public systemAddress(): SystemAddressContext | undefined {
		return this.tryGetRuleContext(0, SystemAddressContext);
	}
	public component(): ComponentContext | undefined {
		return this.tryGetRuleContext(0, ComponentContext);
	}
	public keyValueStore(): KeyValueStoreContext | undefined {
		return this.tryGetRuleContext(0, KeyValueStoreContext);
	}
	public bucket(): BucketContext | undefined {
		return this.tryGetRuleContext(0, BucketContext);
	}
	public proof(): ProofContext | undefined {
		return this.tryGetRuleContext(0, ProofContext);
	}
	public vault(): VaultContext | undefined {
		return this.tryGetRuleContext(0, VaultContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public blob(): BlobContext | undefined {
		return this.tryGetRuleContext(0, BlobContext);
	}
	public nonFungibleId(): NonFungibleIdContext | undefined {
		return this.tryGetRuleContext(0, NonFungibleIdContext);
	}
	public nonFungibleAddress(): NonFungibleAddressContext | undefined {
		return this.tryGetRuleContext(0, NonFungibleAddressContext);
	}
	public hash(): HashContext | undefined {
		return this.tryGetRuleContext(0, HashContext);
	}
	public ecdsaSecp256k1PublicKey(): EcdsaSecp256k1PublicKeyContext | undefined {
		return this.tryGetRuleContext(0, EcdsaSecp256k1PublicKeyContext);
	}
	public ecdsaSecp256k1Signature(): EcdsaSecp256k1SignatureContext | undefined {
		return this.tryGetRuleContext(0, EcdsaSecp256k1SignatureContext);
	}
	public eddsaEd25519PublicKey(): EddsaEd25519PublicKeyContext | undefined {
		return this.tryGetRuleContext(0, EddsaEd25519PublicKeyContext);
	}
	public eddsaEd25519Signature(): EddsaEd25519SignatureContext | undefined {
		return this.tryGetRuleContext(0, EddsaEd25519SignatureContext);
	}
	public decimal(): DecimalContext | undefined {
		return this.tryGetRuleContext(0, DecimalContext);
	}
	public preciseDecimal(): PreciseDecimalContext | undefined {
		return this.tryGetRuleContext(0, PreciseDecimalContext);
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


export class Re_node_idContext extends ParserRuleContext {
	public bucket(): BucketContext | undefined {
		return this.tryGetRuleContext(0, BucketContext);
	}
	public proof(): ProofContext | undefined {
		return this.tryGetRuleContext(0, ProofContext);
	}
	public authZoneStack(): AuthZoneStackContext | undefined {
		return this.tryGetRuleContext(0, AuthZoneStackContext);
	}
	public feeReserve(): FeeReserveContext | undefined {
		return this.tryGetRuleContext(0, FeeReserveContext);
	}
	public worktop(): WorktopContext | undefined {
		return this.tryGetRuleContext(0, WorktopContext);
	}
	public global(): GlobalContext | undefined {
		return this.tryGetRuleContext(0, GlobalContext);
	}
	public keyValueStore(): KeyValueStoreContext | undefined {
		return this.tryGetRuleContext(0, KeyValueStoreContext);
	}
	public nonFungibleStore(): NonFungibleStoreContext | undefined {
		return this.tryGetRuleContext(0, NonFungibleStoreContext);
	}
	public component(): ComponentContext | undefined {
		return this.tryGetRuleContext(0, ComponentContext);
	}
	public vault(): VaultContext | undefined {
		return this.tryGetRuleContext(0, VaultContext);
	}
	public resourceManager(): ResourceManagerContext | undefined {
		return this.tryGetRuleContext(0, ResourceManagerContext);
	}
	public package_(): Package_Context | undefined {
		return this.tryGetRuleContext(0, Package_Context);
	}
	public epochManager(): EpochManagerContext | undefined {
		return this.tryGetRuleContext(0, EpochManagerContext);
	}
	public clock(): ClockContext | undefined {
		return this.tryGetRuleContext(0, ClockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_re_node_id; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterRe_node_id) {
			listener.enterRe_node_id(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitRe_node_id) {
			listener.exitRe_node_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitRe_node_id) {
			return visitor.visitRe_node_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WorktopContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_worktop; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterWorktop) {
			listener.enterWorktop(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitWorktop) {
			listener.exitWorktop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitWorktop) {
			return visitor.visitWorktop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AuthZoneStackContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public U32_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.U32_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_authZoneStack; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterAuthZoneStack) {
			listener.enterAuthZoneStack(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitAuthZoneStack) {
			listener.exitAuthZoneStack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitAuthZoneStack) {
			return visitor.visitAuthZoneStack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FeeReserveContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_feeReserve; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterFeeReserve) {
			listener.enterFeeReserve(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitFeeReserve) {
			listener.exitFeeReserve(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitFeeReserve) {
			return visitor.visitFeeReserve(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_global; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterGlobal) {
			listener.enterGlobal(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitGlobal) {
			listener.exitGlobal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitGlobal) {
			return visitor.visitGlobal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonFungibleStoreContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_nonFungibleStore; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterNonFungibleStore) {
			listener.enterNonFungibleStore(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitNonFungibleStore) {
			listener.exitNonFungibleStore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitNonFungibleStore) {
			return visitor.visitNonFungibleStore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceManagerContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_resourceManager; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterResourceManager) {
			listener.enterResourceManager(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitResourceManager) {
			listener.exitResourceManager(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitResourceManager) {
			return visitor.visitResourceManager(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Package_Context extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_package_; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterPackage_) {
			listener.enterPackage_(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitPackage_) {
			listener.exitPackage_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitPackage_) {
			return visitor.visitPackage_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EpochManagerContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_epochManager; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterEpochManager) {
			listener.enterEpochManager(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitEpochManager) {
			listener.exitEpochManager(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitEpochManager) {
			return visitor.visitEpochManager(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClockContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
	public CLOED_PARENTHESIS(): TerminalNode { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionManifestParser.RULE_clock; }
	// @Override
	public enterRule(listener: TransactionManifestListener): void {
		if (listener.enterClock) {
			listener.enterClock(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionManifestListener): void {
		if (listener.exitClock) {
			listener.exitClock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionManifestVisitor<Result>): Result {
		if (visitor.visitClock) {
			return visitor.visitClock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


