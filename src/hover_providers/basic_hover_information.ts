// TODO: Find a better way to have markdown in a typescript project.
'use strict';

import { TokenKind } from "./hover_provider";

export const assertWorktopContains: string = [
	'`ASSERT_WORKTOP_CONTAINS` is a transaction manifest instruction that asserts that the transaction worktop contains any of',
	'a specific resource address. If none of that resource is present in the transaction worktop, then the transaction fails ',
	'atomically.',
	'',
	'# Arguments',
	'',
	'1. `ResourceAddress`: The resource address to assert that they exist on the transaction worktop.',
	'',
	'# Example',
	'',
	'```rtm',
	'ASSERT_WORKTOP_CONTAINS',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag");',
	'```'
].join('\n');

export const assertWorktopContainsByAmount: string = [
	'`ASSERT_WORKTOP_CONTAINS_BY_AMOUNT` is a transaction manifest instruction that asserts that the transaction worktop ',
	'contains a specific amount a specific resource address. If the specified amount is not present in the transaction ',
	'worktop, then the transaction fails atomically.',
	'',
	'# Arguments',
	'',
	'1. `Decimal`: The amount of the resource to assert that it exist in the transaction worktop. ',
	'2. `ResourceAddress`: The resource address to assert that they exist on the transaction worktop.',
	'',
	'# Example',
	'',
	'```rtm',
	'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT',
	'    Decimal("12")',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag");',
	'```'
].join('\n');

export const assertWorktopContainsByIds: string = [
	'`ASSERT_WORKTOP_CONTAINS_BY_IDS` is a transaction manifest instruction that asserts that the transaction worktop ',
	'contains a specific `NonFungibleIds` of a specific resource address. If the specified amount is not present in the ',
	'transaction worktop, then the transaction fails atomically.',
	'',
	'# Arguments',
	'',
	'1. `Set<NonFungibleIds>`: A set of `NonFungibleId`s to take from the transaction worktop.',
	'2. `ResourceAddress`: The resource address to take from the worktop and into a bucket.',
	'3. `Bucket`: A named bucket that the resources will be put in.',
	'',
	'# Example',
	'',
	'```rtm',
	'ASSERT_WORKTOP_CONTAINS_BY_IDS',
	'    Set<NonFungibleId>(NonFungibleId("0905000000"), NonFungibleId("0907000000"))',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag");',
	'```'
].join('\n');

export const callFunction: string = [
	'`CALL_FUNCTION` is a transaction manifest instruction that allows you to call a specific function on a specific blueprint',
	'in a specific package. The package is selected through a `PackageAddress` while the blueprint and method are specified ',
	'through a string of their respective names.',
	'',
	'# Arguments',
	'',
	'1. `PackageAddress`: This argument specifies the address of the package where the blueprint lives.',
	'2. `String`: A string of the blueprint name',
	'3. `String`: A string of the function name',
	'4. Arguments: The last argument(s) is any variable number of arguments.',
	'',
	'# Returns',
	'',
	'1. `Bucket`s: An optional return for functions that return a bucket when called. When a bucket is returned, it goes to ',
	'the transaction worktop. ',
	'2. `Proof`s: An optional return for functions that return a proof when called. When a proof is returned, it goes to the',
	'transaction worktop. ',
	'',
	'# Example',
	'',
	'```rtm',
	'CALL_FUNCTION',
	'    PackageAddress("package_sim1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqsnznk7n")',
	'    "Radiswap"',
	'    "instantiate_liquidity_pool"',
	'    Bucket("xrd_bucket")',
	'    Bucket("usd_bucket");',
	'```'
].join('\n');

export const callMethod: string = [
	'`CALL_METHOD` is a transaction manifest instruction that allows you to call a specific method on a specific component. ',
	'',
	'# Arguments',
	'',
	'1. `ComponentAddress`: The first argument to this instruction is the address of the component where the method lives.',
	'2. `String`: A string of the name of the method to call',
	'3. Arguments: The last argument(s) is any variable number of arguments.',
	'',
	'# Returns',
	'',
	'1. `Bucket`s: An optional return for methods that return a bucket when called. When a bucket is returned, it goes to the',
	'transaction worktop. ',
	'2. `Proof`s: An optional return for methods that return a proof when called. When a proof is returned, it goes to the',
	'transaction worktop. ',
	'',
	'# Example',
	'',
	'```rtm',
	'CALL_METHOD',
	'    ComponentAddress("component_sim1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqgyhcl2")',
	'    "withdraw"',
	'    Decimal("100")',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag");',
	'```'
].join('\n');

export const callMethodWithAllResources: string = [
	'`CALL_METHOD_WITH_ALL_RESOURCES` is an instruction that calls a method with all of the resources that are currently in ',
	'the transaction worktop leaving no resources or buckets behind in the transaction worktop.',
	'',
	'# Arguments',
	'',
	'1. `ComponentAddress`: The first argument to this instruction is the address of the component where the method lives.',
	'2. `String`: A string of the name of the method to call',
	'',
	'# Returns',
	'',
	'1. `Bucket`s: An optional return for methods that return a bucket when called. When a bucket is returned, it goes to the',
	'transaction worktop. ',
	'2. `Proof`s: An optional return for methods that return a proof when called. When a proof is returned, it goes to the',
	'transaction worktop. ',
	'',
	'# Example',
	'',
	'```rtm',
	'CALL_METHOD_WITH_ALL_RESOURCES',
	'    ComponentAddress("component_sim1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqgyhcl2")',
	'    "deposit_batch";',
	'```',
	'',
	'# Note',
	'',
	'In previous version of Scrypto (0.1 - 0.4) this instruction dropped all proofs when called, this is no longer the case',
	'as of 0.5.0 where this has been split into two instructions:',
	'',
	'1. `DROP_ALL_PROOFS`: Drops all of the proofs in the auth zone and the transaction worktop.',
	'2. `CALL_METHOD_WITH_ALL_RESOURCES`: Calls a method with all of the resources in the transaction worktop.',
	'',
	'Internally, the instruction constructs a `Vec<Bucket>`, so, any method that takes a `Vec<Bucket>` can be called with',
	'this instruction.'
].join('\n');

export const clearAuthZone: string = [
	'`CLEAR_AUTH_ZONE` is a transaction manifest instruction that clears the auth zone off any proofs that are currently ',
	'there.',
	'',
	'# Example',
	'',
	'```rtm',
	'CLEAR_AUTH_ZONE;',
	'```'
].join('\n');

export const cloneProof: string = [
	'`CLONE_PROOF` is a transaction manifest instruction that allows you to create a copy of a proof that you already have. ',
	'',
	'# Arguments',
	'',
	'1. `Proof`: The proof to clone.',
	'2. `Proof`: The cloned proof.',
	'',
	'# Example',
	'',
	'```rtm',
	'CLONE_PROOF',
	'    Proof("original_proof");',
	'    Proof("cloned_proof");',
	'```'
].join('\n');

export const createProofFromAuthZone: string = [
	'`CREATE_PROOF_FROM_AUTH_ZONE` is a transaction manifest instruction that allows you to create a proof from the auth zone',
	'of all resources with a specified resource address.',
	'',
	'# Arguments',
	'',
	'1. `ResourceAddress`: The resource address to create a proof from. ',
	'2. `Proof`: A named proof that the created proof will be called.',
	'',
	'# Example',
	'',
	'```rtm',
	'CREATE_PROOF_FROM_AUTH_ZONE',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag")',
	'    Proof("my_proof");',
	'```'
].join('\n');

export const createProofFromAuthZoneByAmount: string = [
	'`CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT` is a transaction manifest instruction that allows you to create a proof from the ',
	'auth zone of a specific amount of a specific resource address.',
	'',
	'# Arguments',
	'',
	'1. `Decimal`: A decimal of the amount of resources to create a proof from.',
	'1. `ResourceAddress`: The resource address to create a proof from. ',
	'2. `Proof`: A named proof that the created proof will be called.',
	'',
	'# Example',
	'',
	'```rtm',
	'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT',
	'    Decimal("10")',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag")',
	'    Proof("my_proof");',
	'```'
].join('\n');

export const createProofFromAuthZoneByIds: string = [
	'`CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS` is a transaction manifest instruction that allows you to create a proof from the ',
	'auth zone of a specific `NonFungibleId`s of a specific resource address.',
	'',
	'# Arguments',
	'',
	'1. `Set<NonFungibleIds>`: A set of `NonFungibleId`s to take from the transaction worktop.',
	'1. `ResourceAddress`: The resource address to create a proof from. ',
	'2. `Proof`: A named proof that the created proof will be called.',
	'',
	'# Example',
	'',
	'```rtm',
	'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS',
	'    Set<NonFungibleId>(NonFungibleId("0905000000"), NonFungibleId("0907000000"))',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag")',
	'    Proof("my_proof");',
	'```'
].join('\n');

export const dropAllProofs: string = [
	'`DROP_ALL_PROOFS` is a transaction manifest instruction that allows you to drop all of the proofs in the transaction ',
	'worktop and the auth zone. This instruction is useful to call before performing a `CALL_METHOD_WITH_ALL_RESOURCES` ',
	'as it ensures that there are buckets with locked illiquid amounts.',
	'',
	'# Example',
	'',
	'```rtm',
	'DROP_ALL_PROOFS;',
	'```'
].join('\n');

export const dropProof: string = [
	'`DROP_PROOF` is a transaction manifest instruction that allows you to drop a specific proof.',
	'',
	'# Arguments',
	'',
	'1. `Proof`: The proof to drop.',
	'',
	'# Example',
	'',
	'```rtm',
	'DROP_PROOF',
	'    Proof("proof_to_drop");',
	'```'
].join('\n');

export const popFromAuthZone: string = [
	'`POP_FROM_AUTH_ZONE` is a transaction manifest instruction that allows you to pop a proof from the auth zone and into a ',
	'named proof. If there are proofs in the auth zone, then this instruction fails.',
	'',
	'# Arguments',
	'',
	'1. `Proof`: A named proof which the will be the name of the proof once its popped from the auth zone stack.',
	'',
	'# Example',
	'',
	'```rtm',
	'POP_FROM_AUTH_ZONE',
	'    Proof("my_proof");',
	'```'
].join('\n');

export const publishPackage: string = [
	'`PUBLISH_PACKAGE` is a transaction manifest instruction that allows you to publish a package given the WASM binary of ',
	'the package.',
	'',
	'# Arguments',
	'',
	'1. `Bytes`: A bytes object of the package WASM binary.',
	'',
	'# Example',
	'',
	'```rtm',
	'PUBLISH_PACKAGE',
	'    Bytes("10020000003007c00000000061736d010000000405017001010105030100100619037f01418080c0000b7f00418080c0000b7f00418080c0000b072503066d656d6f727902000a5f5f646174615f656e6403010b5f5f686561705f6261736503020019046e616d65071201000f5f5f737461636b5f706f696e746572004d0970726f64756365727302086c616e6775616765010452757374000c70726f6365737365642d6279010572757374631d312e35392e30202839643162323130366520323032322d30322d323329320c1000000000");',
	'```'
].join('\n');

export const pushToAuthZone: string = [
	'`PUSH_TO_AUTH_ZONE` is a transaction manifest instruction that allows you to push a proof from a named proof and into ',
	'the auth zone. ',
	'',
	'# Arguments',
	'',
	'1. `Proof`: A proof to push onto the auth zone.',
	'',
	'# Example',
	'',
	'```rtm',
	'PUSH_TO_AUTH_ZONE',
	'    Proof("my_proof");',
	'```'
].join('\n');

export const returnToWorktop: string = [
	'`RETURN_TO_WORKTOP` is a transaction manifest instruction that allows you to return a bucket to the transaction worktop.',
	'',
	'# Arguments',
	'',
	'1. `Bucket`: A named bucket to put back into the transaction worktop.',
	'',
	'# Example',
	'',
	'```rtm',
	'RETURN_TO_WORKTOP',
	'    Bucket("my_bucket");',
	'```'
].join('\n');

export const takeFromWorktop: string = [
	'`TAKE_FROM_WORKTOP` is a transaction manifest instruction that allows you to take all of a specific resource address ',
	'from the transaction worktop and into a bucket.',
	'',
	'# Arguments',
	'',
	'1. `ResourceAddress`: The resource address to take from the worktop and into a bucket.',
	'2. `Bucket`: A named bucket that the resources will be put in.',
	'',
	'# Example',
	'',
	'```rtm',
	'TAKE_FROM_WORKTOP',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag")',
	'    Bucket("my_bucket");',
	'```'
].join('\n');

export const takeFromWorktopByAmount: string = [
	'`TAKE_FROM_WORKTOP_BY_AMOUNT` is a transaction manifest instruction that allows you to take a specific amount of ',
	'specific resource address from the transaction worktop and into a bucket.',
	'',
	'# Arguments',
	'',
	'1. `Decimal`: A decimal representing the amount of the resource to take from the worktop.',
	'2. `ResourceAddress`: The resource address to take from the worktop and into a bucket.',
	'3. `Bucket`: A named bucket that the resources will be put in.',
	'',
	'# Example',
	'',
	'```rtm',
	'TAKE_FROM_WORKTOP',
	'    Decimal("12")',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag")',
	'    Bucket("my_bucket");',
	'```'
].join('\n');

export const takeFromWorktopByIds: string = [
	'`TAKE_FROM_WORKTOP_BY_IDS` is a transaction manifest instruction that allows you to take specific resources with specific',
	'`NonFungibleId`s from the transaction worktop and into a bucket.',
	'',
	'# Arguments',
	'',
	'1. `Set<NonFungibleIds>`: A set of `NonFungibleId`s to take from the transaction worktop.',
	'2. `ResourceAddress`: The resource address to take from the worktop and into a bucket.',
	'3. `Bucket`: A named bucket that the resources will be put in.',
	'',
	'# Example',
	'',
	'```rtm',
	'TAKE_FROM_WORKTOP_BY_IDS',
	'    Set<NonFungibleId>(NonFungibleId("0905000000"), NonFungibleId("0907000000"))',
	'    ResourceAddress("resource_sim1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzqu57yag")',
	'    Bucket("my_bucket");',
	'```'
].join('\n');