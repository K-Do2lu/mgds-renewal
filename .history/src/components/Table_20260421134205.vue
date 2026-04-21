<script setup>
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>제목</th>
                <th>등록일</th>
                <th>조회수</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>제목</td>
                <td>100</td>
                <td>2026-04-21</td>
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
    color: $txt-main;
    thead{
        background-color: #f0f0f0;
    }
    tbody{
        background-color: $gray-000;
    }
    th{
        padding: 24px 20px;
    }
    td{
        padding: 24px 20px;
    }
}
</style> 