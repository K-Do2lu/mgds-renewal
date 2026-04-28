<script setup>
import ceoImg from '@/assets/img/ceo.png'
</script>

<template>
  <div class="sub-company-ceo">
    <section class="sub-company-ceo__block" aria-labelledby="sub-company-ceo-title">
      <div class="sub-company-ceo__intro">
        <div class="sec-title">
          <span class="sec-title__sub">CEO</span>
          <h2 id="sub-company-ceo-title" class="sec-title__title">CEO 인사말</h2>
        </div>
      </div>

      <div class="sub-company-ceo__hero" role="group" aria-label="CEO 인사말 헤드라인">
        <div class="sub-company-ceo__hero-text">
          <p class="sub-company-ceo__headline">MGDS, Make Growth Digital.</p>
          <p class="sub-company-ceo__subline">
            금융 IT의 구축부터 운영까지, 현장을 이해하는 실행력으로<br />
            고객의 비즈니스가 안정적으로 성장할 수 있는 기반을 만듭니다.
          </p>
          <p class="sub-company-ceo__sign">
            MG데이터시스템 대표이사 <strong>CEO</strong>
          </p>
        </div>

        <div class="sub-company-ceo__hero-media" aria-hidden="true">
          <img class="sub-company-ceo__hero-img" :src="ceoImg" alt="" />
        </div>
      </div>

      <div class="sub-company-ceo__body" aria-label="CEO 인사말 본문">
       <p>MG데이터시스템 방문을 환영합니다.</p>
        <p>MG데이터시스템(MGDS)은 새마을금고중앙회 IT자회사로서 새마을금고 및 중앙회 정보시스템 개발, 전산유지보수, IT인력지원, 시스템 통합 구축(SI)을 주력사업으로 하고 있습니다.</p>
        <p>새마을금고 및 중앙회 정보시스템 개발, 전산유지보수, IT인력지원, 시스템 통합 구축(SI)을 주력사업으로 하고 있습니다.</p>
        <p>새마을 금고와 중앙회의 급증하고 있는 IT/DT 사업을 적극 지원하고 4차 산업시대 금융 ICT와 빠른 변화에 대응을 위해 전사적인 역량을 집중하고자 합니다.</p>
        새마을금고 IT 조직으로서 보자 유연한 사업운영과 인력체계로 새마을금고와 중앙회의 디지털 금융 시대를 함께 만들어 나아가고자 하오니 많은 관심과 활용을 부탁드립니다.

        감사합니다.
       
        <p class="sub-company-ceo__closing">감사합니다.</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/views/sub-company-ceo';
</style>
