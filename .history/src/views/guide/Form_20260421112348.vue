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

            <!-- code -->
             <pre><code class="language-html">
                &lt;Input /&gt;
             </code></pre>
             <!-- //code -->
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