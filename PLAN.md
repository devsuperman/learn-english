# Project plan: English for Tech

A crash course to help people **learn, practice, do job interviews, and work in English** in the tech industry.

## Decisions

| Topic | Decision |
| --- | --- |
| Audience | Everyone with basic English (A2–B1), any native language |
| Focus | Tech jobs: developers, QA, data, design, product |
| Format | Static website with interactive exercises (Astro + Starlight) |
| Hosting | GitHub Pages, deployed by GitHub Actions on every push to `main` |

## Structure

| Module | Focus |
| --- | --- |
| 1. Grammar | Questions, present/past/future tenses, articles, prepositions, polite modals, comparatives, conditionals, passive |
| 2. Vocabulary & pronunciation | Common mistakes, false friends, phrasal verbs, pronunciation |
| 3. Daily practice | 15-minute routine, small talk, describing your job |
| 4. Job interviews | Tell me about yourself, STAR, technical talk, salary, questions to ask |
| 5. Working in English | Standups, Slack, emails, code reviews, meetings, feedback |
| Resources | Phrasebank, interview question bank |

Every lesson follows `templates/lesson.mdx`: **Explanation → Key phrases → Common mistakes → Exercises → Today's task** (15–20 minutes).

## Pending tasks

Pick up from here. Work top to bottom; each content task follows `templates/lesson.mdx` and the conventions in `CLAUDE.md`. When a task is done, tick it here, remove its *(coming soon)* entry from the module `index.md`, and run `npm run build` + `npm run preview` + `npm run verify`.

### 1. Publish (owner action, not code)
- [ ] Merge PR devsuperman/learn-english#1 (`claude/stoic-turing-cm76hb` → `main`)
- [ ] In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**
- [ ] Open https://devsuperman.github.io/learn-english/ and confirm the deploy worked (check the Actions tab if not)

### 2. Finish module 5: Working in English (`src/content/docs/work/`)
- [ ] `code-review-comments.mdx`: writing and answering PR comments (nit, suggestion, blocking), polite tone, LGTM, asking "why"; link to *Polite modals*
- [ ] `meetings.mdx`: interrupting politely, agreeing and disagreeing, asking for clarification, summarizing action items
- [ ] `feedback.mdx`: giving and receiving feedback (1:1s, retros, performance reviews); softeners; responding to criticism
- [ ] `emails.mdx`: work email structure, subject lines, openings and closings, follow-ups (add it to `work/index.md` as lesson 6)

### 3. Finish module 3: Daily practice (`src/content/docs/practice/`)
- [ ] `small-talk.mdx`: before meetings, on-call chat, weekends, weather; safe vs. unsafe topics; keeping a conversation going
- [ ] `describing-your-job.mdx`: explaining your role, team, product and tech stack to non-technical and technical people
- [ ] `shadowing.mdx`: step-by-step shadowing technique with tech talks and podcasts; could use `<Say>` for practice sentences

### 4. Quality and polish
- [ ] Test with 3–5 real learners (different native languages) and collect feedback
- [ ] Add a `LICENSE` (suggestion: CC BY-SA 4.0 for content, MIT for code)
- [ ] Add `pretension` (salary) to the false friends table in `vocabulary/false-friends.mdx`
- [ ] Consider running `npm run verify` in CI (needs Playwright + Chromium in the workflow)
- [ ] Accessibility pass: keyboard-only use of `Quiz`/`FixIt`/`Say`, color contrast in dark mode
- [ ] Social preview image (Open Graph) for sharing the site

### 5. Phase 2: More interaction
- [ ] Flashcards for key phrases (spaced repetition, saved in the browser)
- [ ] Progress tracking per lesson (mark as done, saved in the browser)
- [ ] Printable cheat sheets (grammar quick reference, phrasebank)

### 6. Phase 3: AI practice
- [ ] AI mock interviewer (asks questions, gives feedback on answers)
- [ ] AI writing feedback for Slack messages and emails

## Done

- [x] Site scaffold (Astro + Starlight), GitHub Pages workflow (builds PRs, deploys `main`)
- [x] Interactive components: `Quiz`, `FixIt`, `Say` (text-to-speech)
- [x] Lesson template, `CLAUDE.md`, `npm run verify` end-to-end check
- [x] Grammar: all 10 lessons
- [x] Vocabulary & pronunciation: all 4 lessons
- [x] Job interviews: all 6 lessons
- [x] Daily practice: 15-minute daily routine
- [x] Working in English: daily standups, Slack messages
- [x] Resources: phrasebank, interview question bank

## Success metrics
- Lesson completion rate
- Learners record "Tell me about yourself" on day 1 and at the end, then compare
- Feedback from learners' real interviews
