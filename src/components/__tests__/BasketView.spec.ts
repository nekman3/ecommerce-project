import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BasketView from '@/views/BasketView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useBasketStore } from '../../stores/basket'

const wrapper = shallowMount(BasketView, {
  global: {
    plugins: [createTestingPinia()]
  }
})

const store = useBasketStore()
store.list = [
  {
    id: 1,
    name: 'Frank Zappa - Hot Rats',
    price: 20,
    image: 39,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    quantity: 2,
    type: 'album'
  },
  {
    id: 2,
    name: 'Umberto Eco - The name of the rose',
    price: 30,
    image: 24,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    quantity: 3,
    type: 'book'
  }
]

describe('BasketView', () => {
  it('renders properly', () => {
    expect(BasketView).toBeTruthy()
  })

  it('calculate total price for 2 albums and 3 books', () => {
    expect(wrapper.vm.totalPrice).toBe(130)
  })
})
