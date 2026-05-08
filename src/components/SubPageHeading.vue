<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  sub: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
})

const hasLead = computed(() => Boolean(props.lead))
</script>

<template>
  <div class="sub-page-heading">
    <div class="sec-title">
      <span class="sec-title__sub">{{ sub }}</span>
      <h2 :id="id" class="sec-title__title">{{ title }}</h2>
    </div>

    <p v-if="hasLead" class="sub-page-heading__lead">
      {{ lead }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.sub-page-heading {
  padding-bottom: clamp(8px, 1.2vw, 12px);
}

.sub-page-heading__lead {
  margin: 12px 0 0;
  color: $txt-sub;
  line-height: 1.7;
  @include clamp(font-size, 15px, 18px);
}
</style>

