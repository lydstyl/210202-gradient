import fs = require('fs')

interface Order {
  quantity: number
  price: number
}

export function avg(orders: Array<Order>): number {
  const valueSum = (accumulator: number, currentValue: Order): number =>
    accumulator + currentValue.quantity * currentValue.price
  const quantitySum = (accumulator, currentValue): number =>
    accumulator + currentValue.quantity

  const vSum = orders.reduce(valueSum, 0)
  const qSum = orders.reduce(quantitySum, 0)

  return vSum / qSum
}

export function gradient(prices: Array<number>, factor: number): Array<Order> {
  const orders = prices.map((p) => ({ quantity: 100, price: p }))

  return orders.map((o, index) => {
    if (!index) {
      o.quantity = o.quantity
      factor = factor
    } else {
      o.quantity = o.quantity * (1 - factor)
      factor = factor + factor
    }

    return o
  })
}

export function sort123(numbers: Array<number>): Array<number> {
  return numbers.sort(function (a, b) {
    return a - b
  })
}

export function gradientForAvg(
  prices: Array<number>,
  avgGoal: number,
): Array<Order> {
  prices = sort123(prices)

  const step = 0.0001

  let factor = step

  let orders = gradient(prices, factor)

  let actualAvg = avg(orders)

  while (actualAvg > avgGoal) {
    factor += step
    orders = gradient(prices, factor)
    actualAvg = avg(orders)
  }

  return orders
}

export function gradientToCsv(gradient: Array<Order>): string {
  let csv = 'QUANTITY;PRICE\n'

  gradient.forEach((order) => {
    csv += `${order.quantity};${order.price}\n`
  })

  csv = csv.replace(/\./g, ',')

  return csv
}

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
