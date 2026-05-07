<script setup>
</script>

<template>
    <div class="badge list">
        <span class="badge-text">HOT</span>
    </div>
</template>

<style lang="scss" scoped>
.badge{
    border-radius: 1000px;
    &.list{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        @include wh(auto, 44px, 48px, auto, 20px, 24px);
        padding-inline: 8px;
        @include clamp(padding-block, 3px, 5px);
        @include clamp(font-size, 12px, 14px);
        font-weight: 500;
        color: $txt-white;
        background: $point-main;
        line-height: 1;
    }
}
</style>