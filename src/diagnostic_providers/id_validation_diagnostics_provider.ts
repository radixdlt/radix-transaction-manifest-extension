"use strict";

import {
	BucketContext,
	CallFunctionContext,
	CallMethodContext,
	CallMethodWithAllResourcesContext,
	CloneProofContext,
	CreateProofFromAuthZoneByAmountContext,
	CreateProofFromAuthZoneByIdsContext,
	CreateProofFromAuthZoneContext,
	CreateProofFromBucketContext,
	DropAllProofsContext,
	DropProofContext,
	PopFromAuthZoneContext,
	ProofContext,
	PushToAuthZoneContext,
	ReturnToWorktopContext,
	TakeFromWorktopByAmountContext,
	TakeFromWorktopByIdsContext,
	TakeFromWorktopContext,
	TransactionManifestParser,
} from "../antlr/TransactionManifestParser";
import { TransactionManifestListener } from "../antlr/TransactionManifestListener";
import { TransactionManifestLexer } from "../antlr/TransactionManifestLexer";
import { CharStream, CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParseTree } from "antlr4ts/tree/ParseTree";

import DiagnosticsProvider from "./diagnostics_provider";
import * as vscode from "vscode";

type ScryptoObjectContext = BucketContext | ProofContext;

/**
 * A diagnostics provider that analyzes the movements of buckets and proofs throughout the manifest file.
 */
export default class IdValidationDiagnosticsProvider
	extends DiagnosticsProvider
	implements TransactionManifestListener
{
	scryptoObjectDefinitions: [ScryptoObject, ScryptoObjectContext][] = [];

	// =======================================
	// Required `DiagnosticProvider` Methods.
	// =======================================

	protected prepareDiagnostics(): void {
		let charStream: CharStream = CharStreams.fromString(
			this.document.getText()
		);
		let lexer: TransactionManifestLexer = new TransactionManifestLexer(
			charStream
		);
		let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
		let parser: TransactionManifestParser = new TransactionManifestParser(
			tokenStream
		);
		let tree = parser.manifest();
		ParseTreeWalker.DEFAULT.walk(this as ParseTreeListener, tree);

		// At this point, parsing and lexing has finished. Check if there are any remaining buckets and proofs that
		// have not been dealt with. If there is, then provide an error for those.
		for (var [scryptoObject, scryptoObjectContext] of this
			.scryptoObjectDefinitions) {
			if (scryptoObject.getType() === ScryptoObjectType.bucket) {
				this.addDiagnostic(
					scryptoObjectContext,
					"Dangling Bucket: This bucket is not deposited or used anywhere in the transaction and will lead the transaction to fail.",
					vscode.DiagnosticSeverity.Error
				);
			}
		}
	}

	// =========================================================
	// Method implementation from `TransactionManifestListener`
	// =========================================================

	enterTakeFromWorktop(context: TakeFromWorktopContext) {
		this.addNewObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterTakeFromWorktopByAmount(context: TakeFromWorktopByAmountContext) {
		this.addNewObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterTakeFromWorktopByIds(context: TakeFromWorktopByIdsContext) {
		this.addNewObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterReturnToWorktop(context: ReturnToWorktopContext) {
		this.removeObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterPopFromAuthZone(context: PopFromAuthZoneContext) {
		this.addNewObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterPushToAuthZone(context: PushToAuthZoneContext) {
		this.removeObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterCreateProofFromAuthZone(context: CreateProofFromAuthZoneContext) {
		this.addNewObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterCreateProofFromAuthZoneByAmount(
		context: CreateProofFromAuthZoneByAmountContext
	) {
		this.addNewObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterCreateProofFromAuthZoneByIds(
		context: CreateProofFromAuthZoneByIdsContext
	) {
		this.addNewObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterCreateProofFromBucket(context: CreateProofFromBucketContext) {
		let bucketContext: BucketContext = context.children![
			context.children!.length - 3
		] as BucketContext;
		let proofContext: ProofContext = context.children![
			context.children!.length - 2
		] as ProofContext;
		this.ensureExistence(bucketContext);
		this.addNewObject(proofContext);
	}

	enterCloneProof(context: CloneProofContext) {
		let originalProofContext: ProofContext = context.children![
			context.children!.length - 3
		] as ProofContext;
		let secondProofContext: ProofContext = context.children![
			context.children!.length - 2
		] as ProofContext;
		this.ensureExistence(originalProofContext);
		this.addNewObject(secondProofContext);
	}

	enterDropProof(context: DropProofContext) {
		this.removeObject(
			context.children![
				context.children!.length - 2
			] as ScryptoObjectContext
		);
	}

	enterDropAllProofs(_: DropAllProofsContext) {
		for (var proof of this.getProofs()) {
			this.removeObject(proof);
		}
	}

	enterCallMethodWithAllResources(_: CallMethodWithAllResourcesContext) {
		for (var bucket of this.getBuckets()) {
			this.removeObject(bucket);
		}
	}

	enterCallMethod(context: CallMethodContext) {
		this.handleCallMethodOrFunction(context);
	}

	enterCallFunction(context: CallFunctionContext) {
		this.handleCallMethodOrFunction(context);
	}

	// ==================================
	// Helper Methods and Internal Logic
	// ==================================

	/**
	 * Gets all of the `ProofContext`s that are currently available.
	 */
	private getProofs(): ProofContext[] {
		return this.scryptoObjectDefinitions
			.filter((x) => x[0].getType() === ScryptoObjectType.proof)
			.map((x) => x[1] as ProofContext);
	}

	/**
	 * Gets all of the `BucketContext`s that are currently available.
	 */
	private getBuckets(): BucketContext[] {
		return this.scryptoObjectDefinitions
			.filter((x) => x[0].getType() === ScryptoObjectType.bucket)
			.map((x) => x[1] as BucketContext);
	}

	/**
	 * Adds a new object. If an object with the same identifier is there, then this adds a diagnostic.
	 */
	private addNewObject(context: ScryptoObjectContext) {
		if (this.containsObject(context)) {
			this.addDiagnostic(
				context,
				"Repeated Object: A previous object with the same identifier already exists.",
				vscode.DiagnosticSeverity.Error
			);
			return;
		}
		this.scryptoObjectDefinitions.push([
			ScryptoObject.fromContext(context),
			context,
		]);
	}

	/**
	 * Removes an object if it exists. If not, then a diagnostic is added
	 */
	private removeObject(context: ScryptoObjectContext) {
		let currentObject: ScryptoObject = ScryptoObject.fromContext(context);
		let index: number = this.scryptoObjectDefinitions
			.map((x) => x[0].isEqual(currentObject))
			.indexOf(true);
		if (index === -1) {
			this.addDiagnostic(
				context,
				"Object Doesn't Exist: No object can be found that matches this identifier.",
				vscode.DiagnosticSeverity.Error
			);
			return;
		}
		this.scryptoObjectDefinitions.splice(index, 1);
	}

	/**
	 * Ensures that an object with a given context exists. If not, then a diagnostic message is added.
	 */
	private ensureExistence(context: ScryptoObjectContext) {
		if (!this.containsObject(context)) {
			this.addDiagnostic(
				context,
				"Object Doesn't Exist: No object can be found that matches this identifier.",
				vscode.DiagnosticSeverity.Error
			);
			return;
		}
	}

	/**
	 * Checks if an object exists that matches the identifier and type or not.
	 */
	private containsObject(context: ScryptoObjectContext): boolean {
		let currentObject: ScryptoObject = ScryptoObject.fromContext(context);
		return (
			this.scryptoObjectDefinitions
				.map((x) => x[0])
				.filter((x) => x.isEqual(currentObject)).length !== 0
		);
	}

	/**
	 * Handles the removal all of the buckets and proofs in call method and functions instructions.
	 */
	private handleCallMethodOrFunction(
		context: CallMethodContext | CallFunctionContext
	) {
		let children: ParseTree[] = context.children!;
		let flattenedChildren: ParseTree[] = flattenTree(children);
		for (var child of flattenedChildren) {
			if (
				child instanceof BucketContext ||
				child instanceof ProofContext
			) {
				this.removeObject(child);
			}
		}
	}
}

/**
 * Represents the type of the Scrypto object the ID Validator is operating on
 */
enum ScryptoObjectType {
	bucket,
	proof,
}

/**
 * Represents a ScryptoObjet which may either be a bucket or a proof.
 */
class ScryptoObject {
	private identifier: string | number;
	private type: ScryptoObjectType;

	constructor(identifier: string | number, type: ScryptoObjectType) {
		this.identifier = identifier;
		this.type = type;
	}

	static fromContext(context: BucketContext | ProofContext) {
		let type: ScryptoObjectType;
		if (context instanceof BucketContext) {
			type = ScryptoObjectType.bucket;
		} else if (context instanceof ProofContext) {
			type = ScryptoObjectType.proof;
		} else {
			throw new Error("Should never get here");
		}

		let identifier: string | number;
		let objectIdentifier: string = context.children![2].toString();
		if (objectIdentifier.includes('"')) {
			identifier = objectIdentifier.slice(1, -1);
		} else {
			identifier = parseInt(objectIdentifier.split("u32")[0]);
		}

		return new ScryptoObject(identifier, type);
	}

	toString(): string {
		let type: string;
		switch (this.type) {
			case ScryptoObjectType.bucket:
				type = "Bucket";
				break;
			case ScryptoObjectType.proof:
				type = "Proof";
				break;
			default:
				throw new Error("Should never be able to get here");
				break;
		}

		let identifier: string;
		if (typeof this.identifier === "number") {
			identifier = `${this.identifier}u32`;
		} else if (typeof this.identifier === "string") {
			identifier = `"${this.identifier}"`;
		} else {
			throw new Error("Should never be able to get here");
		}

		return `${type}(${identifier})`;
	}

	isEqual(other: ScryptoObject): boolean {
		return this.identifier === other.identifier && this.type === other.type;
	}

	getType(): ScryptoObjectType {
		return this.type;
	}

	getIdentifier(): string | number {
		return this.identifier;
	}
}

function flattenTree(tree: ParseTree[]): ParseTree[] {
	let flattened: ParseTree[] = [];

	for (var token of tree) {
		if (token instanceof BucketContext || token instanceof ProofContext) {
			flattened.push(token);
		}
		// @ts-ignore
		if (token.children) {
			// @ts-ignore
			flattened.push(...flattenTree(token.children!));
		} else {
			flattened.push(token);
		}
	}

	return flattened;
}
