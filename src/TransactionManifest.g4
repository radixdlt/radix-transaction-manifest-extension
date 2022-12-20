// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at

//   http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.    

grammar TransactionManifest;

/*
 * Parser Grammar
 */

manifest    
    :   manifestInstruction* EOF
    ;

manifestInstruction
        : callFunction
        | callNativeFunction
        | callMethod
        | callNativeMethod
        | takeFromWorktop
        | takeFromWorktopByAmount
        | takeFromWorktopByIds
        | returnToWorktop
        | assertWorktopContains
        | assertWorktopContainsByAmount
        | assertWorktopContainsByIds
        | popFromAuthZone
        | pushToAuthZone
        | createProofFromAuthZone
        | createProofFromAuthZoneByAmount
        | createProofFromAuthZoneByIds
        | createProofFromBucket
        | cloneProof
        | dropProof
        | dropAllProofs
        | clearAuthZone
        | publishPackageWithOwner
        | burnBucket
        | mintFungible
        | createResource
        ;

// Instructions

callFunction : CALL_FUNCTION
        packageAddress      // Address of the package
        string              // blueprint name
        string              // function name
        value*              // arguments
        SEMICOLON ;

callNativeFunction : CALL_NATIVE_FUNCTION
        string              // blueprint name
        string              // function name
        value*              // arguments
        SEMICOLON ;

callMethod : CALL_METHOD
        (componentAddress | component)    // Address of the component
        string              // method name
        value*              // arguments
        SEMICOLON ;

callNativeMethod : CALL_NATIVE_METHOD
        re_node_id          // id of the node to call
        string              // method name
        value*              // arguments
        SEMICOLON ;

takeFromWorktop : TAKE_FROM_WORKTOP
        resourceAddress     // The resource address to take
        bucket              // The bucket that the resource will go into
        SEMICOLON ; 
takeFromWorktopByAmount : TAKE_FROM_WORKTOP_BY_AMOUNT
        decimal             // Amount to take
        resourceAddress     // The resource address to take
        bucket              // The bucket that the resource will go into
        SEMICOLON ; 
takeFromWorktopByIds : TAKE_FROM_WORKTOP_BY_IDS
        array               // Array of IDs to take
        resourceAddress     // The resource address to take
        bucket              // The bucket that the resource will go into
        SEMICOLON ; 

returnToWorktop : RETURN_TO_WORKTOP
        bucket              // The bucket to return
        SEMICOLON ; 

assertWorktopContains : ASSERT_WORKTOP_CONTAINS
        resourceAddress     // The resource address to assert
        SEMICOLON ; 
assertWorktopContainsByAmount : ASSERT_WORKTOP_CONTAINS_BY_AMOUNT
        decimal             // Amount to assert
        resourceAddress     // The resource address to assert
        SEMICOLON ; 
assertWorktopContainsByIds : ASSERT_WORKTOP_CONTAINS_BY_IDS
        array               // Array of IDs to assert
        resourceAddress     // The resource address to assert
        SEMICOLON ; 

popFromAuthZone : POP_FROM_AUTH_ZONE
        proof               // A named proof where the popped proof goes
        SEMICOLON ; 
pushToAuthZone : PUSH_TO_AUTH_ZONE
        proof               // The proof to push to the auth zone
        SEMICOLON ; 

createProofFromAuthZone : CREATE_PROOF_FROM_AUTH_ZONE
        resourceAddress     // The resource address to take
        proof               // The named proof that the created proof will be stored in
        SEMICOLON ; 
createProofFromAuthZoneByAmount : CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT
        decimal             // Amount to take
        resourceAddress     // The resource address to take
        proof               // The named proof that the created proof will be stored in
        SEMICOLON ; 
createProofFromAuthZoneByIds : CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS
        array               // Array of IDs to take
        resourceAddress     // The resource address to take
        proof               // The named proof that the created proof will be stored in
        SEMICOLON ;

createProofFromBucket : CREATE_PROOF_FROM_BUCKET
        bucket              // The bucket to create a proof from
        proof               // The named proof that the proof will be stored in
        SEMICOLON ; 

cloneProof : CLONE_PROOF
        proof               // Proof to clone       
        proof               // Cloned proof
        SEMICOLON ; 
dropProof : DROP_PROOF
        proof               // Proof to drop
        SEMICOLON ;
dropAllProofs : DROP_ALL_PROOFS
        SEMICOLON ;
clearAuthZone : CLEAR_AUTHZONE
        SEMICOLON ;

publishPackageWithOwner : PUBLISH_PACKAGE_WITH_OWNER
        blob                // The blob corresponding to the package WASM
        blob                // The blob corresponding to the package ABI
        nonFungibleAddress  // Thhe non-fungible address of the owner
        SEMICOLON ; 

burnBucket : BURN_BUCKET
        bucket              // The bucket to burn
        SEMICOLON ; 

mintFungible : MINT_FUNGIBLE
        resourceAddress     // The resource address of the token to mint
        decimal             // The amount of the resource to mint
        SEMICOLON ; 

createResource : CREATE_RESOURCE
        enum_               // An enum representing the resource type.
        array               // A string, string HashMap of the metadata of the resource.
        array               // An enum, typle HashMap mapping the resource method name to a tuple of access rule and mutability.
        option?             // An optional enum field of the minting parameters when the resource is initially created.
        SEMICOLON ; 

// Argument types

unit                    :   '()' ;
bool                    :   BOOL_LITERAL ;
i8                      :   I8_LITERAL ;
i16                     :   I16_LITERAL ;
i32                     :   I32_LITERAL ;
i64                     :   I64_LITERAL ;
i128                    :   I128_LITERAL ;
u8                      :   U8_LITERAL ;
u16                     :   U16_LITERAL ;
u32                     :   U32_LITERAL ;
u64                     :   U64_LITERAL ;
u128                    :   U128_LITERAL ;
string                  :   STRING_LITERAL ;
enum_                   :   ENUM_TYPE OPEN_PARENTHESIS string (COMMA value)* CLOED_PARENTHESIS ;
option                  :   ( some | none ) ;
some                    :   'Some' OPEN_PARENTHESIS value CLOED_PARENTHESIS ;
none                    :   'None' ;
ok                      :   'Ok' OPEN_PARENTHESIS value CLOED_PARENTHESIS ;
err                     :   'Err' OPEN_PARENTHESIS value CLOED_PARENTHESIS ;
array                   :   ARRAY_TYPE LESS_THAN type GREATER_THAN (EMPTY_PARENTHESIS | OPEN_PARENTHESIS (value (COMMA value)*)? CLOED_PARENTHESIS) ;
tuple                   :   TUPLE_TYPE (EMPTY_PARENTHESIS | OPEN_PARENTHESIS (value (COMMA value)*)? CLOED_PARENTHESIS) ;
decimal                 :   DECIMAL_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
preciseDecimal          :   PRECISE_DECIMAL_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
packageAddress          :   PACKAGE_ADDRESS_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
componentAddress        :   COMPONENT_ADDRESS_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
resourceAddress         :   RESOURCE_ADDRESS_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
systemAddress           :   SYSTEM_ADDRESS_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
hash                    :   HASH_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
bytes                   :   BYTES_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
component               :   COMPONENT_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
vault                   :   VAULT_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
keyValueStore           :   KEY_VALUE_STORE_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
bucket                  :   BUCKET_TYPE OPEN_PARENTHESIS (STRING_LITERAL | U32_LITERAL ) CLOED_PARENTHESIS ;
proof                   :   PROOF_TYPE OPEN_PARENTHESIS (STRING_LITERAL | U32_LITERAL ) CLOED_PARENTHESIS ;
nonFungibleId           :   NON_FUNGIBLE_ID_TYPE OPEN_PARENTHESIS non_fungible_id_values CLOED_PARENTHESIS ; 
nonFungibleAddress      :   NON_FUNGIBLE_ADDRESS_TYPE OPEN_PARENTHESIS STRING_LITERAL COMMA non_fungible_id_values CLOED_PARENTHESIS ;
blob                    :   BLOB_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
ecdsaSecp256k1PublicKey :   ECDSA_SECP256K1_PUBLIC_KEY_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
ecdsaSecp256k1Signature :   ECDSA_SECP256K1_SIGNATURE_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
eddsaEd25519PublicKey   :   EDDSA_ED25519_PUBLIC_KEY_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
eddsaEd25519Signature   :   EDDSA_ED25519_SIGNATURE_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
expression              :   EXPRESSION_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;

type
    : UNIT_TYPE
    | BOOL_TYPE
    | I8_TYPE
    | I16_TYPE
    | I32_TYPE
    | I64_TYPE
    | I128_TYPE
    | U8_TYPE
    | U16_TYPE
    | U32_TYPE
    | U64_TYPE
    | U128_TYPE
    | STRING_TYPE
    | ENUM_TYPE
    | ARRAY_TYPE
    | TUPLE_TYPE
    | BYTES_TYPE
    | PACKAGE_ADDRESS_TYPE
    | COMPONENT_ADDRESS_TYPE
    | RESOURCE_ADDRESS_TYPE
    | SYSTEM_ADDRESS_TYPE
    | COMPONENT_TYPE
    | KEY_VALUE_STORE_TYPE
    | BUCKET_TYPE
    | PROOF_TYPE
    | VAULT_TYPE
    | EXPRESSION_TYPE
    | BLOB_TYPE
    | NON_FUNGIBLE_ADDRESS_TYPE
    | HASH_TYPE
    | ECDSA_SECP256K1_PUBLIC_KEY_TYPE
    | ECDSA_SECP256K1_SIGNATURE_TYPE
    | EDDSA_ED25519_PUBLIC_KEY_TYPE
    | EDDSA_ED25519_SIGNATURE_TYPE
    | DECIMAL_TYPE
    | PRECISE_DECIMAL_TYPE
    | NON_FUNGIBLE_ID_TYPE
    ;

non_fungible_id_values
    : u32
    | u64
    | u128
    | string
    | bytes
    ;

value
    : unit
    | bool
    | i8
    | i16
    | i32
    | i64
    | i128

    | u8
    | u16
    | u32
    | u64
    | u128
    
    | string
    
    | enum_
    
    | array
    | tuple
    
    | some
    | none
    | ok
    | err
    
    | bytes
    
    | packageAddress
    | componentAddress
    | resourceAddress
    | systemAddress
    
    | component
    | keyValueStore
    | bucket
    | proof
    | vault
    
    | expression
    | blob
    
    | nonFungibleId
    | nonFungibleAddress
    
    | hash
    | ecdsaSecp256k1PublicKey
    | ecdsaSecp256k1Signature
    | eddsaEd25519PublicKey
    | eddsaEd25519Signature
    
    | decimal
    | preciseDecimal
    ;

re_node_id
    : bucket
    | proof
    | authZoneStack
    | feeReserve
    | worktop
    | global
    | keyValueStore
    | nonFungibleStore
    | component
    | vault
    | resourceManager
    | package_
    | epochManager
    | clock
    ;

worktop             : 'Worktop' ;
authZoneStack       : 'AuthZoneStack' OPEN_PARENTHESIS U32_LITERAL CLOED_PARENTHESIS ;
feeReserve          : 'FeeReserve' OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
global              : 'Global' OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
nonFungibleStore    : 'NonFungibleStore' OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;                
resourceManager     : 'ResourceManager' OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;            
package_            : 'Package' OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;    
epochManager        : 'EpochManager' OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;            
clock               : 'Clock' OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;    


/*
 * Lexer Grammar
 */

BOOL_LITERAL                        : TRUE | FALSE ;
I8_LITERAL                          : NUMBER 'i8' ;
I16_LITERAL                         : NUMBER 'i16' ; 
I32_LITERAL                         : NUMBER 'i32' ; 
I64_LITERAL                         : NUMBER 'i64' ; 
I128_LITERAL                        : NUMBER 'i128' ; 
U8_LITERAL                          : NUMBER 'u8' ;
U16_LITERAL                         : NUMBER 'u16' ; 
U32_LITERAL                         : NUMBER 'u32' ; 
U64_LITERAL                         : NUMBER 'u64' ; 
U128_LITERAL                        : NUMBER 'u128' ; 

TRUE                                : 'true' ;
FALSE                               : 'false' ;

UNIT_TYPE                           : 'Unit' ;
BOOL_TYPE                           : 'Bool' ;
I8_TYPE                             : 'I8' ;
I16_TYPE                            : 'I16' ;
I32_TYPE                            : 'I32' ;
I64_TYPE                            : 'I64' ;
I128_TYPE                           : 'I128' ;
U8_TYPE                             : 'U8' ;
U16_TYPE                            : 'U16' ;
U32_TYPE                            : 'U32' ;
U64_TYPE                            : 'U64' ;
U128_TYPE                           : 'U128' ;
STRING_TYPE                         : 'String' ;
ENUM_TYPE                           : 'Enum' ;
ARRAY_TYPE                          : 'Array' ;
TUPLE_TYPE                          : 'Tuple' ;
BYTES_TYPE                          : 'Bytes' ;
PACKAGE_ADDRESS_TYPE                : 'PackageAddress' ;
COMPONENT_ADDRESS_TYPE              : 'ComponentAddress' ;
RESOURCE_ADDRESS_TYPE               : 'ResourceAddress' ;
SYSTEM_ADDRESS_TYPE                 : 'SystemAddress' ;
COMPONENT_TYPE                      : 'Component' ;
KEY_VALUE_STORE_TYPE                : 'KeyValueStore' ;
BUCKET_TYPE                         : 'Bucket' ;
PROOF_TYPE                          : 'Proof' ;
VAULT_TYPE                          : 'Vault' ;
EXPRESSION_TYPE                     : 'Expression' ;
BLOB_TYPE                           : 'Blob' ;
NON_FUNGIBLE_ADDRESS_TYPE           : 'NonFungibleAddress' ;
HASH_TYPE                           : 'Hash' ;
ECDSA_SECP256K1_PUBLIC_KEY_TYPE     : 'EcdsaSecp256K1PublicKey' ;
ECDSA_SECP256K1_SIGNATURE_TYPE      : 'EcdsaSecp256K1Signature' ;
EDDSA_ED25519_PUBLIC_KEY_TYPE       : 'EddsaEd25519PublicKey' ;
EDDSA_ED25519_SIGNATURE_TYPE        : 'EddsaEd25519Signature' ;
DECIMAL_TYPE                        : 'Decimal' ;
PRECISE_DECIMAL_TYPE                : 'PreciseDecimal' ;
NON_FUNGIBLE_ID_TYPE                : 'NonFungibleId' ;

// Punctuations

OPEN_PARENTHESIS                    : '(' ;
CLOED_PARENTHESIS                   : ')' ;
EMPTY_PARENTHESIS                   : '()' ;
LESS_THAN                           : '<' ;
GREATER_THAN                        : '>' ;
COMMA                               : ',' ;
SEMICOLON                           : ';' ;

// Instructions

TAKE_FROM_WORKTOP                   : 'TAKE_FROM_WORKTOP' ;
TAKE_FROM_WORKTOP_BY_AMOUNT         : 'TAKE_FROM_WORKTOP_BY_AMOUNT' ;
TAKE_FROM_WORKTOP_BY_IDS            : 'TAKE_FROM_WORKTOP_BY_IDS' ;

ASSERT_WORKTOP_CONTAINS             : 'ASSERT_WORKTOP_CONTAINS' ;
ASSERT_WORKTOP_CONTAINS_BY_AMOUNT   : 'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT' ;
ASSERT_WORKTOP_CONTAINS_BY_IDS      : 'ASSERT_WORKTOP_CONTAINS_BY_IDS' ;

RETURN_TO_WORKTOP                   : 'RETURN_TO_WORKTOP' ;

POP_FROM_AUTH_ZONE                  : 'POP_FROM_AUTH_ZONE' ;
PUSH_TO_AUTH_ZONE                   : 'PUSH_TO_AUTH_ZONE' ;
CLEAR_AUTHZONE                      : 'CLEAR_AUTHZONE' ;

CREATE_PROOF_FROM_AUTH_ZONE         : 'CREATE_PROOF_FROM_AUTH_ZONE' ;
CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT: 'CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT' ;
CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS  : 'CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS' ;

CREATE_PROOF_FROM_BUCKET            : 'CREATE_PROOF_FROM_BUCKET' ;
CLONE_PROOF                         : 'CLONE_PROOF' ;
DROP_PROOF                          : 'DROP_PROOF' ;
DROP_ALL_PROOFS                     : 'DROP_ALL_PROOFS' ;

CALL_FUNCTION                       : 'CALL_FUNCTION' ;
CALL_METHOD                         : 'CALL_METHOD' ;
CALL_NATIVE_FUNCTION                : 'CALL_NATIVE_FUNCTION' ;
CALL_NATIVE_METHOD                  : 'CALL_NATIVE_METHOD' ;

PUBLISH_PACKAGE_WITH_OWNER          : 'PUBLISH_PACKAGE_WITH_OWNER' ;

BURN_BUCKET                         : 'BURN_BUCKET' ;
MINT_FUNGIBLE                       : 'MINT_FUNGIBLE' ;
CREATE_RESOURCE                     : 'CREATE_RESOURCE' ;

// Primitive Definitions
STRING_LITERAL                      : '"' ('\\' ["\\] | ~["\\\r\n] | [_-] | ' ')* '"' ;

DIGIT                               : [0-9] ;
LETTER                              : [A-Za-z] ;

NUMBER                              : DIGIT+ ;

// The original specifications for the transaction manifest text representation states that whitespaces are considered
// to ' ' || '\t' || '\r' || '\n' characters. Comments are any lines beginnig in the '#' symbol. This means that this 
// is a legal symbol to use in strings, and in other places, but can not be used at the beginning of any instruction
// or non-comment line.
// For whitespaces, refer to: https://github.dev/radixdlt/radixdlt-scrypto/blob/0c1f75aafa62c5c419a380ec0e40e45b4bd674ef/transaction-manifest/src/lexer.rs#L167
// For comments, refer to: https://github.dev/radixdlt/radixdlt-scrypto/blob/0c1f75aafa62c5c419a380ec0e40e45b4bd674ef/transaction-manifest/src/lexer.rs#L167
WS                                  : [ \t\r\n]+ -> skip ;
COMMENT                             : '#' ~[\r\n\f]* -> skip ;