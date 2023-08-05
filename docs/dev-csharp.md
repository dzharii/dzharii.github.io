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

2023-04-16 [5 useful extensions for Task T in .NET](https://steven-giesel.com/blogPost/d38e70b4-6f36-41ff-8011-b0b0d1f54f6e/)

>  Fire and forget

```cs
public static void FireAndForget(
  this Task task,
  Action<Exception> errorHandler = null)
{
    task.ContinueWith(t =>
    {
        if (t.IsFaulted && errorHandler != null)
            errorHandler(t.Exception);
    }, TaskContinuationOptions.OnlyOnFaulted);
}
```

> Retry

```cs
var result = await (() => GetResultAsync()).Retry(3, TimeSpan.FromSeconds(1));
```

>  OnFailure

```cs
await GetResultAsync().OnFailure(ex => Console.WriteLine(ex.Message));
```

> 4. Timeout

```cs
await GetResultAsync().WithTimeout(TimeSpan.FromSeconds(1));
```

> 5. Fallback

```cs
var result = await GetResultAsync().Fallback("fallback");
```



2023-08-05 [Back to Basics: Efficient Async and Await - Filip Ekberg - NDC Oslo 2023 - YouTube](https://www.youtube.com/watch?v=n6kiJKr4_oA)

> Tasks / async / await
>
> ![image-20230805030554437](./dev-csharp.assets/image-20230805030554437.png)
>
> 





## Performance measurement in C#

2023-02-05 Video [A mortal's guide to making a pig run faster - Richard Banks - NDC Sydney 2022 - YouTube](https://www.youtube.com/watch?v=onpBW9b8bMs) 

  > The talk about performance optimization in .NET
  > Tools:
  >
  > - PerfView
  >   https://github.com/microsoft/perfview
  > - BenchmarkDotNet
  >   https://benchmarkdotnet.org/
  > - Speedscope
  >   https://www.speedscope.app/
  > - DotNet Source Code
  > - https://source.dot.net/

 ## Tools

2023-01-10 [SharpLab](https://sharplab.io/) 

> Online tool to explore compiled .NET code
>
> ![image-20230212191123327](./dev-csharp.assets/image-20230212191123327.png)

2023-02-05 [Generating Sample Data with Bogus](https://wildermuth.com/2023/01/29/generating-sample-data-with-bogus/) 

> dotnet add package Bogus
>
> Bogus is a library that works with C#, F# and VB.NET that can be used to create repeatable, fake data for applications. It is somewhat a port of a similar library Bogus.js. It accomplished this by creating generators (called Fakers) that have a set of rules for generating one or more fake objects. Built-into Bogus is a set of generalized rules for common data categories (i.e. Addresses, Companies, People, Phone Numbers, etc.). Enough talk, let’s see how it works. The full repo is at:

2023-06-29 [Performance tricks I learned from contributing to open source .NET packages - Daniel Marbach - YouTube](https://www.youtube.com/watch?v=pGgsFW7kDKI)
 > [danielmarbach/PerformanceTricksAzureSDK: Performance tricks I learned from contributing to the Azure .NET SDK](https://github.com/danielmarbach/PerformanceTricksAzureSDK) github repository for this talk.
 >
 > LINQ TO COLLECTION-BASED OPERATIONS
 > - Use `Array.Empty<T>()` to represent empty arrays
 > - Use `Enumerable.Empty<T>` to represent empty enumerables
 > - Prevent collections from growing
 >
 > HOW TO DETECT ALLOCATIONS?
 > - Use memory profilers and watch out for excessive allocations of `*__DisplayClass*` or various variants of `Action*` and `Func*`
 > - Use tools like Heap Allocation Viewer (Rider) or Heap Allocation Analyzer (Visual Studio)
 >
 > - Avoid excessive allocations to reduce the GC overhead
 > - Think at least twice before using LINQ or unnecessary enumeration on the hot path
 > - Be aware of closure allocations
 > - Pool and re-use buffers
 > - For smaller local buffers, consider using the stack
 > - Be aware of parameter overloads
 > - Where possible and feasible use value types but pay attention to unnecessary boxing
 > - Move allocations away from the hot-path where possible
 >
 > - [C# 9 - Improving performance using the SkipLocalsInit attribute - Meziantou's blog](https://www.meziantou.net/csharp-9-improve-performance-using-skiplocalsinit.htm)
