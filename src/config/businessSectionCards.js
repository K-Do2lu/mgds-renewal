/* 사업 비주얼: Unsplash (https://unsplash.com/license) — 상업 이용 가능, 출처 표기 권장 */
import bg01 from '@/assets/img/business_photo_01.jpg'
import bg02 from '@/assets/img/business_photo_02.jpg'
import bg03 from '@/assets/img/business_photo_03.jpg'
import bg04 from '@/assets/img/business_photo_04.jpg'
import bg05 from '@/assets/img/business_photo_05.jpg'
import item01 from '@/assets/img/business_item_01.svg'
import item02 from '@/assets/img/business_item_02.svg'
import item03 from '@/assets/img/business_item_03.svg'
import item04 from '@/assets/img/business_item_04.svg'
import item05 from '@/assets/img/business_item_05.svg'

/** 사업영역 — mgdatasystem.co.kr 사업영역(sub2_1) 기준 순서·문구 정렬 */
export const businessSectionCards = [
  {
    key: 'type01',
    titleEn: 'System Integration',
    title: 'IT시스템 구축(SI)',
    body:
      'IT시스템 인프라(H/W, S/W, N/W) 납품, 업무시스템 분석·설계 및 개발, 데이터 설계 및 이관사업까지 고객이 필요한 환경에 맞추어 IT시스템을 구축하여 드립니다.',
    visual: bg01,
    desc: '인프라(H/W,S/W,N/W)부터 업무시스템 분석·개발 및 데이터 이관까지 맞춤 IT시스템 구축',
    icon: item01,
    hoverBg: bg01,
  },
  {
    key: 'type02',
    titleEn: 'Managed Operations',
    title: 'IT시스템 위탁운영',
    body:
      'IT 인프라 운영부터 전문가 상주지원까지 고객이 안심하고 핵심 업무에 집중할 수 있도록, IT시스템 일상적 운영에 대한 통합 아웃소싱을 제공합니다.',
    visual: bg02,
    desc: 'IT 일상 운영의 통합 아웃소싱과 상주 등 전문 인력 지원',
    icon: item02,
    hoverBg: bg02,
  },
  {
    key: 'type03',
    titleEn: 'Branch IT Support',
    title: '새마을금고 전산장비 유지보수',
    body:
      '새마을금고 본·지점에서 사용하고 있는 IT장비의 납품부터 유지보수까지 새마을금고 창구에서 필요로 하는 모든 종류의 IT서비스를 제공합니다.',
    visual: bg05,
    desc: '본·지점 IT장비 납품·유지보수와 창구 IT서비스 전반',
    icon: item05,
    hoverBg: bg05,
  },
  {
    key: 'type04',
    titleEn: 'Application Services',
    title: '업무프로그램 개발·유지보수',
    body:
      '고객의 요구에 맞추어진 최적의 업무프로그램 이용환경을 제공하기 위하여, 업무프로그램 개발 및 유지보수를 함께 제공하고 있습니다.',
    visual: bg03,
    desc: '맞춤 업무프로그램 환경을 위한 개발 및 유지보수',
    icon: item03,
    hoverBg: bg03,
  },
  {
    key: 'type05',
    titleEn: 'Infrastructure Support',
    title: '인프라 통합유지보수',
    body:
      'IT센터에 위치하는 모든 종류의 IT 인프라(H/W, S/W, N/W)에 대한 유지보수 및 기술지원을 제공하여 드립니다.',
    visual: bg04,
    desc: 'IT센터 H/W·S/W·N/W 통합 유지보수 및 기술지원',
    icon: item04,
    hoverBg: bg04,
  },
]
