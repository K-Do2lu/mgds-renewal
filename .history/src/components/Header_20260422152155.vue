<script setup>
import { ref } from 'vue';

const headerMenu = ref([
    {menu: 'COMPANY'},
    {menu: 'BUSINESS'},
    {menu: 'COMPANY'},
    {menu: 'COMPANY'},
])
</script>

<template>
    <header>
        <h1 class="logo"><img src="../assets/img/logo.svg" alt="MG데이터시스템 로고"></h1>

        <nav>
            <ul>
                <li>COMPANY</li>
            </ul>
        </nav>
    </header>
</template>
    
<style scoped>
</style>