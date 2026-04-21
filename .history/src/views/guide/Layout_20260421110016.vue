<script setup>
import Tab from '@/components/Tab.vue'
import Table from '@/components/Table.vue'
</script>

<template>
     <section class="guide">
        <div class="cnt">
            <h2>Tab</h2>
            <div class="itm">
                <Tab />
            </div>

            <pre><code class="language-css">
.glass-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(25px);
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
</style>