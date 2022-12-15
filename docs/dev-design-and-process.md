## Classics of software development

- 2022-03-04 [Numbers Every Programmer Should Know By Year](https://colin-scott.github.io/personal_website/research/interactive_latency.html)

- 2022-02-13 [The Life of MS-DOS · Brendan's Website](https://b13rg.github.io/Life-of-MS-DOS/)
> First released on August 12, 1981, MS-DOS became the foundation for business computing for almost two decades. MS-DOS stood for Microsoft Disk Operating System and was often referred to simply as “DOS”.

## How the thing work

- 2022-02-13 [Paul Butler – What does it mean to listen on a port?](https://paulbutler.org/2022/what-does-it-mean-to-listen-on-a-port/)
> In the corner of the student union building there is a coffee shop, and in the corner of the coffee shop are two students. Liz taps away at the keyboard of the battered hand-me-down MacBook her brother gave her when she moved away to college. To her left on the bench seat, Tim scrawls equations on a coil-bound notebook. Between them is a half-empty cup of room temperature coffee that Liz sporadically sips from to stay awake.
- 2022-01-28 [Hive: A Globally-Distributed Key/Value Store](https://papers.s3.fr-par.scw.cloud/hive.pdf) -
This paper reports our experience creating, developing, and deploying a globally distributed key-value store intended as
a database backend for our S3 API, Hive. Hive is a system to distribute data on a global scale, with various desired
consistency, replication, and database sharding for linear read and write latency.
- 2022-05-14 [Time-series compression algorithms, explained](https://www.timescale.com/blog/time-series-compression-algorithms-explained/)
> Delta-delta encoding, Simple-8b, XOR-based compression, and more - These algorithms aren't magic, but combined they can save over 90% of storage costs and speed up queries. Here’s how they work.
- 2022-05-22 [Dictionary implementation in C# - Dotnetos - courses & conferences about .NET](https://dotnetos.org/blog/2022-03-28-dictionary-implementation/)
> In the previous post we explained the [implementation details](https://dotnetos.org/blog/2022-03-07-list-implementation/) of `List<T>`. This time we will look at another generic collection defined in `System.Collection.Generic` namespace which is `Dictionary<TKey TValue>`.
- 2022-05-08 [Modern Microprocessors - A 90-Minute Guide!](https://www.lighterra.com/papers/modernmicroprocessors/)
> A brief, pulls-no-punches, fast-paced introduction to the main design aspects of modern processor microarchitecture.

## Some good Articles

- 2022-02-27 [Practical Guide to Solving Hard Problems](https://praeclarum.org/2022/02/19/hard-problems.html?utm_source=programmingdigest&utm_medium=email&utm_campaign=461)
> I sometimes find myself in a position of needing to write some code that I’m just not sure how to write. Been there have you? Here are the steps I take when I’m stumped. No huge revelations here, just hard-earned advice.
- 2022-02-18 ⭐ [6 Months of Working at a Hypergrowth Startup – Jacob Brazeal](https://jacobbrazeal.wordpress.com/2022/02/16/lessons-from-6-months-at-a-hypergrowth-startup-100-prs-40-interviews/)
> I joined Scale AI late last summer. It’s been a crazy experience — Scale is growing incredibly fast right now, hitting a valuation of over $7 billion last year and recently signing a $250 million contract with the DoD. Personally, I’ve made over 100 PRs and conducted about 40 interviews already! It’s also by far the largest company I’ve worked for. Here are some lessons I’ve learned
- 2022-01-26 [Durability and Redo Logging](http://justinjaffray.com/durability-and-redo-logging/)
> The most fundamental property a database can provide is durability. That is, once I’ve told you that your write has been accepted, if a mouse chews through the power cord for the server rack, the write will not be lost.

## Dev Deployment, Update, DevOps

- 2022-01-28 [How Prime Video updates its app for more than 8,000 device types - Amazon Science](https://www.amazon.science/blog/how-prime-video-updates-its-app-for-more-than-8-000-device-types)
> In the past year, we’ve been using WebAssembly (Wasm), a framework that allows code written in high-level languages to run efficiently on any device, to help resolve that trade-off. Because we are excited to contribute to the Wasm ecosystem, Amazon has joined the Bytecode Alliance, a consortium dedicated to developing secure, efficient, modular, and portable runtime environments built atop standards such as Wasm

## Design Patterns

## Inbox

- 2022-03-05 [Why you need Use Cases/Interactors by Denis Brandi ProAndroidDev](https://proandroiddev.com/why-you-need-use-cases-interactors-142e8a6fe576)
> Since Clean Architecture became the new hot topic in the Android world there have been loads of code samples and articles that tried to explain how it works and which are its benefits.
- 2022-03-06 [Modelling workflows with Finite State Machines in .NET - Lloyd Atkinson](https://www.lloydatkinson.net/posts/2022/modelling-workflows-with-finite-state-machines-in-dotnet/)
> How to implement complex logic as a FSA

## MVP (Model View Presenter)
- 💎 2022-01-24 [MVP (Model View Presenter) Architecture Pattern in Android with Example](https://www.geeksforgeeks.org/mvp-model-view-presenter-architecture-pattern-in-android-with-example/)
> MVP (Model — View — Presenter) comes into the picture as an alternative to the traditional MVC (Model — View — Controller) architecture pattern.

## Crash-only software
- 2022-05-16 [Crash-only software: More than meets the eye LWN.net](https://lwn.net/Articles/191059/)
- 2022-05-16 [Crash-Only Thinking](https://www.ribbonfarm.com/2014/10/29/crash-only-thinking/)
> A few weeks ago, I learned about something called crash-only software (ht, Robert Greco). This is software that has no normal “start” or “stop” mechanisms. It can only be stopped by crashing it. Often this means unplugging the computer physically.
- 2022-05-16 [The properties of crash-only software - Marc's Blog](https://brooker.co.za/blog/2012/01/22/crash-only.html)
> My thoughts about a classic paper
- 2022-05-21 [Crash-only software: More than meets the eye 2006 Hacker News](https://news.ycombinator.com/item?id=8464573)
```
Because of that I usually make all my services and systems crash only. End up using things like use atomic file moves, open files with append-only, use kill -9 to stop services and so on. To make your system crash-onl,y you have to go down the base system calls.
Some observed effects so far (many are covered in the article):
* Faster restarts (if your regular operation involves restarting lots of processes).
* Less code (don't have to handle both the clean shutdown and dirty shutdown).
* Recovery/cleanup code if it is needed, is often ends up moved to startup instead of shutdown (you might have to recover corrupt files when you start up again. For example re-truncate the files to a known offset based on some index).
* Something else might need to manage external resources (OS IPC resources, shared memory, IPC message queues etc). This could be a supervisor process.
* If you do a lot of socket operations on localhost, your sockets could get stuck in TIME_WAIT state and you'll eventually run out of ephemeral ports if you do a lot of restarts (say during testing). SIGTERM signals often are caught and processes (libraries) perform a cleaner shutdown.
* Think very well about the database you use and see if it can can support crash only operation. Some do some don't ( I won't name any names here ).
```
- 2022-05-16 [Crash-only software: More than meets the eye 2006 Hacker News](https://news.ycombinator.com/item?id=31242957)
```
I feel like people don't go deep enough into how to write 'crash only software' in these discussions. Like what are the options?
1. write ahead log before you do side effects/idempotent side effects
2. double writes to disk to prevent torn writes
3. checksums to make sure we don't make bad decisions based on bad data
4. redundancy/anti-entropy/other distributed system patterns which attempt to obviate the need to be overly concerned with a single process crashing
5. self-healing patterns when bad data is found
anyone have any other ideas?
```
- 2022-05-21 [Files are hard](https://danluu.com/file-consistency/)

## Dev Practices

- 2022-01-28 [Feature Flags](https://posthog.com/docs/user-guides/feature-flags) Feature Flags allow you to safely deploy and roll back new features. It means you can deploy features and then slowly roll them out to your users. If something has gone wrong, you can roll back new features without having to re-deploy your application. Feature Flags can also help you control access to certain features in your product (e.g. only show paid features to users with an active subscription).

## Dev: Metrics, Logging and Telemetry

- 2022-02-27 [Logging at Twitter: Updated](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2021/logging-at-twitter-updated?utm_source=programmingdigest&utm_medium=email&utm_campaign=461)
> Twitter's migration to Splunk Enterprise has given us a much stronger logging platform overall. We ingest 4 times more logging data and have a better query engine and better user adoption. The process was not without its challenges and learnings, which we'll share in greater detail in this blog.

## Books

### Java

- 2022-11-13 [Java Programming for Kids](http://yfain.github.io/Java4Kids/)

  > This book is not only for kids! This is just a good-written, illustrated guide on writing your first Java application.
