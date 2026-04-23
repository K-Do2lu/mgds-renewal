<script setup>
import { subNavBySection } from '@/config/sectionNav'

const subNav = subNavBySection.recruit
</script>

<template>
  <div class="menu-section">
    <nav
      v-if="subNav.length"
      class="menu-section__subnav"
      aria-label="RECRUIT 하위 메뉴"
    >
      <RouterLink
        v-for="item in subNav"
        :key="item.to"
        :to="item.to"
        class="menu-section__link"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
    <main class="menu-section__body">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/layout/menu-section';
</style>
