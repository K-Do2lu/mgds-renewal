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
        <nav>
            <ul>
                <li v-for="(item, index) in headerMenu" :key="index">{{ item.menu }}</li>
            </ul>
        </nav>
    </header>
</template>
    
<style lang="scss" scoped>
.logo{
    @include wh(null, null, null, auto, 29px, 52px);
    img{ width: 100%; height: 100%; object-fit: contain;}
}
</style>