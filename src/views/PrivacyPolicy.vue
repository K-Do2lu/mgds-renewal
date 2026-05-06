<script setup>
import SubPageHeading from '@/components/SubPageHeading.vue'

const updatedAt = '2024.05.28'
</script>

<template>
  <div class="policy-page">
    <div class="policy-page__heading">
      <SubPageHeading
        id="privacy-policy"
        sub="POLICY"
        title="개인정보처리방침"
        :lead="`공고일 · 시행일: ${updatedAt}`"
      />
    </div>
    <div class="policy-page__body">
      <p>
        (주)엠지데이터시스템(이하 “회사”)은 개인정보보호법 제30조 및 동법 시행령 제31조에 따라 개인정보 및 정보주체의
        권리를 보호하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
      </p>

      <section class="policy-page__section" aria-labelledby="p1">
        <h3 id="p1" class="policy-page__h3">제1조 (개인정보의 처리 목적·항목 및 보유기간)</h3>

        <h4 class="policy-page__h4">1) 수집하는 개인정보의 항목</h4>
        <p class="policy-page__note">
          회사는 법령에 따른 개인정보 처리 또는 정보주체로부터 동의를 받은 개인정보만 처리하며, 목적 외 이용 시 관련 법령에
          따라 안내 및 동의를 받습니다.
        </p>

        <div class="policy-table" role="region" aria-label="개인정보 수집 항목 표" tabindex="0">
          <table>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">항목</th>
                <th scope="col">목적</th>
                <th scope="col">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>채용</td>
                <td>
                  <strong>필수</strong> : 이름, 생년월일, 사진, 연락처(이메일 주소, 핸드폰번호), 주소, 장애/보훈여부(해당자),
                  병역사항(해당자), 학력사항, 경력사항, 가족사항, 개인정보 보유기간, 자격사항, 자기소개서
                  <br />
                  <strong>선택</strong> : 이름(영문, 한문), 국적, 주소, 희망연봉, 직전연봉, 희망직급, 추천인, 어학/자격/수상/교육 사항
                </td>
                <td>인력채용</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="policy-page__h4">2) 개인정보 보유기간</h4>
        <p class="policy-page__note">
          회사는 원칙적으로 개인정보 수집·이용 목적 달성 또는 동의 철회 요청 시 지체 없이 파기합니다. 단, 관계 법령에 따라
          일정 기간 보유가 필요한 경우 아래 기간 동안 보유할 수 있습니다.
        </p>

        <div class="policy-table" role="region" aria-label="개인정보 보유기간 표" tabindex="0">
          <table>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">보유 사유</th>
                <th scope="col">보유 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>채용</td>
                <td>정보주체 동의</td>
                <td>1년</td>
              </tr>
              <tr>
                <td>인재풀</td>
                <td>정보주체 동의</td>
                <td>1년</td>
              </tr>
              <tr>
                <td>인터넷 로그기록 및 접속자 추적자료</td>
                <td>통신비밀보호법</td>
                <td>3개월</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul class="policy-page__bullets">
          <li>입사지원서상 개인정보는 인재 채용을 위해 1년간 인재풀로 활용 후 지체 없이 파기될 수 있습니다.</li>
          <li>
            회사는 민감정보를 원칙적으로 수집하지 않으며, 채용 목적 범위에서 건강정보·장애/보훈 여부는 동의 하에 처리될 수
            있습니다.
          </li>
        </ul>
      </section>

      <section class="policy-page__section" aria-labelledby="p2">
        <h3 id="p2" class="policy-page__h3">제2조 (개인정보의 제3자 제공)</h3>
        <p>
          회사는 법령에 특별한 규정이 있는 경우 등을 제외하고는 정보주체의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
          다만, 개인정보보호법 제18조에 따라 아래 사유에 해당하는 경우 제공될 수 있습니다.
        </p>
        <ol class="policy-page__ol">
          <li>정보주체의 동의를 받은 경우</li>
          <li>다른 법률에 특별한 규정이 있는 경우</li>
          <li>급박한 생명·신체·재산의 이익을 위하여 필요하다고 인정되는 경우</li>
          <li>범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우</li>
        </ol>
      </section>

      <section class="policy-page__section" aria-labelledby="p3">
        <h3 id="p3" class="policy-page__h3">제3조 (개인정보처리의 위탁)</h3>
        <p>
          회사는 법령에 정한 바에 따라 개인정보 처리를 타인에게 위탁할 수 있으며, 위탁 시 정보주체가 쉽게 확인할 수 있도록
          고지합니다. 위탁계약 체결 시 개인정보보호법 제26조에 따라 안전하게 처리되도록 관리·감독합니다.
        </p>
        <div class="policy-table" role="region" aria-label="위탁업체 표" tabindex="0">
          <table>
            <thead>
              <tr>
                <th scope="col">업체명</th>
                <th scope="col">업무내용</th>
                <th scope="col">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>㈜더블유에프텍</td>
                <td>새마을금고 업무프로그램 개발 및 유지보수</td>
                <td>개발사업팀</td>
              </tr>
              <tr>
                <td>㈜강스정보</td>
                <td>
                  새마을금고 업무프로그램 개발 및 유지보수, 정보시스템 단위업무 운영(홈페이지, 메시지시스템, 민원처리,
                  이상거래탐지, 업무자동화 및 텔레뱅킹 등)
                </td>
                <td></td>
              </tr>
              <tr>
                <td>㈜미래아이엔텍</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>㈜큐테크21</td>
                <td>
                  새마을금고 정보시스템 단위업무 운영(홈페이지, 메시지시스템, 민원처리, 이상거래탐지, 업무자동화 및 텔레뱅킹 등)
                </td>
                <td></td>
              </tr>
              <tr>
                <td>㈜노아정보기술</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>㈜솔모정보기술</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>㈜샤맥스</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="policy-page__section" aria-labelledby="p4">
        <h3 id="p4" class="policy-page__h3">제4조 (정보주체의 권리·의무 및 행사방법)</h3>
        <p>정보주체는 회사에 대해 다음 권리를 행사할 수 있습니다.</p>
        <ol class="policy-page__ol">
          <li>개인정보 열람 요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제 요구</li>
          <li>처리정지 요구</li>
          <li>정보주체 이외로부터 수집 시 고지 요구 등</li>
        </ol>
        <p class="policy-page__note">
          권리 행사는 서면, 전자우편, 모사전송(FAX) 등을 통하여 할 수 있으며 회사는 지체 없이 조치합니다. 다만 법령상 의무
          준수 등 사유가 있는 경우 일부 요구는 제한될 수 있습니다.
        </p>
      </section>

      <section class="policy-page__section" aria-labelledby="p5">
        <h3 id="p5" class="policy-page__h3">제5조 (개인정보의 파기)</h3>
        <p>
          보유기간 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때 5일 이내 파기합니다. 전자적 파일은 복구 불가능한
          방식으로, 종이문서는 분쇄 또는 소각하여 파기합니다.
        </p>
      </section>

      <section class="policy-page__section" aria-labelledby="p6">
        <h3 id="p6" class="policy-page__h3">제6조 (안전성 확보조치)</h3>
        <p>회사는 분실·도난·유출·변조·훼손 방지를 위해 다음 조치를 시행합니다.</p>
        <ul class="policy-page__bullets">
          <li>관리적 조치: 내부관리계획 수립·시행, 취급자 교육, 정기 자체 점검</li>
          <li>기술적 조치: 접근권한 차등 부여, 암호화, 접속기록 보관 및 백업, 보안프로그램 운영, 접근통제 등</li>
          <li>물리적 조치: 전산실·보관실 접근 제한 및 잠금장치 운영</li>
        </ul>
      </section>

      <section class="policy-page__section" aria-labelledby="p7">
        <h3 id="p7" class="policy-page__h3">제7조 (개인정보보호책임자)</h3>
        <div class="policy-table" role="region" aria-label="개인정보보호책임자 표" tabindex="0">
          <table>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">직책/부서</th>
                <th scope="col">연락처</th>
                <th scope="col">이메일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>개인정보보호책임자</td>
                <td>대표이사</td>
                <td>02-2699-2993</td>
                <td>hjkim@mgdatasystem.co.kr</td>
              </tr>
              <tr>
                <td>개인정보보호담당자</td>
                <td>관리팀</td>
                <td>070-4156-5035</td>
                <td>suho.lee@mgdatasystem.co.kr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="policy-page__section" aria-labelledby="p8">
        <h3 id="p8" class="policy-page__h3">제8조 (권익침해 구제방법)</h3>
        <p>개인정보 침해 관련 피해구제 및 상담은 아래 기관에 문의할 수 있습니다.</p>
        <ul class="policy-page__bullets">
          <li>개인정보 분쟁조정위원회: 1833-6972 (www.kopico.go.kr)</li>
          <li>개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
          <li>경찰청 사이버안전지킴이: (국번없이) 182 (cyberbureau.police.go.kr)</li>
        </ul>
      </section>

      <section class="policy-page__section" aria-labelledby="p9">
        <h3 id="p9" class="policy-page__h3">제9조 (개인정보 처리방침의 변경)</h3>
        <p>이 개인정보 처리방침은 {{ updatedAt }}부터 적용됩니다.</p>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.policy-page {
  max-width: $layout-max-width;
  margin-inline: auto;
  @include clamp(padding-inline, 20px, 40px);
  padding-block: clamp(28px, 4vw, 54px);
  color: $txt-main;
}

.policy-page__heading {
  margin-bottom: clamp(12px, 2vw, 40px);
}

.policy-page__body {
  display: grid;
  gap: 14px;

  p {
    margin: 0;
    color: $txt-sub;
    line-height: 1.8;
  }
}

.policy-page__section {
  padding-top: clamp(18px, 2.5vw, 26px);
  margin-top: clamp(16px, 2.2vw, 22px);
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  display: grid;
  gap: 12px;
}

.policy-page__h3 {
  margin: 0;
  font-weight: 700;
  color: $txt-main;
  font-size: 18px;
  letter-spacing: -0.01em;
}

.policy-page__h4 {
  margin: 0;
  font-weight: 700;
  color: $txt-main;
  font-size: 15px;
}

.policy-page__note {
  color: $txt-sub;
  font-size: 14px;
}

.policy-page__bullets {
  margin: 0;
  padding-left: 18px;
  color: $txt-sub;
  line-height: 1.8;
  display: grid;
  gap: 6px;
}

.policy-page__ol {
  margin: 0;
  padding-left: 20px;
  color: $txt-sub;
  line-height: 1.8;
  display: grid;
  gap: 6px;
}

.policy-table {
  overflow: auto;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fff;

  &:focus-visible {
    @include focus-ring();
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 720px;
  }

  th,
  td {
    padding: 12px 14px;
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    vertical-align: top;
    font-size: 14px;
    line-height: 1.6;
  }

  th {
    background: $bg-submenu;
    color: $txt-main;
    font-weight: 700;
    text-align: left;
    white-space: nowrap;
  }

  td {
    color: $txt-sub;
  }

  tbody tr:last-child td {
    border-bottom: 0;
  }
}
</style>

