<script setup>
import item01 from '@/assets/img/business_item_01.svg'
import item02 from '@/assets/img/business_item_02.svg'
import item03 from '@/assets/img/business_item_03.svg'
import item04 from '@/assets/img/business_item_04.svg'
import item05 from '@/assets/img/business_item_05.svg'
import item06 from '@/assets/img/business_item_06.svg'

import bg01 from '@/assets/img/business_bg_01.svg'
import bg02 from '@/assets/img/business_bg_02.svg'
import bg03 from '@/assets/img/business_bg_03.svg'
import bg04 from '@/assets/img/business_bg_04.svg'
import bg05 from '@/assets/img/business_bg_05.svg'

const cards = [
  {
    key: 'type01',
    title: 'IT 시스템 구축 (SI)',
    desc: '인프라 구축부터 시스템 개발, 데이터 이관까지 고객 맞춤형 IT 통합 솔루션을 제공합니다.',
    icon: item01,
    hoverBg: bg01,
  },
  {
    key: 'type02',
    title: 'IT 시스템 위탁운영',
    desc: '인프라 운영부터 전문가 상주 지원까지, 안정적인 IT 통합 아웃소싱 서비스를 제공합니다.',
    icon: item02,
    hoverBg: bg02,
  },
  {
    key: 'type03',
    title: '애플리케이션 개발',
    desc: '고객 맞춤형 최적화 업무 프로그램 개발 및 안정적인 유지보수 서비스를 제공합니다.',
    icon: item03,
    hoverBg: bg03,
  },
  {
    key: 'type04',
    title: '인프라 통합 유지 보수',
    desc: 'IT 센터 내 모든 인프라(H/W·S/W·N/W)에 대한 전문적인 기술 지원과 유지보수를 수행합니다.',
    icon: item04,
    hoverBg: bg04,
  },
  {
    key: 'type05',
    title: '금융 점포 통합합 전산 서비스',
    desc: '새마을금고 전용 IT 인프라 공급 및 유지보수 등 창구 업무를 위한 통합 IT 서비스를 지원합니다.',
    icon: item05,
    hoverBg: bg05,
  },
]
</script>

<template>
  <section
    class="page-section page-section--surface-muted main-business"
    aria-labelledby="main-business-title"
  >
    <div class="page-section__inner">
      <div class="main-business__head">
        <h2 id="main-business-title" class="page-section__title">
          <span class="point">최적화된 서비스로</span><br />
          더 나은 내일을 만들어 갑니다
        </h2>
        <p class="page-section__lead">
          금융 기업의 IT 시스템 구축부터 운영, 유지보수까지<br />
          종합적인 솔루션을 제공하려 최적화된 업무 환경을 지원합니다.
        </p>
      </div>

      <div class="main-business__cards" aria-label="사업 영역 카드 목록">
        <div
          v-for="card in cards"
          :key="card.key"
          class="main-business__card"
          :class="`main-business__card--${card.key}`"
          :style="{ '--hover-bg': `url(${card.hoverBg})` }"
        >
          <div class="main-business__card-top">
            <span class="main-business__card-ico" aria-hidden="true">
              <img :src="card.icon" alt="" />
            </span>
          </div>
          <div class="main-business__card-body">
            <h3 class="main-business__card-title">{{ card.title }}</h3>
            <p class="main-business__card-desc">{{ card.desc }}</p>
          </div>
        </div>

        <router-link to="/business/overview" class="main-business__card main-business__card--more">
          <div class="main-business__card-top">
            <span class="main-business__card-ico main-business__card-ico--plain" aria-hidden="true">
              <img :src="item06" alt="" />
            </span>
          </div>
          <div class="main-business__card-body">
            <span class="main-business__more-text">자세히 보기</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.page-section__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @include clamp(gap, 40px, 60px);
}

.main-business__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  :deep(.page-section__lead) {
    margin-top: 0;
  }
}

.main-business__cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.main-business__card {
  position: relative;
  padding: 30px;
  border-radius: 24px;
  background: $gray-000;
  text-align: left;
  @include clamp(height, 180px, 333px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition:
    transform 0.22s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.22s ease,
    background-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.10);
  }

  // hover background layer
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--hover-bg) no-repeat center / cover;
    opacity: 0;
    transform: scale(1.02);
    transition:
      opacity 0.28s ease,
      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 0;
  }

  // subtle darken for readability
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.28);
    opacity: 0;
    transition: opacity 0.28s ease;
    z-index: 0;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  &:hover::before {
    transform: scale(1);
  }
}

.main-business__card-top,
.main-business__card-body {
  position: relative;
  z-index: 1;
}

.main-business__card-ico {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(40, 108, 247, 0.08);

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
}

.main-business__card-ico--plain {
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 0;
}

.main-business__card-title {
  margin: 0;
  font-weight: 600;
  color: $txt-main;
  @include clamp(font-size, 16px, 18px);
}

.main-business__card-desc {
  margin: 12px 0 0;
  color: $txt-sub;
  line-height: 1.6;
  @include clamp(font-size, 14px, 16px);
}

.main-business__card:hover .main-business__card-title,
.main-business__card:hover .main-business__card-desc {
  color: $gray-000;
}

.main-business__card:hover .main-business__card-ico {
  background: rgba(255, 255, 255, 0.16);
}

.main-business__card:hover .main-business__card-ico img {
  filter: brightness(0) invert(1);
}

.main-business__card--more {
  background: rgba(40, 108, 247, 0.72);
  color: $gray-000;
  align-items: stretch;
  justify-content: space-between;

  &::before,
  &::after {
    display: none;
  }
}

.main-business__more-text {
  font-weight: 600;
  @include clamp(font-size, 16px, 18px);
}

@include bp(tab) {
  .main-business__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include bp(mo) {
  .main-business__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>