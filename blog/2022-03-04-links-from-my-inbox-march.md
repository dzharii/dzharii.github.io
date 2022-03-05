---
layout: post
title:  "Links from my inbox March 2022"
date:   2022-03-04T23:22:39.5273071-08:00
categories: links
---

## FYI
- 2022-03-04 [Numbers Every Programmer Should Know By Year](https://colin-scott.github.io/personal_website/research/interactive_latency.html)
> Classic latency numbers

## Good Reads
- 2022-02-27 [Practical Guide to Solving Hard Problems](https://praeclarum.org/2022/02/19/hard-problems.html?utm_source=programmingdigest&utm_medium=email&utm_campaign=461)
> I sometimes find myself in a position of needing to write some code that I’m just not sure how to write. Been there have you? Here are the steps I take when I’m stumped. No huge revelations here, just hard-earned advice.
- 2022-03-05 [Design: #noFramework. Is it as hard as you think? by Jérôme Beau Feb, 2022 Medium](https://javarome.medium.com/design-noframework-bbc00a02d9b3)
> Actually the idea is now new. As back as 2017, Adrian Holovaty, co-creator of the Django web framework, spoke about his own frameworks fatigue and why he left Django to build his own vanilla JS project.
- 2022-02-16 [Imitate, then Innovate - David Perell](https://perell.com/essay/imitate-then-innovate/)
> Imitate, then Innovate is my motto for improving at any skill.
> It’s counterintuitive, but the more we imitate others, the faster we can discover our unique style. In the entertainment world, there’s a long lineage of comedians who tried to copy each other, failed, and became great themselves: Johnny Carson tried to copy Jack Benny, but failed and won six Emmy awards. Then, David Letterman tried to copy Johnny Carson, but failed and became one of America’s great television hosts.
- 2022-02-13 [The Life of MS-DOS · Brendan's Website](https://b13rg.github.io/Life-of-MS-DOS/)
> First released on August 12, 1981, MS-DOS became the foundation for business computing for almost two decades. MS-DOS stood for Microsoft Disk Operating System and was often referred to simply as “DOS”.

## How the things work
- 2022-02-13 [Paul Butler – What does it mean to listen on a port?](https://paulbutler.org/2022/what-does-it-mean-to-listen-on-a-port/)
> In the corner of the student union building there is a coffee shop, and in the corner of the coffee shop are two students. Liz taps away at the keyboard of the battered hand-me-down MacBook her brother gave her when she moved away to college. To her left on the bench seat, Tim scrawls equations on a coil-bound notebook. Between them is a half-empty cup of room temperature coffee that Liz sporadically sips from to stay awake.


## Projects
- 2022-03-04 [remotion-dev/remotion: 🎥 Create videos programmatically in React](https://github.com/remotion-dev/remotion)
> Once again, this project assist to code a video scenes in ReactJS
- 2022-03-04 [iamadamdev/bypass-paywalls-chrome: Bypass Paywalls web browser extension for Chrome and Firefox.](https://github.com/iamadamdev/bypass-paywalls-chrome)
> A browser extension to bypass Pay to Read stuff. I have not tried it yet.
- 2022-03-04 [ViRb3/wgcf: 🚤 Cross-platform, unofficial CLI for Cloudflare Warp](https://github.com/ViRb3/wgcf)
    - 2022-03-04 [WARP is here sorry it took so long](https://blog.cloudflare.com/announcing-warp-plus/)
```bash
wgcf register wgcf generate wg-quick up ./wgcf-profile.conf
```
- 2022-02-28 [codesenberg/bombardier: Fast cross-platform HTTP benchmarking tool written in Go](https://github.com/codesenberg/bombardier)
> bombardier is a HTTP(S) benchmarking tool. It is written in Go programming language and uses excellent fasthttp instead of Go's default http library, because of its lightning fast performance.
Sample use:
```bash
docker run -ti --rm alpine/bombardier -c 1000 -d 3600s -l https://www.gosuslugi.ru
```
- 2022-03-05 [Paste to Markdown](http://euangoddard.github.io/clipboard2markdown/)
> This tool allows to paste a rich text and convert it to markdown. Project: [euangoddard/clipboard2markdown: Convert rich-text on your clipbaord to markdown](https://github.com/euangoddard/clipboard2markdown)
- 2022-02-27 [Text Summarizer QuillBot AI](https://quillbot.com/summarize)
> Text summarization tool
- 2022-03-05 [Cello • High Level C](https://libcello.org/)
> Cello is a library that brings higher level programming to C.
> New C syntax for New Era!
```c
#include "Cello.h"

int main(int argc, char** argv) {

  /* Stack objects are created using "$" */
  var i0 = $(Int, 5);
  var i1 = $(Int, 3);
  var i2 = $(Int, 4);

  /* Heap objects are created using "new" */
  var items = new(Array, Int, i0, i1, i2);

  /* Collections can be looped over */
  foreach (item in items) {
    print("Object %$ is of type %$\n",
      item, type_of(item));
  }

  /* Heap objects destructed via Garbage Collection */
  return 0;
}
```
- 2022-02-23 [JoinPeerTube](https://joinpeertube.org/)
> Free software to take back control of your videos
> Our aim is not to replace them, but rather to simultaneously offer something else, with different values.
- 2022-02-20 [microsoft/reverse-proxy: A toolkit for developing high-performance HTTP reverse proxy applications.](https://github.com/microsoft/reverse-proxy)
YARP (which stands for "Yet Another Reverse Proxy") is a project to create a reverse proxy server. We found a bunch of internal teams at Microsoft who were either building a reverse proxy for their service or had been asking about APIs and tech for building one, so we decided to get them all together to work on a common solution, this project.
- 2022-02-19 [React Native for Windows + macOS · Build native Windows & macOS apps with Javascript and React](https://microsoft.github.io/react-native-windows/)
- 2022-02-18 ⭐ [6 Months of Working at a Hypergrowth Startup – Jacob Brazeal](https://jacobbrazeal.wordpress.com/2022/02/16/lessons-from-6-months-at-a-hypergrowth-startup-100-prs-40-interviews/)
> I joined Scale AI late last summer. It’s been a crazy experience — Scale is growing incredibly fast right now, hitting a valuation of over $7 billion last year and recently signing a $250 million contract with the DoD. Personally, I’ve made over 100 PRs and conducted about 40 interviews already! It’s also by far the largest company I’ve worked for. Here are some lessons I’ve learned
- 2022-02-10 [Testing Distributed Systems Curated list of resources on testing distributed systems](https://asatarin.github.io/testing-distributed-systems/)


## Dev Design
- 2022-02-27 [Logging at Twitter: Updated](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2021/logging-at-twitter-updated?utm_source=programmingdigest&utm_medium=email&utm_campaign=461)
> Twitter's migration to Splunk Enterprise has given us a much stronger logging platform overall. We ingest 4 times more logging data and have a better query engine and better user adoption. The process was not without its challenges and learnings, which we'll share in greater detail in this blog.

## JavaScript
- 2022-03-04 [It's always been you, Canvas2D - Chrome Developers](https://developer.chrome.com/blog/canvas2d/)
> In a world of shaders, meshes, and filters, Canvas2D might not get you excited. But it should!


## Typescript
- 2022-02-27 [Making Illegal States Unrepresentable ybogomolov.me](https://ybogomolov.me/making-illegal-states-unrepresentable/?utm_source=csharpdigest&utm_medium=email&utm_campaign=404)
> From my perspective, an illegal state is such state of an application in which it demonstrates an unexpected behavior, makes its data inconsistent, or cannot proceed with operation.

## Rust
- 2022-03-05 [Badly implementing encryption](https://ayende.com/blog/posts/series/196449-A/badly-implementing-encryption)
> Low-level security in Rust

## Perl
- 2022-03-05 [Perl tricks by Neil Kandalgaonkar](http://montreal.pm.org/tech/neil_kandalgaonkar.shtml)
> A regular expression to check for prime numbers

## CSS HTML SVG
- 2022-03-01 [5 things you don't need Javascript for](https://lexoral.com/blog/you-dont-need-js/)
> Every day, I see people use Javascript to do things that are supported by default in good old HTML & CSS.
- 2022-02-18 [Yqnn/svg-path-editor: Online editor to create and manipulate SVG paths](https://github.com/Yqnn/svg-path-editor)


## Azure Active Directory and Friends

- 2022-03-04 [Class ContractsConstants.IdentityProperties](https://microsoftgraph.github.io/microsoft-graph-comms-samples/docs/core/Microsoft.Graph.ContractsConstants.IdentityProperties.html)
> Some generated with [DocFX](https://dotnet.github.io/docfx/) MS Graph SDK doc; not bad, but not perfect. Document your source code with comments and get a website for free!
- 2022-03-01 [Anatomy of a JWT - FusionAuth](https://fusionauth.io/learn/expert-advice/tokens/anatomy-of-jwt)
> Here’s a JSON Web Token, freshly minted. Newlines have been added for clarity, but they are typically not present.
- 2022-03-01 [Why you probably don't need OAuth2 / OpenID Connect!](https://www.ory.dev/oauth2-openid-connect-do-you-need-use-cases-examples/)
> You probably do not need OAuth2, nor OpenID Connect. This is a controversial opinion, even more so because my biggest professional achievements are two of the most successful open source projects in the OAuth2 and OpenID Connect world
- 2022-02-23 [Managed Identity with Azure Automation and Graph API – Stefan Gericke](https://www.gericke.name/managed-identity-with-azure-automation-and-graph-api/)
> This will be a small tutorial how to create the Managed Identity for Azure Automation and how to use this identity for example to connect to Graph API. This will helps you to do administrative tasks with sending request to the API endpoints of Microsoft.
