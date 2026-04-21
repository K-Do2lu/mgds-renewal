<script setup>
import Tab from '@/components/Tab.vue'
import Table from '@/components/Table.vue'
</script>

<template>
     <section class="guide">
        <div class="cnt">
            <h2>Tab</h2>
            <div class="itm">
                <Tab />
            </div>

            <pre>
                <code>
                    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="공지사항" name="first"><SubNoticeTable /></el-tab-pane>
        <el-tab-pane label="입찰공고" name="second"><SubTenderTable /></el-tab-pane>
        <el-tab-pane label="자료실" name="third"><SubArchiveTable /></el-tab-pane>
    </el-tabs>
                </code>
            </pre>
        </div>
        

        <div class="cnt">
            <h2>Table</h2>
            <div class="itm">
                <Table />
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>