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
  },
  {
    value: 'MG새마을금고',
    label: 'MG새마을금고',
  },
  {
    value: 'MG신용정보',
    label: 'MG신용정보',
  },
  {
    value: 'MG토탈서비스스',
    label: 'MG토탈서비스스',
  },
  {
    value: 'MG새마을금고복지회회',
    label: 'MG새마을금고복지회회',
  },
  {
    value: 'MG캐피탈',
    label: 'MG캐피탈',
  },
]
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

  <el-select v-model="value2" :placeholder="options[0].label">
      <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      />
  </el-select>
</template>