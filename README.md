# HackUPC Live

[![Netlify Status](https://api.netlify.com/api/v1/badges/71c013e3-dd84-4bc9-b55e-548fd0b8666d/deploy-status)](https://app.netlify.com/sites/hackupc-live/deploys)
[![Build Status](https://travis-ci.com/hackupc/hackupc-live.svg?branch=main)](https://travis-ci.com/hackupc/hackupc-live)

![HackUPC live preview](public/assets/img/ogimage.png)

Hi! This is the code of the HackUPC live page.

## Live

Features included

- Optional subscription to events - 5 minutes before notifications
- Schedule live reload
- Fancy schedule with time padding
- Normal tabular schedule
- Countdown
- Full-screen mode by pressing `p`

### Config

Some parameters (offsets, timeouts, defaults) can be changed in `src/config.js`. Keep in mind that some values are just constants and should not be changed.
Here you can edit the `FAKE_DATE` parameter to test funtionalities.

## Edit content

### Change theme

If you want to change the theme you should change some properties
2. For changing all the colors: Go to `src/live/params.scss` and in the top of the file you will find all the colors.

### Update schedule

To update or change the schedule go to `public/data/schedule.json`. Changing this file will change the live and the schedule section. Here you can also set the start of the hackathon. The duration of it must be changed in `src/config.js`.

#### Schedule file

- `id` can be whatever you want, but all ids must be different  
- When writing hours, prepend zeroes: Nice: 01:00; Not-so-nice: 1:00.  
- Events should be ordered by starting hour  
- `baseTimeOffset` should be the same output as executing (new Date()).getTimezoneOffset() in a machine with local time. (UTC - localtime in minutes)  
- `dates` are DD/MM/YYYY format  

> If an event doesn't have endHour, then will show only startHour and it will finish at the same time as it starts.  
Useful to specify events that don't have concept of length or that span through more than one day ("Event start", "Event end")

## Setup

Clone the repo, install [Yarn](https://yarnpkg.com/), and run `yarn install` the first time:

```sh
git clone git@github.com:hackupc/hackupc-live.git
cd hackupc-live
npm install -g yarn
yarn install
```

Use `yarn serve` to compile and serve the dist directory in real time. Then view the website at [https://localhost:8080](https://localhost:8080)

```sh
yarn serve
```

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

- Maurici Abad Gutierrez: Slack `@mauriciabad` [mauriciabad.com](https://mauriciabad.com/) `done the most part`
- Carlota Catot Bragós: Slack `@Carlota` [carlotacb.dev](https://carlotacb.dev/)
- Bernat Torres: Slack `@bernatixer` [bernattorres.com](https://bernattorres.com/)

## License

MIT © Hackers@UPC
