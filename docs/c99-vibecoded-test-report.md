# c99-vibecoded-test-report.md

2025-11-02

This report is produced by running a single C99 program that executes small probes and prints Markdown.

---

## 0. Build and environment snapshot

### Probe

```c
/*
Print compiler and language macros; discover pointer width; probe endianness later.
Floating model overview: FLT_RADIX and mantissa digits from <float.h>.
*/

```

### Probe source excerpt

```c
/*
Print compiler and language macros; discover pointer width; probe endianness later.
Floating model overview: FLT_RADIX and mantissa digits from <float.h>.
*/

```

### Compiler and language macros

```text
compiler: unknown
__STDC__ = 1
__STDC_VERSION__ = 199901
```

### Target and pointer width

```text
arch: x86_64
sizeof(void*) = 8 bytes
```

### Endianness probe

```c
/*
A simple, well-defined endianness probe:
- Store 0x01020304 in a 32-bit object.
- Read its representation via unsigned char*.
- Interpret the first byte: 0x04 => little-endian; 0x01 => big-endian.
*/

```

### Observed output

```text
bytes of 0x01020304: 4 3 2 1
endianness: little-endian (implementation-defined)
```

### Probe source excerpt

```c
/*
A simple, well-defined endianness probe:
- Store 0x01020304 in a 32-bit object.
- Read its representation via unsigned char*.
- Interpret the first byte: 0x04 => little-endian; 0x01 => big-endian.
*/

```

### Floating model

```text
FLT_RADIX = 2
FLT_MANT_DIG = 24, DBL_MANT_DIG = 53, LDBL_MANT_DIG = 64
FLT_DIG = 6, DBL_DIG = 15, LDBL_DIG = 18
```

## 1. Fundamental limits and properties

### Probe

```c
/*
Query integer limits from <limits.h> and floating limits from <float.h>.
Sanity-check: FLT_MIN < 1.0f.
Print sizeof(T) and approximate alignment via offsetof(struct{char c; T t;}, t).
*/

```

### Probe source excerpt

```c
/*
Query integer limits from <limits.h> and floating limits from <float.h>.
Sanity-check: FLT_MIN < 1.0f.
Print sizeof(T) and approximate alignment via offsetof(struct{char c; T t;}, t).
*/

```

### Integer limits

```text
CHAR_BIT = 8
SCHAR_MIN = -128, SCHAR_MAX = 127
UCHAR_MAX = 255
CHAR_MIN = -128, CHAR_MAX = 127
SHRT_MIN = -32768, SHRT_MAX = 32767, USHRT_MAX = 65535
INT_MIN = -2147483648, INT_MAX = 2147483647, UINT_MAX = 4294967295
LONG_MIN = -2147483648, LONG_MAX = 2147483647, ULONG_MAX = 4294967295
LLONG_MIN = -9223372036854775808, LLONG_MAX = 9223372036854775807, ULLONG_MAX = 18446744073709551615
```

### Floating limits and relations

```text
FLT_MIN = 1.175494e-038 < 1.0f => true
DBL_MIN = 2.225074e-308 < 1.0  => true
LDBL_MIN = 0.000000e+000 < 1.0L => true
```

### Sizes and alignment of fundamental types

```text
char               sizeof=1 align~= 1
signed char        sizeof=1 align~= 1
unsigned char      sizeof=1 align~= 1
short              sizeof=2 align~= 2
unsigned short     sizeof=2 align~= 2
int                sizeof=4 align~= 4
unsigned           sizeof=4 align~= 4
long               sizeof=4 align~= 4
unsigned long      sizeof=4 align~= 4
long long          sizeof=8 align~= 8
unsigned long long sizeof=8 align~= 8
float              sizeof=4 align~= 4
double             sizeof=8 align~= 8
long double        sizeof=8 align~= 8
void*              sizeof=8 align~= 8
size_t             sizeof=8 align~= 8
ptrdiff_t          sizeof=8 align~= 8
intptr_t           sizeof=8 align~= 8
uintptr_t          sizeof=8 align~= 8
```

## 2. Literals and lexical behaviors

### Probe: character and string literal basics

```c
/*
- Character literals have type int in C, not char. sizeof('A') is sizeof(int).
- String literal concatenation happens at translation time: "hello" " " "world".
- Embedded NUL in string literals affects strlen but not sizeof array initialization.
*/

```

### Observed output

```text
'A' value=65 sizeof('A')=4
'\n' value=10
L'A' sizeof element=2
"hello" " " "world" => hello world
strlen("a\0b")=1, sizeof array=4
```

### Probe source excerpt

```c
/*
- Character literals have type int in C, not char. sizeof('A') is sizeof(int).
- String literal concatenation happens at translation time: "hello" " " "world".
- Embedded NUL in string literals affects strlen but not sizeof array initialization.
*/

```

### Integer literal types and bases

```c
```

```text
sizeof 42 = 4
sizeof 42U = 4
sizeof 42L = 4
sizeof 0xFFFFFFFF = 4 (implementation-defined)
octal 077 => 63, hex 0x2A => 42
```

### Floating literal suffixes

```text
sizeof 1.0 = 8, sizeof 1.0f = 4, sizeof 1.0L = 8
```

### Wide string basics

```text
sizeof L"abc" = 8 bytes, element size=2
```

## 3. Type system highlights

### Probe

```c
/*
- The signedness of plain 'char' is implementation-defined.
- _Bool is a distinct type; values are 0 or 1 after conversion.
- Qualifiers like const/volatile do not change sizeof; 'restrict' is a promise
about non-overlapping pointed-to objects that can enable better optimization.
*/

```

### Probe source excerpt

```c
/*
- The signedness of plain 'char' is implementation-defined.
- _Bool is a distinct type; values are 0 or 1 after conversion.
- Qualifiers like const/volatile do not change sizeof; 'restrict' is a promise
about non-overlapping pointed-to objects that can enable better optimization.
*/

```

### Signedness of plain char

```text
plain char is signed
```

### _Bool and stdbool semantics

```text
_Bool b = 2 => stored as 1; !b = 0
```

### Qualifiers and restrict

```c
```

### Observed output

```text
after takes_restrict: a = {11,22,33}
sizeof(int* restrict) == sizeof(int*) => 8 == 8
```

### Probe source excerpt

```c
/*
'restrict' qualifier on pointers promises that, for the lifetime of the pointers,
only they (or values derived from them) will be used to access the pointed-to objects.
This permits aliasing optimizations. It does not change the pointer's size or representation.
*/

```

## 4. sizeof and alignment micro-experiments

### Probe

```c
/*
Demonstrate sizeof for scalars, pointers, arrays, VLAs, structs, unions,
and a host struct with a flexible array member (FAM).
Alignment approximated via offsetof(struct{char c; T t;}, t).
*/

```

### Probe source excerpt

```c
/*
Demonstrate sizeof for scalars, pointers, arrays, VLAs, structs, unions,
and a host struct with a flexible array member (FAM).
Alignment approximated via offsetof(struct{char c; T t;}, t).
*/

```

### Scalars

```text
char               sizeof=1 align~= 1
short              sizeof=2 align~= 2
int                sizeof=4 align~= 4
long               sizeof=4 align~= 4
float              sizeof=4 align~= 4
double             sizeof=8 align~= 8
long double        sizeof=8 align~= 8
```

### Pointers and function pointers

```text
sizeof(int*)=8, sizeof(double*)=8, sizeof(fp)=8
```

### Fixed arrays

```text
char a[3]                       3           1      3  elem size * count
int a[3]                       12           4      3  elem size * count
double a[3]                    24           8      3  elem size * count
```

### Probe source excerpt

```c
{
const char *decl = "char a[3]";
printf("%-23s  %8zu     %7zu  %5d  elem size * count\n",
decl, sizeof a1, sizeof a1[0], 3);
}
{
const char *decl = "int a[3]";
printf("%-23s  %8zu     %7zu  %5d  elem size * count\n",
decl, sizeof a2, sizeof a2[0], 3);
}
{
const char *decl = "double a[3]";
printf("%-23s  %8zu     %7zu  %5d  elem size * count\n",
decl, sizeof a3, sizeof a3[0], 3);
}

```

### VLA at runtime

```text
n=7, sizeof vla = 28 (expect n*sizeof(int)=28)
```

### Structs and unions, flexible array host

```text
struct A sizeof=8 sum(fields)=5 align~= 4 offsets: c=0 i=4
struct B sizeof=24 sum(fields)=13 align~= 8 offsets: c=0 d=8 i=16
union U sizeof=8 align~= 8 max(member sizes)=8
struct Flex host sizeof=8 (FAM contributes 0)
```

## 5. Struct layout, padding, and flexible arrays

### Probe

```c
/*
Use offsetof to reveal padding. Compare assignment equality by fields, not memcmp.
Bit-fields: widths and signedness are implementation-defined.
Flexible array member: allocate sizeof(header)+n*sizeof(elem) and access payload.
*/

```

### Probe source excerpt

```c
/*
Use offsetof to reveal padding. Compare assignment equality by fields, not memcmp.
Bit-fields: widths and signedness are implementation-defined.
Flexible array member: allocate sizeof(header)+n*sizeof(elem) and access payload.
*/

```

### offsetof and padding gaps

```text
struct P sizeof=16 fields sum=13 offsets: c=0 i=4 d=8
```

### Copy, assign, and equality

```text
struct assignment copies fields; equal by fields => true
```

### Bit-fields packing and signedness

```text
BF sizeof=4, a=7, b=-3, c=42, first bytes 0x00002aef (implementation-defined)
```

### Flexible array idiom allocation

```text
malloc(28) ok; usable ints=5; last=16
```

## 6. Unions and aliasing observations

### Probe

```c
/*
Reading a different union member than the one most recently written is
implementation-defined; we use it only to illustrate overlapping representation.
For non-integer bit patterns, use memcpy to a same-sized integer type.
*/

```

### Probe source excerpt

```c
/*
Reading a different union member than the one most recently written is
implementation-defined; we use it only to illustrate overlapping representation.
For non-integer bit patterns, use memcpy to a same-sized integer type.
*/

```

### Active member and overlap illustration

```text
write u.u=0x41424344 then read bytes: 68 67 66 65 (implementation-defined)
```

### Representations via memcpy, avoiding aliasing UB

```text
double 1.5 bit pattern = 0x3ff8000000000000
```

### Common initial sequence

```text
common initial tag=7
```

## 7. Expressions and conversions

### Probe

```c
/*
- Integer promotions: smaller integer types promote to int in expressions.
- Usual arithmetic conversions: mixing signed and unsigned can convert to unsigned.
- Variadic calls apply default promotions: float -> double, char/short -> int.
- Division and modulo with negatives truncate toward zero per C99.
- Ternary operator chooses a common type via usual arithmetic conversions.
*/

```

### Probe source excerpt

```c
/*
- Integer promotions: smaller integer types promote to int in expressions.
- Usual arithmetic conversions: mixing signed and unsigned can convert to unsigned.
- Variadic calls apply default promotions: float -> double, char/short -> int.
- Division and modulo with negatives truncate toward zero per C99.
- Ternary operator chooses a common type via usual arithmetic conversions.
*/

```

### Integer promotions

```text
sizeof(c+s) => 4 (promotes to int)
```

### Usual arithmetic conversions

```text
u=1 (unsigned), i=-2 (int), u+i as unsigned => 4294967295 (implementation-defined)
```

### Floating promotions in variadics

```text
printf %f receives double, float promoted: 1.250000
```

### Conversions and negatives

```text
(int)3.9 = 3 (trunc toward zero)
-7 / 3 = -2, -7 % 3 = -1
```

### Ternary operator type resolution

```text
sizeof( (1? 1 : 1.0) ) = 8 (to double)
sizeof( (1? -1 : 1u) ) = 4 (implementation-defined)
```

## 8. Operators, evaluation, and sequencing

### Probe

```c
/*
Show only well-defined uses:
- Post-increment used once in an expression.
- Short-circuiting prevents evaluation of the right operand when not needed.
- Right shift of negative signed integers is implementation-defined.
- sizeof does not evaluate its operand.
*/

```

### Probe source excerpt

```c
/*
Show only well-defined uses:
- Post-increment used once in an expression.
- Short-circuiting prevents evaluation of the right operand when not needed.
- Right shift of negative signed integers is implementation-defined.
- sizeof does not evaluate its operand.
*/

```

### Pre and post increment in sequenced contexts

```text
x=1; y = x++ + 2 => y=3 x=2
```

### Short-circuiting

```text
0 && side_effect => v=0, counter=0 (rhs not evaluated)
1 || side_effect => v=1, counter=0 (rhs not evaluated)
```

### Bit shifts

```text
unsigned right shift: (1u<<3)>>1 = 4
signed right shift of negative is implementation-defined; example (-4>>1)=-2
```

### sizeof on expressions is unevaluated

```text
after sizeof(t++), t=0 (no increment)
```

## 9. Control flow probes

### Probe

```c
/*
Count iterations for for/while/do-while to show entry semantics.
Demonstrate switch fallthrough and nested-loop break/continue effects.
*/

```

### Probe source excerpt

```c
/*
Count iterations for for/while/do-while to show entry semantics.
Demonstrate switch fallthrough and nested-loop break/continue effects.
*/

```

### for, while, do-while

```text
for=3 while=3 do-while=3
```

### switch and fallthrough

```text
x=2, fallthrough sum=6
```

### break and continue in nested loops

```text
outer=3 inner=6
```

## 10. Storage duration and initialization

### Probe

```c
/*
- Static locals initialize once and retain value between calls.
- Static-duration objects without explicit initializers are zero-initialized.
- External linkage variable exists once per program.
- Do not return pointer to a local; copy needed value to dynamic storage instead.
*/

```

### Probe source excerpt

```c
/*
- Static locals initialize once and retain value between calls.
- Static-duration objects without explicit initializers are zero-initialized.
- External linkage variable exists once per program.
- Do not return pointer to a local; copy needed value to dynamic storage instead.
*/

```

### Static local initialization once

```text
static_once() calls: 1 2 3
```

### Static-duration zero initialization

```text
uninitialized static int = 0
```

### Linkage note

```text
external_var has external linkage in this translation unit; value=0
```

### Lifetime boundaries and safe copy

```text
copied value from dead frame = 42
```

## 11. Arrays, pointers, and decay rules

### Probe

```c
/*
- Arrays decay to pointers in most expressions (including function calls).
- Pointer arithmetic scales by sizeof(element); measure deltas within same array.
- 2D arrays are row-major (rows contiguous).
- VLAs have runtime size; sizeof(VLA) reflects runtime element count.
- strlen stops at first NUL; sizeof(array) is full byte count.
*/

```

### Probe source excerpt

```c
/*
- Arrays decay to pointers in most expressions (including function calls).
- Pointer arithmetic scales by sizeof(element); measure deltas within same array.
- 2D arrays are row-major (rows contiguous).
- VLAs have runtime size; sizeof(VLA) reflects runtime element count.
- strlen stops at first NUL; sizeof(array) is full byte count.
*/

```

### Array to pointer decay

```text
in scope: sizeof(a)=16
in function: parameter sizeof(a)=8 (pointer), n=4
```

### Pointer arithmetic scale factor

```text
delta(&ai[1]-&ai[0])=4 bytes, delta(&ad[1]-&ad[0])=8 bytes
```

### 1D and 2D row-major layout

```text
&m[0][0]=000000000060FD00, &m[0][1]=000000000060FD04, &m[1][0]=000000000060FD0C (row-major contiguous)
```

### VLA pass-through

```text
VLA n=5, sizeof v = 20, first=42
```

### strlen vs sizeof for strings

```text
s1: strlen=3 sizeof=5; s2: strlen=1 sizeof=5
```

## 12. Functions and calling patterns

### Probe

```c
/*
- Function pointers: take address and call through pointer.
- static inline functions work within a single translation unit (C99).
- Variadic functions: default promotions apply; printf returns chars written.
*/

```

### Probe source excerpt

```c
/*
- Function pointers: take address and call through pointer.
- static inline functions work within a single translation unit (C99).
- Variadic functions: default promotions apply; printf returns chars written.
*/

```

### Function pointers

```text
square_fn(5) via pointer = 25, cube_fn(3) = 27
sizeof(function pointer)=8 vs sizeof(void*)=8
```

### Inline functions in one TU

```text
add_inline(2,3) = 5
```

### Variadic function and default promotions

```text
sum_variadic(a,b,c) = 6
printf returns chars written: hello => 39 + 6
```

## 13. qsort and bsearch on arrays

### Probe

```c
/*
qsort requires a strict weak ordering comparator; it is not stable.
bsearch requires the array to be sorted by the same comparator.
*/

```

### Probe source excerpt

```c
/*
qsort requires a strict weak ordering comparator; it is not stable.
bsearch requires the array to be sorted by the same comparator.
*/

```

### qsort of ints and instability note

```text
sorted ints: 0 1 2 2 4 5 5 8
records after qsort by key: {k=1,t=1} {k=1,t=2} {k=2,t=1} {k=2,t=2} (order of equal keys is unspecified)
```

### bsearch success and failure

```text
bsearch 6 => found
bsearch 7 => not found
```

## 14. Time basics

### Probe

```c
/*
time() returns epoch seconds; localtime/gmtime convert to broken-down time; strftime formats.
clock() measures CPU time used by the process; divide ticks by CLOCKS_PER_SEC.
difftime gives a double difference between two time_t values.
*/

```

### Probe source excerpt

```c
/*
time() returns epoch seconds; localtime/gmtime convert to broken-down time; strftime formats.
clock() measures CPU time used by the process; divide ticks by CLOCKS_PER_SEC.
difftime gives a double difference between two time_t values.
*/

```

### time and localtime/gmtime

```text
time() = 1762068761
localtime: 2025-11-02 00:32:41
gmtime:   2025-11-02 07:32:41
```

### clock and difftime

```text
clock dt = 0.011000 seconds
difftime(now+3, now) = 3
```

## 15. Memory management and object lifetime

### Probe

```c
/*
- malloc alignment suffices for any object type.
- calloc zeroes memory; malloc leaves indeterminate bytes.
- realloc may move or keep the same pointer; content preserved up to min(old,new).
- memmove handles overlap; memcpy requires non-overlapping regions.
- memset sets bytes; resulting int value from nonzero patterns is implementation-defined.
*/

```

### Probe source excerpt

```c
/*
- malloc alignment suffices for any object type.
- calloc zeroes memory; malloc leaves indeterminate bytes.
- realloc may move or keep the same pointer; content preserved up to min(old,new).
- memmove handles overlap; memcpy requires non-overlapping regions.
- memset sets bytes; resulting int value from nonzero patterns is implementation-defined.
*/

```

### malloc alignment

```text
malloc ptr % alignment 8 = 0
```

### calloc zero-initialization vs malloc

```text
malloc first 8 bytes: 20 00 00 00 14 00 00 00
calloc first 8 bytes: 00 00 00 00 00 00 00 00
```

### realloc growth and shrink

```text
realloc grow: moved=maybe
realloc shrink ok
```

### memmove vs memcpy with overlap

```text
memmove overlap: ababcd
memcpy overlap: not executed to avoid UB; use memmove instead
```

### memset on non-char objects

```text
memset int with 0xFF yields pattern, x=-1 (implementation-defined)
memset int with 0x01 yields pattern, x=16843009 (implementation-defined)
```

## 16. Strings and byte operations

### Probe

```c
/*
- strlen stops at the first NUL.
- strcpy copies including the terminating NUL; strncpy may omit the NUL when truncated.
- strcat appends (check capacity first).
- strchr/strrchr/strstr return pointers; print offsets via pointer subtraction.
- strtok is stateful and not re-entrant.
*/

```

### Probe source excerpt

```c
/*
- strlen stops at the first NUL.
- strcpy copies including the terminating NUL; strncpy may omit the NUL when truncated.
- strcat appends (check capacity first).
- strchr/strrchr/strstr return pointers; print offsets via pointer subtraction.
- strtok is stateful and not re-entrant.
*/

```

### strlen with embedded NUL

```text
strlen on {'a','b','\0','c'} => 2
```

### strcpy and strncpy

```text
strcpy dst1="abc"; strncpy fixed dst2="abc"
```

### strcat with capacity check

```text
after safe strcat => "abcdef"
```

### strchr, strrchr, strstr offsets

```text
first a at 0, last a at 10, "cad" at 4
```

### strtok statefulness

```text
[a] [b] [c] 
```

## 17. Character classification and case conversion

### Probe

```c
/*
ctype functions require inputs representable as unsigned char or EOF.
Passing negative char values is undefined behavior; cast to unsigned char.
We print a small table and demonstrate the signed-char trap.
*/

```

### Probe source excerpt

```c
/*
ctype functions require inputs representable as unsigned char or EOF.
Passing negative char values is undefined behavior; cast to unsigned char.
We print a small table and demonstrate the signed-char trap.
*/

```

### Classification table

```text
'A': isalpha=1 isdigit=0 isspace=0
'1': isalpha=0 isdigit=1 isspace=0
' ': isalpha=0 isdigit=0 isspace=1
'	': isalpha=0 isdigit=0 isspace=1
'!': isalpha=0 isdigit=0 isspace=0
```

### Signed char trap

```text
isalpha((char)0xFF) => 0, isalpha((unsigned char)0xFF) => 0
```

### toupper and tolower

```text
toupper('a')=A, tolower('Z')=z
```

## 18. Math library and special values

### Probe

```c
/*
- NaN propagates through arithmetic; classify with isnan/isfinite.
- Floating division by zero yields +/-inf (int division by zero is undefined).
- Repeated addition of 0.1 shows rounding error in binary floating point.
- hypot(x,y) handles large arguments more robustly than sqrt(x*x+y*y).
*/

```

### Probe source excerpt

```c
/*
- NaN propagates through arithmetic; classify with isnan/isfinite.
- Floating division by zero yields +/-inf (int division by zero is undefined).
- Repeated addition of 0.1 shows rounding error in binary floating point.
- hypot(x,y) handles large arguments more robustly than sqrt(x*x+y*y).
*/

```

### NaN propagation and finiteness

```text
NAN + 1 => isnan=1, isfinite=0
```

### Division by zero behavior

```text
1.0/0.0 => inf, sign=plus
```

### Rounding illustration

```text
sum of 0.1 ten times = 0.99999999999999989000, difference vs 1.0 = -0.00000000000000011102
```

### hypot vs sqrt(x*x+y*y)

```text
hypot=1.414e+200, sqrt-sum=1.#IOe+000
```

## 19. Random numbers

### Probe

```c
/*
srand seeds the PRNG deterministically; rand() generates pseudo-random ints in [0, RAND_MAX].
Mapping to smaller ranges via modulo introduces bias unless divisible; rejection sampling avoids bias.
*/

```

### Probe source excerpt

```c
/*
srand seeds the PRNG deterministically; rand() generates pseudo-random ints in [0, RAND_MAX].
Mapping to smaller ranges via modulo introduces bias unless divisible; rejection sampling avoids bias.
*/

```

### RAND_MAX and determinism

```text
RAND_MAX=32767
stream: 4068 213 12761 8758 23056
```

### Modulo bias vs rejection sampling

```text
rand() % 6 => 1 (biased)
rejection sampling into [0,6): 4 (unbiased)
```

## 20. Command-line arguments

### Probe

```c
/*
Print argc and each argv quoted. Then parse with strtol/strtod, showing
where parsing stops via endptr, without terminating on errors.
*/

```

### Probe source excerpt

```c
/*
Print argc and each argv quoted. Then parse with strtol/strtod, showing
where parsing stops via endptr, without terminating on errors.
*/

```

### argv echo

```text
argc=1
argv[0] = "main.c"
```

### strtol and strtod parsing

```text
strtol("123x") => 123, stopped at "x"
strtod("3.14y") => 3.140000, stopped at "y"
```

## 21. Portability and behavior categories index

```text
Endianness: implementation-defined
Signed right shift of negative: implementation-defined
Struct layout and padding: implementation-defined
Union byte order view: implementation-defined
Sizes, integer and floating limits: defined
VLA size and behavior: defined (if VLA supported by implementation)
Integer literal width selection on 0xFFFFFFFF: implementation-defined
```

## 22. Source of this program

```c
/*
C99 single-file exploratory cheatsheet
Generates a Markdown report by running micro-experiments at runtime.

Updates in this version:
- Removed <complex.h> and all complex-number examples.
- Added richer code examples for each sub-experiment with detailed context comments.
- Avoids undefined behavior while still demonstrating implementation-defined or unspecified areas, clearly labeled.

Build:
  cc -std=c99 -Wall -Wextra -pedantic -O2 cheatsheet.c -lm -o cheatsheet
Run:
  ./cheatsheet > report.md
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stddef.h>
#include <stdint.h>
#include <stdbool.h>
#include <limits.h>
#include <float.h>
#include <inttypes.h>
#include <stdarg.h>
#include <time.h>
#include <ctype.h>
#include <math.h>
#include <setjmp.h>

/* ---------------- file loading ---------------- */

static char *read_entire_file(const char *path) {
    FILE *f = fopen(path, "rb");
    if (!f) return NULL;
    if (fseek(f, 0, SEEK_END) != 0) { fclose(f); return NULL; }
    long sz = ftell(f);
    if (sz < 0) { fclose(f); return NULL; }
    if (fseek(f, 0, SEEK_SET) != 0) { fclose(f); return NULL; }
    char *buf = (char*)malloc((size_t)sz + 1);
    if (!buf) { fclose(f); return NULL; }
    size_t rd = fread(buf, 1, (size_t)sz, f);
    fclose(f);
    buf[rd] = '\0';
    return buf;
}

/* ---------------- String_View and marker extractor ---------------- */

typedef struct {
    const char *data;
    size_t len;
    int ok; /* 1 if found, 0 otherwise */
} String_View;

/* Finds region between:
//#+begin_marker <id>\n
...content...
//#+end_marker <id>
Excludes marker lines. Works with LF or CRLF. */
static String_View read_source_code(const char *buffer, const char *markerId) {
    String_View sv = (String_View){ NULL, 0, 0 };
    if (!buffer || !markerId) return sv;

    char beginTag[64];
    char endTag[64];
    snprintf(beginTag, sizeof beginTag, "//#+begin_marker %s", markerId);
    snprintf(endTag,   sizeof endTag,   "//#+end_marker %s",   markerId);

    const char *begin = strstr(buffer, beginTag);
    if (!begin) return sv;

    const char *afterBeginLine = strchr(begin, '\n');
    if (!afterBeginLine) return sv;
    afterBeginLine++;

    const char *end = strstr(afterBeginLine, endTag);
    if (!end) return sv;

    /* Trim a single trailing newline before end tag for neatness */
    const char *segEnd = end;
    const char *p = segEnd;
    if (p > afterBeginLine) {
        if (*(p - 1) == '\n') {
            p--;
            if (p > afterBeginLine && *(p - 1) == '\r') p--;
        }
    }
    sv.data = afterBeginLine;
    sv.len  = (size_t)(p - afterBeginLine);
    sv.ok   = 1;
    return sv;
}

/* ---------------- dedent and normalize printer ---------------- */

/* Print String_View as C code, converting CRLF to LF and stripping the
   minimal common leading indentation (spaces and tabs) across non-empty lines. */
static void print_sv_dedented_normalized(const char *data, size_t len) {
    size_t i = 0;
    size_t min_indent = (size_t)-1;
    int have_nonempty = 0;

    while (i < len) {
        size_t indent = 0;
        while (i < len && (data[i] == ' ' || data[i] == '\t')) { indent++; i++; }
        int is_empty = 0;
        if (i >= len || data[i] == '\n' || data[i] == '\r') is_empty = 1;
        if (!is_empty) {
            if (!have_nonempty || indent < min_indent) min_indent = indent;
            have_nonempty = 1;
        }
        while (i < len && data[i] != '\n') { if (data[i] == '\r') { i++; continue; } i++; }
        if (i < len && data[i] == '\n') i++;
    }
    if (!have_nonempty) min_indent = 0;

    i = 0;
    while (i < len) {
        size_t indent = 0;
        while (i < len && (data[i] == ' ' || data[i] == '\t')) {
            if (indent < min_indent) indent++;
            i++;
        }
        while (i < len && data[i] != '\n') { if (data[i] != '\r') putchar(data[i]); i++; }
        putchar('\n');
        if (i < len && data[i] == '\n') i++;
    }
}

/* Wrapper to locate a marker and print the block as a fenced C code block. */
static void print_marked_block_as_c(const char *sourceBuf, const char *markerId) {
    String_View sv = read_source_code(sourceBuf, markerId);
    printf("```c\n");
    if (sv.ok) {
        print_sv_dedented_normalized(sv.data, sv.len);
    } else {
        printf("/* marker %s not found */\n", markerId);
    }
    printf("```\n\n");
}

/* ---------------- utilities ---------------- */

static const char *boolstr(int v) { return v ? "true" : "false"; }

static void h2(const char *title) { printf("## %s\n\n", title); }
static void h3(const char *title) { printf("### %s\n\n", title); }
static void fence_begin(const char *lang) { printf("```%s\n", lang ? lang : ""); }
static void fence_end(void) { printf("```\n\n"); }

static const char *cat_defined(void) { return "defined"; }
static const char *cat_impldef(void) { return "implementation-defined"; }
static const char *cat_unspecified(void) { return "unspecified"; }
static const char *cat_extension(void) { return "extension"; }

/* ---------------- 0. Report header ---------------- */

static void sec_header_build_env(const char *sourceBuf) {
    h2("0. Build and environment snapshot");

    h3("Probe");
    //#+begin_marker u5q3z8n1k2m
    /*
    Print compiler and language macros; discover pointer width; probe endianness later.
    Floating model overview: FLT_RADIX and mantissa digits from <float.h>.
    */
    //#+end_marker u5q3z8n1k2m
    print_marked_block_as_c(sourceBuf, "u5q3z8n1k2m");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "u5q3z8n1k2m");

    h3("Compiler and language macros");
    fence_begin("text");
#if defined(__clang__)
    printf("compiler: clang %d.%d.%d\n", __clang_major__, __clang_minor__, __clang_patchlevel__);
#elif defined(__GNUC__)
    printf("compiler: gcc %d.%d.%d\n", __GNUC__, __GNUC_MINOR__, __GNUC_PATCHLEVEL__);
#elif defined(_MSC_VER)
    printf("compiler: msvc %d\n", (int)_MSC_VER);
#else
    printf("compiler: unknown\n");
#endif

#if defined(__STDC__)
    printf("__STDC__ = %ld\n", (long)__STDC__);
#else
    printf("__STDC__ undefined\n");
#endif
#if defined(__STDC_VERSION__)
    printf("__STDC_VERSION__ = %ld\n", (long)__STDC_VERSION__);
#else
    printf("__STDC_VERSION__ undefined\n");
#endif
    fence_end();

    h3("Target and pointer width");
    fence_begin("text");
#if defined(__x86_64__) || defined(_M_X64)
    printf("arch: x86_64\n");
#elif defined(__i386__) || defined(_M_IX86)
    printf("arch: x86\n");
#elif defined(__aarch64__)
    printf("arch: aarch64\n");
#elif defined(__arm__)
    printf("arch: arm\n");
#else
    printf("arch: unknown\n");
#endif
    printf("sizeof(void*) = %zu bytes\n", sizeof(void*));
    fence_end();

    h3("Endianness probe");
    //#+begin_marker gx2gk5s7l0z
    /*
    A simple, well-defined endianness probe:
      - Store 0x01020304 in a 32-bit object.
      - Read its representation via unsigned char*.
      - Interpret the first byte: 0x04 => little-endian; 0x01 => big-endian.
    */
    //#+end_marker gx2gk5s7l0z
    print_marked_block_as_c(sourceBuf, "gx2gk5s7l0z");

    h3("Observed output");
    fence_begin("text");
    {
        uint32_t v = 0x01020304u;
        unsigned char *p = (unsigned char*)&v;
        printf("bytes of 0x01020304: %u %u %u %u\n", (unsigned)p[0], (unsigned)p[1], (unsigned)p[2], (unsigned)p[3]);
        if (p[0] == 0x04) printf("endianness: little-endian (%s)\n", cat_impldef());
        else if (p[0] == 0x01) printf("endianness: big-endian (%s)\n", cat_impldef());
        else printf("endianness: unusual (%s)\n", cat_impldef());
    }
    fence_end();

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "gx2gk5s7l0z");

    h3("Floating model");
    fence_begin("text");
    printf("FLT_RADIX = %d\n", FLT_RADIX);
    printf("FLT_MANT_DIG = %d, DBL_MANT_DIG = %d, LDBL_MANT_DIG = %d\n", FLT_MANT_DIG, DBL_MANT_DIG, LDBL_MANT_DIG);
    printf("FLT_DIG = %d, DBL_DIG = %d, LDBL_DIG = %d\n", FLT_DIG, DBL_DIG, LDBL_DIG);
    fence_end();
}

/* ---------------- 1. Fundamental limits and properties ---------------- */

static void sec_fundamental(const char *sourceBuf) {
    h2("1. Fundamental limits and properties");

    h3("Probe");
    //#+begin_marker h9f2k7r1c3b
    /*
    Query integer limits from <limits.h> and floating limits from <float.h>.
    Sanity-check: FLT_MIN < 1.0f.
    Print sizeof(T) and approximate alignment via offsetof(struct{char c; T t;}, t).
    */
    //#+end_marker h9f2k7r1c3b
    print_marked_block_as_c(sourceBuf, "h9f2k7r1c3b");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "h9f2k7r1c3b");

    h3("Integer limits");
    fence_begin("text");
    printf("CHAR_BIT = %d\n", CHAR_BIT);
    printf("SCHAR_MIN = %d, SCHAR_MAX = %d\n", SCHAR_MIN, SCHAR_MAX);
    printf("UCHAR_MAX = %u\n", UCHAR_MAX);
    printf("CHAR_MIN = %d, CHAR_MAX = %d\n", CHAR_MIN, CHAR_MAX);
    printf("SHRT_MIN = %d, SHRT_MAX = %d, USHRT_MAX = %u\n", SHRT_MIN, SHRT_MAX, USHRT_MAX);
    printf("INT_MIN = %d, INT_MAX = %d, UINT_MAX = %u\n", INT_MIN, INT_MAX, UINT_MAX);
    printf("LONG_MIN = %ld, LONG_MAX = %ld, ULONG_MAX = %lu\n", LONG_MIN, LONG_MAX, ULONG_MAX);
    printf("LLONG_MIN = %lld, LLONG_MAX = %lld, ULLONG_MAX = %llu\n",
           (long long)LLONG_MIN, (long long)LLONG_MAX, (unsigned long long)ULLONG_MAX);
    fence_end();

    h3("Floating limits and relations");
    fence_begin("text");
    printf("FLT_MIN = %e < 1.0f => %s\n", FLT_MIN, boolstr(FLT_MIN < 1.0f));
    printf("DBL_MIN = %e < 1.0  => %s\n", DBL_MIN, boolstr(DBL_MIN < 1.0));
    printf("LDBL_MIN = %Le < 1.0L => %s\n", LDBL_MIN, boolstr(LDBL_MIN < 1.0L));
    fence_end();

    h3("Sizes and alignment of fundamental types");
    fence_begin("text");
#define SZAL(T,name) do { \
    printf("%-18s sizeof=%zu align~= %zu\n", name, sizeof(T), (size_t)offsetof(struct{char c; T t;}, t)); \
} while(0)
    SZAL(char, "char");
    SZAL(signed char, "signed char");
    SZAL(unsigned char, "unsigned char");
    SZAL(short, "short");
    SZAL(unsigned short, "unsigned short");
    SZAL(int, "int");
    SZAL(unsigned, "unsigned");
    SZAL(long, "long");
    SZAL(unsigned long, "unsigned long");
    SZAL(long long, "long long");
    SZAL(unsigned long long, "unsigned long long");
    SZAL(float, "float");
    SZAL(double, "double");
    SZAL(long double, "long double");
    SZAL(void*, "void*");
    SZAL(size_t, "size_t");
    SZAL(ptrdiff_t, "ptrdiff_t");
    SZAL(intptr_t, "intptr_t");
    SZAL(uintptr_t, "uintptr_t");
#undef SZAL
    fence_end();
}

/* ---------------- 2. Literals and lexical behaviors ---------------- */

static void sec_literals(const char *sourceBuf) {
    h2("2. Literals and lexical behaviors");

    h3("Probe: character and string literal basics");
    //#+begin_marker d4m8y8o9c2f
    /*
    - Character literals have type int in C, not char. sizeof('A') is sizeof(int).
    - String literal concatenation happens at translation time: "hello" " " "world".
    - Embedded NUL in string literals affects strlen but not sizeof array initialization.
    */
    //#+end_marker d4m8y8o9c2f
    print_marked_block_as_c(sourceBuf, "d4m8y8o9c2f");

    h3("Observed output");
    fence_begin("text");
    printf("'A' value=%d sizeof('A')=%zu\n", 'A', sizeof('A'));
    printf("'\\n' value=%d\n", '\n');
    printf("L'A' sizeof element=%zu\n", sizeof(L'A'));
    {
        const char *s = "hello" " " "world";
        printf("\"hello\" \" \" \"world\" => %s\n", s);
        const char t[] = "a\0b";
        printf("strlen(\"a\\0b\")=%zu, sizeof array=%zu\n", strlen(t), sizeof t);
    }
    fence_end();

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "d4m8y8o9c2f");

    h3("Integer literal types and bases");
    fence_begin("c");
    /*
    Literal suffixes influence type selection:
      - 42   => int (or wider) per usual integer constant rules.
      - 42U  => unsigned int (or wider).
      - 42L  => long.
      - 0xFFFFFFFF without suffix may be unsigned int or unsigned long depending on width.
    */
    fence_end();
    fence_begin("text");
    printf("sizeof 42 = %zu\n", sizeof 42);
    printf("sizeof 42U = %zu\n", sizeof 42U);
    printf("sizeof 42L = %zu\n", sizeof 42L);
    printf("sizeof 0xFFFFFFFF = %zu (%s)\n", sizeof 0xFFFFFFFF, cat_impldef());
    printf("octal 077 => %d, hex 0x2A => %d\n", 077, 0x2A);
    fence_end();

    h3("Floating literal suffixes");
    fence_begin("text");
    printf("sizeof 1.0 = %zu, sizeof 1.0f = %zu, sizeof 1.0L = %zu\n", sizeof 1.0, sizeof 1.0f, sizeof 1.0L);
    fence_end();

    h3("Wide string basics");
    fence_begin("text");
    printf("sizeof L\"abc\" = %zu bytes, element size=%zu\n", sizeof(L"abc"), sizeof(L"abc"[0]));
    fence_end();
}

/* ---------------- 3. Type system highlights ---------------- */

static void print_plain_char_signedness(void) {
    signed char sc = -1;
    char c = (char)sc;
    printf("plain char is %s\n", c == -1 ? "signed" : "unsigned");
}

static void takes_restrict(int n, int * restrict p, int * restrict q) {
    for (int i = 0; i < n; ++i) { p[i] += q[i]; }
}

static void sec_type_system(const char *sourceBuf) {
    h2("3. Type system highlights");

    h3("Probe");
    //#+begin_marker s8m1e0q9v4y
    /*
    - The signedness of plain 'char' is implementation-defined.
    - _Bool is a distinct type; values are 0 or 1 after conversion.
    - Qualifiers like const/volatile do not change sizeof; 'restrict' is a promise
      about non-overlapping pointed-to objects that can enable better optimization.
    */
    //#+end_marker s8m1e0q9v4y
    print_marked_block_as_c(sourceBuf, "s8m1e0q9v4y");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "s8m1e0q9v4y");

    h3("Signedness of plain char");
    fence_begin("text");
    print_plain_char_signedness();
    fence_end();

    h3("_Bool and stdbool semantics");
    fence_begin("text");
    _Bool b = 2; /* any non-zero converts to 1 */
    printf("_Bool b = 2 => stored as %d; !b = %d\n", (int)b, (int)!b);
    fence_end();

    h3("Qualifiers and restrict");
    fence_begin("c");
    //#+begin_marker 2lxaq9m3y7p
    /*
    'restrict' qualifier on pointers promises that, for the lifetime of the pointers,
    only they (or values derived from them) will be used to access the pointed-to objects.
    This permits aliasing optimizations. It does not change the pointer's size or representation.
    */
    //#+end_marker 2lxaq9m3y7p
    fence_end();
    h3("Observed output");
    fence_begin("text");
    {
        int a[3] = {1,2,3}, b[3] = {10,20,30};
        takes_restrict(3, a, b);
        printf("after takes_restrict: a = {%d,%d,%d}\n", a[0], a[1], a[2]);
        printf("sizeof(int* restrict) == sizeof(int*) => %zu == %zu\n", sizeof(int* restrict), sizeof(int*));
    }
    fence_end();
    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "2lxaq9m3y7p");
}

/* ---------------- 4. sizeof and alignment micro-experiments ---------------- */

static void sec_sizeof_alignment(const char *sourceBuf) {
    h2("4. sizeof and alignment micro-experiments");

    h3("Probe");
    //#+begin_marker q4w7e2t9u6p
    /*
    Demonstrate sizeof for scalars, pointers, arrays, VLAs, structs, unions,
    and a host struct with a flexible array member (FAM).
    Alignment approximated via offsetof(struct{char c; T t;}, t).
    */
    //#+end_marker q4w7e2t9u6p
    print_marked_block_as_c(sourceBuf, "q4w7e2t9u6p");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "q4w7e2t9u6p");

    h3("Scalars");
    fence_begin("text");
#define P(T,name) printf("%-18s sizeof=%zu align~= %zu\n", name, sizeof(T), (size_t)offsetof(struct{char c; T t;}, t))
    P(char,"char"); P(short,"short"); P(int,"int"); P(long,"long");
    P(float,"float"); P(double,"double"); P(long double,"long double");
#undef P
    fence_end();

    h3("Pointers and function pointers");
    fence_begin("text");
    typedef int (*fp)(int);
    printf("sizeof(int*)=%zu, sizeof(double*)=%zu, sizeof(fp)=%zu\n", sizeof(int*), sizeof(double*), sizeof(fp));
    fence_end();

    h3("Fixed arrays");
    fence_begin("text");
    {
        char a1[3]; int a2[3]; double a3[3]; (void)a1; (void)a2; (void)a3;
        //#+begin_marker 7ovooikyhk8
        {
            const char *decl = "char a[3]";
            printf("%-23s  %8zu     %7zu  %5d  elem size * count\n",
                   decl, sizeof a1, sizeof a1[0], 3);
        }
        {
            const char *decl = "int a[3]";
            printf("%-23s  %8zu     %7zu  %5d  elem size * count\n",
                   decl, sizeof a2, sizeof a2[0], 3);
        }
        {
            const char *decl = "double a[3]";
            printf("%-23s  %8zu     %7zu  %5d  elem size * count\n",
                   decl, sizeof a3, sizeof a3[0], 3);
        }
        //#+end_marker 7ovooikyhk8
    }
    fence_end();
    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "7ovooikyhk8");

    h3("VLA at runtime");
    fence_begin("text");
    {
        int n = 7; int vla[n]; (void)vla;
        printf("n=%d, sizeof vla = %zu (expect n*sizeof(int)=%zu)\n", n, sizeof vla, (size_t)n*sizeof(int));
    }
    fence_end();

    h3("Structs and unions, flexible array host");
    fence_begin("text");
    struct A { char c; int i; };
    struct B { char c; double d; int i; };
    union U { int i; double d; char c; };
    struct Flex { size_t n; int data[]; };
    printf("struct A sizeof=%zu sum(fields)=%zu align~= %zu offsets: c=%zu i=%zu\n",
        sizeof(struct A), sizeof(char)+sizeof(int), (size_t)offsetof(struct{char c; struct A t;}, t),
        (size_t)offsetof(struct A,c), (size_t)offsetof(struct A,i));
    printf("struct B sizeof=%zu sum(fields)=%zu align~= %zu offsets: c=%zu d=%zu i=%zu\n",
        sizeof(struct B), sizeof(char)+sizeof(double)+sizeof(int), (size_t)offsetof(struct{char c; struct B t;}, t),
        (size_t)offsetof(struct B,c), (size_t)offsetof(struct B,d), (size_t)offsetof(struct B,i));
    printf("union U sizeof=%zu align~= %zu max(member sizes)=%zu\n",
        sizeof(union U), (size_t)offsetof(struct{char c; union U t;}, t),
        (sizeof(double)>sizeof(int)?sizeof(double):sizeof(int)));
    printf("struct Flex host sizeof=%zu (FAM contributes 0)\n", sizeof(struct Flex));
    fence_end();
}

/* ---------------- 5. Struct layout, padding, flexible arrays ---------------- */

static void sec_structs_flex(const char *sourceBuf) {
    h2("5. Struct layout, padding, and flexible arrays");

    h3("Probe");
    //#+begin_marker n3b7k2h9p5x
    /*
    Use offsetof to reveal padding. Compare assignment equality by fields, not memcmp.
    Bit-fields: widths and signedness are implementation-defined.
    Flexible array member: allocate sizeof(header)+n*sizeof(elem) and access payload.
    */
    //#+end_marker n3b7k2h9p5x
    print_marked_block_as_c(sourceBuf, "n3b7k2h9p5x");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "n3b7k2h9p5x");

    h3("offsetof and padding gaps");
    fence_begin("text");
    struct P { char c; int i; double d; };
    size_t sum = sizeof(char)+sizeof(int)+sizeof(double);
    printf("struct P sizeof=%zu fields sum=%zu offsets: c=%zu i=%zu d=%zu\n",
           sizeof(struct P), sum,
           (size_t)offsetof(struct P,c), (size_t)offsetof(struct P,i), (size_t)offsetof(struct P,d));
    fence_end();

    h3("Copy, assign, and equality");
    fence_begin("text");
    struct Q { int x; double y; };
    struct Q q1 = (struct Q){1, 2.0}, q2 = q1;
    int equal = (q1.x == q2.x) && (q1.y == q2.y);
    printf("struct assignment copies fields; equal by fields => %s\n", boolstr(equal));
    fence_end();

    h3("Bit-fields packing and signedness");
    fence_begin("text");
    struct BF { unsigned a:3; signed b:5; unsigned c:6; };
    struct BF bf = (struct BF){ 7u, -3, 0x2A };
    unsigned packed = 0;
    memcpy(&packed, &bf, sizeof bf < sizeof packed ? sizeof bf : sizeof packed);
    printf("BF sizeof=%zu, a=%u, b=%d, c=%u, first bytes 0x%08x (%s)\n",
           sizeof bf, bf.a, bf.b, bf.c, packed, cat_impldef());
    fence_end();

    h3("Flexible array idiom allocation");
    fence_begin("text");
    struct Flex { size_t n; int data[]; };
    size_t k = 5;
    size_t bytes = sizeof(struct Flex) + k*sizeof(int);
    struct Flex *fp = (struct Flex*)malloc(bytes);
    if (fp) {
        fp->n = k;
        for (size_t i=0;i<k;i++) fp->data[i] = (int)i*i;
        printf("malloc(%zu) ok; usable ints=%zu; last=%d\n", bytes, fp->n, fp->data[k-1]);
        free(fp);
    } else {
        printf("malloc failed\n");
    }
    fence_end();
}

/* ---------------- 6. Unions and aliasing observations ---------------- */

static void sec_unions_aliasing(const char *sourceBuf) {
    h2("6. Unions and aliasing observations");

    h3("Probe");
    //#+begin_marker v6t1r9p3c0d
    /*
    Reading a different union member than the one most recently written is
    implementation-defined; we use it only to illustrate overlapping representation.
    For non-integer bit patterns, use memcpy to a same-sized integer type.
    */
    //#+end_marker v6t1r9p3c0d
    print_marked_block_as_c(sourceBuf, "v6t1r9p3c0d");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "v6t1r9p3c0d");

    h3("Active member and overlap illustration");
    fence_begin("text");
    union U { uint32_t u; unsigned char b[4]; };
    union U u; u.u = 0x41424344u;
    printf("write u.u=0x41424344 then read bytes: %u %u %u %u (%s)\n",
        (unsigned)u.b[0], (unsigned)u.b[1], (unsigned)u.b[2], (unsigned)u.b[3], cat_impldef());
    fence_end();

    h3("Representations via memcpy, avoiding aliasing UB");
    fence_begin("text");
    {
        double d = 1.5;
        uint64_t bits = 0;
        memcpy(&bits, &d, sizeof bits);
        printf("double 1.5 bit pattern = 0x%016" PRIx64 "\n", (unsigned long long)bits);
    }
    fence_end();

    h3("Common initial sequence");
    fence_begin("text");
    {
        struct S1 { int tag; double x; };
        struct S2 { int tag; int y; };
        union US { struct S1 s1; struct S2 s2; };
        union US us = { .s1 = { 7, 3.14 } };
        printf("common initial tag=%d\n", us.s2.tag);
    }
    fence_end();
}

/* ---------------- 7. Expressions and conversions ---------------- */

static void sec_expr_conv(const char *sourceBuf) {
    h2("7. Expressions and conversions");

    h3("Probe");
    //#+begin_marker m5z2x8c1v7k
    /*
    - Integer promotions: smaller integer types promote to int in expressions.
    - Usual arithmetic conversions: mixing signed and unsigned can convert to unsigned.
    - Variadic calls apply default promotions: float -> double, char/short -> int.
    - Division and modulo with negatives truncate toward zero per C99.
    - Ternary operator chooses a common type via usual arithmetic conversions.
    */
    //#+end_marker m5z2x8c1v7k
    print_marked_block_as_c(sourceBuf, "m5z2x8c1v7k");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "m5z2x8c1v7k");

    h3("Integer promotions");
    fence_begin("text");
    {
        char c = 1; short s = 2;
        printf("sizeof(c+s) => %zu (promotes to int)\n", sizeof(c+s));
    }
    fence_end();

    h3("Usual arithmetic conversions");
    fence_begin("text");
    {
        unsigned u = 1; int i = -2;
        unsigned r = u + i; /* converted to unsigned of that rank */
        printf("u=1 (unsigned), i=-2 (int), u+i as unsigned => %u (%s)\n", r, cat_impldef());
    }
    fence_end();

    h3("Floating promotions in variadics");
    fence_begin("text");
    {
        float f = 1.25f;
        printf("printf %%f receives double, float promoted: %f\n", f);
    }
    fence_end();

    h3("Conversions and negatives");
    fence_begin("text");
    {
        double x = 3.9; int xi = (int)x;
        int a = -7, b = 3;
        printf("(int)3.9 = %d (trunc toward zero)\n", xi);
        printf("-7 / 3 = %d, -7 %% 3 = %d\n", a/b, a%b);
    }
    fence_end();

    h3("Ternary operator type resolution");
    fence_begin("text");
    {
        printf("sizeof( (1? 1 : 1.0) ) = %zu (to double)\n", sizeof(1?1:1.0));
        printf("sizeof( (1? -1 : 1u) ) = %zu (%s)\n", sizeof(1?-1:1u), cat_impldef());
    }
    fence_end();
}

/* ---------------- 8. Operators, evaluation, sequencing ---------------- */

static int side_counter;

static int side_effect(int *p) { (*p)++; return 1; }

static void sec_operators_eval(const char *sourceBuf) {
    h2("8. Operators, evaluation, and sequencing");

    h3("Probe");
    //#+begin_marker k9p1l3o7i2u
    /*
    Show only well-defined uses:
      - Post-increment used once in an expression.
      - Short-circuiting prevents evaluation of the right operand when not needed.
      - Right shift of negative signed integers is implementation-defined.
      - sizeof does not evaluate its operand.
    */
    //#+end_marker k9p1l3o7i2u
    print_marked_block_as_c(sourceBuf, "k9p1l3o7i2u");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "k9p1l3o7i2u");

    h3("Pre and post increment in sequenced contexts");
    fence_begin("text");
    {
        int x=1; int y = x++ + 2;
        printf("x=1; y = x++ + 2 => y=%d x=%d\n", y, x);
    }
    fence_end();

    h3("Short-circuiting");
    fence_begin("text");
    {
        side_counter = 0;
        int v = 0 && side_effect(&side_counter);
        printf("0 && side_effect => v=%d, counter=%d (rhs not evaluated)\n", v, side_counter);
        side_counter = 0;
        v = 1 || side_effect(&side_counter);
        printf("1 || side_effect => v=%d, counter=%d (rhs not evaluated)\n", v, side_counter);
    }
    fence_end();

    h3("Bit shifts");
    fence_begin("text");
    {
        unsigned u = 1u;
        printf("unsigned right shift: (1u<<3)>>1 = %u\n", (u<<3)>>1);
        int si = -4;
        printf("signed right shift of negative is %s; example (-4>>1)=%d\n", cat_impldef(), (si>>1));
    }
    fence_end();

    h3("sizeof on expressions is unevaluated");
    fence_begin("text");
    {
        int t = 0;
        sizeof(t++); /* not evaluated */
        printf("after sizeof(t++), t=%d (no increment)\n", t);
    }
    fence_end();
}

/* ---------------- 9. Control flow probes ---------------- */

static void sec_control_flow(const char *sourceBuf) {
    h2("9. Control flow probes");

    h3("Probe");
    //#+begin_marker b2n8m4v6c1q
    /*
    Count iterations for for/while/do-while to show entry semantics.
    Demonstrate switch fallthrough and nested-loop break/continue effects.
    */
    //#+end_marker b2n8m4v6c1q
    print_marked_block_as_c(sourceBuf, "b2n8m4v6c1q");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "b2n8m4v6c1q");

    h3("for, while, do-while");
    fence_begin("text");
    {
        int c1=0,c2=0,c3=0;
        for (int i=0;i<3;i++) c1++;
        int i=0; while (i<3) { c2++; i++; }
        i=0; do { c3++; i++; } while (i<3);
        printf("for=%d while=%d do-while=%d\n", c1,c2,c3);
    }
    fence_end();

    h3("switch and fallthrough");
    fence_begin("text");
    {
        int x=2, s=0;
        switch (x) {
            case 1: s+=1;
            case 2: s+=2; /* fallthrough intentional */
            default: s+=4;
        }
        printf("x=2, fallthrough sum=%d\n", s);
    }
    fence_end();

    h3("break and continue in nested loops");
    fence_begin("text");
    {
        int outer=0, inner=0;
        for (int i=0;i<3;i++) {
            outer++;
            for (int j=0;j<3;j++) {
                if (j==1) continue;
                inner++;
                if (i==1 && j==2) break;
            }
        }
        printf("outer=%d inner=%d\n", outer, inner);
    }
    fence_end();
}

/* ---------------- 10. Storage duration and initialization ---------------- */

static int external_var; /* external linkage in this TU */

static int static_once(void) {
    static int counter = 0;
    counter++;
    return counter;
}

static int *safe_copy_from_stack(void) {
    int local = 42;
    int *ret = (int*)malloc(sizeof(int));
    if (ret) *ret = local; /* copy value, not pointer to local */
    return ret;
}

static void sec_storage_init(const char *sourceBuf) {
    h2("10. Storage duration and initialization");

    h3("Probe");
    //#+begin_marker y7h3j9k1l0p
    /*
    - Static locals initialize once and retain value between calls.
    - Static-duration objects without explicit initializers are zero-initialized.
    - External linkage variable exists once per program.
    - Do not return pointer to a local; copy needed value to dynamic storage instead.
    */
    //#+end_marker y7h3j9k1l0p
    print_marked_block_as_c(sourceBuf, "y7h3j9k1l0p");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "y7h3j9k1l0p");

    h3("Static local initialization once");
    fence_begin("text");
    printf("static_once() calls: %d %d %d\n", static_once(), static_once(), static_once());
    fence_end();

    h3("Static-duration zero initialization");
    fence_begin("text");
    static int uninit_static;
    printf("uninitialized static int = %d\n", uninit_static);
    fence_end();

    h3("Linkage note");
    fence_begin("text");
    printf("external_var has external linkage in this translation unit; value=%d\n", external_var);
    fence_end();

    h3("Lifetime boundaries and safe copy");
    fence_begin("text");
    int *p = safe_copy_from_stack();
    if (p) { printf("copied value from dead frame = %d\n", *p); free(p); }
    fence_end();
}

/* ---------------- 11. Arrays, pointers, decay rules ---------------- */

static void takes_array_param(int a[], size_t n) {
    printf("in function: parameter sizeof(a)=%zu (pointer), n=%zu\n", sizeof a, n);
}

static void sec_arrays_pointers(const char *sourceBuf) {
    h2("11. Arrays, pointers, and decay rules");

    h3("Probe");
    //#+begin_marker t8g2f9d1s6a
    /*
    - Arrays decay to pointers in most expressions (including function calls).
    - Pointer arithmetic scales by sizeof(element); measure deltas within same array.
    - 2D arrays are row-major (rows contiguous).
    - VLAs have runtime size; sizeof(VLA) reflects runtime element count.
    - strlen stops at first NUL; sizeof(array) is full byte count.
    */
    //#+end_marker t8g2f9d1s6a
    print_marked_block_as_c(sourceBuf, "t8g2f9d1s6a");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "t8g2f9d1s6a");

    h3("Array to pointer decay");
    fence_begin("text");
    int a[4] = {1,2,3,4};
    printf("in scope: sizeof(a)=%zu\n", sizeof a);
    takes_array_param(a, 4);
    fence_end();

    h3("Pointer arithmetic scale factor");
    fence_begin("text");
    {
        int ai[2]; double ad[2];
        ptrdiff_t di = (char*)&ai[1] - (char*)&ai[0];
        ptrdiff_t dd = (char*)&ad[1] - (char*)&ad[0];
        printf("delta(&ai[1]-&ai[0])=%td bytes, delta(&ad[1]-&ad[0])=%td bytes\n", di, dd);
    }
    fence_end();

    h3("1D and 2D row-major layout");
    fence_begin("text");
    {
        int m[2][3] = {{1,2,3},{4,5,6}};
        printf("&m[0][0]=%p, &m[0][1]=%p, &m[1][0]=%p (row-major contiguous)\n",
               (void*)&m[0][0], (void*)&m[0][1], (void*)&m[1][0]);
    }
    fence_end();

    h3("VLA pass-through");
    fence_begin("text");
    {
        int n=5; int v[n]; v[0]=42;
        printf("VLA n=%d, sizeof v = %zu, first=%d\n", n, sizeof v, v[0]);
    }
    fence_end();

    h3("strlen vs sizeof for strings");
    fence_begin("text");
    {
        char s1[5] = "abc";
        char s2[5] = {'a','\0','x','y','z'};
        printf("s1: strlen=%zu sizeof=%zu; s2: strlen=%zu sizeof=%zu\n",
               strlen(s1), sizeof s1, strlen(s2), sizeof s2);
    }
    fence_end();
}

/* ---------------- 12. Functions and calling patterns ---------------- */

static int square_fn(int x) { return x*x; }
static int cube_fn(int x) { return x*x*x; }

static inline int add_inline(int a, int b) { return a+b; }

static int sum_variadic(int count, ...) {
    va_list ap; va_start(ap, count);
    long long acc = 0;
    for (int i=0;i<count;i++) {
        acc += va_arg(ap, int); /* default promotions: char, short promoted to int */
    }
    va_end(ap);
    return (int)acc;
}

static void sec_functions_calls(const char *sourceBuf) {
    h2("12. Functions and calling patterns");

    h3("Probe");
    //#+begin_marker r1c6v8b3n5m
    /*
    - Function pointers: take address and call through pointer.
    - static inline functions work within a single translation unit (C99).
    - Variadic functions: default promotions apply; printf returns chars written.
    */
    //#+end_marker r1c6v8b3n5m
    print_marked_block_as_c(sourceBuf, "r1c6v8b3n5m");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "r1c6v8b3n5m");

    h3("Function pointers");
    fence_begin("text");
    {
        int (*fp)(int) = square_fn;
        printf("square_fn(5) via pointer = %d, cube_fn(3) = %d\n", fp(5), cube_fn(3));
        printf("sizeof(function pointer)=%zu vs sizeof(void*)=%zu\n", sizeof fp, sizeof(void*));
    }
    fence_end();

    h3("Inline functions in one TU");
    fence_begin("text");
    printf("add_inline(2,3) = %d\n", add_inline(2,3));
    fence_end();

    h3("Variadic function and default promotions");
    fence_begin("text");
    {
        char a=1; short b=2; int c=3;
        printf("sum_variadic(a,b,c) = %d\n", sum_variadic(3, a, b, c));
        int n = printf("printf returns chars written: hello => ");
        printf("%d + 6\n", n);
    }
    fence_end();
}

/* ---------------- 13. qsort and bsearch ---------------- */

struct Rec { int key; int tag; };

static int cmp_int(const void *a, const void *b) {
    int ia = *(const int*)a, ib = *(const int*)b;
    return (ia>ib) - (ia<ib);
}

static int cmp_rec_by_key(const void *a, const void *b) {
    const struct Rec *ra = (const struct Rec*)a, *rb = (const struct Rec*)b;
    if (ra->key < rb->key) return -1;
    if (ra->key > rb->key) return 1;
    return (ra->tag > rb->tag) - (ra->tag < rb->tag); /* induce instability check */
}

static void sec_qsort_bsearch(const char *sourceBuf) {
    h2("13. qsort and bsearch on arrays");

    h3("Probe");
    //#+begin_marker p0l9k3j7h2g
    /*
    qsort requires a strict weak ordering comparator; it is not stable.
    bsearch requires the array to be sorted by the same comparator.
    */
    //#+end_marker p0l9k3j7h2g
    print_marked_block_as_c(sourceBuf, "p0l9k3j7h2g");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "p0l9k3j7h2g");

    h3("qsort of ints and instability note");
    fence_begin("text");
    {
        int a[8] = {5,1,4,2,8,0,2,5};
        qsort(a, 8, sizeof a[0], cmp_int);
        printf("sorted ints: ");
        for (int i=0;i<8;i++) printf("%d%s", a[i], i+1<8?" ":"");
        printf("\n");
        struct Rec r[4] = {{1,1},{1,2},{2,1},{2,2}};
        qsort(r, 4, sizeof r[0], cmp_rec_by_key);
        printf("records after qsort by key: ");
        for (int i=0;i<4;i++) printf("{k=%d,t=%d}%s", r[i].key, r[i].tag, i+1<4?" ":"");
        printf(" (order of equal keys is %s)\n", "unspecified");
    }
    fence_end();

    h3("bsearch success and failure");
    fence_begin("text");
    {
        int a[6] = {0,2,4,6,8,10};
        int key = 6;
        int *found = (int*)bsearch(&key, a, 6, sizeof a[0], cmp_int);
        printf("bsearch 6 => %s\n", found ? "found" : "not found");
        key = 7;
        found = (int*)bsearch(&key, a, 6, sizeof a[0], cmp_int);
        printf("bsearch 7 => %s\n", found ? "found" : "not found");
    }
    fence_end();
}

/* ---------------- 14. Time basics ---------------- */

static void sec_time_basics(const char *sourceBuf) {
    h2("14. Time basics");

    h3("Probe");
    //#+begin_marker z4x1c7v2b9n
    /*
    time() returns epoch seconds; localtime/gmtime convert to broken-down time; strftime formats.
    clock() measures CPU time used by the process; divide ticks by CLOCKS_PER_SEC.
    difftime gives a double difference between two time_t values.
    */
    //#+end_marker z4x1c7v2b9n
    print_marked_block_as_c(sourceBuf, "z4x1c7v2b9n");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "z4x1c7v2b9n");

    h3("time and localtime/gmtime");
    fence_begin("text");
    time_t now = time(NULL);
    printf("time() = %ld\n", (long)now);
    struct tm lt = *localtime(&now);
    struct tm gt = *gmtime(&now);
    char buf[64];
    strftime(buf, sizeof buf, "%Y-%m-%d %H:%M:%S", &lt);
    printf("localtime: %s\n", buf);
    strftime(buf, sizeof buf, "%Y-%m-%d %H:%M:%S", &gt);
    printf("gmtime:   %s\n", buf);
    fence_end();

    h3("clock and difftime");
    fence_begin("text");
    clock_t c0 = clock();
    volatile double acc = 0.0;
    for (int i=0;i<500000;i++) acc += sin((double)i*0.000001);
    clock_t c1 = clock();
    printf("clock dt = %.6f seconds\n", (double)(c1-c0)/CLOCKS_PER_SEC);
    time_t t0 = now, t1 = now + 3;
    printf("difftime(now+3, now) = %.0f\n", difftime(t1,t0));
    fence_end();
}

/* ---------------- 15. Memory management and object lifetime ---------------- */

static void sec_memory(const char *sourceBuf) {
    h2("15. Memory management and object lifetime");

    h3("Probe");
    //#+begin_marker c3v9b1n7m4k
    /*
    - malloc alignment suffices for any object type.
    - calloc zeroes memory; malloc leaves indeterminate bytes.
    - realloc may move or keep the same pointer; content preserved up to min(old,new).
    - memmove handles overlap; memcpy requires non-overlapping regions.
    - memset sets bytes; resulting int value from nonzero patterns is implementation-defined.
    */
    //#+end_marker c3v9b1n7m4k
    print_marked_block_as_c(sourceBuf, "c3v9b1n7m4k");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "c3v9b1n7m4k");

    h3("malloc alignment");
    fence_begin("text");
    {
        void *p = malloc(64);
        if (p) {
            printf("malloc ptr %% alignment 8 = %zu\n", ((size_t)(uintptr_t)p) % 8);
            free(p);
        }
    }
    fence_end();

    h3("calloc zero-initialization vs malloc");
    fence_begin("text");
    {
        unsigned char *m = (unsigned char*)malloc(8);
        unsigned char *c = (unsigned char*)calloc(8,1);
        if (m && c) {
            printf("malloc first 8 bytes: ");
            for (int i=0;i<8;i++) printf("%02x%s", m[i], i+1<8?" ":"");
            printf("\n");
            printf("calloc first 8 bytes: ");
            for (int i=0;i<8;i++) printf("%02x%s", c[i], i+1<8?" ":"");
            printf("\n");
        }
        free(m); free(c);
    }
    fence_end();

    h3("realloc growth and shrink");
    fence_begin("text");
    {
        size_t n=4;
        int *p = (int*)malloc(n*sizeof(int));
        if (p) {
            for (size_t i=0;i<n;i++) p[i]=(int)i;
            void *old=p;
            p = (int*)realloc(p, 8*sizeof(int));
            printf("realloc grow: moved=%s\n", (void*)p==old?"no":"maybe");
            p = (int*)realloc(p, 2*sizeof(int));
            printf("realloc shrink ok\n");
            free(p);
        }
    }
    fence_end();

    h3("memmove vs memcpy with overlap");
    fence_begin("text");
    {
        char s1[] = "abcdef";
        memmove(s1+2, s1, 4);
        printf("memmove overlap: %s\n", s1);
        printf("memcpy overlap: not executed to avoid UB; use memmove instead\n");
    }
    fence_end();

    h3("memset on non-char objects");
    fence_begin("text");
    {
        int x = 0;
        memset(&x, 0xFF, sizeof x);
        printf("memset int with 0xFF yields pattern, x=%d (%s)\n", x, cat_impldef());
        x = 0;
        memset(&x, 0x01, sizeof x);
        printf("memset int with 0x01 yields pattern, x=%d (%s)\n", x, cat_impldef());
    }
    fence_end();
}

/* ---------------- 16. Strings and byte operations ---------------- */

static void sec_strings_bytes(const char *sourceBuf) {
    h2("16. Strings and byte operations");

    h3("Probe");
    //#+begin_marker f2d7s9a1g6t
    /*
    - strlen stops at the first NUL.
    - strcpy copies including the terminating NUL; strncpy may omit the NUL when truncated.
    - strcat appends (check capacity first).
    - strchr/strrchr/strstr return pointers; print offsets via pointer subtraction.
    - strtok is stateful and not re-entrant.
    */
    //#+end_marker f2d7s9a1g6t
    print_marked_block_as_c(sourceBuf, "f2d7s9a1g6t");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "f2d7s9a1g6t");

    h3("strlen with embedded NUL");
    fence_begin("text");
    {
        char s[] = {'a','b','\0','c'};
        printf("strlen on {'a','b','\\0','c'} => %zu\n", strlen(s));
    }
    fence_end();

    h3("strcpy and strncpy");
    fence_begin("text");
    {
        char dst1[4]; char dst2[4];
        strcpy(dst1, "abc");
        strncpy(dst2, "abcd", sizeof dst2); /* no NUL if source len >= size */
        dst2[sizeof dst2 - 1] = '\0'; /* fix */
        printf("strcpy dst1=\"%s\"; strncpy fixed dst2=\"%s\"\n", dst1, dst2);
    }
    fence_end();

    h3("strcat with capacity check");
    fence_begin("text");
    {
        char buf[8] = "ab";
        size_t cap = sizeof buf;
        size_t len = strlen(buf);
        const char *add = "cdef";
        if (len + strlen(add) + 1 <= cap) strcat(buf, add);
        printf("after safe strcat => \"%s\"\n", buf);
    }
    fence_end();

    h3("strchr, strrchr, strstr offsets");
    fence_begin("text");
    {
        const char *s = "abracadabra";
        const char *p1 = strchr(s, 'a');
        const char *p2 = strrchr(s, 'a');
        const char *p3 = strstr(s, "cad");
        printf("first a at %td, last a at %td, \"cad\" at %td\n",
               p1? (ptrdiff_t)(p1-s):-1, p2? (ptrdiff_t)(p2-s):-1, p3? (ptrdiff_t)(p3-s):-1);
    }
    fence_end();

    h3("strtok statefulness");
    fence_begin("text");
    {
        char buf[] = "a,b,,c";
        char *tok = strtok(buf, ",");
        while (tok) { printf("[%s] ", tok); tok = strtok(NULL, ","); }
        printf("\n");
    }
    fence_end();
}

/* ---------------- 17. Character classification and case conversion ---------------- */

static void sec_ctype_case(const char *sourceBuf) {
    h2("17. Character classification and case conversion");

    h3("Probe");
    //#+begin_marker u5i9o3p1l7k
    /*
    ctype functions require inputs representable as unsigned char or EOF.
    Passing negative char values is undefined behavior; cast to unsigned char.
    We print a small table and demonstrate the signed-char trap.
    */
    //#+end_marker u5i9o3p1l7k
    print_marked_block_as_c(sourceBuf, "u5i9o3p1l7k");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "u5i9o3p1l7k");

    h3("Classification table");
    fence_begin("text");
    {
        const char *s = "A1 \t!";
        for (const char *p=s; *p; ++p) {
            unsigned char uc = (unsigned char)*p;
            printf("'%c': isalpha=%d isdigit=%d isspace=%d\n", *p, isalpha(uc)!=0, isdigit(uc)!=0, isspace(uc)!=0);
        }
    }
    fence_end();

    h3("Signed char trap");
    fence_begin("text");
    {
        char c = (char)0xFF;
        printf("isalpha((char)0xFF) => %d, isalpha((unsigned char)0xFF) => %d\n",
               isalpha(c), isalpha((unsigned char)c));
    }
    fence_end();

    h3("toupper and tolower");
    fence_begin("text");
    {
        unsigned char ch = 'a';
        printf("toupper('a')=%c, tolower('Z')=%c\n", toupper(ch), tolower('Z'));
    }
    fence_end();
}

/* ---------------- 18. Math library and special values ---------------- */

static void sec_math_special(const char *sourceBuf) {
    h2("18. Math library and special values");

    h3("Probe");
    //#+begin_marker h8j2k6l1m9n
    /*
    - NaN propagates through arithmetic; classify with isnan/isfinite.
    - Floating division by zero yields +/-inf (int division by zero is undefined).
    - Repeated addition of 0.1 shows rounding error in binary floating point.
    - hypot(x,y) handles large arguments more robustly than sqrt(x*x+y*y).
    */
    //#+end_marker h8j2k6l1m9n
    print_marked_block_as_c(sourceBuf, "h8j2k6l1m9n");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "h8j2k6l1m9n");

    h3("NaN propagation and finiteness");
    fence_begin("text");
    {
        double z = NAN;
        printf("NAN + 1 => isnan=%d, isfinite=%d\n", isnan(z+1.0)!=0, isfinite(z+1.0)!=0);
    }
    fence_end();

    h3("Division by zero behavior");
    fence_begin("text");
    {
        double v = 1.0/0.0;
        printf("1.0/0.0 => %s, sign=%s\n", isinf(v)?"inf":"other", v>0?"plus":"minus");
    }
    fence_end();

    h3("Rounding illustration");
    fence_begin("text");
    {
        double s=0.0; for (int i=0;i<10;i++) s+=0.1;
        printf("sum of 0.1 ten times = %.20f, difference vs 1.0 = %.20f\n", s, s-1.0);
    }
    fence_end();

    h3("hypot vs sqrt(x*x+y*y)");
    fence_begin("text");
    {
        double x=1e200, y=1e200;
        double h=hypot(x,y);
        double naive = sqrt(x*x + y*y);
        printf("hypot=%.3e, sqrt-sum=%.3e\n", h, naive);
    }
    fence_end();
}

/* ---------------- 19. Random numbers ---------------- */

static void sec_randoms(const char *sourceBuf) {
    h2("19. Random numbers");

    h3("Probe");
    //#+begin_marker q7w1e3r9t5y
    /*
    srand seeds the PRNG deterministically; rand() generates pseudo-random ints in [0, RAND_MAX].
    Mapping to smaller ranges via modulo introduces bias unless divisible; rejection sampling avoids bias.
    */
    //#+end_marker q7w1e3r9t5y
    print_marked_block_as_c(sourceBuf, "q7w1e3r9t5y");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "q7w1e3r9t5y");

    h3("RAND_MAX and determinism");
    fence_begin("text");
    printf("RAND_MAX=%d\n", RAND_MAX);
    srand(1234);
    printf("stream:");
    for (int i=0;i<5;i++) printf(" %d", rand());
    printf("\n");
    fence_end();

    h3("Modulo bias vs rejection sampling");
    fence_begin("text");
    {
        int n=6;
        int r = rand() % n;
        printf("rand() %% %d => %d (biased)\n", n, r);
        int bound = RAND_MAX - (RAND_MAX % n);
        int x;
        do { x = rand(); } while (x >= bound);
        printf("rejection sampling into [0,%d): %d (unbiased)\n", n, x % n);
    }
    fence_end();
}

/* ---------------- 20. Command-line arguments echo ---------------- */

static void sec_argv_echo(int argc, char **argv, const char *sourceBuf) {
    h2("20. Command-line arguments");

    h3("Probe");
    //#+begin_marker o9i3u7y1t5r
    /*
    Print argc and each argv quoted. Then parse with strtol/strtod, showing
    where parsing stops via endptr, without terminating on errors.
    */
    //#+end_marker o9i3u7y1t5r
    print_marked_block_as_c(sourceBuf, "o9i3u7y1t5r");

    h3("Probe source excerpt");
    print_marked_block_as_c(sourceBuf, "o9i3u7y1t5r");

    h3("argv echo");
    fence_begin("text");
    printf("argc=%d\n", argc);
    for (int i=0;i<argc;i++) printf("argv[%d] = \"%s\"\n", i, argv[i]);
    fence_end();

    h3("strtol and strtod parsing");
    fence_begin("text");
    {
        const char *s1 = "123x", *s2 = "3.14y";
        char *end = NULL;
        long v1 = strtol(s1, &end, 10);
        printf("strtol(\"%s\") => %ld, stopped at \"%s\"\n", s1, v1, end);
        double v2 = strtod(s2, &end);
        printf("strtod(\"%s\") => %f, stopped at \"%s\"\n", s2, v2, end);
    }
    fence_end();
}

/* ---------------- 21. Portability and behavior categories index ---------------- */

static void sec_portability_index(void) {
    h2("21. Portability and behavior categories index");
    fence_begin("text");
    printf("Endianness: %s\n", cat_impldef());
    printf("Signed right shift of negative: %s\n", cat_impldef());
    printf("Struct layout and padding: %s\n", cat_impldef());
    printf("Union byte order view: %s\n", cat_impldef());
    printf("Sizes, integer and floating limits: %s\n", cat_defined());
    printf("VLA size and behavior: %s (if VLA supported by implementation)\n", cat_defined());
    printf("Integer literal width selection on 0xFFFFFFFF: %s\n", cat_impldef());
    fence_end();
}

/* ---------------- 22. Report formatting and reproducibility ---------------- */

static void sec_footer_appendix(const char *path) {
    h2("22. Source of this program");
    fence_begin("c");
    FILE *f = fopen(path, "rb");
    if (!f) {
        printf("/* failed to open %s */\n", path);
        fence_end();
        return;
    }
    char buf[4096];
    size_t n;
    while ((n = fread(buf, 1, sizeof buf, f)) > 0) {
        for (size_t i = 0; i < n; ++i) { if (buf[i] != '\r') putchar(buf[i]); }
    }
    fclose(f);
    fence_end();
}

/* ---------------- main ---------------- */

int main(int argc, char **argv) {
    char *sourceBuf = read_entire_file(__FILE__);

    printf("# C99 exploratory cheatsheet\n\n");
    printf("This report is produced by running a single C99 program that executes small probes and prints Markdown.\n\n");
    printf("---\n\n");

    sec_header_build_env(sourceBuf);
    sec_fundamental(sourceBuf);
    sec_literals(sourceBuf);
    sec_type_system(sourceBuf);
    sec_sizeof_alignment(sourceBuf);
    sec_structs_flex(sourceBuf);
    sec_unions_aliasing(sourceBuf);
    sec_expr_conv(sourceBuf);
    sec_operators_eval(sourceBuf);
    sec_control_flow(sourceBuf);
    sec_storage_init(sourceBuf);
    sec_arrays_pointers(sourceBuf);
    sec_functions_calls(sourceBuf);
    sec_qsort_bsearch(sourceBuf);
    sec_time_basics(sourceBuf);
    sec_memory(sourceBuf);
    sec_strings_bytes(sourceBuf);
    sec_ctype_case(sourceBuf);
    sec_math_special(sourceBuf);
    sec_randoms(sourceBuf);
    sec_argv_echo(argc, argv, sourceBuf);
    sec_portability_index();
    sec_footer_appendix(__FILE__);

    printf("---\n\n");
    printf("_Generated by a single-file C99 program. Output is platform and compiler specific._\n");

    free(sourceBuf);
    return 0;
}
```

---

_Generated by a single-file C99 program. Output is platform and compiler specific._
