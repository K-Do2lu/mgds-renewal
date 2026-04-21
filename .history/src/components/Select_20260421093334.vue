<script setup>
import { ref } from 'vue'

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
    url: ''
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

const handleClick = (url) => {
  window.open(url, '_blank');
}
</script>

<template>
  <el-select v-model="value" :placeholder="options[0].label">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      />
  </el-select>

  <el-select v-model="value2" :placeholder="options2[0].label">
      <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :url="item.url"
      @click="handleClick(item.url)"
      />
  </el-select>
</template>