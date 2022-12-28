---
layout: post
title:  "Links from my inbox 2022-12-28"
date:   2022-12-28T13:25:00-08:00
categories: links
---

## Good reads
2022-12-28 [Advice on being managed](https://dynomight.net/managed/)

  > When you shift from being managed to also sometimes managing others, you have a predictable shift in perspective and a lot of obvious-in-retrospect insights. In the spirit of “saying obvious things is good” here are a few.
  >
  > - Be honest
  > - Be straightforward
  > - Be a joy to work with
  > - Remember why managers exist
  > - Your manager is also being managed

2022-12-14 [How does GPT Obtain its Ability? Tracing Emergent Abilities of Language Models to their Sources](https://yaofu.notion.site/How-does-GPT-Obtain-its-Ability-Tracing-Emergent-Abilities-of-Language-Models-to-their-Sources-b9a57ac0fcf74f30a1ab9e3e36fa1dc1)

> There are three important abilities that the initial GPT-3 exhibit:
>
> - **Language generation**: to follow a prompt and then generate a completion of the given prompt. Today, this might be the most ubiquitous way of human-LM interaction.
> - **In-context learning**: to follow a few examples of a given task and then generate the solution for a new test case. It is interesting to note that, although being a language model, the original GPT-3 paper barely talks about “language modeling” — the authors devoted their writing efforts to their visions of in-context learning, which is the real focus of GPT-3.
> - **World knowledge**: including factual knowledge and commonsense.
>
> Where do these abilities come from?
>
> Generally, the above three abilities should come from large-scale pretraining — to pretrain the 175B parameters model on 300B tokens (60% 2016 - 2019 C4 + 22% WebText2 + 16% Books + 3% Wikipedia). Where:
>
> - The **language generation** ability comes from the language modeling **training objective**.
> - The **world knowledge** comes from the 300B token **training corpora** (or where else it could be).
> - The **175B model size** is for **storing knowledge**, which is further evidenced by Liang et al. (2022), who conclude that the performance on tasks requiring knowledge correlates with model size.
> - The source of the **in-context learning** ability, as well as its generalization behavior, **is still elusive**. Intuitively, this ability may come from the fact that data points of the same task are ordered sequentially in the same batch during pretraining. Yet there is little study on why language model pretraining induces in-context learning, and why in-context learning behaves so differently than fine-tuning.


## Fun

2022-12-16 [Meet Ghostwriter, a haunted AI-powered typewriter that talks to you Ars Technica](https://arstechnica.com/information-technology/2022/12/meet-ghostwriter-a-haunted-ai-powered-typewriter-that-talks-to-you/)

> On Wednesday, a designer and engineer named Arvind Sanjeev revealed his process for creating Ghostwriter, a one-of-a-kind repurposed Brother typewriter that uses AI to chat with a person typing on the keyboard. The "ghost" inside the machine comes from OpenAI's GPT-3, a large language model that powers ChatGPT. The effect resembles a phantom conversing through the machine.
>
> ![image-20221228135459292](./2022-12-28-links-from-my-inbox.assets/image-20221228135459292.png)

2022-12-15 [Recursive Game of Life: Life Universe](https://oimo.io/works/life/)

  > ![image-20221228140420376](./2022-12-28-links-from-my-inbox.assets/image-20221228140420376.png)



## How the things work

2022-12-27 [A Guide to the Terminal, Console, and Shell](https://thevaluable.dev/guide-terminal-shell-console/)

> So, since it’s so useful, let’s look a bit deeper what’s this shell, console, and terminal. More precisely, we’ll see, in this article:
>
> - The legacy of physical teletypes in Unix-based systems.
> - What are virtual consoles (TTY).
> - What are pseudoterminals.
> - What’s the shell.
> - How to customize a terminal.

## Apps and tools

2022-12-27 [Amazing AI — Sindre Sorhus](https://sindresorhus.com/amazing-ai) (Stable Diffusion)

> Stable Diffusion now with UI for Mac

2022-12-26 [Squoosh](https://squoosh.app/)

> This app lets you compress images for the web
> ![image-20221228133423925](./2022-12-28-links-from-my-inbox.assets/image-20221228133423925.png)

2022-12-15 [Riffusion](https://www.riffusion.com/about)

> Stable Diffusion fine-tuned to generate MusicThis is the v1.5 stable diffusion model with no modifications, just fine-tuned on images of spectrograms paired with text. Audio processing happens downstream of the model.
>
> It can generate infinite variations of a prompt by varying the seed. All the same web UIs and techniques like img2img, inpainting, negative prompts, and interpolation work out of the box.
>
> Code: https://github.com/riffusion/riffusion
> Discord: https://discord.gg/yu6SRwvX4v

## Projects
2022-12-15 [lettier/3d-game-shaders-for-beginners: 🎮 A step-by-step guide to implementing SSAO, depth of field, lighting, normal mapping, and more for your 3D game.](https://github.com/lettier/3d-game-shaders-for-beginners)

> ![game1111](./2022-12-28-links-from-my-inbox.assets/game1111.gif)

2022-12-21 [List of Chromium Command Line Switches « Peter Beverloo](https://peter.sh/experiments/chromium-command-line-switches/) 

> There are lots of command lines which can be used with the Google Chrome browser. Some change behavior of features, others are for debugging or experimenting. This page lists the available switches including their conditions and descriptions. 

2022-12-20 [I built a $5 chat app with Pocketbase & Svelte. Will it scale? - YouTube](https://www.youtube.com/watch?v=gUYBFDPZ5qk)
  >  [PocketBase - Open Source backend in 1 file](https://pocketbase.io/) Open Source backend for your next SaaS and Mobile app in 1 file

2022-12-19 [How to rebuild social media on top of RSS](https://tfos.co/p/rebuild-social-media/)

  > and we should look for ways to make these reading, publishing, and community services all play nicely together. I'm calling this model "the unbundled web," and I think RSS should be the primary method of interop. (The term "decentralized" has already been co-opted by all those bitcoin people, so I'm using "unbundled" as a synonym with less baggage.)


## X-Files

2022-12-27 [Amazon Packages Burn in India, Last Stop in Broken Plastic Recycling System](https://www.bloomberg.com/features/2022-india-plastic-recycling-pollution/)

> Muzaffarnagar, a city about 80 miles north of New Delhi, is famous in India for two things: colonial-era freedom fighters who helped drive out the British and the production of jaggery, a cane sugar product boiled into goo at some 1,500 small sugar mills in the area. Less likely to feature in tourism guides is Muzaffarnagar’s new status as the final destination for tons of supposedly recycled American plastic.
> ![image-20221228132944334](./2022-12-28-links-from-my-inbox.assets/image-20221228132944334.png)

## JavaScript / Web

2022-12-16 [fart.js - the premier javascript fart library, by jsfart.com](https://fartjs.com/)
2022-12-16 [Let it snow! Embed a snow effect on your website](https://embed.im/snow/)
2022-12-16 [Vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/)

2022-12-14 [JavaScript APIs You Don’t Know About — Smashing Magazine](https://www.smashingmagazine.com/2022/09/javascript-api-guide/#web-share-api) 

> - navigator.canShare()

```js
const shareButton = document.querySelector("#share-button");

const shareQuote = async (shareData) => {
    try {
        await navigator.share(shareData);
    } catch (error) {
        console.error(error);
    }
};

shareButton.addEventListener("click", () => {
    let shareData = {
        title: "A Beautiful Quote",
        text: quote.textContent,
        url: location.href,
    };

    shareQuote(shareData);
});
```



## C#

2022-12-19 [HashCode.Combine Method System Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/system.hashcode.combine?view=net-7.0)

  > Note to my future self! Combines values into a hash code.

## Videos

I have watched lots of talks during my vacation; here are some interesting ones.

### C++

2022-12-28 [Concurrency Patterns - Rainer Grimm - CppCon 2021 - YouTube](https://www.youtube.com/watch?v=A3DQxZCtKqo&list=PLHTh1InhhwT6bY4nS4p7f5b_754myC3ze&index=4)

>  This one is about the OOP C++ Concurrency patterns, like this one for locks:
>
> ![image-20221228132809167](./2022-12-28-links-from-my-inbox.assets/image-20221228132809167.png)

### C#

2022-12-14 [Back to Basics: Efficient Async and Await - Filip Ekberg - NDC Porto 2022 - YouTube](https://www.youtube.com/watch?v=XEeeYTG3hUg) 

> ![image-20221228140614204](./2022-12-28-links-from-my-inbox.assets/image-20221228140614204.png)
> Pluralsight: http://bit.ly/ps-async

### DDD - Domain-Driven Design

2022-12-26 [Share Pie: The DDD Treasure Hidden in Plain Sight - Nick Tune - NDC Oslo 2022 - YouTube](https://www.youtube.com/watch?v=xi-zv3dRWfk)

> 33:47: The Domain Drives You, And You Drive the Domain
>
> - Event Storming 
> - Example Mapping 
> - Github repo:  [Domain-Driven Design Crew](https://github.com/ddd-crew)

### Mental Wellbeing

2022-12-24 [I'm just trying to keep my head above water - Chris Klug - NDC Oslo 2022 - YouTube](https://www.youtube.com/watch?v=8q050zzV8oo)

> A software engineer is sharing his experience with depression and visiting "some ones"

### Projects

2022-12-20 [Practical Pipelines: A Houseplant Soil Alerting System with ksqlDB - Danica Fine - NDC Oslo 2022 - YouTube](https://www.youtube.com/watch?v=UgzMj8mO9KA)
  > Houseplants can be hard – in many cases, over- and under-watering can have the same symptoms. Take away the guesswork involved in caring for your houseplants while also gaining valuable experience in building a practical, event-driven pipeline in your own home! This talk explores the process of building a houseplant monitoring and alerting system using a Raspberry Pi and Apache Kafka.
  > Moisture and temperature readings are captured from sensors in the soil and streamed into Kafka. From here, we’ll use stream processing to transform the data, creating a summary view of the current state and driving real-time push alerts to your phone through Telegram. In this session, I’ll talk about how I ingest the data, followed by a look at the tools, including ksqlDB and Kafka Connect, that will help transform the raw data into useful information.
