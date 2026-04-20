<script setup>
import { ref } from 'vue'

const colorPalette = ref([
    {color: '#ffffff'},
    {color: '#ccc'}
])
</script>

<template>
    <section class="guide">
        <div class="cnt">
            <h2>Text</h2>

            <div class="itm">

                <div class="color">
                    <div class="color-palette">
                        <div class="color-item" v-for="color in colorPalette" :key="color.color" :style="{background: color.color}"></div>
                    </div>
                    <p class="color-name">
                        <p v-for="color in colorPalette" :key="color.color">{{ color.color }}</p>
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.color{
    
    .color-palette{
        display: grid;
        grid-template: 80px / repeat(auto-fit, minmax(80px, 1fr));
        .color-item{background: red;}
    }
    .color-name{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 12px;
        color: $gray-600;
    }
}
</style>