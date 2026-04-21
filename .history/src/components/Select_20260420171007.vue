<script setup>
import { ref } from 'vue'

const select = ref('')
</script>

<template>
    <el-select v-model="value" placeholder="Select" style="width: 240px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>