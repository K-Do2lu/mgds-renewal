<script setup>
const values = [
  { title: 'Professionalism', desc: '금융 업무 이해 기반의 실무형 IT 전문성' },
  { title: 'Stability', desc: '안정성 중심의 운영 품질과 리스크 관리 체계' },
  { title: 'Partnership', desc: '고객과 함께 설계하고 함께 성장하는 협업 문화' },
]

const metrics = [
  { label: 'Core Service', value: 'SI / SM / DT' },
  { label: 'Business Domain', value: 'Financial IT' },
  { label: 'Operating Model', value: 'Build + Operate' },
]
</script>
<template>
  <section
    class="page-section page-section--surface-default main-about"
    aria-labelledby="main-about-title"
  >
    <div class="page-section__inner main-about__layout" v-reveal>
      <div class="main-about__hero">
        <p class="main-about__eyebrow">COMPANY HERO</p>
        <h2 id="main-about-title" class="page-section__title">
          금융 IT의 표준을 다시 설계하는<br />
          MG DATA SYSTEM
        </h2>
        <p class="page-section__lead">
          구축부터 운영까지 하나의 흐름으로 연결하는 통합 실행력으로,
          고객의 디지털 금융 경쟁력을 빠르고 안정적으로 구현합니다.
        </p>
        <router-link to="/company/about" class="main-about__cta">
          회사 소개 자세히 보기
        </router-link>
      </div>

      <div class="main-about__content">
        <ul class="main-about__metrics" role="list" aria-label="핵심 지표">
          <li v-for="item in metrics" :key="item.label" class="main-about__metric">
            <span class="main-about__metric-label">{{ item.label }}</span>
            <strong class="main-about__metric-value">{{ item.value }}</strong>
          </li>
        </ul>

        <div class="main-about__values" role="list" aria-label="핵심 가치">
          <article v-for="item in values" :key="item.title" class="main-about__value">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.main-about {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #f5f9ff 0%, #ffffff 100%);

  &::before {
    content: '';
    position: absolute;
    width: min(560px, 72vw);
    aspect-ratio: 1 / 1;
    right: -18%;
    top: -22%;
    background: url('@/assets/img/about_bg.png') no-repeat center / contain;
    opacity: 0.92;
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(900px 260px at 20% 0%, rgba(29, 78, 216, 0.1) 0%, rgba(29, 78, 216, 0) 60%),
      radial-gradient(620px 260px at 80% 30%, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0) 60%);
    pointer-events: none;
    z-index: 0;
  }
}

.main-about__layout {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 8fr);
  gap: clamp(28px, 4.5vw, 56px);
  align-items: center;
}

.main-about__hero {
  position: relative;
  display: grid;
  gap: 14px;
  z-index: 1;
}

.main-about__eyebrow {
  margin: 0;
  color: $point-main;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.main-about__cta {
  width: fit-content;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
  color: #fff;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    filter: brightness(1.06);
  }

  &:focus-visible {
    @include focus-ring();
  }
}

.main-about__content {
  display: grid;
  gap: 14px;
  position: relative;
  z-index: 1;
}

.main-about__metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.main-about__metric {
  border-radius: 16px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(29, 78, 216, 0.16);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.main-about__metric-label {
  display: block;
  font-size: 12px;
  color: $txt-sub;
}

.main-about__metric-value {
  display: block;
  margin-top: 8px;
  font-size: 18px;
  color: $txt-main;
}

.main-about__values {
  display: grid;
  gap: 10px;
}

.main-about__value {
  padding: 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(29, 78, 216, 0.14);
  box-shadow: 0 14px 26px rgba(15, 23, 42, 0.07);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  h3 {
    margin: 0;
    font-size: 20px;
    color: $txt-main;
  }

  p {
    margin: 8px 0 0;
    color: $txt-sub;
    line-height: 1.65;
  }
}

@include bp(tab) {
  .main-about__layout {
    grid-template-columns: 1fr;
  }

  .main-about__hero {
    position: relative;
  }

  .main-about__metrics {
    grid-template-columns: 1fr;
  }

  .main-about::before {
    right: -32%;
    top: -28%;
    opacity: 0.8;
  }
}
</style>