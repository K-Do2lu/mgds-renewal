// 하단 -40%: 실제 “보이는 루트”를 위로 올려, 뷰포트 중~하단쯤 스크롤됐을 때 교차(등장)하도록
const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: '0px 0px -40% 0px',
  threshold: 0.2,
  once: true,
}

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

/**
 * v-reveal
 * - Adds `reveal` class immediately
 * - Adds `is-revealed` when element enters viewport
 *
 * Usage:
 * - <div v-reveal />
 * - <div v-reveal="{ once: false, rootMargin: '0px 0px -30% 0px' }" />
 */
export default {
  mounted(el, binding) {
    const value = binding?.value && typeof binding.value === 'object' ? binding.value : {}
    const opts = { ...DEFAULT_OPTIONS, ...value }

    el.classList.add('reveal')

    if (prefersReducedMotion()) {
      el.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          if (!opts.once) el.classList.remove('is-revealed')
          continue
        }
        el.classList.add('is-revealed')
        if (opts.once) observer.disconnect()
      }
    }, opts)

    observer.observe(el)
    el.__revealObserver = observer
  },
  unmounted(el) {
    const observer = el.__revealObserver
    if (observer) observer.disconnect()
    delete el.__revealObserver
  },
}

