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

<style lang="scss">
.el-tabs{
    height: 100vh;
    .guide{
        .cnt{ 
            @include flex(column, null, null, 20px);
            padding: 20px;
            border: 1px solid $gray-200;
            &-itm{border: 1px solid $gray-200;}
        }
    }
}
.el-tabs--left .el-tabs__header.is-left {margin-right: 0;}
</style>