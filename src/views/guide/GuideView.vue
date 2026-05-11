<script setup>
import { ref } from 'vue'
import Color from './Color.vue'
import Icons from './Icons.vue'
import Form from './Form.vue' 
import Layout from './Layout.vue'
import Components from './Components.vue'
import Loading from './Loading.vue'

const tabPosition = ref('left')
</script>

<template>
  <div class="guide-view">
    <div class="guide-view__intro" role="note">
      <p class="guide-view__intro-title">이 가이드 쓰는 법</p>
      <ul>
        <li>
          <strong>기획·디자인</strong>: Color 탭의 「디자인용 목록」·Icons 탭의 규격을 우선 보세요. 코드는 옆
          <strong>전체 복사</strong>만 누르면 됩니다.
        </li>
        <li>
          <strong>개발</strong>: Form / Layout 탭에서 <strong>Template</strong>과 <strong>Script</strong>를 각각 복사해 붙이면 됩니다. (프로젝트에 이미 전역 등록된 컴포넌트는 주석대로 import 생략 가능.)
        </li>
        <li>
          <strong>로딩</strong>: <strong>Loading</strong> 탭에서 전역 오버레이·라우터 연동·API용
          <code>beginManualLoading</code> / <code>endManualLoading</code> 사용법을 확인하세요.
        </li>
      </ul>
    </div>
    <el-tabs class="guide-view__tabs" :tab-position="tabPosition">
      <el-tab-pane label="Color"><Color /></el-tab-pane>
      <el-tab-pane label="Icons"><Icons /></el-tab-pane>
      <el-tab-pane label="Form"><Form /></el-tab-pane>
      <el-tab-pane label="Layout"><Layout /></el-tab-pane>
      <el-tab-pane label="Components"><Components /></el-tab-pane>
      <el-tab-pane label="Loading"><Loading /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
/* 한 줄 스크롤: intro + 탭이 합쳐져 뷰포트를 넘지 않고, 긴 본문은 탭 패널 안에서만 스크롤 */
.guide-view {
  box-sizing: border-box;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.guide-view__intro {
  flex-shrink: 0;
  padding: 16px 20px;
  margin: 0;
  border-bottom: 1px solid $gray-200;
  background: $gray-100;
  font-size: 14px;
  line-height: 1.55;
  color: $txt-sub;
}

.guide-view__intro-title {
  margin: 0 0 8px;
  font-weight: 600;
  color: $gray-700;
}

.guide-view__intro ul {
  margin: 0;
  padding-left: 1.2em;
}

.guide-view__intro li + li {
  margin-top: 6px;
}

:deep(.guide-view__tabs.el-tabs) {
  flex: 1;
  min-height: 0;
  display: flex;
}

:deep(.guide-view__tabs .el-tabs__content) {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

:deep(.guide-view__tabs.el-tabs--left .el-tabs__header.is-left) {
  margin-right: 0;
}

:deep(.guide-view__tabs .guide .cnt) {
  @include flex(column, null, null, 20px);
  padding: 20px;
  &:not(:last-child) {
    border-bottom: 1px solid $gray-200;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: $gray-700;
  }
}
</style>