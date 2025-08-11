# dev-recreational-programming-in-c
Date: 2025-08-10



## Compilers

[**bellard.org/tcc/: Tiny C Compiler (TCC) by Fabrice Bellard**](https://bellard.org/tcc/)

Tiny C Compiler (TCC) is a compact (~100 KB) standalone C compiler that combines preprocessing, compiling, assembling, and linking in one tool. It supports ANSI C (C89/C90), much of C99, and GNU C extensions including inline assembly, and can operate without external toolchains. TCC compiles, assembles, and links roughly nine times faster than GCC.

It includes optional memory and bounds checking that can be mixed seamlessly with regular C code. TCC scripts can be executed directly with `tcc -run` plus a shebang line. It is embeddable through `libtcc`, enabling dynamic code generation and execution.

Example usage:

```c
#!/usr/local/bin/tcc -run
#include <stdio.h>

int main() {
    printf("Hello, TCC!\n");
    return 0;
}
```

This runs the C code in one step—compile and execute—without manual linking.



## Programmers! 

[**Tsoding Daily — YouTube Channel**](https://www.youtube.com/@TsodingDaily)

A channel by Tsoding featuring live coding streams and videos focused on building projects from scratch, experimenting with algorithms, implementing tools in C and other languages, exploring low-level programming, and working through game and graphics development challenges. Sessions often include problem-solving in real time, code refactoring, performance tuning, and occasional forays into esoteric programming concepts.



[**brennan.io/projects: Stephen Brennan**](https://brennan.io/projects/)

- [brenns10/cbot: CBot - IRC bot in C](https://github.com/brenns10/cbot)
  Loads plugins as shared libraries, stores plugin state in SQL, and uses cooperative threading to handle IRC I/O alongside tasks like HTTP requests.

- [brenns10/sos: SOS - minimal 32-bit ARM OS](https://github.com/brenns10/sos)
  Implements isolated processes, preemptive multitasking, and early FAT filesystem support, targeting Raspberry Pi and QEMU.

- [brenns10/minesweeper: Minesweeper in C](https://github.com/brenns10/minesweeper)
  Minesweeper playable via CLI, GTK, or ncurses, including an interactive solver.

- [funlisp: Lisp interpreter in C89](https://sr.ht/~brenns10/funlisp)
  Portable Lisp interpreter for POSIX systems, implemented in compact and readable C89.

- [brenns10/kchat: KChat kernel module](https://github.com/brenns10/kchat)
  Kernel module that creates a device file for real-time chat between processes.

- [brenns10/sshell: A Simple Shell in C](https://github.com/brenns10/sshell)
  Minimal shell showcasing parsing, built-ins, and process launching.

- [brenns10/tetris: Tetris in C](https://github.com/brenns10/tetris)
  Ncurses terminal Tetris clone with gravity, rotation, wall-kick, scoring, levels, pause, and save/load.

- [brenns10/libstephen: Libstephen](https://github.com/brenns10/libstephen)
  C library with data structures, argument parsing, regex, logging, and testing.

- [brenns10/nosj: NOSJ](https://github.com/brenns10/nosj)
  Lightweight JSON parser in C with a focus on clarity and simplicity.



## Libraries

**[stclib/STC: STC - Generic Containers and Algorithms for C](https://github.com/stclib/STC)**

A header-only C99/C11 library providing type-safe generic containers, algorithms, and utilities with minimal boilerplate. Includes dynamic arrays, deques, queues, stacks, priority queues, hash maps, ordered maps/sets, UTF-8 strings with short-string optimization, bitsets, random number generation, regex, ranges, and coroutines. Type safety is enforced at compile time using templated macros, and ergonomic iteration helpers simplify code.

Example:

```c
#define T Floats, float
#include <stc/vec.h>

Floats nums = {0};
Floats_push(&nums, 10.f);
Floats_push(&nums, 20.f);

for (c_each(it, Floats, nums))
    printf(" %g", *it.ref);
Floats_drop(&nums);
```

[**nothings/stb: Single-file public-domain libraries for C/C++**](https://github.com/nothings/stb)

A set of single-header libraries providing drop-in, zero-dependency solutions for C/C++. Includes image loading, writing, and resizing; TrueType font rasterization; dynamic arrays and hash tables; noise generation; text editing; and voxel rendering. All files are small, self-contained, and easy to embed or modify.

Example:

```c
#define STB_IMAGE_IMPLEMENTATION
#include "stb_image.h"

int x, y, n;
unsigned char *data = stbi_load("image.png", &x, &y, &n, 0);
if (data) {
    // use image data
    stbi_image_free(data);
}
```



## Books

[**Build Your Own Lisp — Table of Contents**](https://www.buildyourownlisp.com/contents)

An online book that guides you step-by-step through implementing a Lisp interpreter in C. It begins with C language basics, environment setup, and building a simple REPL, then progresses into parsing expressions, evaluating code, adding error handling, implementing Lisp data structures like S-expressions and Q-expressions, and creating variables, functions, conditionals, and strings. Later chapters cover building a standard library and extending the language with advanced features such as macros, native data types, garbage collection, and tail-call optimization. The project is designed to be hands-on, with each chapter resulting in working code that gradually evolves into a complete interpreter.



