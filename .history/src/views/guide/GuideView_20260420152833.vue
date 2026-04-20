<script setup>
import { ref } from 'vue'
import Color from './Color.vue'
import Icons from './Icons.vue'
import Form from './Form.vue' 
import Layout from './Layout.vue'
import Components from './Components.vue'

const tabPosition = ref('left')
</script>

<template>
    <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="Color"><Color /></el-tab-pane>
        <el-tab-pane label="Icons"><Icons /></el-tab-pane>
        <el-tab-pane label="Form"><Form /></el-tab-pane>
        <el-tab-pane label="Layout"><Layout /></el-tab-pane>
        <el-tab-pane label="Components"><Components /></el-tab-pane>
    </el-tabs>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/abstract" as *;
.el-tabs{
    height: 100vh;
    .cnt{
        padding: 40px 0;
        .bx{ 
            @include flex(column, null, null, 20px);
        }
    }
}
</style>