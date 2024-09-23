<template>
  <input
    class="baseInput"
    :placeholder="placeholder"
    :value="modelValue"
    type="text"
    @input="updateValue"
  />
</template>

<script setup lang="ts">
type PropTypes = {
  modelValue: HTMLInputElement | null
  placeholder: string
}
const { modelValue, placeholder = '' } = defineProps<PropTypes>()
const emit = defineEmits<{ (e: 'update:modelValue', selected: HTMLInputElement | null): void }>()

const updateValue = ($event) => emit('update:modelValue', $event.target.value)
</script>

<style>
@import './base-input.scss';
</style>
