<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { primaryNav, subNavBySection } from '@/config/sectionNav'
import { getSubPageHeadingByRouteName } from '@/config/subPageHeadings'
import SubPageHeading from '@/components/SubPageHeading.vue'

const props = defineProps({
  sectionKey: {
    type: String,
    required: true,
  },
  navAriaLabel: {
    type: String,
    required: true,
  },
})

const route = useRoute()

const navItems = computed(() => subNavBySection[props.sectionKey] ?? [])

const sectionEntry = computed(() => primaryNav.find((p) => p.sectionKey === props.sectionKey) ?? null)

const heading = computed(() => getSubPageHeadingByRouteName(route.name))

/** 상세(자식) 라우트일 때 목록 탭을 활성으로 — meta.parentRouteName */
const parentRouteName = computed(() => {
  if (route.meta?.parentRouteName) return route.meta.parentRouteName
  for (let i = route.matched.length - 1; i >= 0; i -= 1) {
    const name = route.matched[i].meta?.parentRouteName
    if (name) return name
  }
  return null
})

const activeSub = computed(() => {
  const parent = parentRouteName.value
  if (parent) {
    return navItems.value.find((i) => i.routeName === parent) ?? navItems.value[0] ?? null
  }
  return navItems.value.find((i) => i.routeName === route.name) ?? navItems.value[0] ?? null
})

function isLnbItemActive(item) {
  return activeSub.value?.routeName === item.routeName
}

const breadcrumbItems = computed(() => {
  const items = [{ to: '/', label: '홈' }]
  if (sectionEntry.value) {
    items.push({ to: sectionEntry.value.to, label: sectionEntry.value.label })
  }
  if (activeSub.value) {
    items.push({ label: activeSub.value.label, current: true })
  }
  return items
})
</script>

<template>
  <div class="sub-page">
    <div class="sub-page__frame">
      <nav class="sub-page__breadcrumb" aria-label="현재 위치">
        <ol class="sub-page__breadcrumb-list">
          <li
            v-for="(crumb, idx) in breadcrumbItems"
            :key="idx"
            class="sub-page__breadcrumb-item"
          >
            <span v-if="crumb.current" class="sub-page__breadcrumb-current" aria-current="page">
              {{ crumb.label }}
            </span>
            <router-link v-else class="sub-page__breadcrumb-link" :to="crumb.to">
              {{ crumb.label }}
            </router-link>
          </li>
        </ol>
      </nav>

      <nav v-if="navItems.length" class="sub-page__lnb" :aria-label="navAriaLabel">
        <ul class="sub-page__lnb-list">
          <li v-for="item in navItems" :key="item.routeName" class="sub-page__lnb-item">
            <router-link
              :to="item.to"
              class="sub-page__lnb-link"
              :class="{ 'is-active': isLnbItemActive(item) }"
              :aria-current="isLnbItemActive(item) ? 'page' : undefined"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div v-if="heading" class="sub-page__intro">
        <SubPageHeading v-bind="heading" />
      </div>
    </div>

    <main class="sub-page__main">
      <slot />
    </main>
  </div>
</template>
