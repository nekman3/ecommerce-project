import { $axios } from '../../plugins/axios/axios'
import type { Product } from '../../types'

type Response = {
  data: Product[]
}

export const fetchProductsList = async (): Promise<Response> => {
  try {
    return await $axios.get('/data')
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
