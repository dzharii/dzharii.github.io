---
layout: post
title:  "Links from my inbox May 22 2022 Part 2"
date:   2022-05-22T10:41:17.0199183-07:00
categories: links
---

## Good Reads
- 2022-05-22 🔥📖 [Algorithms for Modern Hardware - Algorithmica](https://en.algorithmica.org/hpc/)
> This is an upcoming high performance computing book titled “Algorithms for Modern Hardware” by Sergey Slotin.
>
>Its intended audience is everyone from performance engineers and practical algorithm researchers to undergraduate computer science students who have just finished an advanced algorithms course and want to learn more practical ways to speed up a program.
>
> All book materials are hosted on GitHub, with code in a separate repository. This isn’t a collaborative project, but any contributions and feedback are very much welcome.
- 2022-01-11 [The WebSocket Handbook: learn about the technology behind the realtime web   Ably Blog: Data in Motion](https://ably.com/blog/introducing-the-websocket-handbook)
- 2022-03-30 [Your computer is a distributed system](http://catern.com/compdist.html)
- 2022-03-30 [Developers spend most of their time figuring the system out](https://lepiter.io/feenk/developers-spend-most-of-their-time-figuri-9q25taswlbzjc5rsufndeu0py/)
> I am often asked what I mean when I say that developers spend most of their time figuring the system out. Let’s unpack the statement.

## How the things work
- 2022-05-08 [Modern Microprocessors - A 90-Minute Guide!](https://www.lighterra.com/papers/modernmicroprocessors/)
> A brief, pulls-no-punches, fast-paced introduction to the main design aspects of modern processor microarchitecture.
- 2022-05-22 [Dictionary implementation in C# - Dotnetos - courses & conferences about .NET](https://dotnetos.org/blog/2022-03-28-dictionary-implementation/)
> In the previous post we explained the [implementation details](https://dotnetos.org/blog/2022-03-07-list-implementation/) of `List<T>`. This time we will look at another generic collection defined in `System.Collection.Generic` namespace which is `Dictionary<TKey TValue>`.

## Fun
- 2022-05-22 [SPENT](https://playspent.org/)
> A fun game, a reminder for middle class people about poverty
- 2022-05-06 [Why I’ve spent my Easter break customizing Neovim – Franciszek Malinka](https://framal.xyz/why-ive-spent-my-easter-break-customizing-neovim/)
> I must admit, bare Vim with only the basic options it offers is still inferior to a GUI editor like VSCode (but I know some people that disagree). I like the idea of a file-searching engine, language server,
session and project management...
- 2022-05-06 [Dead Trees](https://unit520.net/deadtrees/)
> Tetris, but silly
- 2022-05-01 [How to professionally say](https://howtoprofessionallysay.akashrajpurohit.com/)
> A guide for your daily "professional" interactions (not really, try at your own risk)
- 2022-04-27 [Infinite Mac](https://macos8.app/)
> I don't know what to say... It is infinite!
- 2022-04-27 [adnanaga/pushy: Create awkward situations with my chrome extension that send you messages that look like an iMessage popup](https://github.com/adnanaga/pushy)
> Create awkward situations with my chrome extension that send you messages that look like an iMessage popup
- 2022-04-14 [Browser in the Dark: flashlights with CSS and canvas](https://voussoir.net/writing/browser_in_the_dark)
> Note: this article will make more sense if you are using a mouse or other pointing device. Requires javascript.
- 2022-03-30 [24: Adventures in Stereograms - by David Friedman](https://ironicsans.substack.com/p/24-adventures-in-stereograms?s=r)



## Algorithms
- 2022-05-06 [Use Fast Data Algorithms Joey Lynch's Site](https://jolynch.github.io/posts/use_fast_data_algorithms/)
> These hash or checksum functions are used to ensure data integrity and usually are defending against bugs/bitrot/cosmic rays instead of malicious attackers. I typically see the following poor choices...
- 2022-04-24 [danupon on Twitter: "Negative-Weight Single-Source Shortest Paths in Near-linear Time: https://t.co/6kUCOFTluI We just updated our paper on arXiv. This version: * Faster algorithm near-linear time instead of almost-linear time , and * Simpler algorithm&analysis: ... 1/2 " / Twitter](https://twitter.com/danupon/status/1511639912008888322?t=47eXAvMgEfBjCoL8AR4hgA&s=19)
- 2022-04-24 [Maximum Flow and Minimum-Cost Flow in Almost-Linear Time Hacker News](https://news.ycombinator.com/item?id=31149038)
> Wow! I don't know what it is, but I'll keep it here!
- 2022-04-10 [About CRDTs • Conflict-free Replicated Data Types](https://crdt.tech/)
- 2022-04-10 [Conflict-free Replicated Data Types](https://arxiv.org/pdf/1805.06358.pdf)

## Security/Cryptography
- 2022-04-23 [How SHA-256 Works Step-By-Step Boot.dev](https://blog.boot.dev/cryptography/how-sha-2-works-step-by-step-sha-256/)
- 2022-04-23 [Very Basic Intro to Hash Functions SHA-256, MD5, etc Boot.dev](https://blog.boot.dev/cryptography/very-basic-intro-to-hash-functions-sha-256-md-5-etc/)
- 2022-04-23 [Basic Intro to Key Derivation Functions Boot.dev](https://blog.boot.dev/cryptography/key-derivation-functions/)
> By Lane Wagner on Dec 30, 2019
- 2022-04-20 [What an X.509 Certificate Is & How It Works Sectigo® Official](https://sectigo.com/resource-library/what-is-x509-certificate)
- 2022-04-20 [What is an X.509 certificate?](https://www.techtarget.com/searchsecurity/definition/X509-certificate)
- 2022-04-14 [Ask HN: Do you manage your family's digital safety? Hacker News](https://news.ycombinator.com/item?id=31027766)
```
+ Family 1Password so everyone can securely manage passwords and share logins
+ Network is covered by pihole (and in exchange, plex/jellyfin/etc access works nicely)

+ Smart home stuff is managed by me. Everyone has admin rights but shared terminals (eg kitchen panel) are unpriviledged users.

+ Everyone has a home directory on the homelab they can back up to with as much space as they want (4tb+). I help them set it up if they ask.

+ Haven't done this yet but would like some kind of network level monitoring for threats (viruses, cryptominers, etc)

Things intentionally not done:

+ I don't install anything on folks devices.. at all, but never without their consent and without them having an off switch.

+ We have cams but everyone can turn them off and view recordings. Recordings are kept only for a short timeframe. Cams are all visible/known.

+ I intentionally collect no logs of dns or other stuff. When I do occasionally need to debug an issue, I let everyone know I am flipping on logs for a few minutes.

Empower users, don't control them.
```
- 2022-04-11 [Ask HN: Do you still monitor your SSL certificate validity? Hacker News](https://news.ycombinator.com/item?id=30987825)
- 2022-03-30 [mandatoryprogrammer/CursedChrome: Chrome-extension implant that turns victim Chrome browsers into fully-functional HTTP proxies, allowing you to browse sites as your victims.](https://github.com/mandatoryprogrammer/CursedChrome) `sec`
> This is a tool written for professional red teams. It helps simulate an often unpracticed attack scenario involving malicious browser extensions. If you're planning on using this to maliciously spy on your friend/girlfriend/victims
- 2022-03-24 SEC [If You're Not Using SSH Certificates You're Doing SSH Wrong Smallstep Blog](https://smallstep.com/blog/use-ssh-certificates/)
> At smallstep, certificates are kind of our jam. We build open source software that lets you run your own private certificate authority and manage X.509 (TLS/HTTPS) certificates.
- 2022-03-24 [If you’re not using SSH certificates you’re doing SSH wrong 2019 Hacker News](https://news.ycombinator.com/item?id=30788544)
- 2022-03-16 [An Introduction to SSL Pinning](https://www.thesslstore.com/blog/an-introduction-to-pinning/)
> If you know the term HPKP (HTTP Public Key Pinning), that is a specific implementation of pinning that is frequently used with SSL. Here we will be covering “pinning” in a more general sense. Please note that pinning and HPKP are different

## Job hunt/interviews
- 2022-05-22 [Lessons learned from the recent job hunt · Jamie Tanna Software Engineer](https://www.jvt.me/posts/2022/05/02/lessons-learned-job-hunt/)
> As you may have recently seen, I've recently gone through the interviewing process and joined Deliveroo as a Senior Software Engineer.
> This was different to my last move to the Cabinet Office, as I only applied for that role, whereas this time I wasn't really sure what I wanted, and so wanted to interview at a few great places and see what felt like a good fit for me.
- 2022-05-08 🔥 [Interview Process mishnit.github.io](https://mishnit.github.io/System_Design.html)
> System Design interview advices and learning materials

## Projects
- 2022-05-22 [huy.rocks/everyday](https://www.huy.rocks/everyday)
> Handsome personal dev blog. Thank you for sharing, Huy!
- 2022-05-05 [USB Cheat Sheet](https://fabiensanglard.net/usbcheat/index.html)
- 2022-05-05 [7GUIs](https://eugenkiss.github.io/7guis/tasks/)
> The tasks were selected by the following criteria. The task set should be as small as possible yet reflect as many typical (or fundamental or representative) challenges in GUI programming as possible. Each task should be as simple and self-contained...
- 2022-05-04 [What are your Most Used Self Hosted Applications?](https://noted.lol/what-are-your-most-used-self-hosted-applications/)
- 2022-05-04 [Mechanical Watch – Bartosz Ciechanowski](https://ciechanow.ski/mechanical-watch/)
> Purely mechanical devices have a few different ways to power themselves, but one of the simplest methods to store energy is to use a spring. Most springs we see in daily life are coil springs. In the demonstration below, you can move the mass...
- 2022-04-27 [How I put my whole life into a single database · Felix Krause](https://krausefx.com//blog/how-i-put-my-whole-life-into-a-single-database)
> Founder of fastlane.tools 🚀
- 2022-04-20 [HUDS+GUIS](https://www.hudsandguis.com/)
> How HUDs are implemented in various video games.
- 2022-04-15 [Convert curl commands to code](https://curlconverter.com/)
> Convert curl commands to Python, JavaScript, PHP, R, Go, Rust, Elixir, Java, MATLAB, Dart, CFML, Ansible URI, Strest or JSON
- 2022-04-15 [A privacy-first, open-source home assistant Gladys Assistant](https://gladysassistant.com/)
> A privacy-first (hopefully), open-source home assistant
- 2022-04-15 [ehmicky/wild-wild-path: 🤠 Object property paths with wildcards and regexps 🌵](https://github.com/ehmicky/wild-wild-path)
> This package is an ES module and must be loaded using an import or import() statement, not require().
- 2022-04-14 [Speedway to Clermont, IN - Abandoned Rails](https://www.abandonedrails.com/speedway-to-clermont)
> Map and list of Abandoned Rail roads
- 2022-04-14 [LuanRT/YouTube.js: 🎥 full-featured wrapper around YouTube's private API](https://github.com/LuanRT/YouTube.js)
> A full-featured wrapper around the Innertube API, which is what YouTube itself uses.
- 2022-04-11 [SecurityZines](https://securityzines.com/#comics)
> SecurityZines graphical way of learning concepts of Application & Web Security.
- 2022-04-01 [blakeblackshear/frigate: NVR with realtime local object detection for IP cameras](https://github.com/blakeblackshear/frigate)
> A complete and local NVR designed for Home Assistant with AI object detection. Uses OpenCV and Tensorflow to perform realtime object detection locally for IP cameras.
- 2022-03-30 [Wilfred/difftastic: a diff that understands syntax 🟥🟩](https://github.com/Wilfred/difftastic)
- 2022-05-22 [BookStack](https://www.bookstackapp.com/)
> Simple & Free Wiki Software BookStack is a simple, self-hosted, easy-to-use platform for organising and storing information.

## SIMD
- 2022-05-01 `simd` [Removing characters from strings faster with AVX-512 – Daniel Lemire's blog](https://lemire.me/blog/2022/04/28/removing-characters-from-strings-faster-with-avx-512/)
> A computer science professor at the University of Quebec (TELUQ). View all posts by Daniel Lemire

## Resilience
- 2022-05-08 [Changing Tires at 100mph: A Guide to Zero Downtime Migrations Kiran Rao](https://kiranrao.ca/2022/05/04/zero-downtime-migrations.html)
> As a backend developer at a mobile app company, a common task was migrating a database schema. This could be to improve query performance, change column names/types, or adapt data to new use cases. While this may seem like a straightforward set of SQL...

## PowerShell
- 2022-04-17 [Playing Movie Using PowerShell PowerShell Video Player « My Simple Technical Blog](https://rakatechblog.wordpress.com/2013/02/15/playing-movie-using-powershell/)
- 2022-04-17 [Play video with powershell on Windows 10 - Stack Overflow](https://stackoverflow.com/questions/42495060/play-video-with-powershell-on-windows-10)
- 2022-04-17 [Can a Windows batch file determine its own file name? - Stack Overflow](https://stackoverflow.com/questions/8797983/can-a-windows-batch-file-determine-its-own-file-name)
> Can a Windows batch file determine its own file name?
> Yes.
> Use the special `%0` variable to get the path to the current file.
> Write `%~n0` to get just the filename without the extension.
> Write `%~n0%~x0` to get the filename and extension.
> Also possible to write `%~nx0` to get the filename and extension.
- 2022-04-13 [windows - Change audio level from powershell? - Stack Overflow](https://stackoverflow.com/questions/21355891/change-audio-level-from-powershell)
- 2022-04-12 [PowerTip: Look at Most Recent Error in PowerShell - Scripting Blog](https://devblogs.microsoft.com/scripting/powertip-look-at-most-recent-error-in-powershell/)
> 🙀🙀🙀🙀🙀
> I ran a script that fails. How can I use Windows PowerShell to find the most recent error?
> Hey, Scripting Guy!
> Answer: Use $error, and to see the most recent error, look at error 0:
```
$error[0]
```

## CSharp
- 2022-05-22 [Dependency injection in ASP.NET Core Microsoft Docs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0)
> ASP.NET Core supports the dependency injection (DI) software design pattern, which is a technique for achieving Inversion of Control (IoC) between classes and their dependencies.
- 2022-04-30 [dependency injection in Windows forms and EF core - Microsoft Q&A](https://docs.microsoft.com/en-us/answers/questions/277466/dependency-injection-in-windows-forms-and-ef-core.html)
> WinForms DI implementation
- 2022-04-27 [Using Tuples for Overriding Equality and GetHashCode - IntelliTect](https://intellitect.com/blog/overidingobjectusingtuple/)
> But, In my tuples are fun, but ugly
- 2022-03-16 [c# - Programmatically Change Windows 10 Lock Screen Background on Desktop - Stack Overflow](https://stackoverflow.com/questions/51781921/programmatically-change-windows-10-lock-screen-background-on-desktop)
- 2022-05-22 [Асинхронность в C#. Разрушение легенд DOU](https://dou.ua/lenta/articles/asynchronous-programming/?from=footer)
- 2022-05-10 [AppDomain Class System Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/api/system.appdomain?view=net-6.0)
> This example shows how to create a new AppDomain, instantiate a type in that new AppDomain, and communicate with that type's object. In addition, this example shows how to unload the AppDomain causing the object to be garbage collected.
- 2022-05-10 [Using Application Domains - .NET Framework Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/framework/app-domains/use?redirectedfrom=MSDN)
> Application domains provide a unit of isolation for the common language runtime. They are created and run inside a process. Application domains are usually created by a runtime host, which is an application responsible for loading the runtime into a proce
- 2022-05-10 [c# - Restrict plugin access to file system and network via appdomain - Stack Overflow](https://stackoverflow.com/questions/1357231/restrict-plugin-access-to-file-system-and-network-via-appdomain)
> I asked a while ago how to restrict plugins access ( I want to prevent them from writing to the disk or network ) and i was told to use AppDomain. I have searched and tried and failed on how to get this working.
```cs
System.Security.PermissionSet ps =
    new System.Security.PermissionSet(System.Security.Permissions.PermissionState.None);
ps.AddPermission(new System.Security.Permissions.FileIOPermission(System.Security.Permissions.FileIOPermissionAccess.NoAccess, "C:\\"));
System.Security.Policy.PolicyLevel pl = System.Security.Policy.PolicyLevel.CreateAppDomainLevel();
pl.RootCodeGroup.PolicyStatement = new System.Security.Policy.PolicyStatement(ps);
AppDomain.CurrentDomain.SetAppDomainPolicy(pl);
System.Reflection.Assembly myPluginAssembly = AppDomain.CurrentDomain.Load("MyPluginAssembly");
```

## FFmpeg
- 2022-04-18 [FFmpeg Audio Filters Gallery](https://www.vacing.com/ffmpeg_audio_filters/index.html)
> Welcome to add new effects with a Merge Request , or send email to vacingfangATqq.com

## Watch me ;)
- 2022-05-06 [The Man Who Accidentally Killed The Most People In History - YouTube](https://www.youtube.com/watch?v=IV3dnLzthDA)
- 2022-05-06 [2016 Recruit Training at Marine Corps Recruit Depot San Diego - YouTube](https://www.youtube.com/watch?v=XkfOebBYm-U)
- 2022-05-06 [Boot Camp: Making a Sailor Full Length Documentary - 2018 - YouTube](https://www.youtube.com/watch?v=pDwLsrmDBF0)
- 2022-04-25 [Scooby-Doo! Mystery Incorporated - Hellraiser cameo - YouTube](https://www.youtube.com/watch?v=2Yf2us_gN9Q)
> Just The Box meme
- 2022-04-14 [Douglas Crockford: The JSON Saga - YouTube](https://www.youtube.com/watch?v=-C-JoyNuQJs)
https://web.archive.org/web/20130203112329/http://dev.hasenj.org/post/3272592502
- 2022-03-07 [The Simple Genius of the Interstate Highway System - YouTube](https://www.youtube.com/watch?v=SR7BA3xEmDo&ab_channel=WendoverProductions) `about US` - documentary channel
