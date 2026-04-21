<script setup>
</script>

<template>
    <div class="bedge traffic">
        <span class="bedge-text">일반버스</span>
        <span class="bade-traffic">604</span>
    </div>
</template>

<style lang="scss" scoped>
.bedge{
    @include flex(row, null, center, 8px);
    flex-wrap: ;
    &.traffic{
        .bedge-text{
            display: inline-block;
            @include wh(auto, 60px, 95px, auto, 39px, 41px);
            padding: 10px 16px;
            font-weight: 500;
            color: $txt-white;
            vertical-align: middle;
            border-radius: 1000px;
            background: $point-main;
        }
        .bedge-traffic{}
    }
}
</style>