"use strict";
// Generated from src/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalContext = exports.MapContext = exports.SetContext = exports.ListContext = exports.TupleContext = exports.ArrayContext = exports.ErrContext = exports.OkContext = exports.NoneContext = exports.SomeContext = exports.OptionContext = exports.Enum_Context = exports.StructContext = exports.StringContext = exports.U128Context = exports.U64Context = exports.U32Context = exports.U16Context = exports.U8Context = exports.I128Context = exports.I64Context = exports.I32Context = exports.I16Context = exports.I8Context = exports.BoolContext = exports.UnitContext = exports.PublishPackageContext = exports.ClearAuthZoneContext = exports.DropAllProofsContext = exports.DropProofContext = exports.CloneProofContext = exports.CreateProofFromBucketContext = exports.CreateProofFromAuthZoneByIdsContext = exports.CreateProofFromAuthZoneByAmountContext = exports.CreateProofFromAuthZoneContext = exports.PushToAuthZoneContext = exports.PopFromAuthZoneContext = exports.AssertWorktopContainsByIdsContext = exports.AssertWorktopContainsByAmountContext = exports.AssertWorktopContainsContext = exports.ReturnToWorktopContext = exports.TakeFromWorktopByIdsContext = exports.TakeFromWorktopByAmountContext = exports.TakeFromWorktopContext = exports.CallMethodWithAllResourcesContext = exports.CallMethodContext = exports.CallFunctionContext = exports.ManifestInstructionContext = exports.ManifestContext = exports.TransactionManifestParser = void 0;
exports.ValueContext = exports.TypeContext = exports.BytesContext = exports.NonFungibleAddressContext = exports.NonFungibleIdContext = exports.ProofContext = exports.BucketContext = exports.HashContext = exports.ResourceAddressContext = exports.ComponentAddressContext = exports.PackageAddressContext = exports.PreciseDecimalContext = void 0;
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
                this.state = 125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (TransactionManifestParser.TAKE_FROM_WORKTOP - 58)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT - 58)) | (1 << (TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS - 58)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS - 58)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT - 58)) | (1 << (TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS - 58)) | (1 << (TransactionManifestParser.RETURN_TO_WORKTOP - 58)) | (1 << (TransactionManifestParser.POP_FROM_AUTH_ZONE - 58)) | (1 << (TransactionManifestParser.PUSH_TO_AUTH_ZONE - 58)) | (1 << (TransactionManifestParser.CLEAR_AUTHZONE - 58)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE - 58)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT - 58)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS - 58)) | (1 << (TransactionManifestParser.CREATE_PROOF_FROM_BUCKET - 58)) | (1 << (TransactionManifestParser.CLONE_PROOF - 58)) | (1 << (TransactionManifestParser.DROP_PROOF - 58)) | (1 << (TransactionManifestParser.DROP_ALL_PROOFS - 58)) | (1 << (TransactionManifestParser.CALL_FUNCTION - 58)) | (1 << (TransactionManifestParser.CALL_METHOD - 58)) | (1 << (TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES - 58)) | (1 << (TransactionManifestParser.PUBLISH_PACKAGE - 58)))) !== 0)) {
                    {
                        {
                            this.state = 122;
                            this.manifestInstruction();
                        }
                    }
                    this.state = 127;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 128;
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
        try {
            this.state = 151;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TransactionManifestParser.CALL_FUNCTION:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 130;
                        this.callFunction();
                    }
                    break;
                case TransactionManifestParser.CALL_METHOD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 131;
                        this.callMethod();
                    }
                    break;
                case TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 132;
                        this.callMethodWithAllResources();
                    }
                    break;
                case TransactionManifestParser.RETURN_TO_WORKTOP:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 133;
                        this.returnToWorktop();
                    }
                    break;
                case TransactionManifestParser.TAKE_FROM_WORKTOP:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 134;
                        this.takeFromWorktop();
                    }
                    break;
                case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 135;
                        this.takeFromWorktopByAmount();
                    }
                    break;
                case TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 136;
                        this.takeFromWorktopByIds();
                    }
                    break;
                case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 137;
                        this.assertWorktopContains();
                    }
                    break;
                case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 138;
                        this.assertWorktopContainsByAmount();
                    }
                    break;
                case TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 139;
                        this.assertWorktopContainsByIds();
                    }
                    break;
                case TransactionManifestParser.POP_FROM_AUTH_ZONE:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 140;
                        this.popFromAuthZone();
                    }
                    break;
                case TransactionManifestParser.PUSH_TO_AUTH_ZONE:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 141;
                        this.pushToAuthZone();
                    }
                    break;
                case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 142;
                        this.createProofFromAuthZone();
                    }
                    break;
                case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 143;
                        this.createProofFromAuthZoneByAmount();
                    }
                    break;
                case TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 144;
                        this.createProofFromAuthZoneByIds();
                    }
                    break;
                case TransactionManifestParser.CREATE_PROOF_FROM_BUCKET:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 145;
                        this.createProofFromBucket();
                    }
                    break;
                case TransactionManifestParser.CLONE_PROOF:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 146;
                        this.cloneProof();
                    }
                    break;
                case TransactionManifestParser.DROP_PROOF:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 147;
                        this.dropProof();
                    }
                    break;
                case TransactionManifestParser.DROP_ALL_PROOFS:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 148;
                        this.dropAllProofs();
                    }
                    break;
                case TransactionManifestParser.CLEAR_AUTHZONE:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 149;
                        this.clearAuthZone();
                    }
                    break;
                case TransactionManifestParser.PUBLISH_PACKAGE:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 150;
                        this.publishPackage();
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
    callFunction() {
        let _localctx = new CallFunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TransactionManifestParser.RULE_callFunction);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.match(TransactionManifestParser.CALL_FUNCTION);
                this.state = 154;
                this.packageAddress();
                this.state = 155;
                this.string();
                this.state = 156;
                this.string();
                this.state = 160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        {
                            this.state = 157;
                            this.value();
                        }
                    }
                    this.state = 162;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 163;
                this.match(TransactionManifestParser.SEMICOLON);
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
    callMethod() {
        let _localctx = new CallMethodContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TransactionManifestParser.RULE_callMethod);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this.match(TransactionManifestParser.CALL_METHOD);
                this.state = 166;
                this.componentAddress();
                this.state = 167;
                this.string();
                this.state = 171;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        {
                            this.state = 168;
                            this.value();
                        }
                    }
                    this.state = 173;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 174;
                this.match(TransactionManifestParser.SEMICOLON);
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
    callMethodWithAllResources() {
        let _localctx = new CallMethodWithAllResourcesContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, TransactionManifestParser.RULE_callMethodWithAllResources);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 176;
                this.match(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES);
                this.state = 177;
                this.componentAddress();
                this.state = 178;
                this.string();
                this.state = 179;
                this.match(TransactionManifestParser.SEMICOLON);
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
    takeFromWorktop() {
        let _localctx = new TakeFromWorktopContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, TransactionManifestParser.RULE_takeFromWorktop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 181;
                this.match(TransactionManifestParser.TAKE_FROM_WORKTOP);
                this.state = 182;
                this.resourceAddress();
                this.state = 183;
                this.bucket();
                this.state = 184;
                this.match(TransactionManifestParser.SEMICOLON);
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
    takeFromWorktopByAmount() {
        let _localctx = new TakeFromWorktopByAmountContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, TransactionManifestParser.RULE_takeFromWorktopByAmount);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT);
                this.state = 187;
                this.decimal();
                this.state = 188;
                this.resourceAddress();
                this.state = 189;
                this.bucket();
                this.state = 190;
                this.match(TransactionManifestParser.SEMICOLON);
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
    takeFromWorktopByIds() {
        let _localctx = new TakeFromWorktopByIdsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, TransactionManifestParser.RULE_takeFromWorktopByIds);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.match(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS);
                this.state = 193;
                this.set();
                this.state = 194;
                this.resourceAddress();
                this.state = 195;
                this.bucket();
                this.state = 196;
                this.match(TransactionManifestParser.SEMICOLON);
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
    returnToWorktop() {
        let _localctx = new ReturnToWorktopContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, TransactionManifestParser.RULE_returnToWorktop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(TransactionManifestParser.RETURN_TO_WORKTOP);
                this.state = 199;
                this.bucket();
                this.state = 200;
                this.match(TransactionManifestParser.SEMICOLON);
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
    assertWorktopContains() {
        let _localctx = new AssertWorktopContainsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, TransactionManifestParser.RULE_assertWorktopContains);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS);
                this.state = 203;
                this.resourceAddress();
                this.state = 204;
                this.match(TransactionManifestParser.SEMICOLON);
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
    assertWorktopContainsByAmount() {
        let _localctx = new AssertWorktopContainsByAmountContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, TransactionManifestParser.RULE_assertWorktopContainsByAmount);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT);
                this.state = 207;
                this.decimal();
                this.state = 208;
                this.resourceAddress();
                this.state = 209;
                this.match(TransactionManifestParser.SEMICOLON);
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
    assertWorktopContainsByIds() {
        let _localctx = new AssertWorktopContainsByIdsContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, TransactionManifestParser.RULE_assertWorktopContainsByIds);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.match(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS);
                this.state = 212;
                this.set();
                this.state = 213;
                this.resourceAddress();
                this.state = 214;
                this.match(TransactionManifestParser.SEMICOLON);
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
    popFromAuthZone() {
        let _localctx = new PopFromAuthZoneContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, TransactionManifestParser.RULE_popFromAuthZone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(TransactionManifestParser.POP_FROM_AUTH_ZONE);
                this.state = 217;
                this.proof();
                this.state = 218;
                this.match(TransactionManifestParser.SEMICOLON);
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
    pushToAuthZone() {
        let _localctx = new PushToAuthZoneContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, TransactionManifestParser.RULE_pushToAuthZone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                this.match(TransactionManifestParser.PUSH_TO_AUTH_ZONE);
                this.state = 221;
                this.proof();
                this.state = 222;
                this.match(TransactionManifestParser.SEMICOLON);
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
    createProofFromAuthZone() {
        let _localctx = new CreateProofFromAuthZoneContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, TransactionManifestParser.RULE_createProofFromAuthZone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE);
                this.state = 225;
                this.resourceAddress();
                this.state = 226;
                this.proof();
                this.state = 227;
                this.match(TransactionManifestParser.SEMICOLON);
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
    createProofFromAuthZoneByAmount() {
        let _localctx = new CreateProofFromAuthZoneByAmountContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, TransactionManifestParser.RULE_createProofFromAuthZoneByAmount);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT);
                this.state = 230;
                this.decimal();
                this.state = 231;
                this.resourceAddress();
                this.state = 232;
                this.proof();
                this.state = 233;
                this.match(TransactionManifestParser.SEMICOLON);
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
    createProofFromAuthZoneByIds() {
        let _localctx = new CreateProofFromAuthZoneByIdsContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, TransactionManifestParser.RULE_createProofFromAuthZoneByIds);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 235;
                this.match(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS);
                this.state = 236;
                this.set();
                this.state = 237;
                this.resourceAddress();
                this.state = 238;
                this.proof();
                this.state = 239;
                this.match(TransactionManifestParser.SEMICOLON);
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
    createProofFromBucket() {
        let _localctx = new CreateProofFromBucketContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, TransactionManifestParser.RULE_createProofFromBucket);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                this.match(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET);
                this.state = 242;
                this.bucket();
                this.state = 243;
                this.proof();
                this.state = 244;
                this.match(TransactionManifestParser.SEMICOLON);
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
    cloneProof() {
        let _localctx = new CloneProofContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, TransactionManifestParser.RULE_cloneProof);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.match(TransactionManifestParser.CLONE_PROOF);
                this.state = 247;
                this.proof();
                this.state = 248;
                this.proof();
                this.state = 249;
                this.match(TransactionManifestParser.SEMICOLON);
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
    dropProof() {
        let _localctx = new DropProofContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, TransactionManifestParser.RULE_dropProof);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 251;
                this.match(TransactionManifestParser.DROP_PROOF);
                this.state = 252;
                this.proof();
                this.state = 253;
                this.match(TransactionManifestParser.SEMICOLON);
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
    dropAllProofs() {
        let _localctx = new DropAllProofsContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, TransactionManifestParser.RULE_dropAllProofs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 255;
                this.match(TransactionManifestParser.DROP_ALL_PROOFS);
                this.state = 256;
                this.match(TransactionManifestParser.SEMICOLON);
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
    clearAuthZone() {
        let _localctx = new ClearAuthZoneContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, TransactionManifestParser.RULE_clearAuthZone);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                this.match(TransactionManifestParser.CLEAR_AUTHZONE);
                this.state = 259;
                this.match(TransactionManifestParser.SEMICOLON);
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
    publishPackage() {
        let _localctx = new PublishPackageContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, TransactionManifestParser.RULE_publishPackage);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                this.match(TransactionManifestParser.PUBLISH_PACKAGE);
                this.state = 262;
                this.bytes();
                this.state = 263;
                this.match(TransactionManifestParser.SEMICOLON);
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
        this.enterRule(_localctx, 46, TransactionManifestParser.RULE_unit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
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
        this.enterRule(_localctx, 48, TransactionManifestParser.RULE_bool);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 267;
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
        this.enterRule(_localctx, 50, TransactionManifestParser.RULE_i8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 269;
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
        this.enterRule(_localctx, 52, TransactionManifestParser.RULE_i16);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
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
        this.enterRule(_localctx, 54, TransactionManifestParser.RULE_i32);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 273;
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
        this.enterRule(_localctx, 56, TransactionManifestParser.RULE_i64);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
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
        this.enterRule(_localctx, 58, TransactionManifestParser.RULE_i128);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 277;
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
        this.enterRule(_localctx, 60, TransactionManifestParser.RULE_u8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 279;
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
        this.enterRule(_localctx, 62, TransactionManifestParser.RULE_u16);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 281;
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
        this.enterRule(_localctx, 64, TransactionManifestParser.RULE_u32);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
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
        this.enterRule(_localctx, 66, TransactionManifestParser.RULE_u64);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
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
        this.enterRule(_localctx, 68, TransactionManifestParser.RULE_u128);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
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
        this.enterRule(_localctx, 70, TransactionManifestParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 289;
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
        this.enterRule(_localctx, 72, TransactionManifestParser.RULE_struct);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this.match(TransactionManifestParser.STRUCT_TYPE);
                this.state = 292;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 301;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        this.state = 293;
                        this.value();
                        this.state = 298;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TransactionManifestParser.COMMA) {
                            {
                                {
                                    this.state = 294;
                                    this.match(TransactionManifestParser.COMMA);
                                    this.state = 295;
                                    this.value();
                                }
                            }
                            this.state = 300;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 303;
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
        this.enterRule(_localctx, 74, TransactionManifestParser.RULE_enum_);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this.match(TransactionManifestParser.ENUM_TYPE);
                this.state = 306;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                {
                    this.state = 307;
                    this.string();
                    this.state = 308;
                    this.match(TransactionManifestParser.COMMA);
                    this.state = 317;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                        {
                            this.state = 309;
                            this.value();
                            this.state = 314;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === TransactionManifestParser.COMMA) {
                                {
                                    {
                                        this.state = 310;
                                        this.match(TransactionManifestParser.COMMA);
                                        this.state = 311;
                                        this.value();
                                    }
                                }
                                this.state = 316;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                    }
                }
                this.state = 319;
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
        this.enterRule(_localctx, 76, TransactionManifestParser.RULE_option);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TransactionManifestParser.SOME_TYPE:
                        {
                            this.state = 321;
                            this.some();
                        }
                        break;
                    case TransactionManifestParser.NONE_TYPE:
                        {
                            this.state = 322;
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
        this.enterRule(_localctx, 78, TransactionManifestParser.RULE_some);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 325;
                this.match(TransactionManifestParser.SOME_TYPE);
                this.state = 326;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                {
                    this.state = 327;
                    this.value();
                    this.state = 332;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === TransactionManifestParser.COMMA) {
                        {
                            {
                                this.state = 328;
                                this.match(TransactionManifestParser.COMMA);
                                this.state = 329;
                                this.value();
                            }
                        }
                        this.state = 334;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                this.state = 335;
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
        this.enterRule(_localctx, 80, TransactionManifestParser.RULE_none);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 337;
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
        this.enterRule(_localctx, 82, TransactionManifestParser.RULE_ok);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 339;
                this.match(TransactionManifestParser.OK_TYPE);
                this.state = 340;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                {
                    this.state = 341;
                    this.value();
                    this.state = 346;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === TransactionManifestParser.COMMA) {
                        {
                            {
                                this.state = 342;
                                this.match(TransactionManifestParser.COMMA);
                                this.state = 343;
                                this.value();
                            }
                        }
                        this.state = 348;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                this.state = 349;
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
        this.enterRule(_localctx, 84, TransactionManifestParser.RULE_err);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                this.match(TransactionManifestParser.ERR_TYPE);
                this.state = 352;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                {
                    this.state = 353;
                    this.value();
                    this.state = 358;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === TransactionManifestParser.COMMA) {
                        {
                            {
                                this.state = 354;
                                this.match(TransactionManifestParser.COMMA);
                                this.state = 355;
                                this.value();
                            }
                        }
                        this.state = 360;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                this.state = 361;
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
        this.enterRule(_localctx, 86, TransactionManifestParser.RULE_array);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 363;
                this.match(TransactionManifestParser.ARRAY_TYPE);
                this.state = 364;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 365;
                this.type();
                this.state = 366;
                this.match(TransactionManifestParser.GREATER_THAN);
                this.state = 367;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        this.state = 368;
                        this.value();
                        this.state = 373;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TransactionManifestParser.COMMA) {
                            {
                                {
                                    this.state = 369;
                                    this.match(TransactionManifestParser.COMMA);
                                    this.state = 370;
                                    this.value();
                                }
                            }
                            this.state = 375;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
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
    tuple() {
        let _localctx = new TupleContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, TransactionManifestParser.RULE_tuple);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.match(TransactionManifestParser.TUPLE_TYPE);
                this.state = 381;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 382;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        this.state = 383;
                        this.value();
                        this.state = 388;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TransactionManifestParser.COMMA) {
                            {
                                {
                                    this.state = 384;
                                    this.match(TransactionManifestParser.COMMA);
                                    this.state = 385;
                                    this.value();
                                }
                            }
                            this.state = 390;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
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
    list() {
        let _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, TransactionManifestParser.RULE_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 395;
                this.match(TransactionManifestParser.LIST_TYPE);
                this.state = 396;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 397;
                this.type();
                this.state = 398;
                this.match(TransactionManifestParser.GREATER_THAN);
                this.state = 399;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        this.state = 400;
                        this.value();
                        this.state = 405;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TransactionManifestParser.COMMA) {
                            {
                                {
                                    this.state = 401;
                                    this.match(TransactionManifestParser.COMMA);
                                    this.state = 402;
                                    this.value();
                                }
                            }
                            this.state = 407;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 410;
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
        this.enterRule(_localctx, 92, TransactionManifestParser.RULE_set);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 412;
                this.match(TransactionManifestParser.SET_TYPE);
                this.state = 413;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 414;
                this.type();
                this.state = 415;
                this.match(TransactionManifestParser.GREATER_THAN);
                this.state = 416;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        this.state = 417;
                        this.value();
                        this.state = 422;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TransactionManifestParser.COMMA) {
                            {
                                {
                                    this.state = 418;
                                    this.match(TransactionManifestParser.COMMA);
                                    this.state = 419;
                                    this.value();
                                }
                            }
                            this.state = 424;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 427;
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
        this.enterRule(_localctx, 94, TransactionManifestParser.RULE_map);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 429;
                this.match(TransactionManifestParser.MAP_TYPE);
                this.state = 430;
                this.match(TransactionManifestParser.LESS_THAN);
                this.state = 431;
                this.type();
                this.state = 432;
                this.match(TransactionManifestParser.COMMA);
                this.state = 433;
                this.type();
                this.state = 434;
                this.match(TransactionManifestParser.GREATER_THAN);
                this.state = 435;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 442;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.T__0) | (1 << TransactionManifestParser.BOOL_LITERAL) | (1 << TransactionManifestParser.I8_LITERAL) | (1 << TransactionManifestParser.I16_LITERAL) | (1 << TransactionManifestParser.I32_LITERAL) | (1 << TransactionManifestParser.I64_LITERAL) | (1 << TransactionManifestParser.I128_LITERAL) | (1 << TransactionManifestParser.U8_LITERAL) | (1 << TransactionManifestParser.U16_LITERAL) | (1 << TransactionManifestParser.U32_LITERAL) | (1 << TransactionManifestParser.U64_LITERAL) | (1 << TransactionManifestParser.U128_LITERAL) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0) || _la === TransactionManifestParser.STRING_LITERAL) {
                    {
                        {
                            this.state = 436;
                            this.value();
                            this.state = 437;
                            this.match(TransactionManifestParser.COMMA);
                            this.state = 438;
                            this.value();
                        }
                    }
                    this.state = 444;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 445;
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
        this.enterRule(_localctx, 96, TransactionManifestParser.RULE_decimal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 447;
                this.match(TransactionManifestParser.DECIMAL_TYPE);
                this.state = 448;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 449;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 450;
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
        this.enterRule(_localctx, 98, TransactionManifestParser.RULE_preciseDecimal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 452;
                this.match(TransactionManifestParser.PRECISE_DECIMAL_TYPE);
                this.state = 453;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 454;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 455;
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
        this.enterRule(_localctx, 100, TransactionManifestParser.RULE_packageAddress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 457;
                this.match(TransactionManifestParser.PACKAGE_ADDRESS_TYPE);
                this.state = 458;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 459;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 460;
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
        this.enterRule(_localctx, 102, TransactionManifestParser.RULE_componentAddress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 462;
                this.match(TransactionManifestParser.COMPONENT_ADDRESS_TYPE);
                this.state = 463;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 464;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 465;
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
        this.enterRule(_localctx, 104, TransactionManifestParser.RULE_resourceAddress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 467;
                this.match(TransactionManifestParser.RESOURCE_ADDRESS_TYPE);
                this.state = 468;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 469;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 470;
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
        this.enterRule(_localctx, 106, TransactionManifestParser.RULE_hash);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 472;
                this.match(TransactionManifestParser.HASH_TYPE);
                this.state = 473;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 474;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 475;
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
        this.enterRule(_localctx, 108, TransactionManifestParser.RULE_bucket);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 477;
                this.match(TransactionManifestParser.BUCKET_TYPE);
                this.state = 478;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 479;
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
                this.state = 480;
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
        this.enterRule(_localctx, 110, TransactionManifestParser.RULE_proof);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 482;
                this.match(TransactionManifestParser.PROOF_TYPE);
                this.state = 483;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 484;
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
                this.state = 485;
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
    nonFungibleId() {
        let _localctx = new NonFungibleIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, TransactionManifestParser.RULE_nonFungibleId);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                this.match(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE);
                this.state = 488;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 489;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 490;
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
        this.enterRule(_localctx, 114, TransactionManifestParser.RULE_nonFungibleAddress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 492;
                this.match(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE);
                this.state = 493;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 494;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 495;
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
        this.enterRule(_localctx, 116, TransactionManifestParser.RULE_bytes);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 497;
                this.match(TransactionManifestParser.BYTES_TYPE);
                this.state = 498;
                this.match(TransactionManifestParser.OPEN_PARENTHESIS);
                this.state = 499;
                this.match(TransactionManifestParser.STRING_LITERAL);
                this.state = 500;
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
        this.enterRule(_localctx, 118, TransactionManifestParser.RULE_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 502;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionManifestParser.UNIT_TYPE) | (1 << TransactionManifestParser.BOOL_TYPE) | (1 << TransactionManifestParser.I8_TYPE) | (1 << TransactionManifestParser.I16_TYPE) | (1 << TransactionManifestParser.I32_TYPE) | (1 << TransactionManifestParser.I64_TYPE) | (1 << TransactionManifestParser.I128_TYPE) | (1 << TransactionManifestParser.U8_TYPE) | (1 << TransactionManifestParser.U16_TYPE) | (1 << TransactionManifestParser.U32_TYPE) | (1 << TransactionManifestParser.U64_TYPE) | (1 << TransactionManifestParser.U128_TYPE) | (1 << TransactionManifestParser.STRING_TYPE) | (1 << TransactionManifestParser.STRUCT_TYPE) | (1 << TransactionManifestParser.ENUM_TYPE) | (1 << TransactionManifestParser.OPTION_TYPE) | (1 << TransactionManifestParser.RESULT_TYPE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TransactionManifestParser.SOME_TYPE - 32)) | (1 << (TransactionManifestParser.NONE_TYPE - 32)) | (1 << (TransactionManifestParser.OK_TYPE - 32)) | (1 << (TransactionManifestParser.ERR_TYPE - 32)) | (1 << (TransactionManifestParser.ARRAY_TYPE - 32)) | (1 << (TransactionManifestParser.TUPLE_TYPE - 32)) | (1 << (TransactionManifestParser.LIST_TYPE - 32)) | (1 << (TransactionManifestParser.SET_TYPE - 32)) | (1 << (TransactionManifestParser.MAP_TYPE - 32)) | (1 << (TransactionManifestParser.DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PRECISE_DECIMAL_TYPE - 32)) | (1 << (TransactionManifestParser.PACKAGE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.COMPONENT_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.RESOURCE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.HASH_TYPE - 32)) | (1 << (TransactionManifestParser.BUCKET_TYPE - 32)) | (1 << (TransactionManifestParser.PROOF_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ID_TYPE - 32)) | (1 << (TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE - 32)) | (1 << (TransactionManifestParser.BYTES_TYPE - 32)))) !== 0))) {
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
        this.enterRule(_localctx, 120, TransactionManifestParser.RULE_value);
        try {
            this.state = 540;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 504;
                        this.unit();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 505;
                        this.bool();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 506;
                        this.i8();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 507;
                        this.i16();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 508;
                        this.i32();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 509;
                        this.i64();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 510;
                        this.i128();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 511;
                        this.u8();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 512;
                        this.u16();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 513;
                        this.u32();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 514;
                        this.u64();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 515;
                        this.u128();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 516;
                        this.string();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 517;
                        this.struct();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 518;
                        this.enum_();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 519;
                        this.option();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 520;
                        this.some();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 521;
                        this.none();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 522;
                        this.ok();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 523;
                        this.err();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 524;
                        this.array();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 525;
                        this.tuple();
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 526;
                        this.list();
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 527;
                        this.set();
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 528;
                        this.map();
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 529;
                        this.decimal();
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 530;
                        this.preciseDecimal();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 531;
                        this.packageAddress();
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 532;
                        this.componentAddress();
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 533;
                        this.resourceAddress();
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 534;
                        this.hash();
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 535;
                        this.bucket();
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 536;
                        this.proof();
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 537;
                        this.nonFungibleId();
                    }
                    break;
                case 35:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 538;
                        this.nonFungibleAddress();
                    }
                    break;
                case 36:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 539;
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
TransactionManifestParser.PRECISE_DECIMAL_TYPE = 42;
TransactionManifestParser.PACKAGE_ADDRESS_TYPE = 43;
TransactionManifestParser.COMPONENT_ADDRESS_TYPE = 44;
TransactionManifestParser.RESOURCE_ADDRESS_TYPE = 45;
TransactionManifestParser.HASH_TYPE = 46;
TransactionManifestParser.BUCKET_TYPE = 47;
TransactionManifestParser.PROOF_TYPE = 48;
TransactionManifestParser.NON_FUNGIBLE_ID_TYPE = 49;
TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE = 50;
TransactionManifestParser.BYTES_TYPE = 51;
TransactionManifestParser.OPEN_PARENTHESIS = 52;
TransactionManifestParser.CLOED_PARENTHESIS = 53;
TransactionManifestParser.LESS_THAN = 54;
TransactionManifestParser.GREATER_THAN = 55;
TransactionManifestParser.COMMA = 56;
TransactionManifestParser.SEMICOLON = 57;
TransactionManifestParser.TAKE_FROM_WORKTOP = 58;
TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT = 59;
TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS = 60;
TransactionManifestParser.ASSERT_WORKTOP_CONTAINS = 61;
TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT = 62;
TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS = 63;
TransactionManifestParser.RETURN_TO_WORKTOP = 64;
TransactionManifestParser.POP_FROM_AUTH_ZONE = 65;
TransactionManifestParser.PUSH_TO_AUTH_ZONE = 66;
TransactionManifestParser.CLEAR_AUTHZONE = 67;
TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE = 68;
TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT = 69;
TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS = 70;
TransactionManifestParser.CREATE_PROOF_FROM_BUCKET = 71;
TransactionManifestParser.CLONE_PROOF = 72;
TransactionManifestParser.DROP_PROOF = 73;
TransactionManifestParser.DROP_ALL_PROOFS = 74;
TransactionManifestParser.CALL_FUNCTION = 75;
TransactionManifestParser.CALL_METHOD = 76;
TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES = 77;
TransactionManifestParser.PUBLISH_PACKAGE = 78;
TransactionManifestParser.STRING_LITERAL = 79;
TransactionManifestParser.DIGIT = 80;
TransactionManifestParser.LETTER = 81;
TransactionManifestParser.NUMBER = 82;
TransactionManifestParser.WS = 83;
TransactionManifestParser.COMMENT = 84;
TransactionManifestParser.RULE_manifest = 0;
TransactionManifestParser.RULE_manifestInstruction = 1;
TransactionManifestParser.RULE_callFunction = 2;
TransactionManifestParser.RULE_callMethod = 3;
TransactionManifestParser.RULE_callMethodWithAllResources = 4;
TransactionManifestParser.RULE_takeFromWorktop = 5;
TransactionManifestParser.RULE_takeFromWorktopByAmount = 6;
TransactionManifestParser.RULE_takeFromWorktopByIds = 7;
TransactionManifestParser.RULE_returnToWorktop = 8;
TransactionManifestParser.RULE_assertWorktopContains = 9;
TransactionManifestParser.RULE_assertWorktopContainsByAmount = 10;
TransactionManifestParser.RULE_assertWorktopContainsByIds = 11;
TransactionManifestParser.RULE_popFromAuthZone = 12;
TransactionManifestParser.RULE_pushToAuthZone = 13;
TransactionManifestParser.RULE_createProofFromAuthZone = 14;
TransactionManifestParser.RULE_createProofFromAuthZoneByAmount = 15;
TransactionManifestParser.RULE_createProofFromAuthZoneByIds = 16;
TransactionManifestParser.RULE_createProofFromBucket = 17;
TransactionManifestParser.RULE_cloneProof = 18;
TransactionManifestParser.RULE_dropProof = 19;
TransactionManifestParser.RULE_dropAllProofs = 20;
TransactionManifestParser.RULE_clearAuthZone = 21;
TransactionManifestParser.RULE_publishPackage = 22;
TransactionManifestParser.RULE_unit = 23;
TransactionManifestParser.RULE_bool = 24;
TransactionManifestParser.RULE_i8 = 25;
TransactionManifestParser.RULE_i16 = 26;
TransactionManifestParser.RULE_i32 = 27;
TransactionManifestParser.RULE_i64 = 28;
TransactionManifestParser.RULE_i128 = 29;
TransactionManifestParser.RULE_u8 = 30;
TransactionManifestParser.RULE_u16 = 31;
TransactionManifestParser.RULE_u32 = 32;
TransactionManifestParser.RULE_u64 = 33;
TransactionManifestParser.RULE_u128 = 34;
TransactionManifestParser.RULE_string = 35;
TransactionManifestParser.RULE_struct = 36;
TransactionManifestParser.RULE_enum_ = 37;
TransactionManifestParser.RULE_option = 38;
TransactionManifestParser.RULE_some = 39;
TransactionManifestParser.RULE_none = 40;
TransactionManifestParser.RULE_ok = 41;
TransactionManifestParser.RULE_err = 42;
TransactionManifestParser.RULE_array = 43;
TransactionManifestParser.RULE_tuple = 44;
TransactionManifestParser.RULE_list = 45;
TransactionManifestParser.RULE_set = 46;
TransactionManifestParser.RULE_map = 47;
TransactionManifestParser.RULE_decimal = 48;
TransactionManifestParser.RULE_preciseDecimal = 49;
TransactionManifestParser.RULE_packageAddress = 50;
TransactionManifestParser.RULE_componentAddress = 51;
TransactionManifestParser.RULE_resourceAddress = 52;
TransactionManifestParser.RULE_hash = 53;
TransactionManifestParser.RULE_bucket = 54;
TransactionManifestParser.RULE_proof = 55;
TransactionManifestParser.RULE_nonFungibleId = 56;
TransactionManifestParser.RULE_nonFungibleAddress = 57;
TransactionManifestParser.RULE_bytes = 58;
TransactionManifestParser.RULE_type = 59;
TransactionManifestParser.RULE_value = 60;
// tslint:disable:no-trailing-whitespace
TransactionManifestParser.ruleNames = [
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
    "proof", "nonFungibleId", "nonFungibleAddress", "bytes", "type", "value",
];
TransactionManifestParser._LITERAL_NAMES = [
    undefined, "'()'", undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'true'",
    "'false'", "'Unit'", "'Bool'", "'I8'", "'I16'", "'I32'", "'I64'", "'I128'",
    "'U8'", "'U16'", "'U32'", "'U64'", "'U128'", "'String'", "'Struct'", "'Enum'",
    "'Option'", "'Result'", "'Some'", "'None'", "'Ok'", "'Err'", "'Array'",
    "'Tuple'", "'List'", "'Set'", "'Map'", "'Decimal'", "'PreciseDecimal'",
    "'PackageAddress'", "'ComponentAddress'", "'ResourceAddress'", "'Hash'",
    "'Bucket'", "'Proof'", "'NonFungibleId'", "'NonFungibleAddress'", "'Bytes'",
    "'('", "')'", "'<'", "'>'", "','", "';'", "'TAKE_FROM_WORKTOP'", "'TAKE_FROM_WORKTOP_BY_AMOUNT'",
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
    "DECIMAL_TYPE", "PRECISE_DECIMAL_TYPE", "PACKAGE_ADDRESS_TYPE", "COMPONENT_ADDRESS_TYPE",
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
    "COMMENT",
];
TransactionManifestParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TransactionManifestParser._LITERAL_NAMES, TransactionManifestParser._SYMBOLIC_NAMES, []);
TransactionManifestParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03V\u0221\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
    "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x03\x02\x07\x02~\n\x02\f\x02\x0E\x02\x81\v\x02\x03\x02\x03" +
    "\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x05\x03\x9A\n\x03\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x07\x04\xA1\n\x04\f\x04\x0E\x04\xA4\v\x04\x03\x04\x03" +
    "\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xAC\n\x05\f\x05\x0E\x05\xAF" +
    "\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
    "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
    "\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
    "\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
    "\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
    "\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
    " \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03" +
    "&\x03&\x03&\x07&\u012B\n&\f&\x0E&\u012E\v&\x05&\u0130\n&\x03&\x03&\x03" +
    "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u013B\n\'\f\'\x0E\'\u013E" +
    "\v\'\x05\'\u0140\n\'\x03\'\x03\'\x03(\x03(\x05(\u0146\n(\x03)\x03)\x03" +
    ")\x03)\x03)\x07)\u014D\n)\f)\x0E)\u0150\v)\x03)\x03)\x03*\x03*\x03+\x03" +
    "+\x03+\x03+\x03+\x07+\u015B\n+\f+\x0E+\u015E\v+\x03+\x03+\x03,\x03,\x03" +
    ",\x03,\x03,\x07,\u0167\n,\f,\x0E,\u016A\v,\x03,\x03,\x03-\x03-\x03-\x03" +
    "-\x03-\x03-\x03-\x03-\x07-\u0176\n-\f-\x0E-\u0179\v-\x05-\u017B\n-\x03" +
    "-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u0185\n.\f.\x0E.\u0188\v.\x05" +
    ".\u018A\n.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u0196" +
    "\n/\f/\x0E/\u0199\v/\x05/\u019B\n/\x03/\x03/\x030\x030\x030\x030\x030" +
    "\x030\x030\x030\x070\u01A7\n0\f0\x0E0\u01AA\v0\x050\u01AC\n0\x030\x03" +
    "0\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x071\u01BB\n" +
    "1\f1\x0E1\u01BE\v1\x031\x031\x032\x032\x032\x032\x032\x033\x033\x033\x03" +
    "3\x033\x034\x034\x034\x034\x034\x035\x035\x035\x035\x035\x036\x036\x03" +
    "6\x036\x036\x037\x037\x037\x037\x037\x038\x038\x038\x038\x038\x039\x03" +
    "9\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03" +
    "<\x03<\x03<\x03<\x03<\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
    ">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
    ">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
    ">\x05>\u021F\n>\x03>\x02\x02\x02?\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
    "\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
    "\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
    "8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
    "T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
    "p\x02r\x02t\x02v\x02x\x02z\x02\x02\x04\x04\x02\f\fQQ\x03\x02\x115\x02" +
    "\u022E\x02\x7F\x03\x02\x02\x02\x04\x99\x03\x02\x02\x02\x06\x9B\x03\x02" +
    "\x02\x02\b\xA7\x03\x02\x02\x02\n\xB2\x03\x02\x02\x02\f\xB7\x03\x02\x02" +
    "\x02\x0E\xBC\x03\x02\x02\x02\x10\xC2\x03\x02\x02\x02\x12\xC8\x03\x02\x02" +
    "\x02\x14\xCC\x03\x02\x02\x02\x16\xD0\x03\x02\x02\x02\x18\xD5\x03\x02\x02" +
    "\x02\x1A\xDA\x03\x02\x02\x02\x1C\xDE\x03\x02\x02\x02\x1E\xE2\x03\x02\x02" +
    "\x02 \xE7\x03\x02\x02\x02\"\xED\x03\x02\x02\x02$\xF3\x03\x02\x02\x02&" +
    "\xF8\x03\x02\x02\x02(\xFD\x03\x02\x02\x02*\u0101\x03\x02\x02\x02,\u0104" +
    "\x03\x02\x02\x02.\u0107\x03\x02\x02\x020\u010B\x03\x02\x02\x022\u010D" +
    "\x03\x02\x02\x024\u010F\x03\x02\x02\x026\u0111\x03\x02\x02\x028\u0113" +
    "\x03\x02\x02\x02:\u0115\x03\x02\x02\x02<\u0117\x03\x02\x02\x02>\u0119" +
    "\x03\x02\x02\x02@\u011B\x03\x02\x02\x02B\u011D\x03\x02\x02\x02D\u011F" +
    "\x03\x02\x02\x02F\u0121\x03\x02\x02\x02H\u0123\x03\x02\x02\x02J\u0125" +
    "\x03\x02\x02\x02L\u0133\x03\x02\x02\x02N\u0145\x03\x02\x02\x02P\u0147" +
    "\x03\x02\x02\x02R\u0153\x03\x02\x02\x02T\u0155\x03\x02\x02\x02V\u0161" +
    "\x03\x02\x02\x02X\u016D\x03\x02\x02\x02Z\u017E\x03\x02\x02\x02\\\u018D" +
    "\x03\x02\x02\x02^\u019E\x03\x02\x02\x02`\u01AF\x03\x02\x02\x02b\u01C1" +
    "\x03\x02\x02\x02d\u01C6\x03\x02\x02\x02f\u01CB\x03\x02\x02\x02h\u01D0" +
    "\x03\x02\x02\x02j\u01D5\x03\x02\x02\x02l\u01DA\x03\x02\x02\x02n\u01DF" +
    "\x03\x02\x02\x02p\u01E4\x03\x02\x02\x02r\u01E9\x03\x02\x02\x02t\u01EE" +
    "\x03\x02\x02\x02v\u01F3\x03\x02\x02\x02x\u01F8\x03\x02\x02\x02z\u021E" +
    "\x03\x02\x02\x02|~\x05\x04\x03\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02" +
    "\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03\x02\x02" +
    "\x02\x81\x7F\x03\x02\x02\x02\x82\x83\x07\x02\x02\x03\x83\x03\x03\x02\x02" +
    "\x02\x84\x9A\x05\x06\x04\x02\x85\x9A\x05\b\x05\x02\x86\x9A\x05\n\x06\x02" +
    "\x87\x9A\x05\x12\n\x02\x88\x9A\x05\f\x07\x02\x89\x9A\x05\x0E\b\x02\x8A" +
    "\x9A\x05\x10\t\x02\x8B\x9A\x05\x14\v\x02\x8C\x9A\x05\x16\f\x02\x8D\x9A" +
    "\x05\x18\r\x02\x8E\x9A\x05\x1A\x0E\x02\x8F\x9A\x05\x1C\x0F\x02\x90\x9A" +
    "\x05\x1E\x10\x02\x91\x9A\x05 \x11\x02\x92\x9A\x05\"\x12\x02\x93\x9A\x05" +
    "$\x13\x02\x94\x9A\x05&\x14\x02\x95\x9A\x05(\x15\x02\x96\x9A\x05*\x16\x02" +
    "\x97\x9A\x05,\x17\x02\x98\x9A\x05.\x18\x02\x99\x84\x03\x02\x02\x02\x99" +
    "\x85\x03\x02\x02\x02\x99\x86\x03\x02\x02\x02\x99\x87\x03\x02\x02\x02\x99" +
    "\x88\x03\x02\x02\x02\x99\x89\x03\x02\x02\x02\x99\x8A\x03\x02\x02\x02\x99" +
    "\x8B\x03\x02\x02\x02\x99\x8C\x03\x02\x02\x02\x99\x8D\x03\x02\x02\x02\x99" +
    "\x8E\x03\x02\x02\x02\x99\x8F\x03\x02\x02\x02\x99\x90\x03\x02\x02\x02\x99" +
    "\x91\x03\x02\x02\x02\x99\x92\x03\x02\x02\x02\x99\x93\x03\x02\x02\x02\x99" +
    "\x94\x03\x02\x02\x02\x99\x95\x03\x02\x02\x02\x99\x96\x03\x02\x02\x02\x99" +
    "\x97\x03\x02\x02\x02\x99\x98\x03\x02\x02\x02\x9A\x05\x03\x02\x02\x02\x9B" +
    "\x9C\x07M\x02\x02\x9C\x9D\x05f4\x02\x9D\x9E\x05H%\x02\x9E\xA2\x05H%\x02" +
    "\x9F\xA1\x05z>\x02\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2" +
    "\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4" +
    "\xA2\x03\x02\x02\x02\xA5\xA6\x07;\x02\x02\xA6\x07\x03\x02\x02\x02\xA7" +
    "\xA8\x07N\x02\x02\xA8\xA9\x05h5\x02\xA9\xAD\x05H%\x02\xAA\xAC\x05z>\x02" +
    "\xAB\xAA\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02" +
    "\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02" +
    "\xB0\xB1\x07;\x02\x02\xB1\t\x03\x02\x02\x02\xB2\xB3\x07O\x02\x02\xB3\xB4" +
    "\x05h5\x02\xB4\xB5\x05H%\x02\xB5\xB6\x07;\x02\x02\xB6\v\x03\x02\x02\x02" +
    "\xB7\xB8\x07<\x02\x02\xB8\xB9\x05j6\x02\xB9\xBA\x05n8\x02\xBA\xBB\x07" +
    ";\x02\x02\xBB\r\x03\x02\x02\x02\xBC\xBD\x07=\x02\x02\xBD\xBE\x05b2\x02" +
    "\xBE\xBF\x05j6\x02\xBF\xC0\x05n8\x02\xC0\xC1\x07;\x02\x02\xC1\x0F\x03" +
    "\x02\x02\x02\xC2\xC3\x07>\x02\x02\xC3\xC4\x05^0\x02\xC4\xC5\x05j6\x02" +
    "\xC5\xC6\x05n8\x02\xC6\xC7\x07;\x02\x02\xC7\x11\x03\x02\x02\x02\xC8\xC9" +
    "\x07B\x02\x02\xC9\xCA\x05n8\x02\xCA\xCB\x07;\x02\x02\xCB\x13\x03\x02\x02" +
    "\x02\xCC\xCD\x07?\x02\x02\xCD\xCE\x05j6\x02\xCE\xCF\x07;\x02\x02\xCF\x15" +
    "\x03\x02\x02\x02\xD0\xD1\x07@\x02\x02\xD1\xD2\x05b2\x02\xD2\xD3\x05j6" +
    "\x02\xD3\xD4\x07;\x02\x02\xD4\x17\x03\x02\x02\x02\xD5\xD6\x07A\x02\x02" +
    "\xD6\xD7\x05^0\x02\xD7\xD8\x05j6\x02\xD8\xD9\x07;\x02\x02\xD9\x19\x03" +
    "\x02\x02\x02\xDA\xDB\x07C\x02\x02\xDB\xDC\x05p9\x02\xDC\xDD\x07;\x02\x02" +
    "\xDD\x1B\x03\x02\x02\x02\xDE\xDF\x07D\x02\x02\xDF\xE0\x05p9\x02\xE0\xE1" +
    "\x07;\x02\x02\xE1\x1D\x03\x02\x02\x02\xE2\xE3\x07F\x02\x02\xE3\xE4\x05" +
    "j6\x02\xE4\xE5\x05p9\x02\xE5\xE6\x07;\x02\x02\xE6\x1F\x03\x02\x02\x02" +
    "\xE7\xE8\x07G\x02\x02\xE8\xE9\x05b2\x02\xE9\xEA\x05j6\x02\xEA\xEB\x05" +
    "p9\x02\xEB\xEC\x07;\x02\x02\xEC!\x03\x02\x02\x02\xED\xEE\x07H\x02\x02" +
    "\xEE\xEF\x05^0\x02\xEF\xF0\x05j6\x02\xF0\xF1\x05p9\x02\xF1\xF2\x07;\x02" +
    "\x02\xF2#\x03\x02\x02\x02\xF3\xF4\x07I\x02\x02\xF4\xF5\x05n8\x02\xF5\xF6" +
    "\x05p9\x02\xF6\xF7\x07;\x02\x02\xF7%\x03\x02\x02\x02\xF8\xF9\x07J\x02" +
    "\x02\xF9\xFA\x05p9\x02\xFA\xFB\x05p9\x02\xFB\xFC\x07;\x02\x02\xFC\'\x03" +
    "\x02\x02\x02\xFD\xFE\x07K\x02\x02\xFE\xFF\x05p9\x02\xFF\u0100\x07;\x02" +
    "\x02\u0100)\x03\x02\x02\x02\u0101\u0102\x07L\x02\x02\u0102\u0103\x07;" +
    "\x02\x02\u0103+\x03\x02\x02\x02\u0104\u0105\x07E\x02\x02\u0105\u0106\x07" +
    ";\x02\x02\u0106-\x03\x02\x02\x02\u0107\u0108\x07P\x02\x02\u0108\u0109" +
    "\x05v<\x02\u0109\u010A\x07;\x02\x02\u010A/\x03\x02\x02\x02\u010B\u010C" +
    "\x07\x03\x02\x02\u010C1\x03\x02\x02\x02\u010D\u010E\x07\x04\x02\x02\u010E" +
    "3\x03\x02\x02\x02\u010F\u0110\x07\x05\x02\x02\u01105\x03\x02\x02\x02\u0111" +
    "\u0112\x07\x06\x02\x02\u01127\x03\x02\x02\x02\u0113\u0114\x07\x07\x02" +
    "\x02\u01149\x03\x02\x02\x02\u0115\u0116\x07\b\x02\x02\u0116;\x03\x02\x02" +
    "\x02\u0117\u0118\x07\t\x02\x02\u0118=\x03\x02\x02\x02\u0119\u011A\x07" +
    "\n\x02\x02\u011A?\x03\x02\x02\x02\u011B\u011C\x07\v\x02\x02\u011CA\x03" +
    "\x02\x02\x02\u011D\u011E\x07\f\x02\x02\u011EC\x03\x02\x02\x02\u011F\u0120" +
    "\x07\r\x02\x02\u0120E\x03\x02\x02\x02\u0121\u0122\x07\x0E\x02\x02\u0122" +
    "G\x03\x02\x02\x02\u0123\u0124\x07Q\x02\x02\u0124I\x03\x02\x02\x02\u0125" +
    "\u0126\x07\x1E\x02\x02\u0126\u012F\x076\x02\x02\u0127\u012C\x05z>\x02" +
    "\u0128\u0129\x07:\x02\x02\u0129\u012B\x05z>\x02\u012A\u0128\x03\x02\x02" +
    "\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D" +
    "\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02" +
    "\u012F\u0127\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0131\x03" +
    "\x02\x02\x02\u0131\u0132\x077\x02\x02\u0132K\x03\x02\x02\x02\u0133\u0134" +
    "\x07\x1F\x02\x02\u0134\u0135\x076\x02\x02\u0135\u0136\x05H%\x02\u0136" +
    "\u013F\x07:\x02\x02\u0137\u013C\x05z>\x02\u0138\u0139\x07:\x02\x02\u0139" +
    "\u013B\x05z>\x02\u013A\u0138\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02" +
    "\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u0140\x03" +
    "\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0137\x03\x02\x02\x02\u013F" +
    "\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x077\x02" +
    "\x02\u0142M\x03\x02\x02\x02\u0143\u0146\x05P)\x02\u0144\u0146\x05R*\x02" +
    "\u0145\u0143\x03\x02\x02\x02\u0145\u0144\x03\x02\x02\x02\u0146O\x03\x02" +
    "\x02\x02\u0147\u0148\x07\"\x02\x02\u0148\u0149\x076\x02\x02\u0149\u014E" +
    "\x05z>\x02\u014A\u014B\x07:\x02\x02\u014B\u014D\x05z>\x02\u014C\u014A" +
    "\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02" +
    "\u014E\u014F\x03\x02\x02\x02\u014F\u0151\x03\x02\x02\x02\u0150\u014E\x03" +
    "\x02\x02\x02\u0151\u0152\x077\x02\x02\u0152Q\x03\x02\x02\x02\u0153\u0154" +
    "\x07#\x02\x02\u0154S\x03\x02\x02\x02\u0155\u0156\x07$\x02\x02\u0156\u0157" +
    "\x076\x02\x02\u0157\u015C\x05z>\x02\u0158\u0159\x07:\x02\x02\u0159\u015B" +
    "\x05z>\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C" +
    "\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015F\x03\x02" +
    "\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0160\x077\x02\x02\u0160U\x03" +
    "\x02\x02\x02\u0161\u0162\x07%\x02\x02\u0162\u0163\x076\x02\x02\u0163\u0168" +
    "\x05z>\x02\u0164\u0165\x07:\x02\x02\u0165\u0167\x05z>\x02\u0166\u0164" +
    "\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02" +
    "\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A\u0168\x03" +
    "\x02\x02\x02\u016B\u016C\x077\x02\x02\u016CW\x03\x02\x02\x02\u016D\u016E" +
    "\x07&\x02\x02\u016E\u016F\x078\x02\x02\u016F\u0170\x05x=\x02\u0170\u0171" +
    "\x079\x02\x02\u0171\u017A\x076\x02\x02\u0172\u0177\x05z>\x02\u0173\u0174" +
    "\x07:\x02\x02\u0174\u0176\x05z>\x02\u0175\u0173\x03\x02\x02\x02\u0176" +
    "\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02" +
    "\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A" +
    "\u0172\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02" +
    "\x02\x02\u017C\u017D\x077\x02\x02\u017DY\x03\x02\x02\x02\u017E\u017F\x07" +
    "\'\x02\x02\u017F\u0180\x078\x02\x02\u0180\u0189\x076\x02\x02\u0181\u0186" +
    "\x05z>\x02\u0182\u0183\x07:\x02\x02\u0183\u0185\x05z>\x02\u0184\u0182" +
    "\x03\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02" +
    "\u0186\u0187\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u0186\x03" +
    "\x02\x02\x02\u0189\u0181\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A" +
    "\u018B\x03\x02\x02\x02\u018B\u018C\x077\x02\x02\u018C[\x03\x02\x02\x02" +
    "\u018D\u018E\x07(\x02\x02\u018E\u018F\x078\x02\x02\u018F\u0190\x05x=\x02" +
    "\u0190\u0191\x079\x02\x02\u0191\u019A\x076\x02\x02\u0192\u0197\x05z>\x02" +
    "\u0193\u0194\x07:\x02\x02\u0194\u0196\x05z>\x02\u0195\u0193\x03\x02\x02" +
    "\x02\u0196\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198" +
    "\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02" +
    "\u019A\u0192\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x03" +
    "\x02\x02\x02\u019C\u019D\x077\x02\x02\u019D]\x03\x02\x02\x02\u019E\u019F" +
    "\x07)\x02\x02\u019F\u01A0\x078\x02\x02\u01A0\u01A1\x05x=\x02\u01A1\u01A2" +
    "\x079\x02\x02\u01A2\u01AB\x076\x02\x02\u01A3\u01A8\x05z>\x02\u01A4\u01A5" +
    "\x07:\x02\x02\u01A5\u01A7\x05z>\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7" +
    "\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02" +
    "\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB" +
    "\u01A3\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD\x03\x02" +
    "\x02\x02\u01AD\u01AE\x077\x02\x02\u01AE_\x03\x02\x02\x02\u01AF\u01B0\x07" +
    "*\x02\x02\u01B0\u01B1\x078\x02\x02\u01B1\u01B2\x05x=\x02\u01B2\u01B3\x07" +
    ":\x02\x02\u01B3\u01B4\x05x=\x02\u01B4\u01B5\x079\x02\x02\u01B5\u01BC\x07" +
    "6\x02\x02\u01B6\u01B7\x05z>\x02\u01B7\u01B8\x07:\x02\x02\u01B8\u01B9\x05" +
    "z>\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01B6\x03\x02\x02\x02\u01BB\u01BE" +
    "\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02" +
    "\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C0\x07" +
    "7\x02\x02\u01C0a\x03\x02\x02\x02\u01C1\u01C2\x07+\x02\x02\u01C2\u01C3" +
    "\x076\x02\x02\u01C3\u01C4\x07Q\x02\x02\u01C4\u01C5\x077\x02\x02\u01C5" +
    "c\x03\x02\x02\x02\u01C6\u01C7\x07,\x02\x02\u01C7\u01C8\x076\x02\x02\u01C8" +
    "\u01C9\x07Q\x02\x02\u01C9\u01CA\x077\x02\x02\u01CAe\x03\x02\x02\x02\u01CB" +
    "\u01CC\x07-\x02\x02\u01CC\u01CD\x076\x02\x02\u01CD\u01CE\x07Q\x02\x02" +
    "\u01CE\u01CF\x077\x02\x02\u01CFg\x03\x02\x02\x02\u01D0\u01D1\x07.\x02" +
    "\x02\u01D1\u01D2\x076\x02\x02\u01D2\u01D3\x07Q\x02\x02\u01D3\u01D4\x07" +
    "7\x02\x02\u01D4i\x03\x02\x02\x02\u01D5\u01D6\x07/\x02\x02\u01D6\u01D7" +
    "\x076\x02\x02\u01D7\u01D8\x07Q\x02\x02\u01D8\u01D9\x077\x02\x02\u01D9" +
    "k\x03\x02\x02\x02\u01DA\u01DB\x070\x02\x02\u01DB\u01DC\x076\x02\x02\u01DC" +
    "\u01DD\x07Q\x02\x02\u01DD\u01DE\x077\x02\x02\u01DEm\x03\x02\x02\x02\u01DF" +
    "\u01E0\x071\x02\x02\u01E0\u01E1\x076\x02\x02\u01E1\u01E2\t\x02\x02\x02" +
    "\u01E2\u01E3\x077\x02\x02\u01E3o\x03\x02\x02\x02\u01E4\u01E5\x072\x02" +
    "\x02\u01E5\u01E6\x076\x02\x02\u01E6\u01E7\t\x02\x02\x02\u01E7\u01E8\x07" +
    "7\x02\x02\u01E8q\x03\x02\x02\x02\u01E9\u01EA\x073\x02\x02\u01EA\u01EB" +
    "\x076\x02\x02\u01EB\u01EC\x07Q\x02\x02\u01EC\u01ED\x077\x02\x02\u01ED" +
    "s\x03\x02\x02\x02\u01EE\u01EF\x074\x02\x02\u01EF\u01F0\x076\x02\x02\u01F0" +
    "\u01F1\x07Q\x02\x02\u01F1\u01F2\x077\x02\x02\u01F2u\x03\x02\x02\x02\u01F3" +
    "\u01F4\x075\x02\x02\u01F4\u01F5\x076\x02\x02\u01F5\u01F6\x07Q\x02\x02" +
    "\u01F6\u01F7\x077\x02\x02\u01F7w\x03\x02\x02\x02\u01F8\u01F9\t\x03\x02" +
    "\x02\u01F9y\x03\x02\x02\x02\u01FA\u021F\x050\x19\x02\u01FB\u021F\x052" +
    "\x1A\x02\u01FC\u021F\x054\x1B\x02\u01FD\u021F\x056\x1C\x02\u01FE\u021F" +
    "\x058\x1D\x02\u01FF\u021F\x05:\x1E\x02\u0200\u021F\x05<\x1F\x02\u0201" +
    "\u021F\x05> \x02\u0202\u021F\x05@!\x02\u0203\u021F\x05B\"\x02\u0204\u021F" +
    "\x05D#\x02\u0205\u021F\x05F$\x02\u0206\u021F\x05H%\x02\u0207\u021F\x05" +
    "J&\x02\u0208\u021F\x05L\'\x02\u0209\u021F\x05N(\x02\u020A\u021F\x05P)" +
    "\x02\u020B\u021F\x05R*\x02\u020C\u021F\x05T+\x02\u020D\u021F\x05V,\x02" +
    "\u020E\u021F\x05X-\x02\u020F\u021F\x05Z.\x02\u0210\u021F\x05\\/\x02\u0211" +
    "\u021F\x05^0\x02\u0212\u021F\x05`1\x02\u0213\u021F\x05b2\x02\u0214\u021F" +
    "\x05d3\x02\u0215\u021F\x05f4\x02\u0216\u021F\x05h5\x02\u0217\u021F\x05" +
    "j6\x02\u0218\u021F\x05l7\x02\u0219\u021F\x05n8\x02\u021A\u021F\x05p9\x02" +
    "\u021B\u021F\x05r:\x02\u021C\u021F\x05t;\x02\u021D\u021F\x05v<\x02\u021E" +
    "\u01FA\x03\x02\x02\x02\u021E\u01FB\x03\x02\x02\x02\u021E\u01FC\x03\x02" +
    "\x02\x02\u021E\u01FD\x03\x02\x02\x02\u021E\u01FE\x03\x02\x02\x02\u021E" +
    "\u01FF\x03\x02\x02\x02\u021E\u0200\x03\x02\x02\x02\u021E\u0201\x03\x02" +
    "\x02\x02\u021E\u0202\x03\x02\x02\x02\u021E\u0203\x03\x02\x02\x02\u021E" +
    "\u0204\x03\x02\x02\x02\u021E\u0205\x03\x02\x02\x02\u021E\u0206\x03\x02" +
    "\x02\x02\u021E\u0207\x03\x02\x02\x02\u021E\u0208\x03\x02\x02\x02\u021E" +
    "\u0209\x03\x02\x02\x02\u021E\u020A\x03\x02\x02\x02\u021E\u020B\x03\x02" +
    "\x02\x02\u021E\u020C\x03\x02\x02\x02\u021E\u020D\x03\x02\x02\x02\u021E" +
    "\u020E\x03\x02\x02\x02\u021E\u020F\x03\x02\x02\x02\u021E\u0210\x03\x02" +
    "\x02\x02\u021E\u0211\x03\x02\x02\x02\u021E\u0212\x03\x02\x02\x02\u021E" +
    "\u0213\x03\x02\x02\x02\u021E\u0214\x03\x02\x02\x02\u021E\u0215\x03\x02" +
    "\x02\x02\u021E\u0216\x03\x02\x02\x02\u021E\u0217\x03\x02\x02\x02\u021E" +
    "\u0218\x03\x02\x02\x02\u021E\u0219\x03\x02\x02\x02\u021E\u021A\x03\x02" +
    "\x02\x02\u021E\u021B\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E" +
    "\u021D\x03\x02\x02\x02\u021F{\x03\x02\x02\x02\x18\x7F\x99\xA2\xAD\u012C" +
    "\u012F\u013C\u013F\u0145\u014E\u015C\u0168\u0177\u017A\u0186\u0189\u0197" +
    "\u019A\u01A8\u01AB\u01BC\u021E";
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
    callFunction() {
        return this.tryGetRuleContext(0, CallFunctionContext);
    }
    callMethod() {
        return this.tryGetRuleContext(0, CallMethodContext);
    }
    callMethodWithAllResources() {
        return this.tryGetRuleContext(0, CallMethodWithAllResourcesContext);
    }
    returnToWorktop() {
        return this.tryGetRuleContext(0, ReturnToWorktopContext);
    }
    takeFromWorktop() {
        return this.tryGetRuleContext(0, TakeFromWorktopContext);
    }
    takeFromWorktopByAmount() {
        return this.tryGetRuleContext(0, TakeFromWorktopByAmountContext);
    }
    takeFromWorktopByIds() {
        return this.tryGetRuleContext(0, TakeFromWorktopByIdsContext);
    }
    assertWorktopContains() {
        return this.tryGetRuleContext(0, AssertWorktopContainsContext);
    }
    assertWorktopContainsByAmount() {
        return this.tryGetRuleContext(0, AssertWorktopContainsByAmountContext);
    }
    assertWorktopContainsByIds() {
        return this.tryGetRuleContext(0, AssertWorktopContainsByIdsContext);
    }
    popFromAuthZone() {
        return this.tryGetRuleContext(0, PopFromAuthZoneContext);
    }
    pushToAuthZone() {
        return this.tryGetRuleContext(0, PushToAuthZoneContext);
    }
    createProofFromAuthZone() {
        return this.tryGetRuleContext(0, CreateProofFromAuthZoneContext);
    }
    createProofFromAuthZoneByAmount() {
        return this.tryGetRuleContext(0, CreateProofFromAuthZoneByAmountContext);
    }
    createProofFromAuthZoneByIds() {
        return this.tryGetRuleContext(0, CreateProofFromAuthZoneByIdsContext);
    }
    createProofFromBucket() {
        return this.tryGetRuleContext(0, CreateProofFromBucketContext);
    }
    cloneProof() {
        return this.tryGetRuleContext(0, CloneProofContext);
    }
    dropProof() {
        return this.tryGetRuleContext(0, DropProofContext);
    }
    dropAllProofs() {
        return this.tryGetRuleContext(0, DropAllProofsContext);
    }
    clearAuthZone() {
        return this.tryGetRuleContext(0, ClearAuthZoneContext);
    }
    publishPackage() {
        return this.tryGetRuleContext(0, PublishPackageContext);
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
class CallFunctionContext extends ParserRuleContext_1.ParserRuleContext {
    CALL_FUNCTION() { return this.getToken(TransactionManifestParser.CALL_FUNCTION, 0); }
    packageAddress() {
        return this.getRuleContext(0, PackageAddressContext);
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_callFunction; }
    // @Override
    enterRule(listener) {
        if (listener.enterCallFunction) {
            listener.enterCallFunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCallFunction) {
            listener.exitCallFunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCallFunction) {
            return visitor.visitCallFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CallFunctionContext = CallFunctionContext;
class CallMethodContext extends ParserRuleContext_1.ParserRuleContext {
    CALL_METHOD() { return this.getToken(TransactionManifestParser.CALL_METHOD, 0); }
    componentAddress() {
        return this.getRuleContext(0, ComponentAddressContext);
    }
    string() {
        return this.getRuleContext(0, StringContext);
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
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_callMethod; }
    // @Override
    enterRule(listener) {
        if (listener.enterCallMethod) {
            listener.enterCallMethod(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCallMethod) {
            listener.exitCallMethod(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCallMethod) {
            return visitor.visitCallMethod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CallMethodContext = CallMethodContext;
class CallMethodWithAllResourcesContext extends ParserRuleContext_1.ParserRuleContext {
    CALL_METHOD_WITH_ALL_RESOURCES() { return this.getToken(TransactionManifestParser.CALL_METHOD_WITH_ALL_RESOURCES, 0); }
    componentAddress() {
        return this.getRuleContext(0, ComponentAddressContext);
    }
    string() {
        return this.getRuleContext(0, StringContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_callMethodWithAllResources; }
    // @Override
    enterRule(listener) {
        if (listener.enterCallMethodWithAllResources) {
            listener.enterCallMethodWithAllResources(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCallMethodWithAllResources) {
            listener.exitCallMethodWithAllResources(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCallMethodWithAllResources) {
            return visitor.visitCallMethodWithAllResources(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CallMethodWithAllResourcesContext = CallMethodWithAllResourcesContext;
class TakeFromWorktopContext extends ParserRuleContext_1.ParserRuleContext {
    TAKE_FROM_WORKTOP() { return this.getToken(TransactionManifestParser.TAKE_FROM_WORKTOP, 0); }
    resourceAddress() {
        return this.getRuleContext(0, ResourceAddressContext);
    }
    bucket() {
        return this.getRuleContext(0, BucketContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_takeFromWorktop; }
    // @Override
    enterRule(listener) {
        if (listener.enterTakeFromWorktop) {
            listener.enterTakeFromWorktop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTakeFromWorktop) {
            listener.exitTakeFromWorktop(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTakeFromWorktop) {
            return visitor.visitTakeFromWorktop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TakeFromWorktopContext = TakeFromWorktopContext;
class TakeFromWorktopByAmountContext extends ParserRuleContext_1.ParserRuleContext {
    TAKE_FROM_WORKTOP_BY_AMOUNT() { return this.getToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_AMOUNT, 0); }
    decimal() {
        return this.getRuleContext(0, DecimalContext);
    }
    resourceAddress() {
        return this.getRuleContext(0, ResourceAddressContext);
    }
    bucket() {
        return this.getRuleContext(0, BucketContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_takeFromWorktopByAmount; }
    // @Override
    enterRule(listener) {
        if (listener.enterTakeFromWorktopByAmount) {
            listener.enterTakeFromWorktopByAmount(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTakeFromWorktopByAmount) {
            listener.exitTakeFromWorktopByAmount(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTakeFromWorktopByAmount) {
            return visitor.visitTakeFromWorktopByAmount(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TakeFromWorktopByAmountContext = TakeFromWorktopByAmountContext;
class TakeFromWorktopByIdsContext extends ParserRuleContext_1.ParserRuleContext {
    TAKE_FROM_WORKTOP_BY_IDS() { return this.getToken(TransactionManifestParser.TAKE_FROM_WORKTOP_BY_IDS, 0); }
    set() {
        return this.getRuleContext(0, SetContext);
    }
    resourceAddress() {
        return this.getRuleContext(0, ResourceAddressContext);
    }
    bucket() {
        return this.getRuleContext(0, BucketContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_takeFromWorktopByIds; }
    // @Override
    enterRule(listener) {
        if (listener.enterTakeFromWorktopByIds) {
            listener.enterTakeFromWorktopByIds(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTakeFromWorktopByIds) {
            listener.exitTakeFromWorktopByIds(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTakeFromWorktopByIds) {
            return visitor.visitTakeFromWorktopByIds(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TakeFromWorktopByIdsContext = TakeFromWorktopByIdsContext;
class ReturnToWorktopContext extends ParserRuleContext_1.ParserRuleContext {
    RETURN_TO_WORKTOP() { return this.getToken(TransactionManifestParser.RETURN_TO_WORKTOP, 0); }
    bucket() {
        return this.getRuleContext(0, BucketContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_returnToWorktop; }
    // @Override
    enterRule(listener) {
        if (listener.enterReturnToWorktop) {
            listener.enterReturnToWorktop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReturnToWorktop) {
            listener.exitReturnToWorktop(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReturnToWorktop) {
            return visitor.visitReturnToWorktop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnToWorktopContext = ReturnToWorktopContext;
class AssertWorktopContainsContext extends ParserRuleContext_1.ParserRuleContext {
    ASSERT_WORKTOP_CONTAINS() { return this.getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS, 0); }
    resourceAddress() {
        return this.getRuleContext(0, ResourceAddressContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_assertWorktopContains; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssertWorktopContains) {
            listener.enterAssertWorktopContains(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssertWorktopContains) {
            listener.exitAssertWorktopContains(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssertWorktopContains) {
            return visitor.visitAssertWorktopContains(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssertWorktopContainsContext = AssertWorktopContainsContext;
class AssertWorktopContainsByAmountContext extends ParserRuleContext_1.ParserRuleContext {
    ASSERT_WORKTOP_CONTAINS_BY_AMOUNT() { return this.getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_AMOUNT, 0); }
    decimal() {
        return this.getRuleContext(0, DecimalContext);
    }
    resourceAddress() {
        return this.getRuleContext(0, ResourceAddressContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_assertWorktopContainsByAmount; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssertWorktopContainsByAmount) {
            listener.enterAssertWorktopContainsByAmount(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssertWorktopContainsByAmount) {
            listener.exitAssertWorktopContainsByAmount(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssertWorktopContainsByAmount) {
            return visitor.visitAssertWorktopContainsByAmount(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssertWorktopContainsByAmountContext = AssertWorktopContainsByAmountContext;
class AssertWorktopContainsByIdsContext extends ParserRuleContext_1.ParserRuleContext {
    ASSERT_WORKTOP_CONTAINS_BY_IDS() { return this.getToken(TransactionManifestParser.ASSERT_WORKTOP_CONTAINS_BY_IDS, 0); }
    set() {
        return this.getRuleContext(0, SetContext);
    }
    resourceAddress() {
        return this.getRuleContext(0, ResourceAddressContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_assertWorktopContainsByIds; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssertWorktopContainsByIds) {
            listener.enterAssertWorktopContainsByIds(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssertWorktopContainsByIds) {
            listener.exitAssertWorktopContainsByIds(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssertWorktopContainsByIds) {
            return visitor.visitAssertWorktopContainsByIds(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssertWorktopContainsByIdsContext = AssertWorktopContainsByIdsContext;
class PopFromAuthZoneContext extends ParserRuleContext_1.ParserRuleContext {
    POP_FROM_AUTH_ZONE() { return this.getToken(TransactionManifestParser.POP_FROM_AUTH_ZONE, 0); }
    proof() {
        return this.getRuleContext(0, ProofContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_popFromAuthZone; }
    // @Override
    enterRule(listener) {
        if (listener.enterPopFromAuthZone) {
            listener.enterPopFromAuthZone(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPopFromAuthZone) {
            listener.exitPopFromAuthZone(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPopFromAuthZone) {
            return visitor.visitPopFromAuthZone(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PopFromAuthZoneContext = PopFromAuthZoneContext;
class PushToAuthZoneContext extends ParserRuleContext_1.ParserRuleContext {
    PUSH_TO_AUTH_ZONE() { return this.getToken(TransactionManifestParser.PUSH_TO_AUTH_ZONE, 0); }
    proof() {
        return this.getRuleContext(0, ProofContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_pushToAuthZone; }
    // @Override
    enterRule(listener) {
        if (listener.enterPushToAuthZone) {
            listener.enterPushToAuthZone(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPushToAuthZone) {
            listener.exitPushToAuthZone(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPushToAuthZone) {
            return visitor.visitPushToAuthZone(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PushToAuthZoneContext = PushToAuthZoneContext;
class CreateProofFromAuthZoneContext extends ParserRuleContext_1.ParserRuleContext {
    CREATE_PROOF_FROM_AUTH_ZONE() { return this.getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE, 0); }
    resourceAddress() {
        return this.getRuleContext(0, ResourceAddressContext);
    }
    proof() {
        return this.getRuleContext(0, ProofContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_createProofFromAuthZone; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreateProofFromAuthZone) {
            listener.enterCreateProofFromAuthZone(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreateProofFromAuthZone) {
            listener.exitCreateProofFromAuthZone(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCreateProofFromAuthZone) {
            return visitor.visitCreateProofFromAuthZone(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CreateProofFromAuthZoneContext = CreateProofFromAuthZoneContext;
class CreateProofFromAuthZoneByAmountContext extends ParserRuleContext_1.ParserRuleContext {
    CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT() { return this.getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT, 0); }
    decimal() {
        return this.getRuleContext(0, DecimalContext);
    }
    resourceAddress() {
        return this.getRuleContext(0, ResourceAddressContext);
    }
    proof() {
        return this.getRuleContext(0, ProofContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_createProofFromAuthZoneByAmount; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreateProofFromAuthZoneByAmount) {
            listener.enterCreateProofFromAuthZoneByAmount(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreateProofFromAuthZoneByAmount) {
            listener.exitCreateProofFromAuthZoneByAmount(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCreateProofFromAuthZoneByAmount) {
            return visitor.visitCreateProofFromAuthZoneByAmount(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CreateProofFromAuthZoneByAmountContext = CreateProofFromAuthZoneByAmountContext;
class CreateProofFromAuthZoneByIdsContext extends ParserRuleContext_1.ParserRuleContext {
    CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS() { return this.getToken(TransactionManifestParser.CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS, 0); }
    set() {
        return this.getRuleContext(0, SetContext);
    }
    resourceAddress() {
        return this.getRuleContext(0, ResourceAddressContext);
    }
    proof() {
        return this.getRuleContext(0, ProofContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_createProofFromAuthZoneByIds; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreateProofFromAuthZoneByIds) {
            listener.enterCreateProofFromAuthZoneByIds(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreateProofFromAuthZoneByIds) {
            listener.exitCreateProofFromAuthZoneByIds(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCreateProofFromAuthZoneByIds) {
            return visitor.visitCreateProofFromAuthZoneByIds(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CreateProofFromAuthZoneByIdsContext = CreateProofFromAuthZoneByIdsContext;
class CreateProofFromBucketContext extends ParserRuleContext_1.ParserRuleContext {
    CREATE_PROOF_FROM_BUCKET() { return this.getToken(TransactionManifestParser.CREATE_PROOF_FROM_BUCKET, 0); }
    bucket() {
        return this.getRuleContext(0, BucketContext);
    }
    proof() {
        return this.getRuleContext(0, ProofContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_createProofFromBucket; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreateProofFromBucket) {
            listener.enterCreateProofFromBucket(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreateProofFromBucket) {
            listener.exitCreateProofFromBucket(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCreateProofFromBucket) {
            return visitor.visitCreateProofFromBucket(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CreateProofFromBucketContext = CreateProofFromBucketContext;
class CloneProofContext extends ParserRuleContext_1.ParserRuleContext {
    CLONE_PROOF() { return this.getToken(TransactionManifestParser.CLONE_PROOF, 0); }
    proof(i) {
        if (i === undefined) {
            return this.getRuleContexts(ProofContext);
        }
        else {
            return this.getRuleContext(i, ProofContext);
        }
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_cloneProof; }
    // @Override
    enterRule(listener) {
        if (listener.enterCloneProof) {
            listener.enterCloneProof(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCloneProof) {
            listener.exitCloneProof(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCloneProof) {
            return visitor.visitCloneProof(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CloneProofContext = CloneProofContext;
class DropProofContext extends ParserRuleContext_1.ParserRuleContext {
    DROP_PROOF() { return this.getToken(TransactionManifestParser.DROP_PROOF, 0); }
    proof() {
        return this.getRuleContext(0, ProofContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_dropProof; }
    // @Override
    enterRule(listener) {
        if (listener.enterDropProof) {
            listener.enterDropProof(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDropProof) {
            listener.exitDropProof(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDropProof) {
            return visitor.visitDropProof(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DropProofContext = DropProofContext;
class DropAllProofsContext extends ParserRuleContext_1.ParserRuleContext {
    DROP_ALL_PROOFS() { return this.getToken(TransactionManifestParser.DROP_ALL_PROOFS, 0); }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_dropAllProofs; }
    // @Override
    enterRule(listener) {
        if (listener.enterDropAllProofs) {
            listener.enterDropAllProofs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDropAllProofs) {
            listener.exitDropAllProofs(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDropAllProofs) {
            return visitor.visitDropAllProofs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DropAllProofsContext = DropAllProofsContext;
class ClearAuthZoneContext extends ParserRuleContext_1.ParserRuleContext {
    CLEAR_AUTHZONE() { return this.getToken(TransactionManifestParser.CLEAR_AUTHZONE, 0); }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_clearAuthZone; }
    // @Override
    enterRule(listener) {
        if (listener.enterClearAuthZone) {
            listener.enterClearAuthZone(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClearAuthZone) {
            listener.exitClearAuthZone(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClearAuthZone) {
            return visitor.visitClearAuthZone(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClearAuthZoneContext = ClearAuthZoneContext;
class PublishPackageContext extends ParserRuleContext_1.ParserRuleContext {
    PUBLISH_PACKAGE() { return this.getToken(TransactionManifestParser.PUBLISH_PACKAGE, 0); }
    bytes() {
        return this.getRuleContext(0, BytesContext);
    }
    SEMICOLON() { return this.getToken(TransactionManifestParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_publishPackage; }
    // @Override
    enterRule(listener) {
        if (listener.enterPublishPackage) {
            listener.enterPublishPackage(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPublishPackage) {
            listener.exitPublishPackage(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPublishPackage) {
            return visitor.visitPublishPackage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PublishPackageContext = PublishPackageContext;
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
class PreciseDecimalContext extends ParserRuleContext_1.ParserRuleContext {
    PRECISE_DECIMAL_TYPE() { return this.getToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_preciseDecimal; }
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
    PACKAGE_ADDRESS_TYPE() { return this.getToken(TransactionManifestParser.PACKAGE_ADDRESS_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_packageAddress; }
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
    COMPONENT_ADDRESS_TYPE() { return this.getToken(TransactionManifestParser.COMPONENT_ADDRESS_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_componentAddress; }
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
    RESOURCE_ADDRESS_TYPE() { return this.getToken(TransactionManifestParser.RESOURCE_ADDRESS_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_resourceAddress; }
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
class NonFungibleIdContext extends ParserRuleContext_1.ParserRuleContext {
    NON_FUNGIBLE_ID_TYPE() { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ID_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_nonFungibleId; }
    // @Override
    enterRule(listener) {
        if (listener.enterNonFungibleId) {
            listener.enterNonFungibleId(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNonFungibleId) {
            listener.exitNonFungibleId(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNonFungibleId) {
            return visitor.visitNonFungibleId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NonFungibleIdContext = NonFungibleIdContext;
class NonFungibleAddressContext extends ParserRuleContext_1.ParserRuleContext {
    NON_FUNGIBLE_ADDRESS_TYPE() { return this.getToken(TransactionManifestParser.NON_FUNGIBLE_ADDRESS_TYPE, 0); }
    OPEN_PARENTHESIS() { return this.getToken(TransactionManifestParser.OPEN_PARENTHESIS, 0); }
    STRING_LITERAL() { return this.getToken(TransactionManifestParser.STRING_LITERAL, 0); }
    CLOED_PARENTHESIS() { return this.getToken(TransactionManifestParser.CLOED_PARENTHESIS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return TransactionManifestParser.RULE_nonFungibleAddress; }
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
    PRECISE_DECIMAL_TYPE() { return this.tryGetToken(TransactionManifestParser.PRECISE_DECIMAL_TYPE, 0); }
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
    nonFungibleId() {
        return this.tryGetRuleContext(0, NonFungibleIdContext);
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