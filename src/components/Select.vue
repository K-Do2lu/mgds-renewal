<script setup>
import { computed, ref } from 'vue'
import { familySiteOptions } from '@/config/familySites'

const props = defineProps({
  /** search(제목/내용) | familySite(패밀리 사이트 링크) */
  mode: {
    type: String,
    default: 'search',
    validator: (v) => ['search', 'familySite'].includes(v),
  },
  modelValue: {
    type: String,
    default: undefined,
  },
})

const emit = defineEmits(['update:modelValue'])

const searchValue = ref('')
const familySiteValue = ref('')

const searchOptions = [
  { value: '제목', label: '제목' },
  { value: '내용', label: '내용' },
]

const placeholder = computed(() =>
  props.mode === 'familySite' ? familySiteOptions[0]?.label : searchOptions[0]?.label,
)

const searchModel = computed({
  get() {
    return props.modelValue ?? searchValue.value
  },
  set(v) {
    if (props.modelValue === undefined) searchValue.value = v
    emit('update:modelValue', v)
  },
})

function openFamilySite(selectedValue) {
  const item = familySiteOptions.find((o) => o.value === selectedValue)
  if (!item?.url) return
  window.open(item.url, '_blank')
}
</script>

<template>
  <el-select
    v-if="mode === 'search'"
    v-model="searchModel"
    :placeholder="placeholder"
  >
    <el-option
      v-for="item in searchOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <el-select
    v-else
    v-model="familySiteValue"
    :placeholder="placeholder"
    :popper-options="{
      modifiers: [{ name: 'flip', enabled: false }],
      placement: 'top-start',
    }"
    @change="openFamilySite"
  >
    <el-option
      v-for="item in familySiteOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>