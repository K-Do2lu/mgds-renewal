<script setup>
</script>

<template>
    <section class="guide">
        <div class="cnt">
            <h2>Text</h2>

            <div class="itm">

                <div class="color">
                    <div class="color-palette"></div>
                    <p class="color-name">asd</p>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.color{
    @include flex(row, null, center, 12px);
    .color-palette{
    }
    .color-name{
        font-size: 14px;
        color: $gray-600;
    }
}
</style>