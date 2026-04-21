<script setup>
import Tab from '@/components/Tab.vue'
import Table from '@/components/Table.vue'
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
            <h2>Tab</h2>
            <div class="itm">
                <Tab />
            </div>

            <pre><code class="language-css">
                /* 비개발자도 바로 복붙 가능한 코드 */
                .glass-card {
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(25px);
                    border-radius: 44px;
                }
    </code></pre>
        </div>
        

        <div class="cnt">
            <h2>Table</h2>
            <div class="itm">
                <Table />
            </div>
        </div>
    </section>
</template>

<style scoped>
pre {
  border-radius: 8px;
  overflow: hidden;
}
</style>