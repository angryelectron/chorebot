# Chorebot

This is a Node.js Twitter bot which reminds followers to do their household chores.  
The bot tweets a 'random' phrase once per day.  Each day contains a
different chore until all chores have been tweeted.  Then a new list is
generated in random order.

## How to use

Assuming you have `git` and `node`:

```
git clone http://github.com/angryelectron/chorebot.git
cd chorebot
npm install
```

Then:

1. Create a Twitter Account.
2. Create a Twitter application.
3. Copy `credentials.json.sample` to `credentials.json` and add your application keys.
4. Run `./chorebox.js` or use [pm2](https://www.npmjs.com/package/pm2).

## Features

* Log file: `chorebot.log`
* The tweet interval can be changed using a cron pattern in `chorebot.js`.
* New chores and pretext / lead-in text can be customized via `lib/strings.js`

## Future

* Let users reply when the chore is complete
* Track completed chores via leaderboard or monthly DM
* User-configurable chore list
