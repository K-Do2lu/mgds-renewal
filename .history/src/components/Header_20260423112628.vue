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
            <button type="button" class="menu-btn"><img</button>
            <nav>
                <ul>
                   
                    <li v-for="(item, index) in headerMenu" :key="index">
                        <router-link to="/>{{ item.menu }}">{{ item.menu }}</router-link>
                    </li>
                  
                </ul>
            </nav>
        </div>
    </header>
</template>
    
<style lang="scss" scoped>
@use "@/assets/scss/layout/header";
</style>