# dev-c99-mini-idioms
Date: 2025-12-19

**Zero-initialize scalars and aggregates with `{0}` (and know what it really does)**

```c
int x = 0;
int a[10] = {0};
struct S s = {0};
```

For objects with static storage duration, zero-init happens anyway; for locals, `{0}` forces a full zero fill by the rules for aggregate initialization. It is concise and hard to get wrong.



**Designated initializers to document intent and avoid field-order coupling**

```c
struct Config cfg = {
    .timeout_ms = 250,
    .retries = 3,
    .path = "/tmp/app.sock",
};
```

This makes changes to `struct Config` safer because you are not relying on declaration order.



**Sparse array initialization with designated indices**

```c
int map[256] = { [0 ... 255] = -1, ['A'] = 0, ['B'] = 1 };
```

Range designators (`[0 ... 255]`) are a GCC/Clang extension, not C99. The strictly C99 part is designated indices like `['A']`. If you need strict portability, stick to explicit indices.



**Compound literals for "temporary objects with an address"**

```c
use_point(&(struct Point){ .x = 1, .y = 2 });

memcpy(dst, (unsigned char[]){0xDE,0xAD,0xBE,0xEF}, 4);
```

Compound literals are standard C99. They are extremely handy for passing small structs/buffers without naming a variable.



**"Inline constant struct" as a default value without macros**

```c
static const struct Limits default_limits = { .min = 0, .max = 100 };

struct Limits lim = default_limits;
```

You get a single source of truth and avoid repeating the initializer.



**Flexible "build up an initializer" with trailing commas**

```c
int xs[] = {
    1,
    2,
    3,
};
```

C allows the trailing comma. It reduces diffs when adding and removing entries.



**Local static for expensive one-time setup inside a function**

```c
const char *lookup(int k) {
    static const char *tbl[] = { "zero", "one", "two" };
    return (k >= 0 && k < (int)(sizeof tbl / sizeof tbl[0])) ? tbl[k] : "unknown";
}
```

This avoids repeated initialization and keeps the table close to the code that uses it.



**Use `sizeof (type){0}` to get a type size without naming an object**

```c
size_t n = sizeof (struct Header){0};
```

This is occasionally useful in macros and generic helpers where you do not want an actual variable.



**"Sentinel at end" arrays for tables of variable length**

```c
struct KV { const char *k; int v; };

static const struct KV kvs[] = {
    { "alpha", 1 },
    { "beta", 2 },
    { 0, 0 },          /* sentinel */
};

for (const struct KV *p = kvs; p->k; ++p) { /* ... */ }
```

This avoids separately storing a count and is very readable for static tables.



**`enum` as compile-time integer constants**

```c
enum { BUF_SZ = 4096, MAX_RETRIES = 5 };
unsigned char buf[BUF_SZ];
```

Unlike macros, `enum` constants participate in the language and show up better in debuggers.



**Counted push with post-increment (your pattern) plus the "guard" form**

```c
if (array_count < ARRAY_CAP) {
    array[array_count++] = value;
}
```

The idiom is best when paired with an explicit bounds guard close by.



**Iterate pointers over arrays (often cleaner than indices)**

```c
for (int *p = a, *e = a + n; p != e; ++p) {
    *p += 1;
}
```

You avoid repeated indexing arithmetic and it composes well with subranges.



**"Two-pointer" walk for in-place filtering/compaction**

```c
size_t w = 0;
for (size_t r = 0; r < n; ++r) {
    if (keep(xs[r])) xs[w++] = xs[r];
}
n = w;
```

This is the simplest correct in-place filter pattern.



**Reverse loop without unsigned underflow traps**

```c
for (size_t i = n; i-- > 0; ) {
    /* uses i = n-1 down to 0 */
}
```

This avoids `i >= 0` (which is always true for `size_t`) and avoids underflow bugs.



**"Advance before use" scanning with assignment in the condition**

```c
int c;
while ((c = *p++) != 0) {
    /* use c */
}
```

This compresses scanning code, and ensures the increment is not accidentally duplicated.



**Parse with `strtol` and keep the end pointer in the loop header**

```c
for (char *p = s; *p; ) {
    char *end;
    long v = strtol(p, &end, 10);
    if (end == p) break;     /* no progress */
    /* use v */
    p = end;
}
```

This is a robust skeleton for numeric tokenization.



**"Loop that guarantees at least one iteration" with `do { } while (0)` (not just for macros)**

```c
do {
    if (!init()) break;
    if (!step()) break;
    finish();
} while (0);
```

It reads like structured early-exit without introducing `goto` yet.



**Switch-driven state machine with intentional fallthrough**

```c
switch (state) {
case S_START:
    /* ... */
    state = S_BODY;
    /* fall through */
case S_BODY:
    /* ... */
    break;
}
```

The convenience is real, but comment intentional fallthrough because compilers warn and humans misread.



**The canonical "walk a C string" pointer loop**

```c
for (const unsigned char *p = (const unsigned char *)s; *p; ++p) {
    /* ... */
}
```

Using `unsigned char` avoids undefined behavior with the ctype family when chars are negative.



**ctype functions: cast to unsigned char, and do not pass pointers**

```c
if (isalpha((unsigned char)c)) { /* ... */ }
```

`isalpha(0)` is defined to be false in the C locale, so `isalpha('\0')` is fine. Passing `NULL` is not "special"; it is just `0` as an integer constant, but treating it as a pointer concept is misleading. The real pitfall is `isalpha((signed char)0xE9)` which can be negative and is undefined unless you cast to `unsigned char` (or pass EOF).



**`memchr` as a fast "find delimiter in bytes"**

```c
const unsigned char *q = memchr(p, '\n', (size_t)(end - p));
if (q) { /* found */ }
```

Useful for scanning non-null-terminated buffers, unlike `strchr`.



**"Length-limited string scan" without copying**

```c
size_t i = 0;
for (; i < n && buf[i] != '\0'; ++i) { /* ... */ }
```

This is the safe pattern for possibly unterminated data.



**`snprintf` for bounded formatting and detecting truncation**

```c
int m = snprintf(dst, dst_sz, "%s/%s", a, b);
if (m < 0 || (size_t)m >= dst_sz) { /* truncated or error */ }
```

The return value is the size that would have been written, which makes it easy to size buffers.



**"Append pointer" pattern for building strings efficiently**

```c
char out[256];
char *w = out;
char *e = out + sizeof out;

w += snprintf(w, (size_t)(e - w), "x=%d ", x);
w += snprintf(w, (size_t)(e - w), "y=%d", y);
```

This keeps the write position explicit and avoids repeated `strlen`.

**Tokenize without `strtok` by using `strcspn` and manual slicing**

```c
for (char *p = s; *p; ) {
    p += strspn(p, " \t");
    size_t len = strcspn(p, " \t");
    if (len == 0) break;
    /* token is p..p+len */
    p += len;
}
```

No global state, re-entrant, and it works with custom delimiters.



**Single-exit cleanup with `goto`** 

```c
int f(void) {
    int rc = -1;
    FILE *fp = 0;
    void *buf = 0;

    fp = fopen("x", "rb");
    if (!fp) goto out;

    buf = malloc(4096);
    if (!buf) goto out;

    rc = 0;
out:
    free(buf);
    if (fp) fclose(fp);
    return rc;
}
```

This scales when you add resources; you do not multiply cleanup code.



**"Return value capture" so you do not lose error information**

```c
int rc = do_work();
if (rc) return rc;
```

Simple, but the important part is: never overwrite `rc` before you have consumed it.



**Preserve `errno` across cleanup that might clobber it**

```c
int saved = errno;
/* cleanup that might call functions touching errno */
errno = saved;
return -1;
```

This matters when callers use `errno` to diagnose the original failure.



**`fgets` loop with newline trimming in one place**

```c
while (fgets(line, sizeof line, fp)) {
    line[strcspn(line, "\n")] = '\0';
    /* use line */
}
```

This avoids repeated ad hoc newline logic.



**"Close on success, free on failure" with ownership transfer**

```c
char *buf = malloc(n);
if (!buf) return -1;

*out = buf;   /* transfer ownership */
buf = 0;      /* prevent accidental free */
return 0;
```

Setting the local to 0 after transfer prevents double-free in a shared cleanup block.



**The do-while(0) macro wrapper so statements behave like statements**

```c
#define CHECK(x) do { if (!(x)) return -1; } while (0)
```

This prevents surprises with `if (cond) CHECK(...); else ...`.



**Compile-time array count (only works for actual arrays)**

```c
#define ARRAY_LEN(a) (sizeof(a) / sizeof((a)[0]))
```

Use it only when you truly have an array, not a pointer.



**"Static assert" in C99 via typedef trick (portable)**

```c
#define STATIC_ASSERT(expr) typedef char static_assertion[(expr) ? 1 : -1]
STATIC_ASSERT(sizeof(int) == 4);
```

C11 has `_Static_assert`, but this works in C99 and fails at compile time.



**Stringize and concatenate for generating names and messages**

```c
#define STR_(x) #x
#define STR(x) STR_(x)

#define CAT_(a,b) a##b
#define CAT(a,b) CAT_(a,b)

int CAT(tmp_, __LINE__);
const char *msg = "line " STR(__LINE__);
```

These are building blocks for debugging macros and generated identifiers.



**X-macro tables: one list, many derived artifacts**

```c
/* list */
#define COLORS(X) \
    X(RED)        \
    X(GREEN)      \
    X(BLUE)

/* enum */
#define X(name) name,
enum Color { COLORS(X) };
#undef X

/* to-string */
#define X(name) case name: return #name;
const char *color_name(enum Color c) {
    switch (c) { COLORS(X) default: return "?"; }
}
#undef X
```

This avoids keeping enum, strings, and other metadata in sync by hand.



**Optional debug logging compiled out cleanly**

```c
#ifdef DEBUG
#define LOG(...) fprintf(stderr, __VA_ARGS__)
#else
#define LOG(...) ((void)0)
#endif
```

`((void)0)` keeps expression contexts well-typed.



**Check for overflow before multiply/add (portable pattern)**

```c
if (b != 0 && a > SIZE_MAX / b) return -1;   /* a*b would overflow */

if (a > SIZE_MAX - b) return -1;            /* a+b would overflow */
```

This is the reliable, standard way (no compiler builtins).



**Align up/down with power-of-two alignment (common, but easy to botch)**

```c
size_t align_up(size_t x, size_t a) { return (x + (a - 1)) & ~(a - 1); }
size_t align_dn(size_t x, size_t a) { return x & ~(a - 1); }
```

Only valid when `a` is a power of two.



**Bitset membership with unsigned shifts (avoid UB on signed)**

```c
unsigned mask = 1u << bit;
if (flags & mask) { /* set */ }
```

Use unsigned types for bit operations; left shift on signed can be undefined.



**Branchless "is power of two" (and exclude 0)**

```c
int is_pow2(size_t x) { return x && ((x & (x - 1)) == 0); }
```

Tiny and used often in allocators and alignment code.



**Byte extraction with masks and shifts (portable endianness-agnostic logic)**

```c
unsigned byte0 = (x >> 0) & 0xFFu;
unsigned byte1 = (x >> 8) & 0xFFu;
```

This avoids aliasing and alignment pitfalls of pointer casts.



**Allocate using the pointed-to type, not repeating the type name**

```c
T *p = malloc(sizeof *p);
p = realloc(p, new_count * sizeof *p);
```

This survives type changes and reduces mismatch errors.



**`realloc` with a temporary to avoid losing the original pointer on failure**

```c
void *tmp = realloc(p, n);
if (!tmp) { /* p still valid */ return -1; }
p = tmp;
```

This is one of the highest-value C habits you can adopt.



**Zero-initialize heap objects with `calloc` when it matches the semantics**

```c
T *p = calloc(count, sizeof *p);
```

It communicates "I want zeroed memory" and can be optimized by the runtime.



**Memset a struct via its address, not by casting**

```c
memset(&s, 0, sizeof s);
```

Straightforward, but still the correct idiom when `{0}` is not possible.



**Strict aliasing safe type-punning: use `memcpy`, not pointer casts**

```c
float f;
uint32_t u;
memcpy(&u, &f, sizeof u);
```

Pointer-cast punning can break under optimization; `memcpy` is the portable way.



**"Flexible array member" for variable-sized structs (C99 feature)**

```c
struct Msg {
    uint32_t len;
    unsigned char data[];   /* flexible array */
};

struct Msg *m = malloc(sizeof *m + payload_len);
m->len = payload_len;
memcpy(m->data, payload, payload_len);
```

This keeps header and payload contiguous and cache-friendly.



**Container-of pattern (common, but not standard-library provided)**

```c
#define OFFSETOF(type, member) ((size_t)&(((type *)0)->member))
#define CONTAINER_OF(ptr, type, member) ((type *)((char *)(ptr) - OFFSETOF(type, member)))
```

Useful for intrusive data structures. It relies on well-known idioms, but it is also sharp: use only when you fully control types and lifetimes.





**Return error code, write outputs through pointers**

```c
int parse(const char *s, struct Result *out);
```

Callers can stack-allocate `struct Result` and you avoid heap ownership questions.



**"Optional output" pointers with a simple guard**

```c
if (out_value) *out_value = v;
```

This gives callers flexibility without multiplying function variants.



**Size-in, size-out for buffers (and report required size)**

```c
int encode(char *dst, size_t dst_sz, size_t *out_sz);
```

On overflow, set `*out_sz` to the needed size and return an error.



**Use `const` to document and enforce read-only inputs**

```c
int hash(const void *data, size_t n, uint32_t *out);
```

This eliminates entire classes of accidental mutation bugs.



**"User data" callbacks (poor man's closures)**

```c
typedef int (*visit_fn)(void *user, const struct Node *n);

int walk(const struct Node *root, visit_fn fn, void *user);
```

This is the idiomatic C way to carry context into callbacks.



**`sscanf` is tempting, but `strto*` with end pointers composes better**

```c
char *end;
long v = strtol(p, &end, 10);
if (end == p) { /* not a number */ }
p = end;
```

This avoids format-string corner cases and gives you precise control.



**Use scansets in `sscanf` when you really do want it (bounded)**

```c
char key[32];
if (sscanf(line, "%31[^=]=%*s", key) == 1) { /* key before '=' */ }
```

The width prevents buffer overflow; the scanset is a powerful but underused feature.



**"Trim in place" with two indices/pointers**

```c
char *p = s;
while (*p == ' ' || *p == '\t') ++p;

char *e = p + strlen(p);
while (e > p && (e[-1] == ' ' || e[-1] == '\t' || e[-1] == '\n')) --e;
*e = '\0';

if (p != s) memmove(s, p, (size_t)(e - p) + 1);
```

This is a reusable skeleton for whitespace trimming without allocating.



**Print `size_t` and pointers correctly**

```c
printf("n=%zu\n", n);
printf("p=%p\n", (void *)p);
```

These format specifiers prevent subtle UB and portability bugs.



**Use `__FILE__` and `__LINE__` for trace points**

```c
fprintf(stderr, "%s:%d: failed\n", __FILE__, __LINE__);
```

This is a low-tech, high-value breadcrumb.



**Hex dump loop that is careful about signedness**

```c
const unsigned char *b = buf;
for (size_t i = 0; i < n; ++i) printf("%02X", (unsigned)b[i]);
```

Casting avoids `char` sign surprises.



**The comma operator for tight loops (use sparingly)**

```c
for (i = 0, p = a; i < n; ++i, ++p) { /* ... */ }
```

It is idiomatic in C, but readability drops if you overpack logic into the header.



**Assignment in condition to express "read then test"**

```c
while ((n = fread(buf, 1, sizeof buf, fp)) != 0) { /* ... */ }
```

This is one of the clearest uses of assignment-in-condition: it matches the control flow of I/O.



**Boolean normalization with `!!`**

```c
int ok = !!ptr;
```

Forces a clean 0/1 value, useful when you need strict boolean-like integers.



**"Swap via temporary" plus the macro version (evaluate once)**

```c
#define SWAP(a,b) do { __typeof__(a) _t = (a); (a) = (b); (b) = _t; } while (0)
```

The macro version above uses `__typeof__`, which is a GNU extension, not C99. In strict C99, you typically hand-write swaps or use a function specialized per type.



**`offsetof` from `<stddef.h>` for layout-aware code**

```c
size_t off = offsetof(struct S, member);
```

This is standard and safer than home-grown offset macros.



**`volatile` only for hardware/async boundaries, not for "thread safety"**

```c
volatile uint32_t *reg = (volatile uint32_t *)0x40000000u;
*reg = 1;
```

This is a pattern you see in embedded C; the key is knowing that `volatile` is not a concurrency primitive.



**Use `restrict` (C99) when you can prove non-aliasing**

```c
void saxpy(float *restrict y, const float *restrict x, size_t n, float a);
```

It can unlock optimizations and documents a strong contract.



**"One definition of a flag set" via an enum and bit masks**

```c
enum {
    F_READ  = 1u << 0,
    F_WRITE = 1u << 1,
    F_EXEC  = 1u << 2,
};
```

This is a clean, debugger-friendly alternative to raw `#define` flags.
