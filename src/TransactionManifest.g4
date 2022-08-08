grammar TransactionManifest;

/*
 Parser Rules
 */

manifest    
    :   manifestInstruction* EOF
    ;

manifestInstruction
    :   'CALL_FUNCTION' packageAddress simpleString simpleString (value)* ';'
    |   'CALL_METHOD' componentAddress simpleString (value)* ';'
    |   'CALL_METHOD_WITH_ALL_RESOURCES' componentAddress simpleString ';'
    |   'TAKE_FROM_WORKTOP' resourceAddress bucket ';'
    |   'TAKE_FROM_WORKTOP_BY_AMOUNT' decimal resourceAddress bucket ';'
    |   'TAKE_FROM_WORKTOP_BY_IDS' nonFungibleIdsSet resourceAddress bucket ';'
    |   'RETURN_TO_WORKTOP' bucket ';'
    |   'ASSERT_WORKTOP_CONTAINS' resourceAddress ';'
    |   'ASSERT_WORKTOP_CONTAINS_BY_AMOUNT' decimal resourceAddress ';'
    |   'ASSERT_WORKTOP_CONTAINS_BY_IDS' nonFungibleIdsSet resourceAddress ';'
    |   'POP_FROM_AUTH_ZONE' proof ';'
    |   'PUSH_TO_AUTH_ZONE' proof ';'
    |   'CREATE_PROOF_FROM_BUCKET' bucket proof ';'
    |   'CREATE_PROOF_FROM_AUTHZONE' resourceAddress proof ';'
    |   'CREATE_PROOF_FROM_AUTHZONE_BY_AMOUNT' decimal resourceAddress proof ';'
    |   'CREATE_PROOF_FROM_AUTHZONE_BY_IDS' nonFungibleIdsSet resourceAddress proof ';'
    |   'CLEAR_AUTHZONE' nonFungibleIdsSet resourceAddress proof ';'
    |   'CLONE_PROOF' proof proof ';'
    |   'DROP_PROOF' proof ';'
    |   'PUBLISH_PACKAGE' (vec | bytes) ';'
    ;

u8
    :   UNSIGNED_INT 'u8'
    ;

u16
    :   UNSIGNED_INT 'u16'
    ;

u32
    :   UNSIGNED_INT 'u32'
    ;

u64
    :   UNSIGNED_INT 'u64'
    ;

u128
    :   UNSIGNED_INT 'u128'
    ;

i8
    :   UNSIGNED_INT 'i8'
    ;

i16
    :   UNSIGNED_INT 'i16'
    ;

i32
    :   UNSIGNED_INT 'i32'
    ;

i64
    :   UNSIGNED_INT 'i64'
    ;

i128
    :   UNSIGNED_INT 'i128'
    ;

simpleString
    :   NUMERIC_STRING
    |   FULL_STRING
    ;

resourceAddress
    :   'ResourceAddress' '(' simpleString ')'
    ;

componentAddress
    :   'ComponentAddress' '(' simpleString ')'
    ;

packageAddress
    :   'PackageAddress' '(' simpleString ')'
    ;

bucket
    :   'Bucket' '(' (u32 | simpleString) ')'
    ;

proof
    :   'Proof' '(' (u32 | simpleString) ')'
    ;

decimal
    :   'Decimal' '(' NUMERIC_STRING ')' 
    ;

set
    :   'Set' '<' type '>' '(' (value(',')?)* ')'
    ;

vec
    :   'Vec' '<' type '>' '(' (value(',')?)* ')'
    ;

list
    :   'List' '<' type '>' '(' (value(',')?)* ')'
    ;

map
    :   'List' '<' type ',' type '>' '(' (value(',')?)* ')'
    ;

nonFungibleIdsSet
    :   'Set' '<' 'NonFungibleId' '>' '(' (nonFungibleId(',')?)* ')'
    ;

nonFungibleId
    :   'NonFungibleId' '(' (FULL_STRING | NUMERIC_STRING) ')'
    ;

bytes
    :   'Bytes' '(' simpleString ')'
    ;

value
    : u8 
    | u16 
    | u32 
    | u64 
    | u128 
    | i8 
    | i16 
    | i32 
    | i64 
    | i128 
    | resourceAddress
    | packageAddress
    | componentAddress
    | bucket
    | proof
    | decimal
    | set
    | vec
    | list
    | map
    | nonFungibleId
    ;

type
    :   'NonFungibleId'
    |   'U8'
    ;

/*
 Lexer Rules
 */

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
fragment DIGIT      : [0-9] ;
fragment SYMBOL     : [.-_] ;

UNSIGNED_INT        : DIGIT+ ;
SIGNED_INT          : '-'? DIGIT+ ;

UNSIGNED_FLOAT      : DIGIT+ ([.] DIGIT+)? ;
SIGNED_FLOAT        : '-'? DIGIT+ ([.] DIGIT+)? ;

NUMERIC_STRING      : '"' (UNSIGNED_INT | SIGNED_INT | UNSIGNED_FLOAT | SIGNED_FLOAT) '"' ;
FULL_STRING         : '"' (LOWERCASE | UPPERCASE | DIGIT | SYMBOL)+ '"' ;

WS                  : [ \t\r\n]+ -> skip ;
COMMENT             : '#' ~[\r\n\f]* -> skip ;