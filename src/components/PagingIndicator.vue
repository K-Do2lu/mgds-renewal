<script setup>
import { computed } from 'vue'
import icoFirst from '@/assets/img/page_indi_lleft.svg'
import icoPrev from '@/assets/img/page_indi_left.svg'
import icoNext from '@/assets/img/page_indi_right.svg'
import icoLast from '@/assets/img/page_indi_rright.svg'

const props = defineProps({
  page: { type: Number, default: 1 },
  totalPages: { type: Number, default: 1 },
})

const emit = defineEmits(['update:page'])

const safePage = computed(() => Math.min(props.totalPages, Math.max(1, props.page)))

const pages = computed(() => {
  const total = Math.max(1, props.totalPages)
  const current = safePage.value
  const maxVisible = 5

  const start = Math.max(1, Math.min(current - 2, total - (maxVisible - 1)))
  const end = Math.min(total, start + (maxVisible - 1))

  const list = []
  for (let p = start; p <= end; p += 1) list.push(p)
  return list
})

function go(p) {
  const next = Math.min(props.totalPages, Math.max(1, p))
  emit('update:page', next)
}
</script>

<template>
  <nav class="paging" aria-label="페이지 이동">
    <button class="paging__btn" type="button" :disabled="safePage <= 1" aria-label="처음" @click="go(1)">
      <img class="paging__ico" :src="icoFirst" alt="" aria-hidden="true" />
    </button>
    <button
      class="paging__btn"
      type="button"
      :disabled="safePage <= 1"
      aria-label="이전"
      @click="go(safePage - 1)"
    >
      <img class="paging__ico" :src="icoPrev" alt="" aria-hidden="true" />
    </button>

    <button
      v-for="p in pages"
      :key="p"
      class="paging__num"
      type="button"
      :class="{ 'is-active': p === safePage }"
      :aria-current="p === safePage ? 'page' : undefined"
      @click="go(p)"
    >
      {{ p }}
    </button>

    <button
      class="paging__btn"
      type="button"
      :disabled="safePage >= totalPages"
      aria-label="다음"
      @click="go(safePage + 1)"
    >
      <img class="paging__ico" :src="icoNext" alt="" aria-hidden="true" />
    </button>
    <button
      class="paging__btn"
      type="button"
      :disabled="safePage >= totalPages"
      aria-label="마지막"
      @click="go(totalPages)"
    >
      <img class="paging__ico" :src="icoLast" alt="" aria-hidden="true" />
    </button>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.paging {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding-top: 18px;
}

.paging__num {
  height: 32px;
  min-width: 32px;
  padding: 0 10px;
  border: 0;
  background: $bg-main;
  color: $txt-sub;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
}

.paging__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid $border-main;
  background: $gray-000;
  border-radius: 6px;
  color: inherit;
  cursor: pointer;
}

.paging__ico {
  display: block;
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.paging__ico img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.paging__btn:disabled {
  opacity: 0.35;
  cursor: default;
}

.paging__num.is-active {
  background: $bg-main;
  color: $point-main;
  font-weight: 700;
}
</style>

