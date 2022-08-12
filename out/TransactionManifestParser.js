"use strict";
// Generated from src/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashContext = exports.ResourceAddressContext = exports.ComponentAddressContext = exports.PackageAddressContext = exports.PreciseDecimalContext = exports.DecimalContext = exports.MapContext = exports.SetContext = exports.ListContext = exports.TupleContext = exports.ArrayContext = exports.ErrContext = exports.OkContext = exports.NoneContext = exports.SomeContext = exports.OptionContext = exports.Enum_Context = exports.StructContext = exports.StringContext = exports.SafeU512Context = exports.SafeU384Context = exports.SafeU256Context = exports.SafeU128Context = exports.SafeU64Context = exports.SafeU32Context = exports.SafeU16Context = exports.SafeU8Context = exports.SafeI512Context = exports.SafeI384Context = exports.SafeI256Context = exports.SafeI128Context = exports.SafeI64Context = exports.SafeI32Context = exports.SafeI16Context = exports.SafeI8Context = exports.U128Context = exports.U64Context = exports.U32Context = exports.U16Context = exports.U8Context = exports.I128Context = exports.I64Context = exports.I32Context = exports.I16Context = exports.I8Context = exports.BoolContext = exports.UnitContext = exports.ManifestInstructionContext = exports.ManifestContext = exports.TransactionManifestParser = void 0;
exports.ValueContext = exports.TypeContext = exports.BytesContext = exports.NonFungibleAddressContext = exports.NonFungible_idContext = exports.ProofContext = exports.BucketContext = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class TransactionManifestParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(TransactionManifestParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return TransactionManifestParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() {
        return "TransactionManifest.g4";
    }
    // @Override
    get ruleNames() {
        return TransactionManifestParser.ruleNames;
    }
    // @Override
    get serializedATN() {
        return TransactionManifestParser._serializedATN;
    }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    manifest() {
        let _localctx = new ManifestContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TransactionManifestParser.RULE_manifest);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((_la - 90) & ~0x1f) === 0 &&
                    ((1 << (_la - 90)) &
                        ((1 <<
                            (TransactionManifestParser.TAKE_FROM_WORKTOP -
                                90)) |
                            (1 <<
                                (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.RETURN_TO_WORKTOP -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.POP_FROM_AUTH_ZONE -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.PUSH_TO_AUTH_ZONE -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.CLEAR_AUTHZONE -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.CREATE_PROOF_FROM_BUCKET -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.CLONE_PROOF - 90)) |
                            (1 << (TransactionManifestParser.DROP_PROOF - 90)) |
                            (1 <<
                                (TransactionManifestParser.DROP_ALL_PROOFS -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.CALL_FUNCTION -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.CALL_METHOD - 90)) |
                            (1 <<
                                (TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES -
                                    90)) |
                            (1 <<
                                (TransactionManifestParser.PUBLISH_PACKAGE -
                                    90)))) !==
                        0) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    manifestInstruction() {
        let _localctx = new ManifestInstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TransactionManifestParser.RULE_manifestInstruction);
        let _la;
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
                        this.packageAddress();
                        this.state = 122;
                        this.string();
                        this.state = 123;
                        this.string();
                        this.state = 127;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((_la & ~0x1f) === 0 &&
                            ((1 << _la) &
                                ((1 << TransactionManifestParser.T__0) |
                                    (1 <<
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
                                        TransactionManifestParser.SAFE_I8_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I16_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I32_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I64_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I128_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I256_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I384_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I512_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U8_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U16_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U32_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U64_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U128_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U384_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U256_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U512_LITERAL))) !==
                                0) ||
                            (((_la - 60) & ~0x1f) === 0 &&
                                ((1 << (_la - 60)) &
                                    ((1 <<
                                        (TransactionManifestParser.STRUCT_TYPE -
                                            60)) |
                                        (1 <<
                                            (TransactionManifestParser.ENUM_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.SOME_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.NONE_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.OK_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.ERR_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.ARRAY_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.TUPLE_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.LIST_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.SET_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.MAP_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.DECIMAL_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.HASH_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.BUCKET_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.PROOF_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.BYTES_TYPE -
                                                60)))) !==
                                    0) ||
                            _la === TransactionManifestParser.STRING_LITERAL) {
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
                        this.componentAddress();
                        this.state = 134;
                        this.string();
                        this.state = 138;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((_la & ~0x1f) === 0 &&
                            ((1 << _la) &
                                ((1 << TransactionManifestParser.T__0) |
                                    (1 <<
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
                                        TransactionManifestParser.SAFE_I8_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I16_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I32_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I64_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I128_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I256_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I384_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_I512_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U8_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U16_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U32_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U64_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U128_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U384_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U256_LITERAL) |
                                    (1 <<
                                        TransactionManifestParser.SAFE_U512_LITERAL))) !==
                                0) ||
                            (((_la - 60) & ~0x1f) === 0 &&
                                ((1 << (_la - 60)) &
                                    ((1 <<
                                        (TransactionManifestParser.STRUCT_TYPE -
                                            60)) |
                                        (1 <<
                                            (TransactionManifestParser.ENUM_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.SOME_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.NONE_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.OK_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.ERR_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.ARRAY_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.TUPLE_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.LIST_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.SET_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.MAP_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.DECIMAL_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.HASH_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.BUCKET_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.PROOF_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                                60)) |
                                        (1 <<
                                            (TransactionManifestParser.BYTES_TYPE -
                                                60)))) !==
                                    0) ||
                            _la === TransactionManifestParser.STRING_LITERAL) {
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
                        this.componentAddress();
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
                        this.resourceAddress();
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
                        this.resourceAddress();
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
                        this.resourceAddress();
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
                        this.resourceAddress();
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
                        this.resourceAddress();
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
                        this.resourceAddress();
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
                        this.resourceAddress();
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
                        this.resourceAddress();
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
                        this.resourceAddress();
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unit() {
        let _localctx = new UnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TransactionManifestParser.RULE_unit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                this.match(TransactionManifestParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bool() {
        let _localctx = new BoolContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TransactionManifestParser.RULE_bool);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.match(TransactionManifestParser.BOOL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    i8() {
        let _localctx = new I8Context(this._ctx, this.state);
        this.enterRule(_localctx, 8, TransactionManifestParser.RULE_i8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 236;
                this.match(TransactionManifestParser.I8_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    i16() {
        let _localctx = new I16Context(this._ctx, this.state);
        this.enterRule(_localctx, 10, TransactionManifestParser.RULE_i16);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(TransactionManifestParser.I16_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    i32() {
        let _localctx = new I32Context(this._ctx, this.state);
        this.enterRule(_localctx, 12, TransactionManifestParser.RULE_i32);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.match(TransactionManifestParser.I32_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    i64() {
        let _localctx = new I64Context(this._ctx, this.state);
        this.enterRule(_localctx, 14, TransactionManifestParser.RULE_i64);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 242;
                this.match(TransactionManifestParser.I64_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    i128() {
        let _localctx = new I128Context(this._ctx, this.state);
        this.enterRule(_localctx, 16, TransactionManifestParser.RULE_i128);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.match(TransactionManifestParser.I128_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    u8() {
        let _localctx = new U8Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, TransactionManifestParser.RULE_u8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.match(TransactionManifestParser.U8_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    u16() {
        let _localctx = new U16Context(this._ctx, this.state);
        this.enterRule(_localctx, 20, TransactionManifestParser.RULE_u16);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 248;
                this.match(TransactionManifestParser.U16_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    u32() {
        let _localctx = new U32Context(this._ctx, this.state);
        this.enterRule(_localctx, 22, TransactionManifestParser.RULE_u32);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 250;
                this.match(TransactionManifestParser.U32_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    u64() {
        let _localctx = new U64Context(this._ctx, this.state);
        this.enterRule(_localctx, 24, TransactionManifestParser.RULE_u64);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 252;
                this.match(TransactionManifestParser.U64_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    u128() {
        let _localctx = new U128Context(this._ctx, this.state);
        this.enterRule(_localctx, 26, TransactionManifestParser.RULE_u128);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this.match(TransactionManifestParser.U128_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeI8() {
        let _localctx = new SafeI8Context(this._ctx, this.state);
        this.enterRule(_localctx, 28, TransactionManifestParser.RULE_safeI8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 256;
                this.match(TransactionManifestParser.SAFE_I8_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeI16() {
        let _localctx = new SafeI16Context(this._ctx, this.state);
        this.enterRule(_localctx, 30, TransactionManifestParser.RULE_safeI16);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                this.match(TransactionManifestParser.SAFE_I16_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeI32() {
        let _localctx = new SafeI32Context(this._ctx, this.state);
        this.enterRule(_localctx, 32, TransactionManifestParser.RULE_safeI32);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 260;
                this.match(TransactionManifestParser.SAFE_I32_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeI64() {
        let _localctx = new SafeI64Context(this._ctx, this.state);
        this.enterRule(_localctx, 34, TransactionManifestParser.RULE_safeI64);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this.match(TransactionManifestParser.SAFE_I64_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeI128() {
        let _localctx = new SafeI128Context(this._ctx, this.state);
        this.enterRule(_localctx, 36, TransactionManifestParser.RULE_safeI128);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 264;
                this.match(TransactionManifestParser.SAFE_I128_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeI256() {
        let _localctx = new SafeI256Context(this._ctx, this.state);
        this.enterRule(_localctx, 38, TransactionManifestParser.RULE_safeI256);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this.match(TransactionManifestParser.SAFE_I256_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeI384() {
        let _localctx = new SafeI384Context(this._ctx, this.state);
        this.enterRule(_localctx, 40, TransactionManifestParser.RULE_safeI384);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 268;
                this.match(TransactionManifestParser.SAFE_I384_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeI512() {
        let _localctx = new SafeI512Context(this._ctx, this.state);
        this.enterRule(_localctx, 42, TransactionManifestParser.RULE_safeI512);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
                this.match(TransactionManifestParser.SAFE_I512_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeU8() {
        let _localctx = new SafeU8Context(this._ctx, this.state);
        this.enterRule(_localctx, 44, TransactionManifestParser.RULE_safeU8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.match(TransactionManifestParser.SAFE_U8_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeU16() {
        let _localctx = new SafeU16Context(this._ctx, this.state);
        this.enterRule(_localctx, 46, TransactionManifestParser.RULE_safeU16);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this.match(TransactionManifestParser.SAFE_U16_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeU32() {
        let _localctx = new SafeU32Context(this._ctx, this.state);
        this.enterRule(_localctx, 48, TransactionManifestParser.RULE_safeU32);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 276;
                this.match(TransactionManifestParser.SAFE_U32_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeU64() {
        let _localctx = new SafeU64Context(this._ctx, this.state);
        this.enterRule(_localctx, 50, TransactionManifestParser.RULE_safeU64);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 278;
                this.match(TransactionManifestParser.SAFE_U64_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeU128() {
        let _localctx = new SafeU128Context(this._ctx, this.state);
        this.enterRule(_localctx, 52, TransactionManifestParser.RULE_safeU128);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 280;
                this.match(TransactionManifestParser.SAFE_U128_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeU256() {
        let _localctx = new SafeU256Context(this._ctx, this.state);
        this.enterRule(_localctx, 54, TransactionManifestParser.RULE_safeU256);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                this.match(TransactionManifestParser.SAFE_U256_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeU384() {
        let _localctx = new SafeU384Context(this._ctx, this.state);
        this.enterRule(_localctx, 56, TransactionManifestParser.RULE_safeU384);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                this.match(TransactionManifestParser.SAFE_U384_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeU512() {
        let _localctx = new SafeU512Context(this._ctx, this.state);
        this.enterRule(_localctx, 58, TransactionManifestParser.RULE_safeU512);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 286;
                this.match(TransactionManifestParser.SAFE_U512_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    string() {
        let _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, TransactionManifestParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 288;
                this.match(TransactionManifestParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    struct() {
        let _localctx = new StructContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, TransactionManifestParser.RULE_struct);
        let _la;
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
                if (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << TransactionManifestParser.T__0) |
                            (1 << TransactionManifestParser.BOOL_LITERAL) |
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
                            (1 <<
                                TransactionManifestParser.SAFE_I8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I512_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U512_LITERAL))) !==
                        0) ||
                    (((_la - 60) & ~0x1f) === 0 &&
                        ((1 << (_la - 60)) &
                            ((1 <<
                                (TransactionManifestParser.STRUCT_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ENUM_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SOME_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NONE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.OK_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ERR_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ARRAY_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.TUPLE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.LIST_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SET_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.MAP_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.HASH_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BUCKET_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PROOF_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BYTES_TYPE -
                                        60)))) !==
                            0) ||
                    _la === TransactionManifestParser.STRING_LITERAL) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enum_() {
        let _localctx = new Enum_Context(this._ctx, this.state);
        this.enterRule(_localctx, 64, TransactionManifestParser.RULE_enum_);
        let _la;
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
                    if (((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                            ((1 << TransactionManifestParser.T__0) |
                                (1 <<
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
                                    TransactionManifestParser.SAFE_I8_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_I16_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_I32_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_I64_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_I128_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_I256_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_I384_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_I512_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_U8_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_U16_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_U32_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_U64_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_U128_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_U384_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_U256_LITERAL) |
                                (1 <<
                                    TransactionManifestParser.SAFE_U512_LITERAL))) !==
                            0) ||
                        (((_la - 60) & ~0x1f) === 0 &&
                            ((1 << (_la - 60)) &
                                ((1 <<
                                    (TransactionManifestParser.STRUCT_TYPE -
                                        60)) |
                                    (1 <<
                                        (TransactionManifestParser.ENUM_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.SOME_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.NONE_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.OK_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.ERR_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.ARRAY_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.TUPLE_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.LIST_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.SET_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.MAP_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.DECIMAL_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.HASH_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.BUCKET_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.PROOF_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                            60)) |
                                    (1 <<
                                        (TransactionManifestParser.BYTES_TYPE -
                                            60)))) !==
                                0) ||
                        _la === TransactionManifestParser.STRING_LITERAL) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    option() {
        let _localctx = new OptionContext(this._ctx, this.state);
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
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    some() {
        let _localctx = new SomeContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, TransactionManifestParser.RULE_some);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    none() {
        let _localctx = new NoneContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, TransactionManifestParser.RULE_none);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                this.match(TransactionManifestParser.NONE_TYPE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ok() {
        let _localctx = new OkContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, TransactionManifestParser.RULE_ok);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    err() {
        let _localctx = new ErrContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, TransactionManifestParser.RULE_err);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    array() {
        let _localctx = new ArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, TransactionManifestParser.RULE_array);
        let _la;
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
                if (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << TransactionManifestParser.T__0) |
                            (1 << TransactionManifestParser.BOOL_LITERAL) |
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
                            (1 <<
                                TransactionManifestParser.SAFE_I8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I512_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U512_LITERAL))) !==
                        0) ||
                    (((_la - 60) & ~0x1f) === 0 &&
                        ((1 << (_la - 60)) &
                            ((1 <<
                                (TransactionManifestParser.STRUCT_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ENUM_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SOME_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NONE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.OK_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ERR_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ARRAY_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.TUPLE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.LIST_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SET_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.MAP_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.HASH_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BUCKET_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PROOF_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BYTES_TYPE -
                                        60)))) !==
                            0) ||
                    _la === TransactionManifestParser.STRING_LITERAL) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tuple() {
        let _localctx = new TupleContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, TransactionManifestParser.RULE_tuple);
        let _la;
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
                if (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << TransactionManifestParser.T__0) |
                            (1 << TransactionManifestParser.BOOL_LITERAL) |
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
                            (1 <<
                                TransactionManifestParser.SAFE_I8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I512_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U512_LITERAL))) !==
                        0) ||
                    (((_la - 60) & ~0x1f) === 0 &&
                        ((1 << (_la - 60)) &
                            ((1 <<
                                (TransactionManifestParser.STRUCT_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ENUM_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SOME_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NONE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.OK_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ERR_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ARRAY_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.TUPLE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.LIST_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SET_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.MAP_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.HASH_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BUCKET_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PROOF_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BYTES_TYPE -
                                        60)))) !==
                            0) ||
                    _la === TransactionManifestParser.STRING_LITERAL) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list() {
        let _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, TransactionManifestParser.RULE_list);
        let _la;
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
                if (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << TransactionManifestParser.T__0) |
                            (1 << TransactionManifestParser.BOOL_LITERAL) |
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
                            (1 <<
                                TransactionManifestParser.SAFE_I8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I512_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U512_LITERAL))) !==
                        0) ||
                    (((_la - 60) & ~0x1f) === 0 &&
                        ((1 << (_la - 60)) &
                            ((1 <<
                                (TransactionManifestParser.STRUCT_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ENUM_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SOME_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NONE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.OK_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ERR_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ARRAY_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.TUPLE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.LIST_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SET_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.MAP_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.HASH_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BUCKET_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PROOF_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BYTES_TYPE -
                                        60)))) !==
                            0) ||
                    _la === TransactionManifestParser.STRING_LITERAL) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    set() {
        let _localctx = new SetContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, TransactionManifestParser.RULE_set);
        let _la;
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
                if (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << TransactionManifestParser.T__0) |
                            (1 << TransactionManifestParser.BOOL_LITERAL) |
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
                            (1 <<
                                TransactionManifestParser.SAFE_I8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I512_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U512_LITERAL))) !==
                        0) ||
                    (((_la - 60) & ~0x1f) === 0 &&
                        ((1 << (_la - 60)) &
                            ((1 <<
                                (TransactionManifestParser.STRUCT_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ENUM_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SOME_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NONE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.OK_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ERR_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ARRAY_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.TUPLE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.LIST_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SET_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.MAP_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.HASH_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BUCKET_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PROOF_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BYTES_TYPE -
                                        60)))) !==
                            0) ||
                    _la === TransactionManifestParser.STRING_LITERAL) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    map() {
        let _localctx = new MapContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, TransactionManifestParser.RULE_map);
        let _la;
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
                while (((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                        ((1 << TransactionManifestParser.T__0) |
                            (1 << TransactionManifestParser.BOOL_LITERAL) |
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
                            (1 <<
                                TransactionManifestParser.SAFE_I8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_I512_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U8_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U16_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U32_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U64_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U128_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U384_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U256_LITERAL) |
                            (1 <<
                                TransactionManifestParser.SAFE_U512_LITERAL))) !==
                        0) ||
                    (((_la - 60) & ~0x1f) === 0 &&
                        ((1 << (_la - 60)) &
                            ((1 <<
                                (TransactionManifestParser.STRUCT_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ENUM_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SOME_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NONE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.OK_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ERR_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.ARRAY_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.TUPLE_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.LIST_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.SET_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.MAP_TYPE - 60)) |
                                (1 <<
                                    (TransactionManifestParser.DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.HASH_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BUCKET_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.PROOF_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                        60)) |
                                (1 <<
                                    (TransactionManifestParser.BYTES_TYPE -
                                        60)))) !==
                            0) ||
                    _la === TransactionManifestParser.STRING_LITERAL) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    decimal() {
        let _localctx = new DecimalContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    preciseDecimal() {
        let _localctx = new PreciseDecimalContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, TransactionManifestParser.RULE_preciseDecimal);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    packageAddress() {
        let _localctx = new PackageAddressContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, TransactionManifestParser.RULE_packageAddress);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    componentAddress() {
        let _localctx = new ComponentAddressContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, TransactionManifestParser.RULE_componentAddress);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resourceAddress() {
        let _localctx = new ResourceAddressContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, TransactionManifestParser.RULE_resourceAddress);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    hash() {
        let _localctx = new HashContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bucket() {
        let _localctx = new BucketContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, TransactionManifestParser.RULE_bucket);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 476;
                this.match(TransactionManifestParser.BUCKET_TYPE);
                this.state = 477;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 478;
                _la = this._input.LA(1);
                if (!(_la === TransactionManifestParser.U32_LITERAL ||
                    _la === TransactionManifestParser.STRING_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    proof() {
        let _localctx = new ProofContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, TransactionManifestParser.RULE_proof);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 481;
                this.match(TransactionManifestParser.PROOF_TYPE);
                this.state = 482;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 483;
                _la = this._input.LA(1);
                if (!(_la === TransactionManifestParser.U32_LITERAL ||
                    _la === TransactionManifestParser.STRING_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nonFungible_id() {
        let _localctx = new NonFungible_idContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, TransactionManifestParser.RULE_nonFungible_id);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nonFungibleAddress() {
        let _localctx = new NonFungibleAddressContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, TransactionManifestParser.RULE_nonFungibleAddress);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    bytes() {
        let _localctx = new BytesContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type() {
        let _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, TransactionManifestParser.RULE_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 501;
                _la = this._input.LA(1);
                if (!((((_la - 31) & ~0x1f) === 0 &&
                    ((1 << (_la - 31)) &
                        ((1 <<
                            (TransactionManifestParser.UNIT_TYPE -
                                31)) |
                            (1 <<
                                (TransactionManifestParser.BOOL_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.I8_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.I16_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.I32_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.I64_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.I128_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.U8_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.U16_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.U32_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.U64_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.U128_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_I8_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_I16_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_I32_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_I64_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_I128_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_I256_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_I384_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_I512_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_U8_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_U16_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_U32_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_U64_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_U128_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_U384_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_U256_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.SAFE_U512_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.STRING_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.STRUCT_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.ENUM_TYPE -
                                    31)) |
                            (1 <<
                                (TransactionManifestParser.OPTION_TYPE -
                                    31)))) !==
                        0) ||
                    (((_la - 63) & ~0x1f) === 0 &&
                        ((1 << (_la - 63)) &
                            ((1 <<
                                (TransactionManifestParser.RESULT_TYPE -
                                    63)) |
                                (1 <<
                                    (TransactionManifestParser.SOME_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.NONE_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.OK_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.ERR_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.ARRAY_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.TUPLE_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.LIST_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.SET_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.MAP_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.DECIMAL_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.PRECISE_DECIMAL_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.PACKAGE_ADDRESS_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.COMPONENT_ADDRESS_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.RESOURCE_ADDRESS_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.HASH_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.BUCKET_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.PROOF_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE -
                                        63)) |
                                (1 <<
                                    (TransactionManifestParser.BYTES_TYPE -
                                        63)))) !==
                            0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, TransactionManifestParser.RULE_value);
        try {
            this.state = 555;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
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
                        this.safeI8();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 516;
                        this.safeI16();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 517;
                        this.safeI32();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 518;
                        this.safeI64();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 519;
                        this.safeI128();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 520;
                        this.safeI256();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 521;
                        this.safeI384();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 522;
                        this.safeI512();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 523;
                        this.safeU8();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 524;
                        this.safeU16();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 525;
                        this.safeU32();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 526;
                        this.safeU64();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 527;
                        this.safeU128();
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 528;
                        this.safeU256();
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 529;
                        this.safeU384();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 530;
                        this.safeU512();
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
                        this.preciseDecimal();
                    }
                    break;
                case 44:
                    this.enterOuterAlt(_localctx, 44);
                    {
                        this.state = 546;
                        this.packageAddress();
                    }
                    break;
                case 45:
                    this.enterOuterAlt(_localctx, 45);
                    {
                        this.state = 547;
                        this.componentAddress();
                    }
                    break;
                case 46:
                    this.enterOuterAlt(_localctx, 46);
                    {
                        this.state = 548;
                        this.resourceAddress();
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
                        this.nonFungible_id();
                    }
                    break;
                case 51:
                    this.enterOuterAlt(_localctx, 51);
                    {
                        this.state = 553;
                        this.nonFungibleAddress();
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!TransactionManifestParser.__ATN) {
            TransactionManifestParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TransactionManifestParser._serializedATN));
        }
        return TransactionManifestParser.__ATN;
    }
}
exports.TransactionManifestParser = TransactionManifestParser;
TransactionManifestParser.T__0 = 1;
TransactionManifestParser.BOOL_LITERAL = 2;
TransactionManifestParser.I8_LITERAL = 3;
TransactionManifestParser.I16_LITERAL = 4;
TransactionManifestParser.I32_LITERAL = 5;
TransactionManifestParser.I64_LITERAL = 6;
TransactionManifestParser.I128_LITERAL = 7;
TransactionManifestParser.U8_LITERAL = 8;
TransactionManifestParser.U16_LITERAL = 9;
TransactionManifestParser.U32_LITERAL = 10;
TransactionManifestParser.U64_LITERAL = 11;
TransactionManifestParser.U128_LITERAL = 12;
TransactionManifestParser.SAFE_I8_LITERAL = 13;
TransactionManifestParser.SAFE_I16_LITERAL = 14;
TransactionManifestParser.SAFE_I32_LITERAL = 15;
TransactionManifestParser.SAFE_I64_LITERAL = 16;
TransactionManifestParser.SAFE_I128_LITERAL = 17;
TransactionManifestParser.SAFE_I256_LITERAL = 18;
TransactionManifestParser.SAFE_I384_LITERAL = 19;
TransactionManifestParser.SAFE_I512_LITERAL = 20;
TransactionManifestParser.SAFE_U8_LITERAL = 21;
TransactionManifestParser.SAFE_U16_LITERAL = 22;
TransactionManifestParser.SAFE_U32_LITERAL = 23;
TransactionManifestParser.SAFE_U64_LITERAL = 24;
TransactionManifestParser.SAFE_U128_LITERAL = 25;
TransactionManifestParser.SAFE_U384_LITERAL = 26;
TransactionManifestParser.SAFE_U256_LITERAL = 27;
TransactionManifestParser.SAFE_U512_LITERAL = 28;
TransactionManifestParser.TRUE = 29;
TransactionManifestParser.FALSE = 30;
TransactionManifestParser.UNIT_TYPE = 31;
TransactionManifestParser.BOOL_TYPE = 32;
TransactionManifestParser.I8_TYPE = 33;
TransactionManifestParser.I16_TYPE = 34;
TransactionManifestParser.I32_TYPE = 35;
TransactionManifestParser.I64_TYPE = 36;
TransactionManifestParser.I128_TYPE = 37;
TransactionManifestParser.U8_TYPE = 38;
TransactionManifestParser.U16_TYPE = 39;
TransactionManifestParser.U32_TYPE = 40;
TransactionManifestParser.U64_TYPE = 41;
TransactionManifestParser.U128_TYPE = 42;
TransactionManifestParser.SAFE_I8_TYPE = 43;
TransactionManifestParser.SAFE_I16_TYPE = 44;
TransactionManifestParser.SAFE_I32_TYPE = 45;
TransactionManifestParser.SAFE_I64_TYPE = 46;
TransactionManifestParser.SAFE_I128_TYPE = 47;
TransactionManifestParser.SAFE_I256_TYPE = 48;
TransactionManifestParser.SAFE_I384_TYPE = 49;
TransactionManifestParser.SAFE_I512_TYPE = 50;
TransactionManifestParser.SAFE_U8_TYPE = 51;
TransactionManifestParser.SAFE_U16_TYPE = 52;
TransactionManifestParser.SAFE_U32_TYPE = 53;
TransactionManifestParser.SAFE_U64_TYPE = 54;
TransactionManifestParser.SAFE_U128_TYPE = 55;
TransactionManifestParser.SAFE_U384_TYPE = 56;
TransactionManifestParser.SAFE_U256_TYPE = 57;
TransactionManifestParser.SAFE_U512_TYPE = 58;
TransactionManifestParser.STRING_TYPE = 59;
TransactionManifestParser.STRUCT_TYPE = 60;
TransactionManifestParser.ENUM_TYPE = 61;
TransactionManifestParser.OPTION_TYPE = 62;
TransactionManifestParser.RESULT_TYPE = 63;
TransactionManifestParser.SOME_TYPE = 64;
TransactionManifestParser.NONE_TYPE = 65;
TransactionManifestParser.OK_TYPE = 66;
TransactionManifestParser.ERR_TYPE = 67;
TransactionManifestParser.ARRAY_TYPE = 68;
TransactionManifestParser.TUPLE_TYPE = 69;
TransactionManifestParser.LIST_TYPE = 70;
TransactionManifestParser.SET_TYPE = 71;
TransactionManifestParser.MAP_TYPE = 72;
TransactionManifestParser.DECIMAL_TYPE = 73;
TransactionManifestParser.PRECISE_DECIMAL_TYPE = 74;
TransactionManifestParser.PACKAGE_ADDRESS_TYPE = 75;
TransactionManifestParser.COMPONENT_ADDRESS_TYPE = 76;
TransactionManifestParser.RESOURCE_ADDRESS_TYPE = 77;
TransactionManifestParser.HASH_TYPE = 78;
TransactionManifestParser.BUCKET_TYPE = 79;
TransactionManifestParser.PROOF_TYPE = 80;
TransactionManifestParser.NON_FUNGIBLE_ID_TYPE = 81;
TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE = 82;
TransactionManifestParser.BYTES_TYPE = 83;
TransactionManifestParser.OPEN_PARENTHESIS = 84;
TransactionManifestParser.CLOED_PARENTHESIS = 85;
TransactionManifestParser.LESS_THAN = 86;
TransactionManifestParser.GREATER_THAN = 87;
TransactionManifestParser.COMMA = 88;
TransactionManifestParser.SEMICOLON = 89;
TransactionManifestParser.TAKE_FROM_WORKTOP = 90;
TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT = 91;
TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS = 92;
TransactionManifestParser.ASSERT_WORKTOP_CONTAINS = 93;
TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT = 94;
TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS = 95;
TransactionManifestParser.RETURN_TO_WORKTOP = 96;
TransactionManifestParser.POP_FROM_AUTH_ZONE = 97;
TransactionManifestParser.PUSH_TO_AUTH_ZONE = 98;
TransactionManifestParser.CLEAR_AUTHZONE = 99;
TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE = 100;
TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT = 101;
TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS = 102;
TransactionManifestParser.CREATE_PROOF_FROM_BUCKET = 103;
TransactionManifestParser.CLONE_PROOF = 104;
TransactionManifestParser.DROP_PROOF = 105;
TransactionManifestParser.DROP_ALL_PROOFS = 106;
TransactionManifestParser.CALL_FUNCTION = 107;
TransactionManifestParser.CALL_METHOD = 108;
TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES = 109;
TransactionManifestParser.PUBLISH_PACKAGE = 110;
TransactionManifestParser.STRING_LITERAL = 111;
TransactionManifestParser.DIGIT = 112;
TransactionManifestParser.LETTER = 113;
TransactionManifestParser.NUMBER = 114;
TransactionManifestParser.WS = 115;
TransactionManifestParser.COMMENT = 116;
TransactionManifestParser.RULE_manifest = 0;
TransactionManifestParser.RULE_manifestInstruction = 1;
TransactionManifestParser.RULE_unit = 2;
TransactionManifestParser.RULE_bool = 3;
TransactionManifestParser.RULE_i8 = 4;
TransactionManifestParser.RULE_i16 = 5;
TransactionManifestParser.RULE_i32 = 6;
TransactionManifestParser.RULE_i64 = 7;
TransactionManifestParser.RULE_i128 = 8;
TransactionManifestParser.RULE_u8 = 9;
TransactionManifestParser.RULE_u16 = 10;
TransactionManifestParser.RULE_u32 = 11;
TransactionManifestParser.RULE_u64 = 12;
TransactionManifestParser.RULE_u128 = 13;
TransactionManifestParser.RULE_safeI8 = 14;
TransactionManifestParser.RULE_safeI16 = 15;
TransactionManifestParser.RULE_safeI32 = 16;
TransactionManifestParser.RULE_safeI64 = 17;
TransactionManifestParser.RULE_safeI128 = 18;
TransactionManifestParser.RULE_safeI256 = 19;
TransactionManifestParser.RULE_safeI384 = 20;
TransactionManifestParser.RULE_safeI512 = 21;
TransactionManifestParser.RULE_safeU8 = 22;
TransactionManifestParser.RULE_safeU16 = 23;
TransactionManifestParser.RULE_safeU32 = 24;
TransactionManifestParser.RULE_safeU64 = 25;
TransactionManifestParser.RULE_safeU128 = 26;
TransactionManifestParser.RULE_safeU256 = 27;
TransactionManifestParser.RULE_safeU384 = 28;
TransactionManifestParser.RULE_safeU512 = 29;
TransactionManifestParser.RULE_string = 30;
TransactionManifestParser.RULE_struct = 31;
TransactionManifestParser.RULE_enum_ = 32;
TransactionManifestParser.RULE_option = 33;
TransactionManifestParser.RULE_some = 34;
TransactionManifestParser.RULE_none = 35;
TransactionManifestParser.RULE_ok = 36;
TransactionManifestParser.RULE_err = 37;
TransactionManifestParser.RULE_array = 38;
TransactionManifestParser.RULE_tuple = 39;
TransactionManifestParser.RULE_list = 40;
TransactionManifestParser.RULE_set = 41;
TransactionManifestParser.RULE_map = 42;
TransactionManifestParser.RULE_decimal = 43;
TransactionManifestParser.RULE_preciseDecimal = 44;
TransactionManifestParser.RULE_packageAddress = 45;
TransactionManifestParser.RULE_componentAddress = 46;
TransactionManifestParser.RULE_resourceAddress = 47;
TransactionManifestParser.RULE_hash = 48;
TransactionManifestParser.RULE_bucket = 49;
TransactionManifestParser.RULE_proof = 50;
TransactionManifestParser.RULE_nonFungible_id = 51;
TransactionManifestParser.RULE_nonFungibleAddress = 52;
TransactionManifestParser.RULE_bytes = 53;
TransactionManifestParser.RULE_type = 54;
TransactionManifestParser.RULE_value = 55;
// tslint:disable:no-trailing-whitespace
TransactionManifestParser.ruleNames = [
    "manifest",
    "manifestInstruction",
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
    "safeI8",
    "safeI16",
    "safeI32",
    "safeI64",
    "safeI128",
    "safeI256",
    "safeI384",
    "safeI512",
    "safeU8",
    "safeU16",
    "safeU32",
    "safeU64",
    "safeU128",
    "safeU256",
    "safeU384",
    "safeU512",
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
    "nonFungible_id",
    "nonFungibleAddress",
    "bytes",
    "type",
    "value",
];
TransactionManifestParser._LITERAL_NAMES = [
    undefined,
    "'()'",
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
    "'SafeI8'",
    "'SafeI16'",
    "'SafeI32'",
    "'SafeI64'",
    "'SafeI128'",
    "'SafeI256'",
    "'SafeI384'",
    "'SafeI512'",
    "'SafeU8'",
    "'SafeU16'",
    "'SafeU32'",
    "'SafeU64'",
    "'SafeU128'",
    "'SafeU384'",
    "'SafeU256'",
    "'SafeU512'",
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
    "'Bytes'",
    "'('",
    "')'",
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
    "'CALL_METHOD_WITH_ALL_RESOURCES'",
    "'PUBLISH_PACKAGE'",
];
TransactionManifestParser._SYMBOLIC_NAMES = [
    undefined,
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
    "SAFE_I8_LITERAL",
    "SAFE_I16_LITERAL",
    "SAFE_I32_LITERAL",
    "SAFE_I64_LITERAL",
    "SAFE_I128_LITERAL",
    "SAFE_I256_LITERAL",
    "SAFE_I384_LITERAL",
    "SAFE_I512_LITERAL",
    "SAFE_U8_LITERAL",
    "SAFE_U16_LITERAL",
    "SAFE_U32_LITERAL",
    "SAFE_U64_LITERAL",
    "SAFE_U128_LITERAL",
    "SAFE_U384_LITERAL",
    "SAFE_U256_LITERAL",
    "SAFE_U512_LITERAL",
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
    "SAFE_I8_TYPE",
    "SAFE_I16_TYPE",
    "SAFE_I32_TYPE",
    "SAFE_I64_TYPE",
    "SAFE_I128_TYPE",
    "SAFE_I256_TYPE",
    "SAFE_I384_TYPE",
    "SAFE_I512_TYPE",
    "SAFE_U8_TYPE",
    "SAFE_U16_TYPE",
    "SAFE_U32_TYPE",
    "SAFE_U64_TYPE",
    "SAFE_U128_TYPE",
    "SAFE_U384_TYPE",
    "SAFE_U256_TYPE",
    "SAFE_U512_TYPE",
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
    "BYTES_TYPE",
    "OPEN_PARENTHESIS",
    "CLOED_PARENTHESIS",
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
    "CALL_METHOD_WITH_ALL_RESOURCES",
    "PUBLISH_PACKAGE",
    "STRING_LITERAL",
    "DIGIT",
    "LETTER",
    "NUMBER",
    "WS",
    "COMMENT",
];
TransactionManifestParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TransactionManifestParser._LITERAL_NAMES, TransactionManifestParser._SYMBOLIC_NAMES, []);
TransactionManifestParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03v\u0230\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
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
    '\n!\x03!\x03!\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x07"\u013A\n' +
    '"\f"\x0E"\u013D\v"\x05"\u013F\n"\x03"\x03"\x03#\x03#\x05#\u0145' +
    "\n#\x03$\x03$\x03$\x03$\x03$\x07$\u014C\n$\f$\x0E$\u014F\v$\x03$\x03$" +
    "\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x07&\u015A\n&\f&\x0E&\u015D\v&\x03" +
    "&\x03&\x03'\x03'\x03'\x03'\x03'\x07'\u0166\n'\f'\x0E'\u0169\v" +
    "'\x03'\x03'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u0175\n(\f" +
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
    '\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&' +
    "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02\x02\x04\x04\x02\f\f" +
    "qq\x03\x02!U\x02\u0252\x02u\x03\x02\x02\x02\x04\xE8\x03\x02\x02\x02\x06" +
    "\xEA\x03\x02\x02\x02\b\xEC\x03\x02\x02\x02\n\xEE\x03\x02\x02\x02\f\xF0" +
    "\x03\x02\x02\x02\x0E\xF2\x03\x02\x02\x02\x10\xF4\x03\x02\x02\x02\x12\xF6" +
    "\x03\x02\x02\x02\x14\xF8\x03\x02\x02\x02\x16\xFA\x03\x02\x02\x02\x18\xFC" +
    "\x03\x02\x02\x02\x1A\xFE\x03\x02\x02\x02\x1C\u0100\x03\x02\x02\x02\x1E" +
    '\u0102\x03\x02\x02\x02 \u0104\x03\x02\x02\x02"\u0106\x03\x02\x02\x02' +
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
    "\u010B\x07\x13\x02\x02\u010B'\x03\x02\x02\x02\u010C\u010D\x07\x14\x02" +
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
    '\x02\u0207\u022E\x05"\x12\x02\u0208\u022E\x05$\x13\x02\u0209\u022E\x05' +
    "&\x14\x02\u020A\u022E\x05(\x15\x02\u020B\u022E\x05*\x16\x02\u020C\u022E" +
    "\x05,\x17\x02\u020D\u022E\x05.\x18\x02\u020E\u022E\x050\x19\x02\u020F" +
    "\u022E\x052\x1A\x02\u0210\u022E\x054\x1B\x02\u0211\u022E\x056\x1C\x02" +
    "\u0212\u022E\x058\x1D\x02\u0213\u022E\x05:\x1E\x02\u0214\u022E\x05<\x1F" +
    '\x02\u0215\u022E\x05> \x02\u0216\u022E\x05@!\x02\u0217\u022E\x05B"\x02' +
    "\u0218\u022E\x05D#\x02\u0219\u022E\x05F$\x02\u021A\u022E\x05H%\x02\u021B" +
    "\u022E\x05J&\x02\u021C\u022E\x05L'\x02\u021D\u022E\x05N(\x02\u021E\u022E" +
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
class ManifestContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() {
        return this.getToken(TransactionManifestParser.EOF, 0);
    }
    manifestInstruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(ManifestInstructionContext);
        }
        else {
            return this.getRuleContext(i, ManifestInstructionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_manifest;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterManifest) {
            listener.enterManifest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitManifest) {
            listener.exitManifest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitManifest) {
            return visitor.visitManifest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ManifestContext = ManifestContext;
class ManifestInstructionContext extends ParserRuleContext_1.ParserRuleContext {
    CALL_FUNCTION() {
        return this.tryGetToken(TransactionManifestParser.CALL_FUNCTION, 0);
    }
    packageAddress() {
        return this.tryGetRuleContext(0, PackageAddressContext);
    }
    string(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }
        else {
            return this.getRuleContext(i, StringContext);
        }
    }
    SEMICOLON() {
        return this.getToken(TransactionManifestParser.SEMICOLON, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    CALL_METHOD() {
        return this.tryGetToken(TransactionManifestParser.CALL_METHOD, 0);
    }
    componentAddress() {
        return this.tryGetRuleContext(0, ComponentAddressContext);
    }
    CALL_METHOD_WITH_ALL_RESOURCES() {
        return this.tryGetToken(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES, 0);
    }
    TAKE_FROM_WORKTOP() {
        return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0);
    }
    resourceAddress() {
        return this.tryGetRuleContext(0, ResourceAddressContext);
    }
    bucket() {
        return this.tryGetRuleContext(0, BucketContext);
    }
    TAKE_FROM_WORKTOP_BY_AMOUNT() {
        return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT, 0);
    }
    decimal() {
        return this.tryGetRuleContext(0, DecimalContext);
    }
    TAKE_FROM_WORKTOP_BY_IDS() {
        return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS, 0);
    }
    set() {
        return this.tryGetRuleContext(0, SetContext);
    }
    RETURN_TO_WORKTOP() {
        return this.tryGetToken(TransactionManifestParser.RETURN_TO_WORKTOP, 0);
    }
    ASSERT_WORKTOP_CONTAINS() {
        return this.tryGetToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS, 0);
    }
    ASSERT_WORKTOP_CONTAINS_BY_AMOUNT() {
        return this.tryGetToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT, 0);
    }
    ASSERT_WORKTOP_CONTAINS_BY_IDS() {
        return this.tryGetToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS, 0);
    }
    POP_FROM_AUTH_ZONE() {
        return this.tryGetToken(TransactionManifestParser.POP_FROM_AUTH_ZONE, 0);
    }
    proof(i) {
        if (i === undefined) {
            return this.getRuleContexts(ProofContext);
        }
        else {
            return this.getRuleContext(i, ProofContext);
        }
    }
    PUSH_TO_AUTH_ZONE() {
        return this.tryGetToken(TransactionManifestParser.PUSH_TO_AUTH_ZONE, 0);
    }
    CREATE_PROOF_FROM_AUTH_ZONE() {
        return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE, 0);
    }
    CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT() {
        return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT, 0);
    }
    CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS() {
        return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS, 0);
    }
    CREATE_PROOF_FROM_BUCKET() {
        return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET, 0);
    }
    CLONE_PROOF() {
        return this.tryGetToken(TransactionManifestParser.CLONE_PROOF, 0);
    }
    DROP_PROOF() {
        return this.tryGetToken(TransactionManifestParser.DROP_PROOF, 0);
    }
    DROP_ALL_PROOFS() {
        return this.tryGetToken(TransactionManifestParser.DROP_ALL_PROOFS, 0);
    }
    CLEAR_AUTHZONE() {
        return this.tryGetToken(TransactionManifestParser.CLEAR_AUTHZONE, 0);
    }
    PUBLISH_PACKAGE() {
        return this.tryGetToken(TransactionManifestParser.PUBLISH_PACKAGE, 0);
    }
    bytes() {
        return this.tryGetRuleContext(0, BytesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_manifestInstruction;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterManifestInstruction) {
            listener.enterManifestInstruction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitManifestInstruction) {
            listener.exitManifestInstruction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitManifestInstruction) {
            return visitor.visitManifestInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ManifestInstructionContext = ManifestInstructionContext;
class UnitContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_unit;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitContext = UnitContext;
class BoolContext extends ParserRuleContext_1.ParserRuleContext {
    BOOL_LITERAL() {
        return this.getToken(TransactionManifestParser.BOOL_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_bool;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBool) {
            listener.enterBool(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBool) {
            listener.exitBool(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBool) {
            return visitor.visitBool(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BoolContext = BoolContext;
class I8Context extends ParserRuleContext_1.ParserRuleContext {
    I8_LITERAL() {
        return this.getToken(TransactionManifestParser.I8_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_i8;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterI8) {
            listener.enterI8(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitI8) {
            listener.exitI8(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitI8) {
            return visitor.visitI8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.I8Context = I8Context;
class I16Context extends ParserRuleContext_1.ParserRuleContext {
    I16_LITERAL() {
        return this.getToken(TransactionManifestParser.I16_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_i16;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterI16) {
            listener.enterI16(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitI16) {
            listener.exitI16(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitI16) {
            return visitor.visitI16(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.I16Context = I16Context;
class I32Context extends ParserRuleContext_1.ParserRuleContext {
    I32_LITERAL() {
        return this.getToken(TransactionManifestParser.I32_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_i32;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterI32) {
            listener.enterI32(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitI32) {
            listener.exitI32(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitI32) {
            return visitor.visitI32(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.I32Context = I32Context;
class I64Context extends ParserRuleContext_1.ParserRuleContext {
    I64_LITERAL() {
        return this.getToken(TransactionManifestParser.I64_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_i64;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterI64) {
            listener.enterI64(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitI64) {
            listener.exitI64(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitI64) {
            return visitor.visitI64(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.I64Context = I64Context;
class I128Context extends ParserRuleContext_1.ParserRuleContext {
    I128_LITERAL() {
        return this.getToken(TransactionManifestParser.I128_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_i128;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterI128) {
            listener.enterI128(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitI128) {
            listener.exitI128(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitI128) {
            return visitor.visitI128(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.I128Context = I128Context;
class U8Context extends ParserRuleContext_1.ParserRuleContext {
    U8_LITERAL() {
        return this.getToken(TransactionManifestParser.U8_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_u8;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterU8) {
            listener.enterU8(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitU8) {
            listener.exitU8(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitU8) {
            return visitor.visitU8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.U8Context = U8Context;
class U16Context extends ParserRuleContext_1.ParserRuleContext {
    U16_LITERAL() {
        return this.getToken(TransactionManifestParser.U16_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_u16;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterU16) {
            listener.enterU16(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitU16) {
            listener.exitU16(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitU16) {
            return visitor.visitU16(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.U16Context = U16Context;
class U32Context extends ParserRuleContext_1.ParserRuleContext {
    U32_LITERAL() {
        return this.getToken(TransactionManifestParser.U32_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_u32;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterU32) {
            listener.enterU32(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitU32) {
            listener.exitU32(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitU32) {
            return visitor.visitU32(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.U32Context = U32Context;
class U64Context extends ParserRuleContext_1.ParserRuleContext {
    U64_LITERAL() {
        return this.getToken(TransactionManifestParser.U64_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_u64;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterU64) {
            listener.enterU64(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitU64) {
            listener.exitU64(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitU64) {
            return visitor.visitU64(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.U64Context = U64Context;
class U128Context extends ParserRuleContext_1.ParserRuleContext {
    U128_LITERAL() {
        return this.getToken(TransactionManifestParser.U128_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_u128;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterU128) {
            listener.enterU128(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitU128) {
            listener.exitU128(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitU128) {
            return visitor.visitU128(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.U128Context = U128Context;
class SafeI8Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_I8_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_I8_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeI8;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeI8) {
            listener.enterSafeI8(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeI8) {
            listener.exitSafeI8(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeI8) {
            return visitor.visitSafeI8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeI8Context = SafeI8Context;
class SafeI16Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_I16_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_I16_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeI16;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeI16) {
            listener.enterSafeI16(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeI16) {
            listener.exitSafeI16(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeI16) {
            return visitor.visitSafeI16(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeI16Context = SafeI16Context;
class SafeI32Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_I32_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_I32_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeI32;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeI32) {
            listener.enterSafeI32(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeI32) {
            listener.exitSafeI32(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeI32) {
            return visitor.visitSafeI32(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeI32Context = SafeI32Context;
class SafeI64Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_I64_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_I64_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeI64;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeI64) {
            listener.enterSafeI64(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeI64) {
            listener.exitSafeI64(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeI64) {
            return visitor.visitSafeI64(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeI64Context = SafeI64Context;
class SafeI128Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_I128_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_I128_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeI128;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeI128) {
            listener.enterSafeI128(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeI128) {
            listener.exitSafeI128(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeI128) {
            return visitor.visitSafeI128(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeI128Context = SafeI128Context;
class SafeI256Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_I256_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_I256_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeI256;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeI256) {
            listener.enterSafeI256(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeI256) {
            listener.exitSafeI256(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeI256) {
            return visitor.visitSafeI256(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeI256Context = SafeI256Context;
class SafeI384Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_I384_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_I384_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeI384;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeI384) {
            listener.enterSafeI384(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeI384) {
            listener.exitSafeI384(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeI384) {
            return visitor.visitSafeI384(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeI384Context = SafeI384Context;
class SafeI512Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_I512_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_I512_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeI512;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeI512) {
            listener.enterSafeI512(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeI512) {
            listener.exitSafeI512(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeI512) {
            return visitor.visitSafeI512(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeI512Context = SafeI512Context;
class SafeU8Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_U8_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_U8_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeU8;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeU8) {
            listener.enterSafeU8(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeU8) {
            listener.exitSafeU8(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeU8) {
            return visitor.visitSafeU8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeU8Context = SafeU8Context;
class SafeU16Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_U16_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_U16_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeU16;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeU16) {
            listener.enterSafeU16(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeU16) {
            listener.exitSafeU16(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeU16) {
            return visitor.visitSafeU16(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeU16Context = SafeU16Context;
class SafeU32Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_U32_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_U32_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeU32;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeU32) {
            listener.enterSafeU32(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeU32) {
            listener.exitSafeU32(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeU32) {
            return visitor.visitSafeU32(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeU32Context = SafeU32Context;
class SafeU64Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_U64_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_U64_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeU64;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeU64) {
            listener.enterSafeU64(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeU64) {
            listener.exitSafeU64(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeU64) {
            return visitor.visitSafeU64(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeU64Context = SafeU64Context;
class SafeU128Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_U128_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_U128_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeU128;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeU128) {
            listener.enterSafeU128(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeU128) {
            listener.exitSafeU128(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeU128) {
            return visitor.visitSafeU128(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeU128Context = SafeU128Context;
class SafeU256Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_U256_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_U256_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeU256;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeU256) {
            listener.enterSafeU256(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeU256) {
            listener.exitSafeU256(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeU256) {
            return visitor.visitSafeU256(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeU256Context = SafeU256Context;
class SafeU384Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_U384_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_U384_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeU384;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeU384) {
            listener.enterSafeU384(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeU384) {
            listener.exitSafeU384(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeU384) {
            return visitor.visitSafeU384(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeU384Context = SafeU384Context;
class SafeU512Context extends ParserRuleContext_1.ParserRuleContext {
    SAFE_U512_LITERAL() {
        return this.getToken(TransactionManifestParser.SAFE_U512_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_safeU512;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeU512) {
            listener.enterSafeU512(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeU512) {
            listener.exitSafeU512(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeU512) {
            return visitor.visitSafeU512(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeU512Context = SafeU512Context;
class StringContext extends ParserRuleContext_1.ParserRuleContext {
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_string;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringContext = StringContext;
class StructContext extends ParserRuleContext_1.ParserRuleContext {
    STRUCT_TYPE() {
        return this.getToken(TransactionManifestParser.STRUCT_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_struct;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterStruct) {
            listener.enterStruct(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStruct) {
            listener.exitStruct(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStruct) {
            return visitor.visitStruct(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StructContext = StructContext;
class Enum_Context extends ParserRuleContext_1.ParserRuleContext {
    ENUM_TYPE() {
        return this.getToken(TransactionManifestParser.ENUM_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_enum_;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEnum_) {
            listener.enterEnum_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnum_) {
            listener.exitEnum_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnum_) {
            return visitor.visitEnum_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Enum_Context = Enum_Context;
class OptionContext extends ParserRuleContext_1.ParserRuleContext {
    some() {
        return this.tryGetRuleContext(0, SomeContext);
    }
    none() {
        return this.tryGetRuleContext(0, NoneContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_option;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOption) {
            listener.enterOption(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOption) {
            listener.exitOption(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOption) {
            return visitor.visitOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OptionContext = OptionContext;
class SomeContext extends ParserRuleContext_1.ParserRuleContext {
    SOME_TYPE() {
        return this.getToken(TransactionManifestParser.SOME_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_some;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSome) {
            listener.enterSome(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSome) {
            listener.exitSome(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSome) {
            return visitor.visitSome(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SomeContext = SomeContext;
class NoneContext extends ParserRuleContext_1.ParserRuleContext {
    NONE_TYPE() {
        return this.getToken(TransactionManifestParser.NONE_TYPE, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_none;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNone) {
            listener.enterNone(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNone) {
            listener.exitNone(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNone) {
            return visitor.visitNone(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NoneContext = NoneContext;
class OkContext extends ParserRuleContext_1.ParserRuleContext {
    OK_TYPE() {
        return this.getToken(TransactionManifestParser.OK_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_ok;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterOk) {
            listener.enterOk(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOk) {
            listener.exitOk(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOk) {
            return visitor.visitOk(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OkContext = OkContext;
class ErrContext extends ParserRuleContext_1.ParserRuleContext {
    ERR_TYPE() {
        return this.getToken(TransactionManifestParser.ERR_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_err;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterErr) {
            listener.enterErr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitErr) {
            listener.exitErr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitErr) {
            return visitor.visitErr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ErrContext = ErrContext;
class ArrayContext extends ParserRuleContext_1.ParserRuleContext {
    ARRAY_TYPE() {
        return this.getToken(TransactionManifestParser.ARRAY_TYPE, 0);
    }
    LESS_THAN() {
        return this.getToken(TransactionManifestParser.LESS_THAN, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    GREATER_THAN() {
        return this.getToken(TransactionManifestParser.GREATER_THAN, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_array;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArray) {
            listener.enterArray(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArray) {
            listener.exitArray(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArray) {
            return visitor.visitArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayContext = ArrayContext;
class TupleContext extends ParserRuleContext_1.ParserRuleContext {
    TUPLE_TYPE() {
        return this.getToken(TransactionManifestParser.TUPLE_TYPE, 0);
    }
    LESS_THAN() {
        return this.getToken(TransactionManifestParser.LESS_THAN, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_tuple;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTuple) {
            listener.enterTuple(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTuple) {
            listener.exitTuple(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTuple) {
            return visitor.visitTuple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TupleContext = TupleContext;
class ListContext extends ParserRuleContext_1.ParserRuleContext {
    LIST_TYPE() {
        return this.getToken(TransactionManifestParser.LIST_TYPE, 0);
    }
    LESS_THAN() {
        return this.getToken(TransactionManifestParser.LESS_THAN, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    GREATER_THAN() {
        return this.getToken(TransactionManifestParser.GREATER_THAN, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_list;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListContext = ListContext;
class SetContext extends ParserRuleContext_1.ParserRuleContext {
    SET_TYPE() {
        return this.getToken(TransactionManifestParser.SET_TYPE, 0);
    }
    LESS_THAN() {
        return this.getToken(TransactionManifestParser.LESS_THAN, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    GREATER_THAN() {
        return this.getToken(TransactionManifestParser.GREATER_THAN, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_set;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSet) {
            listener.enterSet(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSet) {
            listener.exitSet(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSet) {
            return visitor.visitSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SetContext = SetContext;
class MapContext extends ParserRuleContext_1.ParserRuleContext {
    MAP_TYPE() {
        return this.getToken(TransactionManifestParser.MAP_TYPE, 0);
    }
    LESS_THAN() {
        return this.getToken(TransactionManifestParser.LESS_THAN, 0);
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TransactionManifestParser.COMMA);
        }
        else {
            return this.getToken(TransactionManifestParser.COMMA, i);
        }
    }
    GREATER_THAN() {
        return this.getToken(TransactionManifestParser.GREATER_THAN, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_map;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMap) {
            listener.enterMap(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMap) {
            listener.exitMap(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMap) {
            return visitor.visitMap(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MapContext = MapContext;
class DecimalContext extends ParserRuleContext_1.ParserRuleContext {
    DECIMAL_TYPE() {
        return this.getToken(TransactionManifestParser.DECIMAL_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_decimal;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDecimal) {
            listener.enterDecimal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDecimal) {
            listener.exitDecimal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDecimal) {
            return visitor.visitDecimal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DecimalContext = DecimalContext;
class PreciseDecimalContext extends ParserRuleContext_1.ParserRuleContext {
    PRECISE_DECIMAL_TYPE() {
        return this.getToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_preciseDecimal;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPreciseDecimal) {
            listener.enterPreciseDecimal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPreciseDecimal) {
            listener.exitPreciseDecimal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPreciseDecimal) {
            return visitor.visitPreciseDecimal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PreciseDecimalContext = PreciseDecimalContext;
class PackageAddressContext extends ParserRuleContext_1.ParserRuleContext {
    PACKAGE_ADDRESS_TYPE() {
        return this.getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_packageAddress;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPackageAddress) {
            listener.enterPackageAddress(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPackageAddress) {
            listener.exitPackageAddress(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPackageAddress) {
            return visitor.visitPackageAddress(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PackageAddressContext = PackageAddressContext;
class ComponentAddressContext extends ParserRuleContext_1.ParserRuleContext {
    COMPONENT_ADDRESS_TYPE() {
        return this.getToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_componentAddress;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterComponentAddress) {
            listener.enterComponentAddress(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComponentAddress) {
            listener.exitComponentAddress(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComponentAddress) {
            return visitor.visitComponentAddress(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentAddressContext = ComponentAddressContext;
class ResourceAddressContext extends ParserRuleContext_1.ParserRuleContext {
    RESOURCE_ADDRESS_TYPE() {
        return this.getToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_resourceAddress;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterResourceAddress) {
            listener.enterResourceAddress(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResourceAddress) {
            listener.exitResourceAddress(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitResourceAddress) {
            return visitor.visitResourceAddress(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ResourceAddressContext = ResourceAddressContext;
class HashContext extends ParserRuleContext_1.ParserRuleContext {
    HASH_TYPE() {
        return this.getToken(TransactionManifestParser.HASH_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_hash;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterHash) {
            listener.enterHash(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHash) {
            listener.exitHash(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitHash) {
            return visitor.visitHash(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.HashContext = HashContext;
class BucketContext extends ParserRuleContext_1.ParserRuleContext {
    BUCKET_TYPE() {
        return this.getToken(TransactionManifestParser.BUCKET_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.tryGetToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    U32_LITERAL() {
        return this.tryGetToken(TransactionManifestParser.U32_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_bucket;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBucket) {
            listener.enterBucket(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBucket) {
            listener.exitBucket(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBucket) {
            return visitor.visitBucket(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BucketContext = BucketContext;
class ProofContext extends ParserRuleContext_1.ParserRuleContext {
    PROOF_TYPE() {
        return this.getToken(TransactionManifestParser.PROOF_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.tryGetToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    U32_LITERAL() {
        return this.tryGetToken(TransactionManifestParser.U32_LITERAL, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_proof;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterProof) {
            listener.enterProof(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProof) {
            listener.exitProof(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProof) {
            return visitor.visitProof(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProofContext = ProofContext;
class NonFungible_idContext extends ParserRuleContext_1.ParserRuleContext {
    NON_FUNGIBLE_ID_TYPE() {
        return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_nonFungible_id;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNonFungible_id) {
            listener.enterNonFungible_id(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNonFungible_id) {
            listener.exitNonFungible_id(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNonFungible_id) {
            return visitor.visitNonFungible_id(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NonFungible_idContext = NonFungible_idContext;
class NonFungibleAddressContext extends ParserRuleContext_1.ParserRuleContext {
    NON_FUNGIBLE_ADDRESS_TYPE() {
        return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_nonFungibleAddress;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterNonFungibleAddress) {
            listener.enterNonFungibleAddress(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNonFungibleAddress) {
            listener.exitNonFungibleAddress(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNonFungibleAddress) {
            return visitor.visitNonFungibleAddress(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NonFungibleAddressContext = NonFungibleAddressContext;
class BytesContext extends ParserRuleContext_1.ParserRuleContext {
    BYTES_TYPE() {
        return this.getToken(TransactionManifestParser.BYTES_TYPE, 0);
    }
    OPEN_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0);
    }
    STRING_LITERAL() {
        return this.getToken(TransactionManifestParser.STRING_LITERAL, 0);
    }
    CLOED_PARENTHESIS() {
        return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_bytes;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBytes) {
            listener.enterBytes(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBytes) {
            listener.exitBytes(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBytes) {
            return visitor.visitBytes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BytesContext = BytesContext;
class TypeContext extends ParserRuleContext_1.ParserRuleContext {
    UNIT_TYPE() {
        return this.tryGetToken(TransactionManifestParser.UNIT_TYPE, 0);
    }
    BOOL_TYPE() {
        return this.tryGetToken(TransactionManifestParser.BOOL_TYPE, 0);
    }
    I8_TYPE() {
        return this.tryGetToken(TransactionManifestParser.I8_TYPE, 0);
    }
    I16_TYPE() {
        return this.tryGetToken(TransactionManifestParser.I16_TYPE, 0);
    }
    I32_TYPE() {
        return this.tryGetToken(TransactionManifestParser.I32_TYPE, 0);
    }
    I64_TYPE() {
        return this.tryGetToken(TransactionManifestParser.I64_TYPE, 0);
    }
    I128_TYPE() {
        return this.tryGetToken(TransactionManifestParser.I128_TYPE, 0);
    }
    U8_TYPE() {
        return this.tryGetToken(TransactionManifestParser.U8_TYPE, 0);
    }
    U16_TYPE() {
        return this.tryGetToken(TransactionManifestParser.U16_TYPE, 0);
    }
    U32_TYPE() {
        return this.tryGetToken(TransactionManifestParser.U32_TYPE, 0);
    }
    U64_TYPE() {
        return this.tryGetToken(TransactionManifestParser.U64_TYPE, 0);
    }
    U128_TYPE() {
        return this.tryGetToken(TransactionManifestParser.U128_TYPE, 0);
    }
    SAFE_I8_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_I8_TYPE, 0);
    }
    SAFE_I16_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_I16_TYPE, 0);
    }
    SAFE_I32_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_I32_TYPE, 0);
    }
    SAFE_I64_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_I64_TYPE, 0);
    }
    SAFE_I128_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_I128_TYPE, 0);
    }
    SAFE_I256_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_I256_TYPE, 0);
    }
    SAFE_I384_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_I384_TYPE, 0);
    }
    SAFE_I512_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_I512_TYPE, 0);
    }
    SAFE_U8_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_U8_TYPE, 0);
    }
    SAFE_U16_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_U16_TYPE, 0);
    }
    SAFE_U32_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_U32_TYPE, 0);
    }
    SAFE_U64_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_U64_TYPE, 0);
    }
    SAFE_U128_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_U128_TYPE, 0);
    }
    SAFE_U384_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_U384_TYPE, 0);
    }
    SAFE_U256_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_U256_TYPE, 0);
    }
    SAFE_U512_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SAFE_U512_TYPE, 0);
    }
    STRING_TYPE() {
        return this.tryGetToken(TransactionManifestParser.STRING_TYPE, 0);
    }
    STRUCT_TYPE() {
        return this.tryGetToken(TransactionManifestParser.STRUCT_TYPE, 0);
    }
    ENUM_TYPE() {
        return this.tryGetToken(TransactionManifestParser.ENUM_TYPE, 0);
    }
    OPTION_TYPE() {
        return this.tryGetToken(TransactionManifestParser.OPTION_TYPE, 0);
    }
    RESULT_TYPE() {
        return this.tryGetToken(TransactionManifestParser.RESULT_TYPE, 0);
    }
    SOME_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SOME_TYPE, 0);
    }
    NONE_TYPE() {
        return this.tryGetToken(TransactionManifestParser.NONE_TYPE, 0);
    }
    OK_TYPE() {
        return this.tryGetToken(TransactionManifestParser.OK_TYPE, 0);
    }
    ERR_TYPE() {
        return this.tryGetToken(TransactionManifestParser.ERR_TYPE, 0);
    }
    ARRAY_TYPE() {
        return this.tryGetToken(TransactionManifestParser.ARRAY_TYPE, 0);
    }
    TUPLE_TYPE() {
        return this.tryGetToken(TransactionManifestParser.TUPLE_TYPE, 0);
    }
    LIST_TYPE() {
        return this.tryGetToken(TransactionManifestParser.LIST_TYPE, 0);
    }
    SET_TYPE() {
        return this.tryGetToken(TransactionManifestParser.SET_TYPE, 0);
    }
    MAP_TYPE() {
        return this.tryGetToken(TransactionManifestParser.MAP_TYPE, 0);
    }
    DECIMAL_TYPE() {
        return this.tryGetToken(TransactionManifestParser.DECIMAL_TYPE, 0);
    }
    PRECISE_DECIMAL_TYPE() {
        return this.tryGetToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0);
    }
    PACKAGE_ADDRESS_TYPE() {
        return this.tryGetToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0);
    }
    COMPONENT_ADDRESS_TYPE() {
        return this.tryGetToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0);
    }
    RESOURCE_ADDRESS_TYPE() {
        return this.tryGetToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0);
    }
    HASH_TYPE() {
        return this.tryGetToken(TransactionManifestParser.HASH_TYPE, 0);
    }
    BUCKET_TYPE() {
        return this.tryGetToken(TransactionManifestParser.BUCKET_TYPE, 0);
    }
    PROOF_TYPE() {
        return this.tryGetToken(TransactionManifestParser.PROOF_TYPE, 0);
    }
    NON_FUNGIBLE_ID_TYPE() {
        return this.tryGetToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0);
    }
    NON_FUNGIBLE_ADDRESS_TYPE() {
        return this.tryGetToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0);
    }
    BYTES_TYPE() {
        return this.tryGetToken(TransactionManifestParser.BYTES_TYPE, 0);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_type;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeContext = TypeContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    unit() {
        return this.tryGetRuleContext(0, UnitContext);
    }
    bool() {
        return this.tryGetRuleContext(0, BoolContext);
    }
    i8() {
        return this.tryGetRuleContext(0, I8Context);
    }
    i16() {
        return this.tryGetRuleContext(0, I16Context);
    }
    i32() {
        return this.tryGetRuleContext(0, I32Context);
    }
    i64() {
        return this.tryGetRuleContext(0, I64Context);
    }
    i128() {
        return this.tryGetRuleContext(0, I128Context);
    }
    u8() {
        return this.tryGetRuleContext(0, U8Context);
    }
    u16() {
        return this.tryGetRuleContext(0, U16Context);
    }
    u32() {
        return this.tryGetRuleContext(0, U32Context);
    }
    u64() {
        return this.tryGetRuleContext(0, U64Context);
    }
    u128() {
        return this.tryGetRuleContext(0, U128Context);
    }
    safeI8() {
        return this.tryGetRuleContext(0, SafeI8Context);
    }
    safeI16() {
        return this.tryGetRuleContext(0, SafeI16Context);
    }
    safeI32() {
        return this.tryGetRuleContext(0, SafeI32Context);
    }
    safeI64() {
        return this.tryGetRuleContext(0, SafeI64Context);
    }
    safeI128() {
        return this.tryGetRuleContext(0, SafeI128Context);
    }
    safeI256() {
        return this.tryGetRuleContext(0, SafeI256Context);
    }
    safeI384() {
        return this.tryGetRuleContext(0, SafeI384Context);
    }
    safeI512() {
        return this.tryGetRuleContext(0, SafeI512Context);
    }
    safeU8() {
        return this.tryGetRuleContext(0, SafeU8Context);
    }
    safeU16() {
        return this.tryGetRuleContext(0, SafeU16Context);
    }
    safeU32() {
        return this.tryGetRuleContext(0, SafeU32Context);
    }
    safeU64() {
        return this.tryGetRuleContext(0, SafeU64Context);
    }
    safeU128() {
        return this.tryGetRuleContext(0, SafeU128Context);
    }
    safeU256() {
        return this.tryGetRuleContext(0, SafeU256Context);
    }
    safeU384() {
        return this.tryGetRuleContext(0, SafeU384Context);
    }
    safeU512() {
        return this.tryGetRuleContext(0, SafeU512Context);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
    struct() {
        return this.tryGetRuleContext(0, StructContext);
    }
    enum_() {
        return this.tryGetRuleContext(0, Enum_Context);
    }
    option() {
        return this.tryGetRuleContext(0, OptionContext);
    }
    some() {
        return this.tryGetRuleContext(0, SomeContext);
    }
    none() {
        return this.tryGetRuleContext(0, NoneContext);
    }
    ok() {
        return this.tryGetRuleContext(0, OkContext);
    }
    err() {
        return this.tryGetRuleContext(0, ErrContext);
    }
    array() {
        return this.tryGetRuleContext(0, ArrayContext);
    }
    tuple() {
        return this.tryGetRuleContext(0, TupleContext);
    }
    list() {
        return this.tryGetRuleContext(0, ListContext);
    }
    set() {
        return this.tryGetRuleContext(0, SetContext);
    }
    map() {
        return this.tryGetRuleContext(0, MapContext);
    }
    decimal() {
        return this.tryGetRuleContext(0, DecimalContext);
    }
    preciseDecimal() {
        return this.tryGetRuleContext(0, PreciseDecimalContext);
    }
    packageAddress() {
        return this.tryGetRuleContext(0, PackageAddressContext);
    }
    componentAddress() {
        return this.tryGetRuleContext(0, ComponentAddressContext);
    }
    resourceAddress() {
        return this.tryGetRuleContext(0, ResourceAddressContext);
    }
    hash() {
        return this.tryGetRuleContext(0, HashContext);
    }
    bucket() {
        return this.tryGetRuleContext(0, BucketContext);
    }
    proof() {
        return this.tryGetRuleContext(0, ProofContext);
    }
    nonFungible_id() {
        return this.tryGetRuleContext(0, NonFungible_idContext);
    }
    nonFungibleAddress() {
        return this.tryGetRuleContext(0, NonFungibleAddressContext);
    }
    bytes() {
        return this.tryGetRuleContext(0, BytesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() {
        return TransactionManifestParser.RULE_value;
    }
    // @Override
    enterRule(listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueContext = ValueContext;
//# sourceMappingURL=TransactionManifestParser.js.map