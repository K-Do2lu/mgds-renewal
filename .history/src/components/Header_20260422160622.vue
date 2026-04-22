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
        <h1 class="logo"><img src="../assets/img/logo.svg" alt="MG데이터시스템 로고"></h1>
    </header>
</template>
    
<style scoped>
.logo{
    @include clamp(height, 29px, 52px)
    img{
        width: 100%;
    }
}
</style>