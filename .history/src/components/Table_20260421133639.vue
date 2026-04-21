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
                <td>2026-04-21</td>
                <td>100</td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
table{
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    font-size: 18px;
    color: $txt-main;
    thead{
        background-color: #f0f0f0;
    }
    tbody{
        background-color: $gray-000;
    }
    td{
        padding: 10px;
    }
}
</style> 