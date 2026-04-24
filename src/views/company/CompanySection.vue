<script setup>
import SubNavTabs from '@/components/SubNavTabs.vue'
import { subNavBySection } from '@/config/sectionNav'

const subNav = subNavBySection.company
</script>

<template>
  <div class="menu-section">
    <SubNavTabs
      v-if="subNav.length"
      class="menu-section__subnav menu-section__subnav--tabs"
      :items="subNav"
      aria-label="COMPANY 하위 메뉴"
    />
    <main class="menu-section__body">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/layout/menu-section';
</style>
