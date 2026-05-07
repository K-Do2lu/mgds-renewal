<script setup>
import { computed, onBeforeUnmount, onMounted, shallowRef } from 'vue'
import item06 from '@/assets/img/business_item_06.svg'
import { businessSectionCards as cards } from '@/config/businessSectionCards.js'

/** 메인 배너와 비슷한 템포로 피처드 교체 (ms) */
const FEATURED_ROTATE_MS = 6000

/** 직전과 다른 카드를 무작위 선택 */
function pickRandomFeatured(excludeKey) {
  if (cards.length <= 1) return cards[0]
  let next = cards[0]
  let guard = 0
  while (guard < 16 && next.key === excludeKey) {
    next = cards[Math.floor(Math.random() * cards.length)] ?? cards[0]
    guard++
  }
  return next
}

const featuredCard = shallowRef(pickRandomFeatured(undefined))

const secondaryCards = computed(() =>
  cards.filter((c) => c.key !== featuredCard.value.key),
)

let featuredRotateTimer = null

onMounted(() => {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return
  }

  featuredRotateTimer = window.setInterval(() => {
    if (typeof document !== 'undefined' && document.hidden) return
    featuredCard.value = pickRandomFeatured(featuredCard.value.key)
  }, FEATURED_ROTATE_MS)
})

onBeforeUnmount(() => {
  if (featuredRotateTimer != null) window.clearInterval(featuredRotateTimer)
})
</script>

<template>
  <section
    class="page-section page-section--surface-muted main-business"
    aria-labelledby="main-business-title"
  >
    <div class="page-section__inner main-business__layout" v-reveal>
      <div class="main-business__head">
        <h2 id="main-business-title" class="page-section__title">
          <span class="title-line">기업 운영의 핵심을</span>
          <span class="title-line">연결하는 금융 IT 서비스 포트폴리오</span>
        </h2>
        <p class="page-section__lead">
          금융 기업의 IT시스템 구축부터 운영, 유지보수까지 종합적인 솔루션을 제공하여 최적화된 업무 환경을 지원합니다.
        </p>
      </div>

      <div class="main-business__stack" aria-label="사업 영역 카드 목록">
        <router-link
          v-if="featuredCard"
          :key="featuredCard.key"
          class="main-business__featured"
          :to="`/business/overview#${featuredCard.key}`"
          :style="{ '--featured-bg': `url(${featuredCard.hoverBg})` }"
        >
          <div class="main-business__featured-content">
            <p class="main-business__kicker">Featured Service</p>
            <h3>{{ featuredCard.title }}</h3>
            <p>{{ featuredCard.desc }}</p>
            <span class="main-business__featured-link">서비스 상세 보기</span>
          </div>
          <span class="main-business__featured-ico" aria-hidden="true">
            <img :src="featuredCard.icon" alt="" />
          </span>
        </router-link>

        <div class="main-business__cards">
          <router-link
            v-for="card in secondaryCards"
            :key="card.key"
            class="main-business__card"
            :to="`/business/overview#${card.key}`"
          >
            <span class="main-business__card-ico" aria-hidden="true">
              <img :src="card.icon" alt="" />
            </span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.desc }}</p>
          </router-link>

          <router-link to="/business/overview" class="main-business__card main-business__card--more">
            <span class="main-business__card-ico" aria-hidden="true">
              <img :src="item06" alt="" />
            </span>
            <h3>Business Overview</h3>
            <p>전체 서비스 체계와 수행 범위를 한 번에 확인하세요.</p>
            <span class="main-business__more-text">자세히 보기</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.main-business {
  background: linear-gradient(180deg, #edf3ff 0%, #ffffff 100%);
}

.main-business__layout {
  display: grid;
  grid-template-columns: minmax(240px, 0.4fr) minmax(0, 1fr);
  align-items: start;
  gap: clamp(28px, 4.5vw, 52px);
}

.main-business__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: sticky;
  top: 110px;

  :deep(.page-section__lead) {
    margin-top: 0;
  }
}

.main-business__stack {
  display: grid;
  gap: 18px;
}

.main-business__featured {
  min-height: 280px;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: clamp(22px, 3vw, 34px);
  color: #fff;
  text-decoration: none;
  background-image:
    linear-gradient(110deg, rgba(7, 18, 42, 0.78) 0%, rgba(7, 18, 42, 0.42) 55%, rgba(7, 18, 42, 0.22) 100%),
    var(--featured-bg);
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 36px rgba(8, 20, 44, 0.22);

  &:hover {
    filter: brightness(1.04);
  }

  &:focus-visible {
    @include focus-ring($gray-000);
  }
}

.main-business__featured-content {
  max-width: min(560px, 100%);

  h3 {
    margin: 0;
    @include clamp(font-size, 28px, 40px);
    line-height: 1.12;
  }

  p {
    margin: 12px 0 0;
    color: rgba(255, 255, 255, 0.9);
    @include clamp(font-size, 15px, 18px);
    line-height: 1.65;
  }
}

.main-business__kicker {
  margin: 0 0 8px;
  font-size: 12px;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.main-business__featured-link {
  margin-top: 16px;
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.45);
}

.main-business__featured-ico {
  width: clamp(72px, 11vw, 130px);
  height: clamp(72px, 11vw, 130px);
  border-radius: 18px;
  align-self: flex-end;
  background: rgba(255, 255, 255, 0.14);
  display: grid;
  place-items: center;
  backdrop-filter: blur(4px);

  img {
    width: 58%;
    height: 58%;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
}

.main-business__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.main-business__card {
  @include clamp(padding, 18px, 24px);
  border-radius: 12px;
  background: #fff;
  text-align: left;
  min-height: 188px;
  display: grid;
  align-content: start;
  gap: 10px;
  border: 1px solid rgba(29, 78, 216, 0.14);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(29, 78, 216, 0.16);
  }

  &:focus-visible {
    @include focus-ring();
  }

  h3 {
    margin: 0;
    font-size: 20px;
    color: $txt-main;
  }

  p {
    margin: 0;
    color: $txt-sub;
    line-height: 1.6;
    font-size: 15px;
  }
}

.main-business__card-ico {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(40, 108, 247, 0.08);

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }
}

.main-business__card--more {
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
  color: #fff;

  .main-business__card-ico {
    background: rgba(255, 255, 255, 0.16);
  }

  .main-business__card-ico img {
    filter: brightness(0) invert(1);
  }

  h3,
  p {
    color: #fff;
  }
}

.main-business__more-text {
  margin-top: auto;
  min-height: 36px;
  padding: 0 12px;
  width: fit-content;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.42);
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
}

@include bp(tab) {
  .main-business__layout {
    grid-template-columns: 1fr;
  }

  .main-business__head {
    position: static;
  }

  .main-business__cards {
    grid-template-columns: 1fr;
  }
}

@include bp(mo) {
  .main-business__featured {
    min-height: 240px;
  }

  .main-business__featured-ico {
    width: 78px;
    height: 78px;
  }
}
</style>