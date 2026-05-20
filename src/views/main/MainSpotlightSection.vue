<script setup>

import { computed, onMounted, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import BaseSlider from '@/components/BaseSlider.vue'
import { isSupabaseConfigured } from '@/lib/supabase'
import { fetchSpotlightPosts } from '@/services/noticePostService'
import { pickRandomSpotlightPosts } from '@/utils/noticePosts'

const router = useRouter()



const SPOTLIGHT_COUNT = 6



const items = ref([])

const sliderRef = ref(null)

const activeIndex = ref(0)



onMounted(async () => {
  if (isSupabaseConfigured()) {
    try {
      items.value = await fetchSpotlightPosts(SPOTLIGHT_COUNT)
      return
    } catch {
      /* 샘플로 폴백 */
    }
  }
  items.value = pickRandomSpotlightPosts(SPOTLIGHT_COUNT)
})



const featured = computed(() => items.value[activeIndex.value] ?? items.value[0] ?? null)



watchEffect(() => {
  const slider = sliderRef.value
  if (!slider) return
  const idx = slider.index
  activeIndex.value = typeof idx === 'number' ? idx : idx.value ?? 0
})

function openPost(e, item) {
  if (!item?.to) return
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return
  if (sliderRef.value?.shouldSuppressNavClick?.()) {
    e.preventDefault()
    return
  }
  e.preventDefault()
  router.push(item.to)
}
</script>



<template>

  <section

    class="page-section page-section--surface-default main-spotlight"

    aria-labelledby="main-spotlight-title"

  >

    <div class="page-section__inner main-spotlight__layout" v-reveal>

      <div class="main-spotlight__head">

        <p class="main-spotlight__eyebrow">NEWSROOM</p>

        <h2 id="main-spotlight-title" class="page-section__title">

          <span class="title-line title-line--nowrap">MG데이터시스템의</span>

          <span class="title-line">최신 소식</span>

        </h2>

        <RouterLink class="main-spotlight__more" to="/notice/board">전체 보기</RouterLink>

      </div>



      
      <div v-if="items.length" class="main-spotlight__content">

        <a
          v-if="featured"
          :href="featured.to"
          class="main-spotlight__featured"
          @click="openPost($event, featured)"
        >

          <p class="main-spotlight__featured-kicker">{{ featured.boardLabel }}</p>

          <h3 class="main-spotlight__featured-title">{{ featured.title }}</h3>

          <p class="main-spotlight__featured-desc">{{ featured.content }}</p>

          <p class="main-spotlight__featured-date">{{ featured.dateLabel }}</p>

        </a>

        <BaseSlider

          ref="sliderRef"

          class="main-spotlight__slider"

          aria-label="메인 소식 슬라이더"

          :item-count="items.length"

          item-selector=".main-spotlight_card"

          :autoplay="true"

          :autoplay-interval="5000"

        >

          <a
            v-for="item in items"
            :key="item.id"
            :href="item.to"
            class="main-spotlight_card"
            data-slider-item
            @click="openPost($event, item)"
          >

            <p
              class="main-spotlight_card-type"
              :class="`main-spotlight_card-type--${item.boardKey}`"
            >
              {{ item.boardLabel }}
            </p>

            <p class="main-spotlight_card-title">{{ item.title }}</p>

            <p class="main-spotlight_card-date">{{ item.dateLabel }}</p>

          </a>

        </BaseSlider>

      </div>

    </div>

  </section>

</template>

<style lang="scss" scoped>

@use '@/assets/scss/abstract' as *;



.page-section__inner {

  display: flex;

  align-items: flex-start;

  @include clamp(gap, 48px, 72px);

}



.main-spotlight__layout {

  display: grid;

  /* 다른 메인 섹션과 동일한 비율감(좌:우 ≈ 40:60) */

  grid-template-columns: minmax(240px, 0.4fr) minmax(0, 1fr);

  align-items: start;

  gap: clamp(28px, 4.5vw, 56px);

}



.main-spotlight__eyebrow {

  margin: 0;

  font-size: 12px;

  letter-spacing: 0.12em;

  font-weight: 700;

  color: $point-main;

}



.main-spotlight__content {

  display: grid;

  gap: 14px;

}



.main-spotlight__featured {

  display: block;

  border-radius: 18px;

  padding: clamp(20px, 3vw, 30px);

  color: #fff;

  text-decoration: none;

  background:

    linear-gradient(120deg, rgba(8, 20, 44, 0.78) 0%, rgba(8, 20, 44, 0.36) 80%),

    url('@/assets/img/sub_banner.svg') no-repeat center / cover;

  box-shadow: 0 16px 30px rgba(8, 20, 44, 0.2);



  &:focus-visible {

    @include focus-ring();

  }



  &:hover .main-spotlight__featured-title {

    text-decoration: underline;

    text-underline-offset: 4px;

  }

}



.main-spotlight__featured-kicker {

  margin: 0;

  font-size: 12px;

  letter-spacing: 0.12em;

  font-weight: 700;

  opacity: 0.9;

}



.main-spotlight__featured-title {

  margin: 10px 0 0;

  @include clamp(font-size, 24px, 34px);

  line-height: 1.16;

}



.main-spotlight__featured-desc {

  margin: 12px 0 0;

  @include clamp(font-size, 14px, 17px);

  line-height: 1.6;

  color: rgba(255, 255, 255, 0.88);

  display: -webkit-box;

  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;

  overflow: hidden;

}



.main-spotlight__featured-date {

  margin: 12px 0 0;

  font-size: 13px;

  color: rgba(255, 255, 255, 0.82);

}



.main-spotlight__slider {

  width: 100%;

  min-height: 0;

  overflow: hidden;

}



.main-spotlight__slider :deep(.base-slider__track) {

  @include clamp(gap, 10px, 14px);

}



.main-spotlight_card {

  flex: 0 0 auto;

  width: min(clamp(264px, 34vw, 340px), 100%);

  @include flex(column, null, null, null);

  @include clamp(gap, 10px, 14px);

  @include clamp(padding, 16px, 20px);

  border-radius: 12px;

  border: 1px solid rgba(36, 95, 232, 0.12);

  background: #fff;

  text-align: left;

  text-decoration: none;

  color: inherit;

  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);



  &:focus-visible {

    @include focus-ring();

  }



  &:hover .main-spotlight_card-title {

    color: $point-main;

  }

}



.main-spotlight_card-type {

  margin: 0;

  display: inline-flex;

  width: fit-content;

  padding: clamp(3px, 0.6vw, 4px) clamp(8px, 1.2vw, 10px);

  border-radius: 999px;

  /* 공지사항 — header_item_05 / 기존 포인트 블루 */

  background: rgba(36, 95, 232, 0.1);

  color: $point-main;

  @include clamp(font-size, 12px, 14px);

  font-weight: 600;

}



/* 입찰공고 — header_item_06 (#FFD8C5 → #FFB434) */

.main-spotlight_card-type--tender {

  background: rgba(255, 232, 192, 0.9);

  color: #c67606;

}



/* 자료실 — header_item_10 (#DCDDFF → #FFD3F1) */

.main-spotlight_card-type--archive {

  background: rgba(255, 211, 241, 0.5);

  color: #c2185b;

}



.main-spotlight_card-title {

  margin: 0;

  font-weight: 600;

  color: $txt-main;

  @include clamp(font-size, 15px, 19px);

  line-height: 1.45;

}



@include bp(tab) {

  .main-spotlight__slider :deep(.base-slider__track) {

    gap: 0;

  }



  // 태블릿에서도 한 장씩 보여서 넘침 방지

  .main-spotlight_card {

    width: 100%;

    max-width: 100%;

  }

}



@include bp(mo) {

  .main-spotlight__slider :deep(.base-slider__track) {

    gap: 0;

  }



  // 모바일에서는 한 장이 뷰포트에 딱 맞게 (잘림/넘침 방지)

  .main-spotlight_card {

    width: 100%;

    max-width: 100%;

  }



  .main-spotlight_card-type {

    font-size: 12px;

  }



  .main-spotlight_card-title {

    font-size: 15px;

  }

}



.main-spotlight_card-date {

  margin: 6px 0 0;

  color: $txt-sub;

  @include clamp(font-size, 12px, 14px);

}



.main-spotlight__head {

  display: flex;

  flex-direction: column;

  gap: 12px;

  position: sticky;

  top: 110px;

}



.main-spotlight__more {

  align-self: flex-start;

  display: inline-flex;

  min-height: clamp(36px, 5vw, 40px);

  align-items: center;

  padding: 0 clamp(12px, 1.8vw, 15px);

  border-radius: 999px;

  border: 1px solid rgba(36, 95, 232, 0.28);

  color: $point-main;

  font-weight: 600;

  font-size: clamp(13px, 1vw, 15px);

  text-decoration: none;



  &:focus-visible {

    @include focus-ring();

  }



  &:hover {

    background: rgba(36, 95, 232, 0.08);

  }

}



@media (prefers-reduced-motion: reduce) {

  .main-spotlight__slider :deep(*) {

    transition: none !important;

    animation: none !important;

  }

}



@include bp(tab) {

  .main-spotlight__layout {

    grid-template-columns: 1fr;

  }



  .main-spotlight__head {

    position: static;

  }

}



</style>

