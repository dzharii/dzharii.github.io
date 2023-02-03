---
layout: post
title:  "Links from my inbox 2023-02-02"
date:   2023-02-02T20:56:00-08:00
categories: links
---



## Good reads

2023-01-29 [Davide's Code and Architecture Notes - Server-side caching strategies: how do they work? - Code4IT](https://www.code4it.dev/architecture-notes/caching-strategies)

> - Cache-aside: cache and DB do NOT interact
> - Read-through: the cache knows how to query the DB
> - Write-through: the cache can write on the DB SYNCHRONOUSLY
> - Write-behind: the cache can write on the DB ASYNCHRONOUSLY
> - Further readings: 
>
>   This whole article exists thanks to another interesting blog post I recently read and decided to extend a bit:
>
>   🔗 [Caching Strategies In Practice | Rajeev](https://medium.com/@raj.k9732/caching-strategies-in-practice-6dd141ef2e6)
>
>   Both AWS and Azure provide a way to use caching on their systems.
>
>   AWS's caching functionality is called ElastiCache. They have published a nice guide of best practices for using distributed cache:
>
>   🔗 [Caching Best Practices| AWS](https://aws.amazon.com/caching/best-practices/)
>
>   Similarly, Azure gives you a Redis instance. And they have also published their set of best practices:
>
>   🔗 [Caching guidance | Microsoft Docs](https://learn.microsoft.com/en-us/azure/architecture/best-practices/caching)
>
>   Then, Alachisoft, the creators of NCache, has a nice section you might want to read.
>
>   🔗 [Benefits of Read-through & Write-through over Cache-aside | Alachisoft](https://www.alachisoft.com/resources/articles/readthru-writethru-writebehind.html)
>
>   Finally, we've already talked about Caching in .NET: in particular, we've learned how to use the Decorator design pattern to add a caching layer to our applications:
>
>   🔗 [How to add a caching layer in .NET 5 with Decorator pattern and Scrutor](https://www.code4it.dev/blog/caching-decorator-with-scrutor)
>
>   *This article first appeared on [Code4IT 🐧](https://www.code4it.dev/)*

- 2023-01-26 [Resilience and Waste in Software Teams – Jessitron](https://jessitron.com/2023/01/16/resilience-and-waste-in-software-teams/)
  > Keeping libraries and components up-to-date, keeping code readable, updating our automations, improving our observability, bringing other developers up to speed– these are a few of the tasks developers need to do regularly. Any one of these tasks could have no noticeable impact in the future, and any one of them could prevent the next big security incident. The most likely outcome of each is a smoothing of future work, a decrease in unpleasant surprise.
  >
  > Last time I implemented a feature in the Honeycomb UI, I needed some React functionality that was only in the latest version. I looked at our package.json, and lo! We were on the latest version! I rejoiced, and my work proceeded.
  >
  > Many of these tasks don’t make it onto the roadmap, because when I look at the overhead of creating a ticket, discussing it in planning, advocating for it–then I can’t. It isn’t worth that. I can’t justify any particular one. Instead, these are best done as we go. Oh look, this test is in the old framework, let’s update it. This name confused me, let’s change it. In the kitchen, I always wash the knives and put them away immediately as soon as I’m done chopping.

## Wow!

2023-02-02 [Easter egg in flight path of last 747 delivery flight](https://www.flightradar24.com/data/aircraft/n863gt/#2f0b1162)

> ![image-20230202213416204](./2023-02-02-links-from-my-inbox.assets/image-20230202213416204.png)
>
> ![image-20230202213542706](./2023-02-02-links-from-my-inbox.assets/image-20230202213542706.png)



## Retro

2023-01-29 [A Calculated Move: Calculators Now Emulated at Internet Archive - Internet Archive Blogs](https://blog.archive.org/2023/01/29/a-calculated-move-calculators-now-emulated-at-internet-archive/) 

> ![image-20230202215032768](./2023-02-02-links-from-my-inbox.assets/image-20230202215032768.png)



## The X-Files

2023-02-02 [Google layoffs Jan 20, 2023- California WARN public records — Powered by Airtable.cool](https://airtable.cool/shrF23JdDHMQ3QDyw)



## Videos

2023-02-02 [You Shall Not Password: Modern Authentication for Web Apps - Eli Holderness - NDC Sydney 2022 - YouTube](https://www.youtube.com/watch?v=XeC2vLp1BV4) 

> An overview of modern authentication, SAML, OpenID Connect

2023-02-02 [Trading at light speed: designing low latency systems in C++ - David Gross - Meeting C++ 2022 - YouTube](https://www.youtube.com/watch?v=8uAW5FQtcvE) 

> Making a trading system "fast" cannot be an afterthought. While low latency programming is sometimes seen under the umbrella of "code optimization", the truth is that most of the work needed to achieve such latency is done upfront, at the design phase. How to translate our knowledge about the CPU and hardware into C++? How to use multiple CPU cores, handle concurrency issues and cost, and stay fast?
> ![image-20230202212928007](./2023-02-02-links-from-my-inbox.assets/image-20230202212928007.png)

2023-01-29 ["It's A Bug Hunt" - Armor Plate Your Unit Tests in Cpp - Dave Steffen - CppCon 2022 - YouTube](https://www.youtube.com/watch?v=P8qYIerTYA0)

> This talk is a detailed discussion of how to write unit tests that are good *tests*; that is, unit test cases that are complete, accurate, and thorough. We can think of unit tests as our laboratory equipment for carefully examining our code and measuring a particular property (existence of bugs) with care and precision; or we can think of them as bug-hunting gear that that keeps us safe when we have to venture into the dark and dangerous parts of our code base.
> ![image-20230202214113310](./2023-02-02-links-from-my-inbox.assets/image-20230202214113310.png)

2023-01-29 [KEYNOTE - Emotional Code - Kate Gregory ACCU Conference 2019 - YouTube](https://www.youtube.com/watch?v=uloVXmSHiSo) 

> Programmers, it turns out, are human beings. This means they not only feel emotions, they leave traces of those emotions behind in their code. Kate will show you why that is so, and what you can do about it.
>
> ![image-20230202214300122](./2023-02-02-links-from-my-inbox.assets/image-20230202214300122.png)

## Projects

2023-02-02 [muxinc/meet: A meeting app built on Mux Real-Time Video.](https://github.com/muxinc/meet)

> Mux Meet is a video conferencing app powered by Mux Real-Time Video, written in React, using the Next.js framework.
> ![image-20230202211613876](./2023-02-02-links-from-my-inbox.assets/image-20230202211613876.png)

2023-01-28 [Broider: Pixel Art CSS Borders ](https://maxbittker.github.io/broider/) 

>  ![image-20230202215404689](./2023-02-02-links-from-my-inbox.assets/image-20230202215404689.png)



## C++

2023-02-02 [A list of open source C++ libraries - cppreference.com](https://en.cppreference.com/w/cpp/links/libs) 

> The objective of this page is to build a comprehensive list of open source C++ libraries, so that when one needs an implementation of particular functionality, one needn't to waste time searching on web.

2023-02-01 [C++ Neural Network in a Weekend – Jeremy's Blog](https://www.jeremyong.com/cpp/machine-learning/2020/10/23/cpp-neural-network-in-a-weekend/) 

> Would you like to write a neural network from start to finish? Are you perhaps shaky on some of the fundamental concepts and derivations, such as categorical cross-entropy loss or backpropagation? Alternatively, would you like an introduction to machine learning without relying on “magical” frameworks that seem to perform AI miracles with only a few lines of code (and just as little intuition)? If so, this article was written for you.

2023-01-27 [When Should You Learn Machine Learning using C++? by Ahmed Hashesh Embedded House Medium](https://medium.com/ml2b/when-should-you-learn-machine-learning-using-c-6edd719f95ff) 

> This article is part of a series that address the implementation of Machine learning algorithms in C++, throughout this series, We will be implementing basic Machine learning algorithms using C++ features.
>
> - [When Should You Learn Machine Learning using C++?](https://medium.com/ml2b/when-should-you-learn-machine-learning-using-c-6edd719f95ff?source=friends_link&sk=8b66a55c047b99bbd1c720e59fe6a770)
> - [Data Preprocessing And Visualization In C++.](https://towardsdatascience.com/data-preprocessing-and-visualization-in-c-6d97ed236f3b?source=friends_link&sk=d13cdabff65a5ce56b717835108615ab)
> - [Machine Learning Data Manipulation Using C++.](https://towardsdatascience.com/data-manipulation-using-c-389d6c4493b1?source=friends_link&sk=b16fffc79fcdfbd63f60d919eb86d835)
> - [Naive Bayes From Scratch using C++](https://towardsdatascience.com/naive-bayes-implementation-from-scratch-using-c-51c958094041).
> - [Linear Regression Implementation In C++](https://medium.com/swlh/linear-regression-implementation-in-c-acdfb621e56).
> - [The 8 Books Each C++ Developer Must Read.](https://embeddedhouse.com/8-books-each-c-developer-must-read)
> - [The 9 Books Each Machine Learning Developer Must Read.](https://medium.com/ml2b/the-9-books-each-machine-learning-developer-must-read-e6ef8c0fb384)

2023-01-30 [PortAudio/portaudio: PortAudio is a cross-platform, open-source C language library for real-time audio input and output.](https://github.com/PortAudio/portaudio)



## GameDev

2023-02-02 [⚙️ Math Breakdown: Anime Homing Missiles - Little Polygon Game Dev Blog](https://blog.littlepolygon.com/posts/missile/) 

> I designed and prototyped the missile attack! The math was clever and I want to show-off!
>
> Let’s talk about [cubic bezier curves](https://en.wikipedia.org/wiki/Bézier_curve), [perlin noise](https://en.wikipedia.org/wiki/Perlin_noise), and [rotation minimizing frames](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/12/Computation-of-rotation-minimizing-frames.pdf).
> ![Missile Circus!](./2023-02-02-links-from-my-inbox.assets/giphy.gif)



