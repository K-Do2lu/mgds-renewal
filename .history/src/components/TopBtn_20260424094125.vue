<script setup>
import { ref } from 'vue';

const topBtn = () => {

}

</script>

<template>
  <button type="button" class="top-btn" aria-label="맨 위로" @click="topBtn">
    <img class="top-btn__ico" src="@/assets/img/arrow_right.svg" alt="" aria-hidden="true" />
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/scss/abstract" as *;

.top-btn {
  position: fixed;
  bottom: $top-btn-offset;
  right: $top-btn-offset;
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