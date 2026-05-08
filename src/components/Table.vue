<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <table class="board-table">
        <colgroup>
            <col width="80%">
            <col width="10%">
            <col width="10%">
        </colgroup>
        <thead>
            <tr>
                <th scope="col">제목</th>
                <th scope="col">등록일</th>
                <th scope="col">조회수</th>
            </tr>
        </thead>
        <tbody>
           
                <tr v-for="(item, index) in items" :key="index">
                    <td class="title" data-label="제목">
                        <div class="title-stack">
                            <span class="title-stack__txt">
                                <router-link
                                    class="table-link"
                                    :class="{ 'table-link--hot': item.hot }"
                                    :to="item.url"
                                >
                                    {{ item.title }}
                                </router-link>
                            </span>
                            <img
                                v-if="item.file"
                                class="title-stack__file"
                                src="@/assets/img/file.svg"
                                alt=""
                                aria-hidden="true"
                            />
                        </div>
                    </td>
                    <td align="center" class="date" data-label="등록일">{{ item.date }}</td>
                    <td align="center" class="view" data-label="조회수"> {{ item.view }} </td>
                </tr>
          
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
table{
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-top: 1px solid $border-main;
    border-bottom: 1px solid $border-main;
    overflow: hidden;
    border-radius: 0;
    box-shadow: none;
    font-weight: 500;
    color: $txt-main;
    thead{
        background: linear-gradient(180deg, #eff4ff 0%, #f7faff 100%);
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
        @include clamp(font-size, 13px, 15px);
        padding: clamp(14px, 2vw, 18px) clamp(14px, 2vw, 20px);
        font-weight: 700;
        color: #1e293b;
    }
    td{
        @include clamp(padding-block, 20px, 24px);
        padding-inline: 20px;
        img{vertical-align: middle;}
        
        &.title{
            min-width: 0;
            @include clamp(font-size, 15px, 18px);

            .title-stack {
                display: flex;
                align-items: center;
                gap: 6px;
                min-width: 0;
                width: 100%;
            }

            .title-stack__txt {
                min-width: 0;
                flex: 1 1 auto;
                overflow: hidden;
            }

            .title-stack__txt .table-link {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-underline-offset: 3px;
            }

            .title-stack__file {
                flex-shrink: 0;
            }
        }
        &.date, &.view{
            @include clamp(font-size, 14px, 18px);
            font-weight: 500;
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

            &.date,
            &.view{
              &::before{
                content: attr(data-label);
                display: inline-block;
                margin-right: 8px;
                color: $txt-main;
                font-weight: 500;
              }
            }
        }

        td.title{
            padding-bottom: 8px;

            .title-stack__txt .table-link {
                white-space: normal;
                overflow: visible;
                text-overflow: clip;
            }
        }

        td.date{
            text-align: left !important;
            padding-top: 0;
            display: inline-flex;
            align-items: center;
            width: auto;
            padding-inline: 20px 10px;
        }

        td.view{
            display: inline-flex;
            align-items: center;
            width: auto;
            padding-inline: 10px 20px;
        }
    }
}

.table-link:hover {
  text-decoration: underline;
}

.table-link--hot {
  color: $point-main;
  font-weight: 700;
}

.table-link:focus-visible {
  @include focus-ring();
}
</style> 