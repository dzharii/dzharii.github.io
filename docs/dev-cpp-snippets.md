# dev-cpp-snippets
Date: 2025-05-26

2025-05-27 [C++ Weekly - Ep 482 - Safely Wrapping C APIs - YouTube](https://www.youtube.com/watch?v=RtxZaKUtU-c) { www.youtube.com }

The line:

```cpp
auto my_fopen(const auto& ...) = delete;
```

is a C++20 feature that uses two specific capabilities:

1. **`const auto& ...`**: This is a placeholder for a variadic parameter pack with deduced types passed by const reference. It's only valid in the context of function templates.
2. **`= delete;`**: This explicitly deletes the function, making it illegal to call or instantiate it.

**Purpose**

This line declares a variadic template function named `my_fopen` and deletes it. This is typically used to:

- **Disable certain overloads** of `my_fopen` by preventing any form of instantiation.
- **Prevent generic misuse** where a user might accidentally call `my_fopen` with unexpected parameters.







