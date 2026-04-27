<script setup>
import { ref } from 'vue'
import downloadIcon from '@/assets/img/download.svg'
import orgImg from '@/assets/img/org.svg'
import partner01 from '@/assets/img/partner_01.svg'
import partner02 from '@/assets/img/partner_02.svg'
import partner03 from '@/assets/img/partner_03.svg'
import partner04 from '@/assets/img/partner_04.svg'
import partner05 from '@/assets/img/partner_05.svg'
import partner06 from '@/assets/img/partner_06.svg'
import BaseSlider from '@/components/BaseSlider.vue'
import slideArrowLeft from '@/assets/img/slide_arrow_left.svg'
import slideArrowRight from '@/assets/img/slide_arrow_right.svg'

const historySliderRef = ref(null)

const companyRows = [
  { label: '회사명', value: 'MG데이터시스템' },
  { label: '설립연도', value: '2022.09' },
  { label: '대표이사', value: '박도형' },
  {
    label: '주요사업',
    value: '금융 IT 솔루션 및 SI, IT 인프라 구축 및 운영, 디지털 전환(DT) 지원, 사업 관리',
  },
  { label: '대표전화/팩스', value: '(관리)02-2669-2993/02-2699-0056' },
]

const ciItems = [
  { label: '국문 가로형' },
  { label: '국문 세로형' },
  { label: '국문 가로형 응용1' },
  { label: '응용 영문 혼합형1' },
  { label: '영문 가로형' },
  { label: '영문 세로형' },
  { label: '국문 가로형 응용2' },
  { label: '응용 영문 혼합형2' },
]

const partnerItems = [
  { label: 'EXOM', src: partner01 },
  { label: 'FOWAVESOFT', src: partner02 },
  { label: 'HS정보통신서비스', src: partner03 },
  { label: 'R2WARE', src: partner04 },
  { label: 'FORCS', src: partner05 },
  { label: 'KSIGN', src: partner06 },
]

const historyYears = [
  {
    year: '2024',
    items: [
      { date: '2024.08.', text: '새마을금고 정보시스템 인프라 증설 사업 수주' },
      { date: '2024.07.', text: '새마을금고 정보보호 강화 구축 사업 수주' },
      { date: '2024.02.', text: '새마을금고 공제디지털전담반 IT도급 사업 수주' },
    ],
  },
  {
    year: '2023',
    items: [
      { date: '2023.11.', text: '새마을금고 보안시스템 유지보수 사업 수행' },
      { date: '2023.07.', text: '새마을금고복지회 통합유지보수 용역 수주' },
      { date: '2023.05.', text: '새마을금고 정보시스템 단위업무 운영 용역 수주' },
      { date: '2023.04.', text: '정보통신공사업 등록' },
    ],
  },
  {
    year: '2022',
    items: [
      { date: '2022.12.', text: '새마을금고 전국 점포 전산장비 유지보수 사업 수행' },
      { date: '2022.12.', text: '새마을금고 정보통합시스템 통합유지보수 사업 수행' },
      { date: '2022.10.', text: '새마을금고중앙회 추가 출자를 통한 자본 증자' },
      {
        date: '2022.09.',
        text: '새마을금고중앙회 IT자회사\n- MG데이터시스템 설립(MG정보시스템 인수)',
      },
      { date: '2022.08.', text: '새마을금고 통합 장애 모니터링시스템 구축 사업 수행' },
      { date: '2022.06.', text: '새마을금고 정보보호 실태 점검사업 사업 수행' },
      { date: '2022.04.', text: '새마을금고 그룹웨어 시스템 재구축(H/W공급) 참여' },
      { date: '2022.01.', text: '새마을금고 보안시스템 유지보수 참여' },
    ],
  },
  {
    year: '2021',
    items: [{ date: '2021.10.', text: '새마을금고 업무프로그램 개발 및 유지보수 사업 수행' }],
  },
  {
    year: '2020',
    items: [
      { date: '2020.11.', text: '소프트웨어사업자 신고확인서발급 업무 개시' },
      { date: '2020.10.', text: 'MG정보시스템 법인설립' },
    ],
  },
]

function onCiClick(e) {
  e.preventDefault()
}
</script>

<template>
  <div class="sub-company-about">
    <section class="sub-company-about__hero" aria-labelledby="sub-company-about-title">
      <div class="sub-company-about__intro">
        <div class="sec-title">
          <span class="sec-title__sub">About</span>
          <h2 id="sub-company-about-title" class="sec-title__title">MG데이터시스템</h2>
        </div>
      </div>

      <div class="sub-company-about__info">
        <table class="sub-company-about__table">
          <tbody>
            <tr v-for="(row, i) in companyRows" :key="i">
              <th scope="row">{{ row.label }}</th>
              <td>{{ row.value }}</td>
            </tr>
          </tbody>
        </table>

        <section class="sub-company-about__ci" aria-labelledby="sub-company-ci-title">
          <h3 id="sub-company-ci-title" class="sub-company-about__ci-heading">CI 다운로드</h3>
          <ul class="sub-company-about__ci-grid" role="list">
            <li v-for="item in ciItems" :key="item.label" class="sub-company-about__ci-item">
              <a
                class="sub-company-about__ci-card"
                href="#"
                :aria-label="`${item.label} CI 파일 다운로드`"
                @click="onCiClick"
              >
                <span class="sub-company-about__ci-label">{{ item.label }}</span>
                <span class="sub-company-about__ci-icon" aria-hidden="true">
                  <img :src="downloadIcon" alt="" />
                </span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <section class="sub-company-about__org" aria-labelledby="sub-company-org-title">
      <div class="sub-company-about__org-intro">
        <div class="sec-title">
          <span class="sec-title__sub">Org Chart</span>
          <h3 id="sub-company-org-title" class="sec-title__title">조직도</h3>
        </div>
      </div>

      <div class="sub-company-about__org-media">
        <img class="sub-company-about__org-img" :src="orgImg" alt="MG데이터시스템 조직도" />
      </div>
    </section>

    <section class="sub-company-about__partners" aria-labelledby="sub-company-partners-title">
      <div class="sub-company-about__partners-intro">
        <div class="sec-title">
          <span class="sec-title__sub">Partners</span>
          <h3 id="sub-company-partners-title" class="sec-title__title">협력사</h3>
        </div>
      </div>

      <ul class="sub-company-about__partners-grid" role="list">
        <li v-for="item in partnerItems" :key="item.label" class="sub-company-about__partners-item">
          <div class="sub-company-about__partners-card">
            <img class="sub-company-about__partners-logo" :src="item.src" :alt="`${item.label} 로고`" />
          </div>
        </li>
      </ul>
    </section>

    <section class="sub-company-about__history" aria-labelledby="sub-company-history-title">
      <div class="sub-company-about__history-head">
        <div class="sub-company-about__history-title">
          <span class="sub-company-about__history-eyebrow">History</span>
          <h3 id="sub-company-history-title" class="sub-company-about__history-heading">
            나은 미래, 더 나은 가치를 위해<br />
            성장을 거듭하는 MGDS가 되겠습니다.
          </h3>
        </div>

        <div class="sub-company-about__history-controls" aria-label="연혁 슬라이더 컨트롤">
          <button
            type="button"
            class="sub-company-about__history-nav sub-company-about__history-nav--prev"
            :disabled="!historySliderRef || historySliderRef.index === 0"
            aria-label="이전"
            @click="historySliderRef?.prev?.()"
          >
            <img class="sub-company-about__history-nav-ico" :src="slideArrowLeft" alt="" aria-hidden="true" />
          </button>
          <button
            type="button"
            class="sub-company-about__history-nav sub-company-about__history-nav--next"
            :disabled="!historySliderRef || historySliderRef.index === historySliderRef.maxIndex"
            aria-label="다음"
            @click="historySliderRef?.next?.()"
          >
            <img class="sub-company-about__history-nav-ico" :src="slideArrowRight" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div class="sub-company-about__history-body">
        <BaseSlider
          ref="historySliderRef"
          class="sub-company-about__history-slider"
          aria-label="연혁 슬라이더"
          :item-count="historyYears.length"
          item-selector=".sub-company-about__history-year"
        >
          <article
            v-for="y in historyYears"
            :key="y.year"
            class="sub-company-about__history-year"
            data-slider-item
          >
            <h4 class="sub-company-about__history-year-title">{{ y.year }}</h4>
            <ul class="sub-company-about__history-list" role="list">
              <li v-for="(it, i) in y.items" :key="`${y.year}-${i}`" class="sub-company-about__history-item">
                <p class="sub-company-about__history-text">{{ it.text }}</p>
              </li>
            </ul>
          </article>
        </BaseSlider>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-company-about';
</style>
