<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import mainVideoUrl from '@/assets/img/main_01.mp4'

const slides = [
  {
    title: ['기술로 그리는 내일,', '가치로 만드는 미래'],
    desc: ['MG데이터시스템과 함께', '새로운 가능성을 열어갑니다.'],
  },
  {
    title: ['데이터로 연결하는 혁신,', '서비스로 완성하는 신뢰'],
    desc: ['안정적인 시스템과', '지속 가능한 성장을 지원합니다.'],
  },
  {
    title: ['사람을 중심으로,', '기술을 더 가깝게'],
    desc: ['사용자 경험을 고민하고', '더 나은 내일을 만듭니다.'],
  },
]

const activeIndex = ref(0)
const activeSlide = computed(() => slides[activeIndex.value])

let intervalId = null

function goTo(idx) {
  activeIndex.value = idx
}

onMounted(() => {
  intervalId = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % slides.length
  }, 5000)
})

onBeforeUnmount(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>

<template>
  <section class="main-hero">
    <div class="main-hero__frame">
      <video
        class="main-hero__video"
        :src="mainVideoUrl"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      />

      <div class="main-hero__overlay" aria-hidden="true" />

      <div class="main-hero__content">
        <div class="main-hero__text" :key="activeIndex">
          <h2 class="main-hero__title">
            <span v-for="(line, i) in activeSlide.title" :key="i">{{ line }}</span>
          </h2>
          <p class="main-hero__desc">
            <span v-for="(line, i) in activeSlide.desc" :key="i">{{ line }}</span>
          </p>
        </div>
      </div>

      <nav class="main-hero__indicator" aria-label="메인 배너 인디케이터">
        <button
          v-for="(_, i) in slides"
          :key="i"
          type="button"
          class="main-hero__dot"
          :class="{ 'is-active': i === activeIndex }"
          :aria-label="`배너 ${i + 1}번 보기`"
          :aria-current="i === activeIndex ? 'true' : undefined"
          @click="goTo(i)"
        />
      </nav>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/scss/layout/main';
</style>