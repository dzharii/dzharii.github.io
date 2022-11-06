---
layout: post
title:  "Links from my inbox November 07 2022"
date:   2022-11-07T10:41:17.0199183-07:00
categories: links
---




![image-20221105175930749](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105175930749.png)

## Good reads

- 2022-11-05 [Folklore.org: -2000 Lines Of Code](https://www.folklore.org/StoryView.py?story=Negative_2000_Lines_Of_Code.txt)

  > -2000 Lines Of Code
  > Author: Andy Hertzfeld
  > Date:  February 1982
  > Characters: Bill Atkinson
  > Topics: Software Design, Management, Lisa
  > Summary:   It's hard to measure progress by lines of code

- 2022-11-04 [Use RSS for privacy and efficiency :: rsapkf/www](https://rsapkf.org/weblog/q2z)

  > Social media sites are riddled with ads, trackers, and dark patterns. As much as I'd love to avoid using them for privacy reasons or time concerns, it's just not possible to keep up to date with current events without them.RSS ("Really Simple Syndication") gives you the best of both worlds. For the uninitiated, it is a way to "subscribe" to websites without having to browse them individually or signing up for newsletters. With a collection of RSS feeds, you can keep up with the latest updates from multiple sources (that offer an RSS feed) from within your feed reader.

- 2022-10-30 [Things your manager might not know](https://jvns.ca/blog/things-your-manager-might-not-know/)

  > Here are the facts your manager might not know about you and your team that we’ll cover in this post:
  > What’s slowing the team down
  > Exactly what individual people on the team are working on
  > Where the technical debt is
  > How to help you get better at your job
  > What your goals are
  > What issues they should be escalating
  > What extra work you’re doing
  > How compensation/promotions work at the company
- 2022-10-30 [My Top 10 Tips for Doing Time In ‘the Hole’ The Marshall Project](https://www.themarshallproject.org/2022/09/30/how-i-survived-a-year-in-the-hole-without-losing-my-mind)

  > In prison, going to “the hole” can mean spending 23 hours a day alone in a tiny cell. Here, incarcerated author Michael J. Nichols shares his top 10 tips for enduring long stretches of “administrative segregation.”

- 2022-10-29 [How to communicate effectively as a developer](https://www.karlsutt.com/articles/communicating-effectively-as-a-developer/)

  > Writing effectively is a superpower, there is no denying it. As a software engineer, you write a lot. Most of the writing you do is for computers. Businesses, however, consist of people.
  > ![image-20221105175233408](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105175233408.png)

- 2022-10-25 ["Workflows, a new abstraction for distributed systems" by Dominik Tornow Strange Loop 2022 - YouTube](https://www.youtube.com/watch?v=V_5WeVmyhzg)

  Distributed "functions" that can resume execution from the previous state 
  Recommendation from the talk:
  
  - 2022-10-25 [Data and Reality by William Kent](https://www.goodreads.com/book/show/1753248.Data_and_Reality)
  - 2022-10-25 [Idempotence Is Not a Medical Condition: An essential property for reliable systems](https://dl.acm.org/doi/pdf/10.1145/2181796.2187821)
  - 2022-10-25 [Durable Functions Overview - Azure Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=csharp)
  - 2022-10-25 [Homepage Temporal](https://temporal.io/) Temporal is a developer-first, open source platform that ensures the successful execution of services and applications (using workflows).

- 2022-10-21 [When life gives you lemons, write better error messages by Jenni Nadler Sep, 2022 Wix UX](https://wix-ux.com/when-life-gives-you-lemons-write-better-error-messages-46c5223e1a2f)

  > Error messages are part of our daily lives online. Every time a server is down or we don’t have internet, or we forget to add some info in a form, we get an error message. “Something went wrong” is the classic. But what went wrong? What happened? And, most importantly, how can I fix it?
  >
  > ![image-20221105221937899](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105221937899.png)

- 2022-10-17 [YAGNI exceptions - lukeplant.me.uk](https://lukeplant.me.uk/blog/posts/yagni-exceptions/)

  > - Applications of [Zero One Many](http://wiki.c2.com/?ZeroOneInfinityRule). If the requirements go from saying “we need to be able to store an address for each user”, to “we need to be able to store two addresses for each user”, 9 times out of 10 you should go straight to “we can store many addresses for each user”
  >
  > - Versioning. This can apply to protocols, APIs, file formats etc. 
  > - Logging. Especially for after-the-fact debugging, and in non-deterministic or hard to reproduce situations, where it is often too late to add it after you become aware of a problem.
  > - Timestamps
- 2022-10-16 [If you want to terminate on an unexpected exception, then don't sniff at every exception; just let the process terminate - The Old New Thing](https://devblogs.microsoft.com/oldnewthing/20191024-00/?p=103022)
  > The idea is that the Do­Something function uses an error code to report problems, but it is built with the help of functions that use exceptions to report problems. The Do­Something function sets up a try/catch that catches any exceptions that may emerge from the helper functions and uses a helper function to convert the exception to an HRESULT. If the exception cannot be converted to an HRESULT, then we terminate the process, because the helper functions threw a disallowed exception.
  

## X-Files

- 2022-11-04 [Pex4Fun - Microsoft Research](https://www.microsoft.com/en-us/research/project/pex4fun/)

  > And it is gone now. Why?

- 2022-11-04 [GOTO: .NET Source Browser](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Number.Parsing.cs,f6db9e1598c92825)

  > Tell me more about goto! .NET Source Browser is very helpful tool

  ```csharp
      // Skip past any whitespace at the beginning.
      if ((styles & NumberStyles.AllowLeadingWhite) != 0 && IsWhite(num))
      {
          do
          {
              index++;
              if ((uint)index >= (uint)value.Length)
                  goto FalseExit;
              num = value[index];
          }
          while (IsWhite(num));
      }
      // ....
  Exit:
      return status;

  FalseExit: // parsing failed
      result = 0;
      status = ParsingStatus.Failed;
      goto Exit;
  OverflowExit:
      result = 0;
      status = ParsingStatus.Overflow;
      goto Exit;
  ```

- 2022-10-27 [Why has Microsoft finally trademarked Clippy? - Office Watch](https://office-watch.com/2021/clippy-why-microsoft-trademarked/)

  > In June 2021, Microsoft applied for a Clippy image trademark.
  >
  > ![img](./2022-11-07-links-from-my-inbox-november-2022.assets/image-159-473x221.png)Source: [Justica](https://trademarks.justia.com/907/82/n-90782739.html)

## Retro

- 2022-11-01 [Ep.6: We got a Soviet PDP-11 DVK-3, never used in 30 years! Computers of Chernobyl - YouTube](https://www.youtube.com/watch?v=r1EWsWxObjA)

  > Just a fun research about old hardware

- 2022-10-27 [Make WordArt - Online word art generator](https://www.makewordart.com/)

  > Bring back the 90's with online WordArt
  >
  > ![image-20221105175758164](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105175758164.png)

- 2022-10-28 [Programming Portals](https://maggieappleton.com/programming-portals)

  > Small, scoped areas within a graphical interface that allow users to read and write simple programmes
  > ![The scripting interface in HyperCard](./2022-11-07-links-from-my-inbox-november-2022.assets/hc1_iykxf7.jpg)

- 2022-10-25 [runvnc/dadsresume: My dad's resume and skills from 1980](https://github.com/runvnc/dadsresume)

  > ![image-20221105220506323](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105220506323.png)



## Stable Diffusion

2022-10-28 [Stable Diffusion Prompt Book - OpenArt OpenArt](https://openart.ai/promptbook)

> ![image-20221105215213973](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105215213973.png)

## WASM

- 2022-10-28 [sqlite3 wasm docs: About the sqlite3 WASM/JS Subproject](https://sqlite.org/wasm/doc/tip/about.md)

  > SQLite in the browser with WASM/JS

## Projects

- 2022-11-04 [Educational Channels](https://limnology.co/)

  > Top 70000 educational YouTube channels in 20 languages by category
- 2022-10-31 [FiloSottile/mkcert: A simple zero-config tool to make locally trusted development certificates with any names you'd like.](https://github.com/FiloSottile/mkcert)

  > mkcert is a simple tool for making locally-trusted development certificates. It requires no configuration.

- 2022-10-30 [sickcodes/Docker-OSX: Run macOS VM in a Docker! Run near native OSX-KVM in Docker! X11 Forwarding! CI/CD for OS X Security Research! Docker mac Containers.](https://github.com/sickcodes/Docker-OSX)

- 2022-10-29 [FFmpeg.guide - One stop solution to all things FFmpeg](https://ffmpeg.guide/)

  > A simple GUI tool to create complex FFmpeg filtergraphs quickly and correctly, without having to mess with the cumbersome filter syntax
  > ![image-20221105175104566](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105175104566.png)

- 2022-10-26 [Starter Tab](https://startertab.com/)

  > ![image-20221105215900246](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105215900246.png)

- 2022-10-21 [Screenplays for Movies and TV Shows](https://screenplays.io/?utm_source=hackernewsletter&utm_medium=email&utm_term=show_hn)

  > I have built a library of screenplays for movies and TV shows
  > ![image-20221105221740117](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105221740117.png)

- 2022-10-17 [madler/pigz: A parallel implementation of gzip for modern multi-processor, multi-core machines.](https://github.com/madler/pigz)

## CSS

- 2022-10-30 📊 [Charts.css](http://chartscss.org/)

  > CSS data visualization framework
  > ![image-20221105174738734](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105174738734.png)

- 2022-10-28 [An exploration of what's possible with CSS and Pokémon Cards](https://deck-24abcd.netlify.app/)

  > Card animation repo: [pokemon-cards-css/src at main · simeydotme/pokemon-cards-css](https://github.com/simeydotme/pokemon-cards-css/tree/main/src)
  > ![image-20221105175429793](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105175429793.png)

- 2022-10-24 [Bolt.css](https://boltcss.com/)

  > Basic styles for HTML Elements. Providing a mostly-reasonable set of styles without classes. Use it for simple static sites or as a starting point and add your own classes. This is not a complete solution with layout grids, components, utility classes, and the like.

## Linux
- 2022-10-26 [systemd Shutdown Units - Poseidon Labs](https://www.psdn.io/posts/systemd-shutdown-unit/)
  
  > Designing a system to shutdown gracefully can be tricky. In an ideal world, every service would be managed by a systemd unit. ExecStart would start a process that handles SIGTERM by stopping itself and an ExecStop would inform the process and block to gracefully stop the process and its resources.
  >
  > But not all software stops gracefully or does a full teardown of what it set up. In this post, we’ll look at systemd’s shutdown behavior and strategies for writing systemd units that perform custom cleanup tasks before shutdown.


## Self-hosted

- 2022-11-01 [FreshRSS, a free, self-hostable feeds aggregator](https://freshrss.org/)

  > FreshRSS is a self-hosted RSS and Atom feed aggregator.
  > It is lightweight, easy to work with, powerful, and customizable.

- 2022-10-24 [mikeroyal/Self-Hosting-Guide: Self-Hosting Guide. Learn all about locally hosting on premises & private web servers and managing software applications by yourself or your organization.](https://github.com/mikeroyal/Self-Hosting-Guide)

  > Self-Hosting is the practice of locally hosting(on premises & private web servers) and managing software applications by a person or organization instead of monthly subscriptions from Software as a service Software as a service (SaaS) providers.



## Markdown

- 2022-10-16 [marktext/marktext: 📝A simple and elegant markdown editor, available for Linux, macOS and Windows.](https://github.com/marktext/marktext)

> MarkText is an MIT licensed open source project, and the latest version will always be downloadable for free from the GitHub release page.
> ![img](./2022-11-07-links-from-my-inbox-november-2022.assets/marktext.png)

## Something I watched

- 2022-11-04 [Plain Text - Dylan Beattie - NDC Copenhagen 2022 - YouTube](https://www.youtube.com/watch?v=gd5uJ7Nlvvo)

  > Amazing talk about ASCII, code pages and all weird stuff
- 2022-11-04 [Keynote: Why web tech is like this - Steve Sanderson - YouTube](https://www.youtube.com/watch?v=3QEoJRjxnxQ)

  >   From when the Web was invented to the current days
- 2022-11-03 [Typical C++, But Why? - Björn Fahller - NDC TechTown 2022 - YouTube](https://www.youtube.com/watch?v=PmVmaT1JNbw)

  > Better stronger type coding suggestions

- 2022-11-03 [C++ Weekly - Ep 213 - CTRE: Compile Time Regular Expressions - YouTube](https://www.youtube.com/watch?v=8aRfJp1oZGA&list=PLs3KjaCtOwSaqPapPV4pc1SRjypnwrXYV&index=2)

  > C++ Weekly about [hanickadot/compile-time-regular-expressions: Compile Time Regular Expression in C++](https://github.com/hanickadot/compile-time-regular-expressions)

- 2022-10-21 ["Stop Writing Dead Programs" by Jack Rusher Strange Loop 2022 - YouTube](https://www.youtube.com/watch?v=8Ab3ArE8W3s)

  > A little bit controversial, but fun talk about why we write that boilerplate code, that does not solve our problem?
  >  very useful screenshot:
  > ![image-20221105221547404](./2022-11-07-links-from-my-inbox-november-2022.assets/image-20221105221547404.png)


## Just for fun

- 2022-10-27 [Interview with Senior JS Developer in 2022 - YouTube](https://www.youtube.com/watch?v=Uo3cL4nrGOk)

- 2022-10-27 [Interview with a GNU/Linux user in 2022 - Partition 1 - YouTube](https://www.youtube.com/watch?v=lE4UXdJSJM4)
