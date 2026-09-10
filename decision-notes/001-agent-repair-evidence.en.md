---
title: The Report Found 17 Issues. Should I Fix Them All?
date: 2026-08-23
updated: 2026-09-07
status: review
author_review: pending_version_confirmation
publication_status: pending
lang: en
brand: Chieh Wei Huang
type: decision-note
source_page: decision-note-agent-repair.html
sync: mirrored
tags:
  - decision-notes
  - ai-agents
  - evidence
  - verification
  - professional-writing
---

# The Report Found 17 Issues. Should I Fix Them All?

> [!note] Sync status
> The author has expressed willingness to publish, but confirmation of this manuscript version and publication authorization remain pending. The Markdown is mirrored byte-for-byte in the website repository and the vault; the web version is stored separately as HTML.

## Decision question

**When does an automated finding justify letting an AI agent directly modify a public website?**

Neither count nor severity can answer that alone. First distinguish a repair of a confirmed problem from an edit intended to test a hypothesis. Then specify the expected outcome, the check, and how to recover if the edit fails.

## The repair rounds I want to reduce

I often let AI agents edit code directly. What frustrates me is having to revisit the same problem through several repair rounds.

I assumed a verification report would tell the agent what to fix. It does not always tell the agent what a correct result means. I tested that assumption on the professional website I am currently rebuilding.

## One homepage, two inspection scopes

I ran [Beacon](https://chiehweihuang.github.io/beacon/), the accessibility and frontend-evidence tool I maintain, on the Chinese homepage. Beacon reads source code and measures the rendered page so a person or agent can decide what may need attention.

The source-only scan returned a score of 72, 48% coverage and four findings, including two marked critical.

After browser measurement, the score rose to 78 and coverage to 61%. The finding count also rose, from four to seventeen.

The inspection scope grew, and so did the list. That change alone does not establish whether the page became worse. Here, coverage means the share of Beacon's scoring weights with measured evidence. It is not the proportion of all accessibility problems detected or a success rate.

## Why seventeen does not mean seventeen tasks

The counts are not simply additive. One of the original four findings was “contrast not verified.” The retained summaries and finding list indicate that the merge removed that reminder and added fourteen touch reviews: 4 − 1 + 14 = 17. Measured results, unresolved signals and improvement advice cannot be read as engineering workload.

The retained tool output from 29 August records 110 text-contrast passes and zero contrast failures. These are the tool's measurement verdicts, not individually reviewed human findings. They enter scoring and coverage but not the prominent issue count.

The fourteen new findings were touch-size `review` items. They are not confirmed WCAG violations: WCAG 2.2 AA specifies 24×24 CSS pixels, with exceptions including spacing and inline links; AAA specifies an enhanced 44×44 CSS pixel target, with its own exceptions. Falling below 44px alone does not establish an AA violation. The same controls were also reported once per viewport. They deserve design judgment; they are not fourteen repairs to hand directly to an agent.

The two historical critical findings flagged click handlers without nearby keyboard handlers. I then inspected the two related handlers in the current version. One listener belongs to a native `<button>`, which already receives keyboard-generated clicks. The other only recorded analytics for Email links; keyboard activation generates the same click. This is an interpretation of the current version, to be checked through the operations below; it does not establish identical historical behavior.

## What I verified next

On 5 September 2026, I saved the current homepage, script and stylesheet as a test snapshot. At widths of 320px and 1280px, Tab reached the theme button and email link. Enter and Space each changed the theme once and updated aria-pressed; Enter on the email link called the existing analytics function once.

The test blocked external requests and prevented the email link's default action, so it transmitted no analytics and sent no email. This new result supports retaining the two current handlers rather than changing them solely because they lack extra keyboard handlers. It is not a full historical reproduction or an experiment comparing agent repairs.

[Historical output extract](evidence/2026-08-29-tool-output.md) · [New test results and source hashes](evidence/2026-09-05-keyboard/result.json) · [Reproduction instructions and limits](evidence/2026-09-05-keyboard/README.md)

## What “fix everything” could do

An agent might add redundant keyboard handlers to the button and trigger an action twice. It might enlarge every link because the report placed “more comfortable” and “fails the minimum” in the same findings list.

These are risks inferred from component behavior, not agent mistakes observed in this test. I did not run repairs from the two report formats or measure rework. This case therefore does not establish that the report caused rework, or that my classification reduces it.

## How I now read a report

I no longer treat a finding as a task. I first ask:

1. Is this a confirmed failure, an improvement advisory, or an unresolved review?
2. Has the same condition been counted again across viewports or pages?
3. Does the report understand the component and product context, or only a code fragment?
4. After the edit, can the system produce positive evidence and stop?

For a confirmed problem, I specify the intended outcome, edit scope, repeatable check and recovery path before assigning a repair. When the cause is uncertain, an edit can also be an experiment: state the hypothesis, what to observe, when to stop and how to restore the previous state. An experimental change is not yet a fix; the specified behavior must pass its check before that repair is closed.

## This changed what I expect from Beacon

Beacon had one clear gap: even a clean browser run could still merge into a report that said contrast was unverified. I have corrected that path so clean measurements become pass evidence, with a regression test.

The test raised two follow-up requirements: distinguish failures, advisories, possible false positives and passes, and avoid treating repeated viewport results as workload. A source and test check on 5 September 2026 found regression tests for clean passes, review presentation and some touch-result deduplication; all 44 related tests passed. This establishes checks for specified cases, not that the report is understandable or every result is classified correctly.

## Current judgment and next test

**An automated report can guide an agent toward a repair. It is not an authorization for every finding it lists.**

This is one website and one tool; I did not compare how different agents would act. The next test will use real Bright Raven pages to see whether the same classification holds and whether a more actionable report actually reduces repair rounds.

## A decision readers can use this for

If an agent has just built or changed your website and you now have an inspection report, this note can help you decide which findings to assign for repair, which need another test, and which need you to explain the intended result.

For the button warning in this case, I would first check whether keyboard activation completes the operation exactly once. If it already does, adding a handler merely to silence a warning has no demonstrated benefit. If it fails, the repair should address that reproducible behavior. Readers do not have to inspect every line of code, but they need to understand which behavior must remain and how to check it.

This case shows how I examine assumptions between a report and an action. It does not yet establish lower team costs or willingness to pay for this judgment.

## What would change my judgment

If a report includes a reproducible failure, explicit expected behavior and a repeatable check, and the agent fixes that failure while preserving existing functionality, I would accept that report as a direct repair instruction for that bounded class of findings. Repeated human interpretation would not be necessary.

Conversely, if classifying the report does not reduce incorrect repairs or rework and instead consumes more human time, I would narrow or remove that manual step. Not every finding warrants another review.

## How to run the next validation

Choose a real page we are authorized to modify, freeze its source and report, and start from two identical copies. In one run, let the agent act on the original report. In the other, provide an interpreted repair list with expected behavior, preservation constraints and stopping conditions. Keep the model version, tools, initial task and execution budget the same, and retain prompts, diffs and each verification result.

Compare resolved failures, introduced regressions, repair rounds and human interpretation and verification time. The final report score alone is insufficient. A single pair checks whether the experiment is workable; repeated results across tasks would be needed to support effectiveness.

## Decision history

- **Starting question:** Does an automated finding justify direct agent repair?
- **Current decision:** Do not hand the whole list to an agent as repair instructions. This note examines two keyboard warnings and touch-size reviews; it does not provide a disposition for all seventeen findings and does not claim a complete triage.
- **Product consequence:** Beacon now records clean pass evidence; some review and deduplication behavior is tested, while improved guidance for real actions remains unverified.

## Scope and reproduction notes

The draft began on 23 August 2026. Its numbers are supported by tool output retained from the 29 August rerun: source scanning covered zh.html, site.js and style.css, with browser measurements at 320×720 and 1280×900. The output was recovered on 5 September, but the temporary audit JSON files and complete historical source snapshot were not recovered. We can check what the tool reported, but cannot claim complete reproduction conditions for the same historical version. The separate 5 September keyboard test retains its source files, browser version, hashes and results; it supports only the specified operations on that snapshot. Actual 200% browser zoom, screen readers and user task completion are outside that keyboard evidence.

## Sources

- [W3C WAI: Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)
- [W3C: Understanding WCAG 2.2 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [W3C ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/)
- [axe-core API](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md)
- [Lighthouse accessibility scoring](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)
- [Olausson et al., “Is Self-Repair a Silver Bullet for Code Generation?”](https://www.microsoft.com/en-us/research/publication/is-self-repair-a-silver-bullet-for-code-generation/)
- [Beacon source](https://github.com/chiehweihuang/beacon)
