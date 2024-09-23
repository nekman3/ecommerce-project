<template>
  <div class="home">
    <div class="home__inputs">
      <div>
        <BaseInput placeholder="Search" v-model="elSearchInput" @input="onSearch" />
      </div>
    </div>
    <div class="home__product-list">
      <ProductCard
        v-for="product in productList"
        :product="product"
        :key="product.id"
        size="small"
        @addQuantity="addQuantity"
        @removeQuantity="removeQuantity"
      />
    </div>
    <div class="home__show-more"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { Product } from '../types'
import BaseInput from '../components/global/BaseInput.vue'
import { useProductStore } from '../stores/product'
import ProductCard from '../components/shared/product-card/ProductCard.vue'
import { useBasketStore } from '../stores/basket'
import { calculate, increase, decrease } from '../helpers/utils'

// Store
const productStore = useProductStore()
const basketStore = useBasketStore()

// Data
let productList = ref<Product[]>([])
const elSearchInput = ref<HTMLInputElement | null>(null)
let productsToShow = ref<number>(8)

// Methods
const onSearch = (input: InputEvent) => {
  const searchInput = (input.target as HTMLInputElement).value
  productList.value = productStore.list.filter((l) =>
    l.name.toLowerCase().includes(searchInput.toLowerCase())
  )
}

const addQuantity = (productId): void => {
  calculate(productStore.list, productId, increase)
  basketStore.saveProductsInBasket(productStore.list)
}

const removeQuantity = (productId): void => {
  calculate(productStore.list, productId, decrease)
  basketStore.saveProductsInBasket(productStore.list)
}

const loadMoreProducts = (entry) => {
  if (entry.intersectionRatio <= 0) {
    return
  }
  // Since there is no real API for server communication extract data in batches of 8 items to mock the pagination
  productsToShow.value = productsToShow.value + 8
  productList.value = productStore.list.slice(0, productsToShow.value)
}

// Pagination
const observePageBottom = () => {
  const showMoreEl = document.querySelector('.home__show-more')
  if (showMoreEl) {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      if (!elSearchInput.value) loadMoreProducts(entry)
    })
    // observe element
    intersectionObserver.observe(showMoreEl)
  }
}

onMounted(async () => {
  if (basketStore.getProductsCountInBasket === 0) {
    await productStore.fetchProducts()
  }
  productList.value = productStore.list.slice(0, productsToShow.value)
  observePageBottom()
})

// Expose for testing purposes
defineExpose({ productList })
</script>

<style lang="scss">
@import './home-view.scss';
</style>
