import fs = require('fs')
import { gradientForAvg, gradientToCsv } from './utils/utils'

const prices = [855, 751, 621]

const wantedAvg = 681

const foundedGradient = gradientForAvg(prices, wantedAvg)

const csv = gradientToCsv(foundedGradient)

fs.writeFile('/tmp/test2.csv', csv, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('The file was saved!')
})
