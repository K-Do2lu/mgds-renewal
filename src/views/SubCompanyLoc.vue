<script setup>
import { onMounted, ref } from 'vue'
import BedgeTraffic from '@/components/BedgeTraffic.vue'
import {
  OFFICE_ADDRESS,
  OFFICE_MAP_FALLBACK,
  buildGoogleMapsEmbedUrl,
  geocodeOfficeAddress,
} from '@/utils/officeMap.js'

const mapEmbedSrc = ref('')
const mapLoading = ref(true)

const busTrafficItems = [
  { title: '일반버스', number: '601, 605, 654, 661, N26(심야)', bg: '#EEFFE8', border: '#53B332', text: '#53B332' },
  { title: '좌석버스', number: '60, 60-3, 88', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },
  { title: '직행', number: '8000', bg: '#FFF1F0', border: '#E61911', text: '#E61911' },
  { title: '공항', number: '6003, 6008', bg: '#F0F9FF', border: '#0068B7', text: '#0068B7' },
]

const subwayTrafficItems = [
  { title: '5호선', number: '마곡역 7번 출구', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },
]

onMounted(async () => {
  try {
    const { lat, lon } = await geocodeOfficeAddress(OFFICE_ADDRESS)
    mapEmbedSrc.value = buildGoogleMapsEmbedUrl(lat, lon)
  } catch {
    mapEmbedSrc.value = buildGoogleMapsEmbedUrl(
      OFFICE_MAP_FALLBACK.lat,
      OFFICE_MAP_FALLBACK.lon
    )
  } finally {
    mapLoading.value = false
  }
})
</script>

<template>
  <div class="sub-company-loc">
    <section class="sub-company-loc__block" aria-labelledby="sub-company-loc-title">
      <div class="sub-company-loc__intro">
        <div class="sec-title">
          <span class="sec-title__sub">Directions</span>
          <h2 id="sub-company-loc-title" class="sec-title__title">오시는 길</h2>
        </div>
      </div>

      <table class="sub-company-loc__table">
        <tbody>
          <tr>
            <th scope="row">주소</th>
            <td>{{ OFFICE_ADDRESS }}</td>
          </tr>
          <tr>
            <th scope="row">전화</th>
            <td>02-2699-2993</td>
          </tr>
          <tr>
            <th scope="row">버스 이용 시</th>
            <td>
              <BedgeTraffic :items="busTrafficItems" />
            </td>
          </tr>
          <tr>
            <th scope="row">지하철 이용 시</th>
            <td>
              <BedgeTraffic :items="subwayTrafficItems" />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="sub-company-loc__map" :aria-busy="mapLoading">
        <div v-if="mapLoading" class="sub-company-loc__map-skeleton" aria-hidden="true" />
        <iframe
          v-show="!mapLoading && mapEmbedSrc"
          :src="mapEmbedSrc"
          class="sub-company-loc__map-frame"
          title="회사 위치 지도"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-company-loc';
</style>
