// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages project site: https://devsuperman.github.io/learn-english/
export default defineConfig({
  site: 'https://devsuperman.github.io',
  base: '/learn-english',
  integrations: [
    starlight({
      title: 'English for Tech',
      description:
        'A crash course to learn, practice, ace job interviews and work in English in the tech industry.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/devsuperman/learn-english' },
      ],
      editLink: {
        baseUrl: 'https://github.com/devsuperman/learn-english/edit/main/',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Start here', items: [{ autogenerate: { directory: 'start-here' } }] },
        { label: '1. Foundations', items: [{ autogenerate: { directory: 'foundations' } }] },
        { label: '2. Daily practice', items: [{ autogenerate: { directory: 'practice' } }] },
        { label: '3. Job interviews', items: [{ autogenerate: { directory: 'interviews' } }] },
        { label: '4. Working in English', items: [{ autogenerate: { directory: 'work' } }] },
        { label: 'Resources', items: [{ autogenerate: { directory: 'resources' } }] },
      ],
    }),
  ],
});
