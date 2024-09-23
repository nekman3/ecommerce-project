<template>
  <div class="basket">
    <div class="basket__inputs">Total price: {{ totalPrice }}&#8364;</div>
    <div class="basket__product-list">
      <ProductCard
        v-for="product in productList"
        :product="product"
        :key="product.id"
        size="large"
        @addQuantity="addQuantity"
        @removeQuantity="removeQuantity"
        @removeProduct="removeProduct"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import type { Product } from '../types'
import { useBasketStore } from '../stores/basket'
import { useProductStore } from '../stores/product'
import ProductCard from '../components/shared/product-card/ProductCard.vue'
import { removeObjectById, calculate, increase, decrease } from '../helpers/utils'

// Store
const basketStore = useBasketStore()
const productStore = useProductStore()

// Data
let productList = ref<Product[]>([])

// Methods
const addQuantity = (productId): void => {
  calculate(productStore.list, productId, increase)
}

const removeQuantity = (productId): void => {
  calculate(productStore.list, productId, decrease)
}

const removeProduct = (productId): void => {
  const updatedList = removeObjectById(basketStore.list, productId)
  productList.value = updatedList
  // Update home page product list
  productStore.list.map((p) => (p.id == productId ? (p.quantity = 0) : p.quantity))
}

// Computed
const totalPrice = computed((): number => {
  let price = 0
  basketStore.list.forEach((b) => {
    price = price + b.price * b.quantity
  })
  return price
})

onMounted(() => {
  productList.value = basketStore.list
})

defineExpose({ totalPrice })
</script>

<style lang="scss">
@import './basket-view.scss';
</style>
