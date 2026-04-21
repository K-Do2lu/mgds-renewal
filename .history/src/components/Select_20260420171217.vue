<script setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: '제목',
  },
  {
    value: 'Option2',
    label: 'Option2',
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
</template>