<script setup>
import SubNavTabs from '@/components/SubNavTabs.vue'
import { subNavBySection } from '@/config/sectionNav'
import subBannerImg from '@/assets/img/sub_banner.svg'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { primaryNav } from '@/config/sectionNav'

const subNav = subNavBySection.company

const route = useRoute()
const bannerTitle = computed(() => {
  const sectionKey = (route.path.split('/')[1] || '').toLowerCase()
  return primaryNav.find((n) => n.sectionKey === sectionKey)?.label ?? 'COMPANY'
})
</script>

<template>
  <div>
    <section class="sub-banner" :style="{ backgroundImage: `url(${subBannerImg})` }" aria-label="서브 배너">
      <div class="sub-banner__inner">
        <p class="sub-banner__title" v-reveal>{{ bannerTitle }}</p>
      </div>
    </section>

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
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/layout/menu-section';
@use '@/assets/scss/layout/sub-banner';
</style>
