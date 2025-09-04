# dev-c99
Date: 2025-09-03

## Compilation and warnings

```sh
# Clang on Unix-like systems
clang -std=c99 -Wall -Wextra -Werror -O2 -g main.c -o main
```

This compiles main.c as C99 with Clang, enables many warnings (-Wall), adds extra diagnostics (-Wextra), and promotes all warnings to errors (-Werror). -O2 optimizes, -g keeps symbols for debugging, and -o main names the output.
[Clang Command Guide](https://clang.llvm.org/docs/CommandGuide/clang.html)

```sh
# GCC on Unix-like systems
gcc -std=c99 -Wall -Wextra -Werror -O2 -g main.c -o main
```

This compiles main.c as C99 with GCC. -Wall, -Wextra, and -Werror control diagnostics; -O2 and -g set optimization and debug info; -o names the output.
[GCC Warning Options](https://gcc.gnu.org/onlinedocs/gcc-14.1.0/gcc/Warning-Options.html)

```bat
:: MSVC cl.exe on Windows Developer Command Prompt
:: Note: cl.exe does not have a C99 mode switch. It can compile C code, but full C99 conformance is not guaranteed.
cl /TC /W4 /WX /Zi /O2 main.c /Fe:main.exe
```

This compiles main.c as C with MSVC. /TC forces C mode, /W4 is a high warning level, /WX treats warnings as errors, /Zi emits PDB debug info, /O2 optimizes, and /Fe names the exe. For strict C99 needs on Windows, use Clang or GCC toolchains.
[MSVC Warning Levels](https://learn.microsoft.com/en-us/cpp/build/reference/compiler-option-warning-level?view=msvc-170)
[MSVC C Language Conformance Notes](https://learn.microsoft.com/en-us/cpp/c-language/c-language-reference?view=msvc-170)

```bat
:: Clang-cl on Windows (MSVC-compatible driver, still C99 frontend)
clang-cl /std:c99 /W4 /WX /Zi /O2 main.c /Fe:main.exe
```

This uses Clang on Windows with MSVC-style flags, targeting C99. You get Clang diagnostics and codegen while integrating with MSVC-style tools and linkers.
 [Clang-cl User Guide](https://clang.llvm.org/docs/UsersManual.html#clang-cl)

```sh
# Tiny C Compiler (TCC)
# TCC is a C compiler; it does not compile C++ and has a smaller warning set.
tcc -std=c99 -Wall -Werror main.c -o main
```

This compiles main.c as C99 with TCC. -Wall enables its warnings and -Werror treats them as errors. TCC does not support -Wextra.
[Tiny C Compiler Reference](https://bellard.org/tcc/tcc-doc.html)



## Video

2025-08-01 [How I program C - YouTube](https://www.youtube.com/watch?v=443UNeGrFoM) { www.youtube.com }

> ![image-20250801102620753](dev-c99.assets/image-20250801102620753.png)
> **Speaker** Eskil Steenberg – game-engine and tools developer (Quel Solaar)
> **Recording** Seattle, Oct 2016 (2 h 11 m)
>
> Key themes
>
> - Results first, control later – why explicit memory management, crashes, and compiler errors are desirable.
> - Minimise technology footprint – target C89/C90, wrap every dependency, zero un-wrapped libraries.
> - Code is for humans – long descriptive names, uniform naming schemes, wide functions, avoid cleverness (e.g. operator overloading).
> - Favour simple languages plus strong tooling – write parsers, debuggers, doc generators yourself.
> - Memory mastery – pointers as arrays, alignment and padding, struct packing, cache-friendly dynamic arrays + `realloc`, dangers of linked lists.
> - API design – opaque handles (void *), start with public interface, isolate implementation, macro-assisted debug wrappers (`__FILE__`, `__LINE__`).
> - Build a mountain – own your stack, keep technical debt near zero, rewrite early.
> - UI toolkit pattern – single pass, stateless widgets keyed by pointer IDs; layout and hit-testing resolved internally.
> - Tools and snippets – Carmack inverse-sqrt; xorshift32 PRNG; GFlags page-guarding for memory bugs; Seduce UI; Testify binary packer; Ministry of Flat un-wrapper.
>
> **Talk structure in order of appearance**
>
> - Motivation and philosophy
> - Results vs control; garbage collection vs manual `free`
> - Small footprint and dependency wrapping
> - Naming conventions and formatting policies
> - Crashes and compiler errors as friends
> - Macros: when to use, when to avoid
> - Deep dive: pointers, arrays, structs, alignment, packed allocations
> - Cache-aware data structures; `realloc` growth patterns; backwards remove
> - API style with opaque handles; object orientation in C
> - Memory-debug and binary-packing helpers using `__FILE__` `__LINE__`
> - UI toolkit design example (Seduce)
> - Build-your-own-tools mindset; “build a mountain” analogy
> - Closing resources and project links

2025-08-01 [C Programming Full Course for free ⚙️ (2025) - YouTube](https://www.youtube.com/watch?v=xND0t1pr3KY) {www.youtube.com}

> ![image-20250801103430609](dev-c99.assets/image-20250801103430609.png)

2025-08-02 [Go from mid-level to advanced C programmer in two hours - YouTube](https://www.youtube.com/watch?v=eh8zBTTgRn4) {www.youtube.com}

> ![image-20250801230639700](dev-c99.assets/image-20250801230639700.png)

2025-08-02 [C Programming and Memory Management - Full Course - YouTube](https://www.youtube.com/watch?v=rJrd2QMVbGM) {www.youtube.com}

> Interesting, "Boot Dev", known for very annoying ads, also have some quality content
>
> ![image-20250801230857693](dev-c99.assets/image-20250801230857693.png)

2025-08-02 [I'm Building C with C without CMake - YouTube](https://www.youtube.com/watch?v=D1bsg8wkZzo) {www.youtube.com}

> ![image-20250801233701958](dev-c99.assets/image-20250801233701958.png)

2025-08-02 [Tips for C Programming - YouTube](https://www.youtube.com/watch?v=9UIIMBqq1D4) {www.youtube.com}

> ![image-20250802105718241](dev-c99.assets/image-20250802105718241.png)

**Topics covered**

* C in context: history, loadbearing role, perception vs practice
* C versions: C89 vs C99, syntax and QoL differences
* Compiler discipline: -std, -Wall, -Werror, -save-temps
* Project organization: headers vs single translation unit
* Debugging fundamentals: segfault model, call stacks, IDE debuggers
* Memory corruption and ASan: off-by-one, red zones, -fsanitize=address
* Arrays with length and capacity, bounds-checked access
* Generics tradeoffs in C: per-type code, macros, codegen
* Strings with explicit length, slices, avoiding standard libc pitfalls
* Pointers vs indices: relocation safety, bounds checks, serialization, generational indices
* Memory management by lifetime: static, scope, task; arenas for task-scoped data

**All examples referenced**

* C89 quirks: declare locals at top, positional struct init, type sizes vary
* C99 features: mixed declarations, designated initializers, stdint.h types, compound literals, // comments
* Compiler flags: -std=c99, -Wall, -Werror, -save-temps, -fsanitize=address
* Include behavior: literal paste, unity build via including .c files
* Segfault demo: dereference NULL, debugger halts on exact line
* Off-by-one bug: i <= count - 1 writes 1 past end, ASan catches
* Bounds-checked array: struct with length and capacity, get function
* Strings with length: slice without copying, avoid strlen pitfalls
* Indices not pointers: smaller references, resize-safe, serialize-friendly
* Arenas: one big alloc per task, one free, faster and simpler

**Small examples, close to the talk**

```c
// C99: declare where used, loop index scoped to loop
for (int i = 0; i < n; i++) { /* ... */ }
```

```c
// C99 designated initializer
typedef struct { int id; const char *name; int age; } User;
User u = { .name = "Ada", .age = 36, .id = 1 };  // order independent
```

```c
// Fixed-width and pointer-sized integers from stdint.h
#include <stdint.h>
uint32_t a = 0;
uintptr_t pbits = (uintptr_t)some_ptr;  // big enough to hold a pointer
```

```c
// Compiler discipline
// clang -std=c99 -Wall -Werror -O2 main.c
// clang -std=c99 -Wall -Werror -save-temps -O0 main.c
```

```c
// Unity build: single translation unit
// main.c
#include "math.c"
#include "strings.c"
int main(void) { return app_run(); }
// clang -std=c99 -Wall -Werror -O2 main.c
```

```c
// Segfault demo with debugger
int *p = 0;            // NULL
int x = *p;            // debugger halts here with SIGSEGV
```

```c
// Off-by-one corruption; ASan will flag the write past end
// clang -std=c99 -fsanitize=address -g oob.c -o oob
int *v = malloc(sizeof(int) * 10);
for (int i = 0; i <= 9; i++) v[i] = i;  // OK
v[10] = 42;                             // ASan error: heap-buffer-overflow
```

```c
// Bounds-checked dynamic array, minimal
typedef struct { size_t len; size_t cap; int *data; } IntArray;

static inline int int_array_get(const IntArray *a, size_t i) {
    if (i >= a->len) { __builtin_trap(); return 0; }  // debug break
    return a->data[i];
}
```

```c
// String with explicit length and slicing
typedef struct { const char *ptr; size_t len; } Str;

static inline Str str_slice(Str s, size_t off, size_t n) {
    if (off > s.len) { __builtin_trap(); return (Str){0}; }
    if (n > s.len - off) n = s.len - off;
    return (Str){ s.ptr + off, n };
}
```

```c
// Index over pointer for stable references
typedef struct { int id; /* ... */ } User;
typedef struct { size_t len; size_t cap; User *data; } UserArray;

typedef struct { uint32_t user_index; } Session;  // 32-bit index ref

static inline User *user_from_index(UserArray *ua, uint32_t idx) {
    if (idx >= ua->len) { __builtin_trap(); return 0; }
    return &ua->data[idx];
}
```

```c
// Arena allocator sketch for task lifetime
typedef struct { uint8_t *base; size_t used; size_t cap; } Arena;

void *arena_alloc(Arena *a, size_t n, size_t align) {
    size_t p = (a->used + (align - 1)) & ~(align - 1);
    if (p + n > a->cap) return 0;
    void *ptr = a->base + p;
    a->used = p + n;
    return ptr;
}
// Create once per task with a single malloc; free once when task ends.
```

```c
// Compound literal + designated init to pass a struct inline
typedef struct { int x, y; } Pt;
void draw_point(Pt p);
draw_point((Pt){ .x = 10, .y = 20 });
```

```c
// // single-line comments are valid in C99
// Use them freely for clarity.
```

> C is loadbearing tech. C99 removes unnecessary pain. I lock the compiler down with -Wall and -Werror. I keep builds simple with a unity build when it fits. I never chase blind crashes; I run a debugger and ASan so memory bugs surface at the line, not in production. I wrap arrays with length and bounds, and I carry string lengths so slices are cheap and safe. I store indices instead of pointers so my data survives resizes and serializes cleanly. I allocate by lifetime and free by lifetime with arenas. With these habits, C turns from scary to sharp.


2025-07-13 [Parse, Don’t Validate AKA Some C Safety Tips](https://www.lelanthran.com/chap13/content.html) { www.lelanthran.com }

> The article "Parse, Don’t Validate AKA Some C Safety Tips" by Lelanthran expands on the concept of converting input into strong types rather than merely validating it as plain strings. It demonstrates how this approach, when applied in C, reduces error-prone code and security risks. The post outlines three practical benefits: boundary handling with opaque types, safer memory cleanup via pointer‑setting destructors, and compile‑time type safety that prevents misuse deeper in the codebase.
>
> **Key Takeaways:**
>
> 1. **Use Strong, Opaque Types for Input**
>    - Instead of handling raw `char *`, parse untrusted input into dedicated types like `email_t` or `name_t`.
>    - This restricts raw input to the system boundary and ensures all later code works with validated, structured data.
> 2. **Reduce Attack Surface**
>    - Only boundary functions see untrusted strings; internal functions operate on safe, strongly typed data.
>    - This prevents deeper code from encountering malformed or malicious input.
> 3. **Enforce Correctness at Compile Time**
>    - With distinct types, the compiler prohibits misuse, such as passing an `email_t*` to a function expecting a `name_t*`.
>    - What would be a runtime bug becomes a compiler error.
> 4. **Implement Defensive Destructors**
>    - Design destructor functions to take a double pointer (`T **`) so they can free and then set the pointer to `NULL`.
>    - This prevents double‑free errors and related memory safety issues.
> 5. **Eliminate Internal String Handling**
>    - By centralizing parsing near the system entry and eliminating `char *` downstream, code becomes safer and clearer.
>    - Once input is parsed, the rest of the system works with well-typed data only.
>
> ![image-20250713115328366](dev-c99.assets/image-20250713115328366.png)



## Dev C Articles

- 2022-03-05 [Beginner's Guide to Linkers](https://www.lurklurk.org/linkers/linkers.html)

> This article is intended to help C & C++ programmers understand the essentials of what the linker does. I've explained this to a number of colleagues over the years, so I decided it was time to write it down so that it's more widely available.

- 2022-11-28 [Everything I wish I knew when learning C - Tom M](https://tmewett.com/c-tips/)

> Learning C was quite difficult for me. The basics of the language itself weren’t so bad, but “programming in C” requires a lot of other kinds of knowledge which aren’t as easy to pick up on:
>
> - C has no environment which smooths out platform or OS differences; you need to know about your platform too
> - there are many C compiler options and build tools, making even running a simple program involve lots of decisions
> - there are important concepts related to CPUs, OSes, compiled code in general
> - it’s used in such varied ways that there’s far less a centralised “community” or style than other languages

- 2022-11-13 Building a simple shell in C

  > A basic shell that prints a prompt, waits for user to enter command and prints what they entered on the next line

  - [Building a simple shell in C - Part 1](https://blog.ehoneahobed.com/building-a-simple-shell-in-c-part-1)
  - [Building a simple shell in C - Part 2](https://blog.ehoneahobed.com/building-a-simple-shell-in-c-part-2)
  - [Building a simple shell in C - Part 3](https://blog.ehoneahobed.com/building-a-simple-shell-in-c-part-3)

- 2022-11-13 [Build Your Own Text Editor](https://viewsourcecode.org/snaptoken/kilo/)

  > Welcome! This is an instruction booklet that shows you how to build a text editor in C.
  >
  > The text editor is antirez’s kilo, with some changes. It’s about 1000 lines of C in a single file with no dependencies, and it implements all the basic features you expect in a minimal editor, as well as syntax highlighting and a search feature.

- 2023-05-22 [Memory Allocation](https://samwho.dev/memory-allocation/)

> One thing that all programs on your computer have in common is a need for memory. Programs need to be loaded from your hard drive into memory before they can be run. While running, the majority of what programs do is load values from memory, do some computation on them, and then store the result back in memory.
>
> In this post I'm going to introduce you to the basics of memory allocation. Allocators exist because it's not enough to have memory available, you need to use it effectively. We will visually explore how simple allocators work. We'll see some of the problems that they try to solve, and some of the techniques used to solve them. At the end of this post, you should know everything you need to know to write your own allocator.
>
> ![image-20230528170203659](dev-c99.assets/image-20230528170203659.png)

- 2023-07-01 [Few lesser known tricks, quirks and features of C](https://jorengarenar.github.io/blog/less-known-c)

> There are some tricks, quirks and features (some quite fundamental to the language!) which seems to throw even experienced developers off the track. Thus I did a sloppy job of gathering some of them in this post (in no particular order) with even sloppier short explanations and/or examples (or quote of thereof).
>
> - [Array pointers](https://jorengarenar.github.io/blog/less-known-c#array-pointers)
> - [Comma operator](https://jorengarenar.github.io/blog/less-known-c#comma-operator)
> - [Digraphs, trigraphs and alternative tokens](https://jorengarenar.github.io/blog/less-known-c#digraphs-trigraphs-and-alternative-tokens)
> - [Designated initializer](https://jorengarenar.github.io/blog/less-known-c#designated-initializer)
> - [Compound literals](https://jorengarenar.github.io/blog/less-known-c#compound-literals)
> - [Compound literals are lvalues](https://jorengarenar.github.io/blog/less-known-c#compound-literals-are-lvalues)
> - [Multi-character constants](https://jorengarenar.github.io/blog/less-known-c#multi-character-constants)
> - [Bit fields](https://jorengarenar.github.io/blog/less-known-c#bit-fields)
> - [0 bit fields](https://jorengarenar.github.io/blog/less-known-c#0-bit-fields)
> - [`volatile` type qualifier](https://jorengarenar.github.io/blog/less-known-c#volatile-type-qualifier)
> - [`restrict` type qualifier](https://jorengarenar.github.io/blog/less-known-c#restrict-type-qualifier)
> - [`register` type qualifier](https://jorengarenar.github.io/blog/less-known-c#register-type-qualifier)
> - [Flexible array member](https://jorengarenar.github.io/blog/less-known-c#flexible-array-member)
> - [`%n` format specifier](https://jorengarenar.github.io/blog/less-known-c#n-format-specifier)
> - [`%.*` (minimum field width) format specifier](https://jorengarenar.github.io/blog/less-known-c#-minimum-field-width-format-specifier)
> - [Other less known format specifiers](https://jorengarenar.github.io/blog/less-known-c#other-less-known-format-specifiers)
> - [Interlacing syntactic constructs](https://jorengarenar.github.io/blog/less-known-c#interlacing-syntactic-constructs)
> - [`-->` "operator"](https://jorengarenar.github.io/blog/less-known-c#---operator)
> - [`idx[arr\]`](https://jorengarenar.github.io/blog/less-known-c#idxarr)
> - [Negative array indexes](https://jorengarenar.github.io/blog/less-known-c#negative-array-indexes)
> - [Constant string concatenation](https://jorengarenar.github.io/blog/less-known-c#constant-string-concatenation)
> - [Backslash line splicing](https://jorengarenar.github.io/blog/less-known-c#backslash-line-splicing)
> - [Using `&&` and `||` as conditionals](https://jorengarenar.github.io/blog/less-known-c#using--and--as-conditionals)
> - [Compile time assumption checking using `enum`s](https://jorengarenar.github.io/blog/less-known-c#compile-time-assumption-checking-using-enums)
> - [Ad hoc `struct` declaration in the return type of a function](https://jorengarenar.github.io/blog/less-known-c#ad-hoc-struct-declaration-in-the-return-type-of-a-function)
> - ["Nested" `struct` definition is not kept nested](https://jorengarenar.github.io/blog/less-known-c#nested-struct-definition-is-not-kept-nested)
> - [Flat initializer lists](https://jorengarenar.github.io/blog/less-known-c#flat-initializer-lists)
> - [Implicit casting of `void` pointers](https://jorengarenar.github.io/blog/less-known-c#implicit-casting-of-void-pointers)
> - [Static array indices in function parameter declarations](https://jorengarenar.github.io/blog/less-known-c#static-array-indices-in-function-parameter-declarations)
> - [Macro Overloading by Argument List Length](https://jorengarenar.github.io/blog/less-known-c#macro-overloading-by-argument-list-length)
> - [Function types](https://jorengarenar.github.io/blog/less-known-c#function-types)
> - [X-Macros](https://jorengarenar.github.io/blog/less-known-c#x-macros)
> - [Named function parameters](https://jorengarenar.github.io/blog/less-known-c#named-function-parameters)
> - [Combining default, named and positional arguments](https://jorengarenar.github.io/blog/less-known-c#combining-default-named-and-positional-arguments)
> - [Abusing unions for grouping things into namespaces](https://jorengarenar.github.io/blog/less-known-c#abusing-unions-for-grouping-things-into-namespaces)
> - [Unity builds](https://jorengarenar.github.io/blog/less-known-c#unity-builds)
> - [Matching character classes with `sscanf()`](https://jorengarenar.github.io/blog/less-known-c#matching-character-classes-with-sscanf)
> - [Garbage collector](https://jorengarenar.github.io/blog/less-known-c#garbage-collector)
> - [Cosmopolitan Libc](https://jorengarenar.github.io/blog/less-known-c#cosmopolitan-libc)
> - [Inline assembly](https://jorengarenar.github.io/blog/less-known-c#inline-assembly)
> - [Object Oriented Programming](https://jorengarenar.github.io/blog/less-known-c#object-oriented-programming)
> - [Metaprogramming](https://jorengarenar.github.io/blog/less-known-c#metaprogramming)
> - [Evaluate `sizeof` at compile time by causing duplicate case error](https://jorengarenar.github.io/blog/less-known-c#evaluate-sizeof-at-compile-time-by-causing-duplicate-case-error)

2023-06-30 [Structures in C: From Basics to Memory Alignment – Abstract Expression](https://abstractexpr.com/2023/06/29/structures-in-c-from-basics-to-memory-alignment/)

> Structures allow us to combine several variables to create a new data type. Some other languages support the same concept but call it “records”. If you come from object-oriented programming you can think about them as classes without methods.
>
> ![image-20230702152138229](dev-c99.assets/image-20230702152138229.png)



## Books

1993 ⭐ [Object-oriented Programming with ANSI-C (1993) [pdf]](https://www.mclibre.org/descargar/docs/libros/ooc-ats.pdf)

> Retro document! but very well written
>
> ![image-20230629003429585](dev-c99.assets/image-20230629003429585.png)



## RSS

## Dev C Tools

- 2022-03-07 [clibs/clib: C package manager-ish](https://github.com/clibs/clib)

> Package manager for the C programming language.

## Dev C Libs

### Net

2023-05-17 [Home - DPDK](https://www.dpdk.org/)

> 2023-05-17 [DPDK/dpdk: Data Plane Development Kit](https://github.com/DPDK/dpdk)
>
> DPDK (Data Plane Development Kit) is an open-source software project that provides a set of libraries and drivers for fast packet processing in user space. Its main goal is to increase the performance of packet processing applications running on standard computing platforms. The project is hosted and can be accessed at [www.dpdk.org](http://www.dpdk.org/). It's widely used in network interface cards, routers, firewalls, and other networking appliances.




### C language development

- 2022-03-05 [Cello • High Level C](https://libcello.org/)

> Cello is a library that brings higher level programming to C.
> New C syntax for New Era!

```c
#include "Cello.h"

int main(int argc, char** argv) {

  /* Stack objects are created using "$" */
  var i0 = $(Int, 5);
  var i1 = $(Int, 3);
  var i2 = $(Int, 4);

  /* Heap objects are created using "new" */
  var items = new(Array, Int, i0, i1, i2);

  /* Collections can be looped over */
  foreach (item in items) {
    print("Object %$ is of type %$\n",
      item, type_of(item));
  }

  /* Heap objects destructed via Garbage Collection */
  return 0;
}
```

- 2022-03-16 [libmill](http://libmill.org/index.html) Libmill is a library that introduces Go-style concurrency to C

```c
go(foo(arg1, arg2, arg3));
chan ch = chmake(int, 0);
chan ch = chmake(int, 1000);
chs(ch, int, 42);
```

### SIMD

- 2022-05-01 `simd` [Removing characters from strings faster with AVX-512 – Daniel Lemire's blog](https://lemire.me/blog/2022/04/28/removing-characters-from-strings-faster-with-avx-512/)

> A computer science professor at the University of Quebec (TELUQ). View all posts by Daniel Lemire

- [DragonSpit/HPCsharp: High performance algorithms in C#: SIMD/SSE, multi-core and faster](https://github.com/DragonSpit/HPCsharp)
- (2021-09-26) [google/highway: Performance-portable, length-agnostic SIMD with runtime dispatch](https://github.com/google/highway)
- (2021-12-26) [Splitting CSV files at 3GB/s · Tinybird](https://blog.tinybird.co/2021/12/14/simd/) with SIMD! Good C lang examples on this topic.

- 2023-06-02 [Cornell Virtual Workshop: SIMD Parallelism](https://cvw.cac.cornell.edu/vector/overview_simd)

> SIMD stands for "Single Instruction Multiple Data," and is one of [several approaches to parallelism](https://cvw.cac.cornell.edu/parallel/tax.aspx) found in modern high-performance computing.
>
> Vector instructions are a primary example of SIMD parallelism in modern CPUs. For instance, the vector add instruction is a single instruction (add) that acts on multiple data (vectors) to yield a vector of sums. Given the two vectors `(1, 2, 3, 4)` and `(5, 6, 7, 8)`, the vector result `(6, 8, 10, 12)` is produced in a single operation. This operation is illustrated in the diagram and linked video below.

> ![image-20230608160855199](dev-c99.assets/image-20230608160855199.png)

2023-07-02 [Parsing time stamps faster with SIMD instructions – Daniel Lemire's blog](https://lemire.me/blog/2023/07/01/parsing-time-stamps-faster-with-simd-instructions/)

Standard:

```c
#include <time.h>
#include <stdio.h>
int main() {
  char buffer[15];
  struct tm timeinfo;
  time_t rawtime;
  time(&rawtime);
  gmtime_r(&rawtime, &timeinfo);
  size_t len = strftime(buffer, 15, "%Y%m%d%H%M%S", &timeinfo);
  buffer[14] = '\0';
  puts(buffer);
}
```

SIMD:

```c
 __m128i v = _mm_loadu_si128((const __m128i *)date_string);
v = _mm_sub_epi8(v, _mm_set1_epi8(0x30));
__m128i limit =
_mm_setr_epi8(9, 9, 9, 9, 1, 9, 3, 9, 2, 9, 5, 9, 5, 9, -1, -1);
__m128i abide_by_limits = _mm_subs_epu8(v, limit); // must be all zero
const __m128i weights = _mm_setr_epi8(
10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 0, 0);
v = _mm_maddubs_epi16(v, weights);
__m128i limit16 =
_mm_setr_epi16(99,99, 12, 31, 23, 59, 59, -1);
__m128i abide_by_limits16 = _mm_subs_epu16(v, limit16);
__m128i limits = _mm_or_si128(abide_by_limits16,abide_by_limits);
if (!_mm_test_all_zeros(limits, limits)) {
  return false;
}
```

| instructions per stamp     | time per stamp |      |
| :------------------------- | :------------- | ---- |
| standard C with `strptime` | 700            | 46   |
| SIMD approach              | 65             | 7.9  |





