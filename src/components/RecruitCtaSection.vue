<script setup>
import { computed } from 'vue'
import linkSvg from '@/assets/img/link.svg'
import logoBgDefault from '@/assets/img/logo_bg.svg'

const props = defineProps({
  careerHref: { type: String, required: true },
  decoSrc: { type: String, default: null },
  linkLabel: {
    type: String,
    default: '채용 공고 보러가기',
  },
})

const decoUrl = computed(() => props.decoSrc || logoBgDefault)
</script>

<template>
  <section class="recruit-cta" aria-labelledby="recruit-cta-heading">
    <h2 id="recruit-cta-heading" class="recruit-cta__sr-only">채용 공고 안내</h2>

    <div class="recruit-cta__inner">
      <img
        class="recruit-cta__deco"
        :src="decoUrl"
        alt=""
        width="413"
        height="354"
        decoding="async"
        loading="lazy"
      />
      <div class="recruit-cta__row">
        <slot />
        <a
          class="recruit-cta__btn"
          :href="careerHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="recruit-cta__btn-ico" aria-hidden="true">
            <img :src="linkSvg" alt="" width="18" height="18" decoding="async" />
          </span>
          {{ linkLabel }}
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use '@/assets/scss/components/recruit-cta';
</style>
