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
		T__0=1, BOOL_LITERAL=2, I8_LITERAL=3, I16_LITERAL=4, I32_LITERAL=5, I64_LITERAL=6, 
		I128_LITERAL=7, U8_LITERAL=8, U16_LITERAL=9, U32_LITERAL=10, U64_LITERAL=11, 
		U128_LITERAL=12, TRUE=13, FALSE=14, UNIT_TYPE=15, BOOL_TYPE=16, I8_TYPE=17, 
		I16_TYPE=18, I32_TYPE=19, I64_TYPE=20, I128_TYPE=21, U8_TYPE=22, U16_TYPE=23, 
		U32_TYPE=24, U64_TYPE=25, U128_TYPE=26, STRING_TYPE=27, STRUCT_TYPE=28, 
		ENUM_TYPE=29, OPTION_TYPE=30, RESULT_TYPE=31, SOME_TYPE=32, NONE_TYPE=33, 
		OK_TYPE=34, ERR_TYPE=35, ARRAY_TYPE=36, TUPLE_TYPE=37, LIST_TYPE=38, SET_TYPE=39, 
		MAP_TYPE=40, DECIMAL_TYPE=41, PRECISE_DECIMAL_TYPE=42, PACKAGE_ADDRESS_TYPE=43, 
		COMPONENT_ADDRESS_TYPE=44, RESOURCE_ADDRESS_TYPE=45, HASH_TYPE=46, BUCKET_TYPE=47, 
		PROOF_TYPE=48, NON_FUNGIBLE_ID_TYPE=49, NON_FUNGIBLE_ADDRESS_TYPE=50, 
		BYTES_TYPE=51, OPEN_PARENTHESIS=52, CLOED_PARENTHESIS=53, LESS_THAN=54, 
		GREATER_THAN=55, COMMA=56, SEMICOLON=57, TAKE_FROM_WORKTOP=58, TAKE_FROM_WORKTOP_BY_AMOUNT=59, 
		TAKE_FROM_WORKTOP_BY_IDS=60, ASSERT_WORKTOP_CONTAINS=61, ASSERT_WORKTOP_CONTAINS_BY_AMOUNT=62, 
		ASSERT_WORKTOP_CONTAINS_BY_IDS=63, RETURN_TO_WORKTOP=64, POP_FROM_AUTH_ZONE=65, 
		PUSH_TO_AUTH_ZONE=66, CLEAR_AUTHZONE=67, CREATE_PROOF_FROM_AUTH_ZONE=68, 
		CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT=69, CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS=70, 
		CREATE_PROOF_FROM_BUCKET=71, CLONE_PROOF=72, DROP_PROOF=73, DROP_ALL_PROOFS=74, 
		CALL_FUNCTION=75, CALL_METHOD=76, CALL_METHOD_WITH_ALL_RESOURCES=77, PUBLISH_PACKAGE=78, 
		STRING_LITERAL=79, DIGIT=80, LETTER=81, NUMBER=82, WS=83, COMMENT=84;
	public static final int
		RULE_manifest = 0, RULE_manifestInstruction = 1, RULE_callFunction = 2, 
		RULE_callMethod = 3, RULE_callMethodWithAllResources = 4, RULE_takeFromWorktop = 5, 
		RULE_takeFromWorktopByAmount = 6, RULE_takeFromWorktopByIds = 7, RULE_returnToWorktop = 8, 
		RULE_assertWorktopContains = 9, RULE_assertWorktopContainsByAmount = 10, 
		RULE_assertWorktopContainsByIds = 11, RULE_popFromAuthZone = 12, RULE_pushToAuthZone = 13, 
		RULE_createProofFromAuthZone = 14, RULE_createProofFromAuthZoneByAmount = 15, 
		RULE_createProofFromAuthZoneByIds = 16, RULE_createProofFromBucket = 17, 
		RULE_cloneProof = 18, RULE_dropProof = 19, RULE_dropAllProofs = 20, RULE_clearAuthZone = 21, 
		RULE_publishPackage = 22, RULE_unit = 23, RULE_bool = 24, RULE_i8 = 25, 
		RULE_i16 = 26, RULE_i32 = 27, RULE_i64 = 28, RULE_i128 = 29, RULE_u8 = 30, 
		RULE_u16 = 31, RULE_u32 = 32, RULE_u64 = 33, RULE_u128 = 34, RULE_string = 35, 
		RULE_struct = 36, RULE_enum_ = 37, RULE_option = 38, RULE_some = 39, RULE_none = 40, 
		RULE_ok = 41, RULE_err = 42, RULE_array = 43, RULE_tuple = 44, RULE_list = 45, 
		RULE_set = 46, RULE_map = 47, RULE_decimal = 48, RULE_preciseDecimal = 49, 
		RULE_packageAddress = 50, RULE_componentAddress = 51, RULE_resourceAddress = 52, 
		RULE_hash = 53, RULE_bucket = 54, RULE_proof = 55, RULE_nonFungibleId = 56, 
		RULE_nonFungibleAddress = 57, RULE_bytes = 58, RULE_type = 59, RULE_value = 60;
	private static String[] makeRuleNames() {
		return new String[] {
			"manifest", "manifestInstruction", "callFunction", "callMethod", "callMethodWithAllResources", 
			"takeFromWorktop", "takeFromWorktopByAmount", "takeFromWorktopByIds", 
			"returnToWorktop", "assertWorktopContains", "assertWorktopContainsByAmount", 
			"assertWorktopContainsByIds", "popFromAuthZone", "pushToAuthZone", "createProofFromAuthZone", 
			"createProofFromAuthZoneByAmount", "createProofFromAuthZoneByIds", "createProofFromBucket", 
			"cloneProof", "dropProof", "dropAllProofs", "clearAuthZone", "publishPackage", 
			"unit", "bool", "i8", "i16", "i32", "i64", "i128", "u8", "u16", "u32", 
			"u64", "u128", "string", "struct", "enum_", "option", "some", "none", 
			"ok", "err", "array", "tuple", "list", "set", "map", "decimal", "preciseDecimal", 
			"packageAddress", "componentAddress", "resourceAddress", "hash", "bucket", 
			"proof", "nonFungibleId", "nonFungibleAddress", "bytes", "type", "value"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'()'", null, null, null, null, null, null, null, null, null, null, 
			null, "'true'", "'false'", "'Unit'", "'Bool'", "'I8'", "'I16'", "'I32'", 
			"'I64'", "'I128'", "'U8'", "'U16'", "'U32'", "'U64'", "'U128'", "'String'", 
			"'Struct'", "'Enum'", "'Option'", "'Result'", "'Some'", "'None'", "'Ok'", 
			"'Err'", "'Array'", "'Tuple'", "'List'", "'Set'", "'Map'", "'Decimal'", 
			"'PreciseDecimal'", "'PackageAddress'", "'ComponentAddress'", "'ResourceAddress'", 
			"'Hash'", "'Bucket'", "'Proof'", "'NonFungibleId'", "'NonFungibleAddress'", 
			"'Bytes'", "'('", "')'", "'<'", "'>'", "','", "';'", "'TAKE_FROM_WORKTOP'", 
			"'TAKE_FROM_WORKTOP_BY_AMOUNT'", "'TAKE_FROM_WORKTOP_BY_IDS'", "'ASSERT_WORKTOP_CONTAINS'", 
			"'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT'", "'ASSERT_WORKTOP_CONTAINS_BY_IDS'", 
			"'RETURN_TO_WORKTOP'", "'POP_FROM_AUTH_ZONE'", "'PUSH_TO_AUTH_ZONE'", 
			"'CLEAR_AUTHZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT'", 
			"'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS'", "'CREATE_PROOF_FROM_BUCKET'", 
			"'CLONE_PROOF'", "'DROP_PROOF'", "'DROP_ALL_PROOFS'", "'CALL_FUNCTION'", 
			"'CALL_METHOD'", "'CALL_METHOD_WITH_ALL_RESOURCES'", "'PUBLISH_PACKAGE'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "BOOL_LITERAL", "I8_LITERAL", "I16_LITERAL", "I32_LITERAL", 
			"I64_LITERAL", "I128_LITERAL", "U8_LITERAL", "U16_LITERAL", "U32_LITERAL", 
			"U64_LITERAL", "U128_LITERAL", "TRUE", "FALSE", "UNIT_TYPE", "BOOL_TYPE", 
			"I8_TYPE", "I16_TYPE", "I32_TYPE", "I64_TYPE", "I128_TYPE", "U8_TYPE", 
			"U16_TYPE", "U32_TYPE", "U64_TYPE", "U128_TYPE", "STRING_TYPE", "STRUCT_TYPE", 
			"ENUM_TYPE", "OPTION_TYPE", "RESULT_TYPE", "SOME_TYPE", "NONE_TYPE", 
			"OK_TYPE", "ERR_TYPE", "ARRAY_TYPE", "TUPLE_TYPE", "LIST_TYPE", "SET_TYPE", 
			"MAP_TYPE", "DECIMAL_TYPE", "PRECISE_DECIMAL_TYPE", "PACKAGE_ADDRESS_TYPE", 
			"COMPONENT_ADDRESS_TYPE", "RESOURCE_ADDRESS_TYPE", "HASH_TYPE", "BUCKET_TYPE", 
			"PROOF_TYPE", "NON_FUNGIBLE_ID_TYPE", "NON_FUNGIBLE_ADDRESS_TYPE", "BYTES_TYPE", 
			"OPEN_PARENTHESIS", "CLOED_PARENTHESIS", "LESS_THAN", "GREATER_THAN", 
			"COMMA", "SEMICOLON", "TAKE_FROM_WORKTOP", "TAKE_FROM_WORKTOP_BY_AMOUNT", 
			"TAKE_FROM_WORKTOP_BY_IDS", "ASSERT_WORKTOP_CONTAINS", "ASSERT_WORKTOP_CONTAINS_BY_AMOUNT", 
			"ASSERT_WORKTOP_CONTAINS_BY_IDS", "RETURN_TO_WORKTOP", "POP_FROM_AUTH_ZONE", 
			"PUSH_TO_AUTH_ZONE", "CLEAR_AUTHZONE", "CREATE_PROOF_FROM_AUTH_ZONE", 
			"CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT", "CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS", 
			"CREATE_PROOF_FROM_BUCKET", "CLONE_PROOF", "DROP_PROOF", "DROP_ALL_PROOFS", 
			"CALL_FUNCTION", "CALL_METHOD", "CALL_METHOD_WITH_ALL_RESOURCES", "PUBLISH_PACKAGE", 
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
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 58)) & ~0x3f) == 0 && ((1L << (_la - 58)) & ((1L << (TAKE_FROM_WORKTOP - 58)) | (1L << (TAKE_FROM_WORKTOP_BY_AMOUNT - 58)) | (1L << (TAKE_FROM_WORKTOP_BY_IDS - 58)) | (1L << (ASSERT_WORKTOP_CONTAINS - 58)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 58)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_IDS - 58)) | (1L << (RETURN_TO_WORKTOP - 58)) | (1L << (POP_FROM_AUTH_ZONE - 58)) | (1L << (PUSH_TO_AUTH_ZONE - 58)) | (1L << (CLEAR_AUTHZONE - 58)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE - 58)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 58)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 58)) | (1L << (CREATE_PROOF_FROM_BUCKET - 58)) | (1L << (CLONE_PROOF - 58)) | (1L << (DROP_PROOF - 58)) | (1L << (DROP_ALL_PROOFS - 58)) | (1L << (CALL_FUNCTION - 58)) | (1L << (CALL_METHOD - 58)) | (1L << (CALL_METHOD_WITH_ALL_RESOURCES - 58)) | (1L << (PUBLISH_PACKAGE - 58)))) != 0)) {
				{
				{
				setState(122);
				manifestInstruction();
				}
				}
				setState(127);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(128);
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
		public CallMethodWithAllResourcesContext callMethodWithAllResources() {
			return getRuleContext(CallMethodWithAllResourcesContext.class,0);
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
		public ManifestInstructionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_manifestInstruction; }
	}

	public final ManifestInstructionContext manifestInstruction() throws RecognitionException {
		ManifestInstructionContext _localctx = new ManifestInstructionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_manifestInstruction);
		try {
			setState(151);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CALL_FUNCTION:
				enterOuterAlt(_localctx, 1);
				{
				setState(130);
				callFunction();
				}
				break;
			case CALL_METHOD:
				enterOuterAlt(_localctx, 2);
				{
				setState(131);
				callMethod();
				}
				break;
			case CALL_METHOD_WITH_ALL_RESOURCES:
				enterOuterAlt(_localctx, 3);
				{
				setState(132);
				callMethodWithAllResources();
				}
				break;
			case RETURN_TO_WORKTOP:
				enterOuterAlt(_localctx, 4);
				{
				setState(133);
				returnToWorktop();
				}
				break;
			case TAKE_FROM_WORKTOP:
				enterOuterAlt(_localctx, 5);
				{
				setState(134);
				takeFromWorktop();
				}
				break;
			case TAKE_FROM_WORKTOP_BY_AMOUNT:
				enterOuterAlt(_localctx, 6);
				{
				setState(135);
				takeFromWorktopByAmount();
				}
				break;
			case TAKE_FROM_WORKTOP_BY_IDS:
				enterOuterAlt(_localctx, 7);
				{
				setState(136);
				takeFromWorktopByIds();
				}
				break;
			case ASSERT_WORKTOP_CONTAINS:
				enterOuterAlt(_localctx, 8);
				{
				setState(137);
				assertWorktopContains();
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
				enterOuterAlt(_localctx, 9);
				{
				setState(138);
				assertWorktopContainsByAmount();
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_IDS:
				enterOuterAlt(_localctx, 10);
				{
				setState(139);
				assertWorktopContainsByIds();
				}
				break;
			case POP_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 11);
				{
				setState(140);
				popFromAuthZone();
				}
				break;
			case PUSH_TO_AUTH_ZONE:
				enterOuterAlt(_localctx, 12);
				{
				setState(141);
				pushToAuthZone();
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 13);
				{
				setState(142);
				createProofFromAuthZone();
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
				enterOuterAlt(_localctx, 14);
				{
				setState(143);
				createProofFromAuthZoneByAmount();
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
				enterOuterAlt(_localctx, 15);
				{
				setState(144);
				createProofFromAuthZoneByIds();
				}
				break;
			case CREATE_PROOF_FROM_BUCKET:
				enterOuterAlt(_localctx, 16);
				{
				setState(145);
				createProofFromBucket();
				}
				break;
			case CLONE_PROOF:
				enterOuterAlt(_localctx, 17);
				{
				setState(146);
				cloneProof();
				}
				break;
			case DROP_PROOF:
				enterOuterAlt(_localctx, 18);
				{
				setState(147);
				dropProof();
				}
				break;
			case DROP_ALL_PROOFS:
				enterOuterAlt(_localctx, 19);
				{
				setState(148);
				dropAllProofs();
				}
				break;
			case CLEAR_AUTHZONE:
				enterOuterAlt(_localctx, 20);
				{
				setState(149);
				clearAuthZone();
				}
				break;
			case PUBLISH_PACKAGE:
				enterOuterAlt(_localctx, 21);
				{
				setState(150);
				publishPackage();
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
			setState(153);
			match(CALL_FUNCTION);
			setState(154);
			packageAddress();
			setState(155);
			string();
			setState(156);
			string();
			setState(160);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				{
				setState(157);
				value();
				}
				}
				setState(162);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(163);
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
			setState(165);
			match(CALL_METHOD);
			setState(166);
			componentAddress();
			setState(167);
			string();
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				{
				setState(168);
				value();
				}
				}
				setState(173);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(174);
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

	public static class CallMethodWithAllResourcesContext extends ParserRuleContext {
		public TerminalNode CALL_METHOD_WITH_ALL_RESOURCES() { return getToken(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES, 0); }
		public ComponentAddressContext componentAddress() {
			return getRuleContext(ComponentAddressContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public CallMethodWithAllResourcesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callMethodWithAllResources; }
	}

	public final CallMethodWithAllResourcesContext callMethodWithAllResources() throws RecognitionException {
		CallMethodWithAllResourcesContext _localctx = new CallMethodWithAllResourcesContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_callMethodWithAllResources);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(CALL_METHOD_WITH_ALL_RESOURCES);
			setState(177);
			componentAddress();
			setState(178);
			string();
			setState(179);
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
		enterRule(_localctx, 10, RULE_takeFromWorktop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			match(TAKE_FROM_WORKTOP);
			setState(182);
			resourceAddress();
			setState(183);
			bucket();
			setState(184);
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
		enterRule(_localctx, 12, RULE_takeFromWorktopByAmount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(TAKE_FROM_WORKTOP_BY_AMOUNT);
			setState(187);
			decimal();
			setState(188);
			resourceAddress();
			setState(189);
			bucket();
			setState(190);
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
		enterRule(_localctx, 14, RULE_takeFromWorktopByIds);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(TAKE_FROM_WORKTOP_BY_IDS);
			setState(193);
			set();
			setState(194);
			resourceAddress();
			setState(195);
			bucket();
			setState(196);
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
		enterRule(_localctx, 16, RULE_returnToWorktop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			match(RETURN_TO_WORKTOP);
			setState(199);
			bucket();
			setState(200);
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
		enterRule(_localctx, 18, RULE_assertWorktopContains);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
			match(ASSERT_WORKTOP_CONTAINS);
			setState(203);
			resourceAddress();
			setState(204);
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
		enterRule(_localctx, 20, RULE_assertWorktopContainsByAmount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
			setState(207);
			decimal();
			setState(208);
			resourceAddress();
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
		enterRule(_localctx, 22, RULE_assertWorktopContainsByIds);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(ASSERT_WORKTOP_CONTAINS_BY_IDS);
			setState(212);
			set();
			setState(213);
			resourceAddress();
			setState(214);
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
		enterRule(_localctx, 24, RULE_popFromAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(POP_FROM_AUTH_ZONE);
			setState(217);
			proof();
			setState(218);
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
		enterRule(_localctx, 26, RULE_pushToAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			match(PUSH_TO_AUTH_ZONE);
			setState(221);
			proof();
			setState(222);
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
		enterRule(_localctx, 28, RULE_createProofFromAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			match(CREATE_PROOF_FROM_AUTH_ZONE);
			setState(225);
			resourceAddress();
			setState(226);
			proof();
			setState(227);
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
		enterRule(_localctx, 30, RULE_createProofFromAuthZoneByAmount);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
			setState(230);
			decimal();
			setState(231);
			resourceAddress();
			setState(232);
			proof();
			setState(233);
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
		enterRule(_localctx, 32, RULE_createProofFromAuthZoneByIds);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			match(CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
			setState(236);
			set();
			setState(237);
			resourceAddress();
			setState(238);
			proof();
			setState(239);
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
		enterRule(_localctx, 34, RULE_createProofFromBucket);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			match(CREATE_PROOF_FROM_BUCKET);
			setState(242);
			bucket();
			setState(243);
			proof();
			setState(244);
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
		enterRule(_localctx, 36, RULE_cloneProof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			match(CLONE_PROOF);
			setState(247);
			proof();
			setState(248);
			proof();
			setState(249);
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
		enterRule(_localctx, 38, RULE_dropProof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			match(DROP_PROOF);
			setState(252);
			proof();
			setState(253);
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
		enterRule(_localctx, 40, RULE_dropAllProofs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			match(DROP_ALL_PROOFS);
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
		enterRule(_localctx, 42, RULE_clearAuthZone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(CLEAR_AUTHZONE);
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

	public static class PublishPackageContext extends ParserRuleContext {
		public TerminalNode PUBLISH_PACKAGE() { return getToken(TransactionManifestParser.PUBLISH_PACKAGE, 0); }
		public BytesContext bytes() {
			return getRuleContext(BytesContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(TransactionManifestParser.SEMICOLON, 0); }
		public PublishPackageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_publishPackage; }
	}

	public final PublishPackageContext publishPackage() throws RecognitionException {
		PublishPackageContext _localctx = new PublishPackageContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_publishPackage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			match(PUBLISH_PACKAGE);
			setState(262);
			bytes();
			setState(263);
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
		public UnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unit; }
	}

	public final UnitContext unit() throws RecognitionException {
		UnitContext _localctx = new UnitContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_unit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			match(T__0);
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
		enterRule(_localctx, 48, RULE_bool);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
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
		enterRule(_localctx, 50, RULE_i8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
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
		enterRule(_localctx, 52, RULE_i16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
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
		enterRule(_localctx, 54, RULE_i32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
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
		enterRule(_localctx, 56, RULE_i64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
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
		enterRule(_localctx, 58, RULE_i128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(277);
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
		enterRule(_localctx, 60, RULE_u8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
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
		enterRule(_localctx, 62, RULE_u16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(281);
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
		enterRule(_localctx, 64, RULE_u32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
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
		enterRule(_localctx, 66, RULE_u64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(285);
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
		enterRule(_localctx, 68, RULE_u128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
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
		enterRule(_localctx, 70, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
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
		enterRule(_localctx, 72, RULE_struct);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
			match(STRUCT_TYPE);
			setState(292);
			match(OPEN_PARENTHESIS);
			setState(301);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(298);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
					{
					{
					setState(293);
					value();
					setState(294);
					match(COMMA);
					}
					}
					setState(300);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
			setState(303);
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
		enterRule(_localctx, 74, RULE_enum_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			match(ENUM_TYPE);
			setState(306);
			match(OPEN_PARENTHESIS);
			{
			setState(307);
			string();
			setState(308);
			match(COMMA);
			setState(317);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(309);
				value();
				setState(314);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(310);
					match(COMMA);
					setState(311);
					value();
					}
					}
					setState(316);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
			setState(319);
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
		enterRule(_localctx, 76, RULE_option);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SOME_TYPE:
				{
				setState(321);
				some();
				}
				break;
			case NONE_TYPE:
				{
				setState(322);
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
		public SomeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_some; }
	}

	public final SomeContext some() throws RecognitionException {
		SomeContext _localctx = new SomeContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_some);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(325);
			match(SOME_TYPE);
			setState(326);
			match(OPEN_PARENTHESIS);
			{
			setState(327);
			value();
			setState(332);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(328);
				match(COMMA);
				setState(329);
				value();
				}
				}
				setState(334);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(335);
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
		enterRule(_localctx, 80, RULE_none);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
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
		public OkContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ok; }
	}

	public final OkContext ok() throws RecognitionException {
		OkContext _localctx = new OkContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_ok);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339);
			match(OK_TYPE);
			setState(340);
			match(OPEN_PARENTHESIS);
			{
			setState(341);
			value();
			setState(346);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(342);
				match(COMMA);
				setState(343);
				value();
				}
				}
				setState(348);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(349);
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
		public ErrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_err; }
	}

	public final ErrContext err() throws RecognitionException {
		ErrContext _localctx = new ErrContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_err);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			match(ERR_TYPE);
			setState(352);
			match(OPEN_PARENTHESIS);
			{
			setState(353);
			value();
			setState(358);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(354);
				match(COMMA);
				setState(355);
				value();
				}
				}
				setState(360);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(361);
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
		enterRule(_localctx, 86, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			match(ARRAY_TYPE);
			setState(364);
			match(LESS_THAN);
			setState(365);
			type();
			setState(366);
			match(GREATER_THAN);
			setState(367);
			match(OPEN_PARENTHESIS);
			setState(376);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(368);
				value();
				setState(373);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(369);
					match(COMMA);
					setState(370);
					value();
					}
					}
					setState(375);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(378);
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

	public static class TupleContext extends ParserRuleContext {
		public TerminalNode TUPLE_TYPE() { return getToken(TransactionManifestParser.TUPLE_TYPE, 0); }
		public TerminalNode LESS_THAN() { return getToken(TransactionManifestParser.LESS_THAN, 0); }
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
		enterRule(_localctx, 88, RULE_tuple);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(380);
			match(TUPLE_TYPE);
			setState(381);
			match(LESS_THAN);
			setState(382);
			match(OPEN_PARENTHESIS);
			setState(391);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(383);
				value();
				setState(388);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(384);
					match(COMMA);
					setState(385);
					value();
					}
					}
					setState(390);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(393);
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

	public static class ListContext extends ParserRuleContext {
		public TerminalNode LIST_TYPE() { return getToken(TransactionManifestParser.LIST_TYPE, 0); }
		public TerminalNode LESS_THAN() { return getToken(TransactionManifestParser.LESS_THAN, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode GREATER_THAN() { return getToken(TransactionManifestParser.GREATER_THAN, 0); }
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
		enterRule(_localctx, 90, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			match(LIST_TYPE);
			setState(396);
			match(LESS_THAN);
			setState(397);
			type();
			setState(398);
			match(GREATER_THAN);
			setState(399);
			match(OPEN_PARENTHESIS);
			setState(408);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(400);
				value();
				setState(405);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(401);
					match(COMMA);
					setState(402);
					value();
					}
					}
					setState(407);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(410);
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

	public static class SetContext extends ParserRuleContext {
		public TerminalNode SET_TYPE() { return getToken(TransactionManifestParser.SET_TYPE, 0); }
		public TerminalNode LESS_THAN() { return getToken(TransactionManifestParser.LESS_THAN, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode GREATER_THAN() { return getToken(TransactionManifestParser.GREATER_THAN, 0); }
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
		enterRule(_localctx, 92, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			match(SET_TYPE);
			setState(413);
			match(LESS_THAN);
			setState(414);
			type();
			setState(415);
			match(GREATER_THAN);
			setState(416);
			match(OPEN_PARENTHESIS);
			setState(425);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(417);
				value();
				setState(422);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(418);
					match(COMMA);
					setState(419);
					value();
					}
					}
					setState(424);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(427);
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
		enterRule(_localctx, 94, RULE_map);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(429);
			match(MAP_TYPE);
			setState(430);
			match(LESS_THAN);
			setState(431);
			type();
			setState(432);
			match(COMMA);
			setState(433);
			type();
			setState(434);
			match(GREATER_THAN);
			setState(435);
			match(OPEN_PARENTHESIS);
			setState(442);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				{
				setState(436);
				value();
				setState(437);
				match(COMMA);
				setState(438);
				value();
				}
				}
				setState(444);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(445);
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
			setState(447);
			match(DECIMAL_TYPE);
			setState(448);
			match(OPEN_PARENTHESIS);
			setState(449);
			match(STRING_LITERAL);
			setState(450);
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
			setState(452);
			match(PRECISE_DECIMAL_TYPE);
			setState(453);
			match(OPEN_PARENTHESIS);
			setState(454);
			match(STRING_LITERAL);
			setState(455);
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
			setState(457);
			match(PACKAGE_ADDRESS_TYPE);
			setState(458);
			match(OPEN_PARENTHESIS);
			setState(459);
			match(STRING_LITERAL);
			setState(460);
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
			setState(462);
			match(COMPONENT_ADDRESS_TYPE);
			setState(463);
			match(OPEN_PARENTHESIS);
			setState(464);
			match(STRING_LITERAL);
			setState(465);
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
			setState(467);
			match(RESOURCE_ADDRESS_TYPE);
			setState(468);
			match(OPEN_PARENTHESIS);
			setState(469);
			match(STRING_LITERAL);
			setState(470);
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
		enterRule(_localctx, 106, RULE_hash);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(472);
			match(HASH_TYPE);
			setState(473);
			match(OPEN_PARENTHESIS);
			setState(474);
			match(STRING_LITERAL);
			setState(475);
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
		enterRule(_localctx, 108, RULE_bucket);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(477);
			match(BUCKET_TYPE);
			setState(478);
			match(OPEN_PARENTHESIS);
			setState(479);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(480);
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
		enterRule(_localctx, 110, RULE_proof);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(482);
			match(PROOF_TYPE);
			setState(483);
			match(OPEN_PARENTHESIS);
			setState(484);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(485);
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
		enterRule(_localctx, 112, RULE_nonFungibleId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(487);
			match(NON_FUNGIBLE_ID_TYPE);
			setState(488);
			match(OPEN_PARENTHESIS);
			setState(489);
			match(STRING_LITERAL);
			setState(490);
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
		enterRule(_localctx, 114, RULE_nonFungibleAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(492);
			match(NON_FUNGIBLE_ADDRESS_TYPE);
			setState(493);
			match(OPEN_PARENTHESIS);
			setState(494);
			match(STRING_LITERAL);
			setState(495);
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
		enterRule(_localctx, 116, RULE_bytes);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(497);
			match(BYTES_TYPE);
			setState(498);
			match(OPEN_PARENTHESIS);
			setState(499);
			match(STRING_LITERAL);
			setState(500);
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
		public TerminalNode BYTES_TYPE() { return getToken(TransactionManifestParser.BYTES_TYPE, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(502);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << UNIT_TYPE) | (1L << BOOL_TYPE) | (1L << I8_TYPE) | (1L << I16_TYPE) | (1L << I32_TYPE) | (1L << I64_TYPE) | (1L << I128_TYPE) | (1L << U8_TYPE) | (1L << U16_TYPE) | (1L << U32_TYPE) | (1L << U64_TYPE) | (1L << U128_TYPE) | (1L << STRING_TYPE) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << OPTION_TYPE) | (1L << RESULT_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0)) ) {
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
		public BytesContext bytes() {
			return getRuleContext(BytesContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_value);
		try {
			setState(540);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(504);
				unit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(505);
				bool();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(506);
				i8();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(507);
				i16();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(508);
				i32();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(509);
				i64();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(510);
				i128();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(511);
				u8();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(512);
				u16();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(513);
				u32();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(514);
				u64();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(515);
				u128();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(516);
				string();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(517);
				struct();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(518);
				enum_();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(519);
				option();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(520);
				some();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(521);
				none();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(522);
				ok();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(523);
				err();
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(524);
				array();
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(525);
				tuple();
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(526);
				list();
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(527);
				set();
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(528);
				map();
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(529);
				decimal();
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(530);
				preciseDecimal();
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(531);
				packageAddress();
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(532);
				componentAddress();
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(533);
				resourceAddress();
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(534);
				hash();
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(535);
				bucket();
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(536);
				proof();
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(537);
				nonFungibleId();
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(538);
				nonFungibleAddress();
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(539);
				bytes();
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3V\u0221\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\3\2\7\2~\n\2\f\2\16\2\u0081\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u009a"+
		"\n\3\3\4\3\4\3\4\3\4\3\4\7\4\u00a1\n\4\f\4\16\4\u00a4\13\4\3\4\3\4\3\5"+
		"\3\5\3\5\3\5\7\5\u00ac\n\5\f\5\16\5\u00af\13\5\3\5\3\5\3\6\3\6\3\6\3\6"+
		"\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r"+
		"\3\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3"+
		"\20\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3"+
		"\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3"+
		"\26\3\26\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3"+
		"\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#"+
		"\3$\3$\3%\3%\3&\3&\3&\3&\3&\7&\u012b\n&\f&\16&\u012e\13&\5&\u0130\n&\3"+
		"&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3\'\7\'\u013b\n\'\f\'\16\'\u013e\13\'\5\'"+
		"\u0140\n\'\3\'\3\'\3(\3(\5(\u0146\n(\3)\3)\3)\3)\3)\7)\u014d\n)\f)\16"+
		")\u0150\13)\3)\3)\3*\3*\3+\3+\3+\3+\3+\7+\u015b\n+\f+\16+\u015e\13+\3"+
		"+\3+\3,\3,\3,\3,\3,\7,\u0167\n,\f,\16,\u016a\13,\3,\3,\3-\3-\3-\3-\3-"+
		"\3-\3-\3-\7-\u0176\n-\f-\16-\u0179\13-\5-\u017b\n-\3-\3-\3.\3.\3.\3.\3"+
		".\3.\7.\u0185\n.\f.\16.\u0188\13.\5.\u018a\n.\3.\3.\3/\3/\3/\3/\3/\3/"+
		"\3/\3/\7/\u0196\n/\f/\16/\u0199\13/\5/\u019b\n/\3/\3/\3\60\3\60\3\60\3"+
		"\60\3\60\3\60\3\60\3\60\7\60\u01a7\n\60\f\60\16\60\u01aa\13\60\5\60\u01ac"+
		"\n\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61"+
		"\7\61\u01bb\n\61\f\61\16\61\u01be\13\61\3\61\3\61\3\62\3\62\3\62\3\62"+
		"\3\62\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\65"+
		"\3\65\3\65\3\66\3\66\3\66\3\66\3\66\3\67\3\67\3\67\3\67\3\67\38\38\38"+
		"\38\38\39\39\39\39\39\3:\3:\3:\3:\3:\3;\3;\3;\3;\3;\3<\3<\3<\3<\3<\3="+
		"\3=\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>"+
		"\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\5>\u021f\n>\3>\2\2?\2\4\6\b"+
		"\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVX"+
		"Z\\^`bdfhjlnprtvxz\2\4\4\2\f\fQQ\3\2\21\65\2\u022e\2\177\3\2\2\2\4\u0099"+
		"\3\2\2\2\6\u009b\3\2\2\2\b\u00a7\3\2\2\2\n\u00b2\3\2\2\2\f\u00b7\3\2\2"+
		"\2\16\u00bc\3\2\2\2\20\u00c2\3\2\2\2\22\u00c8\3\2\2\2\24\u00cc\3\2\2\2"+
		"\26\u00d0\3\2\2\2\30\u00d5\3\2\2\2\32\u00da\3\2\2\2\34\u00de\3\2\2\2\36"+
		"\u00e2\3\2\2\2 \u00e7\3\2\2\2\"\u00ed\3\2\2\2$\u00f3\3\2\2\2&\u00f8\3"+
		"\2\2\2(\u00fd\3\2\2\2*\u0101\3\2\2\2,\u0104\3\2\2\2.\u0107\3\2\2\2\60"+
		"\u010b\3\2\2\2\62\u010d\3\2\2\2\64\u010f\3\2\2\2\66\u0111\3\2\2\28\u0113"+
		"\3\2\2\2:\u0115\3\2\2\2<\u0117\3\2\2\2>\u0119\3\2\2\2@\u011b\3\2\2\2B"+
		"\u011d\3\2\2\2D\u011f\3\2\2\2F\u0121\3\2\2\2H\u0123\3\2\2\2J\u0125\3\2"+
		"\2\2L\u0133\3\2\2\2N\u0145\3\2\2\2P\u0147\3\2\2\2R\u0153\3\2\2\2T\u0155"+
		"\3\2\2\2V\u0161\3\2\2\2X\u016d\3\2\2\2Z\u017e\3\2\2\2\\\u018d\3\2\2\2"+
		"^\u019e\3\2\2\2`\u01af\3\2\2\2b\u01c1\3\2\2\2d\u01c6\3\2\2\2f\u01cb\3"+
		"\2\2\2h\u01d0\3\2\2\2j\u01d5\3\2\2\2l\u01da\3\2\2\2n\u01df\3\2\2\2p\u01e4"+
		"\3\2\2\2r\u01e9\3\2\2\2t\u01ee\3\2\2\2v\u01f3\3\2\2\2x\u01f8\3\2\2\2z"+
		"\u021e\3\2\2\2|~\5\4\3\2}|\3\2\2\2~\u0081\3\2\2\2\177}\3\2\2\2\177\u0080"+
		"\3\2\2\2\u0080\u0082\3\2\2\2\u0081\177\3\2\2\2\u0082\u0083\7\2\2\3\u0083"+
		"\3\3\2\2\2\u0084\u009a\5\6\4\2\u0085\u009a\5\b\5\2\u0086\u009a\5\n\6\2"+
		"\u0087\u009a\5\22\n\2\u0088\u009a\5\f\7\2\u0089\u009a\5\16\b\2\u008a\u009a"+
		"\5\20\t\2\u008b\u009a\5\24\13\2\u008c\u009a\5\26\f\2\u008d\u009a\5\30"+
		"\r\2\u008e\u009a\5\32\16\2\u008f\u009a\5\34\17\2\u0090\u009a\5\36\20\2"+
		"\u0091\u009a\5 \21\2\u0092\u009a\5\"\22\2\u0093\u009a\5$\23\2\u0094\u009a"+
		"\5&\24\2\u0095\u009a\5(\25\2\u0096\u009a\5*\26\2\u0097\u009a\5,\27\2\u0098"+
		"\u009a\5.\30\2\u0099\u0084\3\2\2\2\u0099\u0085\3\2\2\2\u0099\u0086\3\2"+
		"\2\2\u0099\u0087\3\2\2\2\u0099\u0088\3\2\2\2\u0099\u0089\3\2\2\2\u0099"+
		"\u008a\3\2\2\2\u0099\u008b\3\2\2\2\u0099\u008c\3\2\2\2\u0099\u008d\3\2"+
		"\2\2\u0099\u008e\3\2\2\2\u0099\u008f\3\2\2\2\u0099\u0090\3\2\2\2\u0099"+
		"\u0091\3\2\2\2\u0099\u0092\3\2\2\2\u0099\u0093\3\2\2\2\u0099\u0094\3\2"+
		"\2\2\u0099\u0095\3\2\2\2\u0099\u0096\3\2\2\2\u0099\u0097\3\2\2\2\u0099"+
		"\u0098\3\2\2\2\u009a\5\3\2\2\2\u009b\u009c\7M\2\2\u009c\u009d\5f\64\2"+
		"\u009d\u009e\5H%\2\u009e\u00a2\5H%\2\u009f\u00a1\5z>\2\u00a0\u009f\3\2"+
		"\2\2\u00a1\u00a4\3\2\2\2\u00a2\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3"+
		"\u00a5\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a5\u00a6\7;\2\2\u00a6\7\3\2\2\2"+
		"\u00a7\u00a8\7N\2\2\u00a8\u00a9\5h\65\2\u00a9\u00ad\5H%\2\u00aa\u00ac"+
		"\5z>\2\u00ab\u00aa\3\2\2\2\u00ac\u00af\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ad"+
		"\u00ae\3\2\2\2\u00ae\u00b0\3\2\2\2\u00af\u00ad\3\2\2\2\u00b0\u00b1\7;"+
		"\2\2\u00b1\t\3\2\2\2\u00b2\u00b3\7O\2\2\u00b3\u00b4\5h\65\2\u00b4\u00b5"+
		"\5H%\2\u00b5\u00b6\7;\2\2\u00b6\13\3\2\2\2\u00b7\u00b8\7<\2\2\u00b8\u00b9"+
		"\5j\66\2\u00b9\u00ba\5n8\2\u00ba\u00bb\7;\2\2\u00bb\r\3\2\2\2\u00bc\u00bd"+
		"\7=\2\2\u00bd\u00be\5b\62\2\u00be\u00bf\5j\66\2\u00bf\u00c0\5n8\2\u00c0"+
		"\u00c1\7;\2\2\u00c1\17\3\2\2\2\u00c2\u00c3\7>\2\2\u00c3\u00c4\5^\60\2"+
		"\u00c4\u00c5\5j\66\2\u00c5\u00c6\5n8\2\u00c6\u00c7\7;\2\2\u00c7\21\3\2"+
		"\2\2\u00c8\u00c9\7B\2\2\u00c9\u00ca\5n8\2\u00ca\u00cb\7;\2\2\u00cb\23"+
		"\3\2\2\2\u00cc\u00cd\7?\2\2\u00cd\u00ce\5j\66\2\u00ce\u00cf\7;\2\2\u00cf"+
		"\25\3\2\2\2\u00d0\u00d1\7@\2\2\u00d1\u00d2\5b\62\2\u00d2\u00d3\5j\66\2"+
		"\u00d3\u00d4\7;\2\2\u00d4\27\3\2\2\2\u00d5\u00d6\7A\2\2\u00d6\u00d7\5"+
		"^\60\2\u00d7\u00d8\5j\66\2\u00d8\u00d9\7;\2\2\u00d9\31\3\2\2\2\u00da\u00db"+
		"\7C\2\2\u00db\u00dc\5p9\2\u00dc\u00dd\7;\2\2\u00dd\33\3\2\2\2\u00de\u00df"+
		"\7D\2\2\u00df\u00e0\5p9\2\u00e0\u00e1\7;\2\2\u00e1\35\3\2\2\2\u00e2\u00e3"+
		"\7F\2\2\u00e3\u00e4\5j\66\2\u00e4\u00e5\5p9\2\u00e5\u00e6\7;\2\2\u00e6"+
		"\37\3\2\2\2\u00e7\u00e8\7G\2\2\u00e8\u00e9\5b\62\2\u00e9\u00ea\5j\66\2"+
		"\u00ea\u00eb\5p9\2\u00eb\u00ec\7;\2\2\u00ec!\3\2\2\2\u00ed\u00ee\7H\2"+
		"\2\u00ee\u00ef\5^\60\2\u00ef\u00f0\5j\66\2\u00f0\u00f1\5p9\2\u00f1\u00f2"+
		"\7;\2\2\u00f2#\3\2\2\2\u00f3\u00f4\7I\2\2\u00f4\u00f5\5n8\2\u00f5\u00f6"+
		"\5p9\2\u00f6\u00f7\7;\2\2\u00f7%\3\2\2\2\u00f8\u00f9\7J\2\2\u00f9\u00fa"+
		"\5p9\2\u00fa\u00fb\5p9\2\u00fb\u00fc\7;\2\2\u00fc\'\3\2\2\2\u00fd\u00fe"+
		"\7K\2\2\u00fe\u00ff\5p9\2\u00ff\u0100\7;\2\2\u0100)\3\2\2\2\u0101\u0102"+
		"\7L\2\2\u0102\u0103\7;\2\2\u0103+\3\2\2\2\u0104\u0105\7E\2\2\u0105\u0106"+
		"\7;\2\2\u0106-\3\2\2\2\u0107\u0108\7P\2\2\u0108\u0109\5v<\2\u0109\u010a"+
		"\7;\2\2\u010a/\3\2\2\2\u010b\u010c\7\3\2\2\u010c\61\3\2\2\2\u010d\u010e"+
		"\7\4\2\2\u010e\63\3\2\2\2\u010f\u0110\7\5\2\2\u0110\65\3\2\2\2\u0111\u0112"+
		"\7\6\2\2\u0112\67\3\2\2\2\u0113\u0114\7\7\2\2\u01149\3\2\2\2\u0115\u0116"+
		"\7\b\2\2\u0116;\3\2\2\2\u0117\u0118\7\t\2\2\u0118=\3\2\2\2\u0119\u011a"+
		"\7\n\2\2\u011a?\3\2\2\2\u011b\u011c\7\13\2\2\u011cA\3\2\2\2\u011d\u011e"+
		"\7\f\2\2\u011eC\3\2\2\2\u011f\u0120\7\r\2\2\u0120E\3\2\2\2\u0121\u0122"+
		"\7\16\2\2\u0122G\3\2\2\2\u0123\u0124\7Q\2\2\u0124I\3\2\2\2\u0125\u0126"+
		"\7\36\2\2\u0126\u012f\7\66\2\2\u0127\u0128\5z>\2\u0128\u0129\7:\2\2\u0129"+
		"\u012b\3\2\2\2\u012a\u0127\3\2\2\2\u012b\u012e\3\2\2\2\u012c\u012a\3\2"+
		"\2\2\u012c\u012d\3\2\2\2\u012d\u0130\3\2\2\2\u012e\u012c\3\2\2\2\u012f"+
		"\u012c\3\2\2\2\u012f\u0130\3\2\2\2\u0130\u0131\3\2\2\2\u0131\u0132\7\67"+
		"\2\2\u0132K\3\2\2\2\u0133\u0134\7\37\2\2\u0134\u0135\7\66\2\2\u0135\u0136"+
		"\5H%\2\u0136\u013f\7:\2\2\u0137\u013c\5z>\2\u0138\u0139\7:\2\2\u0139\u013b"+
		"\5z>\2\u013a\u0138\3\2\2\2\u013b\u013e\3\2\2\2\u013c\u013a\3\2\2\2\u013c"+
		"\u013d\3\2\2\2\u013d\u0140\3\2\2\2\u013e\u013c\3\2\2\2\u013f\u0137\3\2"+
		"\2\2\u013f\u0140\3\2\2\2\u0140\u0141\3\2\2\2\u0141\u0142\7\67\2\2\u0142"+
		"M\3\2\2\2\u0143\u0146\5P)\2\u0144\u0146\5R*\2\u0145\u0143\3\2\2\2\u0145"+
		"\u0144\3\2\2\2\u0146O\3\2\2\2\u0147\u0148\7\"\2\2\u0148\u0149\7\66\2\2"+
		"\u0149\u014e\5z>\2\u014a\u014b\7:\2\2\u014b\u014d\5z>\2\u014c\u014a\3"+
		"\2\2\2\u014d\u0150\3\2\2\2\u014e\u014c\3\2\2\2\u014e\u014f\3\2\2\2\u014f"+
		"\u0151\3\2\2\2\u0150\u014e\3\2\2\2\u0151\u0152\7\67\2\2\u0152Q\3\2\2\2"+
		"\u0153\u0154\7#\2\2\u0154S\3\2\2\2\u0155\u0156\7$\2\2\u0156\u0157\7\66"+
		"\2\2\u0157\u015c\5z>\2\u0158\u0159\7:\2\2\u0159\u015b\5z>\2\u015a\u0158"+
		"\3\2\2\2\u015b\u015e\3\2\2\2\u015c\u015a\3\2\2\2\u015c\u015d\3\2\2\2\u015d"+
		"\u015f\3\2\2\2\u015e\u015c\3\2\2\2\u015f\u0160\7\67\2\2\u0160U\3\2\2\2"+
		"\u0161\u0162\7%\2\2\u0162\u0163\7\66\2\2\u0163\u0168\5z>\2\u0164\u0165"+
		"\7:\2\2\u0165\u0167\5z>\2\u0166\u0164\3\2\2\2\u0167\u016a\3\2\2\2\u0168"+
		"\u0166\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016b\3\2\2\2\u016a\u0168\3\2"+
		"\2\2\u016b\u016c\7\67\2\2\u016cW\3\2\2\2\u016d\u016e\7&\2\2\u016e\u016f"+
		"\78\2\2\u016f\u0170\5x=\2\u0170\u0171\79\2\2\u0171\u017a\7\66\2\2\u0172"+
		"\u0177\5z>\2\u0173\u0174\7:\2\2\u0174\u0176\5z>\2\u0175\u0173\3\2\2\2"+
		"\u0176\u0179\3\2\2\2\u0177\u0175\3\2\2\2\u0177\u0178\3\2\2\2\u0178\u017b"+
		"\3\2\2\2\u0179\u0177\3\2\2\2\u017a\u0172\3\2\2\2\u017a\u017b\3\2\2\2\u017b"+
		"\u017c\3\2\2\2\u017c\u017d\7\67\2\2\u017dY\3\2\2\2\u017e\u017f\7\'\2\2"+
		"\u017f\u0180\78\2\2\u0180\u0189\7\66\2\2\u0181\u0186\5z>\2\u0182\u0183"+
		"\7:\2\2\u0183\u0185\5z>\2\u0184\u0182\3\2\2\2\u0185\u0188\3\2\2\2\u0186"+
		"\u0184\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u018a\3\2\2\2\u0188\u0186\3\2"+
		"\2\2\u0189\u0181\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018b\3\2\2\2\u018b"+
		"\u018c\7\67\2\2\u018c[\3\2\2\2\u018d\u018e\7(\2\2\u018e\u018f\78\2\2\u018f"+
		"\u0190\5x=\2\u0190\u0191\79\2\2\u0191\u019a\7\66\2\2\u0192\u0197\5z>\2"+
		"\u0193\u0194\7:\2\2\u0194\u0196\5z>\2\u0195\u0193\3\2\2\2\u0196\u0199"+
		"\3\2\2\2\u0197\u0195\3\2\2\2\u0197\u0198\3\2\2\2\u0198\u019b\3\2\2\2\u0199"+
		"\u0197\3\2\2\2\u019a\u0192\3\2\2\2\u019a\u019b\3\2\2\2\u019b\u019c\3\2"+
		"\2\2\u019c\u019d\7\67\2\2\u019d]\3\2\2\2\u019e\u019f\7)\2\2\u019f\u01a0"+
		"\78\2\2\u01a0\u01a1\5x=\2\u01a1\u01a2\79\2\2\u01a2\u01ab\7\66\2\2\u01a3"+
		"\u01a8\5z>\2\u01a4\u01a5\7:\2\2\u01a5\u01a7\5z>\2\u01a6\u01a4\3\2\2\2"+
		"\u01a7\u01aa\3\2\2\2\u01a8\u01a6\3\2\2\2\u01a8\u01a9\3\2\2\2\u01a9\u01ac"+
		"\3\2\2\2\u01aa\u01a8\3\2\2\2\u01ab\u01a3\3\2\2\2\u01ab\u01ac\3\2\2\2\u01ac"+
		"\u01ad\3\2\2\2\u01ad\u01ae\7\67\2\2\u01ae_\3\2\2\2\u01af\u01b0\7*\2\2"+
		"\u01b0\u01b1\78\2\2\u01b1\u01b2\5x=\2\u01b2\u01b3\7:\2\2\u01b3\u01b4\5"+
		"x=\2\u01b4\u01b5\79\2\2\u01b5\u01bc\7\66\2\2\u01b6\u01b7\5z>\2\u01b7\u01b8"+
		"\7:\2\2\u01b8\u01b9\5z>\2\u01b9\u01bb\3\2\2\2\u01ba\u01b6\3\2\2\2\u01bb"+
		"\u01be\3\2\2\2\u01bc\u01ba\3\2\2\2\u01bc\u01bd\3\2\2\2\u01bd\u01bf\3\2"+
		"\2\2\u01be\u01bc\3\2\2\2\u01bf\u01c0\7\67\2\2\u01c0a\3\2\2\2\u01c1\u01c2"+
		"\7+\2\2\u01c2\u01c3\7\66\2\2\u01c3\u01c4\7Q\2\2\u01c4\u01c5\7\67\2\2\u01c5"+
		"c\3\2\2\2\u01c6\u01c7\7,\2\2\u01c7\u01c8\7\66\2\2\u01c8\u01c9\7Q\2\2\u01c9"+
		"\u01ca\7\67\2\2\u01cae\3\2\2\2\u01cb\u01cc\7-\2\2\u01cc\u01cd\7\66\2\2"+
		"\u01cd\u01ce\7Q\2\2\u01ce\u01cf\7\67\2\2\u01cfg\3\2\2\2\u01d0\u01d1\7"+
		".\2\2\u01d1\u01d2\7\66\2\2\u01d2\u01d3\7Q\2\2\u01d3\u01d4\7\67\2\2\u01d4"+
		"i\3\2\2\2\u01d5\u01d6\7/\2\2\u01d6\u01d7\7\66\2\2\u01d7\u01d8\7Q\2\2\u01d8"+
		"\u01d9\7\67\2\2\u01d9k\3\2\2\2\u01da\u01db\7\60\2\2\u01db\u01dc\7\66\2"+
		"\2\u01dc\u01dd\7Q\2\2\u01dd\u01de\7\67\2\2\u01dem\3\2\2\2\u01df\u01e0"+
		"\7\61\2\2\u01e0\u01e1\7\66\2\2\u01e1\u01e2\t\2\2\2\u01e2\u01e3\7\67\2"+
		"\2\u01e3o\3\2\2\2\u01e4\u01e5\7\62\2\2\u01e5\u01e6\7\66\2\2\u01e6\u01e7"+
		"\t\2\2\2\u01e7\u01e8\7\67\2\2\u01e8q\3\2\2\2\u01e9\u01ea\7\63\2\2\u01ea"+
		"\u01eb\7\66\2\2\u01eb\u01ec\7Q\2\2\u01ec\u01ed\7\67\2\2\u01eds\3\2\2\2"+
		"\u01ee\u01ef\7\64\2\2\u01ef\u01f0\7\66\2\2\u01f0\u01f1\7Q\2\2\u01f1\u01f2"+
		"\7\67\2\2\u01f2u\3\2\2\2\u01f3\u01f4\7\65\2\2\u01f4\u01f5\7\66\2\2\u01f5"+
		"\u01f6\7Q\2\2\u01f6\u01f7\7\67\2\2\u01f7w\3\2\2\2\u01f8\u01f9\t\3\2\2"+
		"\u01f9y\3\2\2\2\u01fa\u021f\5\60\31\2\u01fb\u021f\5\62\32\2\u01fc\u021f"+
		"\5\64\33\2\u01fd\u021f\5\66\34\2\u01fe\u021f\58\35\2\u01ff\u021f\5:\36"+
		"\2\u0200\u021f\5<\37\2\u0201\u021f\5> \2\u0202\u021f\5@!\2\u0203\u021f"+
		"\5B\"\2\u0204\u021f\5D#\2\u0205\u021f\5F$\2\u0206\u021f\5H%\2\u0207\u021f"+
		"\5J&\2\u0208\u021f\5L\'\2\u0209\u021f\5N(\2\u020a\u021f\5P)\2\u020b\u021f"+
		"\5R*\2\u020c\u021f\5T+\2\u020d\u021f\5V,\2\u020e\u021f\5X-\2\u020f\u021f"+
		"\5Z.\2\u0210\u021f\5\\/\2\u0211\u021f\5^\60\2\u0212\u021f\5`\61\2\u0213"+
		"\u021f\5b\62\2\u0214\u021f\5d\63\2\u0215\u021f\5f\64\2\u0216\u021f\5h"+
		"\65\2\u0217\u021f\5j\66\2\u0218\u021f\5l\67\2\u0219\u021f\5n8\2\u021a"+
		"\u021f\5p9\2\u021b\u021f\5r:\2\u021c\u021f\5t;\2\u021d\u021f\5v<\2\u021e"+
		"\u01fa\3\2\2\2\u021e\u01fb\3\2\2\2\u021e\u01fc\3\2\2\2\u021e\u01fd\3\2"+
		"\2\2\u021e\u01fe\3\2\2\2\u021e\u01ff\3\2\2\2\u021e\u0200\3\2\2\2\u021e"+
		"\u0201\3\2\2\2\u021e\u0202\3\2\2\2\u021e\u0203\3\2\2\2\u021e\u0204\3\2"+
		"\2\2\u021e\u0205\3\2\2\2\u021e\u0206\3\2\2\2\u021e\u0207\3\2\2\2\u021e"+
		"\u0208\3\2\2\2\u021e\u0209\3\2\2\2\u021e\u020a\3\2\2\2\u021e\u020b\3\2"+
		"\2\2\u021e\u020c\3\2\2\2\u021e\u020d\3\2\2\2\u021e\u020e\3\2\2\2\u021e"+
		"\u020f\3\2\2\2\u021e\u0210\3\2\2\2\u021e\u0211\3\2\2\2\u021e\u0212\3\2"+
		"\2\2\u021e\u0213\3\2\2\2\u021e\u0214\3\2\2\2\u021e\u0215\3\2\2\2\u021e"+
		"\u0216\3\2\2\2\u021e\u0217\3\2\2\2\u021e\u0218\3\2\2\2\u021e\u0219\3\2"+
		"\2\2\u021e\u021a\3\2\2\2\u021e\u021b\3\2\2\2\u021e\u021c\3\2\2\2\u021e"+
		"\u021d\3\2\2\2\u021f{\3\2\2\2\30\177\u0099\u00a2\u00ad\u012c\u012f\u013c"+
		"\u013f\u0145\u014e\u015c\u0168\u0177\u017a\u0186\u0189\u0197\u019a\u01a8"+
		"\u01ab\u01bc\u021e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}