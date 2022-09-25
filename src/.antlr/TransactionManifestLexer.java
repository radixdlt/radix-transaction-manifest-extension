// Generated from /Users/omarabdulla/Desktop/radix-transaction-manifest-extension/src/TransactionManifest.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TransactionManifestLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"BOOL_LITERAL", "I8_LITERAL", "I16_LITERAL", "I32_LITERAL", "I64_LITERAL", 
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


	public TransactionManifestLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TransactionManifest.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2Y\u040c\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\3\2\3\2\5\2\u00b4\n\2\3\3\3\3\3\3\3\3\3\4\3\4"+
		"\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3"+
		"\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3"+
		"\20\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\24\3\24\3"+
		"\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3"+
		"\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\33\3"+
		"\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3"+
		"\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3"+
		"\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3\"\3\"\3\"\3#\3#\3#"+
		"\3#\3$\3$\3$\3$\3$\3$\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'"+
		"\3(\3(\3(\3(\3)\3)\3)\3)\3)\3)\3)\3)\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*\3*"+
		"\3*\3*\3*\3*\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3,\3,\3,\3,"+
		"\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3,\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-"+
		"\3-\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3/\3/\3/\3/\3/\3/\3/\3\60\3\60\3\60"+
		"\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61"+
		"\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62"+
		"\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3\64"+
		"\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\66\3\66"+
		"\3\67\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<"+
		"\3<\3<\3<\3<\3<\3<\3<\3<\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3="+
		"\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3=\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>"+
		"\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3?\3?\3?\3?\3?\3?\3?\3?"+
		"\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3@\3@\3@\3@\3@\3@\3@"+
		"\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@\3@"+
		"\3@\3@\3@\3@\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A"+
		"\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3A\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B"+
		"\3B\3B\3B\3B\3B\3B\3B\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C"+
		"\3C\3C\3C\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3E\3E"+
		"\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F"+
		"\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3G\3G\3G\3G\3G"+
		"\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G"+
		"\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H"+
		"\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3I"+
		"\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I"+
		"\3I\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K"+
		"\3K\3L\3L\3L\3L\3L\3L\3L\3L\3L\3L\3L\3L\3L\3L\3L\3L\3M\3M\3M\3M\3M\3M"+
		"\3M\3M\3M\3M\3M\3M\3M\3M\3N\3N\3N\3N\3N\3N\3N\3N\3N\3N\3N\3N\3O\3O\3O"+
		"\3O\3O\3O\3O\3O\3O\3O\3O\3O\3O\3O\3O\3O\3P\3P\3P\3P\3P\3P\3P\3P\3P\3P"+
		"\3P\3P\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3Q\3R\3R\3R\3R\3R\3R\3R"+
		"\3R\3R\3R\3R\3R\3R\3R\3R\3R\3S\3S\3S\3S\3S\7S\u03ed\nS\fS\16S\u03f0\13"+
		"S\3S\3S\3T\3T\3U\3U\3V\6V\u03f9\nV\rV\16V\u03fa\3W\6W\u03fe\nW\rW\16W"+
		"\u03ff\3W\3W\3X\3X\7X\u0406\nX\fX\16X\u0409\13X\3X\3X\2\2Y\3\3\5\4\7\5"+
		"\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23"+
		"%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G"+
		"%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{"+
		"?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F\u008bG\u008dH\u008fI\u0091"+
		"J\u0093K\u0095L\u0097M\u0099N\u009bO\u009dP\u009fQ\u00a1R\u00a3S\u00a5"+
		"T\u00a7U\u00a9V\u00abW\u00adX\u00afY\3\2\t\4\2$$^^\6\2\f\f\17\17$$^^\5"+
		"\2\"\"//aa\3\2\62;\4\2C\\c|\5\2\13\f\17\17\"\"\4\2\f\f\16\17\2\u0412\2"+
		"\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2"+
		"\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2"+
		"\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2"+
		"\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2"+
		"\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2"+
		"\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2"+
		"\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U"+
		"\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2"+
		"\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2"+
		"\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{"+
		"\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085"+
		"\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2"+
		"\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097"+
		"\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2"+
		"\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7\3\2\2\2\2\u00a9"+
		"\3\2\2\2\2\u00ab\3\2\2\2\2\u00ad\3\2\2\2\2\u00af\3\2\2\2\3\u00b3\3\2\2"+
		"\2\5\u00b5\3\2\2\2\7\u00b9\3\2\2\2\t\u00be\3\2\2\2\13\u00c3\3\2\2\2\r"+
		"\u00c8\3\2\2\2\17\u00ce\3\2\2\2\21\u00d2\3\2\2\2\23\u00d7\3\2\2\2\25\u00dc"+
		"\3\2\2\2\27\u00e1\3\2\2\2\31\u00e7\3\2\2\2\33\u00ec\3\2\2\2\35\u00f2\3"+
		"\2\2\2\37\u00f7\3\2\2\2!\u00fc\3\2\2\2#\u00ff\3\2\2\2%\u0103\3\2\2\2\'"+
		"\u0107\3\2\2\2)\u010b\3\2\2\2+\u0110\3\2\2\2-\u0113\3\2\2\2/\u0117\3\2"+
		"\2\2\61\u011b\3\2\2\2\63\u011f\3\2\2\2\65\u0124\3\2\2\2\67\u012b\3\2\2"+
		"\29\u0132\3\2\2\2;\u0137\3\2\2\2=\u013e\3\2\2\2?\u0145\3\2\2\2A\u014a"+
		"\3\2\2\2C\u014f\3\2\2\2E\u0152\3\2\2\2G\u0156\3\2\2\2I\u015c\3\2\2\2K"+
		"\u0162\3\2\2\2M\u0167\3\2\2\2O\u016b\3\2\2\2Q\u016f\3\2\2\2S\u0177\3\2"+
		"\2\2U\u0186\3\2\2\2W\u0195\3\2\2\2Y\u01a6\3\2\2\2[\u01b6\3\2\2\2]\u01bb"+
		"\3\2\2\2_\u01c2\3\2\2\2a\u01c8\3\2\2\2c\u01d6\3\2\2\2e\u01e9\3\2\2\2g"+
		"\u01ee\3\2\2\2i\u01f9\3\2\2\2k\u01fb\3\2\2\2m\u01fd\3\2\2\2o\u0200\3\2"+
		"\2\2q\u0202\3\2\2\2s\u0204\3\2\2\2u\u0206\3\2\2\2w\u0208\3\2\2\2y\u021a"+
		"\3\2\2\2{\u0236\3\2\2\2}\u024f\3\2\2\2\177\u0267\3\2\2\2\u0081\u0289\3"+
		"\2\2\2\u0083\u02a8\3\2\2\2\u0085\u02ba\3\2\2\2\u0087\u02cd\3\2\2\2\u0089"+
		"\u02df\3\2\2\2\u008b\u02ee\3\2\2\2\u008d\u030a\3\2\2\2\u008f\u0330\3\2"+
		"\2\2\u0091\u0353\3\2\2\2\u0093\u036c\3\2\2\2\u0095\u0378\3\2\2\2\u0097"+
		"\u0383\3\2\2\2\u0099\u0393\3\2\2\2\u009b\u03a1\3\2\2\2\u009d\u03ad\3\2"+
		"\2\2\u009f\u03bd\3\2\2\2\u00a1\u03c9\3\2\2\2\u00a3\u03d7\3\2\2\2\u00a5"+
		"\u03e7\3\2\2\2\u00a7\u03f3\3\2\2\2\u00a9\u03f5\3\2\2\2\u00ab\u03f8\3\2"+
		"\2\2\u00ad\u03fd\3\2\2\2\u00af\u0403\3\2\2\2\u00b1\u00b4\5\31\r\2\u00b2"+
		"\u00b4\5\33\16\2\u00b3\u00b1\3\2\2\2\u00b3\u00b2\3\2\2\2\u00b4\4\3\2\2"+
		"\2\u00b5\u00b6\5\u00abV\2\u00b6\u00b7\7k\2\2\u00b7\u00b8\7:\2\2\u00b8"+
		"\6\3\2\2\2\u00b9\u00ba\5\u00abV\2\u00ba\u00bb\7k\2\2\u00bb\u00bc\7\63"+
		"\2\2\u00bc\u00bd\78\2\2\u00bd\b\3\2\2\2\u00be\u00bf\5\u00abV\2\u00bf\u00c0"+
		"\7k\2\2\u00c0\u00c1\7\65\2\2\u00c1\u00c2\7\64\2\2\u00c2\n\3\2\2\2\u00c3"+
		"\u00c4\5\u00abV\2\u00c4\u00c5\7k\2\2\u00c5\u00c6\78\2\2\u00c6\u00c7\7"+
		"\66\2\2\u00c7\f\3\2\2\2\u00c8\u00c9\5\u00abV\2\u00c9\u00ca\7k\2\2\u00ca"+
		"\u00cb\7\63\2\2\u00cb\u00cc\7\64\2\2\u00cc\u00cd\7:\2\2\u00cd\16\3\2\2"+
		"\2\u00ce\u00cf\5\u00abV\2\u00cf\u00d0\7w\2\2\u00d0\u00d1\7:\2\2\u00d1"+
		"\20\3\2\2\2\u00d2\u00d3\5\u00abV\2\u00d3\u00d4\7w\2\2\u00d4\u00d5\7\63"+
		"\2\2\u00d5\u00d6\78\2\2\u00d6\22\3\2\2\2\u00d7\u00d8\5\u00abV\2\u00d8"+
		"\u00d9\7w\2\2\u00d9\u00da\7\65\2\2\u00da\u00db\7\64\2\2\u00db\24\3\2\2"+
		"\2\u00dc\u00dd\5\u00abV\2\u00dd\u00de\7w\2\2\u00de\u00df\78\2\2\u00df"+
		"\u00e0\7\66\2\2\u00e0\26\3\2\2\2\u00e1\u00e2\5\u00abV\2\u00e2\u00e3\7"+
		"w\2\2\u00e3\u00e4\7\63\2\2\u00e4\u00e5\7\64\2\2\u00e5\u00e6\7:\2\2\u00e6"+
		"\30\3\2\2\2\u00e7\u00e8\7v\2\2\u00e8\u00e9\7t\2\2\u00e9\u00ea\7w\2\2\u00ea"+
		"\u00eb\7g\2\2\u00eb\32\3\2\2\2\u00ec\u00ed\7h\2\2\u00ed\u00ee\7c\2\2\u00ee"+
		"\u00ef\7n\2\2\u00ef\u00f0\7u\2\2\u00f0\u00f1\7g\2\2\u00f1\34\3\2\2\2\u00f2"+
		"\u00f3\7W\2\2\u00f3\u00f4\7p\2\2\u00f4\u00f5\7k\2\2\u00f5\u00f6\7v\2\2"+
		"\u00f6\36\3\2\2\2\u00f7\u00f8\7D\2\2\u00f8\u00f9\7q\2\2\u00f9\u00fa\7"+
		"q\2\2\u00fa\u00fb\7n\2\2\u00fb \3\2\2\2\u00fc\u00fd\7K\2\2\u00fd\u00fe"+
		"\7:\2\2\u00fe\"\3\2\2\2\u00ff\u0100\7K\2\2\u0100\u0101\7\63\2\2\u0101"+
		"\u0102\78\2\2\u0102$\3\2\2\2\u0103\u0104\7K\2\2\u0104\u0105\7\65\2\2\u0105"+
		"\u0106\7\64\2\2\u0106&\3\2\2\2\u0107\u0108\7K\2\2\u0108\u0109\78\2\2\u0109"+
		"\u010a\7\66\2\2\u010a(\3\2\2\2\u010b\u010c\7K\2\2\u010c\u010d\7\63\2\2"+
		"\u010d\u010e\7\64\2\2\u010e\u010f\7:\2\2\u010f*\3\2\2\2\u0110\u0111\7"+
		"W\2\2\u0111\u0112\7:\2\2\u0112,\3\2\2\2\u0113\u0114\7W\2\2\u0114\u0115"+
		"\7\63\2\2\u0115\u0116\78\2\2\u0116.\3\2\2\2\u0117\u0118\7W\2\2\u0118\u0119"+
		"\7\65\2\2\u0119\u011a\7\64\2\2\u011a\60\3\2\2\2\u011b\u011c\7W\2\2\u011c"+
		"\u011d\78\2\2\u011d\u011e\7\66\2\2\u011e\62\3\2\2\2\u011f\u0120\7W\2\2"+
		"\u0120\u0121\7\63\2\2\u0121\u0122\7\64\2\2\u0122\u0123\7:\2\2\u0123\64"+
		"\3\2\2\2\u0124\u0125\7U\2\2\u0125\u0126\7v\2\2\u0126\u0127\7t\2\2\u0127"+
		"\u0128\7k\2\2\u0128\u0129\7p\2\2\u0129\u012a\7i\2\2\u012a\66\3\2\2\2\u012b"+
		"\u012c\7U\2\2\u012c\u012d\7v\2\2\u012d\u012e\7t\2\2\u012e\u012f\7w\2\2"+
		"\u012f\u0130\7e\2\2\u0130\u0131\7v\2\2\u01318\3\2\2\2\u0132\u0133\7G\2"+
		"\2\u0133\u0134\7p\2\2\u0134\u0135\7w\2\2\u0135\u0136\7o\2\2\u0136:\3\2"+
		"\2\2\u0137\u0138\7Q\2\2\u0138\u0139\7r\2\2\u0139\u013a\7v\2\2\u013a\u013b"+
		"\7k\2\2\u013b\u013c\7q\2\2\u013c\u013d\7p\2\2\u013d<\3\2\2\2\u013e\u013f"+
		"\7T\2\2\u013f\u0140\7g\2\2\u0140\u0141\7u\2\2\u0141\u0142\7w\2\2\u0142"+
		"\u0143\7n\2\2\u0143\u0144\7v\2\2\u0144>\3\2\2\2\u0145\u0146\7U\2\2\u0146"+
		"\u0147\7q\2\2\u0147\u0148\7o\2\2\u0148\u0149\7g\2\2\u0149@\3\2\2\2\u014a"+
		"\u014b\7P\2\2\u014b\u014c\7q\2\2\u014c\u014d\7p\2\2\u014d\u014e\7g\2\2"+
		"\u014eB\3\2\2\2\u014f\u0150\7Q\2\2\u0150\u0151\7m\2\2\u0151D\3\2\2\2\u0152"+
		"\u0153\7G\2\2\u0153\u0154\7t\2\2\u0154\u0155\7t\2\2\u0155F\3\2\2\2\u0156"+
		"\u0157\7C\2\2\u0157\u0158\7t\2\2\u0158\u0159\7t\2\2\u0159\u015a\7c\2\2"+
		"\u015a\u015b\7{\2\2\u015bH\3\2\2\2\u015c\u015d\7V\2\2\u015d\u015e\7w\2"+
		"\2\u015e\u015f\7r\2\2\u015f\u0160\7n\2\2\u0160\u0161\7g\2\2\u0161J\3\2"+
		"\2\2\u0162\u0163\7N\2\2\u0163\u0164\7k\2\2\u0164\u0165\7u\2\2\u0165\u0166"+
		"\7v\2\2\u0166L\3\2\2\2\u0167\u0168\7U\2\2\u0168\u0169\7g\2\2\u0169\u016a"+
		"\7v\2\2\u016aN\3\2\2\2\u016b\u016c\7O\2\2\u016c\u016d\7c\2\2\u016d\u016e"+
		"\7r\2\2\u016eP\3\2\2\2\u016f\u0170\7F\2\2\u0170\u0171\7g\2\2\u0171\u0172"+
		"\7e\2\2\u0172\u0173\7k\2\2\u0173\u0174\7o\2\2\u0174\u0175\7c\2\2\u0175"+
		"\u0176\7n\2\2\u0176R\3\2\2\2\u0177\u0178\7R\2\2\u0178\u0179\7t\2\2\u0179"+
		"\u017a\7g\2\2\u017a\u017b\7e\2\2\u017b\u017c\7k\2\2\u017c\u017d\7u\2\2"+
		"\u017d\u017e\7g\2\2\u017e\u017f\7F\2\2\u017f\u0180\7g\2\2\u0180\u0181"+
		"\7e\2\2\u0181\u0182\7k\2\2\u0182\u0183\7o\2\2\u0183\u0184\7c\2\2\u0184"+
		"\u0185\7n\2\2\u0185T\3\2\2\2\u0186\u0187\7R\2\2\u0187\u0188\7c\2\2\u0188"+
		"\u0189\7e\2\2\u0189\u018a\7m\2\2\u018a\u018b\7c\2\2\u018b\u018c\7i\2\2"+
		"\u018c\u018d\7g\2\2\u018d\u018e\7C\2\2\u018e\u018f\7f\2\2\u018f\u0190"+
		"\7f\2\2\u0190\u0191\7t\2\2\u0191\u0192\7g\2\2\u0192\u0193\7u\2\2\u0193"+
		"\u0194\7u\2\2\u0194V\3\2\2\2\u0195\u0196\7E\2\2\u0196\u0197\7q\2\2\u0197"+
		"\u0198\7o\2\2\u0198\u0199\7r\2\2\u0199\u019a\7q\2\2\u019a\u019b\7p\2\2"+
		"\u019b\u019c\7g\2\2\u019c\u019d\7p\2\2\u019d\u019e\7v\2\2\u019e\u019f"+
		"\7C\2\2\u019f\u01a0\7f\2\2\u01a0\u01a1\7f\2\2\u01a1\u01a2\7t\2\2\u01a2"+
		"\u01a3\7g\2\2\u01a3\u01a4\7u\2\2\u01a4\u01a5\7u\2\2\u01a5X\3\2\2\2\u01a6"+
		"\u01a7\7T\2\2\u01a7\u01a8\7g\2\2\u01a8\u01a9\7u\2\2\u01a9\u01aa\7q\2\2"+
		"\u01aa\u01ab\7w\2\2\u01ab\u01ac\7t\2\2\u01ac\u01ad\7e\2\2\u01ad\u01ae"+
		"\7g\2\2\u01ae\u01af\7C\2\2\u01af\u01b0\7f\2\2\u01b0\u01b1\7f\2\2\u01b1"+
		"\u01b2\7t\2\2\u01b2\u01b3\7g\2\2\u01b3\u01b4\7u\2\2\u01b4\u01b5\7u\2\2"+
		"\u01b5Z\3\2\2\2\u01b6\u01b7\7J\2\2\u01b7\u01b8\7c\2\2\u01b8\u01b9\7u\2"+
		"\2\u01b9\u01ba\7j\2\2\u01ba\\\3\2\2\2\u01bb\u01bc\7D\2\2\u01bc\u01bd\7"+
		"w\2\2\u01bd\u01be\7e\2\2\u01be\u01bf\7m\2\2\u01bf\u01c0\7g\2\2\u01c0\u01c1"+
		"\7v\2\2\u01c1^\3\2\2\2\u01c2\u01c3\7R\2\2\u01c3\u01c4\7t\2\2\u01c4\u01c5"+
		"\7q\2\2\u01c5\u01c6\7q\2\2\u01c6\u01c7\7h\2\2\u01c7`\3\2\2\2\u01c8\u01c9"+
		"\7P\2\2\u01c9\u01ca\7q\2\2\u01ca\u01cb\7p\2\2\u01cb\u01cc\7H\2\2\u01cc"+
		"\u01cd\7w\2\2\u01cd\u01ce\7p\2\2\u01ce\u01cf\7i\2\2\u01cf\u01d0\7k\2\2"+
		"\u01d0\u01d1\7d\2\2\u01d1\u01d2\7n\2\2\u01d2\u01d3\7g\2\2\u01d3\u01d4"+
		"\7K\2\2\u01d4\u01d5\7f\2\2\u01d5b\3\2\2\2\u01d6\u01d7\7P\2\2\u01d7\u01d8"+
		"\7q\2\2\u01d8\u01d9\7p\2\2\u01d9\u01da\7H\2\2\u01da\u01db\7w\2\2\u01db"+
		"\u01dc\7p\2\2\u01dc\u01dd\7i\2\2\u01dd\u01de\7k\2\2\u01de\u01df\7d\2\2"+
		"\u01df\u01e0\7n\2\2\u01e0\u01e1\7g\2\2\u01e1\u01e2\7C\2\2\u01e2\u01e3"+
		"\7f\2\2\u01e3\u01e4\7f\2\2\u01e4\u01e5\7t\2\2\u01e5\u01e6\7g\2\2\u01e6"+
		"\u01e7\7u\2\2\u01e7\u01e8\7u\2\2\u01e8d\3\2\2\2\u01e9\u01ea\7D\2\2\u01ea"+
		"\u01eb\7n\2\2\u01eb\u01ec\7q\2\2\u01ec\u01ed\7d\2\2\u01edf\3\2\2\2\u01ee"+
		"\u01ef\7G\2\2\u01ef\u01f0\7z\2\2\u01f0\u01f1\7r\2\2\u01f1\u01f2\7t\2\2"+
		"\u01f2\u01f3\7g\2\2\u01f3\u01f4\7u\2\2\u01f4\u01f5\7u\2\2\u01f5\u01f6"+
		"\7k\2\2\u01f6\u01f7\7q\2\2\u01f7\u01f8\7p\2\2\u01f8h\3\2\2\2\u01f9\u01fa"+
		"\7*\2\2\u01faj\3\2\2\2\u01fb\u01fc\7+\2\2\u01fcl\3\2\2\2\u01fd\u01fe\7"+
		"*\2\2\u01fe\u01ff\7+\2\2\u01ffn\3\2\2\2\u0200\u0201\7>\2\2\u0201p\3\2"+
		"\2\2\u0202\u0203\7@\2\2\u0203r\3\2\2\2\u0204\u0205\7.\2\2\u0205t\3\2\2"+
		"\2\u0206\u0207\7=\2\2\u0207v\3\2\2\2\u0208\u0209\7V\2\2\u0209\u020a\7"+
		"C\2\2\u020a\u020b\7M\2\2\u020b\u020c\7G\2\2\u020c\u020d\7a\2\2\u020d\u020e"+
		"\7H\2\2\u020e\u020f\7T\2\2\u020f\u0210\7Q\2\2\u0210\u0211\7O\2\2\u0211"+
		"\u0212\7a\2\2\u0212\u0213\7Y\2\2\u0213\u0214\7Q\2\2\u0214\u0215\7T\2\2"+
		"\u0215\u0216\7M\2\2\u0216\u0217\7V\2\2\u0217\u0218\7Q\2\2\u0218\u0219"+
		"\7R\2\2\u0219x\3\2\2\2\u021a\u021b\7V\2\2\u021b\u021c\7C\2\2\u021c\u021d"+
		"\7M\2\2\u021d\u021e\7G\2\2\u021e\u021f\7a\2\2\u021f\u0220\7H\2\2\u0220"+
		"\u0221\7T\2\2\u0221\u0222\7Q\2\2\u0222\u0223\7O\2\2\u0223\u0224\7a\2\2"+
		"\u0224\u0225\7Y\2\2\u0225\u0226\7Q\2\2\u0226\u0227\7T\2\2\u0227\u0228"+
		"\7M\2\2\u0228\u0229\7V\2\2\u0229\u022a\7Q\2\2\u022a\u022b\7R\2\2\u022b"+
		"\u022c\7a\2\2\u022c\u022d\7D\2\2\u022d\u022e\7[\2\2\u022e\u022f\7a\2\2"+
		"\u022f\u0230\7C\2\2\u0230\u0231\7O\2\2\u0231\u0232\7Q\2\2\u0232\u0233"+
		"\7W\2\2\u0233\u0234\7P\2\2\u0234\u0235\7V\2\2\u0235z\3\2\2\2\u0236\u0237"+
		"\7V\2\2\u0237\u0238\7C\2\2\u0238\u0239\7M\2\2\u0239\u023a\7G\2\2\u023a"+
		"\u023b\7a\2\2\u023b\u023c\7H\2\2\u023c\u023d\7T\2\2\u023d\u023e\7Q\2\2"+
		"\u023e\u023f\7O\2\2\u023f\u0240\7a\2\2\u0240\u0241\7Y\2\2\u0241\u0242"+
		"\7Q\2\2\u0242\u0243\7T\2\2\u0243\u0244\7M\2\2\u0244\u0245\7V\2\2\u0245"+
		"\u0246\7Q\2\2\u0246\u0247\7R\2\2\u0247\u0248\7a\2\2\u0248\u0249\7D\2\2"+
		"\u0249\u024a\7[\2\2\u024a\u024b\7a\2\2\u024b\u024c\7K\2\2\u024c\u024d"+
		"\7F\2\2\u024d\u024e\7U\2\2\u024e|\3\2\2\2\u024f\u0250\7C\2\2\u0250\u0251"+
		"\7U\2\2\u0251\u0252\7U\2\2\u0252\u0253\7G\2\2\u0253\u0254\7T\2\2\u0254"+
		"\u0255\7V\2\2\u0255\u0256\7a\2\2\u0256\u0257\7Y\2\2\u0257\u0258\7Q\2\2"+
		"\u0258\u0259\7T\2\2\u0259\u025a\7M\2\2\u025a\u025b\7V\2\2\u025b\u025c"+
		"\7Q\2\2\u025c\u025d\7R\2\2\u025d\u025e\7a\2\2\u025e\u025f\7E\2\2\u025f"+
		"\u0260\7Q\2\2\u0260\u0261\7P\2\2\u0261\u0262\7V\2\2\u0262\u0263\7C\2\2"+
		"\u0263\u0264\7K\2\2\u0264\u0265\7P\2\2\u0265\u0266\7U\2\2\u0266~\3\2\2"+
		"\2\u0267\u0268\7C\2\2\u0268\u0269\7U\2\2\u0269\u026a\7U\2\2\u026a\u026b"+
		"\7G\2\2\u026b\u026c\7T\2\2\u026c\u026d\7V\2\2\u026d\u026e\7a\2\2\u026e"+
		"\u026f\7Y\2\2\u026f\u0270\7Q\2\2\u0270\u0271\7T\2\2\u0271\u0272\7M\2\2"+
		"\u0272\u0273\7V\2\2\u0273\u0274\7Q\2\2\u0274\u0275\7R\2\2\u0275\u0276"+
		"\7a\2\2\u0276\u0277\7E\2\2\u0277\u0278\7Q\2\2\u0278\u0279\7P\2\2\u0279"+
		"\u027a\7V\2\2\u027a\u027b\7C\2\2\u027b\u027c\7K\2\2\u027c\u027d\7P\2\2"+
		"\u027d\u027e\7U\2\2\u027e\u027f\7a\2\2\u027f\u0280\7D\2\2\u0280\u0281"+
		"\7[\2\2\u0281\u0282\7a\2\2\u0282\u0283\7C\2\2\u0283\u0284\7O\2\2\u0284"+
		"\u0285\7Q\2\2\u0285\u0286\7W\2\2\u0286\u0287\7P\2\2\u0287\u0288\7V\2\2"+
		"\u0288\u0080\3\2\2\2\u0289\u028a\7C\2\2\u028a\u028b\7U\2\2\u028b\u028c"+
		"\7U\2\2\u028c\u028d\7G\2\2\u028d\u028e\7T\2\2\u028e\u028f\7V\2\2\u028f"+
		"\u0290\7a\2\2\u0290\u0291\7Y\2\2\u0291\u0292\7Q\2\2\u0292\u0293\7T\2\2"+
		"\u0293\u0294\7M\2\2\u0294\u0295\7V\2\2\u0295\u0296\7Q\2\2\u0296\u0297"+
		"\7R\2\2\u0297\u0298\7a\2\2\u0298\u0299\7E\2\2\u0299\u029a\7Q\2\2\u029a"+
		"\u029b\7P\2\2\u029b\u029c\7V\2\2\u029c\u029d\7C\2\2\u029d\u029e\7K\2\2"+
		"\u029e\u029f\7P\2\2\u029f\u02a0\7U\2\2\u02a0\u02a1\7a\2\2\u02a1\u02a2"+
		"\7D\2\2\u02a2\u02a3\7[\2\2\u02a3\u02a4\7a\2\2\u02a4\u02a5\7K\2\2\u02a5"+
		"\u02a6\7F\2\2\u02a6\u02a7\7U\2\2\u02a7\u0082\3\2\2\2\u02a8\u02a9\7T\2"+
		"\2\u02a9\u02aa\7G\2\2\u02aa\u02ab\7V\2\2\u02ab\u02ac\7W\2\2\u02ac\u02ad"+
		"\7T\2\2\u02ad\u02ae\7P\2\2\u02ae\u02af\7a\2\2\u02af\u02b0\7V\2\2\u02b0"+
		"\u02b1\7Q\2\2\u02b1\u02b2\7a\2\2\u02b2\u02b3\7Y\2\2\u02b3\u02b4\7Q\2\2"+
		"\u02b4\u02b5\7T\2\2\u02b5\u02b6\7M\2\2\u02b6\u02b7\7V\2\2\u02b7\u02b8"+
		"\7Q\2\2\u02b8\u02b9\7R\2\2\u02b9\u0084\3\2\2\2\u02ba\u02bb\7R\2\2\u02bb"+
		"\u02bc\7Q\2\2\u02bc\u02bd\7R\2\2\u02bd\u02be\7a\2\2\u02be\u02bf\7H\2\2"+
		"\u02bf\u02c0\7T\2\2\u02c0\u02c1\7Q\2\2\u02c1\u02c2\7O\2\2\u02c2\u02c3"+
		"\7a\2\2\u02c3\u02c4\7C\2\2\u02c4\u02c5\7W\2\2\u02c5\u02c6\7V\2\2\u02c6"+
		"\u02c7\7J\2\2\u02c7\u02c8\7a\2\2\u02c8\u02c9\7\\\2\2\u02c9\u02ca\7Q\2"+
		"\2\u02ca\u02cb\7P\2\2\u02cb\u02cc\7G\2\2\u02cc\u0086\3\2\2\2\u02cd\u02ce"+
		"\7R\2\2\u02ce\u02cf\7W\2\2\u02cf\u02d0\7U\2\2\u02d0\u02d1\7J\2\2\u02d1"+
		"\u02d2\7a\2\2\u02d2\u02d3\7V\2\2\u02d3\u02d4\7Q\2\2\u02d4\u02d5\7a\2\2"+
		"\u02d5\u02d6\7C\2\2\u02d6\u02d7\7W\2\2\u02d7\u02d8\7V\2\2\u02d8\u02d9"+
		"\7J\2\2\u02d9\u02da\7a\2\2\u02da\u02db\7\\\2\2\u02db\u02dc\7Q\2\2\u02dc"+
		"\u02dd\7P\2\2\u02dd\u02de\7G\2\2\u02de\u0088\3\2\2\2\u02df\u02e0\7E\2"+
		"\2\u02e0\u02e1\7N\2\2\u02e1\u02e2\7G\2\2\u02e2\u02e3\7C\2\2\u02e3\u02e4"+
		"\7T\2\2\u02e4\u02e5\7a\2\2\u02e5\u02e6\7C\2\2\u02e6\u02e7\7W\2\2\u02e7"+
		"\u02e8\7V\2\2\u02e8\u02e9\7J\2\2\u02e9\u02ea\7\\\2\2\u02ea\u02eb\7Q\2"+
		"\2\u02eb\u02ec\7P\2\2\u02ec\u02ed\7G\2\2\u02ed\u008a\3\2\2\2\u02ee\u02ef"+
		"\7E\2\2\u02ef\u02f0\7T\2\2\u02f0\u02f1\7G\2\2\u02f1\u02f2\7C\2\2\u02f2"+
		"\u02f3\7V\2\2\u02f3\u02f4\7G\2\2\u02f4\u02f5\7a\2\2\u02f5\u02f6\7R\2\2"+
		"\u02f6\u02f7\7T\2\2\u02f7\u02f8\7Q\2\2\u02f8\u02f9\7Q\2\2\u02f9\u02fa"+
		"\7H\2\2\u02fa\u02fb\7a\2\2\u02fb\u02fc\7H\2\2\u02fc\u02fd\7T\2\2\u02fd"+
		"\u02fe\7Q\2\2\u02fe\u02ff\7O\2\2\u02ff\u0300\7a\2\2\u0300\u0301\7C\2\2"+
		"\u0301\u0302\7W\2\2\u0302\u0303\7V\2\2\u0303\u0304\7J\2\2\u0304\u0305"+
		"\7a\2\2\u0305\u0306\7\\\2\2\u0306\u0307\7Q\2\2\u0307\u0308\7P\2\2\u0308"+
		"\u0309\7G\2\2\u0309\u008c\3\2\2\2\u030a\u030b\7E\2\2\u030b\u030c\7T\2"+
		"\2\u030c\u030d\7G\2\2\u030d\u030e\7C\2\2\u030e\u030f\7V\2\2\u030f\u0310"+
		"\7G\2\2\u0310\u0311\7a\2\2\u0311\u0312\7R\2\2\u0312\u0313\7T\2\2\u0313"+
		"\u0314\7Q\2\2\u0314\u0315\7Q\2\2\u0315\u0316\7H\2\2\u0316\u0317\7a\2\2"+
		"\u0317\u0318\7H\2\2\u0318\u0319\7T\2\2\u0319\u031a\7Q\2\2\u031a\u031b"+
		"\7O\2\2\u031b\u031c\7a\2\2\u031c\u031d\7C\2\2\u031d\u031e\7W\2\2\u031e"+
		"\u031f\7V\2\2\u031f\u0320\7J\2\2\u0320\u0321\7a\2\2\u0321\u0322\7\\\2"+
		"\2\u0322\u0323\7Q\2\2\u0323\u0324\7P\2\2\u0324\u0325\7G\2\2\u0325\u0326"+
		"\7a\2\2\u0326\u0327\7D\2\2\u0327\u0328\7[\2\2\u0328\u0329\7a\2\2\u0329"+
		"\u032a\7C\2\2\u032a\u032b\7O\2\2\u032b\u032c\7Q\2\2\u032c\u032d\7W\2\2"+
		"\u032d\u032e\7P\2\2\u032e\u032f\7V\2\2\u032f\u008e\3\2\2\2\u0330\u0331"+
		"\7E\2\2\u0331\u0332\7T\2\2\u0332\u0333\7G\2\2\u0333\u0334\7C\2\2\u0334"+
		"\u0335\7V\2\2\u0335\u0336\7G\2\2\u0336\u0337\7a\2\2\u0337\u0338\7R\2\2"+
		"\u0338\u0339\7T\2\2\u0339\u033a\7Q\2\2\u033a\u033b\7Q\2\2\u033b\u033c"+
		"\7H\2\2\u033c\u033d\7a\2\2\u033d\u033e\7H\2\2\u033e\u033f\7T\2\2\u033f"+
		"\u0340\7Q\2\2\u0340\u0341\7O\2\2\u0341\u0342\7a\2\2\u0342\u0343\7C\2\2"+
		"\u0343\u0344\7W\2\2\u0344\u0345\7V\2\2\u0345\u0346\7J\2\2\u0346\u0347"+
		"\7a\2\2\u0347\u0348\7\\\2\2\u0348\u0349\7Q\2\2\u0349\u034a\7P\2\2\u034a"+
		"\u034b\7G\2\2\u034b\u034c\7a\2\2\u034c\u034d\7D\2\2\u034d\u034e\7[\2\2"+
		"\u034e\u034f\7a\2\2\u034f\u0350\7K\2\2\u0350\u0351\7F\2\2\u0351\u0352"+
		"\7U\2\2\u0352\u0090\3\2\2\2\u0353\u0354\7E\2\2\u0354\u0355\7T\2\2\u0355"+
		"\u0356\7G\2\2\u0356\u0357\7C\2\2\u0357\u0358\7V\2\2\u0358\u0359\7G\2\2"+
		"\u0359\u035a\7a\2\2\u035a\u035b\7R\2\2\u035b\u035c\7T\2\2\u035c\u035d"+
		"\7Q\2\2\u035d\u035e\7Q\2\2\u035e\u035f\7H\2\2\u035f\u0360\7a\2\2\u0360"+
		"\u0361\7H\2\2\u0361\u0362\7T\2\2\u0362\u0363\7Q\2\2\u0363\u0364\7O\2\2"+
		"\u0364\u0365\7a\2\2\u0365\u0366\7D\2\2\u0366\u0367\7W\2\2\u0367\u0368"+
		"\7E\2\2\u0368\u0369\7M\2\2\u0369\u036a\7G\2\2\u036a\u036b\7V\2\2\u036b"+
		"\u0092\3\2\2\2\u036c\u036d\7E\2\2\u036d\u036e\7N\2\2\u036e\u036f\7Q\2"+
		"\2\u036f\u0370\7P\2\2\u0370\u0371\7G\2\2\u0371\u0372\7a\2\2\u0372\u0373"+
		"\7R\2\2\u0373\u0374\7T\2\2\u0374\u0375\7Q\2\2\u0375\u0376\7Q\2\2\u0376"+
		"\u0377\7H\2\2\u0377\u0094\3\2\2\2\u0378\u0379\7F\2\2\u0379\u037a\7T\2"+
		"\2\u037a\u037b\7Q\2\2\u037b\u037c\7R\2\2\u037c\u037d\7a\2\2\u037d\u037e"+
		"\7R\2\2\u037e\u037f\7T\2\2\u037f\u0380\7Q\2\2\u0380\u0381\7Q\2\2\u0381"+
		"\u0382\7H\2\2\u0382\u0096\3\2\2\2\u0383\u0384\7F\2\2\u0384\u0385\7T\2"+
		"\2\u0385\u0386\7Q\2\2\u0386\u0387\7R\2\2\u0387\u0388\7a\2\2\u0388\u0389"+
		"\7C\2\2\u0389\u038a\7N\2\2\u038a\u038b\7N\2\2\u038b\u038c\7a\2\2\u038c"+
		"\u038d\7R\2\2\u038d\u038e\7T\2\2\u038e\u038f\7Q\2\2\u038f\u0390\7Q\2\2"+
		"\u0390\u0391\7H\2\2\u0391\u0392\7U\2\2\u0392\u0098\3\2\2\2\u0393\u0394"+
		"\7E\2\2\u0394\u0395\7C\2\2\u0395\u0396\7N\2\2\u0396\u0397\7N\2\2\u0397"+
		"\u0398\7a\2\2\u0398\u0399\7H\2\2\u0399\u039a\7W\2\2\u039a\u039b\7P\2\2"+
		"\u039b\u039c\7E\2\2\u039c\u039d\7V\2\2\u039d\u039e\7K\2\2\u039e\u039f"+
		"\7Q\2\2\u039f\u03a0\7P\2\2\u03a0\u009a\3\2\2\2\u03a1\u03a2\7E\2\2\u03a2"+
		"\u03a3\7C\2\2\u03a3\u03a4\7N\2\2\u03a4\u03a5\7N\2\2\u03a5\u03a6\7a\2\2"+
		"\u03a6\u03a7\7O\2\2\u03a7\u03a8\7G\2\2\u03a8\u03a9\7V\2\2\u03a9\u03aa"+
		"\7J\2\2\u03aa\u03ab\7Q\2\2\u03ab\u03ac\7F\2\2\u03ac\u009c\3\2\2\2\u03ad"+
		"\u03ae\7R\2\2\u03ae\u03af\7W\2\2\u03af\u03b0\7D\2\2\u03b0\u03b1\7N\2\2"+
		"\u03b1\u03b2\7K\2\2\u03b2\u03b3\7U\2\2\u03b3\u03b4\7J\2\2\u03b4\u03b5"+
		"\7a\2\2\u03b5\u03b6\7R\2\2\u03b6\u03b7\7C\2\2\u03b7\u03b8\7E\2\2\u03b8"+
		"\u03b9\7M\2\2\u03b9\u03ba\7C\2\2\u03ba\u03bb\7I\2\2\u03bb\u03bc\7G\2\2"+
		"\u03bc\u009e\3\2\2\2\u03bd\u03be\7D\2\2\u03be\u03bf\7W\2\2\u03bf\u03c0"+
		"\7T\2\2\u03c0\u03c1\7P\2\2\u03c1\u03c2\7a\2\2\u03c2\u03c3\7D\2\2\u03c3"+
		"\u03c4\7W\2\2\u03c4\u03c5\7E\2\2\u03c5\u03c6\7M\2\2\u03c6\u03c7\7G\2\2"+
		"\u03c7\u03c8\7V\2\2\u03c8\u00a0\3\2\2\2\u03c9\u03ca\7O\2\2\u03ca\u03cb"+
		"\7K\2\2\u03cb\u03cc\7P\2\2\u03cc\u03cd\7V\2\2\u03cd\u03ce\7a\2\2\u03ce"+
		"\u03cf\7H\2\2\u03cf\u03d0\7W\2\2\u03d0\u03d1\7P\2\2\u03d1\u03d2\7I\2\2"+
		"\u03d2\u03d3\7K\2\2\u03d3\u03d4\7D\2\2\u03d4\u03d5\7N\2\2\u03d5\u03d6"+
		"\7G\2\2\u03d6\u00a2\3\2\2\2\u03d7\u03d8\7E\2\2\u03d8\u03d9\7T\2\2\u03d9"+
		"\u03da\7G\2\2\u03da\u03db\7C\2\2\u03db\u03dc\7V\2\2\u03dc\u03dd\7G\2\2"+
		"\u03dd\u03de\7a\2\2\u03de\u03df\7T\2\2\u03df\u03e0\7G\2\2\u03e0\u03e1"+
		"\7U\2\2\u03e1\u03e2\7Q\2\2\u03e2\u03e3\7W\2\2\u03e3\u03e4\7T\2\2\u03e4"+
		"\u03e5\7E\2\2\u03e5\u03e6\7G\2\2\u03e6\u00a4\3\2\2\2\u03e7\u03ee\7$\2"+
		"\2\u03e8\u03e9\7^\2\2\u03e9\u03ed\t\2\2\2\u03ea\u03ed\n\3\2\2\u03eb\u03ed"+
		"\t\4\2\2\u03ec\u03e8\3\2\2\2\u03ec\u03ea\3\2\2\2\u03ec\u03eb\3\2\2\2\u03ed"+
		"\u03f0\3\2\2\2\u03ee\u03ec\3\2\2\2\u03ee\u03ef\3\2\2\2\u03ef\u03f1\3\2"+
		"\2\2\u03f0\u03ee\3\2\2\2\u03f1\u03f2\7$\2\2\u03f2\u00a6\3\2\2\2\u03f3"+
		"\u03f4\t\5\2\2\u03f4\u00a8\3\2\2\2\u03f5\u03f6\t\6\2\2\u03f6\u00aa\3\2"+
		"\2\2\u03f7\u03f9\5\u00a7T\2\u03f8\u03f7\3\2\2\2\u03f9\u03fa\3\2\2\2\u03fa"+
		"\u03f8\3\2\2\2\u03fa\u03fb\3\2\2\2\u03fb\u00ac\3\2\2\2\u03fc\u03fe\t\7"+
		"\2\2\u03fd\u03fc\3\2\2\2\u03fe\u03ff\3\2\2\2\u03ff\u03fd\3\2\2\2\u03ff"+
		"\u0400\3\2\2\2\u0400\u0401\3\2\2\2\u0401\u0402\bW\2\2\u0402\u00ae\3\2"+
		"\2\2\u0403\u0407\7%\2\2\u0404\u0406\n\b\2\2\u0405\u0404\3\2\2\2\u0406"+
		"\u0409\3\2\2\2\u0407\u0405\3\2\2\2\u0407\u0408\3\2\2\2\u0408\u040a\3\2"+
		"\2\2\u0409\u0407\3\2\2\2\u040a\u040b\bX\2\2\u040b\u00b0\3\2\2\2\t\2\u00b3"+
		"\u03ec\u03ee\u03fa\u03ff\u0407\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}