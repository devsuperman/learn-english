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

## Roadmap

### Phase 1: MVP
- [x] Site scaffold (Astro + Starlight), GitHub Pages workflow
- [x] Interactive components: `Quiz`, `FixIt`, `Say` (text-to-speech)
- [x] Lesson template
- [x] First lessons in each module + phrasebank + interview question bank
- [ ] Interviews: thinking out loud in technical interviews
- [ ] Interviews: salary and visa conversations
- [x] Grammar: 10 lessons (questions, present tenses, past vs. present perfect, future, articles, prepositions, polite modals, comparatives, conditionals, passive voice)
- [x] Vocabulary: false friends, phrasal verbs, pronunciation (with text-to-speech listen buttons)
- [ ] Work: code review comments, meetings, feedback, emails
- [ ] Test with 3–5 real learners and collect feedback

### Phase 2: More interaction
- [ ] Flashcards for key phrases (spaced repetition, saved in the browser)
- [ ] Progress tracking per lesson
- [ ] Printable cheat sheets

### Phase 3: AI practice
- [ ] AI mock interviewer (asks questions, gives feedback on answers)
- [ ] AI writing feedback for Slack messages and emails

## Success metrics
- Lesson completion rate
- Learners record "Tell me about yourself" on day 1 and at the end, then compare
- Feedback from learners' real interviews
