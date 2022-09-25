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
		BOOL_LITERAL=1, I8_LITERAL=2, I16_LITERAL=3, I32_LITERAL=4, I64_LITERAL=5, 
		I128_LITERAL=6, U8_LITERAL=7, U16_LITERAL=8, U32_LITERAL=9, U64_LITERAL=10, 
		U128_LITERAL=11, TRUE=12, FALSE=13, UNIT_TYPE=14, BOOL_TYPE=15, I8_TYPE=16, 
		I16_TYPE=17, I32_TYPE=18, I64_TYPE=19, I128_TYPE=20, U8_TYPE=21, U16_TYPE=22, 
		U32_TYPE=23, U64_TYPE=24, U128_TYPE=25, STRING_TYPE=26, STRUCT_TYPE=27, 
		ENUM_TYPE=28, OPTION_TYPE=29, RESULT_TYPE=30, SOME_TYPE=31, NONE_TYPE=32, 
		OK_TYPE=33, ERR_TYPE=34, ARRAY_TYPE=35, TUPLE_TYPE=36, LIST_TYPE=37, SET_TYPE=38, 
		MAP_TYPE=39, DECIMAL_TYPE=40, PRECISE_DECIMAL_TYPE=41, PACKAGE_ADDRESS_TYPE=42, 
		COMPONENT_ADDRESS_TYPE=43, RESOURCE_ADDRESS_TYPE=44, HASH_TYPE=45, BUCKET_TYPE=46, 
		PROOF_TYPE=47, NON_FUNGIBLE_ID_TYPE=48, NON_FUNGIBLE_ADDRESS_TYPE=49, 
		BLOB_TYPE=50, EXPRESSION_TYPE=51, OPEN_PARENTHESIS=52, CLOED_PARENTHESIS=53, 
		EMPTY_PARENTHESIS=54, LESS_THAN=55, GREATER_THAN=56, COMMA=57, SEMICOLON=58, 
		TAKE_FROM_WORKTOP=59, TAKE_FROM_WORKTOP_BY_AMOUNT=60, TAKE_FROM_WORKTOP_BY_IDS=61, 
		ASSERT_WORKTOP_CONTAINS=62, ASSERT_WORKTOP_CONTAINS_BY_AMOUNT=63, ASSERT_WORKTOP_CONTAINS_BY_IDS=64, 
		RETURN_TO_WORKTOP=65, POP_FROM_AUTH_ZONE=66, PUSH_TO_AUTH_ZONE=67, CLEAR_AUTHZONE=68, 
		CREATE_PROOF_FROM_AUTH_ZONE=69, CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT=70, 
		CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS=71, CREATE_PROOF_FROM_BUCKET=72, CLONE_PROOF=73, 
		DROP_PROOF=74, DROP_ALL_PROOFS=75, CALL_FUNCTION=76, CALL_METHOD=77, PUBLISH_PACKAGE=78, 
		BURN_BUCKET=79, MINT_FUNGIBLE=80, CREATE_RESOURCE=81, STRING_LITERAL=82, 
		DIGIT=83, LETTER=84, NUMBER=85, WS=86, COMMENT=87;
	public static final int
		RULE_manifest = 0, RULE_manifestInstruction = 1, RULE_callFunction = 2, 
		RULE_callMethod = 3, RULE_takeFromWorktop = 4, RULE_takeFromWorktopByAmount = 5, 
		RULE_takeFromWorktopByIds = 6, RULE_returnToWorktop = 7, RULE_assertWorktopContains = 8, 
		RULE_assertWorktopContainsByAmount = 9, RULE_assertWorktopContainsByIds = 10, 
		RULE_popFromAuthZone = 11, RULE_pushToAuthZone = 12, RULE_createProofFromAuthZone = 13, 
		RULE_createProofFromAuthZoneByAmount = 14, RULE_createProofFromAuthZoneByIds = 15, 
		RULE_createProofFromBucket = 16, RULE_cloneProof = 17, RULE_dropProof = 18, 
		RULE_dropAllProofs = 19, RULE_clearAuthZone = 20, RULE_publishPackage = 21, 
		RULE_burnBucket = 22, RULE_mintFungible = 23, RULE_createResource = 24, 
		RULE_unit = 25, RULE_bool = 26, RULE_i8 = 27, RULE_i16 = 28, RULE_i32 = 29, 
		RULE_i64 = 30, RULE_i128 = 31, RULE_u8 = 32, RULE_u16 = 33, RULE_u32 = 34, 
		RULE_u64 = 35, RULE_u128 = 36, RULE_string = 37, RULE_struct = 38, RULE_enum_ = 39, 
		RULE_option = 40, RULE_some = 41, RULE_none = 42, RULE_ok = 43, RULE_err = 44, 
		RULE_array = 45, RULE_tuple = 46, RULE_list = 47, RULE_set = 48, RULE_map = 49, 
		RULE_decimal = 50, RULE_preciseDecimal = 51, RULE_packageAddress = 52, 
		RULE_componentAddress = 53, RULE_resourceAddress = 54, RULE_hash = 55, 
		RULE_bucket = 56, RULE_proof = 57, RULE_nonFungibleId = 58, RULE_nonFungibleAddress = 59, 
		RULE_blob = 60, RULE_expression = 61, RULE_type = 62, RULE_value = 63;
	private static String[] makeRuleNames() {
		return new String[] {
			"manifest", "manifestInstruction", "callFunction", "callMethod", "takeFromWorktop", 
			"takeFromWorktopByAmount", "takeFromWorktopByIds", "returnToWorktop", 
			"assertWorktopContains", "assertWorktopContainsByAmount", "assertWorktopContainsByIds", 
			"popFromAuthZone", "pushToAuthZone", "createProofFromAuthZone", "createProofFromAuthZoneByAmount", 
			"createProofFromAuthZoneByIds", "createProofFromBucket", "cloneProof", 
			"dropProof", "dropAllProofs", "clearAuthZone", "publishPackage", "burnBucket", 
			"mintFungible", "createResource", "unit", "bool", "i8", "i16", "i32", 
			"i64", "i128", "u8", "u16", "u32", "u64", "u128", "string", "struct", 
			"enum_", "option", "some", "none", "ok", "err", "array", "tuple", "list", 
			"set", "map", "decimal", "preciseDecimal", "packageAddress", "componentAddress", 
			"resourceAddress", "hash", "bucket", "proof", "nonFungibleId", "nonFungibleAddress", 
			"blob", "expression", "type", "value"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"'true'", "'false'", "'Unit'", "'Bool'", "'I8'", "'I16'", "'I32'", "'I64'", 
			"'I128'", "'U8'", "'U16'", "'U32'", "'U64'", "'U128'", "'String'", "'Struct'", 
			"'Enum'", "'Option'", "'Result'", "'Some'", "'None'", "'Ok'", "'Err'", 
			"'Array'", "'Tuple'", "'List'", "'Set'", "'Map'", "'Decimal'", "'PreciseDecimal'", 
			"'PackageAddress'", "'ComponentAddress'", "'ResourceAddress'", "'Hash'", 
			"'Bucket'", "'Proof'", "'NonFungibleId'", "'NonFungibleAddress'", "'Blob'", 
			"'Expression'", "'('", "')'", "'()'", "'<'", "'>'", "','", "';'", "'TAKE_FROM_WORKTOP'", 
			"'TAKE_FROM_WORKTOP_BY_AMOUNT'", "'TAKE_FROM_WORKTOP_BY_IDS'", "'ASSERT_WORKTOP_CONTAINS'", 
			"'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT'", "'ASSERT_WORKTOP_CONTAINS_BY_IDS'", 
			"'RETURN_TO_WORKTOP'", "'POP_FROM_AUTH_ZONE'", "'PUSH_TO_AUTH_ZONE'", 
			"'CLEAR_AUTHZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT'", 
			"'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS'", "'CREATE_PROOF_FROM_BUCKET'", 
			"'CLONE_PROOF'", "'DROP_PROOF'", "'DROP_ALL_PROOFS'", "'CALL_FUNCTION'", 
			"'CALL_METHOD'", "'PUBLISH_PACKAGE'", "'BURN_BUCKET'", "'MINT_FUNGIBLE'", 
			"'CREATE_RESOURCE'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "BOOL_LITERAL", "I8_LITERAL", "I16_LITERAL", "I32_LITERAL", "I64_LITERAL", 
			"I128_LITERAL", "U8_LITERAL", "U16_LITERAL", "U32_LITERAL", "U64_LITERAL", 
			"U128_LITERAL", "TRUE", "FALSE", "UNIT_TYPE", "BOOL_TYPE", "I8_TYPE", 
			"I16_TYPE", "I32_TYPE", "I64_TYPE", "I128_TYPE", "U8_TYPE", "U16_TYPE", 
			"U32_TYPE", "U64_TYPE", "U128_TYPE", "STRING_TYPE", "STRUCT_TYPE", "ENUM_TYPE", 
			"OPTION_TYPE", "RESULT_TYPE", "SOME_TYPE", "NONE_TYPE", "OK_TYPE", "ERR_TYPE", 
			"ARRAY_TYPE", "TUPLE_TYPE", "LIST_TYPE", "SET_TYPE", "MAP_TYPE", "DECIMAL_TYPE", 
			"PRECISE_DECIMAL_TYPE", "PACKAGE_ADDRESS_TYPE", "COMPONENT_ADDRESS_TYPE", 
			"RESOURCE_ADDRESS_TYPE", "HASH_TYPE", "BUCKET_TYPE", "PROOF_TYPE", "NON_FUNGIBLE_ID_TYPE", 
			"NON_FUNGIBLE_ADDRESS_TYPE", "BLOB_TYPE", "EXPRESSION_TYPE", "OPEN_PARENTHESIS", 
			"CLOED_PARENTHESIS", "EMPTY_PARENTHESIS", "LESS_THAN", "GREATER_THAN", 
			"COMMA", "SEMICOLON", "TAKE_FROM_WORKTOP", "TAKE_FROM_WORKTOP_BY_AMOUNT", 
			"TAKE_FROM_WORKTOP_BY_IDS", "ASSERT_WORKTOP_CONTAINS", "ASSERT_WORKTOP_CONTAINS_BY_AMOUNT", 
			"ASSERT_WORKTOP_CONTAINS_BY_IDS", "RETURN_TO_WORKTOP", "POP_FROM_AUTH_ZONE", 
			"PUSH_TO_AUTH_ZONE", "CLEAR_AUTHZONE", "CREATE_PROOF_FROM_AUTH_ZONE", 
			"CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT", "CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS", 
			"CREATE_PROOF_FROM_BUCKET", "CLONE_PROOF", "DROP_PROOF", "DROP_ALL_PROOFS", 
			"CALL_FUNCTION", "CALL_METHOD", "PUBLISH_PACKAGE", "BURN_BUCKET", "MINT_FUNGIBLE", 
			"CREATE_RESOURCE", "STRING_LITERAL", "DIGIT", "LETTER", "NUMBER", "WS", 
			"COMMENT"
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
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 59)) & ~0x3f) == 0 && ((1L << (_la - 59)) & ((1L << (TAKE_FROM_WORKTOP - 59)) | (1L << (TAKE_FROM_WORKTOP_BY_AMOUNT - 59)) | (1L << (TAKE_FROM_WORKTOP_BY_IDS - 59)) | (1L << (ASSERT_WORKTOP_CONTAINS - 59)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 59)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_IDS - 59)) | (1L << (RETURN_TO_WORKTOP - 59)) | (1L << (POP_FROM_AUTH_ZONE - 59)) | (1L << (PUSH_TO_AUTH_ZONE - 59)) | (1L << (CLEAR_AUTHZONE - 59)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE - 59)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 59)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 59)) | (1L << (CREATE_PROOF_FROM_BUCKET - 59)) | (1L << (CLONE_PROOF - 59)) | (1L << (DROP_PROOF - 59)) | (1L << (DROP_ALL_PROOFS - 59)) | (1L << (CALL_FUNCTION - 59)) | (1L << (CALL_METHOD - 59)) | (1L << (PUBLISH_PACKAGE - 59)) | (1L << (BURN_BUCKET - 59)) | (1L << (MINT_FUNGIBLE - 59)) | (1L << (CREATE_RESOURCE - 59)))) != 0)) {
				{
				{
				setState(128);
				manifestInstruction();
				}
				}
				setState(133);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(134);
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
		public CallMethodContext callMethod() {
			return getRuleContext(CallMethodContext.class,0);
		}
		public ReturnToWorktopContext returnToWorktop() {
			return getRuleContext(ReturnToWorktopContext.class,0);
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
		public PublishPackageContext publishPackage() {
			return getRuleContext(PublishPackageContext.class,0);
		}
		public CreateResourceContext createResource() {
			return getRuleContext(CreateResourceContext.class,0);
		}
		public BurnBucketContext burnBucket() {
			return getRuleContext(BurnBucketContext.class,0);
		}
		public MintFungibleContext mintFungible() {
			return getRuleContext(MintFungibleContext.class,0);
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
			setState(159);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CALL_FUNCTION:
				enterOuterAlt(_localctx, 1);
				{
				setState(136);
				callFunction();
				}
				break;
			case CALL_METHOD:
				enterOuterAlt(_localctx, 2);
				{
				setState(137);
				callMethod();
				}
				break;
			case RETURN_TO_WORKTOP:
				enterOuterAlt(_localctx, 3);
				{
				setState(138);
				returnToWorktop();
				}
				break;
			case TAKE_FROM_WORKTOP:
				enterOuterAlt(_localctx, 4);
				{
				setState(139);
				takeFromWorktop();
				}
				break;
			case TAKE_FROM_WORKTOP_BY_AMOUNT:
				enterOuterAlt(_localctx, 5);
				{
				setState(140);
				takeFromWorktopByAmount();
				}
				break;
			case TAKE_FROM_WORKTOP_BY_IDS:
				enterOuterAlt(_localctx, 6);
				{
				setState(141);
				takeFromWorktopByIds();
				}
				break;
			case ASSERT_WORKTOP_CONTAINS:
				enterOuterAlt(_localctx, 7);
				{
				setState(142);
				assertWorktopContains();
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
				enterOuterAlt(_localctx, 8);
				{
				setState(143);
				assertWorktopContainsByAmount();
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_IDS:
				enterOuterAlt(_localctx, 9);
				{
				setState(144);
				assertWorktopContainsByIds();
				}
				break;
			case POP_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 10);
				{
				setState(145);
				popFromAuthZone();
				}
				break;
			case PUSH_TO_AUTH_ZONE:
				enterOuterAlt(_localctx, 11);
				{
				setState(146);
				pushToAuthZone();
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 12);
				{
				setState(147);
				createProofFromAuthZone();
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
				enterOuterAlt(_localctx, 13);
				{
				setState(148);
				createProofFromAuthZoneByAmount();
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
				enterOuterAlt(_localctx, 14);
				{
				setState(149);
				createProofFromAuthZoneByIds();
				}
				break;
			case CREATE_PROOF_FROM_BUCKET:
				enterOuterAlt(_localctx, 15);
				{
				setState(150);
				createProofFromBucket();
				}
				break;
			case CLONE_PROOF:
				enterOuterAlt(_localctx, 16);
				{
				setState(151);
				cloneProof();
				}
				break;
			case DROP_PROOF:
				enterOuterAlt(_localctx, 17);
				{
				setState(152);
				dropProof();
				}
				break;
			case DROP_ALL_PROOFS:
				enterOuterAlt(_localctx, 18);
				{
				setState(153);
				dropAllProofs();
				}
				break;
			case CLEAR_AUTHZONE:
				enterOuterAlt(_localctx, 19);
				{
				setState(154);
				clearAuthZone();
				}
				break;
			case PUBLISH_PACKAGE:
				enterOuterAlt(_localctx, 20);
				{
				setState(155);
				publishPackage();
				}
				break;
			case CREATE_RESOURCE:
				enterOuterAlt(_localctx, 21);
				{
				setState(156);
				createResource();
				}
				break;
			case BURN_BUCKET:
				enterOuterAlt(_localctx, 22);
				{
				setState(157);
				burnBucket();
				}
				break;
			case MINT_FUNGIBLE:
				enterOuterAlt(_localctx, 23);
				{
				setState(158);
				mintFungible();
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
			setState(161);
			match(CALL_FUNCTION);
			setState(162);
			packageAddress();
			setState(163);
			string();
			setState(164);
			string();
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BLOB_TYPE) | (1L << EXPRESSION_TYPE) | (1L << EMPTY_PARENTHESIS))) != 0) || _la==STRING_LITERAL) {
				{
				{
				setState(165);
				value();
				}
				}
				setState(170);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(171);
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
		public ComponentAddressContext componentAddress() {
			return getRuleContext(ComponentAddressContext.class,0);
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
		public CallMethodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callMethod; }
	}

	public final CallMethodContext callMethod() throws RecognitionException {
		CallMethodContext _localctx = new CallMethodContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_callMethod);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(CALL_METHOD);
			setState(174);
			componentAddress();
			setState(175);
			string();
			setState(179);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BLOB_TYPE) | (1L << EXPRESSION_TYPE) | (1L << EMPTY_PARENTHESIS))) != 0) || _la==STRING_LITERAL) {
				{
				{
				setState(176);
				value();
				}
				}
				setState(181);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(182);
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
		enterRule(_localctx, 8, RULE_takeFromWorktop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(TAKE_FROM_WORKTOP);
			setState(185);
			resourceAddress();
			setState(186);
			bucket();
			setState(187);
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
		enterRule(_localctx, 10, RULE_takeFromWorktopByAmount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			match(TAKE_FROM_WORKTOP_BY_AMOUNT);
			setState(190);
			decimal();
			setState(191);
			resourceAddress();
			setState(192);
			bucket();
			setState(193);
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
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
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
		enterRule(_localctx, 12, RULE_takeFromWorktopByIds);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(TAKE_FROM_WORKTOP_BY_IDS);
			setState(196);
			set();
			setState(197);
			resourceAddress();
			setState(198);
			bucket();
			setState(199);
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
		enterRule(_localctx, 14, RULE_returnToWorktop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(RETURN_TO_WORKTOP);
			setState(202);
			bucket();
			setState(203);
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
		enterRule(_localctx, 16, RULE_assertWorktopContains);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			match(ASSERT_WORKTOP_CONTAINS);
			setState(206);
			resourceAddress();
			setState(207);
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
		enterRule(_localctx, 18, RULE_assertWorktopContainsByAmount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
			setState(210);
			decimal();
			setState(211);
			resourceAddress();
			setState(212);
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
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
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
		enterRule(_localctx, 20, RULE_assertWorktopContainsByIds);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			match(ASSERT_WORKTOP_CONTAINS_BY_IDS);
			setState(215);
			set();
			setState(216);
			resourceAddress();
			setState(217);
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
		enterRule(_localctx, 22, RULE_popFromAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(POP_FROM_AUTH_ZONE);
			setState(220);
			proof();
			setState(221);
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
		enterRule(_localctx, 24, RULE_pushToAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(PUSH_TO_AUTH_ZONE);
			setState(224);
			proof();
			setState(225);
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
		enterRule(_localctx, 26, RULE_createProofFromAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			match(CREATE_PROOF_FROM_AUTH_ZONE);
			setState(228);
			resourceAddress();
			setState(229);
			proof();
			setState(230);
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
		enterRule(_localctx, 28, RULE_createProofFromAuthZoneByAmount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			match(CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
			setState(233);
			decimal();
			setState(234);
			resourceAddress();
			setState(235);
			proof();
			setState(236);
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
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
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
		enterRule(_localctx, 30, RULE_createProofFromAuthZoneByIds);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
			setState(239);
			set();
			setState(240);
			resourceAddress();
			setState(241);
			proof();
			setState(242);
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
		enterRule(_localctx, 32, RULE_createProofFromBucket);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			match(CREATE_PROOF_FROM_BUCKET);
			setState(245);
			bucket();
			setState(246);
			proof();
			setState(247);
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
		enterRule(_localctx, 34, RULE_cloneProof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(CLONE_PROOF);
			setState(250);
			proof();
			setState(251);
			proof();
			setState(252);
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
		enterRule(_localctx, 36, RULE_dropProof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
			match(DROP_PROOF);
			setState(255);
			proof();
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
		enterRule(_localctx, 38, RULE_dropAllProofs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(DROP_ALL_PROOFS);
			setState(259);
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
		enterRule(_localctx, 40, RULE_clearAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			match(CLEAR_AUTHZONE);
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

	public static class PublishPackageContext extends ParserRuleContext {
		public TerminalNode PUBLISH_PACKAGE() { return getToken(TransactionManifestParser.PUBLISH_PACKAGE, 0); }
		public List<BlobContext> blob() {
			return getRuleContexts(BlobContext.class);
		}
		public BlobContext blob(int i) {
			return getRuleContext(BlobContext.class,i);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public PublishPackageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_publishPackage; }
	}

	public final PublishPackageContext publishPackage() throws RecognitionException {
		PublishPackageContext _localctx = new PublishPackageContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_publishPackage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(PUBLISH_PACKAGE);
			setState(265);
			blob();
			setState(266);
			blob();
			setState(267);
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
		enterRule(_localctx, 44, RULE_burnBucket);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			match(BURN_BUCKET);
			setState(270);
			bucket();
			setState(271);
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
		enterRule(_localctx, 46, RULE_mintFungible);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			match(MINT_FUNGIBLE);
			setState(274);
			resourceAddress();
			setState(275);
			decimal();
			setState(276);
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
		public List<MapContext> map() {
			return getRuleContexts(MapContext.class);
		}
		public MapContext map(int i) {
			return getRuleContext(MapContext.class,i);
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
		enterRule(_localctx, 48, RULE_createResource);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			match(CREATE_RESOURCE);
			setState(279);
			enum_();
			setState(280);
			map();
			setState(281);
			map();
			setState(283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SOME_TYPE || _la==NONE_TYPE) {
				{
				setState(282);
				option();
				}
			}

			setState(285);
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
		enterRule(_localctx, 50, RULE_unit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
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
		enterRule(_localctx, 52, RULE_bool);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
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
		enterRule(_localctx, 54, RULE_i8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
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
		enterRule(_localctx, 56, RULE_i16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
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
		enterRule(_localctx, 58, RULE_i32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
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
		enterRule(_localctx, 60, RULE_i64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
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
		enterRule(_localctx, 62, RULE_i128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
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
		enterRule(_localctx, 64, RULE_u8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
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
		enterRule(_localctx, 66, RULE_u16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
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
		enterRule(_localctx, 68, RULE_u32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
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
		enterRule(_localctx, 70, RULE_u64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
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
		enterRule(_localctx, 72, RULE_u128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(309);
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
		enterRule(_localctx, 74, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(311);
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

	public static class StructContext extends ParserRuleContext {
		public TerminalNode STRUCT_TYPE() { return getToken(TransactionManifestParser.STRUCT_TYPE, 0); }
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
		public StructContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_struct; }
	}

	public final StructContext struct() throws RecognitionException {
		StructContext _localctx = new StructContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_struct);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
			match(STRUCT_TYPE);
			setState(327);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY_PARENTHESIS:
				{
				setState(314);
				match(EMPTY_PARENTHESIS);
				}
				break;
			case OPEN_PARENTHESIS:
				{
				setState(315);
				match(OPEN_PARENTHESIS);
				setState(324);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BLOB_TYPE) | (1L << EXPRESSION_TYPE) | (1L << EMPTY_PARENTHESIS))) != 0) || _la==STRING_LITERAL) {
					{
					setState(316);
					value();
					setState(321);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(317);
						match(COMMA);
						setState(318);
						value();
						}
						}
						setState(323);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(326);
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

	public static class Enum_Context extends ParserRuleContext {
		public TerminalNode ENUM_TYPE() { return getToken(TransactionManifestParser.ENUM_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
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
		enterRule(_localctx, 78, RULE_enum_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(329);
			match(ENUM_TYPE);
			setState(330);
			match(OPEN_PARENTHESIS);
			{
			setState(331);
			string();
			setState(332);
			match(COMMA);
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BLOB_TYPE) | (1L << EXPRESSION_TYPE) | (1L << EMPTY_PARENTHESIS))) != 0) || _la==STRING_LITERAL) {
				{
				setState(333);
				value();
				setState(338);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(334);
					match(COMMA);
					setState(335);
					value();
					}
					}
					setState(340);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
			setState(343);
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
		enterRule(_localctx, 80, RULE_option);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SOME_TYPE:
				{
				setState(345);
				some();
				}
				break;
			case NONE_TYPE:
				{
				setState(346);
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
		public TerminalNode SOME_TYPE() { return getToken(TransactionManifestParser.SOME_TYPE, 0); }
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
		enterRule(_localctx, 82, RULE_some);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(349);
			match(SOME_TYPE);
			setState(350);
			match(OPEN_PARENTHESIS);
			setState(351);
			value();
			setState(352);
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
		public TerminalNode NONE_TYPE() { return getToken(TransactionManifestParser.NONE_TYPE, 0); }
		public NoneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_none; }
	}

	public final NoneContext none() throws RecognitionException {
		NoneContext _localctx = new NoneContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_none);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(354);
			match(NONE_TYPE);
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
		public TerminalNode OK_TYPE() { return getToken(TransactionManifestParser.OK_TYPE, 0); }
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
		enterRule(_localctx, 86, RULE_ok);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(356);
			match(OK_TYPE);
			setState(357);
			match(OPEN_PARENTHESIS);
			setState(358);
			value();
			setState(359);
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
		public TerminalNode ERR_TYPE() { return getToken(TransactionManifestParser.ERR_TYPE, 0); }
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
		enterRule(_localctx, 88, RULE_err);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(361);
			match(ERR_TYPE);
			setState(362);
			match(OPEN_PARENTHESIS);
			setState(363);
			value();
			setState(364);
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
		enterRule(_localctx, 90, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(366);
			match(ARRAY_TYPE);
			setState(367);
			match(LESS_THAN);
			setState(368);
			type();
			setState(369);
			match(GREATER_THAN);
			setState(383);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY_PARENTHESIS:
				{
				setState(370);
				match(EMPTY_PARENTHESIS);
				}
				break;
			case OPEN_PARENTHESIS:
				{
				setState(371);
				match(OPEN_PARENTHESIS);
				setState(380);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BLOB_TYPE) | (1L << EXPRESSION_TYPE) | (1L << EMPTY_PARENTHESIS))) != 0) || _la==STRING_LITERAL) {
					{
					setState(372);
					value();
					setState(377);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(373);
						match(COMMA);
						setState(374);
						value();
						}
						}
						setState(379);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(382);
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
		public TerminalNode LESS_THAN() { return getToken(TransactionManifestParser.LESS_THAN, 0); }
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
		enterRule(_localctx, 92, RULE_tuple);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(385);
			match(TUPLE_TYPE);
			setState(386);
			match(LESS_THAN);
			setState(400);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY_PARENTHESIS:
				{
				setState(387);
				match(EMPTY_PARENTHESIS);
				}
				break;
			case OPEN_PARENTHESIS:
				{
				setState(388);
				match(OPEN_PARENTHESIS);
				setState(397);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BLOB_TYPE) | (1L << EXPRESSION_TYPE) | (1L << EMPTY_PARENTHESIS))) != 0) || _la==STRING_LITERAL) {
					{
					setState(389);
					value();
					setState(394);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(390);
						match(COMMA);
						setState(391);
						value();
						}
						}
						setState(396);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(399);
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

	public static class ListContext extends ParserRuleContext {
		public TerminalNode LIST_TYPE() { return getToken(TransactionManifestParser.LIST_TYPE, 0); }
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
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
			match(LIST_TYPE);
			setState(403);
			match(LESS_THAN);
			setState(404);
			type();
			setState(405);
			match(GREATER_THAN);
			setState(419);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY_PARENTHESIS:
				{
				setState(406);
				match(EMPTY_PARENTHESIS);
				}
				break;
			case OPEN_PARENTHESIS:
				{
				setState(407);
				match(OPEN_PARENTHESIS);
				setState(416);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BLOB_TYPE) | (1L << EXPRESSION_TYPE) | (1L << EMPTY_PARENTHESIS))) != 0) || _la==STRING_LITERAL) {
					{
					setState(408);
					value();
					setState(413);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(409);
						match(COMMA);
						setState(410);
						value();
						}
						}
						setState(415);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(418);
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

	public static class SetContext extends ParserRuleContext {
		public TerminalNode SET_TYPE() { return getToken(TransactionManifestParser.SET_TYPE, 0); }
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
		public SetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set; }
	}

	public final SetContext set() throws RecognitionException {
		SetContext _localctx = new SetContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(421);
			match(SET_TYPE);
			setState(422);
			match(LESS_THAN);
			setState(423);
			type();
			setState(424);
			match(GREATER_THAN);
			setState(438);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY_PARENTHESIS:
				{
				setState(425);
				match(EMPTY_PARENTHESIS);
				}
				break;
			case OPEN_PARENTHESIS:
				{
				setState(426);
				match(OPEN_PARENTHESIS);
				setState(435);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BLOB_TYPE) | (1L << EXPRESSION_TYPE) | (1L << EMPTY_PARENTHESIS))) != 0) || _la==STRING_LITERAL) {
					{
					setState(427);
					value();
					setState(432);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(428);
						match(COMMA);
						setState(429);
						value();
						}
						}
						setState(434);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(437);
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

	public static class MapContext extends ParserRuleContext {
		public TerminalNode MAP_TYPE() { return getToken(TransactionManifestParser.MAP_TYPE, 0); }
		public TerminalNode LESS_THAN() { return getToken(TransactionManifestParser.LESS_THAN, 0); }
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(TransactionManifestParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TransactionManifestParser.COMMA, i);
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
		public MapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_map; }
	}

	public final MapContext map() throws RecognitionException {
		MapContext _localctx = new MapContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_map);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			match(MAP_TYPE);
			setState(441);
			match(LESS_THAN);
			setState(442);
			type();
			setState(443);
			match(COMMA);
			setState(444);
			type();
			setState(445);
			match(GREATER_THAN);
			setState(458);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY_PARENTHESIS:
				{
				setState(446);
				match(EMPTY_PARENTHESIS);
				}
				break;
			case OPEN_PARENTHESIS:
				{
				setState(447);
				match(OPEN_PARENTHESIS);
				setState(454);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(448);
						value();
						setState(449);
						match(COMMA);
						setState(450);
						value();
						}
						} 
					}
					setState(456);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				}
				setState(457);
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
		enterRule(_localctx, 100, RULE_decimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(460);
			match(DECIMAL_TYPE);
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
		enterRule(_localctx, 102, RULE_preciseDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(465);
			match(PRECISE_DECIMAL_TYPE);
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
		enterRule(_localctx, 104, RULE_packageAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(470);
			match(PACKAGE_ADDRESS_TYPE);
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
		enterRule(_localctx, 106, RULE_componentAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(475);
			match(COMPONENT_ADDRESS_TYPE);
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
		enterRule(_localctx, 108, RULE_resourceAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(480);
			match(RESOURCE_ADDRESS_TYPE);
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
		enterRule(_localctx, 110, RULE_hash);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(485);
			match(HASH_TYPE);
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
		enterRule(_localctx, 112, RULE_bucket);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(490);
			match(BUCKET_TYPE);
			setState(491);
			match(OPEN_PARENTHESIS);
			setState(492);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
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
		enterRule(_localctx, 114, RULE_proof);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(495);
			match(PROOF_TYPE);
			setState(496);
			match(OPEN_PARENTHESIS);
			setState(497);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
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

	public static class NonFungibleIdContext extends ParserRuleContext {
		public TerminalNode NON_FUNGIBLE_ID_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public NonFungibleIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonFungibleId; }
	}

	public final NonFungibleIdContext nonFungibleId() throws RecognitionException {
		NonFungibleIdContext _localctx = new NonFungibleIdContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_nonFungibleId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(500);
			match(NON_FUNGIBLE_ID_TYPE);
			setState(501);
			match(OPEN_PARENTHESIS);
			setState(502);
			match(STRING_LITERAL);
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

	public static class NonFungibleAddressContext extends ParserRuleContext {
		public TerminalNode NON_FUNGIBLE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public NonFungibleAddressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonFungibleAddress; }
	}

	public final NonFungibleAddressContext nonFungibleAddress() throws RecognitionException {
		NonFungibleAddressContext _localctx = new NonFungibleAddressContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_nonFungibleAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(505);
			match(NON_FUNGIBLE_ADDRESS_TYPE);
			setState(506);
			match(OPEN_PARENTHESIS);
			setState(507);
			match(STRING_LITERAL);
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
		enterRule(_localctx, 120, RULE_blob);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(510);
			match(BLOB_TYPE);
			setState(511);
			match(OPEN_PARENTHESIS);
			setState(512);
			match(STRING_LITERAL);
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
		enterRule(_localctx, 122, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(515);
			match(EXPRESSION_TYPE);
			setState(516);
			match(OPEN_PARENTHESIS);
			setState(517);
			match(STRING_LITERAL);
			setState(518);
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
		public TerminalNode STRUCT_TYPE() { return getToken(TransactionManifestParser.STRUCT_TYPE, 0); }
		public TerminalNode ENUM_TYPE() { return getToken(TransactionManifestParser.ENUM_TYPE, 0); }
		public TerminalNode OPTION_TYPE() { return getToken(TransactionManifestParser.OPTION_TYPE, 0); }
		public TerminalNode RESULT_TYPE() { return getToken(TransactionManifestParser.RESULT_TYPE, 0); }
		public TerminalNode SOME_TYPE() { return getToken(TransactionManifestParser.SOME_TYPE, 0); }
		public TerminalNode NONE_TYPE() { return getToken(TransactionManifestParser.NONE_TYPE, 0); }
		public TerminalNode OK_TYPE() { return getToken(TransactionManifestParser.OK_TYPE, 0); }
		public TerminalNode ERR_TYPE() { return getToken(TransactionManifestParser.ERR_TYPE, 0); }
		public TerminalNode ARRAY_TYPE() { return getToken(TransactionManifestParser.ARRAY_TYPE, 0); }
		public TerminalNode TUPLE_TYPE() { return getToken(TransactionManifestParser.TUPLE_TYPE, 0); }
		public TerminalNode LIST_TYPE() { return getToken(TransactionManifestParser.LIST_TYPE, 0); }
		public TerminalNode SET_TYPE() { return getToken(TransactionManifestParser.SET_TYPE, 0); }
		public TerminalNode MAP_TYPE() { return getToken(TransactionManifestParser.MAP_TYPE, 0); }
		public TerminalNode DECIMAL_TYPE() { return getToken(TransactionManifestParser.DECIMAL_TYPE, 0); }
		public TerminalNode PRECISE_DECIMAL_TYPE() { return getToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0); }
		public TerminalNode PACKAGE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
		public TerminalNode COMPONENT_ADDRESS_TYPE() { return getToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
		public TerminalNode RESOURCE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
		public TerminalNode HASH_TYPE() { return getToken(TransactionManifestParser.HASH_TYPE, 0); }
		public TerminalNode BUCKET_TYPE() { return getToken(TransactionManifestParser.BUCKET_TYPE, 0); }
		public TerminalNode PROOF_TYPE() { return getToken(TransactionManifestParser.PROOF_TYPE, 0); }
		public TerminalNode NON_FUNGIBLE_ID_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
		public TerminalNode NON_FUNGIBLE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
		public TerminalNode BLOB_TYPE() { return getToken(TransactionManifestParser.BLOB_TYPE, 0); }
		public TerminalNode EXPRESSION_TYPE() { return getToken(TransactionManifestParser.EXPRESSION_TYPE, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(520);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << UNIT_TYPE) | (1L << BOOL_TYPE) | (1L << I8_TYPE) | (1L << I16_TYPE) | (1L << I32_TYPE) | (1L << I64_TYPE) | (1L << I128_TYPE) | (1L << U8_TYPE) | (1L << U16_TYPE) | (1L << U32_TYPE) | (1L << U64_TYPE) | (1L << U128_TYPE) | (1L << STRING_TYPE) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << OPTION_TYPE) | (1L << RESULT_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BLOB_TYPE) | (1L << EXPRESSION_TYPE))) != 0)) ) {
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
		public StructContext struct() {
			return getRuleContext(StructContext.class,0);
		}
		public Enum_Context enum_() {
			return getRuleContext(Enum_Context.class,0);
		}
		public OptionContext option() {
			return getRuleContext(OptionContext.class,0);
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
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public TupleContext tuple() {
			return getRuleContext(TupleContext.class,0);
		}
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
		}
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
		}
		public MapContext map() {
			return getRuleContext(MapContext.class,0);
		}
		public DecimalContext decimal() {
			return getRuleContext(DecimalContext.class,0);
		}
		public PreciseDecimalContext preciseDecimal() {
			return getRuleContext(PreciseDecimalContext.class,0);
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
		public HashContext hash() {
			return getRuleContext(HashContext.class,0);
		}
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public ProofContext proof() {
			return getRuleContext(ProofContext.class,0);
		}
		public NonFungibleIdContext nonFungibleId() {
			return getRuleContext(NonFungibleIdContext.class,0);
		}
		public NonFungibleAddressContext nonFungibleAddress() {
			return getRuleContext(NonFungibleAddressContext.class,0);
		}
		public BlobContext blob() {
			return getRuleContext(BlobContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_value);
		try {
			setState(559);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(522);
				unit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(523);
				bool();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(524);
				i8();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(525);
				i16();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(526);
				i32();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(527);
				i64();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(528);
				i128();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(529);
				u8();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(530);
				u16();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(531);
				u32();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(532);
				u64();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(533);
				u128();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(534);
				string();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(535);
				struct();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(536);
				enum_();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(537);
				option();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(538);
				some();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(539);
				none();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(540);
				ok();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(541);
				err();
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(542);
				array();
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(543);
				tuple();
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(544);
				list();
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(545);
				set();
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(546);
				map();
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(547);
				decimal();
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(548);
				preciseDecimal();
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(549);
				packageAddress();
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(550);
				componentAddress();
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(551);
				resourceAddress();
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(552);
				hash();
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(553);
				bucket();
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(554);
				proof();
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(555);
				nonFungibleId();
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(556);
				nonFungibleAddress();
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(557);
				blob();
				}
				break;
			case 37:
				enterOuterAlt(_localctx, 37);
				{
				setState(558);
				expression();
				}
				break;
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3Y\u0234\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\3\2\7\2\u0084\n\2\f\2\16\2\u0087\13\2\3\2\3\2"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\5\3\u00a2\n\3\3\4\3\4\3\4\3\4\3\4\7\4\u00a9\n\4"+
		"\f\4\16\4\u00ac\13\4\3\4\3\4\3\5\3\5\3\5\3\5\7\5\u00b4\n\5\f\5\16\5\u00b7"+
		"\13\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13"+
		"\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17"+
		"\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24"+
		"\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30"+
		"\3\30\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\5\32\u011e\n\32"+
		"\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!"+
		"\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3(\3(\3(\3(\7(\u0142"+
		"\n(\f(\16(\u0145\13(\5(\u0147\n(\3(\5(\u014a\n(\3)\3)\3)\3)\3)\3)\3)\7"+
		")\u0153\n)\f)\16)\u0156\13)\5)\u0158\n)\3)\3)\3*\3*\5*\u015e\n*\3+\3+"+
		"\3+\3+\3+\3,\3,\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3/\3/\3/\3/\3/\3/\3/\3/"+
		"\3/\7/\u017a\n/\f/\16/\u017d\13/\5/\u017f\n/\3/\5/\u0182\n/\3\60\3\60"+
		"\3\60\3\60\3\60\3\60\3\60\7\60\u018b\n\60\f\60\16\60\u018e\13\60\5\60"+
		"\u0190\n\60\3\60\5\60\u0193\n\60\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3"+
		"\61\3\61\7\61\u019e\n\61\f\61\16\61\u01a1\13\61\5\61\u01a3\n\61\3\61\5"+
		"\61\u01a6\n\61\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\7\62\u01b1"+
		"\n\62\f\62\16\62\u01b4\13\62\5\62\u01b6\n\62\3\62\5\62\u01b9\n\62\3\63"+
		"\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\7\63\u01c7\n\63"+
		"\f\63\16\63\u01ca\13\63\3\63\5\63\u01cd\n\63\3\64\3\64\3\64\3\64\3\64"+
		"\3\65\3\65\3\65\3\65\3\65\3\66\3\66\3\66\3\66\3\66\3\67\3\67\3\67\3\67"+
		"\3\67\38\38\38\38\38\39\39\39\39\39\3:\3:\3:\3:\3:\3;\3;\3;\3;\3;\3<\3"+
		"<\3<\3<\3<\3=\3=\3=\3=\3=\3>\3>\3>\3>\3>\3?\3?\3?\3?\3?\3@\3@\3A\3A\3"+
		"A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3"+
		"A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\5A\u0232\nA\3A\3\u01c8\2B\2\4\6\b\n"+
		"\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\"+
		"^`bdfhjlnprtvxz|~\u0080\2\4\4\2\13\13TT\3\2\20\65\2\u0245\2\u0085\3\2"+
		"\2\2\4\u00a1\3\2\2\2\6\u00a3\3\2\2\2\b\u00af\3\2\2\2\n\u00ba\3\2\2\2\f"+
		"\u00bf\3\2\2\2\16\u00c5\3\2\2\2\20\u00cb\3\2\2\2\22\u00cf\3\2\2\2\24\u00d3"+
		"\3\2\2\2\26\u00d8\3\2\2\2\30\u00dd\3\2\2\2\32\u00e1\3\2\2\2\34\u00e5\3"+
		"\2\2\2\36\u00ea\3\2\2\2 \u00f0\3\2\2\2\"\u00f6\3\2\2\2$\u00fb\3\2\2\2"+
		"&\u0100\3\2\2\2(\u0104\3\2\2\2*\u0107\3\2\2\2,\u010a\3\2\2\2.\u010f\3"+
		"\2\2\2\60\u0113\3\2\2\2\62\u0118\3\2\2\2\64\u0121\3\2\2\2\66\u0123\3\2"+
		"\2\28\u0125\3\2\2\2:\u0127\3\2\2\2<\u0129\3\2\2\2>\u012b\3\2\2\2@\u012d"+
		"\3\2\2\2B\u012f\3\2\2\2D\u0131\3\2\2\2F\u0133\3\2\2\2H\u0135\3\2\2\2J"+
		"\u0137\3\2\2\2L\u0139\3\2\2\2N\u013b\3\2\2\2P\u014b\3\2\2\2R\u015d\3\2"+
		"\2\2T\u015f\3\2\2\2V\u0164\3\2\2\2X\u0166\3\2\2\2Z\u016b\3\2\2\2\\\u0170"+
		"\3\2\2\2^\u0183\3\2\2\2`\u0194\3\2\2\2b\u01a7\3\2\2\2d\u01ba\3\2\2\2f"+
		"\u01ce\3\2\2\2h\u01d3\3\2\2\2j\u01d8\3\2\2\2l\u01dd\3\2\2\2n\u01e2\3\2"+
		"\2\2p\u01e7\3\2\2\2r\u01ec\3\2\2\2t\u01f1\3\2\2\2v\u01f6\3\2\2\2x\u01fb"+
		"\3\2\2\2z\u0200\3\2\2\2|\u0205\3\2\2\2~\u020a\3\2\2\2\u0080\u0231\3\2"+
		"\2\2\u0082\u0084\5\4\3\2\u0083\u0082\3\2\2\2\u0084\u0087\3\2\2\2\u0085"+
		"\u0083\3\2\2\2\u0085\u0086\3\2\2\2\u0086\u0088\3\2\2\2\u0087\u0085\3\2"+
		"\2\2\u0088\u0089\7\2\2\3\u0089\3\3\2\2\2\u008a\u00a2\5\6\4\2\u008b\u00a2"+
		"\5\b\5\2\u008c\u00a2\5\20\t\2\u008d\u00a2\5\n\6\2\u008e\u00a2\5\f\7\2"+
		"\u008f\u00a2\5\16\b\2\u0090\u00a2\5\22\n\2\u0091\u00a2\5\24\13\2\u0092"+
		"\u00a2\5\26\f\2\u0093\u00a2\5\30\r\2\u0094\u00a2\5\32\16\2\u0095\u00a2"+
		"\5\34\17\2\u0096\u00a2\5\36\20\2\u0097\u00a2\5 \21\2\u0098\u00a2\5\"\22"+
		"\2\u0099\u00a2\5$\23\2\u009a\u00a2\5&\24\2\u009b\u00a2\5(\25\2\u009c\u00a2"+
		"\5*\26\2\u009d\u00a2\5,\27\2\u009e\u00a2\5\62\32\2\u009f\u00a2\5.\30\2"+
		"\u00a0\u00a2\5\60\31\2\u00a1\u008a\3\2\2\2\u00a1\u008b\3\2\2\2\u00a1\u008c"+
		"\3\2\2\2\u00a1\u008d\3\2\2\2\u00a1\u008e\3\2\2\2\u00a1\u008f\3\2\2\2\u00a1"+
		"\u0090\3\2\2\2\u00a1\u0091\3\2\2\2\u00a1\u0092\3\2\2\2\u00a1\u0093\3\2"+
		"\2\2\u00a1\u0094\3\2\2\2\u00a1\u0095\3\2\2\2\u00a1\u0096\3\2\2\2\u00a1"+
		"\u0097\3\2\2\2\u00a1\u0098\3\2\2\2\u00a1\u0099\3\2\2\2\u00a1\u009a\3\2"+
		"\2\2\u00a1\u009b\3\2\2\2\u00a1\u009c\3\2\2\2\u00a1\u009d\3\2\2\2\u00a1"+
		"\u009e\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1\u00a0\3\2\2\2\u00a2\5\3\2\2\2"+
		"\u00a3\u00a4\7N\2\2\u00a4\u00a5\5j\66\2\u00a5\u00a6\5L\'\2\u00a6\u00aa"+
		"\5L\'\2\u00a7\u00a9\5\u0080A\2\u00a8\u00a7\3\2\2\2\u00a9\u00ac\3\2\2\2"+
		"\u00aa\u00a8\3\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\u00ad\3\2\2\2\u00ac\u00aa"+
		"\3\2\2\2\u00ad\u00ae\7<\2\2\u00ae\7\3\2\2\2\u00af\u00b0\7O\2\2\u00b0\u00b1"+
		"\5l\67\2\u00b1\u00b5\5L\'\2\u00b2\u00b4\5\u0080A\2\u00b3\u00b2\3\2\2\2"+
		"\u00b4\u00b7\3\2\2\2\u00b5\u00b3\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b8"+
		"\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b8\u00b9\7<\2\2\u00b9\t\3\2\2\2\u00ba"+
		"\u00bb\7=\2\2\u00bb\u00bc\5n8\2\u00bc\u00bd\5r:\2\u00bd\u00be\7<\2\2\u00be"+
		"\13\3\2\2\2\u00bf\u00c0\7>\2\2\u00c0\u00c1\5f\64\2\u00c1\u00c2\5n8\2\u00c2"+
		"\u00c3\5r:\2\u00c3\u00c4\7<\2\2\u00c4\r\3\2\2\2\u00c5\u00c6\7?\2\2\u00c6"+
		"\u00c7\5b\62\2\u00c7\u00c8\5n8\2\u00c8\u00c9\5r:\2\u00c9\u00ca\7<\2\2"+
		"\u00ca\17\3\2\2\2\u00cb\u00cc\7C\2\2\u00cc\u00cd\5r:\2\u00cd\u00ce\7<"+
		"\2\2\u00ce\21\3\2\2\2\u00cf\u00d0\7@\2\2\u00d0\u00d1\5n8\2\u00d1\u00d2"+
		"\7<\2\2\u00d2\23\3\2\2\2\u00d3\u00d4\7A\2\2\u00d4\u00d5\5f\64\2\u00d5"+
		"\u00d6\5n8\2\u00d6\u00d7\7<\2\2\u00d7\25\3\2\2\2\u00d8\u00d9\7B\2\2\u00d9"+
		"\u00da\5b\62\2\u00da\u00db\5n8\2\u00db\u00dc\7<\2\2\u00dc\27\3\2\2\2\u00dd"+
		"\u00de\7D\2\2\u00de\u00df\5t;\2\u00df\u00e0\7<\2\2\u00e0\31\3\2\2\2\u00e1"+
		"\u00e2\7E\2\2\u00e2\u00e3\5t;\2\u00e3\u00e4\7<\2\2\u00e4\33\3\2\2\2\u00e5"+
		"\u00e6\7G\2\2\u00e6\u00e7\5n8\2\u00e7\u00e8\5t;\2\u00e8\u00e9\7<\2\2\u00e9"+
		"\35\3\2\2\2\u00ea\u00eb\7H\2\2\u00eb\u00ec\5f\64\2\u00ec\u00ed\5n8\2\u00ed"+
		"\u00ee\5t;\2\u00ee\u00ef\7<\2\2\u00ef\37\3\2\2\2\u00f0\u00f1\7I\2\2\u00f1"+
		"\u00f2\5b\62\2\u00f2\u00f3\5n8\2\u00f3\u00f4\5t;\2\u00f4\u00f5\7<\2\2"+
		"\u00f5!\3\2\2\2\u00f6\u00f7\7J\2\2\u00f7\u00f8\5r:\2\u00f8\u00f9\5t;\2"+
		"\u00f9\u00fa\7<\2\2\u00fa#\3\2\2\2\u00fb\u00fc\7K\2\2\u00fc\u00fd\5t;"+
		"\2\u00fd\u00fe\5t;\2\u00fe\u00ff\7<\2\2\u00ff%\3\2\2\2\u0100\u0101\7L"+
		"\2\2\u0101\u0102\5t;\2\u0102\u0103\7<\2\2\u0103\'\3\2\2\2\u0104\u0105"+
		"\7M\2\2\u0105\u0106\7<\2\2\u0106)\3\2\2\2\u0107\u0108\7F\2\2\u0108\u0109"+
		"\7<\2\2\u0109+\3\2\2\2\u010a\u010b\7P\2\2\u010b\u010c\5z>\2\u010c\u010d"+
		"\5z>\2\u010d\u010e\7<\2\2\u010e-\3\2\2\2\u010f\u0110\7Q\2\2\u0110\u0111"+
		"\5r:\2\u0111\u0112\7<\2\2\u0112/\3\2\2\2\u0113\u0114\7R\2\2\u0114\u0115"+
		"\5n8\2\u0115\u0116\5f\64\2\u0116\u0117\7<\2\2\u0117\61\3\2\2\2\u0118\u0119"+
		"\7S\2\2\u0119\u011a\5P)\2\u011a\u011b\5d\63\2\u011b\u011d\5d\63\2\u011c"+
		"\u011e\5R*\2\u011d\u011c\3\2\2\2\u011d\u011e\3\2\2\2\u011e\u011f\3\2\2"+
		"\2\u011f\u0120\7<\2\2\u0120\63\3\2\2\2\u0121\u0122\78\2\2\u0122\65\3\2"+
		"\2\2\u0123\u0124\7\3\2\2\u0124\67\3\2\2\2\u0125\u0126\7\4\2\2\u01269\3"+
		"\2\2\2\u0127\u0128\7\5\2\2\u0128;\3\2\2\2\u0129\u012a\7\6\2\2\u012a=\3"+
		"\2\2\2\u012b\u012c\7\7\2\2\u012c?\3\2\2\2\u012d\u012e\7\b\2\2\u012eA\3"+
		"\2\2\2\u012f\u0130\7\t\2\2\u0130C\3\2\2\2\u0131\u0132\7\n\2\2\u0132E\3"+
		"\2\2\2\u0133\u0134\7\13\2\2\u0134G\3\2\2\2\u0135\u0136\7\f\2\2\u0136I"+
		"\3\2\2\2\u0137\u0138\7\r\2\2\u0138K\3\2\2\2\u0139\u013a\7T\2\2\u013aM"+
		"\3\2\2\2\u013b\u0149\7\35\2\2\u013c\u014a\78\2\2\u013d\u0146\7\66\2\2"+
		"\u013e\u0143\5\u0080A\2\u013f\u0140\7;\2\2\u0140\u0142\5\u0080A\2\u0141"+
		"\u013f\3\2\2\2\u0142\u0145\3\2\2\2\u0143\u0141\3\2\2\2\u0143\u0144\3\2"+
		"\2\2\u0144\u0147\3\2\2\2\u0145\u0143\3\2\2\2\u0146\u013e\3\2\2\2\u0146"+
		"\u0147\3\2\2\2\u0147\u0148\3\2\2\2\u0148\u014a\7\67\2\2\u0149\u013c\3"+
		"\2\2\2\u0149\u013d\3\2\2\2\u014aO\3\2\2\2\u014b\u014c\7\36\2\2\u014c\u014d"+
		"\7\66\2\2\u014d\u014e\5L\'\2\u014e\u0157\7;\2\2\u014f\u0154\5\u0080A\2"+
		"\u0150\u0151\7;\2\2\u0151\u0153\5\u0080A\2\u0152\u0150\3\2\2\2\u0153\u0156"+
		"\3\2\2\2\u0154\u0152\3\2\2\2\u0154\u0155\3\2\2\2\u0155\u0158\3\2\2\2\u0156"+
		"\u0154\3\2\2\2\u0157\u014f\3\2\2\2\u0157\u0158\3\2\2\2\u0158\u0159\3\2"+
		"\2\2\u0159\u015a\7\67\2\2\u015aQ\3\2\2\2\u015b\u015e\5T+\2\u015c\u015e"+
		"\5V,\2\u015d\u015b\3\2\2\2\u015d\u015c\3\2\2\2\u015eS\3\2\2\2\u015f\u0160"+
		"\7!\2\2\u0160\u0161\7\66\2\2\u0161\u0162\5\u0080A\2\u0162\u0163\7\67\2"+
		"\2\u0163U\3\2\2\2\u0164\u0165\7\"\2\2\u0165W\3\2\2\2\u0166\u0167\7#\2"+
		"\2\u0167\u0168\7\66\2\2\u0168\u0169\5\u0080A\2\u0169\u016a\7\67\2\2\u016a"+
		"Y\3\2\2\2\u016b\u016c\7$\2\2\u016c\u016d\7\66\2\2\u016d\u016e\5\u0080"+
		"A\2\u016e\u016f\7\67\2\2\u016f[\3\2\2\2\u0170\u0171\7%\2\2\u0171\u0172"+
		"\79\2\2\u0172\u0173\5~@\2\u0173\u0181\7:\2\2\u0174\u0182\78\2\2\u0175"+
		"\u017e\7\66\2\2\u0176\u017b\5\u0080A\2\u0177\u0178\7;\2\2\u0178\u017a"+
		"\5\u0080A\2\u0179\u0177\3\2\2\2\u017a\u017d\3\2\2\2\u017b\u0179\3\2\2"+
		"\2\u017b\u017c\3\2\2\2\u017c\u017f\3\2\2\2\u017d\u017b\3\2\2\2\u017e\u0176"+
		"\3\2\2\2\u017e\u017f\3\2\2\2\u017f\u0180\3\2\2\2\u0180\u0182\7\67\2\2"+
		"\u0181\u0174\3\2\2\2\u0181\u0175\3\2\2\2\u0182]\3\2\2\2\u0183\u0184\7"+
		"&\2\2\u0184\u0192\79\2\2\u0185\u0193\78\2\2\u0186\u018f\7\66\2\2\u0187"+
		"\u018c\5\u0080A\2\u0188\u0189\7;\2\2\u0189\u018b\5\u0080A\2\u018a\u0188"+
		"\3\2\2\2\u018b\u018e\3\2\2\2\u018c\u018a\3\2\2\2\u018c\u018d\3\2\2\2\u018d"+
		"\u0190\3\2\2\2\u018e\u018c\3\2\2\2\u018f\u0187\3\2\2\2\u018f\u0190\3\2"+
		"\2\2\u0190\u0191\3\2\2\2\u0191\u0193\7\67\2\2\u0192\u0185\3\2\2\2\u0192"+
		"\u0186\3\2\2\2\u0193_\3\2\2\2\u0194\u0195\7\'\2\2\u0195\u0196\79\2\2\u0196"+
		"\u0197\5~@\2\u0197\u01a5\7:\2\2\u0198\u01a6\78\2\2\u0199\u01a2\7\66\2"+
		"\2\u019a\u019f\5\u0080A\2\u019b\u019c\7;\2\2\u019c\u019e\5\u0080A\2\u019d"+
		"\u019b\3\2\2\2\u019e\u01a1\3\2\2\2\u019f\u019d\3\2\2\2\u019f\u01a0\3\2"+
		"\2\2\u01a0\u01a3\3\2\2\2\u01a1\u019f\3\2\2\2\u01a2\u019a\3\2\2\2\u01a2"+
		"\u01a3\3\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a6\7\67\2\2\u01a5\u0198\3"+
		"\2\2\2\u01a5\u0199\3\2\2\2\u01a6a\3\2\2\2\u01a7\u01a8\7(\2\2\u01a8\u01a9"+
		"\79\2\2\u01a9\u01aa\5~@\2\u01aa\u01b8\7:\2\2\u01ab\u01b9\78\2\2\u01ac"+
		"\u01b5\7\66\2\2\u01ad\u01b2\5\u0080A\2\u01ae\u01af\7;\2\2\u01af\u01b1"+
		"\5\u0080A\2\u01b0\u01ae\3\2\2\2\u01b1\u01b4\3\2\2\2\u01b2\u01b0\3\2\2"+
		"\2\u01b2\u01b3\3\2\2\2\u01b3\u01b6\3\2\2\2\u01b4\u01b2\3\2\2\2\u01b5\u01ad"+
		"\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6\u01b7\3\2\2\2\u01b7\u01b9\7\67\2\2"+
		"\u01b8\u01ab\3\2\2\2\u01b8\u01ac\3\2\2\2\u01b9c\3\2\2\2\u01ba\u01bb\7"+
		")\2\2\u01bb\u01bc\79\2\2\u01bc\u01bd\5~@\2\u01bd\u01be\7;\2\2\u01be\u01bf"+
		"\5~@\2\u01bf\u01cc\7:\2\2\u01c0\u01cd\78\2\2\u01c1\u01c8\7\66\2\2\u01c2"+
		"\u01c3\5\u0080A\2\u01c3\u01c4\7;\2\2\u01c4\u01c5\5\u0080A\2\u01c5\u01c7"+
		"\3\2\2\2\u01c6\u01c2\3\2\2\2\u01c7\u01ca\3\2\2\2\u01c8\u01c9\3\2\2\2\u01c8"+
		"\u01c6\3\2\2\2\u01c9\u01cb\3\2\2\2\u01ca\u01c8\3\2\2\2\u01cb\u01cd\7\67"+
		"\2\2\u01cc\u01c0\3\2\2\2\u01cc\u01c1\3\2\2\2\u01cde\3\2\2\2\u01ce\u01cf"+
		"\7*\2\2\u01cf\u01d0\7\66\2\2\u01d0\u01d1\7T\2\2\u01d1\u01d2\7\67\2\2\u01d2"+
		"g\3\2\2\2\u01d3\u01d4\7+\2\2\u01d4\u01d5\7\66\2\2\u01d5\u01d6\7T\2\2\u01d6"+
		"\u01d7\7\67\2\2\u01d7i\3\2\2\2\u01d8\u01d9\7,\2\2\u01d9\u01da\7\66\2\2"+
		"\u01da\u01db\7T\2\2\u01db\u01dc\7\67\2\2\u01dck\3\2\2\2\u01dd\u01de\7"+
		"-\2\2\u01de\u01df\7\66\2\2\u01df\u01e0\7T\2\2\u01e0\u01e1\7\67\2\2\u01e1"+
		"m\3\2\2\2\u01e2\u01e3\7.\2\2\u01e3\u01e4\7\66\2\2\u01e4\u01e5\7T\2\2\u01e5"+
		"\u01e6\7\67\2\2\u01e6o\3\2\2\2\u01e7\u01e8\7/\2\2\u01e8\u01e9\7\66\2\2"+
		"\u01e9\u01ea\7T\2\2\u01ea\u01eb\7\67\2\2\u01ebq\3\2\2\2\u01ec\u01ed\7"+
		"\60\2\2\u01ed\u01ee\7\66\2\2\u01ee\u01ef\t\2\2\2\u01ef\u01f0\7\67\2\2"+
		"\u01f0s\3\2\2\2\u01f1\u01f2\7\61\2\2\u01f2\u01f3\7\66\2\2\u01f3\u01f4"+
		"\t\2\2\2\u01f4\u01f5\7\67\2\2\u01f5u\3\2\2\2\u01f6\u01f7\7\62\2\2\u01f7"+
		"\u01f8\7\66\2\2\u01f8\u01f9\7T\2\2\u01f9\u01fa\7\67\2\2\u01faw\3\2\2\2"+
		"\u01fb\u01fc\7\63\2\2\u01fc\u01fd\7\66\2\2\u01fd\u01fe\7T\2\2\u01fe\u01ff"+
		"\7\67\2\2\u01ffy\3\2\2\2\u0200\u0201\7\64\2\2\u0201\u0202\7\66\2\2\u0202"+
		"\u0203\7T\2\2\u0203\u0204\7\67\2\2\u0204{\3\2\2\2\u0205\u0206\7\65\2\2"+
		"\u0206\u0207\7\66\2\2\u0207\u0208\7T\2\2\u0208\u0209\7\67\2\2\u0209}\3"+
		"\2\2\2\u020a\u020b\t\3\2\2\u020b\177\3\2\2\2\u020c\u0232\5\64\33\2\u020d"+
		"\u0232\5\66\34\2\u020e\u0232\58\35\2\u020f\u0232\5:\36\2\u0210\u0232\5"+
		"<\37\2\u0211\u0232\5> \2\u0212\u0232\5@!\2\u0213\u0232\5B\"\2\u0214\u0232"+
		"\5D#\2\u0215\u0232\5F$\2\u0216\u0232\5H%\2\u0217\u0232\5J&\2\u0218\u0232"+
		"\5L\'\2\u0219\u0232\5N(\2\u021a\u0232\5P)\2\u021b\u0232\5R*\2\u021c\u0232"+
		"\5T+\2\u021d\u0232\5V,\2\u021e\u0232\5X-\2\u021f\u0232\5Z.\2\u0220\u0232"+
		"\5\\/\2\u0221\u0232\5^\60\2\u0222\u0232\5`\61\2\u0223\u0232\5b\62\2\u0224"+
		"\u0232\5d\63\2\u0225\u0232\5f\64\2\u0226\u0232\5h\65\2\u0227\u0232\5j"+
		"\66\2\u0228\u0232\5l\67\2\u0229\u0232\5n8\2\u022a\u0232\5p9\2\u022b\u0232"+
		"\5r:\2\u022c\u0232\5t;\2\u022d\u0232\5v<\2\u022e\u0232\5x=\2\u022f\u0232"+
		"\5z>\2\u0230\u0232\5|?\2\u0231\u020c\3\2\2\2\u0231\u020d\3\2\2\2\u0231"+
		"\u020e\3\2\2\2\u0231\u020f\3\2\2\2\u0231\u0210\3\2\2\2\u0231\u0211\3\2"+
		"\2\2\u0231\u0212\3\2\2\2\u0231\u0213\3\2\2\2\u0231\u0214\3\2\2\2\u0231"+
		"\u0215\3\2\2\2\u0231\u0216\3\2\2\2\u0231\u0217\3\2\2\2\u0231\u0218\3\2"+
		"\2\2\u0231\u0219\3\2\2\2\u0231\u021a\3\2\2\2\u0231\u021b\3\2\2\2\u0231"+
		"\u021c\3\2\2\2\u0231\u021d\3\2\2\2\u0231\u021e\3\2\2\2\u0231\u021f\3\2"+
		"\2\2\u0231\u0220\3\2\2\2\u0231\u0221\3\2\2\2\u0231\u0222\3\2\2\2\u0231"+
		"\u0223\3\2\2\2\u0231\u0224\3\2\2\2\u0231\u0225\3\2\2\2\u0231\u0226\3\2"+
		"\2\2\u0231\u0227\3\2\2\2\u0231\u0228\3\2\2\2\u0231\u0229\3\2\2\2\u0231"+
		"\u022a\3\2\2\2\u0231\u022b\3\2\2\2\u0231\u022c\3\2\2\2\u0231\u022d\3\2"+
		"\2\2\u0231\u022e\3\2\2\2\u0231\u022f\3\2\2\2\u0231\u0230\3\2\2\2\u0232"+
		"\u0081\3\2\2\2\34\u0085\u00a1\u00aa\u00b5\u011d\u0143\u0146\u0149\u0154"+
		"\u0157\u015d\u017b\u017e\u0181\u018c\u018f\u0192\u019f\u01a2\u01a5\u01b2"+
		"\u01b5\u01b8\u01c8\u01cc\u0231";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}