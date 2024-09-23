<template>
  <div class="topBar">
    <header>
      <h2 class="topBar__logo">{{ tagline }}</h2>
    </header>
    <div>
      <nav>
        <RouterLink to="/" class="topBar__link">Home</RouterLink> |
        <RouterLink class="topBar__link" to="/basket">Basket: </RouterLink>{{ itemsCountInBasket }}
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useBasketStore } from '../../../stores/basket'
import { computed } from 'vue'

// Props
type PropTypes = {
  tagline: string
}
const { tagline } = defineProps<PropTypes>()

// Store
const basketStore = useBasketStore()

// Computed
const itemsCountInBasket = computed((): number => basketStore.getProductsCountInBasket)
</script>

<style lang="scss">
@import './top-bar.scss';
</style>
