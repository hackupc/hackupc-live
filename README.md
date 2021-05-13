# HackUPC Live

[![Netlify Status](https://api.netlify.com/api/v1/badges/71c013e3-dd84-4bc9-b55e-548fd0b8666d/deploy-status)](https://app.netlify.com/sites/hackupc-live/deploys)
[![Build Status](https://travis-ci.com/hackupc/hackupc-live.svg?branch=main)](https://travis-ci.com/hackupc/hackupc-live)

![HackUPC live preview](public/ogimage.png)

Hi! This is the code of the HackUPC live page.

## Edit content

### Theme

Theme variables are in `src/live/params.scss`.

### Contents

Most of the content is in `src/data` or hardcoded into the components.

### Schedule
The schedule is in `public/data/schedule.json`

- `id` can be whatever you want, but all ids must be different  
- `dates` are D/M/YYYY format at Spain time

## Setup

Clone the repo, install [Yarn](https://yarnpkg.com/) (`npm install -g yarn`), and run `yarn install` the first time:

```sh
yarn install
```

Use `yarn serve` to compile and serve the dist directory in real time. Then view the website at [https://localhost:8080](https://localhost:8080)

```sh
yarn serve
```

Install this extensions in your editor: `eslint`, `prettier`, `stylelint` and `vetur`.

## Deploy

### Deploy to localhost

Use `yarn build` to compile all dist directory. The files will be compiled to `/dist/`.

```sh
yarn build
```

### Deploy to production

**Push to master**. [Netlify](https://app.netlify.com/sites/hackupc-live) will build and deploy automatically.

If you push something that doesn't build, don't worry, it won't be published.

## Support

If you need help understanding something of this repo you can ask the previous developers. The ones that made this edition live were:

- Maurici Abad Gutierrez: Slack `@mauri` [mauriciabad.com](https://mauriciabad.com/) `done the most part`
- David Dionís: Slack `@David Dionis`
- Carlota Catot Bragós: Slack `@Carlota` [carlotacb.dev](https://carlotacb.dev/)
- Bernat Torres: Slack `@bernatixer` [bernattorres.com](https://bernattorres.com/)

## License

MIT © Hackers@UPC
