<script setup>
import { ref } from 'vue'

const select = ref('')
</script>

<template>
    <el-select v-model="select" placeholder="Please select">
        <el-option label="Option 1" value="1" />
        <el-option label="Option 2" value="2" />
    </el-select>
</template>