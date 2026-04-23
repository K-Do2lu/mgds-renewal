<script setup>
import { ref } from 'vue';

const headerMenu = ref([
    {menu: 'COMPANY'},
    {menu: 'BUSINESS'},
    {menu: 'NOTICE'},
    {menu: 'RECRUIT'},
])
</script>

<template>
    <header>
        <div class="header-inner">
            <h1 class="logo"><img src="../assets/img/logo.svg" alt="MG데이터시스템 로고"></h1>
            <nav>
                <ul>
                    <a href=""></a>
                    <li v-for="(item, index) in headerMenu" :key="index">{{ item.menu }}</li>
                </a>
                </ul>
            </nav>
        </div>
    </header>
</template>
    
<style lang="scss" scoped>
@use "@/assets/scss/layout/header";
</style>