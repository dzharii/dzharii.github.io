---
layout: post
title:  "Links from my inbox 2026-10-02"
date:   2026-10-02T23:30:00-07:00
categories: links
---



![image-20261002234311469](2026-10-02-links-from-my-inbox.assets/image-20261002234311469.png)

## Think about AI coding, ownership, and engineering responsibility

2026-09-23 [Rails World 2026 Opening Keynote - DHH](https://www.youtube.com/watch?v=vDjW_dRyKXY) { youtube.com }

> ![](2026-10-02-links-from-my-inbox.assets/01.jpg)
>
> DHH argues that hand-written production code is becoming economically obsolete and that engineers increasingly program by describing outcomes in natural language. He presents 37signals' move toward agent-generated native apps and Rust as evidence that AI changes the economics of implementation. This is the primary material for the two responses below.

2026-09-24 [What About Rails?](https://jardo.dev/what-about-rails) { jardo.dev }

> ![](2026-10-02-links-from-my-inbox.assets/02.jpg)
>
> Jared Norman responds directly to DHH's keynote. He questions generated lines of code as a productivity metric, challenges the idea that generated code rarely needs to be read, and asks what DHH's new direction means for Rails itself.

2026-09-26 [Coding Is NOT Solved](https://blog.alexewerlof.com/p/coding-is-not-solved) { blog.alexewerlof.com }

> ![](2026-10-02-links-from-my-inbox.assets/03.jpg)
>
> Alex Ewerlof argues that cheaper code generation does not solve software engineering because production systems still require understanding, reliability, security, maintenance, and accountability. The central point is ownership: AI can generate code, but humans still bear the consequences when the system fails.



## Useful engineering side notes

2026-09-23 [Two git ignore files nobody told me about](https://mihai.dinculescu.dev/posts/two-git-ignore-files-nobody-told-me-about/) { mihai.dinculescu.dev }

> ![](2026-10-02-links-from-my-inbox.assets/04.jpg)
>
> Git has two useful ignore mechanisms beyond repository `.gitignore`: `.git/info/exclude` for private rules specific to one clone, and a global ignore file for machine-wide clutter. `.git/info/exclude` is particularly useful for personal agent plans, scratch files, and other repository-local artifacts that should never be committed.



## Programming humor

2026-09-05 [Bespoke: A Programming Language for People Who Say Please](https://blog.hofstede.it/bespoke-a-programming-language-for-people-who-say-please/) { blog.hofstede.it }

> ![](2026-10-02-links-from-my-inbox.assets/05.jpg)
>
> A programming-language parody built around extreme British politeness. Mutation requires an apology, commands become courteous requests, exceptions become "Regrettable Circumstances," and even concurrency has etiquette. It commits to the joke all the way through the language design.

2026-09-08 [On the Navier-Stokes Millennium Prize Problem](https://openai.com/index/navier-stokes-solution/) { openai.com }

> ![](2026-10-02-links-from-my-inbox.assets/06.jpg)
>
> In September 2026, OpenAI announced that an internal AI system had produced a proposed solution to the Navier-Stokes existence and smoothness problem, including a Lean formalization. The problem had remained unresolved for roughly 90 years. OpenAI says its construction shows smooth fluid dynamics developing a finite-time singularity and says it does not intend to claim the Millennium Prize. [OpenAI](https://openai.com/index/navier-stokes-solution/?utm_source=chatgpt.com)
>
> So apparently one AI system can attack a 90-year-old Millennium Prize Problem. This provides useful context for the next breakthrough.

2026-09-18 [Claude Code v2.1.277 - AGENTS.md support](https://github.com/anthropics/claude-code/releases/tag/v2.1.277) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/07.jpg)
>
> Two weeks later, Anthropic tackled another famously stubborn computer-science problem: reading a Markdown file. Claude Code v2.1.277 officially added `AGENTS.md` support, so when a project has no `CLAUDE.md`, Claude Code can read `AGENTS.md` instead. [GitHub](https://github.com/anthropics/claude-code/releases?utm_source=chatgpt.com)

2026-09-20 [Claude Code issue #95690 - A local feature locked behind a remote switch](https://github.com/anthropics/claude-code/issues/95690) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/08.jpg)
>
> Unfortunately, the local-file-reading breakthrough had an implementation detail: the reporter found that support was gated by a remote Anthropic feature flag. With non-essential traffic disabled, or in some gateway, Bedrock, or Vertex-style environments, the gate could fail and Claude Code would silently not read the local file. Navier-Stokes: apparently tractable. `AGENTS.md`: distributed systems problem. [GitHub](https://github.com/anthropics/claude-code/issues/95690?utm_source=chatgpt.com)

2026-10-02 [M5 Ultra Mac Studio Review: The Dream Mac for Local AI Agents](https://www.macstories.net/stories/m5-ultra-mac-studio-review-the-dream-mac-for-local-ai-agents/) { macstories.net }

> ![](2026-10-02-links-from-my-inbox.assets/09.jpg)
>
> If the solution to cloud AI is obviously "buy an enormous Mac," this is the machine. Federico Viticci tests an M5 Ultra Mac Studio as a host for persistent local agents and finds that its large unified-memory pool and much faster prompt processing make long-running local agent loops genuinely practical. The tested machine had 256 GB of RAM; Apple increased M5 Ultra memory bandwidth to 1.2 TB/s, and Viticci reports substantially better long-context agent performance than on his M3 Ultra. [MacStories](https://www.macstories.net/stories/m5-ultra-mac-studio-review-the-dream-mac-for-local-ai-agents/?utm_source=chatgpt.com)



## Run engineering work in a disciplined way

2026-10-02 [pstack](https://github.com/backnotprop/pstack) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/10.jpg)
>
> A broad set of skills and engineering principles for making coding agents investigate before changing code, choose an appropriate workflow, verify their work, and avoid low-quality high-throughput coding. `/poteto-mode` routes work across debugging, features, refactoring, performance, architecture, autonomous runs, and other workflows.

2026-10-02 [Matt Pocock's skills](https://github.com/mattpocock/skills) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/11.jpg)
>
> A composable collection for moving engineering work from fuzzy requirements through specification, tickets, implementation, TDD, debugging, review, and architecture. Useful when you want individual workflows that can be combined rather than one monolithic process.

2026-10-02 [Superpowers](https://github.com/obra/superpowers) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/12.jpg)
>
> An opinionated development workflow that stops an agent from jumping directly from request to code. It pushes work through design, planning, isolated implementation, TDD, debugging, review, and final verification.

2026-10-02 [Everything Claude Code / ECC](https://github.com/affaan-m/ECC) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/13.jpg)
>
> A larger operating setup for coding agents combining skills, specialized agents, hooks, rules, memory, security, orchestration, and verification. Its main value is treating those pieces as one engineering workflow rather than unrelated prompts and plugins.



## Decide what to build and avoid unnecessary code

2026-10-02 [Ponytail](https://github.com/DietrichGebert/ponytail) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/14.jpg)
>
> Gives agents a "lazy senior developer" rule: first ask whether anything needs to be built, then look for existing code, standard-library functionality, native platform features, or an installed dependency before adding custom code.

2026-10-02 [Ponytail core rules](https://github.com/DietrichGebert/ponytail/blob/main/.clinerules/ponytail.md) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/15.jpg)
>
> The compact decision policy behind Ponytail. Minimal implementation is the default, while security, accessibility, data integrity, and other real requirements are explicitly protected from over-aggressive simplification.

2026-10-02 [Ponytail Review](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-review/SKILL.md) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/16.jpg)
>
> Reviews a change specifically for unnecessary complexity: code that can disappear, wrappers that add no value, functionality that should be reused, or custom implementations that native features can replace.

2026-10-02 [Ponytail Audit](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-audit/SKILL.md) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/17.jpg)
>
> Applies the same anti-over-engineering analysis across a larger codebase and looks for accumulated deletion and simplification opportunities.

2026-10-02 [Ponytail Debt](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-debt/SKILL.md) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/18.jpg)
>
> Tracks deliberately simple implementations that have a known ceiling, including the concrete condition that should trigger replacing them later.

2026-10-02 [Reddit: I gave Claude Code a "lazy senior dev" mode](https://www.reddit.com/r/ClaudeCode/comments/1u3jlo0/i_gave_claude_code_a_lazy_senior_dev_mode_and_it/) { reddit.com }

> ![](2026-10-02-links-from-my-inbox.assets/19.jpg)
>
> The original Ponytail discussion, including practical debate about the central tradeoff: reducing unnecessary code without accidentally deleting important safety or readability.

2026-10-02 [don't-reinvent](https://github.com/Emanuelel/dont-reinvent) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/20.jpg)
>
> Inserts a decision gate before non-trivial implementation: Free vs. Build vs. Buy. Existing projects are supposed to be checked for licensing, maintenance, source quality, and dependency risk rather than accepted because they have many GitHub stars.

2026-10-02 [Reddit: Built a skill to search and vet an existing repository before building](https://www.reddit.com/r/claudeskills/comments/1w0nqtq/built_a_skill_to_search_and_vet_any_available/) { reddit.com }

> ![](2026-10-02-links-from-my-inbox.assets/21.jpg)
>
> The launch discussion captures the motivation well: AI makes producing new code feel nearly free, while ownership, debugging, maintenance, and edge cases remain expensive.



## Specify what should be built

2026-10-02 [write-product-spec](https://www.skills.sh/warpdotdev/common-skills/write-product-spec) { skills.sh }

> ![](2026-10-02-links-from-my-inbox.assets/22.jpg)
>
> Creates a behavioral `PRODUCT.md` before implementation. It focuses on what users can do, expected behavior, edge cases, and invariants, while leaving types, modules, algorithms, and other implementation choices for a separate technical specification.



## Write and explain things clearly

2026-10-02 [ASD-STE100 Simplified Technical English](https://www.asd-ste100.org/) { asd-ste100.org }

> ![](2026-10-02-links-from-my-inbox.assets/23.jpg)
>
> A controlled-language standard for technical documentation. It reduces ambiguity through explicit writing rules, stable terminology, simpler sentence structures, and restricted meanings for words. It is a stronger foundation than simply telling an LLM to "write clearly."

2026-10-02 [SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/24.jpg)
>
> Turns ASD-STE100 ideas into an installable agent skill. It pushes LLM documentation toward literal wording, explicit actors, stable terminology, concrete requirements, and clearly described failure conditions.

2026-10-02 [pstack technical-writing](https://github.com/cursor/plugins/blob/main/pstack/skills/technical-writing/SKILL.md) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/25.jpg)
>
> A practical writing standard for RFCs, README files, design documents, PR descriptions, and commit messages. It emphasizes concrete developer language, stable terminology, useful structure, and low reader effort.

2026-10-02 [pstack unslop](https://github.com/cursor/plugins/blob/main/pstack/skills/unslop/SKILL.md) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/26.jpg)
>
> Removes recurring LLM prose habits without flattening the intended voice. It targets filler, stock AI vocabulary, vague attribution, canned contrasts, and inflated phrasing through explicit rules.

2026-09-20 [I Don't Want to Read What You Didn't Write](https://blog.colinbreck.com/i-dont-want-to-read-what-you-didnt-write/) { blog.colinbreck.com }

> ![](2026-10-02-links-from-my-inbox.assets/27.jpg)
>
> Colin Breck argues that AI can make writing cheap for the author while making reading expensive for everybody else. His preferred workflow is human-authored prose with AI used for verification, omissions, citations, editing, and simplification rather than outsourcing the thinking performed through writing.



## Reduce cognitive load for the human

2026-10-02 [pstack principle-minimize-reader-load](https://github.com/cursor/plugins/blob/main/pstack/skills/principle-minimize-reader-load/SKILL.md) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/28.jpg)
>
> Treats maintainability as the amount of work required to understand a system. It tries to reduce how many abstraction layers a reader must trace and how much hidden or mutable state they must hold in working memory.

2026-10-02 [HumanLayer skills](https://github.com/humanlayer/skills) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/29.jpg)
>
> A small collection of agent skills containing `show-me` and related HumanLayer workflows. Useful as the parent repository for installation and discovery.

2026-10-02 [show-me](https://github.com/humanlayer/skills/blob/main/plugins/show-me/skills/show-me/SKILL.md) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/30.jpg)
>
> Helps agents choose a compact visual representation instead of explaining everything through prose. Depending on the problem, it can use pseudocode, call trees, component trees, diffs, Mermaid diagrams, or focused HTML.

2026-10-02 [Hacker News: /show-me - agent skill for compact visual representations](https://news.ycombinator.com/item?id=49274489) { news.ycombinator.com }

> ![](2026-10-02-links-from-my-inbox.assets/31.jpg)
>
> Discussion around the practical value of giving coding agents a visual explanation vocabulary instead of letting them default to long textual explanations.

2026-10-02 [i-have-adhd](https://github.com/ayghri/i-have-adhd) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/32.jpg)
>
> Changes the interaction style of coding agents so the action is easy to find: lead with the next step, keep lists bounded, suppress tangents, make progress visible, and avoid unnecessary preambles and repeated summaries.

2026-10-02 [Reddit: i-have-adhd - stop your coding assistant from burying the answer](https://www.reddit.com/r/BestGitHubRepos/comments/1w45orc/ihaveadhd_a_skill_that_stops_your_ai_coding/) { reddit.com }

> ![](2026-10-02-links-from-my-inbox.assets/33.jpg)
>
> Community discussion centered on reducing AI rambling and making the useful action immediately visible during long coding sessions.

## Find bugs, verify changes, and prevent recurrence

2026-09-14 [Brownfield Agentic Engineering](https://addyosmani.com/blog/brownfield-agentic-engineering/) { addyosmani.com }

> ![](2026-10-02-links-from-my-inbox.assets/34.jpg)
>
> Addy Osmani explains why mature codebases require more agent discipline: the repository does not contain all of the historical, operational, and organizational constraints of the real system. He recommends codebase archaeology, durable context, characterization tests, independent verification, and scaling autonomy according to blast radius and recoverability.

2026-10-02 [bug-echo](https://github.com/Terryc21/bug-echo) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/35.jpg)
>
> After fixing one bug, `bug-echo` derives the broken pattern from the change and searches the repository for similar instances. The useful idea is to turn a real defect into a temporary codebase-specific static-analysis rule.

2026-10-02 [Reddit: Four Claude Code skills I built for my own app](https://www.reddit.com/r/claudeskills/comments/1vx6m67/four_claude_code_skills_i_built_for_my_own_app/) { reddit.com }

> ![](2026-10-02-links-from-my-inbox.assets/36.jpg)
>
> The discussion where `bug-echo` was introduced. The most useful part concerns false positives and the pre-fix validation step used before searching the whole repository.



## Preserve context and memory

2026-10-02 [gbrain](https://github.com/garrytan/gbrain) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/37.jpg)
>
> Gives agents persistent memory that is explicit, sourced, correctable, and shareable across agent environments. Important facts become controlled data that can be searched and revised instead of disappearing with a conversation.

2026-10-02 [context-mode](https://github.com/mksglu/context-mode) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/38.jpg)
>
> Protects the active context window from huge tool outputs. Large files, logs, command output, and fetched data are processed or indexed outside the model, and only the useful result comes back into context.

2026-10-02 [context-mode skill](https://github.com/mksglu/context-mode/blob/main/skills/context-mode/SKILL.md) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/39.jpg)
>
> The core rule is essentially "think in code": when an agent needs to inspect a large amount of information, write a small computation to analyze it instead of loading all the raw data into the LLM.

2026-10-02 [Hacker News: Context Mode - 315 KB of MCP output becomes 5.4 KB](https://news.ycombinator.com/item?id=47148025) { news.ycombinator.com }

> ![](2026-10-02-links-from-my-inbox.assets/40.jpg)
>
> The original Hacker News discussion around Context Mode and the problem it targets: agent tools can permanently consume huge parts of the context window with output that was useful only once.



## Browse, inspect, and research external systems

2026-10-02 [agent-browser](https://www.skills.sh/vercel-labs/agent-browser/agent-browser) { skills.sh }

> ![](2026-10-02-links-from-my-inbox.assets/41.jpg)
>
> Browser automation designed for agents rather than traditional UI-test code. It uses persistent sessions, structured snapshots, compact element references, and CDP-based interaction so agents can navigate sites without repeatedly consuming full DOMs or screenshots.

2026-10-02 [SaaS Platform Teardown Kit](https://github.com/ahmedyehya92/saas-platform-teardown-kit) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/42.jpg)
>
> Turns a SaaS URL into a structured product and platform investigation covering interfaces, user journeys, integrations, business signals, and other evidence. Its strongest idea is provenance: claims are distinguished as directly confirmed, externally reported, or inferred.

2026-10-02 [Reddit: Turn any SaaS URL into a due-diligence-grade teardown](https://www.reddit.com/r/claudeskills/comments/1w9qyg5/i_opensourced_a_claude_code_skill_that_turns_any/) { reddit.com }

> ![](2026-10-02-links-from-my-inbox.assets/43.jpg)
>
> The release discussion for the teardown skill, centered on producing structured research where important claims carry a source and confidence status.



## Find and install reusable agent capabilities

2026-10-02 [skills.sh](https://www.skills.sh/) { skills.sh }

> ![](2026-10-02-links-from-my-inbox.assets/44.jpg)
>
> A searchable directory and installation layer for reusable agent skills from many repositories. It gives skills a common discovery and installation path across different agent environments.

2026-10-02 [ClawHub](https://github.com/openclaw/clawhub) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/45.jpg)
>
> OpenClaw's registry for publishing, versioning, finding, installing, updating, and moderating skills and plugins. It is closer to a package registry for agent capabilities than a static prompt collection.

2026-10-02 [Cursor plugins](https://github.com/cursor/plugins) { github.com }

> ![](2026-10-02-links-from-my-inbox.assets/46.jpg)
>
> Cursor's official plugin repository and the upstream source for pstack. It is useful both as a distribution mechanism and as the canonical place to inspect the actual skills, agents, manifests, and supporting files.
