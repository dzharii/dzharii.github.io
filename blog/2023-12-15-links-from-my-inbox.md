---
layout: post
title:  "Links from my inbox 2023-12-15"
date:   2023-12-15T13:38:00-08:00
categories: links
---







## 📖 Good Reads

2023-08-14 [Nobody ever paid me for code - Bite code!](https://www.bitecode.dev/p/nobody-ever-paid-me-for-code)

> Examples of what not so say and what to say instead.
>
> Don't:
>
> > We should migrate from SQLite to Postgress. We are getting concurrency errors because too many processes are trying to write orders at the same time and it's not something we can queue because it needs real-time feedback.
>
> Do:
>
> > Some users are getting errors when too many of them order at the same time. We tried workarounds but they make for a bad shopping experience. This is not a trivial change to do. We are currently working on X, but I think this is more urgent. I advise we suspend work on X so that I can evaluate how much we need to do, and then plan for this change.
>
> Don't:
>
> > We have an XSS vulnerability and someone could inject JS code into our product page comments. We need to fix this ASAP.
>
> Do:
>
> > We noticed a bad actor could use product page comments to pirate our users because they are not protected well enough. This could affect our customers’ safety and our reputation. To our knowledge, this has not happened yet, but fixing it should be added to our lists of things to do. We have already tools to do this, so we could do a first try in half a day and see if that works.

2023-08-15 Book 🚩 [Software Engineering at Google](https://abseil.io/resources/swe-book/html/toc.html)

>We’ve found that expertise and shared communication forums offer great value as an organization scales.  As engineers discuss and answer questions in shared forums, knowledge tends to spread. New experts grow. If you have a hundred engineers writing Java, a single friendly and helpful Java expert willing to answer questions will soon produce a hundred engineers writing better Java code. Knowledge is viral, experts are carriers, and there’s a lot to be said for the value of clearing away the common stumbling blocks for your engineers.



## 🤯 Algorithms and Data Structures

2023-04-29  [Eytzinger Binary Search - Algorithmica](https://algorithmica.org/en/eytzinger)

> This tutorial is loosely based on a 46-page paper by Paul-Virak Khuong and Pat Morin “Array layouts for comparison-based searching” and describes one particular way of performing efficient binary search by rearranging elements of a sorted array in a cache-friendly way.
> We briefly review relevant concepts in processor architecture; if you want to get deeper, we recommend reading the original 2015 paper, as well as these articles...



## 🦹 Cheat sheets

2023-12-15 [GOOD SOLID Cheatsheet - Single Responsibility Principle](https://www.monterail.com/hubfs/PDF%20content/SOLID_cheatsheet.pdf)

> ![image-20231215135954225](./2023-12-15-links-from-my-inbox.assets/image-20231215135954225.png)



## 🦶🔫 C++ && C

### Learning / Videos

2023-06-15 [Using std::cpp - YouTube](https://www.youtube.com/@usingstdcpp7242)

> Conference
>
> ![image-20231215135151496](./2023-12-15-links-from-my-inbox.assets/image-20231215135151496.png)

2023-07-06 [Master Pointers in C: 10X Your C Coding! - YouTube](https://www.youtube.com/watch?v=IrGjyfBC-u0)

> ![image-20231215140614351](./2023-12-15-links-from-my-inbox.assets/image-20231215140614351.png)

### Libs

2023-07-06 [raysan5/raylib: A simple and easy-to-use library to enjoy videogames programming](https://github.com/raysan5/raylib)

> **raylib is a simple and easy-to-use library to enjoy videogames programming.**
>
> raylib is highly inspired by Borland BGI graphics lib and by XNA framework and it's especially well suited for prototyping, tooling, graphical applications, embedded systems and education.
>
> *NOTE for ADVENTURERS: raylib is a programming library to enjoy videogames programming; no fancy interface, no visual helpers, no debug button... just coding in the most pure spartan-programmers way.*
>
> This is a basic raylib example, it creates a window and draws the text `"Congrats! You created your first window!"` in the middle of the screen. Check this example [running live on web here](https://www.raylib.com/examples/core/loader.html?name=core_basic_window).

```cpp
#include "raylib.h"

int main(void)
{
    InitWindow(800, 450, "raylib [core] example - basic window");

    while (!WindowShouldClose())
    {
        BeginDrawing();
            ClearBackground(RAYWHITE);
            DrawText("Congrats! You created your first window!", 190, 200, 20, LIGHTGRAY);
        EndDrawing();
    }

    CloseWindow();

    return 0;
}
```

### Benchmarks

2023-07-06 [GitHub - google/benchmark: A microbenchmark support library](https://github.com/google/benchmark)

2023-07-06 [GitHub - PacktPublishing/The-Art-of-Writing-Efficient-Programs: The Art of Writing Efficient Programs, published by Packt](https://github.com/PacktPublishing/The-Art-of-Writing-Efficient-Programs)

> ![image-20231215144052265](./2023-12-15-links-from-my-inbox.assets/image-20231215144052265.png)



## 🍎 Projects

2023-12-15 [OpenFarm - Tomato](https://openfarm.cc/en/crops/tomato)

> Grow Your Food
> Farm and garden through knowledge sharing

> ![image-20231215151511905](./2023-12-15-links-from-my-inbox.assets/image-20231215151511905.png)

## 🔪 Tools

2023-07-01 [Announcing Hurl 4.0.0](https://hurl.dev/blog/2023/06/30/announcing-hurl-4.0.0.html)

> [Hurl](https://hurl.dev/) is a command line tool powered by [curl](https://curl.se/), that runs HTTP requests defined in a simple plain text format:

> ![image-20231215141414725](./2023-12-15-links-from-my-inbox.assets/image-20231215141414725.png)





## 💡Ideas

### FreshRSS

Someday, I will defiantly install and try FreshRSS on my raspberry pi or somewhere else, maybe, even in the cloud!

2023-06-01 [FreshRSS/FreshRSS: A free, self-hostable aggregator…](https://github.com/FreshRSS/FreshRSS)

![image-20231215134309283](./2023-12-15-links-from-my-inbox.assets/image-20231215134309283.png)

2023-06-01 [FreshRSS, a free, self-hostable feeds aggregator](https://www.freshrss.org/)



## 👩‍💻 Hacker News

2023-07-06 [Hacker News Blogroll](https://dm.hn/)

2023-07-05 [Ask HN: Could you share your personal blog here? | Hacker News](https://news.ycombinator.com/item?id=36575081)

> ![image-20231215141742601](./2023-12-15-links-from-my-inbox.assets/image-20231215141742601.png)



## 🔒 Security, OAuth

2023-06-13 [Getting API security right - Philippe De Ryck - NDC London 2023 - YouTube](https://www.youtube.com/watch?v=7UBm8QFTaq0)

> ![image-20231215134815825](./2023-12-15-links-from-my-inbox.assets/image-20231215134815825.png)

> 2023-06-13 [7 Ways to Avoid API Security Pitfalls when using JWT or JSON](https://42crunch.com/7-ways-to-avoid-jwt-pitfalls/)
> 2023-06-13 [Part 5: Authorization Grant, Our First OAuth Dance Steps | CBT Nuggets](https://www.cbtnuggets.com/blog/cbt-nuggets/part-5-authorization-grant-our-first-oauth-dance-steps)

2023-07-05 [Revocation | Biscuit](https://www.biscuitsec.org/docs/guides/revocation/)

>  Why should we plan for token revocation?
>
> There are two competing approaches to session management in authorization, that will drive architectural decisions:
>
> - in *stateful* systems, all authorizations are performed through one service or database that holds the list of currently active sessions
> - in *stateless* systems, authorization can be performed independently in any service, only using information from the token and the service. In particular, the service cannot know about all of the currently active sessions (there may not even be a concept of session)

2023-06-19 [CheatSheetSeries/cheatsheets_draft/OAuth_Cheat_Sheet.md at master · OWASP/CheatSheetSeries · GitHub](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets_draft/OAuth_Cheat_Sheet.md)

> ![image-20231215135351373](./2023-12-15-links-from-my-inbox.assets/image-20231215135351373.png)



## AW-CALENDAR RESEARCH

The research led to no conclusion. The results cannot be confirmed or denied. 
Really, I don't remember now what it was about, some links... 

2023-06-30 🦄 [Grila - Calendar for keyboard addicts](https://lowtechguys.com/grila/)

Just build a good calendar, with dates and holidays and work days and list of tasks

- 2023-06-30 [Ask HN: How Do You Manage and Schedule Everything in Your Life? | Hacker News](https://news.ycombinator.com/item?id=36493990)
- 2023-06-30 [How to escape meeting hell as an engineer? | Hacker News](https://news.ycombinator.com/item?id=36452182)
  2023-06-30 [Ask HN: Struggling with Productivity and Procrastination | Hacker News](https://news.ycombinator.com/item?id=36184605)

> I struggle with staying productive and organizing myself. I am a chronic procrastinator and have tried everything to be more productive like lists, calendars, apps, etc. but I still can't seem to get things done. I want to study more, read more, and finish my coding projects. However, I end up not doing much and feel terribly guilty. I suspect I may have ADHD or some kind of dopamine addiction but I'm not sure. I do well in school even by studying at the last minute, and I attend a rather challenging school. In my free time though, I end up doing very little or nothing, not knowing where my time went. I try to remove all distractions but it doesn't seem to work.
> Does anyone have any advice or strategies on how I can improve my productivity and focus? How have you overcome similar challenges to achieve your goals and stay focused? I feel stuck in this cycle of procrastination and distraction and want to break free.
> 2023-06-30 [Synchronize two Outlook calendars with Power Automate](https://www.augmentedmind.de/2023/02/26/synchronize-two-outlook-calendars/)
> 2023-06-30 [0xdeadbeer/vis: Vi Scheduler (vis) is a simple TUI program built for managing your schedules in a calendar-like grid.](https://github.com/0xdeadbeer/vis)
> 2023-06-30 [United States Calendar](https://tradingeconomics.com/united-states/calendar)
> 2023-06-30 [Manager’s Secret Second Calendar | LornaJane](https://lornajane.net/posts/2023/managers-secret-second-calendar)
> 2023-06-30 [Sprint Calendar](https://sprintcalendar.com/2-week-sprints/start-2023-06-13/release-0/view-now)
> 2023-06-30 [alesr/gcall: GCALL creates instant Google Meet meetings via the terminal to avoid the need for clicking multiple buttons in the Google UI](https://github.com/alesr/gcall)
> 2023-06-30 [Grila - Calendar for keyboard addicts](https://lowtechguys.com/grila/)



### Research To API

I've attempted to research how to convert some "unstructured" sources, like web pages to API. Here are some related links and projects. 

2023-08-13 [gaojiuli/toapi: Every web site provides APIs.](https://github.com/gaojiuli/toapi/)
2023-08-13 ⭐ [toapi/awesome-toapi: A list of awesome applications for Toapi.](https://github.com/toapi/awesome-toapi)
2023-08-13 [toapi/toapi-search: Provide a friendly and robust API for Google, Bing, Baidu, So, DuckDuckGo etc.](https://github.com/toapi/toapi-search)
2023-08-13 [Convert a Website into an API: Building a Serverless Web Scraper with the AWS Cloud Development Kit](https://martinmck.com/posts/convert-a-website-into-an-api-building-a-serverless-web-scraper-with-the-aws-cloud-development-kit/)
2023-08-13 ⭐ [t9tio/cloudquery: Turn any website to API by several clicks (serverless and support SPA!)](https://github.com/t9tio/cloudquery)
2023-08-13 [Playwright: Launching Cross-Browser Automation to the Stars | by Alexander Andryashin | Aerokube](https://blog.aerokube.com/playwright-launching-cross-browser-automation-to-the-stars-4a9cca8f0df0)



### Research media:print css

A photo-cheatsheet project. How do I make a good photo-printable cheat sheets with CSS HTML, so I can print web page from browser and it would look nice. 

2023-08-13 [BafS/Gutenberg: Modern framework to print the web correctly.](https://github.com/BafS/Gutenberg)

2023-08-13 [Laying Out a Print Book With CSS | Ian G McDowell's Blog](https://iangmcdowell.com/blog/posts/laying-out-a-book-with-css/)

2023-08-13 [typst/typst: A new markup-based typesetting system that is powerful and easy to learn.](https://github.com/typst/typst)


### 



