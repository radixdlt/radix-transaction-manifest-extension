// Generated from /Users/omarabdulla/Desktop/radix-transaction-manifest-extension/src/TransactionManifest.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TransactionManifestParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, BOOL_LITERAL=14, I8_LITERAL=15, 
		I16_LITERAL=16, I32_LITERAL=17, I64_LITERAL=18, I128_LITERAL=19, U8_LITERAL=20, 
		U16_LITERAL=21, U32_LITERAL=22, U64_LITERAL=23, U128_LITERAL=24, TRUE=25, 
		FALSE=26, UNIT_TYPE=27, BOOL_TYPE=28, I8_TYPE=29, I16_TYPE=30, I32_TYPE=31, 
		I64_TYPE=32, I128_TYPE=33, U8_TYPE=34, U16_TYPE=35, U32_TYPE=36, U64_TYPE=37, 
		U128_TYPE=38, STRING_TYPE=39, ENUM_TYPE=40, ARRAY_TYPE=41, TUPLE_TYPE=42, 
		BYTES_TYPE=43, PACKAGE_ADDRESS_TYPE=44, COMPONENT_ADDRESS_TYPE=45, RESOURCE_ADDRESS_TYPE=46, 
		SYSTEM_ADDRESS_TYPE=47, COMPONENT_TYPE=48, KEY_VALUE_STORE_TYPE=49, BUCKET_TYPE=50, 
		PROOF_TYPE=51, VAULT_TYPE=52, EXPRESSION_TYPE=53, BLOB_TYPE=54, NON_FUNGIBLE_ADDRESS_TYPE=55, 
		HASH_TYPE=56, ECDSA_SECP256K1_PUBLIC_KEY_TYPE=57, ECDSA_SECP256K1_SIGNATURE_TYPE=58, 
		EDDSA_ED25519_PUBLIC_KEY_TYPE=59, EDDSA_ED25519_SIGNATURE_TYPE=60, DECIMAL_TYPE=61, 
		PRECISE_DECIMAL_TYPE=62, NON_FUNGIBLE_ID_TYPE=63, OPEN_PARENTHESIS=64, 
		CLOED_PARENTHESIS=65, EMPTY_PARENTHESIS=66, LESS_THAN=67, GREATER_THAN=68, 
		COMMA=69, SEMICOLON=70, TAKE_FROM_WORKTOP=71, TAKE_FROM_WORKTOP_BY_AMOUNT=72, 
		TAKE_FROM_WORKTOP_BY_IDS=73, ASSERT_WORKTOP_CONTAINS=74, ASSERT_WORKTOP_CONTAINS_BY_AMOUNT=75, 
		ASSERT_WORKTOP_CONTAINS_BY_IDS=76, RETURN_TO_WORKTOP=77, POP_FROM_AUTH_ZONE=78, 
		PUSH_TO_AUTH_ZONE=79, CLEAR_AUTHZONE=80, CREATE_PROOF_FROM_AUTH_ZONE=81, 
		CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT=82, CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS=83, 
		CREATE_PROOF_FROM_BUCKET=84, CLONE_PROOF=85, DROP_PROOF=86, DROP_ALL_PROOFS=87, 
		CALL_FUNCTION=88, CALL_METHOD=89, CALL_NATIVE_FUNCTION=90, CALL_NATIVE_METHOD=91, 
		PUBLISH_PACKAGE_WITH_OWNER=92, BURN_BUCKET=93, MINT_FUNGIBLE=94, CREATE_RESOURCE=95, 
		STRING_LITERAL=96, DIGIT=97, LETTER=98, NUMBER=99, WS=100, COMMENT=101;
	public static final int
		RULE_manifest = 0, RULE_manifestInstruction = 1, RULE_callFunction = 2, 
		RULE_callNativeFunction = 3, RULE_callMethod = 4, RULE_callNativeMethod = 5, 
		RULE_takeFromWorktop = 6, RULE_takeFromWorktopByAmount = 7, RULE_takeFromWorktopByIds = 8, 
		RULE_returnToWorktop = 9, RULE_assertWorktopContains = 10, RULE_assertWorktopContainsByAmount = 11, 
		RULE_assertWorktopContainsByIds = 12, RULE_popFromAuthZone = 13, RULE_pushToAuthZone = 14, 
		RULE_createProofFromAuthZone = 15, RULE_createProofFromAuthZoneByAmount = 16, 
		RULE_createProofFromAuthZoneByIds = 17, RULE_createProofFromBucket = 18, 
		RULE_cloneProof = 19, RULE_dropProof = 20, RULE_dropAllProofs = 21, RULE_clearAuthZone = 22, 
		RULE_publishPackageWithOwner = 23, RULE_burnBucket = 24, RULE_mintFungible = 25, 
		RULE_createResource = 26, RULE_unit = 27, RULE_bool = 28, RULE_i8 = 29, 
		RULE_i16 = 30, RULE_i32 = 31, RULE_i64 = 32, RULE_i128 = 33, RULE_u8 = 34, 
		RULE_u16 = 35, RULE_u32 = 36, RULE_u64 = 37, RULE_u128 = 38, RULE_string = 39, 
		RULE_enum_ = 40, RULE_option = 41, RULE_some = 42, RULE_none = 43, RULE_ok = 44, 
		RULE_err = 45, RULE_array = 46, RULE_tuple = 47, RULE_decimal = 48, RULE_preciseDecimal = 49, 
		RULE_packageAddress = 50, RULE_componentAddress = 51, RULE_resourceAddress = 52, 
		RULE_systemAddress = 53, RULE_hash = 54, RULE_bytes = 55, RULE_component = 56, 
		RULE_vault = 57, RULE_keyValueStore = 58, RULE_bucket = 59, RULE_proof = 60, 
		RULE_nonFungibleId = 61, RULE_nonFungibleAddress = 62, RULE_blob = 63, 
		RULE_ecdsaSecp256k1PublicKey = 64, RULE_ecdsaSecp256k1Signature = 65, 
		RULE_eddsaEd25519PublicKey = 66, RULE_eddsaEd25519Signature = 67, RULE_expression = 68, 
		RULE_type = 69, RULE_non_fungible_id_values = 70, RULE_value = 71, RULE_re_node_id = 72, 
		RULE_worktop = 73, RULE_authZoneStack = 74, RULE_feeReserve = 75, RULE_global = 76, 
		RULE_nonFungibleStore = 77, RULE_resourceManager = 78, RULE_package_ = 79, 
		RULE_epochManager = 80, RULE_clock = 81;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"resourceManager", "package_", "epochManager", "clock"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Some'", "'None'", "'Ok'", "'Err'", "'Worktop'", "'AuthZoneStack'", 
			"'FeeReserve'", "'Global'", "'NonFungibleStore'", "'ResourceManager'", 
			"'Package'", "'EpochManager'", "'Clock'", null, null, null, null, null, 
			null, null, null, null, null, null, "'true'", "'false'", "'Unit'", "'Bool'", 
			"'I8'", "'I16'", "'I32'", "'I64'", "'I128'", "'U8'", "'U16'", "'U32'", 
			"'U64'", "'U128'", "'String'", "'Enum'", "'Array'", "'Tuple'", "'Bytes'", 
			"'PackageAddress'", "'ComponentAddress'", "'ResourceAddress'", "'SystemAddress'", 
			"'Component'", "'KeyValueStore'", "'Bucket'", "'Proof'", "'Vault'", "'Expression'", 
			"'Blob'", "'NonFungibleAddress'", "'Hash'", "'EcdsaSecp256K1PublicKey'", 
			"'EcdsaSecp256K1Signature'", "'EddsaEd25519PublicKey'", "'EddsaEd25519Signature'", 
			"'Decimal'", "'PreciseDecimal'", "'NonFungibleId'", "'('", "')'", "'()'", 
			"'<'", "'>'", "','", "';'", "'TAKE_FROM_WORKTOP'", "'TAKE_FROM_WORKTOP_BY_AMOUNT'", 
			"'TAKE_FROM_WORKTOP_BY_IDS'", "'ASSERT_WORKTOP_CONTAINS'", "'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT'", 
			"'ASSERT_WORKTOP_CONTAINS_BY_IDS'", "'RETURN_TO_WORKTOP'", "'POP_FROM_AUTH_ZONE'", 
			"'PUSH_TO_AUTH_ZONE'", "'CLEAR_AUTHZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE'", 
			"'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT'", "'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS'", 
			"'CREATE_PROOF_FROM_BUCKET'", "'CLONE_PROOF'", "'DROP_PROOF'", "'DROP_ALL_PROOFS'", 
			"'CALL_FUNCTION'", "'CALL_METHOD'", "'CALL_NATIVE_FUNCTION'", "'CALL_NATIVE_METHOD'", 
			"'PUBLISH_PACKAGE_WITH_OWNER'", "'BURN_BUCKET'", "'MINT_FUNGIBLE'", "'CREATE_RESOURCE'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "BOOL_LITERAL", "I8_LITERAL", "I16_LITERAL", "I32_LITERAL", 
			"I64_LITERAL", "I128_LITERAL", "U8_LITERAL", "U16_LITERAL", "U32_LITERAL", 
			"U64_LITERAL", "U128_LITERAL", "TRUE", "FALSE", "UNIT_TYPE", "BOOL_TYPE", 
			"I8_TYPE", "I16_TYPE", "I32_TYPE", "I64_TYPE", "I128_TYPE", "U8_TYPE", 
			"U16_TYPE", "U32_TYPE", "U64_TYPE", "U128_TYPE", "STRING_TYPE", "ENUM_TYPE", 
			"ARRAY_TYPE", "TUPLE_TYPE", "BYTES_TYPE", "PACKAGE_ADDRESS_TYPE", "COMPONENT_ADDRESS_TYPE", 
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
			"STRING_LITERAL", "DIGIT", "LETTER", "NUMBER", "WS", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "TransactionManifest.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TransactionManifestParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ManifestContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(TransactionManifestParser.EOF, 0); }
		public List<ManifestInstructionContext> manifestInstruction() {
			return getRuleContexts(ManifestInstructionContext.class);
		}
		public ManifestInstructionContext manifestInstruction(int i) {
			return getRuleContext(ManifestInstructionContext.class,i);
		}
		public ManifestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_manifest; }
	}

	public final ManifestContext manifest() throws RecognitionException {
		ManifestContext _localctx = new ManifestContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_manifest);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & ((1L << (TAKE_FROM_WORKTOP - 71)) | (1L << (TAKE_FROM_WORKTOP_BY_AMOUNT - 71)) | (1L << (TAKE_FROM_WORKTOP_BY_IDS - 71)) | (1L << (ASSERT_WORKTOP_CONTAINS - 71)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 71)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_IDS - 71)) | (1L << (RETURN_TO_WORKTOP - 71)) | (1L << (POP_FROM_AUTH_ZONE - 71)) | (1L << (PUSH_TO_AUTH_ZONE - 71)) | (1L << (CLEAR_AUTHZONE - 71)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE - 71)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 71)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 71)) | (1L << (CREATE_PROOF_FROM_BUCKET - 71)) | (1L << (CLONE_PROOF - 71)) | (1L << (DROP_PROOF - 71)) | (1L << (DROP_ALL_PROOFS - 71)) | (1L << (CALL_FUNCTION - 71)) | (1L << (CALL_METHOD - 71)) | (1L << (CALL_NATIVE_FUNCTION - 71)) | (1L << (CALL_NATIVE_METHOD - 71)) | (1L << (PUBLISH_PACKAGE_WITH_OWNER - 71)) | (1L << (BURN_BUCKET - 71)) | (1L << (MINT_FUNGIBLE - 71)) | (1L << (CREATE_RESOURCE - 71)))) != 0)) {
				{
				{
				setState(164);
				manifestInstruction();
				}
				}
				setState(169);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(170);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ManifestInstructionContext extends ParserRuleContext {
		public CallFunctionContext callFunction() {
			return getRuleContext(CallFunctionContext.class,0);
		}
		public CallNativeFunctionContext callNativeFunction() {
			return getRuleContext(CallNativeFunctionContext.class,0);
		}
		public CallMethodContext callMethod() {
			return getRuleContext(CallMethodContext.class,0);
		}
		public CallNativeMethodContext callNativeMethod() {
			return getRuleContext(CallNativeMethodContext.class,0);
		}
		public TakeFromWorktopContext takeFromWorktop() {
			return getRuleContext(TakeFromWorktopContext.class,0);
		}
		public TakeFromWorktopByAmountContext takeFromWorktopByAmount() {
			return getRuleContext(TakeFromWorktopByAmountContext.class,0);
		}
		public TakeFromWorktopByIdsContext takeFromWorktopByIds() {
			return getRuleContext(TakeFromWorktopByIdsContext.class,0);
		}
		public ReturnToWorktopContext returnToWorktop() {
			return getRuleContext(ReturnToWorktopContext.class,0);
		}
		public AssertWorktopContainsContext assertWorktopContains() {
			return getRuleContext(AssertWorktopContainsContext.class,0);
		}
		public AssertWorktopContainsByAmountContext assertWorktopContainsByAmount() {
			return getRuleContext(AssertWorktopContainsByAmountContext.class,0);
		}
		public AssertWorktopContainsByIdsContext assertWorktopContainsByIds() {
			return getRuleContext(AssertWorktopContainsByIdsContext.class,0);
		}
		public PopFromAuthZoneContext popFromAuthZone() {
			return getRuleContext(PopFromAuthZoneContext.class,0);
		}
		public PushToAuthZoneContext pushToAuthZone() {
			return getRuleContext(PushToAuthZoneContext.class,0);
		}
		public CreateProofFromAuthZoneContext createProofFromAuthZone() {
			return getRuleContext(CreateProofFromAuthZoneContext.class,0);
		}
		public CreateProofFromAuthZoneByAmountContext createProofFromAuthZoneByAmount() {
			return getRuleContext(CreateProofFromAuthZoneByAmountContext.class,0);
		}
		public CreateProofFromAuthZoneByIdsContext createProofFromAuthZoneByIds() {
			return getRuleContext(CreateProofFromAuthZoneByIdsContext.class,0);
		}
		public CreateProofFromBucketContext createProofFromBucket() {
			return getRuleContext(CreateProofFromBucketContext.class,0);
		}
		public CloneProofContext cloneProof() {
			return getRuleContext(CloneProofContext.class,0);
		}
		public DropProofContext dropProof() {
			return getRuleContext(DropProofContext.class,0);
		}
		public DropAllProofsContext dropAllProofs() {
			return getRuleContext(DropAllProofsContext.class,0);
		}
		public ClearAuthZoneContext clearAuthZone() {
			return getRuleContext(ClearAuthZoneContext.class,0);
		}
		public PublishPackageWithOwnerContext publishPackageWithOwner() {
			return getRuleContext(PublishPackageWithOwnerContext.class,0);
		}
		public BurnBucketContext burnBucket() {
			return getRuleContext(BurnBucketContext.class,0);
		}
		public MintFungibleContext mintFungible() {
			return getRuleContext(MintFungibleContext.class,0);
		}
		public CreateResourceContext createResource() {
			return getRuleContext(CreateResourceContext.class,0);
		}
		public ManifestInstructionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_manifestInstruction; }
	}

	public final ManifestInstructionContext manifestInstruction() throws RecognitionException {
		ManifestInstructionContext _localctx = new ManifestInstructionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_manifestInstruction);
		try {
			setState(197);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CALL_FUNCTION:
				enterOuterAlt(_localctx, 1);
				{
				setState(172);
				callFunction();
				}
				break;
			case CALL_NATIVE_FUNCTION:
				enterOuterAlt(_localctx, 2);
				{
				setState(173);
				callNativeFunction();
				}
				break;
			case CALL_METHOD:
				enterOuterAlt(_localctx, 3);
				{
				setState(174);
				callMethod();
				}
				break;
			case CALL_NATIVE_METHOD:
				enterOuterAlt(_localctx, 4);
				{
				setState(175);
				callNativeMethod();
				}
				break;
			case TAKE_FROM_WORKTOP:
				enterOuterAlt(_localctx, 5);
				{
				setState(176);
				takeFromWorktop();
				}
				break;
			case TAKE_FROM_WORKTOP_BY_AMOUNT:
				enterOuterAlt(_localctx, 6);
				{
				setState(177);
				takeFromWorktopByAmount();
				}
				break;
			case TAKE_FROM_WORKTOP_BY_IDS:
				enterOuterAlt(_localctx, 7);
				{
				setState(178);
				takeFromWorktopByIds();
				}
				break;
			case RETURN_TO_WORKTOP:
				enterOuterAlt(_localctx, 8);
				{
				setState(179);
				returnToWorktop();
				}
				break;
			case ASSERT_WORKTOP_CONTAINS:
				enterOuterAlt(_localctx, 9);
				{
				setState(180);
				assertWorktopContains();
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
				enterOuterAlt(_localctx, 10);
				{
				setState(181);
				assertWorktopContainsByAmount();
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_IDS:
				enterOuterAlt(_localctx, 11);
				{
				setState(182);
				assertWorktopContainsByIds();
				}
				break;
			case POP_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 12);
				{
				setState(183);
				popFromAuthZone();
				}
				break;
			case PUSH_TO_AUTH_ZONE:
				enterOuterAlt(_localctx, 13);
				{
				setState(184);
				pushToAuthZone();
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 14);
				{
				setState(185);
				createProofFromAuthZone();
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
				enterOuterAlt(_localctx, 15);
				{
				setState(186);
				createProofFromAuthZoneByAmount();
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
				enterOuterAlt(_localctx, 16);
				{
				setState(187);
				createProofFromAuthZoneByIds();
				}
				break;
			case CREATE_PROOF_FROM_BUCKET:
				enterOuterAlt(_localctx, 17);
				{
				setState(188);
				createProofFromBucket();
				}
				break;
			case CLONE_PROOF:
				enterOuterAlt(_localctx, 18);
				{
				setState(189);
				cloneProof();
				}
				break;
			case DROP_PROOF:
				enterOuterAlt(_localctx, 19);
				{
				setState(190);
				dropProof();
				}
				break;
			case DROP_ALL_PROOFS:
				enterOuterAlt(_localctx, 20);
				{
				setState(191);
				dropAllProofs();
				}
				break;
			case CLEAR_AUTHZONE:
				enterOuterAlt(_localctx, 21);
				{
				setState(192);
				clearAuthZone();
				}
				break;
			case PUBLISH_PACKAGE_WITH_OWNER:
				enterOuterAlt(_localctx, 22);
				{
				setState(193);
				publishPackageWithOwner();
				}
				break;
			case BURN_BUCKET:
				enterOuterAlt(_localctx, 23);
				{
				setState(194);
				burnBucket();
				}
				break;
			case MINT_FUNGIBLE:
				enterOuterAlt(_localctx, 24);
				{
				setState(195);
				mintFungible();
				}
				break;
			case CREATE_RESOURCE:
				enterOuterAlt(_localctx, 25);
				{
				setState(196);
				createResource();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallFunctionContext extends ParserRuleContext {
		public TerminalNode CALL_FUNCTION() { return getToken(TransactionManifestParser.CALL_FUNCTION, 0); }
		public PackageAddressContext packageAddress() {
			return getRuleContext(PackageAddressContext.class,0);
		}
		public List<StringContext> string() {
			return getRuleContexts(StringContext.class);
		}
		public StringContext string(int i) {
			return getRuleContext(StringContext.class,i);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public CallFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callFunction; }
	}

	public final CallFunctionContext callFunction() throws RecognitionException {
		CallFunctionContext _localctx = new CallFunctionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_callFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			match(CALL_FUNCTION);
			setState(200);
			packageAddress();
			setState(201);
			string();
			setState(202);
			string();
			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << ENUM_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << BYTES_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << SYSTEM_ADDRESS_TYPE) | (1L << COMPONENT_TYPE) | (1L << KEY_VALUE_STORE_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << VAULT_TYPE) | (1L << EXPRESSION_TYPE) | (1L << BLOB_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << ECDSA_SECP256K1_PUBLIC_KEY_TYPE) | (1L << ECDSA_SECP256K1_SIGNATURE_TYPE) | (1L << EDDSA_ED25519_PUBLIC_KEY_TYPE) | (1L << EDDSA_ED25519_SIGNATURE_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE))) != 0) || _la==EMPTY_PARENTHESIS || _la==STRING_LITERAL) {
				{
				{
				setState(203);
				value();
				}
				}
				setState(208);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(209);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallNativeFunctionContext extends ParserRuleContext {
		public TerminalNode CALL_NATIVE_FUNCTION() { return getToken(TransactionManifestParser.CALL_NATIVE_FUNCTION, 0); }
		public List<StringContext> string() {
			return getRuleContexts(StringContext.class);
		}
		public StringContext string(int i) {
			return getRuleContext(StringContext.class,i);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public CallNativeFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callNativeFunction; }
	}

	public final CallNativeFunctionContext callNativeFunction() throws RecognitionException {
		CallNativeFunctionContext _localctx = new CallNativeFunctionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_callNativeFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(CALL_NATIVE_FUNCTION);
			setState(212);
			string();
			setState(213);
			string();
			setState(217);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << ENUM_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << BYTES_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << SYSTEM_ADDRESS_TYPE) | (1L << COMPONENT_TYPE) | (1L << KEY_VALUE_STORE_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << VAULT_TYPE) | (1L << EXPRESSION_TYPE) | (1L << BLOB_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << ECDSA_SECP256K1_PUBLIC_KEY_TYPE) | (1L << ECDSA_SECP256K1_SIGNATURE_TYPE) | (1L << EDDSA_ED25519_PUBLIC_KEY_TYPE) | (1L << EDDSA_ED25519_SIGNATURE_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE))) != 0) || _la==EMPTY_PARENTHESIS || _la==STRING_LITERAL) {
				{
				{
				setState(214);
				value();
				}
				}
				setState(219);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(220);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallMethodContext extends ParserRuleContext {
		public TerminalNode CALL_METHOD() { return getToken(TransactionManifestParser.CALL_METHOD, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public ComponentAddressContext componentAddress() {
			return getRuleContext(ComponentAddressContext.class,0);
		}
		public ComponentContext component() {
			return getRuleContext(ComponentContext.class,0);
		}
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public CallMethodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callMethod; }
	}

	public final CallMethodContext callMethod() throws RecognitionException {
		CallMethodContext _localctx = new CallMethodContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_callMethod);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			match(CALL_METHOD);
			setState(225);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COMPONENT_ADDRESS_TYPE:
				{
				setState(223);
				componentAddress();
				}
				break;
			case COMPONENT_TYPE:
				{
				setState(224);
				component();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(227);
			string();
			setState(231);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << ENUM_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << BYTES_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << SYSTEM_ADDRESS_TYPE) | (1L << COMPONENT_TYPE) | (1L << KEY_VALUE_STORE_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << VAULT_TYPE) | (1L << EXPRESSION_TYPE) | (1L << BLOB_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << ECDSA_SECP256K1_PUBLIC_KEY_TYPE) | (1L << ECDSA_SECP256K1_SIGNATURE_TYPE) | (1L << EDDSA_ED25519_PUBLIC_KEY_TYPE) | (1L << EDDSA_ED25519_SIGNATURE_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE))) != 0) || _la==EMPTY_PARENTHESIS || _la==STRING_LITERAL) {
				{
				{
				setState(228);
				value();
				}
				}
				setState(233);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(234);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallNativeMethodContext extends ParserRuleContext {
		public TerminalNode CALL_NATIVE_METHOD() { return getToken(TransactionManifestParser.CALL_NATIVE_METHOD, 0); }
		public Re_node_idContext re_node_id() {
			return getRuleContext(Re_node_idContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public CallNativeMethodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callNativeMethod; }
	}

	public final CallNativeMethodContext callNativeMethod() throws RecognitionException {
		CallNativeMethodContext _localctx = new CallNativeMethodContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_callNativeMethod);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			match(CALL_NATIVE_METHOD);
			setState(237);
			re_node_id();
			setState(238);
			string();
			setState(242);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << ENUM_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << BYTES_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << SYSTEM_ADDRESS_TYPE) | (1L << COMPONENT_TYPE) | (1L << KEY_VALUE_STORE_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << VAULT_TYPE) | (1L << EXPRESSION_TYPE) | (1L << BLOB_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << ECDSA_SECP256K1_PUBLIC_KEY_TYPE) | (1L << ECDSA_SECP256K1_SIGNATURE_TYPE) | (1L << EDDSA_ED25519_PUBLIC_KEY_TYPE) | (1L << EDDSA_ED25519_SIGNATURE_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE))) != 0) || _la==EMPTY_PARENTHESIS || _la==STRING_LITERAL) {
				{
				{
				setState(239);
				value();
				}
				}
				setState(244);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(245);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TakeFromWorktopContext extends ParserRuleContext {
		public TerminalNode TAKE_FROM_WORKTOP() { return getToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0); }
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public TakeFromWorktopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_takeFromWorktop; }
	}

	public final TakeFromWorktopContext takeFromWorktop() throws RecognitionException {
		TakeFromWorktopContext _localctx = new TakeFromWorktopContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_takeFromWorktop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			match(TAKE_FROM_WORKTOP);
			setState(248);
			resourceAddress();
			setState(249);
			bucket();
			setState(250);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TakeFromWorktopByAmountContext extends ParserRuleContext {
		public TerminalNode TAKE_FROM_WORKTOP_BY_AMOUNT() { return getToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT, 0); }
		public DecimalContext decimal() {
			return getRuleContext(DecimalContext.class,0);
		}
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public TakeFromWorktopByAmountContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_takeFromWorktopByAmount; }
	}

	public final TakeFromWorktopByAmountContext takeFromWorktopByAmount() throws RecognitionException {
		TakeFromWorktopByAmountContext _localctx = new TakeFromWorktopByAmountContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_takeFromWorktopByAmount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(252);
			match(TAKE_FROM_WORKTOP_BY_AMOUNT);
			setState(253);
			decimal();
			setState(254);
			resourceAddress();
			setState(255);
			bucket();
			setState(256);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TakeFromWorktopByIdsContext extends ParserRuleContext {
		public TerminalNode TAKE_FROM_WORKTOP_BY_IDS() { return getToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS, 0); }
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public TakeFromWorktopByIdsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_takeFromWorktopByIds; }
	}

	public final TakeFromWorktopByIdsContext takeFromWorktopByIds() throws RecognitionException {
		TakeFromWorktopByIdsContext _localctx = new TakeFromWorktopByIdsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_takeFromWorktopByIds);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(TAKE_FROM_WORKTOP_BY_IDS);
			setState(259);
			array();
			setState(260);
			resourceAddress();
			setState(261);
			bucket();
			setState(262);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnToWorktopContext extends ParserRuleContext {
		public TerminalNode RETURN_TO_WORKTOP() { return getToken(TransactionManifestParser.RETURN_TO_WORKTOP, 0); }
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public ReturnToWorktopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnToWorktop; }
	}

	public final ReturnToWorktopContext returnToWorktop() throws RecognitionException {
		ReturnToWorktopContext _localctx = new ReturnToWorktopContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_returnToWorktop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(RETURN_TO_WORKTOP);
			setState(265);
			bucket();
			setState(266);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssertWorktopContainsContext extends ParserRuleContext {
		public TerminalNode ASSERT_WORKTOP_CONTAINS() { return getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS, 0); }
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public AssertWorktopContainsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assertWorktopContains; }
	}

	public final AssertWorktopContainsContext assertWorktopContains() throws RecognitionException {
		AssertWorktopContainsContext _localctx = new AssertWorktopContainsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_assertWorktopContains);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(268);
			match(ASSERT_WORKTOP_CONTAINS);
			setState(269);
			resourceAddress();
			setState(270);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssertWorktopContainsByAmountContext extends ParserRuleContext {
		public TerminalNode ASSERT_WORKTOP_CONTAINS_BY_AMOUNT() { return getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT, 0); }
		public DecimalContext decimal() {
			return getRuleContext(DecimalContext.class,0);
		}
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public AssertWorktopContainsByAmountContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assertWorktopContainsByAmount; }
	}

	public final AssertWorktopContainsByAmountContext assertWorktopContainsByAmount() throws RecognitionException {
		AssertWorktopContainsByAmountContext _localctx = new AssertWorktopContainsByAmountContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_assertWorktopContainsByAmount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			match(ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
			setState(273);
			decimal();
			setState(274);
			resourceAddress();
			setState(275);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssertWorktopContainsByIdsContext extends ParserRuleContext {
		public TerminalNode ASSERT_WORKTOP_CONTAINS_BY_IDS() { return getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS, 0); }
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public AssertWorktopContainsByIdsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assertWorktopContainsByIds; }
	}

	public final AssertWorktopContainsByIdsContext assertWorktopContainsByIds() throws RecognitionException {
		AssertWorktopContainsByIdsContext _localctx = new AssertWorktopContainsByIdsContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_assertWorktopContainsByIds);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(277);
			match(ASSERT_WORKTOP_CONTAINS_BY_IDS);
			setState(278);
			array();
			setState(279);
			resourceAddress();
			setState(280);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PopFromAuthZoneContext extends ParserRuleContext {
		public TerminalNode POP_FROM_AUTH_ZONE() { return getToken(TransactionManifestParser.POP_FROM_AUTH_ZONE, 0); }
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public PopFromAuthZoneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_popFromAuthZone; }
	}

	public final PopFromAuthZoneContext popFromAuthZone() throws RecognitionException {
		PopFromAuthZoneContext _localctx = new PopFromAuthZoneContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_popFromAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(POP_FROM_AUTH_ZONE);
			setState(283);
			proof();
			setState(284);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PushToAuthZoneContext extends ParserRuleContext {
		public TerminalNode PUSH_TO_AUTH_ZONE() { return getToken(TransactionManifestParser.PUSH_TO_AUTH_ZONE, 0); }
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public PushToAuthZoneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pushToAuthZone; }
	}

	public final PushToAuthZoneContext pushToAuthZone() throws RecognitionException {
		PushToAuthZoneContext _localctx = new PushToAuthZoneContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_pushToAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			match(PUSH_TO_AUTH_ZONE);
			setState(287);
			proof();
			setState(288);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateProofFromAuthZoneContext extends ParserRuleContext {
		public TerminalNode CREATE_PROOF_FROM_AUTH_ZONE() { return getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE, 0); }
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public CreateProofFromAuthZoneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createProofFromAuthZone; }
	}

	public final CreateProofFromAuthZoneContext createProofFromAuthZone() throws RecognitionException {
		CreateProofFromAuthZoneContext _localctx = new CreateProofFromAuthZoneContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_createProofFromAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(290);
			match(CREATE_PROOF_FROM_AUTH_ZONE);
			setState(291);
			resourceAddress();
			setState(292);
			proof();
			setState(293);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateProofFromAuthZoneByAmountContext extends ParserRuleContext {
		public TerminalNode CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT() { return getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT, 0); }
		public DecimalContext decimal() {
			return getRuleContext(DecimalContext.class,0);
		}
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public CreateProofFromAuthZoneByAmountContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createProofFromAuthZoneByAmount; }
	}

	public final CreateProofFromAuthZoneByAmountContext createProofFromAuthZoneByAmount() throws RecognitionException {
		CreateProofFromAuthZoneByAmountContext _localctx = new CreateProofFromAuthZoneByAmountContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_createProofFromAuthZoneByAmount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
			setState(296);
			decimal();
			setState(297);
			resourceAddress();
			setState(298);
			proof();
			setState(299);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateProofFromAuthZoneByIdsContext extends ParserRuleContext {
		public TerminalNode CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS() { return getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS, 0); }
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public CreateProofFromAuthZoneByIdsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createProofFromAuthZoneByIds; }
	}

	public final CreateProofFromAuthZoneByIdsContext createProofFromAuthZoneByIds() throws RecognitionException {
		CreateProofFromAuthZoneByIdsContext _localctx = new CreateProofFromAuthZoneByIdsContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_createProofFromAuthZoneByIds);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
			match(CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
			setState(302);
			array();
			setState(303);
			resourceAddress();
			setState(304);
			proof();
			setState(305);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateProofFromBucketContext extends ParserRuleContext {
		public TerminalNode CREATE_PROOF_FROM_BUCKET() { return getToken(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET, 0); }
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public CreateProofFromBucketContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createProofFromBucket; }
	}

	public final CreateProofFromBucketContext createProofFromBucket() throws RecognitionException {
		CreateProofFromBucketContext _localctx = new CreateProofFromBucketContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_createProofFromBucket);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			match(CREATE_PROOF_FROM_BUCKET);
			setState(308);
			bucket();
			setState(309);
			proof();
			setState(310);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CloneProofContext extends ParserRuleContext {
		public TerminalNode CLONE_PROOF() { return getToken(TransactionManifestParser.CLONE_PROOF, 0); }
		public List<ProofContext> proof() {
			return getRuleContexts(ProofContext.class);
		}
		public ProofContext proof(int i) {
			return getRuleContext(ProofContext.class,i);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public CloneProofContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cloneProof; }
	}

	public final CloneProofContext cloneProof() throws RecognitionException {
		CloneProofContext _localctx = new CloneProofContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_cloneProof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(312);
			match(CLONE_PROOF);
			setState(313);
			proof();
			setState(314);
			proof();
			setState(315);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropProofContext extends ParserRuleContext {
		public TerminalNode DROP_PROOF() { return getToken(TransactionManifestParser.DROP_PROOF, 0); }
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public DropProofContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropProof; }
	}

	public final DropProofContext dropProof() throws RecognitionException {
		DropProofContext _localctx = new DropProofContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_dropProof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(DROP_PROOF);
			setState(318);
			proof();
			setState(319);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropAllProofsContext extends ParserRuleContext {
		public TerminalNode DROP_ALL_PROOFS() { return getToken(TransactionManifestParser.DROP_ALL_PROOFS, 0); }
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public DropAllProofsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropAllProofs; }
	}

	public final DropAllProofsContext dropAllProofs() throws RecognitionException {
		DropAllProofsContext _localctx = new DropAllProofsContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_dropAllProofs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			match(DROP_ALL_PROOFS);
			setState(322);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClearAuthZoneContext extends ParserRuleContext {
		public TerminalNode CLEAR_AUTHZONE() { return getToken(TransactionManifestParser.CLEAR_AUTHZONE, 0); }
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public ClearAuthZoneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clearAuthZone; }
	}

	public final ClearAuthZoneContext clearAuthZone() throws RecognitionException {
		ClearAuthZoneContext _localctx = new ClearAuthZoneContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_clearAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			match(CLEAR_AUTHZONE);
			setState(325);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PublishPackageWithOwnerContext extends ParserRuleContext {
		public TerminalNode PUBLISH_PACKAGE_WITH_OWNER() { return getToken(TransactionManifestParser.PUBLISH_PACKAGE_WITH_OWNER, 0); }
		public List<BlobContext> blob() {
			return getRuleContexts(BlobContext.class);
		}
		public BlobContext blob(int i) {
			return getRuleContext(BlobContext.class,i);
		}
		public NonFungibleAddressContext nonFungibleAddress() {
			return getRuleContext(NonFungibleAddressContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public PublishPackageWithOwnerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_publishPackageWithOwner; }
	}

	public final PublishPackageWithOwnerContext publishPackageWithOwner() throws RecognitionException {
		PublishPackageWithOwnerContext _localctx = new PublishPackageWithOwnerContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_publishPackageWithOwner);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(327);
			match(PUBLISH_PACKAGE_WITH_OWNER);
			setState(328);
			blob();
			setState(329);
			blob();
			setState(330);
			nonFungibleAddress();
			setState(331);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BurnBucketContext extends ParserRuleContext {
		public TerminalNode BURN_BUCKET() { return getToken(TransactionManifestParser.BURN_BUCKET, 0); }
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public BurnBucketContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_burnBucket; }
	}

	public final BurnBucketContext burnBucket() throws RecognitionException {
		BurnBucketContext _localctx = new BurnBucketContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_burnBucket);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(333);
			match(BURN_BUCKET);
			setState(334);
			bucket();
			setState(335);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MintFungibleContext extends ParserRuleContext {
		public TerminalNode MINT_FUNGIBLE() { return getToken(TransactionManifestParser.MINT_FUNGIBLE, 0); }
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public DecimalContext decimal() {
			return getRuleContext(DecimalContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public MintFungibleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mintFungible; }
	}

	public final MintFungibleContext mintFungible() throws RecognitionException {
		MintFungibleContext _localctx = new MintFungibleContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_mintFungible);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			match(MINT_FUNGIBLE);
			setState(338);
			resourceAddress();
			setState(339);
			decimal();
			setState(340);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateResourceContext extends ParserRuleContext {
		public TerminalNode CREATE_RESOURCE() { return getToken(TransactionManifestParser.CREATE_RESOURCE, 0); }
		public Enum_Context enum_() {
			return getRuleContext(Enum_Context.class,0);
		}
		public List<ArrayContext> array() {
			return getRuleContexts(ArrayContext.class);
		}
		public ArrayContext array(int i) {
			return getRuleContext(ArrayContext.class,i);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public OptionContext option() {
			return getRuleContext(OptionContext.class,0);
		}
		public CreateResourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createResource; }
	}

	public final CreateResourceContext createResource() throws RecognitionException {
		CreateResourceContext _localctx = new CreateResourceContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_createResource);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			match(CREATE_RESOURCE);
			setState(343);
			enum_();
			setState(344);
			array();
			setState(345);
			array();
			setState(347);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0 || _la==T__1) {
				{
				setState(346);
				option();
				}
			}

			setState(349);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnitContext extends ParserRuleContext {
		public TerminalNode EMPTY_PARENTHESIS() { return getToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0); }
		public UnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unit; }
	}

	public final UnitContext unit() throws RecognitionException {
		UnitContext _localctx = new UnitContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_unit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			match(EMPTY_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BoolContext extends ParserRuleContext {
		public TerminalNode BOOL_LITERAL() { return getToken(TransactionManifestParser.BOOL_LITERAL, 0); }
		public BoolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool; }
	}

	public final BoolContext bool() throws RecognitionException {
		BoolContext _localctx = new BoolContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_bool);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(353);
			match(BOOL_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class I8Context extends ParserRuleContext {
		public TerminalNode I8_LITERAL() { return getToken(TransactionManifestParser.I8_LITERAL, 0); }
		public I8Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_i8; }
	}

	public final I8Context i8() throws RecognitionException {
		I8Context _localctx = new I8Context(_ctx, getState());
		enterRule(_localctx, 58, RULE_i8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			match(I8_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class I16Context extends ParserRuleContext {
		public TerminalNode I16_LITERAL() { return getToken(TransactionManifestParser.I16_LITERAL, 0); }
		public I16Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_i16; }
	}

	public final I16Context i16() throws RecognitionException {
		I16Context _localctx = new I16Context(_ctx, getState());
		enterRule(_localctx, 60, RULE_i16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(357);
			match(I16_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class I32Context extends ParserRuleContext {
		public TerminalNode I32_LITERAL() { return getToken(TransactionManifestParser.I32_LITERAL, 0); }
		public I32Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_i32; }
	}

	public final I32Context i32() throws RecognitionException {
		I32Context _localctx = new I32Context(_ctx, getState());
		enterRule(_localctx, 62, RULE_i32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(359);
			match(I32_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class I64Context extends ParserRuleContext {
		public TerminalNode I64_LITERAL() { return getToken(TransactionManifestParser.I64_LITERAL, 0); }
		public I64Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_i64; }
	}

	public final I64Context i64() throws RecognitionException {
		I64Context _localctx = new I64Context(_ctx, getState());
		enterRule(_localctx, 64, RULE_i64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(361);
			match(I64_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class I128Context extends ParserRuleContext {
		public TerminalNode I128_LITERAL() { return getToken(TransactionManifestParser.I128_LITERAL, 0); }
		public I128Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_i128; }
	}

	public final I128Context i128() throws RecognitionException {
		I128Context _localctx = new I128Context(_ctx, getState());
		enterRule(_localctx, 66, RULE_i128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			match(I128_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class U8Context extends ParserRuleContext {
		public TerminalNode U8_LITERAL() { return getToken(TransactionManifestParser.U8_LITERAL, 0); }
		public U8Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_u8; }
	}

	public final U8Context u8() throws RecognitionException {
		U8Context _localctx = new U8Context(_ctx, getState());
		enterRule(_localctx, 68, RULE_u8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(365);
			match(U8_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class U16Context extends ParserRuleContext {
		public TerminalNode U16_LITERAL() { return getToken(TransactionManifestParser.U16_LITERAL, 0); }
		public U16Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_u16; }
	}

	public final U16Context u16() throws RecognitionException {
		U16Context _localctx = new U16Context(_ctx, getState());
		enterRule(_localctx, 70, RULE_u16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			match(U16_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class U32Context extends ParserRuleContext {
		public TerminalNode U32_LITERAL() { return getToken(TransactionManifestParser.U32_LITERAL, 0); }
		public U32Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_u32; }
	}

	public final U32Context u32() throws RecognitionException {
		U32Context _localctx = new U32Context(_ctx, getState());
		enterRule(_localctx, 72, RULE_u32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(369);
			match(U32_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class U64Context extends ParserRuleContext {
		public TerminalNode U64_LITERAL() { return getToken(TransactionManifestParser.U64_LITERAL, 0); }
		public U64Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_u64; }
	}

	public final U64Context u64() throws RecognitionException {
		U64Context _localctx = new U64Context(_ctx, getState());
		enterRule(_localctx, 74, RULE_u64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(371);
			match(U64_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class U128Context extends ParserRuleContext {
		public TerminalNode U128_LITERAL() { return getToken(TransactionManifestParser.U128_LITERAL, 0); }
		public U128Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_u128; }
	}

	public final U128Context u128() throws RecognitionException {
		U128Context _localctx = new U128Context(_ctx, getState());
		enterRule(_localctx, 76, RULE_u128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(373);
			match(U128_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(375);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Enum_Context extends ParserRuleContext {
		public TerminalNode ENUM_TYPE() { return getToken(TransactionManifestParser.ENUM_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public List<TerminalNode> COMMA() { return getTokens(TransactionManifestParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TransactionManifestParser.COMMA, i);
		}
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public Enum_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enum_; }
	}

	public final Enum_Context enum_() throws RecognitionException {
		Enum_Context _localctx = new Enum_Context(_ctx, getState());
		enterRule(_localctx, 80, RULE_enum_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(377);
			match(ENUM_TYPE);
			setState(378);
			match(OPEN_PARENTHESIS);
			setState(379);
			string();
			setState(384);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(380);
				match(COMMA);
				setState(381);
				value();
				}
				}
				setState(386);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(387);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionContext extends ParserRuleContext {
		public SomeContext some() {
			return getRuleContext(SomeContext.class,0);
		}
		public NoneContext none() {
			return getRuleContext(NoneContext.class,0);
		}
		public OptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_option; }
	}

	public final OptionContext option() throws RecognitionException {
		OptionContext _localctx = new OptionContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_option);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(391);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				{
				setState(389);
				some();
				}
				break;
			case T__1:
				{
				setState(390);
				none();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SomeContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public SomeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_some; }
	}

	public final SomeContext some() throws RecognitionException {
		SomeContext _localctx = new SomeContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_some);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(393);
			match(T__0);
			setState(394);
			match(OPEN_PARENTHESIS);
			setState(395);
			value();
			setState(396);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NoneContext extends ParserRuleContext {
		public NoneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_none; }
	}

	public final NoneContext none() throws RecognitionException {
		NoneContext _localctx = new NoneContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_none);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OkContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public OkContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ok; }
	}

	public final OkContext ok() throws RecognitionException {
		OkContext _localctx = new OkContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_ok);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(400);
			match(T__2);
			setState(401);
			match(OPEN_PARENTHESIS);
			setState(402);
			value();
			setState(403);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public ErrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_err; }
	}

	public final ErrContext err() throws RecognitionException {
		ErrContext _localctx = new ErrContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_err);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			match(T__3);
			setState(406);
			match(OPEN_PARENTHESIS);
			setState(407);
			value();
			setState(408);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayContext extends ParserRuleContext {
		public TerminalNode ARRAY_TYPE() { return getToken(TransactionManifestParser.ARRAY_TYPE, 0); }
		public TerminalNode LESS_THAN() { return getToken(TransactionManifestParser.LESS_THAN, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode GREATER_THAN() { return getToken(TransactionManifestParser.GREATER_THAN, 0); }
		public TerminalNode EMPTY_PARENTHESIS() { return getToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(TransactionManifestParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TransactionManifestParser.COMMA, i);
		}
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(410);
			match(ARRAY_TYPE);
			setState(411);
			match(LESS_THAN);
			setState(412);
			type();
			setState(413);
			match(GREATER_THAN);
			setState(427);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY_PARENTHESIS:
				{
				setState(414);
				match(EMPTY_PARENTHESIS);
				}
				break;
			case OPEN_PARENTHESIS:
				{
				setState(415);
				match(OPEN_PARENTHESIS);
				setState(424);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << ENUM_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << BYTES_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << SYSTEM_ADDRESS_TYPE) | (1L << COMPONENT_TYPE) | (1L << KEY_VALUE_STORE_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << VAULT_TYPE) | (1L << EXPRESSION_TYPE) | (1L << BLOB_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << ECDSA_SECP256K1_PUBLIC_KEY_TYPE) | (1L << ECDSA_SECP256K1_SIGNATURE_TYPE) | (1L << EDDSA_ED25519_PUBLIC_KEY_TYPE) | (1L << EDDSA_ED25519_SIGNATURE_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE))) != 0) || _la==EMPTY_PARENTHESIS || _la==STRING_LITERAL) {
					{
					setState(416);
					value();
					setState(421);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(417);
						match(COMMA);
						setState(418);
						value();
						}
						}
						setState(423);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(426);
				match(CLOED_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleContext extends ParserRuleContext {
		public TerminalNode TUPLE_TYPE() { return getToken(TransactionManifestParser.TUPLE_TYPE, 0); }
		public TerminalNode EMPTY_PARENTHESIS() { return getToken(TransactionManifestParser.EMPTY_PARENTHESIS, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(TransactionManifestParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TransactionManifestParser.COMMA, i);
		}
		public TupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tuple; }
	}

	public final TupleContext tuple() throws RecognitionException {
		TupleContext _localctx = new TupleContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_tuple);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(429);
			match(TUPLE_TYPE);
			setState(443);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY_PARENTHESIS:
				{
				setState(430);
				match(EMPTY_PARENTHESIS);
				}
				break;
			case OPEN_PARENTHESIS:
				{
				setState(431);
				match(OPEN_PARENTHESIS);
				setState(440);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << ENUM_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << BYTES_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << SYSTEM_ADDRESS_TYPE) | (1L << COMPONENT_TYPE) | (1L << KEY_VALUE_STORE_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << VAULT_TYPE) | (1L << EXPRESSION_TYPE) | (1L << BLOB_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << ECDSA_SECP256K1_PUBLIC_KEY_TYPE) | (1L << ECDSA_SECP256K1_SIGNATURE_TYPE) | (1L << EDDSA_ED25519_PUBLIC_KEY_TYPE) | (1L << EDDSA_ED25519_SIGNATURE_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE))) != 0) || _la==EMPTY_PARENTHESIS || _la==STRING_LITERAL) {
					{
					setState(432);
					value();
					setState(437);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(433);
						match(COMMA);
						setState(434);
						value();
						}
						}
						setState(439);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(442);
				match(CLOED_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DecimalContext extends ParserRuleContext {
		public TerminalNode DECIMAL_TYPE() { return getToken(TransactionManifestParser.DECIMAL_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public DecimalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decimal; }
	}

	public final DecimalContext decimal() throws RecognitionException {
		DecimalContext _localctx = new DecimalContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_decimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(445);
			match(DECIMAL_TYPE);
			setState(446);
			match(OPEN_PARENTHESIS);
			setState(447);
			match(STRING_LITERAL);
			setState(448);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PreciseDecimalContext extends ParserRuleContext {
		public TerminalNode PRECISE_DECIMAL_TYPE() { return getToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public PreciseDecimalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_preciseDecimal; }
	}

	public final PreciseDecimalContext preciseDecimal() throws RecognitionException {
		PreciseDecimalContext _localctx = new PreciseDecimalContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_preciseDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(450);
			match(PRECISE_DECIMAL_TYPE);
			setState(451);
			match(OPEN_PARENTHESIS);
			setState(452);
			match(STRING_LITERAL);
			setState(453);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PackageAddressContext extends ParserRuleContext {
		public TerminalNode PACKAGE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public PackageAddressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageAddress; }
	}

	public final PackageAddressContext packageAddress() throws RecognitionException {
		PackageAddressContext _localctx = new PackageAddressContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_packageAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(455);
			match(PACKAGE_ADDRESS_TYPE);
			setState(456);
			match(OPEN_PARENTHESIS);
			setState(457);
			match(STRING_LITERAL);
			setState(458);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentAddressContext extends ParserRuleContext {
		public TerminalNode COMPONENT_ADDRESS_TYPE() { return getToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public ComponentAddressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentAddress; }
	}

	public final ComponentAddressContext componentAddress() throws RecognitionException {
		ComponentAddressContext _localctx = new ComponentAddressContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_componentAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(460);
			match(COMPONENT_ADDRESS_TYPE);
			setState(461);
			match(OPEN_PARENTHESIS);
			setState(462);
			match(STRING_LITERAL);
			setState(463);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResourceAddressContext extends ParserRuleContext {
		public TerminalNode RESOURCE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public ResourceAddressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resourceAddress; }
	}

	public final ResourceAddressContext resourceAddress() throws RecognitionException {
		ResourceAddressContext _localctx = new ResourceAddressContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_resourceAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(465);
			match(RESOURCE_ADDRESS_TYPE);
			setState(466);
			match(OPEN_PARENTHESIS);
			setState(467);
			match(STRING_LITERAL);
			setState(468);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SystemAddressContext extends ParserRuleContext {
		public TerminalNode SYSTEM_ADDRESS_TYPE() { return getToken(TransactionManifestParser.SYSTEM_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public SystemAddressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_systemAddress; }
	}

	public final SystemAddressContext systemAddress() throws RecognitionException {
		SystemAddressContext _localctx = new SystemAddressContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_systemAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(470);
			match(SYSTEM_ADDRESS_TYPE);
			setState(471);
			match(OPEN_PARENTHESIS);
			setState(472);
			match(STRING_LITERAL);
			setState(473);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HashContext extends ParserRuleContext {
		public TerminalNode HASH_TYPE() { return getToken(TransactionManifestParser.HASH_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public HashContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hash; }
	}

	public final HashContext hash() throws RecognitionException {
		HashContext _localctx = new HashContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_hash);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(475);
			match(HASH_TYPE);
			setState(476);
			match(OPEN_PARENTHESIS);
			setState(477);
			match(STRING_LITERAL);
			setState(478);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BytesContext extends ParserRuleContext {
		public TerminalNode BYTES_TYPE() { return getToken(TransactionManifestParser.BYTES_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public BytesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bytes; }
	}

	public final BytesContext bytes() throws RecognitionException {
		BytesContext _localctx = new BytesContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_bytes);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(480);
			match(BYTES_TYPE);
			setState(481);
			match(OPEN_PARENTHESIS);
			setState(482);
			match(STRING_LITERAL);
			setState(483);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentContext extends ParserRuleContext {
		public TerminalNode COMPONENT_TYPE() { return getToken(TransactionManifestParser.COMPONENT_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public ComponentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_component; }
	}

	public final ComponentContext component() throws RecognitionException {
		ComponentContext _localctx = new ComponentContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_component);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(485);
			match(COMPONENT_TYPE);
			setState(486);
			match(OPEN_PARENTHESIS);
			setState(487);
			match(STRING_LITERAL);
			setState(488);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VaultContext extends ParserRuleContext {
		public TerminalNode VAULT_TYPE() { return getToken(TransactionManifestParser.VAULT_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public VaultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vault; }
	}

	public final VaultContext vault() throws RecognitionException {
		VaultContext _localctx = new VaultContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_vault);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(490);
			match(VAULT_TYPE);
			setState(491);
			match(OPEN_PARENTHESIS);
			setState(492);
			match(STRING_LITERAL);
			setState(493);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyValueStoreContext extends ParserRuleContext {
		public TerminalNode KEY_VALUE_STORE_TYPE() { return getToken(TransactionManifestParser.KEY_VALUE_STORE_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public KeyValueStoreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyValueStore; }
	}

	public final KeyValueStoreContext keyValueStore() throws RecognitionException {
		KeyValueStoreContext _localctx = new KeyValueStoreContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_keyValueStore);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(495);
			match(KEY_VALUE_STORE_TYPE);
			setState(496);
			match(OPEN_PARENTHESIS);
			setState(497);
			match(STRING_LITERAL);
			setState(498);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BucketContext extends ParserRuleContext {
		public TerminalNode BUCKET_TYPE() { return getToken(TransactionManifestParser.BUCKET_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode U32_LITERAL() { return getToken(TransactionManifestParser.U32_LITERAL, 0); }
		public BucketContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bucket; }
	}

	public final BucketContext bucket() throws RecognitionException {
		BucketContext _localctx = new BucketContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_bucket);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(500);
			match(BUCKET_TYPE);
			setState(501);
			match(OPEN_PARENTHESIS);
			setState(502);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(503);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProofContext extends ParserRuleContext {
		public TerminalNode PROOF_TYPE() { return getToken(TransactionManifestParser.PROOF_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode U32_LITERAL() { return getToken(TransactionManifestParser.U32_LITERAL, 0); }
		public ProofContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_proof; }
	}

	public final ProofContext proof() throws RecognitionException {
		ProofContext _localctx = new ProofContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_proof);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(505);
			match(PROOF_TYPE);
			setState(506);
			match(OPEN_PARENTHESIS);
			setState(507);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(508);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonFungibleIdContext extends ParserRuleContext {
		public TerminalNode NON_FUNGIBLE_ID_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public Non_fungible_id_valuesContext non_fungible_id_values() {
			return getRuleContext(Non_fungible_id_valuesContext.class,0);
		}
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public NonFungibleIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonFungibleId; }
	}

	public final NonFungibleIdContext nonFungibleId() throws RecognitionException {
		NonFungibleIdContext _localctx = new NonFungibleIdContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_nonFungibleId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(510);
			match(NON_FUNGIBLE_ID_TYPE);
			setState(511);
			match(OPEN_PARENTHESIS);
			setState(512);
			non_fungible_id_values();
			setState(513);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonFungibleAddressContext extends ParserRuleContext {
		public TerminalNode NON_FUNGIBLE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode COMMA() { return getToken(TransactionManifestParser.COMMA, 0); }
		public Non_fungible_id_valuesContext non_fungible_id_values() {
			return getRuleContext(Non_fungible_id_valuesContext.class,0);
		}
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public NonFungibleAddressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonFungibleAddress; }
	}

	public final NonFungibleAddressContext nonFungibleAddress() throws RecognitionException {
		NonFungibleAddressContext _localctx = new NonFungibleAddressContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_nonFungibleAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(515);
			match(NON_FUNGIBLE_ADDRESS_TYPE);
			setState(516);
			match(OPEN_PARENTHESIS);
			setState(517);
			match(STRING_LITERAL);
			setState(518);
			match(COMMA);
			setState(519);
			non_fungible_id_values();
			setState(520);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlobContext extends ParserRuleContext {
		public TerminalNode BLOB_TYPE() { return getToken(TransactionManifestParser.BLOB_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public BlobContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blob; }
	}

	public final BlobContext blob() throws RecognitionException {
		BlobContext _localctx = new BlobContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_blob);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(522);
			match(BLOB_TYPE);
			setState(523);
			match(OPEN_PARENTHESIS);
			setState(524);
			match(STRING_LITERAL);
			setState(525);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EcdsaSecp256k1PublicKeyContext extends ParserRuleContext {
		public TerminalNode ECDSA_SECP256K1_PUBLIC_KEY_TYPE() { return getToken(TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public EcdsaSecp256k1PublicKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ecdsaSecp256k1PublicKey; }
	}

	public final EcdsaSecp256k1PublicKeyContext ecdsaSecp256k1PublicKey() throws RecognitionException {
		EcdsaSecp256k1PublicKeyContext _localctx = new EcdsaSecp256k1PublicKeyContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_ecdsaSecp256k1PublicKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(527);
			match(ECDSA_SECP256K1_PUBLIC_KEY_TYPE);
			setState(528);
			match(OPEN_PARENTHESIS);
			setState(529);
			match(STRING_LITERAL);
			setState(530);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EcdsaSecp256k1SignatureContext extends ParserRuleContext {
		public TerminalNode ECDSA_SECP256K1_SIGNATURE_TYPE() { return getToken(TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public EcdsaSecp256k1SignatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ecdsaSecp256k1Signature; }
	}

	public final EcdsaSecp256k1SignatureContext ecdsaSecp256k1Signature() throws RecognitionException {
		EcdsaSecp256k1SignatureContext _localctx = new EcdsaSecp256k1SignatureContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_ecdsaSecp256k1Signature);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(532);
			match(ECDSA_SECP256K1_SIGNATURE_TYPE);
			setState(533);
			match(OPEN_PARENTHESIS);
			setState(534);
			match(STRING_LITERAL);
			setState(535);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EddsaEd25519PublicKeyContext extends ParserRuleContext {
		public TerminalNode EDDSA_ED25519_PUBLIC_KEY_TYPE() { return getToken(TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public EddsaEd25519PublicKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eddsaEd25519PublicKey; }
	}

	public final EddsaEd25519PublicKeyContext eddsaEd25519PublicKey() throws RecognitionException {
		EddsaEd25519PublicKeyContext _localctx = new EddsaEd25519PublicKeyContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_eddsaEd25519PublicKey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(537);
			match(EDDSA_ED25519_PUBLIC_KEY_TYPE);
			setState(538);
			match(OPEN_PARENTHESIS);
			setState(539);
			match(STRING_LITERAL);
			setState(540);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EddsaEd25519SignatureContext extends ParserRuleContext {
		public TerminalNode EDDSA_ED25519_SIGNATURE_TYPE() { return getToken(TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public EddsaEd25519SignatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eddsaEd25519Signature; }
	}

	public final EddsaEd25519SignatureContext eddsaEd25519Signature() throws RecognitionException {
		EddsaEd25519SignatureContext _localctx = new EddsaEd25519SignatureContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_eddsaEd25519Signature);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(542);
			match(EDDSA_ED25519_SIGNATURE_TYPE);
			setState(543);
			match(OPEN_PARENTHESIS);
			setState(544);
			match(STRING_LITERAL);
			setState(545);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode EXPRESSION_TYPE() { return getToken(TransactionManifestParser.EXPRESSION_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(547);
			match(EXPRESSION_TYPE);
			setState(548);
			match(OPEN_PARENTHESIS);
			setState(549);
			match(STRING_LITERAL);
			setState(550);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TerminalNode UNIT_TYPE() { return getToken(TransactionManifestParser.UNIT_TYPE, 0); }
		public TerminalNode BOOL_TYPE() { return getToken(TransactionManifestParser.BOOL_TYPE, 0); }
		public TerminalNode I8_TYPE() { return getToken(TransactionManifestParser.I8_TYPE, 0); }
		public TerminalNode I16_TYPE() { return getToken(TransactionManifestParser.I16_TYPE, 0); }
		public TerminalNode I32_TYPE() { return getToken(TransactionManifestParser.I32_TYPE, 0); }
		public TerminalNode I64_TYPE() { return getToken(TransactionManifestParser.I64_TYPE, 0); }
		public TerminalNode I128_TYPE() { return getToken(TransactionManifestParser.I128_TYPE, 0); }
		public TerminalNode U8_TYPE() { return getToken(TransactionManifestParser.U8_TYPE, 0); }
		public TerminalNode U16_TYPE() { return getToken(TransactionManifestParser.U16_TYPE, 0); }
		public TerminalNode U32_TYPE() { return getToken(TransactionManifestParser.U32_TYPE, 0); }
		public TerminalNode U64_TYPE() { return getToken(TransactionManifestParser.U64_TYPE, 0); }
		public TerminalNode U128_TYPE() { return getToken(TransactionManifestParser.U128_TYPE, 0); }
		public TerminalNode STRING_TYPE() { return getToken(TransactionManifestParser.STRING_TYPE, 0); }
		public TerminalNode ENUM_TYPE() { return getToken(TransactionManifestParser.ENUM_TYPE, 0); }
		public TerminalNode ARRAY_TYPE() { return getToken(TransactionManifestParser.ARRAY_TYPE, 0); }
		public TerminalNode TUPLE_TYPE() { return getToken(TransactionManifestParser.TUPLE_TYPE, 0); }
		public TerminalNode BYTES_TYPE() { return getToken(TransactionManifestParser.BYTES_TYPE, 0); }
		public TerminalNode PACKAGE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
		public TerminalNode COMPONENT_ADDRESS_TYPE() { return getToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
		public TerminalNode RESOURCE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
		public TerminalNode SYSTEM_ADDRESS_TYPE() { return getToken(TransactionManifestParser.SYSTEM_ADDRESS_TYPE, 0); }
		public TerminalNode COMPONENT_TYPE() { return getToken(TransactionManifestParser.COMPONENT_TYPE, 0); }
		public TerminalNode KEY_VALUE_STORE_TYPE() { return getToken(TransactionManifestParser.KEY_VALUE_STORE_TYPE, 0); }
		public TerminalNode BUCKET_TYPE() { return getToken(TransactionManifestParser.BUCKET_TYPE, 0); }
		public TerminalNode PROOF_TYPE() { return getToken(TransactionManifestParser.PROOF_TYPE, 0); }
		public TerminalNode VAULT_TYPE() { return getToken(TransactionManifestParser.VAULT_TYPE, 0); }
		public TerminalNode EXPRESSION_TYPE() { return getToken(TransactionManifestParser.EXPRESSION_TYPE, 0); }
		public TerminalNode BLOB_TYPE() { return getToken(TransactionManifestParser.BLOB_TYPE, 0); }
		public TerminalNode NON_FUNGIBLE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
		public TerminalNode HASH_TYPE() { return getToken(TransactionManifestParser.HASH_TYPE, 0); }
		public TerminalNode ECDSA_SECP256K1_PUBLIC_KEY_TYPE() { return getToken(TransactionManifestParser.ECDSA_SECP256K1_PUBLIC_KEY_TYPE, 0); }
		public TerminalNode ECDSA_SECP256K1_SIGNATURE_TYPE() { return getToken(TransactionManifestParser.ECDSA_SECP256K1_SIGNATURE_TYPE, 0); }
		public TerminalNode EDDSA_ED25519_PUBLIC_KEY_TYPE() { return getToken(TransactionManifestParser.EDDSA_ED25519_PUBLIC_KEY_TYPE, 0); }
		public TerminalNode EDDSA_ED25519_SIGNATURE_TYPE() { return getToken(TransactionManifestParser.EDDSA_ED25519_SIGNATURE_TYPE, 0); }
		public TerminalNode DECIMAL_TYPE() { return getToken(TransactionManifestParser.DECIMAL_TYPE, 0); }
		public TerminalNode PRECISE_DECIMAL_TYPE() { return getToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0); }
		public TerminalNode NON_FUNGIBLE_ID_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(552);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << UNIT_TYPE) | (1L << BOOL_TYPE) | (1L << I8_TYPE) | (1L << I16_TYPE) | (1L << I32_TYPE) | (1L << I64_TYPE) | (1L << I128_TYPE) | (1L << U8_TYPE) | (1L << U16_TYPE) | (1L << U32_TYPE) | (1L << U64_TYPE) | (1L << U128_TYPE) | (1L << STRING_TYPE) | (1L << ENUM_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << BYTES_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << SYSTEM_ADDRESS_TYPE) | (1L << COMPONENT_TYPE) | (1L << KEY_VALUE_STORE_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << VAULT_TYPE) | (1L << EXPRESSION_TYPE) | (1L << BLOB_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << ECDSA_SECP256K1_PUBLIC_KEY_TYPE) | (1L << ECDSA_SECP256K1_SIGNATURE_TYPE) | (1L << EDDSA_ED25519_PUBLIC_KEY_TYPE) | (1L << EDDSA_ED25519_SIGNATURE_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Non_fungible_id_valuesContext extends ParserRuleContext {
		public U32Context u32() {
			return getRuleContext(U32Context.class,0);
		}
		public U64Context u64() {
			return getRuleContext(U64Context.class,0);
		}
		public U128Context u128() {
			return getRuleContext(U128Context.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public BytesContext bytes() {
			return getRuleContext(BytesContext.class,0);
		}
		public Non_fungible_id_valuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_non_fungible_id_values; }
	}

	public final Non_fungible_id_valuesContext non_fungible_id_values() throws RecognitionException {
		Non_fungible_id_valuesContext _localctx = new Non_fungible_id_valuesContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_non_fungible_id_values);
		try {
			setState(559);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case U32_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(554);
				u32();
				}
				break;
			case U64_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(555);
				u64();
				}
				break;
			case U128_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(556);
				u128();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(557);
				string();
				}
				break;
			case BYTES_TYPE:
				enterOuterAlt(_localctx, 5);
				{
				setState(558);
				bytes();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public UnitContext unit() {
			return getRuleContext(UnitContext.class,0);
		}
		public BoolContext bool() {
			return getRuleContext(BoolContext.class,0);
		}
		public I8Context i8() {
			return getRuleContext(I8Context.class,0);
		}
		public I16Context i16() {
			return getRuleContext(I16Context.class,0);
		}
		public I32Context i32() {
			return getRuleContext(I32Context.class,0);
		}
		public I64Context i64() {
			return getRuleContext(I64Context.class,0);
		}
		public I128Context i128() {
			return getRuleContext(I128Context.class,0);
		}
		public U8Context u8() {
			return getRuleContext(U8Context.class,0);
		}
		public U16Context u16() {
			return getRuleContext(U16Context.class,0);
		}
		public U32Context u32() {
			return getRuleContext(U32Context.class,0);
		}
		public U64Context u64() {
			return getRuleContext(U64Context.class,0);
		}
		public U128Context u128() {
			return getRuleContext(U128Context.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public Enum_Context enum_() {
			return getRuleContext(Enum_Context.class,0);
		}
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public TupleContext tuple() {
			return getRuleContext(TupleContext.class,0);
		}
		public SomeContext some() {
			return getRuleContext(SomeContext.class,0);
		}
		public NoneContext none() {
			return getRuleContext(NoneContext.class,0);
		}
		public OkContext ok() {
			return getRuleContext(OkContext.class,0);
		}
		public ErrContext err() {
			return getRuleContext(ErrContext.class,0);
		}
		public BytesContext bytes() {
			return getRuleContext(BytesContext.class,0);
		}
		public PackageAddressContext packageAddress() {
			return getRuleContext(PackageAddressContext.class,0);
		}
		public ComponentAddressContext componentAddress() {
			return getRuleContext(ComponentAddressContext.class,0);
		}
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public SystemAddressContext systemAddress() {
			return getRuleContext(SystemAddressContext.class,0);
		}
		public ComponentContext component() {
			return getRuleContext(ComponentContext.class,0);
		}
		public KeyValueStoreContext keyValueStore() {
			return getRuleContext(KeyValueStoreContext.class,0);
		}
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public VaultContext vault() {
			return getRuleContext(VaultContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlobContext blob() {
			return getRuleContext(BlobContext.class,0);
		}
		public NonFungibleIdContext nonFungibleId() {
			return getRuleContext(NonFungibleIdContext.class,0);
		}
		public NonFungibleAddressContext nonFungibleAddress() {
			return getRuleContext(NonFungibleAddressContext.class,0);
		}
		public HashContext hash() {
			return getRuleContext(HashContext.class,0);
		}
		public EcdsaSecp256k1PublicKeyContext ecdsaSecp256k1PublicKey() {
			return getRuleContext(EcdsaSecp256k1PublicKeyContext.class,0);
		}
		public EcdsaSecp256k1SignatureContext ecdsaSecp256k1Signature() {
			return getRuleContext(EcdsaSecp256k1SignatureContext.class,0);
		}
		public EddsaEd25519PublicKeyContext eddsaEd25519PublicKey() {
			return getRuleContext(EddsaEd25519PublicKeyContext.class,0);
		}
		public EddsaEd25519SignatureContext eddsaEd25519Signature() {
			return getRuleContext(EddsaEd25519SignatureContext.class,0);
		}
		public DecimalContext decimal() {
			return getRuleContext(DecimalContext.class,0);
		}
		public PreciseDecimalContext preciseDecimal() {
			return getRuleContext(PreciseDecimalContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_value);
		try {
			setState(602);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY_PARENTHESIS:
				enterOuterAlt(_localctx, 1);
				{
				setState(561);
				unit();
				}
				break;
			case BOOL_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(562);
				bool();
				}
				break;
			case I8_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(563);
				i8();
				}
				break;
			case I16_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(564);
				i16();
				}
				break;
			case I32_LITERAL:
				enterOuterAlt(_localctx, 5);
				{
				setState(565);
				i32();
				}
				break;
			case I64_LITERAL:
				enterOuterAlt(_localctx, 6);
				{
				setState(566);
				i64();
				}
				break;
			case I128_LITERAL:
				enterOuterAlt(_localctx, 7);
				{
				setState(567);
				i128();
				}
				break;
			case U8_LITERAL:
				enterOuterAlt(_localctx, 8);
				{
				setState(568);
				u8();
				}
				break;
			case U16_LITERAL:
				enterOuterAlt(_localctx, 9);
				{
				setState(569);
				u16();
				}
				break;
			case U32_LITERAL:
				enterOuterAlt(_localctx, 10);
				{
				setState(570);
				u32();
				}
				break;
			case U64_LITERAL:
				enterOuterAlt(_localctx, 11);
				{
				setState(571);
				u64();
				}
				break;
			case U128_LITERAL:
				enterOuterAlt(_localctx, 12);
				{
				setState(572);
				u128();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 13);
				{
				setState(573);
				string();
				}
				break;
			case ENUM_TYPE:
				enterOuterAlt(_localctx, 14);
				{
				setState(574);
				enum_();
				}
				break;
			case ARRAY_TYPE:
				enterOuterAlt(_localctx, 15);
				{
				setState(575);
				array();
				}
				break;
			case TUPLE_TYPE:
				enterOuterAlt(_localctx, 16);
				{
				setState(576);
				tuple();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 17);
				{
				setState(577);
				some();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 18);
				{
				setState(578);
				none();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 19);
				{
				setState(579);
				ok();
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 20);
				{
				setState(580);
				err();
				}
				break;
			case BYTES_TYPE:
				enterOuterAlt(_localctx, 21);
				{
				setState(581);
				bytes();
				}
				break;
			case PACKAGE_ADDRESS_TYPE:
				enterOuterAlt(_localctx, 22);
				{
				setState(582);
				packageAddress();
				}
				break;
			case COMPONENT_ADDRESS_TYPE:
				enterOuterAlt(_localctx, 23);
				{
				setState(583);
				componentAddress();
				}
				break;
			case RESOURCE_ADDRESS_TYPE:
				enterOuterAlt(_localctx, 24);
				{
				setState(584);
				resourceAddress();
				}
				break;
			case SYSTEM_ADDRESS_TYPE:
				enterOuterAlt(_localctx, 25);
				{
				setState(585);
				systemAddress();
				}
				break;
			case COMPONENT_TYPE:
				enterOuterAlt(_localctx, 26);
				{
				setState(586);
				component();
				}
				break;
			case KEY_VALUE_STORE_TYPE:
				enterOuterAlt(_localctx, 27);
				{
				setState(587);
				keyValueStore();
				}
				break;
			case BUCKET_TYPE:
				enterOuterAlt(_localctx, 28);
				{
				setState(588);
				bucket();
				}
				break;
			case PROOF_TYPE:
				enterOuterAlt(_localctx, 29);
				{
				setState(589);
				proof();
				}
				break;
			case VAULT_TYPE:
				enterOuterAlt(_localctx, 30);
				{
				setState(590);
				vault();
				}
				break;
			case EXPRESSION_TYPE:
				enterOuterAlt(_localctx, 31);
				{
				setState(591);
				expression();
				}
				break;
			case BLOB_TYPE:
				enterOuterAlt(_localctx, 32);
				{
				setState(592);
				blob();
				}
				break;
			case NON_FUNGIBLE_ID_TYPE:
				enterOuterAlt(_localctx, 33);
				{
				setState(593);
				nonFungibleId();
				}
				break;
			case NON_FUNGIBLE_ADDRESS_TYPE:
				enterOuterAlt(_localctx, 34);
				{
				setState(594);
				nonFungibleAddress();
				}
				break;
			case HASH_TYPE:
				enterOuterAlt(_localctx, 35);
				{
				setState(595);
				hash();
				}
				break;
			case ECDSA_SECP256K1_PUBLIC_KEY_TYPE:
				enterOuterAlt(_localctx, 36);
				{
				setState(596);
				ecdsaSecp256k1PublicKey();
				}
				break;
			case ECDSA_SECP256K1_SIGNATURE_TYPE:
				enterOuterAlt(_localctx, 37);
				{
				setState(597);
				ecdsaSecp256k1Signature();
				}
				break;
			case EDDSA_ED25519_PUBLIC_KEY_TYPE:
				enterOuterAlt(_localctx, 38);
				{
				setState(598);
				eddsaEd25519PublicKey();
				}
				break;
			case EDDSA_ED25519_SIGNATURE_TYPE:
				enterOuterAlt(_localctx, 39);
				{
				setState(599);
				eddsaEd25519Signature();
				}
				break;
			case DECIMAL_TYPE:
				enterOuterAlt(_localctx, 40);
				{
				setState(600);
				decimal();
				}
				break;
			case PRECISE_DECIMAL_TYPE:
				enterOuterAlt(_localctx, 41);
				{
				setState(601);
				preciseDecimal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Re_node_idContext extends ParserRuleContext {
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public AuthZoneStackContext authZoneStack() {
			return getRuleContext(AuthZoneStackContext.class,0);
		}
		public FeeReserveContext feeReserve() {
			return getRuleContext(FeeReserveContext.class,0);
		}
		public WorktopContext worktop() {
			return getRuleContext(WorktopContext.class,0);
		}
		public GlobalContext global() {
			return getRuleContext(GlobalContext.class,0);
		}
		public KeyValueStoreContext keyValueStore() {
			return getRuleContext(KeyValueStoreContext.class,0);
		}
		public NonFungibleStoreContext nonFungibleStore() {
			return getRuleContext(NonFungibleStoreContext.class,0);
		}
		public ComponentContext component() {
			return getRuleContext(ComponentContext.class,0);
		}
		public VaultContext vault() {
			return getRuleContext(VaultContext.class,0);
		}
		public ResourceManagerContext resourceManager() {
			return getRuleContext(ResourceManagerContext.class,0);
		}
		public Package_Context package_() {
			return getRuleContext(Package_Context.class,0);
		}
		public EpochManagerContext epochManager() {
			return getRuleContext(EpochManagerContext.class,0);
		}
		public ClockContext clock() {
			return getRuleContext(ClockContext.class,0);
		}
		public Re_node_idContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_re_node_id; }
	}

	public final Re_node_idContext re_node_id() throws RecognitionException {
		Re_node_idContext _localctx = new Re_node_idContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_re_node_id);
		try {
			setState(618);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BUCKET_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(604);
				bucket();
				}
				break;
			case PROOF_TYPE:
				enterOuterAlt(_localctx, 2);
				{
				setState(605);
				proof();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 3);
				{
				setState(606);
				authZoneStack();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 4);
				{
				setState(607);
				feeReserve();
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 5);
				{
				setState(608);
				worktop();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 6);
				{
				setState(609);
				global();
				}
				break;
			case KEY_VALUE_STORE_TYPE:
				enterOuterAlt(_localctx, 7);
				{
				setState(610);
				keyValueStore();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 8);
				{
				setState(611);
				nonFungibleStore();
				}
				break;
			case COMPONENT_TYPE:
				enterOuterAlt(_localctx, 9);
				{
				setState(612);
				component();
				}
				break;
			case VAULT_TYPE:
				enterOuterAlt(_localctx, 10);
				{
				setState(613);
				vault();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 11);
				{
				setState(614);
				resourceManager();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 12);
				{
				setState(615);
				package_();
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 13);
				{
				setState(616);
				epochManager();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 14);
				{
				setState(617);
				clock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WorktopContext extends ParserRuleContext {
		public WorktopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_worktop; }
	}

	public final WorktopContext worktop() throws RecognitionException {
		WorktopContext _localctx = new WorktopContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_worktop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(620);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AuthZoneStackContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode U32_LITERAL() { return getToken(TransactionManifestParser.U32_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public AuthZoneStackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_authZoneStack; }
	}

	public final AuthZoneStackContext authZoneStack() throws RecognitionException {
		AuthZoneStackContext _localctx = new AuthZoneStackContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_authZoneStack);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(622);
			match(T__5);
			setState(623);
			match(OPEN_PARENTHESIS);
			setState(624);
			match(U32_LITERAL);
			setState(625);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FeeReserveContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public FeeReserveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_feeReserve; }
	}

	public final FeeReserveContext feeReserve() throws RecognitionException {
		FeeReserveContext _localctx = new FeeReserveContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_feeReserve);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(627);
			match(T__6);
			setState(628);
			match(OPEN_PARENTHESIS);
			setState(629);
			match(STRING_LITERAL);
			setState(630);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GlobalContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public GlobalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_global; }
	}

	public final GlobalContext global() throws RecognitionException {
		GlobalContext _localctx = new GlobalContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_global);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(632);
			match(T__7);
			setState(633);
			match(OPEN_PARENTHESIS);
			setState(634);
			match(STRING_LITERAL);
			setState(635);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonFungibleStoreContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public NonFungibleStoreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonFungibleStore; }
	}

	public final NonFungibleStoreContext nonFungibleStore() throws RecognitionException {
		NonFungibleStoreContext _localctx = new NonFungibleStoreContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_nonFungibleStore);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(637);
			match(T__8);
			setState(638);
			match(OPEN_PARENTHESIS);
			setState(639);
			match(STRING_LITERAL);
			setState(640);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResourceManagerContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public ResourceManagerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resourceManager; }
	}

	public final ResourceManagerContext resourceManager() throws RecognitionException {
		ResourceManagerContext _localctx = new ResourceManagerContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_resourceManager);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(642);
			match(T__9);
			setState(643);
			match(OPEN_PARENTHESIS);
			setState(644);
			match(STRING_LITERAL);
			setState(645);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Package_Context extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public Package_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_package_; }
	}

	public final Package_Context package_() throws RecognitionException {
		Package_Context _localctx = new Package_Context(_ctx, getState());
		enterRule(_localctx, 158, RULE_package_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(647);
			match(T__10);
			setState(648);
			match(OPEN_PARENTHESIS);
			setState(649);
			match(STRING_LITERAL);
			setState(650);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EpochManagerContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public EpochManagerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_epochManager; }
	}

	public final EpochManagerContext epochManager() throws RecognitionException {
		EpochManagerContext _localctx = new EpochManagerContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_epochManager);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(652);
			match(T__11);
			setState(653);
			match(OPEN_PARENTHESIS);
			setState(654);
			match(STRING_LITERAL);
			setState(655);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClockContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public ClockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clock; }
	}

	public final ClockContext clock() throws RecognitionException {
		ClockContext _localctx = new ClockContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_clock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(657);
			match(T__12);
			setState(658);
			match(OPEN_PARENTHESIS);
			setState(659);
			match(STRING_LITERAL);
			setState(660);
			match(CLOED_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3g\u0299\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\3\2\7"+
		"\2\u00a8\n\2\f\2\16\2\u00ab\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\5\3\u00c8\n\3\3\4\3\4\3\4\3\4\3\4\7\4\u00cf\n\4\f\4\16\4\u00d2\13\4\3"+
		"\4\3\4\3\5\3\5\3\5\3\5\7\5\u00da\n\5\f\5\16\5\u00dd\13\5\3\5\3\5\3\6\3"+
		"\6\3\6\5\6\u00e4\n\6\3\6\3\6\7\6\u00e8\n\6\f\6\16\6\u00eb\13\6\3\6\3\6"+
		"\3\7\3\7\3\7\3\7\7\7\u00f3\n\7\f\7\16\7\u00f6\13\7\3\7\3\7\3\b\3\b\3\b"+
		"\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13"+
		"\3\13\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17"+
		"\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24"+
		"\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\30"+
		"\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\33\3\33"+
		"\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\5\34\u015e\n\34\3\34\3\34\3\35"+
		"\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&"+
		"\3\'\3\'\3(\3(\3)\3)\3*\3*\3*\3*\3*\7*\u0181\n*\f*\16*\u0184\13*\3*\3"+
		"*\3+\3+\5+\u018a\n+\3,\3,\3,\3,\3,\3-\3-\3.\3.\3.\3.\3.\3/\3/\3/\3/\3"+
		"/\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\7\60\u01a6\n\60\f\60\16"+
		"\60\u01a9\13\60\5\60\u01ab\n\60\3\60\5\60\u01ae\n\60\3\61\3\61\3\61\3"+
		"\61\3\61\3\61\7\61\u01b6\n\61\f\61\16\61\u01b9\13\61\5\61\u01bb\n\61\3"+
		"\61\5\61\u01be\n\61\3\62\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63"+
		"\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\65\3\65\3\65\3\66\3\66\3\66\3\66"+
		"\3\66\3\67\3\67\3\67\3\67\3\67\38\38\38\38\38\39\39\39\39\39\3:\3:\3:"+
		"\3:\3:\3;\3;\3;\3;\3;\3<\3<\3<\3<\3<\3=\3=\3=\3=\3=\3>\3>\3>\3>\3>\3?"+
		"\3?\3?\3?\3?\3@\3@\3@\3@\3@\3@\3@\3A\3A\3A\3A\3A\3B\3B\3B\3B\3B\3C\3C"+
		"\3C\3C\3C\3D\3D\3D\3D\3D\3E\3E\3E\3E\3E\3F\3F\3F\3F\3F\3G\3G\3H\3H\3H"+
		"\3H\3H\5H\u0232\nH\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I"+
		"\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I"+
		"\3I\5I\u025d\nI\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\5J\u026d\nJ"+
		"\3K\3K\3L\3L\3L\3L\3L\3M\3M\3M\3M\3M\3N\3N\3N\3N\3N\3O\3O\3O\3O\3O\3P"+
		"\3P\3P\3P\3P\3Q\3Q\3Q\3Q\3Q\3R\3R\3R\3R\3R\3S\3S\3S\3S\3S\3S\2\2T\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP"+
		"RTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e"+
		"\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\2\4"+
		"\4\2\30\30bb\3\2\35A\2\u02a6\2\u00a9\3\2\2\2\4\u00c7\3\2\2\2\6\u00c9\3"+
		"\2\2\2\b\u00d5\3\2\2\2\n\u00e0\3\2\2\2\f\u00ee\3\2\2\2\16\u00f9\3\2\2"+
		"\2\20\u00fe\3\2\2\2\22\u0104\3\2\2\2\24\u010a\3\2\2\2\26\u010e\3\2\2\2"+
		"\30\u0112\3\2\2\2\32\u0117\3\2\2\2\34\u011c\3\2\2\2\36\u0120\3\2\2\2 "+
		"\u0124\3\2\2\2\"\u0129\3\2\2\2$\u012f\3\2\2\2&\u0135\3\2\2\2(\u013a\3"+
		"\2\2\2*\u013f\3\2\2\2,\u0143\3\2\2\2.\u0146\3\2\2\2\60\u0149\3\2\2\2\62"+
		"\u014f\3\2\2\2\64\u0153\3\2\2\2\66\u0158\3\2\2\28\u0161\3\2\2\2:\u0163"+
		"\3\2\2\2<\u0165\3\2\2\2>\u0167\3\2\2\2@\u0169\3\2\2\2B\u016b\3\2\2\2D"+
		"\u016d\3\2\2\2F\u016f\3\2\2\2H\u0171\3\2\2\2J\u0173\3\2\2\2L\u0175\3\2"+
		"\2\2N\u0177\3\2\2\2P\u0179\3\2\2\2R\u017b\3\2\2\2T\u0189\3\2\2\2V\u018b"+
		"\3\2\2\2X\u0190\3\2\2\2Z\u0192\3\2\2\2\\\u0197\3\2\2\2^\u019c\3\2\2\2"+
		"`\u01af\3\2\2\2b\u01bf\3\2\2\2d\u01c4\3\2\2\2f\u01c9\3\2\2\2h\u01ce\3"+
		"\2\2\2j\u01d3\3\2\2\2l\u01d8\3\2\2\2n\u01dd\3\2\2\2p\u01e2\3\2\2\2r\u01e7"+
		"\3\2\2\2t\u01ec\3\2\2\2v\u01f1\3\2\2\2x\u01f6\3\2\2\2z\u01fb\3\2\2\2|"+
		"\u0200\3\2\2\2~\u0205\3\2\2\2\u0080\u020c\3\2\2\2\u0082\u0211\3\2\2\2"+
		"\u0084\u0216\3\2\2\2\u0086\u021b\3\2\2\2\u0088\u0220\3\2\2\2\u008a\u0225"+
		"\3\2\2\2\u008c\u022a\3\2\2\2\u008e\u0231\3\2\2\2\u0090\u025c\3\2\2\2\u0092"+
		"\u026c\3\2\2\2\u0094\u026e\3\2\2\2\u0096\u0270\3\2\2\2\u0098\u0275\3\2"+
		"\2\2\u009a\u027a\3\2\2\2\u009c\u027f\3\2\2\2\u009e\u0284\3\2\2\2\u00a0"+
		"\u0289\3\2\2\2\u00a2\u028e\3\2\2\2\u00a4\u0293\3\2\2\2\u00a6\u00a8\5\4"+
		"\3\2\u00a7\u00a6\3\2\2\2\u00a8\u00ab\3\2\2\2\u00a9\u00a7\3\2\2\2\u00a9"+
		"\u00aa\3\2\2\2\u00aa\u00ac\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ac\u00ad\7\2"+
		"\2\3\u00ad\3\3\2\2\2\u00ae\u00c8\5\6\4\2\u00af\u00c8\5\b\5\2\u00b0\u00c8"+
		"\5\n\6\2\u00b1\u00c8\5\f\7\2\u00b2\u00c8\5\16\b\2\u00b3\u00c8\5\20\t\2"+
		"\u00b4\u00c8\5\22\n\2\u00b5\u00c8\5\24\13\2\u00b6\u00c8\5\26\f\2\u00b7"+
		"\u00c8\5\30\r\2\u00b8\u00c8\5\32\16\2\u00b9\u00c8\5\34\17\2\u00ba\u00c8"+
		"\5\36\20\2\u00bb\u00c8\5 \21\2\u00bc\u00c8\5\"\22\2\u00bd\u00c8\5$\23"+
		"\2\u00be\u00c8\5&\24\2\u00bf\u00c8\5(\25\2\u00c0\u00c8\5*\26\2\u00c1\u00c8"+
		"\5,\27\2\u00c2\u00c8\5.\30\2\u00c3\u00c8\5\60\31\2\u00c4\u00c8\5\62\32"+
		"\2\u00c5\u00c8\5\64\33\2\u00c6\u00c8\5\66\34\2\u00c7\u00ae\3\2\2\2\u00c7"+
		"\u00af\3\2\2\2\u00c7\u00b0\3\2\2\2\u00c7\u00b1\3\2\2\2\u00c7\u00b2\3\2"+
		"\2\2\u00c7\u00b3\3\2\2\2\u00c7\u00b4\3\2\2\2\u00c7\u00b5\3\2\2\2\u00c7"+
		"\u00b6\3\2\2\2\u00c7\u00b7\3\2\2\2\u00c7\u00b8\3\2\2\2\u00c7\u00b9\3\2"+
		"\2\2\u00c7\u00ba\3\2\2\2\u00c7\u00bb\3\2\2\2\u00c7\u00bc\3\2\2\2\u00c7"+
		"\u00bd\3\2\2\2\u00c7\u00be\3\2\2\2\u00c7\u00bf\3\2\2\2\u00c7\u00c0\3\2"+
		"\2\2\u00c7\u00c1\3\2\2\2\u00c7\u00c2\3\2\2\2\u00c7\u00c3\3\2\2\2\u00c7"+
		"\u00c4\3\2\2\2\u00c7\u00c5\3\2\2\2\u00c7\u00c6\3\2\2\2\u00c8\5\3\2\2\2"+
		"\u00c9\u00ca\7Z\2\2\u00ca\u00cb\5f\64\2\u00cb\u00cc\5P)\2\u00cc\u00d0"+
		"\5P)\2\u00cd\u00cf\5\u0090I\2\u00ce\u00cd\3\2\2\2\u00cf\u00d2\3\2\2\2"+
		"\u00d0\u00ce\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00d3\3\2\2\2\u00d2\u00d0"+
		"\3\2\2\2\u00d3\u00d4\7H\2\2\u00d4\7\3\2\2\2\u00d5\u00d6\7\\\2\2\u00d6"+
		"\u00d7\5P)\2\u00d7\u00db\5P)\2\u00d8\u00da\5\u0090I\2\u00d9\u00d8\3\2"+
		"\2\2\u00da\u00dd\3\2\2\2\u00db\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc"+
		"\u00de\3\2\2\2\u00dd\u00db\3\2\2\2\u00de\u00df\7H\2\2\u00df\t\3\2\2\2"+
		"\u00e0\u00e3\7[\2\2\u00e1\u00e4\5h\65\2\u00e2\u00e4\5r:\2\u00e3\u00e1"+
		"\3\2\2\2\u00e3\u00e2\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5\u00e9\5P)\2\u00e6"+
		"\u00e8\5\u0090I\2\u00e7\u00e6\3\2\2\2\u00e8\u00eb\3\2\2\2\u00e9\u00e7"+
		"\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\u00ec\3\2\2\2\u00eb\u00e9\3\2\2\2\u00ec"+
		"\u00ed\7H\2\2\u00ed\13\3\2\2\2\u00ee\u00ef\7]\2\2\u00ef\u00f0\5\u0092"+
		"J\2\u00f0\u00f4\5P)\2\u00f1\u00f3\5\u0090I\2\u00f2\u00f1\3\2\2\2\u00f3"+
		"\u00f6\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f4\u00f5\3\2\2\2\u00f5\u00f7\3\2"+
		"\2\2\u00f6\u00f4\3\2\2\2\u00f7\u00f8\7H\2\2\u00f8\r\3\2\2\2\u00f9\u00fa"+
		"\7I\2\2\u00fa\u00fb\5j\66\2\u00fb\u00fc\5x=\2\u00fc\u00fd\7H\2\2\u00fd"+
		"\17\3\2\2\2\u00fe\u00ff\7J\2\2\u00ff\u0100\5b\62\2\u0100\u0101\5j\66\2"+
		"\u0101\u0102\5x=\2\u0102\u0103\7H\2\2\u0103\21\3\2\2\2\u0104\u0105\7K"+
		"\2\2\u0105\u0106\5^\60\2\u0106\u0107\5j\66\2\u0107\u0108\5x=\2\u0108\u0109"+
		"\7H\2\2\u0109\23\3\2\2\2\u010a\u010b\7O\2\2\u010b\u010c\5x=\2\u010c\u010d"+
		"\7H\2\2\u010d\25\3\2\2\2\u010e\u010f\7L\2\2\u010f\u0110\5j\66\2\u0110"+
		"\u0111\7H\2\2\u0111\27\3\2\2\2\u0112\u0113\7M\2\2\u0113\u0114\5b\62\2"+
		"\u0114\u0115\5j\66\2\u0115\u0116\7H\2\2\u0116\31\3\2\2\2\u0117\u0118\7"+
		"N\2\2\u0118\u0119\5^\60\2\u0119\u011a\5j\66\2\u011a\u011b\7H\2\2\u011b"+
		"\33\3\2\2\2\u011c\u011d\7P\2\2\u011d\u011e\5z>\2\u011e\u011f\7H\2\2\u011f"+
		"\35\3\2\2\2\u0120\u0121\7Q\2\2\u0121\u0122\5z>\2\u0122\u0123\7H\2\2\u0123"+
		"\37\3\2\2\2\u0124\u0125\7S\2\2\u0125\u0126\5j\66\2\u0126\u0127\5z>\2\u0127"+
		"\u0128\7H\2\2\u0128!\3\2\2\2\u0129\u012a\7T\2\2\u012a\u012b\5b\62\2\u012b"+
		"\u012c\5j\66\2\u012c\u012d\5z>\2\u012d\u012e\7H\2\2\u012e#\3\2\2\2\u012f"+
		"\u0130\7U\2\2\u0130\u0131\5^\60\2\u0131\u0132\5j\66\2\u0132\u0133\5z>"+
		"\2\u0133\u0134\7H\2\2\u0134%\3\2\2\2\u0135\u0136\7V\2\2\u0136\u0137\5"+
		"x=\2\u0137\u0138\5z>\2\u0138\u0139\7H\2\2\u0139\'\3\2\2\2\u013a\u013b"+
		"\7W\2\2\u013b\u013c\5z>\2\u013c\u013d\5z>\2\u013d\u013e\7H\2\2\u013e)"+
		"\3\2\2\2\u013f\u0140\7X\2\2\u0140\u0141\5z>\2\u0141\u0142\7H\2\2\u0142"+
		"+\3\2\2\2\u0143\u0144\7Y\2\2\u0144\u0145\7H\2\2\u0145-\3\2\2\2\u0146\u0147"+
		"\7R\2\2\u0147\u0148\7H\2\2\u0148/\3\2\2\2\u0149\u014a\7^\2\2\u014a\u014b"+
		"\5\u0080A\2\u014b\u014c\5\u0080A\2\u014c\u014d\5~@\2\u014d\u014e\7H\2"+
		"\2\u014e\61\3\2\2\2\u014f\u0150\7_\2\2\u0150\u0151\5x=\2\u0151\u0152\7"+
		"H\2\2\u0152\63\3\2\2\2\u0153\u0154\7`\2\2\u0154\u0155\5j\66\2\u0155\u0156"+
		"\5b\62\2\u0156\u0157\7H\2\2\u0157\65\3\2\2\2\u0158\u0159\7a\2\2\u0159"+
		"\u015a\5R*\2\u015a\u015b\5^\60\2\u015b\u015d\5^\60\2\u015c\u015e\5T+\2"+
		"\u015d\u015c\3\2\2\2\u015d\u015e\3\2\2\2\u015e\u015f\3\2\2\2\u015f\u0160"+
		"\7H\2\2\u0160\67\3\2\2\2\u0161\u0162\7D\2\2\u01629\3\2\2\2\u0163\u0164"+
		"\7\20\2\2\u0164;\3\2\2\2\u0165\u0166\7\21\2\2\u0166=\3\2\2\2\u0167\u0168"+
		"\7\22\2\2\u0168?\3\2\2\2\u0169\u016a\7\23\2\2\u016aA\3\2\2\2\u016b\u016c"+
		"\7\24\2\2\u016cC\3\2\2\2\u016d\u016e\7\25\2\2\u016eE\3\2\2\2\u016f\u0170"+
		"\7\26\2\2\u0170G\3\2\2\2\u0171\u0172\7\27\2\2\u0172I\3\2\2\2\u0173\u0174"+
		"\7\30\2\2\u0174K\3\2\2\2\u0175\u0176\7\31\2\2\u0176M\3\2\2\2\u0177\u0178"+
		"\7\32\2\2\u0178O\3\2\2\2\u0179\u017a\7b\2\2\u017aQ\3\2\2\2\u017b\u017c"+
		"\7*\2\2\u017c\u017d\7B\2\2\u017d\u0182\5P)\2\u017e\u017f\7G\2\2\u017f"+
		"\u0181\5\u0090I\2\u0180\u017e\3\2\2\2\u0181\u0184\3\2\2\2\u0182\u0180"+
		"\3\2\2\2\u0182\u0183\3\2\2\2\u0183\u0185\3\2\2\2\u0184\u0182\3\2\2\2\u0185"+
		"\u0186\7C\2\2\u0186S\3\2\2\2\u0187\u018a\5V,\2\u0188\u018a\5X-\2\u0189"+
		"\u0187\3\2\2\2\u0189\u0188\3\2\2\2\u018aU\3\2\2\2\u018b\u018c\7\3\2\2"+
		"\u018c\u018d\7B\2\2\u018d\u018e\5\u0090I\2\u018e\u018f\7C\2\2\u018fW\3"+
		"\2\2\2\u0190\u0191\7\4\2\2\u0191Y\3\2\2\2\u0192\u0193\7\5\2\2\u0193\u0194"+
		"\7B\2\2\u0194\u0195\5\u0090I\2\u0195\u0196\7C\2\2\u0196[\3\2\2\2\u0197"+
		"\u0198\7\6\2\2\u0198\u0199\7B\2\2\u0199\u019a\5\u0090I\2\u019a\u019b\7"+
		"C\2\2\u019b]\3\2\2\2\u019c\u019d\7+\2\2\u019d\u019e\7E\2\2\u019e\u019f"+
		"\5\u008cG\2\u019f\u01ad\7F\2\2\u01a0\u01ae\7D\2\2\u01a1\u01aa\7B\2\2\u01a2"+
		"\u01a7\5\u0090I\2\u01a3\u01a4\7G\2\2\u01a4\u01a6\5\u0090I\2\u01a5\u01a3"+
		"\3\2\2\2\u01a6\u01a9\3\2\2\2\u01a7\u01a5\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8"+
		"\u01ab\3\2\2\2\u01a9\u01a7\3\2\2\2\u01aa\u01a2\3\2\2\2\u01aa\u01ab\3\2"+
		"\2\2\u01ab\u01ac\3\2\2\2\u01ac\u01ae\7C\2\2\u01ad\u01a0\3\2\2\2\u01ad"+
		"\u01a1\3\2\2\2\u01ae_\3\2\2\2\u01af\u01bd\7,\2\2\u01b0\u01be\7D\2\2\u01b1"+
		"\u01ba\7B\2\2\u01b2\u01b7\5\u0090I\2\u01b3\u01b4\7G\2\2\u01b4\u01b6\5"+
		"\u0090I\2\u01b5\u01b3\3\2\2\2\u01b6\u01b9\3\2\2\2\u01b7\u01b5\3\2\2\2"+
		"\u01b7\u01b8\3\2\2\2\u01b8\u01bb\3\2\2\2\u01b9\u01b7\3\2\2\2\u01ba\u01b2"+
		"\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bc\u01be\7C\2\2\u01bd"+
		"\u01b0\3\2\2\2\u01bd\u01b1\3\2\2\2\u01bea\3\2\2\2\u01bf\u01c0\7?\2\2\u01c0"+
		"\u01c1\7B\2\2\u01c1\u01c2\7b\2\2\u01c2\u01c3\7C\2\2\u01c3c\3\2\2\2\u01c4"+
		"\u01c5\7@\2\2\u01c5\u01c6\7B\2\2\u01c6\u01c7\7b\2\2\u01c7\u01c8\7C\2\2"+
		"\u01c8e\3\2\2\2\u01c9\u01ca\7.\2\2\u01ca\u01cb\7B\2\2\u01cb\u01cc\7b\2"+
		"\2\u01cc\u01cd\7C\2\2\u01cdg\3\2\2\2\u01ce\u01cf\7/\2\2\u01cf\u01d0\7"+
		"B\2\2\u01d0\u01d1\7b\2\2\u01d1\u01d2\7C\2\2\u01d2i\3\2\2\2\u01d3\u01d4"+
		"\7\60\2\2\u01d4\u01d5\7B\2\2\u01d5\u01d6\7b\2\2\u01d6\u01d7\7C\2\2\u01d7"+
		"k\3\2\2\2\u01d8\u01d9\7\61\2\2\u01d9\u01da\7B\2\2\u01da\u01db\7b\2\2\u01db"+
		"\u01dc\7C\2\2\u01dcm\3\2\2\2\u01dd\u01de\7:\2\2\u01de\u01df\7B\2\2\u01df"+
		"\u01e0\7b\2\2\u01e0\u01e1\7C\2\2\u01e1o\3\2\2\2\u01e2\u01e3\7-\2\2\u01e3"+
		"\u01e4\7B\2\2\u01e4\u01e5\7b\2\2\u01e5\u01e6\7C\2\2\u01e6q\3\2\2\2\u01e7"+
		"\u01e8\7\62\2\2\u01e8\u01e9\7B\2\2\u01e9\u01ea\7b\2\2\u01ea\u01eb\7C\2"+
		"\2\u01ebs\3\2\2\2\u01ec\u01ed\7\66\2\2\u01ed\u01ee\7B\2\2\u01ee\u01ef"+
		"\7b\2\2\u01ef\u01f0\7C\2\2\u01f0u\3\2\2\2\u01f1\u01f2\7\63\2\2\u01f2\u01f3"+
		"\7B\2\2\u01f3\u01f4\7b\2\2\u01f4\u01f5\7C\2\2\u01f5w\3\2\2\2\u01f6\u01f7"+
		"\7\64\2\2\u01f7\u01f8\7B\2\2\u01f8\u01f9\t\2\2\2\u01f9\u01fa\7C\2\2\u01fa"+
		"y\3\2\2\2\u01fb\u01fc\7\65\2\2\u01fc\u01fd\7B\2\2\u01fd\u01fe\t\2\2\2"+
		"\u01fe\u01ff\7C\2\2\u01ff{\3\2\2\2\u0200\u0201\7A\2\2\u0201\u0202\7B\2"+
		"\2\u0202\u0203\5\u008eH\2\u0203\u0204\7C\2\2\u0204}\3\2\2\2\u0205\u0206"+
		"\79\2\2\u0206\u0207\7B\2\2\u0207\u0208\7b\2\2\u0208\u0209\7G\2\2\u0209"+
		"\u020a\5\u008eH\2\u020a\u020b\7C\2\2\u020b\177\3\2\2\2\u020c\u020d\78"+
		"\2\2\u020d\u020e\7B\2\2\u020e\u020f\7b\2\2\u020f\u0210\7C\2\2\u0210\u0081"+
		"\3\2\2\2\u0211\u0212\7;\2\2\u0212\u0213\7B\2\2\u0213\u0214\7b\2\2\u0214"+
		"\u0215\7C\2\2\u0215\u0083\3\2\2\2\u0216\u0217\7<\2\2\u0217\u0218\7B\2"+
		"\2\u0218\u0219\7b\2\2\u0219\u021a\7C\2\2\u021a\u0085\3\2\2\2\u021b\u021c"+
		"\7=\2\2\u021c\u021d\7B\2\2\u021d\u021e\7b\2\2\u021e\u021f\7C\2\2\u021f"+
		"\u0087\3\2\2\2\u0220\u0221\7>\2\2\u0221\u0222\7B\2\2\u0222\u0223\7b\2"+
		"\2\u0223\u0224\7C\2\2\u0224\u0089\3\2\2\2\u0225\u0226\7\67\2\2\u0226\u0227"+
		"\7B\2\2\u0227\u0228\7b\2\2\u0228\u0229\7C\2\2\u0229\u008b\3\2\2\2\u022a"+
		"\u022b\t\3\2\2\u022b\u008d\3\2\2\2\u022c\u0232\5J&\2\u022d\u0232\5L\'"+
		"\2\u022e\u0232\5N(\2\u022f\u0232\5P)\2\u0230\u0232\5p9\2\u0231\u022c\3"+
		"\2\2\2\u0231\u022d\3\2\2\2\u0231\u022e\3\2\2\2\u0231\u022f\3\2\2\2\u0231"+
		"\u0230\3\2\2\2\u0232\u008f\3\2\2\2\u0233\u025d\58\35\2\u0234\u025d\5:"+
		"\36\2\u0235\u025d\5<\37\2\u0236\u025d\5> \2\u0237\u025d\5@!\2\u0238\u025d"+
		"\5B\"\2\u0239\u025d\5D#\2\u023a\u025d\5F$\2\u023b\u025d\5H%\2\u023c\u025d"+
		"\5J&\2\u023d\u025d\5L\'\2\u023e\u025d\5N(\2\u023f\u025d\5P)\2\u0240\u025d"+
		"\5R*\2\u0241\u025d\5^\60\2\u0242\u025d\5`\61\2\u0243\u025d\5V,\2\u0244"+
		"\u025d\5X-\2\u0245\u025d\5Z.\2\u0246\u025d\5\\/\2\u0247\u025d\5p9\2\u0248"+
		"\u025d\5f\64\2\u0249\u025d\5h\65\2\u024a\u025d\5j\66\2\u024b\u025d\5l"+
		"\67\2\u024c\u025d\5r:\2\u024d\u025d\5v<\2\u024e\u025d\5x=\2\u024f\u025d"+
		"\5z>\2\u0250\u025d\5t;\2\u0251\u025d\5\u008aF\2\u0252\u025d\5\u0080A\2"+
		"\u0253\u025d\5|?\2\u0254\u025d\5~@\2\u0255\u025d\5n8\2\u0256\u025d\5\u0082"+
		"B\2\u0257\u025d\5\u0084C\2\u0258\u025d\5\u0086D\2\u0259\u025d\5\u0088"+
		"E\2\u025a\u025d\5b\62\2\u025b\u025d\5d\63\2\u025c\u0233\3\2\2\2\u025c"+
		"\u0234\3\2\2\2\u025c\u0235\3\2\2\2\u025c\u0236\3\2\2\2\u025c\u0237\3\2"+
		"\2\2\u025c\u0238\3\2\2\2\u025c\u0239\3\2\2\2\u025c\u023a\3\2\2\2\u025c"+
		"\u023b\3\2\2\2\u025c\u023c\3\2\2\2\u025c\u023d\3\2\2\2\u025c\u023e\3\2"+
		"\2\2\u025c\u023f\3\2\2\2\u025c\u0240\3\2\2\2\u025c\u0241\3\2\2\2\u025c"+
		"\u0242\3\2\2\2\u025c\u0243\3\2\2\2\u025c\u0244\3\2\2\2\u025c\u0245\3\2"+
		"\2\2\u025c\u0246\3\2\2\2\u025c\u0247\3\2\2\2\u025c\u0248\3\2\2\2\u025c"+
		"\u0249\3\2\2\2\u025c\u024a\3\2\2\2\u025c\u024b\3\2\2\2\u025c\u024c\3\2"+
		"\2\2\u025c\u024d\3\2\2\2\u025c\u024e\3\2\2\2\u025c\u024f\3\2\2\2\u025c"+
		"\u0250\3\2\2\2\u025c\u0251\3\2\2\2\u025c\u0252\3\2\2\2\u025c\u0253\3\2"+
		"\2\2\u025c\u0254\3\2\2\2\u025c\u0255\3\2\2\2\u025c\u0256\3\2\2\2\u025c"+
		"\u0257\3\2\2\2\u025c\u0258\3\2\2\2\u025c\u0259\3\2\2\2\u025c\u025a\3\2"+
		"\2\2\u025c\u025b\3\2\2\2\u025d\u0091\3\2\2\2\u025e\u026d\5x=\2\u025f\u026d"+
		"\5z>\2\u0260\u026d\5\u0096L\2\u0261\u026d\5\u0098M\2\u0262\u026d\5\u0094"+
		"K\2\u0263\u026d\5\u009aN\2\u0264\u026d\5v<\2\u0265\u026d\5\u009cO\2\u0266"+
		"\u026d\5r:\2\u0267\u026d\5t;\2\u0268\u026d\5\u009eP\2\u0269\u026d\5\u00a0"+
		"Q\2\u026a\u026d\5\u00a2R\2\u026b\u026d\5\u00a4S\2\u026c\u025e\3\2\2\2"+
		"\u026c\u025f\3\2\2\2\u026c\u0260\3\2\2\2\u026c\u0261\3\2\2\2\u026c\u0262"+
		"\3\2\2\2\u026c\u0263\3\2\2\2\u026c\u0264\3\2\2\2\u026c\u0265\3\2\2\2\u026c"+
		"\u0266\3\2\2\2\u026c\u0267\3\2\2\2\u026c\u0268\3\2\2\2\u026c\u0269\3\2"+
		"\2\2\u026c\u026a\3\2\2\2\u026c\u026b\3\2\2\2\u026d\u0093\3\2\2\2\u026e"+
		"\u026f\7\7\2\2\u026f\u0095\3\2\2\2\u0270\u0271\7\b\2\2\u0271\u0272\7B"+
		"\2\2\u0272\u0273\7\30\2\2\u0273\u0274\7C\2\2\u0274\u0097\3\2\2\2\u0275"+
		"\u0276\7\t\2\2\u0276\u0277\7B\2\2\u0277\u0278\7b\2\2\u0278\u0279\7C\2"+
		"\2\u0279\u0099\3\2\2\2\u027a\u027b\7\n\2\2\u027b\u027c\7B\2\2\u027c\u027d"+
		"\7b\2\2\u027d\u027e\7C\2\2\u027e\u009b\3\2\2\2\u027f\u0280\7\13\2\2\u0280"+
		"\u0281\7B\2\2\u0281\u0282\7b\2\2\u0282\u0283\7C\2\2\u0283\u009d\3\2\2"+
		"\2\u0284\u0285\7\f\2\2\u0285\u0286\7B\2\2\u0286\u0287\7b\2\2\u0287\u0288"+
		"\7C\2\2\u0288\u009f\3\2\2\2\u0289\u028a\7\r\2\2\u028a\u028b\7B\2\2\u028b"+
		"\u028c\7b\2\2\u028c\u028d\7C\2\2\u028d\u00a1\3\2\2\2\u028e\u028f\7\16"+
		"\2\2\u028f\u0290\7B\2\2\u0290\u0291\7b\2\2\u0291\u0292\7C\2\2\u0292\u00a3"+
		"\3\2\2\2\u0293\u0294\7\17\2\2\u0294\u0295\7B\2\2\u0295\u0296\7b\2\2\u0296"+
		"\u0297\7C\2\2\u0297\u00a5\3\2\2\2\25\u00a9\u00c7\u00d0\u00db\u00e3\u00e9"+
		"\u00f4\u015d\u0182\u0189\u01a7\u01aa\u01ad\u01b7\u01ba\u01bd\u0231\u025c"+
		"\u026c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}