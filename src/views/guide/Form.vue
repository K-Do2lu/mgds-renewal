<script setup>
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import CodeBlockTabs from '@/views/guide/CodeBlockTabs.vue'

const inputTemplateCode = `<el-input
    v-model="input"
    class="responsive-input"
    placeholder="검색어를 입력하세요."
    >
    <template #suffix>
        <el-icon class="el-input__icon"><Search /></el-icon>
    </template>
</el-input>`

const inputScriptCode = `import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input = ref('')`

const inputPanels = [
  { label: 'Template', code: inputTemplateCode, language: 'html' },
  { label: 'Script', code: inputScriptCode, language: 'javascript' },
]

const selectTemplateCode = `<el-select v-model="value" :placeholder="options[0].label">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      />
  </el-select>

  <el-select v-model="value2" :placeholder="options2[0].label" :popper-options="{modifiers: [{ name: 'flip', enabled: false }], placement: 'top-start'}">
      <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :url="item.url"
      @click="targetUrl(item.url)"
      />
  </el-select>`

const selectScriptCode = `import { ref } from 'vue'

const value = ref('')
const value2 = ref('')

const options = [
  {
    value: '제목',
    label: '제목',
  },
  {
    value: '내용',
    label: '내용',
  }
]
const options2 = [
  {
    value: 'Family Site',
    label: 'Family Site',
    url: 'https://www.mgdatasystem.co.kr/'
  },
  {
    value: 'MG새마을금고',
    label: 'MG새마을금고',
    url: 'https://www.kfcc.co.kr/'
  },
  {
    value: 'MG신용정보',
    label: 'MG신용정보',
    url: 'https://www.mginfo.co.kr/'
  },
  {
    value: 'MG토탈서비스',
    label: 'MG토탈서비스',
    url: 'http://www.mgts.co.kr/Default.asp'
  },
  {
    value: 'MG새마을금고복지회',
    label: 'MG새마을금고복지회',
    url: 'https://www.kccwf.or.kr/home/comm/comm0001m01/mainPage.html'
  },
  {
    value: 'MG캐피탈',
    label: 'MG캐피탈',
    url: 'https://www.mgcap.co.kr/mgcap/main/main.jsp'
  },
  {
    value: 'MGTV',
    label: 'MGTV',
    url: 'http://www.mgtvlive.com/'
  },
]

const targetUrl = (url) => {
  window.open(url, '_blank');
}`

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
                <Select />
            </div>

            <CodeBlockTabs :panels="selectPanels" />
        </div>
    </section>
</template>
