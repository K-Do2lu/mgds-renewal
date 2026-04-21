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

  <el-select v-model="value" :placeholder="options[0].label">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      />
  </el-select>
</template>