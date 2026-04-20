<script setup>
import { ref } from 'vue'

const tabPosition = ref('left')
</script>

<template>

    <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
</template>

<style scoped>
</style>