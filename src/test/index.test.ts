import { avg, gradient, sort123, gradientForAvg } from '../app/index'

describe('Main index test suite', () => {
  it('calculate orders average', () => {
    expect(
      avg([
        { quantity: 2, price: 10 },
        { quantity: 1, price: 20 },
      ]),
    ).toBe(13.333333333333334)
  })

  it('give gradient orders', () => {
    expect(gradient([1, 2, 3], 0.1)).toEqual([
      { quantity: 100, price: 1 },
      { quantity: 90, price: 2 },
      { quantity: 80, price: 3 },
    ])
  })

  it('sort prices like so 1, 2, 3', () => {
    expect(sort123([10, 11, 8, 7, 12])).toEqual([7, 8, 10, 11, 12])
  })

  it('give a gradient that avg is less then asked', () => {
    expect(avg(gradientForAvg([1, 2, 3], 1.9))).toBeLessThanOrEqual(1.9)
  })
})
