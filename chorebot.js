#!/usr/bin/node

const Twit = require('twit')
const Chores = require('./lib/chores.js')
const CronJob = require('cron').CronJob
const winston = require('winston')

const chores = new Chores()
const credentials = require('./credentials.json')
const twitter = new Twit(credentials)

winston.add(winston.transports.File, {
  filename: 'chorebot.log',
  level: 'info',
  timestamp: true
})
winston.info('Starting Chorebot.')
let job = new CronJob('0 30 19 * * *', postAChore)
job.start()

function postAChore () {
  return twitter.post('statuses/update', {status: chores.get()}, (err, data) => {
    if (err) {
      winston.error(err)
    } else {
      winston.info(data.text)
    }
  })
}
