<script setup>
import downloadIcon from '@/assets/img/download.svg'

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
  { label: '국문 가로형 응용2' },ㅉ
  { label: '응용 영문 혼합형2' },
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
      </div>
    </section>

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
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-company-about';
</style>
