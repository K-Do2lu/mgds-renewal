<script setup>
import 
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header v-if="route.name !== 'Guide'"/>
  <router-view />
  <Footer />
</template>
