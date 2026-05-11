import { computed, readonly, ref } from 'vue'

const routeOverlay = ref(false)
const manualLocks = ref(0)

let routeGen = 0
let routeShowTimer = null
const ROUTE_SHOW_DELAY_MS = 160

function clearRouteShowTimer() {
  if (routeShowTimer != null) {
    clearTimeout(routeShowTimer)
    routeShowTimer = null
  }
}

/** 라우트 비동기 청크 로딩 등 — 짧은 전환에서는 깜빡이지 않도록 지연 후 표시 */
export function notifyRouteLoadingStart() {
  const gen = ++routeGen
  clearRouteShowTimer()
  routeShowTimer = window.setTimeout(() => {
    if (gen === routeGen) routeOverlay.value = true
  }, ROUTE_SHOW_DELAY_MS)
}

export function notifyRouteLoadingEnd() {
  routeGen++
  clearRouteShowTimer()
  routeOverlay.value = false
}

/** API 등 수동 로딩 — begin/end 짝 맞추기 */
export function beginManualLoading() {
  manualLocks.value += 1
}

export function endManualLoading() {
  manualLocks.value = Math.max(0, manualLocks.value - 1)
}

const overlayVisible = computed(() => routeOverlay.value || manualLocks.value > 0)

export function useAppLoading() {
  return {
    overlayVisible: readonly(overlayVisible),
    notifyRouteLoadingStart,
    notifyRouteLoadingEnd,
    beginManualLoading,
    endManualLoading,
  }
}
