"use strict";
// Generated from src/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueContext = exports.TypeContext = exports.BytesContext = exports.Non_fungible_addressContext = exports.Non_fungible_idContext = exports.ProofContext = exports.BucketContext = exports.HashContext = exports.Resource_addressContext = exports.Component_addressContext = exports.Package_addressContext = exports.DecimalContext = exports.MapContext = exports.SetContext = exports.ListContext = exports.TupleContext = exports.ArrayContext = exports.ErrContext = exports.OkContext = exports.NoneContext = exports.SomeContext = exports.OptionContext = exports.Enum_Context = exports.StructContext = exports.StringContext = exports.U128Context = exports.U64Context = exports.U32Context = exports.U16Context = exports.U8Context = exports.I128Context = exports.I64Context = exports.I32Context = exports.I16Context = exports.I8Context = exports.BoolContext = exports.UnitContext = exports.ManifestInstructionContext = exports.ManifestContext = exports.TransactionManifestParser = void 0;
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
    get grammarFileName() { return "TransactionManifest.g4"; }
    // @Override
    get ruleNames() { return TransactionManifestParser.ruleNames; }
    // @Override
    get serializedATN() { return TransactionManifestParser._serializedATN; }
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
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (TransactionManifestParser.TAKE_FROM_WORKTOP - 57)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT - 57)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS - 57)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS - 57)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 57)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS - 57)) | (1 << (TransactionManifestParser.RETURN_TO_WORKTOP - 57)) | (1 << (TransactionManifestParser.POP_FROM_AUTH_ZONE - 57)) | (1 << (TransactionManifestParser.PUSH_TO_AUTH_ZONE - 57)) | (1 << (TransactionManifestParser.CLEAR_AUTHZONE - 57)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE - 57)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 57)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 57)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_BUCKET - 57)) | (1 << (TransactionManifestParser.CLONE_PROOF - 57)) | (1 << (TransactionManifestParser.DROP_PROOF - 57)) | (1 << (TransactionManifestParser.DROP_ALL_PROOFS - 57)) | (1 << (TransactionManifestParser.CALL_FUNCTION - 57)) | (1 << (TransactionManifestParser.CALL_METHOD - 57)) | (1 << (TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES - 57)) | (1 << (TransactionManifestParser.PUBLISH_PACKAGE - 57)))) !== 0)) {
                    {
                        {
                            this.state = 78;
                            this.manifestInstruction();
                        }
                    }
                    this.state = 83;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 84;
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
            this.state = 196;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TransactionManifestParser.CALL_FUNCTION:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 86;
                        this.match(TransactionManifestParser.CALL_FUNCTION);
                        this.state = 87;
                        this.package_address();
                        this.state = 88;
                        this.string();
                        this.state = 89;
                        this.string();
                        this.state = 93;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                            {
                                {
                                    this.state = 90;
                                    this.value();
                                }
                            }
                            this.state = 95;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 96;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.CALL_METHOD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 98;
                        this.match(TransactionManifestParser.CALL_METHOD);
                        this.state = 99;
                        this.component_address();
                        this.state = 100;
                        this.string();
                        this.state = 104;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                            {
                                {
                                    this.state = 101;
                                    this.value();
                                }
                            }
                            this.state = 106;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 107;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 109;
                        this.match(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES);
                        this.state = 110;
                        this.component_address();
                        this.state = 111;
                        this.string();
                        this.state = 112;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.TAKE_FROM_WORKTOP:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 114;
                        this.match(TransactionManifestParser.TAKE_FROM_WORKTOP);
                        this.state = 115;
                        this.resource_address();
                        this.state = 116;
                        this.bucket();
                        this.state = 117;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 119;
                        this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT);
                        this.state = 120;
                        this.decimal();
                        this.state = 121;
                        this.resource_address();
                        this.state = 122;
                        this.bucket();
                        this.state = 123;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 125;
                        this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS);
                        this.state = 126;
                        this.set();
                        this.state = 127;
                        this.resource_address();
                        this.state = 128;
                        this.bucket();
                        this.state = 129;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.RETURN_TO_WORKTOP:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 131;
                        this.match(TransactionManifestParser.RETURN_TO_WORKTOP);
                        this.state = 132;
                        this.bucket();
                        this.state = 133;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 135;
                        this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS);
                        this.state = 136;
                        this.resource_address();
                        this.state = 137;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 139;
                        this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
                        this.state = 140;
                        this.decimal();
                        this.state = 141;
                        this.resource_address();
                        this.state = 142;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 144;
                        this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS);
                        this.state = 145;
                        this.set();
                        this.state = 146;
                        this.resource_address();
                        this.state = 147;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.POP_FROM_AUTH_ZONE:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 149;
                        this.match(TransactionManifestParser.POP_FROM_AUTH_ZONE);
                        this.state = 150;
                        this.proof();
                        this.state = 151;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.PUSH_TO_AUTH_ZONE:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 153;
                        this.match(TransactionManifestParser.PUSH_TO_AUTH_ZONE);
                        this.state = 154;
                        this.proof();
                        this.state = 155;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 157;
                        this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE);
                        this.state = 158;
                        this.resource_address();
                        this.state = 159;
                        this.proof();
                        this.state = 160;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 162;
                        this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
                        this.state = 163;
                        this.decimal();
                        this.state = 164;
                        this.resource_address();
                        this.state = 165;
                        this.proof();
                        this.state = 166;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 168;
                        this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
                        this.state = 169;
                        this.set();
                        this.state = 170;
                        this.resource_address();
                        this.state = 171;
                        this.proof();
                        this.state = 172;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.CREATE_PROOF_FROM_BUCKET:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 174;
                        this.match(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET);
                        this.state = 175;
                        this.bucket();
                        this.state = 176;
                        this.proof();
                        this.state = 177;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.CLONE_PROOF:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 179;
                        this.match(TransactionManifestParser.CLONE_PROOF);
                        this.state = 180;
                        this.proof();
                        this.state = 181;
                        this.proof();
                        this.state = 182;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.DROP_PROOF:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 184;
                        this.match(TransactionManifestParser.DROP_PROOF);
                        this.state = 185;
                        this.proof();
                        this.state = 186;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.DROP_ALL_PROOFS:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 188;
                        this.match(TransactionManifestParser.DROP_ALL_PROOFS);
                        this.state = 189;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.CLEAR_AUTHZONE:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 190;
                        this.match(TransactionManifestParser.CLEAR_AUTHZONE);
                        this.state = 191;
                        this.match(TransactionManifestParser.SEMICOLON);
                    }
                    break;
                case TransactionManifestParser.PUBLISH_PACKAGE:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 192;
                        this.match(TransactionManifestParser.PUBLISH_PACKAGE);
                        this.state = 193;
                        this.bytes();
                        this.state = 194;
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
                this.state = 198;
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
                this.state = 200;
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
                this.state = 202;
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
                this.state = 204;
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
                this.state = 206;
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
                this.state = 208;
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
                this.state = 210;
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
                this.state = 212;
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
                this.state = 214;
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
                this.state = 216;
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
                this.state = 218;
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
                this.state = 220;
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
    string() {
        let _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, TransactionManifestParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
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
        this.enterRule(_localctx, 30, TransactionManifestParser.RULE_struct);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(TransactionManifestParser.STRUCT_TYPE);
                this.state = 225;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 234;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        this.state = 226;
                        this.value();
                        this.state = 231;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TransactionManifestParser.COMMA) {
                            {
                                {
                                    this.state = 227;
                                    this.match(TransactionManifestParser.COMMA);
                                    this.state = 228;
                                    this.value();
                                }
                            }
                            this.state = 233;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 236;
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
        this.enterRule(_localctx, 32, TransactionManifestParser.RULE_enum_);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.match(TransactionManifestParser.ENUM_TYPE);
                this.state = 239;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                {
                    this.state = 240;
                    this.string();
                    this.state = 241;
                    this.match(TransactionManifestParser.COMMA);
                    this.state = 250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                        {
                            this.state = 242;
                            this.value();
                            this.state = 247;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === TransactionManifestParser.COMMA) {
                                {
                                    {
                                        this.state = 243;
                                        this.match(TransactionManifestParser.COMMA);
                                        this.state = 244;
                                        this.value();
                                    }
                                }
                                this.state = 249;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                }
                this.state = 252;
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
        this.enterRule(_localctx, 34, TransactionManifestParser.RULE_option);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 256;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TransactionManifestParser.SOME_TYPE:
                        {
                            this.state = 254;
                            this.some();
                        }
                        break;
                    case TransactionManifestParser.NONE_TYPE:
                        {
                            this.state = 255;
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
        this.enterRule(_localctx, 36, TransactionManifestParser.RULE_some);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                this.match(TransactionManifestParser.SOME_TYPE);
                this.state = 259;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                {
                    this.state = 260;
                    this.value();
                    this.state = 265;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === TransactionManifestParser.COMMA) {
                        {
                            {
                                this.state = 261;
                                this.match(TransactionManifestParser.COMMA);
                                this.state = 262;
                                this.value();
                            }
                        }
                        this.state = 267;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                this.state = 268;
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
        this.enterRule(_localctx, 38, TransactionManifestParser.RULE_none);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 270;
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
        this.enterRule(_localctx, 40, TransactionManifestParser.RULE_ok);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.match(TransactionManifestParser.OK_TYPE);
                this.state = 273;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                {
                    this.state = 274;
                    this.value();
                    this.state = 279;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === TransactionManifestParser.COMMA) {
                        {
                            {
                                this.state = 275;
                                this.match(TransactionManifestParser.COMMA);
                                this.state = 276;
                                this.value();
                            }
                        }
                        this.state = 281;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                this.state = 282;
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
        this.enterRule(_localctx, 42, TransactionManifestParser.RULE_err);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 284;
                this.match(TransactionManifestParser.ERR_TYPE);
                this.state = 285;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                {
                    this.state = 286;
                    this.value();
                    this.state = 291;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === TransactionManifestParser.COMMA) {
                        {
                            {
                                this.state = 287;
                                this.match(TransactionManifestParser.COMMA);
                                this.state = 288;
                                this.value();
                            }
                        }
                        this.state = 293;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                this.state = 294;
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
        this.enterRule(_localctx, 44, TransactionManifestParser.RULE_array);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 296;
                this.match(TransactionManifestParser.ARRAY_TYPE);
                this.state = 297;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 298;
                this.type();
                this.state = 299;
                this.match(TransactionManifestParser.GREATER_THAN);
                this.state = 300;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 309;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        this.state = 301;
                        this.value();
                        this.state = 306;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TransactionManifestParser.COMMA) {
                            {
                                {
                                    this.state = 302;
                                    this.match(TransactionManifestParser.COMMA);
                                    this.state = 303;
                                    this.value();
                                }
                            }
                            this.state = 308;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 311;
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
        this.enterRule(_localctx, 46, TransactionManifestParser.RULE_tuple);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 313;
                this.match(TransactionManifestParser.TUPLE_TYPE);
                this.state = 314;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 315;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 324;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        this.state = 316;
                        this.value();
                        this.state = 321;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TransactionManifestParser.COMMA) {
                            {
                                {
                                    this.state = 317;
                                    this.match(TransactionManifestParser.COMMA);
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
        this.enterRule(_localctx, 48, TransactionManifestParser.RULE_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 328;
                this.match(TransactionManifestParser.LIST_TYPE);
                this.state = 329;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 330;
                this.type();
                this.state = 331;
                this.match(TransactionManifestParser.GREATER_THAN);
                this.state = 332;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 341;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
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
                                    this.match(TransactionManifestParser.COMMA);
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
                this.state = 343;
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
        this.enterRule(_localctx, 50, TransactionManifestParser.RULE_set);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 345;
                this.match(TransactionManifestParser.SET_TYPE);
                this.state = 346;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 347;
                this.type();
                this.state = 348;
                this.match(TransactionManifestParser.GREATER_THAN);
                this.state = 349;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        this.state = 350;
                        this.value();
                        this.state = 355;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TransactionManifestParser.COMMA) {
                            {
                                {
                                    this.state = 351;
                                    this.match(TransactionManifestParser.COMMA);
                                    this.state = 352;
                                    this.value();
                                }
                            }
                            this.state = 357;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
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
    map() {
        let _localctx = new MapContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, TransactionManifestParser.RULE_map);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this.match(TransactionManifestParser.MAP_TYPE);
                this.state = 363;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 364;
                this.type();
                this.state = 365;
                this.match(TransactionManifestParser.COMMA);
                this.state = 366;
                this.type();
                this.state = 367;
                this.match(TransactionManifestParser.GREATER_THAN);
                this.state = 368;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 375;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        {
                            this.state = 369;
                            this.value();
                            this.state = 370;
                            this.match(TransactionManifestParser.COMMA);
                            this.state = 371;
                            this.value();
                        }
                    }
                    this.state = 377;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 378;
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
        this.enterRule(_localctx, 54, TransactionManifestParser.RULE_decimal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.match(TransactionManifestParser.DECIMAL_TYPE);
                this.state = 381;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 382;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 383;
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
    package_address() {
        let _localctx = new Package_addressContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, TransactionManifestParser.RULE_package_address);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 385;
                this.match(TransactionManifestParser.PACKAGE_ADDRESS_TYPE);
                this.state = 386;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 387;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 388;
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
    component_address() {
        let _localctx = new Component_addressContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, TransactionManifestParser.RULE_component_address);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this.match(TransactionManifestParser.COMPONENT_ADDRESS_TYPE);
                this.state = 391;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 392;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 393;
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
    resource_address() {
        let _localctx = new Resource_addressContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, TransactionManifestParser.RULE_resource_address);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 395;
                this.match(TransactionManifestParser.RESOURCE_ADDRESS_TYPE);
                this.state = 396;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 397;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 398;
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
        this.enterRule(_localctx, 62, TransactionManifestParser.RULE_hash);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 400;
                this.match(TransactionManifestParser.HASH_TYPE);
                this.state = 401;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 402;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 403;
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
        this.enterRule(_localctx, 64, TransactionManifestParser.RULE_bucket);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 405;
                this.match(TransactionManifestParser.BUCKET_TYPE);
                this.state = 406;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 407;
                _la = this._input.LA(1);
                if (!(_la === TransactionManifestParser.U32_LITERAL || _la === TransactionManifestParser.STRING_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 408;
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
        this.enterRule(_localctx, 66, TransactionManifestParser.RULE_proof);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this.match(TransactionManifestParser.PROOF_TYPE);
                this.state = 411;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 412;
                _la = this._input.LA(1);
                if (!(_la === TransactionManifestParser.U32_LITERAL || _la === TransactionManifestParser.STRING_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 413;
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
    non_fungible_id() {
        let _localctx = new Non_fungible_idContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, TransactionManifestParser.RULE_non_fungible_id);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 415;
                this.match(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE);
                this.state = 416;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 417;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 418;
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
    non_fungible_address() {
        let _localctx = new Non_fungible_addressContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, TransactionManifestParser.RULE_non_fungible_address);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this.match(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE);
                this.state = 421;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 422;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 423;
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
        this.enterRule(_localctx, 72, TransactionManifestParser.RULE_bytes);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 425;
                this.match(TransactionManifestParser.BYTES_TYPE);
                this.state = 426;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 427;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 428;
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
        this.enterRule(_localctx, 74, TransactionManifestParser.RULE_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 430;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.UNIT_TYPE) | (1 << TransactionManifestParser.BOOL_TYPE) | (1 << TransactionManifestParser.I8_TYPE) | (1 << TransactionManifestParser.I16_TYPE) | (1 << TransactionManifestParser.I32_TYPE) | (1 << TransactionManifestParser.I64_TYPE) | (1 << TransactionManifestParser.I128_TYPE) | (1 << TransactionManifestParser.U8_TYPE) | (1 << TransactionManifestParser.U16_TYPE) | (1 << TransactionManifestParser.U32_TYPE) | (1 << TransactionManifestParser.U64_TYPE) | (1 << TransactionManifestParser.U128_TYPE) | (1 << TransactionManifestParser.STRING_TYPE) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE) | (1 << TransactionManifestParser.OPTION_TYPE) | (1 << TransactionManifestParser.RESULT_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0))) {
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
        this.enterRule(_localctx, 76, TransactionManifestParser.RULE_value);
        try {
            this.state = 467;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 432;
                        this.unit();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 433;
                        this.bool();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 434;
                        this.i8();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 435;
                        this.i16();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 436;
                        this.i32();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 437;
                        this.i64();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 438;
                        this.i128();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 439;
                        this.u8();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 440;
                        this.u16();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 441;
                        this.u32();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 442;
                        this.u64();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 443;
                        this.u128();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 444;
                        this.string();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 445;
                        this.struct();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 446;
                        this.enum_();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 447;
                        this.option();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 448;
                        this.some();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 449;
                        this.none();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 450;
                        this.ok();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 451;
                        this.err();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 452;
                        this.array();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 453;
                        this.tuple();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 454;
                        this.list();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 455;
                        this.set();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 456;
                        this.map();
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 457;
                        this.decimal();
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 458;
                        this.package_address();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 459;
                        this.component_address();
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 460;
                        this.resource_address();
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 461;
                        this.hash();
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 462;
                        this.bucket();
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 463;
                        this.proof();
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 464;
                        this.non_fungible_id();
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 465;
                        this.non_fungible_address();
                    }
                    break;
                case 35:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 466;
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
TransactionManifestParser.TRUE = 13;
TransactionManifestParser.FALSE = 14;
TransactionManifestParser.UNIT_TYPE = 15;
TransactionManifestParser.BOOL_TYPE = 16;
TransactionManifestParser.I8_TYPE = 17;
TransactionManifestParser.I16_TYPE = 18;
TransactionManifestParser.I32_TYPE = 19;
TransactionManifestParser.I64_TYPE = 20;
TransactionManifestParser.I128_TYPE = 21;
TransactionManifestParser.U8_TYPE = 22;
TransactionManifestParser.U16_TYPE = 23;
TransactionManifestParser.U32_TYPE = 24;
TransactionManifestParser.U64_TYPE = 25;
TransactionManifestParser.U128_TYPE = 26;
TransactionManifestParser.STRING_TYPE = 27;
TransactionManifestParser.STRUCT_TYPE = 28;
TransactionManifestParser.ENUM_TYPE = 29;
TransactionManifestParser.OPTION_TYPE = 30;
TransactionManifestParser.RESULT_TYPE = 31;
TransactionManifestParser.SOME_TYPE = 32;
TransactionManifestParser.NONE_TYPE = 33;
TransactionManifestParser.OK_TYPE = 34;
TransactionManifestParser.ERR_TYPE = 35;
TransactionManifestParser.ARRAY_TYPE = 36;
TransactionManifestParser.TUPLE_TYPE = 37;
TransactionManifestParser.LIST_TYPE = 38;
TransactionManifestParser.SET_TYPE = 39;
TransactionManifestParser.MAP_TYPE = 40;
TransactionManifestParser.DECIMAL_TYPE = 41;
TransactionManifestParser.PACKAGE_ADDRESS_TYPE = 42;
TransactionManifestParser.COMPONENT_ADDRESS_TYPE = 43;
TransactionManifestParser.RESOURCE_ADDRESS_TYPE = 44;
TransactionManifestParser.HASH_TYPE = 45;
TransactionManifestParser.BUCKET_TYPE = 46;
TransactionManifestParser.PROOF_TYPE = 47;
TransactionManifestParser.NON_FUNGIBLE_ID_TYPE = 48;
TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE = 49;
TransactionManifestParser.BYTES_TYPE = 50;
TransactionManifestParser.OPEN_PARENTHESIS = 51;
TransactionManifestParser.CLOED_PARENTHESIS = 52;
TransactionManifestParser.LESS_THAN = 53;
TransactionManifestParser.GREATER_THAN = 54;
TransactionManifestParser.COMMA = 55;
TransactionManifestParser.SEMICOLON = 56;
TransactionManifestParser.TAKE_FROM_WORKTOP = 57;
TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT = 58;
TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS = 59;
TransactionManifestParser.ASSERT_WORKTOP_CONTAINS = 60;
TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT = 61;
TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS = 62;
TransactionManifestParser.RETURN_TO_WORKTOP = 63;
TransactionManifestParser.POP_FROM_AUTH_ZONE = 64;
TransactionManifestParser.PUSH_TO_AUTH_ZONE = 65;
TransactionManifestParser.CLEAR_AUTHZONE = 66;
TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE = 67;
TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT = 68;
TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS = 69;
TransactionManifestParser.CREATE_PROOF_FROM_BUCKET = 70;
TransactionManifestParser.CLONE_PROOF = 71;
TransactionManifestParser.DROP_PROOF = 72;
TransactionManifestParser.DROP_ALL_PROOFS = 73;
TransactionManifestParser.CALL_FUNCTION = 74;
TransactionManifestParser.CALL_METHOD = 75;
TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES = 76;
TransactionManifestParser.PUBLISH_PACKAGE = 77;
TransactionManifestParser.STRING_LITERAL = 78;
TransactionManifestParser.DIGIT = 79;
TransactionManifestParser.LETTER = 80;
TransactionManifestParser.NUMBER = 81;
TransactionManifestParser.WS = 82;
TransactionManifestParser.COMMENT = 83;
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
TransactionManifestParser.RULE_string = 14;
TransactionManifestParser.RULE_struct = 15;
TransactionManifestParser.RULE_enum_ = 16;
TransactionManifestParser.RULE_option = 17;
TransactionManifestParser.RULE_some = 18;
TransactionManifestParser.RULE_none = 19;
TransactionManifestParser.RULE_ok = 20;
TransactionManifestParser.RULE_err = 21;
TransactionManifestParser.RULE_array = 22;
TransactionManifestParser.RULE_tuple = 23;
TransactionManifestParser.RULE_list = 24;
TransactionManifestParser.RULE_set = 25;
TransactionManifestParser.RULE_map = 26;
TransactionManifestParser.RULE_decimal = 27;
TransactionManifestParser.RULE_package_address = 28;
TransactionManifestParser.RULE_component_address = 29;
TransactionManifestParser.RULE_resource_address = 30;
TransactionManifestParser.RULE_hash = 31;
TransactionManifestParser.RULE_bucket = 32;
TransactionManifestParser.RULE_proof = 33;
TransactionManifestParser.RULE_non_fungible_id = 34;
TransactionManifestParser.RULE_non_fungible_address = 35;
TransactionManifestParser.RULE_bytes = 36;
TransactionManifestParser.RULE_type = 37;
TransactionManifestParser.RULE_value = 38;
// tslint:disable:no-trailing-whitespace
TransactionManifestParser.ruleNames = [
    "manifest", "manifestInstruction", "unit", "bool", "i8", "i16", "i32",
    "i64", "i128", "u8", "u16", "u32", "u64", "u128", "string", "struct",
    "enum_", "option", "some", "none", "ok", "err", "array", "tuple", "list",
    "set", "map", "decimal", "package_address", "component_address", "resource_address",
    "hash", "bucket", "proof", "non_fungible_id", "non_fungible_address",
    "bytes", "type", "value",
];
TransactionManifestParser._LITERAL_NAMES = [
    undefined, "'()'", undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'true'",
    "'false'", "'Unit'", "'Bool'", "'I8'", "'I16'", "'I32'", "'I64'", "'I128'",
    "'U8'", "'U16'", "'U32'", "'U64'", "'U128'", "'String'", "'Struct'", "'Enum'",
    "'Option'", "'Result'", "'Some'", "'None'", "'Ok'", "'Err'", "'Array'",
    "'Tuple'", "'List'", "'Set'", "'Map'", "'Decimal'", "'PackageAddress'",
    "'ComponentAddress'", "'ResourceAddress'", "'Hash'", "'Bucket'", "'Proof'",
    "'NonFungibleId'", "'NonFungibleAddress'", "'Bytes'", "'('", "')'", "'<'",
    "'>'", "','", "';'", "'TAKE_FROM_WORKTOP'", "'TAKE_FROM_WORKTOP_BY_AMOUNT'",
    "'TAKE_FROM_WORKTOP_BY_IDS'", "'ASSERT_WORKTOP_CONTAINS'", "'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT'",
    "'ASSERT_WORKTOP_CONTAINS_BY_IDS'", "'RETURN_TO_WORKTOP'", "'POP_FROM_AUTH_ZONE'",
    "'PUSH_TO_AUTH_ZONE'", "'CLEAR_AUTHZONE'", "'CREATE_PROOF_FROM_AUTH_ZONE'",
    "'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT'", "'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS'",
    "'CREATE_PROOF_FROM_BUCKET'", "'CLONE_PROOF'", "'DROP_PROOF'", "'DROP_ALL_PROOFS'",
    "'CALL_FUNCTION'", "'CALL_METHOD'", "'CALL_METHOD_WITH_ALL_RESOURCES'",
    "'PUBLISH_PACKAGE'",
];
TransactionManifestParser._SYMBOLIC_NAMES = [
    undefined, undefined, "BOOL_LITERAL", "I8_LITERAL", "I16_LITERAL", "I32_LITERAL",
    "I64_LITERAL", "I128_LITERAL", "U8_LITERAL", "U16_LITERAL", "U32_LITERAL",
    "U64_LITERAL", "U128_LITERAL", "TRUE", "FALSE", "UNIT_TYPE", "BOOL_TYPE",
    "I8_TYPE", "I16_TYPE", "I32_TYPE", "I64_TYPE", "I128_TYPE", "U8_TYPE",
    "U16_TYPE", "U32_TYPE", "U64_TYPE", "U128_TYPE", "STRING_TYPE", "STRUCT_TYPE",
    "ENUM_TYPE", "OPTION_TYPE", "RESULT_TYPE", "SOME_TYPE", "NONE_TYPE", "OK_TYPE",
    "ERR_TYPE", "ARRAY_TYPE", "TUPLE_TYPE", "LIST_TYPE", "SET_TYPE", "MAP_TYPE",
    "DECIMAL_TYPE", "PACKAGE_ADDRESS_TYPE", "COMPONENT_ADDRESS_TYPE", "RESOURCE_ADDRESS_TYPE",
    "HASH_TYPE", "BUCKET_TYPE", "PROOF_TYPE", "NON_FUNGIBLE_ID_TYPE", "NON_FUNGIBLE_ADDRESS_TYPE",
    "BYTES_TYPE", "OPEN_PARENTHESIS", "CLOED_PARENTHESIS", "LESS_THAN", "GREATER_THAN",
    "COMMA", "SEMICOLON", "TAKE_FROM_WORKTOP", "TAKE_FROM_WORKTOP_BY_AMOUNT",
    "TAKE_FROM_WORKTOP_BY_IDS", "ASSERT_WORKTOP_CONTAINS", "ASSERT_WORKTOP_CONTAINS_BY_AMOUNT",
    "ASSERT_WORKTOP_CONTAINS_BY_IDS", "RETURN_TO_WORKTOP", "POP_FROM_AUTH_ZONE",
    "PUSH_TO_AUTH_ZONE", "CLEAR_AUTHZONE", "CREATE_PROOF_FROM_AUTH_ZONE",
    "CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT", "CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS",
    "CREATE_PROOF_FROM_BUCKET", "CLONE_PROOF", "DROP_PROOF", "DROP_ALL_PROOFS",
    "CALL_FUNCTION", "CALL_METHOD", "CALL_METHOD_WITH_ALL_RESOURCES", "PUBLISH_PACKAGE",
    "STRING_LITERAL", "DIGIT", "LETTER", "NUMBER", "WS", "COMMENT",
];
TransactionManifestParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TransactionManifestParser._LITERAL_NAMES, TransactionManifestParser._SYMBOLIC_NAMES, []);
TransactionManifestParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03U\u01D8\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x07\x02R\n\x02\f" +
    "\x02\x0E\x02U\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x07\x03^\n\x03\f\x03\x0E\x03a\v\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x07\x03i\n\x03\f\x03\x0E\x03l\v\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xC7\n\x03\x03\x04" +
    "\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
    "\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
    "\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x07\x11\xE8\n\x11\f\x11\x0E\x11\xEB\v\x11\x05\x11\xED\n\x11\x03\x11\x03" +
    "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xF8" +
    "\n\x12\f\x12\x0E\x12\xFB\v\x12\x05\x12\xFD\n\x12\x03\x12\x03\x12\x03\x13" +
    "\x03\x13\x05\x13\u0103\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07" +
    "\x14\u010A\n\x14\f\x14\x0E\x14\u010D\v\x14\x03\x14\x03\x14\x03\x15\x03" +
    "\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0118\n\x16\f\x16" +
    "\x0E\x16\u011B\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
    "\x17\x07\x17\u0124\n\x17\f\x17\x0E\x17\u0127\v\x17\x03\x17\x03\x17\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0133" +
    "\n\x18\f\x18\x0E\x18\u0136\v\x18\x05\x18\u0138\n\x18\x03\x18\x03\x18\x03" +
    "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0142\n\x19\f\x19" +
    "\x0E\x19\u0145\v\x19\x05\x19\u0147\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0153\n\x1A\f" +
    "\x1A\x0E\x1A\u0156\v\x1A\x05\x1A\u0158\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
    "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0164\n\x1B" +
    "\f\x1B\x0E\x1B\u0167\v\x1B\x05\x1B\u0169\n\x1B\x03\x1B\x03\x1B\x03\x1C" +
    "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
    "\x03\x1C\x07\x1C\u0178\n\x1C\f\x1C\x0E\x1C\u017B\v\x1C\x03\x1C\x03\x1C" +
    "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
    "\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
    " \x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03" +
    "#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03&\x03" +
    "&\x03&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
    "(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
    "(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u01D6" +
    "\n(\x03(\x02\x02\x02)\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
    "\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
    "\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
    ">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\x04\x04\x02\f\fPP\x03" +
    "\x02\x114\x02\u01FA\x02S\x03\x02\x02\x02\x04\xC6\x03\x02\x02\x02\x06\xC8" +
    "\x03\x02\x02\x02\b\xCA\x03\x02\x02\x02\n\xCC\x03\x02\x02\x02\f\xCE\x03" +
    "\x02\x02\x02\x0E\xD0\x03\x02\x02\x02\x10\xD2\x03\x02\x02\x02\x12\xD4\x03" +
    "\x02\x02\x02\x14\xD6\x03\x02\x02\x02\x16\xD8\x03\x02\x02\x02\x18\xDA\x03" +
    "\x02\x02\x02\x1A\xDC\x03\x02\x02\x02\x1C\xDE\x03\x02\x02\x02\x1E\xE0\x03" +
    "\x02\x02\x02 \xE2\x03\x02\x02\x02\"\xF0\x03\x02\x02\x02$\u0102\x03\x02" +
    "\x02\x02&\u0104\x03\x02\x02\x02(\u0110\x03\x02\x02\x02*\u0112\x03\x02" +
    "\x02\x02,\u011E\x03\x02\x02\x02.\u012A\x03\x02\x02\x020\u013B\x03\x02" +
    "\x02\x022\u014A\x03\x02\x02\x024\u015B\x03\x02\x02\x026\u016C\x03\x02" +
    "\x02\x028\u017E\x03\x02\x02\x02:\u0183\x03\x02\x02\x02<\u0188\x03\x02" +
    "\x02\x02>\u018D\x03\x02\x02\x02@\u0192\x03\x02\x02\x02B\u0197\x03\x02" +
    "\x02\x02D\u019C\x03\x02\x02\x02F\u01A1\x03\x02\x02\x02H\u01A6\x03\x02" +
    "\x02\x02J\u01AB\x03\x02\x02\x02L\u01B0\x03\x02\x02\x02N\u01D5\x03\x02" +
    "\x02\x02PR\x05\x04\x03\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02" +
    "\x02\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02US\x03\x02\x02\x02VW\x07\x02" +
    "\x02\x03W\x03\x03\x02\x02\x02XY\x07L\x02\x02YZ\x05:\x1E\x02Z[\x05\x1E" +
    "\x10\x02[_\x05\x1E\x10\x02\\^\x05N(\x02]\\\x03\x02\x02\x02^a\x03\x02\x02" +
    "\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`b\x03\x02\x02\x02a_\x03\x02\x02" +
    "\x02bc\x07:\x02\x02c\xC7\x03\x02\x02\x02de\x07M\x02\x02ef\x05<\x1F\x02" +
    "fj\x05\x1E\x10\x02gi\x05N(\x02hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03" +
    "\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02lj\x03\x02\x02\x02mn\x07" +
    ":\x02\x02n\xC7\x03\x02\x02\x02op\x07N\x02\x02pq\x05<\x1F\x02qr\x05\x1E" +
    "\x10\x02rs\x07:\x02\x02s\xC7\x03\x02\x02\x02tu\x07;\x02\x02uv\x05> \x02" +
    "vw\x05B\"\x02wx\x07:\x02\x02x\xC7\x03\x02\x02\x02yz\x07<\x02\x02z{\x05" +
    "8\x1D\x02{|\x05> \x02|}\x05B\"\x02}~\x07:\x02\x02~\xC7\x03\x02\x02\x02" +
    "\x7F\x80\x07=\x02\x02\x80\x81\x054\x1B\x02\x81\x82\x05> \x02\x82\x83\x05" +
    "B\"\x02\x83\x84\x07:\x02\x02\x84\xC7\x03\x02\x02\x02\x85\x86\x07A\x02" +
    "\x02\x86\x87\x05B\"\x02\x87\x88\x07:\x02\x02\x88\xC7\x03\x02\x02\x02\x89" +
    "\x8A\x07>\x02\x02\x8A\x8B\x05> \x02\x8B\x8C\x07:\x02\x02\x8C\xC7\x03\x02" +
    "\x02\x02\x8D\x8E\x07?\x02\x02\x8E\x8F\x058\x1D\x02\x8F\x90\x05> \x02\x90" +
    "\x91\x07:\x02\x02\x91\xC7\x03\x02\x02\x02\x92\x93\x07@\x02\x02\x93\x94" +
    "\x054\x1B\x02\x94\x95\x05> \x02\x95\x96\x07:\x02\x02\x96\xC7\x03\x02\x02" +
    "\x02\x97\x98\x07B\x02\x02\x98\x99\x05D#\x02\x99\x9A\x07:\x02\x02\x9A\xC7" +
    "\x03\x02\x02\x02\x9B\x9C\x07C\x02\x02\x9C\x9D\x05D#\x02\x9D\x9E\x07:\x02" +
    "\x02\x9E\xC7\x03\x02\x02\x02\x9F\xA0\x07E\x02\x02\xA0\xA1\x05> \x02\xA1" +
    "\xA2\x05D#\x02\xA2\xA3\x07:\x02\x02\xA3\xC7\x03\x02\x02\x02\xA4\xA5\x07" +
    "F\x02\x02\xA5\xA6\x058\x1D\x02\xA6\xA7\x05> \x02\xA7\xA8\x05D#\x02\xA8" +
    "\xA9\x07:\x02\x02\xA9\xC7\x03\x02\x02\x02\xAA\xAB\x07G\x02\x02\xAB\xAC" +
    "\x054\x1B\x02\xAC\xAD\x05> \x02\xAD\xAE\x05D#\x02\xAE\xAF\x07:\x02\x02" +
    "\xAF\xC7\x03\x02\x02\x02\xB0\xB1\x07H\x02\x02\xB1\xB2\x05B\"\x02\xB2\xB3" +
    "\x05D#\x02\xB3\xB4\x07:\x02\x02\xB4\xC7\x03\x02\x02\x02\xB5\xB6\x07I\x02" +
    "\x02\xB6\xB7\x05D#\x02\xB7\xB8\x05D#\x02\xB8\xB9\x07:\x02\x02\xB9\xC7" +
    "\x03\x02\x02\x02\xBA\xBB\x07J\x02\x02\xBB\xBC\x05D#\x02\xBC\xBD\x07:\x02" +
    "\x02\xBD\xC7\x03\x02\x02\x02\xBE\xBF\x07K\x02\x02\xBF\xC7\x07:\x02\x02" +
    "\xC0\xC1\x07D\x02\x02\xC1\xC7\x07:\x02\x02\xC2\xC3\x07O\x02\x02\xC3\xC4" +
    "\x05J&\x02\xC4\xC5\x07:\x02\x02\xC5\xC7\x03\x02\x02\x02\xC6X\x03\x02\x02" +
    "\x02\xC6d\x03\x02\x02\x02\xC6o\x03\x02\x02\x02\xC6t\x03\x02\x02\x02\xC6" +
    "y\x03\x02\x02\x02\xC6\x7F\x03\x02\x02\x02\xC6\x85\x03\x02\x02\x02\xC6" +
    "\x89\x03\x02\x02\x02\xC6\x8D\x03\x02\x02\x02\xC6\x92\x03\x02\x02\x02\xC6" +
    "\x97\x03\x02\x02\x02\xC6\x9B\x03\x02\x02\x02\xC6\x9F\x03\x02\x02\x02\xC6" +
    "\xA4\x03\x02\x02\x02\xC6\xAA\x03\x02\x02\x02\xC6\xB0\x03\x02\x02\x02\xC6" +
    "\xB5\x03\x02\x02\x02\xC6\xBA\x03\x02\x02\x02\xC6\xBE\x03\x02\x02\x02\xC6" +
    "\xC0\x03\x02\x02\x02\xC6\xC2\x03\x02\x02\x02\xC7\x05\x03\x02\x02\x02\xC8" +
    "\xC9\x07\x03\x02\x02\xC9\x07\x03\x02\x02\x02\xCA\xCB\x07\x04\x02\x02\xCB" +
    "\t\x03\x02\x02\x02\xCC\xCD\x07\x05\x02\x02\xCD\v\x03\x02\x02\x02\xCE\xCF" +
    "\x07\x06\x02\x02\xCF\r\x03\x02\x02\x02\xD0\xD1\x07\x07\x02\x02\xD1\x0F" +
    "\x03\x02\x02\x02\xD2\xD3\x07\b\x02\x02\xD3\x11\x03\x02\x02\x02\xD4\xD5" +
    "\x07\t\x02\x02\xD5\x13\x03\x02\x02\x02\xD6\xD7\x07\n\x02\x02\xD7\x15\x03" +
    "\x02\x02\x02\xD8\xD9\x07\v\x02\x02\xD9\x17\x03\x02\x02\x02\xDA\xDB\x07" +
    "\f\x02\x02\xDB\x19\x03\x02\x02\x02\xDC\xDD\x07\r\x02\x02\xDD\x1B\x03\x02" +
    "\x02\x02\xDE\xDF\x07\x0E\x02\x02\xDF\x1D\x03\x02\x02\x02\xE0\xE1\x07P" +
    "\x02\x02\xE1\x1F\x03\x02\x02\x02\xE2\xE3\x07\x1E\x02\x02\xE3\xEC\x075" +
    "\x02\x02\xE4\xE9\x05N(\x02\xE5\xE6\x079\x02\x02\xE6\xE8\x05N(\x02\xE7" +
    "\xE5\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9" +
    "\xEA\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC" +
    "\xE4\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE" +
    "\xEF\x076\x02\x02\xEF!\x03\x02\x02\x02\xF0\xF1\x07\x1F\x02\x02\xF1\xF2" +
    "\x075\x02\x02\xF2\xF3\x05\x1E\x10\x02\xF3\xFC\x079\x02\x02\xF4\xF9\x05" +
    "N(\x02\xF5\xF6\x079\x02\x02\xF6\xF8\x05N(\x02\xF7\xF5\x03\x02\x02\x02" +
    "\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02" +
    "\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\xF4\x03\x02\x02\x02" +
    "\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x076\x02\x02" +
    "\xFF#\x03\x02\x02\x02\u0100\u0103\x05&\x14\x02\u0101\u0103\x05(\x15\x02" +
    "\u0102\u0100\x03\x02\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103%\x03\x02" +
    "\x02\x02\u0104\u0105\x07\"\x02\x02\u0105\u0106\x075\x02\x02\u0106\u010B" +
    "\x05N(\x02\u0107\u0108\x079\x02\x02\u0108\u010A\x05N(\x02\u0109\u0107" +
    "\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02" +
    "\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03\x02\x02\x02\u010D\u010B\x03" +
    "\x02\x02\x02\u010E\u010F\x076\x02\x02\u010F\'\x03\x02\x02\x02\u0110\u0111" +
    "\x07#\x02\x02\u0111)\x03\x02\x02\x02\u0112\u0113\x07$\x02\x02\u0113\u0114" +
    "\x075\x02\x02\u0114\u0119\x05N(\x02\u0115\u0116\x079\x02\x02\u0116\u0118" +
    "\x05N(\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119" +
    "\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011C\x03\x02" +
    "\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u011D\x076\x02\x02\u011D+\x03" +
    "\x02\x02\x02\u011E\u011F\x07%\x02\x02\u011F\u0120\x075\x02\x02\u0120\u0125" +
    "\x05N(\x02\u0121\u0122\x079\x02\x02\u0122\u0124\x05N(\x02\u0123\u0121" +
    "\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02" +
    "\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0125\x03" +
    "\x02\x02\x02\u0128\u0129\x076\x02\x02\u0129-\x03\x02\x02\x02\u012A\u012B" +
    "\x07&\x02\x02\u012B\u012C\x077\x02\x02\u012C\u012D\x05L\'\x02\u012D\u012E" +
    "\x078\x02\x02\u012E\u0137\x075\x02\x02\u012F\u0134\x05N(\x02\u0130\u0131" +
    "\x079\x02\x02\u0131\u0133\x05N(\x02\u0132\u0130\x03\x02\x02\x02\u0133" +
    "\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02" +
    "\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0137" +
    "\u012F\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03\x02" +
    "\x02\x02\u0139\u013A\x076\x02\x02\u013A/\x03\x02\x02\x02\u013B\u013C\x07" +
    "\'\x02\x02\u013C\u013D\x077\x02\x02\u013D\u0146\x075\x02\x02\u013E\u0143" +
    "\x05N(\x02\u013F\u0140\x079\x02\x02\u0140\u0142\x05N(\x02\u0141\u013F" +
    "\x03\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02" +
    "\u0143\u0144\x03\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03" +
    "\x02\x02\x02\u0146\u013E\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147" +
    "\u0148\x03\x02\x02\x02\u0148\u0149\x076\x02\x02\u01491\x03\x02\x02\x02" +
    "\u014A\u014B\x07(\x02\x02\u014B\u014C\x077\x02\x02\u014C\u014D\x05L\'" +
    "\x02\u014D\u014E\x078\x02\x02\u014E\u0157\x075\x02\x02\u014F\u0154\x05" +
    "N(\x02\u0150\u0151\x079\x02\x02\u0151\u0153\x05N(\x02\u0152\u0150\x03" +
    "\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154" +
    "\u0155\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02" +
    "\x02\x02\u0157\u014F\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158" +
    "\u0159\x03\x02\x02\x02\u0159\u015A\x076\x02\x02\u015A3\x03\x02\x02\x02" +
    "\u015B\u015C\x07)\x02\x02\u015C\u015D\x077\x02\x02\u015D\u015E\x05L\'" +
    "\x02\u015E\u015F\x078\x02\x02\u015F\u0168\x075\x02\x02\u0160\u0165\x05" +
    "N(\x02\u0161\u0162\x079\x02\x02\u0162\u0164\x05N(\x02\u0163\u0161\x03" +
    "\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165" +
    "\u0166\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02" +
    "\x02\x02\u0168\u0160\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
    "\u016A\x03\x02\x02\x02\u016A\u016B\x076\x02\x02\u016B5\x03\x02\x02\x02" +
    "\u016C\u016D\x07*\x02\x02\u016D\u016E\x077\x02\x02\u016E\u016F\x05L\'" +
    "\x02\u016F\u0170\x079\x02\x02\u0170\u0171\x05L\'\x02\u0171\u0172\x078" +
    "\x02\x02\u0172\u0179\x075\x02\x02\u0173\u0174\x05N(\x02\u0174\u0175\x07" +
    "9\x02\x02\u0175\u0176\x05N(\x02\u0176\u0178\x03\x02\x02\x02\u0177\u0173" +
    "\x03\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02" +
    "\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u0179\x03" +
    "\x02\x02\x02\u017C\u017D\x076\x02\x02\u017D7\x03\x02\x02\x02\u017E\u017F" +
    "\x07+\x02\x02\u017F\u0180\x075\x02\x02\u0180\u0181\x07P\x02\x02\u0181" +
    "\u0182\x076\x02\x02\u01829\x03\x02\x02\x02\u0183\u0184\x07,\x02\x02\u0184" +
    "\u0185\x075\x02\x02\u0185\u0186\x07P\x02\x02\u0186\u0187\x076\x02\x02" +
    "\u0187;\x03\x02\x02\x02\u0188\u0189\x07-\x02\x02\u0189\u018A\x075\x02" +
    "\x02\u018A\u018B\x07P\x02\x02\u018B\u018C\x076\x02\x02\u018C=\x03\x02" +
    "\x02\x02\u018D\u018E\x07.\x02\x02\u018E\u018F\x075\x02\x02\u018F\u0190" +
    "\x07P\x02\x02\u0190\u0191\x076\x02\x02\u0191?\x03\x02\x02\x02\u0192\u0193" +
    "\x07/\x02\x02\u0193\u0194\x075\x02\x02\u0194\u0195\x07P\x02\x02\u0195" +
    "\u0196\x076\x02\x02\u0196A\x03\x02\x02\x02\u0197\u0198\x070\x02\x02\u0198" +
    "\u0199\x075\x02\x02\u0199\u019A\t\x02\x02\x02\u019A\u019B\x076\x02\x02" +
    "\u019BC\x03\x02\x02\x02\u019C\u019D\x071\x02\x02\u019D\u019E\x075\x02" +
    "\x02\u019E\u019F\t\x02\x02\x02\u019F\u01A0\x076\x02\x02\u01A0E\x03\x02" +
    "\x02\x02\u01A1\u01A2\x072\x02\x02\u01A2\u01A3\x075\x02\x02\u01A3\u01A4" +
    "\x07P\x02\x02\u01A4\u01A5\x076\x02\x02\u01A5G\x03\x02\x02\x02\u01A6\u01A7" +
    "\x073\x02\x02\u01A7\u01A8\x075\x02\x02\u01A8\u01A9\x07P\x02\x02\u01A9" +
    "\u01AA\x076\x02\x02\u01AAI\x03\x02\x02\x02\u01AB\u01AC\x074\x02\x02\u01AC" +
    "\u01AD\x075\x02\x02\u01AD\u01AE\x07P\x02\x02\u01AE\u01AF\x076\x02\x02" +
    "\u01AFK\x03\x02\x02\x02\u01B0\u01B1\t\x03\x02\x02\u01B1M\x03\x02\x02\x02" +
    "\u01B2\u01D6\x05\x06\x04\x02\u01B3\u01D6\x05\b\x05\x02\u01B4\u01D6\x05" +
    "\n\x06\x02\u01B5\u01D6\x05\f\x07\x02\u01B6\u01D6\x05\x0E\b\x02\u01B7\u01D6" +
    "\x05\x10\t\x02\u01B8\u01D6\x05\x12\n\x02\u01B9\u01D6\x05\x14\v\x02\u01BA" +
    "\u01D6\x05\x16\f\x02\u01BB\u01D6\x05\x18\r\x02\u01BC\u01D6\x05\x1A\x0E" +
    "\x02\u01BD\u01D6\x05\x1C\x0F\x02\u01BE\u01D6\x05\x1E\x10\x02\u01BF\u01D6" +
    "\x05 \x11\x02\u01C0\u01D6\x05\"\x12\x02\u01C1\u01D6\x05$\x13\x02\u01C2" +
    "\u01D6\x05&\x14\x02\u01C3\u01D6\x05(\x15\x02\u01C4\u01D6\x05*\x16\x02" +
    "\u01C5\u01D6\x05,\x17\x02\u01C6\u01D6\x05.\x18\x02\u01C7\u01D6\x050\x19" +
    "\x02\u01C8\u01D6\x052\x1A\x02\u01C9\u01D6\x054\x1B\x02\u01CA\u01D6\x05" +
    "6\x1C\x02\u01CB\u01D6\x058\x1D\x02\u01CC\u01D6\x05:\x1E\x02\u01CD\u01D6" +
    "\x05<\x1F\x02\u01CE\u01D6\x05> \x02\u01CF\u01D6\x05@!\x02\u01D0\u01D6" +
    "\x05B\"\x02\u01D1\u01D6\x05D#\x02\u01D2\u01D6\x05F$\x02\u01D3\u01D6\x05" +
    "H%\x02\u01D4\u01D6\x05J&\x02\u01D5\u01B2\x03\x02\x02\x02\u01D5\u01B3\x03" +
    "\x02\x02\x02\u01D5\u01B4\x03\x02\x02\x02\u01D5\u01B5\x03\x02\x02\x02\u01D5" +
    "\u01B6\x03\x02\x02\x02\u01D5\u01B7\x03\x02\x02\x02\u01D5\u01B8\x03\x02" +
    "\x02\x02\u01D5\u01B9\x03\x02\x02\x02\u01D5\u01BA\x03\x02\x02\x02\u01D5" +
    "\u01BB\x03\x02\x02\x02\u01D5\u01BC\x03\x02\x02\x02\u01D5\u01BD\x03\x02" +
    "\x02\x02\u01D5\u01BE\x03\x02\x02\x02\u01D5\u01BF\x03\x02\x02\x02\u01D5" +
    "\u01C0\x03\x02\x02\x02\u01D5\u01C1\x03\x02\x02\x02\u01D5\u01C2\x03\x02" +
    "\x02\x02\u01D5\u01C3\x03\x02\x02\x02\u01D5\u01C4\x03\x02\x02\x02\u01D5" +
    "\u01C5\x03\x02\x02\x02\u01D5\u01C6\x03\x02\x02\x02\u01D5\u01C7\x03\x02" +
    "\x02\x02\u01D5\u01C8\x03\x02\x02\x02\u01D5\u01C9\x03\x02\x02\x02\u01D5" +
    "\u01CA\x03\x02\x02\x02\u01D5\u01CB\x03\x02\x02\x02\u01D5\u01CC\x03\x02" +
    "\x02\x02\u01D5\u01CD\x03\x02\x02\x02\u01D5\u01CE\x03\x02\x02\x02\u01D5" +
    "\u01CF\x03\x02\x02\x02\u01D5\u01D0\x03\x02\x02\x02\u01D5\u01D1\x03\x02" +
    "\x02\x02\u01D5\u01D2\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5" +
    "\u01D4\x03\x02\x02\x02\u01D6O\x03\x02\x02\x02\x18S_j\xC6\xE9\xEC\xF9\xFC" +
    "\u0102\u010B\u0119\u0125\u0134\u0137\u0143\u0146\u0154\u0157\u0165\u0168" +
    "\u0179\u01D5";
class ManifestContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(TransactionManifestParser.EOF, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_manifest; }
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
    CALL_FUNCTION() { return this.tryGetToken(TransactionManifestParser.CALL_FUNCTION, 0); }
    package_address() {
        return this.tryGetRuleContext(0, Package_addressContext);
    }
    string(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringContext);
        }
        else {
            return this.getRuleContext(i, StringContext);
        }
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    }
    CALL_METHOD() { return this.tryGetToken(TransactionManifestParser.CALL_METHOD, 0); }
    component_address() {
        return this.tryGetRuleContext(0, Component_addressContext);
    }
    CALL_METHOD_WITH_ALL_RESOURCES() { return this.tryGetToken(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES, 0); }
    TAKE_FROM_WORKTOP() { return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0); }
    resource_address() {
        return this.tryGetRuleContext(0, Resource_addressContext);
    }
    bucket() {
        return this.tryGetRuleContext(0, BucketContext);
    }
    TAKE_FROM_WORKTOP_BY_AMOUNT() { return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT, 0); }
    decimal() {
        return this.tryGetRuleContext(0, DecimalContext);
    }
    TAKE_FROM_WORKTOP_BY_IDS() { return this.tryGetToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS, 0); }
    set() {
        return this.tryGetRuleContext(0, SetContext);
    }
    RETURN_TO_WORKTOP() { return this.tryGetToken(TransactionManifestParser.RETURN_TO_WORKTOP, 0); }
    ASSERT_WORKTOP_CONTAINS() { return this.tryGetToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS, 0); }
    ASSERT_WORKTOP_CONTAINS_BY_AMOUNT() { return this.tryGetToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT, 0); }
    ASSERT_WORKTOP_CONTAINS_BY_IDS() { return this.tryGetToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS, 0); }
    POP_FROM_AUTH_ZONE() { return this.tryGetToken(TransactionManifestParser.POP_FROM_AUTH_ZONE, 0); }
    proof(i) {
        if (i === undefined) {
            return this.getRuleContexts(ProofContext);
        }
        else {
            return this.getRuleContext(i, ProofContext);
        }
    }
    PUSH_TO_AUTH_ZONE() { return this.tryGetToken(TransactionManifestParser.PUSH_TO_AUTH_ZONE, 0); }
    CREATE_PROOF_FROM_AUTH_ZONE() { return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE, 0); }
    CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT() { return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT, 0); }
    CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS() { return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS, 0); }
    CREATE_PROOF_FROM_BUCKET() { return this.tryGetToken(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET, 0); }
    CLONE_PROOF() { return this.tryGetToken(TransactionManifestParser.CLONE_PROOF, 0); }
    DROP_PROOF() { return this.tryGetToken(TransactionManifestParser.DROP_PROOF, 0); }
    DROP_ALL_PROOFS() { return this.tryGetToken(TransactionManifestParser.DROP_ALL_PROOFS, 0); }
    CLEAR_AUTHZONE() { return this.tryGetToken(TransactionManifestParser.CLEAR_AUTHZONE, 0); }
    PUBLISH_PACKAGE() { return this.tryGetToken(TransactionManifestParser.PUBLISH_PACKAGE, 0); }
    bytes() {
        return this.tryGetRuleContext(0, BytesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_manifestInstruction; }
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
    get ruleIndex() { return TransactionManifestParser.RULE_unit; }
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
    BOOL_LITERAL() { return this.getToken(TransactionManifestParser.BOOL_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_bool; }
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
    I8_LITERAL() { return this.getToken(TransactionManifestParser.I8_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_i8; }
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
    I16_LITERAL() { return this.getToken(TransactionManifestParser.I16_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_i16; }
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
    I32_LITERAL() { return this.getToken(TransactionManifestParser.I32_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_i32; }
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
    I64_LITERAL() { return this.getToken(TransactionManifestParser.I64_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_i64; }
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
    I128_LITERAL() { return this.getToken(TransactionManifestParser.I128_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_i128; }
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
    U8_LITERAL() { return this.getToken(TransactionManifestParser.U8_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_u8; }
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
    U16_LITERAL() { return this.getToken(TransactionManifestParser.U16_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_u16; }
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
    U32_LITERAL() { return this.getToken(TransactionManifestParser.U32_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_u32; }
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
    U64_LITERAL() { return this.getToken(TransactionManifestParser.U64_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_u64; }
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
    U128_LITERAL() { return this.getToken(TransactionManifestParser.U128_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_u128; }
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
class StringContext extends ParserRuleContext_1.ParserRuleContext {
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_string; }
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
    STRUCT_TYPE() { return this.getToken(TransactionManifestParser.STRUCT_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_struct; }
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
    ENUM_TYPE() { return this.getToken(TransactionManifestParser.ENUM_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_enum_; }
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
    get ruleIndex() { return TransactionManifestParser.RULE_option; }
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
    SOME_TYPE() { return this.getToken(TransactionManifestParser.SOME_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_some; }
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
    NONE_TYPE() { return this.getToken(TransactionManifestParser.NONE_TYPE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_none; }
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
    OK_TYPE() { return this.getToken(TransactionManifestParser.OK_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_ok; }
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
    ERR_TYPE() { return this.getToken(TransactionManifestParser.ERR_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_err; }
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
    ARRAY_TYPE() { return this.getToken(TransactionManifestParser.ARRAY_TYPE, 0); }
    LESS_THAN() { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    GREATER_THAN() { return this.getToken(TransactionManifestParser.GREATER_THAN, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_array; }
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
    TUPLE_TYPE() { return this.getToken(TransactionManifestParser.TUPLE_TYPE, 0); }
    LESS_THAN() { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_tuple; }
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
    LIST_TYPE() { return this.getToken(TransactionManifestParser.LIST_TYPE, 0); }
    LESS_THAN() { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    GREATER_THAN() { return this.getToken(TransactionManifestParser.GREATER_THAN, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_list; }
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
    SET_TYPE() { return this.getToken(TransactionManifestParser.SET_TYPE, 0); }
    LESS_THAN() { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    GREATER_THAN() { return this.getToken(TransactionManifestParser.GREATER_THAN, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_set; }
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
    MAP_TYPE() { return this.getToken(TransactionManifestParser.MAP_TYPE, 0); }
    LESS_THAN() { return this.getToken(TransactionManifestParser.LESS_THAN, 0); }
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
    GREATER_THAN() { return this.getToken(TransactionManifestParser.GREATER_THAN, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
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
    get ruleIndex() { return TransactionManifestParser.RULE_map; }
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
    DECIMAL_TYPE() { return this.getToken(TransactionManifestParser.DECIMAL_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_decimal; }
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
class Package_addressContext extends ParserRuleContext_1.ParserRuleContext {
    PACKAGE_ADDRESS_TYPE() { return this.getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_package_address; }
    // @Override
    enterRule(listener) {
        if (listener.enterPackage_address) {
            listener.enterPackage_address(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPackage_address) {
            listener.exitPackage_address(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPackage_address) {
            return visitor.visitPackage_address(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Package_addressContext = Package_addressContext;
class Component_addressContext extends ParserRuleContext_1.ParserRuleContext {
    COMPONENT_ADDRESS_TYPE() { return this.getToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_component_address; }
    // @Override
    enterRule(listener) {
        if (listener.enterComponent_address) {
            listener.enterComponent_address(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComponent_address) {
            listener.exitComponent_address(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComponent_address) {
            return visitor.visitComponent_address(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Component_addressContext = Component_addressContext;
class Resource_addressContext extends ParserRuleContext_1.ParserRuleContext {
    RESOURCE_ADDRESS_TYPE() { return this.getToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_resource_address; }
    // @Override
    enterRule(listener) {
        if (listener.enterResource_address) {
            listener.enterResource_address(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResource_address) {
            listener.exitResource_address(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitResource_address) {
            return visitor.visitResource_address(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Resource_addressContext = Resource_addressContext;
class HashContext extends ParserRuleContext_1.ParserRuleContext {
    HASH_TYPE() { return this.getToken(TransactionManifestParser.HASH_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_hash; }
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
    BUCKET_TYPE() { return this.getToken(TransactionManifestParser.BUCKET_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.tryGetToken(TransactionManifestParser.STRING_LITERAL, 0); }
    U32_LITERAL() { return this.tryGetToken(TransactionManifestParser.U32_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_bucket; }
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
    PROOF_TYPE() { return this.getToken(TransactionManifestParser.PROOF_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.tryGetToken(TransactionManifestParser.STRING_LITERAL, 0); }
    U32_LITERAL() { return this.tryGetToken(TransactionManifestParser.U32_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_proof; }
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
class Non_fungible_idContext extends ParserRuleContext_1.ParserRuleContext {
    NON_FUNGIBLE_ID_TYPE() { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_non_fungible_id; }
    // @Override
    enterRule(listener) {
        if (listener.enterNon_fungible_id) {
            listener.enterNon_fungible_id(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNon_fungible_id) {
            listener.exitNon_fungible_id(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNon_fungible_id) {
            return visitor.visitNon_fungible_id(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Non_fungible_idContext = Non_fungible_idContext;
class Non_fungible_addressContext extends ParserRuleContext_1.ParserRuleContext {
    NON_FUNGIBLE_ADDRESS_TYPE() { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_non_fungible_address; }
    // @Override
    enterRule(listener) {
        if (listener.enterNon_fungible_address) {
            listener.enterNon_fungible_address(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNon_fungible_address) {
            listener.exitNon_fungible_address(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNon_fungible_address) {
            return visitor.visitNon_fungible_address(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Non_fungible_addressContext = Non_fungible_addressContext;
class BytesContext extends ParserRuleContext_1.ParserRuleContext {
    BYTES_TYPE() { return this.getToken(TransactionManifestParser.BYTES_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_bytes; }
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
    UNIT_TYPE() { return this.tryGetToken(TransactionManifestParser.UNIT_TYPE, 0); }
    BOOL_TYPE() { return this.tryGetToken(TransactionManifestParser.BOOL_TYPE, 0); }
    I8_TYPE() { return this.tryGetToken(TransactionManifestParser.I8_TYPE, 0); }
    I16_TYPE() { return this.tryGetToken(TransactionManifestParser.I16_TYPE, 0); }
    I32_TYPE() { return this.tryGetToken(TransactionManifestParser.I32_TYPE, 0); }
    I64_TYPE() { return this.tryGetToken(TransactionManifestParser.I64_TYPE, 0); }
    I128_TYPE() { return this.tryGetToken(TransactionManifestParser.I128_TYPE, 0); }
    U8_TYPE() { return this.tryGetToken(TransactionManifestParser.U8_TYPE, 0); }
    U16_TYPE() { return this.tryGetToken(TransactionManifestParser.U16_TYPE, 0); }
    U32_TYPE() { return this.tryGetToken(TransactionManifestParser.U32_TYPE, 0); }
    U64_TYPE() { return this.tryGetToken(TransactionManifestParser.U64_TYPE, 0); }
    U128_TYPE() { return this.tryGetToken(TransactionManifestParser.U128_TYPE, 0); }
    STRING_TYPE() { return this.tryGetToken(TransactionManifestParser.STRING_TYPE, 0); }
    STRUCT_TYPE() { return this.tryGetToken(TransactionManifestParser.STRUCT_TYPE, 0); }
    ENUM_TYPE() { return this.tryGetToken(TransactionManifestParser.ENUM_TYPE, 0); }
    OPTION_TYPE() { return this.tryGetToken(TransactionManifestParser.OPTION_TYPE, 0); }
    RESULT_TYPE() { return this.tryGetToken(TransactionManifestParser.RESULT_TYPE, 0); }
    SOME_TYPE() { return this.tryGetToken(TransactionManifestParser.SOME_TYPE, 0); }
    NONE_TYPE() { return this.tryGetToken(TransactionManifestParser.NONE_TYPE, 0); }
    OK_TYPE() { return this.tryGetToken(TransactionManifestParser.OK_TYPE, 0); }
    ERR_TYPE() { return this.tryGetToken(TransactionManifestParser.ERR_TYPE, 0); }
    ARRAY_TYPE() { return this.tryGetToken(TransactionManifestParser.ARRAY_TYPE, 0); }
    TUPLE_TYPE() { return this.tryGetToken(TransactionManifestParser.TUPLE_TYPE, 0); }
    LIST_TYPE() { return this.tryGetToken(TransactionManifestParser.LIST_TYPE, 0); }
    SET_TYPE() { return this.tryGetToken(TransactionManifestParser.SET_TYPE, 0); }
    MAP_TYPE() { return this.tryGetToken(TransactionManifestParser.MAP_TYPE, 0); }
    DECIMAL_TYPE() { return this.tryGetToken(TransactionManifestParser.DECIMAL_TYPE, 0); }
    PACKAGE_ADDRESS_TYPE() { return this.tryGetToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
    COMPONENT_ADDRESS_TYPE() { return this.tryGetToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
    RESOURCE_ADDRESS_TYPE() { return this.tryGetToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
    HASH_TYPE() { return this.tryGetToken(TransactionManifestParser.HASH_TYPE, 0); }
    BUCKET_TYPE() { return this.tryGetToken(TransactionManifestParser.BUCKET_TYPE, 0); }
    PROOF_TYPE() { return this.tryGetToken(TransactionManifestParser.PROOF_TYPE, 0); }
    NON_FUNGIBLE_ID_TYPE() { return this.tryGetToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
    NON_FUNGIBLE_ADDRESS_TYPE() { return this.tryGetToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
    BYTES_TYPE() { return this.tryGetToken(TransactionManifestParser.BYTES_TYPE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_type; }
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
    package_address() {
        return this.tryGetRuleContext(0, Package_addressContext);
    }
    component_address() {
        return this.tryGetRuleContext(0, Component_addressContext);
    }
    resource_address() {
        return this.tryGetRuleContext(0, Resource_addressContext);
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
    non_fungible_id() {
        return this.tryGetRuleContext(0, Non_fungible_idContext);
    }
    non_fungible_address() {
        return this.tryGetRuleContext(0, Non_fungible_addressContext);
    }
    bytes() {
        return this.tryGetRuleContext(0, BytesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_value; }
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