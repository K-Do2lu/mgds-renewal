<script setup>
import { ref } from 'vue'

const input = ref('')
</script>

<template>
   <el-input v-model="input"  placeholder="검색어를 입력하세요." />
</template>

<style scoped>
</style>