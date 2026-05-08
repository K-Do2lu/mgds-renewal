<script setup>
import { ref } from 'vue'
import Tab from '@/components/Tab.vue'
import Table from '@/components/Table.vue'
import PagingIndicator from '@/components/PagingIndicator.vue'
import CodeBlockTabs from '@/views/guide/CodeBlockTabs.vue'

const tableData = ref([
    { title: '제목', date: '2026-04-21', view: 100, url: '', file: false, hot: true },
    { title: '테스트제목입니다.', date: '2026-04-21', view: 100, url: '', file: true, hot: true },
    { title: '제목', date: '2026-04-21', view: 100, url: '', file: false, hot: false },
    { title: '제목', date: '2026-04-21', view: 100, url: '', file: true, hot: false },
    { title: '제목', date: '2026-04-21', view: 100, url: '', file: false, hot: false },
])

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

const tableTemplateCode = `<Table :items="tableData" />

<PagingIndicator v-model:page="page" :total-pages="5" />`

const tableScriptCode = `import { ref } from 'vue'
import Table from '@/components/Table.vue'
import PagingIndicator from '@/components/PagingIndicator.vue'

const tableData = ref([
  { title: '제목', date: '2026-04-21', view: 100, url: '', file: false, hot: true },
  { title: '테스트제목입니다.', date: '2026-04-21', view: 100, url: '', file: true, hot: true },
  { title: '제목', date: '2026-04-21', view: 100, url: '', file: false, hot: false },
  { title: '제목', date: '2026-04-21', view: 100, url: '', file: true, hot: false },
  { title: '제목', date: '2026-04-21', view: 100, url: '', file: false, hot: false },
])

const page = ref(1)`

const pagingOnlyTemplateCode = `<PagingIndicator v-model:page="page" :total-pages="10" />`

const pagingOnlyScriptCode = `import { ref } from 'vue'

const page = ref(1)`

const tablePanels = [
  { label: 'Template', code: tableTemplateCode, language: 'html' },
  { label: 'Script', code: tableScriptCode, language: 'javascript' },
  { label: '페이징만 (Template)', code: pagingOnlyTemplateCode, language: 'html' },
  { label: '페이징만 (Script)', code: pagingOnlyScriptCode, language: 'javascript' },
]
const guidePage = ref(1)
</script>

<template>
  <section class="guide">
        <div class="cnt">
            <h2>Tab</h2>
            <p class="layout-guide-lead">
              실제 공지 섹션은 서브 페이지 컴포넌트를 넣습니다. 아래 코드는 프로젝트에 이미 있는
              <code>SubNoticeTable</code> 등을 기준으로 한 예시입니다.
            </p>
            <div class="itm">
                <Tab />
            </div>

            <CodeBlockTabs :panels="tabPanels" />
        </div>
        

        <div class="cnt">
            <h2>Table + 페이징</h2>
            <p class="layout-guide-lead">
              앞 두 탭은 목록+페이지를 함께 쓸 때 복사용입니다. 페이징 컴포넌트만 필요하면 「페이징만」탭을 쓰세요.
            </p>
            <div class="itm">
                <Table :items="tableData" />
                <PagingIndicator v-model:page="guidePage" :total-pages="5" />
            </div>

            <CodeBlockTabs :panels="tablePanels" />
        </div>

    </section>
</template>

<style scoped lang="scss">
.layout-guide-lead {
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.5;
  color: $txt-sub;
}
</style>
