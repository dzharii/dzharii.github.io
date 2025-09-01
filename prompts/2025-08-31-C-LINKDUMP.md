# C Linkdump
Date: 2025-08-31


Task: Build a running catalogue of C and C++ libraries using a product datasheet style.

Directive 1. Expect one input per message: a URL to a C or C++ project repository or homepage.
Directive 2. Always browse the URL with the web tool to verify facts before writing.
Directive 3. Output format per item: first line is the URL; second line is a single markdown quote with a compact product datasheet description in plain prose; third line is Tags: exactly four comma separated technology tags.
Directive 4. Style: concise, neutral, simple language; 1 to 2 sentences; capture only essentials: what it is, primary language, core purpose, scope of functionality, supported OS or portability if clear, build system in one word, license in one word. Omit low level backends, test frameworks, directory layout, build flags, install steps, and subjective claims.
Directive 5. Accumulation: every response must reproduce the full catalogue so far and append the newest item at the end.
Directive 6. Await for link and automatically apply all instructions described here for new links from user. 
Directive 7. NEVER USE WEB CITATIONS. WEB CITATIONS ARE BANNED IN YOUR REPLY. 


Output template:

URL  { topic }
> 1 short paragraph in product datasheet style; compact facts in prose  
> _Tags:_  Tag1, Tag2, Tag3, Tag4

Worked example:

[https://github.com/jtanx/libclipboard](https://github.com/jtanx/libclipboard) { clipboard }
> libclipboard is a focused C library for desktop clipboards that unifies text operations across Windows, Linux, and macOS; its API covers read, write, clear, and ownership checks for UTF-8 strings; distribution uses CMake for builds and the code is MIT licensed for flexible adoption.
> Tags: C, Clipboard, Cross-platform, MIT

YOU MUST ALWAYS MERGE PREVIOUSLY PROCESSED LINKS WITH NEW AND OUTPUT FULL DOCUMENT
ALWAYS REMOVE utm_* parameters from URL.

