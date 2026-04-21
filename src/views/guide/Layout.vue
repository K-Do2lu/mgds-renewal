<script setup>
import Tab from '@/components/Tab.vue'
import Table from '@/components/Table.vue'
import CodeBlockTabs from '@/views/guide/CodeBlockTabs.vue'

const tabTemplateCode = `<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="공지사항" name="first"><SubNoticeTable /></el-tab-pane>
        <el-tab-pane label="입찰공고" name="second"><SubTenderTable /></el-tab-pane>
        <el-tab-pane label="자료실" name="third"><SubArchiveTable /></el-tab-pane>
    </el-tabs>`

const tabScriptCode = `import { ref } from 'vue'
import SubNoticeTable from '@/views/SubNoticeTable.vue'
import SubTenderTable from '@/views/SubTenderTable.vue'
import SubArchiveTable from '@/views/SubArchiveTable.vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}`

const tabPanels = [
  { label: 'Template', code: tabTemplateCode, language: 'html' },
  { label: 'Script', code: tabScriptCode, language: 'javascript' },
]
</script>

<template>
     <section class="guide">
        <div class="cnt">
            <h2>Tab</h2>
            <div class="itm">
                <Tab />
            </div>

            <CodeBlockTabs :panels="tabPanels" />
        </div>
        

        <div class="cnt">
            <h2>Table</h2>
            <div class="itm">
                <Table />
            </div>
        </div>
    </section>
</template>
