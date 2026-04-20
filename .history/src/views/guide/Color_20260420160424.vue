<script setup>
</script>

<template>
    <section class="guide">
        <div class="cnt">
            <h2>Text</h2>

            <div class="itm">

                <div class="color">
                    <div class="color-palette">
                        <div class="color-item"></div>
                    </div>
                    <p class="color-name">asd</p>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.color{
    
    .color-palette{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 12px;
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