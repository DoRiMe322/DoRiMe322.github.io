# Portfolio

Portfolio of Nikita S., front-end developer: websites and booking pages for small businesses. React, TypeScript and Vite.

## What is on the page
- A first screen with the four projects' own first screens as a collage
- Selected work: each project with two screenshots, its stack and links to the live site and the code
- Services, how we work, about and skills, and a contact band
- A projects page with search, filters, grid and list views, and a preview window that loads the live site at desktop or phone width

## Add a project
1. Put the project in its own repository with GitHub Pages turned on.
2. Save two screenshots in `public/shots/` (the first screen and one section further down).
3. Add an entry to `PROJECTS` in `src/projects.ts` with `live`, `code`, `shot` and `shot2`.
4. Commit and push. GitHub Actions builds and publishes the site.

## Run locally
```bash
npm install
npm run dev
```
