// Generated from /Users/omarabdulla/Radix/radix-transaction-manifest-support/src/TransactionManifest.g4 by ANTLR 4.9.2
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
		MAP_TYPE=40, DECIMAL_TYPE=41, PACKAGE_ADDRESS_TYPE=42, COMPONENT_ADDRESS_TYPE=43, 
		RESOURCE_ADDRESS_TYPE=44, HASH_TYPE=45, BUCKET_TYPE=46, PROOF_TYPE=47, 
		NON_FUNGIBLE_ID_TYPE=48, NON_FUNGIBLE_ADDRESS_TYPE=49, BYTES_TYPE=50, 
		OPEN_PARENTHESIS=51, CLOED_PARENTHESIS=52, LESS_THAN=53, GREATER_THAN=54, 
		COMMA=55, SEMICOLON=56, TAKE_FROM_WORKTOP=57, TAKE_FROM_WORKTOP_BY_AMOUNT=58, 
		TAKE_FROM_WORKTOP_BY_IDS=59, ASSERT_WORKTOP_CONTAINS=60, ASSERT_WORKTOP_CONTAINS_BY_AMOUNT=61, 
		ASSERT_WORKTOP_CONTAINS_BY_IDS=62, RETURN_TO_WORKTOP=63, POP_FROM_AUTH_ZONE=64, 
		PUSH_TO_AUTH_ZONE=65, CLEAR_AUTHZONE=66, CREATE_PROOF_FROM_AUTH_ZONE=67, 
		CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT=68, CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS=69, 
		CREATE_PROOF_FROM_BUCKET=70, CLONE_PROOF=71, DROP_PROOF=72, DROP_ALL_PROOFS=73, 
		CALL_FUNCTION=74, CALL_METHOD=75, CALL_METHOD_WITH_ALL_RESOURCES=76, PUBLISH_PACKAGE=77, 
		STRING_LITERAL=78, DIGIT=79, LETTER=80, NUMBER=81, WS=82, COMMENT=83;
	public static final int
		RULE_manifest = 0, RULE_manifestInstruction = 1, RULE_unit = 2, RULE_bool = 3, 
		RULE_i8 = 4, RULE_i16 = 5, RULE_i32 = 6, RULE_i64 = 7, RULE_i128 = 8, 
		RULE_u8 = 9, RULE_u16 = 10, RULE_u32 = 11, RULE_u64 = 12, RULE_u128 = 13, 
		RULE_string = 14, RULE_struct = 15, RULE_enum_ = 16, RULE_option = 17, 
		RULE_some = 18, RULE_none = 19, RULE_ok = 20, RULE_err = 21, RULE_array = 22, 
		RULE_tuple = 23, RULE_list = 24, RULE_set = 25, RULE_map = 26, RULE_decimal = 27, 
		RULE_package_address = 28, RULE_component_address = 29, RULE_resource_address = 30, 
		RULE_hash = 31, RULE_bucket = 32, RULE_proof = 33, RULE_non_fungible_id = 34, 
		RULE_non_fungible_address = 35, RULE_bytes = 36, RULE_type = 37, RULE_value = 38;
	private static String[] makeRuleNames() {
		return new String[] {
			"manifest", "manifestInstruction", "unit", "bool", "i8", "i16", "i32", 
			"i64", "i128", "u8", "u16", "u32", "u64", "u128", "string", "struct", 
			"enum_", "option", "some", "none", "ok", "err", "array", "tuple", "list", 
			"set", "map", "decimal", "package_address", "component_address", "resource_address", 
			"hash", "bucket", "proof", "non_fungible_id", "non_fungible_address", 
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
			"'PackageAddress'", "'ComponentAddress'", "'ResourceAddress'", "'Hash'", 
			"'Bucket'", "'Proof'", "'NonFungibleId'", "'NonFungibleAddress'", "'Bytes'", 
			"'('", "')'", "'<'", "'>'", "','", "';'", "'TAKE_FROM_WORKTOP'", "'TAKE_FROM_WORKTOP_BY_AMOUNT'", 
			"'TAKE_FROM_WORKTOP_BY_IDS'", "'ASSERT_WORKTOP_CONTAINS'", "'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT'", 
			"'ASSERT_WORKTOP_CONTAINS_BY_IDS'", "'RETURN_TO_WORKTOP'", "'POP_FROM_AUTH_ZONE'", 
			"'PUSH_TO_AUTH_ZONE'", "'CLEAR_AUTHZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE'", 
			"'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT'", "'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS'", 
			"'CREATE_PROOF_FROM_BUCKET'", "'CLONE_PROOF'", "'DROP_PROOF'", "'DROP_ALL_PROOFS'", 
			"'CALL_FUNCTION'", "'CALL_METHOD'", "'CALL_METHOD_WITH_ALL_RESOURCES'", 
			"'PUBLISH_PACKAGE'"
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
			"MAP_TYPE", "DECIMAL_TYPE", "PACKAGE_ADDRESS_TYPE", "COMPONENT_ADDRESS_TYPE", 
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
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 57)) & ~0x3f) == 0 && ((1L << (_la - 57)) & ((1L << (TAKE_FROM_WORKTOP - 57)) | (1L << (TAKE_FROM_WORKTOP_BY_AMOUNT - 57)) | (1L << (TAKE_FROM_WORKTOP_BY_IDS - 57)) | (1L << (ASSERT_WORKTOP_CONTAINS - 57)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 57)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_IDS - 57)) | (1L << (RETURN_TO_WORKTOP - 57)) | (1L << (POP_FROM_AUTH_ZONE - 57)) | (1L << (PUSH_TO_AUTH_ZONE - 57)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE - 57)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 57)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 57)) | (1L << (CREATE_PROOF_FROM_BUCKET - 57)) | (1L << (CLONE_PROOF - 57)) | (1L << (DROP_PROOF - 57)) | (1L << (DROP_ALL_PROOFS - 57)) | (1L << (CALL_FUNCTION - 57)) | (1L << (CALL_METHOD - 57)) | (1L << (CALL_METHOD_WITH_ALL_RESOURCES - 57)) | (1L << (PUBLISH_PACKAGE - 57)))) != 0)) {
				{
				{
				setState(78);
				manifestInstruction();
				}
				}
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(84);
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
		public Package_addressContext package_address() {
			return getRuleContext(Package_addressContext.class,0);
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
		public Component_addressContext component_address() {
			return getRuleContext(Component_addressContext.class,0);
		}
		public TerminalNode CALL_METHOD_WITH_ALL_RESOURCES() { return getToken(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES, 0); }
		public TerminalNode TAKE_FROM_WORKTOP() { return getToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0); }
		public Resource_addressContext resource_address() {
			return getRuleContext(Resource_addressContext.class,0);
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
			setState(194);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CALL_FUNCTION:
				enterOuterAlt(_localctx, 1);
				{
				setState(86);
				match(CALL_FUNCTION);
				setState(87);
				package_address();
				setState(88);
				string();
				setState(89);
				string();
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
					{
					{
					setState(90);
					value();
					}
					}
					setState(95);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(96);
				match(SEMICOLON);
				}
				break;
			case CALL_METHOD:
				enterOuterAlt(_localctx, 2);
				{
				setState(98);
				match(CALL_METHOD);
				setState(99);
				component_address();
				setState(100);
				string();
				setState(104);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
					{
					{
					setState(101);
					value();
					}
					}
					setState(106);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(107);
				match(SEMICOLON);
				}
				break;
			case CALL_METHOD_WITH_ALL_RESOURCES:
				enterOuterAlt(_localctx, 3);
				{
				setState(109);
				match(CALL_METHOD_WITH_ALL_RESOURCES);
				setState(110);
				component_address();
				setState(111);
				string();
				setState(112);
				match(SEMICOLON);
				}
				break;
			case TAKE_FROM_WORKTOP:
				enterOuterAlt(_localctx, 4);
				{
				setState(114);
				match(TAKE_FROM_WORKTOP);
				setState(115);
				resource_address();
				setState(116);
				bucket();
				setState(117);
				match(SEMICOLON);
				}
				break;
			case TAKE_FROM_WORKTOP_BY_AMOUNT:
				enterOuterAlt(_localctx, 5);
				{
				setState(119);
				match(TAKE_FROM_WORKTOP_BY_AMOUNT);
				setState(120);
				decimal();
				setState(121);
				resource_address();
				setState(122);
				bucket();
				setState(123);
				match(SEMICOLON);
				}
				break;
			case TAKE_FROM_WORKTOP_BY_IDS:
				enterOuterAlt(_localctx, 6);
				{
				setState(125);
				match(TAKE_FROM_WORKTOP_BY_IDS);
				setState(126);
				set();
				setState(127);
				resource_address();
				setState(128);
				bucket();
				setState(129);
				match(SEMICOLON);
				}
				break;
			case RETURN_TO_WORKTOP:
				enterOuterAlt(_localctx, 7);
				{
				setState(131);
				match(RETURN_TO_WORKTOP);
				setState(132);
				bucket();
				setState(133);
				match(SEMICOLON);
				}
				break;
			case ASSERT_WORKTOP_CONTAINS:
				enterOuterAlt(_localctx, 8);
				{
				setState(135);
				match(ASSERT_WORKTOP_CONTAINS);
				setState(136);
				resource_address();
				setState(137);
				match(SEMICOLON);
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
				enterOuterAlt(_localctx, 9);
				{
				setState(139);
				match(ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
				setState(140);
				decimal();
				setState(141);
				resource_address();
				setState(142);
				match(SEMICOLON);
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_IDS:
				enterOuterAlt(_localctx, 10);
				{
				setState(144);
				match(ASSERT_WORKTOP_CONTAINS_BY_IDS);
				setState(145);
				set();
				setState(146);
				resource_address();
				setState(147);
				match(SEMICOLON);
				}
				break;
			case POP_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 11);
				{
				setState(149);
				match(POP_FROM_AUTH_ZONE);
				setState(150);
				proof();
				setState(151);
				match(SEMICOLON);
				}
				break;
			case PUSH_TO_AUTH_ZONE:
				enterOuterAlt(_localctx, 12);
				{
				setState(153);
				match(PUSH_TO_AUTH_ZONE);
				setState(154);
				proof();
				setState(155);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 13);
				{
				setState(157);
				match(CREATE_PROOF_FROM_AUTH_ZONE);
				setState(158);
				resource_address();
				setState(159);
				proof();
				setState(160);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
				enterOuterAlt(_localctx, 14);
				{
				setState(162);
				match(CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
				setState(163);
				decimal();
				setState(164);
				resource_address();
				setState(165);
				proof();
				setState(166);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
				enterOuterAlt(_localctx, 15);
				{
				setState(168);
				match(CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
				setState(169);
				set();
				setState(170);
				resource_address();
				setState(171);
				proof();
				setState(172);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_BUCKET:
				enterOuterAlt(_localctx, 16);
				{
				setState(174);
				match(CREATE_PROOF_FROM_BUCKET);
				setState(175);
				bucket();
				setState(176);
				proof();
				setState(177);
				match(SEMICOLON);
				}
				break;
			case CLONE_PROOF:
				enterOuterAlt(_localctx, 17);
				{
				setState(179);
				match(CLONE_PROOF);
				setState(180);
				proof();
				setState(181);
				proof();
				setState(182);
				match(SEMICOLON);
				}
				break;
			case DROP_PROOF:
				enterOuterAlt(_localctx, 18);
				{
				setState(184);
				match(DROP_PROOF);
				setState(185);
				proof();
				setState(186);
				match(SEMICOLON);
				}
				break;
			case DROP_ALL_PROOFS:
				enterOuterAlt(_localctx, 19);
				{
				setState(188);
				match(DROP_ALL_PROOFS);
				setState(189);
				match(SEMICOLON);
				}
				break;
			case PUBLISH_PACKAGE:
				enterOuterAlt(_localctx, 20);
				{
				setState(190);
				match(PUBLISH_PACKAGE);
				setState(191);
				bytes();
				setState(192);
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
			setState(196);
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
			setState(198);
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
			setState(200);
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
			setState(202);
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
			setState(204);
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
			setState(206);
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
			setState(208);
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
			setState(210);
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
			setState(212);
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
			setState(214);
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
			setState(216);
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
			setState(218);
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
			setState(220);
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
			setState(222);
			match(STRUCT_TYPE);
			setState(223);
			match(OPEN_PARENTHESIS);
			setState(232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(224);
				value();
				setState(229);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(225);
					match(COMMA);
					setState(226);
					value();
					}
					}
					setState(231);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(234);
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
			setState(236);
			match(ENUM_TYPE);
			setState(237);
			match(OPEN_PARENTHESIS);
			{
			setState(238);
			string();
			setState(239);
			match(COMMA);
			setState(248);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(240);
				value();
				setState(245);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(241);
					match(COMMA);
					setState(242);
					value();
					}
					}
					setState(247);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
			setState(250);
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
			setState(254);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SOME_TYPE:
				{
				setState(252);
				some();
				}
				break;
			case NONE_TYPE:
				{
				setState(253);
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
			setState(256);
			match(SOME_TYPE);
			setState(257);
			match(OPEN_PARENTHESIS);
			{
			setState(258);
			value();
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(259);
				match(COMMA);
				setState(260);
				value();
				}
				}
				setState(265);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(266);
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
			setState(268);
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
			setState(270);
			match(OK_TYPE);
			setState(271);
			match(OPEN_PARENTHESIS);
			{
			setState(272);
			value();
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(273);
				match(COMMA);
				setState(274);
				value();
				}
				}
				setState(279);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(280);
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
			setState(282);
			match(ERR_TYPE);
			setState(283);
			match(OPEN_PARENTHESIS);
			{
			setState(284);
			value();
			setState(289);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(285);
				match(COMMA);
				setState(286);
				value();
				}
				}
				setState(291);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(292);
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
			setState(294);
			match(ARRAY_TYPE);
			setState(295);
			match(LESS_THAN);
			setState(296);
			type();
			setState(297);
			match(GREATER_THAN);
			setState(298);
			match(OPEN_PARENTHESIS);
			setState(307);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(299);
				value();
				setState(304);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(300);
					match(COMMA);
					setState(301);
					value();
					}
					}
					setState(306);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(309);
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
			setState(311);
			match(TUPLE_TYPE);
			setState(312);
			match(LESS_THAN);
			setState(313);
			match(OPEN_PARENTHESIS);
			setState(322);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(314);
				value();
				setState(319);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(315);
					match(COMMA);
					setState(316);
					value();
					}
					}
					setState(321);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(324);
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
			setState(326);
			match(LIST_TYPE);
			setState(327);
			match(LESS_THAN);
			setState(328);
			type();
			setState(329);
			match(GREATER_THAN);
			setState(330);
			match(OPEN_PARENTHESIS);
			setState(339);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(331);
				value();
				setState(336);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(332);
					match(COMMA);
					setState(333);
					value();
					}
					}
					setState(338);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(341);
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
			setState(343);
			match(SET_TYPE);
			setState(344);
			match(LESS_THAN);
			setState(345);
			type();
			setState(346);
			match(GREATER_THAN);
			setState(347);
			match(OPEN_PARENTHESIS);
			setState(356);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				setState(348);
				value();
				setState(353);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(349);
					match(COMMA);
					setState(350);
					value();
					}
					}
					setState(355);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(358);
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
			setState(360);
			match(MAP_TYPE);
			setState(361);
			match(LESS_THAN);
			setState(362);
			type();
			setState(363);
			match(COMMA);
			setState(364);
			type();
			setState(365);
			match(GREATER_THAN);
			setState(366);
			match(OPEN_PARENTHESIS);
			setState(373);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0) || _la==STRING_LITERAL) {
				{
				{
				setState(367);
				value();
				setState(368);
				match(COMMA);
				setState(369);
				value();
				}
				}
				setState(375);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(376);
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
			setState(378);
			match(DECIMAL_TYPE);
			setState(379);
			match(OPEN_PARENTHESIS);
			setState(380);
			match(STRING_LITERAL);
			setState(381);
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

	public static class Package_addressContext extends ParserRuleContext {
		public TerminalNode PACKAGE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public Package_addressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_package_address; }
	}

	public final Package_addressContext package_address() throws RecognitionException {
		Package_addressContext _localctx = new Package_addressContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_package_address);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
			match(PACKAGE_ADDRESS_TYPE);
			setState(384);
			match(OPEN_PARENTHESIS);
			setState(385);
			match(STRING_LITERAL);
			setState(386);
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

	public static class Component_addressContext extends ParserRuleContext {
		public TerminalNode COMPONENT_ADDRESS_TYPE() { return getToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public Component_addressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_component_address; }
	}

	public final Component_addressContext component_address() throws RecognitionException {
		Component_addressContext _localctx = new Component_addressContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_component_address);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(388);
			match(COMPONENT_ADDRESS_TYPE);
			setState(389);
			match(OPEN_PARENTHESIS);
			setState(390);
			match(STRING_LITERAL);
			setState(391);
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

	public static class Resource_addressContext extends ParserRuleContext {
		public TerminalNode RESOURCE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public Resource_addressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resource_address; }
	}

	public final Resource_addressContext resource_address() throws RecognitionException {
		Resource_addressContext _localctx = new Resource_addressContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_resource_address);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(393);
			match(RESOURCE_ADDRESS_TYPE);
			setState(394);
			match(OPEN_PARENTHESIS);
			setState(395);
			match(STRING_LITERAL);
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
		enterRule(_localctx, 62, RULE_hash);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			match(HASH_TYPE);
			setState(399);
			match(OPEN_PARENTHESIS);
			setState(400);
			match(STRING_LITERAL);
			setState(401);
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
		enterRule(_localctx, 64, RULE_bucket);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(403);
			match(BUCKET_TYPE);
			setState(404);
			match(OPEN_PARENTHESIS);
			setState(405);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(406);
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
		enterRule(_localctx, 66, RULE_proof);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
			match(PROOF_TYPE);
			setState(409);
			match(OPEN_PARENTHESIS);
			setState(410);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(411);
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

	public static class Non_fungible_idContext extends ParserRuleContext {
		public TerminalNode NON_FUNGIBLE_ID_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public Non_fungible_idContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_non_fungible_id; }
	}

	public final Non_fungible_idContext non_fungible_id() throws RecognitionException {
		Non_fungible_idContext _localctx = new Non_fungible_idContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_non_fungible_id);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			match(NON_FUNGIBLE_ID_TYPE);
			setState(414);
			match(OPEN_PARENTHESIS);
			setState(415);
			match(STRING_LITERAL);
			setState(416);
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

	public static class Non_fungible_addressContext extends ParserRuleContext {
		public TerminalNode NON_FUNGIBLE_ADDRESS_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public Non_fungible_addressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_non_fungible_address; }
	}

	public final Non_fungible_addressContext non_fungible_address() throws RecognitionException {
		Non_fungible_addressContext _localctx = new Non_fungible_addressContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_non_fungible_address);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(418);
			match(NON_FUNGIBLE_ADDRESS_TYPE);
			setState(419);
			match(OPEN_PARENTHESIS);
			setState(420);
			match(STRING_LITERAL);
			setState(421);
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
		enterRule(_localctx, 72, RULE_bytes);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(423);
			match(BYTES_TYPE);
			setState(424);
			match(OPEN_PARENTHESIS);
			setState(425);
			match(STRING_LITERAL);
			setState(426);
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
		enterRule(_localctx, 74, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << UNIT_TYPE) | (1L << BOOL_TYPE) | (1L << I8_TYPE) | (1L << I16_TYPE) | (1L << I32_TYPE) | (1L << I64_TYPE) | (1L << I128_TYPE) | (1L << U8_TYPE) | (1L << U16_TYPE) | (1L << U32_TYPE) | (1L << U64_TYPE) | (1L << U128_TYPE) | (1L << STRING_TYPE) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE) | (1L << OPTION_TYPE) | (1L << RESULT_TYPE) | (1L << SOME_TYPE) | (1L << NONE_TYPE) | (1L << OK_TYPE) | (1L << ERR_TYPE) | (1L << ARRAY_TYPE) | (1L << TUPLE_TYPE) | (1L << LIST_TYPE) | (1L << SET_TYPE) | (1L << MAP_TYPE) | (1L << DECIMAL_TYPE) | (1L << PACKAGE_ADDRESS_TYPE) | (1L << COMPONENT_ADDRESS_TYPE) | (1L << RESOURCE_ADDRESS_TYPE) | (1L << HASH_TYPE) | (1L << BUCKET_TYPE) | (1L << PROOF_TYPE) | (1L << NON_FUNGIBLE_ID_TYPE) | (1L << NON_FUNGIBLE_ADDRESS_TYPE) | (1L << BYTES_TYPE))) != 0)) ) {
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
		public Package_addressContext package_address() {
			return getRuleContext(Package_addressContext.class,0);
		}
		public Component_addressContext component_address() {
			return getRuleContext(Component_addressContext.class,0);
		}
		public Resource_addressContext resource_address() {
			return getRuleContext(Resource_addressContext.class,0);
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
		public Non_fungible_idContext non_fungible_id() {
			return getRuleContext(Non_fungible_idContext.class,0);
		}
		public Non_fungible_addressContext non_fungible_address() {
			return getRuleContext(Non_fungible_addressContext.class,0);
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
		enterRule(_localctx, 76, RULE_value);
		try {
			setState(465);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(430);
				unit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(431);
				bool();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(432);
				i8();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(433);
				i16();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(434);
				i32();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(435);
				i64();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(436);
				i128();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(437);
				u8();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(438);
				u16();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(439);
				u32();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(440);
				u64();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(441);
				u128();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(442);
				string();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(443);
				struct();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(444);
				enum_();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(445);
				option();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(446);
				some();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(447);
				none();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(448);
				ok();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(449);
				err();
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(450);
				array();
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(451);
				tuple();
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(452);
				list();
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(453);
				set();
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(454);
				map();
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(455);
				decimal();
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(456);
				package_address();
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(457);
				component_address();
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(458);
				resource_address();
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(459);
				hash();
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(460);
				bucket();
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(461);
				proof();
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(462);
				non_fungible_id();
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(463);
				non_fungible_address();
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(464);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3U\u01d6\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\3\2\7\2R\n\2\f\2\16"+
		"\2U\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\7\3^\n\3\f\3\16\3a\13\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\7\3i\n\3\f\3\16\3l\13\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u00c5\n\3\3\4\3\4\3\5\3\5\3\6"+
		"\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3"+
		"\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3\21\3\21\7\21\u00e6\n\21\f\21"+
		"\16\21\u00e9\13\21\5\21\u00eb\n\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\7\22\u00f6\n\22\f\22\16\22\u00f9\13\22\5\22\u00fb\n\22\3\22"+
		"\3\22\3\23\3\23\5\23\u0101\n\23\3\24\3\24\3\24\3\24\3\24\7\24\u0108\n"+
		"\24\f\24\16\24\u010b\13\24\3\24\3\24\3\25\3\25\3\26\3\26\3\26\3\26\3\26"+
		"\7\26\u0116\n\26\f\26\16\26\u0119\13\26\3\26\3\26\3\27\3\27\3\27\3\27"+
		"\3\27\7\27\u0122\n\27\f\27\16\27\u0125\13\27\3\27\3\27\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\7\30\u0131\n\30\f\30\16\30\u0134\13\30\5\30"+
		"\u0136\n\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\7\31\u0140\n\31\f"+
		"\31\16\31\u0143\13\31\5\31\u0145\n\31\3\31\3\31\3\32\3\32\3\32\3\32\3"+
		"\32\3\32\3\32\3\32\7\32\u0151\n\32\f\32\16\32\u0154\13\32\5\32\u0156\n"+
		"\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\7\33\u0162\n\33"+
		"\f\33\16\33\u0165\13\33\5\33\u0167\n\33\3\33\3\33\3\34\3\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\7\34\u0176\n\34\f\34\16\34\u0179\13"+
		"\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\37\3"+
		"\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3"+
		"#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3\'\3\'\3("+
		"\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3("+
		"\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\5(\u01d4\n(\3(\2\2)\2\4\6\b\n\f\16\20"+
		"\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLN\2\4\4\2\f\fPP\3"+
		"\2\21\64\2\u01f7\2S\3\2\2\2\4\u00c4\3\2\2\2\6\u00c6\3\2\2\2\b\u00c8\3"+
		"\2\2\2\n\u00ca\3\2\2\2\f\u00cc\3\2\2\2\16\u00ce\3\2\2\2\20\u00d0\3\2\2"+
		"\2\22\u00d2\3\2\2\2\24\u00d4\3\2\2\2\26\u00d6\3\2\2\2\30\u00d8\3\2\2\2"+
		"\32\u00da\3\2\2\2\34\u00dc\3\2\2\2\36\u00de\3\2\2\2 \u00e0\3\2\2\2\"\u00ee"+
		"\3\2\2\2$\u0100\3\2\2\2&\u0102\3\2\2\2(\u010e\3\2\2\2*\u0110\3\2\2\2,"+
		"\u011c\3\2\2\2.\u0128\3\2\2\2\60\u0139\3\2\2\2\62\u0148\3\2\2\2\64\u0159"+
		"\3\2\2\2\66\u016a\3\2\2\28\u017c\3\2\2\2:\u0181\3\2\2\2<\u0186\3\2\2\2"+
		">\u018b\3\2\2\2@\u0190\3\2\2\2B\u0195\3\2\2\2D\u019a\3\2\2\2F\u019f\3"+
		"\2\2\2H\u01a4\3\2\2\2J\u01a9\3\2\2\2L\u01ae\3\2\2\2N\u01d3\3\2\2\2PR\5"+
		"\4\3\2QP\3\2\2\2RU\3\2\2\2SQ\3\2\2\2ST\3\2\2\2TV\3\2\2\2US\3\2\2\2VW\7"+
		"\2\2\3W\3\3\2\2\2XY\7L\2\2YZ\5:\36\2Z[\5\36\20\2[_\5\36\20\2\\^\5N(\2"+
		"]\\\3\2\2\2^a\3\2\2\2_]\3\2\2\2_`\3\2\2\2`b\3\2\2\2a_\3\2\2\2bc\7:\2\2"+
		"c\u00c5\3\2\2\2de\7M\2\2ef\5<\37\2fj\5\36\20\2gi\5N(\2hg\3\2\2\2il\3\2"+
		"\2\2jh\3\2\2\2jk\3\2\2\2km\3\2\2\2lj\3\2\2\2mn\7:\2\2n\u00c5\3\2\2\2o"+
		"p\7N\2\2pq\5<\37\2qr\5\36\20\2rs\7:\2\2s\u00c5\3\2\2\2tu\7;\2\2uv\5> "+
		"\2vw\5B\"\2wx\7:\2\2x\u00c5\3\2\2\2yz\7<\2\2z{\58\35\2{|\5> \2|}\5B\""+
		"\2}~\7:\2\2~\u00c5\3\2\2\2\177\u0080\7=\2\2\u0080\u0081\5\64\33\2\u0081"+
		"\u0082\5> \2\u0082\u0083\5B\"\2\u0083\u0084\7:\2\2\u0084\u00c5\3\2\2\2"+
		"\u0085\u0086\7A\2\2\u0086\u0087\5B\"\2\u0087\u0088\7:\2\2\u0088\u00c5"+
		"\3\2\2\2\u0089\u008a\7>\2\2\u008a\u008b\5> \2\u008b\u008c\7:\2\2\u008c"+
		"\u00c5\3\2\2\2\u008d\u008e\7?\2\2\u008e\u008f\58\35\2\u008f\u0090\5> "+
		"\2\u0090\u0091\7:\2\2\u0091\u00c5\3\2\2\2\u0092\u0093\7@\2\2\u0093\u0094"+
		"\5\64\33\2\u0094\u0095\5> \2\u0095\u0096\7:\2\2\u0096\u00c5\3\2\2\2\u0097"+
		"\u0098\7B\2\2\u0098\u0099\5D#\2\u0099\u009a\7:\2\2\u009a\u00c5\3\2\2\2"+
		"\u009b\u009c\7C\2\2\u009c\u009d\5D#\2\u009d\u009e\7:\2\2\u009e\u00c5\3"+
		"\2\2\2\u009f\u00a0\7E\2\2\u00a0\u00a1\5> \2\u00a1\u00a2\5D#\2\u00a2\u00a3"+
		"\7:\2\2\u00a3\u00c5\3\2\2\2\u00a4\u00a5\7F\2\2\u00a5\u00a6\58\35\2\u00a6"+
		"\u00a7\5> \2\u00a7\u00a8\5D#\2\u00a8\u00a9\7:\2\2\u00a9\u00c5\3\2\2\2"+
		"\u00aa\u00ab\7G\2\2\u00ab\u00ac\5\64\33\2\u00ac\u00ad\5> \2\u00ad\u00ae"+
		"\5D#\2\u00ae\u00af\7:\2\2\u00af\u00c5\3\2\2\2\u00b0\u00b1\7H\2\2\u00b1"+
		"\u00b2\5B\"\2\u00b2\u00b3\5D#\2\u00b3\u00b4\7:\2\2\u00b4\u00c5\3\2\2\2"+
		"\u00b5\u00b6\7I\2\2\u00b6\u00b7\5D#\2\u00b7\u00b8\5D#\2\u00b8\u00b9\7"+
		":\2\2\u00b9\u00c5\3\2\2\2\u00ba\u00bb\7J\2\2\u00bb\u00bc\5D#\2\u00bc\u00bd"+
		"\7:\2\2\u00bd\u00c5\3\2\2\2\u00be\u00bf\7K\2\2\u00bf\u00c5\7:\2\2\u00c0"+
		"\u00c1\7O\2\2\u00c1\u00c2\5J&\2\u00c2\u00c3\7:\2\2\u00c3\u00c5\3\2\2\2"+
		"\u00c4X\3\2\2\2\u00c4d\3\2\2\2\u00c4o\3\2\2\2\u00c4t\3\2\2\2\u00c4y\3"+
		"\2\2\2\u00c4\177\3\2\2\2\u00c4\u0085\3\2\2\2\u00c4\u0089\3\2\2\2\u00c4"+
		"\u008d\3\2\2\2\u00c4\u0092\3\2\2\2\u00c4\u0097\3\2\2\2\u00c4\u009b\3\2"+
		"\2\2\u00c4\u009f\3\2\2\2\u00c4\u00a4\3\2\2\2\u00c4\u00aa\3\2\2\2\u00c4"+
		"\u00b0\3\2\2\2\u00c4\u00b5\3\2\2\2\u00c4\u00ba\3\2\2\2\u00c4\u00be\3\2"+
		"\2\2\u00c4\u00c0\3\2\2\2\u00c5\5\3\2\2\2\u00c6\u00c7\7\3\2\2\u00c7\7\3"+
		"\2\2\2\u00c8\u00c9\7\4\2\2\u00c9\t\3\2\2\2\u00ca\u00cb\7\5\2\2\u00cb\13"+
		"\3\2\2\2\u00cc\u00cd\7\6\2\2\u00cd\r\3\2\2\2\u00ce\u00cf\7\7\2\2\u00cf"+
		"\17\3\2\2\2\u00d0\u00d1\7\b\2\2\u00d1\21\3\2\2\2\u00d2\u00d3\7\t\2\2\u00d3"+
		"\23\3\2\2\2\u00d4\u00d5\7\n\2\2\u00d5\25\3\2\2\2\u00d6\u00d7\7\13\2\2"+
		"\u00d7\27\3\2\2\2\u00d8\u00d9\7\f\2\2\u00d9\31\3\2\2\2\u00da\u00db\7\r"+
		"\2\2\u00db\33\3\2\2\2\u00dc\u00dd\7\16\2\2\u00dd\35\3\2\2\2\u00de\u00df"+
		"\7P\2\2\u00df\37\3\2\2\2\u00e0\u00e1\7\36\2\2\u00e1\u00ea\7\65\2\2\u00e2"+
		"\u00e7\5N(\2\u00e3\u00e4\79\2\2\u00e4\u00e6\5N(\2\u00e5\u00e3\3\2\2\2"+
		"\u00e6\u00e9\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00eb"+
		"\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea\u00e2\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb"+
		"\u00ec\3\2\2\2\u00ec\u00ed\7\66\2\2\u00ed!\3\2\2\2\u00ee\u00ef\7\37\2"+
		"\2\u00ef\u00f0\7\65\2\2\u00f0\u00f1\5\36\20\2\u00f1\u00fa\79\2\2\u00f2"+
		"\u00f7\5N(\2\u00f3\u00f4\79\2\2\u00f4\u00f6\5N(\2\u00f5\u00f3\3\2\2\2"+
		"\u00f6\u00f9\3\2\2\2\u00f7\u00f5\3\2\2\2\u00f7\u00f8\3\2\2\2\u00f8\u00fb"+
		"\3\2\2\2\u00f9\u00f7\3\2\2\2\u00fa\u00f2\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb"+
		"\u00fc\3\2\2\2\u00fc\u00fd\7\66\2\2\u00fd#\3\2\2\2\u00fe\u0101\5&\24\2"+
		"\u00ff\u0101\5(\25\2\u0100\u00fe\3\2\2\2\u0100\u00ff\3\2\2\2\u0101%\3"+
		"\2\2\2\u0102\u0103\7\"\2\2\u0103\u0104\7\65\2\2\u0104\u0109\5N(\2\u0105"+
		"\u0106\79\2\2\u0106\u0108\5N(\2\u0107\u0105\3\2\2\2\u0108\u010b\3\2\2"+
		"\2\u0109\u0107\3\2\2\2\u0109\u010a\3\2\2\2\u010a\u010c\3\2\2\2\u010b\u0109"+
		"\3\2\2\2\u010c\u010d\7\66\2\2\u010d\'\3\2\2\2\u010e\u010f\7#\2\2\u010f"+
		")\3\2\2\2\u0110\u0111\7$\2\2\u0111\u0112\7\65\2\2\u0112\u0117\5N(\2\u0113"+
		"\u0114\79\2\2\u0114\u0116\5N(\2\u0115\u0113\3\2\2\2\u0116\u0119\3\2\2"+
		"\2\u0117\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u011a\3\2\2\2\u0119\u0117"+
		"\3\2\2\2\u011a\u011b\7\66\2\2\u011b+\3\2\2\2\u011c\u011d\7%\2\2\u011d"+
		"\u011e\7\65\2\2\u011e\u0123\5N(\2\u011f\u0120\79\2\2\u0120\u0122\5N(\2"+
		"\u0121\u011f\3\2\2\2\u0122\u0125\3\2\2\2\u0123\u0121\3\2\2\2\u0123\u0124"+
		"\3\2\2\2\u0124\u0126\3\2\2\2\u0125\u0123\3\2\2\2\u0126\u0127\7\66\2\2"+
		"\u0127-\3\2\2\2\u0128\u0129\7&\2\2\u0129\u012a\7\67\2\2\u012a\u012b\5"+
		"L\'\2\u012b\u012c\78\2\2\u012c\u0135\7\65\2\2\u012d\u0132\5N(\2\u012e"+
		"\u012f\79\2\2\u012f\u0131\5N(\2\u0130\u012e\3\2\2\2\u0131\u0134\3\2\2"+
		"\2\u0132\u0130\3\2\2\2\u0132\u0133\3\2\2\2\u0133\u0136\3\2\2\2\u0134\u0132"+
		"\3\2\2\2\u0135\u012d\3\2\2\2\u0135\u0136\3\2\2\2\u0136\u0137\3\2\2\2\u0137"+
		"\u0138\7\66\2\2\u0138/\3\2\2\2\u0139\u013a\7\'\2\2\u013a\u013b\7\67\2"+
		"\2\u013b\u0144\7\65\2\2\u013c\u0141\5N(\2\u013d\u013e\79\2\2\u013e\u0140"+
		"\5N(\2\u013f\u013d\3\2\2\2\u0140\u0143\3\2\2\2\u0141\u013f\3\2\2\2\u0141"+
		"\u0142\3\2\2\2\u0142\u0145\3\2\2\2\u0143\u0141\3\2\2\2\u0144\u013c\3\2"+
		"\2\2\u0144\u0145\3\2\2\2\u0145\u0146\3\2\2\2\u0146\u0147\7\66\2\2\u0147"+
		"\61\3\2\2\2\u0148\u0149\7(\2\2\u0149\u014a\7\67\2\2\u014a\u014b\5L\'\2"+
		"\u014b\u014c\78\2\2\u014c\u0155\7\65\2\2\u014d\u0152\5N(\2\u014e\u014f"+
		"\79\2\2\u014f\u0151\5N(\2\u0150\u014e\3\2\2\2\u0151\u0154\3\2\2\2\u0152"+
		"\u0150\3\2\2\2\u0152\u0153\3\2\2\2\u0153\u0156\3\2\2\2\u0154\u0152\3\2"+
		"\2\2\u0155\u014d\3\2\2\2\u0155\u0156\3\2\2\2\u0156\u0157\3\2\2\2\u0157"+
		"\u0158\7\66\2\2\u0158\63\3\2\2\2\u0159\u015a\7)\2\2\u015a\u015b\7\67\2"+
		"\2\u015b\u015c\5L\'\2\u015c\u015d\78\2\2\u015d\u0166\7\65\2\2\u015e\u0163"+
		"\5N(\2\u015f\u0160\79\2\2\u0160\u0162\5N(\2\u0161\u015f\3\2\2\2\u0162"+
		"\u0165\3\2\2\2\u0163\u0161\3\2\2\2\u0163\u0164\3\2\2\2\u0164\u0167\3\2"+
		"\2\2\u0165\u0163\3\2\2\2\u0166\u015e\3\2\2\2\u0166\u0167\3\2\2\2\u0167"+
		"\u0168\3\2\2\2\u0168\u0169\7\66\2\2\u0169\65\3\2\2\2\u016a\u016b\7*\2"+
		"\2\u016b\u016c\7\67\2\2\u016c\u016d\5L\'\2\u016d\u016e\79\2\2\u016e\u016f"+
		"\5L\'\2\u016f\u0170\78\2\2\u0170\u0177\7\65\2\2\u0171\u0172\5N(\2\u0172"+
		"\u0173\79\2\2\u0173\u0174\5N(\2\u0174\u0176\3\2\2\2\u0175\u0171\3\2\2"+
		"\2\u0176\u0179\3\2\2\2\u0177\u0175\3\2\2\2\u0177\u0178\3\2\2\2\u0178\u017a"+
		"\3\2\2\2\u0179\u0177\3\2\2\2\u017a\u017b\7\66\2\2\u017b\67\3\2\2\2\u017c"+
		"\u017d\7+\2\2\u017d\u017e\7\65\2\2\u017e\u017f\7P\2\2\u017f\u0180\7\66"+
		"\2\2\u01809\3\2\2\2\u0181\u0182\7,\2\2\u0182\u0183\7\65\2\2\u0183\u0184"+
		"\7P\2\2\u0184\u0185\7\66\2\2\u0185;\3\2\2\2\u0186\u0187\7-\2\2\u0187\u0188"+
		"\7\65\2\2\u0188\u0189\7P\2\2\u0189\u018a\7\66\2\2\u018a=\3\2\2\2\u018b"+
		"\u018c\7.\2\2\u018c\u018d\7\65\2\2\u018d\u018e\7P\2\2\u018e\u018f\7\66"+
		"\2\2\u018f?\3\2\2\2\u0190\u0191\7/\2\2\u0191\u0192\7\65\2\2\u0192\u0193"+
		"\7P\2\2\u0193\u0194\7\66\2\2\u0194A\3\2\2\2\u0195\u0196\7\60\2\2\u0196"+
		"\u0197\7\65\2\2\u0197\u0198\t\2\2\2\u0198\u0199\7\66\2\2\u0199C\3\2\2"+
		"\2\u019a\u019b\7\61\2\2\u019b\u019c\7\65\2\2\u019c\u019d\t\2\2\2\u019d"+
		"\u019e\7\66\2\2\u019eE\3\2\2\2\u019f\u01a0\7\62\2\2\u01a0\u01a1\7\65\2"+
		"\2\u01a1\u01a2\7P\2\2\u01a2\u01a3\7\66\2\2\u01a3G\3\2\2\2\u01a4\u01a5"+
		"\7\63\2\2\u01a5\u01a6\7\65\2\2\u01a6\u01a7\7P\2\2\u01a7\u01a8\7\66\2\2"+
		"\u01a8I\3\2\2\2\u01a9\u01aa\7\64\2\2\u01aa\u01ab\7\65\2\2\u01ab\u01ac"+
		"\7P\2\2\u01ac\u01ad\7\66\2\2\u01adK\3\2\2\2\u01ae\u01af\t\3\2\2\u01af"+
		"M\3\2\2\2\u01b0\u01d4\5\6\4\2\u01b1\u01d4\5\b\5\2\u01b2\u01d4\5\n\6\2"+
		"\u01b3\u01d4\5\f\7\2\u01b4\u01d4\5\16\b\2\u01b5\u01d4\5\20\t\2\u01b6\u01d4"+
		"\5\22\n\2\u01b7\u01d4\5\24\13\2\u01b8\u01d4\5\26\f\2\u01b9\u01d4\5\30"+
		"\r\2\u01ba\u01d4\5\32\16\2\u01bb\u01d4\5\34\17\2\u01bc\u01d4\5\36\20\2"+
		"\u01bd\u01d4\5 \21\2\u01be\u01d4\5\"\22\2\u01bf\u01d4\5$\23\2\u01c0\u01d4"+
		"\5&\24\2\u01c1\u01d4\5(\25\2\u01c2\u01d4\5*\26\2\u01c3\u01d4\5,\27\2\u01c4"+
		"\u01d4\5.\30\2\u01c5\u01d4\5\60\31\2\u01c6\u01d4\5\62\32\2\u01c7\u01d4"+
		"\5\64\33\2\u01c8\u01d4\5\66\34\2\u01c9\u01d4\58\35\2\u01ca\u01d4\5:\36"+
		"\2\u01cb\u01d4\5<\37\2\u01cc\u01d4\5> \2\u01cd\u01d4\5@!\2\u01ce\u01d4"+
		"\5B\"\2\u01cf\u01d4\5D#\2\u01d0\u01d4\5F$\2\u01d1\u01d4\5H%\2\u01d2\u01d4"+
		"\5J&\2\u01d3\u01b0\3\2\2\2\u01d3\u01b1\3\2\2\2\u01d3\u01b2\3\2\2\2\u01d3"+
		"\u01b3\3\2\2\2\u01d3\u01b4\3\2\2\2\u01d3\u01b5\3\2\2\2\u01d3\u01b6\3\2"+
		"\2\2\u01d3\u01b7\3\2\2\2\u01d3\u01b8\3\2\2\2\u01d3\u01b9\3\2\2\2\u01d3"+
		"\u01ba\3\2\2\2\u01d3\u01bb\3\2\2\2\u01d3\u01bc\3\2\2\2\u01d3\u01bd\3\2"+
		"\2\2\u01d3\u01be\3\2\2\2\u01d3\u01bf\3\2\2\2\u01d3\u01c0\3\2\2\2\u01d3"+
		"\u01c1\3\2\2\2\u01d3\u01c2\3\2\2\2\u01d3\u01c3\3\2\2\2\u01d3\u01c4\3\2"+
		"\2\2\u01d3\u01c5\3\2\2\2\u01d3\u01c6\3\2\2\2\u01d3\u01c7\3\2\2\2\u01d3"+
		"\u01c8\3\2\2\2\u01d3\u01c9\3\2\2\2\u01d3\u01ca\3\2\2\2\u01d3\u01cb\3\2"+
		"\2\2\u01d3\u01cc\3\2\2\2\u01d3\u01cd\3\2\2\2\u01d3\u01ce\3\2\2\2\u01d3"+
		"\u01cf\3\2\2\2\u01d3\u01d0\3\2\2\2\u01d3\u01d1\3\2\2\2\u01d3\u01d2\3\2"+
		"\2\2\u01d4O\3\2\2\2\30S_j\u00c4\u00e7\u00ea\u00f7\u00fa\u0100\u0109\u0117"+
		"\u0123\u0132\u0135\u0141\u0144\u0152\u0155\u0163\u0166\u0177\u01d3";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}