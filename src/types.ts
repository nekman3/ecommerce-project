import { productType } from './constants'

export type Product = {
  id: number
  name: string
  price: number
  image?: number
  description?: string
  quantity: number
  type?: ProductType
}

type ProductType = (typeof productType)[number]
