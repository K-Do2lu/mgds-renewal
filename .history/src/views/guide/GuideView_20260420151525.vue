<script setup>
import { ref } from 'vue'
import

const tabPosition = ref('left')
</script>

<template>
    <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="Color">Color</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
</template>

<style scoped>
.el-tabs{
    height: 100vh;
}
</style>