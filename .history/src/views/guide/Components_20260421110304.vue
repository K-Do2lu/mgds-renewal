<script setup>
import { onMounted } from 'vue';
import hljs from 'highlight.js';
// 원하는 테마 CSS를 불러옵니다 (vs2015, github, atom-one-dark 등)
import 'highlight.js/styles/atom-one-dark.css'; 

onMounted(() => {
  // DOM이 렌더링된 후 모든 code 태그에 하이라이트를 적용합니다.
  hljs.highlightAll();
});
</script>

<template>
    <div>
        <h1>Components</h1>
    </div>
</template>

<style scoped>
</style>