<script setup>
import CodeBlockTabs from '@/views/guide/CodeBlockTabs.vue'
import TopBtn from '@/components/TopBtn.vue'

const inputTemplateCode = `<Input />`

const inputScriptCode = `// Input 컴포넌트는 전역 등록이라 import 없이 사용 가능합니다.
// (만약 전역 등록을 안 했다면)
// import Input from '@/components/Input.vue'`

const inputPanels = [
  { label: 'Template', code: inputTemplateCode, language: 'html' },
  { label: 'Script', code: inputScriptCode, language: 'javascript' },
]

const selectTemplateCode = `<Select mode="search" />
<Select mode="familySite" />`

const selectScriptCode = `// Select 컴포넌트는 전역 등록이라 import 없이 사용 가능합니다.
// mode="search"      : 제목/내용
// mode="familySite"  : 패밀리 사이트 (선택 시 새 탭 열림)
//
// (만약 전역 등록을 안 했다면)
// import Select from '@/components/Select.vue'`

const selectPanels = [
  { label: 'Template', code: selectTemplateCode, language: 'html' },
  { label: 'Script', code: selectScriptCode, language: 'javascript' },
]
</script>

<template>
    <section class="guide">
        <div class="cnt">
            <h2>Input</h2>
            <div class="itm">
                <Input />
            </div>

            <CodeBlockTabs :panels="inputPanels" />
        </div>

        <div class="cnt">
            <h2>Select</h2>
            <div class="itm">
                <div style="display: grid; gap: 12px;">
                    <Select mode="search" />
                    <Select mode="familySite" />
                </div>
            </div>

            <CodeBlockTabs :panels="selectPanels" />
        </div>

        <div class="cnt">
            <h2>TopBtn</h2>
            <div class="itm">
               
            </div>

            <CodeBlockTabs :panels="inputPanels" />
        </div>
    </section>
</template>
