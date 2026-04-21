<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input = ref('')
</script>

<template>

   <el-input
          v-model="input"
          class="responsive-input"
          placeholder="검색어를 입력하세요."
        >
          <template #suffix>
            <el-icon class="el-input__icon"><Search /></el-icon>
          </template>
        </el-input>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.responsive-input {
  --el-input-text-color: $txt-main;
  color: var(--el-input-text-color,var(--el-text-color-regular));
}
</style>