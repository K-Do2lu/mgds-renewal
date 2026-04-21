<script setup>
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
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
    <section class="guide">
        <div class="cnt">
            <h2>Input</h2>
            <div class="itm">
                <Input />
            </div>

        
        </div>

        <div class="cnt">
            <h2>Select</h2>
            <div class="itm">
                <Select />
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>