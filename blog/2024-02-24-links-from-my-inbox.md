---
layout: post
title:  "Links from my inbox 2024-02-24"
date:   2024-02-24T13:04:00-08:00
categories: links
---



Well folks, brace yourselves for what might just be the laziest link  dump in the history of link dumps. I've got to admit, this one's a real  gem of laziness, and for that, I offer my sincerest apologies. I wish I  could say I had a good excuse, but the truth is, I was just too lazy to  do any better. So, without further ado, here's a collection of my  thoughts and ideas that may not be my finest work, but hey, we all have  our lazy days, right? Thanks for sticking with me through this lazy  adventure!



## Good reads

Joe Armstrong, one of the creators of Erlang? He said:

> The most reliable parts are not inside the system, they are outside the system. The most reliable part of a computer system is the power switch. You can always turn it off. The next most reliable part is the operating system. [The least reliable part is the application](https://erlang.org/download/armstrong_thesis_2003.pdf)

2024-02-16 [The Three Virtues of a GREAT Programmer](https://thethreevirtues.com/)

> According to Larry Wall(1), the original author of the Perl programming language, there are **three great virtues of a programmer**; Laziness, Impatience and Hubris
>
> 1. 💎 **Laziness**: The quality that makes you go to great effort to reduce overall energy expenditure. It makes you write labor-saving programs that other people will find useful and document what you wrote so you don't have to answer so many questions about it.
> 2. 💎 **Impatience**: The anger you feel when the computer is being lazy. This makes you write programs that don't just react to your needs, but actually anticipate them. Or at least pretend to.
> 3. 💎 **Hubris**: The quality that makes you write (and maintain) programs that other people won't want to say bad things about.

2024-02-06 [Command Line Interface Guidelines](https://clig.dev/)

> An open-source guide to help you write better command-line programs, taking traditional UNIX principles and updating them for the modern day.

2024-02-08 [A Distributed Systems Reading List](https://ferd.ca/a-distributed-systems-reading-list.html)

> This document, curated by Fred Hebert in 2019 and later updated, serves as a comprehensive reading list and primer on distributed systems. It provides foundational theory, practical considerations, and insights into complex topics within the field. Intended for quick reference and discovery, it outlines the basics and links to seminal papers and resources for deeper exploration.
>
> **Foundational Theory**
>
> - **Models**: Discusses synchronous, semi-synchronous, and asynchronous models, with explanations on message delivery bounds and their implications for system design.
> - **Theoretical Failure Modes**: Covers fail-stop, crash, omission, performance, and Byzantine failures, highlighting the complexity of handling faults in distributed environments.
> - **Consensus**: Focuses on the challenge of achieving agreement across nodes, introducing concepts like strong and t-resilient consensuses.
> - **FLP Result**: An influential 1985 paper by Fischer, Lynch, and Patterson stating that achieving consensus is impossible in a purely asynchronous system with even one possible failure.
> - **Fault Detection**: Explores strong and weak fault detectors and their importance following the FLP result.
> - **CAP Theorem**: Explains the trade-offs between consistency, availability, and partition tolerance in distributed systems, including refinements like Yield/Harvest models and PACELC.
>
> **Practical Matters**
>
> - **End-to-End Argument in System Design**: Highlights the necessity of end-to-end acknowledgments for reliability.
> - **Fallacies of Distributed Computing**: Lists common misconceptions that lead to design flaws in distributed systems.
> - **Common Practical Failure Modes**: Provides an informal list of real-world issues, including netsplits, asymmetric netsplits, split brains, and timeouts.
> - **Consistency Models**: Describes various levels of consistency, from linearizability to eventual consistency, and their implications for system behavior.
> - **Database Transaction Scopes**: Discusses transaction isolation levels in popular databases like PostgreSQL, MySQL, and Oracle.
> - **Logical Clocks**: Introduces mechanisms like Lamport timestamps and Vector Clocks for ordering messages or state transitions.
> - **CRDTs (Conflict-Free Replicated Data Types)**: Explains data structures that ensure operations can never conflict, no matter the order of execution.
>
> **Other Interesting Material**
>
> Links to reviews, protocol introductions (Raft, Paxos, ZAB), and influential papers like the Dynamo paper are provided for further exploration of distributed systems.
>
> The document concludes with a recommendation for "Designing Data-Intensive Applications" by Martin Kleppmann, noted as a comprehensive resource that ties together various aspects of distributed systems. However, it's suggested that readers may benefit from foundational knowledge and discussions to fully grasp the material.

2024-01-05 [Managing superstars can drive you crazy - by Anton Zaides](https://zaidesanton.substack.com/p/managing-superstars-can-drive-you)

> _Managing Talented Developers:_
>
> - **Challenge:** "The most talented developers are the hardest to manage."
> - **Strategy:** Instead of hiring multiple average engineers, consider hiring fewer top-tier engineers for better results.
>
> _Challenges with 'Superstars:_
>
> - **Promotion Pressure:** A team full of superstars may constantly seek promotions, creating management difficulties.
> - **Expectations:** Superstars expect continuous challenges and significant projects.
>
> _Types of Developers:_
>
> 1. **Low Ability + High Confidence:** Difficult to work with due to overestimation of their abilities.
> 2. **High Ability + Low Confidence:** Talented developers in need of mentorship.
> 3. **Low Ability + Low Confidence:** May perform better in a different environment.
> 4. **High Ability + High Confidence:** A positive challenge, expecting growth and opportunities.
>
> _Managing Rockstars:_
>
> - **Avoid Overpromising:** Don't promise promotions you can't guarantee.
> - **Listen to Advice:** Consider their suggestions but maintain your decision-making authority.
> - **Avoid Micromanagement:** Trust them to manage their work and approach you when needed.
>
> _Effective Strategies:_
>
> - **Set Clear Goals:** Define specific targets for promotion opportunities.
> - **Delegate Challenging Tasks:** Assign visible and difficult tasks to lay the groundwork for promotion.
> - **Provide Unfiltered Feedback:** Give honest feedback to help them grow.
>
> _dvice from Superstars:_
>
> - **Jordan Cutler:** Help them focus on the right things and avoid being vague in feedback.
> - **Raviraj Achar:** Protect them from burnout and prevent them from disrespecting the team.



## Crossplatform

2024-01-31 [quickemu-project/quickemu: Quickly create and run optimised Windows, macOS and Linux desktop virtual machines.](https://github.com/quickemu-project/quickemu)

> Quickly create and run optimised Windows, macOS and Linux desktop virtual machines.



## Kubernetes

2024-02-07 [Learnings From Our 8 Years Of Kubernetes In Production — Two Major Cluster Crashes, Ditching Self-Managed, Cutting Cluster Costs, Tooling, And More | by Anders Jönsson | Feb, 2024 | Medium](https://medium.com/@.anders/learnings-from-our-8-years-of-kubernetes-in-production-two-major-cluster-crashes-ditching-self-0257c09d36cd)

> Anders Jönsson's article on Medium delves into Urb-it's eight-year journey with Kubernetes, including the shift from AWS to Azure Kubernetes Service (AKS), lessons from two major cluster crashes, and various operational insights. Here's a simplified digest of the key points:
>
> **Early Adoption and Transition**
>
> - Chose Kubernetes early for scalability and container orchestration.
> - Initially self-hosted on AWS, later migrated to AKS for better integration and ease of management.
>
> **Major Cluster Crashes**
>
> - **First Crash**: Due to expired certificates, requiring a complete rebuild.
> - **Second Crash**: Caused by a bug in kube-aws, leading to another certificate expiration issue.
>
> **Key Learnings**
>
> - **Kubernetes Complexity**: Requires dedicated engineers due to its complexity.
> - **Updates**: Keeping Kubernetes and Helm up-to-date is critical.
> - **Helm Charts**: Adopted a centralized Helm chart approach for efficiency.
> - **Disaster Recovery**: Importance of a reliable cluster recreation method.
> - **Secrets Backup**: Essential strategies for backing up and storing secrets.
> - **Vendor Strategy**: Shifted from vendor-agnostic to fully integrating with AKS for benefits in developer experience and cost.
> - **Observability and Security**: Stressed on comprehensive monitoring, alerting, and strict security measures.
>
> **Operational Insights**
>
> - **Monitoring and Alerting**: Essential for maintaining cluster health.
> - **Logging**: Consolidating logs with a robust trace ID strategy is crucial.
> - **Security Practices**: Implementing strict access controls and security measures.
> - **Tooling**: Utilizing tools like k9s for managing Kubernetes resources more efficiently.
>
> **Infrastructure and Tooling Setup**
>
> - **AKS Adoption**: Offered better integration with Azure services.
> - **Elastic Stack**: Transitioned to ELK stack for logging.
> - **Azure Container Registry**: Switched for better integration with Azure.
> - **CI/CD with Drone**: Highlighted its support for container-based builds.



## Golang

2024-02-09 [How I write HTTP services in Go after 13 years](https://grafana.com/blog/2024/02/09/how-i-write-http-services-in-go-after-13-years/) by Mat Ryer

> Mat Ryer, in his blog post on Grafana, shares his refined approach to writing HTTP services in Go after 13 years of experience. This article is an evolution of his practices influenced by discussions, the Go Time podcast, and maintenance experiences. The post is aimed at anyone planning to write HTTP services in Go, from beginners to experienced developers, highlighting the shift in Mat's practices over time and emphasizing testing, structuring, and handling services for maintainability and efficiency.
>
> **Key Takeaways and Practices:**
>
> 1. **Server Construction with `NewServer`**:
>
> - **Approach**: The `NewServer` function is central, taking all dependencies as arguments to return an `http.Handler`, ensuring clear dependency management and setup of middleware for common tasks like CORS and authentication.

```go
  func NewServer(logger *Logger, config *Config, commentStore *commentStore) http.Handler {
    mux := http.NewServeMux()
    // Configuration and middleware setup
    return handler
  }
```

> **Routing with `routes.go`**:
>
> - **Purpose**: Centralizes API route definitions, making it easy to see the service's API surface and ensuring that route setup is consistent and manageable.
> - **Implementation Strategy**: Dependencies are explicitly passed to handlers, maintaining type safety and clarity in handler dependencies.
>
> **Simplified `main` Function**:
>
> - **Design**: Encapsulates the application's entry point, focusing on setup and graceful shutdown, facilitated by a `run` function that encapsulates starting the server and handling OS signals.

```go
  func main() {
    if err := run(); err != nil {
      // Handle error
    }
  }
```

> **Middleware and Handler Patterns**:
>
> - **Middleware**: Adopts the adapter pattern for middleware, allowing pre- and post-processing around handlers for concerns like authorization, without cluttering handler logic.
> - **Handlers**: Emphasizes returning `http.Handler` from functions, allowing for initialization and setup to be done within the handler's closure for isolation and reusability.
>
> **Error Handling and Validation**:
>
> - **Strategy**: Uses detailed error handling and validation within handlers and middleware, ensuring robustness and reliability of the service by catching and properly managing errors.
>
> **Testing**:
>
> - **Philosophy**: Prioritizes comprehensive testing, covering unit to integration tests, to ensure code reliability and ease of maintenance. The structure of the codebase, particularly the use of `run` function, facilitates testing by mimicking real-world operation.
>
> **Performance Considerations**:
>
> - **Optimizations**: Includes strategies for optimizing service performance, such as deferring expensive setup until necessary (using `sync.Once` for lazily initializing components) and ensuring quick startup and graceful shutdown for better resource management.



## Linux

2024-02-15 [systemd by example - Part 1: Minimization - Sebastian Jambor's blog](https://seb.jambor.dev/posts/systemd-by-example-part-1-minimization/)

> Jambor shares his journey to understand systemd, a crucial system and service manager for Linux, by starting with the simplest setup possible and gradually adding complexity. The post encourages hands-on experimentation by running systemd in a container, avoiding risks to the host system.
>
> The article concludes with a functioning, minimal systemd setup comprised of six unit files. This foundational knowledge serves as a platform for further exploration and understanding of systemd's more complex features.
>
> All examples, including unit files and Docker configurations, are available on systemd-by-example.com, facilitating hands-on learning and experimentation.



### The Era of AI

2024-02-21 [Let's build the GPT Tokenizer - YouTube](https://www.youtube.com/watch?v=zduSFxRajkE)

> Let's Build the GPT Tokenizer [video]
>
> 2024-02-21 [Let's Build the GPT Tokenizer  video  | Hacker News](https://news.ycombinator.com/item?id=39443965)
>
> Let's build GPT: from scratch, in code, spelled out.
>
> https://www.youtube.com/watch?v=kCc8FmEb1nY

2024-02-21 [Neural Networks: Zero To Hero](https://karpathy.ai/zero-to-hero.html) Video Lectures

> A course by Andrej Karpathy on building neural networks, from scratch, in code.
>
> We start with the basics of backpropagation and build up to modern deep neural networks, like GPT. In my opinion language models are an excellent place to learn deep learning, even if your intention is to eventually go to other areas like computer vision because most of what you learn will be immediately transferable. This is why we dive into and focus on languade models.
>
> Prerequisites: solid programming (Python), intro-level math (e.g. derivative, gaussian).
>
> [The spelled-out intro to neural networks and backpropagation: building micrograd](https://youtu.be/VMj-3S1tku0)
>
> This is the most step-by-step spelled-out explanation of backpropagation and training of neural networks. It only assumes basic knowledge of Python and a vague recollection of calculus from high school.
>
> [The spelled-out intro to language modeling: building makemore](https://youtu.be/PaCmpygFfXo)
>
> We implement a bigram character-level language model, which we will further complexify in followup videos into a modern Transformer language model, like GPT. In this video, the focus is on (1) introducing torch.Tensor and its subtleties and use in efficiently evaluating neural networks and (2) the overall framework of language modeling that includes model training, sampling, and the evaluation of a loss (e.g. the negative log likelihood for classification).

2024-01-30 [Anil-matcha/Free-GPT-Actions: A listing of Free GPT actions available for public use](https://github.com/Anil-matcha/Free-GPT-Actions/tree/main)

> A listing of Free GPT actions available for public use

2024-02-15 [reorproject/reor: AI note-taking app that runs models locally.](https://github.com/reorproject/reor)

> **Reor** is an AI-powered desktop note-taking app: it automatically links related ideas, answers questions on your notes and provides semantic search. Everything is stored locally and you can edit your notes with an Obsidian-like markdown editor.

2024-01-24 [Code Europe 2023 Closing Keynote by Andrei Alexandrescu (@NVIDIA) – C++hatGPT & AI Tools' Impact - YouTube](https://www.youtube.com/watch?v=trGJsOcA4hY)

> Skill, Test, Creativity

2024-01-27 [rasbt/LLMs-from-scratch: Implementing a ChatGPT-like LLM from scratch, step by step](https://github.com/rasbt/LLMs-from-scratch)

> In Build a Large Language Model (from Scratch), you'll discover how LLMs work from the inside out. In this book, I'll guide you step by step through creating your own LLM, explaining each stage with clear text, diagrams, and examples.



## Lifehack

2024-02-09 ⚫ [Show HN: Improve cognitive focus in 1 minute](https://oneminutefocus.com/)

> 2024-02-09 [Show HN: Improve cognitive focus in 1 minute | Hacker News](https://news.ycombinator.com/item?id=39288039)



## Fun

2024-02-09 [The sinusoidal tetris | andreinc](https://www.andreinc.net/2024/02/06/the-sinusoidal-tetris)

2024-02-12 [Balancing cube – Willem Pennings](https://willempennings.nl/balancing-cube/)

2024-02-15 [Gitlab Meeting Simulator 2024](https://benjamin-brady.github.io/gitlab-simulator/)



## Workplace / Job Interview 

2024-02-09 [kpsingh/SystemDesign: This repo will be having my learning regarding the Design Principles (Low Level Design) and System Design (High Level Design)](https://github.com/kpsingh/SystemDesign/)

> The GitHub repository "SystemDesign" by kpsingh focuses on the author's learning journey regarding **Design Principles** (Low Level Design) and **System Design** (High Level Design). It aims to delve into foundational concepts such  as SOLID principles and design patterns, crucial for understanding both  low and high-level design aspects in software engineering. For those  interested in exploring the nuances of software design, this repository  could serve as a valuable resource. More details can be found on [GitHub](https://github.com/kpsingh/SystemDesign/).

2024-02-09 [adityadev113/Interview-Preparation-Resources: StudyGuide for Software Engineer Interview](https://github.com/adityadev113/Interview-Preparation-Resources)

> The GitHub repository "Interview-Preparation-Resources" by adityadev113  serves as a comprehensive guide for software engineer interview  preparation, containing various resources collected during the author's  own SDE interview preparation journey. This repository is intended to  assist others on the same path by providing a wide range of materials  related to behavioral interviews, computer networks, DBMS, data  structures and algorithms, mock interviews, operating systems, system  design, and more. Additionally, it includes specific documents like  interview questions from Microsoft, important Java questions, and a  roadmap for learning the MERN stack. The repository encourages community contributions to enrich the resources available for interview  preparation. For more detailed information, visit [GitHub](https://github.com/adityadev113/Interview-Preparation-Resources).

2024-02-09 [Interview-Preparation-Resources/Understanding Data Structures and Algorithms/Leetcode Patterns and Problems.md at main · adityadev113/Interview-Preparation-Resources](https://github.com/adityadev113/Interview-Preparation-Resources/blob/main/Understanding%20Data%20Structures%20and%20Algorithms/Leetcode%20Patterns%20and%20Problems.md)

> The document "Leetcode Patterns and Problems" in the  "Interview-Preparation-Resources" repository provides a structured  approach to solving Leetcode problems. It categorizes problems into  specific patterns to help understand and tackle algorithmic challenges  effectively, aiming to enhance problem-solving skills for technical  interviews. For detailed patterns and problems, you can visit the [GitHub page](https://github.com/adityadev113/Interview-Preparation-Resources/blob/main/Understanding Data Structures and Algorithms/Leetcode Patterns and Problems.md).

2024-02-12 [Finding a New Software Developer Job | Henrik Warne's blog](https://henrikwarne.com/2024/02/11/finding-a-new-software-developer-job/)

> ne section I added now was **Behavioral Questions**. These are questions of the form *“Tell me about a time when you disagreed with a coworker. How did you resolve it?”*. Typically, you should answer them using the STAR framework: Situation, Task, Action, Result, Reflection. In the past, I have failed interviews because of these questions – I hadn’t prepared, and couldn’t come up with good examples on the spot in the interviews.
>
> This time I went through a good list of such questions ([Rock the Behavioral Interview](https://leetcode.com/explore/interview/card/leapai/)) from Leetcode, and thought about examples to use. Once I had good examples, I wrote the question and my answer down in the document. Before an interview, I would review what I had written down, so I would be able to come up with good examples. This worked well, I didn’t fail any interviews because of behavioral questions.
>
> In the document I also wrote down little snippets of code in both Python and Go. I tried to cover many common patterns and idioms. I did this so I could refresh my memory and quickly come up with the right syntax in a coding interview. I ran all the snippets first, to see that I hadn’t made any mistake, and included relevant output. Reviewing these snippets before an interview made me feel calmer and more prepared.
>
> I also watched a good video by Gergely Orosz, 🚩 [Confessions from a Big Tech Hiring Manager: Tips for Software Engineering Interviews](https://www.youtube.com/watch?v=vFOw_m5zNCs), on technical interviews in general. Some takeaways: be curious and collaborative, and ask questions.



## C++

2024-02-09 [Playing Video Games One Frame at a Time - Ólafur Waage - Meeting C++ 2023 - YouTube](https://www.youtube.com/watch?v=nYoIiUc3u3o)

> 2024-02-09 [microsoft/Detours: Detours is a software package for monitoring and instrumenting API calls on Windows. It is distributed in source code form.](https://github.com/microsoft/Detours)
>
> Detours is a software package for monitoring and instrumenting API calls on Windows. It is distributed in source code form.

2024-02-09 [TerryCavanagh/VVVVVV: The source code to VVVVVV! http://thelettervsixtim.es/](https://github.com/TerryCavanagh/VVVVVV)

> This is the source code to VVVVVV, the 2010 indie game by [Terry Cavanagh](http://distractionware.com/), with music by [Magnus Pålsson](http://souleye.madtracker.net/). You can read the [announcement](http://distractionware.com/blog/2020/01/vvvvvv-is-now-open-source/) of the source code release on Terry's blog!
>
> 2024-02-09 [Playing Video Games One Frame at a Time - Ólafur Waage - Meeting C++ 2023 - YouTube](https://www.youtube.com/watch?v=nYoIiUc3u3o)
>
> 2024-02-09 [VVVVVV on Steam](https://store.steampowered.com/app/70300/VVVVVV/) $4.99

2024-01-06 [Back to Basics: Iterators in C++ - Nicolai Josuttis - CppCon 2023 - YouTube](https://www.youtube.com/watch?v=26aW6aBVpk0)

2024-02-18 [All C++20 core language features with examples | Oleksandr Koval’s blog](https://oleksandrkvl.github.io/2021/04/02/cpp-20-overview.html)

2024-02-18 [20 Smaller yet Handy C++20 Features - C++ Stories](https://www.cppstories.com/2022/20-smaller-cpp20-features/)



## Distributed Systems

[Data Structures for Data-Intensive Applications: Tradeoffs and Design Guidelines](https://cs-people.bu.edu/mathan/publications/fnt23-athanassoulis.pdf)

> Manos Athanassoulis
> Stratos Idreos and Dennis Shasha
> Boston University, USA; mathan bu.edu
> Harvard University, USA; stratos seas.harvard.edu
> New York University, USA; shasha cs.nyu.edu
>
> ABSTRACT 
>
> Key-value data structures constitute the core of any datadriven system. They provide the means to store, search, and modify data residing at various levels of the storage and memory hierarchy, from durable storage (spinning disks, solid state disks, and other non-volatile memories) to random access memory, caches, and registers. Designing efficient data structures for given workloads has long been a focus of research and practice in both academia and industry. This book outlines the underlying design dimensions of data structures and shows how they can be combined to support (or fail to support) various workloads. The book further shows how these design dimensions can lead to an understanding of the behavior of individual state-of-the-art data structures and their hybrids. Finally, this systematization of the design space and the accompanying guidelines will enable you to select the most fitting data structure or even to invent an entirely new data structure for a given workload.



## Seattle 

2024-02-09 🌎 [nearbywiki Fairview Avenue North Bridge](https://en.nearbywiki.org/map/discover/62994596#15/47.6191/-122.3258)

> Explore interesting places nearby listed on Wikipedia



## Ideas

2024-02-24 [Tommy's inclusive datepicker](https://fymmot.github.io/inclusive-dates/)

2024-02-06 [Kaptr.me - Capture, share and save data with live screenshots of any app or website](https://kaptr.me/)

2024-02-07 [Web based logs viewer UI for local development environment | Logdy](https://logdy.dev/blog/post/web-based-logs-viewer-ui-for-local-development-environment)



### Dark Souls 2

2024-02-01 📌 [Some more translated DS2 Kouryakubo Maps (WIP, edited for SotFS) : DarkSouls2](https://www.reddit.com/r/DarkSouls2/comments/apav5b/some_more_translated_ds2_kouryakubo_maps_wip/)

> JP Kouryakubo Maps http://www.kouryakubo.com/darksouls2/index.html

2024-02-12 [Dark Souls 2 Design Works : Free Download, Borrow, and Streaming : Internet Archive](https://archive.org/details/dark-souls-2-design-works/page/n55/mode/2up)



### Bigdata

2024-01-31 [timeplus-io/proton: A streaming SQL engine, a fast and lightweight alternative to Apache Flink, 🚀 powered by ClickHouse.](https://github.com/timeplus-io/proton)



## CSS (Research)

2024-02-16 [sass/sass: Sass makes CSS fun!](https://github.com/sass/sass)

2024-02-16 💲📺 [Creating a Living Style Guide with Sass and Vanilla JavaScript | Pluralsight](https://app.pluralsight.com/library/courses/creating-living-style-guide-sass-vanilla-javascript/table-of-contents)

2024-02-16 [Atomic Design Methodology | Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/)

2024-02-20 [You Might Not Need Sass: Modern CSS Techniques](https://mjswensen.com/blog/you-might-not-need-sass-modern-css-techniques/)

2024-02-21 [Stepping away from Sass](https://cathydutton.co.uk/posts/why-i-stopped-using-sass/)



## Web Dev Stuff

2024-01-28 [In Loving Memory of Square Checkbox @ tonsky.me](https://tonsky.me/blog/checkbox/)

2024-01-30 ⭐  [Web Components in Earnest](https://naildrivin5.com/blog/2024/01/24/web-components-in-earnest.html)

> Found in: 2024-01-30 [JavaScript Weekly Issue 672: January 25, 2024](https://javascriptweekly.com/issues/672)

2024-01-30 [How to start a React Project in 2024](https://www.robinwieruch.de/react-starter/)

> Found in: 2024-01-30 [JavaScript Weekly Issue 672: January 25, 2024](https://javascriptweekly.com/issues/672)

2024-01-30  [pretty-ms 9.0: Convert Milliseconds to Readable Strings](https://javascriptweekly.com/link/150535/ccd9409267) — `1337000000` → `15d 11h 23m 20s`

> Found in: 2024-01-30 [JavaScript Weekly Issue 672: January 25, 2024](https://javascriptweekly.com/issues/672)

2024-01-30 [TypeSpec](https://typespec.io/)

> Found in: 2024-01-30 [JavaScript Weekly Issue 672: January 25, 2024](https://javascriptweekly.com/issues/672)
> A language for concisely describing cloud service APIs and generating other API description languages (e.g. OpenAPI), client and service code, docs, and more. Formerly known as CADL. – GitHub repo.

2024-02-23 [JavaScript Bloat in 2024 @ tonsky.me](https://tonsky.me/blog/js-bloat/)



### Json to code

> Convert JSON to classes/code

- [https://app.quicktype.io](https://app.quicktype.io/)

- https://mholt.github.io/json-to-go/

- https://curlconverter.com/go/



## Lisp

2024-01-30 [Colin Woodbury - A Tour of the Lisps](https://www.fosskers.ca/en/blog/rounds-of-lisp)

