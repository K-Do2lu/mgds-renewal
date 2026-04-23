<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  /** search(제목/내용) | familySite(패밀리 사이트 링크) */
  mode: {
    type: String,
    default: 'search',
    validator: (v) => ['search', 'familySite'].includes(v),
  },
})

const searchValue = ref('')
const familySiteValue = ref('')

const searchOptions = [
  { value: '제목', label: '제목' },
  { value: '내용', label: '내용' },
]

const familySiteOptions = [
  { value: 'Family Site', label: 'Family Site', url: '/' },
  { value: 'MG새마을금고', label: 'MG새마을금고', url: 'https://www.kfcc.co.kr/' },
  { value: 'MG신용정보', label: 'MG신용정보', url: 'https://www.mginfo.co.kr/' },
  { value: 'MG토탈서비스', label: 'MG토탈서비스', url: 'http://www.mgts.co.kr/Default.asp' },
  {
    value: 'MG새마을금고복지회',
    label: 'MG새마을금고복지회',
    url: 'https://www.kccwf.or.kr/home/comm/comm0001m01/mainPage.html',
  },
  { value: 'MG캐피탈', label: 'MG캐피탈', url: 'https://www.mgcap.co.kr/mgcap/main/main.jsp' },
  { value: 'MGTV', label: 'MGTV', url: 'http://www.mgtvlive.com/' },
]

const placeholder = computed(() =>
  props.mode === 'familySite' ? familySiteOptions[0]?.label : searchOptions[0]?.label,
)

function openFamilySite(selectedValue) {
  const item = familySiteOptions.find((o) => o.value === selectedValue)
  if (!item?.url) return
  window.open(item.url, '_blank')
}
</script>

<template>
  <el-select
    v-if="mode === 'search'"
    v-model="searchValue"
    :placeholder="placeholder"
  >
    <el-option
      v-for="item in searchOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <el-select
    v-else
    v-model="familySiteValue"
    :placeholder="placeholder"
    :popper-options="{
      modifiers: [{ name: 'flip', enabled: false }],
      placement: 'top-start',
    }"
    @change="openFamilySite"
  >
    <el-option
      v-for="item in familySiteOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>