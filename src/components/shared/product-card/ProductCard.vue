<template>
  <Transition name="fade" appear>
    <div :class="['productCard', cardSizeClass]">
      <div class="productCard__poster">
        <img
          class="productCard__poster-img"
          :src="`https://picsum.photos/id/${product.image}/200/200`"
          alt="poster"
          loading="lazy"
        />
      </div>
      <section class="productCard__details">
        <article class="productCard__content">
          <header class="productCard__title__wrapper">
            <h3 class="productCard__title">
              {{ product.name }}
              <span class="productCard__quantity" v-show="hasQuantity && size === 'small'"
                >({{ product.quantity }})</span
              >
            </h3>
          </header>
          <div class="productCard__overview">{{ product.description }}</div>
        </article>
        <footer :class="['productCard__footer', footerSizeClass]">
          <button
            :class="['productCard__footer__btn', 'productCard__footer__btn-warning']"
            v-show="size === 'large'"
            @click="removeProduct()"
          >
            Delete
          </button>
          <div :class="['productCard__footer-right', footerAlignClass]">
            <span v-if="size === 'large' && hasQuantity" class="productCard__footer-right__el1"
              >Quantity: {{ product.quantity }}
            </span>
            <span v-else-if="size === 'small'" class="productCard__footer-right__el2"
              >Price: {{ product.price }} &#8364;</span
            >
            <button
              v-show="hasQuantity"
              @click="removeQuantity"
              :class="['productCard__footer__btn', 'productCard__footer-right__el3']"
            >
              Remove
            </button>
            <button class="productCard__footer__btn" @click="addQuantity">Add</button>
          </div>
        </footer>
      </section>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '../../../types'

// Props
type PropTypes = {
  product: Product
  size: string
}
const { product, size = 'small' } = defineProps<PropTypes>()

// Emits
const emit = defineEmits<{
  (e: 'addQuantity', productId: number): void
  (e: 'removeQuantity', productId: number): void
  (e: 'removeProduct', productId: number): void
}>()
const addQuantity = () => emit('addQuantity', product.id)
const removeQuantity = () => emit('removeQuantity', product.id)
const removeProduct = () => emit('removeProduct', product.id)

// Computed
const cardSizeClass = computed((): string =>
  size === 'large' ? 'productCard--large' : 'productCard--small'
)
const footerSizeClass = computed((): string =>
  size === 'large' ? 'productCard__footer--large' : 'productCard__footer--small'
)
const footerAlignClass = computed((): string =>
  size === 'large' ? 'productCard__footer-right--large' : 'productCard__footer-right--small'
)
const hasQuantity = computed((): boolean => (product.quantity > 0 ? true : false))
</script>

<style lang="scss">
@import './product-card.scss';
</style>
