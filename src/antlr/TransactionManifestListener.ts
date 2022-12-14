// Generated from src/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ManifestContext } from "./TransactionManifestParser";
import { ManifestInstructionContext } from "./TransactionManifestParser";
import { CallFunctionContext } from "./TransactionManifestParser";
import { CallNativeFunctionContext } from "./TransactionManifestParser";
import { CallMethodContext } from "./TransactionManifestParser";
import { CallNativeMethodContext } from "./TransactionManifestParser";
import { TakeFromWorktopContext } from "./TransactionManifestParser";
import { TakeFromWorktopByAmountContext } from "./TransactionManifestParser";
import { TakeFromWorktopByIdsContext } from "./TransactionManifestParser";
import { ReturnToWorktopContext } from "./TransactionManifestParser";
import { AssertWorktopContainsContext } from "./TransactionManifestParser";
import { AssertWorktopContainsByAmountContext } from "./TransactionManifestParser";
import { AssertWorktopContainsByIdsContext } from "./TransactionManifestParser";
import { PopFromAuthZoneContext } from "./TransactionManifestParser";
import { PushToAuthZoneContext } from "./TransactionManifestParser";
import { CreateProofFromAuthZoneContext } from "./TransactionManifestParser";
import { CreateProofFromAuthZoneByAmountContext } from "./TransactionManifestParser";
import { CreateProofFromAuthZoneByIdsContext } from "./TransactionManifestParser";
import { CreateProofFromBucketContext } from "./TransactionManifestParser";
import { CloneProofContext } from "./TransactionManifestParser";
import { DropProofContext } from "./TransactionManifestParser";
import { DropAllProofsContext } from "./TransactionManifestParser";
import { ClearAuthZoneContext } from "./TransactionManifestParser";
import { PublishPackageWithOwnerContext } from "./TransactionManifestParser";
import { BurnBucketContext } from "./TransactionManifestParser";
import { MintFungibleContext } from "./TransactionManifestParser";
import { CreateResourceContext } from "./TransactionManifestParser";
import { UnitContext } from "./TransactionManifestParser";
import { BoolContext } from "./TransactionManifestParser";
import { I8Context } from "./TransactionManifestParser";
import { I16Context } from "./TransactionManifestParser";
import { I32Context } from "./TransactionManifestParser";
import { I64Context } from "./TransactionManifestParser";
import { I128Context } from "./TransactionManifestParser";
import { U8Context } from "./TransactionManifestParser";
import { U16Context } from "./TransactionManifestParser";
import { U32Context } from "./TransactionManifestParser";
import { U64Context } from "./TransactionManifestParser";
import { U128Context } from "./TransactionManifestParser";
import { StringContext } from "./TransactionManifestParser";
import { Enum_Context } from "./TransactionManifestParser";
import { OptionContext } from "./TransactionManifestParser";
import { SomeContext } from "./TransactionManifestParser";
import { NoneContext } from "./TransactionManifestParser";
import { OkContext } from "./TransactionManifestParser";
import { ErrContext } from "./TransactionManifestParser";
import { ArrayContext } from "./TransactionManifestParser";
import { TupleContext } from "./TransactionManifestParser";
import { DecimalContext } from "./TransactionManifestParser";
import { PreciseDecimalContext } from "./TransactionManifestParser";
import { PackageAddressContext } from "./TransactionManifestParser";
import { ComponentAddressContext } from "./TransactionManifestParser";
import { ResourceAddressContext } from "./TransactionManifestParser";
import { SystemAddressContext } from "./TransactionManifestParser";
import { HashContext } from "./TransactionManifestParser";
import { BytesContext } from "./TransactionManifestParser";
import { ComponentContext } from "./TransactionManifestParser";
import { VaultContext } from "./TransactionManifestParser";
import { KeyValueStoreContext } from "./TransactionManifestParser";
import { BucketContext } from "./TransactionManifestParser";
import { ProofContext } from "./TransactionManifestParser";
import { NonFungibleIdContext } from "./TransactionManifestParser";
import { NonFungibleAddressContext } from "./TransactionManifestParser";
import { BlobContext } from "./TransactionManifestParser";
import { EcdsaSecp256k1PublicKeyContext } from "./TransactionManifestParser";
import { EcdsaSecp256k1SignatureContext } from "./TransactionManifestParser";
import { EddsaEd25519PublicKeyContext } from "./TransactionManifestParser";
import { EddsaEd25519SignatureContext } from "./TransactionManifestParser";
import { ExpressionContext } from "./TransactionManifestParser";
import { TypeContext } from "./TransactionManifestParser";
import { Non_fungible_id_valuesContext } from "./TransactionManifestParser";
import { ValueContext } from "./TransactionManifestParser";
import { Re_node_idContext } from "./TransactionManifestParser";
import { WorktopContext } from "./TransactionManifestParser";
import { AuthZoneStackContext } from "./TransactionManifestParser";
import { FeeReserveContext } from "./TransactionManifestParser";
import { GlobalContext } from "./TransactionManifestParser";
import { NonFungibleStoreContext } from "./TransactionManifestParser";
import { ResourceManagerContext } from "./TransactionManifestParser";
import { Package_Context } from "./TransactionManifestParser";
import { EpochManagerContext } from "./TransactionManifestParser";
import { ClockContext } from "./TransactionManifestParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TransactionManifestParser`.
 */
export interface TransactionManifestListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TransactionManifestParser.manifest`.
	 * @param ctx the parse tree
	 */
	enterManifest?: (ctx: ManifestContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.manifest`.
	 * @param ctx the parse tree
	 */
	exitManifest?: (ctx: ManifestContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.manifestInstruction`.
	 * @param ctx the parse tree
	 */
	enterManifestInstruction?: (ctx: ManifestInstructionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.manifestInstruction`.
	 * @param ctx the parse tree
	 */
	exitManifestInstruction?: (ctx: ManifestInstructionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.callFunction`.
	 * @param ctx the parse tree
	 */
	enterCallFunction?: (ctx: CallFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.callFunction`.
	 * @param ctx the parse tree
	 */
	exitCallFunction?: (ctx: CallFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.callNativeFunction`.
	 * @param ctx the parse tree
	 */
	enterCallNativeFunction?: (ctx: CallNativeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.callNativeFunction`.
	 * @param ctx the parse tree
	 */
	exitCallNativeFunction?: (ctx: CallNativeFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.callMethod`.
	 * @param ctx the parse tree
	 */
	enterCallMethod?: (ctx: CallMethodContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.callMethod`.
	 * @param ctx the parse tree
	 */
	exitCallMethod?: (ctx: CallMethodContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.callNativeMethod`.
	 * @param ctx the parse tree
	 */
	enterCallNativeMethod?: (ctx: CallNativeMethodContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.callNativeMethod`.
	 * @param ctx the parse tree
	 */
	exitCallNativeMethod?: (ctx: CallNativeMethodContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.takeFromWorktop`.
	 * @param ctx the parse tree
	 */
	enterTakeFromWorktop?: (ctx: TakeFromWorktopContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.takeFromWorktop`.
	 * @param ctx the parse tree
	 */
	exitTakeFromWorktop?: (ctx: TakeFromWorktopContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.takeFromWorktopByAmount`.
	 * @param ctx the parse tree
	 */
	enterTakeFromWorktopByAmount?: (ctx: TakeFromWorktopByAmountContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.takeFromWorktopByAmount`.
	 * @param ctx the parse tree
	 */
	exitTakeFromWorktopByAmount?: (ctx: TakeFromWorktopByAmountContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.takeFromWorktopByIds`.
	 * @param ctx the parse tree
	 */
	enterTakeFromWorktopByIds?: (ctx: TakeFromWorktopByIdsContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.takeFromWorktopByIds`.
	 * @param ctx the parse tree
	 */
	exitTakeFromWorktopByIds?: (ctx: TakeFromWorktopByIdsContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.returnToWorktop`.
	 * @param ctx the parse tree
	 */
	enterReturnToWorktop?: (ctx: ReturnToWorktopContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.returnToWorktop`.
	 * @param ctx the parse tree
	 */
	exitReturnToWorktop?: (ctx: ReturnToWorktopContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.assertWorktopContains`.
	 * @param ctx the parse tree
	 */
	enterAssertWorktopContains?: (ctx: AssertWorktopContainsContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.assertWorktopContains`.
	 * @param ctx the parse tree
	 */
	exitAssertWorktopContains?: (ctx: AssertWorktopContainsContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.assertWorktopContainsByAmount`.
	 * @param ctx the parse tree
	 */
	enterAssertWorktopContainsByAmount?: (ctx: AssertWorktopContainsByAmountContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.assertWorktopContainsByAmount`.
	 * @param ctx the parse tree
	 */
	exitAssertWorktopContainsByAmount?: (ctx: AssertWorktopContainsByAmountContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.assertWorktopContainsByIds`.
	 * @param ctx the parse tree
	 */
	enterAssertWorktopContainsByIds?: (ctx: AssertWorktopContainsByIdsContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.assertWorktopContainsByIds`.
	 * @param ctx the parse tree
	 */
	exitAssertWorktopContainsByIds?: (ctx: AssertWorktopContainsByIdsContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.popFromAuthZone`.
	 * @param ctx the parse tree
	 */
	enterPopFromAuthZone?: (ctx: PopFromAuthZoneContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.popFromAuthZone`.
	 * @param ctx the parse tree
	 */
	exitPopFromAuthZone?: (ctx: PopFromAuthZoneContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.pushToAuthZone`.
	 * @param ctx the parse tree
	 */
	enterPushToAuthZone?: (ctx: PushToAuthZoneContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.pushToAuthZone`.
	 * @param ctx the parse tree
	 */
	exitPushToAuthZone?: (ctx: PushToAuthZoneContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.createProofFromAuthZone`.
	 * @param ctx the parse tree
	 */
	enterCreateProofFromAuthZone?: (ctx: CreateProofFromAuthZoneContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.createProofFromAuthZone`.
	 * @param ctx the parse tree
	 */
	exitCreateProofFromAuthZone?: (ctx: CreateProofFromAuthZoneContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.createProofFromAuthZoneByAmount`.
	 * @param ctx the parse tree
	 */
	enterCreateProofFromAuthZoneByAmount?: (ctx: CreateProofFromAuthZoneByAmountContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.createProofFromAuthZoneByAmount`.
	 * @param ctx the parse tree
	 */
	exitCreateProofFromAuthZoneByAmount?: (ctx: CreateProofFromAuthZoneByAmountContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.createProofFromAuthZoneByIds`.
	 * @param ctx the parse tree
	 */
	enterCreateProofFromAuthZoneByIds?: (ctx: CreateProofFromAuthZoneByIdsContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.createProofFromAuthZoneByIds`.
	 * @param ctx the parse tree
	 */
	exitCreateProofFromAuthZoneByIds?: (ctx: CreateProofFromAuthZoneByIdsContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.createProofFromBucket`.
	 * @param ctx the parse tree
	 */
	enterCreateProofFromBucket?: (ctx: CreateProofFromBucketContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.createProofFromBucket`.
	 * @param ctx the parse tree
	 */
	exitCreateProofFromBucket?: (ctx: CreateProofFromBucketContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.cloneProof`.
	 * @param ctx the parse tree
	 */
	enterCloneProof?: (ctx: CloneProofContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.cloneProof`.
	 * @param ctx the parse tree
	 */
	exitCloneProof?: (ctx: CloneProofContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.dropProof`.
	 * @param ctx the parse tree
	 */
	enterDropProof?: (ctx: DropProofContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.dropProof`.
	 * @param ctx the parse tree
	 */
	exitDropProof?: (ctx: DropProofContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.dropAllProofs`.
	 * @param ctx the parse tree
	 */
	enterDropAllProofs?: (ctx: DropAllProofsContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.dropAllProofs`.
	 * @param ctx the parse tree
	 */
	exitDropAllProofs?: (ctx: DropAllProofsContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.clearAuthZone`.
	 * @param ctx the parse tree
	 */
	enterClearAuthZone?: (ctx: ClearAuthZoneContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.clearAuthZone`.
	 * @param ctx the parse tree
	 */
	exitClearAuthZone?: (ctx: ClearAuthZoneContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.publishPackageWithOwner`.
	 * @param ctx the parse tree
	 */
	enterPublishPackageWithOwner?: (ctx: PublishPackageWithOwnerContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.publishPackageWithOwner`.
	 * @param ctx the parse tree
	 */
	exitPublishPackageWithOwner?: (ctx: PublishPackageWithOwnerContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.burnBucket`.
	 * @param ctx the parse tree
	 */
	enterBurnBucket?: (ctx: BurnBucketContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.burnBucket`.
	 * @param ctx the parse tree
	 */
	exitBurnBucket?: (ctx: BurnBucketContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.mintFungible`.
	 * @param ctx the parse tree
	 */
	enterMintFungible?: (ctx: MintFungibleContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.mintFungible`.
	 * @param ctx the parse tree
	 */
	exitMintFungible?: (ctx: MintFungibleContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.createResource`.
	 * @param ctx the parse tree
	 */
	enterCreateResource?: (ctx: CreateResourceContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.createResource`.
	 * @param ctx the parse tree
	 */
	exitCreateResource?: (ctx: CreateResourceContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.i8`.
	 * @param ctx the parse tree
	 */
	enterI8?: (ctx: I8Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.i8`.
	 * @param ctx the parse tree
	 */
	exitI8?: (ctx: I8Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.i16`.
	 * @param ctx the parse tree
	 */
	enterI16?: (ctx: I16Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.i16`.
	 * @param ctx the parse tree
	 */
	exitI16?: (ctx: I16Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.i32`.
	 * @param ctx the parse tree
	 */
	enterI32?: (ctx: I32Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.i32`.
	 * @param ctx the parse tree
	 */
	exitI32?: (ctx: I32Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.i64`.
	 * @param ctx the parse tree
	 */
	enterI64?: (ctx: I64Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.i64`.
	 * @param ctx the parse tree
	 */
	exitI64?: (ctx: I64Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.i128`.
	 * @param ctx the parse tree
	 */
	enterI128?: (ctx: I128Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.i128`.
	 * @param ctx the parse tree
	 */
	exitI128?: (ctx: I128Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.u8`.
	 * @param ctx the parse tree
	 */
	enterU8?: (ctx: U8Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.u8`.
	 * @param ctx the parse tree
	 */
	exitU8?: (ctx: U8Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.u16`.
	 * @param ctx the parse tree
	 */
	enterU16?: (ctx: U16Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.u16`.
	 * @param ctx the parse tree
	 */
	exitU16?: (ctx: U16Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.u32`.
	 * @param ctx the parse tree
	 */
	enterU32?: (ctx: U32Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.u32`.
	 * @param ctx the parse tree
	 */
	exitU32?: (ctx: U32Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.u64`.
	 * @param ctx the parse tree
	 */
	enterU64?: (ctx: U64Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.u64`.
	 * @param ctx the parse tree
	 */
	exitU64?: (ctx: U64Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.u128`.
	 * @param ctx the parse tree
	 */
	enterU128?: (ctx: U128Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.u128`.
	 * @param ctx the parse tree
	 */
	exitU128?: (ctx: U128Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.enum_`.
	 * @param ctx the parse tree
	 */
	enterEnum_?: (ctx: Enum_Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.enum_`.
	 * @param ctx the parse tree
	 */
	exitEnum_?: (ctx: Enum_Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.some`.
	 * @param ctx the parse tree
	 */
	enterSome?: (ctx: SomeContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.some`.
	 * @param ctx the parse tree
	 */
	exitSome?: (ctx: SomeContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.none`.
	 * @param ctx the parse tree
	 */
	enterNone?: (ctx: NoneContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.none`.
	 * @param ctx the parse tree
	 */
	exitNone?: (ctx: NoneContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.ok`.
	 * @param ctx the parse tree
	 */
	enterOk?: (ctx: OkContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.ok`.
	 * @param ctx the parse tree
	 */
	exitOk?: (ctx: OkContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.err`.
	 * @param ctx the parse tree
	 */
	enterErr?: (ctx: ErrContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.err`.
	 * @param ctx the parse tree
	 */
	exitErr?: (ctx: ErrContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.tuple`.
	 * @param ctx the parse tree
	 */
	enterTuple?: (ctx: TupleContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.tuple`.
	 * @param ctx the parse tree
	 */
	exitTuple?: (ctx: TupleContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.decimal`.
	 * @param ctx the parse tree
	 */
	enterDecimal?: (ctx: DecimalContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.decimal`.
	 * @param ctx the parse tree
	 */
	exitDecimal?: (ctx: DecimalContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.preciseDecimal`.
	 * @param ctx the parse tree
	 */
	enterPreciseDecimal?: (ctx: PreciseDecimalContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.preciseDecimal`.
	 * @param ctx the parse tree
	 */
	exitPreciseDecimal?: (ctx: PreciseDecimalContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.packageAddress`.
	 * @param ctx the parse tree
	 */
	enterPackageAddress?: (ctx: PackageAddressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.packageAddress`.
	 * @param ctx the parse tree
	 */
	exitPackageAddress?: (ctx: PackageAddressContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.componentAddress`.
	 * @param ctx the parse tree
	 */
	enterComponentAddress?: (ctx: ComponentAddressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.componentAddress`.
	 * @param ctx the parse tree
	 */
	exitComponentAddress?: (ctx: ComponentAddressContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.resourceAddress`.
	 * @param ctx the parse tree
	 */
	enterResourceAddress?: (ctx: ResourceAddressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.resourceAddress`.
	 * @param ctx the parse tree
	 */
	exitResourceAddress?: (ctx: ResourceAddressContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.systemAddress`.
	 * @param ctx the parse tree
	 */
	enterSystemAddress?: (ctx: SystemAddressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.systemAddress`.
	 * @param ctx the parse tree
	 */
	exitSystemAddress?: (ctx: SystemAddressContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.hash`.
	 * @param ctx the parse tree
	 */
	enterHash?: (ctx: HashContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.hash`.
	 * @param ctx the parse tree
	 */
	exitHash?: (ctx: HashContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.bytes`.
	 * @param ctx the parse tree
	 */
	enterBytes?: (ctx: BytesContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.bytes`.
	 * @param ctx the parse tree
	 */
	exitBytes?: (ctx: BytesContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.vault`.
	 * @param ctx the parse tree
	 */
	enterVault?: (ctx: VaultContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.vault`.
	 * @param ctx the parse tree
	 */
	exitVault?: (ctx: VaultContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.keyValueStore`.
	 * @param ctx the parse tree
	 */
	enterKeyValueStore?: (ctx: KeyValueStoreContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.keyValueStore`.
	 * @param ctx the parse tree
	 */
	exitKeyValueStore?: (ctx: KeyValueStoreContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.bucket`.
	 * @param ctx the parse tree
	 */
	enterBucket?: (ctx: BucketContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.bucket`.
	 * @param ctx the parse tree
	 */
	exitBucket?: (ctx: BucketContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.proof`.
	 * @param ctx the parse tree
	 */
	enterProof?: (ctx: ProofContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.proof`.
	 * @param ctx the parse tree
	 */
	exitProof?: (ctx: ProofContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.nonFungibleId`.
	 * @param ctx the parse tree
	 */
	enterNonFungibleId?: (ctx: NonFungibleIdContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.nonFungibleId`.
	 * @param ctx the parse tree
	 */
	exitNonFungibleId?: (ctx: NonFungibleIdContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.nonFungibleAddress`.
	 * @param ctx the parse tree
	 */
	enterNonFungibleAddress?: (ctx: NonFungibleAddressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.nonFungibleAddress`.
	 * @param ctx the parse tree
	 */
	exitNonFungibleAddress?: (ctx: NonFungibleAddressContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.blob`.
	 * @param ctx the parse tree
	 */
	enterBlob?: (ctx: BlobContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.blob`.
	 * @param ctx the parse tree
	 */
	exitBlob?: (ctx: BlobContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.ecdsaSecp256k1PublicKey`.
	 * @param ctx the parse tree
	 */
	enterEcdsaSecp256k1PublicKey?: (ctx: EcdsaSecp256k1PublicKeyContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.ecdsaSecp256k1PublicKey`.
	 * @param ctx the parse tree
	 */
	exitEcdsaSecp256k1PublicKey?: (ctx: EcdsaSecp256k1PublicKeyContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.ecdsaSecp256k1Signature`.
	 * @param ctx the parse tree
	 */
	enterEcdsaSecp256k1Signature?: (ctx: EcdsaSecp256k1SignatureContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.ecdsaSecp256k1Signature`.
	 * @param ctx the parse tree
	 */
	exitEcdsaSecp256k1Signature?: (ctx: EcdsaSecp256k1SignatureContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.eddsaEd25519PublicKey`.
	 * @param ctx the parse tree
	 */
	enterEddsaEd25519PublicKey?: (ctx: EddsaEd25519PublicKeyContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.eddsaEd25519PublicKey`.
	 * @param ctx the parse tree
	 */
	exitEddsaEd25519PublicKey?: (ctx: EddsaEd25519PublicKeyContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.eddsaEd25519Signature`.
	 * @param ctx the parse tree
	 */
	enterEddsaEd25519Signature?: (ctx: EddsaEd25519SignatureContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.eddsaEd25519Signature`.
	 * @param ctx the parse tree
	 */
	exitEddsaEd25519Signature?: (ctx: EddsaEd25519SignatureContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.non_fungible_id_values`.
	 * @param ctx the parse tree
	 */
	enterNon_fungible_id_values?: (ctx: Non_fungible_id_valuesContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.non_fungible_id_values`.
	 * @param ctx the parse tree
	 */
	exitNon_fungible_id_values?: (ctx: Non_fungible_id_valuesContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.re_node_id`.
	 * @param ctx the parse tree
	 */
	enterRe_node_id?: (ctx: Re_node_idContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.re_node_id`.
	 * @param ctx the parse tree
	 */
	exitRe_node_id?: (ctx: Re_node_idContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.worktop`.
	 * @param ctx the parse tree
	 */
	enterWorktop?: (ctx: WorktopContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.worktop`.
	 * @param ctx the parse tree
	 */
	exitWorktop?: (ctx: WorktopContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.authZoneStack`.
	 * @param ctx the parse tree
	 */
	enterAuthZoneStack?: (ctx: AuthZoneStackContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.authZoneStack`.
	 * @param ctx the parse tree
	 */
	exitAuthZoneStack?: (ctx: AuthZoneStackContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.feeReserve`.
	 * @param ctx the parse tree
	 */
	enterFeeReserve?: (ctx: FeeReserveContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.feeReserve`.
	 * @param ctx the parse tree
	 */
	exitFeeReserve?: (ctx: FeeReserveContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.global`.
	 * @param ctx the parse tree
	 */
	enterGlobal?: (ctx: GlobalContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.global`.
	 * @param ctx the parse tree
	 */
	exitGlobal?: (ctx: GlobalContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.nonFungibleStore`.
	 * @param ctx the parse tree
	 */
	enterNonFungibleStore?: (ctx: NonFungibleStoreContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.nonFungibleStore`.
	 * @param ctx the parse tree
	 */
	exitNonFungibleStore?: (ctx: NonFungibleStoreContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.resourceManager`.
	 * @param ctx the parse tree
	 */
	enterResourceManager?: (ctx: ResourceManagerContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.resourceManager`.
	 * @param ctx the parse tree
	 */
	exitResourceManager?: (ctx: ResourceManagerContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.package_`.
	 * @param ctx the parse tree
	 */
	enterPackage_?: (ctx: Package_Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.package_`.
	 * @param ctx the parse tree
	 */
	exitPackage_?: (ctx: Package_Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.epochManager`.
	 * @param ctx the parse tree
	 */
	enterEpochManager?: (ctx: EpochManagerContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.epochManager`.
	 * @param ctx the parse tree
	 */
	exitEpochManager?: (ctx: EpochManagerContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.clock`.
	 * @param ctx the parse tree
	 */
	enterClock?: (ctx: ClockContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.clock`.
	 * @param ctx the parse tree
	 */
	exitClock?: (ctx: ClockContext) => void;
}

