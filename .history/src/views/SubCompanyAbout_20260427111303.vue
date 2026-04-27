<script setup>
</script>

<template>
    <div class="sec-title">
        <em class="sec-title__sub">About</em>
        <h2 class="sec-title__title">MG데이터시스템</h2>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.sec-title{
  @include flex(column, center, null, 4px);
  &__sub{
    @include clamp(font-size, 16px, 20px);
    color: $point-main;
  }
}
</style>