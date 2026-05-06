<script setup>
import SubPageHeading from '@/components/SubPageHeading.vue'

const updatedAt = '2023.01.09'
</script>

<template>
  <div class="terms-page">
    <div class="terms-page__heading">
      <SubPageHeading id="terms" sub="POLICY" title="이용약관" :lead="`시행일: ${updatedAt}`" />
    </div>

    <div class="terms-page__body">
      <p class="terms-page__lead">
        이 약관은 MG데이터시스템(이하 “회사”)이 홈페이지(mgdatasystem.co.kr)에서 제공하는 서비스의 이용조건 및 절차, 회사와
        이용자 간 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
      </p>

      <nav class="terms-page__toc" aria-label="약관 목차">
        <a class="terms-page__toc-link" href="#ch1">제1장 총칙</a>
        <a class="terms-page__toc-link" href="#ch2">제2장 서비스 이용계약</a>
        <a class="terms-page__toc-link" href="#ch3">제3장 계약당사자의 의무</a>
        <a class="terms-page__toc-link" href="#ch4">제4장 서비스 이용</a>
        <a class="terms-page__toc-link" href="#ch5">제5장 계약해지 및 이용제한</a>
        <a class="terms-page__toc-link" href="#ch6">제6장 기타</a>
        <a class="terms-page__toc-link" href="#supp">부칙</a>
      </nav>

      <section id="ch1" class="terms-page__section" aria-labelledby="ch1-title">
        <h3 id="ch1-title" class="terms-page__h3">제1장 총칙</h3>

        <article class="terms-page__article" aria-labelledby="a1">
          <h4 id="a1" class="terms-page__h4">제1조(목적)</h4>
          <p>
            이 약관은 회사가 제공하는 모든 서비스(이하 “서비스”)의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.
          </p>
        </article>

        <article class="terms-page__article" aria-labelledby="a2">
          <h4 id="a2" class="terms-page__h4">제2조(정의)</h4>
          <ol class="terms-page__ol">
            <li>이용자: 본 약관에 따라 회사가 제공하는 서비스를 받는 자</li>
            <li>이용계약: 서비스 이용과 관련하여 회사와 이용자 간에 체결하는 계약</li>
            <li>가입: 신청서 양식에 정보를 기입하고 약관에 동의하여 이용계약을 완료시키는 행위</li>
            <li>회원: 회원가입에 필요한 개인정보를 제공하여 회원 등록을 한 자</li>
            <li>이용자번호(ID): 회원 식별과 서비스 이용을 위해 이용자가 선정하고 회사가 승인하는 조합</li>
            <li>패스워드(PASSWORD): 회원 정보 보호를 위해 이용자 본인이 설정한 조합</li>
            <li>이용해지: 회사 또는 회원이 이용계약을 종료시키는 의사표시</li>
          </ol>
        </article>

        <article class="terms-page__article" aria-labelledby="a3">
          <h4 id="a3" class="terms-page__h4">제3조(약관의 효력과 변경)</h4>
          <ul class="terms-page__bullets">
            <li>약관은 서비스 화면 게시/공지 등을 통해 효력이 발생합니다.</li>
            <li>회사는 필요한 경우 약관을 변경할 수 있으며, 공지 후 7일 경과 시 거부의사 없이 이용을 계속하면 동의한 것으로 간주합니다.</li>
            <li>이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 회원등록을 취소할 수 있습니다.</li>
          </ul>
        </article>

        <article class="terms-page__article" aria-labelledby="a4">
          <h4 id="a4" class="terms-page__h4">제4조(준용규정)</h4>
          <p>이 약관에 명시되지 않은 사항은 관련 법령의 규정에 따릅니다.</p>
        </article>
      </section>

      <section id="ch2" class="terms-page__section" aria-labelledby="ch2-title">
        <h3 id="ch2-title" class="terms-page__h3">제2장 서비스 이용계약</h3>

        <article class="terms-page__article" aria-labelledby="a5">
          <h4 id="a5" class="terms-page__h4">제5조(이용계약의 성립)</h4>
          <p>이용계약은 이용신청에 대한 회사의 승낙과 이용자의 약관 동의로 성립됩니다.</p>
        </article>

        <article class="terms-page__article" aria-labelledby="a6">
          <h4 id="a6" class="terms-page__h4">제6조(이용신청)</h4>
          <p>이용신청은 서비스의 회원정보 화면에서 회사가 요구하는 가입신청서 양식에 정보를 기재하여 신청할 수 있습니다.</p>
        </article>

        <article class="terms-page__article" aria-labelledby="a7">
          <h4 id="a7" class="terms-page__h4">제7조(이용신청의 승낙)</h4>
          <ul class="terms-page__bullets">
            <li>회원이 신청서의 사항을 정확히 기재한 경우 특별한 사정이 없는 한 승낙합니다.</li>
            <li>다음에 해당하는 경우 승낙하지 않을 수 있습니다: 실명 미사용, 타인 명의 사용, 허위 기재, 질서·미풍양속 저해 목적 등</li>
          </ul>
        </article>

        <article class="terms-page__article" aria-labelledby="a8">
          <h4 id="a8" class="terms-page__h4">제8조(계약사항의 변경)</h4>
          <p>회원은 기재사항 변경 시 수정하여야 하며, 미수정으로 발생하는 문제의 책임은 회원에게 있습니다.</p>
        </article>
      </section>

      <section id="ch3" class="terms-page__section" aria-labelledby="ch3-title">
        <h3 id="ch3-title" class="terms-page__h3">제3장 계약당사자의 의무</h3>

        <article class="terms-page__article" aria-labelledby="a9">
          <h4 id="a9" class="terms-page__h4">제9조(회사의 의무)</h4>
          <p>
            회사는 서비스 제공과 관련하여 알게 된 회원의 정보를 본인 승낙 없이 제3자에게 누설·배포하지 않습니다. 다만 법령에
            따른 국가기관 요구 등 정당한 절차에 의한 요청이 있는 경우는 예외로 합니다.
          </p>
        </article>

        <article class="terms-page__article" aria-labelledby="a10">
          <h4 id="a10" class="terms-page__h4">제10조(회원의 의무)</h4>
          <ul class="terms-page__bullets">
            <li>타인의 ID 부정 사용 금지</li>
            <li>서비스 정보의 복제·출판 또는 제3자 제공 금지</li>
            <li>저작권 등 권리 침해 금지</li>
            <li>공공질서·미풍양속 위반 내용 유포 금지</li>
            <li>범죄와 결부되는 행위 금지</li>
            <li>관계법령 위반 행위 금지</li>
          </ul>
          <p class="terms-page__note">회원은 서비스 이용권한 등 지위를 양도·증여하거나 담보로 제공할 수 없습니다.</p>
        </article>
      </section>

      <section id="ch4" class="terms-page__section" aria-labelledby="ch4-title">
        <h3 id="ch4-title" class="terms-page__h3">제4장 서비스 이용</h3>

        <article class="terms-page__article" aria-labelledby="a11">
          <h4 id="a11" class="terms-page__h4">제11조(회원의 의무)</h4>
          <ul class="terms-page__bullets">
            <li>등록자료 등 유지·보수에 대한 관리책임</li>
            <li>회사 제공 자료의 임의 삭제·변경 금지</li>
            <li>권리 침해/위법·부적절 콘텐츠 등록 금지(결과 책임은 회원에게 있음)</li>
          </ul>
        </article>

        <article class="terms-page__article" aria-labelledby="a12">
          <h4 id="a12" class="terms-page__h4">제12조(게시물 관리 및 삭제)</h4>
          <p>
            효율적 운영을 위해 저장공간/메시지 크기/보관일수 등을 제한할 수 있으며, 비방·중상모략, 질서 위반, 범죄 결부,
            권리 침해, 음란물 게시/링크 등 관계법령 위반으로 판단되는 게시물은 사전 통지 없이 삭제될 수 있습니다.
          </p>
        </article>

        <article class="terms-page__article" aria-labelledby="a13">
          <h4 id="a13" class="terms-page__h4">제13조(게시물의 저작권)</h4>
          <p>
            게시물의 저작권은 게시자에게 있으며, 서비스를 통해 얻은 정보를 가공·판매하는 등 상업적으로 사용할 수 없습니다.
          </p>
        </article>

        <article class="terms-page__article" aria-labelledby="a14">
          <h4 id="a14" class="terms-page__h4">제14조(서비스 이용시간)</h4>
          <p>서비스 이용은 연중무휴 1일 24시간을 원칙으로 하나, 정기 점검 등 사유가 있을 경우 예외로 합니다.</p>
        </article>

        <article class="terms-page__article" aria-labelledby="a15">
          <h4 id="a15" class="terms-page__h4">제15조(서비스 이용 책임)</h4>
          <p>
            서비스 이용을 통해 해킹, 음란사이트 링크, 상용 S/W 불법배포 등의 행위를 해서는 아니 되며, 위반으로 발생하는 손실 및
            법적 조치 등에 대해 회사는 책임을 지지 않습니다.
          </p>
        </article>

        <article class="terms-page__article" aria-labelledby="a16">
          <h4 id="a16" class="terms-page__h4">제16조(서비스 제공의 중지)</h4>
          <ul class="terms-page__bullets">
            <li>설비 보수 등 공사로 인한 부득이한 경우</li>
            <li>기간통신사업자의 서비스 중지</li>
            <li>시스템 점검이 필요한 경우</li>
            <li>기타 불가항력적 사유가 있는 경우</li>
          </ul>
        </article>
      </section>

      <section id="ch5" class="terms-page__section" aria-labelledby="ch5-title">
        <h3 id="ch5-title" class="terms-page__h3">제5장 계약해지 및 이용제한</h3>

        <article class="terms-page__article" aria-labelledby="a17">
          <h4 id="a17" class="terms-page__h4">제17조(계약해지 및 이용제한)</h4>
          <p>
            회원이 해지를 원할 경우 본인이 인터넷을 통해 해지 신청해야 하며, 회사는 본인 여부 확인 후 조치합니다. 회사는 ID/비밀번호
            도용, 운영 방해, 허위 가입, 이중 등록, 질서 위반, 권리 침해 등 약관/법령 위반 시 해지 조치를 할 수 있습니다.
          </p>
        </article>
      </section>

      <section id="ch6" class="terms-page__section" aria-labelledby="ch6-title">
        <h3 id="ch6-title" class="terms-page__h3">제6장 기타</h3>

        <article class="terms-page__article" aria-labelledby="a18">
          <h4 id="a18" class="terms-page__h4">제18조(양도금지)</h4>
          <p>회원은 서비스 이용권한 등 지위를 양도·증여하거나 담보로 제공할 수 없습니다.</p>
        </article>

        <article class="terms-page__article" aria-labelledby="a19">
          <h4 id="a19" class="terms-page__h4">제19조(손해배상)</h4>
          <p>무료 서비스 관련 손해는 회사의 고의 또는 중대한 과실을 제외하고 회사가 책임을 부담하지 않습니다.</p>
        </article>

        <article class="terms-page__article" aria-labelledby="a20">
          <h4 id="a20" class="terms-page__h4">제20조(면책 조항)</h4>
          <p>
            천재지변 등 불가항력, 설비 보수/교체/정기점검, 회원 귀책사유로 인한 장애, 기대이익 및 자료로 인한 손해 등에 대해 회사는
            책임을 지지 않습니다.
          </p>
        </article>

        <article class="terms-page__article" aria-labelledby="a21">
          <h4 id="a21" class="terms-page__h4">제21조(관할법원)</h4>
          <p>서비스 이용으로 발생한 분쟁 소송은 회사 소재지 관할 법원을 전속 관할법원으로 합니다.</p>
        </article>
      </section>

      <section id="supp" class="terms-page__section" aria-labelledby="supp-title">
        <h3 id="supp-title" class="terms-page__h3">부칙</h3>
        <p>[시행일] 이 약관은 2023년 01월 09일부터 시행합니다.</p>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.terms-page {
  max-width: $layout-max-width;
  margin-inline: auto;
  @include clamp(padding-inline, 20px, 40px);
  padding-block: clamp(28px, 4vw, 54px);
  color: $txt-main;
}

.terms-page__heading {
  margin-bottom: clamp(12px, 2vw, 40px);
}

.terms-page__body {
  display: grid;
  gap: 14px;
}

.terms-page__lead,
.terms-page__body p {
  margin: 0;
  color: $txt-sub;
  line-height: 1.85;
}

.terms-page__toc {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
  border-radius: 14px;
  background: $bg-submenu;
}

.terms-page__toc-link {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fff;
  color: $txt-main;
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;

  &:hover {
    color: $point-main;
  }

  &:focus-visible {
    @include focus-ring();
  }
}

.terms-page__section {
  padding-top: clamp(18px, 2.5vw, 26px);
  margin-top: clamp(16px, 2.2vw, 22px);
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  display: grid;
  gap: 12px;
}

.terms-page__h3 {
  margin: 0;
  font-weight: 700;
  color: $txt-main;
  font-size: 18px;
  letter-spacing: -0.01em;
}

.terms-page__article {
  display: grid;
  gap: 8px;
}

.terms-page__h4 {
  margin: 0;
  font-weight: 700;
  color: $txt-main;
  font-size: 15px;
}

.terms-page__note {
  margin: 0;
  color: $txt-sub;
  font-size: 14px;
}

.terms-page__bullets,
.terms-page__ol {
  margin: 0;
  padding-left: 18px;
  color: $txt-sub;
  line-height: 1.85;
  display: grid;
  gap: 6px;
}

.terms-page__ol {
  padding-left: 20px;
}
</style>

