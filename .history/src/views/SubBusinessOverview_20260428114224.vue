<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import businessBg from '@/assets/img/business_bg.svg'
import scrollIco from '@/assets/img/business_scroll_ico.svg'
import businessItemIco from '@/assets/img/business_item_ico.svg'
import { businessSectionCards } from '@/config/businessSectionCards.js'

gsap.registerPlugin(ScrollTrigger)

const pinRef = ref(null)
const trackRef = ref(null)
const heroInnerRef = ref(null)
const cardsLayerRef = ref(null)

function headerOffset() {
  return document.querySelector('header')?.offsetHeight ?? 72
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches === true
  )
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n))
}

function measureShiftPx() {
  const track = trackRef.value
  const layer = cardsLayerRef.value
  if (!track || !layer) return { shiftPx: 0, viewportWidthPx: 0 }

  const cs = window.getComputedStyle(layer)
  const padL = Number.parseFloat(cs.paddingLeft || '0') || 0
  const padR = Number.parseFloat(cs.paddingRight || '0') || 0
  const viewportWidthPx = Math.max(0, layer.clientWidth - padL - padR)

  return {
    shiftPx: Math.max(0, track.scrollWidth - viewportWidthPx),
    viewportWidthPx,
  }
}

function heroPhasePx() {
  const stickyViewportPx = Math.max(320, window.innerHeight - headerOffset())
  const heroRatio = prefersReducedMotion() ? 0.14 : 0.36
  return Math.round(stickyViewportPx * heroRatio)
}

function applyByDistance(dPx, heroPx, shiftPx, viewportWidthPx) {
  const heroInner = heroInnerRef.value
  const cardsLayer = cardsLayerRef.value
  const track = trackRef.value
  if (!heroInner || !cardsLayer || !track) return

  const d = Math.max(0, dPx)
  const h = Math.max(1, heroPx)
  const heroOp = Math.max(0, 1 - Math.min(1, d / h))
  heroInner.style.opacity = String(heroOp)
  heroInner.style.pointerEvents = heroOp < 0.08 ? 'none' : 'auto'

  const fadeInStart = h * 0.52
  let cardsOp = 0
  if (d < fadeInStart) cardsOp = 0
  else if (d >= h) cardsOp = 1
  else cardsOp = (d - fadeInStart) / (h * 0.48)
  cardsLayer.style.opacity = String(clamp(cardsOp, 0, 1))
  cardsLayer.classList.toggle('is-active', cardsOp > 0.15)
  cardsLayer.setAttribute('aria-hidden', String(cardsOp < 0.12))

  // 가로: “오른쪽 바깥에서 시작(+viewport) → 0 → 끝까지(-shift)”
  const travel = Math.max(0, viewportWidthPx + shiftPx)
  const horizScroll = Math.min(travel, Math.max(0, d - h))
  const x = viewportWidthPx - horizScroll
  track.style.transform = `translateX(${x}px)`
}

let ctx = null
let ro = null

function setupScrollTrigger() {
  const pin = pinRef.value
  const heroInner = heroInnerRef.value
  const cardsLayer = cardsLayerRef.value
  const track = trackRef.value
  if (!pin || !heroInner || !cardsLayer || !track) return

  const update = () => {
    const heroPx = heroPhasePx()
    const { shiftPx, viewportWidthPx } = measureShiftPx()
    const total = Math.max(1, heroPx + viewportWidthPx + shiftPx)
    return { heroPx, shiftPx, viewportWidthPx, total }
  }

  const get = () => update()

  ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: pin,
      start: () => `top ${headerOffset()}px`,
      end: () => {
        const { total } = get()
        return `+=${total}`
      },
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: (self) => {
        const { heroPx, shiftPx, viewportWidthPx, total } = get()
        applyByDistance(self.progress * total, heroPx, shiftPx, viewportWidthPx)
      },
      onUpdate: (self) => {
        const { heroPx, shiftPx, viewportWidthPx, total } = get()
        applyByDistance(self.progress * total, heroPx, shiftPx, viewportWidthPx)
      },
    })
  }, pin)

  const layer = cardsLayerRef.value
  if (typeof ResizeObserver !== 'undefined' && layer) {
    ro = new ResizeObserver(() => ScrollTrigger.refresh())
    ro.observe(layer)
    ro.observe(track)
  }
}

onMounted(() => {
  nextTick(() => {
    // 새로고침 시 브라우저가 이전 스크롤 위치를 복원하면 카드가 먼저 노출될 수 있어 수동으로 시작 위치 고정
    try {
      if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    } catch {
      // noop
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    // 초기 1프레임 플래시 방지: 트리거 생성 전 상태를 시작값으로 강제
    const heroPx = heroPhasePx()
    const { shiftPx, viewportWidthPx } = measureShiftPx()
    applyByDistance(0, heroPx, shiftPx, viewportWidthPx)

    setupScrollTrigger()
    requestAnimationFrame(() => ScrollTrigger.refresh())
  })
})

onBeforeUnmount(() => {
  ctx?.revert()
  ro?.disconnect()
})
</script>

<template>
  <div ref="pinRef" class="business-overview-pin">
    <div class="business-overview-sticky">
      <section
        class="business-overview-hero"
        :style="{ backgroundImage: `url(${businessBg})` }"
        aria-labelledby="business-overview-title"
      >
        <svg
          class="business-overview-hero__filter-defs"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter
              id="businessOverviewHeroNoise"
              x="0"
              y="0"
              width="100%"
              height="100%"
              color-interpolation-filters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.55"
                numOctaves="4"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
            </filter>
          </defs>
        </svg>

        <div ref="heroInnerRef" class="business-overview-hero__inner">
          <h1 id="business-overview-title" class="visually-hidden">사업개요</h1>
          <p class="business-overview-hero__lead">
            금융 기업의 IT 시스템 구축부터 운영, 유지보수까지<br />
            종합적인 솔루션을 제공하여 최적화 된 업무 환경을 지원합니다.
          </p>
          <img class="business-overview-hero__scroll" :src="scrollIco" alt="" aria-hidden="true" />
        </div>

        <div ref="cardsLayerRef" class="business-overview-cards-layer">
          <div ref="trackRef" class="business-overview-cards-track">
            <article
              v-for="card in businessSectionCards"
              :key="card.key"
              class="business-overview-card"
            >
              <img
                class="business-overview-card__ico"
                :src="businessItemIco"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <h3 class="business-overview-card__title">{{ card.title }}</h3>
              <p class="business-overview-card__desc">{{ card.desc }}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-business-overview';

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
