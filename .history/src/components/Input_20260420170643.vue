<script setup>
import { ref } from 'vue'
import {  Search } from '@element-plus/icons-vue'

const input = ref('')
</script>

<template>
   <el-input v-model="input"  placeholder="검색어를 입력하세요." />

   <el-input
          v-model="input3"
          class="responsive-input"
          placeholder="Pick a date"
        >
          <template #suffix>
            <el-icon class="el-input__icon"><Search /></el-icon>
          </template>
        </el-input>
</template>

<style scoped>
</style>