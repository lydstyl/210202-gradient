import fs = require('fs')
import { gradientForAvg, gradientToCsv } from './utils/utils'

const priceFactor = 1

const prices = [31998, 32512, 33857, 34980, 35518, 36246, 37020, 37560].map(
  (p) => p * priceFactor,
)

const wantedAvg = 35142 * priceFactor

const foundedGradient = gradientForAvg(prices, wantedAvg)

const csv = gradientToCsv(foundedGradient)

fs.writeFile('/tmp/test2.csv', csv, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('The file was saved!')
})
