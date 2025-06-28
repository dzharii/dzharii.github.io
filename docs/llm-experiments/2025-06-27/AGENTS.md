# LLM Agent: Software Link Extractor and Cataloger

## Overview
This agent parses TODO.md for unprocessed items, reads each referenced file, extracts software-related links, gathers metadata via web search, and updates software.md with categorized entries.

## Responsibilities
- Parse TODO.md and identify “- [ ] <filename>” lines
- Load each referenced markdown file
- Extract all URLs from file content
- Filter URLs by software criteria
- For each filtered URL perform web search to collect description and usage examples
- Generate TLDR entry for each software item
- Categorize entries under precise headings
- Append new entries to software.md without duplications

## Batches
from TODO.md, use batches of 10 files. Make sure you are focused on the content and produce best quality output. 

## software.md

Located in repository root. 

## Workflow
- Read TODO.md from repository root
- Identify lines starting with “- [ ] ” indicating unprocessed items
- For each identified filename:
-   Load file content from repository
-   Extract all URL patterns (http:// or https://)
-   Apply software filter rules
-   For each retained URL:
-   Query external sources for title, description, usage examples
-   Create markdown entry with link, TLDR, examples
-   Assign to appropriate category based on functionality
- Append all new entries under each category in software.md
- Mark original TODO.md item as processed (change “[ ]” to “[x]”)

## Software Filter Rules
- Include URLs pointing to online services, tools, GitHub projects, downloadable software, or games
- Exclude tutorial pages, programming language how-to guides, blog posts without direct software links
- Include modules or plugins that can be installed and run
- Include video games and command-line utilities
- Reject purely educational or conceptual content

## Entry Format for software.md
- Top-level heading per category (for example, “## Command-Line Tools”)
- Under each heading, single-level list entries:
-   `[Name](URL) – Short description. Usage example.`
- Ensure each entry is self-contained and concise

## External Data Gathering
- Use web search API to retrieve official project page or repository
- Extract project name, summary description, minimum usage example
- Cite source URLs or APIs in entry metadata comments if needed

## Failure Handling
- Log files that cannot be opened or parsed
- Skip URLs with invalid format or unreachable hosts
- Report summary of skipped items at end of run

## Update Tracking
- After successful entry creation, update TODO.md by replacing “- [ ]” with “- [x]” for that filename
- Commit changes to both software.md and TODO.md

## Output and Update Instructions

* With each run, the agent must **parse new entries** from unprocessed files listed in `TODO.md` and **append new software** records into `software.md`.
* If a software project already exists in `software.md` (based on URL or name), **do not add a duplicate**.
* Each newly added item must **match the tone, formatting, and quality** of existing entries in `software.md`.
* If a suitable category for the software **does not exist**, the agent must **create a new category section** and **assign the project appropriately** using best judgment.
* Descriptions must be **clear, self-contained, and informative** enough that users understand what the software does **without needing to follow the link**.
* Final output must preserve the structural integrity and order of `software.md`, following markdown syntax conventions and using proper subcategorization where needed.
