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
		RULE_manifest = 0, RULE_manifestInstruction = 1, RULE_unit = 2, RULE_bool = 3, 
		RULE_i8 = 4, RULE_i16 = 5, RULE_i32 = 6, RULE_i64 = 7, RULE_i128 = 8, 
		RULE_u8 = 9, RULE_u16 = 10, RULE_u32 = 11, RULE_u64 = 12, RULE_u128 = 13, 
		RULE_string = 14, RULE_struct = 15, RULE_enum_ = 16, RULE_option = 17, 
		RULE_some = 18, RULE_none = 19, RULE_ok = 20, RULE_err = 21, RULE_array = 22, 
		RULE_tuple = 23, RULE_list = 24, RULE_set = 25, RULE_map = 26, RULE_decimal = 27, 
		RULE_preciseDecimal = 28, RULE_packageAddress = 29, RULE_componentAddress = 30, 
		RULE_resourceAddress = 31, RULE_hash = 32, RULE_bucket = 33, RULE_proof = 34, 
		RULE_nonFungibleId = 35, RULE_nonFungibleAddress = 36, RULE_bytes = 37, 
		RULE_type = 38, RULE_value = 39;
	private static String[] makeRuleNames() {
		return new String[] {
			"manifest", "manifestInstruction", "unit", "bool", "i8", "i16", "i32", 
			"i64", "i128", "u8", "u16", "u32", "u64", "u128", "string", "struct", 
			"enum_", "option", "some", "none", "ok", "err", "array", "tuple", "list", 
			"set", "map", "decimal", "preciseDecimal", "packageAddress", "componentAddress", 
			"resourceAddress", "hash", "bucket", "proof", "nonFungibleId", "nonFungibleAddress", 
			"bytes", "type", "value"
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
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 58)) & ~0x3f) == 0 && ((1L << (_la - 58)) & ((1L << (TAKE_FROM_WORKTOP - 58)) | (1L << (TAKE_FROM_WORKTOP_BY_AMOUNT - 58)) | (1L << (TAKE_FROM_WORKTOP_BY_IDS - 58)) | (1L << (ASSERT_WORKTOP_CONTAINS - 58)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 58)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_IDS - 58)) | (1L << (RETURN_TO_WORKTOP - 58)) | (1L << (POP_FROM_AUTH_ZONE - 58)) | (1L << (PUSH_TO_AUTH_ZONE - 58)) | (1L << (CLEAR_AUTHZONE - 58)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE - 58)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 58)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 58)) | (1L << (CREATE_PROOF_FROM_BUCKET - 58)) | (1L << (CLONE_PROOF - 58)) | (1L << (DROP_PROOF - 58)) | (1L << (DROP_ALL_PROOFS - 58)) | (1L << (CALL_FUNCTION - 58)) | (1L << (CALL_METHOD - 58)) | (1L << (CALL_METHOD_WITH_ALL_RESOURCES - 58)) | (1L << (PUBLISH_PACKAGE - 58)))) != 0)) {
				{
				{
				setState(80);
				manifestInstruction();
				}
				}
				setState(85);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(86);
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
		public TerminalNode CALL_METHOD() { return getToken(TransactionManifestParser.CALL_METHOD, 0); }
		public ComponentAddressContext componentAddress() {
			return getRuleContext(ComponentAddressContext.class,0);
		}
		public TerminalNode CALL_METHOD_WITH_ALL_RESOURCES() { return getToken(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES, 0); }
		public TerminalNode TAKE_FROM_WORKTOP() { return getToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0); }
		public ResourceAddressContext resourceAddress() {
			return getRuleContext(ResourceAddressContext.class,0);
		}
		public BucketContext bucket() {
			return getRuleContext(BucketContext.class,0);
		}
		public TerminalNode TAKE_FROM_WORKTOP_BY_AMOUNT() { return getToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT, 0); }
		public DecimalContext decimal() {
			return getRuleContext(DecimalContext.class,0);
		}
		public TerminalNode TAKE_FROM_WORKTOP_BY_IDS() { return getToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS, 0); }
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
		}
		public TerminalNode RETURN_TO_WORKTOP() { return getToken(TransactionManifestParser.RETURN_TO_WORKTOP, 0); }
		public TerminalNode ASSERT_WORKTOP_CONTAINS() { return getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS, 0); }
		public TerminalNode ASSERT_WORKTOP_CONTAINS_BY_AMOUNT() { return getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT, 0); }
		public TerminalNode ASSERT_WORKTOP_CONTAINS_BY_IDS() { return getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS, 0); }
		public TerminalNode POP_FROM_AUTH_ZONE() { return getToken(TransactionManifestParser.POP_FROM_AUTH_ZONE, 0); }
		public List<ProofContext> proof() {
			return getRuleContexts(ProofContext.class);
		}
		public ProofContext proof(int i) {
			return getRuleContext(ProofContext.class,i);
		}
		public TerminalNode PUSH_TO_AUTH_ZONE() { return getToken(TransactionManifestParser.PUSH_TO_AUTH_ZONE, 0); }
		public TerminalNode CREATE_PROOF_FROM_AUTH_ZONE() { return getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE, 0); }
		public TerminalNode CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT() { return getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT, 0); }
		public TerminalNode CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS() { return getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS, 0); }
		public TerminalNode CREATE_PROOF_FROM_BUCKET() { return getToken(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET, 0); }
		public TerminalNode CLONE_PROOF() { return getToken(TransactionManifestParser.CLONE_PROOF, 0); }
		public TerminalNode DROP_PROOF() { return getToken(TransactionManifestParser.DROP_PROOF, 0); }
		public TerminalNode DROP_ALL_PROOFS() { return getToken(TransactionManifestParser.DROP_ALL_PROOFS, 0); }
		public TerminalNode CLEAR_AUTHZONE() { return getToken(TransactionManifestParser.CLEAR_AUTHZONE, 0); }
		public TerminalNode PUBLISH_PACKAGE() { return getToken(TransactionManifestParser.PUBLISH_PACKAGE, 0); }
		public BytesContext bytes() {
			return getRuleContext(BytesContext.class,0);
		}
		public ManifestInstructionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_manifestInstruction; }
	}

	public final ManifestInstructionContext manifestInstruction() throws RecognitionException {
		ManifestInstructionContext _localctx = new ManifestInstructionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_manifestInstruction);
		int _la;
		try {
			setState(198);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CALL_FUNCTION:
				enterOuterAlt(_localctx, 1);
				{
				setState(88);
				match(CALL_FUNCTION);
				setState(89);
				packageAddress();
				setState(90);
				string();
				setState(91);
				string();
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
					{
					{
					setState(92);
					value();
					}
					}
					setState(97);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(98);
				match(SEMICOLON);
				}
				break;
			case CALL_METHOD:
				enterOuterAlt(_localctx, 2);
				{
				setState(100);
				match(CALL_METHOD);
				setState(101);
				componentAddress();
				setState(102);
				string();
				setState(106);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
					{
					{
					setState(103);
					value();
					}
					}
					setState(108);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(109);
				match(SEMICOLON);
				}
				break;
			case CALL_METHOD_WITH_ALL_RESOURCES:
				enterOuterAlt(_localctx, 3);
				{
				setState(111);
				match(CALL_METHOD_WITH_ALL_RESOURCES);
				setState(112);
				componentAddress();
				setState(113);
				string();
				setState(114);
				match(SEMICOLON);
				}
				break;
			case TAKE_FROM_WORKTOP:
				enterOuterAlt(_localctx, 4);
				{
				setState(116);
				match(TAKE_FROM_WORKTOP);
				setState(117);
				resourceAddress();
				setState(118);
				bucket();
				setState(119);
				match(SEMICOLON);
				}
				break;
			case TAKE_FROM_WORKTOP_BY_AMOUNT:
				enterOuterAlt(_localctx, 5);
				{
				setState(121);
				match(TAKE_FROM_WORKTOP_BY_AMOUNT);
				setState(122);
				decimal();
				setState(123);
				resourceAddress();
				setState(124);
				bucket();
				setState(125);
				match(SEMICOLON);
				}
				break;
			case TAKE_FROM_WORKTOP_BY_IDS:
				enterOuterAlt(_localctx, 6);
				{
				setState(127);
				match(TAKE_FROM_WORKTOP_BY_IDS);
				setState(128);
				set();
				setState(129);
				resourceAddress();
				setState(130);
				bucket();
				setState(131);
				match(SEMICOLON);
				}
				break;
			case RETURN_TO_WORKTOP:
				enterOuterAlt(_localctx, 7);
				{
				setState(133);
				match(RETURN_TO_WORKTOP);
				setState(134);
				bucket();
				setState(135);
				match(SEMICOLON);
				}
				break;
			case ASSERT_WORKTOP_CONTAINS:
				enterOuterAlt(_localctx, 8);
				{
				setState(137);
				match(ASSERT_WORKTOP_CONTAINS);
				setState(138);
				resourceAddress();
				setState(139);
				match(SEMICOLON);
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
				enterOuterAlt(_localctx, 9);
				{
				setState(141);
				match(ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
				setState(142);
				decimal();
				setState(143);
				resourceAddress();
				setState(144);
				match(SEMICOLON);
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_IDS:
				enterOuterAlt(_localctx, 10);
				{
				setState(146);
				match(ASSERT_WORKTOP_CONTAINS_BY_IDS);
				setState(147);
				set();
				setState(148);
				resourceAddress();
				setState(149);
				match(SEMICOLON);
				}
				break;
			case POP_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 11);
				{
				setState(151);
				match(POP_FROM_AUTH_ZONE);
				setState(152);
				proof();
				setState(153);
				match(SEMICOLON);
				}
				break;
			case PUSH_TO_AUTH_ZONE:
				enterOuterAlt(_localctx, 12);
				{
				setState(155);
				match(PUSH_TO_AUTH_ZONE);
				setState(156);
				proof();
				setState(157);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 13);
				{
				setState(159);
				match(CREATE_PROOF_FROM_AUTH_ZONE);
				setState(160);
				resourceAddress();
				setState(161);
				proof();
				setState(162);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
				enterOuterAlt(_localctx, 14);
				{
				setState(164);
				match(CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
				setState(165);
				decimal();
				setState(166);
				resourceAddress();
				setState(167);
				proof();
				setState(168);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
				enterOuterAlt(_localctx, 15);
				{
				setState(170);
				match(CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
				setState(171);
				set();
				setState(172);
				resourceAddress();
				setState(173);
				proof();
				setState(174);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_BUCKET:
				enterOuterAlt(_localctx, 16);
				{
				setState(176);
				match(CREATE_PROOF_FROM_BUCKET);
				setState(177);
				bucket();
				setState(178);
				proof();
				setState(179);
				match(SEMICOLON);
				}
				break;
			case CLONE_PROOF:
				enterOuterAlt(_localctx, 17);
				{
				setState(181);
				match(CLONE_PROOF);
				setState(182);
				proof();
				setState(183);
				proof();
				setState(184);
				match(SEMICOLON);
				}
				break;
			case DROP_PROOF:
				enterOuterAlt(_localctx, 18);
				{
				setState(186);
				match(DROP_PROOF);
				setState(187);
				proof();
				setState(188);
				match(SEMICOLON);
				}
				break;
			case DROP_ALL_PROOFS:
				enterOuterAlt(_localctx, 19);
				{
				setState(190);
				match(DROP_ALL_PROOFS);
				setState(191);
				match(SEMICOLON);
				}
				break;
			case CLEAR_AUTHZONE:
				enterOuterAlt(_localctx, 20);
				{
				setState(192);
				match(CLEAR_AUTHZONE);
				setState(193);
				match(SEMICOLON);
				}
				break;
			case PUBLISH_PACKAGE:
				enterOuterAlt(_localctx, 21);
				{
				setState(194);
				match(PUBLISH_PACKAGE);
				setState(195);
				bytes();
				setState(196);
				match(SEMICOLON);
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

	public static class UnitContext extends ParserRuleContext {
		public UnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unit; }
	}

	public final UnitContext unit() throws RecognitionException {
		UnitContext _localctx = new UnitContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_unit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
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
		enterRule(_localctx, 6, RULE_bool);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
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
		enterRule(_localctx, 8, RULE_i8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
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
		enterRule(_localctx, 10, RULE_i16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
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
		enterRule(_localctx, 12, RULE_i32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
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
		enterRule(_localctx, 14, RULE_i64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
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
		enterRule(_localctx, 16, RULE_i128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
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
		enterRule(_localctx, 18, RULE_u8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
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
		enterRule(_localctx, 20, RULE_u16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
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
		enterRule(_localctx, 22, RULE_u32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
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
		enterRule(_localctx, 24, RULE_u64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
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
		enterRule(_localctx, 26, RULE_u128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
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
		enterRule(_localctx, 28, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
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
		enterRule(_localctx, 30, RULE_struct);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			match(STRUCT_TYPE);
			setState(227);
			match(OPEN_PARENTHESIS);
			setState(236);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(228);
				value();
				setState(233);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(229);
					match(COMMA);
					setState(230);
					value();
					}
					}
					setState(235);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(238);
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
		enterRule(_localctx, 32, RULE_enum_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			match(ENUM_TYPE);
			setState(241);
			match(OPEN_PARENTHESIS);
			{
			setState(242);
			string();
			setState(243);
			match(COMMA);
			setState(252);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(244);
				value();
				setState(249);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(245);
					match(COMMA);
					setState(246);
					value();
					}
					}
					setState(251);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
			setState(254);
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
		enterRule(_localctx, 34, RULE_option);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SOME_TYPE:
				{
				setState(256);
				some();
				}
				break;
			case NONE_TYPE:
				{
				setState(257);
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
		enterRule(_localctx, 36, RULE_some);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			match(SOME_TYPE);
			setState(261);
			match(OPEN_PARENTHESIS);
			{
			setState(262);
			value();
			setState(267);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(263);
				match(COMMA);
				setState(264);
				value();
				}
				}
				setState(269);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(270);
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
		enterRule(_localctx, 38, RULE_none);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
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
		enterRule(_localctx, 40, RULE_ok);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(OK_TYPE);
			setState(275);
			match(OPEN_PARENTHESIS);
			{
			setState(276);
			value();
			setState(281);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(277);
				match(COMMA);
				setState(278);
				value();
				}
				}
				setState(283);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(284);
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
		enterRule(_localctx, 42, RULE_err);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			match(ERR_TYPE);
			setState(287);
			match(OPEN_PARENTHESIS);
			{
			setState(288);
			value();
			setState(293);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(289);
				match(COMMA);
				setState(290);
				value();
				}
				}
				setState(295);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(296);
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
		enterRule(_localctx, 44, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			match(ARRAY_TYPE);
			setState(299);
			match(LESS_THAN);
			setState(300);
			type();
			setState(301);
			match(GREATER_THAN);
			setState(302);
			match(OPEN_PARENTHESIS);
			setState(311);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(303);
				value();
				setState(308);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(304);
					match(COMMA);
					setState(305);
					value();
					}
					}
					setState(310);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(313);
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
		enterRule(_localctx, 46, RULE_tuple);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			match(TUPLE_TYPE);
			setState(316);
			match(LESS_THAN);
			setState(317);
			match(OPEN_PARENTHESIS);
			setState(326);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(318);
				value();
				setState(323);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(319);
					match(COMMA);
					setState(320);
					value();
					}
					}
					setState(325);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(328);
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
		enterRule(_localctx, 48, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			match(LIST_TYPE);
			setState(331);
			match(LESS_THAN);
			setState(332);
			type();
			setState(333);
			match(GREATER_THAN);
			setState(334);
			match(OPEN_PARENTHESIS);
			setState(343);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(335);
				value();
				setState(340);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(336);
					match(COMMA);
					setState(337);
					value();
					}
					}
					setState(342);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(345);
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
		enterRule(_localctx, 50, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			match(SET_TYPE);
			setState(348);
			match(LESS_THAN);
			setState(349);
			type();
			setState(350);
			match(GREATER_THAN);
			setState(351);
			match(OPEN_PARENTHESIS);
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(352);
				value();
				setState(357);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(353);
					match(COMMA);
					setState(354);
					value();
					}
					}
					setState(359);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(362);
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
		enterRule(_localctx, 52, RULE_map);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(MAP_TYPE);
			setState(365);
			match(LESS_THAN);
			setState(366);
			type();
			setState(367);
			match(COMMA);
			setState(368);
			type();
			setState(369);
			match(GREATER_THAN);
			setState(370);
			match(OPEN_PARENTHESIS);
			setState(377);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PRECISE_DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				{
				setState(371);
				value();
				setState(372);
				match(COMMA);
				setState(373);
				value();
				}
				}
				setState(379);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(380);
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
		enterRule(_localctx, 54, RULE_decimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(382);
			match(DECIMAL_TYPE);
			setState(383);
			match(OPEN_PARENTHESIS);
			setState(384);
			match(STRING_LITERAL);
			setState(385);
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
		enterRule(_localctx, 56, RULE_preciseDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(387);
			match(PRECISE_DECIMAL_TYPE);
			setState(388);
			match(OPEN_PARENTHESIS);
			setState(389);
			match(STRING_LITERAL);
			setState(390);
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
		enterRule(_localctx, 58, RULE_packageAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
			match(PACKAGE_ADDRESS_TYPE);
			setState(393);
			match(OPEN_PARENTHESIS);
			setState(394);
			match(STRING_LITERAL);
			setState(395);
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
		enterRule(_localctx, 60, RULE_componentAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(397);
			match(COMPONENT_ADDRESS_TYPE);
			setState(398);
			match(OPEN_PARENTHESIS);
			setState(399);
			match(STRING_LITERAL);
			setState(400);
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
		enterRule(_localctx, 62, RULE_resourceAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
			match(RESOURCE_ADDRESS_TYPE);
			setState(403);
			match(OPEN_PARENTHESIS);
			setState(404);
			match(STRING_LITERAL);
			setState(405);
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
		enterRule(_localctx, 64, RULE_hash);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(407);
			match(HASH_TYPE);
			setState(408);
			match(OPEN_PARENTHESIS);
			setState(409);
			match(STRING_LITERAL);
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
		enterRule(_localctx, 66, RULE_bucket);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			match(BUCKET_TYPE);
			setState(413);
			match(OPEN_PARENTHESIS);
			setState(414);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(415);
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
		enterRule(_localctx, 68, RULE_proof);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
			match(PROOF_TYPE);
			setState(418);
			match(OPEN_PARENTHESIS);
			setState(419);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(420);
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
		enterRule(_localctx, 70, RULE_nonFungibleId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(422);
			match(NON_FUNGIBLE_ID_TYPE);
			setState(423);
			match(OPEN_PARENTHESIS);
			setState(424);
			match(STRING_LITERAL);
			setState(425);
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
		enterRule(_localctx, 72, RULE_nonFungibleAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(427);
			match(NON_FUNGIBLE_ADDRESS_TYPE);
			setState(428);
			match(OPEN_PARENTHESIS);
			setState(429);
			match(STRING_LITERAL);
			setState(430);
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
		enterRule(_localctx, 74, RULE_bytes);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
			match(BYTES_TYPE);
			setState(433);
			match(OPEN_PARENTHESIS);
			setState(434);
			match(STRING_LITERAL);
			setState(435);
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
		enterRule(_localctx, 76, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(437);
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
		enterRule(_localctx, 78, RULE_value);
		try {
			setState(475);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(439);
				unit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(440);
				bool();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(441);
				i8();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(442);
				i16();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(443);
				i32();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(444);
				i64();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(445);
				i128();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(446);
				u8();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(447);
				u16();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(448);
				u32();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(449);
				u64();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(450);
				u128();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(451);
				string();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(452);
				struct();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(453);
				enum_();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(454);
				option();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(455);
				some();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(456);
				none();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(457);
				ok();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(458);
				err();
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(459);
				array();
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(460);
				tuple();
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(461);
				list();
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(462);
				set();
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(463);
				map();
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(464);
				decimal();
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(465);
				preciseDecimal();
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(466);
				packageAddress();
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(467);
				componentAddress();
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(468);
				resourceAddress();
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(469);
				hash();
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(470);
				bucket();
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(471);
				proof();
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(472);
				nonFungibleId();
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(473);
				nonFungibleAddress();
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(474);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3V\u01e0\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\3\2\7\2T\n\2\f"+
		"\2\16\2W\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\7\3`\n\3\f\3\16\3c\13\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\7\3k\n\3\f\3\16\3n\13\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u00c9\n\3\3\4\3"+
		"\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3"+
		"\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3\21\3\21\7\21\u00ea"+
		"\n\21\f\21\16\21\u00ed\13\21\5\21\u00ef\n\21\3\21\3\21\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\7\22\u00fa\n\22\f\22\16\22\u00fd\13\22\5\22\u00ff"+
		"\n\22\3\22\3\22\3\23\3\23\5\23\u0105\n\23\3\24\3\24\3\24\3\24\3\24\7\24"+
		"\u010c\n\24\f\24\16\24\u010f\13\24\3\24\3\24\3\25\3\25\3\26\3\26\3\26"+
		"\3\26\3\26\7\26\u011a\n\26\f\26\16\26\u011d\13\26\3\26\3\26\3\27\3\27"+
		"\3\27\3\27\3\27\7\27\u0126\n\27\f\27\16\27\u0129\13\27\3\27\3\27\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\7\30\u0135\n\30\f\30\16\30\u0138\13"+
		"\30\5\30\u013a\n\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\7\31\u0144"+
		"\n\31\f\31\16\31\u0147\13\31\5\31\u0149\n\31\3\31\3\31\3\32\3\32\3\32"+
		"\3\32\3\32\3\32\3\32\3\32\7\32\u0155\n\32\f\32\16\32\u0158\13\32\5\32"+
		"\u015a\n\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\7\33\u0166"+
		"\n\33\f\33\16\33\u0169\13\33\5\33\u016b\n\33\3\33\3\33\3\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\7\34\u017a\n\34\f\34\16\34\u017d"+
		"\13\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\37"+
		"\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\""+
		"\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3\'\3\'\3"+
		"\'\3\'\3\'\3(\3(\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3"+
		")\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\5)\u01de\n)\3"+
		")\2\2*\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<"+
		">@BDFHJLNP\2\4\4\2\f\fQQ\3\2\21\65\2\u0202\2U\3\2\2\2\4\u00c8\3\2\2\2"+
		"\6\u00ca\3\2\2\2\b\u00cc\3\2\2\2\n\u00ce\3\2\2\2\f\u00d0\3\2\2\2\16\u00d2"+
		"\3\2\2\2\20\u00d4\3\2\2\2\22\u00d6\3\2\2\2\24\u00d8\3\2\2\2\26\u00da\3"+
		"\2\2\2\30\u00dc\3\2\2\2\32\u00de\3\2\2\2\34\u00e0\3\2\2\2\36\u00e2\3\2"+
		"\2\2 \u00e4\3\2\2\2\"\u00f2\3\2\2\2$\u0104\3\2\2\2&\u0106\3\2\2\2(\u0112"+
		"\3\2\2\2*\u0114\3\2\2\2,\u0120\3\2\2\2.\u012c\3\2\2\2\60\u013d\3\2\2\2"+
		"\62\u014c\3\2\2\2\64\u015d\3\2\2\2\66\u016e\3\2\2\28\u0180\3\2\2\2:\u0185"+
		"\3\2\2\2<\u018a\3\2\2\2>\u018f\3\2\2\2@\u0194\3\2\2\2B\u0199\3\2\2\2D"+
		"\u019e\3\2\2\2F\u01a3\3\2\2\2H\u01a8\3\2\2\2J\u01ad\3\2\2\2L\u01b2\3\2"+
		"\2\2N\u01b7\3\2\2\2P\u01dd\3\2\2\2RT\5\4\3\2SR\3\2\2\2TW\3\2\2\2US\3\2"+
		"\2\2UV\3\2\2\2VX\3\2\2\2WU\3\2\2\2XY\7\2\2\3Y\3\3\2\2\2Z[\7M\2\2[\\\5"+
		"<\37\2\\]\5\36\20\2]a\5\36\20\2^`\5P)\2_^\3\2\2\2`c\3\2\2\2a_\3\2\2\2"+
		"ab\3\2\2\2bd\3\2\2\2ca\3\2\2\2de\7;\2\2e\u00c9\3\2\2\2fg\7N\2\2gh\5> "+
		"\2hl\5\36\20\2ik\5P)\2ji\3\2\2\2kn\3\2\2\2lj\3\2\2\2lm\3\2\2\2mo\3\2\2"+
		"\2nl\3\2\2\2op\7;\2\2p\u00c9\3\2\2\2qr\7O\2\2rs\5> \2st\5\36\20\2tu\7"+
		";\2\2u\u00c9\3\2\2\2vw\7<\2\2wx\5@!\2xy\5D#\2yz\7;\2\2z\u00c9\3\2\2\2"+
		"{|\7=\2\2|}\58\35\2}~\5@!\2~\177\5D#\2\177\u0080\7;\2\2\u0080\u00c9\3"+
		"\2\2\2\u0081\u0082\7>\2\2\u0082\u0083\5\64\33\2\u0083\u0084\5@!\2\u0084"+
		"\u0085\5D#\2\u0085\u0086\7;\2\2\u0086\u00c9\3\2\2\2\u0087\u0088\7B\2\2"+
		"\u0088\u0089\5D#\2\u0089\u008a\7;\2\2\u008a\u00c9\3\2\2\2\u008b\u008c"+
		"\7?\2\2\u008c\u008d\5@!\2\u008d\u008e\7;\2\2\u008e\u00c9\3\2\2\2\u008f"+
		"\u0090\7@\2\2\u0090\u0091\58\35\2\u0091\u0092\5@!\2\u0092\u0093\7;\2\2"+
		"\u0093\u00c9\3\2\2\2\u0094\u0095\7A\2\2\u0095\u0096\5\64\33\2\u0096\u0097"+
		"\5@!\2\u0097\u0098\7;\2\2\u0098\u00c9\3\2\2\2\u0099\u009a\7C\2\2\u009a"+
		"\u009b\5F$\2\u009b\u009c\7;\2\2\u009c\u00c9\3\2\2\2\u009d\u009e\7D\2\2"+
		"\u009e\u009f\5F$\2\u009f\u00a0\7;\2\2\u00a0\u00c9\3\2\2\2\u00a1\u00a2"+
		"\7F\2\2\u00a2\u00a3\5@!\2\u00a3\u00a4\5F$\2\u00a4\u00a5\7;\2\2\u00a5\u00c9"+
		"\3\2\2\2\u00a6\u00a7\7G\2\2\u00a7\u00a8\58\35\2\u00a8\u00a9\5@!\2\u00a9"+
		"\u00aa\5F$\2\u00aa\u00ab\7;\2\2\u00ab\u00c9\3\2\2\2\u00ac\u00ad\7H\2\2"+
		"\u00ad\u00ae\5\64\33\2\u00ae\u00af\5@!\2\u00af\u00b0\5F$\2\u00b0\u00b1"+
		"\7;\2\2\u00b1\u00c9\3\2\2\2\u00b2\u00b3\7I\2\2\u00b3\u00b4\5D#\2\u00b4"+
		"\u00b5\5F$\2\u00b5\u00b6\7;\2\2\u00b6\u00c9\3\2\2\2\u00b7\u00b8\7J\2\2"+
		"\u00b8\u00b9\5F$\2\u00b9\u00ba\5F$\2\u00ba\u00bb\7;\2\2\u00bb\u00c9\3"+
		"\2\2\2\u00bc\u00bd\7K\2\2\u00bd\u00be\5F$\2\u00be\u00bf\7;\2\2\u00bf\u00c9"+
		"\3\2\2\2\u00c0\u00c1\7L\2\2\u00c1\u00c9\7;\2\2\u00c2\u00c3\7E\2\2\u00c3"+
		"\u00c9\7;\2\2\u00c4\u00c5\7P\2\2\u00c5\u00c6\5L\'\2\u00c6\u00c7\7;\2\2"+
		"\u00c7\u00c9\3\2\2\2\u00c8Z\3\2\2\2\u00c8f\3\2\2\2\u00c8q\3\2\2\2\u00c8"+
		"v\3\2\2\2\u00c8{\3\2\2\2\u00c8\u0081\3\2\2\2\u00c8\u0087\3\2\2\2\u00c8"+
		"\u008b\3\2\2\2\u00c8\u008f\3\2\2\2\u00c8\u0094\3\2\2\2\u00c8\u0099\3\2"+
		"\2\2\u00c8\u009d\3\2\2\2\u00c8\u00a1\3\2\2\2\u00c8\u00a6\3\2\2\2\u00c8"+
		"\u00ac\3\2\2\2\u00c8\u00b2\3\2\2\2\u00c8\u00b7\3\2\2\2\u00c8\u00bc\3\2"+
		"\2\2\u00c8\u00c0\3\2\2\2\u00c8\u00c2\3\2\2\2\u00c8\u00c4\3\2\2\2\u00c9"+
		"\5\3\2\2\2\u00ca\u00cb\7\3\2\2\u00cb\7\3\2\2\2\u00cc\u00cd\7\4\2\2\u00cd"+
		"\t\3\2\2\2\u00ce\u00cf\7\5\2\2\u00cf\13\3\2\2\2\u00d0\u00d1\7\6\2\2\u00d1"+
		"\r\3\2\2\2\u00d2\u00d3\7\7\2\2\u00d3\17\3\2\2\2\u00d4\u00d5\7\b\2\2\u00d5"+
		"\21\3\2\2\2\u00d6\u00d7\7\t\2\2\u00d7\23\3\2\2\2\u00d8\u00d9\7\n\2\2\u00d9"+
		"\25\3\2\2\2\u00da\u00db\7\13\2\2\u00db\27\3\2\2\2\u00dc\u00dd\7\f\2\2"+
		"\u00dd\31\3\2\2\2\u00de\u00df\7\r\2\2\u00df\33\3\2\2\2\u00e0\u00e1\7\16"+
		"\2\2\u00e1\35\3\2\2\2\u00e2\u00e3\7Q\2\2\u00e3\37\3\2\2\2\u00e4\u00e5"+
		"\7\36\2\2\u00e5\u00ee\7\66\2\2\u00e6\u00eb\5P)\2\u00e7\u00e8\7:\2\2\u00e8"+
		"\u00ea\5P)\2\u00e9\u00e7\3\2\2\2\u00ea\u00ed\3\2\2\2\u00eb\u00e9\3\2\2"+
		"\2\u00eb\u00ec\3\2\2\2\u00ec\u00ef\3\2\2\2\u00ed\u00eb\3\2\2\2\u00ee\u00e6"+
		"\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00f1\7\67\2\2"+
		"\u00f1!\3\2\2\2\u00f2\u00f3\7\37\2\2\u00f3\u00f4\7\66\2\2\u00f4\u00f5"+
		"\5\36\20\2\u00f5\u00fe\7:\2\2\u00f6\u00fb\5P)\2\u00f7\u00f8\7:\2\2\u00f8"+
		"\u00fa\5P)\2\u00f9\u00f7\3\2\2\2\u00fa\u00fd\3\2\2\2\u00fb\u00f9\3\2\2"+
		"\2\u00fb\u00fc\3\2\2\2\u00fc\u00ff\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fe\u00f6"+
		"\3\2\2\2\u00fe\u00ff\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\u0101\7\67\2\2"+
		"\u0101#\3\2\2\2\u0102\u0105\5&\24\2\u0103\u0105\5(\25\2\u0104\u0102\3"+
		"\2\2\2\u0104\u0103\3\2\2\2\u0105%\3\2\2\2\u0106\u0107\7\"\2\2\u0107\u0108"+
		"\7\66\2\2\u0108\u010d\5P)\2\u0109\u010a\7:\2\2\u010a\u010c\5P)\2\u010b"+
		"\u0109\3\2\2\2\u010c\u010f\3\2\2\2\u010d\u010b\3\2\2\2\u010d\u010e\3\2"+
		"\2\2\u010e\u0110\3\2\2\2\u010f\u010d\3\2\2\2\u0110\u0111\7\67\2\2\u0111"+
		"\'\3\2\2\2\u0112\u0113\7#\2\2\u0113)\3\2\2\2\u0114\u0115\7$\2\2\u0115"+
		"\u0116\7\66\2\2\u0116\u011b\5P)\2\u0117\u0118\7:\2\2\u0118\u011a\5P)\2"+
		"\u0119\u0117\3\2\2\2\u011a\u011d\3\2\2\2\u011b\u0119\3\2\2\2\u011b\u011c"+
		"\3\2\2\2\u011c\u011e\3\2\2\2\u011d\u011b\3\2\2\2\u011e\u011f\7\67\2\2"+
		"\u011f+\3\2\2\2\u0120\u0121\7%\2\2\u0121\u0122\7\66\2\2\u0122\u0127\5"+
		"P)\2\u0123\u0124\7:\2\2\u0124\u0126\5P)\2\u0125\u0123\3\2\2\2\u0126\u0129"+
		"\3\2\2\2\u0127\u0125\3\2\2\2\u0127\u0128\3\2\2\2\u0128\u012a\3\2\2\2\u0129"+
		"\u0127\3\2\2\2\u012a\u012b\7\67\2\2\u012b-\3\2\2\2\u012c\u012d\7&\2\2"+
		"\u012d\u012e\78\2\2\u012e\u012f\5N(\2\u012f\u0130\79\2\2\u0130\u0139\7"+
		"\66\2\2\u0131\u0136\5P)\2\u0132\u0133\7:\2\2\u0133\u0135\5P)\2\u0134\u0132"+
		"\3\2\2\2\u0135\u0138\3\2\2\2\u0136\u0134\3\2\2\2\u0136\u0137\3\2\2\2\u0137"+
		"\u013a\3\2\2\2\u0138\u0136\3\2\2\2\u0139\u0131\3\2\2\2\u0139\u013a\3\2"+
		"\2\2\u013a\u013b\3\2\2\2\u013b\u013c\7\67\2\2\u013c/\3\2\2\2\u013d\u013e"+
		"\7\'\2\2\u013e\u013f\78\2\2\u013f\u0148\7\66\2\2\u0140\u0145\5P)\2\u0141"+
		"\u0142\7:\2\2\u0142\u0144\5P)\2\u0143\u0141\3\2\2\2\u0144\u0147\3\2\2"+
		"\2\u0145\u0143\3\2\2\2\u0145\u0146\3\2\2\2\u0146\u0149\3\2\2\2\u0147\u0145"+
		"\3\2\2\2\u0148\u0140\3\2\2\2\u0148\u0149\3\2\2\2\u0149\u014a\3\2\2\2\u014a"+
		"\u014b\7\67\2\2\u014b\61\3\2\2\2\u014c\u014d\7(\2\2\u014d\u014e\78\2\2"+
		"\u014e\u014f\5N(\2\u014f\u0150\79\2\2\u0150\u0159\7\66\2\2\u0151\u0156"+
		"\5P)\2\u0152\u0153\7:\2\2\u0153\u0155\5P)\2\u0154\u0152\3\2\2\2\u0155"+
		"\u0158\3\2\2\2\u0156\u0154\3\2\2\2\u0156\u0157\3\2\2\2\u0157\u015a\3\2"+
		"\2\2\u0158\u0156\3\2\2\2\u0159\u0151\3\2\2\2\u0159\u015a\3\2\2\2\u015a"+
		"\u015b\3\2\2\2\u015b\u015c\7\67\2\2\u015c\63\3\2\2\2\u015d\u015e\7)\2"+
		"\2\u015e\u015f\78\2\2\u015f\u0160\5N(\2\u0160\u0161\79\2\2\u0161\u016a"+
		"\7\66\2\2\u0162\u0167\5P)\2\u0163\u0164\7:\2\2\u0164\u0166\5P)\2\u0165"+
		"\u0163\3\2\2\2\u0166\u0169\3\2\2\2\u0167\u0165\3\2\2\2\u0167\u0168\3\2"+
		"\2\2\u0168\u016b\3\2\2\2\u0169\u0167\3\2\2\2\u016a\u0162\3\2\2\2\u016a"+
		"\u016b\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\7\67\2\2\u016d\65\3\2\2"+
		"\2\u016e\u016f\7*\2\2\u016f\u0170\78\2\2\u0170\u0171\5N(\2\u0171\u0172"+
		"\7:\2\2\u0172\u0173\5N(\2\u0173\u0174\79\2\2\u0174\u017b\7\66\2\2\u0175"+
		"\u0176\5P)\2\u0176\u0177\7:\2\2\u0177\u0178\5P)\2\u0178\u017a\3\2\2\2"+
		"\u0179\u0175\3\2\2\2\u017a\u017d\3\2\2\2\u017b\u0179\3\2\2\2\u017b\u017c"+
		"\3\2\2\2\u017c\u017e\3\2\2\2\u017d\u017b\3\2\2\2\u017e\u017f\7\67\2\2"+
		"\u017f\67\3\2\2\2\u0180\u0181\7+\2\2\u0181\u0182\7\66\2\2\u0182\u0183"+
		"\7Q\2\2\u0183\u0184\7\67\2\2\u01849\3\2\2\2\u0185\u0186\7,\2\2\u0186\u0187"+
		"\7\66\2\2\u0187\u0188\7Q\2\2\u0188\u0189\7\67\2\2\u0189;\3\2\2\2\u018a"+
		"\u018b\7-\2\2\u018b\u018c\7\66\2\2\u018c\u018d\7Q\2\2\u018d\u018e\7\67"+
		"\2\2\u018e=\3\2\2\2\u018f\u0190\7.\2\2\u0190\u0191\7\66\2\2\u0191\u0192"+
		"\7Q\2\2\u0192\u0193\7\67\2\2\u0193?\3\2\2\2\u0194\u0195\7/\2\2\u0195\u0196"+
		"\7\66\2\2\u0196\u0197\7Q\2\2\u0197\u0198\7\67\2\2\u0198A\3\2\2\2\u0199"+
		"\u019a\7\60\2\2\u019a\u019b\7\66\2\2\u019b\u019c\7Q\2\2\u019c\u019d\7"+
		"\67\2\2\u019dC\3\2\2\2\u019e\u019f\7\61\2\2\u019f\u01a0\7\66\2\2\u01a0"+
		"\u01a1\t\2\2\2\u01a1\u01a2\7\67\2\2\u01a2E\3\2\2\2\u01a3\u01a4\7\62\2"+
		"\2\u01a4\u01a5\7\66\2\2\u01a5\u01a6\t\2\2\2\u01a6\u01a7\7\67\2\2\u01a7"+
		"G\3\2\2\2\u01a8\u01a9\7\63\2\2\u01a9\u01aa\7\66\2\2\u01aa\u01ab\7Q\2\2"+
		"\u01ab\u01ac\7\67\2\2\u01acI\3\2\2\2\u01ad\u01ae\7\64\2\2\u01ae\u01af"+
		"\7\66\2\2\u01af\u01b0\7Q\2\2\u01b0\u01b1\7\67\2\2\u01b1K\3\2\2\2\u01b2"+
		"\u01b3\7\65\2\2\u01b3\u01b4\7\66\2\2\u01b4\u01b5\7Q\2\2\u01b5\u01b6\7"+
		"\67\2\2\u01b6M\3\2\2\2\u01b7\u01b8\t\3\2\2\u01b8O\3\2\2\2\u01b9\u01de"+
		"\5\6\4\2\u01ba\u01de\5\b\5\2\u01bb\u01de\5\n\6\2\u01bc\u01de\5\f\7\2\u01bd"+
		"\u01de\5\16\b\2\u01be\u01de\5\20\t\2\u01bf\u01de\5\22\n\2\u01c0\u01de"+
		"\5\24\13\2\u01c1\u01de\5\26\f\2\u01c2\u01de\5\30\r\2\u01c3\u01de\5\32"+
		"\16\2\u01c4\u01de\5\34\17\2\u01c5\u01de\5\36\20\2\u01c6\u01de\5 \21\2"+
		"\u01c7\u01de\5\"\22\2\u01c8\u01de\5$\23\2\u01c9\u01de\5&\24\2\u01ca\u01de"+
		"\5(\25\2\u01cb\u01de\5*\26\2\u01cc\u01de\5,\27\2\u01cd\u01de\5.\30\2\u01ce"+
		"\u01de\5\60\31\2\u01cf\u01de\5\62\32\2\u01d0\u01de\5\64\33\2\u01d1\u01de"+
		"\5\66\34\2\u01d2\u01de\58\35\2\u01d3\u01de\5:\36\2\u01d4\u01de\5<\37\2"+
		"\u01d5\u01de\5> \2\u01d6\u01de\5@!\2\u01d7\u01de\5B\"\2\u01d8\u01de\5"+
		"D#\2\u01d9\u01de\5F$\2\u01da\u01de\5H%\2\u01db\u01de\5J&\2\u01dc\u01de"+
		"\5L\'\2\u01dd\u01b9\3\2\2\2\u01dd\u01ba\3\2\2\2\u01dd\u01bb\3\2\2\2\u01dd"+
		"\u01bc\3\2\2\2\u01dd\u01bd\3\2\2\2\u01dd\u01be\3\2\2\2\u01dd\u01bf\3\2"+
		"\2\2\u01dd\u01c0\3\2\2\2\u01dd\u01c1\3\2\2\2\u01dd\u01c2\3\2\2\2\u01dd"+
		"\u01c3\3\2\2\2\u01dd\u01c4\3\2\2\2\u01dd\u01c5\3\2\2\2\u01dd\u01c6\3\2"+
		"\2\2\u01dd\u01c7\3\2\2\2\u01dd\u01c8\3\2\2\2\u01dd\u01c9\3\2\2\2\u01dd"+
		"\u01ca\3\2\2\2\u01dd\u01cb\3\2\2\2\u01dd\u01cc\3\2\2\2\u01dd\u01cd\3\2"+
		"\2\2\u01dd\u01ce\3\2\2\2\u01dd\u01cf\3\2\2\2\u01dd\u01d0\3\2\2\2\u01dd"+
		"\u01d1\3\2\2\2\u01dd\u01d2\3\2\2\2\u01dd\u01d3\3\2\2\2\u01dd\u01d4\3\2"+
		"\2\2\u01dd\u01d5\3\2\2\2\u01dd\u01d6\3\2\2\2\u01dd\u01d7\3\2\2\2\u01dd"+
		"\u01d8\3\2\2\2\u01dd\u01d9\3\2\2\2\u01dd\u01da\3\2\2\2\u01dd\u01db\3\2"+
		"\2\2\u01dd\u01dc\3\2\2\2\u01deQ\3\2\2\2\30Ual\u00c8\u00eb\u00ee\u00fb"+
		"\u00fe\u0104\u010d\u011b\u0127\u0136\u0139\u0145\u0148\u0156\u0159\u0167"+
		"\u016a\u017b\u01dd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}