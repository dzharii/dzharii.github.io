---
layout: post
title:  "Links from my inbox 2023-02-12"
date:   2023-02-12T14:14:00-08:00
categories: links
---





## Good Reads

2023-02-12 [How a single line of code brought down a half-billion euro rocket launch](https://jam.dev/blog/famous-bugs-rocket-launch/)

> It’s Tuesday, June 4th, 1996, and the European Space Agency is set to launch its new Ariane 5 rocket for the first time. This is the culmination of a decade of design, testing and a budget spending billions of euros.
>
> ![img](./2023-02-12-links-from-my-inbox.assets/image--7--copy-1.png)Ariane-5 rocket in preparation for launch (Credits ESA 1996)



​	

## Apache Spark, SQL, BigData, ML

2023-02-12 [Spark SQL Shuffle Partitions - Spark By {Examples}](https://sparkbyexamples.com/spark/spark-shuffle-partitions/) 

> In this Apache Spark Tutorial, you will learn Spark with Scala code examples and every sample example explained here is available at [Spark Examples Github Project](https://github.com/spark-examples) for reference. All Spark examples provided in this Apache Spark Tutorial are basic, simple, and easy to practice for beginners who are enthusiastic to learn Spark, and these sample examples were tested in our development environment.

2023-02-12 [SQL Window Functions: Ranking](https://antonz.org/sql-window-functions-ranking/)

> *This is an excerpt from my book [SQL Window Functions Explained](https://antonz.org/sql-window-functions-book). The book is a clear and visual introduction to the topic with lots of practical exercises.*
>
> Ranking means coming up with all kinds of ratings, starting from the winners of the World Swimming Championships and ending with the Forbes 500.
>
> We will rank records from the toy `employees` table:
>
> ```
> ┌────┬───────┬────────┬────────────┬────────┐
> │ id │ name  │  city  │ department │ salary │
> ├────┼───────┼────────┼────────────┼────────┤
> │ 11 │ Diane │ London │ hr         │ 70     │
> │ 12 │ Bob   │ London │ hr         │ 78     │
> │ 21 │ Emma  │ London │ it         │ 84     │
> │ 22 │ Grace │ Berlin │ it         │ 90     │
> │ 23 │ Henry │ London │ it         │ 104    │
> │ 24 │ Irene │ Berlin │ it         │ 104    │
> │ 25 │ Frank │ Berlin │ it         │ 120    │
> │ 31 │ Cindy │ Berlin │ sales      │ 96     │
> │ 32 │ Dave  │ London │ sales      │ 96     │
> │ 33 │ Alice │ Berlin │ sales      │ 100    │
> └────┴───────┴────────┴────────────┴────────┘
> ```
>
> [playground](https://sqlime.org/#employees.db) • [download](https://antonz.org/sql-window-functions-book/employees.sql)
>
> Table of contents:
>
> - [Salary rating](https://antonz.org/sql-window-functions-ranking/#salary-rating)
> - [Window ordering vs. result ordering](https://antonz.org/sql-window-functions-ranking/#window-ordering-vs-result-ordering)
> - [Sorting uniqueness](https://antonz.org/sql-window-functions-ranking/#sorting-uniqueness)
> - [Salary rating by department](https://antonz.org/sql-window-functions-ranking/#salary-rating-by-department)
> - [Salary groups](https://antonz.org/sql-window-functions-ranking/#salary-groups)
> - [Ranking functions](https://antonz.org/sql-window-functions-ranking/#ranking-functions)
> - [Keep it up](https://antonz.org/sql-window-functions-ranking/#keep-it-up)

2023-02-12 [Apache Spark Core—Deep Dive—Proper Optimization Daniel Tomes Databricks - YouTube](https://www.youtube.com/watch?v=daXEp4HmS-E) 

> Optimizing spark jobs through a true understanding of spark core. Learn: What is a partition? What is the difference between read/shuffle/write partitions? How to increase parallelism and decrease output files? Where does shuffle data go between stages? What is the "right" size for your spark partitions and files? Why does a job slow down with only a few tasks left and never finish? Why doesn't adding nodes decrease my compute time?
>
> ![image-20230212142755335](./2023-02-12-links-from-my-inbox.assets/image-20230212142755335.png)

2023-02-11 [How to Train Really Large Models on Many GPUs? Lil'Log](https://lilianweng.github.io/posts/2021-09-25-train-large/) 

> In recent years, we are seeing better results on many NLP benchmark tasks with larger pre-trained [language models](https://lilianweng.github.io/posts/2019-01-31-lm/). How to train large and deep neural networks is challenging, as it demands a large amount of GPU memory and a long horizon of training time.
>
> However an individual GPU worker has limited memory and the sizes of many large models have grown beyond a single GPU. There are several parallelism paradigms to enable model training across multiple GPUs, as well as a variety of model architecture and memory saving designs to help make it possible to train *very large* neural networks.

## Projects

2023-02-12 [Vanilla List The Vanilla JavaScript Repository](https://vanillalist.top/)

> a directory of "vanilla" JavaScript controls and plugins.
> ![image-20230212142409931](./2023-02-12-links-from-my-inbox.assets/image-20230212142409931.png)

2023-02-12 [Design Patterns in TypeScript](https://refactoring.guru/design-patterns/typescript) 

> ![image-20230212142534711](./2023-02-12-links-from-my-inbox.assets/image-20230212142534711.png)

2023-02-12 [Nevin1901/erlog: Minimalist log collector](https://github.com/Nevin1901/erlog)

> ErLog is a minimalist log collection service. You can either forward structured logs from existing log libraries (eg: zerolog or winston), or use the collector to forward structured logs from stdout or stderr (coming soon).

2023-02-10 [DSchroer/dslcad: DSLCad is a programming language & interpreter for building 3D models.](https://github.com/DSchroer/dslcad)

> DSLCAD is a programming language & interpreter for building 3D models.
>
> Inspired by OpenSCAD, it has a language and 3D viewer to simplify the modeling experience.
>
> ![screenshot](./2023-02-12-links-from-my-inbox.assets/screenshot.png)

2023-02-10 [Logic Gate Simulator Academo.org - Free, interactive, education.](https://academo.org/demos/logic-gate-simulator/)

> A free, simple, online logic gate simulator. Investigate the behaviour of AND, OR, NOT, NAND, NOR and XOR gates. Select gates from the dropdown list and click "add node" to add more gates. Drag from the hollow circles to the solid circles to make connections. Right click connections to delete them. See below for more detailed instructions.
> 

## Work and Planning

2023-02-10 [Why backlogs are harmful, why they never shrink, and what to do instead](https://lucasfcosta.com/2023/02/07/backlogs-are-useless.html)

> Do you remember your backlog ever shrinking? Of course you don’t. Backlogs *never* shrink.
>
> Backlogs never shrink because the list of things we’d *eventually* like to do never shrinks, and **that’s what backlogs are: a bunch of unimportant tasks that we’ll \*eventually\* get to, but not today.**

2023-02-10 [How to build an in-house on-call training program - Blog](https://fiberplane.com/blog/how-to-build-an-in-house-on-call-training-program) 

> A critical element of a successful SRE team is maintaining an on-call schedule. Engineers need to be at the ready on a predetermined rotation to fix issues on existing services and infrastructure as they arise.
>
> Having an on-call schedule is only part of the equation. Your SRE and DevOps engineers need to be trained in how to actually resolve issues. A complete training program ensures that proper procedure becomes second nature for your team, so that they can arrive at resolutions as quickly as possible.
>
> Let’s take a closer look at why these programs are necessary, what an effective in-house, on-call training program generally looks like, and how to leverage one to train and mentor new members of your SRE team.



## Funny

2023-02-11 [10 Programmer Stereotypes - YouTube](https://www.youtube.com/watch?v=_k-F-MMvQV4)

> ![image-20230212143216385](./2023-02-12-links-from-my-inbox.assets/image-20230212143216385.png)
