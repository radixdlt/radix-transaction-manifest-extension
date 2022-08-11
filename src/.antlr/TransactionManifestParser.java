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
		U128_LITERAL=12, SAFE_I8_LITERAL=13, SAFE_I16_LITERAL=14, SAFE_I32_LITERAL=15, 
		SAFE_I64_LITERAL=16, SAFE_I128_LITERAL=17, SAFE_I256_LITERAL=18, SAFE_I384_LITERAL=19, 
		SAFE_I512_LITERAL=20, SAFE_U8_LITERAL=21, SAFE_U16_LITERAL=22, SAFE_U32_LITERAL=23, 
		SAFE_U64_LITERAL=24, SAFE_U128_LITERAL=25, SAFE_U384_LITERAL=26, SAFE_U256_LITERAL=27, 
		SAFE_U512_LITERAL=28, TRUE=29, FALSE=30, UNIT_TYPE=31, BOOL_TYPE=32, I8_TYPE=33, 
		I16_TYPE=34, I32_TYPE=35, I64_TYPE=36, I128_TYPE=37, U8_TYPE=38, U16_TYPE=39, 
		U32_TYPE=40, U64_TYPE=41, U128_TYPE=42, SAFE_I8_TYPE=43, SAFE_I16_TYPE=44, 
		SAFE_I32_TYPE=45, SAFE_I64_TYPE=46, SAFE_I128_TYPE=47, SAFE_I256_TYPE=48, 
		SAFE_I384_TYPE=49, SAFE_I512_TYPE=50, SAFE_U8_TYPE=51, SAFE_U16_TYPE=52, 
		SAFE_U32_TYPE=53, SAFE_U64_TYPE=54, SAFE_U128_TYPE=55, SAFE_U384_TYPE=56, 
		SAFE_U256_TYPE=57, SAFE_U512_TYPE=58, STRING_TYPE=59, STRUCT_TYPE=60, 
		ENUM_TYPE=61, OPTION_TYPE=62, RESULT_TYPE=63, SOME_TYPE=64, NONE_TYPE=65, 
		OK_TYPE=66, ERR_TYPE=67, ARRAY_TYPE=68, TUPLE_TYPE=69, LIST_TYPE=70, SET_TYPE=71, 
		MAP_TYPE=72, DECIMAL_TYPE=73, PRECISE_DECIMAL_TYPE=74, PACKAGE_ADDRESS_TYPE=75, 
		COMPONENT_ADDRESS_TYPE=76, RESOURCE_ADDRESS_TYPE=77, HASH_TYPE=78, BUCKET_TYPE=79, 
		PROOF_TYPE=80, NON_FUNGIBLE_ID_TYPE=81, NON_FUNGIBLE_ADDRESS_TYPE=82, 
		BYTES_TYPE=83, OPEN_PARENTHESIS=84, CLOED_PARENTHESIS=85, LESS_THAN=86, 
		GREATER_THAN=87, COMMA=88, SEMICOLON=89, TAKE_FROM_WORKTOP=90, TAKE_FROM_WORKTOP_BY_AMOUNT=91, 
		TAKE_FROM_WORKTOP_BY_IDS=92, ASSERT_WORKTOP_CONTAINS=93, ASSERT_WORKTOP_CONTAINS_BY_AMOUNT=94, 
		ASSERT_WORKTOP_CONTAINS_BY_IDS=95, RETURN_TO_WORKTOP=96, POP_FROM_AUTH_ZONE=97, 
		PUSH_TO_AUTH_ZONE=98, CLEAR_AUTHZONE=99, CREATE_PROOF_FROM_AUTH_ZONE=100, 
		CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT=101, CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS=102, 
		CREATE_PROOF_FROM_BUCKET=103, CLONE_PROOF=104, DROP_PROOF=105, DROP_ALL_PROOFS=106, 
		CALL_FUNCTION=107, CALL_METHOD=108, CALL_METHOD_WITH_ALL_RESOURCES=109, 
		PUBLISH_PACKAGE=110, STRING_LITERAL=111, DIGIT=112, LETTER=113, NUMBER=114, 
		WS=115, COMMENT=116;
	public static final int
		RULE_manifest = 0, RULE_manifestInstruction = 1, RULE_unit = 2, RULE_bool = 3, 
		RULE_i8 = 4, RULE_i16 = 5, RULE_i32 = 6, RULE_i64 = 7, RULE_i128 = 8, 
		RULE_u8 = 9, RULE_u16 = 10, RULE_u32 = 11, RULE_u64 = 12, RULE_u128 = 13, 
		RULE_safeI8 = 14, RULE_safeI16 = 15, RULE_safeI32 = 16, RULE_safeI64 = 17, 
		RULE_safeI128 = 18, RULE_safeI256 = 19, RULE_safeI384 = 20, RULE_safeI512 = 21, 
		RULE_safeU8 = 22, RULE_safeU16 = 23, RULE_safeU32 = 24, RULE_safeU64 = 25, 
		RULE_safeU128 = 26, RULE_safeU256 = 27, RULE_safeU384 = 28, RULE_safeU512 = 29, 
		RULE_string = 30, RULE_struct = 31, RULE_enum_ = 32, RULE_option = 33, 
		RULE_some = 34, RULE_none = 35, RULE_ok = 36, RULE_err = 37, RULE_array = 38, 
		RULE_tuple = 39, RULE_list = 40, RULE_set = 41, RULE_map = 42, RULE_decimal = 43, 
		RULE_preciseDecimal = 44, RULE_packageAddress = 45, RULE_componentAddress = 46, 
		RULE_resourceAddress = 47, RULE_hash = 48, RULE_bucket = 49, RULE_proof = 50, 
		RULE_nonFungible_id = 51, RULE_nonFungibleAddress = 52, RULE_bytes = 53, 
		RULE_type = 54, RULE_value = 55;
	private static String[] makeRuleNames() {
		return new String[] {
			"manifest", "manifestInstruction", "unit", "bool", "i8", "i16", "i32", 
			"i64", "i128", "u8", "u16", "u32", "u64", "u128", "safeI8", "safeI16", 
			"safeI32", "safeI64", "safeI128", "safeI256", "safeI384", "safeI512", 
			"safeU8", "safeU16", "safeU32", "safeU64", "safeU128", "safeU256", "safeU384", 
			"safeU512", "string", "struct", "enum_", "option", "some", "none", "ok", 
			"err", "array", "tuple", "list", "set", "map", "decimal", "preciseDecimal", 
			"packageAddress", "componentAddress", "resourceAddress", "hash", "bucket", 
			"proof", "nonFungible_id", "nonFungibleAddress", "bytes", "type", "value"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'()'", null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "'true'", "'false'", "'Unit'", "'Bool'", 
			"'I8'", "'I16'", "'I32'", "'I64'", "'I128'", "'U8'", "'U16'", "'U32'", 
			"'U64'", "'U128'", "'SafeI8'", "'SafeI16'", "'SafeI32'", "'SafeI64'", 
			"'SafeI128'", "'SafeI256'", "'SafeI384'", "'SafeI512'", "'SafeU8'", "'SafeU16'", 
			"'SafeU32'", "'SafeU64'", "'SafeU128'", "'SafeU384'", "'SafeU256'", "'SafeU512'", 
			"'String'", "'Struct'", "'Enum'", "'Option'", "'Result'", "'Some'", "'None'", 
			"'Ok'", "'Err'", "'Array'", "'Tuple'", "'List'", "'Set'", "'Map'", "'Decimal'", 
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
			"U64_LITERAL", "U128_LITERAL", "SAFE_I8_LITERAL", "SAFE_I16_LITERAL", 
			"SAFE_I32_LITERAL", "SAFE_I64_LITERAL", "SAFE_I128_LITERAL", "SAFE_I256_LITERAL", 
			"SAFE_I384_LITERAL", "SAFE_I512_LITERAL", "SAFE_U8_LITERAL", "SAFE_U16_LITERAL", 
			"SAFE_U32_LITERAL", "SAFE_U64_LITERAL", "SAFE_U128_LITERAL", "SAFE_U384_LITERAL", 
			"SAFE_U256_LITERAL", "SAFE_U512_LITERAL", "TRUE", "FALSE", "UNIT_TYPE", 
			"BOOL_TYPE", "I8_TYPE", "I16_TYPE", "I32_TYPE", "I64_TYPE", "I128_TYPE", 
			"U8_TYPE", "U16_TYPE", "U32_TYPE", "U64_TYPE", "U128_TYPE", "SAFE_I8_TYPE", 
			"SAFE_I16_TYPE", "SAFE_I32_TYPE", "SAFE_I64_TYPE", "SAFE_I128_TYPE", 
			"SAFE_I256_TYPE", "SAFE_I384_TYPE", "SAFE_I512_TYPE", "SAFE_U8_TYPE", 
			"SAFE_U16_TYPE", "SAFE_U32_TYPE", "SAFE_U64_TYPE", "SAFE_U128_TYPE", 
			"SAFE_U384_TYPE", "SAFE_U256_TYPE", "SAFE_U512_TYPE", "STRING_TYPE", 
			"STRUCT_TYPE", "ENUM_TYPE", "OPTION_TYPE", "RESULT_TYPE", "SOME_TYPE", 
			"NONE_TYPE", "OK_TYPE", "ERR_TYPE", "ARRAY_TYPE", "TUPLE_TYPE", "LIST_TYPE", 
			"SET_TYPE", "MAP_TYPE", "DECIMAL_TYPE", "PRECISE_DECIMAL_TYPE", "PACKAGE_ADDRESS_TYPE", 
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
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & ((1L << (TAKE_FROM_WORKTOP - 90)) | (1L << (TAKE_FROM_WORKTOP_BY_AMOUNT - 90)) | (1L << (TAKE_FROM_WORKTOP_BY_IDS - 90)) | (1L << (ASSERT_WORKTOP_CONTAINS - 90)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 90)) | (1L << (ASSERT_WORKTOP_CONTAINS_BY_IDS - 90)) | (1L << (RETURN_TO_WORKTOP - 90)) | (1L << (POP_FROM_AUTH_ZONE - 90)) | (1L << (PUSH_TO_AUTH_ZONE - 90)) | (1L << (CLEAR_AUTHZONE - 90)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE - 90)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 90)) | (1L << (CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 90)) | (1L << (CREATE_PROOF_FROM_BUCKET - 90)) | (1L << (CLONE_PROOF - 90)) | (1L << (DROP_PROOF - 90)) | (1L << (DROP_ALL_PROOFS - 90)) | (1L << (CALL_FUNCTION - 90)) | (1L << (CALL_METHOD - 90)) | (1L << (CALL_METHOD_WITH_ALL_RESOURCES - 90)) | (1L << (PUBLISH_PACKAGE - 90)))) != 0)) {
				{
				{
				setState(112);
				manifestInstruction();
				}
				}
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(118);
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
			setState(230);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CALL_FUNCTION:
				enterOuterAlt(_localctx, 1);
				{
				setState(120);
				match(CALL_FUNCTION);
				setState(121);
				packageAddress();
				setState(122);
				string();
				setState(123);
				string();
				setState(127);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << SAFE_I8_LITERAL) | (1L << SAFE_I16_LITERAL) | (1L << SAFE_I32_LITERAL) | (1L << SAFE_I64_LITERAL) | (1L << SAFE_I128_LITERAL) | (1L << SAFE_I256_LITERAL) | (1L << SAFE_I384_LITERAL) | (1L << SAFE_I512_LITERAL) | (1L << SAFE_U8_LITERAL) | (1L << SAFE_U16_LITERAL) | (1L << SAFE_U32_LITERAL) | (1L << SAFE_U64_LITERAL) | (1L << SAFE_U128_LITERAL) | (1L << SAFE_U384_LITERAL) | (1L << SAFE_U256_LITERAL) | (1L << SAFE_U512_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (SOME_TYPE - 64)) | (1L << (NONE_TYPE - 64)) | (1L << (OK_TYPE - 64)) | (1L << (ERR_TYPE - 64)) | (1L << (ARRAY_TYPE - 64)) | (1L << (TUPLE_TYPE - 64)) | (1L << (LIST_TYPE - 64)) | (1L << (SET_TYPE - 64)) | (1L << (MAP_TYPE - 64)) | (1L << (DECIMAL_TYPE - 64)) | (1L << (PRECISE_DECIMAL_TYPE - 64)) | (1L << (PACKAGE_ADDRESS_TYPE - 64)) | (1L << (COMPONENT_ADDRESS_TYPE - 64)) | (1L << (RESOURCE_ADDRESS_TYPE - 64)) | (1L << (HASH_TYPE - 64)) | (1L << (BUCKET_TYPE - 64)) | (1L << (PROOF_TYPE - 64)) | (1L << (NON_FUNGIBLE_ID_TYPE - 64)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 64)) | (1L << (BYTES_TYPE - 64)) | (1L << (STRING_LITERAL - 64)))) != 0)) {
					{
					{
					setState(124);
					value();
					}
					}
					setState(129);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(130);
				match(SEMICOLON);
				}
				break;
			case CALL_METHOD:
				enterOuterAlt(_localctx, 2);
				{
				setState(132);
				match(CALL_METHOD);
				setState(133);
				componentAddress();
				setState(134);
				string();
				setState(138);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << SAFE_I8_LITERAL) | (1L << SAFE_I16_LITERAL) | (1L << SAFE_I32_LITERAL) | (1L << SAFE_I64_LITERAL) | (1L << SAFE_I128_LITERAL) | (1L << SAFE_I256_LITERAL) | (1L << SAFE_I384_LITERAL) | (1L << SAFE_I512_LITERAL) | (1L << SAFE_U8_LITERAL) | (1L << SAFE_U16_LITERAL) | (1L << SAFE_U32_LITERAL) | (1L << SAFE_U64_LITERAL) | (1L << SAFE_U128_LITERAL) | (1L << SAFE_U384_LITERAL) | (1L << SAFE_U256_LITERAL) | (1L << SAFE_U512_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (SOME_TYPE - 64)) | (1L << (NONE_TYPE - 64)) | (1L << (OK_TYPE - 64)) | (1L << (ERR_TYPE - 64)) | (1L << (ARRAY_TYPE - 64)) | (1L << (TUPLE_TYPE - 64)) | (1L << (LIST_TYPE - 64)) | (1L << (SET_TYPE - 64)) | (1L << (MAP_TYPE - 64)) | (1L << (DECIMAL_TYPE - 64)) | (1L << (PRECISE_DECIMAL_TYPE - 64)) | (1L << (PACKAGE_ADDRESS_TYPE - 64)) | (1L << (COMPONENT_ADDRESS_TYPE - 64)) | (1L << (RESOURCE_ADDRESS_TYPE - 64)) | (1L << (HASH_TYPE - 64)) | (1L << (BUCKET_TYPE - 64)) | (1L << (PROOF_TYPE - 64)) | (1L << (NON_FUNGIBLE_ID_TYPE - 64)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 64)) | (1L << (BYTES_TYPE - 64)) | (1L << (STRING_LITERAL - 64)))) != 0)) {
					{
					{
					setState(135);
					value();
					}
					}
					setState(140);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(141);
				match(SEMICOLON);
				}
				break;
			case CALL_METHOD_WITH_ALL_RESOURCES:
				enterOuterAlt(_localctx, 3);
				{
				setState(143);
				match(CALL_METHOD_WITH_ALL_RESOURCES);
				setState(144);
				componentAddress();
				setState(145);
				string();
				setState(146);
				match(SEMICOLON);
				}
				break;
			case TAKE_FROM_WORKTOP:
				enterOuterAlt(_localctx, 4);
				{
				setState(148);
				match(TAKE_FROM_WORKTOP);
				setState(149);
				resourceAddress();
				setState(150);
				bucket();
				setState(151);
				match(SEMICOLON);
				}
				break;
			case TAKE_FROM_WORKTOP_BY_AMOUNT:
				enterOuterAlt(_localctx, 5);
				{
				setState(153);
				match(TAKE_FROM_WORKTOP_BY_AMOUNT);
				setState(154);
				decimal();
				setState(155);
				resourceAddress();
				setState(156);
				bucket();
				setState(157);
				match(SEMICOLON);
				}
				break;
			case TAKE_FROM_WORKTOP_BY_IDS:
				enterOuterAlt(_localctx, 6);
				{
				setState(159);
				match(TAKE_FROM_WORKTOP_BY_IDS);
				setState(160);
				set();
				setState(161);
				resourceAddress();
				setState(162);
				bucket();
				setState(163);
				match(SEMICOLON);
				}
				break;
			case RETURN_TO_WORKTOP:
				enterOuterAlt(_localctx, 7);
				{
				setState(165);
				match(RETURN_TO_WORKTOP);
				setState(166);
				bucket();
				setState(167);
				match(SEMICOLON);
				}
				break;
			case ASSERT_WORKTOP_CONTAINS:
				enterOuterAlt(_localctx, 8);
				{
				setState(169);
				match(ASSERT_WORKTOP_CONTAINS);
				setState(170);
				resourceAddress();
				setState(171);
				match(SEMICOLON);
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
				enterOuterAlt(_localctx, 9);
				{
				setState(173);
				match(ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
				setState(174);
				decimal();
				setState(175);
				resourceAddress();
				setState(176);
				match(SEMICOLON);
				}
				break;
			case ASSERT_WORKTOP_CONTAINS_BY_IDS:
				enterOuterAlt(_localctx, 10);
				{
				setState(178);
				match(ASSERT_WORKTOP_CONTAINS_BY_IDS);
				setState(179);
				set();
				setState(180);
				resourceAddress();
				setState(181);
				match(SEMICOLON);
				}
				break;
			case POP_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 11);
				{
				setState(183);
				match(POP_FROM_AUTH_ZONE);
				setState(184);
				proof();
				setState(185);
				match(SEMICOLON);
				}
				break;
			case PUSH_TO_AUTH_ZONE:
				enterOuterAlt(_localctx, 12);
				{
				setState(187);
				match(PUSH_TO_AUTH_ZONE);
				setState(188);
				proof();
				setState(189);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE:
				enterOuterAlt(_localctx, 13);
				{
				setState(191);
				match(CREATE_PROOF_FROM_AUTH_ZONE);
				setState(192);
				resourceAddress();
				setState(193);
				proof();
				setState(194);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
				enterOuterAlt(_localctx, 14);
				{
				setState(196);
				match(CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
				setState(197);
				decimal();
				setState(198);
				resourceAddress();
				setState(199);
				proof();
				setState(200);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
				enterOuterAlt(_localctx, 15);
				{
				setState(202);
				match(CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
				setState(203);
				set();
				setState(204);
				resourceAddress();
				setState(205);
				proof();
				setState(206);
				match(SEMICOLON);
				}
				break;
			case CREATE_PROOF_FROM_BUCKET:
				enterOuterAlt(_localctx, 16);
				{
				setState(208);
				match(CREATE_PROOF_FROM_BUCKET);
				setState(209);
				bucket();
				setState(210);
				proof();
				setState(211);
				match(SEMICOLON);
				}
				break;
			case CLONE_PROOF:
				enterOuterAlt(_localctx, 17);
				{
				setState(213);
				match(CLONE_PROOF);
				setState(214);
				proof();
				setState(215);
				proof();
				setState(216);
				match(SEMICOLON);
				}
				break;
			case DROP_PROOF:
				enterOuterAlt(_localctx, 18);
				{
				setState(218);
				match(DROP_PROOF);
				setState(219);
				proof();
				setState(220);
				match(SEMICOLON);
				}
				break;
			case DROP_ALL_PROOFS:
				enterOuterAlt(_localctx, 19);
				{
				setState(222);
				match(DROP_ALL_PROOFS);
				setState(223);
				match(SEMICOLON);
				}
				break;
			case CLEAR_AUTHZONE:
				enterOuterAlt(_localctx, 20);
				{
				setState(224);
				match(CLEAR_AUTHZONE);
				setState(225);
				match(SEMICOLON);
				}
				break;
			case PUBLISH_PACKAGE:
				enterOuterAlt(_localctx, 21);
				{
				setState(226);
				match(PUBLISH_PACKAGE);
				setState(227);
				bytes();
				setState(228);
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
			setState(232);
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
			setState(234);
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
			setState(236);
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
			setState(238);
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
			setState(240);
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
			setState(242);
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
			setState(244);
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
			setState(246);
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
			setState(248);
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
			setState(250);
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
			setState(252);
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
			setState(254);
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

	public static class SafeI8Context extends ParserRuleContext {
		public TerminalNode SAFE_I8_LITERAL() { return getToken(TransactionManifestParser.SAFE_I8_LITERAL, 0); }
		public SafeI8Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeI8; }
	}

	public final SafeI8Context safeI8() throws RecognitionException {
		SafeI8Context _localctx = new SafeI8Context(_ctx, getState());
		enterRule(_localctx, 28, RULE_safeI8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			match(SAFE_I8_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeI16Context extends ParserRuleContext {
		public TerminalNode SAFE_I16_LITERAL() { return getToken(TransactionManifestParser.SAFE_I16_LITERAL, 0); }
		public SafeI16Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeI16; }
	}

	public final SafeI16Context safeI16() throws RecognitionException {
		SafeI16Context _localctx = new SafeI16Context(_ctx, getState());
		enterRule(_localctx, 30, RULE_safeI16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(SAFE_I16_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeI32Context extends ParserRuleContext {
		public TerminalNode SAFE_I32_LITERAL() { return getToken(TransactionManifestParser.SAFE_I32_LITERAL, 0); }
		public SafeI32Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeI32; }
	}

	public final SafeI32Context safeI32() throws RecognitionException {
		SafeI32Context _localctx = new SafeI32Context(_ctx, getState());
		enterRule(_localctx, 32, RULE_safeI32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			match(SAFE_I32_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeI64Context extends ParserRuleContext {
		public TerminalNode SAFE_I64_LITERAL() { return getToken(TransactionManifestParser.SAFE_I64_LITERAL, 0); }
		public SafeI64Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeI64; }
	}

	public final SafeI64Context safeI64() throws RecognitionException {
		SafeI64Context _localctx = new SafeI64Context(_ctx, getState());
		enterRule(_localctx, 34, RULE_safeI64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			match(SAFE_I64_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeI128Context extends ParserRuleContext {
		public TerminalNode SAFE_I128_LITERAL() { return getToken(TransactionManifestParser.SAFE_I128_LITERAL, 0); }
		public SafeI128Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeI128; }
	}

	public final SafeI128Context safeI128() throws RecognitionException {
		SafeI128Context _localctx = new SafeI128Context(_ctx, getState());
		enterRule(_localctx, 36, RULE_safeI128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(SAFE_I128_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeI256Context extends ParserRuleContext {
		public TerminalNode SAFE_I256_LITERAL() { return getToken(TransactionManifestParser.SAFE_I256_LITERAL, 0); }
		public SafeI256Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeI256; }
	}

	public final SafeI256Context safeI256() throws RecognitionException {
		SafeI256Context _localctx = new SafeI256Context(_ctx, getState());
		enterRule(_localctx, 38, RULE_safeI256);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(SAFE_I256_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeI384Context extends ParserRuleContext {
		public TerminalNode SAFE_I384_LITERAL() { return getToken(TransactionManifestParser.SAFE_I384_LITERAL, 0); }
		public SafeI384Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeI384; }
	}

	public final SafeI384Context safeI384() throws RecognitionException {
		SafeI384Context _localctx = new SafeI384Context(_ctx, getState());
		enterRule(_localctx, 40, RULE_safeI384);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(268);
			match(SAFE_I384_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeI512Context extends ParserRuleContext {
		public TerminalNode SAFE_I512_LITERAL() { return getToken(TransactionManifestParser.SAFE_I512_LITERAL, 0); }
		public SafeI512Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeI512; }
	}

	public final SafeI512Context safeI512() throws RecognitionException {
		SafeI512Context _localctx = new SafeI512Context(_ctx, getState());
		enterRule(_localctx, 42, RULE_safeI512);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(270);
			match(SAFE_I512_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeU8Context extends ParserRuleContext {
		public TerminalNode SAFE_U8_LITERAL() { return getToken(TransactionManifestParser.SAFE_U8_LITERAL, 0); }
		public SafeU8Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeU8; }
	}

	public final SafeU8Context safeU8() throws RecognitionException {
		SafeU8Context _localctx = new SafeU8Context(_ctx, getState());
		enterRule(_localctx, 44, RULE_safeU8);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			match(SAFE_U8_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeU16Context extends ParserRuleContext {
		public TerminalNode SAFE_U16_LITERAL() { return getToken(TransactionManifestParser.SAFE_U16_LITERAL, 0); }
		public SafeU16Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeU16; }
	}

	public final SafeU16Context safeU16() throws RecognitionException {
		SafeU16Context _localctx = new SafeU16Context(_ctx, getState());
		enterRule(_localctx, 46, RULE_safeU16);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(SAFE_U16_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeU32Context extends ParserRuleContext {
		public TerminalNode SAFE_U32_LITERAL() { return getToken(TransactionManifestParser.SAFE_U32_LITERAL, 0); }
		public SafeU32Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeU32; }
	}

	public final SafeU32Context safeU32() throws RecognitionException {
		SafeU32Context _localctx = new SafeU32Context(_ctx, getState());
		enterRule(_localctx, 48, RULE_safeU32);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			match(SAFE_U32_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeU64Context extends ParserRuleContext {
		public TerminalNode SAFE_U64_LITERAL() { return getToken(TransactionManifestParser.SAFE_U64_LITERAL, 0); }
		public SafeU64Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeU64; }
	}

	public final SafeU64Context safeU64() throws RecognitionException {
		SafeU64Context _localctx = new SafeU64Context(_ctx, getState());
		enterRule(_localctx, 50, RULE_safeU64);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			match(SAFE_U64_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeU128Context extends ParserRuleContext {
		public TerminalNode SAFE_U128_LITERAL() { return getToken(TransactionManifestParser.SAFE_U128_LITERAL, 0); }
		public SafeU128Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeU128; }
	}

	public final SafeU128Context safeU128() throws RecognitionException {
		SafeU128Context _localctx = new SafeU128Context(_ctx, getState());
		enterRule(_localctx, 52, RULE_safeU128);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			match(SAFE_U128_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeU256Context extends ParserRuleContext {
		public TerminalNode SAFE_U256_LITERAL() { return getToken(TransactionManifestParser.SAFE_U256_LITERAL, 0); }
		public SafeU256Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeU256; }
	}

	public final SafeU256Context safeU256() throws RecognitionException {
		SafeU256Context _localctx = new SafeU256Context(_ctx, getState());
		enterRule(_localctx, 54, RULE_safeU256);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(SAFE_U256_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeU384Context extends ParserRuleContext {
		public TerminalNode SAFE_U384_LITERAL() { return getToken(TransactionManifestParser.SAFE_U384_LITERAL, 0); }
		public SafeU384Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeU384; }
	}

	public final SafeU384Context safeU384() throws RecognitionException {
		SafeU384Context _localctx = new SafeU384Context(_ctx, getState());
		enterRule(_localctx, 56, RULE_safeU384);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			match(SAFE_U384_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeU512Context extends ParserRuleContext {
		public TerminalNode SAFE_U512_LITERAL() { return getToken(TransactionManifestParser.SAFE_U512_LITERAL, 0); }
		public SafeU512Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeU512; }
	}

	public final SafeU512Context safeU512() throws RecognitionException {
		SafeU512Context _localctx = new SafeU512Context(_ctx, getState());
		enterRule(_localctx, 58, RULE_safeU512);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			match(SAFE_U512_LITERAL);
			}
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 60, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
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
		enterRule(_localctx, 62, RULE_struct);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(290);
			match(STRUCT_TYPE);
			setState(291);
			match(OPEN_PARENTHESIS);
			setState(300);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << SAFE_I8_LITERAL) | (1L << SAFE_I16_LITERAL) | (1L << SAFE_I32_LITERAL) | (1L << SAFE_I64_LITERAL) | (1L << SAFE_I128_LITERAL) | (1L << SAFE_I256_LITERAL) | (1L << SAFE_I384_LITERAL) | (1L << SAFE_I512_LITERAL) | (1L << SAFE_U8_LITERAL) | (1L << SAFE_U16_LITERAL) | (1L << SAFE_U32_LITERAL) | (1L << SAFE_U64_LITERAL) | (1L << SAFE_U128_LITERAL) | (1L << SAFE_U384_LITERAL) | (1L << SAFE_U256_LITERAL) | (1L << SAFE_U512_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (SOME_TYPE - 64)) | (1L << (NONE_TYPE - 64)) | (1L << (OK_TYPE - 64)) | (1L << (ERR_TYPE - 64)) | (1L << (ARRAY_TYPE - 64)) | (1L << (TUPLE_TYPE - 64)) | (1L << (LIST_TYPE - 64)) | (1L << (SET_TYPE - 64)) | (1L << (MAP_TYPE - 64)) | (1L << (DECIMAL_TYPE - 64)) | (1L << (PRECISE_DECIMAL_TYPE - 64)) | (1L << (PACKAGE_ADDRESS_TYPE - 64)) | (1L << (COMPONENT_ADDRESS_TYPE - 64)) | (1L << (RESOURCE_ADDRESS_TYPE - 64)) | (1L << (HASH_TYPE - 64)) | (1L << (BUCKET_TYPE - 64)) | (1L << (PROOF_TYPE - 64)) | (1L << (NON_FUNGIBLE_ID_TYPE - 64)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 64)) | (1L << (BYTES_TYPE - 64)) | (1L << (STRING_LITERAL - 64)))) != 0)) {
				{
				setState(292);
				value();
				setState(297);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(293);
					match(COMMA);
					setState(294);
					value();
					}
					}
					setState(299);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(302);
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
		enterRule(_localctx, 64, RULE_enum_);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
			match(ENUM_TYPE);
			setState(305);
			match(OPEN_PARENTHESIS);
			{
			setState(306);
			string();
			setState(307);
			match(COMMA);
			setState(316);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << SAFE_I8_LITERAL) | (1L << SAFE_I16_LITERAL) | (1L << SAFE_I32_LITERAL) | (1L << SAFE_I64_LITERAL) | (1L << SAFE_I128_LITERAL) | (1L << SAFE_I256_LITERAL) | (1L << SAFE_I384_LITERAL) | (1L << SAFE_I512_LITERAL) | (1L << SAFE_U8_LITERAL) | (1L << SAFE_U16_LITERAL) | (1L << SAFE_U32_LITERAL) | (1L << SAFE_U64_LITERAL) | (1L << SAFE_U128_LITERAL) | (1L << SAFE_U384_LITERAL) | (1L << SAFE_U256_LITERAL) | (1L << SAFE_U512_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (SOME_TYPE - 64)) | (1L << (NONE_TYPE - 64)) | (1L << (OK_TYPE - 64)) | (1L << (ERR_TYPE - 64)) | (1L << (ARRAY_TYPE - 64)) | (1L << (TUPLE_TYPE - 64)) | (1L << (LIST_TYPE - 64)) | (1L << (SET_TYPE - 64)) | (1L << (MAP_TYPE - 64)) | (1L << (DECIMAL_TYPE - 64)) | (1L << (PRECISE_DECIMAL_TYPE - 64)) | (1L << (PACKAGE_ADDRESS_TYPE - 64)) | (1L << (COMPONENT_ADDRESS_TYPE - 64)) | (1L << (RESOURCE_ADDRESS_TYPE - 64)) | (1L << (HASH_TYPE - 64)) | (1L << (BUCKET_TYPE - 64)) | (1L << (PROOF_TYPE - 64)) | (1L << (NON_FUNGIBLE_ID_TYPE - 64)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 64)) | (1L << (BYTES_TYPE - 64)) | (1L << (STRING_LITERAL - 64)))) != 0)) {
				{
				setState(308);
				value();
				setState(313);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(309);
					match(COMMA);
					setState(310);
					value();
					}
					}
					setState(315);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
			setState(318);
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
		enterRule(_localctx, 66, RULE_option);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SOME_TYPE:
				{
				setState(320);
				some();
				}
				break;
			case NONE_TYPE:
				{
				setState(321);
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
		enterRule(_localctx, 68, RULE_some);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			match(SOME_TYPE);
			setState(325);
			match(OPEN_PARENTHESIS);
			{
			setState(326);
			value();
			setState(331);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(327);
				match(COMMA);
				setState(328);
				value();
				}
				}
				setState(333);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(334);
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
		enterRule(_localctx, 70, RULE_none);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(336);
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
		enterRule(_localctx, 72, RULE_ok);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			match(OK_TYPE);
			setState(339);
			match(OPEN_PARENTHESIS);
			{
			setState(340);
			value();
			setState(345);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(341);
				match(COMMA);
				setState(342);
				value();
				}
				}
				setState(347);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(348);
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
		enterRule(_localctx, 74, RULE_err);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			match(ERR_TYPE);
			setState(351);
			match(OPEN_PARENTHESIS);
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
			setState(360);
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
		enterRule(_localctx, 76, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(362);
			match(ARRAY_TYPE);
			setState(363);
			match(LESS_THAN);
			setState(364);
			type();
			setState(365);
			match(GREATER_THAN);
			setState(366);
			match(OPEN_PARENTHESIS);
			setState(375);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << SAFE_I8_LITERAL) | (1L << SAFE_I16_LITERAL) | (1L << SAFE_I32_LITERAL) | (1L << SAFE_I64_LITERAL) | (1L << SAFE_I128_LITERAL) | (1L << SAFE_I256_LITERAL) | (1L << SAFE_I384_LITERAL) | (1L << SAFE_I512_LITERAL) | (1L << SAFE_U8_LITERAL) | (1L << SAFE_U16_LITERAL) | (1L << SAFE_U32_LITERAL) | (1L << SAFE_U64_LITERAL) | (1L << SAFE_U128_LITERAL) | (1L << SAFE_U384_LITERAL) | (1L << SAFE_U256_LITERAL) | (1L << SAFE_U512_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (SOME_TYPE - 64)) | (1L << (NONE_TYPE - 64)) | (1L << (OK_TYPE - 64)) | (1L << (ERR_TYPE - 64)) | (1L << (ARRAY_TYPE - 64)) | (1L << (TUPLE_TYPE - 64)) | (1L << (LIST_TYPE - 64)) | (1L << (SET_TYPE - 64)) | (1L << (MAP_TYPE - 64)) | (1L << (DECIMAL_TYPE - 64)) | (1L << (PRECISE_DECIMAL_TYPE - 64)) | (1L << (PACKAGE_ADDRESS_TYPE - 64)) | (1L << (COMPONENT_ADDRESS_TYPE - 64)) | (1L << (RESOURCE_ADDRESS_TYPE - 64)) | (1L << (HASH_TYPE - 64)) | (1L << (BUCKET_TYPE - 64)) | (1L << (PROOF_TYPE - 64)) | (1L << (NON_FUNGIBLE_ID_TYPE - 64)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 64)) | (1L << (BYTES_TYPE - 64)) | (1L << (STRING_LITERAL - 64)))) != 0)) {
				{
				setState(367);
				value();
				setState(372);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(368);
					match(COMMA);
					setState(369);
					value();
					}
					}
					setState(374);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(377);
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
		enterRule(_localctx, 78, RULE_tuple);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			match(TUPLE_TYPE);
			setState(380);
			match(LESS_THAN);
			setState(381);
			match(OPEN_PARENTHESIS);
			setState(390);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << SAFE_I8_LITERAL) | (1L << SAFE_I16_LITERAL) | (1L << SAFE_I32_LITERAL) | (1L << SAFE_I64_LITERAL) | (1L << SAFE_I128_LITERAL) | (1L << SAFE_I256_LITERAL) | (1L << SAFE_I384_LITERAL) | (1L << SAFE_I512_LITERAL) | (1L << SAFE_U8_LITERAL) | (1L << SAFE_U16_LITERAL) | (1L << SAFE_U32_LITERAL) | (1L << SAFE_U64_LITERAL) | (1L << SAFE_U128_LITERAL) | (1L << SAFE_U384_LITERAL) | (1L << SAFE_U256_LITERAL) | (1L << SAFE_U512_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (SOME_TYPE - 64)) | (1L << (NONE_TYPE - 64)) | (1L << (OK_TYPE - 64)) | (1L << (ERR_TYPE - 64)) | (1L << (ARRAY_TYPE - 64)) | (1L << (TUPLE_TYPE - 64)) | (1L << (LIST_TYPE - 64)) | (1L << (SET_TYPE - 64)) | (1L << (MAP_TYPE - 64)) | (1L << (DECIMAL_TYPE - 64)) | (1L << (PRECISE_DECIMAL_TYPE - 64)) | (1L << (PACKAGE_ADDRESS_TYPE - 64)) | (1L << (COMPONENT_ADDRESS_TYPE - 64)) | (1L << (RESOURCE_ADDRESS_TYPE - 64)) | (1L << (HASH_TYPE - 64)) | (1L << (BUCKET_TYPE - 64)) | (1L << (PROOF_TYPE - 64)) | (1L << (NON_FUNGIBLE_ID_TYPE - 64)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 64)) | (1L << (BYTES_TYPE - 64)) | (1L << (STRING_LITERAL - 64)))) != 0)) {
				{
				setState(382);
				value();
				setState(387);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(383);
					match(COMMA);
					setState(384);
					value();
					}
					}
					setState(389);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(392);
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
		enterRule(_localctx, 80, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(394);
			match(LIST_TYPE);
			setState(395);
			match(LESS_THAN);
			setState(396);
			type();
			setState(397);
			match(GREATER_THAN);
			setState(398);
			match(OPEN_PARENTHESIS);
			setState(407);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << SAFE_I8_LITERAL) | (1L << SAFE_I16_LITERAL) | (1L << SAFE_I32_LITERAL) | (1L << SAFE_I64_LITERAL) | (1L << SAFE_I128_LITERAL) | (1L << SAFE_I256_LITERAL) | (1L << SAFE_I384_LITERAL) | (1L << SAFE_I512_LITERAL) | (1L << SAFE_U8_LITERAL) | (1L << SAFE_U16_LITERAL) | (1L << SAFE_U32_LITERAL) | (1L << SAFE_U64_LITERAL) | (1L << SAFE_U128_LITERAL) | (1L << SAFE_U384_LITERAL) | (1L << SAFE_U256_LITERAL) | (1L << SAFE_U512_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (SOME_TYPE - 64)) | (1L << (NONE_TYPE - 64)) | (1L << (OK_TYPE - 64)) | (1L << (ERR_TYPE - 64)) | (1L << (ARRAY_TYPE - 64)) | (1L << (TUPLE_TYPE - 64)) | (1L << (LIST_TYPE - 64)) | (1L << (SET_TYPE - 64)) | (1L << (MAP_TYPE - 64)) | (1L << (DECIMAL_TYPE - 64)) | (1L << (PRECISE_DECIMAL_TYPE - 64)) | (1L << (PACKAGE_ADDRESS_TYPE - 64)) | (1L << (COMPONENT_ADDRESS_TYPE - 64)) | (1L << (RESOURCE_ADDRESS_TYPE - 64)) | (1L << (HASH_TYPE - 64)) | (1L << (BUCKET_TYPE - 64)) | (1L << (PROOF_TYPE - 64)) | (1L << (NON_FUNGIBLE_ID_TYPE - 64)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 64)) | (1L << (BYTES_TYPE - 64)) | (1L << (STRING_LITERAL - 64)))) != 0)) {
				{
				setState(399);
				value();
				setState(404);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(400);
					match(COMMA);
					setState(401);
					value();
					}
					}
					setState(406);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(409);
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
		enterRule(_localctx, 82, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(411);
			match(SET_TYPE);
			setState(412);
			match(LESS_THAN);
			setState(413);
			type();
			setState(414);
			match(GREATER_THAN);
			setState(415);
			match(OPEN_PARENTHESIS);
			setState(424);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << SAFE_I8_LITERAL) | (1L << SAFE_I16_LITERAL) | (1L << SAFE_I32_LITERAL) | (1L << SAFE_I64_LITERAL) | (1L << SAFE_I128_LITERAL) | (1L << SAFE_I256_LITERAL) | (1L << SAFE_I384_LITERAL) | (1L << SAFE_I512_LITERAL) | (1L << SAFE_U8_LITERAL) | (1L << SAFE_U16_LITERAL) | (1L << SAFE_U32_LITERAL) | (1L << SAFE_U64_LITERAL) | (1L << SAFE_U128_LITERAL) | (1L << SAFE_U384_LITERAL) | (1L << SAFE_U256_LITERAL) | (1L << SAFE_U512_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (SOME_TYPE - 64)) | (1L << (NONE_TYPE - 64)) | (1L << (OK_TYPE - 64)) | (1L << (ERR_TYPE - 64)) | (1L << (ARRAY_TYPE - 64)) | (1L << (TUPLE_TYPE - 64)) | (1L << (LIST_TYPE - 64)) | (1L << (SET_TYPE - 64)) | (1L << (MAP_TYPE - 64)) | (1L << (DECIMAL_TYPE - 64)) | (1L << (PRECISE_DECIMAL_TYPE - 64)) | (1L << (PACKAGE_ADDRESS_TYPE - 64)) | (1L << (COMPONENT_ADDRESS_TYPE - 64)) | (1L << (RESOURCE_ADDRESS_TYPE - 64)) | (1L << (HASH_TYPE - 64)) | (1L << (BUCKET_TYPE - 64)) | (1L << (PROOF_TYPE - 64)) | (1L << (NON_FUNGIBLE_ID_TYPE - 64)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 64)) | (1L << (BYTES_TYPE - 64)) | (1L << (STRING_LITERAL - 64)))) != 0)) {
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
		}
		catch (RecognitionException re) {
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
		enterRule(_localctx, 84, RULE_map);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			match(MAP_TYPE);
			setState(429);
			match(LESS_THAN);
			setState(430);
			type();
			setState(431);
			match(COMMA);
			setState(432);
			type();
			setState(433);
			match(GREATER_THAN);
			setState(434);
			match(OPEN_PARENTHESIS);
			setState(441);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << BOOL_LITERAL) | (1L << I8_LITERAL) | (1L << I16_LITERAL) | (1L << I32_LITERAL) | (1L << I64_LITERAL) | (1L << I128_LITERAL) | (1L << U8_LITERAL) | (1L << U16_LITERAL) | (1L << U32_LITERAL) | (1L << U64_LITERAL) | (1L << U128_LITERAL) | (1L << SAFE_I8_LITERAL) | (1L << SAFE_I16_LITERAL) | (1L << SAFE_I32_LITERAL) | (1L << SAFE_I64_LITERAL) | (1L << SAFE_I128_LITERAL) | (1L << SAFE_I256_LITERAL) | (1L << SAFE_I384_LITERAL) | (1L << SAFE_I512_LITERAL) | (1L << SAFE_U8_LITERAL) | (1L << SAFE_U16_LITERAL) | (1L << SAFE_U32_LITERAL) | (1L << SAFE_U64_LITERAL) | (1L << SAFE_U128_LITERAL) | (1L << SAFE_U384_LITERAL) | (1L << SAFE_U256_LITERAL) | (1L << SAFE_U512_LITERAL) | (1L << STRUCT_TYPE) | (1L << ENUM_TYPE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (SOME_TYPE - 64)) | (1L << (NONE_TYPE - 64)) | (1L << (OK_TYPE - 64)) | (1L << (ERR_TYPE - 64)) | (1L << (ARRAY_TYPE - 64)) | (1L << (TUPLE_TYPE - 64)) | (1L << (LIST_TYPE - 64)) | (1L << (SET_TYPE - 64)) | (1L << (MAP_TYPE - 64)) | (1L << (DECIMAL_TYPE - 64)) | (1L << (PRECISE_DECIMAL_TYPE - 64)) | (1L << (PACKAGE_ADDRESS_TYPE - 64)) | (1L << (COMPONENT_ADDRESS_TYPE - 64)) | (1L << (RESOURCE_ADDRESS_TYPE - 64)) | (1L << (HASH_TYPE - 64)) | (1L << (BUCKET_TYPE - 64)) | (1L << (PROOF_TYPE - 64)) | (1L << (NON_FUNGIBLE_ID_TYPE - 64)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 64)) | (1L << (BYTES_TYPE - 64)) | (1L << (STRING_LITERAL - 64)))) != 0)) {
				{
				{
				setState(435);
				value();
				setState(436);
				match(COMMA);
				setState(437);
				value();
				}
				}
				setState(443);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(444);
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
		enterRule(_localctx, 86, RULE_decimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			match(DECIMAL_TYPE);
			setState(447);
			match(OPEN_PARENTHESIS);
			setState(448);
			match(STRING_LITERAL);
			setState(449);
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
		enterRule(_localctx, 88, RULE_preciseDecimal);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(451);
			match(PRECISE_DECIMAL_TYPE);
			setState(452);
			match(OPEN_PARENTHESIS);
			setState(453);
			match(STRING_LITERAL);
			setState(454);
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
		enterRule(_localctx, 90, RULE_packageAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(456);
			match(PACKAGE_ADDRESS_TYPE);
			setState(457);
			match(OPEN_PARENTHESIS);
			setState(458);
			match(STRING_LITERAL);
			setState(459);
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
		enterRule(_localctx, 92, RULE_componentAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(461);
			match(COMPONENT_ADDRESS_TYPE);
			setState(462);
			match(OPEN_PARENTHESIS);
			setState(463);
			match(STRING_LITERAL);
			setState(464);
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
		enterRule(_localctx, 94, RULE_resourceAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(466);
			match(RESOURCE_ADDRESS_TYPE);
			setState(467);
			match(OPEN_PARENTHESIS);
			setState(468);
			match(STRING_LITERAL);
			setState(469);
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
		enterRule(_localctx, 96, RULE_hash);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(471);
			match(HASH_TYPE);
			setState(472);
			match(OPEN_PARENTHESIS);
			setState(473);
			match(STRING_LITERAL);
			setState(474);
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
		enterRule(_localctx, 98, RULE_bucket);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(476);
			match(BUCKET_TYPE);
			setState(477);
			match(OPEN_PARENTHESIS);
			setState(478);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(479);
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
		enterRule(_localctx, 100, RULE_proof);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			match(PROOF_TYPE);
			setState(482);
			match(OPEN_PARENTHESIS);
			setState(483);
			_la = _input.LA(1);
			if ( !(_la==U32_LITERAL || _la==STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(484);
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

	public static class NonFungible_idContext extends ParserRuleContext {
		public TerminalNode NON_FUNGIBLE_ID_TYPE() { return getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(TransactionManifestParser.STRING_LITERAL, 0); }
		public TerminalNode CLOED_PARENTHESIS() { return getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
		public NonFungible_idContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonFungible_id; }
	}

	public final NonFungible_idContext nonFungible_id() throws RecognitionException {
		NonFungible_idContext _localctx = new NonFungible_idContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_nonFungible_id);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(486);
			match(NON_FUNGIBLE_ID_TYPE);
			setState(487);
			match(OPEN_PARENTHESIS);
			setState(488);
			match(STRING_LITERAL);
			setState(489);
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
		enterRule(_localctx, 104, RULE_nonFungibleAddress);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(491);
			match(NON_FUNGIBLE_ADDRESS_TYPE);
			setState(492);
			match(OPEN_PARENTHESIS);
			setState(493);
			match(STRING_LITERAL);
			setState(494);
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
		enterRule(_localctx, 106, RULE_bytes);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(496);
			match(BYTES_TYPE);
			setState(497);
			match(OPEN_PARENTHESIS);
			setState(498);
			match(STRING_LITERAL);
			setState(499);
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
		public TerminalNode SAFE_I8_TYPE() { return getToken(TransactionManifestParser.SAFE_I8_TYPE, 0); }
		public TerminalNode SAFE_I16_TYPE() { return getToken(TransactionManifestParser.SAFE_I16_TYPE, 0); }
		public TerminalNode SAFE_I32_TYPE() { return getToken(TransactionManifestParser.SAFE_I32_TYPE, 0); }
		public TerminalNode SAFE_I64_TYPE() { return getToken(TransactionManifestParser.SAFE_I64_TYPE, 0); }
		public TerminalNode SAFE_I128_TYPE() { return getToken(TransactionManifestParser.SAFE_I128_TYPE, 0); }
		public TerminalNode SAFE_I256_TYPE() { return getToken(TransactionManifestParser.SAFE_I256_TYPE, 0); }
		public TerminalNode SAFE_I384_TYPE() { return getToken(TransactionManifestParser.SAFE_I384_TYPE, 0); }
		public TerminalNode SAFE_I512_TYPE() { return getToken(TransactionManifestParser.SAFE_I512_TYPE, 0); }
		public TerminalNode SAFE_U8_TYPE() { return getToken(TransactionManifestParser.SAFE_U8_TYPE, 0); }
		public TerminalNode SAFE_U16_TYPE() { return getToken(TransactionManifestParser.SAFE_U16_TYPE, 0); }
		public TerminalNode SAFE_U32_TYPE() { return getToken(TransactionManifestParser.SAFE_U32_TYPE, 0); }
		public TerminalNode SAFE_U64_TYPE() { return getToken(TransactionManifestParser.SAFE_U64_TYPE, 0); }
		public TerminalNode SAFE_U128_TYPE() { return getToken(TransactionManifestParser.SAFE_U128_TYPE, 0); }
		public TerminalNode SAFE_U384_TYPE() { return getToken(TransactionManifestParser.SAFE_U384_TYPE, 0); }
		public TerminalNode SAFE_U256_TYPE() { return getToken(TransactionManifestParser.SAFE_U256_TYPE, 0); }
		public TerminalNode SAFE_U512_TYPE() { return getToken(TransactionManifestParser.SAFE_U512_TYPE, 0); }
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
		enterRule(_localctx, 108, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(501);
			_la = _input.LA(1);
			if ( !(((((_la - 31)) & ~0x3f) == 0 && ((1L << (_la - 31)) & ((1L << (UNIT_TYPE - 31)) | (1L << (BOOL_TYPE - 31)) | (1L << (I8_TYPE - 31)) | (1L << (I16_TYPE - 31)) | (1L << (I32_TYPE - 31)) | (1L << (I64_TYPE - 31)) | (1L << (I128_TYPE - 31)) | (1L << (U8_TYPE - 31)) | (1L << (U16_TYPE - 31)) | (1L << (U32_TYPE - 31)) | (1L << (U64_TYPE - 31)) | (1L << (U128_TYPE - 31)) | (1L << (SAFE_I8_TYPE - 31)) | (1L << (SAFE_I16_TYPE - 31)) | (1L << (SAFE_I32_TYPE - 31)) | (1L << (SAFE_I64_TYPE - 31)) | (1L << (SAFE_I128_TYPE - 31)) | (1L << (SAFE_I256_TYPE - 31)) | (1L << (SAFE_I384_TYPE - 31)) | (1L << (SAFE_I512_TYPE - 31)) | (1L << (SAFE_U8_TYPE - 31)) | (1L << (SAFE_U16_TYPE - 31)) | (1L << (SAFE_U32_TYPE - 31)) | (1L << (SAFE_U64_TYPE - 31)) | (1L << (SAFE_U128_TYPE - 31)) | (1L << (SAFE_U384_TYPE - 31)) | (1L << (SAFE_U256_TYPE - 31)) | (1L << (SAFE_U512_TYPE - 31)) | (1L << (STRING_TYPE - 31)) | (1L << (STRUCT_TYPE - 31)) | (1L << (ENUM_TYPE - 31)) | (1L << (OPTION_TYPE - 31)) | (1L << (RESULT_TYPE - 31)) | (1L << (SOME_TYPE - 31)) | (1L << (NONE_TYPE - 31)) | (1L << (OK_TYPE - 31)) | (1L << (ERR_TYPE - 31)) | (1L << (ARRAY_TYPE - 31)) | (1L << (TUPLE_TYPE - 31)) | (1L << (LIST_TYPE - 31)) | (1L << (SET_TYPE - 31)) | (1L << (MAP_TYPE - 31)) | (1L << (DECIMAL_TYPE - 31)) | (1L << (PRECISE_DECIMAL_TYPE - 31)) | (1L << (PACKAGE_ADDRESS_TYPE - 31)) | (1L << (COMPONENT_ADDRESS_TYPE - 31)) | (1L << (RESOURCE_ADDRESS_TYPE - 31)) | (1L << (HASH_TYPE - 31)) | (1L << (BUCKET_TYPE - 31)) | (1L << (PROOF_TYPE - 31)) | (1L << (NON_FUNGIBLE_ID_TYPE - 31)) | (1L << (NON_FUNGIBLE_ADDRESS_TYPE - 31)) | (1L << (BYTES_TYPE - 31)))) != 0)) ) {
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
		public SafeI8Context safeI8() {
			return getRuleContext(SafeI8Context.class,0);
		}
		public SafeI16Context safeI16() {
			return getRuleContext(SafeI16Context.class,0);
		}
		public SafeI32Context safeI32() {
			return getRuleContext(SafeI32Context.class,0);
		}
		public SafeI64Context safeI64() {
			return getRuleContext(SafeI64Context.class,0);
		}
		public SafeI128Context safeI128() {
			return getRuleContext(SafeI128Context.class,0);
		}
		public SafeI256Context safeI256() {
			return getRuleContext(SafeI256Context.class,0);
		}
		public SafeI384Context safeI384() {
			return getRuleContext(SafeI384Context.class,0);
		}
		public SafeI512Context safeI512() {
			return getRuleContext(SafeI512Context.class,0);
		}
		public SafeU8Context safeU8() {
			return getRuleContext(SafeU8Context.class,0);
		}
		public SafeU16Context safeU16() {
			return getRuleContext(SafeU16Context.class,0);
		}
		public SafeU32Context safeU32() {
			return getRuleContext(SafeU32Context.class,0);
		}
		public SafeU64Context safeU64() {
			return getRuleContext(SafeU64Context.class,0);
		}
		public SafeU128Context safeU128() {
			return getRuleContext(SafeU128Context.class,0);
		}
		public SafeU256Context safeU256() {
			return getRuleContext(SafeU256Context.class,0);
		}
		public SafeU384Context safeU384() {
			return getRuleContext(SafeU384Context.class,0);
		}
		public SafeU512Context safeU512() {
			return getRuleContext(SafeU512Context.class,0);
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
		public NonFungible_idContext nonFungible_id() {
			return getRuleContext(NonFungible_idContext.class,0);
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
		enterRule(_localctx, 110, RULE_value);
		try {
			setState(555);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(503);
				unit();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(504);
				bool();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(505);
				i8();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(506);
				i16();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(507);
				i32();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(508);
				i64();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(509);
				i128();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(510);
				u8();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(511);
				u16();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(512);
				u32();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(513);
				u64();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(514);
				u128();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(515);
				safeI8();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(516);
				safeI16();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(517);
				safeI32();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(518);
				safeI64();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(519);
				safeI128();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(520);
				safeI256();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(521);
				safeI384();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(522);
				safeI512();
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(523);
				safeU8();
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(524);
				safeU16();
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(525);
				safeU32();
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(526);
				safeU64();
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(527);
				safeU128();
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(528);
				safeU256();
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(529);
				safeU384();
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(530);
				safeU512();
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(531);
				string();
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(532);
				struct();
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(533);
				enum_();
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(534);
				option();
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(535);
				some();
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(536);
				none();
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(537);
				ok();
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(538);
				err();
				}
				break;
			case 37:
				enterOuterAlt(_localctx, 37);
				{
				setState(539);
				array();
				}
				break;
			case 38:
				enterOuterAlt(_localctx, 38);
				{
				setState(540);
				tuple();
				}
				break;
			case 39:
				enterOuterAlt(_localctx, 39);
				{
				setState(541);
				list();
				}
				break;
			case 40:
				enterOuterAlt(_localctx, 40);
				{
				setState(542);
				set();
				}
				break;
			case 41:
				enterOuterAlt(_localctx, 41);
				{
				setState(543);
				map();
				}
				break;
			case 42:
				enterOuterAlt(_localctx, 42);
				{
				setState(544);
				decimal();
				}
				break;
			case 43:
				enterOuterAlt(_localctx, 43);
				{
				setState(545);
				preciseDecimal();
				}
				break;
			case 44:
				enterOuterAlt(_localctx, 44);
				{
				setState(546);
				packageAddress();
				}
				break;
			case 45:
				enterOuterAlt(_localctx, 45);
				{
				setState(547);
				componentAddress();
				}
				break;
			case 46:
				enterOuterAlt(_localctx, 46);
				{
				setState(548);
				resourceAddress();
				}
				break;
			case 47:
				enterOuterAlt(_localctx, 47);
				{
				setState(549);
				hash();
				}
				break;
			case 48:
				enterOuterAlt(_localctx, 48);
				{
				setState(550);
				bucket();
				}
				break;
			case 49:
				enterOuterAlt(_localctx, 49);
				{
				setState(551);
				proof();
				}
				break;
			case 50:
				enterOuterAlt(_localctx, 50);
				{
				setState(552);
				nonFungible_id();
				}
				break;
			case 51:
				enterOuterAlt(_localctx, 51);
				{
				setState(553);
				nonFungibleAddress();
				}
				break;
			case 52:
				enterOuterAlt(_localctx, 52);
				{
				setState(554);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3v\u0230\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\3\2\7\2t\n\2\f\2\16\2w\13"+
		"\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\7\3\u0080\n\3\f\3\16\3\u0083\13\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\7\3\u008b\n\3\f\3\16\3\u008e\13\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u00e9\n"+
		"\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3"+
		"\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23"+
		"\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32"+
		"\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3"+
		"!\3!\3!\7!\u012a\n!\f!\16!\u012d\13!\5!\u012f\n!\3!\3!\3\"\3\"\3\"\3\""+
		"\3\"\3\"\3\"\7\"\u013a\n\"\f\"\16\"\u013d\13\"\5\"\u013f\n\"\3\"\3\"\3"+
		"#\3#\5#\u0145\n#\3$\3$\3$\3$\3$\7$\u014c\n$\f$\16$\u014f\13$\3$\3$\3%"+
		"\3%\3&\3&\3&\3&\3&\7&\u015a\n&\f&\16&\u015d\13&\3&\3&\3\'\3\'\3\'\3\'"+
		"\3\'\7\'\u0166\n\'\f\'\16\'\u0169\13\'\3\'\3\'\3(\3(\3(\3(\3(\3(\3(\3"+
		"(\7(\u0175\n(\f(\16(\u0178\13(\5(\u017a\n(\3(\3(\3)\3)\3)\3)\3)\3)\7)"+
		"\u0184\n)\f)\16)\u0187\13)\5)\u0189\n)\3)\3)\3*\3*\3*\3*\3*\3*\3*\3*\7"+
		"*\u0195\n*\f*\16*\u0198\13*\5*\u019a\n*\3*\3*\3+\3+\3+\3+\3+\3+\3+\3+"+
		"\7+\u01a6\n+\f+\16+\u01a9\13+\5+\u01ab\n+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3"+
		",\3,\3,\3,\7,\u01ba\n,\f,\16,\u01bd\13,\3,\3,\3-\3-\3-\3-\3-\3.\3.\3."+
		"\3.\3.\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61"+
		"\3\62\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64"+
		"\3\64\3\65\3\65\3\65\3\65\3\65\3\66\3\66\3\66\3\66\3\66\3\67\3\67\3\67"+
		"\3\67\3\67\38\38\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\3"+
		"9\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\39\3"+
		"9\39\39\39\39\39\39\39\39\39\39\39\59\u022e\n9\39\2\2:\2\4\6\b\n\f\16"+
		"\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bd"+
		"fhjlnp\2\4\4\2\f\fqq\3\2!U\2\u0252\2u\3\2\2\2\4\u00e8\3\2\2\2\6\u00ea"+
		"\3\2\2\2\b\u00ec\3\2\2\2\n\u00ee\3\2\2\2\f\u00f0\3\2\2\2\16\u00f2\3\2"+
		"\2\2\20\u00f4\3\2\2\2\22\u00f6\3\2\2\2\24\u00f8\3\2\2\2\26\u00fa\3\2\2"+
		"\2\30\u00fc\3\2\2\2\32\u00fe\3\2\2\2\34\u0100\3\2\2\2\36\u0102\3\2\2\2"+
		" \u0104\3\2\2\2\"\u0106\3\2\2\2$\u0108\3\2\2\2&\u010a\3\2\2\2(\u010c\3"+
		"\2\2\2*\u010e\3\2\2\2,\u0110\3\2\2\2.\u0112\3\2\2\2\60\u0114\3\2\2\2\62"+
		"\u0116\3\2\2\2\64\u0118\3\2\2\2\66\u011a\3\2\2\28\u011c\3\2\2\2:\u011e"+
		"\3\2\2\2<\u0120\3\2\2\2>\u0122\3\2\2\2@\u0124\3\2\2\2B\u0132\3\2\2\2D"+
		"\u0144\3\2\2\2F\u0146\3\2\2\2H\u0152\3\2\2\2J\u0154\3\2\2\2L\u0160\3\2"+
		"\2\2N\u016c\3\2\2\2P\u017d\3\2\2\2R\u018c\3\2\2\2T\u019d\3\2\2\2V\u01ae"+
		"\3\2\2\2X\u01c0\3\2\2\2Z\u01c5\3\2\2\2\\\u01ca\3\2\2\2^\u01cf\3\2\2\2"+
		"`\u01d4\3\2\2\2b\u01d9\3\2\2\2d\u01de\3\2\2\2f\u01e3\3\2\2\2h\u01e8\3"+
		"\2\2\2j\u01ed\3\2\2\2l\u01f2\3\2\2\2n\u01f7\3\2\2\2p\u022d\3\2\2\2rt\5"+
		"\4\3\2sr\3\2\2\2tw\3\2\2\2us\3\2\2\2uv\3\2\2\2vx\3\2\2\2wu\3\2\2\2xy\7"+
		"\2\2\3y\3\3\2\2\2z{\7m\2\2{|\5\\/\2|}\5> \2}\u0081\5> \2~\u0080\5p9\2"+
		"\177~\3\2\2\2\u0080\u0083\3\2\2\2\u0081\177\3\2\2\2\u0081\u0082\3\2\2"+
		"\2\u0082\u0084\3\2\2\2\u0083\u0081\3\2\2\2\u0084\u0085\7[\2\2\u0085\u00e9"+
		"\3\2\2\2\u0086\u0087\7n\2\2\u0087\u0088\5^\60\2\u0088\u008c\5> \2\u0089"+
		"\u008b\5p9\2\u008a\u0089\3\2\2\2\u008b\u008e\3\2\2\2\u008c\u008a\3\2\2"+
		"\2\u008c\u008d\3\2\2\2\u008d\u008f\3\2\2\2\u008e\u008c\3\2\2\2\u008f\u0090"+
		"\7[\2\2\u0090\u00e9\3\2\2\2\u0091\u0092\7o\2\2\u0092\u0093\5^\60\2\u0093"+
		"\u0094\5> \2\u0094\u0095\7[\2\2\u0095\u00e9\3\2\2\2\u0096\u0097\7\\\2"+
		"\2\u0097\u0098\5`\61\2\u0098\u0099\5d\63\2\u0099\u009a\7[\2\2\u009a\u00e9"+
		"\3\2\2\2\u009b\u009c\7]\2\2\u009c\u009d\5X-\2\u009d\u009e\5`\61\2\u009e"+
		"\u009f\5d\63\2\u009f\u00a0\7[\2\2\u00a0\u00e9\3\2\2\2\u00a1\u00a2\7^\2"+
		"\2\u00a2\u00a3\5T+\2\u00a3\u00a4\5`\61\2\u00a4\u00a5\5d\63\2\u00a5\u00a6"+
		"\7[\2\2\u00a6\u00e9\3\2\2\2\u00a7\u00a8\7b\2\2\u00a8\u00a9\5d\63\2\u00a9"+
		"\u00aa\7[\2\2\u00aa\u00e9\3\2\2\2\u00ab\u00ac\7_\2\2\u00ac\u00ad\5`\61"+
		"\2\u00ad\u00ae\7[\2\2\u00ae\u00e9\3\2\2\2\u00af\u00b0\7`\2\2\u00b0\u00b1"+
		"\5X-\2\u00b1\u00b2\5`\61\2\u00b2\u00b3\7[\2\2\u00b3\u00e9\3\2\2\2\u00b4"+
		"\u00b5\7a\2\2\u00b5\u00b6\5T+\2\u00b6\u00b7\5`\61\2\u00b7\u00b8\7[\2\2"+
		"\u00b8\u00e9\3\2\2\2\u00b9\u00ba\7c\2\2\u00ba\u00bb\5f\64\2\u00bb\u00bc"+
		"\7[\2\2\u00bc\u00e9\3\2\2\2\u00bd\u00be\7d\2\2\u00be\u00bf\5f\64\2\u00bf"+
		"\u00c0\7[\2\2\u00c0\u00e9\3\2\2\2\u00c1\u00c2\7f\2\2\u00c2\u00c3\5`\61"+
		"\2\u00c3\u00c4\5f\64\2\u00c4\u00c5\7[\2\2\u00c5\u00e9\3\2\2\2\u00c6\u00c7"+
		"\7g\2\2\u00c7\u00c8\5X-\2\u00c8\u00c9\5`\61\2\u00c9\u00ca\5f\64\2\u00ca"+
		"\u00cb\7[\2\2\u00cb\u00e9\3\2\2\2\u00cc\u00cd\7h\2\2\u00cd\u00ce\5T+\2"+
		"\u00ce\u00cf\5`\61\2\u00cf\u00d0\5f\64\2\u00d0\u00d1\7[\2\2\u00d1\u00e9"+
		"\3\2\2\2\u00d2\u00d3\7i\2\2\u00d3\u00d4\5d\63\2\u00d4\u00d5\5f\64\2\u00d5"+
		"\u00d6\7[\2\2\u00d6\u00e9\3\2\2\2\u00d7\u00d8\7j\2\2\u00d8\u00d9\5f\64"+
		"\2\u00d9\u00da\5f\64\2\u00da\u00db\7[\2\2\u00db\u00e9\3\2\2\2\u00dc\u00dd"+
		"\7k\2\2\u00dd\u00de\5f\64\2\u00de\u00df\7[\2\2\u00df\u00e9\3\2\2\2\u00e0"+
		"\u00e1\7l\2\2\u00e1\u00e9\7[\2\2\u00e2\u00e3\7e\2\2\u00e3\u00e9\7[\2\2"+
		"\u00e4\u00e5\7p\2\2\u00e5\u00e6\5l\67\2\u00e6\u00e7\7[\2\2\u00e7\u00e9"+
		"\3\2\2\2\u00e8z\3\2\2\2\u00e8\u0086\3\2\2\2\u00e8\u0091\3\2\2\2\u00e8"+
		"\u0096\3\2\2\2\u00e8\u009b\3\2\2\2\u00e8\u00a1\3\2\2\2\u00e8\u00a7\3\2"+
		"\2\2\u00e8\u00ab\3\2\2\2\u00e8\u00af\3\2\2\2\u00e8\u00b4\3\2\2\2\u00e8"+
		"\u00b9\3\2\2\2\u00e8\u00bd\3\2\2\2\u00e8\u00c1\3\2\2\2\u00e8\u00c6\3\2"+
		"\2\2\u00e8\u00cc\3\2\2\2\u00e8\u00d2\3\2\2\2\u00e8\u00d7\3\2\2\2\u00e8"+
		"\u00dc\3\2\2\2\u00e8\u00e0\3\2\2\2\u00e8\u00e2\3\2\2\2\u00e8\u00e4\3\2"+
		"\2\2\u00e9\5\3\2\2\2\u00ea\u00eb\7\3\2\2\u00eb\7\3\2\2\2\u00ec\u00ed\7"+
		"\4\2\2\u00ed\t\3\2\2\2\u00ee\u00ef\7\5\2\2\u00ef\13\3\2\2\2\u00f0\u00f1"+
		"\7\6\2\2\u00f1\r\3\2\2\2\u00f2\u00f3\7\7\2\2\u00f3\17\3\2\2\2\u00f4\u00f5"+
		"\7\b\2\2\u00f5\21\3\2\2\2\u00f6\u00f7\7\t\2\2\u00f7\23\3\2\2\2\u00f8\u00f9"+
		"\7\n\2\2\u00f9\25\3\2\2\2\u00fa\u00fb\7\13\2\2\u00fb\27\3\2\2\2\u00fc"+
		"\u00fd\7\f\2\2\u00fd\31\3\2\2\2\u00fe\u00ff\7\r\2\2\u00ff\33\3\2\2\2\u0100"+
		"\u0101\7\16\2\2\u0101\35\3\2\2\2\u0102\u0103\7\17\2\2\u0103\37\3\2\2\2"+
		"\u0104\u0105\7\20\2\2\u0105!\3\2\2\2\u0106\u0107\7\21\2\2\u0107#\3\2\2"+
		"\2\u0108\u0109\7\22\2\2\u0109%\3\2\2\2\u010a\u010b\7\23\2\2\u010b\'\3"+
		"\2\2\2\u010c\u010d\7\24\2\2\u010d)\3\2\2\2\u010e\u010f\7\25\2\2\u010f"+
		"+\3\2\2\2\u0110\u0111\7\26\2\2\u0111-\3\2\2\2\u0112\u0113\7\27\2\2\u0113"+
		"/\3\2\2\2\u0114\u0115\7\30\2\2\u0115\61\3\2\2\2\u0116\u0117\7\31\2\2\u0117"+
		"\63\3\2\2\2\u0118\u0119\7\32\2\2\u0119\65\3\2\2\2\u011a\u011b\7\33\2\2"+
		"\u011b\67\3\2\2\2\u011c\u011d\7\35\2\2\u011d9\3\2\2\2\u011e\u011f\7\34"+
		"\2\2\u011f;\3\2\2\2\u0120\u0121\7\36\2\2\u0121=\3\2\2\2\u0122\u0123\7"+
		"q\2\2\u0123?\3\2\2\2\u0124\u0125\7>\2\2\u0125\u012e\7V\2\2\u0126\u012b"+
		"\5p9\2\u0127\u0128\7Z\2\2\u0128\u012a\5p9\2\u0129\u0127\3\2\2\2\u012a"+
		"\u012d\3\2\2\2\u012b\u0129\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u012f\3\2"+
		"\2\2\u012d\u012b\3\2\2\2\u012e\u0126\3\2\2\2\u012e\u012f\3\2\2\2\u012f"+
		"\u0130\3\2\2\2\u0130\u0131\7W\2\2\u0131A\3\2\2\2\u0132\u0133\7?\2\2\u0133"+
		"\u0134\7V\2\2\u0134\u0135\5> \2\u0135\u013e\7Z\2\2\u0136\u013b\5p9\2\u0137"+
		"\u0138\7Z\2\2\u0138\u013a\5p9\2\u0139\u0137\3\2\2\2\u013a\u013d\3\2\2"+
		"\2\u013b\u0139\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013f\3\2\2\2\u013d\u013b"+
		"\3\2\2\2\u013e\u0136\3\2\2\2\u013e\u013f\3\2\2\2\u013f\u0140\3\2\2\2\u0140"+
		"\u0141\7W\2\2\u0141C\3\2\2\2\u0142\u0145\5F$\2\u0143\u0145\5H%\2\u0144"+
		"\u0142\3\2\2\2\u0144\u0143\3\2\2\2\u0145E\3\2\2\2\u0146\u0147\7B\2\2\u0147"+
		"\u0148\7V\2\2\u0148\u014d\5p9\2\u0149\u014a\7Z\2\2\u014a\u014c\5p9\2\u014b"+
		"\u0149\3\2\2\2\u014c\u014f\3\2\2\2\u014d\u014b\3\2\2\2\u014d\u014e\3\2"+
		"\2\2\u014e\u0150\3\2\2\2\u014f\u014d\3\2\2\2\u0150\u0151\7W\2\2\u0151"+
		"G\3\2\2\2\u0152\u0153\7C\2\2\u0153I\3\2\2\2\u0154\u0155\7D\2\2\u0155\u0156"+
		"\7V\2\2\u0156\u015b\5p9\2\u0157\u0158\7Z\2\2\u0158\u015a\5p9\2\u0159\u0157"+
		"\3\2\2\2\u015a\u015d\3\2\2\2\u015b\u0159\3\2\2\2\u015b\u015c\3\2\2\2\u015c"+
		"\u015e\3\2\2\2\u015d\u015b\3\2\2\2\u015e\u015f\7W\2\2\u015fK\3\2\2\2\u0160"+
		"\u0161\7E\2\2\u0161\u0162\7V\2\2\u0162\u0167\5p9\2\u0163\u0164\7Z\2\2"+
		"\u0164\u0166\5p9\2\u0165\u0163\3\2\2\2\u0166\u0169\3\2\2\2\u0167\u0165"+
		"\3\2\2\2\u0167\u0168\3\2\2\2\u0168\u016a\3\2\2\2\u0169\u0167\3\2\2\2\u016a"+
		"\u016b\7W\2\2\u016bM\3\2\2\2\u016c\u016d\7F\2\2\u016d\u016e\7X\2\2\u016e"+
		"\u016f\5n8\2\u016f\u0170\7Y\2\2\u0170\u0179\7V\2\2\u0171\u0176\5p9\2\u0172"+
		"\u0173\7Z\2\2\u0173\u0175\5p9\2\u0174\u0172\3\2\2\2\u0175\u0178\3\2\2"+
		"\2\u0176\u0174\3\2\2\2\u0176\u0177\3\2\2\2\u0177\u017a\3\2\2\2\u0178\u0176"+
		"\3\2\2\2\u0179\u0171\3\2\2\2\u0179\u017a\3\2\2\2\u017a\u017b\3\2\2\2\u017b"+
		"\u017c\7W\2\2\u017cO\3\2\2\2\u017d\u017e\7G\2\2\u017e\u017f\7X\2\2\u017f"+
		"\u0188\7V\2\2\u0180\u0185\5p9\2\u0181\u0182\7Z\2\2\u0182\u0184\5p9\2\u0183"+
		"\u0181\3\2\2\2\u0184\u0187\3\2\2\2\u0185\u0183\3\2\2\2\u0185\u0186\3\2"+
		"\2\2\u0186\u0189\3\2\2\2\u0187\u0185\3\2\2\2\u0188\u0180\3\2\2\2\u0188"+
		"\u0189\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018b\7W\2\2\u018bQ\3\2\2\2\u018c"+
		"\u018d\7H\2\2\u018d\u018e\7X\2\2\u018e\u018f\5n8\2\u018f\u0190\7Y\2\2"+
		"\u0190\u0199\7V\2\2\u0191\u0196\5p9\2\u0192\u0193\7Z\2\2\u0193\u0195\5"+
		"p9\2\u0194\u0192\3\2\2\2\u0195\u0198\3\2\2\2\u0196\u0194\3\2\2\2\u0196"+
		"\u0197\3\2\2\2\u0197\u019a\3\2\2\2\u0198\u0196\3\2\2\2\u0199\u0191\3\2"+
		"\2\2\u0199\u019a\3\2\2\2\u019a\u019b\3\2\2\2\u019b\u019c\7W\2\2\u019c"+
		"S\3\2\2\2\u019d\u019e\7I\2\2\u019e\u019f\7X\2\2\u019f\u01a0\5n8\2\u01a0"+
		"\u01a1\7Y\2\2\u01a1\u01aa\7V\2\2\u01a2\u01a7\5p9\2\u01a3\u01a4\7Z\2\2"+
		"\u01a4\u01a6\5p9\2\u01a5\u01a3\3\2\2\2\u01a6\u01a9\3\2\2\2\u01a7\u01a5"+
		"\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8\u01ab\3\2\2\2\u01a9\u01a7\3\2\2\2\u01aa"+
		"\u01a2\3\2\2\2\u01aa\u01ab\3\2\2\2\u01ab\u01ac\3\2\2\2\u01ac\u01ad\7W"+
		"\2\2\u01adU\3\2\2\2\u01ae\u01af\7J\2\2\u01af\u01b0\7X\2\2\u01b0\u01b1"+
		"\5n8\2\u01b1\u01b2\7Z\2\2\u01b2\u01b3\5n8\2\u01b3\u01b4\7Y\2\2\u01b4\u01bb"+
		"\7V\2\2\u01b5\u01b6\5p9\2\u01b6\u01b7\7Z\2\2\u01b7\u01b8\5p9\2\u01b8\u01ba"+
		"\3\2\2\2\u01b9\u01b5\3\2\2\2\u01ba\u01bd\3\2\2\2\u01bb\u01b9\3\2\2\2\u01bb"+
		"\u01bc\3\2\2\2\u01bc\u01be\3\2\2\2\u01bd\u01bb\3\2\2\2\u01be\u01bf\7W"+
		"\2\2\u01bfW\3\2\2\2\u01c0\u01c1\7K\2\2\u01c1\u01c2\7V\2\2\u01c2\u01c3"+
		"\7q\2\2\u01c3\u01c4\7W\2\2\u01c4Y\3\2\2\2\u01c5\u01c6\7L\2\2\u01c6\u01c7"+
		"\7V\2\2\u01c7\u01c8\7q\2\2\u01c8\u01c9\7W\2\2\u01c9[\3\2\2\2\u01ca\u01cb"+
		"\7M\2\2\u01cb\u01cc\7V\2\2\u01cc\u01cd\7q\2\2\u01cd\u01ce\7W\2\2\u01ce"+
		"]\3\2\2\2\u01cf\u01d0\7N\2\2\u01d0\u01d1\7V\2\2\u01d1\u01d2\7q\2\2\u01d2"+
		"\u01d3\7W\2\2\u01d3_\3\2\2\2\u01d4\u01d5\7O\2\2\u01d5\u01d6\7V\2\2\u01d6"+
		"\u01d7\7q\2\2\u01d7\u01d8\7W\2\2\u01d8a\3\2\2\2\u01d9\u01da\7P\2\2\u01da"+
		"\u01db\7V\2\2\u01db\u01dc\7q\2\2\u01dc\u01dd\7W\2\2\u01ddc\3\2\2\2\u01de"+
		"\u01df\7Q\2\2\u01df\u01e0\7V\2\2\u01e0\u01e1\t\2\2\2\u01e1\u01e2\7W\2"+
		"\2\u01e2e\3\2\2\2\u01e3\u01e4\7R\2\2\u01e4\u01e5\7V\2\2\u01e5\u01e6\t"+
		"\2\2\2\u01e6\u01e7\7W\2\2\u01e7g\3\2\2\2\u01e8\u01e9\7S\2\2\u01e9\u01ea"+
		"\7V\2\2\u01ea\u01eb\7q\2\2\u01eb\u01ec\7W\2\2\u01eci\3\2\2\2\u01ed\u01ee"+
		"\7T\2\2\u01ee\u01ef\7V\2\2\u01ef\u01f0\7q\2\2\u01f0\u01f1\7W\2\2\u01f1"+
		"k\3\2\2\2\u01f2\u01f3\7U\2\2\u01f3\u01f4\7V\2\2\u01f4\u01f5\7q\2\2\u01f5"+
		"\u01f6\7W\2\2\u01f6m\3\2\2\2\u01f7\u01f8\t\3\2\2\u01f8o\3\2\2\2\u01f9"+
		"\u022e\5\6\4\2\u01fa\u022e\5\b\5\2\u01fb\u022e\5\n\6\2\u01fc\u022e\5\f"+
		"\7\2\u01fd\u022e\5\16\b\2\u01fe\u022e\5\20\t\2\u01ff\u022e\5\22\n\2\u0200"+
		"\u022e\5\24\13\2\u0201\u022e\5\26\f\2\u0202\u022e\5\30\r\2\u0203\u022e"+
		"\5\32\16\2\u0204\u022e\5\34\17\2\u0205\u022e\5\36\20\2\u0206\u022e\5 "+
		"\21\2\u0207\u022e\5\"\22\2\u0208\u022e\5$\23\2\u0209\u022e\5&\24\2\u020a"+
		"\u022e\5(\25\2\u020b\u022e\5*\26\2\u020c\u022e\5,\27\2\u020d\u022e\5."+
		"\30\2\u020e\u022e\5\60\31\2\u020f\u022e\5\62\32\2\u0210\u022e\5\64\33"+
		"\2\u0211\u022e\5\66\34\2\u0212\u022e\58\35\2\u0213\u022e\5:\36\2\u0214"+
		"\u022e\5<\37\2\u0215\u022e\5> \2\u0216\u022e\5@!\2\u0217\u022e\5B\"\2"+
		"\u0218\u022e\5D#\2\u0219\u022e\5F$\2\u021a\u022e\5H%\2\u021b\u022e\5J"+
		"&\2\u021c\u022e\5L\'\2\u021d\u022e\5N(\2\u021e\u022e\5P)\2\u021f\u022e"+
		"\5R*\2\u0220\u022e\5T+\2\u0221\u022e\5V,\2\u0222\u022e\5X-\2\u0223\u022e"+
		"\5Z.\2\u0224\u022e\5\\/\2\u0225\u022e\5^\60\2\u0226\u022e\5`\61\2\u0227"+
		"\u022e\5b\62\2\u0228\u022e\5d\63\2\u0229\u022e\5f\64\2\u022a\u022e\5h"+
		"\65\2\u022b\u022e\5j\66\2\u022c\u022e\5l\67\2\u022d\u01f9\3\2\2\2\u022d"+
		"\u01fa\3\2\2\2\u022d\u01fb\3\2\2\2\u022d\u01fc\3\2\2\2\u022d\u01fd\3\2"+
		"\2\2\u022d\u01fe\3\2\2\2\u022d\u01ff\3\2\2\2\u022d\u0200\3\2\2\2\u022d"+
		"\u0201\3\2\2\2\u022d\u0202\3\2\2\2\u022d\u0203\3\2\2\2\u022d\u0204\3\2"+
		"\2\2\u022d\u0205\3\2\2\2\u022d\u0206\3\2\2\2\u022d\u0207\3\2\2\2\u022d"+
		"\u0208\3\2\2\2\u022d\u0209\3\2\2\2\u022d\u020a\3\2\2\2\u022d\u020b\3\2"+
		"\2\2\u022d\u020c\3\2\2\2\u022d\u020d\3\2\2\2\u022d\u020e\3\2\2\2\u022d"+
		"\u020f\3\2\2\2\u022d\u0210\3\2\2\2\u022d\u0211\3\2\2\2\u022d\u0212\3\2"+
		"\2\2\u022d\u0213\3\2\2\2\u022d\u0214\3\2\2\2\u022d\u0215\3\2\2\2\u022d"+
		"\u0216\3\2\2\2\u022d\u0217\3\2\2\2\u022d\u0218\3\2\2\2\u022d\u0219\3\2"+
		"\2\2\u022d\u021a\3\2\2\2\u022d\u021b\3\2\2\2\u022d\u021c\3\2\2\2\u022d"+
		"\u021d\3\2\2\2\u022d\u021e\3\2\2\2\u022d\u021f\3\2\2\2\u022d\u0220\3\2"+
		"\2\2\u022d\u0221\3\2\2\2\u022d\u0222\3\2\2\2\u022d\u0223\3\2\2\2\u022d"+
		"\u0224\3\2\2\2\u022d\u0225\3\2\2\2\u022d\u0226\3\2\2\2\u022d\u0227\3\2"+
		"\2\2\u022d\u0228\3\2\2\2\u022d\u0229\3\2\2\2\u022d\u022a\3\2\2\2\u022d"+
		"\u022b\3\2\2\2\u022d\u022c\3\2\2\2\u022eq\3\2\2\2\30u\u0081\u008c\u00e8"+
		"\u012b\u012e\u013b\u013e\u0144\u014d\u015b\u0167\u0176\u0179\u0185\u0188"+
		"\u0196\u0199\u01a7\u01aa\u01bb\u022d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}