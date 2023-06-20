# 2023-06-19 In C++ 17 describe new features as a code block
Date: 2023-06-19

## Prompt

Make all code cheat sheet for C++ 17 new features, for instance 

```
// C++ 17 now allows multiple commands in if statement
if (int a = Func1(), b = Func2(); a && b)
{
    // Do stuff with a and b.
}

// next feature ...
```
generate as a continuous markdown code block. put brief explanation in the code comments only



## Responses

Certainly! Here's a cheat sheet for C++17's new features:

```cpp
// C++ 17 now allows multiple commands in if statement
if (int a = Func1(), b = Func2(); a && b)
{
    // Do stuff with a and b.
}

// std::optional provides a nullable object that can conditionally hold a value
std::optional<int> optionalInt = GetValue();
if (optionalInt.has_value())
{
    int value = optionalInt.value();
    // Use the value
}

// Structured bindings allow unpacking of tuples and other structures
std::tuple<int, std::string> tuple = GetTuple();
auto [number, text] = tuple;
// Use number and text

// Fold expressions simplify variadic templates and enable easier recursive template functions
template <typename... Args>
bool AllTrue(Args... args)
{
    return (args && ...);
}

// constexpr if allows compile-time branching based on type traits or constexpr expressions
template <typename T>
void Process(T value)
{
    if constexpr (std::is_integral_v<T>)
    {
        // Process integral types
    }
    else if constexpr (std::is_floating_point_v<T>)
    {
        // Process floating-point types
    }
    else
    {
        // Process other types
    }
}

// std::filesystem provides a standardized file system library for file and directory operations
std::filesystem::path filePath = "/path/to/file.txt";
if (std::filesystem::exists(filePath))
{
    std::filesystem::remove(filePath);
}

// New string_view literals make it easier to work with string literals as non-owning views
using namespace std::literals::string_view_literals;
std::string_view view = "Hello World"sv;
std::cout << view;

// if and switch statements now allow initialization of variables inside their conditions
if (auto result = SomeFunction(); result == ExpectedValue)
{
    // Do something
}

// Parallel algorithms make it easier to utilize multiple cores for efficient processing
std::vector<int> numbers = {1, 2, 3, 4, 5};
std::for_each(std::execution::par, numbers.begin(), numbers.end(), [](int& n) {
    n *= 2;
});

// New attributes like [[maybe_unused]] and [[nodiscard]] provide additional control and annotations
[[maybe_unused]] int unusedVariable;
[[nodiscard]] int GetValue();

// constexpr lambdas allow lambda functions to be evaluated at compile-time
constexpr auto square = [](int x) { return x * x; };
int result = square(5); // Evaluated at compile-time

// Class template argument deduction allows automatic deduction of template arguments from constructor arguments
std::vector numbers = {1, 2, 3, 4}; // Deduced as std::vector<int>

// inline variables provide an alternative to static constants in headers
inline constexpr int MaxValue = 100;

// Non-type template parameters can now be deduced in more scenarios
template <auto Value>
void ProcessValue()
{
    // Process the value
}
ProcessValue<42>(); // Deduced as ProcessValue<42>()

// New standard attributes like [[fallthrough]] and [[likely]]/[[unlikely]] provide better control flow annotations
switch (value)
{
    case 1:
        [[fallthrough]];
    case 2:
        // Do something for case 1 and 2
        break;
    case 3:
        [[unlikely]];
        // Do something for case 3
        break;
    default:
        [[likely]];
        // Do something for other cases
        break;
}

// Other features include more constexpr improvements, if constexpr in lambdas, structured bindings in if

 statements, and more.
```

These are just some of the new features introduced in C++17. Each feature provides enhancements and improvements to make C++ programming more efficient and expressive.



Certainly! Here are some of the new features introduced in C++20 compared to C++17:

```cpp
// C++20 introduces lambdas in unevaluated contexts, such as type traits
template <typename T>
constexpr bool IsPointer = []() {
    if constexpr (std::is_pointer_v<T>) {
        return true;
    } else {
        return false;
    }
}();

// Concepts provide a way to express compile-time predicates for template arguments
template <typename T>
concept Integral = std::is_integral_v<T>;

template <Integral T>
void Process(T value) {
    // Process integral types
}

// Three-way comparisons simplify the implementation of comparison operators
struct Person {
    std::string name;

    auto operator<=>(const Person& other) const = default;
};

// Coroutines enable the use of lightweight cooperative multitasking
#include <coroutine>

struct Task {
    struct promise_type {
        Task get_return_object() { return {}; }
        std::suspend_never initial_suspend() { return {}; }
        std::suspend_never final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() {}
    };
};

// Ranges provide a standardized way to work with sequences of values
#include <ranges>

std::vector<int> numbers = {1, 2, 3, 4, 5};
auto evenNumbers = numbers | std::views::filter([](int n) { return n % 2 == 0; });

// Concepts and ranges can be combined to express complex predicates on ranges
template <typename T>
concept EvenNumber = std::integral<T> && (T{} % 2 == 0);

auto evenNumbers = numbers | std::views::filter(EvenNumber{});

// Modules provide a new modularization system for better code organization and build times
import <iostream>;

int main() {
    std::cout << "Hello, Modules!";
    return 0;
}

// Calendar and time zone support with the <chrono> library
#include <chrono>
#include <iostream>

int main() {
    auto currentTime = std::chrono::system_clock::now();
    std::cout << "Current time: " << std::chrono::format("%Y-%m-%d %H:%M:%S", currentTime);
    return 0;
}

// Additional standard attributes like likely and unlikely provide better control flow hints
[[likely]] void FastPath() {
    // Optimized code path
}

[[unlikely]] void SlowPath() {
    // Less optimized code path
}

// Simplified capture of this in lambdas
struct Foo {
    void DoSomething() {
        [self = *this]() {
            // Capture of this as a value
            self.MemberFunction();
        }();
    }

    void MemberFunction() {
        // Do something
    }
};

// consteval allows evaluation of functions at compile-time
consteval int Square(int x) {
    return x * x;
}

int main() {
    constexpr int result = Square(5); // Evaluated at compile-time
    return 0;
}
```



## Standard Library C++17

Certainly! Here are some of the key changes and additions to the C++ Standard Library in C++17:

```cpp
// New headers
#include <optional>   // Provides a container for optional values
#include <variant>    // Introduces a type-safe union of types
#include <any>        // Introduces a container for single values of any type
#include <string_view> // Introduces non-owning string-like objects
#include <filesystem> // Provides facilities for manipulating file systems

// std::optional allows representing optional values without using pointers
std::optional<int> GetValue() {
    if (/* some condition */) {
        return 42;
    }
    return std::nullopt; // No value
}

// std::variant provides a type-safe union of types
std::variant<int, double, std::string> GetValue() {
    if (/* some condition */) {
        return 42;
    } else if (/* some other condition */) {
        return 3.14;
    } else {
        return "Hello";
    }
}

// std::any is a container for single values of any type
std::any value = 42;
value = 3.14;
value = "Hello";

// std::string_view provides non-owning string-like objects
void PrintString(std::string_view str) {
    std::cout << str;
}

// std::filesystem provides facilities for manipulating file systems
#include <filesystem>
namespace fs = std::filesystem;
fs::path path = fs::current_path();
if (fs::exists(path)) {
    fs::rename(path, "new_name.txt");
}

// Parallel algorithms
#include <algorithm>
#include <execution>
std::vector<int> data = {5, 2, 8, 1, 7};
std::sort(std::execution::par, data.begin(), data.end());

// Structured bindings
std::map<std::string, int> scores = {{"Alice", 100}, {"Bob", 85}};
for (const auto& [name, score] : scores) {
    std::cout << name << ": " << score << std::endl;
}

// New Standard Library functions
std::string str = "Hello, World!";
if (std::all_of(str.begin(), str.end(), ::isalpha)) {
    std::cout << "The string contains only alphabetic characters." << std::endl;
}

// std::scoped_lock provides a convenient way to acquire multiple locks simultaneously
std::mutex mutex1, mutex2;
std::scoped_lock lock(mutex1, mutex2); // Locks both mutexes

// Improved smart pointers
std::shared_ptr<int> ptr = std::make_shared<int>(42);
std::weak_ptr<int> weakPtr = ptr;

// Emplacement in containers
std::vector<int> numbers;
numbers.emplace_back(42); // Constructs the element in-place

// Parallelism TS (Technical Specification)
#include <experimental/algorithm>
std::experimental::parallel::sort(data.begin(), data.end());

// Filesystem TS (Technical Specification)
#include <experimental/filesystem>
namespace fs = std::experimental::filesystem;
fs::path path = fs::current_path();
if (fs::exists(path)) {
    fs::rename(path, "new_name.txt");
}
```

These are some of the major changes and additions to the C++ Standard Library in C++17. These additions provide developers with powerful new tools, such as optional values, variant types, filesystem manipulation, parallel algorithms, and improved smart pointers, making it easier to write modern, expressive, and efficient C++ code.



## C++ 20

These are just some of the new features added in C++20, building upon the enhancements introduced in C++17. Each feature brings additional capabilities and improvements to the C++ language, empowering developers to write more expressive, efficient, and modern code.



Certainly! Here are the remaining features added in C++20 compared to C++17:

```cpp
// Modules provide a new modularization system for better code organization and build times
import <iostream>;

int main() {
    std::cout << "Hello, Modules!";
    return 0;
}

// Calendar and time zone support with the <chrono> library
#include <chrono>
#include <iostream>

int main() {
    auto currentTime = std::chrono::system_clock::now();
    std::cout << "Current time: " << std::chrono::format("%Y-%m-%d %H:%M:%S", currentTime);
    return 0;
}

// Additional standard attributes like likely and unlikely provide better control flow hints
[[likely]] void FastPath() {
    // Optimized code path
}

[[unlikely]] void SlowPath() {
    // Less optimized code path
}

// Simplified capture of this in lambdas
struct Foo {
    void DoSomething() {
        [self = *this]() {
            // Capture of this as a value
            self.MemberFunction();
        }();
    }

    void MemberFunction() {
        // Do something
    }
};

// consteval allows evaluation of functions at compile-time
consteval int Square(int x) {
    return x * x;
}

int main() {
    constexpr int result = Square(5); // Evaluated at compile-time
    return 0;
}

// Improved constexpr for lambda expressions
constexpr auto square = [](int x) { return x * x; };

// Polymorphic lambdas with auto parameters
auto printValue = [](const auto& value) {
    std::cout << value << std::endl;
};

// Attribute syntax for namespaces and enumerators
[[namespace::foo]]
namespace bar {
    enum class [[enumerator]] Color { Red, Green, Blue };
}

// Three-way comparison operator for std::string_view
std::string_view str1 = "Hello";
std::string_view str2 = "World";
if (str1 <=> str2 > 0) {
    std::cout << "str1 is greater than str2" << std::endl;
}

// Standardized mathematical constants
#include <numbers>
double pi = std::numbers::pi;
double e = std::numbers::e;

// New standard attributes to enforce constraints on functions
[[nodiscard]] int GetValue() {
    return 42;
}

// Synchronized output with std::osyncstream
#include <iostream>
#include <fstream>

int main() {
    std::ofstream file("output.txt");
    std::osyncstream syncedStream(file);
    syncedStream << "Hello, synchronized output!";
    return 0;
}
```

These are the remaining features added in C++20. Each feature brings new functionality, syntax improvements, and better control over code organization, execution, and output. Together, these features enhance the power and expressiveness of the C++ language, enabling developers to write more efficient, maintainable, and modern code.

## Standard Library C++20

Certainly! Here are some of the major changes and additions to the C++ Standard Library in C++20:

```cpp
// Ranges library
#include <ranges>
std::vector<int> numbers = {1, 2, 3, 4, 5};
auto filtered = numbers | std::views::filter([](int n) { return n % 2 == 0; });
for (int n : filtered) {
    std::cout << n << ' ';
}

// Three-way comparisons
#include <compare>
struct MyClass {
    int value;
    auto operator<=>(const MyClass&) const = default;
};

// Calendar and time zone library
#include <chrono>
auto now = std::chrono::system_clock::now();
auto tp = std::chrono::clock_cast<std::chrono::local_days>(now);
auto ymd = std::chrono::year_month_day(tp);

// Coroutines
#include <coroutine>
#include <iostream>
struct generator {
    struct promise_type {
        int current_value;

        generator get_return_object() { return generator{std::coroutine_handle<promise_type>::from_promise(*this)}; }
        std::suspend_always initial_suspend() { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void unhandled_exception() {}
        std::suspend_always yield_value(int value) {
            current_value = value;
            return {};
        }
    };

    bool move_next() { return coro.resume(); }
    int current_value() { return coro.promise().current_value; }

    explicit generator(std::coroutine_handle<promise_type> h) : coro(h) {}
    ~generator() { if (coro) coro.destroy(); }

private:
    std::coroutine_handle<promise_type> coro;
};

generator fibonacci(int n) {
    int a = 0, b = 1;
    while (n-- > 0) {
        co_yield a;
        auto old_a = a;
        a = b;
        b += old_a;
    }
}

int main() {
    for (int fib : fibonacci(10)) {
        std::cout << fib << ' ';
    }
}

// Concepts
template <typename T>
concept Integral = std::is_integral_v<T>;

template <Integral T>
T add(T a, T b) {
    return a + b;
}

// Synchronized output with std::osyncstream
#include <iostream>
#include <fstream>
std::osyncstream synchronized_out(std::cout);

void thread_function() {
    synchronized_out << "Hello from thread!" << std::endl;
}

// Improved smart pointers
std::unique_ptr<int[]> array = std::make_unique<int[]>(10);
std::shared_ptr<int[]> sharedArray = std::make_shared<int[]>(10);

// New Standard Library functions
std::vector<int> numbers = {1, 2, 3, 4, 5};
auto it = std::find(numbers.begin(), numbers.end(), 3);
if (it != numbers.end()) {
    std::cout << "Found 3 at position " << std::distance(numbers.begin(), it) << std::endl;
}

// Random number generation
#include <random>
std::random_device rd;
std::mt19937 gen(rd());
std::uniform_int_distribution<> dis(1, 6);
int random_number = dis(gen);

// Extended file system features
#include <filesystem>
std::filesystem::path filePath = "path/to/file.txt";
std::filesystem::file_time_type lastWriteTime = std::filesystem::last_write_time(filePath);

// Calendar and time zone library
#include <chrono>
auto now = std::chrono::system_clock::

now();
auto tp = std::chrono::clock_cast<std::chrono::local_days>(now);
auto ymd = std::chrono::year_month_day(tp);
```

These are some of the major changes and additions to the C++ Standard Library in C++20. These additions provide developers with powerful tools for working with ranges, three-way comparisons, coroutines, concepts, synchronized output, improved smart pointers, extended file system features, and enhanced calendar and time zone capabilities. These additions aim to make C++ code more expressive, efficient, and easier to work with.
