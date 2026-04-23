<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { primaryNav, megaItemsForSection } from '@/config/sectionNav'

const route = useRoute()
const activeMegaKey = ref(null)
const headerEl = ref(null)
const megaTopPx = ref(72)
const isWideNav = ref(true)

let closeTimer = null
let resizeObserver = null

function syncMegaTop() {
  if (headerEl.value) megaTopPx.value = headerEl.value.offsetHeight
}

function syncViewport() {
  isWideNav.value = window.matchMedia('(min-width: 921px)').matches
  if (!isWideNav.value) activeMegaKey.value = null
}

function openMega(key) {
  if (!isWideNav.value) return
  clearTimeout(closeTimer)
  closeTimer = null
  activeMegaKey.value = key
  requestAnimationFrame(syncMegaTop)
}

function scheduleClose() {
  clearTimeout(closeTimer)
  closeTimer = window.setTimeout(() => {
    activeMegaKey.value = null
    closeTimer = null
  }, 160)
}

function cancelClose() {
  clearTimeout(closeTimer)
  closeTimer = null
}

const megaItems = computed(() =>
  activeMegaKey.value ? megaItemsForSection(activeMegaKey.value) : [],
)

watch(
  () => route.path,
  () => {
    activeMegaKey.value = null
  },
)

onMounted(() => {
  syncMegaTop()
  syncViewport()
  window.addEventListener('resize', syncMegaTop)
  window.addEventListener('resize', syncViewport)
  if (headerEl.value && typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(syncMegaTop)
    resizeObserver.observe(headerEl.value)
  }
})

onBeforeUnmount(() => {
  clearTimeout(closeTimer)
  resizeObserver?.disconnect()
  window.removeEventListener('resize', syncMegaTop)
  window.removeEventListener('resize', syncViewport)
})
</script>

<template>
  <div class="header-app">
    <header ref="headerEl">
      <div class="header-inner">
        <router-link to="/">
          <h1 class="logo">
            <img src="../assets/img/logo.svg" alt="MG데이터시스템 로고" />
          </h1>
        </router-link>
        <button type="button" class="menu-btn">
          <img src="../assets/img/header_menu.svg" alt="메뉴 버튼" />
        </button>
        <nav aria-label="주 메뉴">
          <ul>
            <li
              v-for="item in primaryNav"
              :key="item.to"
              class="nav-top-item"
              @mouseenter="openMega(item.sectionKey)"
              @mouseleave="scheduleClose"
            >
              <router-link
                :to="item.to"
                :class="{ 'is-mega-active': activeMegaKey === item.sectionKey }"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <Transition name="mega-slide">
      <div
        v-if="activeMegaKey && isWideNav"
        class="mega-panel"
        :style="{ top: `${megaTopPx}px` }"
        @mouseenter="cancelClose"
        @mouseleave="scheduleClose"
      >
        <div
          class="mega-panel__inner"
          :class="{
            'mega-panel__inner--count1': megaItems.length === 1,
            'mega-panel__inner--count2': megaItems.length === 2,
          }"
        >
          <router-link
            v-for="(col, i) in megaItems"
            :key="`${col.to}-${i}`"
            :to="col.to"
            class="mega-panel__col"
          >
            <div class="mega-panel__text">
              <strong class="mega-panel__title">{{ col.title }}</strong>
              <p
                v-for="(line, j) in col.lines"
                :key="j"
                class="mega-panel__line"
              >
                {{ line }}
              </p>
            </div>
            <div class="mega-panel__thumb" aria-hidden="true">
              <img :src="col.thumb" alt="" />
            </div>
          </router-link>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/layout/header';
</style>
