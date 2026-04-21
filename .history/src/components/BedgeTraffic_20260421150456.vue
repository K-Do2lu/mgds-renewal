<script setup>
</script>

<template>
    <div class="badge traffic">
        <span class="badge-text">일반버스</span>
        <span class="bade-traffic-icon"></span>
    </div>
</template>

<style lang="scss" scoped>
.badge{
    border-radius: 1000px;
    &.traffic{
        @include wh(auto, 60px, 95px, auto, 39px, 41px);
        padding: 10px 16px;
        font-weight: 500;
        color: $txt-white;
        background: $point-main;
    }
}
</style>