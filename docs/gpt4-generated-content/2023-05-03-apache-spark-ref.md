# Apache Spark Reference

2023-05-03

[[_TOC_]]

## Inspired by:

- [Act as a Tech Writer](https://github.com/f/awesome-chatgpt-prompts#act-as-a-tech-writer)
- https://api-docs.databricks.com/scala/spark/latest/org/apache/spark/sql/Dataset.html



## Prompt:

> Act as a tech writer and Apache Spark expert. You will act as a creative and engaging technical writer and create guides on how to do use a specific function in Scala Spark.
> I will provide you with the function name, and you will do the best to provide a short description, usage example, and output. The usage example should be good to explain what the function do and clear to the reader (simple to understand). Also the description should be concise. Clear, simple and concise.
> Scala codding requirements:
>
> 1. Prefer writhing variable datatypes;
> 2. Use more simple Scala syntax for the scala beginners. Keep it clear for someone who knows Java, C#, JavaScript, but try to keep good scala programming style.;
> 3. Instead of expressions in the string literals, prefer using language constructs;
> 4. Try to avoid using tuples, like "._1", "._2". Don't use "employee => employee._2 >= 30"; rather introduce a case class;
> 5. Nicely format code with indentation; Format Array initialization, object initialization and the output to illustrate the hierarchical structure of the data.
> 6. Maintain line length 120 characters. This is Okay to have longer lines, but rather prefer splitting statement in multiple lines with nice indentation.
> Please explain: Spark 3 Dataset:
> - unpersist()S
> - unpersist(blocking: Boolean): Dataset



## Actions

#### Function: collect()

Description:

The collect() function in Spark 3 Dataset is used to retrieve all the elements of a dataset and return them as an array or a list in the driver program. It returns an array of objects that can be used to perform operations on the data or iterate over the elements.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to retrieve the information of all employees whose age is greater than or equal to 30. We can use the collect() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
val filteredEmployees = employeeDataset.filter(_.age >= 30).collect()
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. We apply the filter() function to select only the employees whose age is greater than or equal to 30. Finally, we use the collect() function to retrieve all the filtered employees.

Output:

The output of the collect() function is an array of objects. In our example, the filteredEmployees variable will contain an array of Employee instances representing the information of the filtered employees:

```scala
Array(
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
```

Note that using the collect() function to retrieve all the elements of a large dataset can be computationally expensive and memory-intensive, and may lead to performance issues or even out-of-memory errors. Therefore, it is recommended to use this function with caution and only for small datasets or for testing purposes.



#### Function: collectAsList()

Description:

The collectAsList() function in Spark 3 Dataset is similar to the collect() function but it returns the result as a Java List instead of an array. It collects all the elements of a dataset to the driver program and returns them as a Java List that can be used for further processing.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to retrieve the information of all employees whose age is greater than or equal to 30. We can use the collectAsList() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
val filteredEmployees = employeeDataset.filter(_.age >= 30).collectAsList()
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. We apply the filter() function to select only the employees whose age is greater than or equal to 30. Finally, we use the collectAsList() function to retrieve all the filtered employees as a Java List.

Output:

The output of the collectAsList() function is a Java List of objects. In our example, the filteredEmployees variable will contain a Java List of Employee instances representing the information of the filtered employees:

```scala
List(
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
```

Note that the collectAsList() function has the same performance and memory implications as the collect() function, and should be used with caution for large datasets.



#### Function: count()

Description:

The count() function in Spark 3 Dataset is used to count the number of elements in a dataset. It returns the total number of rows or records present in the dataset.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to count the number of employees in the dataset. We can use the count() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
val employeeCount = employeeDataset.count()
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the count() function to count the total number of employees in the dataset.

Output:

The output of the count() function is a Long value representing the total number of elements in the dataset. In our example, the employeeCount variable will contain the total number of employees in the dataset, which is 4:

```
4
```

Note that the count() function is an action operation that triggers the computation of the dataset, and should be used with caution for large datasets.



#### Function: describe()

Description:

The describe() function in Spark 3 Dataset is used to summarize the statistics of a dataset. It computes the summary statistics, including count, mean, standard deviation, minimum, and maximum values, for each numeric column in the dataset.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to compute the summary statistics for the age and salary columns in the dataset. We can use the describe() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
val summaryStats = employeeDataset.describe("age", "salary")
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the describe() function to compute the summary statistics for the age and salary columns in the dataset.

Output:

The output of the describe() function is a new dataset containing the summary statistics for each column specified in the function. In our example, the summaryStats variable will contain a new dataset with the summary statistics for the age and salary columns:

```scala
+-------+-----------------+-----------------+
|summary|              age|           salary|
+-------+-----------------+-----------------+
|  count|                4|                4|
|   mean|            28.00|           3075.0|
| stddev|2.581988897471611|222.1084339724426|
|    min|               25|           2800.0|
|    max|               32|           3500.0|
+-------+-----------------+-----------------+
```

Note that the describe() function is a transformation operation that does not trigger the computation of the dataset, and can be used for large datasets without performance issues.



#### Function: first()

Description:

The first() function in Spark 3 Dataset is used to retrieve the first element of the dataset. It returns the first element of the dataset as a new instance of the case class or a tuple, depending on the structure of the dataset.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to retrieve the details of the first employee in the dataset. We can use the first() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
val firstEmployee = employeeDataset.first()
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the first() function to retrieve the details of the first employee in the dataset.

Output:

The output of the first() function is the first element of the dataset as a new instance of the case class or a tuple, depending on the structure of the dataset. In our example, the firstEmployee variable will contain a new instance of the Employee case class representing the details of the first employee in the dataset:

```
Employee("John", 28, 3000.0)
```

Note that the first() function is an action operation that triggers the computation of the dataset, and should be used with caution for large datasets.



#### Function: foreach()

Description:

The foreach() function in Spark 3 Dataset is used to apply a given function to each element of the dataset. It iterates over the elements of the dataset and applies a user-defined function to each element.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to print the details of each employee in the dataset. We can use the foreach() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
employeeDataset.foreach(employee => println(s"Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}"))
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the foreach() function to print the details of each employee in the dataset.

Output:

The output of the foreach() function is the result of applying the given function to each element of the dataset. In our example, the output will be the details of each employee in the dataset printed to the console:

```yaml
Name: John, Age: 28, Salary: 3000.0
Name: Mary, Age: 25, Salary: 2800.0
Name: Peter, Age: 32, Salary: 3500.0
Name: Jane, Age: 27, Salary: 3200.0
```

Note that the foreach() function is an action operation that triggers the computation of the dataset, and should be used with caution for large datasets. Also, the order of the elements in the output is not guaranteed, as Spark processes elements in parallel.



#### Function: foreachPartition()

Description:

The foreachPartition() function in Spark 3 Dataset is used to apply a given function to each partition of the dataset. It is similar to the foreach() function, but instead of applying the function to each element, it applies the function to each partition of the dataset. It can be useful when we need to perform some expensive initialization or setup once per partition, rather than once per element.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to compute the total salary of each partition of the dataset. We can use the foreachPartition() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
employeeDataset.foreachPartition(iterator => {
  var partitionTotalSalary = 0.0
  iterator.foreach(employee => partitionTotalSalary += employee.salary)
  println(s"Partition Total Salary: $partitionTotalSalary")
})
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the foreachPartition() function to compute the total salary of each partition of the dataset.

Output:

The output of the foreachPartition() function is the result of applying the given function to each partition of the dataset. In our example, the output will be the total salary of each partition of the dataset printed to the console:

```scala
Partition Total Salary: 5800.0
Partition Total Salary: 6700.0
```

Note that the foreachPartition() function is an action operation that triggers the computation of the dataset, and should be used with caution for large datasets. Also, the order of the partitions in the output is not guaranteed, as Spark processes partitions in parallel.



#### Function: head()

Description:

The head() function in Spark 3 Dataset is used to return the first n rows of a dataset as a new Dataset. It is similar to the take() function, but instead of returning an Array, it returns a new Dataset.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to get the first 2 rows of the dataset. We can use the head() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
val firstTwoEmployees = employeeDataset.head(2)
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the head() function to get the first 2 rows of the dataset as a new Dataset.

Output:

The output of the head() function is a new Dataset containing the first n rows of the original dataset. In our example, the output will be a new Dataset containing the details of the first 2 employees:

```scala
+----+---+------+
|name|age|salary|
+----+---+------+
|John| 28|3000.0|
|Mary| 25|2800.0|
+----+---+------+
```

Note that the head() function is an action operation that triggers the computation of the dataset, and should be used with caution for large datasets. Also, the order of the rows in the output is not guaranteed, as Spark processes data in parallel.



#### Function: reduce()

Description:

The reduce() function in Spark 3 Dataset is used to aggregate the elements of a dataset using a specified binary operator. The binary operator must be associative and commutative, and it is applied to pairs of elements until a single result is obtained.

Usage Example:

Suppose we have a dataset containing a sequence of integers, and we want to compute the sum of all these integers using the reduce() function. We can use the reduce() function as shown below:

```scala
val numbers = Seq(1, 2, 3, 4, 5)
val numbersDataset = numbers.toDS()
val sum = numbersDataset.reduce((x, y) => x + y)
```

In this example, we first create a sequence of integers. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the reduce() function to compute the sum of all the integers in the dataset.

Output:

The output of the reduce() function is a single value obtained by applying the binary operator to pairs of elements until a single result is obtained. In our example, the output will be the sum of all the integers in the dataset:

```
15
```

Note that the reduce() function is an action operation that triggers the computation of the dataset, and should be used with caution for large datasets. Also, the order of the elements in the dataset is not guaranteed, as Spark processes data in parallel.



#### Function: show()

Description:

The show() function in Spark 3 Dataset is used to display the contents of a dataset in a tabular format. It is useful for debugging and exploring the contents of a dataset.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to display the contents of the dataset in a tabular format. We can use the show() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
employeeDataset.show()
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the show() function to display the contents of the dataset in a tabular format.

Output:

The output of the show() function is a tabular representation of the dataset, with each row corresponding to a record in the dataset. In our example, the output will be:

```
+-----+---+------+
| name|age|salary|
+-----+---+------+
| John| 28|3000.0|
| Mary| 25|2800.0|
|Peter| 32|3500.0|
| Jane| 27|3200.0|
+-----+---+------+
```

Note that the show() function is an action operation that triggers the computation of the dataset, and should be used with caution for large datasets. It is intended for interactive use, such as exploring data in a notebook or shell, rather than for production use.



#### Function: summary()

Description:

The summary() function in Spark 3 Dataset is used to compute summary statistics for the columns of a dataset. It provides a quick way to obtain basic statistics for a large number of columns in a dataset.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to compute summary statistics for the age and salary columns. We can use the summary() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
employeeDataset.select("age", "salary").summary().show()
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the select() function to select the age and salary columns, and then apply the summary() function to compute summary statistics for these columns.

Output:

The output of the summary() function is a tabular representation of the summary statistics for the selected columns, including the count, mean, standard deviation, minimum, and maximum values. In our example, the output will be:

```
+-------+-----------------+------------------+
|summary|              age|            salary|
+-------+-----------------+------------------+
|  count|                4|                 4|
|   mean|             28.0|            3125.0|
| stddev|2.160246899469287| 298.8118022040274|
|    min|               25|            2800.0|
|    25%|               27|            3000.0|
|    50%|               28|            3200.0|
|    75%|               32|            3325.0|
|    max|               32|            3500.0|
+-------+-----------------+------------------+
```

Note that the summary() function is an action operation that triggers the computation of the dataset, and should be used with caution for large datasets. It is intended for quick analysis of data, rather than for production use.



#### Function: tail()

Description:

The tail() function in Spark 3 Dataset returns the last n rows of the dataset. It is useful when we want to inspect the end of a dataset or when we need to extract only the last few rows of a dataset for further processing.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to extract the last 2 rows of this dataset. We can use the tail() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
employeeDataset.tail(2).foreach(println)
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the tail() function to extract the last 2 rows of the dataset, and then apply the foreach() function to print these rows.

Output:

The output of the tail() function is a Dataset containing the last n rows of the original dataset. In our example, the output will be:

```
Employee(Peter,32,3500.0)
Employee(Jane,27,3200.0)
```

Note that the tail() function is an action operation that triggers the computation of the dataset, and should be used with caution for large datasets. It is intended for quick inspection of data, rather than for production use.



#### Function: take()

Description:

The take() function in Spark 3 Dataset returns an array of the first n rows of the dataset. It is useful when we need to extract only a few rows of a dataset for further processing, and we don't want to load the entire dataset into memory.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to extract the first 3 rows of this dataset. We can use the take() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
val firstThreeRows = employeeDataset.take(3)
firstThreeRows.foreach(println)
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the take() function to extract the first 3 rows of the dataset, and then apply the foreach() function to print these rows.

Output:

The output of the take() function is an array containing the first n rows of the original dataset. In our example, the output will be:

```scala
Employee(John,28,3000.0)
Employee(Mary,25,2800.0)
Employee(Peter,32,3500.0)
```

Note that the take() function is a transformation operation that does not trigger the computation of the entire dataset, and is useful for extracting only a few rows of data for further processing.



#### Function: takeAsList()

Description:

The takeAsList() function in Spark 3 Dataset is similar to the take() function, but it returns a Java list instead of a Scala array. It is useful when we want to use the extracted rows of a dataset in Java-based APIs that accept Java collections.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to extract the first 3 rows of this dataset as a Java list. We can use the takeAsList() function as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
val firstThreeRows = employeeDataset.takeAsList(3)
firstThreeRows.forEach(println)
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the takeAsList() function to extract the first 3 rows of the dataset, and then apply the forEach() function to print these rows.

Output:

The output of the takeAsList() function is a Java list containing the first n rows of the original dataset. In our example, the output will be:

```scala
Employee(John,28,3000.0)
Employee(Mary,25,2800.0)
Employee(Peter,32,3500.0)
```

Note that the takeAsList() function is a transformation operation that does not trigger the computation of the entire dataset, and is useful for extracting only a few rows of data for further processing in Java-based APIs.



#### Function: toLocalIterator()

Description:

The toLocalIterator() function in Spark 3 Dataset allows iterating over the elements of a dataset on the driver node, one partition at a time. This function can be useful when we want to perform some custom processing on the dataset elements using code that is only available on the driver node.

Usage Example:

Suppose we have a dataset containing the details of employees, including their names, ages, and salaries. We want to print the name and age of each employee by iterating over the dataset on the driver node using the toLocalIterator() function. We can do this as shown below:

```scala
case class Employee(name: String, age: Int, salary: Double)
val employeeDetails: Seq[Employee] = Seq(
  Employee("John", 28, 3000.0),
  Employee("Mary", 25, 2800.0),
  Employee("Peter", 32, 3500.0),
  Employee("Jane", 27, 3200.0)
)
val employeeDataset = employeeDetails.toDS()
val iterator = employeeDataset.toLocalIterator()
while (iterator.hasNext) {
  val employee = iterator.next()
  println(s"Name: ${employee.name}, Age: ${employee.age}")
}
```

In this example, we first create a sequence of case class instances containing the details of employees. Then, we convert this sequence to a Dataset using the toDS() function. Finally, we use the toLocalIterator() function to obtain an iterator over the elements of the dataset on the driver node, and then iterate over this iterator using a while loop to print the name and age of each employee.

Output:

The output of the toLocalIterator() function is the result of the custom processing performed on the dataset elements on the driver node. In our example, the output will be:

```yaml
Name: John, Age: 28
Name: Mary, Age: 25
Name: Peter, Age: 32
Name: Jane, Age: 27
```

Note that the toLocalIterator() function can be used to perform custom processing on the dataset elements using any code that is available on the driver node.



## Basic Dataset functions

#### Function: as(schema: StructType): DataFrame

Description:

The `as` function in Spark 3 Dataset API is used to convert a Dataset of generic objects to a strongly typed Dataset by specifying a schema. The function takes a StructType object as an argument that represents the schema of the resulting strongly typed Dataset. The StructType object can be created using the `StructType` class and by adding `StructField` objects that represent the columns of the resulting strongly typed Dataset.

Usage Example:

Suppose we have a CSV file containing the details of employees, including their names, ages, and salaries. We want to read this CSV file into a DataFrame and then convert it into a strongly typed Dataset by specifying a schema. We can do this as shown below:

```scala
import org.apache.spark.sql.types.{StructType, StructField, StringType, IntegerType, DoubleType}

val employeeSchema = new StructType()
  .add(StructField("name", StringType, true))
  .add(StructField("age", IntegerType, true))
  .add(StructField("salary", DoubleType, true))

val employeeDF = spark.read.format("csv")
  .option("header", "true")
  .option("inferSchema", "true")
  .load("employee.csv")

val employeeDS = employeeDF.as(employeeSchema)
employeeDS.show()
```

In this example, we first create a `StructType` object called `employeeSchema` that represents the schema of the resulting strongly typed Dataset. This schema consists of three columns: name (StringType), age (IntegerType), and salary (DoubleType).

Then, we read the CSV file into a DataFrame using the `read` method of the `SparkSession` object. We set the `header` option to `true` to indicate that the first row of the CSV file contains the column names, and set the `inferSchema` option to `true` to infer the data types of the columns from the contents of the CSV file.

Next, we use the `as` function to convert the DataFrame into a strongly typed Dataset by specifying the `employeeSchema`. Finally, we call the `show` method on the resulting Dataset to display its contents.

Output:

The output of the `show` method will be a table that displays the contents of the strongly typed Dataset, which will have the specified schema. For example:

```
+-----+---+------+
| name|age|salary|
+-----+---+------+
|John | 28|3000.0|
|Mary | 25|2800.0|
|Peter| 32|3500.0|
|Jane | 27|3200.0|
+-----+---+------+
```

Note that if the data in the DataFrame does not match the specified schema, the `as` function will throw an exception. It is important to ensure that the schema is correctly specified to avoid errors at runtime.



#### Function: cache()

Description:

The `cache` function in Spark 3 Dataset API is used to persist the contents of a Dataset in memory, so that subsequent operations on the Dataset can be performed more quickly. This function stores the Dataset in the cache memory of the executor nodes, which makes it faster to access and reduces the number of times the Dataset needs to be computed.

Usage Example:

Suppose we have a Dataset of employee data, and we want to perform multiple operations on this Dataset. In order to avoid recomputing the Dataset every time an operation is performed, we can cache the Dataset in memory using the `cache` function as shown below:

```scala
val employeeDS = Seq(
  ("John", 28, 3000.0),
  ("Mary", 25, 2800.0),
  ("Peter", 32, 3500.0),
  ("Jane", 27, 3200.0)
).toDF("name", "age", "salary").as[Employee]

employeeDS.cache()

val filteredDS = employeeDS.filter(employee => employee.age >= 30)
val count = filteredDS.count()

println(s"Number of employees above 30: $count")
```

In this example, we first create a Dataset of employee data using the `toDF` method and then converting it into a strongly typed Dataset using the `as` method. Then we call the `cache` method on this Dataset to cache it in memory.

Next, we perform an operation on the cached Dataset by filtering out the employees whose age is less than 30 using the `filter` function. Finally, we call the `count` function to count the number of employees whose age is greater than or equal to 30.

Output:

The output of this program will be the number of employees whose age is greater than or equal to 30. Since the Dataset has been cached in memory, the `filter` and `count` operations will be performed more quickly than if the Dataset had not been cached.



#### Function: checkpoint(eager: Boolean)

Description:

The `checkpoint` function in Spark 3 Dataset API is used to save the contents of a Dataset to a checkpoint file in HDFS. This function can be used to avoid recomputing a Dataset from scratch if a failure occurs during its computation. 

Usage Example:

Suppose we have a Dataset of employee data, and we want to checkpoint this Dataset to avoid recomputing it from scratch if a failure occurs. We can use the `checkpoint` function as shown below:

```scala
val employeeDS = Seq(
  ("John", 28, 3000.0),
  ("Mary", 25, 2800.0),
  ("Peter", 32, 3500.0),
  ("Jane", 27, 3200.0)
).toDF("name", "age", "salary").as[Employee]

employeeDS.checkpoint()

val filteredDS = employeeDS.filter(employee => employee.age >= 30)
val count = filteredDS.count()

println(s"Number of employees above 30: $count")
```

In this example, we first create a Dataset of employee data using the `toDF` method and then converting it into a strongly typed Dataset using the `as` method. Then we call the `checkpoint` method on this Dataset to save its contents to a checkpoint file.

Next, we perform an operation on the Dataset by filtering out the employees whose age is less than 30 using the `filter` function. Finally, we call the `count` function to count the number of employees whose age is greater than or equal to 30.

Output:

The output of this program will be the number of employees whose age is greater than or equal to 30. If a failure occurs during the computation of this Dataset, it can be recovered from the checkpoint file rather than being recomputed from scratch.



#### Function: columns: Array[String]

Description:

The `columns` function in Spark 3 DataFrame API returns an array of column names present in the DataFrame. It is a simple and quick way to get the list of column names present in the DataFrame.

Usage Example:

Suppose we have a DataFrame containing employee data, and we want to get the list of column names present in this DataFrame. We can use the `columns` function as shown below:

```scala
val employeeDF = Seq(
  ("John", 28, 3000.0),
  ("Mary", 25, 2800.0),
  ("Peter", 32, 3500.0),
  ("Jane", 27, 3200.0)
).toDF("name", "age", "salary")

val columnNames = employeeDF.columns

println("Columns in the DataFrame: ")
columnNames.foreach(println)
```

In this example, we first create a DataFrame of employee data using the `toDF` method. Then we call the `columns` method on this DataFrame to get the list of column names present in it.

Finally, we print the list of column names using a `foreach` loop.

Output:

The output of this program will be a list of column names present in the DataFrame:

```
Columns in the DataFrame:
name
age
salary
```



#### Function: createGlobalTempView(viewName: String): Unit

Description:

The `createGlobalTempView` function in Spark 3 DataFrame API creates a global temporary view with the specified name. A global temporary view is a view that is accessible across all SparkSessions and even across different applications. It is tied to a system preserved database `global_temp`.

Usage Example:

Suppose we have a DataFrame containing employee data, and we want to create a global temporary view named "employee_view" using this DataFrame. We can use the `createGlobalTempView` function as shown below:

```scala
val employeeDF = Seq(
  ("John", 28, 3000.0),
  ("Mary", 25, 2800.0),
  ("Peter", 32, 3500.0),
  ("Jane", 27, 3200.0)
).toDF("name", "age", "salary")

employeeDF.createGlobalTempView("employee_view")
```

In this example, we first create a DataFrame of employee data using the `toDF` method. Then we call the `createGlobalTempView` method on this DataFrame with the view name "employee_view" to create a global temporary view.

Output:

The output of this program will not be visible on the console. The global temporary view is now created and can be accessed from any SparkSession in the same application or across different applications.



#### Function: createOrReplaceGlobalTempView(viewName: String): Unit

Description:

The `createOrReplaceGlobalTempView` function in Spark 3 DataFrame API creates a global temporary view with the specified name, or replaces an existing global temporary view with the same name. A global temporary view is a view that is accessible across all SparkSessions and even across different applications. It is tied to a system preserved database `global_temp`.

Usage Example:

Suppose we have a DataFrame containing employee data, and we want to create a global temporary view named "employee_view" using this DataFrame. We can use the `createOrReplaceGlobalTempView` function as shown below:

```scala
val employeeDF = Seq(
  ("John", 28, 3000.0),
  ("Mary", 25, 2800.0),
  ("Peter", 32, 3500.0),
  ("Jane", 27, 3200.0)
).toDF("name", "age", "salary")

employeeDF.createOrReplaceGlobalTempView("employee_view")
```

In this example, we first create a DataFrame of employee data using the `toDF` method. Then we call the `createOrReplaceGlobalTempView` method on this DataFrame with the view name "employee_view" to create or replace a global temporary view.

Output:

The output of this program will not be visible on the console. The global temporary view is now created or replaced and can be accessed from any SparkSession in the same application or across different applications.



#### Function: createTempView(viewName: String): Unit

Description:

The `createTempView` function in Spark 3 DataFrame API creates a local temporary view with the specified name. A local temporary view is only accessible within the same SparkSession that created it.

Usage Example:

Suppose we have a DataFrame containing employee data, and we want to create a local temporary view named "employee_view" using this DataFrame. We can use the `createTempView` function as shown below:

```scala
val employeeDF = Seq(
  ("John", 28, 3000.0),
  ("Mary", 25, 2800.0),
  ("Peter", 32, 3500.0),
  ("Jane", 27, 3200.0)
).toDF("name", "age", "salary")

employeeDF.createTempView("employee_view")
```

In this example, we first create a DataFrame of employee data using the `toDF` method. Then we call the `createTempView` method on this DataFrame with the view name "employee_view" to create a local temporary view.

Output:

The output of this program will not be visible on the console. The local temporary view is now created and can be accessed within the same SparkSession using the specified view name.



#### Function: dtypes: Array[(String, String)]

Description:

The `dtypes` function in Spark 3 DataFrame API returns an array of tuples containing the name of each column in the DataFrame and its corresponding data type. The data type is represented as a string.

Usage Example:

Suppose we have a DataFrame containing employee data, and we want to get the data types of each column in this DataFrame. We can use the `dtypes` function as shown below:

```scala
val employeeDF = Seq(
  ("John", 28, 3000.0),
  ("Mary", 25, 2800.0),
  ("Peter", 32, 3500.0),
  ("Jane", 27, 3200.0)
).toDF("name", "age", "salary")

val dataTypes = employeeDF.dtypes
dataTypes.foreach(println)
```

In this example, we first create a DataFrame of employee data using the `toDF` method. Then we call the `dtypes` function on this DataFrame to get the data types of each column. Finally, we use a foreach loop to print out the name and data type of each column.

Output:

The output of this program will be:

```
(name,StringType)
(age,IntegerType)
(salary,DoubleType)
```

This shows that the "name" column has a String data type, the "age" column has an Integer data type, and the "salary" column has a Double data type.



#### Function: explain(): Unit

Description:

The `explain` function in Spark 3 DataFrame API is used to display the physical plan of a DataFrame or Dataset. It provides an easy way to understand how Spark will execute a given query. The `explain` function returns the execution plan as a string, which can be printed to the console or written to a log file.

Usage Example:

Suppose we have a DataFrame containing employee data, and we want to see how Spark will execute a query on this DataFrame. We can use the `explain` function as shown below:

```scala
val employeeDF = Seq(
  ("John", 28, 3000.0),
  ("Mary", 25, 2800.0),
  ("Peter", 32, 3500.0),
  ("Jane", 27, 3200.0)
).toDF("name", "age", "salary")

employeeDF.filter($"age" > 25).explain()
```

In this example, we first create a DataFrame of employee data using the `toDF` method. Then we apply a filter to this DataFrame to select only those employees whose age is greater than 25. Finally, we call the `explain` function on this filtered DataFrame to display the physical plan of this query.

Output:

The output of this program will be:

```
== Physical Plan ==
*(1) Filter (isnotnull(age#1) && (age#1 > 25))
+- *(1) Scan ExistingRDD[name#0,age#1,salary#2]
```

This output shows the physical plan that Spark will use to execute this query. It indicates that Spark will first scan an existing RDD containing the data, then apply the filter to select only those rows where the age is greater than 25.



#### Function: explain(extended: Boolean): Unit

Description:

The `explain` function in Spark 3 DataFrame API is used to display the physical plan of a DataFrame or Dataset, with optional extended information. It provides an easy way to understand how Spark will execute a given query. The `explain` function returns the execution plan as a string, which can be printed to the console or written to a log file.

Usage Example:

Suppose we have a DataFrame containing employee data, and we want to see how Spark will execute a query on this DataFrame. We can use the `explain` function as shown below:

```scala
val employeeDF = Seq(
  ("John", 28, 3000.0),
  ("Mary", 25, 2800.0),
  ("Peter", 32, 3500.0),
  ("Jane", 27, 3200.0)
).toDF("name", "age", "salary")

employeeDF.filter($"age" > 25).explain(true)
```

In this example, we first create a DataFrame of employee data using the `toDF` method. Then we apply a filter to this DataFrame to select only those employees whose age is greater than 25. Finally, we call the `explain` function on this filtered DataFrame with the `extended` parameter set to `true` to display the physical plan of this query with extended information.

Output:

The output of this program will be:

```
== Parsed Logical Plan ==
'Filter ('age > 25)
+- AnalysisBarrier[name#0, age#1, salary#2]

== Analyzed Logical Plan ==
name: string, age: int, salary: double
Filter (age#1 > 25)
+- Project [name#0, age#1, salary#2]
   +- AnalysisBarrier[name#0, age#1, salary#2]

== Optimized Logical Plan ==
Filter (isnotnull(age#1) && (age#1 > 25))
+- Project [name#0, age#1, salary#2]
   +- Scan ExistingRDD[name#0,age#1,salary#2]

== Physical Plan ==
*(1) Filter (isnotnull(age#1) && (age#1 > 25))
+- *(1) Scan ExistingRDD[name#0,age#1,salary#2]
```

This output shows the physical plan that Spark will use to execute this query, with additional information about the logical plan and the optimized plan. The `extended` parameter set to `true` adds additional details to the plan, making it easier to understand how Spark will execute the query.



#### The `explain()` method in Spark provides information about the physical and logical plans of a query execution. It helps in understanding how Spark executes a query and can be useful in optimizing the query.

The `explain(mode: String)` method in Spark Dataset API is used to display the physical plan of the query execution in a specific mode. The supported modes are `formatted`, `extended`, and `codegen`.

- The `formatted` mode displays the physical plan in a human-readable format.
- The `extended` mode provides additional details about the physical plan, such as the number of output rows, the size of the output in bytes, and the estimated cost of the execution.
- The `codegen` mode displays the generated code for the query execution.

Here's an example usage of the `explain()` method:

```scala
import org.apache.spark.sql.functions._
val df = Seq((1,"a"), (2, "b"), (3, "c")).toDF("id", "name")
df.filter(col("id") > 1).explain("extended")
```

Output:
```
== Parsed Logical Plan ==
'Filter ('id > 1)
+- LogicalRDD [id#0, name#1], false

== Analyzed Logical Plan ==
id: int, name: string
Filter (id#0 > 1)
+- LogicalRDD [id#0, name#1], false

== Optimized Logical Plan ==
Filter (id#0 > 1)
+- LogicalRDD [id#0, name#1], false

== Physical Plan ==
*(1) Filter (isnotnull(id#0) AND (id#0 > 1))
+- *(1) Scan JDBCRelation((SELECT `id`, `name` FROM `test`) tmpTable) [numPartitions=1] []
```

As you can see in the output, the physical plan of the query execution is displayed in the `extended` mode.



#### hint()

The `hint` method in Apache Spark allows you to provide a hint to the query optimizer. Hints provide additional information about the dataset to the optimizer that can help it make better decisions about how to execute the query. You can use the `hint` method to specify optimizer rules or optimization hints in JSON format.

The `hint` method takes two parameters: the name of the hint and its parameters. The hint name is a string that specifies the type of hint you want to use. The parameters are optional and are used to provide additional information to the hint.

Here's an example of how to use the `hint` method:

```scala
val df = spark.read.parquet("path/to/parquet/file")

// Specify the hint "broadcast" with parameter "join" to optimize a join
df.hint("broadcast", "join").show()
```

In the example above, we read in a Parquet file and apply the `hint` method to the resulting `DataFrame`. We provide the hint name "broadcast" and the parameter "join" to optimize a join operation. Finally, we call the `show` method to display the result.

Note that hints should be used with caution, and you should only use them if you have a good understanding of the query optimizer and how it works. In most cases, the optimizer will make the right decisions about how to execute a query without hints.



#### inputFiles: Array[String]

The `inputFiles` method is available on Spark 2.0+ and returns an array of strings that represent the input files that were read to create the current `DataFrame` or `Dataset`.

Here's an example:

```scala
val df = spark.read.json("path/to/json/files")

val inputFiles = df.inputFiles
```

In the example above, we read in a JSON file and create a `DataFrame` `df`. Then, we use the `inputFiles` method to retrieve the list of input files that were used to create the `DataFrame`. 

Note that if the `DataFrame` was created from multiple input files, the `inputFiles` method returns an array with the path of all files. Also, if the input file is a directory, then all the files within that directory will be returned as part of the array.



#### Spark 3 Dataset: isEmpty: Boolean

The `isEmpty` method in Spark 3 Dataset API returns a Boolean that indicates if the Dataset is empty or not. If the Dataset is empty, it returns true; otherwise, it returns false.

Usage

The `isEmpty` method is called on a Dataset object and returns a Boolean value indicating if the Dataset is empty or not. Here is the basic syntax of calling the `isEmpty` method:

``` scala
val ds: Dataset[Person] = Seq.empty[Person].toDS()
val isEmpty: Boolean = ds.isEmpty
```

Example

Here's an example of using the `isEmpty` method to check if a Dataset is empty or not:

``` scala
case class Person(name: String, age: Int)

val spark = SparkSession.builder()
                .appName("isEmptyExample")
                .master("local[*]")
                .getOrCreate()

import spark.implicits._

val emptyDs = Seq.empty[Person].toDS()
val nonEmptyDs = Seq(Person("Alice", 25), Person("Bob", 30)).toDS()

println(emptyDs.isEmpty)      // true
println(nonEmptyDs.isEmpty)   // false
```

Output

The output of the example code will be:

```
true
false
```

Note that the `isEmpty` method returns `true` for an empty Dataset and `false` for a non-empty Dataset.



#### Function Name: isLocal()

Description: 
isLocal() is a boolean function in Spark Dataset API that checks if the current Dataset is local or distributed across a cluster.

Usage: 
Assuming a Dataset "ds" has been created, we can use the isLocal() function as follows:

```scala
val isDsLocal: Boolean = ds.isLocal
```

Output:
The isLocal() function returns true if the Dataset is local, meaning that all data is stored on a single machine, and false if the data is distributed across a cluster.



#### Function: javaRDD()

The `javaRDD` function is a method of the Spark 3 Dataset API in Scala. It returns a JavaRDD object that represents the current Dataset as an RDD of Java objects. The elements in the RDD are of type T, which is the same type as the elements in the Dataset.

Usage Example:

Suppose you have a Dataset of employee data and you want to convert it to a JavaRDD. Here's how you can use the `javaRDD` function to do that:

```
import org.apache.spark.api.java.JavaRDD

case class Employee(name: String, age: Int)

val employeeData = Seq(Employee("John Doe", 25), Employee("Jane Smith", 30), Employee("Bob Johnson", 40))
val employeeDS = employeeData.toDS()
val employeeRDD: JavaRDD[Employee] = employeeDS.javaRDD()
```

Output:

In this example, the `javaRDD` function is called on the `employeeDS` Dataset, which converts it to a JavaRDD of Employee objects. The `employeeRDD` JavaRDD can now be used with Java APIs that require RDDs, instead of using the Dataset APIs.

Note: The JavaRDD object returned by `javaRDD` is immutable, meaning it cannot be modified.



#### Function Name: localCheckpoint

Description: The localCheckpoint() function is used to persist a Dataset on the local file system. Unlike checkpoint() function which persists the Dataset on a fault-tolerant storage system, localCheckpoint() function stores the Dataset on the local file system which is not fault-tolerant. The purpose of localCheckpoint() function is to improve the performance of iterative algorithms.

Usage: The localCheckpoint() function can be used on a Dataset to persist it on the local file system. Once persisted, the Dataset can be retrieved from the local file system and used for further processing.

Example:
```scala
import org.apache.spark.sql.SparkSession

val spark = SparkSession.builder()
                .appName("localCheckpoint Example")
                .master("local[*]")
                .getOrCreate()

val data = Seq(1, 2, 3, 4, 5)
val ds = spark.createDataset(data)

ds.localCheckpoint()

val result = ds.map(x => x * 2)

result.show()
```

Output:
```
+---+
| _1|
+---+
|  2|
|  4|
|  6|
|  8|
| 10|
+---+
```

In the above example, we create a Dataset 'ds' from a sequence of integers. We then apply the localCheckpoint() function on it to persist it on the local file system. Later, we apply the map() function on the Dataset to multiply each element by 2 and store the result in 'result' variable. Finally, we print the output of the 'result' variable using the show() function.



#### Spark 3 Dataset: persist(newLevel: StorageLevel)

The `persist(newLevel: StorageLevel)` function in Spark 3 Dataset API is used to persist the dataset with the specified storage level in memory or disk or both. The storage level determines where the data is stored and in what format, and it can be one of the following: 

- MEMORY_ONLY
- MEMORY_AND_DISK
- MEMORY_ONLY_SER
- MEMORY_AND_DISK_SER
- DISK_ONLY
- MEMORY_ONLY_2
- MEMORY_AND_DISK_2
- MEMORY_ONLY_SER_2
- MEMORY_AND_DISK_SER_2
- OFF_HEAP

By default, the storage level is set to MEMORY_AND_DISK, which means that the data is stored both in memory and on disk.

Usage

Here's an example of how to use `persist(newLevel: StorageLevel)` in Scala:

```scala
import org.apache.spark.storage.StorageLevel

val dataset = Seq((1, "John"), (2, "Sarah"), (3, "Alex")).toDF("id", "name").as[(Int, String)]

// Persisting the dataset with MEMORY_ONLY storage level
dataset.persist(StorageLevel.MEMORY_ONLY)

// Doing some transformations on the persisted dataset
val filteredDataset = dataset.filter(_._2.startsWith("A"))

// Unpersisting the dataset from memory
dataset.unpersist()
```

In the above example, we created a simple dataset of (id, name) pairs, and persisted it with the MEMORY_ONLY storage level. We then performed some transformations on the persisted dataset, and finally unpersisted it from memory.

Output

There is no output generated by `persist(newLevel: StorageLevel)` function. However, it can improve the performance of subsequent operations on the dataset by avoiding the need to recompute the dataset from scratch each time it is accessed.



#### printSchema(level: Int): Unit

The `printSchema` method is used to print the schema of a Spark `Dataset`. The schema is a representation of the data structure of the `Dataset`, which includes the names and data types of its columns.

The method takes an optional `level` parameter that specifies the indentation level for nested fields. By default, the level is set to 0, which means that all fields are printed at the same level.

Usage Example:

```scala
import org.apache.spark.sql.{SparkSession, Row}
import org.apache.spark.sql.types.{StructType, StructField, StringType, IntegerType}

val spark = SparkSession.builder()
  .appName("printSchemaExample")
  .master("local[*]")
  .getOrCreate()

// define a schema for a DataFrame
val schema = StructType(Seq(
  StructField("name", StringType, nullable = false),
  StructField("age", IntegerType, nullable = true)
))

// create a sample DataFrame
val data = Seq(
  Row("Alice", 25),
  Row("Bob", 30),
  Row("Charlie", null)
)
val df = spark.createDataFrame(spark.sparkContext.parallelize(data), schema)

// print the schema
df.printSchema()
```

Output:
```
root
 |-- name: string (nullable = false)
 |-- age: integer (nullable = true)
```



#### schema: StructType

`schema` is a method available in Spark 3's Dataset API. It returns the schema of the Dataset as a StructType object. The schema describes the structure of the data in the Dataset, including column names, data types, and nullable constraints.

Usage Example:
```scala
import org.apache.spark.sql.types.{StructType, StructField, StringType, IntegerType}
import org.apache.spark.sql.functions.col

val data = Seq(("John", 25), ("Bob", 30), ("Jane", 35))
val df = spark.createDataFrame(data).toDF("name", "age")

val mySchema: StructType = df.schema
println("Schema of my DataFrame:")
mySchema.printTreeString()

```
Output:
```
Schema of my DataFrame:
root
 |-- name: string (nullable = true)
 |-- age: integer (nullable = false)
```

In this example, we create a DataFrame called `df` from a sequence of tuples. We then use the `schema` method to obtain the schema of the DataFrame as a `StructType` object called `mySchema`. Finally, we use the `printTreeString` method to print the schema in a tree-like format. The output shows that the DataFrame has two columns, "name" and "age", and the data types of these columns are String and Integer, respectively.



#### storageLevel: StorageLevel

`storageLevel` is a method in Spark 3 Dataset API that returns the storage level of the Dataset.

The storage level is the level of caching used to persist the Dataset in memory or disk, and it is specified using the `persist()` method. It determines the trade-off between memory usage and performance, as a higher storage level will use more memory but result in faster execution times.

The `storageLevel` method returns an object of the `StorageLevel` class, which represents the storage level of the Dataset. The `StorageLevel` class has several static methods that can be used to create a storage level object with different caching options, such as `MEMORY_ONLY`, `MEMORY_AND_DISK`, `DISK_ONLY`, etc.

Example usage:

```scala
import org.apache.spark.storage.StorageLevel

// create a DataFrame
val df = Seq((1, "John"), (2, "Mary"), (3, "Bob")).toDF("id", "name")

// cache the DataFrame with MEMORY_ONLY storage level
df.persist(StorageLevel.MEMORY_ONLY)

// get the storage level of the DataFrame
val level = df.storageLevel

// print the storage level
println(level)
```

Output:

```
Memory Deserialized 1x Replicated
```

In this example, we create a DataFrame `df` and cache it in memory with `MEMORY_ONLY` storage level using the `persist()` method. We then call the `storageLevel` method on the DataFrame to get its storage level, and print it to the console. The output shows that the DataFrame is stored in memory, deserialized, and replicated once.



#### Function: toDF(colNames: String*): DataFrame

The `toDF` function is used to convert a `Dataset` into a `DataFrame`, where the column names are specified by the input argument `colNames`. This function returns a `DataFrame`.

Usage Example:

Suppose we have a case class `Person` and a `Dataset` of `Person` objects. We can convert this `Dataset` into a `DataFrame` as follows:

```
case class Person(name: String, age: Int)
val people = Seq(Person("Alice", 25), Person("Bob", 30)).toDS()
val df = people.toDF("person_name", "person_age")
df.show()
```

Output:

```
+------------+----------+
|person_name |person_age|
+------------+----------+
|Alice       |        25|
|Bob         |        30|
+------------+----------+
```

Function: toDF(): DataFrame

The `toDF` function is used to convert a `Dataset` into a `DataFrame`, where the column names are automatically generated based on the field names of the case class used to create the `Dataset`. This function returns a `DataFrame`.

Usage Example:

Suppose we have a case class `Person` and a `Dataset` of `Person` objects. We can convert this `Dataset` into a `DataFrame` as follows:

```
case class Person(name: String, age: Int)
val people = Seq(Person("Alice", 25), Person("Bob", 30)).toDS()
val df = people.toDF()
df.show()
```

Output:

```
+----+---+
|name|age|
+----+---+
|Alice| 25|
| Bob| 30|
+----+---+
```

Note: The `toDF` function generates column names based on the field names of the case class used to create the `Dataset`. It removes the prefix `_$outer` from the column names, which is added by Scala's inner classes. If there are no field names in the case class, then the generated column names will be "col0", "col1", etc.



#### toJavaRDD: JavaRDD[T]

`toJavaRDD` is a function in Apache Spark's Dataset API that converts a `Dataset[T]` object into a JavaRDD[T] object. The JavaRDD[T] object can then be used in Java code to perform operations on the data.

Here's an example usage of `toJavaRDD`:

```scala
import org.apache.spark.api.java.JavaRDD
import org.apache.spark.sql.{Dataset, SparkSession}

case class Person(name: String, age: Int)

val spark = SparkSession.builder()
  .appName("toJavaRDDExample")
  .master("local[*]")
  .getOrCreate()

// create a Dataset of Person objects
val peopleData: Seq[Person] = Seq(Person("Alice", 25), Person("Bob", 30), Person("Charlie", 35))
val peopleDS: Dataset[Person] = spark.createDataset(peopleData)

// convert the Dataset to a JavaRDD
val peopleRDD: JavaRDD[Person] = peopleDS.toJavaRDD()

// print out the elements in the JavaRDD
peopleRDD.foreach(println)
```

In this example, we create a `Dataset` of `Person` objects using the `createDataset` function of a `SparkSession`. We then call `toJavaRDD` on this `Dataset` to convert it into a `JavaRDD`. Finally, we print out the elements in the `JavaRDD` using the `foreach` function.



#### Function name: unpersist()

Description: The `unpersist()` function in Spark 3 Dataset API is used to remove the persisted memory of the RDD or Dataset from the Spark's cache. This method is useful when the data in the cache is no longer needed and we want to release the memory occupied by the cache for other use.

Usage example:

```
import org.apache.spark.sql.SparkSession

val spark = SparkSession.builder()
  .appName("unpersistExample")
  .master("local[2]")
  .getOrCreate()

val df = spark.read.csv("example.csv")

// Cache the DataFrame
df.cache()

// Unpersist the DataFrame
df.unpersist()

// Check if the DataFrame is still in the cache
println(df.is_cached)
```

Output:
```
false
```

In this example, we first read a CSV file and then cache the resulting DataFrame. We then unpersist the DataFrame and check whether it is still in the cache by using the `is_cached` method. The output shows that the DataFrame is no longer cached. 

---

Function name: unpersist(blocking: Boolean)

Description: The `unpersist(blocking: Boolean)` function in Spark 3 Dataset API is used to remove the persisted memory of the RDD or Dataset from the Spark's cache. The blocking parameter indicates whether the method should block until the cache is removed.

Usage example:

```
import org.apache.spark.sql.SparkSession

val spark = SparkSession.builder()
  .appName("unpersistExample")
  .master("local[2]")
  .getOrCreate()

val df = spark.read.csv("example.csv")

// Cache the DataFrame
df.cache()

// Unpersist the DataFrame blocking until it is removed
df.unpersist(blocking = true)

// Check if the DataFrame is still in the cache
println(df.is_cached)
```

Output:
```
false
```

In this example, we first read a CSV file and then cache the resulting DataFrame. We then unpersist the DataFrame with blocking set to true and check whether it is still in the cache by using the `is_cached` method. The output shows that the DataFrame is no longer cached.



#### write: DataFrameWriter[T]

The `write` method is used to write the contents of a Spark `Dataset` to an external storage system in various formats such as CSV, JSON, Parquet, ORC, and more. It returns a `DataFrameWriter` object, which provides methods for configuring the write operation, such as setting the output path, format, partitioning, compression, and more.

Here's an example of using the `write` method to write a `Dataset` of `Person` objects to a Parquet file:

```
import org.apache.spark.sql.{Dataset, SparkSession}

case class Person(name: String, age: Int)

val spark = SparkSession.builder()
  .appName("Write Dataset to Parquet")
  .master("local[*]")
  .getOrCreate()

val people = Seq(Person("Alice", 25), Person("Bob", 30), Person("Charlie", 35))
val peopleDS: Dataset[Person] = spark.createDataset(people)

peopleDS.write
  .format("parquet")
  .mode("overwrite")
  .save("/path/to/output/parquet")
```

In this example, we first define a case class `Person` and create a `Dataset` of `Person` objects. Then we call the `write` method on the `peopleDS` `Dataset`, which returns a `DataFrameWriter`. We configure the writer to use the Parquet format, overwrite any existing output, and save the output to the specified path. Finally, we call the `save` method to execute the write operation.



#### writeStream: DataStreamWriter[T]

The `writeStream` function is used in Spark to write the contents of a streaming `Dataset` to an output sink. It returns a `DataStreamWriter` object, which can be used to configure the output sink and write the data.

Here's a brief description of the function parameters and their usage:

- `format(source: String)`: Specifies the format of the output sink. The `source` parameter should be a valid identifier for the sink format, such as `"parquet"`, `"csv"`, `"kafka"`, or `"memory"`.
- `outputMode(outputMode: String)`: Specifies the output mode of the sink. The `outputMode` parameter should be a valid identifier for the output mode, such as `"append"`, `"complete"`, or `"update"`.
- `option(key: String, value: String)`: Allows additional configuration options to be passed to the sink.
- `partitioning(columns: Column*)`: Specifies the partitioning scheme for the output data.
- `queryName(queryName: String)`: Specifies a name for the streaming query, which can be useful for monitoring and debugging.
- `trigger(trigger: Trigger)`: Specifies the trigger for the streaming query, which determines how often the sink is updated.

Usage example:

```scala
import org.apache.spark.sql.streaming.Trigger

// create a streaming DataFrame from a Kafka topic
val df = spark
  .readStream
  .format("kafka")
  .option("kafka.bootstrap.servers", "localhost:9092")
  .option("subscribe", "my_topic")
  .load()

// write the streaming DataFrame to a console sink
val query = df
  .writeStream
  .format("console")
  .outputMode("append")
  .option("truncate", false)
  .start()

// trigger the sink to update every 10 seconds
query.trigger(Trigger.ProcessingTime("10 seconds"))

// wait for the query to finish
query.awaitTermination()
```

This code reads a streaming DataFrame from a Kafka topic and writes it to the console sink in append mode. The `trigger` function is used to update the sink every 10 seconds. Finally, the `awaitTermination` function is called to start the query and wait for it to finish.



#### writeTo(table: String): DataFrameWriterV2[T]

The `writeTo` function in Spark 3 Dataset API allows you to write the content of a Dataset to a specific table in a catalog. 

Here is a brief description of the function:

- `writeTo(table: String): DataFrameWriterV2[T]`: Writes the content of the dataset to a specific table in a catalog.

The `writeTo` function returns a `DataFrameWriterV2[T]` object that can be used to configure various output options for the data being written.

Usage example:

```scala
import org.apache.spark.sql.SaveMode

val df = Seq(("Alice", 25), ("Bob", 30), ("Charlie", 35)).toDF("name", "age")

// Write the content of the dataframe to a specific table in a catalog
df.writeTo("my_database.my_table")
  .mode(SaveMode.Append)
  .save()
```

In this example, the content of the DataFrame `df` is written to the table `my_database.my_table` using the `writeTo` function. The `mode` function is used to specify the save mode as `Append`. Finally, the `save` function is called to write the data to the specified table.





