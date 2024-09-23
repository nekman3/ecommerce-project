import { defineStore } from 'pinia'
import type { Product } from '@/types'

type StateShape = {
  list: Product[]
}

export const useBasketStore = defineStore('Basket', {
  state: (): StateShape => ({
    list: []
  }),
  getters: {
    getProductsCountInBasket: (state): number => {
      return state.list.filter((item) => item.quantity > 0).length
    }
  },
  actions: {
    saveProductsInBasket(products: Product[]): void {
      this.list = products.filter((item) => item.quantity > 0)
    }
  }
})
