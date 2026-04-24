<script setup>
import { computed, unref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  /** { to, label, routeName }[] — sectionNav.subNavBySection[*] */
  items: {
    type: Array,
    required: true,
  },
  ariaLabel: {
    type: String,
    default: '하위 메뉴',
  },
})

const route = useRoute()
const router = useRouter()

const activeName = computed(() => {
  const match = props.items.find((i) => i.routeName === route.name)
  return match?.routeName ?? props.items[0]?.routeName ?? ''
})

function onTabClick(pane) {
  const name = pane.props?.name ?? unref(pane.paneName)
  const item = props.items.find((i) => i.routeName === name)
  if (item && route.name !== item.routeName) {
    router.push(item.to)
  }
}
</script>

<template>
  <nav class="sub-nav-tabs" :aria-label="ariaLabel">
    <el-tabs
      :model-value="activeName"
      class="demo-tabs"
      :stretch="true"
      @tab-click="onTabClick"
    >
      <el-tab-pane
        v-for="item in items"
        :key="item.routeName"
        :label="item.label"
        :name="item.routeName"
      />
    </el-tabs>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.sub-nav-tabs {
  :deep(.el-tabs) {
    height: auto !important;
  }

  :deep(.demo-tabs > .el-tabs__content) {
    display: none;
    padding: 0;
  }

  :deep(.el-tabs--top > .el-tabs__header .el-tabs__item) {
    padding: 12px;
    font-size: 20px;
    color: $txt-main;
  }

  :deep(.el-tabs--top > .el-tabs__header .el-tabs__item.is-active) {
    color: $point-main;
  }

  :deep(.el-tabs__active-bar) {
    background-color: $point-main;
  }
}
</style>
