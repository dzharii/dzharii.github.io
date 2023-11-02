# testing



## Spark

2023-10-29 [How to Speed Up Spark Jobs on Small Test Datasets - Blog | luminousmen](https://luminousmen.com/post/how-to-speed-up-spark-jobs-on-small-test-datasets)

> ### 1. Use a Single Executor with `local[1]`
>
> By default, Apache Spark allocates multiple executors per Spark session. In a small dataset scenario, this can be an inefficient use of resources. To address this, you can configure Spark to use only one local executor by specifying `local[1]` when creating a session:
>
> ```python
> .master("local[1]")
> ```
>
> This ensures that your computational resources are optimally utilized.
>
> ### 2. Adjust `spark.sql.shuffle.partitions`
>
> The `spark.sql.shuffle.partitions` configuration controls the number of partitions used during shuffle operations. Shuffling redistributes data across partitions and almost always is computationally expensive. For larger datasets, the default value of 200 makes sense, but for smaller datasets, it's excessive.
>
> Consider reducing `spark.sql.shuffle.partitions` to a smaller value, such as 20 or even 1, depending on your use-case:
>
> ```python
> .config("spark.sql.shuffle.partitions", 1)
> ```
>
> This modification prevents Spark from spending unnecessary time on [shuffling operations](https://luminousmen.com/post/spark-tips-partition-tuning) and generating excessive tasks, resulting in much faster processing.
>
> ### 3. Adjust `spark.default.parallelism`
>
> Think of your machine's CPU cores as eager workers waiting to tackle tasks. The `spark.default.parallelism` parameter determines how many tasks Spark can run concurrently. To make the most of your available cores, set it equal to the number of available cores in the processing environment:
>
> ```python
> .config("spark.default.parallelism", <number_of_cores>)
> ```
>
> This configuration ensures that each core is efficiently utilized, leading to a significant speedup in processing.
>
> ### 4. Disable Compression
>
> Compression can be resource-intensive, and for small datasets, it may not provide significant benefits while consuming CPU cycles. Disabling compression can save computational resources and improve processing speed.
>
> You can disable compression for both RDDs and shuffle operations using the following configurations:
>
> ```python
> .config("spark.rdd.compress", "false")
> .config("spark.shuffle.compress", "false")
> ```
>
> By setting these values to "false," you instruct Spark to skip unnecessary data compression.
>
> ### 5. Disable Dynamic Allocation
>
> Dynamic allocation is a feature in Spark that adjusts executor resources based on the workload. While beneficial for larger datasets and clusters, it may not be advantageous for smaller datasets.
>
> You can disable dynamic allocation with the following configuration:
>
> ```python
> .config("spark.dynamicAllocation.enabled", "false")
> ```

> This ensures that the number of allocated resources remains fixed and does not fluctuate based on the workload.
>
> ### 6. Control Executor Resources
>
> In a smaller dataset scenario, fine-grained control over executor resources can be beneficial. You can explicitly set the number of CPU cores and executor instances using the following configurations:
>
> ```python
> .config("spark.executor.cores", 1)
> .config("spark.executor.instances", 1)
> ```
>
> Setting both values to 1 ensures that Spark efficiently utilizes available resources without overcommitting them. This is especially valuable when working with a single machine and small datasets.
>
> ### 7. Disabling Spark UI for Tests
>
> For testing scenarios, you can further enhance efficiency by disabling Spark's user interface:
>
> ```python
> .config("spark.ui.enabled", "false")
> .config("spark.ui.showConsoleProgress", "false")
> ```
>
> This step streamlines your testing process, ensuring that resources are allocated solely to your computations.

## Tools

### Pairwise

2023-10-29 [microsoft/pict: Pairwise Independent Combinatorial Tool](https://github.com/microsoft/pict)

> PICT generates test cases and test configurations. With PICT, you can generate tests that are more effective than manually generated tests and in a fraction of the time required by hands-on test case design.
> PICT runs as a command line tool. Prepare a model file detailing the parameters of the interface (or set of configurations, or data) you want to test. PICT generates a compact set of parameter value choices that represent the test cases you should use to get comprehensive combinatorial coverage of your parameters.





