<script setup>
import SubPageHeading from '@/components/SubPageHeading.vue'

const postedAt = '2023.01.09'
</script>

<template>
  <div class="no-email-page">
    <div class="no-email-page__heading">
      <SubPageHeading id="no-email-collect" sub="POLICY" title="이메일주소 무단수집 거부" :lead="`게시일: ${postedAt}`" />
    </div>

    <div class="no-email-page__body">
      <p>
        우리 “MG데이터시스템”은 회원에게 무차별적으로 보내지는 타사의 메일을 차단하기 위해, 본 웹사이트에 게시된 이메일
        주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.
      </p>
      <p class="no-email-page__emph">
        이를 위반 시 <strong>정보통신망법에 의해 형사처벌</strong>될 수 있음을 유념하시기 바랍니다.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.no-email-page {
  max-width: $layout-max-width;
  margin-inline: auto;
  @include clamp(padding-inline, 20px, 40px);
  padding-block: clamp(28px, 4vw, 54px);
  color: $txt-main;
}

.no-email-page__heading {
  margin-bottom: clamp(12px, 2vw, 40px);
}

.no-email-page__body {
  display: grid;
  gap: 12px;

  p {
    margin: 0;
    color: $txt-sub;
    line-height: 1.9;
  }
}

.no-email-page__emph {
  padding: 14px 16px;
  border-radius: 14px;
  background: $bg-submenu;
  color: $txt-main;

  strong {
    color: $point-main;
    font-weight: 700;
  }
}
</style>

