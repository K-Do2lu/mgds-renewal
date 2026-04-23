<script setup>
import {ref} from 'vue';

const footerBottom = ref([
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
]);

</script>

<template>
    <footer>
        <div class="footer-inner">
            <div class="inner-top">
                <div class="footer-logo"><img src="../assets/img/logo_footer.png" alt="MG데이터시스템 로고"></div>

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
                        <dd>(관리) 02-2699-2993<br>
                            운영 및 개발 사업 02-2699-2995~6</dd>
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
            <div class="inner-bottom">
                <router-link to="" v-for="(item, index) in footerBottom" :key="index">{{ item.title }}</router-link>

                selec
            </div>
        </div>
    </footer>
</template>

<style scoped>
</style>