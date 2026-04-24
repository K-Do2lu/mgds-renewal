<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(false)

function syncVisible() {
  visible.value = window.scrollY > 0
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  syncVisible()
  window.addEventListener('scroll', syncVisible, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', syncVisible)
})
</script>

<template>
  <Transition name="top-btn-slide">
    <div v-show="visible" class="top-btn-wrap">
      <button type="button" class="top-btn" aria-label="맨 위로" @click="scrollToTop">
        <img
          class="top-btn__ico"
          src="@/assets/img/arrow_right.svg"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@use "@/assets/scss/abstract" as *;

.top-btn-wrap {
  position: fixed;
  bottom: $top-btn-offset;
  right: $top-btn-offset;
  z-index: 900;
}

.top-btn-slide-enter-active,
.top-btn-slide-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
}

.top-btn-slide-enter-from,
.top-btn-slide-leave-to {
  opacity: 0;
  transform: translateY(calc(#{$top-btn-size} * 0.35 + 12px));
}

.top-btn-slide-enter-to,
.top-btn-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.top-btn {
  width: $top-btn-size;
  height: $top-btn-size;
  border-radius: $top-btn-radius;
  background-color: $top-btn-bg;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  &:hover{
    background-color: $point-main;
    transform: translateY(-5px);
  }
}

.top-btn__ico {
  width: $top-btn-icon-size;
  height: $top-btn-icon-size;
  // svg(검정) → 흰색으로 반전
  filter: brightness(0) invert(1);
  transform: rotate(-90deg);
}
</style>