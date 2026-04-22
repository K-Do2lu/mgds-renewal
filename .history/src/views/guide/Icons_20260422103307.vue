<script setup>
import BedgeList from '@/components/BedgeList.vue'
import BedgeTraffic from '@/components/BedgeTraffic.vue'
import CodeBlockTabs from '@/views/guide/CodeBlockTabs.vue'

const bedgeListPanels = [
  {
    label: 'Template',
    language: 'html',
    code: `<BedgeList />`,
  },
  {
    label: 'Script',
    language: 'javascript',
    code: `// no script`,
  },
]

const bedgeTrafficPanels = [
  {
    label: 'Template',
    language: 'html',
    code: `<BedgeTraffic />`,
  },
  {
    label: 'Script',
    language: 'javascript',
    code: `import { ref } from 'vue';

const trafficBedge = ref([
  {title: '일반버스', number: '601, 605, 654, 661, N26(심야)', bg: '#EEFFE8', border: '#53B332', text: '#53B332' },
  {title: '좌석버스', number: '60, 60-3, 88', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },
  {title: '직행', number: '8000', bg: '#FFF1F0', border: '#E61911', text: '#E61911' },
  {title: '공항', number: '6003, 6008', bg: '#F0F9FF', border: '#0068B7', text: '#0068B7' },
  {title: '5호선선', number: '마곡역 7번 출구', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },
])`,
  },
]
</script>

<template>
    <section class="guide">
      <div class="cnt">
        <h2>Icons</h2> 
        <div class="itm">
          <img src="@/assets/img/file.svg" alt="file" />
          <img src="@/assets/img/link.svg" alt="link" />
          <img src="@/assets/img/arrow_right.svg" alt="arrow_right" />
          <img src="@/assets/img/header_item_01.svg" alt="header_item_01" />
          <img src="@/assets/img/header_item_02.svg" alt="header_item_02" />
          <img src="@/assets/img/header_item_03.svg" alt="header_item_03" />
          <img src="@/assets/img/header_item_04.svg" alt="header_item_04" />
          <img src="@/assets/img/header_item_05.svg" alt="header_item_05" />
          <img src="@/assets/img/header_item_06.svg" alt="header_item_06" />
          <img src="@/assets/img/header_item_07.svg" alt="header_item_07" />
          <img src="@/assets/img/header_item_08.svg" alt="header_item_08" />
          <img src="@/assets/img/header_item_09.svg" alt="header_item_09" />
          <img src="@/assets/img/header_item_10.svg" alt="header_item_10" />
          <img src="@/assets/img/business_item_01.svg" alt="business_item_01" />
          <img src="@/assets/img/business_item_02.svg" alt="business_item_02" />
          <img src="@/assets/img/business_item_03.svg" alt="business_item_03" />
          <img src="@/assets/img/business_item_04.svg" alt="business_item_04" />
          <img src="@/assets/img/business_item_05.svg" alt="business_item_05" />
          
        </div>
        </div>

        <div class="cnt">
            <h2>Bedge</h2>
            <div class="itm">
                <BedgeList />
                <BedgeTraffic />
            </div>

            <h3>BedgeList</h3>
            <CodeBlockTabs :panels="bedgeListPanels" />

            <h3>BedgeTraffic</h3>
            <CodeBlockTabs :panels="bedgeTrafficPanels" />
        </div>
    </section>d
</template>

<style scoped>
</style>