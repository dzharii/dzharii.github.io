# dev-c99-leetcode
Date: 2025-12-20



# Easy



## Numbers



### Count digits in unsigned integer

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

some math:

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

Or, most fun, is the Christmas tree:

```c
int digits_count =
(n < 10) ? 1 :
(n < 100) ? 2 :
(n < 1000) ? 3 :
(n < 10000) ? 4 :
(n < 100000) ? 5 :
(n < 1000000) ? 6 :
(n < 10000000) ? 7 :
(n < 100000000) ? 8 :
(n < 1000000000) ? 9 :
(n < 10000000000) ? 10 :
-1;
```



### Reverse digits in integer

```c
int reverse(int n)
{
    int rev = 0;
    while (n != 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return rev;
}
```



### Binary length of an integer

```c
// Computes the length of the binary representation of n without leading zeros.
static inline size_t uint32_bin_len(uint32_t n) {
    size_t len = 0;
    while (n != 0) {
        ++len;
        n >>= 1;
    }
    return len;
}

uint32_t n = 10; // ten is 0101 in binary
printf("uint32_bin_len(10) = %zu\n", uint32_bin_len(n));
// Output:
// uint32_bin_len(10) = 4
```



## Matrix

### Matrix API

A small C99 snippet to help solving matrix problems with LeetCode-style inputs. It gives creation, destruction, equality check, copy, and in-place clockwise rotation for square matrices.

```c
typedef struct {
    size_t rows_count;
    size_t cols_count;
    int** rows;
} Matrix_Int;

void matrix_int_destroy(Matrix_Int* matrix);
Matrix_Int* matrix_int_create(size_t rows_count, size_t cols_count, int* optional_init_value);
bool matrix_int_equal(const Matrix_Int* a, const Matrix_Int* b);
bool matrix_int_copy(Matrix_Int* target, const Matrix_Int* source);
bool matrix_int_rotate_90deg_clockwise_inplace(Matrix_Int* matrix);
bool matrix_int_cyclic_shift_row(Matrix_Int* matrix, size_t row_index, int direction);

// Implementation

void matrix_int_destroy(Matrix_Int* matrix) {
    if (!matrix) return;
    if (!matrix->rows) return;

    for (size_t i = 0; i < matrix->rows_count; i++) {
        free(matrix->rows[i]);
    }

    free(matrix->rows);
    free(matrix);
}

Matrix_Int* matrix_int_create(size_t rows_count, size_t cols_count, int* optional_init_value) {
    Matrix_Int* ret = malloc(sizeof(Matrix_Int));
    if (!ret) return NULL;

    ret->rows_count = rows_count;
    ret->cols_count = cols_count;
    ret->rows = malloc(sizeof(ret->rows[0]) * ret->rows_count);

    if (!ret->rows) {
        free(ret);
        return NULL;
    }

    for (size_t i = 0; i < ret->rows_count; i++) {
        ret->rows[i] = malloc(sizeof(ret->rows[i][0]) * ret->cols_count);
        if (!ret->rows[i]) {
            for (size_t j = 0; j < i; j++) {
                free(ret->rows[j]);
            }
            free(ret->rows);
            free(ret);
            return NULL;
        }

        if (optional_init_value) {
            for (size_t j = 0; j < ret->cols_count; j++) {
                ret->rows[i][j] = *optional_init_value;
            }
        }
    }

    return ret;
}

bool matrix_int_equal(const Matrix_Int* a, const Matrix_Int* b) {
    if (!a || !b) return false;
    if (!a->rows || !b->rows) return false;
    if (a->rows_count != b->rows_count) return false;
    if (a->cols_count != b->cols_count) return false;

    for (size_t r = 0; r < a->rows_count; r++) {
        if (!a->rows[r] || !b->rows[r]) return false;
        for (size_t c = 0; c < a->cols_count; c++) {
            if (a->rows[r][c] != b->rows[r][c]) return false;
        }
    }

    return true;
}

bool matrix_int_copy(Matrix_Int* target, const Matrix_Int* source) {
    if (!target || !source) return false;
    if (!target->rows || !source->rows) return false;

    if (target->rows_count != source->rows_count) return false;
    if (target->cols_count != source->cols_count) return false;

    for (size_t r = 0; r < source->rows_count; r++) {
        if (!target->rows[r] || !source->rows[r]) return false;
        for (size_t c = 0; c < source->cols_count; c++) {
            target->rows[r][c] = source->rows[r][c];
        }
    }

    return true;
}

bool matrix_int_rotate_90deg_clockwise_inplace(Matrix_Int* matrix) {
    /*
    Steps:
    1. Validate input and require a square matrix.
    2. Rotate layer by layer, from outer ring to inner ring.
    3. For each group of 4 matching positions, save one value temporarily.
    4. Move left -> top, bottom -> left, right -> bottom, temp(top) -> right.
    5. Return true on success, otherwise false.

    How it works:
    A 90 deg clockwise in-place rotation for a square matrix is done by
    cycling 4 cells at a time inside each layer. This avoids allocating
    another matrix.
    */

    if (!matrix) return false;
    if (!matrix->rows) return false;
    if (matrix->rows_count != matrix->cols_count) return false;

    const size_t n = matrix->rows_count;

    for (size_t r = 0; r < n; r++) {
        if (!matrix->rows[r]) return false;
    }

    for (size_t layer = 0; layer < n / 2; layer++) {
        const size_t first = layer;
        const size_t last = n - 1 - layer;

        for (size_t i = first; i < last; i++) {
            const size_t offset = i - first;

            const int top = matrix->rows[first][i];

            matrix->rows[first][i] = matrix->rows[last - offset][first];
            matrix->rows[last - offset][first] = matrix->rows[last][last - offset];
            matrix->rows[last][last - offset] = matrix->rows[i][last];
            matrix->rows[i][last] = top;
        }
    }

    return true;
}

bool matrix_int_cyclic_shift_row(Matrix_Int* matrix, size_t row_index, int direction) {
    enum { DIR_LEFT = -1, DIR_RIGHT = 1 };

    if (!matrix) return false;
    if (!matrix->rows) return false;
    if (row_index >= matrix->rows_count) return false;
    if (direction != DIR_LEFT && direction != DIR_RIGHT) return false;
    if (!matrix->rows[row_index]) return false;
    if (matrix->cols_count <= 1) return true;

    int* row = matrix->rows[row_index];
    const size_t n = matrix->cols_count;
    const int edge = (direction == DIR_LEFT) ? row[0] : row[n - 1];

    if (direction == DIR_LEFT) {
        memmove(&row[0], &row[1], (n - 1) * sizeof(row[0]));
        row[n - 1] = edge;
    } else {
        memmove(&row[1], &row[0], (n - 1) * sizeof(row[0]));
        row[0] = edge;
    }

    return true;
}

```

- `matrix_int_copy` copies values from `source` into an already allocated `target` of the same shape. 
- `matrix_int_rotate_90deg_clockwise_inplace` rotates only square matrices and does not allocate a buffer. The clockwise mapping is `[r][c] -> [c][n - 1 - r]`.
- `matrix_int_cyclic_shift_row` cyclically shifts a single row by one position in-place, either left or right. For a left shift, the mapping is `[row][c] -> [row][c - 1]` with column `0` wrapping to `cols_count - 1`. 
   For a right shift, the mapping is `[row][c] -> [row][c + 1]` with column `cols_count - 1` wrapping to `0`.



Created (2026-03-21) for: 
[1886. Determine Whether Matrix Can Be Obtained By Rotation](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/description/)

```c
bool findRotation(
    int** mat,
    int matSize,
    int* matColSize,
    int** target,
    int targetSize,
    int* targetColSize) {

    const Matrix_Int source_matrix = {
        .rows_count = (size_t)matSize,
        .cols_count = (size_t)matColSize[0],
        .rows = mat,
    };

    const Matrix_Int target_matrix = {
        .rows_count = (size_t)targetSize,
        .cols_count = (size_t)targetColSize[0],
        .rows = target,
    };

    if (matrix_int_equal(&source_matrix, &target_matrix)) {
        return true;
    }

    int zero = 0;
    Matrix_Int* buffer_matrix = matrix_int_create(
        source_matrix.rows_count,
        source_matrix.cols_count,
        &zero
    );
    if (!buffer_matrix) return false;

    if (!matrix_int_copy(buffer_matrix, &source_matrix)) {
        matrix_int_destroy(buffer_matrix);
        return false;
    }

    for (int i = 0; i < 3; i++) {
        if (!matrix_int_rotate_90deg_clockwise_inplace(buffer_matrix)) {
            matrix_int_destroy(buffer_matrix);
            return false;
        }

        if (matrix_int_equal(buffer_matrix, &target_matrix)) {
            matrix_int_destroy(buffer_matrix);
            return true;
        }
    }

    matrix_int_destroy(buffer_matrix);
    return false;
}
```
