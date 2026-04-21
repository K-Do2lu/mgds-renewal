<script setup>
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import CodeBlock from '@/views/guide/CodeBlock.vue'

const inputExampleCode =
`<el-input
    v-model="input"
    class="responsive-input"
    placeholder="검색어를 입력하세요."
    >
    <template #suffix>
        <el-icon class="el-input__icon"><Search /></el-icon>
    </template>
</el-input>`

const selectExampleCode =
` <el-select v-model="value" :placeholder="options[0].label">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      />
  </el-select>

  <el-select v-model="value2" :placeholder="options2[0].label" :popper-options="{modifiers: [{ name: 'flip', enabled: false }], placement: 'top-start'}">
      <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :url="item.url"
      @click="targetUrl(item.url)"
      />
  </el-select>`
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

            <CodeBlock :code="inputExampleCode" language="html" />
        </div>
    </section>
</template>
