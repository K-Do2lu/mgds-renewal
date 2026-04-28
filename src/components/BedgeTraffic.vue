<script setup>
import { computed } from 'vue'

const defaultTrafficItems = [
  { title: '일반버스', number: '601, 605, 654, 661, N26(심야)', bg: '#EEFFE8', border: '#53B332', text: '#53B332' },
  { title: '좌석버스', number: '60, 60-3, 88', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },
  { title: '직행', number: '8000', bg: '#FFF1F0', border: '#E61911', text: '#E61911' },
  { title: '공항', number: '6003, 6008', bg: '#F0F9FF', border: '#0068B7', text: '#0068B7' },
  { title: '5호선', number: '마곡역 7번 출구', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },
]

const props = defineProps({
  /** 전달 시 Guide 기본 목록 대신 이 항목만 렌더 (오시는 길 등) */
  items: {
    type: Array,
    default: undefined,
  },
})

const trafficItems = computed(() =>
  props.items !== undefined && props.items !== null ? props.items : defaultTrafficItems
)
</script>

<template>
  <div class="bedge-traffic">
    <div v-for="item in trafficItems" :key="item.title" class="bedge traffic">
      <span
        class="traffic-title"
        :style="{ background: item.bg, border: `1px solid ${item.border}`, color: item.text }"
      >
        {{ item.title }}
      </span>
      <span class="traffic-number">{{ item.number }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bedge-traffic {
  @include flex(column, null, flex-start, 12px);
  width: 100%;
  min-width: 0;
}

/* 모바일 제외: 항목 단위(badge+번호)를 한 줄(row) 흐름으로 */
@media (min-width: #{$bp-mo + 1px}) {
  .bedge-traffic {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 16px;
    row-gap: 12px;
  }
}

.bedge {
  @include flex(row, null, center, 8px);
  flex-wrap: wrap;
  border: 1px solid transparent;

  &.traffic {
    .traffic-title {
      display: inline-block;
      @include wh(auto, 60px, 95px, auto, 39px, 41px);
      padding: 10px 16px;
      font-weight: 500;
      vertical-align: middle;
      border-radius: 1000px;
      line-height: 1.2;
    }

    .traffic-number {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
