import type { Product } from '@/types'

export const increase = (product: Product): number => {
  return product.quantity === undefined ? 1 : product.quantity + 1
}

export const decrease = (product: Product): number => {
  return product.quantity - 1
}

// High order function for reusability
export const calculate = (list: Product[], productId: number, callback: Function): void => {
  list.map((p: Product) => {
    if (p.id === productId) {
      p.quantity = callback(p)
    }
  })
}

export const removeObjectById = (list: Product[], id: number): Product[] => {
  const productIndex = list.findIndex((product: Product) => product.id === id)
  list.splice(productIndex, 1)
  return list
}
