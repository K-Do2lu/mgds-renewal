<script setup>
import { computed, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: '검색어를 입력하세요.',
  },
})

const emit = defineEmits(['update:modelValue'])

const inner = ref('')
const value = computed({
  get() {
    return props.modelValue ?? inner.value
  },
  set(v) {
    if (props.modelValue === undefined) inner.value = v
    emit('update:modelValue', v)
  },
})
</script>

<template>
    <el-input
        v-model="value"
        class="responsive-input"
        :placeholder="placeholder"
        >
        <template #suffix>
            <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
    </el-input>
</template>

<style lang="scss">
</style>