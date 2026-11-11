# Web Push Notifications

A minimal, dependency-light demo of **Web Push Notifications** using the Push API, a Service Worker and the [`web-push`](https://github.com/web-push-libs/web-push) Node library.

## How it works
1. `index.html` registers `sw.js` and subscribes the browser using your VAPID public key.
2. You save the generated subscription to `subscription.json`.
3. `push.js` sends a message to that subscription; the service worker displays it.

## Getting started
```bash
npm install
npm run keys                 # generate a VAPID key pair (once)
cp .env.example .env         # paste the keys into .env
npm run serve                # open the page on http://localhost:3000
# click Subscribe, copy the JSON into subscription.json
npm run send                 # requires Node 20.6+ for --env-file
```

> Push requires a secure context — `localhost` works for development, otherwise use HTTPS.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Registers the service worker and creates a push subscription |
| `sw.js` | Receives push events and shows the notification |
| `push.js` | Sends a notification from the server side |

## License
MIT
