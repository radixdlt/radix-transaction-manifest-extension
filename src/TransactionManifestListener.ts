// Generated from src/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ManifestContext } from "./TransactionManifestParser";
import { ManifestInstructionContext } from "./TransactionManifestParser";
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
import { SafeI8Context } from "./TransactionManifestParser";
import { SafeI16Context } from "./TransactionManifestParser";
import { SafeI32Context } from "./TransactionManifestParser";
import { SafeI64Context } from "./TransactionManifestParser";
import { SafeI128Context } from "./TransactionManifestParser";
import { SafeI256Context } from "./TransactionManifestParser";
import { SafeI384Context } from "./TransactionManifestParser";
import { SafeI512Context } from "./TransactionManifestParser";
import { SafeU8Context } from "./TransactionManifestParser";
import { SafeU16Context } from "./TransactionManifestParser";
import { SafeU32Context } from "./TransactionManifestParser";
import { SafeU64Context } from "./TransactionManifestParser";
import { SafeU128Context } from "./TransactionManifestParser";
import { SafeU256Context } from "./TransactionManifestParser";
import { SafeU384Context } from "./TransactionManifestParser";
import { SafeU512Context } from "./TransactionManifestParser";
import { StringContext } from "./TransactionManifestParser";
import { StructContext } from "./TransactionManifestParser";
import { Enum_Context } from "./TransactionManifestParser";
import { OptionContext } from "./TransactionManifestParser";
import { SomeContext } from "./TransactionManifestParser";
import { NoneContext } from "./TransactionManifestParser";
import { OkContext } from "./TransactionManifestParser";
import { ErrContext } from "./TransactionManifestParser";
import { ArrayContext } from "./TransactionManifestParser";
import { TupleContext } from "./TransactionManifestParser";
import { ListContext } from "./TransactionManifestParser";
import { SetContext } from "./TransactionManifestParser";
import { MapContext } from "./TransactionManifestParser";
import { DecimalContext } from "./TransactionManifestParser";
import { PreciseDecimalContext } from "./TransactionManifestParser";
import { PackageAddressContext } from "./TransactionManifestParser";
import { ComponentAddressContext } from "./TransactionManifestParser";
import { ResourceAddressContext } from "./TransactionManifestParser";
import { HashContext } from "./TransactionManifestParser";
import { BucketContext } from "./TransactionManifestParser";
import { ProofContext } from "./TransactionManifestParser";
import { NonFungible_idContext } from "./TransactionManifestParser";
import { NonFungibleAddressContext } from "./TransactionManifestParser";
import { BytesContext } from "./TransactionManifestParser";
import { TypeContext } from "./TransactionManifestParser";
import { ValueContext } from "./TransactionManifestParser";


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
	 * Enter a parse tree produced by `TransactionManifestParser.safeI8`.
	 * @param ctx the parse tree
	 */
	enterSafeI8?: (ctx: SafeI8Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeI8`.
	 * @param ctx the parse tree
	 */
	exitSafeI8?: (ctx: SafeI8Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeI16`.
	 * @param ctx the parse tree
	 */
	enterSafeI16?: (ctx: SafeI16Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeI16`.
	 * @param ctx the parse tree
	 */
	exitSafeI16?: (ctx: SafeI16Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeI32`.
	 * @param ctx the parse tree
	 */
	enterSafeI32?: (ctx: SafeI32Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeI32`.
	 * @param ctx the parse tree
	 */
	exitSafeI32?: (ctx: SafeI32Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeI64`.
	 * @param ctx the parse tree
	 */
	enterSafeI64?: (ctx: SafeI64Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeI64`.
	 * @param ctx the parse tree
	 */
	exitSafeI64?: (ctx: SafeI64Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeI128`.
	 * @param ctx the parse tree
	 */
	enterSafeI128?: (ctx: SafeI128Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeI128`.
	 * @param ctx the parse tree
	 */
	exitSafeI128?: (ctx: SafeI128Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeI256`.
	 * @param ctx the parse tree
	 */
	enterSafeI256?: (ctx: SafeI256Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeI256`.
	 * @param ctx the parse tree
	 */
	exitSafeI256?: (ctx: SafeI256Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeI384`.
	 * @param ctx the parse tree
	 */
	enterSafeI384?: (ctx: SafeI384Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeI384`.
	 * @param ctx the parse tree
	 */
	exitSafeI384?: (ctx: SafeI384Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeI512`.
	 * @param ctx the parse tree
	 */
	enterSafeI512?: (ctx: SafeI512Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeI512`.
	 * @param ctx the parse tree
	 */
	exitSafeI512?: (ctx: SafeI512Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeU8`.
	 * @param ctx the parse tree
	 */
	enterSafeU8?: (ctx: SafeU8Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeU8`.
	 * @param ctx the parse tree
	 */
	exitSafeU8?: (ctx: SafeU8Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeU16`.
	 * @param ctx the parse tree
	 */
	enterSafeU16?: (ctx: SafeU16Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeU16`.
	 * @param ctx the parse tree
	 */
	exitSafeU16?: (ctx: SafeU16Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeU32`.
	 * @param ctx the parse tree
	 */
	enterSafeU32?: (ctx: SafeU32Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeU32`.
	 * @param ctx the parse tree
	 */
	exitSafeU32?: (ctx: SafeU32Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeU64`.
	 * @param ctx the parse tree
	 */
	enterSafeU64?: (ctx: SafeU64Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeU64`.
	 * @param ctx the parse tree
	 */
	exitSafeU64?: (ctx: SafeU64Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeU128`.
	 * @param ctx the parse tree
	 */
	enterSafeU128?: (ctx: SafeU128Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeU128`.
	 * @param ctx the parse tree
	 */
	exitSafeU128?: (ctx: SafeU128Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeU256`.
	 * @param ctx the parse tree
	 */
	enterSafeU256?: (ctx: SafeU256Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeU256`.
	 * @param ctx the parse tree
	 */
	exitSafeU256?: (ctx: SafeU256Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeU384`.
	 * @param ctx the parse tree
	 */
	enterSafeU384?: (ctx: SafeU384Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeU384`.
	 * @param ctx the parse tree
	 */
	exitSafeU384?: (ctx: SafeU384Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safeU512`.
	 * @param ctx the parse tree
	 */
	enterSafeU512?: (ctx: SafeU512Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safeU512`.
	 * @param ctx the parse tree
	 */
	exitSafeU512?: (ctx: SafeU512Context) => void;

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
	 * Enter a parse tree produced by `TransactionManifestParser.struct`.
	 * @param ctx the parse tree
	 */
	enterStruct?: (ctx: StructContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.struct`.
	 * @param ctx the parse tree
	 */
	exitStruct?: (ctx: StructContext) => void;

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
	 * Enter a parse tree produced by `TransactionManifestParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;

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
	 * Enter a parse tree produced by `TransactionManifestParser.nonFungible_id`.
	 * @param ctx the parse tree
	 */
	enterNonFungible_id?: (ctx: NonFungible_idContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.nonFungible_id`.
	 * @param ctx the parse tree
	 */
	exitNonFungible_id?: (ctx: NonFungible_idContext) => void;

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
	 * Enter a parse tree produced by `TransactionManifestParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

