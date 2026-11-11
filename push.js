// Sends a test push notification to the subscription saved in subscription.json.
// Keys are read from environment variables — never commit them.
const fs = require('fs');
const webpush = require('web-push');

const { VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT } = process.env;

if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
  console.error('Missing VAPID keys. Copy .env.example to .env and fill it in.');
  process.exit(1);
}

webpush.setVapidDetails(VAPID_SUBJECT || 'mailto:you@example.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

const subscription = JSON.parse(fs.readFileSync('subscription.json', 'utf8'));
const payload = JSON.stringify({ title: 'Hello 👋', body: 'This is a test push notification' });

webpush
  .sendNotification(subscription, payload)
  .then(() => console.log('Notification sent'))
  .catch((err) => console.error('Failed to send:', err.statusCode, err.body));
