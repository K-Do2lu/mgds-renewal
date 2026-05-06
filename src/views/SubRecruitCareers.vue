<script setup>
import RecruitCtaSection from '@/components/RecruitCtaSection.vue'

const careers = [
  {
    title: '정규직(일반직) 및 계약직 상시 채용',
    desc: '직무별 채용 공고와 전형 일정을 채용 사이트에서 확인할 수 있습니다.',
  },
  {
    title: '인재풀 등록',
    desc: '수시 채용 대상 직무는 인재풀 등록을 통해 우선 검토됩니다.',
  },
]
</script>

<template>
  <div class="sub-recruit-careers">
    <section class="sub-recruit-careers__block" aria-labelledby="sub-recruit-careers-title">
      <ul class="sub-recruit-careers__list" aria-label="채용 안내">
        <li v-for="career in careers" :key="career.title" class="sub-recruit-careers__item">
          <h3 class="sub-recruit-careers__item-title">{{ career.title }}</h3>
          <p class="sub-recruit-careers__item-desc">{{ career.desc }}</p>
        </li>
      </ul>
    </section>

    <RecruitCtaSection career-href="https://career.mgdatasystem.co.kr/">
      <p>
        최신 채용 소식과 전형 절차는<br />
        MGDS 채용 사이트에서 확인하실 수 있습니다.
      </p>
    </RecruitCtaSection>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.sub-recruit-careers__block {
  @include section-block-rhythm;
  background: #fff;
  border-radius: 0;
  border: 0;
  box-shadow: none;
  padding: clamp(24px, 3vw, 34px);
}

.sub-recruit-careers__intro {
  @include clamp(margin-bottom, 28px, 44px);
}

.sub-recruit-careers__list {
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.sub-recruit-careers__item {
  position: relative;
  min-height: 160px;
  border-radius: 0;
  padding: 20px;
  background: #f8fafc;
  border: 0;
  box-shadow: none;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -40% -40% auto auto;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(37, 99, 235, 0.28) 0%, rgba(37, 99, 235, 0.08) 45%, rgba(37, 99, 235, 0) 70%);
    pointer-events: none;
  }

  &:nth-child(2)::before {
    background: radial-gradient(circle at 30% 30%, rgba(29, 78, 216, 0.26) 0%, rgba(29, 78, 216, 0.08) 45%, rgba(29, 78, 216, 0) 70%);
  }
}

.sub-recruit-careers__item-title {
  margin: 0;
  position: relative;
  z-index: 1;
  color: $txt-main;
  font-weight: 800;
  @include clamp(font-size, 18px, 22px);
}

.sub-recruit-careers__item-desc {
  position: relative;
  z-index: 1;
  margin: 10px 0 0;
  color: $txt-sub;
  line-height: 1.7;
  @include clamp(font-size, 15px, 17px);
}

@include bp(mo) {
  .sub-recruit-careers__block {
    padding: 18px;
  }

  .sub-recruit-careers__list {
    grid-template-columns: 1fr;
  }

  .sub-recruit-careers__item {
    min-height: 0;
  }
}
</style>
