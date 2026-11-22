---
layout: post
title: "Links from my inbox 2026-11-21"
date: 2026-11-21
categories: links
---

Dates marked *saved* come from Telegram.

*Working draft. The last section preserves links whose source content needs verification. The coverage file accounts for all recorded URLs.*

## Good Reads

2026-09-25 [You Should All Be Asking Way More Questions](https://www.seangoedecke.com/you-should-all-be-asking-way-more-questions/) { seangoedecke.com }

> ![Several people study the same mechanism while another person sketches it.](2026-11-21-links-from-my-inbox.assets/1495-you-should-all-be-asking-way-more-questions.jpg)
>
> Sean Goedecke asks short questions as someone explains a system because he is trying to build a working model of it in his head. If a step depends on an assumption he got wrong, waiting until the end wastes the rest of the explanation. When reviewing an agent's plan, he asks whether an existing subsystem already provides the capability, whether an interface needs to change, and why a seemingly unrelated file is involved.
>
> In his own work, about half of such questions lead him to conclude the model made a mistake. He notes that this frequency may vary by domain or language.

2026-09-26 [Advice to a Beginning Software Engineer](https://www.seangoedecke.com/advice-to-a-beginning-software-engineer/) { seangoedecke.com }

> ![Two engineers work together on a row of test fixtures.](2026-11-21-links-from-my-inbox.assets/1497-advice-to-a-beginning-software-engineer.jpg)
>
> Sean Goedecke advises junior engineers to be reliably useful while they build technical judgment and bargaining power. He argues that some advice from the zero-interest-rate hiring boom assumed leverage a new engineer might have less of today. His examples include asking how a system works, making it clear which work has priority, and considering how the change will behave after it ships. He sees conscientious follow-through and being easy to work with as more dependable ways to earn trust than trying to stand out immediately.
>
> Goedecke expects the role to change as models improve. His advice is to learn to use AI while continuing to form and defend your own technical opinions. He treats the advice about organizational politics as his judgment; his edit records disagreement from other engineers.

2026-09-22 [A Staff Engineer's Guide to Inventing Work](https://sujithjay.com/inventing-work) { sujithjay.com }

> ![Symbols for platform signals converge in a funnel and emerge as one small project.](2026-11-21-links-from-my-inbox.assets/1528-a-staff-engineer-s-guide-to-inventing-work.jpg)
>
> Sujith Jay Nair finds platform projects by examining signals the system and its users already produce. His favorite is an overloaded use case: users put an existing tool to an unsupported purpose, and production use already proves demand for the missing capability. Other signals include crashes, bills, manual toil, repeated requests, and migration laggards. A migration's holdouts can reveal the requirements its replacement failed to meet. Industry evidence lets a team adopt decisions after others have run the expensive experiments.
>
> Nair ranks signals by whether they lead or lag demand and how much of the case for action they make on their own. A postmortem or bill is easy to justify and comes after the problem. Conversations with users can surface a need sooner but leave the engineer to make the case.

2026-10-06 [The Slow Formation of Durable Software](https://newsletter.dancohen.org/archive/the-slow-formation-of-durable-software/) { newsletter.dancohen.org }

> ![Original editorial illustration for The Slow Formation of Durable Software](2026-11-21-links-from-my-inbox.assets/1589-the-slow-formation-of-durable-software.jpg)
>
> Dan Cohen says Zotero took roughly five years to reach a rough prototype because the team was still discovering what scholarly research software needed to do. An assistant could have accelerated implementation once they knew what to ask for. It would have had less to solve while the group was still working out the question. Historians at a research center compared habits around collecting, annotating, organizing, and citing sources. Their conversations and early web and browser experiments fed into SmartFox, later Firefox Scholar, and the project launched as Zotero in October 2006.
>
> Cohen reports that Zotero reached more than 20 million users and attributes its durability to a long communal design process. The origin story is evidence of how this product formed, rather than a general measurement of the ideal time to spend prototyping.

2026-10-19 [Your .md File Is Not a Specification](https://blog.fizzbee.ai/formal-analysis-in-requirements-specification/) { blog.fizzbee.ai }

> ![Original illustration of a coral appointment ticket sliding over a previously booked slot](2026-11-21-links-from-my-inbox.assets/1590-your-md-file-is-not-a-specification.jpg)
>
> The requirement that every appointment fall within a stylist's working hours cannot determine every allowed state transition. FizzBee first finds that an unscheduled stylist can be booked, then finds that a schedule change can leave a valid booking outside the stylist's hours even after the booking action checks availability. The tutorial models one stylist and one slot, then stores the customer ID so it can distinguish two customers. The old schedule invariant passes over four reachable states, yet the interactive explorer still allows customer 1 to book over customer 0. Both before and after states satisfy the schedule invariant. The added requirement rejects requests for an occupied slot, and a transition assertion rejects replacing one nonempty booking with another.
>
> For schedule changes, blocking the change and automatically cancelling a conflicting booking both preserve the original invariant. The example chooses cancellation for simplicity and discusses a manager rescheduling option. Those are product decisions with different effects on customers, even if each can preserve the same property.
>
> Use the executable specification as a test oracle. Replay a path to a model state, perform the action on the implementation, and check both that a successful transition is permitted and that a rejected action is disabled. Checking only successes would let software that rejects every action pass.

2026-11-07 [Writing as a Thinking Tool](https://muratbuffalo.blogspot.com/2026/11/writing-as-thinking-tool.html) { muratbuffalo.blogspot.com }

> ![Original editorial illustration for Writing as a Thinking Tool](2026-11-21-links-from-my-inbox.assets/1722-writing-as-a-thinking-tool.jpg)
>
> Murat Demirbas writes to find out what he understands. He compares written notes to external memory: setting ideas down lets him inspect relationships and missing steps his working memory cannot hold at once. Writing a review can reveal how much of a paper he still cannot explain. In a 2018 post, similarities between Paxos and Nakamoto consensus emerged while he wrote; the post became a starting point for a research paper.
>
> He separates exploratory writing from cleanup. First write freely, then organize and simplify the result. He also recommends writing on a schedule and without putting pressure on a draft to be good during discovery.

2026-11-06 [Bad Ideas That Aren't Bad Anymore](https://devonestes.com/bad-ideas-that-arent-bad-anymore) { devonestes.com }

> ![Original editorial illustration for Bad Ideas That Aren't Bad Anymore](2026-11-21-links-from-my-inbox.assets/1755-bad-ideas-that-aren-t-bad-anymore.jpg)
>
> Devon Estes's team stopped requiring another engineer to review every pull request while the volume of agent-authored work rose. The engineer responsible for a ticket reviews the agent's diff, and can merge when CI and Greptile pass and they are confident about the change. The experiment changes who already has the context for review. Estes also describes splitting the team across workstreams and using tools to get up to speed in unfamiliar areas, practices he previously considered too costly.
>
> This is an early report from one team. Its broader argument is that guidelines encode costs: poor visibility makes silos risky, scarce knowledge rewards deep specialization, and reviewing another person's change takes time. Tools can alter some of those costs while leaving others.

2026-11-14 [The Software Job Title Family Tree](https://ianmiell.github.io/sw-job-title-family-tree/#observability) { ianmiell.github.io } *saved*

> ![Original editorial illustration for The Software Job Title Family Tree](2026-11-21-links-from-my-inbox.assets/1778-the-software-job-title-family-tree.jpg)
>
> Ian Miell maps software job titles as a family tree, from computer, coder, and programmer to site reliability, platform, and AI roles. The vertical position estimates when each title became common. Graphviz lays out titles by five-year period and by families such as development, operations, and data. Solid links show a proposed lineage; dashed links show influence or a common move between roles. Selecting a title opens its notes.
>
> The author describes the dates as estimates of adoption, not first recorded appearances. The notes are editable and the graph is a model of the industry's vocabulary.

2026-11-20 [Ask HN: I've Been Unemployed for Two Years. What Should I Do?](https://news.ycombinator.com/item?id=50583761) { news.ycombinator.com }

> ![Original editorial illustration for Ask HN: I've Been Unemployed for Two Years. What Should I Do?](2026-11-21-links-from-my-inbox.assets/1809-ask-hn-i-ve-been-unemployed-for-two-years-what-should-i-do.jpg)
>
> A senior engineer with insurance experience and a tutoring business asked how to return to software after two years. The most tailored replies turn the work they already have into evidence of recent engineering and make their industry background part of the search. One commenter suggests making the tutoring business a real client: identify a repetitive administrative task, automate it, and show the old and new workflow. That gives a project a user and a result an interviewer can ask about.
>
> Another commenter suggests looking for technical roles in insurance that value domain experience. The replies are suggestions for one situation and offer no evidence that either route guarantees a hiring outcome.
>
> When describing a portfolio project, start with a real responsibility and the result for the person who used it. Search for teams where your former domain supplies context a generic applicant would have to learn.
>
> The replies about [making the tutoring business the client](https://news.ycombinator.com/item?id=50590774), [building on insurance experience](https://news.ycombinator.com/item?id=50588398), and [asking former colleagues about adjacent teams](https://news.ycombinator.com/item?id=50589571) are the ones I'd start with. One person [with 300 paying customers](https://news.ycombinator.com/item?id=50587280) says recruiters rarely asked about their app. For a project outside your own business, another reply suggests [volunteering somewhere with real work to do](https://news.ycombinator.com/item?id=50589905).

## 🤖 The Era of AI

2026-09-20 [I Don't Want to Read What You Didn't Write](https://blog.colinbreck.com/i-dont-want-to-read-what-you-didnt-write/) { blog.colinbreck.com }

> ![Blue editing marks connect handwritten drafts to a clean typeset page.](2026-11-21-links-from-my-inbox.assets/1482-i-don-t-want-to-read-what-you-didn-t-write.jpg)
>
> Colin Breck argues that writing develops an argument and transfers the author's context to a reader. Handing the draft to a model can make it easier to produce text while transferring the work of understanding it to everybody else. For a paper written in LaTeX, Breck drafted the prose and gave AI the code, production data, and journal material to check it. It verified which database columns were indexed and how rows in Parquet files were sorted, completed citations, and caught a notation error four expert reviewers missed.
>
> Asking the model to draft technical passages from the same context produced text he found inaccurate or difficult to read. A notable exception was the abstract, which he says the model drafted and he kept unchanged. The result describes his own work rather than a general evaluation of model writing.

2026-09-21 [SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) { github.com } *saved*

> ![Four printed repair panels show a bolt being inserted and tightened.](2026-11-21-links-from-my-inbox.assets/1484-simpleenglish.jpg)
>
> SimpleEnglish converts parts of the ASD-STE100 aerospace writing standard into instructions and tests for agents. It targets manuals, runbooks, and other writing where readers need to interpret an instruction the same way. The repository teaches mechanical constraints and provides a linter. A separate extractor can build a vocabulary list from the reader's own copy of Issue 9. The repository does not redistribute the standard's dictionary.
>
> In one reported chat exercise, visible formatting defects fell from 218 to 11 across sixteen replies. A separate evaluation reported 81.3% fewer mechanical linter violations across nine Claude models. The audit says these counts measure rule compliance; the basic linter cannot assess word choice.

2026-09-26 [agent-browser](https://www.skills.sh/vercel-labs/agent-browser/agent-browser) { skills.sh } *saved*

> ![A telescope highlights specific elements in a browser-shaped stack of acrylic panes.](2026-11-21-links-from-my-inbox.assets/1500-agent-browser.jpg)
>
> agent-browser gives an agent compact references to elements in a Chromium accessibility snapshot. A command can refer to the element's label from the snapshot instead of attaching the whole page to every interaction. The CLI uses the Chrome DevTools Protocol. The linked skill is a discovery stub: it asks the reader to load workflow guidance through the installed CLI so its commands and reference tables match that version.
>
> The page distinguishes the short core workflow from a much longer all-references option. Browser capabilities depend on the installed CLI and the page's accessibility structure.

2026-09-27 [What Would a Serious AI Product Look Like?](https://blog.glyph.im/2026/09/serious-ai-product.html) { blog.glyph.im }

> ![A miniature product workbench is lined with switches, checklists, provenance markers, and a magnifier.](2026-11-21-links-from-my-inbox.assets/1520-what-would-a-serious-ai-product-look-like.jpg)
>
> Glyph argues that an AI tool for serious work should make checking for mistakes part of the interface. A warning about inaccurate output leaves the reader to do that verification without much help from the product. The proposal includes precise citations and provenance markers, controls for what goes into context, and better reproducibility. It also asks for structured interfaces where a typed input or visible boundary can be clearer than a chat exchange.
>
> The article pairs product changes with human processes such as reviewer rotation and skill practice. Its questions concern research and software workflows where a plausible answer can create expensive follow-up work.

2026-10-02 [The Brain Sandwich](https://terriblesoftware.org/2026/10/02/the-brain-sandwich/) { terriblesoftware.org }

> ![Two human review steps bracket a sandwich containing a tiny robot.](2026-11-21-links-from-my-inbox.assets/1541-the-brain-sandwich.jpg)
>
> The Brain Sandwich puts a human engineering pass on both sides of an agent run. The first pass sets direction by understanding the problem, and the second makes the result defensible and reviewable. Before prompting, investigate enough to have a rough idea of the intended change. The article argues that this context helps you recognize an agent that overbuilds or solves a different problem. After the run, read the diff, judge the complexity, and improve the PR description.
>
> The author relays a colleague's working rule rather than a measured effect on skill retention. The rule is to explain what changed and why before sending it to another person to review.

2026-10-03 [Agents Don't Need Memory. They Need Documentation.](https://liao.gg/blog/agents-dont-need-memory) { liao.gg }

> ![A robot annotates a project notebook beside a queue of loose conversation fragments.](2026-11-21-links-from-my-inbox.assets/1550-agents-don-t-need-memory-they-need-documentation.jpg)
>
> Kevin Liao argues that agents need a navigable record of project decisions. Retrieving a handful of semantically similar chat fragments can miss the connected facts and reasoning needed to make a coherent change. His Operator project uses Markdown files covering specifications, rationale, conventions, and other facts the code cannot tell an agent. The working agent updates a document while the details are still fresh and rewrites outdated facts in place. Git gives the team a way to review, diff, and revert the result.
>
> Liao identifies document bloat as the major failure mode. Agents may summarize generated material, log unimportant tweaks, or invent requirements. Even with instructions to trim and split documents, he still intervenes manually.

2026-10-18 [Will It Be a Golden Age or a Dark Age for Mathematics (and Science)?](https://terrytao.wordpress.com/2026/10/18/will-it-be-a-golden-age-or-a-dark-age-for-mathematics-and-science/) { terrytao.wordpress.com }

> ![Original editorial illustration for Will It Be a Golden Age or a Dark Age for Mathematics (and Science)?](2026-11-21-links-from-my-inbox.assets/1630-will-it-be-a-golden-age-or-a-dark-age-for-mathematics-and-sci.jpg)
>
> Francesco Maggi argues that AI could increase the number of mathematical results while weakening researchers' ability to understand or extend those results. The optimistic version keeps expertise and judgment distributed across the scientific community. He distinguishes a formal proof checked by Lean from a human explanation that makes its central idea intelligible. Very long machine-produced formal proofs can be difficult to interpret, and the informal account may miss what the verifier actually established.
>
> Maggi recognizes recent proposed and formal advances and calls for continued scrutiny, interpretation, and assimilation by mathematicians. The contrasting scenarios are prospective and the essay is his guest contribution on Terence Tao's site.

2026-06-26 [Anthropic Economic Index: Cadences](https://www.anthropic.com/research/economic-index-june-2026-report) { anthropic.com }

> ![Original editorial illustration for Anthropic Economic Index: Cadences](2026-11-21-links-from-my-inbox.assets/1643-anthropic-economic-index-cadences.jpg)
>
> Anthropic's June Economic Index separates when people use Claude, what a session produces, and what users expect it to do to their jobs. Personal use accounted for about 35% of sampled chat and Cowork conversations on weekdays and just under half on weekends. Recipe requests were 2.3 times their average frequency at 6 p.m. A classifier found an artifact in 93% of chat and Cowork conversations. Explanations accounted for 17%, documents and reports 15%, and guidance 11%. Claude Code scored 0.37 points higher on a five-point autonomy scale than chat and Cowork overall. About two-thirds of the gap came from users giving it more discretion on the same kinds of output. A typical blog-post session involved 13 rounds in chat or Cowork and a single human prompt in Claude Code.
>
> The linked survey analyzed about 9,700 Claude users. People who delegated more expected AI to take on more tasks and were more optimistic about outcomes such as pay and finding work. Eighty-six percent reported speed gains, 82% reported doing more, and 69% reported higher quality. The survey is not representative of the public and these gains are self-reported. The associations do not show that delegation caused optimism or that skills did not erode.
>
> The unit of analysis matters. A transcript can miss tool work and leave very different levels of delegation looking alike. Compare the artifact, product context, and amount of human input before drawing conclusions about what has been automated.

2026-06-17 [Americans and AI 2026: Chatbots, Smart Devices and Views on Impact](https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/) { pewresearch.org }

> ![Original editorial illustration for Americans and AI 2026: Chatbots, Smart Devices and Views on Impact](2026-11-21-links-from-my-inbox.assets/1644-americans-and-ai-2026-chatbots-smart-devices-and-views-on-imp.jpg)
>
> Pew surveyed 5,119 U.S. adults from February 17 to 23, 2026. Forty-nine percent reported using AI chatbots, up from 33% in its 2024 comparison, and 24% reported daily use. ChatGPT use rose from 34% in 2025 to 44% in 2026. It was 57% among adults under 50 and 28% among older adults. Information search was the most common reported use at 42% of all adults. Thirty-eight percent of employed adults used chatbots for work tasks, a different denominator.
>
> Forty percent expected AI to hurt society over the next 20 years, compared with 16% expecting a positive effect. That negative expectation was 48% among adults under 30 and 37% among adults 50 and older. Sixty-three percent thought AI was advancing too quickly, and 71% expected less security for their personal information.
>
> The survey separates behavior from opinion. Higher use among younger groups does not translate into greater optimism. Read the percentages as survey responses, including predictions and self-reported usage, rather than observed effects of AI.

2026-02-28 [AI Isn't Replacing SREs. It's Deskilling Them.](https://newsletter.signoz.io/p/ai-isnt-replacing-sres-its-deskilling) { newsletter.signoz.io }

> ![Original editorial illustration for AI Isn't Replacing SREs. It's Deskilling Them.](2026-11-21-links-from-my-inbox.assets/1689-ai-isn-t-replacing-sres-it-s-deskilling-them.jpg)
>
> Automating routine incident response can leave the on-call engineer handling only the rare cases that require the most judgment. The author applies Lisanne Bainbridge's ironies of automation to the skills that have to be ready for those cases. The report distinguishes approving a recommendation from actively diagnosing a failure. Diagnosis requires noticing signals, forming a hypothesis, and deciding what evidence would disprove it. A tool that performs those steps on every easy incident can leave junior responders with fewer chances to practice.
>
> The opening 95/5 split is a framing example rather than a survey finding. The author proposes using some incidents as deliberate manual practice and designing tools that keep the human involved in reasoning. Both can trade a faster routine response for experience in handling exceptions.

2026-10-31 [How I Use AI (October 2026)](https://ben.stolovitz.com/posts/how-use-ai-oct-2026/) { ben.stolovitz.com }

> ![Original editorial illustration for How I Use AI (October 2026)](2026-11-21-links-from-my-inbox.assets/1703-how-i-use-ai-october-2026.jpg)
>
> Ben Stolovitz delegates much of his implementation work to agents while retaining design and review. One of his best results of the year came from replacing roughly 4,000 lines of generated code with a few hundred lines he wrote himself. Each coding agent gets its own Git worktree and can build prototypes, reproduce bugs, and run tests without colliding with the others. Stolovitz writes down recurring review mistakes and has an agent quiz him about a large change before he accepts it.
>
> He reports prototypes often arrive in about 20 minutes, but argues that an unsupervised agent can produce unreadable and overbuilt software. The essay records a personal workflow, with separate policies for writing and other creative work.

2026-11-06 [The End of AI Frontiers](https://hunch.net/?p=13764006) { hunch.net }

> ![Original editorial illustration for The End of AI Frontiers](2026-11-21-links-from-my-inbox.assets/1720-the-end-of-ai-frontiers.jpg)
>
> John Langford argues that frontier-model research needs enough organization to evaluate new ideas quickly, alongside enough independence to pursue changes in how models work. His account traces the formation and end of Microsoft Research's AI Frontiers group. The roughly fifty-person group worked on projects such as AutoGen and Fara and on objectives and architectures. It shared a pretraining codebase internally. Langford says shared infrastructure mattered because building a repeatable training pipeline can absorb considerable effort.
>
> After a reorganization into Microsoft AI, Langford says research ideas had no workable path to adoption and that he left. The depiction of priorities is his account of the reorganization, not a statement of every participant's view.

2026-11-08 [How I'm Fighting the AI Brain Fry](https://sergeykuhne.com/blog/fighting-ai-brain-fry) { sergeykuhne.com }

> ![Original editorial illustration for How I'm Fighting the AI Brain Fry](2026-11-21-links-from-my-inbox.assets/1730-how-i-m-fighting-the-ai-brain-fry.jpg)
>
> The author addresses AI fatigue by putting decisions into a single queue. Opening a ticket loads one context, and recording the verdict puts the work back into the queue so it stops occupying attention. Git holds the board, the changes, and the decisions. An agent researches new tickets, implements those tagged safe, and runs tests and browser checks. A generated web page exposes just the work waiting on human judgment, with a review page for each ticket.
>
> Sensitive changes go on a branch and require a decision. The author retains production deployment. The process still feels tiring, and the remaining bottlenecks are assembling usable review context and preventing blocked work from cycling endlessly.

2026-11-11 [Why Am I So Tired If AI Is Doing All the Work?](https://terriblesoftware.org/2026/11/11/why-am-i-so-tired-if-ai-is-doing-all-the-work/) { terriblesoftware.org }

> ![Original editorial illustration for Why Am I So Tired If AI Is Doing All the Work?](2026-11-21-links-from-my-inbox.assets/1743-why-am-i-so-tired-if-ai-is-doing-all-the-work.jpg)
>
> Cheap agent runs can increase your workload. Each run creates something you have to understand, check, and finish, and starting more jobs can outrun your capacity to do that review. The author compares the resulting context switches to operating-system thrashing. Starting a new task is easy, but reloading enough context to review the returned work competes with all the other tasks in flight.
>
> The OS comparison is an analogy, not a productivity measurement. The practical changes are to budget reviewer time when starting a task, decide whether it belongs in progress now, and finish open reviews before starting more runs.

2026-11-12 [Jane Street's Socratic Tutor Agent Skill](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) { github.com } *saved*

> ![Original editorial illustration for Jane Street's Socratic Tutor Agent Skill](2026-11-21-links-from-my-inbox.assets/1754-jane-street-s-socratic-tutor-agent-skill.jpg)
>
> Jane Street's Socratic Tutor checks that the reader wants a teaching session, then asks a few diagnostic questions before teaching. An ordinary one-off question gets its usual direct answer. The skill maps the topic into concrete subskills, asks three to five questions of different difficulty, and rates each skill from zero for unfamiliarity to five for teaching it or handling edge cases. It shows the map and lets the learner choose where to start.
>
> The instructions distinguish being able to follow an explanation from solving independently. A rating is a session aid based on observed work, not a standardized exam score.

2026-11-20 [If You Stop Writing Code, You Also Get Worse at Reviewing It](https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/) { cekrem.github.io }

> ![Original editorial illustration for If You Stop Writing Code, You Also Get Worse at Reviewing It](2026-11-21-links-from-my-inbox.assets/1811-if-you-stop-writing-code-you-also-get-worse-at-reviewing-it.jpg)
>
> The author argues that regular code writing and problem solving are part of what makes engineers competent reviewers. If engineers stop doing that work, reviewing a larger volume of generated code is a poor substitute for practice. The essay distinguishes judging generated code from developing the instincts needed to judge it, including recognizing structure that is easy to change and working through failures by trial and error.
>
> The Doom analogy contrasts getting to the end with learning to play. The author offers an argument about practice and learning rather than a longitudinal measurement of skill loss.

## 🔫 C || C++ / Systems

2013-04-01 [Writing Efficient C++ Code](https://asawicki.info/articles/writing_efficient_cpp_code.php) { asawicki.info }

> ![Trays of mixed-color objects are reorganized into separate rows grouped by color.](2026-11-21-links-from-my-inbox.assets/1506-writing-efficient-c-code.jpg)
>
> Efficient C++ begins with the data the hottest loop actually reads. The article's particle example moves position and velocity into separate contiguous arrays so the update can scan them without bringing unused colors into the cache. An array of structures keeps every attribute of a particle together. A structure of arrays places the same attribute for adjacent particles together. The best grouping changes with the access pattern, such as moving particles versus drawing everything about each one.
>
> The tutorial also discusses allocations, operation costs, and compiler options. This material was originally published in 2013, so compiler and hardware assumptions in individual examples should be read in that context.

2026-10-03 [komihash](https://github.com/avaneev/komihash) { github.com } *saved*

> ![An engraved machine takes blocks of input and stamps out one short row of squares.](2026-11-21-links-from-my-inbox.assets/1545-komihash.jpg)
>
> komihash is a portable 64-bit hash for data structures and checksums. It is a scalar, allocation-free C header and returns identical values on big- and little-endian systems. The README positions it for hash tables, Bloom filters, and larger data. It reports 27 GB/s on large blocks on a Ryzen 3700X and about eight cycles per hash for repeated strings from zero through fifteen bytes.
>
> The reported throughput is platform-specific. The author says 32-bit systems are considerably slower, and byte-swapping can reduce large-block throughput on big-endian platforms. These are data-structure hash results rather than a cryptographic security evaluation.

2026-10-03 [C++ Insights](https://github.com/andreasfertig/cppinsights) { github.com } *saved*

> ![A closed gift box opens to reveal a foldout of operations hidden inside.](2026-11-21-links-from-my-inbox.assets/1547-c-insights.jpg)
>
> C++ Insights exposes operations the compiler fills in implicitly. Its inheritance example expands a copy construction, an assignment operator call, and a conversion from Derived to a Base reference. The project uses compiler information to express those operations as readable C++. For a short source example it makes hidden casts and generated member functions easier to examine before considering assembly.
>
> The output is an explanatory view of compilation decisions. The project tracks recent Clang versions, so its online and local tooling can have different support for new language features.

2025-06-25 [Type Safe Generic Data Structures in C](https://danielchasehooper.com/posts/typechecked-generic-c-data-structures/) { danielchasehooper.com }

> ![One insertion tool passes a red cube through a sequence of matching storage containers.](2026-11-21-links-from-my-inbox.assets/1558-type-safe-generic-data-structures-in-c.jpg)
>
> A flexible array member puts the item in the same allocation as the node. The insertion macro derives the item size and forces the compiler to check the pointer expression against the union's typed member. A typed cast on retrieval restores the element pointer type. Daniel Hooper builds a generic linked list with a shared implementation and type checks at the call site. A union carries both the actual head pointer and a typed phantom payload without reserving separate memory for the payload.
>
> Separately expanding an anonymous union macro creates distinct types even when the expanded shapes match. Use a named typedef if lists have to be assigned or passed across a function boundary. The inline example also needs appropriate alignment for element data.

2025-08-05 [A Fast, Growable Array With Stable Pointers in C](https://danielchasehooper.com/posts/segment_array/) { danielchasehooper.com }

> ![A steel pin holds its position while new storage segments extend the array.](2026-11-21-links-from-my-inbox.assets/1559-a-fast-growable-array-with-stable-pointers-in-c.jpg)
>
> Hooper's segment array provides stable element addresses and constant-time indexing as it grows. Each new segment is larger than the previous one, so adding capacity never moves old elements. The segment number comes from the most significant set bit of a transformed index, which a leading-zero instruction finds directly. The remaining index arithmetic finds the offset into that segment.
>
> The array is not physically contiguous across segments. The author estimates average memory efficiency at 75%, versus 83% for a dynamic array growing by 1.5×. An array built on reserved virtual address space can retain contiguity, but requires a compatible platform.

2025-08-12 [How I Do (Type-Safe) Container Types in C](https://louissven.xyz/article/how_I_do_container_types_in_C.md) { louissven.xyz }

> ![A typed basket accepts numbered tiles and rejects a letter tile.](2026-11-21-links-from-my-inbox.assets/1563-how-i-do-type-safe-container-types-in-c.jpg)
>
> Louis Sven wraps one untyped vector implementation with strict, typed insertion macros. A zero-length array of pointers records the element type in the wrapper without adding padding in the example. The shared vector owns length, capacity, and a void pointer. A typedef gives each specialization a reusable name. The push macro combines C11's `_Generic` with `typeof` so a char named in the post fails when pushed into an int vector.
>
> A typed pointer returned by the getter catches an incompatible pointer assignment. Dereferencing it and assigning the value can still trigger C's ordinary implicit conversions. Sven uses C23's type-inferred `auto` to preserve the retrieved type. The zero-length member relies on compiler support.
>
> See also [C Generics Gist: vec.c](https://gist.github.com/lorlouis/ba227cf544fe917aae0365b41e8c2d04). The author's companion gist puts the vector declarations, access macros, and rejected assignments in one file.

2022-07-22 [Templates in C](https://www.davidpriver.com/ctemplates.html) { davidpriver.com }

> ![Two type tags feed one template that produces differently shaped containers.](2026-11-21-links-from-my-inbox.assets/1564-templates-in-c.jpg)
>
> A reusable C header can act as a template. Define the element type and symbol prefix before including it, and ordinary C declarations and definitions produce a specialized container. The worked dynamic-array header takes macros such as DARRAY_T and DARRAY_PREFIX. Token pasting gives each instantiation its own names. Using regular code in the header keeps functions easier to read than putting the whole implementation inside one giant macro.
>
> The preprocessor still generates separate code for each type. The caller manages instantiation and macro configuration. This is a different tradeoff from sharing an untyped implementation behind a checked façade.

2026-10-07 [C for Rust Programmers](https://bd103.dev/blog/2026-10-07-c-for-rust-programmers/) { bd103.dev }

> ![Original editorial illustration for C for Rust Programmers](2026-11-21-links-from-my-inbox.assets/1578-c-for-rust-programmers.jpg)
>
> C array syntax carries different information in an object declaration and a function parameter. In the article's example, sizeof reports three bytes for a local character array and eight inside a function because the parameter is a pointer on that system. The article contrasts that behavior with Rust's slices and strings, whose references can carry a length alongside an address. It also covers terminators in strings and the history of C booleans and stdbool.h.
>
> The pointer size belongs to the author's 64-bit environment. Language features such as the C23 boolean changes also depend on compiler support.

2026-01-30 [Compiling Rust to Readable C with Eurydice](https://lwn.net/Articles/1055211/) { lwn.net }

> ![Original editorial illustration for Compiling Rust to Readable C with Eurydice](2026-11-21-links-from-my-inbox.assets/1602-compiling-rust-to-readable-c-with-eurydice.jpg)
>
> Eurydice translates Rust to readable C for projects that need to use existing C compilers, verification, or compliance tooling. Its output retains much of the original structure for small, self-contained programs. Charon extracts rustc's mid-level intermediate representation as JSON. Eurydice converts it into KaRaMeL's representation, runs passes to remove Rust-specific constructs, and uses KaRaMeL's existing C generator.
>
> The author found that Charon frequently failed on newer features, including const generics. The strongest use case is regenerating C from a Rust source that will continue to evolve; a small one-off program might cost less to port once.

2026-10-13 [Fun Extending the C Preprocessor](https://www.davidpriver.com/Fun-Extending-the-C-Preprocessor.html) { davidpriver.com }

> ![Original editorial illustration for Fun Extending the C Preprocessor](2026-11-21-links-from-my-inbox.assets/1632-fun-extending-the-c-preprocessor.jpg)
>
> The author uses a small experimental C compiler to examine what should belong in the preprocessor. A bounded `__map` can apply a macro to every variadic argument without requiring general macro recursion. Standard macro expansion suppresses direct recursion. The portable example counts arguments with variadic macros and dispatches to a chain of eight different expansion macros. The experimental compiler provides a compact counterpart, plus debugging tools to print tokens and locations.
>
> The count-and-dispatch example has an upper bound; the experiment's built-ins are author proposals or local extensions, rather than features of a standard C compiler.

2026-10-17 [One Hash Bloom Filters](https://calabro.io/ohbf) { calabro.io }

> ![Original illustration of an arrow selecting a single orange memory block, with three marked cells inside it](2026-11-21-links-from-my-inbox.assets/1640-one-hash-bloom-filters.jpg)
>
> At Bluesky, the big speedup came from removing lock contention while building Bloom filters, not from reducing the number of hashes. Switching from a mutex to atomic operations cut the reported rollout from about 90 minutes to 15. The one-hash design computes a 128-bit XXH3 hash. The high half selects a block and the low half supplies bit positions via remainders against differently sized, pairwise coprime partitions. Blocks are aligned to 64-byte cache lines so the lookup touches at most one such line. Sharded variants spread writes across filters so cores contend less.
>
> One production series showed a roughly 1% positive rate, so the application skipped the database on about 99% of those lookups. This is a positive rate for that workload, not a measured false-positive rate. A positive hit still needs checking. The one-hash design itself did not produce a noticeable additional speedup at Bluesky.
>
> Profile synchronization before optimizing the hash. Concurrent startup loads and incoming firehose events both write the same filters, so a low-contention insertion path made more difference than arithmetic savings.

2026-10-12 [C vs C#: Racing VLC's Gaussian Blur](https://martinfinkel.com/blog/gaussian-blur-c-vs-csharp/) { martinfinkel.com }

> ![Original editorial illustration for C vs C#: Racing VLC's Gaussian Blur](2026-11-21-links-from-my-inbox.assets/1655-c-vs-c-racing-vlc-s-gaussian-blur.jpg)
>
> Martin Finkel compared VLC's Gaussian blur with a Native AOT C# port inside the same VLC build on an 11th-generation laptop i7. He required byte-identical frames so a faster result could not be attributed to doing a weaker blur. The original is a separable integer blur, so horizontal and vertical passes replace a two-dimensional convolution. The optimized implementations reuse work and improve data access. The final variants use SIMD to calculate several outputs at once.
>
> On the author's 1080p clip, the starting versions ran at roughly 8 fps for C and 6 fps for C#. With the same scalar algorithm optimized they reached 25 and 20 fps. The tuned SIMD versions reached 240 and 236 fps. The author's follow-up also narrowed the initial line-by-line gap substantially with two small source changes.
>
> Match output and benchmark the same algorithm before attributing a gap to the language. The near tie applies to the author's most heavily tuned pair and hardware, while also showing how memory layout and compiler code generation can dominate this workload.

2026-10-26 [SIMD-Accelerated Computer Vision on a $2 Microcontroller](https://shraiwi.com/blog/simd-fast-esp32s3/) { shraiwi.com } *saved*

> ![Original editorial illustration for SIMD-Accelerated Computer Vision on a $2 Microcontroller](2026-11-21-links-from-my-inbox.assets/1665-simd-accelerated-computer-vision-on-a-2-microcontroller.jpg)
>
> The ESP32-S3 can run FAST corner detection on live video when the pretest examines 16 candidate pixels per iteration. The author works around a small instruction set and alignment rules rather than assuming SIMD automatically speeds up the whole detector. FAST looks for a run of pixels on a circle that are sufficiently brighter or darker than the center. The cheap cardinal-direction pretest rejects candidates before the full circle check. On the ESP32-S3 the author joins aligned chunks to build the neighbor vectors for an unaligned window.
>
> The author reports throughput rising from 5.1 to 11.2 megapixels per second and about 6 ms for a 320×240 frame. They describe this as sufficient for 30 fps VGA corner detection on their setup. This is a detector result, not the cost of camera I/O or an entire vision application.
>
> Identify an early rejection step where the same computation can be applied to many pixels. The most reusable part is the technique for gathering shifted neighborhoods from aligned loads.

2026-11-02 [x64 Linux System Call Table](https://syscall.sh/x64/) { syscall.sh } *saved*

> ![Original editorial illustration for x64 Linux System Call Table](2026-11-21-links-from-my-inbox.assets/1699-x64-linux-system-call-table.jpg)
>
> The x86-64 Linux table shows system-call numbers and the registers that carry each argument. It bridges raw register values in a trace or disassembly and the names in the kernel interface. The syscall number and result use rax. The table identifies the first six argument registers and explains why syscall changes rcx and r11. Queries by number work in decimal or hexadecimal, and text searches include names, arguments, descriptions, and feature configuration.
>
> This is the Linux x86-64 system-call convention. It differs from an ordinary function calling convention and from conventions on architectures such as AArch64.

2026-10-29 [The Lost malloc()](https://napcakes.nekoweb.org/posts/malloc/) { napcakes.nekoweb.org }

> ![Generated museum-style illustration of a magnetic tape reel with a loose ribbon, evoking the recovered UNIX archive](2026-11-21-links-from-my-inbox.assets/1702-the-lost-malloc.jpg)
>
> Early Unix used allocation interfaces that exposed the resource and size directly. The article traces a kernel `malloc` that took an explicit map, and an `mfree` that took the map, object size, and address. The same functions operated on core-memory and swap maps. Each map tracked free ranges in address order, used first-fit selection, and merged neighboring ranges when freeing. User programs with whole-process lifetimes could use a separate linear allocator and avoid frees entirely.
>
> The author's explanation of why the simpler process-wide interface won is a hypothesis. Unix V7 also documented a garbage-collected allocator, and the article shows a contemporary use in Sam. That history complicates the idea that early C programmers always wanted explicit per-object frees.

2026-11-16 [C's Designated Initializers Give Us Named Arguments](https://quuxplusone.github.io/blog/2026/11/16/named-arguments-in-c/) { quuxplusone.github.io }

> ![Original editorial illustration for C's Designated Initializers Give Us Named Arguments](2026-11-21-links-from-my-inbox.assets/1802-c-s-designated-initializers-give-us-named-arguments.jpg)
>
> Arthur O'Dwyer shows how to get named arguments in C by passing a compound-literal options struct through a macro. The caller chooses which fields to specify using designated initializers. The macro can set defaults before the caller's optional initializers. In Epic's raddebugger, an animation macro supplies a target and default rate and lets a caller set an initial value or replace the rate.
>
> The author describes the pattern as heavier than a normal positional function. It adds a struct and macro, and is most useful when optional parameters would be difficult to recognize at a call site.

## Web / Browsers / Frontend

2026-09-02 [New Things You Should Know About HTML Here in Mid-2026](https://blog.master.dev/new-things-you-should-know-about-html-here-in-mid-2026/) { blog.master.dev }

> ![Orange stage curtains frame a paper browser with popovers and stacked components.](2026-11-21-links-from-my-inbox.assets/1486-new-things-you-should-know-about-html-here-in-mid-2026.jpg)
>
> Chris Coyier shows how newer HTML features move some widget behavior and component setup into the platform. The roundup covers features with browser implementations alongside more experimental proposals. For a customizable native select, opt in with `appearance: base-select` and use `<selectedcontent>` to mirror the chosen option inside the button. Declarative shadow roots let server-rendered markup reproduce a component's style boundary without a script attaching it. Scoped registries allow two shadow roots to define the same element name differently.
>
> Commands and invokers let one element trigger another's built-in action. Other examples include a search-revealable `hidden="until-found"` region and `sizes="auto"` on lazy-loaded images. Support varies across the features and proposed elements.

2026-10-01 [CSS Bed](https://www.cssbed.com/) { cssbed.com } *saved*

> ![One neutral form design branches into three differently colored themes.](2026-11-21-links-from-my-inbox.assets/1535-css-bed.jpg)
>
> CSS Bed runs the same semantic HTML through different classless themes. Holding the markup fixed lets you see what each stylesheet does to typography, forms, tables, and code blocks. The demo page includes controls and several heading levels alongside tables and inline text. Switching the stylesheet changes the treatment of those elements without requiring component-specific classes in the example markup.
>
> The gallery shows styles on one representative test document. An application still needs to test its own layout, spacing, modes, and accessibility requirements.

2026-10-04 [CSS field-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/field-sizing) { developer.mozilla.org } *saved*

> ![Three outlined form fields grow to different widths beneath drawn measurement arrows.](2026-11-21-links-from-my-inbox.assets/1548-css-field-sizing.jpg)
>
> With `field-sizing: content`, a form control can grow to fit what a person enters. A textarea can change height as text wraps, and a select can size to its content rather than using the normal fixed behavior. The examples pair content sizing with minimum and maximum dimensions. The constraints bound a text input that would otherwise be very narrow when empty or too wide for its container as the value grows.
>
> Effects differ by element type, including text fields, textareas, and selects. Fixed width or height styles can override the size the control would derive from its content.

2013-02-26 [Secrets of Awesome JavaScript API Design](https://webstandardssherpa.com/reviews/secrets-of-awesome-javascript-api-design.html) { webstandardssherpa.com }

> ![Original editorial illustration for Secrets of Awesome JavaScript API Design](2026-11-21-links-from-my-inbox.assets/1670-secrets-of-awesome-javascript-api-design.jpg)
>
> Brandon Satrom argues that a well-designed API lets users predict an unfamiliar call from a familiar one. Its organization should make the common operation easy to recognize and leave room for the complicated case. He uses Kendo UI's repeated widget-initialization pattern as an example. Modernizr's properties use feature names that resemble the underlying platform and return boolean-like values consistently, so learning one feature test teaches the others.
>
> The examples are from 2013 and their libraries are historical context. The design principle is about how naming, return shapes, and defaults fit together rather than adopting those libraries today.

2026-09-08 [Using Maths to Balance Your Heading Styles](https://www.craigabbott.co.uk/blog/2026/using-maths-to-balance-your-heading-styles/) { craigabbott.co.uk }

> ![Original editorial illustration for Using Maths to Balance Your Heading Styles](2026-11-21-links-from-my-inbox.assets/1673-using-maths-to-balance-your-heading-styles.jpg)
>
> A modular heading scale is multiplicative, so the proportional midpoint between two font sizes is their geometric mean. The author uses it to fill the jump between headings around 19 and 28 pixels. The geometric mean is the square root of the product, about 23 pixels here. It makes the intermediate heading sit the same ratio above the smaller size as the larger size sits above it. Spacing and weight provide additional hierarchy cues.
>
> The post suggests making size changes first, then grouping with spacing, then adjusting weight. The intermediate size preserves the overall scale rather than forcing a different ratio on every heading.

2026-11-05 [Nordstjernen Web Browser](https://nordstjernen.org/) { nordstjernen.org } *saved*

> ![Original editorial illustration for Nordstjernen Web Browser](2026-11-21-links-from-my-inbox.assets/1709-nordstjernen-web-browser.jpg)
>
> Nordstjernen is an independent browser focused on HTML and CSS compatibility across several operating systems. The maintainers compare behavior with the standards and test suite, and publish which areas remain incomplete. Each tab has its own sandboxed renderer process, with platform-specific isolation. The site reports that neither the JavaScript nor WebAssembly engine uses a just-in-time compiler. The release notes describe separate work on its HTML parser, JavaScript runtime, and document viewers.
>
> For the October 2026 snapshot, the project reports 91.5% of tests passing in the combined HTML, DOM, and URL groups and 73.2% in CSS. These are selected Web Platform Tests results, rather than the share of all websites the browser can load successfully.

2026-11-03 [Tasfer: A Text Editor Drawn on a 2D Canvas](https://www.hamza.se/blog/tasfer) { hamza.se }

> ![Original editorial illustration for Tasfer: A Text Editor Drawn on a 2D Canvas](2026-11-21-links-from-my-inbox.assets/1723-tasfer-a-text-editor-drawn-on-a-2d-canvas.jpg)
>
> Tasfer draws a Markdown editor on Canvas and uses a shared operation log to merge concurrent or offline edits. The project must implement the text behavior that a browser's editable DOM normally supplies. The drawing layer represents text as positioned content grouped into blocks. The application supports input methods and bidirectional text, and it sends edits over WebRTC DataChannels. A signaling relay also carries traffic when peers cannot establish a direct link.
>
> The project is local-first and its separate headless editor core is MIT-licensed. The repository distinguishes direct connections from relay fallback and lists both rich rendering and plain document editing.
>
> See also the [Tasfer repository and headless editor package](https://github.com/tasferlabs/tasfer).

2026-11-08 [A Critique of GPUI](https://blog.zortax.de/posts/a-critique-of-gpui) { blog.zortax.de }

> ![Original editorial illustration for A Critique of GPUI](2026-11-21-links-from-my-inbox.assets/1726-a-critique-of-gpui.jpg)
>
> The author argues that a complex interface needs to know exactly what changed and which parts of the UI depend on it. Coarse invalidation in GPUI and other systems can force application code to manage dependencies by hand. The proposed alternative uses signals read by specific reactive closures, so a component can set up its structure once. Tracking effects precisely is only part of the job. Globally shared state and a layout engine that revisits most widgets can make an apparently fine-grained UI expensive.
>
> In the author's 3,000-row test, Iced's whole-view update was 7.3 ms and virtualization brought its case to 0.19 ms. Floem spent about 0.01 ms on reactive work and roughly 14 ms in layout in a case that did not repaint. The author works on a competing framework. Medians came from one Linux machine and the adapters lacked maintainer review.

2026-11-11 [zxing-wasm](https://www.npmjs.com/package/zxing-wasm) { npmjs.com } *saved*

> ![Original editorial illustration for zxing-wasm](2026-11-21-links-from-my-inbox.assets/1750-zxing-wasm.jpg)
>
> zxing-wasm compiles ZXing-C++ to WebAssembly for barcode reading and writing. A scanning-only app can load the reader build independently of the generation code. The package accepts sources such as image data, byte arrays, and files. The caller can specify formats or how many symbols to look for. The README also shows how to supply or locate the WebAssembly binary in different environments.
>
> The documented binary sizes are about 1.46 MiB for full, 1.04 MiB for reader only, and 636 KiB for writer only. Those are binary sizes from the documentation, not compressed network payloads.
>
> See also the [live barcode demo](https://sec-ant.github.io/zxing-wasm-demo/).

2026-11-17 [Ledger: An Alloy CSS Example](https://alloyhtml.com/example.html#) { alloyhtml.com } *saved*

> ![Original editorial illustration for Ledger: An Alloy CSS Example](2026-11-21-links-from-my-inbox.assets/1792-ledger-an-alloy-css-example.jpg)
>
> Ledger demonstrates dialogs, menus, and tabs in a single-page invoice interface that keeps those interactions usable with JavaScript disabled. The author's public discussion identifies HTML elements such as popovers among the browser primitives that make this possible. That leaves presentation and state selectors to the stylesheet instead of requiring a script to implement every widget's basic behavior.
>
> The discussion also separates basic form behavior from richer needs like changing only one region after a request. The preview is an interface example, and its mock invoice data is not a working backend.

2026-11-18 [onehtml: HTML, CSS, and Accessibility for .NET](https://recursiveai.org/onehtml/) { recursiveai.org } *saved*

> ![Original editorial illustration for onehtml: HTML, CSS, and Accessibility for .NET](2026-11-21-links-from-my-inbox.assets/1794-onehtml-html-css-and-accessibility-for-net.jpg)
>
> onehtml parses browser-style HTML and CSS in C# and preserves byte ranges it does not edit. Its source map lets a tool make a targeted change without reserializing the whole file. The project separates HTML and CSS parsing, accessibility-tree construction, and rule validation. CSS value and layout facts can come from Chromium or another renderer when a check needs more than parsed source.
>
> The publisher reports a byte-identical round trip for all 18,330 pages and stylesheets in its corpus. A 100-page, 36 MB parsing run took 116.1 ms, versus 345.4 ms for AngleSharp 1.8.6 and 286.7 ms for HtmlAgilityPack 1.13.1 on the reported .NET 10 benchmark. That comparison was run with version 1.0.0.

2026-11-18 [Web Browser Engineering](https://browser.engineering/) { browser.engineering } *saved*

> ![Original cut-paper illustration of marked-up documents, a branching tree, and a rendered browser page](2026-11-21-links-from-my-inbox.assets/1797-web-browser-engineering.jpg)
>
> Web Browser Engineering teaches browser internals by building a small working browser in Python. The chapters connect requesting a page to laying out its text, executing scripts, and processing interactions. The browser grows in a sequence: URLs and HTTP, drawing to a window, building a document tree, styling, layout, and the machinery for dynamic pages. The programs are small enough to inspect while following the output in the example browser.
>
> The book is readable online without buying the print edition. Its roughly two thousand lines are a teaching implementation, with narrower standards and security coverage than a production browser.

## How the things work

2026-10-01 [Building Reliable Directory Sync](https://www.firezone.dev/blog/building-reliable-directory-sync) { firezone.dev }

> ![A conveyor processes a flow of identity cards while a scanner reconciles the line.](2026-11-21-links-from-my-inbox.assets/1537-building-reliable-directory-sync.jpg)
>
> Firezone separates fast updates from full reconciliation. The fast path responds to important directory changes, and a periodic full pull repairs missed updates without treating a vendor event stream as the only source of truth. A full pull marks records with a sync epoch as it enumerates users, groups, and membership, then removes records that were not seen. Batching, parallel provider requests, and asking for only the needed fields reduce the cost of sweeping a directory.
>
> The authors explain why chasing deltas alone is brittle: provider rules differ for deletes, nested groups need transitive membership recomputed, and saved delta tokens may expire. A full sweep still has a consistency window because the remote directory can change partway through it.

2026-10-06 [A Terminal Protocol for Program Status (OSC 7501)](https://mitchellh.com/writing/program-status-osc7501) { mitchellh.com }

> ![Original editorial illustration for A Terminal Protocol for Program Status (OSC 7501)](2026-11-21-links-from-my-inbox.assets/1581-a-terminal-protocol-for-program-status-osc-7501.jpg)
>
> Mitchell Hashimoto proposes OSC 7501 so terminal programs can explicitly report when they are working, blocked, done, or in error. A terminal can use these messages to build a status inbox without guessing from CLI output. Programs emit records using terminal escape sequences. An optional app identifier identifies the program and a Base64 message carries one human-readable line. Hierarchical identifiers support several simultaneous activities, so a deployment can report progress in one region and wait for approval in another.
>
> The post includes a POSIX shell wrapper for rsync and describes implementations in libghostty and Rex and proof-of-concept emitters in several programs. A terminal has to support the proposal to present the emitted status.

2026-10-10 [What I Self-Host, What I Don't, and Why](https://viceconsole.fyi/blog/2026/10/10/what-i-self-host/) { viceconsole.fyi }

> ![Original editorial illustration for What I Self-Host, What I Don't, and Why](2026-11-21-links-from-my-inbox.assets/1623-what-i-self-host-what-i-don-t-and-why.jpg)
>
> The author self-hosts services when the local alternative gives enough benefit to justify its maintenance. They access services through a VPN rather than exposing each application publicly. The home network's carrier-grade NAT prevents direct public IPv4 access, so the VPN is reachable over IPv6. The author prefers a native service with few dependencies and uses containers for complex applications. Backups, storage, and monitoring are distinct services in the inventory.
>
> The essay explains what stayed outside the setup, too. A network share and local LibreOffice made a hosted office suite unnecessary for most documents, and Actual Budget was simpler for this household than a multi-container Firefly III setup.

2026-10-28 [Smart Home Devices Should Work Without the Internet](https://docodethatmatters.com/home-automation-overnight-success/) { docodethatmatters.com }

> ![Original editorial illustration for Smart Home Devices Should Work Without the Internet](2026-11-21-links-from-my-inbox.assets/1742-smart-home-devices-should-work-without-the-internet.jpg)
>
> Spencer Kittleson's core home functions continue operating when the Internet connection fails. A Nest integration that stopped working after an API change motivated him to keep switching, sensor data, and automation on equipment he controls. The setup uses devices running Tasmota, messages sent through a local MQTT broker, and Node-RED automation on a Raspberry Pi. Cloud services such as voice control act as enhancements. Manual switches still work when connectivity goes away.
>
> The essay treats local operation as a design criterion rather than a single brand choice. It acknowledges that some integrations are hard to replace and includes two slide decks, reader feedback, and practical counterpoints.

2026-11-13 [Terminal Borders That Don't Cost a Cell](https://www.joshka.net/cell-borders/) { joshka.net }

> ![Original editorial illustration for Terminal Borders That Don't Cost a Cell](2026-11-21-links-from-my-inbox.assets/1761-terminal-borders-that-don-t-cost-a-cell.jpg)
>
> A Ratatui maintainer proposes drawing borders as terminal-cell attributes. A border takes no text row or column and follows its cell when the terminal scrolls, erases, or reflows the contents. Each cell supports up to twelve segments, with four edges split in half and four arms from its center. If two adjacent cells draw on the same edge, priority wins, then stroke width, then the right or lower cell. The priority lets a focused panel retain its outline.
>
> A capability query allows applications to fall back to box-drawing characters. The author implemented the protocol in a Ghostty patch and demonstrated it with Ratatui, and describes the protocol draft as early.

2026-11-13 [Lonewolf: XMPP with Teeth 🐺](https://github.com/lonewolf-im/lonewolf) { github.com } *saved*

> ![Original editorial illustration for Lonewolf: XMPP with Teeth 🐺](2026-11-21-links-from-my-inbox.assets/1762-lonewolf-xmpp-with-teeth.jpg)
>
> Lonewolf is a Rust XMPP server that hosts accounts on the operator's domain and federates with other servers. It bundles storage in one binary, so a small deployment can run without provisioning a separate database. It supports presence, contacts, offline messages, and copies across devices. Server federation uses certificate-authenticated TLS. The operator can set limits on connections, message rates, and resource use.
>
> The project calls itself pre-1.0. It discusses future clustering, but the current documented deployment is a single server.

2026-11-16 [Garage Door Spam](https://blog.harrison.page/garage-door-spam/) { blog.harrison.page }

> ![Original editorial illustration for Garage Door Spam](2026-11-21-links-from-my-inbox.assets/1803-garage-door-spam.jpg)
>
> After marketing alerts made his garage-door notifications hard to trust, Harrison replaced the cloud-dependent myQ integration with two ratgdo32 boards. The retrofit keeps the existing openers and provides local status and control. The boards speak LiftMaster's Security+ 2.0 protocol to the openers and integrate with HomeKit. A local JSON endpoint also lets a nightly job report whether either door has been left open. The author monitors board health separately.
>
> The boards cost about $62 each in the write-up. The setup describes these specific openers and reports better alert attribution for this household. It does not establish compatibility with every garage-door model.

2026-10-27 [OpenAI Still Has a WebRTC Problem](https://moq.dev/blog/webrtc-is-still-the-problem/) { moq.dev }

> ![Original editorial illustration for OpenAI Still Has a WebRTC Problem](2026-11-21-links-from-my-inbox.assets/1804-openai-still-has-a-webrtc-problem.jpg)
>
> The author argues that a voice assistant's useful latency target is often the arrival of enough context to answer, not immediate playout of every packet. A model can process previously buffered audio faster than people speak and catch up after a repair. For input, the author's Media over QUIC client can retransmit missing audio while a person is still talking. For output, the model can send audio as it becomes available and a timestamped client buffer can play it at a human pace.
>
> The author presents the buffering behavior as specific to the moq.dev client and Pipecat integration. The article explores design tradeoffs and future prioritization ideas; it supplies no controlled cross-protocol latency benchmark.

2026-11-19 [Do Not Buy RAM, Compress!](https://curiousbits.nl/blog/do-not-buy-ram-compress/) { curiousbits.nl }

> ![Original editorial illustration for Do Not Buy RAM, Compress!](2026-11-21-links-from-my-inbox.assets/1806-do-not-buy-ram-compress.jpg)
>
> Linux zram can keep more inactive pages in memory by compressing pages in a RAM-backed swap device. In the author's Firefox stress test on a 32 GB machine, it held 5.7 GB of data in 1.7 GB of RAM, about 3.35:1. The savings depend on how compressible the pages are. Compression also uses CPU time and adds latency when data has to be compressed or restored.
>
> The article's November 20 update changes its conclusion. The author says zram worked for his workload but plans to switch to zswap after reading responses about its advantages in more general setups.
>
> See also [zram on ArchWiki](https://wiki.archlinux.org/title/Zram). The ArchWiki explains how Linux uses a compressed block device in RAM and documents setup options for zram-backed swap.

## Data Engineering

2026-07-09 [PostgreSQL Partition Pruning on Non-Partition Key Columns](https://hakibenita.com/postgresql-partition-pruning) { hakibenita.com }

> ![Original editorial illustration for PostgreSQL Partition Pruning on Non-Partition Key Columns](2026-11-21-links-from-my-inbox.assets/1635-postgresql-partition-pruning-on-non-partition-key-columns.jpg)
>
> PostgreSQL can avoid time partitions when a query filters on a different column if table constraints prove that the other column cannot appear in some partitions. Benita demonstrates this with session IDs that tend to rise over time. The event table is partitioned by timestamp. Local indexes can accelerate lookups in every partition, but they cannot prove that a partition contains no relevant rows. Check constraints describing the ranges of session IDs give the planner information it can use through constraint exclusion.
>
> A long-lived session that spans years can introduce a session ID outside an otherwise narrow range. Enlarging a range to fit such an outlier weakens pruning. The article separates exceptional ranges from ordinary ones and uses a gaps-and-islands approach to reason about their boundaries.

2026-11-19 [Distributed, High-Performance Blob Storage on SQLite](https://zerodha.tech/blog/high-performance-distributed-blob-storage/) { zerodha.tech }

> ![Original illustration of a brass conveyor routing packets to separate turquoise drawers, representing independent SQLite shards](2026-11-21-links-from-my-inbox.assets/1801-distributed-high-performance-blob-storage-on-sqlite.jpg)
>
> Zerodha built Blobasaur, a Rust service speaking the Redis protocol, to store frequently read and written user-interface blobs in SQLite. It wanted exact per-key expiry and predictable latency without keeping all data in RAM. Keys map to nodes and then to SQLite files via consistent hashing. Each shard has a bounded write queue and one writer that commits batches in write-ahead-log mode. Read-only connections run concurrently. An optional in-memory pending map supports read-your-writes when the server acknowledges a request before commit.
>
> At 64 client connections with 64 KiB JSON blobs, moving from one to 16 shards raised writes from 7,740 to 25,324 operations per second. The median write fell from 8.2 to 2.1 ms. Read-only throughput barely changed. In production, a three-node cluster recorded about 2 ms at the 99th percentile across commands over a trading session.
>
> The service trades some durability for latency. With SQLite's NORMAL synchronization, power loss can lose recent commits, and asynchronous writes acknowledge before commit. Expiry cleanup originally drove 30–50 ms spikes because it competed for the same write lock. Sending bounded cleanup batches through the shard writer removed that contention. Shrinking a file takes incremental vacuum and a checkpoint.

## 🕸 Network and Security

2026-09-21 [SAML: A Fractal of Bad Design](https://blog.trailofbits.com/2026/09/21/saml-a-fractal-of-bad-design/) { blog.trailofbits.com }

> ![A red wax seal holds several offset translucent envelopes.](2026-11-21-links-from-my-inbox.assets/1488-saml-a-fractal-of-bad-design.jpg)
>
> The author argues that SAML's security failures recur because applications must safely interpret signed XML before turning it into an identity decision. Several layers can agree that a signature is valid while disagreeing on what the document says. The identity provider and service provider canonicalize XML so equivalent documents yield a stable representation for hashing. Enveloped signatures add another parsing problem because the signature sits inside the document. Different parsers or parse-and-serialize passes can disagree about the content a verifier checked.
>
> The post connects those behaviors to past disclosures and to the burden of supporting many protocol features. It favors OpenID Connect for new systems. The tradeoffs include integrations that still require SAML and correctness of the implementation using either protocol.

## 📀 Backup (Research)

2026-10-03 [Holocron: The Backup of Last Resort](https://smyck.net/2026/10/03/holocron-the-backup-of-last-resort/) { smyck.net }

> ![Optical discs beside a lockbox branch out toward three people.](2026-11-21-links-from-my-inbox.assets/1568-holocron-the-backup-of-last-resort.jpg)
>
> Holocron packages a minimal personal archive on Blu-ray M-Discs and gives copies to trusted people. The point is to recover essential data even if a disaster destroys the original machines and local backups. The author fits the archive on three discs, protects the most critical files with a password, and designs a physical case, label, and seal. The packaging makes the purpose obvious to a recipient who may need to store it for years.
>
> The archive is a last-resort snapshot rather than a full current copy of all data. Recovery depends on a readable disc, a compatible drive, and a way to retrieve the password. The article also links concerns about changes in discs marketed as M-Disc.

## Usual ML

2026-10-02 [Whistle: Speech to Text in 16.9 MB](https://cactuscompute.com/blog/whistle) { cactuscompute.com }

> ![Original editorial illustration for Whistle: Speech to Text in 16.9 MB](2026-11-21-links-from-my-inbox.assets/1579-whistle-speech-to-text-in-16-9-mb.jpg)
>
> Cactus's Whistle combines transcription, word timing, and audio embeddings in a 16.9 MB CPU model. It supports seven languages and uses one pass for up to 30 seconds of audio, then windows longer clips. A convolutional stem reduces 10 ms input steps to one encoder frame every 80 ms. Every run uses the full encoder, while the decoder can stop at a selected layer depth. The decoder caches cross-attention projections for a clip, so the five search beams do not each redo the audio encoding.
>
> On an Apple M4 Pro CPU, the authors report first-token times of 5.9, 11.1, and 36.3 ms for clips of 5, 10, and 30 seconds. They report lower word error than Whisper Base on LibriSpeech and FLEURS averages, while Whisper Base leads on TED-LIUM and the MLS average. The reported AMI subsets differ.

2026-10-10 [Build Your Own Decision Model](https://nishtahir.com/build-your-own-decision-model/) { nishtahir.com }

> ![Original editorial illustration for Build Your Own Decision Model](2026-11-21-links-from-my-inbox.assets/1610-build-your-own-decision-model.jpg)
>
> A fixed-choice model can pick the right label more often than chance while still being badly calibrated. In this tutorial's example, predictions in the 90–100% confidence bin averaged 98.6% confidence and were correct about 70.1% of the time. The model scores known labels. The author groups predictions by reported confidence, then fits a temperature of about 3.80 to flatten the probability distribution. This changes the confidence values while retaining the ordering of options.
>
> After scaling, the 90–100% bin averages 93.3% confidence and 95.4% accuracy, with 109 predictions instead of 809. The bin membership changed, so the figures do not imply those same 809 answers became more accurate. The fitted temperature belongs to this model and evaluation.

2026-10-24 [Building Reasoning Models from the Ground Up](https://magazine.sebastianraschka.com/p/building-reasoning-models) { magazine.sebastianraschka.com }

> ![Original editorial illustration for Building Reasoning Models from the Ground Up](2026-11-21-links-from-my-inbox.assets/1664-building-reasoning-models-from-the-ground-up.jpg)
>
> Sebastian Raschka's eight-video course builds the pieces of a reasoning model in Python and PyTorch. It starts with a base language model and goes on to measure how inference-time computation and training change the quality of its answers. The sequence implements generation and key–value caching, builds a verifier, and uses it to score generated answers. It then studies repeated sampling and self-consistency before covering reinforcement learning and distillation.
>
> There are over eleven hours of material. The verifier and exercises give the course a common evaluation setup, and the page lists its prerequisites and companion reading separately.

2026-11-09 [LLM Inference from Scratch with samir-vllm](https://github.com/samir-sarwar/samir-vllm) { github.com } *saved*

> ![Original editorial illustration for LLM Inference from Scratch with samir-vllm](2026-11-21-links-from-my-inbox.assets/1729-llm-inference-from-scratch-with-samir-vllm.jpg)
>
> samir-vllm follows a transformer from a model file to a generated token using C++ and CUDA. A video series and hand-written notes let readers trace the data through decoding and scheduling. The implementation reads safetensors metadata, validates offsets, and transfers raw weights to GPU memory. The program includes tokenization, embeddings, RMS normalization, rotary position encoding, attention, feed-forward layers, and the key–value cache used during decoding.
>
> The code targets the fixed weight layout of Llama 3.2 1B Instruct. It demonstrates continuous batching and paged attention concepts in a learning implementation rather than serving as a generic replacement for a production engine.

2026-11-09 [e-means: Outperforming k-means in One-Tenth the Epochs](https://e-means.github.io/) { e-means.github.io } *saved*

> ![Original editorial illustration for e-means: Outperforming k-means in One-Tenth the Epochs](2026-11-21-links-from-my-inbox.assets/1731-e-means-outperforming-k-means-in-one-tenth-the-epochs.jpg)
>
> E-means replaces Lloyd's full-dataset centroid recomputation with mini-batch updates based on exponential moving averages. The authors aim to match or beat the clustering loss in far fewer passes over the dataset. Moving averages weight recent point assignments more than stale ones. The authors set step and batch sizes using scale-dependent defaults and replace dead clusters by splitting populated ones. Fused GPU assignment kernels reduce the time spent assigning vectors to their nearest centers.
>
> Across the VIBE embedding benchmark, the authors report matching the loss of 25 Lloyd epochs in roughly two epochs, with the exact count depending on the dataset. The paper reports wall-clock gains of 10–45 times against selected high-performance Lloyd implementations on its GPU tests.
>
> For comparisons, read test mean squared error against wall-clock time and hold the dataset and center count fixed. Faster convergence does not directly measure downstream retrieval quality. SuperEMeans separately tests that question.

2026-11-13 [Watch a Brain Learn](https://aatishb.com/myriad/how-brains-learn/) { aatishb.com }

> ![Original editorial illustration for Watch a Brain Learn](2026-11-21-links-from-my-inbox.assets/1776-watch-a-brain-learn.jpg)
>
> Watch a Brain Learn makes a learner's changing parameters visible. A four-neuron creature has three adjustable connection values, so every possible brain can be plotted as one point in a three-dimensional space. The creature tries altered connections and receives more reward when it spends more time near the light. The visualization plots the history of candidate brains, not the creature's path across the screen.
>
> In the illustrated run, the creature is still meandering at around 50 tries and follows the light closely after 2,000. Different starting points take different paths and some take thousands of trials. The toy's size is what lets the full search space be shown.

2026-11-17 [SuperEMeans: Making e-means 3× Faster](https://www.lkuffo.com/superemeans/) { lkuffo.com }

> ![Original editorial illustration for SuperEMeans: Making e-means 3× Faster](2026-11-21-links-from-my-inbox.assets/1796-superemeans-making-e-means-3-faster.jpg)
>
> SuperEMeans combines e-means' faster convergence with SuperKMeans' cheaper point-to-centroid assignments. The benchmark asks whether the savings hold when the clusters are used to build an index. The method operates on high-dimensional embeddings and avoids doing full-dimensional work for every comparison. The author tests Index IVF-style retrieval, where clusters decide which parts of a vector corpus a query searches first.
>
> The experiments use 5 million 1,536-dimensional OpenAI embeddings and 10 million 1,024-dimensional Cohere embeddings. At the five-epoch default, the author reports up to a threefold clustering speedup. Retrieval comparisons report recall together with how many vectors an index scans.
>
> The cluster loss is only a proxy for index quality. Compare the index at comparable recall or search work in addition to build time. The size of the improvement depends on the dataset and epoch budget.

## Learning

2018-07-03 [Competitive Programmer's Handbook](https://cses.fi/book/book.pdf) { cses.fi }

> ![A programming handbook sits between blocks that represent growth rates and small data structure models.](2026-11-21-links-from-my-inbox.assets/1560-competitive-programmer-s-handbook.jpg)
>
> Antti Laaksonen's handbook teaches algorithms by connecting a problem's input size to a feasible running time. The time-complexity chapter demonstrates this with progressively better algorithms for the maximum-subarray-sum problem. The surrounding chapters move from sorting and binary search to data structures, dynamic programming, and graph algorithms. The code examples use C++ and the material builds on basic programming rather than expecting prior contest experience.
>
> This is a handbook of techniques, so its examples illustrate algorithmic decisions rather than performance on a specific modern machine. The saved PDF is the free edition.

2026-10-12 [Calculus with Julia: From Calculator to Computer](https://jverzani.github.io/CalculusWithJuliaNotes.jl/basics/calculator.html) { jverzani.github.io } *saved*

> ![Original editorial illustration for Calculus with Julia: From Calculator to Computer](2026-11-21-links-from-my-inbox.assets/1615-calculus-with-julia-from-calculator-to-computer.jpg)
>
> The first chapter turns the operations on a basic calculator into Julia expressions and programs. It uses arithmetic to teach distinctions that matter in later calculus examples, including order of operations, numeric literals, and function calls. The chapter compares infix, prefix, and postfix notation, shows two ways to express division, and develops function calls from one argument to several. It also asks readers to interpret error messages and answer short exercises.
>
> This is a foundational chapter of a larger text. Its examples build comfort with the programming representation before using it for differentiation, integration, or other calculus topics.

2026-11-17 [CS Learn: Free Carnegie Mellon Computer Science Lectures](https://www.cs.cmu.edu/learn/) { cs.cmu.edu } *saved*

> ![Original editorial illustration for CS Learn: Free Carnegie Mellon Computer Science Lectures](2026-11-21-links-from-my-inbox.assets/1789-cs-learn-free-carnegie-mellon-computer-science-lectures.jpg)
>
> Carnegie Mellon's CS Learn directory publishes full lecture sequences for courses in machine learning, systems, software engineering, robotics, and other areas of computer science. The university links the lectures by course. The course numbers and sequence show where a topic fits and make the collection more useful than isolated clips or conference talks.
>
> The page distinguishes free videos already available from courseware still planned. The lectures are a public study resource and do not imply enrollment or credit.

## Emacs

2021-04-12 [Moving Text Around in Emacs Using move-text](https://www.philnewton.net/blog/moving-text-in-emacs/) { philnewton.net }

> ![Original editorial illustration for Moving Text Around in Emacs Using move-text](2026-11-21-links-from-my-inbox.assets/1609-moving-text-around-in-emacs-using-move-text.jpg)
>
> Phil Newton uses move-text to shift the current line or selected region up or down in Emacs without cutting and pasting. It also works in source buffers. The package provides separate commands for moving in each direction. Newton remaps the defaults to Control-Shift and the arrow keys to make small reorderings direct.
>
> The author still finds cut and paste quicker when carrying a large region a long distance. The package is suited to nearby shuffling.

## 🛜 RSS

2026-09-29 [NetNewsWire](https://netnewswire.com/) { netnewswire.com } *saved*

> ![Paper RSS cards flow into a reading list that synchronizes with a cloud.](2026-11-21-links-from-my-inbox.assets/1525-netnewswire.jpg)
>
> NetNewsWire is an RSS and Atom reader that keeps track of what a person has read across subscriptions. It can fetch feeds directly or synchronize with a service such as iCloud, Feedbin, or FreshRSS. The Mac and iOS apps support folders, unread and today views, starring, filtering, and OPML import and export. On the Mac, keyboard controls and AppleScript make the reader usable outside a pointer-driven workflow.
>
> Direct downloads and third-party synchronization are separate account choices. The publisher lists macOS 15 or later and iOS 26 or later for the featured release.

2022-05-06 [RSS Feed Best Practices](https://kevincox.ca/2022/05/06/rss-feed-best-practices/) { kevincox.ca }

> ![A tagged article passes through an RSS symbol into an indexed feed tray.](2026-11-21-links-from-my-inbox.assets/1546-rss-feed-best-practices.jpg)
>
> A feed reader uses a stable entry ID to decide whether it has already seen an article. Changing IDs during a migration can duplicate old entries, while reusing an ID can hide a new one. The guide favors globally unique IDs, usually article permalinks, and recommends changing the ID scheme only for new items. It also discusses absolute URLs, correct content types, HTML feed discovery, and full article content.
>
> RSS and Atom use related but distinct date fields and conventions. Maintaining an original post's identity is independent of whether the feed is available in more than one format.

## 📺 ffmpeg and media

2026-10-13 [You Should Absolutely Download Your Favourite YouTube Videos](https://criminallyvulgar.dev/you-should-absolutely-download-your-favourite-youtube-videos/) { criminallyvulgar.dev }

> ![Original editorial illustration for You Should Absolutely Download Your Favourite YouTube Videos](2026-11-21-links-from-my-inbox.assets/1708-you-should-absolutely-download-your-favourite-youtube-videos.jpg)
>
> The author archives YouTube channels in Jellyfin while preserving their series structure. ytdl-sub maps a playlist title to a Jellyfin season, so unrelated series from one channel do not all land in one list. The setup treats the channel as a show, playlists as seasons, and videos as episodes. It also describes a Tdarr job that re-encodes library files to HEVC when storage is scarcer than compute.
>
> Re-encoding saved about 700 GB across the author's 2 TB library. It also broke some thumbnails and needed a script adjustment for files with data streams. Jellyfin did not reliably revise the season number on an existing import without a full library reimport.

## 🌈 Recreational Programming

2026-09-05 [Bespoke: A Programming Language for People Who Say Please](https://blog.hofstede.it/bespoke-a-programming-language-for-people-who-say-please/) { blog.hofstede.it }

> ![A formal handwritten request arrives on a silver tray beside a beige computer.](2026-11-21-links-from-my-inbox.assets/1498-bespoke-a-programming-language-for-people-who-say-please.jpg)
>
> Bespoke turns an instruction into a formal request to its recipient. Allocating memory addresses the Compiler, printing addresses the Output Console, and filesystem requests address the Host Environment. The examples embed types, bindings, and control flow in ceremony. A mutation needs an apology, and the syntax reserves distinct language for failure and concurrency. A complete program shows how the address and closing wrap a sequence of operations.
>
> Its joke is applied consistently across the language. The page uses forms of address to distinguish effects that usually share a short command syntax.

2026-02-15 [Solving Factorio Quality](https://exyr.org/2026/solving-factorio-quality/) { exyr.org }

> ![A factory conveyor sorts colored blocks and loops rejected material through a recycler.](2026-11-21-links-from-my-inbox.assets/1531-solving-factorio-quality.jpg)
>
> Factorio's quality system can be modeled as expected flows across five quality tiers. The article uses that model to compare making better items in one craft, repeatedly recycling them, and recycling ingredients back into the assembly line. Each crafting operation multiplies a vector of quality-tier counts by a transition matrix. Several machines compose by multiplying their matrices. In a recycling loop, the article balances fresh inputs against material returned by the loop, then solves the resulting linear system by Gaussian elimination.
>
> With the best modules in a self-recycling example, the model needs about 2,727 normal items per legendary output. Reprocessing asteroid chunks can yield one legendary chunk of a chosen type per 71.5 fresh chunks in the article's setup. These are long-run expectations for distinct recipes and filters.

2026-09-22 [We ported the original Doom to SQL](https://cedardb.com/blog/sqldoom/) { cedardb.com }

> ![A controller sends input through a database symbol to a stylized rendered corridor.](2026-11-21-links-from-my-inbox.assets/1557-we-ported-the-original-doom-to-sql.jpg)
>
> CedarDB put Doom's simulation and rendering in SQL. Python hands over input and displays results. It does not calculate the game world or draw the pixels itself. Each game tick mutates the tables in a transaction. Rendering is a separate query over a consistent world state, with SQL handling geometry, visibility, and pixel work. Separating the renderer from simulation lets it read snapshots and lets multiplayer clients see a coherent tick.
>
> The author kept game logic at 35 Hz and reported about 60 fps for the 320×200 renderer on a Ryzen 7 PRO 7840U laptop, dropping to about 35 fps in busy scenes. Selecting the nearest surface per pixel took 8.2 ms on average, over a third of the frame. Color is packed with depth so the minimum value identifies the winning pixel without another join.
>
> For an unusual database example, the strongest use of relational semantics is the shared, transactionally consistent world. It is an experiment with a particular execution engine and rendering path, not a reason to move arbitrary games into SQL.

2026-03-18 [Fancy Curl Sites](https://nytpu.com/gemlog/2026-03-18) { nytpu.com }

> ![Original editorial illustration for Fancy Curl Sites](2026-11-21-links-from-my-inbox.assets/1619-fancy-curl-sites.jpg)
>
> Fancy Curl Sites serves an ANSI-styled plain-text version of a blog to curl. It keeps the same page addresses and selects the terminal-friendly representation based on the requesting user agent. The author's Gemroff markup already emitted ANSI text for local preview. Their static generator could therefore render an alternate file beside the HTML, and Nginx selected it for curl. An override header lets an ordinary curl request ask for the original response.
>
> The author's setup worked because the site already targeted HTTP, Gemini, and Gopher. Sites without a multi-output generator can start with a few handwritten text pages. Terminal support affects how the ANSI output appears.

2026-10-18 [Teal: A Typed Dialect of Lua](https://teal-language.org/) { teal-language.org } *saved*

> ![Original editorial illustration for Teal: A Typed Dialect of Lua](2026-11-21-links-from-my-inbox.assets/1631-teal-a-typed-dialect-of-lua.jpg)
>
> Teal adds compile-time types to Lua and generates Lua source. It lets developers add checks for tables and function interfaces while keeping the Lua runtime and ecosystem. The site shows records, type annotations, and generics. The command-line workflow checks Teal source and produces a Lua file to run or distribute. Type declarations can describe external Lua modules.
>
> Types catch errors during checking. The generated output remains Lua, so adoption still has to account for the host's runtime and the declarations available for existing code.

2026-10-18 [Regex Marble Run](https://www.regexmarblerun.com/#p=PC4rPg&f=&s=PGI-Ym9sZDwvYj4&preset=greedy) { regexmarblerun.com } *saved*

> ![Original illustration of a glass marble about to take one of two routes through a wooden machine](2026-11-21-links-from-my-inbox.assets/1638-regex-marble-run.jpg)
>
> Regex Marble Run draws a regex as a set of tracks and gates. In the saved example, a greedy wildcard consumes through the last closing angle bracket in a short HTML string. Making it lazy stops at the first one that satisfies the rest of the pattern. A character test is represented by a gate, alternation by a branch, and repetition by a loop. A greedy loop tries another repetition before trying its exit. A lazy loop checks the exit first.
>
> Secondary coverage describes the animation as a teaching model. It is useful for watching a match or backtrack in one implementation, while regex engines and supported features can differ.

2018-04-12 [The 128-Language Quine Relay](https://esoteric.codes/blog/the-128-language-quine-relay) { esoteric.codes }

> ![Original editorial illustration for The 128-Language Quine Relay](2026-11-21-links-from-my-inbox.assets/1658-the-128-language-quine-relay.jpg)
>
> Yusuke Endoh's 128-language Quine Relay prints a program in a different language on every run. After 128 handoffs, the final program prints the original Ruby source. A quine normally prints its own program without reading its source. Here the self-reproduction is distributed across a cycle. The chain starts with Ruby producing Rust, and the produced program becomes the input to the next interpreter or compiler in the sequence.
>
> The result is a property of the complete execution cycle. Each intermediate program outputs the next source, which relies on the corresponding language environment being available.

2026-11-18 [Type Fighter II](https://typefighter2.com/) { typefighter2.com } *saved*

> ![Original pixel-art illustration of the F and J keyboard keys colliding in a burst of arcade sparks](2026-11-21-links-from-my-inbox.assets/1795-type-fighter-ii.jpg)
>
> Type Fighter II makes fast, accurate word entry the control for an arcade fighter. A high score and leaderboard link success in a match to the typing task. The game uses a physical keyboard for typing and offers arrow keys and Enter or Space for moving through the interface. The project also offers a mobile-testing mode.
>
> The publisher's title screen and public description establish the core game and menu controls. Mobile support is still described as testing, and a physical keyboard is the intended experience.

## 😁 Fun / Retro

2026-09-25 [Ten Lines of Code That Changed My World](https://pixelambacht.nl/2026/ten-lines-of-code/) { pixelambacht.nl }

> ![An open notebook shows ten short lines, a loop, and a grid drawing.](2026-11-21-links-from-my-inbox.assets/1507-ten-lines-of-code-that-changed-my-world.jpg)
>
> Ten Lines of Code That Changed My World uses small fragments to show what the author was learning at different points. The examples range from making a 6502 program modify itself to using CSS to see the boundaries of a page. The CSS example turns a web page's boxes into a visual debugging surface. The 6502 example shows code and data sharing writable memory, a property that makes instructions themselves mutable.
>
> The fragments are autobiographical. Their significance comes from what each let the author see or do, rather than from an argument that the techniques all belong in current software.

2026-10-04 [Visual Basic Browser Studio](https://wieslawsoltes.github.io/VB6/) { wieslawsoltes.github.io } *saved*

> ![A miniature development environment contains a form designer, editor, and run button.](2026-11-21-links-from-my-inbox.assets/1551-visual-basic-browser-studio.jpg)
>
> VB6 Studio Web combines a Visual Basic-style form designer with a source editor and runtime in the browser. The initial Order Entry project shows how controls and corresponding event handlers work together. Running a form opens the project in an embedded window, and the handlers execute in the browser. The project can save an editable .vb6web file or export a single HTML app with its own runtime.
>
> The project is a browser implementation of a classic workflow, with virtual project files and platform-specific limits. The documentation separates validation of the emitted HTML from browser launch probes that were blocked in its test environment.

2026-10-07 [Margaret Hamilton and the Software Behind Apollo](https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007) { news.mit.edu }

> ![Original editorial illustration for Margaret Hamilton and the Software Behind Apollo](2026-11-21-links-from-my-inbox.assets/1576-margaret-hamilton-and-the-software-behind-apollo.jpg)
>
> MIT's account of Margaret Hamilton describes how the Apollo Guidance Computer could continue landing work during an overload. The flight software dropped lower-priority tasks and retained the ones the landing needed. During Apollo 11's descent, a hardware-switch issue overloaded the computer and triggered the 1202 alarm. The priority-driven design kept critical work going, and mission control let the descent proceed.
>
> The article credits Hamilton and the Apollo software team. It follows her work after Apollo, including companies focused on fault tolerance and the Universal Systems Language for system modeling.

2026-10-13 [I Love Software Rendering](https://www.jamesfmackenzie.com/2026/10/13/i-love-software-rendering/) { jamesfmackenzie.com }

> ![Original editorial illustration for I Love Software Rendering](2026-11-21-links-from-my-inbox.assets/1627-i-love-software-rendering.jpg)
>
> James Mackenzie prefers software rendering for many DOS games because their pixel-sharp textures and stepped lighting are part of the original look. Rendering speed alone misses the visual difference. These renderers often sample a nearest texel and use lookup tables within a 256-color palette. Early accelerated modes can apply bilinear texture filtering and smoother lighting. Quake's DOS renderer exemplifies the crisp square texture samples.
>
> Mackenzie prefers Blood's VESA software modes to its 3dfx look, but likes the accelerated version of Tomb Raider's underwater sections. Software rendering at high resolutions also requires enough CPU power for the selected game.

2026-10-23 [Windows NT 3.x Mouse Driver for QEMU and VMware](https://github.com/rhargreaves/vmmouse-nt3) { github.com } *saved*

> ![Original editorial illustration for Windows NT 3.x Mouse Driver for QEMU and VMware](2026-11-21-links-from-my-inbox.assets/1649-windows-nt-3-x-mouse-driver-for-qemu-and-vmware.jpg)
>
> VMMouse for NT 3.x adds support for the VMware-style virtual mouse to an older Windows NT guest. It provides a way to use a virtual pointer with a guest that did not ship with the driver. The project packages the driver on an installable virtual CD and includes source, tests, and a Docker build. The README describes a reboot after installation and documents an uninstall path.
>
> The author confirms only Intel Windows NT 3.51 Service Pack 5. Treat other NT 3.x releases or virtual-machine combinations as unverified by the README.

2026-10-26 [Switzerland at 1:1 in Minecraft](https://blocks.manifold3d.ch/) { blocks.manifold3d.ch } *saved*

> ![Generated voxel diorama of the Aletsch Glacier, with visibly stepped Alpine ridges and two dark bands winding through the ice](2026-11-21-links-from-my-inbox.assets/1667-switzerland-at-1-1-in-minecraft.jpg)
>
> This project makes Switzerland walkable in Minecraft at a scale of one block per meter. It uses open swisstopo data to make the terrain, lakes, forests, glaciers, and dams recognizable. The conversion rounds features in the elevation model to the game's meter grid. The website compares prominent landmarks and provides downloads and setup instructions for Minecraft Java 1.12.2 with Cubic Chunks.
>
> A one-meter grid describes the model's scale, not survey accuracy for every feature. The project pins an older Minecraft version and specific tooling to represent the terrain.

2026-10-29 [Sixteen Colors: ANSI and ASCII Art Archive](https://16colo.rs/) { 16colo.rs } *saved*

> ![Original editorial illustration for Sixteen Colors: ANSI and ASCII Art Archive](2026-11-21-links-from-my-inbox.assets/1688-sixteen-colors-ansi-and-ascii-art-archive.jpg)
>
> Sixteen Colors preserves ANSI and ASCII artpacks, collections groups distributed through bulletin-board systems and later channels. The pieces were built for text-mode screens, using characters and attributes as a drawing medium. The archive organizes the form around group releases rather than showing a handful of famous pictures. Its history identifies ACiD and iCE as examples of collectives that released packs and competed for attention.
>
> The site traces the decline of dial-up bulletin boards separately from the artists who continued producing packs afterward. Its collection is a way to see that work in context.

2026-11-14 [The Secret of Monkey Island: All 13 Versions Side by Side](https://monkeyisland.pages.dev/) { monkeyisland.pages.dev } *saved*

> ![Original editorial illustration for The Secret of Monkey Island: All 13 Versions Side by Side](2026-11-21-links-from-my-inbox.assets/1775-the-secret-of-monkey-island-all-13-versions-side-by-side.jpg)
>
> The Monkey Island comparison shows the same twelve moments across thirteen releases. Switching machines keeps the scene fixed, so a reader can see how palette, resolution, and framing changed across ports. The viewer draws each capture from its native pixels, offers aspect correction, and uses WebGL2 ports of CRT shader presets. The Mac's 640×400 image appears inside a 640×480 screen, which creates black bars in that comparison.
>
> The PC sixteen-color capture is from a Spanish copy and the monochrome Atari ST capture is from a French copy. The source and capture notes make it possible to distinguish hardware differences from differences in the chosen release.

2026-11-15 [25 of My Favourite Modern NES Games](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/) { jordi.inversethought.com }

> ![Original editorial illustration for 25 of My Favourite Modern NES Games](2026-11-21-links-from-my-inbox.assets/1783-25-of-my-favourite-modern-nes-games.jpg)
>
> Jordi surveys 25 modern NES games built for the original system. The collection's value is the notes on how developers use familiar controls and hardware limits to create new gameplay. In Micro Mages, up to four players can jump and shoot up a tower. Players who die return as ghosts and can still help by temporarily freezing enemies. That keeps a co-op session active for everyone even as some players fall behind.
>
> The article includes physical, digital, and demonstration links where available. Some games are commercial, but the article and its critical notes are available without purchasing them.

## 💖 Inspiration!

2026-09-24 [Bastardica](https://bastardica.mitpit.com/) { bastardica.mitpit.com } *saved*

> ![Blue and yellow letters A alternate between two distinct typefaces.](2026-11-21-links-from-my-inbox.assets/1492-bastardica.jpg)
>
> Bastardica mixes typefaces by periodically substituting a glyph from another font. It exports an actual OpenType font that can reproduce the substitutions in software with ligatures enabled. It uses contextual ligature rules and runs fontTools through Pyodide locally in the browser. The designer can scale or shift the alternate glyphs to align them. Two strides of five and seven collide on every 35th glyph, and the earlier font wins that collision.
>
> The project describes the substituted font as a derivative. Which uses are allowed depends on the source fonts' licenses, and applications with ligatures disabled may show the base face instead.

2026-10-02 [Book of Shapes](https://bookofshapes.com/) { bookofshapes.com } *saved*

> ![Slider controls and a book of geometric patterns lead to an exported chevron sheet.](2026-11-21-links-from-my-inbox.assets/1538-book-of-shapes.jpg)
>
> Nikolaj Sokolowski's Book of Shapes lets a designer edit a generative pattern and export its SVG. The collection includes grids, radial designs, flow fields, and other geometric constructions. The controls vary by pattern. On Chevron Blocks, for instance, you can adjust the number and thickness of bands, how they taper, and which seeded layout you see.
>
> The interface separates the pattern family from its settings. A custom reuse license applies, so check the terms for the particular pattern before publishing an export.

2026-10-14 [Iosevka](https://typeof.net/Iosevka/) { typeof.net } *saved*

> ![Original editorial illustration for Iosevka](2026-11-21-links-from-my-inbox.assets/1620-iosevka.jpg)
>
> Iosevka is designed to fit many characters on a line while keeping them distinguishable. Its family includes monospace, terminal, and no-ligature fixed versions, with slab-serif variants alongside them. The specimen lets readers compare glyphs and spacing across families. Proportional-looking Aile and Etoile are listed as quasi-proportional alternatives to the narrower coding faces.
>
> The font choice affects what the editor or terminal can render, including ligatures and cell alignment. The source documents different variants rather than a single setting that suits both.

2026-10-15 [DEsk: A Skeuomorphic Wayland Desktop](https://github.com/fyzugx/DEsk) { github.com } *saved*

> ![Original editorial illustration for DEsk: A Skeuomorphic Wayland Desktop](2026-11-21-links-from-my-inbox.assets/1624-desk-a-skeuomorphic-wayland-desktop.jpg)
>
> DEsk draws a Wayland desktop as a physical desk. Windows are papers, the dock is a drawer, and applications and messages have places that correspond to binders and a post box. The metaphor shapes interaction, not just textures. The project includes a browser demo, and its beta adds tools such as a notebook, calculator, and camera as objects in the workspace.
>
> It is an early release of a Linux desktop environment with its own applications and input behavior. The interactive demo illustrates the design without promising the same behavior as an installed compositor.

2026-10-27 [Nogon, Formerly Hister: Your Own Search Engine](https://hister.org/) { hister.org } *saved*

> ![Original editorial illustration for Nogon, Formerly Hister: Your Own Search Engine](2026-11-21-links-from-my-inbox.assets/1674-nogon-formerly-hister-your-own-search-engine.jpg)
>
> Nogon indexes the full content of pages and files the user chooses. A query can find words in a saved document even when its original title or URL gives no clue where to look. A browser extension, file watcher, imported history, or crawler supplies material to a configured server. The server stores the content, indexes it, and can show a clean document preview beside search results. Clients include a web UI, CLI, and MCP interface.
>
> The operator chooses where the server runs. The project says it needs no cloud service or telemetry, but the index and stored pages remain data that the server owner has to manage.

2026-11-09 [Declarative Dragging](https://declarative-dragging.github.io/) { declarative-dragging.github.io } *saved*

> ![Original editorial illustration for Declarative Dragging](2026-11-21-links-from-my-inbox.assets/1727-declarative-dragging.jpg)
>
> Declarative Dragging lets an interface author list the states that dragging an object may produce. Dragology works out how to move the visual element by rendering those possible states in advance. The engine compares view trees and extracts the object's location in each future state. It uses those positions to synthesize the interaction, and modifiers add behavior such as snapping or floating. Several simple drag behaviors can be composed.
>
> The library targets web interfaces drawn in SVG. The authors find the method particularly useful when several views show the same model, because a change can update all representations coherently.

2026-11-09 [Someone Was Here](https://someonewashere.app/) { someonewashere.app } *saved*

> ![Original editorial illustration for Someone Was Here](2026-11-21-links-from-my-inbox.assets/1734-someone-was-here.jpg)
>
> Someone Was Here records a photo when a different person sits down at a Mac and tells the owner when they return. The owner's face is enrolled in a short setup, and the app compares photos locally. The project makes the camera light, menu-bar presence, and local storage part of the design. A notification on returning is free, while an optional phone-alert purchase can forward a photo through configured services.
>
> The publisher requires macOS 14 or later, describes the free local behavior, and asks users in shared spaces to tell people the app is present. Phone alerts change where information is sent.

2026-11-20 [Slopstrap](https://slopstrap.mikelacher.com/) { slopstrap.mikelacher.com } *saved*

> ![Original editorial illustration for Slopstrap](2026-11-21-links-from-my-inbox.assets/1808-slopstrap.jpg)
>
> Slopstrap packages recognizable habits of generated landing pages as reusable styles. The joke works because the toolkit can make an ordinary page acquire those habits on demand. The demo includes status pills, gradient titles, background grid lines, and ambient glowing orbs. Its quickstart shows that the look can be assembled by adding a stylesheet and a small number of classes.
>
> The publisher presents it as satire of a visual convention. A components page and a demo give readers separate ways to inspect the individual ornaments and combined effect.

## Really, other

2026-09-29 [Americans' Social Activity Has Steeply Declined in the Past 30 Years](https://www.dataforprogress.org/blog/2026/9/29/americans-social-activity-has-steeply-declined-in-the-past-30-years) { dataforprogress.org }

> ![Original editorial illustration for Americans' Social Activity Has Steeply Declined in the Past 30 Years](2026-11-21-links-from-my-inbox.assets/1621-americans-social-activity-has-steeply-declined-in-the-past-30.jpg)
>
> Data for Progress asked 1,098 U.S. adults about specific social activities in the preceding year and repeated prompts from a 1995 survey. The results show which activities have changed instead of treating all social contact as one measure. The historic comparison uses the DDB Needham Life Style survey questions. Respondents said how often they had done each activity, enabling a comparison of people participating at least once and of more frequent participation.
>
> Home entertaining fell from 88% in 1995 to 67% in 2026, church attendance from 74% to 54%, picnics from 58% to 39%, and club meetings from 45% to 26%. A separate survey found that the share reporting at least five close friends declined from 63% in 1990 to 38% in 2021.

2026-10-20 [How Japanese Dried Bonito Is Made](https://kottke.org/26/10/how-japanese-dried-bonito-is-made) { kottke.org }

> ![Original editorial illustration for How Japanese Dried Bonito Is Made](2026-11-21-links-from-my-inbox.assets/1657-how-japanese-dried-bonito-is-made.jpg)
>
> A fifth-generation maker at Kanesa Katsuobushi Shoten prepares dried bonito using tebiyama, a hand-tended smoke-drying method preserved by a small number of Japanese workshops. Fresh bonito is filleted and boiled for about 90 minutes. It is repeatedly smoke-dried over wood, repaired with bonito paste, then fermented with koji mold and sun-dried for months.
>
> The workshop was founded in 1882. The video and linked workshop notes describe more than ten drying cycles and a total process lasting more than half a year, rather than one smoking session.

## A few more links

### Good Reads

2026-09-22 [Work-to-rule](https://www.wikiwand.com/en/Work-to-rule) { wikiwand.com } *saved*

> ![A time clock and a row of checked work cards sit beside a conveyor.](2026-11-21-links-from-my-inbox.assets/1487-005.jpg)
>
> Work-to-rule is a labor action in which workers follow formal rules exactly and stop supplying informal flexibility or unpaid work. The slowdown exposes what normal operations depend on. The article gives an example of British postal workers starting at their contracted time, stopping at the end of the shift, using official vehicles, and checking bag weights. It also describes railway workers strictly carrying out bridge-safety checks normally handled with more discretion.
>
> The examples cover several occupations and historical disputes. Workplace contracts and local rules matter, so the examples identify the mechanism without establishing its legal status everywhere.

2026-09-27 [When an Editor Loses Your Undo History](https://unsung.aresluna.org/they-had-no-concept-of-a-duty-of-care-to-their-users/) { unsung.aresluna.org } *saved*

> ![A stack of paper records ends at a ragged blue tear.](2026-11-21-links-from-my-inbox.assets/1505-021.jpg)
>
> David Chisnall tried an early version of Neovim and found that it had silently replaced his Vim undo file with an incompatible one. The old edit history was gone even when he opened the document in Vim again. Vim's persistent undo lets Chisnall recover a deletion from days earlier or inspect the edits that broke working code after a refactor. It survives closing the editor, rebooting, and, in his experience, roughly two decades of Vim upgrades.
>
> Chisnall says the project treated the format as unstable, a response he took as evidence he could not trust its handling of his files. Unsung connects that response to Jef Raskin's principle that software must protect a user's work. The account concerns an early Neovim version.

2026-10-31 [Fast and Slow Ways to Improve Your Reputation](https://www.seangoedecke.com/how-to-get-assigned-interesting-work/) { seangoedecke.com } *saved*

> ![Original editorial illustration for Fast and Slow Ways to Improve Your Reputation](2026-11-21-links-from-my-inbox.assets/1692-182.jpg)
>
> Sean Goedecke describes a reputation loop: managers assign high-risk projects to people they already trust to ship, which gives those engineers fresh evidence that they are reliable. Engineers who keep missing those assignments have fewer chances to build the same reputation. The slow path is to ship small, low-risk pieces reliably, make the results visible to the team and manager, and take on larger responsibilities as trust grows. It may take months or years, long enough for a reorganization or an unlucky failure to reset progress.
>
> The faster routes are finding work yourself, getting a skip-level manager to notice your work, or earning the confidence of peers whose judgment your manager trusts. Goedecke sees peer reputation as the smoothest option on a healthy team and warns that bypassing managers can backfire.

### 🤖 The Era of AI

2026-09-28 [design-taste-frontend Agent Skill](https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend) { skills.sh } *saved*

> ![A small robot compares website designs beside print samples and a review checklist.](2026-11-21-links-from-my-inbox.assets/1524-034.jpg)
>
> design-taste-frontend asks a coding agent to decide on a visual direction before building a page. A script samples three out of twenty design directions so the designer can choose one tied to the subject. The skill configures variation, motion, and density, then offers composition, palette, and typography choices. It documents a browser inspection pass for things such as contrast, heading fit, and wrapping.
>
> The author says the library draws on 247 sites. Its list of prohibited patterns is a style preference suited to its goals, rather than a neutral standard for every design system.

2026-10-01 [Ledge: Runnable Markdown notes](https://ledge.sh/) { ledge.sh } *saved*

> ![A terminal-shaped coffee mug links to a notebook of command blocks.](2026-11-21-links-from-my-inbox.assets/1533-042.jpg)
>
> Ledge keeps commands and their explanations in one Markdown note. A persistent per-note shell preserves the working directory, exports, and active virtual environment across command blocks. The demo combines shell output, Python analysis, SQL results, and a prompt in one notebook. A named profile injects local environment variables into the shell. The note can be synced or committed while the profile file stays outside the notes folder.
>
> The repeated-shell example is persistence within a note. Features such as running blocks on another machine rely on additional setup. Keeping a secret outside the file does not make arbitrary commands safe to run.

2026-10-12 [Atticus Mac](https://github.com/SaarthurR/atticus-mac) { github.com } *saved*

> ![Original editorial illustration for Atticus Mac](2026-11-21-links-from-my-inbox.assets/1616-113.jpg)
>
> Atticus is a push-to-talk macOS assistant that can act on an area you circle on screen or a spoken window-arrangement instruction. The project shows layout requests working across two displays. For longer work, it can delegate a task in the background, such as combining several images into a PDF.
>
> The app itself is free and open source, but it requires macOS 26 and a supported AI client or local model. Provider permissions and any subscription are separate from installing the app.

2026-10-18 [Agent Skills · A directory of agent skills for everyone — not just developers.](https://agent-skills.market/) { agent-skills.market } *saved*

> ![Original editorial illustration for Agent Skills · A directory of agent skills for everyone — not just developers.](2026-11-21-links-from-my-inbox.assets/1636-131.jpg)
>
> The Agent Skills directory groups instructions and workflows by jobs such as scheduled automation, visual design, or editing video. It organizes them around the work a person wants to do, with a link to the relevant skill. The sampled listings include workspace event notifications, a brand system, and a browser video-editor workflow. The directory lets someone browse for a narrower task without already knowing the repository or maintainer's name.
>
> The index aggregates different authors and services. The availability, terms, output, and permissions of an individual skill depend on its publisher and workflow.

2026-10-18 [Superlite: hand an agent a spec, come back to tested work](https://contextfirst.blog/superlite-hand-an-agent-a-spec/) { contextfirst.blog }

> ![Original editorial illustration for Superlite: hand an agent a spec, come back to tested work](2026-11-21-links-from-my-inbox.assets/1637-132.jpg)
>
> Iheatu Chris Wogu speeds up a Claude Code build by planning around dependencies and file ownership. Independent tasks can start once their interfaces and test expectations are written down. The plan is a task graph with file boundaries and tests. One agent coordinates, other agents implement and review individual packages, and a separate final reviewer only reports findings. The current run reached 18 simultaneous agents.
>
> On a static-site generator plus spreadsheet project, one recent run finished in 16.1 minutes and passed all 177 hidden tests. Earlier three-run means on the same machine were 33.6 minutes for stock Superpowers and 23.5 for its orchestrated version. The 16.1-minute number is a single project run, not a general speedup.

2026-07-31 [tmux + Claude Code: Sessions, send-keys, and the Ceiling](https://crystl.dev/guides/tmux-for-ai-agents/) { crystl.dev }

> ![Original editorial illustration for tmux + Claude Code: Sessions, send-keys, and the Ceiling](2026-11-21-links-from-my-inbox.assets/1639-134.jpg)
>
> tmux lets long-running coding agents survive a closed terminal or an interrupted SSH connection. The guide shows how to keep one detachable session per project and observe several agents from one window. A script can send input to a pane and capture its rendered contents. The author shows how to surface state in a status line, using panes as the units of organization and polling their output.
>
> The output is formatted terminal text, so an idle agent, an approval prompt, and a finished task can be difficult to distinguish. Screen scraping breaks when the agent interface changes, and sessions themselves do not survive a reboot.

2026-10-24 [reddit-automation — flowkit-labs/skills](https://www.skills.sh/flowkit-labs/skills/reddit-automation) { skills.sh } *saved*

> ![Original editorial illustration for reddit-automation — flowkit-labs/skills](2026-11-21-links-from-my-inbox.assets/1653-147.jpg)
>
> The reddit-automation skill looks for people already asking about a problem a product solves. It asks for the product context first so proposed replies can answer the discussion's actual question. The examples include locating relevant threads and preparing replies for the user to review before posting. The project says to disclose the relationship to the product and make the reply useful by itself.
>
> The skill is associated with a commercial scheduling service. Its public instructions describe the workflow and disclosure norm, and give no evidence that following them improves sales or avoids each community's moderation rules.

2026-10-25 [ChatGPT Chat Exporter](https://github.com/rashidazarang/chatgpt-chat-exporter) { github.com } *saved*

> ![Original editorial illustration for ChatGPT Chat Exporter](2026-11-21-links-from-my-inbox.assets/1659-153.jpg)
>
> The ChatGPT Chat Exporter turns a visible ChatGPT or Gemini conversation into Markdown, HTML, or a print-ready PDF locally in the browser. The tool scrolls a virtualized thread to collect messages that the browser renders only as they enter view. It preserves code blocks, citations, labels, and images when available. Markdown with images can be bundled as a ZIP, with duplicate images sharing a file.
>
> Its metadata support depends on what the interface makes visible. HTML and PDF-ready exports embed images while Markdown can reference the files in the companion folder.

2026-10-26 [Anthropic, PBC - SEC S-1 filing](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm) { sec.gov }

> ![Original editorial illustration for Anthropic, PBC - SEC S-1 filing](2026-11-21-links-from-my-inbox.assets/1666-158.jpg)
>
> Anthropic's October 26 S-1 reports $16.286 billion of revenue for the first half of 2026, compared with $1.163 billion for the same period in 2025. It reports a $693 million operating loss in the 2026 period. The six-month net loss reached $80.748 billion. The statement separately records $72.388 billion from changes in the fair value of convertible notes, derivative liabilities, and SAFEs. The operating and net losses therefore describe substantially different things.
>
> The filing also describes voting rights separated by share class. The Long-Term Benefit Trust's Class T shares elect a majority of directors, and Class F has 50.1% of outstanding voting power on matters where it votes. The figures and governance terms are for the linked filing version.

2026-10-28 [Getting Good at AI Takes Time and Practice](https://www.seangoedecke.com/getting-good-at-ai-takes-time-and-practice/) { seangoedecke.com } *saved*

> ![Original editorial illustration for Getting Good at AI Takes Time and Practice](2026-11-21-links-from-my-inbox.assets/1678-169.jpg)
>
> Sean Goedecke argues that effective AI use takes practice because the durable skills are identifying missing context, finding tasks the model can handle, and spotting its characteristic errors. He supplies the reason for a task as well as its instructions so the model can make decisions within the goal. He also gives examples of delegating local tests and looking for overengineering or a solution to the wrong problem during review.
>
> The author expects some capabilities to change across releases. He treats these as learned judgments from his work, rather than as a benchmark ranking models or a permanent list of their weaknesses.

2026-11-15 [turbo-browser-mcp](https://github.com/Tthanh2k6/turbo-browser-mcp) { github.com } *saved*

> ![Original editorial illustration for turbo-browser-mcp](2026-11-21-links-from-my-inbox.assets/1787-253.jpg)
>
> turbo-browser-mcp cuts down agent round trips by batching Playwright actions and returning a compact accessibility snapshot or just the changes after an action. The server can fill a whole form per call and groups repeated interactions. A default guard stops clicks that appear to commit a form, leaving the final action for the user unless authorized.
>
> In a local headless fixture, the README reports 11 calls and 12,197 direct output tokens for a ten-field form in its baseline, against one call and 811 tokens with the combined form tool. These figures measure tool output and browser time only and do not measure model reasoning or end-to-end accuracy.

2026-11-17 [OpenCode Browse: Real Browser for Coding Agents](https://opencode.ai/product/browse) { opencode.ai } *saved*

> ![Original editorial illustration for OpenCode Browse: Real Browser for Coding Agents](2026-11-21-links-from-my-inbox.assets/1790-256.jpg)
>
> OpenCode Browse gives an agent access to a real Chromium browser. It works with existing tabs and sessions and can hand a tab back to the user when login, two-factor verification, or payment requires attention. The extension opens agent tabs in background groups or lets the user lend an open tab. It exposes screenshots, recordings, page interactions, and an allowed-sites list to Model Context Protocol clients.
>
> Using the user's browser makes its existing authenticated state available within the tool's scope. The product page lists Chromium-family browsers and describes a separate extension and CLI.

### 🔫 C || C++ / Systems

2026-10-05 [noplate: Generic Data Structures in C](https://codeberg.org/uecker/noplate/) { codeberg.org } *saved*

> ![Nested painted dolls carry symbols for containers and type tags.](2026-11-21-links-from-my-inbox.assets/1565-070.jpg)
>
> Martin Uecker's noplate illustrates generic containers and tagged values in C using macros and type-aware operations. Its examples include vectors and spans, strings and string views, and sum, result, and optional types. The examples show how the types compose. A vector can hold string views, and a span can expose the backing data as a pointer to a runtime-sized array. The array example slices it without first copying it into a different representation.
>
> A preorder tree traversal uses a typed vector for its explicit stack. The repository is a collection of implementation examples, with no performance comparison in the README.

2026-10-05 [Calling a Function in C Without Naming It](https://wiro.world/posts/calling-c-func-without-naming-it/) { wiro.world }

> ![Original editorial illustration for Calling a Function in C Without Naming It](2026-11-21-links-from-my-inbox.assets/1591-092.jpg)
>
> A school's remote C grader allowed students to run submitted code but attempted to restrict which library functions could be invoked. The authors reported a bypass that yielded shell access in that setting. The article explains the difference between filtering function names in source and controlling what a compiled process can execute. An indirect call can reach code whose name never appears in the submission, and address randomization does not itself enforce a function allowlist.
>
> The behavior depended on the grader's compiler and runtime setup. The authors reported the issue to the school and did not investigate further. The result is specific to that environment.

### Web / Browsers / Frontend

2026-10-01 [How to Make a Text Box: A Crash Course in Unicode and OpenType](https://www.youtube.com/watch?v=7Tr0ty9-yeQ) { youtube.com }

> ![Generated illustration of separate f and i metal printing sorts beside a single fi ligature sort](2026-11-21-links-from-my-inbox.assets/1543-052.jpg)
>
> Jimmy Lefevre builds a text box by separating what the string says, what glyphs a font supplies, and where those glyphs go. A code point, a visible editing unit, and a glyph do not necessarily correspond one to one. Decode and normalize Unicode, break the text into runs with compatible script and direction, choose a font, and map code points to glyph indices. The substitution pass can replace two glyphs with a ligature. The positioning pass changes advances or offsets after the glyph sequence is known.
>
> The chapter guide also covers choosing a fallback font, determining line breaks and bidirectional line order, and moving a cursor by grapheme clusters. The author's written overview corroborates the segmentation and shaping explanation.
>
> See also the [chapter guide](https://lectern.tv/watch/how-to-make-a-text-box-a-crash-course-in-unicode-and-opentype).

2026-10-21 [The Future of CSS ✨](https://www.joshwcomeau.com/css/interop-2027/) { joshwcomeau.com } *saved*

> ![Original editorial illustration for The Future of CSS ✨](2026-11-21-links-from-my-inbox.assets/1641-136.jpg)
>
> Josh Comeau's Interop 2027 picks show where browser-native CSS could replace small pieces of JavaScript or inaccessible visual hacks. Each demo illustrates a capability he wants browser implementers to align on. Anchored container queries let an element style itself based on the fallback anchor position the browser picked. The example can keep a tooltip arrow pointing toward its anchor when the tooltip moves. Scroll-state queries let a scroll area show a fade only where there is more content to scroll through.
>
> The roundup also demos animating a disclosure from zero height to an intrinsic size, clipping or shaping borders, and using reading-flow to align keyboard navigation with visual arrangement. It is a wish list for interoperability, so inclusion and cross-browser support vary.

2026-10-23 [kb - GitHub Project](https://github.com/JimmyLefevre/kb) { github.com } *saved*

> ![Original editorial illustration for kb - GitHub Project](2026-11-21-links-from-my-inbox.assets/1648-143.jpg)
>
> Jimmy Lefevre's kb_text_shape.h turns UTF-8 and supplied OpenType fonts into positioned glyphs. It also splits text into runs by direction and script and can check whether a font covers a string. The example loads fonts for Myanmar and Arabic, shapes the input, and iterates runs and glyphs. It hands the renderer the glyph ID, offset, advance, direction, script, and font.
>
> The caller still supplies fonts, lays out paragraphs, and rasterizes glyphs. The library is a boundary between text and glyph placement on an unbounded line, rather than a complete text box.

2026-11-18 [Vreeman Personal Site](https://vreeman.com/) { vreeman.com } *saved*

> ![Original editorial illustration for Vreeman Personal Site](2026-11-21-links-from-my-inbox.assets/1799-265.jpg)
>
> Simon Vreeman's tools page includes small, practical alternatives to larger analytics products. One project uses Google Tag Manager for A/B testing, and another builds campaign URLs from UTM source, medium, and campaign inputs. Vreeman says the experiment script was developed when paid tools became more expensive without enough benefit to the team. The site links example web and AMP tag containers with event tracking and the older test code.
>
> The index mixes current and historical projects. Its Measurement Protocol builder targets Universal Analytics, so it is chiefly useful as an older implementation example. The UTM tool is described separately for GA4.

### How the things work

2026-11-10 [pigshell 0.6.4](http://pigshell.com/v/0.6.4/) { pigshell.com } *saved*

> ![Original editorial illustration for pigshell 0.6.4](2026-11-21-links-from-my-inbox.assets/1739-223.jpg)
>
> Pigshell turns web resources into a file hierarchy that a browser-based shell can inspect. It treats pages and connected services as file-like inputs so small commands can be composed into pipelines. The client-side JavaScript shell borrows from Unix and Plan 9. The user guide describes fetching, transforming, displaying, and copying material across the mounted resources using the same style of command.
>
> The saved URL is for version 0.6.4. Many listed service integrations were documented for that release and may depend on legacy authentication. Their present availability was not independently tested.

2026-11-19 [Lastbook: An Offline Reference Library](https://lastbook.org/) { lastbook.org } *saved*

> ![Original editorial illustration for Lastbook: An Offline Reference Library](2026-11-21-links-from-my-inbox.assets/1800-266.jpg)
>
> Lastbook bundles reference guides, video, and maps with searchable places for offline use. Its optional local Gemma model searches the downloaded library and includes links to sources in its answers. Setup needs internet access. The advertised library sizes are 7.7 GB, 67.5 GB, and about 388 GB; local AI adds about 17 GB and regional maps can add more.
>
> The app supports Mac, Windows, and Linux with platform requirements. The project says its health library pulls from published guides and that Lastbook itself is not clinically reviewed.

2026-11-19 [Rebuilding My Voice Assistant Pipeline](https://blog.platypush.tech/article/Rewriting-my-voice-assistant-pipeline#wake-word-detection-a-new-assistantmicrowakeword-plugin) { blog.platypush.tech }

> ![Original editorial illustration for Rebuilding My Voice Assistant Pipeline](2026-11-21-links-from-my-inbox.assets/1805-271.jpg)
>
> A self-hosted assistant kept listening for 6–10 seconds after speech in a noisy synthetic test. Switching from one-frame speech decisions to a smoothed detector cut that delay to 1.0–1.6 seconds in the author's test. Platypush now uses Silero voice activity detection, a half-second majority window, hysteresis, and a moving noise floor. A single noisy frame used to reset the silence timer, but now a burst can fail the loudness gate or be outvoted. The wake-word plugin also moves to microWakeWord.
>
> The timings come from generated speech mixed with babble and bursts, not a field benchmark. The wake word is processed locally. The configured OpenAI transcription, response, and speech synthesis still use hosted services.

### Data Engineering

2026-10-24 [bbtree: An Ordered Rust Map](https://bbtree.xiangpeng.systems/post/) { bbtree.xiangpeng.systems } *saved*

> ![Original editorial illustration for bbtree: An Ordered Rust Map](2026-11-21-links-from-my-inbox.assets/1652-146.jpg)
>
> Xiangpeng Hao's bbtree is an ordered Rust map with concurrent and single-threaded variants. It packs lookup work into a few cache lines and offers a batched read API so a caller can check several keys together. The project explains the contrast with a skiplist that may miss the cache on almost every pointer hop. The repository also recommends inlining keys where their representation permits it and demonstrates a read of three keys that returns an explicit missing result for the third.
>
> Hao tests operations against Rust's standard BTreeMap and checks tree invariants afterward. Verus checks properties such as key-order preservation under inlining. A deterministic concurrency test found a race that another scheduler's tests had missed, and the project added a regression case.

2026-10-29 [Flint: A Chart Compiler with Semantic Types](https://microsoft.github.io/flint-chart/#/interactions) { microsoft.github.io } *saved*

> ![Original editorial illustration for Flint: A Chart Compiler with Semantic Types](2026-11-21-links-from-my-inbox.assets/1687-177.jpg)
>
> Flint lets a chart author specify what data means and what chart they want. It derives the scales, axes, formatting, aggregation, and layout, then emits a chart for the selected backend. A Flint input has data rows, semantic field types, and a chart spec that binds fields to channels. An integer such as 202001 can be declared as a year-and-month value, so its numeric storage does not dictate how to plot it. The backend-specific generator follows the shared semantic and layout passes.
>
> The project documents outputs for Vega-Lite, ECharts, Chart.js, Plotly, and editable Excel charts. Individual templates and interactions can differ by backend. The saved link opens the interaction gallery, while the architecture docs explain compilation.

### 🕸 Network and Security

2026-10-10 [Passkeys Are a Trap. Do Not Use Them.](https://nonfunctional.substack.com/p/passkeys-are-a-trap-do-not-use-them) { nonfunctional.substack.com }

> ![Original editorial illustration for Passkeys Are a Trap. Do Not Use Them.](2026-11-21-links-from-my-inbox.assets/1612-109.jpg)
>
> The saved essay argues that passkey attestation could enable sites to restrict which authenticators users can choose. Scott Helme's response distinguishes what attestation can identify from the stronger controls the essay imagines. Helme explains that common synced passkeys usually return no attestation statement. When an attestation statement is provided, it can identify the authenticator model. Hardware keys can provide attestation too, so using a hardware key does not automatically avoid that feature.
>
> The original essay did not return a complete copy during this pass. The description of its position is based on indexed coverage and Helme's linked response. Helme also explains why binding the key to a site protects against entering a valid credential on a phishing page.
>
> See also [Scott Helme's response](https://scotthelme.co.uk/passkeys-are-not-a-trap/) and the [Hacker News discussion](https://news.ycombinator.com/item?id=50048312).

2026-10-22 [Debug Access on a Brother Printer via Telnet](https://inventor7777.github.io/blog/2026/10/22/debug-access-on-brother/) { inventor7777.github.io }

> ![Original editorial illustration for Debug Access on a Brother Printer via Telnet](2026-11-21-links-from-my-inbox.assets/1682-173.jpg)
>
> A Brother printer's command console exposes more diagnostic capabilities than its normal user commands suggest. The author confirmed that administrative access could reach additional debugging modes on the tested printer. The firmware analysis found a 32-bit ARM target running the T-Kernel real-time OS, Lua 5.2.3, and separate kernel, application, and web assets. The device architecture includes a main processor and a subprocessor that interacts with the print engine.
>
> The findings are specific to the device and firmware the author examined. The author did not fully investigate the additional wireless modes and warns that changing low-level settings can damage the configuration.

2026-11-03 [North Korean fake job interview led to $6.3B Binance heist](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398) { theregister.com }

> ![An anonymous video-call silhouette and a job application sit beside a sealed vault.](2026-11-21-links-from-my-inbox.assets/1704-194.jpg)
>
> The Register reports that a bogus job interview was one stage of the October 29 Binance compromise. The exchange says an apparently legitimate coding exercise compromised a work computer, and that later stages involved internal tooling and the systems authorizing withdrawals. Binance's account separates the initial access, subsequent movement between systems, and the theft. It says it closed the identified entry points, rebuilt or replaced affected systems, and tightened device and wallet-service controls.
>
> The company reported approximately $6.34 billion in assets affected and approximately $2.85 billion frozen or intercepted as of its November 3 preliminary update. The FBI attributed the attack to North Korea; North Korea denied involvement. The company said its findings were still subject to further review.
>
> See also the [primary account](https://www.binance.com/en/blog/community/3229153443759566763).


### Learning

2026-11-01 [Hacker Books](https://hackerbooks.org/) { hackerbooks.org } *saved*

> ![Original editorial illustration for Hacker Books](2026-11-21-links-from-my-inbox.assets/1697-187.jpg)
>
> HackerBooks catalogs books discussed on Hacker News. It reports both recommendations and mentions, so readers can distinguish how often a title appears from how often people recommend it. The November snapshot describes 15,737 mentioned books and a reshuffled shelf. In October it listed seven recommendations among eight people mentioning Accidental Empires and five out of five for Crafting Interpreters.
>
> The browsing index is free and purchase links are affiliate links. The figures reflect comments the project tracks rather than a survey of all readers.
>
> See also the [example book page](https://hackerbooks.org/#/book/OL273184W).

### Emacs

2026-10-20 [EMACS Turns 50](https://www.technologyreview.com/2026/10/20/1145399/emacs-turns-50/) { technologyreview.com }

> ![Original editorial illustration for EMACS Turns 50](2026-11-21-links-from-my-inbox.assets/1685-175.jpg)
>
> EMACS began in 1976 at MIT as a collection of editor macros on top of TECO. Its history ties an editable programming environment to a community that shared improvements. Carl Mikkelsen's Control-R mode let a video terminal show changes as they were made instead of printing out a line. TECO had already evolved into a language for defining new editing commands. Developers used those two ingredients to turn editing into a programmable, interactive activity. Simson Garfinkel traces how EMACS was reimplemented for new machines and how the code-sharing community helped shape the free software movement.

2026-04-20 [Emacs Is My Browser](https://joshblais.com/blog/emacs-as-my-browser/) { joshblais.com }

> ![Original editorial illustration for Emacs Is My Browser](2026-11-21-links-from-my-inbox.assets/1784-250.jpg)
>
> Joshua Blais uses Emacs' EWW for text-heavy web reading and routes other links according to the work they need. The setup makes Emacs the everyday reading surface while maintaining specialized tools for media and other protocols. A URL-handler table sends video to mpv, PDFs to pdf-tools, and Gemini and Gopher to Elpher. Other links open in EWW, with Chromium configured as a fallback.
>
> The workflow depends on the named external programs and Emacs packages being installed. It is focused on reading rather than reproducing a full browser runtime inside Emacs.

2026-10-31 [HackerTube](https://karpathy.bearblog.dev/hacker-tube/) { karpathy.bearblog.dev }

> ![Original editorial illustration for HackerTube](2026-11-21-links-from-my-inbox.assets/1694-184.jpg)
>
> Karpathy replaced YouTube's recommendation feed with a catalog seeded by videos people had recommended in Hacker News comments. As Karpathy describes it, Claude collected comments, filtered spam and recommendations with Sonnet, and narrowed the corpus to about 40,000 comments and 6,454 linked videos from 2007 through 2026, across 150 topics.
>
> HackerTube shows the frame halfway through a video instead of the uploader's thumbnail. Its recommendation state stays in the browser, with no account required. The site offers a data export.
>
> See also the [HackerTube catalog](https://hackertube.org/watch/Ijst4g5KFN0).

### 😁 Fun / Retro

2026-10-09 [Fleeting — Sorry, I'm in a meeting](https://iminafleeting.com/?v=en-US) { iminafleeting.com } *saved*

> ![Original editorial illustration for Fleeting — Sorry, I'm in a meeting](2026-11-21-links-from-my-inbox.assets/1603-102.jpg)
>
> Fleeting plays recordings of fictional work meetings. The browser picks a random position in a roughly twelve-minute recording so the same scenario can start differently on repeat use. The soundboard includes a leave control that lets the fictional participants say goodbye. A separate calendar feature builds an invite locally in the browser.
>
> The calendar event can expose its joining link to anyone allowed to view the event details. The site describes its audio as plausible rather than streaming real meetings.

### 💖 Inspiration!

2026-09-29 [Xournal++](https://github.com/xournalpp/xournalpp) { github.com } *saved*

> ![A stylus circles and marks up a page before it branches into output formats.](2026-11-21-links-from-my-inbox.assets/1526-036.jpg)
>
> Xournal++ lets you write with a pressure-sensitive stylus and annotate PDFs in the same notebook. You can still select text and follow links in the original PDF while drawing on top. Its C++ code reuses parts of Xournal and adds page backgrounds, stroke styles, and drawing tools. It can export the annotated results as PDF, SVG, or PNG from the app or the command line. The documented input includes pressure-sensitive tablets. A source PDF with selectable text retains that capability in the background layer.

2026-09-28 [Clipboard Normalizer in Mac App Store](https://www.jefftk.com/p/clipboard-normalizer-in-mac-app-store) { jefftk.com }

> ![A clipboard passes through a small cleaning machine and emerges with Markdown-style formatting.](2026-11-21-links-from-my-inbox.assets/1532-041.jpg)
>
> Clipboard Normalizer puts a clipboard-cleaning command and an HTML-to-Markdown conversion in one menu-bar app. The goal is to keep useful structure and drop the formatting that gets in the way after paste. The author replaced separate apps with a single Swift app using SwiftSoup. A toast reports which conversion ran or why the current clipboard cannot be converted. The development work added tests for unusual formatting and potential script injection.
>
> The author set the line on what formatting to preserve and found conversion bugs during review. The write-up also describes getting through App Store review after the first submission omitted a demo video.

2026-10-09 [I Hired an Illustrator to Draw My House. Now It's My Home Assistant Dashboard.](https://antonfrolov.substack.com/p/i-hired-an-illustrator-to-draw-my) { antonfrolov.substack.com } *saved*

> ![Original editorial illustration for I Hired an Illustrator to Draw My House. Now It's My Home Assistant Dashboard.](2026-11-21-links-from-my-inbox.assets/1588-089.jpg)
>
> Anton Frolov commissioned an illustrated house so his family could control devices by interacting with pictures of them. The illustrations and device overlays are laid out on one common canvas, so dimensions stay aligned between layers. The Home Assistant picture-elements card uses a day or night background. Each device is its own overlay with a still graphic when off and an eight-frame animation, exported to WebP, for on. A sunrise or sunset automation flips the helper that selects the night artwork.
>
> Adafruit's coverage describes the irrigation controls as a separate popup and the display as a TV kiosk. The original saved URL was unreliable in this pass; the coverage and its illustration establish the layering design.
>
> See also [Adafruit's write-up and the dashboard image](https://blog.adafruit.com/2026/10/07/i-hired-an-illustrator-to-draw-my-house-now-its-my-home-assistant-dashboard/).

2026-10-14 [Tiny Little Office](https://tinylittleoffice.com/) { tinylittleoffice.com } *saved*

> ![Original editorial illustration for Tiny Little Office](2026-11-21-links-from-my-inbox.assets/1618-115.jpg)
>
> Tiny Little Office puts a word processor, spreadsheet, drawing app, and other small tools in the browser. Its distinctive feature is treating a document as a link it can reopen. The project points to a format guide for generating links and describes embedding a document in another using a fence named after the embedded app.
>
> The little apps illustrate what happens when each document type has a portable text representation. The home page is a catalog and format entry point; it makes no claim about compatibility with traditional office files.

2026-10-18 [Michelangelus Font](https://learn.microsoft.com/en-us/typography/font-list/michelangelus) { learn.microsoft.com } *saved*

> ![Original editorial illustration for Michelangelus Font](2026-11-21-links-from-my-inbox.assets/1633-129.jpg)
>
> Michelangelus is a proportional Latin serif from Studiogusto, inspired by Michelangelo's handwriting. Microsoft's typography entry provides the family in regular, bold, italic, and bold italic. The design's visual reference is Renaissance lettering, rather than a facsimile of a manuscript. The published font metadata lists Latin, Eastern European Latin, Turkish, and Baltic code pages.
>
> The font is available to download from the entry. Its copyright and redistribution information are separate from download access.

2026-10-23 [Localpedia: An Encyclopedia of What Is Nearby](https://edjefferson.com/localwiki/) { edjefferson.com } *saved*

> ![Original editorial illustration for Localpedia: An Encyclopedia of What Is Nearby](2026-11-21-links-from-my-inbox.assets/1645-140.jpg)
>
> Localpedia makes a neighborhood edition of Wikipedia from nearby geocoded articles. Enter a place or postal code and browse the geography rather than starting with a known article title. The normal view approximates a half-hour walk. For sparse locations it takes the closest 25 places within about six miles, when available; for dense ones it caps the result at 500. Map and article content come from OpenStreetMap and Wikipedia.
>
> The publisher says a shared article link does not include the user's location. The saved URL redirects to the current project page.

2026-11-13 [Isometric SF](https://isometricsf.com/v/9/27.7/18.9) { isometricsf.com } *saved*

> ![Original editorial illustration for Isometric SF](2026-11-21-links-from-my-inbox.assets/1767-240.jpg)
>
> Isometric SF redraws the Bay Area as a zoomable, searchable pixel-art map, from the Golden Gate Bridge to San Jose. The project's author says the artwork for each tile was generated by an AI model from Google Maps 3D captures. The map credits OpenStreetMap data, Copernicus elevation, and separate land-cover and place datasets. The site lists the tile art under Creative Commons Attribution–NonCommercial 4.0. Its data and imagery have separate credits.

2026-11-14 [Why Get an Expensive Pi When I Have an Old Phone?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) { so.long.thanks.fish } *saved*

> ![Original editorial illustration for Why Get an Expensive Pi When I Have an Old Phone?](2026-11-21-links-from-my-inbox.assets/1774-243.jpg)
>
> The author tests a used smartphone as a replacement for several boards in a device that needs a high-resolution camera, GPS, storage, and control of a light strip. A rooted Redmi 13C 5G runs the Android app and talks through USB-C to an external LED controller. The phone also brings a battery, clock, touchscreen, and mobile data, which the Raspberry Pi prototype would need to assemble separately.
>
> The post lists roughly ¥300–500 second-hand for comparable phones on Taobao and discusses the cameras already in the Redmi and a Huawei Mate 30. These are observed market prices and feature claims for the author's models, not a guarantee for all used phones.

### Really, other

2026-10-24 [No Signs of AI Payoff Outside the Tech Sector](https://www.apollo.com/wealth/insights-news/insights/daily-spark/no-signs-of-ai-payoff-outside-the-tech-sector) { apollo.com } *saved*

> ![Original editorial illustration for No Signs of AI Payoff Outside the Tech Sector](2026-11-21-links-from-my-inbox.assets/1654-148.jpg)
>
> Apollo's chief economist contrasts the largest seven technology companies with the remaining S&P 500 members. He reports rising revenue per employee and margins for the seven, without comparable rises in the other 493. The comparison uses inflation-adjusted revenue per worker and margin series. A separate chart uses the San Francisco Fed's utilization-adjusted total factor productivity series as an economy-wide check.
>
> The post interprets those trends as a lack of visible AI payoff outside major technology companies. These aggregate comparisons do not isolate AI's effect or rule out improvements inside individual firms.

### 🏛️ Stoicism

2002-05-14 [📘 Meditations by Marcus Aurelius](https://vreeman.com/meditations/) { vreeman.com }

> ![Original editorial illustration for 📘 Meditations by Marcus Aurelius](2026-11-21-links-from-my-inbox.assets/1798-264.jpg)
>
> Meditations records exercises Marcus Aurelius used to examine his own judgments and conduct. Gregory Hays's introduction frames him as a student of Stoicism applying it imperfectly while governing, rather than as a philosopher setting out a doctrine for other readers. One recurring practice is to distinguish an event from the judgment made about it. Book II opens with an exercise in expecting difficult encounters and remembering a shared human responsibility.
>
> The linked page identifies the Hays translation. The companion Gutenberg link offers a separate free English edition, with different wording, and the publisher page supplies edition information.
>
> See also the [free Project Gutenberg edition](https://www.gutenberg.org/ebooks/2680) and the [publisher's page for Gregory Hays's translation](https://www.penguinrandomhouse.com/books/6367/meditations-by-marcus-aurelius/).
