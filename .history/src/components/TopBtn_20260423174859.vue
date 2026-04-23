<script setup>
import { ref } from 'vue'

const topBtn = ref(null)

onMounted(() => {
  topBtn.value = document.querySelector('.top-btn')
})
</script>

<template>
  <button class="top-btn">Top</button>
</template>