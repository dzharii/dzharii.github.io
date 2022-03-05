---
layout: post
title:  "Links from my inbox March 2022"
date:   2022-03-04T23:22:39.5273071-08:00
categories: links
---

## FYI
- 2022-03-04 [Numbers Every Programmer Should Know By Year](https://colin-scott.github.io/personal_website/research/interactive_latency.html)
> Classic latency numbers

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

## JavaScript
- 2022-03-04 [It's always been you, Canvas2D - Chrome Developers](https://developer.chrome.com/blog/canvas2d/)
> In a world of shaders, meshes, and filters, Canvas2D might not get you excited. But it should!

## Typescript
- 2022-02-27 [Making Illegal States Unrepresentable ybogomolov.me](https://ybogomolov.me/making-illegal-states-unrepresentable/?utm_source=csharpdigest&utm_medium=email&utm_campaign=404)
> From my perspective, an illegal state is such state of an application in which it demonstrates an unexpected behavior, makes its data inconsistent, or cannot proceed with operation.

## Rust

- 2022-03-05 [Badly implementing encryption](https://ayende.com/blog/posts/series/196449-A/badly-implementing-encryption)
> Low-level security in Rust


## CSS HTML SVG
- 2022-03-01 [5 things you don't need Javascript for](https://lexoral.com/blog/you-dont-need-js/)
> Every day, I see people use Javascript to do things that are supported by default in good old HTML & CSS.


## Azure Active Directory and Friends

- 2022-03-04 [Class ContractsConstants.IdentityProperties](https://microsoftgraph.github.io/microsoft-graph-comms-samples/docs/core/Microsoft.Graph.ContractsConstants.IdentityProperties.html)
> Some generated with [DocFX](https://dotnet.github.io/docfx/) MS Graph SDK doc; not bad, but not perfect. Document your source code with comments and get a website for free!
- 2022-03-01 [Anatomy of a JWT - FusionAuth](https://fusionauth.io/learn/expert-advice/tokens/anatomy-of-jwt)
> Here’s a JSON Web Token, freshly minted. Newlines have been added for clarity, but they are typically not present.
- 2022-03-01 [Why you probably don't need OAuth2 / OpenID Connect!](https://www.ory.dev/oauth2-openid-connect-do-you-need-use-cases-examples/)
> You probably do not need OAuth2, nor OpenID Connect. This is a controversial opinion, even more so because my biggest professional achievements are two of the most successful open source projects in the OAuth2 and OpenID Connect world