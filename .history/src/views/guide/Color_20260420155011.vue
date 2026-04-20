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

<style scoped>
.color{
    @include flex(row, null, center, 12px);
    .color-palette{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: red;
    }
    .color-name{
        font-size: 14px;
        font-weight: 600;
        color: $gray-700;
    }
}
</style>