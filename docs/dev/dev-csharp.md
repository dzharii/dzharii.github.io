## Dev C# Articles

## Garbage Collector
- 2022-03-10 [8 Techniques to Avoid GC Pressure and Improve Performance in C# .NET - Michael's Coding Spot](https://michaelscodingspot.com/avoid-gc-pressure/)
> .NET provides a lot of great collections types like `List<T>`, `Dictionary<T>`, and `HashSet<T>`. All those collections have dynamic size capacity. That means they automatically expand in size as you add more items.
- Set initial capacity for dynamic collections
- Use ArrayPool for short-lived large arrays
- Use Structs instead of Classes (sometimes)
- Avoid Finalizers
- Use StackAlloc for short-lived array allocations
- Use StringBuilder, but not always
- Use String Interning in very specific cases
- Avoid memory leaks
- Summary:
    - Allocations should be avoided if possible.
    - Reusing memory is better than allocating new memory.
    - Allocating on the Stack is faster than allocating on the Heap.

- 2022-08-07 [Patterns & Practices for efficiently handling C# async/await cancel processing and timeouts by Yoshifumi Kawai Aug, 2022 Medium](https://neuecc.medium.com/patterns-practices-for-efficiently-handling-c-async-await-cancel-processing-and-timeouts-b419ce5f69a4)


- 2022-08-01 🌟 [Asynchronous Programming in .NET - Introduction, Misconceptions, and Problems Blog](https://wapplegate.com/asynchronous-programming/?utm_source=csharpdigest&utm_medium=email&utm_campaign=426)
  * Asynchronous Programming in .NET - Introduction, Misconceptions, and Problems
  * Synchronous vs. Asynchronous Programming
  * CPU-Bound vs. I/O-Bound
  * Identifying I/O-Bound and CPU-Bound Code
  * An I/O-Bound Async / Await Example in .NET
  * A CPU-Bound Async / Await Example in .NET
  * Why Should You Use Asynchronous Programming?
  * Asynchrony is Viral
  * Threads and the Thread-Pool
  * The Task Type
  * How Do the Async / Await Keywords Work?
  * Why is it Important for Web Applications to Use Async / Await for I/O-Bound Work?
  * Why is it Important for UI Applications to Use Async / Await for I/O-Bound and CPU-Bound Work?
  * Doing Multiple Things at Once
  * What Exactly Does Task.Run Do?
  * Common Misconceptions When Using Async / Await in .NET
  * The Biggest Problem (Sync-Over-Async)
  * What is Thread-Pool Starvation?
  * Full Async Reading List
