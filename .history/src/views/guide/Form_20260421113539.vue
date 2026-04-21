<script setup>
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import CodeBlock from '@/views/guide/CodeBlock.vue'

const inputExampleCode = `<el-input
    v-model="input"
    class="responsive-input"
    placeholder="검색어를 입력하세요."
    >
    <template #suffix>
        <el-icon class="el-input__icon"><Search /></el-icon>
    </template>
</el-input>`

const inputExampleCode = `<el-input
    v-model="input"
    class="responsive-input"
    placeholder="검색어를 입력하세요."
    >
    <template #suffix>
        <el-icon class="el-input__icon"><Search /></el-icon>
    </template>
</el-input>`
</script>

<template>
    <section class="guide">
        <div class="cnt">
            <h2>Input</h2>
            <div class="itm">
                <Input />
            </div>

            <CodeBlock :code="inputExampleCode" language="html" />
        </div>

        <div class="cnt">
            <h2>Select</h2>
            <div class="itm">
                <Select />
            </div>
        </div>
    </section>
</template>
