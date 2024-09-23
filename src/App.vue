<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/shared/top-bar/TopBar.vue'
</script>

<template>
  <TopBar tagline="Music & Books!" />
  <div></div>
  <RouterView />
</template>

<style scoped></style>
