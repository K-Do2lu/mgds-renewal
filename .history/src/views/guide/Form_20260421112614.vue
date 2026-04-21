<script setup>
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
</script>

<template>
    <section class="guide">
        <div class="cnt">
            <h2>Input</h2>
            <div class="itm">
                <Input />
            </div>

            <!-- code (angle brackets escaped so Vue does not parse as markup) -->
            <pre><code class="language-html">
                &lt;el-input
                    v-model="input"
                    class="responsive-input"
                    placeholder="검색어를 입력하세요."
                    &gt;
                    &lt;template #suffix&gt;
                        &lt;el-icon class="el-input__icon"&gt;&lt;Search /&gt;&lt;/el-icon&gt;
                    &lt;/template&gt;
                &lt;/el-input&gt;
             </code></pre>
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