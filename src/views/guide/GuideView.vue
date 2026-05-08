<script setup>
import { ref } from 'vue'
import Color from './Color.vue'
import Icons from './Icons.vue'
import Form from './Form.vue' 
import Layout from './Layout.vue'
import Components from './Components.vue'

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
      </ul>
    </div>
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="Color"><Color /></el-tab-pane>
      <el-tab-pane label="Icons"><Icons /></el-tab-pane>
      <el-tab-pane label="Form"><Form /></el-tab-pane>
      <el-tab-pane label="Layout"><Layout /></el-tab-pane>
      <el-tab-pane label="Components"><Components /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss">
.guide-view__intro {
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

.el-tabs{
    height: 100vh;
    .guide{
        .cnt{ 
            @include flex(column, null, null, 20px);
            padding: 20px;
            &:not(:last-child) {border-bottom: 1px solid $gray-200;}
            h2{font-size: 20px; font-weight: 600; color: $gray-700;}
        }
    }
}
.el-tabs__content{max-height: 100vh; overflow-y: auto;}
.el-tabs--left .el-tabs__header.is-left {margin-right: 0;}
</style>