import { defineStore } from 'pinia'
import type { Product } from '@/types'
import { fetchProductsList } from '../shared/api/api-service'

type StateShape = {
  list: Product[]
}

export const useProductStore = defineStore('Product', {
  state: (): StateShape => ({
    list: []
  }),
  getters: {},
  actions: {
    async fetchProducts(): Promise<void> {
      const { data } = await fetchProductsList()
      this.list = data
    }
  }
})
