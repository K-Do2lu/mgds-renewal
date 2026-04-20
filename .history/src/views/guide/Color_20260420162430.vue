<script setup>
import { ref } from 'vue'

const textPalette = ref([
    {color: '#ffffff'},
    {color: '#cccccc'},
    {color: '#BDBDBD'},
    {color: '#888888'},
    {color: '#6B7280'},
    {color: '#1A1A1B'},
    {color: '#1A1A1A'},
])

const grayPalette = ref([
    {color: '#ffffff'},
    {color: '#E5E7EB'},
    {color: '#6B7280'},
])

const basePalette = ref([
    {color: '#E6F0FF'},
    {color: '#286CF7'},
    {color: '#004595'},
    {color: '#00316B'},
    {color: '#6366F1'},
])
</script>

<template>
    <section class="guide">

        <div class="cnt">
            <h2>Text</h2>
            <div class="itm">
                <div class="color">
                    <div class="color-palette">
                        <div class="color-item" v-for="color in textPalette" :key="color.color" :style="{background: color.color}"></div>
                    </div>
                    <p class="color-name">
                        <p v-for="color in textPalette" :key="color.color">{{ color.color }}</p>
                    </p>
                </div>
            </div>
        </div>

        <div class="cnt">
            <h2>Gray</h2>
            <div class="itm">
                <div class="color">
                    <div class="color-palette">
                        <div class="color-item" v-for="color in grayPalette" :key="color.color" :style="{background: color.color}"></div>
                    </div>
                    <p class="color-name">
                        <p v-for="color in grayPalette" :key="color.color">{{ color.color }}</p>
                    </p>
                </div>
            </div>
        </div>

        <div class="cnt">
            <h2>Gray</h2>
            <div class="itm">
                <div class="color">
                    <div class="color-palette">
                        <div class="color-item" v-for="color in basePalette" :key="color.color" :style="{background: color.color}"></div>
                    </div>
                    <p class="color-name">
                        <p v-for="color in basePalette" :key="color.color">{{ color.color }}</p>
                    </p>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.color{
    
    .color-palette{
        @include grid(80px, repeat(auto-fit, minmax(80px, 1fr)),    );
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