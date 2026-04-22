<script setup>
import { ref } from 'vue';
import BedgeList from '@/components/BedgeList.vue'

const tableData = ref([
    {title: '제목', date: '2026-04-21', view: 100, file: false, hot: true},
    {title: '테스트제목입니다.', date: '2026-04-21', view: 100, file: true, hot: false},
    {title: '제목', date: '2026-04-21', view: 100, file: false, hot: true},
    {title: '제목', date: '2026-04-21', view: 100, file: true, hot: false},
    {title: '제목', date: '2026-04-21', view: 100, file: false, hot: true},
])
</script>

<template>
    <table>
        <colgroup>
            <col width="80%">
            <col width="10%">
            <col width="10%">
        </colgroup>
        <thead>
            <tr>
                <th>제목</th>
                <th>등록일</th>
                <th>조회수</th>
            </tr>
        </thead>
        <tbody>
           
                <tr v-for="item in tableData" :key="item.title">
                    <td class="title">
                        <BedgeList v-if="item.hot"/>
                        {{ item.title }}
                        <img src="@/assets/img/file.svg" alt="file" v-if="item.file"/>
                    </td>
                    <td align="center" class="date"> {{ item.date }} </td>
                    <td align="center" class="view"> {{ item.view }} </td>
                </tr>
          
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
table{
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid $gray-700;
    border-bottom: 1px solid $gray-700;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    font-size: 18px;
    font-weight: 500;
    color: $txt-main;
    thead{
        background-color: $bg-main;
    }
    tbody{
        background-color: $gray-000;
    }
    th{
        padding: 24px 20px;
    }
    td{
        padding: 24px 20px;
        border-top: 1px solid $border-main;
        &.date, &.view{font-weight: 400; color: $txt-sub;}
        img{vertical-align: middle;}

        &.title{
            @include flex(row, null, center, 12px);
        }
    }
}
</style> 