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
    &.list{
        @include wh(auto, 54px, 58px, auto, 25px, 31px);
        padding-inline: 12px;
        @include clamp(padding-block, 4px, 6px);
        @include clamp(font-size, 14px, 16px);
        font-weight: 500;
        color: $txt-white;
        background: $point-main;
    }
}
</style>