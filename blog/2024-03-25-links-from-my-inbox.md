---
layout: post
title:  "Links from my inbox 2024-03-25"
date:   2024-03-25T22:07:00-07:00
categories: links
---



## Good reads

2024-02-29 [All you need is Wide Events, not “Metrics, Logs and Traces”](https://isburmistrov.substack.com/p/all-you-need-is-wide-events-not-metrics)

> The article, authored by Ivan Burmistrov on February 15, 2024, presents a critique of the current observability paradigm in the tech industry, which is traditionally built around **metrics, logs, and traces**. Burmistrov argues that this model, despite being widely adopted and powered by Open Telemetry, contributes to a state of confusion regarding its components and their respective roles in observability.
>
> Burmistrov suggests a shift towards a simpler, more unified approach to observability, advocating for the use of **Wide Events**. This concept is exemplified by Scuba, an observability system developed at Meta (formerly Facebook), which Burmistrov praises for its simplicity, efficiency, and ability to handle the exploration of data without preconceived notions about what one might find—effectively addressing the challenge of **unknown unknowns**.
>
> **Key points** highlighted in the article include:
>
> - **Observability's Current State**: The article starts with a reflection on the confusion surrounding basic observability concepts like traces, spans, and logs, attributed partly to Open Telemetry's complex presentation of these concepts.
> - **The Concept of Wide Events**: Burmistrov introduces Wide Events as a more straightforward and flexible approach to observability. Wide Events are essentially collections of fields and values, akin to a JSON document, that encompass all relevant information about a system's state or event without the need for predefined structures or classifications.
> - **Scuba - An Observability Paradise**: The author shares his experiences with Scuba at Meta, highlighting its capability to efficiently process and analyze Wide Events. Scuba allows users to "slice and dice" data, exploring various dimensions and metrics to uncover insights about anomalies or issues within a system, all through a user-friendly interface.
> - **Post-Meta Observability Landscape**: Upon leaving Meta, Burmistrov expresses disappointment with the external observability tools, which seem to lack the simplicity and power of Scuba, emphasizing the industry's fixation on the traditional trio of metrics, logs, and traces.
> - **Advocacy for Wide Events**: The article argues that Wide Events can encapsulate the functionalities of traces, logs, and metrics, thereby simplifying the observability landscape. It suggests that many of the current observability practices could be more naturally and effectively addressed through Wide Events.
> - **Call for a Paradigm Shift**: Burmistrov calls for observability vendors to adopt and promote simpler, more intuitive systems like Wide Events. He highlights Honeycomb and Axiom as examples of platforms moving in this direction, encouraging others to follow suit to demystify observability and enhance its utility.

2024-02-29 [Scheduling Internals](https://tontinton.com/posts/scheduling-internals/)

> This post delves into the complex and fascinating world of **concurrency**, aiming to elucidate its mechanisms and how various programming models and languages implement it. The author seeks to demystify concurrency by answering key questions and covering topics such as the difference between concurrency and parallelism, the concept of coroutines, and the implementation of preemptive and non-preemptive schedulers. The discussion spans several programming languages and systems, including Node.js, Python, Go, Rust, and operating system internals, offering a comprehensive overview of concurrency's theoretical foundations and practical applications.
>
> **Concurrency vs. Parallelism**: The post distinguishes between concurrency — the ability to deal with multiple tasks at once — and parallelism — the ability to execute multiple tasks simultaneously. This distinction is crucial for understanding how systems can perform efficiently even on single-core processors by managing tasks in a way that makes them appear to run in parallel.
>
> **Threads and Async I/O**: Initially, the text explores the traditional approach of creating a thread per client for concurrent operations and quickly transitions into discussing the limitations of this method, such as the overhead of context switching and memory allocation. The narrative then shifts to asynchronous I/O operations as a more efficient alternative, highlighting non-blocking I/O and the use of event loops to manage concurrency without the heavy costs associated with threads.
>
> **Event Loops and Non-Preemptive Scheduling**: The author introduces event loops as a core concept in managing asynchronous operations, particularly in environments like Node.js, which uses libuv as its underlying library. By employing an event loop, applications can handle numerous tasks concurrently without dedicating a separate thread to each task, leading to significant performance gains and efficiency.
>
> **Preemptive Scheduling**: Moving beyond cooperative (non-preemptive) scheduling, where tasks must yield control voluntarily, the discussion turns to preemptive scheduling. This model allows the system to interrupt and resume tasks autonomously, ensuring a more equitable distribution of processing time among tasks, even if they don't explicitly yield control.
>
> **Coroutines and Their Implementation**: Coroutines are presented as a flexible way to handle concurrency, with the post explaining the difference between stackful and stackless coroutines. Stackful coroutines, similar to threads but more lightweight, have their own stack, allowing for traditional programming models. In contrast, stackless coroutines, used in languages like Python and Rust, break tasks into state machines and require tasks to be explicitly marked as asynchronous.
>
> **Scheduling Algorithms**: The article covers various scheduling algorithms used by operating systems and programming languages to manage task execution, including FIFO, Round Robin, and more sophisticated algorithms like those used by Linux (CFS and SCHED_DEADLINE) and Go's scheduler. These algorithms determine how tasks are prioritized and executed, balancing efficiency and fairness.
>
> **Multi-Core Scheduling**: Lastly, the post touches on the challenges and strategies for scheduling tasks across multiple CPU cores, including task stealing, which allows idle cores to take on work from busier ones, optimizing resource utilization and performance across the system.
>
> This comprehensive overview of concurrency aims to provide readers with a solid understanding of how modern systems achieve high levels of efficiency and responsiveness. Through detailed explanations and examples, the post illuminates the intricate mechanisms that allow software to handle multiple tasks simultaneously, whether through managing I/O operations, leveraging coroutines, or employing advanced scheduling algorithms.

2024-03-01 [You’ve just inherited a legacy C++ codebase, now what?](https://gaultier.github.io/blog/you_inherited_a_legacy_cpp_codebase_now_what.html)

> Inheriting a legacy **C++ codebase** often feels like a daunting task, presenting a blend of complexity, idiosyncrasies, and challenges. This article delineates a strategic approach to revitalize such a codebase, focusing on minimizing effort while maximizing security, developer experience, correctness, and performance. The process emphasizes practical, incremental improvements over sweeping changes, aiming for a sustainable engineering practice.
>
> **Key Steps to Revitalize a Legacy C++ Codebase:**
>
> 1. **Initial Setup and Minimal Changes:** Start by setting up the project locally with the least amount of changes. Resist the urge for major refactorings at this stage.
> 2. **Trim the Fat:** Remove all unnecessary code and features that do not contribute to the core functionality your project or company advertises.
> 3. **Modernize the Development Process:** Integrate modern development practices like Continuous Integration (CI), linters, fuzzers, and auto-formatters to improve code quality and developer workflow.
> 4. **Incremental Code Improvements:** Make small, incremental changes to the codebase, ensuring it remains functional and more maintainable after each iteration.
> 5. **Consider a Rewrite:** If feasible, contemplate rewriting parts of the codebase in a memory-safe language to enhance security and reliability.
>
> **Strategic Considerations for Effective Management:**
>
> - **Get Buy-in:** Before diving into technical improvements, secure support from stakeholders by clearly articulating the benefits and the sustainable approach of your plan.
> - **Support and Documentation:** Ensure the codebase can be built and tested across all supported platforms, documenting the process to enable easy onboarding and development.
> - **Performance Optimization:** Identify and implement quick wins to speed up build and test times without overhauling existing systems.
> - **Quality Assurance Enhancements:** Adopt linters and sanitizers to catch and fix bugs early, and integrate these tools into your CI pipeline to maintain code quality.
> - **Code Health:** Regularly prune dead code, simplify complex constructs, and upgrade to newer C++ standards when it provides tangible benefits to the project.
>
> **Technical Insights:**
>
> - Utilize compiler warnings and tools like **cppcheck** to identify and remove unused code.
> - Incorporate **clang-tidy** and **cppcheck** for static code analysis, balancing thoroughness with the practicality of fixing identified issues.
> - Use **clang-format** to enforce a consistent coding style, minimizing diffs and merge conflicts.
> - Apply **sanitizers** (e.g., `-fsanitize=address,undefined`) to detect and address subtle bugs and memory leaks.
> - Implement a **CI pipeline** to automate testing, linting, formatting, and other checks, ensuring code quality and facilitating reproducible builds across environments.

2024-03-07 [Making CRDTs 98% More Efficient | jakelazaroff.com](https://jakelazaroff.com/words/making-crdts-98-percent-more-efficient/)

> This article explores the process of making Conflict-free Replicated Data Types (CRDTs) significantly more efficient, reducing their size by nearly 98% through a series of compression techniques. Starting from a state-based CRDT for a collaborative pixel art editor that initially required a whopping 648kb to store the state of a 100x100 image, the author demonstrates a methodical approach to compressing this data to just about 14kb. The journey to this substantial reduction involves several steps, each building upon the previous to achieve more efficient storage.
>
> **Hex Codes**: The initial step was converting RGB values to hex codes, which compacted the representation of colors from up to thirteen characters to a maximum of eight, or even five if the channel values are identical.
>
> **UUID Table**: A significant improvement came from replacing repetitive UUIDs in each pixel's data with indices to a central UUID table, saving considerable space due to the reduction from 38 characters per UUID to much smaller indices.
>
> **Palette Table**: Similar to the UUID table, a palette table was introduced to replace direct color values with indices, optimizing storage for images with limited color palettes.
>
> **Run-Length Encoding (RLE)**: For the spatial component, RLE was applied to efficiently encode sequences of consecutive blank spaces, drastically reducing the space needed to represent unoccupied areas of the canvas.
>
> **Binary Encoding**: Transitioning from JSON to a binary format offered a major leap in efficiency. This approach utilizes bytes directly for storage, significantly compacting data representation. The binary format organizes data into chunks, each dedicated to specific parts of the state, such as UUIDs, color palettes, and pixel data.
>
> **Run-Length Binary Encoding**: The final and most significant compression came from applying run-length encoding within the binary format, further optimizing the storage of writer IDs, colors, and timestamps separately. This approach significantly reduced redundancy and exploited patterns within each category of data, ultimately achieving the goal of reducing the CRDT's size by 98%.

2024-03-08 [Fundamentals of Data Visualization: 29 Telling a story and making a point](https://clauswilke.com/dataviz/telling-a-story.html)

> Effective data visualization is more than just presenting data; it's about telling a story that resonates with the audience. This approach bridges the gap between complex insights and audience understanding, making abstract data engaging and accessible.
>
> **Key Elements of Storytelling in Data Visualization:**
>
> - **Narrative Structure:** A well-constructed story, whether based on the Opening-Challenge-Action-Resolution format or other structures, captivates by guiding the audience from a set-up through a challenge, towards a resolution.
> - **Visualization Sequence:** Rather than relying on a single static image, a sequence of visualizations can more effectively convey the narrative arc, illustrating the journey from problem identification to solution.
> - **Clarity and Simplicity:** Visualizations should be straightforward, avoiding unnecessary complexity to ensure the audience can easily grasp the core message. This is akin to "making a figure for the generals," emphasizing clear and direct communication.
> - **Memorability through Visual Elements:** Employing techniques like isotype plots, which use pictograms or repeated images to represent data magnitudes, can make data visualizations more memorable without sacrificing clarity.
> - **Diversity in Visualization:** Utilizing a variety of visualization types within a narrative helps maintain audience interest and differentiates between narrative segments, ensuring each part contributes uniquely to the overarching story.
> - **Progression from Raw Data to Derived Quantities:** Starting with visualizations close to the raw data establishes a foundation for understanding, onto which more abstract, derived data representations can build, highlighting key insights and trends.

2024-03-12 [Breaking Down Tasks - Jacob Kaplan-Moss](https://jacobian.org/2024/mar/11/breaking-down-tasks/)

> In a management group, someone asked for resources on teaching planning. I shared a link to [this series on estimation](https://jacobian.org/series/estimation/), but quickly they came back and told me that there was something missing. The previous parts in this series assume you’re starting with a clearly defined task list, but the people this manager is teach aren’t there yet. They need help with an earlier step: “breaking down” a project into a clearly defined set of tasks.

> Bonus: estimating this project

Because this a series on estimation, it seems reasonable to complete the work and produce an estimate for this project:

| Task                            | Complexity | Uncertainty | Expected (days) | Worst-case (days) |
| :------------------------------ | :--------- | :---------- | :-------------- | :---------------- |
| 1. model data                   | x-small    | low         | 0.5             | 0.5               |
| 2a. weekly view                 | x-small    | low         | 0.5             | 0.5               |
| 2b. home page view              | x-small    | low         | 0.5             | 0.5               |
| 2c. monthly view                | x-small    | low         | 0.5             | 0.5               |
| 2d. browsing                    | small      | low         | 1               | 1.1               |
| 3. dynamic week                 | small      | low         | 1               | 1.1               |
| 4a. streak calculation          | medium     | moderate    | 3               | 4.5               |
| 4b. streak display              | x-small    | low         | 0.5             | 0.5               |
| 4c. streak recalculation        | medium     | low         | 3               | 3.3               |
| 5a. freeze accumulation         | medium     | moderate    | 3               | 4.5               |
| 5b. prevent double accumulation | small      | extreme     | 1               | 5                 |
| 5c. freeze spending             | small      | moderate    | 1               | 1.5               |
|                                 |            | **Total**:  | **15.5 days**   | **23.5 days**     |



2024-03-13 🍀 [40 years of programming](https://liw.fi/40/)

> 	10 PRINT "HELLO"
> 	20 GOTO 10
>
>
> In April, 1984, my father bought a computer for his home office, a [Luxor ABC-802](https://en.wikipedia.org/wiki/ABC_800#ABC_802), with a Z80 CPU, 64 kilobytes of RAM, a yellow-on-black screen with 80 by 25 text mode, or about 160 by 75 pixels in graphics mode, and two floppy drives. It had BASIC in its ROM, and came with absolutely no games. If I wanted to play with it, I had to learn how to program, and write my own games. I learned BASIC, and over the next few years would learn Pascal, C, and more. I had found my passion. I was 14 years old and I knew what I wanted to do when I grew up.
>
> When I was learning how to program, I thought it was important to really understand how computers work, how programming languages work, and how various tools like text editors work. I wanted to hone my craft and produce the finest code humanly possible. I was wrong.
>
> **On doing work**
> When making a change, make only one change at a time. If you can, split the change you're making into smaller partial changes. Small changes are easier to understand and less likely to be catastrophic.
>
> Automate away friction: running tests, making a release, packaging, delivery, deployment, etc. Do this from as early on as feasible. Set up a pipeline where you can make a change and make sure the software still works and willing users can start using the changed software. The smoother you can make this pipeline, the easier it will be to build the software.
>
> 
>
> **Developing a career**
> You can choose to be a deep expert on something very specific, or to be a generalist, or some mix. Choose wisely. There may not be any wrong choice, but every choice has consequences.
>
> Be humble. Be Nanny, not Granny. People may respect the powerful witch more, but they like the kind one better.
>
> Be open and honest. Treat others fairly. You don't have to believe in karma for it to work, so make it work for you, not against you.
>
> Help and lift up others. But at the same time, don't allow others to abuse or take advantage of you. You don't need to accept bullshit. Set your boundaries.
>
> Ask for help when you need it, or when you get stuck. Accept help when offered.
>
> I am not the right person to talk about developing a career, but when I've done the above, things have usually ended up going well.



## Algorithms

2024-03-14 [The Myers diff algorithm: part 1 – The If Works](https://blog.jcoglan.com/2017/02/12/the-myers-diff-algorithm-part-1/)

2024-03-14 [The Myers diff algorithm: part 2 – The If Works](https://blog.jcoglan.com/2017/02/15/the-myers-diff-algorithm-part-2/)

2024-03-14 [Quick binary diffs with XDelta – The If Works](https://blog.jcoglan.com//2024/01/04/quick-binary-diffs-with-xdelta/)





## Formats

2024-03-12 [JSON Canvas — An open file format for infinite canvas data.](https://jsoncanvas.org/)

>  An open file format for infinite canvas data.
>
>  Infinite canvas tools are a way to view and organize information spatially, like a digital whiteboard. Infinite canvases encourage freedom and exploration, and have become a popular interface pattern across many apps.
>
>  The JSON Canvas format was created to provide longevity, readability, interoperability, and extensibility to data created with infinite canvas apps. The format is designed to be easy to parse and give users [ownership over their data](https://stephango.com/file-over-app). JSON Canvas files use the `.canvas` extension.
>
>  JSON Canvas was originally created for [Obsidian](https://obsidian.md/blog/json-canvas/). JSON Canvas can be implemented freely as an import, export, and storage format for any app or tool. This site, and all the resources associated with JSON Canvas are [open source](https://github.com/obsidianmd/jsoncanvas) under the MIT license.

## Rust

2024-03-03 [joaocarvalhoopen/How_to_learn_modern_Rust: A guide to the adventurer.](https://github.com/joaocarvalhoopen/How_to_learn_modern_Rust)

> This guide provides a roadmap for learning Rust, a systems programming language known for its safety, concurrency, and performance features. It systematically covers everything from basic concepts to advanced applications in Rust programming.
>
> **Getting Started with Rust**
>
> - Explore the reasons behind Rust's popularity among developers.
> - Engage with introductory videos and tutorials to get a handle on Rust's syntax and foundational concepts.
> - Deep dive into "The Rust Programming Language Book" for an extensive understanding.
>
> **Advancing Your Knowledge**
>
> - Tackle text processing in Rust and understand Rust's unique memory management system with lifetimes and ownership.
> - Delve into Rust's mechanisms for polymorphism and embrace test-driven development (TDD) for robust software development.
> - Discover the nuances of systems programming and how to use Rust for writing compilers.
>
> **Specialized Development**
>
> - Explore the capabilities of Rust in WebAssembly (WASM) for developing web applications.
> - Apply Rust in embedded systems for creating efficient and safe firmware.
>
> **Expanding Skills and Community Engagement**
>
> - Investigate how Rust can be utilized in web frameworks, SQL databases, and for rapid prototyping projects.
> - Learn about interfacing Rust with Python to enhance performance.
> - Connect with the Rust community through the Rust Foundation, blogs, and YouTube channels for insights and updates.
>
> **Practical Applications**
>
> - Experiment with GUI and audio programming using Rust to build interactive applications.
> - Dive into the integration of machine learning in Rust projects.
> - Undertake embedded projects on hardware platforms like Raspberry Pi and ESP32 for hands-on learning.



## C && C++

2024-03-09 [GitHub - pocoproject/poco: The POCO C++ Libraries are powerful cross-platform C++ libraries for building network- and internet-based applications that run on desktop, server, mobile, IoT, and embedded systems.](https://github.com/pocoproject/poco)

> The POCO C++ Libraries are powerful cross-platform C++ libraries for building network- and internet-based applications that run on desktop, server, mobile, IoT, and embedded systems.
>
> 📺 [Günter Obiltschnig - 10 years of Poco C++ Libraries - Meeting C++ 2015 Lightning Talks - YouTube](https://www.youtube.com/watch?v=riw7sQ61gSU)

2024-03-12 [rkaehn/cr_task.h: Header-only library for asynchronous tasks in C](https://github.com/rkaehn/cr_task.h)

2024-03-13 [Syllo/nvtop: GPU & Accelerator process monitoring for AMD, Apple, Huawei, Intel, NVIDIA and Qualcomm](https://github.com/Syllo/nvtop)

2024-03-22 [The Real C++ Killers (Not You, Rust)](https://wordsandbuttons.online/the_real_cpp_killers.html)



## Security

2024-03-02 [Use KeePassXC to sign your git commits](https://code.mendhak.com/keepassxc-sign-git-commit-with-ssh/)

2024-03-02 [microsoft/Security-101: 7 Lessons, Kick-start Your Cybersecurity Learning.](https://github.com/microsoft/Security-101)

2024-03-04 [Identity, authentication, and authorisation from the ground up](https://apuchitnis.substack.com/p/identity-authentication-and-authorisation/)

> In a detailed exploration of identity, authentication, and authorization, this article delves into the intricate mechanisms that applications utilize to authenticate users. The text breaks down the complex topic into digestible segments, each addressing a different aspect of the authentication process, from traditional passwords to cutting-edge WebAuthn standards. It not only clarifies the distinctions between identity, authentication, and authorization but also highlights the challenges and trade-offs associated with various authentication methods. The article emphasizes the importance of choosing the right authentication strategy to balance security concerns with user experience.
>
> 1. **Authentication Basics**: Authentication is the process of verifying a user's identity, typically through something the user knows (like a password), owns (like a phone), or is (biometric data). The article sets the stage by explaining how critical authentication is in the digital realm, affecting both user access and system security.
> 2. **Knowledge-based Authentication**: This traditional method relies on passwords, PINs, or passphrases. However, it's fraught with challenges such as secure storage, vulnerability to attacks, and user inconvenience due to forgotten passwords. The process involves hashing passwords for secure storage, yet it's still vulnerable to various attacks and creates friction for users.
> 3. **Ownership-based Authentication**: This method involves verifying something the user owns, like an email inbox or phone number, often through one-time passwords (OTPs) or hardware like YubiKeys. Although more secure and user-friendly than knowledge-based methods, it still has drawbacks, including potential delays in OTP delivery and security concerns with SMS-based authentication.
> 4. **WebAuthn and Public-key Cryptography**: A modern approach to authentication, WebAuthn uses public-key cryptography to enable secure, passwordless authentication. It leverages the concept of a public/private key pair, where the private key is securely stored on the user's device, and the public key is shared with the service. This method significantly enhances security and user experience by eliminating passwords and reducing phishing risks.
> 5. **Multi-factor Authentication and Biometrics**: The article discusses how WebAuthn can be combined with biometrics or other forms of verification for multi-factor authentication, providing an additional layer of security and convenience.
> 6. **Cross-device Authentication Challenges**: While WebAuthn offers a streamlined authentication process, managing authentication across multiple devices presents challenges, including the risk of losing access if a device is lost.
> 7. **Identity-based Authentication**: This method relies on third-party identity providers like Google or Facebook to verify user identity. While convenient, it introduces the risk of access being revoked by the identity provider, highlighting the need for user-owned identity solutions.
>
> The article concludes by acknowledging the ongoing innovation in authentication technologies and the quest for secure, user-friendly methods that respect individual sovereignty. It underscores the evolving landscape of digital authentication and the importance of staying informed about these developments to ensure secure and efficient access to digital services.



## Software Design

2024-02-25 [Larger Scale Software Development (and a Big Trap) - YouTube](https://www.youtube.com/watch?v=slV0zdUEYJw)



## WebComponents

2024-03-01 [lamplightdev - Streaming HTML out of order without JavaScript](https://lamplightdev.com/blog/2024/01/10/streaming-html-out-of-order-without-javascript/)

> This analysis explores a technique for **streaming HTML content out-of-order** using **Shadow DOM**, illustrated through a demo where an app shell is rendered first, followed by content that loads asynchronously and out of sequence. The method, which doesn't rely on JavaScript or any specific framework, leverages the advantages of **streaming HTML** from the server to the browser in chunks, allowing for immediate rendering of parts of the page, and the **Declarative Shadow DOM** to manage content in isolation and out of order.
>
> Key Concepts and Techniques
>
> - **Streaming HTML**: A method where HTML is sent in chunks from the server to the browser as it's generated, improving perceived load times by showing content progressively.
> - **Shadow DOM**: A web standard for encapsulating parts of a DOM to keep features private to a component. This can be used with any HTML element to create isolated sections of the DOM.
> - **Declarative Shadow DOM (DSD)**: A browser feature that allows Shadow DOMs to be created on the server side without JavaScript, enabling the browser to render them directly.
>
>  Implementation Details
>
> 1. **Server Support**: A server capable of streaming responses, such as Hono, is required. The technique is not limited to JavaScript-based servers and can be applied across various backend technologies.
> 2. **Templating with Streaming Support**: Utilizing a templating language or library that supports streaming, like SWTL, simplifies the process by handling asynchronous data and streaming seamlessly.
> 3. **Declarative Shadow DOM for Order-Independent Rendering**: By employing DSD, developers can specify how parts of the page should be encapsulated and loaded without relying on JavaScript, ensuring content loads correctly regardless of the order it's streamed.

2024-03-05 [Web Components Will Outlive Your JavaScript Framework | jakelazaroff.com](https://jakelazaroff.com/words/web-components-will-outlive-your-javascript-framework/)

> The article by Jake Lazaroff discusses the lasting value of **web components** over the transient nature of JavaScript frameworks. It starts with the  author's project experience, opting for vanilla JS web components for a  blog post series on **CRDTs** to include interactive demos. This decision was guided by the principle that the examples, although  built with HTML, CSS, and JS, were content, not code, emphasizing their  portability and independence from specific tech stacks or frameworks.
>
> **Key Takeaways:**
>
> - **Web Components** offer a robust solution for creating reusable and encapsulated HTML elements, ensuring content portability across different platforms and frameworks.
> - **Markdown** and plain text files have facilitated content migration and compatibility across various content management systems, highlighting the shift towards more flexible and framework-agnostic content strategies.
> - The encapsulation and isolation provided by **shadow DOM** in web components are crucial for maintaining consistent styles and behaviors, analogous to native web elements.
> - Choosing **vanilla JavaScript** and standard web technologies over frameworks or libraries can mitigate dependencies and maintenance challenges, promoting longevity and stability in web development.
> - The resilience of the web as a platform is underscored by its ability to preserve backward compatibility, ensuring that even the earliest websites remain functional on modern browsers.
>
> See also:
>
> 2024-03-05 [WebComponents Will Outlive Your JavaScript Framework | Prime Reacts - YouTube](https://www.youtube.com/watch?v=1vF6puwX3bE)



## Fun / Art

2024-02-26 [eyes](https://demo.marpi.pl/eyes/)

> Animated eyes

2024-03-01 [GitHub - SuperTux/supertux: SuperTux source code](https://github.com/SuperTux/supertux)

> SuperTux is a jump'n'run game with strong inspiration from the Super Mario Bros. games for the various Nintendo platforms.
>
> Run and jump through multiple worlds, fighting off enemies by jumping on them, bumping them from below or tossing objects at them, grabbing power-ups and other stuff on the way.



## CSS

2024-03-23 [magick.css](https://css.winterveil.net/)

> [ Show HN: magick.css – Minimalist CSS for Wizards](https://css.winterveil.net/) 

2024-03-01 [How To Center a Div](https://www.joshwcomeau.com/css/center-a-div/)

> For a long time, centering an element within its parent was a surprisingly tricky thing to do. As CSS has evolved, we've been granted more and more tools we can use to solve this problem. These days, we're spoiled for choice!
>
> I decided to create this tutorial to help you understand the trade-offs between different approaches, and to give you an arsenal of strategies you can use, to handle centering in all sorts of scenarios.
>
> Honestly, this turned out to be *way more interesting* than I initially thought 😅. Even if you've been using CSS for a while, I bet you'll learn at least 1 new strategy!

2024-03-04 [CSS for printing to paper](https://voussoir.net/writing/css_for_printing)

> At work, one of the things I do pretty often is write print generators in HTML to recreate and replace forms that the company has traditionally done handwritten on paper or in Excel. This allows the company to move into new web-based tools where the form is autofilled by URL parameters from our database, while getting the same physical output everyone's familiar with.
>
> This article explains some of the CSS basics that control how your webpages look when printed, and a couple of tips and tricks I've learned that might help you out.
>
> [sample_cheatsheet.html](https://voussoir.net/writing/css_for_printing/sample_cheatsheet.html)

```html
<!DOCTYPE html>
<html>
<style>
@page
{
    size: Letter portrait;
    margin: 0;
}
html
{
    box-sizing: border-box;
}
*, *:before, *:after
{
    box-sizing: inherit;
}

html,
body
{
    margin: 0;
    background-color: lightblue;
}

header
{
    background-color: white;
    max-width: 8.5in;
    margin: 8px auto;
    padding: 8px;
}

article
{
    background-color: white;
    padding: 0.5in;
    width: 8.5in;
    height: 11in;

    /* For centering the page on the screen during preparation */
    margin: 8px auto;
}

@media print
{
    html,
    body
    {
        background-color: white !important;
    }
    body > header
    {
        display: none;
    }
    article
    {
        margin: 0 !important;
    }
}
</style>

<body>
    <header>
        <p>Some help text to explain the purpose of this generator.</p>
        <p><button onclick="return window.print();">Print</button></p>
    </header>

    <article>
        <h1>Sample page 1</h1>
        <p>sample text</p>
    </article>

    <article>
        <h1>Sample page 2</h1>
        <p>sample text</p>
    </article>
</body>
</html>

```



## Dev Tools

2024-03-02 [Textadept](https://orbitalquark.github.io/textadept/)

> Textadept is a fast, minimalist, and remarkably extensible cross-platform text editor.
>
> 2024-03-02 [orbitalquark/textadept: Textadept is a fast, minimalist, and remarkably extensible cross-platform text editor for programmers.](https://github.com/orbitalquark/textadept)

2024-02-28 [Testcontainers](https://testcontainers.com/)

> Testcontainers is an open source framework for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container.

2024-02-29 [Show HN: SQL workbench in the browser | Hacker News](https://news.ycombinator.com/item?id=39537794)

> The **Hacker News** thread showcases a vibrant discussion among developers who are exploring the potential of **WebAssembly (WASM)** for various database and data visualization projects. These projects leverage WASM to run complex applications directly in the browser, eliminating the need for server-side processing and enabling powerful data manipulation and analysis capabilities client-side.
>
> **9dev** shared their experience of getting sidetracked while developing a **file browser** for managing database files using the **WASM build of SQLite**. This detour led to the creation of a multi-modal **CSV file editor** capable of displaying CSV files as sortable tables, powered by a streaming, web worker-based parser.
>
> **Simonw** discussed utilizing a WASM build of **Python** and SQLite to run the **Datasette server-side web application** entirely in the browser. This setup allows executing SQL queries against data files, such as a parquet file containing **AWS edge locations**, demonstrating a novel approach to processing and analyzing data client-side.
>
> **Tobilg** introduced the **SQL Workbench**, built on **DuckDB WASM**, **Perspective.js**, and **React**, supporting queries on remote and local data (Parquet, CSV, JSON), data visualizations, and sharing of queries via URL. A tutorial blog post was mentioned for guidance on common usage patterns, signaling a resource for developers interested in in-browser data engineering.
>
> The discussion also touched on **Perspective.js**, highlighted by **paddy_m** as a powerful and fast table library primarily used in finance, and **dav43**, who integrated it into **datasette.io** as a plugin to handle large datasets. This conversation underscores the utility and versatility of Perspective.js in data-intensive applications.

2024-02-29 [Paste to Markdown](https://euangoddard.github.io/clipboard2markdown/)

> 2024-02-29 [GitHub - euangoddard/clipboard2markdown: Convert rich-text on your clipbaord to markdown](https://github.com/euangoddard/clipboard2markdown)

2024-02-29 [pql](https://pql.dev/)

> pql is an open-source pipelined query language that translates to SQL and is written in Go

```
users
    | where eventTime > minus(now(), toIntervalDay(1))
    | project user_id, user_email
```

```
users
| project user_id=id, user_email
| as userTable
| join kind=leftouter (
  workspace_members
) on user_id
```

> Hmm... reminds me... Kusto ;)

> Why did we build pql?
> Splunk, Sumologic, and Microsoft all have proprietary languages similar to pql. Open source databases can't compete because they all support SQL. pql is meant to bridge that gap by providing a simple but powerful interface.



## Test Automation

2024-03-08 [Ultimate Guide to Visual Testing with Playwright](https://www.browsercat.com/post/ultimate-guide-visual-testing-playwright)

> Found in https://javascriptweekly.com/issues/678
>
> 

2024-03-14 [lavague-ai/LaVague: Automate automation with Large Action Model framework](https://github.com/lavague-ai/LaVague)

> Automate automation with Large Action Model framework

2024-03-14 [The Playwright Test Generator](https://playwright.dev/docs/codegen) 

> I don't know why I’ve not linked this before, as it’s *so* useful. [Playwright](https://javascriptweekly.com/link/152612/ccd9409267) isn’t just a library for controlling browsers from JavaScript, but also includes a tool for generating tests and page navigation code from your own interactions. Hit record, do stuff, and code is written. 
> Found in:
> 2024-03-15 [JavaScript Weekly Issue 679: March 14, 2024](https://javascriptweekly.com/issues/679)



## Software!

2024-03-01 [Welcome | Superset](https://superset.apache.org/)

> Apache Superset™ is an open-source modern data exploration and visualization platform.

2024-03-05 [Puter](https://puter.com/) The Internet OS

> Puter is a privacy-first personal cloud to keep all your files, apps, and games in one secure place, accessible from anywhere at any time.
>
> 2024-03-05 [HeyPuter/puter: The Internet OS!](https://github.com/HeyPuter/puter)
>
> [Show HN: 3 years and 1M users later, I just open-sourced my "Internet OS"](https://github.com/HeyPuter/puter)

2024-03-08 [BlockNote - Javascript Block-Based React rich text editor](https://www.blocknotejs.org/)

> Found in https://javascriptweekly.com/issues/678
>
> A 'Notion-Like' Block-Based Text Editor — 0.12.0 is a significant release for this ProseMirror and TipTap-based editor that lets you drag and drop blocks, add real-time collaboration, add customizable ‘slash command’ menus, and more. It has an all new homepage, too, along with new examples.

2024-03-12 [Kdenlive 24.02.0 released - Kdenlive](https://kdenlive.org/en/2024/03/kdenlive-24-02-0-released/)

> 



## The Era of AI

2024-02-26 [Reddit: How advanced are your prompt techniques? : ChatGPTPro](https://www.reddit.com/r/ChatGPTPro/comments/1axv4qz/how_advanced_are_your_prompt_techniques/)

> [Zaki_1052_](https://www.reddit.com/user/Zaki_1052_/)
>
> I'm guessing you're thinking of Chain of Thought, and the research is a bit outdated but still applicable. [Here are some links](https://github.com/Zaki-1052/GPTPortal?tab=readme-ov-file#research-papers) i put on github if you want to do some reading. The main idea behind it is the whole "let's think step by step to verify your answer", extrapolated to the process of:
>
> 1. Assigning an expert role
> 2. Iterating a purpose or task
> 3. describing the process needed to complete the task
> 4. leaving room for correction/error-checking
> 5. restating the objective as an overall goal
>
> You'll usually want things like "Stop and think carefully out loud about the best way to solve this problem. verify your answer step by step in a systematic process, and periodically review your thinking, backtracking on any possible errors in reasoning, and creating a new branch when needed." This is the very broad concept behind Tree of Thought, which is said to be CoT's successor. Personally, I'll sometimes include a little preamble in chat that seems to mitigate some of the issues from their obscenely long [system pre-prompt](https://github.com/spdustin/ChatGPT-AutoExpert/blob/main/_system-prompts/all_tools.md), which mine goes something like:
>
> > Before you begin, *take a deep breath* and **Think Carefully**.
> >
> > You **MUST** be **accurate** & able to help me get correct answers; the Stakes are *High* & *Need Compute*!
> >
> > Your **systematic** *step-by-step process* and *self-correction* via *Tree of Thoughts* will enhance the **quality** of responses to complex queries.
> >
> > All adopted **EXPERT Roles** = *Qualified Job/Subject Authorities*.
> >
> > Take *multiple turns* as needed to comply with *token limits*; interrupt yourself to ask to continue, and do *not* condense responses unless *specifically* asked.
> >
> > **Optimize!**
>
> Otherwise, I like to follow the usual role and tone modifiers, with controls for verbosity and other small prompt-engineering techniques.
>
> ```
> ## **Custom Instructions**
> 
> - **Tone**: *Professional/Semi-Formal*
> - **Length**: *Highest Verbosity Required*
> - **Responses**: *Detailed, thorough, in-depth, complex, sophisticated, accurate, factual, thoughtful, nuanced answers with careful precise reasoning.*
> - **Personality**: *Intelligent, logical, analytical, insightful, helpful, honest, proactive, knowledgeable, meticulous, informative, competent.*
> 
> ## Methods
> 
> - *Always*: Assume **Roles** from a **Mixture of Experts**
>   - (e.g. Expert Java programmer/developer, Chemistry Tutor, etc.)
>     - allows you to *best complete tasks*.
> - **POV** = *Advanced Virtuoso* in queried field!
> - Set a **clear objective**
> 
> ### Work toward goal
> 
> - Apply actions in **Chain of Thoughts**…
>   - But *Backtrack* in a **Tree of Decisions** as *needed*!
> 
> ### Accuracy
> 
> - *Reiterate* on Responses
> - *Report* & **Correct Errors** - *Enhance Quality*!
>   - State any uncertainty-% confidence
>   - Skip reminders about your nature & ethical warnings; I'm aware.
> 
> #### Avoid Average Neutrality
> 
> - Vary *Multiple* Strong Opinions/Views
> - Council of *Debate/Discourse*
> - Emulate *Unique+Sophisticated* Writing Style
> 
> ### Verbosity Adjusted with “V=#” Notation
> 
> - V1=Extremely Terse
> - V2=Concise
> - *DEFAULT: V3=Detailed!*
> - V4=Comprehensive
> - V5=Exhaustive+Nuanced Detail; Maximum Depth/Breadth!
>   - If omitted, *extrapolate*-use your best judgment.
> 
> ### Other
> 
> - Assume **all** necessary *expert subject roles* & *length*
> - **Show** set *thoughts*
> - Lower V for simple tasks-remain **coherent**
> - Prioritize *Legibility* / **Be Readable**
> - *Summarize Conclusions*
>   - Use **Markdown**!
> 
> ## **Important**: *Be*
> 
> - *Organic+Concise>Expand*
> - **Direct**-NO generic filler/fluff.
> - **Balance** *Complexity & Clarity*
> - **ADAPT!**
> - Use **HIGH EFFORT**!
> - *Work/Reason* **Systematically**!
> - **Always** *Think Step by Step* & *Verify Processes*!
> ```
>
> My Custom GPTs, for example, all follow a relatively similar format (pastebin links to the prompts):
>
> - [NotesGPT](https://pastebin.com/xUmNwnzv)
> - [CalculusGPT](https://pastebin.com/RHdaw8cs)
> - [Summarization](https://pastebin.com/qGC8pHeV)
> - [Chemistry](https://pastebin.com/ttwei10m)
> - [Grammar](https://pastebin.com/71NFvhsS)
>
> Hope that gives you an idea of what I mean. The GPTs themselves are linked [here](https://github.com/Zaki-1052/GPTPortal?tab=readme-ov-file#author-links--custom-gpts) and I have the full file of my instructions I use with the API here, to give you a reference point of my usual structure: https://github.com/Zaki-1052/GPTPortal/blob/main/public/instructions.md

2024-02-28 [RecurseChat](https://recurse.chat/)

> 2024-02-28 [Show HN: I made an app to use local AI as daily driver | Hacker News](https://news.ycombinator.com/item?id=39532367)
>
> > Was testing apps like this if anyone is interested:
> >
> > Best / Easy to use:
> >
> > \- [https://lmstudio.ai](https://lmstudio.ai/)
> >
> > \- [https://msty.app](https://msty.app/)
> >
> > \- [https://jan.ai](https://jan.ai/)
> >
> > More complex / Unpolished UI:
> >
> > \- [https://gpt4all.io](https://gpt4all.io/)
> >
> > \- [https://pinokio.computer](https://pinokio.computer/)
> >
> > \- [https://www.nvidia.com/en-us/ai-on-rtx/chat-with-rtx-generat...](https://www.nvidia.com/en-us/ai-on-rtx/chat-with-rtx-generative-ai/)
> >
> > \- https://github.com/LostRuins/koboldcpp
> >
> > Misc:
> >
> > \- [https://faraday.dev](https://faraday.dev/) (AI Characters):
> >
> > No UI / Command line (not for me):
> >
> > \- [https://ollama.com](https://ollama.com/)
> >
> > \- [https://privategpt.dev](https://privategpt.dev/)
> >
> > \- [https://serge.chat](https://serge.chat/)
> >
> > \- https://github.com/Mozilla-Ocho/llamafile
> >
> > Pending to check:
> >
> > \- [https://recurse.chat](https://recurse.chat/)
> >
> > Feel free to recommend more!
