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



