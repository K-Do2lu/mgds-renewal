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
        <nav>
            <h1 class="logo"><img src="../assets/img/logo.svg" alt="MG데이터시스템 로고"></h1>
            <nav>
                <ul>
                    <li v-for="(item, index) in headerMenu" :key="index">{{ item.menu }}</li>
                </ul>
            </nav>
        </nav>
    </header>
</template>
    
<style lang="scss" scoped>
</style>