// Generated from src/TransactionManifest.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `TransactionManifestParser.simpleString`.
	 * @param ctx the parse tree
	 */
	enterSimpleString?: (ctx: SimpleStringContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.simpleString`.
	 * @param ctx the parse tree
	 */
	exitSimpleString?: (ctx: SimpleStringContext) => void;

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
	 * Enter a parse tree produced by `TransactionManifestParser.vec`.
	 * @param ctx the parse tree
	 */
	enterVec?: (ctx: VecContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.vec`.
	 * @param ctx the parse tree
	 */
	exitVec?: (ctx: VecContext) => void;

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
	 * Enter a parse tree produced by `TransactionManifestParser.nonFungibleIdsSet`.
	 * @param ctx the parse tree
	 */
	enterNonFungibleIdsSet?: (ctx: NonFungibleIdsSetContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.nonFungibleIdsSet`.
	 * @param ctx the parse tree
	 */
	exitNonFungibleIdsSet?: (ctx: NonFungibleIdsSetContext) => void;

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
	 * Enter a parse tree produced by `TransactionManifestParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionManifestParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
}

