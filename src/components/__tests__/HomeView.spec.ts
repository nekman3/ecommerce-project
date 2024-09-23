import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HomeView from '@/views/HomeView.vue'
import BaseInput from '../global/BaseInput.vue'
import { createTestingPinia } from '@pinia/testing'
import { useProductStore } from '../../stores/product'

const wrapper = mount(HomeView, {
  global: {
    plugins: [createTestingPinia()]
  }
  // props: {
  //   label: "Test Label",
  //   stubs: {
  //     BaseInput: { template: '<input class="baseInput" placeholder="Search" type="text">' }
  //   }
  // },
})

const store = useProductStore()
store.list = [
  {
    id: 1,
    name: 'Frank Zappa - Hot Rats',
    price: 20,
    image: 39,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    quantity: 1,
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

describe('HomeView', () => {
  it('renders properly', () => {
    expect(HomeView).toBeTruthy()
  })

  it('search list with text that returns one item', () => {
    const baseInput = wrapper.getComponent({ name: 'BaseInput' })
    expect(baseInput).toBeTruthy()
    // Trigger input event
    const input = baseInput.find('input')
    input.element.value = 'Pink Floyd'
    input.trigger('input')

    expect(wrapper.vm.productList.length).toBe(1)
    expect(wrapper.vm.productList[0].id).toBe(3)
    expect(wrapper.vm.productList[0].name).toBe('Pink Floyd - Dark side of the moon')
  })

  it('search list with text that returns no items', () => {
    const baseInput = wrapper.getComponent({ name: 'BaseInput' })
    expect(baseInput).toBeTruthy()
    // Trigger input event
    const input = baseInput.find('input')
    input.element.value = 'Arvo Part - Tabula rasa'
    input.trigger('input')

    expect(wrapper.vm.productList.length).toBe(0)
  })
})
