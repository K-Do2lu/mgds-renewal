<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { primaryNav, megaItemsForSection } from '@/config/sectionNav'
import { EXTERNAL_URLS } from '@/config/site'
import {
  HEADER_MEGA_CLOSE_DELAY_MS,
  HEADER_MEGA_FALLBACK_TOP_PX,
  NAV_WIDE_MIN_WIDTH_PX,
} from '@/config/layoutConstants'
import linkSvg from '@/assets/img/link.svg'
import menuBtnMoSvg from '@/assets/img/menu_btn_mo.svg'
import headerMenuSvg from '@/assets/img/header_menu.svg'
import menuArrowMoSvg from '@/assets/img/menu_arrow_mo.svg'
import menuArrowActiveSvg from '@/assets/img/menu_arrow_active.svg'
import dshopLogoSvg from '@/assets/img/logo_dshop.svg'

const route = useRoute()
const activeMegaKey = ref(null)
const headerEl = ref(null)
const megaTopPx = ref(HEADER_MEGA_FALLBACK_TOP_PX)
const isWideNav = ref(true)
const mobileMenuOpen = ref(false)
const mobileOpenSection = ref(null)

let closeTimer = null
let resizeObserver = null

function syncMegaTop() {
  if (headerEl.value) megaTopPx.value = headerEl.value.offsetHeight
}

function syncViewport() {
  isWideNav.value = window.matchMedia(`(min-width: ${NAV_WIDE_MIN_WIDTH_PX}px)`).matches
  if (!isWideNav.value) {
    activeMegaKey.value = null
  } else {
    mobileMenuOpen.value = false
    mobileOpenSection.value = null
  }
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
  }, HEADER_MEGA_CLOSE_DELAY_MS)
}

function cancelClose() {
  clearTimeout(closeTimer)
  closeTimer = null
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // 모바일 메뉴를 닫고/열 때, 펼침 상태 리셋
  mobileOpenSection.value = null
}

function toggleMobileSection(key) {
  mobileOpenSection.value = mobileOpenSection.value === key ? null : key
}

const megaItems = computed(() =>
  activeMegaKey.value ? megaItemsForSection(activeMegaKey.value) : [],
)

watch(
  () => route.path,
  () => {
    activeMegaKey.value = null
    mobileMenuOpen.value = false
    mobileOpenSection.value = null
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
        <div class="header-main">
          <router-link to="/" class="header-main__logo-link">
            <h1 class="logo" aria-label="MG데이터시스템 홈">
              <img src="../assets/img/logo.svg" alt="MG데이터시스템 로고" />
            </h1>
          </router-link>
          <button
            type="button"
            class="menu-btn"
            :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
            aria-controls="mobile-global-nav"
            :aria-label="mobileMenuOpen ? '모바일 메뉴 닫기' : '모바일 메뉴 열기'"
            :class="{ 'is-open': mobileMenuOpen }"
            @click="toggleMobileMenu"
          >
            <span class="menu-btn__icons" aria-hidden="true">
              <img class="menu-btn__ico menu-btn__ico--closed" :src="headerMenuSvg" alt="" />
              <img class="menu-btn__ico menu-btn__ico--open" :src="menuBtnMoSvg" alt="" />
            </span>
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
                  @focus="openMega(item.sectionKey)"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <Transition name="mobile-nav">
      <div
        v-if="mobileMenuOpen && !isWideNav"
        id="mobile-global-nav"
        class="mobile-nav"
      >
        <nav class="mobile-nav__panel" aria-label="모바일 주 메뉴">
          <ul class="mobile-nav__list">
            <li v-for="item in primaryNav" :key="`mobile-${item.to}`" class="mobile-nav__item">
              <div class="mobile-nav__head">
                <span
                  class="mobile-nav__top-link"
                  :class="{ 'is-open': mobileOpenSection === item.sectionKey }"
                >{{ item.label }}</span>
                <button
                  type="button"
                  class="mobile-nav__toggle"
                  :aria-expanded="mobileOpenSection === item.sectionKey ? 'true' : 'false'"
                  :aria-controls="`mobile-section-${item.sectionKey}`"
                  :aria-label="mobileOpenSection === item.sectionKey ? '하위 메뉴 닫기' : '하위 메뉴 열기'"
                  @click="toggleMobileSection(item.sectionKey)"
                >
                  <img
                    class="mobile-nav__toggle-ico"
                    :class="{ 'is-open': mobileOpenSection === item.sectionKey }"
                    :src="mobileOpenSection === item.sectionKey ? menuArrowActiveSvg : menuArrowMoSvg"
                    alt=""
                  />
                </button>
              </div>
              <ul
                v-if="mobileOpenSection === item.sectionKey"
                :id="`mobile-section-${item.sectionKey}`"
                class="mobile-nav__sub-list"
              >
                <li
                  v-for="(sub, idx) in megaItemsForSection(item.sectionKey)"
                  :key="`${sub.externalUrl || sub.to}-${idx}`"
                >
                  <a
                    v-if="sub.externalUrl"
                    :href="sub.externalUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mobile-nav__sub-link"
                  >{{ Array.isArray(sub.title) ? sub.title.join(' ') : sub.title }}</a>
                  <router-link
                    v-else
                    :to="sub.to"
                    class="mobile-nav__sub-link"
                  >{{ Array.isArray(sub.title) ? sub.title.join(' ') : sub.title }}</router-link>
                </li>
              </ul>
            </li>
          </ul>

          <a
            class="mobile-nav__dshop"
            :href="EXTERNAL_URLS.mgdshop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MGDshop 새 창 열기"
          >
            <img class="mobile-nav__dshop-logo" :src="dshopLogoSvg" alt="MGDshop" />
            <img class="mobile-nav__dshop-link-ico" :src="linkSvg" alt="" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </Transition>

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
          <template v-for="(col, i) in megaItems" :key="`${col.externalUrl || col.to}-${i}`">
            <a
              v-if="col.externalUrl"
              :href="col.externalUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mega-panel__col"
            >
              <div class="mega-panel__text">
                <strong class="mega-panel__title mega-panel__title--external">
                  <span class="mega-panel__title-main">
                    <template v-if="Array.isArray(col.title)">
                      <span
                        v-for="(titleLine, ti) in col.title"
                        :key="ti"
                        class="mega-panel__title-line"
                      >{{ titleLine }}</span>
                    </template>
                    <template v-else>{{ col.title }}</template>
                  </span>
                  <img
                    class="mega-panel__title-link-ico"
                    :src="linkSvg"
                    alt=""
                  />
                </strong>
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
            </a>
            <router-link
              v-else
              :to="col.to"
              class="mega-panel__col"
            >
              <div class="mega-panel__text">
                <strong class="mega-panel__title">
                  <span class="mega-panel__title-main">
                    <template v-if="Array.isArray(col.title)">
                      <span
                        v-for="(titleLine, ti) in col.title"
                        :key="ti"
                        class="mega-panel__title-line"
                      >{{ titleLine }}</span>
                    </template>
                    <template v-else>{{ col.title }}</template>
                  </span>

                </strong>
                <p
                  v-for="(line, j) in col.d          "
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
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/layout/header';
</style>
