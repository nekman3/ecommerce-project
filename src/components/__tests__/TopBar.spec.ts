import { test, expect } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import TopBar from '../shared/top-bar/TopBar.vue'
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(TopBar, {
  props: {
    tagline: 'this is the top bar'
  },
  global: {
    plugins: [createTestingPinia()]
  }
})

test('mount component', async () => {
  expect(TopBar).toBeTruthy()
  expect(wrapper.text()).toContain('this is the top bar')
})
