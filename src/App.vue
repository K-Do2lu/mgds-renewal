<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import AppLoadingOverlay from './components/AppLoadingOverlay.vue'

const route = useRoute()
</script>

<template>
  <Header v-if="route.name !== 'Guide'" />
  <router-view />
  <Footer v-if="route.name !== 'Guide'" />
  <TopBtn />
  <AppLoadingOverlay />
</template>
