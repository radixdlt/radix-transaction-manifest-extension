grammar TransactionManifest;

/*
 * Parser Grammar
 */

manifest    
    :   manifestInstruction* EOF
    ;

manifestInstruction
    :   CALL_FUNCTION
            packageAddress      // Address of the package
            string              // blueprint name
            string              // function name
            value*              // arguments
            SEMICOLON
    |   CALL_METHOD
            componentAddress    // Address of the component
            string              // method name
            value*              // arguments
            SEMICOLON
    |   CALL_METHOD_WITH_ALL_RESOURCES
            componentAddress    // Address of the component
            string              // method name
            SEMICOLON
    |   TAKE_FROM_WORKTOP
            resourceAddress     // The resource address to take
            bucket              // The bucket that the resource will go into
            SEMICOLON
    |   TAKE_FROM_WORKTOP_BY_AMOUNT
            decimal             // Amount to take
            resourceAddress     // The resource address to take
            bucket              // The bucket that the resource will go into
            SEMICOLON
    |   TAKE_FROM_WORKTOP_BY_IDS
            set                 // Set of IDs to take
            resourceAddress     // The resource address to take
            bucket              // The bucket that the resource will go into
            SEMICOLON
    |   RETURN_TO_WORKTOP
            bucket              // The bucket to return
            SEMICOLON
    |   ASSERT_WORKTOP_CONTAINS
            resourceAddress     // The resource address to assert
            SEMICOLON
    |   ASSERT_WORKTOP_CONTAINS_BY_AMOUNT
            decimal             // Amount to assert
            resourceAddress     // The resource address to assert
            SEMICOLON
    |   ASSERT_WORKTOP_CONTAINS_BY_IDS
            set                 // Set of IDs to assert
            resourceAddress     // The resource address to assert
            SEMICOLON
    |   POP_FROM_AUTH_ZONE
            proof               // A named proof where the popped proof goes
            SEMICOLON
    |   PUSH_TO_AUTH_ZONE
            proof               // The proof to push to the auth zone
            SEMICOLON
    |   CREATE_PROOF_FROM_AUTH_ZONE
            resourceAddress     // The resource address to take
            proof               // The named proof that the created proof will be stored in
            SEMICOLON
    |   CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT
            decimal             // Amount to take
            resourceAddress     // The resource address to take
            proof               // The named proof that the created proof will be stored in
            SEMICOLON
    |   CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS
            set                 // Set of IDs to take
            resourceAddress     // The resource address to take
            proof               // The named proof that the created proof will be stored in
            SEMICOLON   
    |   CREATE_PROOF_FROM_BUCKET
            bucket              // The bucket to create a proof from
            proof               // The named proof that the proof will be stored in
            SEMICOLON
    |   CLONE_PROOF
            proof               // Proof to clone       
            proof               // Cloned proof
            SEMICOLON
    |   DROP_PROOF
            proof               // Proof to drop
            SEMICOLON       
    |   DROP_ALL_PROOFS
            SEMICOLON
    |   CLEAR_AUTHZONE
            SEMICOLON
    |   PUBLISH_PACKAGE
            bytes               // The bytes of the package to publish
            SEMICOLON
    ;

unit                :   '()' ;
bool                :   BOOL_LITERAL ;
i8                  :   I8_LITERAL ;
i16                 :   I16_LITERAL ;
i32                 :   I32_LITERAL ;
i64                 :   I64_LITERAL ;
i128                :   I128_LITERAL ;
u8                  :   U8_LITERAL ;
u16                 :   U16_LITERAL ;
u32                 :   U32_LITERAL ;
u64                 :   U64_LITERAL ;
u128                :   U128_LITERAL ;
string              :   STRING_LITERAL ;
struct              :   STRUCT_TYPE OPEN_PARENTHESIS (value (COMMA value)*)? CLOED_PARENTHESIS ;
enum_               :   ENUM_TYPE OPEN_PARENTHESIS (string COMMA (value (COMMA value)*)?) CLOED_PARENTHESIS ;
option              :   ( some | none ) ;
some                :   SOME_TYPE OPEN_PARENTHESIS (value (COMMA value)*) CLOED_PARENTHESIS ;
none                :   NONE_TYPE ;
ok                  :   OK_TYPE OPEN_PARENTHESIS (value (COMMA value)*) CLOED_PARENTHESIS ;
err                 :   ERR_TYPE OPEN_PARENTHESIS (value (COMMA value)*) CLOED_PARENTHESIS ;
array               :   ARRAY_TYPE LESS_THAN type GREATER_THAN OPEN_PARENTHESIS (value (COMMA value)*)? CLOED_PARENTHESIS ;
tuple               :   TUPLE_TYPE LESS_THAN OPEN_PARENTHESIS (value (COMMA value)*)? CLOED_PARENTHESIS ;
list                :   LIST_TYPE LESS_THAN type GREATER_THAN OPEN_PARENTHESIS (value (COMMA value)*)? CLOED_PARENTHESIS ;
set                 :   SET_TYPE LESS_THAN type GREATER_THAN OPEN_PARENTHESIS (value (COMMA value)*)? CLOED_PARENTHESIS ;
map                 :   MAP_TYPE LESS_THAN type COMMA type GREATER_THAN OPEN_PARENTHESIS (value COMMA value)* CLOED_PARENTHESIS ;
decimal             :   DECIMAL_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
preciseDecimal      :   PRECISE_DECIMAL_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
packageAddress      :   PACKAGE_ADDRESS_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
componentAddress    :   COMPONENT_ADDRESS_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
resourceAddress     :   RESOURCE_ADDRESS_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
hash                :   HASH_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
bucket              :   BUCKET_TYPE OPEN_PARENTHESIS (STRING_LITERAL | U32_LITERAL ) CLOED_PARENTHESIS ;
proof               :   PROOF_TYPE OPEN_PARENTHESIS (STRING_LITERAL | U32_LITERAL ) CLOED_PARENTHESIS ;
nonFungible_id      :   NON_FUNGIBLE_ID_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ; // Might need to revise this.
nonFungibleAddress  :   NON_FUNGIBLE_ADDRESS_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;
bytes               :   BYTES_TYPE OPEN_PARENTHESIS STRING_LITERAL CLOED_PARENTHESIS ;

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
    | STRUCT_TYPE
    | ENUM_TYPE
    | OPTION_TYPE
    | RESULT_TYPE
    | SOME_TYPE
    | NONE_TYPE
    | OK_TYPE
    | ERR_TYPE
    | ARRAY_TYPE
    | TUPLE_TYPE
    | LIST_TYPE
    | SET_TYPE
    | MAP_TYPE
    | DECIMAL_TYPE
    | PRECISE_DECIMAL_TYPE
    | PACKAGE_ADDRESS_TYPE
    | COMPONENT_ADDRESS_TYPE
    | RESOURCE_ADDRESS_TYPE
    | HASH_TYPE
    | BUCKET_TYPE
    | PROOF_TYPE
    | NON_FUNGIBLE_ID_TYPE
    | NON_FUNGIBLE_ADDRESS_TYPE
    | BYTES_TYPE
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
    | struct
    | enum_
    | option
    | some
    | none
    | ok
    | err
    | array
    | tuple
    | list
    | set
    | map
    | decimal
    | preciseDecimal
    | packageAddress
    | componentAddress
    | resourceAddress
    | hash
    | bucket
    | proof
    | nonFungible_id
    | nonFungibleAddress
    | bytes
    ;

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
STRUCT_TYPE                         : 'Struct' ;
ENUM_TYPE                           : 'Enum' ;
OPTION_TYPE                         : 'Option' ;
RESULT_TYPE                         : 'Result' ;
SOME_TYPE                           : 'Some' ;
NONE_TYPE                           : 'None' ;
OK_TYPE                             : 'Ok' ;
ERR_TYPE                            : 'Err' ;
ARRAY_TYPE                          : 'Array' ;
TUPLE_TYPE                          : 'Tuple' ;
LIST_TYPE                           : 'List' ;
SET_TYPE                            : 'Set' ;
MAP_TYPE                            : 'Map' ;

DECIMAL_TYPE                        : 'Decimal' ;
PRECISE_DECIMAL_TYPE                : 'PreciseDecimal' ;
PACKAGE_ADDRESS_TYPE                : 'PackageAddress' ;
COMPONENT_ADDRESS_TYPE              : 'ComponentAddress' ;
RESOURCE_ADDRESS_TYPE               : 'ResourceAddress' ;
HASH_TYPE                           : 'Hash' ;
BUCKET_TYPE                         : 'Bucket' ;
PROOF_TYPE                          : 'Proof' ;
NON_FUNGIBLE_ID_TYPE                : 'NonFungibleId' ;
NON_FUNGIBLE_ADDRESS_TYPE           : 'NonFungibleAddress' ;
BYTES_TYPE                          : 'Bytes' ;

// Punctuations

OPEN_PARENTHESIS                    : '(' ;
CLOED_PARENTHESIS                   : ')' ;
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
CALL_METHOD_WITH_ALL_RESOURCES      : 'CALL_METHOD_WITH_ALL_RESOURCES' ;

PUBLISH_PACKAGE                     : 'PUBLISH_PACKAGE' ;

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