<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isBusinessOverviewHero = computed(() => route.name === 'BusinessOverview')
</script>

<template>
  <div
    class="menu-section"
    :class="{ 'menu-section--business-overview-hero': isBusinessOverviewHero }"
  >
    <main class="menu-section__body">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/layout/menu-section';
</style>
