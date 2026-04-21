<script setup>
import CodeBlock from '@/views/guide/CodeBlock.vue'

/**
 * @typedef {{ label: string, code: string, language?: string }} CodePanel
 */

defineProps({
  /** 예: [{ label: 'Template', code: '...', language: 'html' }, { label: 'Script', code: '...', language: 'javascript' }] */
  panels: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <el-tabs type="border-card" class="code-block-tabs">
    <el-tab-pane
      v-for="(panel, index) in panels"
      :key="index"
      :label="panel.label"
      :name="String(index)"
    >
      <CodeBlock
        :code="panel.code"
        :language="panel.language ?? 'html'"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
.code-block-tabs {
  :deep(.el-tabs__header) {
    margin: 0;
  }
  :deep(.el-tabs__content) {
    padding: 0;
  }
  :deep(.el-tabs__item) {
    font-size: 13px;
  }
}
</style>
