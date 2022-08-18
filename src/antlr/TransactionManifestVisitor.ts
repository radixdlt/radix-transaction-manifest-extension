// Generated from src/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { NonFungibleIdContext } from "./TransactionManifestParser";
import { NonFungibleAddressContext } from "./TransactionManifestParser";
import { BytesContext } from "./TransactionManifestParser";
import { TypeContext } from "./TransactionManifestParser";
import { ValueContext } from "./TransactionManifestParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TransactionManifestParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TransactionManifestVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TransactionManifestParser.manifest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManifest?: (ctx: ManifestContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.manifestInstruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManifestInstruction?: (ctx: ManifestInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.i8`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitI8?: (ctx: I8Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.i16`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitI16?: (ctx: I16Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.i32`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitI32?: (ctx: I32Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.i64`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitI64?: (ctx: I64Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.i128`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitI128?: (ctx: I128Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.u8`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitU8?: (ctx: U8Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.u16`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitU16?: (ctx: U16Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.u32`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitU32?: (ctx: U32Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.u64`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitU64?: (ctx: U64Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.u128`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitU128?: (ctx: U128Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.struct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct?: (ctx: StructContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.enum_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_?: (ctx: Enum_Context) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption?: (ctx: OptionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.some`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSome?: (ctx: SomeContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.none`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNone?: (ctx: NoneContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.ok`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOk?: (ctx: OkContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.err`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErr?: (ctx: ErrContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.tuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple?: (ctx: TupleContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet?: (ctx: SetContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal?: (ctx: DecimalContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.preciseDecimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreciseDecimal?: (ctx: PreciseDecimalContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.packageAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageAddress?: (ctx: PackageAddressContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.componentAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentAddress?: (ctx: ComponentAddressContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.resourceAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceAddress?: (ctx: ResourceAddressContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.hash`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHash?: (ctx: HashContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.bucket`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBucket?: (ctx: BucketContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.proof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProof?: (ctx: ProofContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.nonFungibleId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonFungibleId?: (ctx: NonFungibleIdContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.nonFungibleAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonFungibleAddress?: (ctx: NonFungibleAddressContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.bytes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBytes?: (ctx: BytesContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

