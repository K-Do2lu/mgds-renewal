<script setup>
import { ref } from 'vue'
import SubNoticeTable from '@/views/SubNoticeTable.vue'
import SubTenderTable from '@/views/SubTenderTable.vue'
import SubArchiveTable from '@/views/SubArchiveTable.vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="공지사항" name="first"><SubNoticeTable /></el-tab-pane>
        <el-tab-pane label="입찰공고" name="second"><SubTenderTable /></el-tab-pane>
        <el-tab-pane label="자료실" name="third"><SubArchiveTable /></el-tab-pane>
    </el-tabs>
</template>

<style lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 0 0 4px;
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 400;
  color: $txt-main;
  line-height: 1.55;
}
.el-tabs--top>.el-tabs__header .el-tabs__item{
    padding: clamp(8px, 1.2vw, 12px) clamp(12px, 1.8vw, 18px);
    font-size: clamp(14px, 1.1vw, 17px);
    font-weight: 600;
    color: $txt-main;
}
.el-tabs--top>.el-tabs__header .el-tabs__item.is-active{
    color: $point-main;
}
.el-tabs__active-bar{
    background-color: $point-main;
}
</style>