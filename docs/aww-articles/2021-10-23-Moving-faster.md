# Moving faster

Source: 2023-08-13 [Moving faster](https://www.scattered-thoughts.net/writing/moving-faster/)
Published 2021-10-23 ( jamie scattered thoughts net)

*This post is part of a series, starting at [Reflections on a decade of coding](https://www.scattered-thoughts.net/writing/reflections-on-a-decade-of-coding).*

I don't think I'm very fast in an absolute sense, but I'm much much faster than I was 5 years ago.

These are the things that I think made the most impact.

## Care

The main thing that helped is actually wanting to be faster.

Early on I definitely cared more about writing 'elegant' code or using fashionable tools than I did about actually solving problems. Maybe not as an explicit belief, but those priorities were clear from my actions.

I probably also wasn't aware how much faster it was possible to be. I spent my early career working with people who were as slow and inexperienced as I was.

Over time I started to notice that some people are producing projects that are far beyond what I could do in a single lifetime. I wanted to figure out how to do that, which meant giving up my existing beliefs and trying to discover what actually works.

The main theme for most of the ideas below is being systematic about improvement. I had always been onboard with team processes like continuous integration, code review and root cause analysis, but for a long time I was completely haphazard about my own processes.

Now when I finish a chunk of work I look back and ask why it took me as long as it did and whether it could have been faster. This process is usually uncomfortable and I often manage to avoid thinking about the things I'm doing wrong so that I can stay in my comfort zone.

But even haphazardly applied and mostly ignored, this most basic amount of trying has lead to big improvements.

## Make decisions based on goals

I wrote already about [setting goals](https://www.scattered-thoughts.net/writing/setting-goals/). Having explicit goals helps avoids decision paralysis. Whenever I notice I'm stuck on a decision I go through this process:

- Does it matter? If not, toss a coin instead of wasting time thinking about it.
- Do I have enough information to evaluate the impact on my goal? If not, figure out how to get the information (eg research, prototype, wait until later).
- Which choice moves me closer to my goal?

**Example**: What data structure should I use for text in my text editor?

- Does it matter? Probably - it's a performance issue in some editors and the options vary a lot in complexity.
- Do I have enough information? No, I don't know what performance I need.
  - Looking at all the text files in my home directory I find one 2mb file and no others over 200kb. Most are closer to 1kb.
  - On my laptop it takes ~0.5us to copy 1kb and ~0.5ms to copy 1mb. So if I just use an array of bytes the worst-case insert time on my 2mb file is 1ms.
  - My target is 60fps which means I have a budget of 16.6ms per frame. Rendering takes <<1ms so I have plenty left over.
- Which choice moves me closer to my goal?
  - Any of the choices will be fast enough.
  - An array of bytes is the easiest to implement.

Some decisions don't matter much individually but come up often eg coding style, variable naming, code organization. For these it's worth spending a little time to make rules of thumb rather than thinking about them each time they come up.

**Example**: I used to spend a lot of time thinking about how to split code up into files and directories based on what code 'belongs' together. But that's a completely vague criteria and also doesn't have any obvious connection to my actual goals. There are also usually multiple different axes along which things could be grouped eg a compiler could be split by pass, or by language features. So now I tend to put everything into one file until I start to notice difficulty navigating, and then I split out things that I've noticed I tend to read or edit at the same time. Unlike the previous criteria this is easy to evaluate by just remembering what I did and is easy to connect to my goals - it means less jumping around in future edits which will make coding and debugging slightly faster.

The most important class of decisions is 'what should I do next?'. There are always far more options than time. Having explicit goals makes it easier to prioritize the list.

For tools that I use myself, I prioritize by time saved or quality improved. For commercial projects, priorities come from customers. For research projects, the priority is whatever will give the most information about the research question/hypothesis.

It's often possible to raise quality on one axis by lowering it on another, like improving throughput by consuming more memory or vice versa. If I don't know what the requirements on throughput and memory are then there is no way to decide which tradeoff to make.

A more subtle decision is how long to work on something. There are usually declining returns on time invested so it might be more valuable to half-ass three tasks than to do one task perfectly.

**Example**: It took me a really long time to get comfortable writing 'ugly' or 'messy' code. In an ideal world I would maintain the quality of all my work to the limit of my ability. But I find that I can write substantially more if I relax a little. I'd rather have a finished project that is 80% polished than a 1/3rd of a project that is 100% polished. This is especially true for experimenting, prototyping and testing, where quality doesn't matter as much. But even production code often has a short half-life - I'd guess maybe half of my code gets thrown away or rewritten in it's first year.

I used to not think much about any of this, and the result was that I would spend a lot of time:

- thrashing back and forth between two options for longer than it would take to prototype and evaluate both options
- working on things that were technically impressive but not very important
- making intricate abstractions that would have to be undone a month later when the requirements changed

## Focus

I work in blocks of 2-3 hours during which I don't do anything else - no email, slack, twitter, hacker news, chatting to my neighbour etc.

- 'Multi-tasking' is just rapid context switching. I would often reply to an email while something is compiling and then when I came back I forgot what I was compiling and why. This wastes time and causes mistakes.
- Previous tasks [continue to consume attention](https://web.archive.org/web/20210530175704/http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.183.1776&rep=rep1&type=pdf) even after switching. This is especially true for anything that causes strong emotions. I find it hard to concentrate if I'm opening sack every 15 minutes and every time seeing that thread where someone is arguing with me and they're totally wrong and how can they even believe what they're saying and what was I doing again?
- Exposing myself to [addictive interactions](https://digitalcommons.calpoly.edu/cgi/viewcontent.cgi?referer=https://scholar.google.co.uk/&httpsredir=1&article=1127&context=cscsp) trained me to self-interrupt - whenever I encountered a difficult decision or a tricky bug I would find myself switching to something easier and more immediately rewarding. Making progress on hard problems is only possible if I don't allow those habits to be reinforced.
- Expecting outside interruptions (eg notifications, distracting background conversation) makes it harder for me to begin concentrating, since on some level I don't expect it to be worthwhile if I'm going to be distracted at random anyway.

I take small breaks within those work blocks but don't do anything that might take over my focus. So I'll walk around, stretch, make tea etc but not look at my phone or check my email.

Music definitely hurts my concentration, but it also improves my mood so I'll sometimes play a single album if I'm having trouble getting started in the morning. Usually by the time the album finishes I'm deep enough that I don't notice it's gone.

If I have to stop at a specific time (eg for a meeting) I'll set an alarm rather than trying to remember and having that background worry.

I find I work best in the morning. I usually struggle to get started but once I do it's pretty easy to keep going. I find it easier when I have a consistent morning routine - wake up, have breakfast, go for a walk, plan what I want to work on while walking and then start as soon as I get back. I don't always manage to stick to this, but when I do I don't have to expend effort to force myself to start working - it's just what happens next.

These changes may sound trivial but I can't overemphasize how much difference they made when applied consistently. Attention and short-term memory are the bottleneck that everything else has to flow through but they are incredibly fragile and, increasingly, exposed to adversarial input.

See also [Deep Work](https://www.goodreads.com/book/show/25744928-deep-work), [Your Brain at Work](https://www.goodreads.com/book/show/6899290-your-brain-at-work) (the latter is a bit pop-psych but still sound).

## Batch

In the last couple of years I've been applying the idea of avoiding multi-tasking on a more fine-grained level.

For example, I notice that when I try to mix actually writing code with deciding what code to write, I often forget subtasks or start feeling uncertain and slowing down. So now when I start on a block of work I try to separate the subtasks:

1. Write down what I'm trying to achieve.
2. Figure out roughly how I'm going to do it.
3. Walk through the code and make a brief list of the changes I need to make.
4. Make the changes one by one in the order they appear on the list.
5. Read the diff and fix obvious bugs, improve comments, pick better variable names etc.
6. Test and debug. Go back to step 2 if I realize I made a poor choice and need to do something differently.
7. Commit, merge, make some tea.

Often in step 3 I realize that my plan isn't actually going to work. Discovering that *before* I write a bunch of code saves a lot of time, and not having that sunk cost also makes me less likely to try to push it through anyway.

In step 4 if I notice other changes that need to be made I add them to the list instead of trying to make two changes at once (unless it's something really small like correcting a comment as I pass by). Whenever I think I can get away with making multiple changes together it usually ends up taking longer, or I realize that one of the changes was a bad idea but now I can't just roll it back because it's mixed in with the others.

I do this kind of batching all over the place. Pretty much any complex task involves switching between multiple subtasks. Whenever I can figure out how to rearrange them to reduce the amount of switching I tend to find that it saves time and reduces mistakes.

## Make small changes

Whenever I have a big change to make - anything that will take more than a couple of days - I want to break it down into small changes that can be individually merged. This makes life easier in so many ways:

- If I break something, it's much faster to find the cause in a smaller diff.
- If some part of the change turns out to be a bad idea or need redesign, it's much easier to roll it back if it's not mixed in with lots of other changes.
- Merging long-lived branches is difficult and often results in subtle bugs when interactions between different changes are missed. Eg I change a function and have to update all the callsites, but in the meantime someone added new callsites in a different branch.
- If something urgent comes up I can handle it immediately and come back to my current work later without worrying that it will have bitrotted in the meantime.
- In projects that I'm not working on full-time it's much easier to jump in and out if everything is left in a working state.
- The times that I have felt burnt out all started with having some big chunk of work and repeatedly thinking "it's almost finished, just one more big push". It's never just one more big push. Better to be able to merge something that works, take some time off and then come back to it fresh.

I have a nice self-contained example of breaking up a big change [here](https://github.com/jamii/imp/compare/a78d053...d44062). I wanted to change the internal representation used throughout the compiler. Instead of trying to do it all at once, I made a parallel pipeline for the new version and built it out stage by stage while keeping the old version working. Once the new version was complete and produced the same results on all the tests I deleted the old version.

This only took 4 work blocks but they were spread out over a couple of weeks. When I was younger I probably would have tried to just edit the representation and make all the changes at once, which would have meant that this project wouldn't even have been able to compile successfully for a couple of weeks. Every time I came back to it I would have had to remember what I had finished editing and what still needed doing. When I finally tried to compile it I would have been trying to fix type errors from code that I had written two weeks earlier and that was no longer fresh in my mind.

See also [Programming Incrementally](https://ourmachinery.com/post/step-by-step-programming-incrementally/).

## Shorten feedback loops

The longer it takes between making a mistake and finding out, the harder it is to track down - the number of possible causes grows and the context fades.

Similarly, the quicker I can evaluate the impact of decisions, the more different things I can try and the less likely it is that a bad decision gets baked in and becomes hard to undo.

I've come to prioritize fast feedback more and more over time. It's the main thing I look for when choosing tools and when planning systems.

**Examples**:

- IDE tools which show errors in the editor as you type often let you fix mistakes right after typing them, while the context is still completely fresh.
- I setup my editor to run tests on every save so that by the time I look at the test window they've already finished.
- For some kinds of test failure I want to view the failure in a debugger. Rather than set this up each time I always run tests using `rr record`. Ideally I would also integrate this into the test runner so that it knows to `rr replay` on test failure without me having to open a new terminal.
- Materialize has over six million sql tests. These are good at catching edge cases but are way too slow to run interactively. So Nikhil made a separate command that runs a much smaller subset with decent coverage. The quick tests run on a prepush hook and the slow tests run in CI.
- The full integration benchmarks at materialize required spinning up a lot of flaky 3rd party dependencies and took several minutes just to get started. Brennan setup a much simpler version of the benchmark that didn't have full coverage of the materialize code but was easy to edit and only took a few seconds to startup. I'd use the fast benchmark dozens of times per day to measure things and test ideas and only switch to the slow benchmarks to validate the results.
- I often use cheap experiments to find lower/upper bounds on the value of some chunk of work. Eg before putting a bunch of work into removing padding from the row representation in materialize, I tried adding padding to estimate how much impact padding had on the overall memory usage.

Sometimes it's possible to work around long feedback loops by working in parallel. When I work on projects which have long compile times (eg materialize incremental builds sometimes took 14 minutes) I sometimes get distracted and when the compile finishes I've forgotten what I was testing. To reduce the impact I'll sometimes make a list of multiple experiments and run one per desktop, with a text file open on each desktop explaining what I'm doing. By the time I've finished setting up the last experiment hopefully the first one has finished running. This still isn't as effective as just having shorter feedback loops, and for benchmarking it requires having a lot of extra hardware to avoid interference. But sometimes that's the best I can do.

Keeping feedback loops tight is particularly important on large projects. Once some slow process has been added it quickly becomes hard to remove. By far the easiest way to have short feedback loops is to start out that way and then be very strict about not letting them regress. An example I found inspiring is [bitsquid's subsecond live reloading](https://web.archive.org/web/20120505102011/http://www.bitsquid.se/presentations/cutting-the-pipe.pdf). They set that goal from the start and just refused to accept any architecture choices that broke it.

## Write stuff down

I keep a work journal - a single very large append-only text file. I have a bunch of different uses for it:

- Before I make changes, I write down what I'm trying to achieve and what my plan is. Reminding myself of the goal makes decision making easier. Writing the plan explicitly makes it easier to notice when I haven't thought something through.
- When I'm making changes I keep a very short-term todo list - the next few hours or so. This stops me from forgetting steps and, if I get distracted, reminds me what I was doing.
- When I have to look up how to use some tool or fix some confusing error message, I write down the answer. Often I'll run into the same thing a year later and be able to just search for it in my journal.
- When I'm struggling to make decisions I write out my inner monologue. This helps me make progress instead of looping around on the same few thoughts again and again. It also makes it more obvious when there is some missing information that I need to go find.
- Once I've made decisions I write down the reasoning. This is useful if in a year or two I'm revisiting the design and I can't remember why I did this weird thing in the first place. (I also try to write this in the code somewhere but often such comments don't survive.)

None of this takes much work. I typically write about 100 words per day.

## Reduce frequent mistakes

Often I make the same kind of mistake multiple times per day. When I notice this I try to think of a way to avoid making that mistake at all.

**Examples**:

- I got into the habit of reading my changes before running or committing them. I imagine explaining them to someone else in my head. This often catches silly mistakes like typing the wrong variable name.
- Whenever I fix a bug or a type failure I check all the nearby code to see if I made the same mistake. Mistakes like forgetting to clone something or passing a value instead of a reference often come in clusters and it's usually faster to get them all at once rather than going through the compile/test cycle for each one.
- I had several bugs recently caused by early returns. It was awkward to change the code to avoid them, so instead I changed the syntax highlighting to make break/continue/return stand out more. When checking out how this looked I immediately found another bug.
- I used to often accidentally commit print statements or other temporary debugging code. A friend I was working with suggested using the interactive commit tool in [magit](https://magit.vc/) which makes it easy to read, search and edit the diff before committing.

Some things I haven't tried yet that I suspect would be worthwhile:

- Make a checklist for code review. Eg for every new allocation find where it is freed, for every new error raised find out where it is handled.
- Log all my mistakes for a week and look for patterns.

See also [The Checklist Manifesto](https://www.goodreads.com/book/show/6667514-the-checklist-manifesto).

## Make low-level skills automatic

I wrote earlier that multi-tasking is just rapid context-switching. That's actually only true for skills which require conscious attention. It's possible to learn some kinds of skills so thoroughly that they no longer require attention. Good candidates are:

- Typing. It's the interface to everything else in software (even thinking - I think better when I write down my ideas) so it's a hard bottleneck. I've noticed especially that backtracking to fix typos often derails my focus, so I could probably benefit from increasing accuracy more than speed. I used to have to look at the keyboard for certain symbols, especially in the middle of the number row, so I blacked out the keys to force myself to learn to touch-type those accurately.
- Editing. Being able to write code faster makes prototyping faster, reduces the pain of cleaning up code, allows testing more different optimizations etc. I haven't gone very deep into this but I get a lot of leverage from some simple changes:
  - Setting up completions for whichever language I'm using and learning to navigate the list with keyboard shortcuts.
  - Learning to use multiple cursors effectively for structured editing.
  - [Moving the arrow keys](https://tonsky.me/blog/cursor-keys/) so I don't have to leave the home row to make small movements.
  - Keeping my wrist bone in place when using the touchpad to make large movements, so that I can reliably put my fingers back on the home row afterwards.
- Navigation. Similarly to above, I've gotten a lot of value from a few changes:
  - Learning to use fuzzy-file-open, search, ripgrep, jump-to-definition, jump-to-uses, jump-to-errors etc to move around the codebase.
  - Setting shortcuts for opening common programs (editor, terminal, browser etc) and for closing windows.
  - Setting shortcuts for switching desktops and having standard uses for each (code on 1, tests/benchmarks on 2, docs/reference on 3).
  - Using reverse-search in bash, setting my bash history size to unlimited and saving the history on every command (so that having multiple terminals open doesn't result in one history overwriting another).

Any low-level skill that I can make automatic frees up attention and short-term memory for more important things.

A corollary to this is avoiding unreliable tools that break muscle memory.

**Example**: The final straw that made me stop using emacs was running into multiple bugs that each caused sporadic multi-second pauses during which my keystrokes would go to the wrong window or get queued up on a non-responsive window. Each time it would leave me confused as to what state things were now in and then after I fixed it I would have to take more time to remember what I was doing.

## Reflect

Whenever I notice some process that is unreliable or that could be faster I make a quick note in a file called 'tools'. It's full of things like this:

```
zig pretty-print in gdb?
command-line version of magit to avoid emacs startup times
  try gitui
clipboard daemon with history
try tracy
fix focus hang/crash on big rg (need to limit input?)
```

Whenever I have a few spare hours I go through that file and try to fix one of the entries.

On a larger scale I try to write retrospectives in my work journal after each project.

**Example**: For materialize I spent many weeks fixing bugs in name resolution. In hindsight, if I'd started by spending a day looking at the spec and the postgres parser I would have realized that name resolution was a lot more complicated than I thought and I would have started out closer to a correct design.

## Etc

It's easy to come up with more ideas that I haven't tried but which sound like they could work.

**Examples**:

- Mike Acton [advocates explicit practice](https://youtu.be/4B00hV3wmMY?t=785). The hard part here is finding the right problems to practice. They have to be similar enough that I'm practicing a specific skill, but not so similar that I'm just memorizing something that won't generalize to my actual work. For debugging I'm experimenting with [automatically inserting bugs](https://github.com/jamii/mutant). If that goes well I'll try practicing other skills the same way. Courses like [perf-ninja](https://github.com/dendibakh/perf-ninja) also seem valuable.
- Recording myself programming and reviewing the recording for inefficiencies. I did this a little when working at Eve, but more with an eye towards designing new interfaces than learning to better use existing ones. I remember that the time breakdown in the video didn't match my memories at all, so there is probably a lot of low-hanging fruit that I just don't notice.
- A popular drill for sports is to make a challenge harder and harder (eg increasing speed) until your performance breaks down. Seeing which subskill is the first to break gives you an idea of what the bottleneck is on your regular performance. This is a bit harder in programming because I don't often have repeatable problems, but maybe some problem set like [leetcode](https://leetcode.com/) has enough similar challenges to try this.

------

Questions? Comments? [jamie@scattered-thoughts.net](mailto:jamie@scattered-thoughts.net).

Follow via [atom](https://www.scattered-thoughts.net/atom.xml) or [email](https://tinyletter.com/jamii).

[Support my work](https://github.com/sponsors/jamii) on github sponsors.

Copied to clipboard
