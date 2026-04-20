<script setup>
import { ref } from 'vue'
const color = ref([
    {
        item: {
            title: 'Text',
            colors: [
                {color: '#ffffff'},
                {color: '#cccccc'},
                {color: '#BDBDBD'},
                {color: '#888888'},
                {color: '#6B7280'},
                {color: '#1A1A1B'},
                {color: '#1A1A1A'},
            ]
        },
    },
    {
        item: {
            title: 'Gray',
            colors: [
                {color: '#ffffff'},
                {color: '#E5E7EB'},
                {color: '#6B7280'},
            ]
        },
    },
    {
        item: {
            title: 'Base',
            colors: [
                {color: '#E6F0FF'},
                {color: '#286CF7'},
                {color: '#004595'},
                {color: '#00316B'},
                {color: '#6366F1'},
            ]
        },
    },
    {
        item: {
            title: 'Status',
            colors: [
                {color: '#909399'},
                {color: '#F56C6C'},
                {color: '#E6A23C'},
                {color: '#67C23A'},
            ]
        },
    },
])
</script>

<template>
    <section class="guide">

        <div class="cnt" v-for="color in color" :key="color.item.title">
            <h2>{{ color.item.title }}</h2>
            <div class="itm">
                <div class="color">
                    <div class="color-palette">
                        <div class="color-item" v-for="color in color.item.colors" :key="color.color" :style="{background: color.color}"></div>
                    </div>
                    <p class="color-name">
                        <p v-for="color in color.item.colors" :key="color.color">{{ color.color }}</p>
                    </p>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.color{
    
    .color-palette{
        @include grid(80px, repeat(auto-fit, minmax(80px, 1fr)), null);
        .color-item{background: red;}
    }
    .color-name{
        @include grid(auto, repeat(auto-fit, minmax(80px, 1fr)), null);
        color: $gray-600;
    }
}
</style>