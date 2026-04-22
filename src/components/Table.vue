<script setup>
import BedgeList from '@/components/BedgeList.vue'

defineProps({
    items: {
        type: Array,
        required: true,
    },
})
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
           
                <tr v-for="(item, index) in items" :key="index">
                    <td class="title">
                        <BedgeList v-if="item.hot"/>
                        <router-link :to="item.url">{{ item.title }}</router-link>
                        <img src="@/assets/img/file.svg" alt="file" v-if="item.file"/>
                    </td>
                    <td align="center" class="date">{{ item.date }}</td>
                    <td align="center" class="view"> {{ item.view }} </td>
                </tr>
          
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
table{
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-top: 1px solid $gray-700;
    border-bottom: 1px solid $gray-700;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    font-weight: 500;
    color: $txt-main;
    thead{
        background-color: $bg-main;
    }
    tbody{
        background-color: $gray-000;
    }
    tr{
        &:not(thead tr){
            border-top: 1px solid $border-main;
        }
    }
    th{
        padding: 24px 20px;
    }
    td{
        @include clamp(padding-block, 20px, 24px);
        padding-inline: 20px;
        img{vertical-align: middle;}
        
        &.title{
            min-width: 0;
            @include flex(row, null, center, 12px);
            @include clamp(font-size, 16px, 18px);
            flex-wrap: nowrap;

            > :not(a){
                flex-shrink: 0;
            }
            a{
                min-width: 0;
                flex: 1 1 auto;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        &.date, &.view{
            @include clamp(font-size, 14px, 18px);
            font-weight: 400;
            color: $txt-sub;
            white-space: nowrap;
        }
    }

    @include bp(mo){
        colgroup{ display: none; }

        thead{
            display: none;
        }

        tbody tr{
            display: block;
            padding-block: 20px;

            &:first-child{
                border-top: none;
            }
        }

        tbody td{
            display: block;
            width: 100%;
            padding-block: 0;
            padding-inline: 20px;
            border: none;
        }

        td.title{
            padding-bottom: 8px;

            a{
                white-space: normal;
                overflow: visible;
                text-overflow: clip;
            }
        }

        td.date{
            text-align: left !important;
            padding-top: 0;
        }

        td.view{
            display: none;
        }
    }
}
</style> 