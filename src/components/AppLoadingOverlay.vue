<script setup>
import { useAppLoading } from '@/composables/useAppLoading'

const { overlayVisible } = useAppLoading()
</script>

<template>
  <Teleport to="body">
    <Transition name="app-loading-fade">
      <div
        v-show="overlayVisible"
        class="app-loading"
        role="status"
        aria-live="polite"
        aria-label="로딩 중"
        :aria-busy="overlayVisible"
      >
        <div class="app-loading__stage" aria-hidden="true">
          <div class="app-loading__dots">
            <span class="app-loading__dot app-loading__dot--1" />
            <span class="app-loading__dot app-loading__dot--2" />
            <span class="app-loading__dot app-loading__dot--3" />
          </div>
          <div class="app-loading__ground" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.app-loading {
  position: fixed;
  inset: 0;
  z-index: 4000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(15, 23, 42, 0.16);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.app-loading__stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.app-loading__dots {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  height: 36px;
}

.app-loading__dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  transform-origin: center bottom;
  box-shadow:
    0 4px 10px rgba(29, 78, 216, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.75);
  animation: app-loading-boing 0.75s ease-in-out infinite;

  &--1 {
    background: radial-gradient(circle at 30% 22%, #ffffff 0%, #bfdbfe 42%, $point-main 100%);
    animation-delay: 0s;
  }

  &--2 {
    width: 15px;
    height: 15px;
    background: radial-gradient(circle at 30% 22%, #ffffff 0%, #c7d2fe 38%, $blue-400 100%);
    animation-delay: 0.1s;
  }

  &--3 {
    background: radial-gradient(circle at 30% 22%, #ffffff 0%, #a5b4fc 40%, #4f46e5 95%);
    animation-delay: 0.2s;
  }
}

.app-loading__ground {
  width: 56px;
  height: 8px;
  margin-top: 2px;
  border-radius: 50%;
  background: radial-gradient(ellipse 100% 100% at 50% 50%, rgba(29, 78, 216, 0.14) 0%, transparent 72%);
  opacity: 0.85;
}

@keyframes app-loading-boing {
  0%,
  100% {
    transform: translateY(0) scale(1, 1);
  }
  18% {
    transform: translateY(0) scale(1.14, 0.82);
  }
  48% {
    transform: translateY(-18px) scale(0.94, 1.08);
  }
  62% {
    transform: translateY(0) scale(1.1, 0.88);
  }
  76% {
    transform: translateY(-6px) scale(1, 1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .app-loading__dot {
    animation: app-loading-soft 1.25s ease-in-out infinite;
  }

  .app-loading__dot--1 {
    animation-delay: 0s;
  }
  .app-loading__dot--2 {
    animation-delay: 0.15s;
  }
  .app-loading__dot--3 {
    animation-delay: 0.3s;
  }

  @keyframes app-loading-soft {
    0%,
    100% {
      opacity: 0.45;
      transform: translateY(0) scale(1);
    }
    50% {
      opacity: 1;
      transform: translateY(0) scale(1.06);
    }
  }
}

.app-loading-fade-enter-active,
.app-loading-fade-leave-active {
  transition: opacity 0.22s ease;
}

.app-loading-fade-enter-from,
.app-loading-fade-leave-to {
  opacity: 0;
}
</style>
