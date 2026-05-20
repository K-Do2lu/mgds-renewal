<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import AppLoadingOverlay from './components/AppLoadingOverlay.vue'

const route = useRoute()

const hideSiteChrome = () =>
  route.name === 'Guide' || route.meta?.layout === 'admin'
</script>

<template>
  <div
    :class="[
      'app-shell',
      { 'app-shell--guide': route.name === 'Guide' || route.meta?.layout === 'admin' },
    ]"
  >
    <Header v-if="!hideSiteChrome()" />
    <main class="app-shell__main">
      <router-view />
    </main>
    <Footer v-if="!hideSiteChrome()" />
  </div>
  <TopBtn v-if="!hideSiteChrome()" />
  <AppLoadingOverlay />
</template>
