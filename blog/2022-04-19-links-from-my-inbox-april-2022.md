---
layout: post
title:  "Links from my inbox April 13 2022"
date:   2022-04-01T10:41:17.0199183-07:00
categories: links
---

## Good Reads
- 2022-03-21 [Why Don't You Use ...](https://www.brendangregg.com/blog/2022-03-19/why-dont-you-use.html)
> Working for a famous tech company, I get asked a lot "Why don't you use technology X?" X may be an application, programming language, operating system, hypervisor, processor, or tool. It may be because:
> It performs poorly.
> It is too expensive.
> It is not open source.
> It lacks features.
> It lacks a community.
> ...
- 2022-03-26 [What made the NES so interesting?](https://nicole.express/2022/the-nes-as-an-artifact.html)
> I often like to cover oddities here; details of computers and arcade systems people may not have heard of, that didn’t sell well but had unique or interesting characteristics. But focusing on oddities like that can disguise the fact that sometimes, even systems that were very popular can stand out for unique design. Such be it with the Nintendo Entertainment System: had Nintendo’s console flopped, it’d definitely have a post already. But it doesn’t. Let’s fix that! And answer a simple question I was asked: what’s the deal with special chip games?

## Fun

## Work

## Design Patterns

## Projects
- 2022-03-21 [Curtiss-Wright Debuts First Raspberry Pi Powered Ultra-Small Form Factor Rugged Mission Computer for Defense and Aerospace Applications](https://www.curtisswrightds.com/news/press-release/raspberry-pi-powered-ultra-small-form-factor-rugged-mission-computer.html)
> Defense Solutions division, a leading supplier of modular open systems approach (MOSA) solutions engineered to succeed, today introduced the Parvus® DuraCOR® Pi, the embedded industry’s first Raspberry Pi (RPi) powered mission computer for defense and aerospace applications.  The ultra-small form factor (USFF) DuraCOR Pi, fully ruggedized to deliver optimal performance in harsh operating environments, is the first mission computer to deliver 100% compatibility with the vast Pi Developer Ecosystem in a fully MIL-STD rugged sealed housing.
- 2022-03-21 [Introduction Plaintext Productivity](https://plaintext-productivity.net/)
> This guide is meant to document the things I have done, the software I have used, and the decisions I have made to be really fast and really well-organized at work, and to help prioritize and maintain focus on my current activities. One key decision, made for speed above all else, is to capture as much of my thinking and work in plaintext as I can. Thus the name: Plaintext Productivity. I will explain my reasoning behind choosing plaintext in each section in which it is relevant.
- 2022-03-23 [jgraph/drawio-desktop: Official electron build of diagrams.net](https://github.com/jgraph/drawio-desktop)
> drawio-desktop is a diagramming and whiteboarding desktop app based on Electron that wraps the core draw.io editor.
![]( _img/20220323130236.png)
- 2022-03-25 [Home React Flow](https://reactflow.dev/)
> A highly customizable React component for building node-based editors and interactive diagrams
![](_img/20220325195419.png)
- 2022-03-26 [Running GUI apps within Docker containers – Trickster Dev](https://www.trickster.dev/post/running-gui-apps-within-docker-containers/)
> Suppose we have Docker installed on macOS or other Unix/Linux system. How do we run Firefox within Docker container? For a first attempt, let us consider the following Dockerfile:
```bash
FROM ubuntu:latest
RUN apt-get update && apt-get install -y firefox x11vnc xvfb
RUN echo "exec firefox" > ~/.xinitrc && chmod +x ~/.xinitrc
CMD ["x11vnc", "-create", "-noxrecord", "-noxfixes", "-noxdamage", "-forever", "-passwd", "trustno1"]
```


## JavaScript

## .NET/ C#

# C / CPP

## Authorization & Authentication

## Video Editing/ GoPro / ffmpeg

