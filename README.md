# English for Tech

A free crash course to **learn, practice, do job interviews, and work in English** in the tech industry.

🌐 **Website:** https://devsuperman.github.io/learn-english/

## Modules

1. **Grammar**: questions, tenses, articles, prepositions, polite modals, comparatives
2. **Vocabulary & pronunciation**: common mistakes, false friends, phrasal verbs
3. **Daily practice**: 15-minute routines
4. **Job interviews**: Tell me about yourself, STAR, questions to ask
5. **Working in English**: standups, Slack, code reviews, meetings

See [PLAN.md](PLAN.md) for the roadmap.

## Development

Requires Node.js 22+.

```bash
npm install
npm run dev      # http://localhost:4321/learn-english/
npm run build    # outputs to dist/
```

Lessons live in `src/content/docs/<module>/`. To add one, copy `templates/lesson.mdx`.
Interactive exercises are in `src/components/` (`Quiz.astro`, `FixIt.astro`).

## Deployment

`.github/workflows/deploy.yml` builds the site on every pull request and deploys `main` to GitHub Pages.

One-time setup: in the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
