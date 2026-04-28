<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { primaryNav } from '@/config/sectionNav'
import subBannerImg from '@/assets/img/sub_banner.svg'

const route = useRoute()
const bannerTitle = computed(() => {
  const sectionKey = (route.path.split('/')[1] || '').toLowerCase()
  return primaryNav.find((n) => n.sectionKey === sectionKey)?.label ?? 'COMPANY'
})
</script>

<template>
  <section class="sub-banner" :style="{ backgroundImage: `url(${subBannerImg})` }" aria-label="서브 배너">
    <div class="sub-banner__inner">
      <p class="sub-banner__title" v-reveal>{{ bannerTitle }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/layout/sub-banner';
</style>
