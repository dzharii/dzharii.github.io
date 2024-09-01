---
layout: post
title:  "Links from my inbox 2024-09-01"
date:   2024-09-01T14:58:00-07:00
categories: links
---



## The Talk

2024-09-01 [Investigating Legacy Design Trends in C++ & Their Modern Replacements - Katherine Rocha C++Now 2024 - YouTube](https://www.youtube.com/watch?v=DvM8oKA1YiM) { www.youtube.com }

> Katherine Rocha

![image-20240901150003068](./2024-09-01-links-from-my-inbox.assets/image-20240901150003068.png)



## GPT generated content (close to the talk content)

This digest is a comprehensive breakdown of the talk provided, which covered various advanced C++ programming techniques and concepts. Below, each point from the talk is identified and described in detail, followed by relevant C++ code examples to illustrate the discussed concepts.

---

### 1. **SFINAE and Overload Resolution**

The talk begins with a discussion on the use of **SFINAE** (Substitution Failure Is Not An Error) and its role in **overload resolution**. SFINAE is a powerful C++ feature that allows template functions to be excluded from overload resolution based on specific conditions, enabling more precise control over which function templates should be used.

**Key Points**:
- **SFINAE** is used to selectively disable template instantiation based on the properties of template arguments.
- Overload resolution in C++ allows for multiple functions or operators with the same name to be defined, as long as their parameters differ. The compiler decides which function to call based on the arguments provided.

**C++ Example**:

```cpp
#include <type_traits>
#include <iostream>

// Template function enabled only for arithmetic types using SFINAE
template <typename T>
typename std::enable_if<std::is_arithmetic<T>::value, T>::type
add(T a, T b) {
    return a + b;
}

// Overload for non-arithmetic types is not instantiated
template <typename T>
typename std::enable_if<!std::is_arithmetic<T>::value, T>::type
add(T a, T b) = delete;

int main() {
    std::cout << add(5, 3) << std::endl;     // OK: int is arithmetic
    // std::cout << add("Hello", "World");   // Error: string is not arithmetic
    return 0;
}
```

---

### 2. **Compile-Time Error Messages**

The talk transitions into how to improve **compile-time error messages** using `static_assert` and custom error handling in templates. By using these techniques, developers can provide clearer error messages when certain conditions are not met during template instantiation.

**Key Points**:
- Use `static_assert` to enforce conditions at compile time, ensuring that the program fails to compile if certain criteria are not met.
- Improve the readability of error messages by providing meaningful feedback directly in the code.

**C++ Example**:

```cpp
#include <iostream>
#include <type_traits>

template<typename T>
void check_type() {
    static_assert(std::is_integral<T>::value, "T must be an integral type");
}

int main() {
    check_type<int>();   // OK
    // check_type<double>(); // Compile-time error: T must be an integral type
    return 0;
}
```

---

### 3. **Concepts in C++20**

The talk explores **Concepts**, a feature introduced in C++20, which allows developers to specify constraints on template arguments more succinctly and expressively compared to SFINAE. Concepts help in making templates more readable and the error messages more comprehensible.

**Key Points**:
- **Concepts** define requirements for template parameters, making templates easier to understand and use.
- Concepts improve the clarity of both template definitions and error messages.

**C++ Example**:

```cpp
#include <concepts>
#include <iostream>

template<typename T>
concept Arithmetic = std::is_arithmetic_v<T>;

template<Arithmetic T>
T add(T a, T b) {
    return a + b;
}

int main() {
    std::cout << add(5, 3) << std::endl;     // OK: int is arithmetic
    // std::cout << add("Hello", "World");   // Error: concept 'Arithmetic' not satisfied
    return 0;
}
```

---

### 4. **Polymorphism and CRTP**

The talk covers **polymorphism** and the **Curiously Recurring Template Pattern (CRTP)**, a technique where a class template is derived from itself. CRTP allows for static polymorphism at compile time, which can offer performance benefits over dynamic polymorphism.

**Key Points**:
- **Runtime Polymorphism**: Achieved using inheritance and virtual functions, but comes with runtime overhead due to the use of vtables.
- **CRTP**: A pattern that enables polymorphism at compile-time, avoiding the overhead of vtables.

**C++ Example**:

```cpp
#include <iostream>

// CRTP Base class
template<typename Derived>
class Base {
public:
    void interface() {
        static_cast<Derived*>(this)->implementation();
    }
    
    static void staticInterface() {
        Derived::staticImplementation();
    }
};

class Derived1 : public Base<Derived1> {
public:
    void implementation() {
        std::cout << "Derived1 implementation" << std::endl;
    }
    
    static void staticImplementation() {
        std::cout << "Derived1 static implementation" << std::endl;
    }
};

class Derived2 : public Base<Derived2> {
public:
    void implementation() {
        std::cout << "Derived2 implementation" << std::endl;
    }
    
    static void staticImplementation() {
        std::cout << "Derived2 static implementation" << std::endl;
    }
};

int main() {
    Derived1 d1;
    d1.interface();
    Derived1::staticInterface();

    Derived2 d2;
    d2.interface();
    Derived2::staticInterface();

    return 0;
}
```

---

### 5. **Deducing `this` in C++23**

The discussion moves to **deducing `this`**, a feature introduced in C++23 that allows for more expressive syntax when working with member functions, particularly in the context of templates.

**Key Points**:
- **Deducing `this`** enables more flexible and readable template code involving member functions.
- This feature simplifies the syntax when `this` needs to be deduced as part of template metaprogramming.

**C++ Example**:

```cpp
#include <iostream>

class MyClass {
public:
    auto myMethod() const -> decltype(auto) {
        return [this] { return *this; };
    }
    
    void print() const {
        std::cout << "MyClass instance" << std::endl;
    }
};

int main() {
    MyClass obj;
    auto f = obj.myMethod();
    f().print();  // Outputs: MyClass instance
    return 0;
}
```

---

### 6. **Design Methodologies: Procedural, OOP, Functional, and Data-Oriented Design**

The final section of the talk compares various **design methodologies** including **Procedural**, **Object-Oriented Programming (OOP)**, **Functional Programming (FP)**, and **Data-Oriented Design (DOD)**. Each paradigm has its strengths and use cases, and modern C++ often blends these methodologies to achieve optimal results.

**Key Points**:
- **Procedural Programming**: Focuses on a sequence of steps or procedures to accomplish tasks.
- **Object-Oriented Programming (OOP)**: Organizes code around objects and data encapsulation.
- **Functional Programming (FP)**: Emphasizes immutability and function composition.
- **Data-Oriented Design (DOD)**: Focuses on data layout in memory for performance, often used in game development.

**C++ Example** (Object-Oriented):

```cpp
#include <iostream>
#include <vector>

class Telemetry {
public:
    virtual void process() const = 0;
};

class InstantaneousEvent : public Telemetry {
public:
    void process() const override {
        std::cout << "Processing instantaneous event" << std::endl;
    }
};

class LongTermEvent : public Telemetry {
public:
    void process() const override {
        std::cout << "Processing long-term event" << std::endl;
    }
};

void processEvents(const std::vector<Telemetry*>& events) {
    for (const auto& event : events) {
        event->process();
    }
}

int main() {
    std::vector<Telemetry*> events = { new InstantaneousEvent(), new LongTermEvent() };
    processEvents(events);
    
    for (auto event : events) {
        delete event;
    }
    
    return 0;
}
```

**C++ Example** (Functional Programming):

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

struct Event {
    int time;
    bool isLongTerm;
};

void processEvents(const std::vector<Event>& events) {
    std::for_each(events.begin(), events.end(), [](const Event& event) {
        if (event.isLongTerm) {
            std::cout << "Processing long-term event at time " << event.time << std::endl;
        } else {
            std::cout << "Processing instantaneous event at time " << event.time << std::endl;
        }
    });
}

int main() {
    std::vector<Event> events = { {1, false}, {2, true}, {3, false} };
    processEvents(events);
    return 0;
}
```

**C++ Example** (Data-Oriented Design):

```cpp
#include <iostream>
#include <vector>

struct TelemetryData {
    std::vector<int> instantaneousTimes;
    std::vector<int> longTermTimes;
};

void processInstantaneous(const std::vector<int>& times) {
    for (int time : times) {
        std::cout << "Processing instantaneous event at time " << time << std::endl;
    }
}

void processLongTerm(const std::vector<int>& times) {
    for (int time : times) {
        std::cout << "Processing long-term event at time " << time << std::endl;
    }
}

int main() {
    TelemetryData data = {


        { 1, 3, 5 },
        { 2, 4, 6 }
    };
    
    processInstantaneous(data.instantaneousTimes);
    processLongTerm(data.longTermTimes);
    
    return 0;
}
```

---



## GPT generated content (with a bit of "hallucinations")

Here's the expanded digest with essential text and detailed code examples for each point, focusing on modern replacements for legacy C++ practices.

---

**Legacy Pointers vs. Smart Pointers**

**Legacy Practice:** Use of raw pointers, manual memory management, and explicit `new` and `delete`. This can lead to memory leaks, dangling pointers, and undefined behavior.

**Modern Replacement:** Use smart pointers like `std::unique_ptr`, `std::shared_ptr`, and `std::weak_ptr` to manage dynamic memory automatically.

```cpp
// Legacy code
class LegacyClass {
    int* data;
public:
    LegacyClass() { data = new int[10]; }
    ~LegacyClass() { delete[] data; }
};

// Modern code
#include <memory>

class ModernClass {
    std::unique_ptr<int[]> data;
public:
    ModernClass() : data(std::make_unique<int[]>(10)) {}
    // Destructor not needed, as std::unique_ptr handles memory automatically
};
```

**Key Insight:** Using smart pointers reduces the need for manual memory management, preventing common errors like memory leaks and dangling pointers.

---

**C-Style Arrays vs. STL Containers**

**Legacy Practice:** Use of C-style arrays, which require manual memory management and do not provide bounds checking.

**Modern Replacement:** Use `std::vector` for dynamic arrays or `std::array` for fixed-size arrays. These containers handle memory management internally and offer bounds checking.

```cpp
// Legacy code
int arr[10];
for (int i = 0; i < 10; ++i) {
    arr[i] = i * 2;
}

// Modern code
#include <vector>
#include <array>

std::vector<int> vec(10);
for (int i = 0; i < 10; ++i) {
    vec[i] = i * 2;
}

std::array<int, 10> arr2;
for (int i = 0; i < 10; ++i) {
    arr2[i] = i * 2;
}
```

**Key Insight:** STL containers provide better safety and ease of use compared to traditional arrays, and should be the default choice in modern C++.

---

**Manual Error Handling vs. Exceptions and `std::expected`**

**Legacy Practice:** Return codes or error flags to indicate failures, which can be cumbersome and error-prone.

**Modern Replacement:** Use exceptions for error handling, which separate normal flow from error-handling code. Use `std::expected` (from C++23) for functions that can either return a value or an error.

```cpp
// Legacy code
int divide(int a, int b, bool& success) {
    if (b == 0) {
        success = false;
        return 0;
    }
    success = true;
    return a / b;
}

// Modern code with exceptions
int divide(int a, int b) {
    if (b == 0) throw std::runtime_error("Division by zero");
    return a / b;
}

// Modern code with std::expected (C++23)
#include <expected>

std::expected<int, std::string> divide(int a, int b) {
    if (b == 0) return std::unexpected("Division by zero");
    return a / b;
}
```

**Key Insight:** Exceptions and `std::expected` offer more explicit and manageable error handling, improving code clarity and robustness.

---

**Void Pointers vs. Type-Safe Programming**

**Legacy Practice:** Use of `void*` for generic programming, leading to unsafe code and difficult debugging.

**Modern Replacement:** Use templates for type-safe generic programming, ensuring that code is checked at compile time.

```cpp
// Legacy code
void process(void* data, int type) {
    if (type == 1) {
        int* intPtr = static_cast<int*>(data);
        // Process int
    } else if (type == 2) {
        double* dblPtr = static_cast<double*>(data);
        // Process double
    }
}

// Modern code
template <typename T>
void process(T data) {
    // Process data safely with type known at compile time
}

int main() {
    process(10);      // Automatically deduces int
    process(5.5);     // Automatically deduces double
}
```

**Key Insight:** Templates provide type safety, ensuring errors are caught at compile time and making code easier to maintain.

---

**Inheritance vs. Composition and Type Erasure**

**Legacy Practice:** Deep inheritance hierarchies, which can lead to rigid designs and hard-to-maintain code.

**Modern Replacement:** Favor composition over inheritance. Use type erasure (e.g., `std::function`, `std::any`) or `std::variant` to achieve polymorphism without inheritance.

```cpp
// Legacy code
class Base {
public:
    virtual void doSomething() = 0;
};

class Derived : public Base {
public:
    void doSomething() override {
        // Implementation
    }
};

// Modern code using composition
class Action {
    std::function<void()> func;
public:
    Action(std::function<void()> f) : func(f) {}
    void execute() { func(); }
};

Action a([]() { /* Implementation */ });
a.execute();

// Modern code using std::variant
#include <variant>

using MyVariant = std::variant<int, double, std::string>;

void process(const MyVariant& v) {
    std::visit([](auto&& arg) {
        // Implementation for each type
    }, v);
}
```

**Key Insight:** Composition and type erasure lead to more flexible and maintainable designs than traditional deep inheritance hierarchies.

---

**Global Variables vs. Dependency Injection**

**Legacy Practice:** Use of global variables for shared state, which can lead to hard-to-track bugs and dependencies.

**Modern Replacement:** Use dependency injection to provide dependencies explicitly, improving testability and modularity.

```cpp
// Legacy code
int globalCounter = 0;

void increment() {
    globalCounter++;
}

// Modern code using dependency injection
class Counter {
    int count;
public:
    Counter() : count(0) {}
    void increment() { ++count; }
    int getCount() const { return count; }
};

void useCounter(Counter& counter) {
    counter.increment();
}

int main() {
    Counter c;
    useCounter(c);
    std::cout << c.getCount();
}
```

**Key Insight:** Dependency injection enhances modularity and testability by explicitly providing dependencies rather than relying on global state.

---

**Macros vs. `constexpr` and Inline Functions**

**Legacy Practice:** Extensive use of macros for constants and inline code, which can lead to debugging challenges and obscure code.

**Modern Replacement:** Use `constexpr` for compile-time constants and inline functions for inline code, which are type-safe and easier to debug.

```cpp
// Legacy code
#define SQUARE(x) ((x) * (x))

// Modern code using constexpr
constexpr int square(int x) {
    return x * x;
}

// Legacy code using macro for constant
#define MAX_SIZE 100

// Modern code using constexpr
constexpr int maxSize = 100;
```

**Key Insight:** `constexpr` and inline functions offer better type safety and are easier to debug compared to macros, making the code more maintainable.

---

**Manual Resource Management vs. RAII (Resource Acquisition Is Initialization)**

**Legacy Practice:** Manual resource management, requiring explicit release of resources like files, sockets, and memory.

**Modern Replacement:** Use RAII, where resources are tied to object lifetime and automatically released when the object goes out of scope.

```cpp
// Legacy code
FILE* file = fopen("data.txt", "r");
if (file) {
    // Use file
    fclose(file);
}

// Modern code using RAII with std::fstream
#include <fstream>

{
    std::ifstream file("data.txt");
    if (file.is_open()) {
        // Use file
    } // File is automatically closed when going out of scope
}
```

**Key Insight:** RAII automates resource management, reducing the risk of resource leaks and making code more reliable.

---

**Explicit Loops vs. Algorithms and Ranges**

**Legacy Practice:** Manual loops for operations like filtering, transforming, or accumulating data.

**Modern Replacement:** Use STL algorithms (`std::transform`, `std::accumulate`, `std::copy_if`) and ranges (C++20) to express intent more clearly and concisely.

```cpp
// Legacy code
std::vector<int> vec = {1, 2, 3, 4, 5};
std::vector<int> result;

for (auto i : vec) {
    if (i % 2 == 0) result.push_back(i * 2);
}

// Modern code using algorithms
#include <algorithm>
#include <vector>

std::vector<int> vec = {1, 2, 3, 4, 5};
std::vector<int> result;

std::transform(vec.begin(), vec.end(), std::back_inserter(result),
               [](int x) { return x % 2 == 0 ? x * 2 : 0; });
result.erase(std::remove(result.begin(), result.end(), 0), result.end());

// Modern code using ranges (C++20)
#include <ranges>

auto result = vec | std::views::filter([](int x) { return x % 2 == 0; })
                  | std::views::transform([](int x) { return x * 2; });
```

**Key Insight:** STL algorithms and ranges make code more expressive and concise, reducing the likelihood of errors and enhancing readability.

---

**Manual String Manipulation vs. `std::string` and `std::string_view`**

**Legacy Practice:** Use of `char*` and

 manual string manipulation with functions like `strcpy`, `strcat`, and `strcmp`.

**Modern Replacement:** Use `std::string` for dynamic strings and `std::string_view` for non-owning string references, which offer safer and more convenient string handling.

```cpp
// Legacy code
char str1[20] = "Hello, ";
char str2[] = "world!";
strcat(str1, str2);
if (strcmp(str1, "Hello, world!") == 0) {
    // Do something
}

// Modern code using std::string
#include <string>

std::string str1 = "Hello, ";
std::string str2 = "world!";
str1 += str2;
if (str1 == "Hello, world!") {
    // Do something
}

// Modern code using std::string_view (C++17)
#include <string_view>

std::string_view strView = str1;
if (strView == "Hello, world!") {
    // Do something
}
```

**Key Insight:** `std::string` and `std::string_view` simplify string handling, provide better safety, and eliminate the risks associated with manual C-style string manipulation.

---

**Threading with Raw Threads vs. `std::thread` and Concurrency Utilities**

**Legacy Practice:** Creating and managing threads manually using platform-specific APIs, which can be error-prone and non-portable.

**Modern Replacement:** Use `std::thread` and higher-level concurrency utilities like `std::future`, `std::async`, and `std::mutex` to manage threading in a portable and safe way.

```cpp
// Legacy code (Windows example)
#include <windows.h>

DWORD WINAPI threadFunc(LPVOID lpParam) {
    // Thread code
    return 0;
}

HANDLE hThread = CreateThread(NULL, 0, threadFunc, NULL, 0, NULL);

// Modern code using std::thread
#include <thread>

void threadFunc() {
    // Thread code
}

std::thread t(threadFunc);
t.join();  // Wait for thread to finish

// Modern code using std::async
#include <future>

auto future = std::async(std::launch::async, threadFunc);
future.get();  // Wait for async task to finish
```

**Key Insight:** `std::thread` and other concurrency utilities provide a portable and higher-level interface for multithreading, reducing the complexity and potential errors associated with manual thread management.

---

**Function Pointers vs. `std::function` and Lambdas**

**Legacy Practice:** Use of function pointers to pass functions as arguments or store them in data structures, which can be cumbersome and less flexible.

**Modern Replacement:** Use `std::function` to store callable objects, and lambdas to create inline, anonymous functions.

```cpp
// Legacy code
void (*funcPtr)(int) = someFunction;
funcPtr(10);

// Modern code using std::function and lambdas
#include <functional>
#include <iostream>

std::function<void(int)> func = [](int x) { std::cout << x << std::endl; };
func(10);
```

**Key Insight:** `std::function` and lambdas offer a more flexible and powerful way to handle functions as first-class objects, making code more modular and expressive.



