import { describe, expect, test } from 'vitest'
import { calculate, decrease, increase, removeObjectById } from '../../helpers/utils'
import type { Product } from '@/types'

const data: Product[] = [
  {
    id: 1,
    name: 'Frank Zappa - Hot Rats',
    price: 20,
    image: 39,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    quantity: 0,
    type: 'album'
  },
  {
    id: 2,
    name: 'Umberto Eco - The name of the rose',
    price: 30,
    image: 24,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    quantity: 0,
    type: 'book'
  },
  {
    id: 3,
    name: 'Pink Floyd - Dark side of the moon',
    price: 20,
    image: 39,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    quantity: 0,
    type: 'album'
  },
  {
    id: 4,
    name: 'Tuxedo moon - compilation',
    price: 15,
    image: 39,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    quantity: 0,
    type: 'album'
  }
]

describe('calculate first addition on product id 2', () => {
  test('Add one item of product', () => {
    calculate(data, 2, increase)
    expect(data[1].quantity).toBe(1)
  })
})

describe('calculate second addition on product id 2', () => {
  test('Add a second item of product', () => {
    calculate(data, 2, increase)
    expect(data[1].quantity).toBe(2)
  })
})

describe('calculate first removal on product id 2', () => {
  test('Remove an item of product', () => {
    calculate(data, 2, decrease)
    expect(data[1].quantity).toBe(1)
  })
})

describe('calculate first addition on product id 1', () => {
  test('Add one item of product', () => {
    calculate(data, 1, increase)
    expect(data[0].quantity).toBe(1)
  })
})

describe('check data list size', () => {
  test('Initial list size of 4', () => {
    expect(data.length).toBe(4)
  })
})

describe('update list when removing product with id 3', () => {
  test('Remove one product resultin list size of 3', () => {
    removeObjectById(data, 3)
    expect(data.length).toBe(3)
  })
})

describe('update list when removing product with id 4', () => {
  test('Remove one product resultin list size of 2', () => {
    removeObjectById(data, 4)
    expect(data.length).toBe(2)
  })
})
