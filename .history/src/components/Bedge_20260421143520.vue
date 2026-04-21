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
        padding-inline: 12px;
        @include clamp(padding-block, 4px, 6px);
        @include clamp(font-size, 14px, 16px);
        font-weight: 500;
        co
        background: $point-main;
    }
}
</style>