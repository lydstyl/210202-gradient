import fs = require('fs')
import { gradientForAvg, gradientToCsv } from './utils/utils'

const prices = [881, 751, 631]

const wantedAvg = 683

const foundedGradient = gradientForAvg(prices, wantedAvg)

const csv = gradientToCsv(foundedGradient)

fs.writeFile('/tmp/test2.csv', csv, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('The file was saved!')
})
