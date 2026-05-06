<script setup>
const footerBottom = [
  {
    title: '개인정보처리방침',
    link: '/privacy',
  },
  {
    title: '이용약관',
    link: '/terms',
  },
  {
    title: '이메일주소 무단수집 거부',
    link: '/email',
  },
]
</script>

<template>
  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col footer-col--left">
          <div class="footer-logo">
            <img src="../assets/img/logo_footer.png" alt="MG데이터시스템 로고" />
          </div>

          <div class="footer-info">
            <dl>
              <dt>Office</dt>
              <dd>(07648) 서울특별시 강서구 공항대로 390 새마을금고IT센터 7층</dd>
            </dl>
            <dl>
              <dt>사업자등록번호</dt>
              <dd>366-87-01915</dd>
            </dl>
            <dl>
              <dt>Tel</dt>
              <dd>(관리) 02-2699-2993 / 운영 및 개발 사업 02-2699-2995~6</dd>
            </dl>
            <dl>
              <dt>Fax</dt>
              <dd>02-2699-0056</dd>
            </dl>
            <dl>
              <dt>Email</dt>
              <dd>mgds@mgdatasystem.co.kr</dd>
            </dl>
          </div>
        </div>

        <div class="footer-col footer-col--right">
          <ul class="footer-links" aria-label="푸터 바로가기">
            <li v-for="item in footerBottom" :key="item.link">
              <router-link :to="item.link">{{ item.title }}</router-link>
            </li>
          </ul>

          <div class="footer-actions">
            <Select mode="familySite" />
            <p class="footer-copy">Copyright © MG데이터시스템. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>