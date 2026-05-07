<script setup>
import { businessSectionCards } from '@/config/businessSectionCards.js'
</script>

<template>
  <div class="business-overview">
    <div class="business-overview__sections">
      <article
        v-for="card in businessSectionCards"
        :id="card.key"
        :key="card.key"
        v-reveal="{ rootMargin: '0px 0px -14% 0px', threshold: 0.12 }"
        class="business-overview__section reveal"
        :aria-labelledby="`bo-section-${card.key}`"
      >
        <div class="business-overview__section-grid">
          <h3 :id="`bo-section-${card.key}`" class="business-overview__section-heading">
            <span class="business-overview__section-heading-en">{{ card.titleEn }}</span>
            <span class="business-overview__section-heading-ko">{{ card.title }}</span>
          </h3>
          <div class="business-overview__section-copy">
            <p v-if="card.summary" class="business-overview__section-summary">{{ card.summary }}</p>
            <p class="business-overview__section-body">{{ card.body }}</p>
          </div>
        </div>
        <div class="business-overview__section-media">
          <img
            class="business-overview__section-img"
            :src="card.visual"
            alt=""
            loading="lazy"
            width="1600"
            height="900"
          />
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-business-overview';
</style>
