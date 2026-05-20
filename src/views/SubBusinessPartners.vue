<script setup>
import partner01 from '@/assets/img/partner_01.svg'
import partner02 from '@/assets/img/partner_02.svg'
import partner03 from '@/assets/img/partner_03.svg'
import partner04 from '@/assets/img/partner_04.svg'
import partner05 from '@/assets/img/partner_05.svg'
import partner06 from '@/assets/img/partner_06.svg'

const partnerAreas = [
  { name: '금융권 운영 파트너', desc: '운영·개발·품질 부문 협업을 통해 안정적인 시스템을 운영합니다.' },
  { name: '인프라 기술 파트너', desc: 'H/W, S/W, N/W 통합 유지보수 및 기술 고도화를 지원합니다.' },
  { name: '보안/컴플라이언스 파트너', desc: '금융 보안 기준에 맞춘 점검, 대응, 관리 체계를 구축합니다.' },
]

const partnerLogos = [
  { label: 'EXOM', src: partner01 },
  { label: 'FOWAVESOFT', src: partner02 },
  { label: 'HS정보통신서비스', src: partner03 },
  { label: 'R2WARE', src: partner04 },
  { label: 'FORCS', src: partner05 },
  { label: 'KSIGN', src: partner06 },
]
</script>

<template>
  <div class="sub-business-partners">
    <section class="sub-business-partners__block" aria-labelledby="sub-business-partners-areas-title">
      <p class="sub-business-partners__lead">
        MG데이터시스템은 다양한 전문 파트너와 함께 금융 IT 서비스 품질을 높이고 있습니다.
      </p>

      <h3 id="sub-business-partners-areas-title" class="visually-hidden">협력 영역</h3>
      <ul class="sub-business-partners__grid" aria-label="협력 영역">
        <li v-for="partner in partnerAreas" :key="partner.name" class="sub-business-partners__card">
          <h4 class="sub-business-partners__card-title">{{ partner.name }}</h4>
          <p class="sub-business-partners__card-desc">{{ partner.desc }}</p>
        </li>
      </ul>
    </section>

    <section class="sub-business-partners__logos" aria-labelledby="sub-business-partners-logos-title">
      <div class="sub-business-partners__logos-intro">
        <div class="sec-title">
          <span class="sec-title__sub">Partners</span>
          <h3 id="sub-business-partners-logos-title" class="sec-title__title">협력사</h3>
        </div>
      </div>

      <ul class="sub-business-partners__logos-grid" role="list">
        <li v-for="item in partnerLogos" :key="item.label" class="sub-business-partners__logos-item">
          <div class="sub-business-partners__logos-card">
            <img class="sub-business-partners__logos-img" :src="item.src" :alt="`${item.label} 로고`" />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

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

.sub-business-partners__block {
  @include section-block-rhythm;
  background: #fff;
  border-radius: 0;
  border: 0;
  box-shadow: none;
  padding: clamp(24px, 3vw, 34px);
}

.sub-business-partners__lead {
  margin: 0;
  color: $txt-sub;
  line-height: 1.7;
  @include clamp(font-size, 14px, 17px);
}

.sub-business-partners__grid {
  margin: 20px 0 0;
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.sub-business-partners__card {
  border: 0;
  border-radius: 0;
  background: #f8fafc;
  padding: 20px;
  box-shadow: none;
  transition: transform 0.18s ease, background 0.18s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -30% -30% auto auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(37, 99, 235, 0.22) 0%, rgba(37, 99, 235, 0.08) 45%, rgba(37, 99, 235, 0) 70%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    background: #f1f5f9;
  }

  &:focus-within {
    @include focus-ring();
  }
}

.sub-business-partners__card-title {
  margin: 0;
  color: $txt-main;
  font-weight: 800;
  @include clamp(font-size, 16px, 20px);
  
  position: relative;
  z-index: 1;
}

.sub-business-partners__card-desc {
  margin: 10px 0 0;
  color: $txt-sub;
  line-height: 1.7;
  @include clamp(font-size, 14px, 16px);
  position: relative;
  z-index: 1;
}

.sub-business-partners__logos {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @include clamp(gap, 28px, 48px);
  @include clamp(margin-top, 32px, 56px);
  padding: clamp(18px, 2.8vw, 30px) clamp(24px, 3vw, 34px);
  background: #fff;
}

.sub-business-partners__logos-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;
}

.sub-business-partners__logos-item {
  min-width: 0;
}

.sub-business-partners__logos-card {
  display: flex;
  align-items: center;
  justify-content: center;
  @include clamp(padding, 14px, 18px);
  min-height: 56px;
  background: #f8fafc;
}

.sub-business-partners__logos-img {
  max-width: 100%;
  height: 20px;
  display: block;
  object-fit: contain;
  opacity: 0.85;
}

@include bp(tab) {
  .sub-business-partners__grid {
    grid-template-columns: 1fr;
  }

  .sub-business-partners__logos-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@include bp(mo) {
  .sub-business-partners__logos-grid {
    grid-template-columns: 1fr;
  }
}
</style>
