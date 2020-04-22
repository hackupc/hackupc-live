# HackUPC Live

[![Netlify Status](https://api.netlify.com/api/v1/badges/71c013e3-dd84-4bc9-b55e-548fd0b8666d/deploy-status)](https://app.netlify.com/sites/hackupc-live/deploys) [![Build Status](https://travis-ci.com/hackupc/hackupc-live.svg?branch=master)](https://travis-ci.com/hackupc/hackupc-live)

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

> TODO: fill this part

### Update schedule

> TODO: polish this part

Clients will poll constantly the schedule.json file. To update the schedule just change the file and deploy.  
New versions of the schedule will be loaded only if 'version' is different.

#### Schedule file

- `id` can be whatever you want, but all ids must be different  
- When writing hours, prepend zeroes: Nice: 01:00; Not-so-nice: 1:00.  
- Events should be ordered by starting hour  
- `baseTimeOffset` should be the same output as executing (new Date()).getTimezoneOffset() in a machine with local time. (UTC - localtime in minutes)  
- `dates` are DD/MM/YYYY format  

> If an event doesn't have endHour, then will show only startHour and it will finish at the same time as it starts.  
Useful to specify events that don't have concept of length or that span through more than one day ("Event start", "Event end")

## Setup

```sh
git clone git@github.com:hackupc/hackupc-live.git
cd hackupc-live
npm install
```

Use `npm run serve` to compile and serve the dist directory in real time. Then view the website at [https://localhost:8080](https://localhost:8080)

```sh
npm run serve
```

## Deploy

### Deploy to localhost

Use `npm run build` to compile all dist directory. The files will be compiled to `/dist/`.

Use `serve -s dist` to just serve `/dist` at [https://localhost:5000](https://localhost:5000).

```sh
npm run build
serve -s dist
```

### Deploy to production

**Push to master**. [Netlify](https://app.netlify.com/sites/hackupc-live) will build and deploy automatically.

If you push something that doesn't build, don't worry, it won't be published.

## Support

If you need help understanding something of this repo you can ask the previous developers. The ones that made the 2019 edition are:

- Maurici Abad Gutierrez: Slack `@mauriciabad` [mauriciabad.com](https://mauriciabad.com/)
- Bernat Torres: Slack `@bernatixer` [bernattorres.com](https://bernattorres.com/)

## License

MIT © Hackers@UPC
