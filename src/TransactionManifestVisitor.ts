// Generated from src/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ManifestContext } from "./TransactionManifestParser";
import { ManifestInstructionContext } from "./TransactionManifestParser";
import { U8Context } from "./TransactionManifestParser";
import { U16Context } from "./TransactionManifestParser";
import { U32Context } from "./TransactionManifestParser";
import { U64Context } from "./TransactionManifestParser";
import { U128Context } from "./TransactionManifestParser";
import { I8Context } from "./TransactionManifestParser";
import { I16Context } from "./TransactionManifestParser";
import { I32Context } from "./TransactionManifestParser";
import { I64Context } from "./TransactionManifestParser";
import { I128Context } from "./TransactionManifestParser";
import { SimpleStringContext } from "./TransactionManifestParser";
import { ResourceAddressContext } from "./TransactionManifestParser";
import { ComponentAddressContext } from "./TransactionManifestParser";
import { PackageAddressContext } from "./TransactionManifestParser";
import { BucketContext } from "./TransactionManifestParser";
import { ProofContext } from "./TransactionManifestParser";
import { DecimalContext } from "./TransactionManifestParser";
import { SetContext } from "./TransactionManifestParser";
import { VecContext } from "./TransactionManifestParser";
import { ListContext } from "./TransactionManifestParser";
import { MapContext } from "./TransactionManifestParser";
import { NonFungibleIdsSetContext } from "./TransactionManifestParser";
import { NonFungibleIdContext } from "./TransactionManifestParser";
import { BytesContext } from "./TransactionManifestParser";
import { ValueContext } from "./TransactionManifestParser";
import { TypeContext } from "./TransactionManifestParser";


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
	 * Visit a parse tree produced by `TransactionManifestParser.simpleString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleString?: (ctx: SimpleStringContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.resourceAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceAddress?: (ctx: ResourceAddressContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.componentAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentAddress?: (ctx: ComponentAddressContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.packageAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageAddress?: (ctx: PackageAddressContext) => Result;

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
	 * Visit a parse tree produced by `TransactionManifestParser.decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal?: (ctx: DecimalContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet?: (ctx: SetContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.vec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVec?: (ctx: VecContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.nonFungibleIdsSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonFungibleIdsSet?: (ctx: NonFungibleIdsSetContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.nonFungibleId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonFungibleId?: (ctx: NonFungibleIdContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.bytes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBytes?: (ctx: BytesContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionManifestParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
}

