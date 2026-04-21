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
    </section>
</template>

<style scoped>
</style>