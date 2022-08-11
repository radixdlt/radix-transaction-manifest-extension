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
import { Safe_i8Context } from "./TransactionManifestParser";
import { Safe_i16Context } from "./TransactionManifestParser";
import { Safe_i32Context } from "./TransactionManifestParser";
import { Safe_i64Context } from "./TransactionManifestParser";
import { Safe_i128Context } from "./TransactionManifestParser";
import { Safe_i256Context } from "./TransactionManifestParser";
import { Safe_i384Context } from "./TransactionManifestParser";
import { Safe_i512Context } from "./TransactionManifestParser";
import { Safe_u8Context } from "./TransactionManifestParser";
import { Safe_u16Context } from "./TransactionManifestParser";
import { Safe_u32Context } from "./TransactionManifestParser";
import { Safe_u64Context } from "./TransactionManifestParser";
import { Safe_u128Context } from "./TransactionManifestParser";
import { Safe_u256Context } from "./TransactionManifestParser";
import { Safe_u384Context } from "./TransactionManifestParser";
import { Safe_u512Context } from "./TransactionManifestParser";
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
import { Precise_decimalContext } from "./TransactionManifestParser";
import { Package_addressContext } from "./TransactionManifestParser";
import { Component_addressContext } from "./TransactionManifestParser";
import { Resource_addressContext } from "./TransactionManifestParser";
import { HashContext } from "./TransactionManifestParser";
import { BucketContext } from "./TransactionManifestParser";
import { ProofContext } from "./TransactionManifestParser";
import { Non_fungible_idContext } from "./TransactionManifestParser";
import { Non_fungible_addressContext } from "./TransactionManifestParser";
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
	 * Enter a parse tree produced by `TransactionManifestParser.safe_i8`.
	 * @param ctx the parse tree
	 */
	enterSafe_i8?: (ctx: Safe_i8Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_i8`.
	 * @param ctx the parse tree
	 */
	exitSafe_i8?: (ctx: Safe_i8Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_i16`.
	 * @param ctx the parse tree
	 */
	enterSafe_i16?: (ctx: Safe_i16Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_i16`.
	 * @param ctx the parse tree
	 */
	exitSafe_i16?: (ctx: Safe_i16Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_i32`.
	 * @param ctx the parse tree
	 */
	enterSafe_i32?: (ctx: Safe_i32Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_i32`.
	 * @param ctx the parse tree
	 */
	exitSafe_i32?: (ctx: Safe_i32Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_i64`.
	 * @param ctx the parse tree
	 */
	enterSafe_i64?: (ctx: Safe_i64Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_i64`.
	 * @param ctx the parse tree
	 */
	exitSafe_i64?: (ctx: Safe_i64Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_i128`.
	 * @param ctx the parse tree
	 */
	enterSafe_i128?: (ctx: Safe_i128Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_i128`.
	 * @param ctx the parse tree
	 */
	exitSafe_i128?: (ctx: Safe_i128Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_i256`.
	 * @param ctx the parse tree
	 */
	enterSafe_i256?: (ctx: Safe_i256Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_i256`.
	 * @param ctx the parse tree
	 */
	exitSafe_i256?: (ctx: Safe_i256Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_i384`.
	 * @param ctx the parse tree
	 */
	enterSafe_i384?: (ctx: Safe_i384Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_i384`.
	 * @param ctx the parse tree
	 */
	exitSafe_i384?: (ctx: Safe_i384Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_i512`.
	 * @param ctx the parse tree
	 */
	enterSafe_i512?: (ctx: Safe_i512Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_i512`.
	 * @param ctx the parse tree
	 */
	exitSafe_i512?: (ctx: Safe_i512Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_u8`.
	 * @param ctx the parse tree
	 */
	enterSafe_u8?: (ctx: Safe_u8Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_u8`.
	 * @param ctx the parse tree
	 */
	exitSafe_u8?: (ctx: Safe_u8Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_u16`.
	 * @param ctx the parse tree
	 */
	enterSafe_u16?: (ctx: Safe_u16Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_u16`.
	 * @param ctx the parse tree
	 */
	exitSafe_u16?: (ctx: Safe_u16Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_u32`.
	 * @param ctx the parse tree
	 */
	enterSafe_u32?: (ctx: Safe_u32Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_u32`.
	 * @param ctx the parse tree
	 */
	exitSafe_u32?: (ctx: Safe_u32Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_u64`.
	 * @param ctx the parse tree
	 */
	enterSafe_u64?: (ctx: Safe_u64Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_u64`.
	 * @param ctx the parse tree
	 */
	exitSafe_u64?: (ctx: Safe_u64Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_u128`.
	 * @param ctx the parse tree
	 */
	enterSafe_u128?: (ctx: Safe_u128Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_u128`.
	 * @param ctx the parse tree
	 */
	exitSafe_u128?: (ctx: Safe_u128Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_u256`.
	 * @param ctx the parse tree
	 */
	enterSafe_u256?: (ctx: Safe_u256Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_u256`.
	 * @param ctx the parse tree
	 */
	exitSafe_u256?: (ctx: Safe_u256Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_u384`.
	 * @param ctx the parse tree
	 */
	enterSafe_u384?: (ctx: Safe_u384Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_u384`.
	 * @param ctx the parse tree
	 */
	exitSafe_u384?: (ctx: Safe_u384Context) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.safe_u512`.
	 * @param ctx the parse tree
	 */
	enterSafe_u512?: (ctx: Safe_u512Context) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.safe_u512`.
	 * @param ctx the parse tree
	 */
	exitSafe_u512?: (ctx: Safe_u512Context) => void;

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
	 * Enter a parse tree produced by `TransactionManifestParser.precise_decimal`.
	 * @param ctx the parse tree
	 */
	enterPrecise_decimal?: (ctx: Precise_decimalContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.precise_decimal`.
	 * @param ctx the parse tree
	 */
	exitPrecise_decimal?: (ctx: Precise_decimalContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.package_address`.
	 * @param ctx the parse tree
	 */
	enterPackage_address?: (ctx: Package_addressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.package_address`.
	 * @param ctx the parse tree
	 */
	exitPackage_address?: (ctx: Package_addressContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.component_address`.
	 * @param ctx the parse tree
	 */
	enterComponent_address?: (ctx: Component_addressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.component_address`.
	 * @param ctx the parse tree
	 */
	exitComponent_address?: (ctx: Component_addressContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.resource_address`.
	 * @param ctx the parse tree
	 */
	enterResource_address?: (ctx: Resource_addressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.resource_address`.
	 * @param ctx the parse tree
	 */
	exitResource_address?: (ctx: Resource_addressContext) => void;

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
	 * Enter a parse tree produced by `TransactionManifestParser.non_fungible_id`.
	 * @param ctx the parse tree
	 */
	enterNon_fungible_id?: (ctx: Non_fungible_idContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.non_fungible_id`.
	 * @param ctx the parse tree
	 */
	exitNon_fungible_id?: (ctx: Non_fungible_idContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionManifestParser.non_fungible_address`.
	 * @param ctx the parse tree
	 */
	enterNon_fungible_address?: (ctx: Non_fungible_addressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.non_fungible_address`.
	 * @param ctx the parse tree
	 */
	exitNon_fungible_address?: (ctx: Non_fungible_addressContext) => void;

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

