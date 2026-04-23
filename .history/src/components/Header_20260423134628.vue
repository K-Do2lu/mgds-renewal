<script setup>
import { primaryNav } from '@/config/sectionNav'
</script>

<template>
    <header>
        <div class="header-inner">
            <router-link to="/">
              
            </router-link><h1 class="logo"><img src="../assets/img/logo.svg" alt="MG데이터시스템 로고"></h1>
            <button type="button" class="menu-btn"><img src="../assets/img/header_menu.svg" alt="메뉴 버튼"></button>
            <nav>
                <ul>
                    <li v-for="item in primaryNav" :key="item.to">
                        <router-link :to="item.to">{{ item.label }}</router-link>
                    </li>
                  
                </ul>
            </nav>
        </div>
    </header>
</template>
    
<style lang="scss" scoped>
@use "@/assets/scss/layout/header";
</style>