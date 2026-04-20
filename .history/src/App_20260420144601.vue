<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header v-if/>
  <router-view />
  <Footer />
</template>
