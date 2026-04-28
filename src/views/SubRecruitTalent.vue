<script setup>
import { computed } from 'vue'
import SubSectionBanner from '@/components/SubSectionBanner.vue'
import talentImg from '@/assets/img/talent.png'
import linkSvg from '@/assets/img/link.svg'

const talentItems = computed(() => [
  {
    key: 'pro',
    tag: 'Pro',
    title: '최고의 금융 IT',
    desc: '전문성을 갖추고 고객의 니즈(needs)에 맞는 최고의 IT/DT 서비스를 제공하는 인재',
  },
  {
    key: 'team',
    tag: 'Team',
    title: '상호협력',
    desc: '건전한 가치관으로 상호 이해와 배려를 통해 고객과의 시너지를 극대화하는 인재',
  },
  {
    key: 'next',
    tag: 'Next',
    title: '미래지향',
    desc: '금융 ICT변화에 신속하게 대응하여 미래를 선도할 수 있는 인재',
  },
])
</script>

<template>
  <div class="sub-recruit-talent">
    <SubSectionBanner />

    <section class="sub-recruit-talent__block" aria-labelledby="recruit-talent-title">
      <div class="sub-recruit-talent__intro">
        <div class="sec-title">
          <span class="sec-title__sub">Talent</span>
          <h2 id="recruit-talent-title" class="sec-title__title">MG데이터시스템이 바라는 인재상</h2>
        </div>
      </div>

      <div class="sub-recruit-talent__content">
        <div class="sub-recruit-talent__media" aria-hidden="true">
          <img :src="talentImg" alt="" />
        </div>

        <div class="sub-recruit-talent__list" aria-label="인재상 항목">
          <article v-for="item in talentItems" :key="item.key" class="sub-recruit-talent__item">
            <div class="sub-recruit-talent__item-head">
              <p class="sub-recruit-talent__tag">{{ item.tag }}</p>
              <h3 class="sub-recruit-talent__item-title">{{ item.title }}</h3>
            </div>
            <p class="sub-recruit-talent__item-desc">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="recruit-cta" aria-label="채용 공고 안내">
      <div class="recruit-cta__inner">
        <p class="recruit-cta__text">
          당신의 새로운 도전이 곧,<br />
          MGDS의 새로운 이야기가 됩니다.
        </p>

        <a
          class="recruit-cta__btn"
          href="https://career.mgdatasystem.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="recruit-cta__btn-ico" aria-hidden="true">
            <img :src="linkSvg" alt="" />
          </span>
          채용 공고 보러가기
        </a>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/views/sub-recruit-talent';
@use '../assets/scss/layout/sub-banner';
</style>
