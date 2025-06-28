[[_TOC_]]

# 2025-06-27-success-software-2025-list-from-all-link-dump-post

Disclaimer: This post is LLM-generated, like everything here in AI experiments is AI-generated, and created based on my description and instructions, and after shallow review by a human.



This experiment explored how to harness an LLM agent built with OpenAI’s Codecs tool to process a large collection of Markdown files and generate a consolidated software catalog. The core technique was to drive the agent via a simple “to-do” list in `TODO.md`, instruct it through `AGENTS.md`, and capture results in `software2025.md`. Over six iterations, the agent consumed 73 unprocessed files, extracted links, and produced structured entries.

## Repository Structure

The key files in this experiment were: 

- [TODO.md](TODO.md) : A checklist of files to process 
- [AGENTS.md](AGENTS.md) : The agent’s rules, responsibilities, and workflow 
- [software.md](software.md) : The generated catalog of software entries 

### Sample from TODO.md

```markdown
## Files to process
- [x] 2025-05-28-links-from-my-inbox.md
- [ ] 2025-06-09-links-from-my-inbox.md
```

The unchecked item marked the next file the agent should load and process .

### Sample from AGENTS.md

```markdown
# LLM Agent: Software Link Extractor and Cataloger

## Responsibilities
- Parse TODO.md for unprocessed items
- Load each referenced file
- Extract all URLs
- Filter URLs by software criteria
- Query external sources for descriptions
- Append entries to software.md
- Mark TODO.md items as processed
```

This clear list of steps told the agent exactly what to do in each batch of ten files .

## Technique Description

The main trick was to embed agent instructions in a Markdown file so that the LLM could read its own “to-do” list and follow it. This approach has three parts:

1. **Task Definition**
    A simple checklist in `TODO.md` listed all files. Each unchecked box indicated work to be done.
2. **Agent Instructions**
    In `AGENTS.md`, the agent read the checklist, processed one batch at a time, and knew how to handle each file.
3. **Output Consolidation**
    The agent appended formatted entries into `software2025.md` and updated the checklist.

This method turned a static repository into a dynamic, self-driving workflow where the LLM agent could iterate without manual intervention.

## Iteration Process

Over six iterations, the agent processed all 73 files. Each iteration followed these steps:

- Read `TODO.md` and find up to ten unchecked files.
- For each file:
  - Load its content.
  - Extract all `http://` or `https://` links.
  - Filter links to include only software projects, tools, or downloads.
  - Perform web queries to gather a title, description, and usage example.
  - Generate a single Markdown list entry.
- Append new entries under the correct category in `software2025.md`.
- Mark each processed file with `[x]` in `TODO.md`.

By batching ten files, the agent maintained focus and quality while ensuring progress was tracked.

## Example Entry in software2025.md

```markdown
### 🖥️⚙️ Command-Line Applications

- [tldr pages](https://tldr.sh/) – Community-maintained cheat-sheets for over 200 Unix commands. Example: `tldr tar` shows common tar options. :contentReference[oaicite:5]{index=5}
```

Each entry included a link, a concise description, and a command-line example. This made the catalog immediately usable.

## File Coverage

The 73 files spanned from July 2021 through May 2025. Sample breakdown:

- 2021: 12 files
- 2022: 24 files
- 2023: 16 files
- 2024: 12 files
- 2025: 9 files

This wide date range demonstrated the agent’s ability to handle a large and growing archive.

## Benefits of the Technique

- **Scalability**
   The to-do list mechanism scales to hundreds of files by simply updating `TODO.md`.
- **Transparency**
   All instructions live in Markdown, making the workflow easy to audit.
- **Reproducibility**
   Anyone can clone the repo, run the agent, and get the same results.

## Conclusion

By combining a simple Markdown to-do list and an agent description file, this experiment showed how to orchestrate an LLM to perform multi-step workflows over a large codebase. The agent iterated, extracted links, enriched data via web search, and produced a structured catalog in `software2025.md`. This pattern can be extended to other tasks such as documentation generation, data extraction, or content analysis.