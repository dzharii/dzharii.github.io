# 2023-02-12 Apache Spark Core—Deep Dive—Proper Optimization Daniel Tomes Databricks

## Videos

2023-02-12 [Apache Spark Core—Deep Dive—Proper Optimization Daniel Tomes Databricks - YouTube](https://www.youtube.com/watch?v=daXEp4HmS-E) 

> 133,082 views  May 6, 2019
>
> Optimizing spark jobs through a true understanding of spark core. Learn: What is a partition? What is the difference between read/shuffle/write partitions? How to increase parallelism and decrease output files? Where does shuffle data go between stages? What is the "right" size for your spark partitions and files? Why does a job slow down with only a few tasks left and never finish? Why doesn't adding nodes decrease my compute time? About: Databricks provides a unified data analytics platform, powered by Apache Spark™, that accelerates innovation by unifying data science, engineering and business. Read more here: [https://databricks.com/product/unifie...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblp6MkVKU0NJcVctWGM3ajM4RDk5emdmX2l1d3xBQ3Jtc0tsVFBUXzgyazhDRlFhZ3V3OUdCM0pWbktYOXA4VzU2Snl2bFd5c25KT2VFOHNzeVBtX1c2N2xmSHZBRWh4RUxYYU5VQlZNVnN3Y2NnYksxRk9sTGRIN3JCQmhEMXpoajNUZ0JnRXQ4WDJ3VXJtUXBuUQ&q=https%3A%2F%2Fdatabricks.com%2Fproduct%2Funified-data-analytics-platform&v=daXEp4HmS-E) Connect with us: Website: [https://databricks.com](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmNENWdOaGlOaXRpcDB6ajN5Y3JPck13TVdhQXxBQ3Jtc0tuakpqaVowNDhjeVZBdmU2c01QcFk3b1o3U1ZvYXllT0xLVFhqcDFqdlpDNFlDYVh0NjZSV3p2c3B5anNJdi04QmNzWVZ1QXJ3WGFHb2FBVER0RnNpb3l3cUxGR2t5U0kzckJvLUVZeVd0c180cFczRQ&q=https%3A%2F%2Fdatabricks.com%2F&v=daXEp4HmS-E) Facebook: [https://www.facebook.com/databricksinc](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa285aUpvV3UzampaaGFMUW9BYVkzemQ0Z0M4UXxBQ3Jtc0ttMlVybGI4ejVYMGlfS05OVzVJODhLQ3UtMjVMNUQ0cVczdkhhU0lMQnFGVlJXcGhMSFJaT3dHbk5mei1RNHI4eE9nbElQeTlrQjZvVWxGYVBDQng0RlR4RGR1VVRkdEQ1aUhzOVp4b2ZJdXFnR2R1Yw&q=https%3A%2F%2Fwww.facebook.com%2Fdatabricksinc&v=daXEp4HmS-E) Twitter: [https://twitter.com/databricks](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbThFdnJkYl9RTEVFcXBpNEhRb19WNjdZYy0wQXxBQ3Jtc0ttcU1yOG5zOXBPWXVDRnJ1V3JSakxYSjJVQkhBTktqMnNCSUVrSkVlbEpKemN0elQ5eXRNRlZNNGpzY2dXUmpxLTZnYmYxZk9wMlU2eWRpVWljY1VibHc5WXN2ck8zZm5TczNXb2VYVlF2bWVQcUprYw&q=https%3A%2F%2Ftwitter.com%2Fdatabricks&v=daXEp4HmS-E) LinkedIn: [https://www.linkedin.com/company/data...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWJPMElKc1dYZGVnbGd3RE5lRlVjRDBwcVF5UXxBQ3Jtc0tsWTV5RU1CV3dtQTZYVEtqaW1ZaEpmOXc2ZDhtdldhaGcxZGJTaDR2MGJibXhYZ2Y1TWRJYVRyaFZlWjNQY1NDc0ZWaVNKajV2TFZhN3JGR3BGNElmYmdTdGZieGVFRUFIQ2EwNW5ZM0RDLXhidG9YWQ&q=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdatabricks&v=daXEp4HmS-E) Instagram: [https://www.instagram.com/databricksinc/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUo0VU5pcnVIaEVDNkdzUXNBQlA5TWVwbndjZ3xBQ3Jtc0ttZ0x4QXZZOW1NQkQyUlJVWkh4TEVkZlBLYVc2YkFsQy14ZWpOT05jUEVXQVl4c1dEVUgwSkIyTGlVWlpfZ3NPckhSaUNzVzlyOUN4cXkzOXcxcE1TV0ZyUjAzWE8wNi1USzN4a1d2amlfUDNac2F5TQ&q=https%3A%2F%2Fwww.instagram.com%2Fdatabricksinc%2F&v=daXEp4HmS-E) Databricks is proud to announce that Gartner has named us a Leader in both the 2021 Magic Quadrant for Cloud Database Management Systems and the 2021 Magic Quadrant for Data Science and Machine Learning Platforms.



2023-02-12 [Spark SQL Shuffle Partitions - Spark By {Examples}](https://sparkbyexamples.com/spark/spark-shuffle-partitions/)

```
spark.sql.shuffle.partitions
```

## Slides

![20230212101441](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101441.png)

![20230212101443](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101443.png)

![20230212101448](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101448.png)

![20230212101450](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101450.png)

![20230212101452](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101452.png)

![20230212101453](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101453.png)

![20230212101454](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101454.png)

![20230212101456](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101456.png)

![20230212101500](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101500.png)

![20230212101510](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101510.png)

![20230212101512](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101512.png)

![20230212101513](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101513.png)

![20230212101515](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101515.png)

![20230212101516](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101516.png)

![20230212101517](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101517.png)

![20230212101518](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101518.png)

![20230212101520](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101520.png)

![20230212101521](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101521.png)

![20230212101522](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101522.png)

![20230212101523](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101523.png)

![20230212101526](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101526.png)

![20230212101528](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101528.png)

![20230212101529](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101529.png)

![20230212101530](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101530.png)

![20230212101531](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101531.png)

![20230212101532](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101532.png)

![20230212101533](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101533.png)

![20230212101534](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101534.png)

![20230212101535](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101535.png)

![20230212101537](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101537.png)

![20230212101538](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101538.png)

![20230212101539](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101539.png)

![20230212101540](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101540.png)

![20230212101541](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101541.png)

![20230212101542](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101542.png)

![20230212101544](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101544.png)

![20230212101545](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101545.png)

![20230212101546](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101546.png)

![20230212101547](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101547.png)

![20230212101548](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101548.png)

![20230212101549](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101549.png)

![20230212101551](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101551.png)

![20230212101552](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101552.png)

![20230212101553](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101553.png)

![20230212101554](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101554.png)

![20230212101555](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101555.png)

![20230212101556](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101556.png)

![20230212101557](./2023-02-12-Slides--Apache-Spark-Core-Deep-Dive-Proper-Optimization.assets/20230212101557.png)
