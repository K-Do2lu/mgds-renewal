<script setup>
</script>

<template>
    <div class="badge traffic">
        <span class="badge-text">HOT</span>
    </div>
</template>

<style lang="scss" scoped>
.badge{
    border-radius: 1000px;
    &.traffic{
        @include wh(auto, 60px, 58px, auto, 25px, 31px);
        padding: 10px 16px;
        font-weight: 500;
        color: $txt-white;
        background: $point-main;
    }
}
</style>