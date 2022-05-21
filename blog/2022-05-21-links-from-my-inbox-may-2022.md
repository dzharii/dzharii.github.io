---
layout: post
title:  "Links from my inbox May 21 2022"
date:   2022-05-21T10:41:17.0199183-07:00
categories: links
---

## Good Reads
- 2022-04-17 [What Does "Shitty Job" Mean in The Low-Skill, Low-Pay World?](https://www.residentcontrarian.com/p/what-does-shitty-job-mean-in-the?s=r)
> There’s all sorts of terms and experiences I’m sure I could apply this to, but right now the one that interests me most is the phrase a shitty job. I recently transitioned from having lived my whole life doing the kind of jobs you could do with zero day’s training and no developed skills. I’ve heard the phrase (and some classier high-end equivalents) since then, but it’s used much differently; it’s describing a different set of worries as experienced by a different kind of person living a different sort of life.
> The Author - [Resident Contrarian on Substack](https://substack.com/profile/11885401-resident-contrarian) - writes about different kinds of people issues.

## Good old reads
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
- 2022-05-21 [Files are hard](https://danluu.com/file-consistency/)
> on exactly how hard it is to save data without corruption or data loss 🚀

## How the things work
- 2022-05-14 [Time-series compression algorithms, explained](https://www.timescale.com/blog/time-series-compression-algorithms-explained/)
> Delta-delta encoding, Simple-8b, XOR-based compression, and more - These algorithms aren't magic, but combined they can save over 90% of storage costs and speed up queries. Here’s how they work.


## Fun

- 2022-05-15 [Introduction to Microsoft Excel 1992 - YouTube](https://www.youtube.com/watch?v=kOO31qFmi9A)
- 2022-05-15 [You Suck at Excel with Joel Spolsky - YouTube](https://www.youtube.com/watch?v=0nbkaYsR94c)
- 2022-05-15 [The Mother of All Demos, presented by Douglas Engelbart 1968 - YouTube](https://www.youtube.com/watch?v=yJDv-zdhzMY)

## C

- 2022-05-14 [A lock-free, concurrent, generic queue in 32 bits](https://nullprogram.com/blog/2022/05/14/)
> While considering concurrent queue design I came up with a generic, lock-free queue that fits in a 32-bit integer. The queue is “generic” in that a single implementation supports elements of any arbitrary type, despite an implementation in C.

## 🥑 Rust
- 2022-04-17 [How to build a WebSocket server with Rust - LogRocket Blog](https://blog.logrocket.com/how-to-build-a-websocket-server-with-rust/)
> In this tutorial, we’ll demonstrate how to build a basic message relay service that clients can connect to via WebSockets.


## 🐚 Bash
- 2022-05-21 [Bash trap for debugging bash scripts](https://www.onlinegdb.com/1h1BpiINv)
```bash
trap 'echo "# $BASH_COMMAND";read' DEBUG
echo line1
echo line2
echo line3
echo "Hello World";
```

## Interview
- 2022-05-21 [gouthampradhan/leetcode: Leetcode solutions](https://github.com/gouthampradhan/leetcode) recommended by Vu 5 out of 5
> Recommended TO U by fine gene-tic algo-rightms

## Projects
- 2022-05-21 [I Spent 2 years Launching Tiny Projects Tiny Projects](https://tinyprojects.dev/posts/i_spent_two_years_launching_tiny_projects)
> Two years ago, frustrated with a long list of unfulfilled project ideas in my phone notes, I decided to start trying one idea each week in its tiniest form.
> I never kept to a weekly schedule, but I've kept plodding along since then and launched 8 things.
- 2022-05-21 [Ticking Clock Shader](https://www.shadertoy.com/view/MtGSRm)
- 2022-05-21 [Shadertoys Collection](http://www-evasion.imag.fr/Membres/Fabrice.Neyret/demos/Shadertoy/indexImages.html)
> Fabrice's shadertoys catalog
- 2022-05-21 [JSON and virtual columns in SQLite](https://antonz.org/json-virtual-columns/)
> Thanks to virtual columns, we almost have a NoSQL database ツ
- 2022-05-15 [Cron-based backup - Litestream](https://litestream.io/alternatives/cron/)
> Sometimes Litestream can be overkill for projects with a small database that do not have high durability requirements. In these cases, it may be more appropriate to simply back up your database daily or hourly. 🪨
- 2022-05-14 [chubin/wttr.in: The right way to check the weather](https://github.com/chubin/wttr.in)
> You can access the service from a shell or from a Web browser like this:
- 2022-05-12 [alufers/mitmproxy2swagger: Automagically reverse-engineer REST APIs via capturing traffic](https://github.com/alufers/mitmproxy2swagger)
> A tool for automatically converting mitmproxy captures to OpenAPI 3.0 specifications. This means that you can automatically reverse-engineer REST APIs by just running the apps and capturing the traffic.


## Resilience
- 2022-05-21 [How We Solved the Thundering Herd Problem by Antross The PayPal Technology Blog May, 2022 Medium](https://medium.com/paypal-tech/thundering-herd-jitter-63a57b38919d)

## PowerShell
- 2022-05-16 [Get-Location Microsoft.PowerShell.Management - PowerShell Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-location?view=powershell-7.2)
> Example 4: Customize the PowerShell prompt
> This example shows how to customize the PowerShell prompt.
```
PS C:\>
function prompt { 'PowerShell: ' + (Get-Location) + '> '}

PowerShell: C:\>
The function that defines the prompt includes a Get-Location command, which is run whenever the prompt appears in the console.
```
- 2022-05-21 [Working with JSON in Various Shells - Brazil's Blog](https://blog.kellybrazil.com/2022/05/19/working-with-json-in-various-shells/)
> Bash is old. Bash is solid. Bash is ubiquitous. Bash isn’t going anywhere. I’ve done some crazy things with Bash in my career… Bash and me go a long way. That being said, using JSON in Bash is not always very ergonomic. Tools like jq, jello, jp, etc. help
- 2022-05-21 [Sample of making a simple webserver in PowerShell. If you have more complex needs checkout Pode https://github.com/Badgerati/Pode as a fully fledged PowerShell web server. · GitHub](https://gist.github.com/Tiberriver256/868226421866ccebd2310f1073dd1a1e)


## CSharp
- 2022-05-21 [On awaiting a task with a timeout in C# - The Old New Thing](https://devblogs.microsoft.com/oldnewthing/20220505-00/?p=106585)
- 2022-05-09 [Run with ML.NET C# code a TensorFlow model exported from Azure Cognitive Services Custom Vision - Cesar de la Torre](https://devblogs.microsoft.com/cesardelatorre/run-with-ml-net-c-code-a-tensorflow-model-exported-from-azure-cognitive-services-custom-vision/)
> Comments are closed. Login to edit/delete your existing comments
- 2022-05-09 [SciSharp/TensorFlow.NET: .NET Standard bindings for Google's TensorFlow for developing, training and deploying Machine Learning models in C# and F#.](https://github.com/SciSharp/TensorFlow.NET)
> .NET Standard bindings for Google's TensorFlow for developing, training and deploying Machine Learning models in C# and F#.