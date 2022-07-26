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
