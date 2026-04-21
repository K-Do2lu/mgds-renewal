<script setup>
import { ref } from 'vue';

const trafficBedge = ref([
    {title: '일반버스', number: '601, 605, 654, 661, N26(심야)', bg: '#EEFFE8', border: '#53B332', text: '#53B332' },

    {title: '좌석버스', number: '60, 60-3, 88', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },

    {title: '직행', number: '8000', bg: '#FFF1F0', border: '#E61911', text: '#E61911' },

    {title: '공항', number: '6003, 6008', bg: '#F0F9FF', border: '#0068B7', text: '#0068B7' },

    {title: '5호선선', number: '마곡역 7번 출구', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },
])
</script>

<template>
    <div class="bedge traffic">
        <span class="traffic-title">일반버스</span>
        <span class="traffic-number">604</span>
    </div>
</template>

<style lang="scss" scoped>
.bedge{
    @include flex(row, null, center, 8px);
    flex-wrap: nowrap;
    border: 1px solid transparent;
    &.traffic{
        .traffic-title{
            display: inline-block;
            @include wh(auto, 60px, 95px, auto, 39px, 41px);
            padding: 10px 16px;
            font-weight: 500;
            color: $txt-white;
            vertical-align: middle;
            border-radius: 1000px;
            background: $point-main;
            line-height: 1.2;
        }
        .traffic-number{
            font-size: 18px;
            font-weight: 600;
        }
    }
}
</style>
