# dev-c99-leetcode
Date: 2025-12-20



# Easy



## Numbers



**Count digits in unsigned integer.** 

The approach with while loop is more idiomatic:

``` c
int digits_u32(unsigned n) {
    int k = 1;
    while (n >= 10) {
        n /= 10;
        ++k;
    }
    return k;
}
```

Another trick is snprintf. 

```c
#include <stdlib.h>
#include <stdio.h>

int main(int argc, char* argv[]) {
  int value = 12345678;
  int count = snprintf(NULL, 0, "%d", value);
  printf("count = %d\n", count);
  return 0;
}

```



And, finally, some math:

```c
#include <math.h>
#include <stdlib.h>
#include <stdio.h>

int digits_u32(unsigned n) {
    if (n == 0 ) return 1;
    return (int)floor(log10((double)n)) + 1;
}

void main(void) {
    printf("digits_u32(1234) = %d\n", digits_u32(1234));
    printf("digits_u32(123456) = %d\n", digits_u32(123456));
    printf("digits_u32(87654321) = %d\n", digits_u32(87654321));
}
```

Math references:

- [Is this formula for computing the number of digits of an integer correct? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/5083733/is-this-formula-for-computing-the-number-of-digits-of-an-integer-correct) { math.stackexchange.com } (partial answer)

