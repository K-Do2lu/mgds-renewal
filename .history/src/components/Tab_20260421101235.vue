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
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" :stretch="false">
        <el-tab-pane label="공지사항" name="first"><SubNoticeTable /></el-tab-pane>
        <el-tab-pane label="입찰공고" name="second"><SubTenderTable /></el-tab-pane>
        <el-tab-pane label="자료실" name="third"><SubArchiveTable /></el-tab-pane>
    </el-tabs>
</template>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: red;
  font-size: 32px;
  font-weight: 600;
}
</style>