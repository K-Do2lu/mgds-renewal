<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import downloadIcon from '@/assets/img/download.svg'
import orgImg from '@/assets/img/org.svg'

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

/** public/downloads/ci 에 동일 파일명으로 두면 다운로드됩니다 (public/downloads/ci/README.txt 참고) */
const CI_DOWNLOAD_BASE = `${String(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/downloads/ci`

const ciItems = [
  { label: '국문 가로형 기본', file: 'MG데이터시스템-가로형-기본.ai' },
  { label: '국문 세로형 기본', file: 'MG데이터시스템-세로형-기본.ai' },
  { label: '국문 가로형 응용', file: 'MG데이터시스템-가로형-응용.ai' },
  { label: '국문 세로형 응용', file: 'MG데이터시스템-세로형-응용.ai' },
  { label: '응용 영문 혼합형 1', file: 'MG데이터시스템-가로형-응용(영문혼합)-01.ai' },
  { label: '응용 영문 혼합형 2', file: 'MG데이터시스템-가로형-응용(영문혼합)-02.ai' },
  { label: '영문 가로형 기본', file: 'MG데이터시스템-가로형-기본(영문).ai' },
  { label: '영문 세로형 기본', file: 'MG데이터시스템-세로형-기본(영문).ai' },
]

function ciDownloadHref(file) {
  return `${CI_DOWNLOAD_BASE}/${encodeURIComponent(file)}`
}

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

const historyNavItems = computed(() =>
  historyYears.map((y) => ({ id: `history-${y.year}`, label: y.year })),
)

const activeHistoryYear = ref(`history-${historyYears[0].year}`)

let historyIo = null

onMounted(() => {
  const sectionEls = historyNavItems.value
    .map(({ id }) => document.getElementById(id))
    .filter(Boolean)

  if (!sectionEls.length || typeof IntersectionObserver === 'undefined') return

  historyIo = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting && e.intersectionRatio > 0.12)
        .reduce(
          (best, e) =>
            !best || e.intersectionRatio > best.intersectionRatio ? e : best,
          null,
        )
      if (visible?.target?.id) {
        activeHistoryYear.value = visible.target.id
      }
    },
    { root: null, rootMargin: '-32% 0px -40% 0px', threshold: [0, 0.15, 0.35, 0.55] },
  )

  for (const el of sectionEls) {
    historyIo.observe(el)
  }
})

onBeforeUnmount(() => {
  historyIo?.disconnect()
  historyIo = null
})

function onHistoryNavClick(id, e) {
  e.preventDefault()
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  activeHistoryYear.value = id
}

</script>

<template>
  <div class="sub-company-about">
    <section class="sub-company-about__hero" aria-labelledby="sub-company-about-title">
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
            <li v-for="item in ciItems" :key="item.file" class="sub-company-about__ci-item">
              <a
                class="sub-company-about__ci-card"
                :href="ciDownloadHref(item.file)"
                :download="item.file"
                :aria-label="`${item.label} CI ${item.file} 다운로드`"
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

    <section class="sub-company-about__history" aria-labelledby="sub-company-history-title">
      <div class="sub-company-about__history-intro">
        <div class="sec-title">
          <span class="sec-title__sub">History</span>
          <h3 id="sub-company-history-title" class="sec-title__title">연혁</h3>
        </div>
      </div>

      <div class="sub-company-about__history-layout">
        <nav class="sub-company-about__history-aside" aria-label="연혁 연도">
          <ul class="sub-company-about__history-nav">
            <li v-for="item in historyNavItems" :key="item.id" class="sub-company-about__history-nav-item">
              <a
                :href="`#${item.id}`"
                class="sub-company-about__history-nav-link"
                :class="{ 'is-active': activeHistoryYear === item.id }"
                :aria-current="activeHistoryYear === item.id ? true : undefined"
                @click="onHistoryNavClick(item.id, $event)"
              >
                <span
                  class="sub-company-about__history-nav-dot"
                  :class="{ 'is-active': activeHistoryYear === item.id }"
                  aria-hidden="true"
                >
                  <span
                    v-if="activeHistoryYear === item.id"
                    class="sub-company-about__history-nav-dot-ring"
                  />
                </span>
                <span class="sub-company-about__history-nav-label">{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="sub-company-about__history-main">
          <section
            v-for="y in historyYears"
            :id="`history-${y.year}`"
            :key="y.year"
            class="sub-company-about__history-block"
            tabindex="-1"
            :aria-labelledby="`history-year-${y.year}`"
          >
            <h4 :id="`history-year-${y.year}`" class="sub-company-about__history-year-heading">
              {{ y.year }}
            </h4>
            <ul class="sub-company-about__history-bullets" role="list">
              <li v-for="(it, i) in y.items" :key="`${y.year}-${i}`" class="sub-company-about__history-bullet">
                <span class="sub-company-about__history-bullet-date">{{ it.date }}</span>
                <span class="sub-company-about__history-bullet-text">{{ it.text }}</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-company-about';
</style>
