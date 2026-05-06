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

/** 사업개요 — 섹션별 본문 + 비주얼 (메인 페이지 카드와 동일 주제) */
export const businessSectionCards = [
  {
    key: 'type01',
    titleEn: 'System Integration',
    title: 'IT 시스템 구축 (SI)',
    summary:
      '인프라부터 애플리케이션까지 통합 설계·구축으로 금융 업무에 맞는 전산 환경을 완성합니다.',
    body: '고객의 요구사항과 규제 환경을 반영한 아키텍처 설계, 표준화된 개발·검증 프로세스, 데이터 이관 및 오픈 지원까지 일관된 SI 서비스를 제공합니다. 장애 없는 전환과 운영 연속성을 최우선으로 합니다.',
    visual: bg01,
    desc: '인프라부터 애플리케이션까지 통합 설계·구축으로 금융 업무에 맞는 전산 환경을 완성합니다.',
    icon: item01,
    hoverBg: bg01,
  },
  {
    key: 'type02',
    titleEn: 'ITO Service',
    title: 'IT 시스템 위탁운영',
    summary: '전문 인력과 표준 운영체계로 인프라·업무 시스템을 안정적으로 대행합니다.',
    body: '상주 및 원격 지원, 장애·변경·용량 관리, 보안 및 규정 준수 점검 등 IT 운영 전반을 위탁받아 수행합니다. 고객은 핵심 업무에 집중하고, IT 운영 품질과 비용 효율은 MGDS가 책임집니다.',
    visual: bg02,
    desc: '전문 인력과 표준 운영체계로 인프라·업무 시스템을 안정적으로 대행합니다.',
    icon: item02,
    hoverBg: bg02,
  },
  {
    key: 'type03',
    titleEn: 'Application Development',
    title: '애플리케이션 개발',
    summary: '맞춤형 업무 프로그램 개발과 지속적인 기능 개선·유지보수를 제공합니다.',
    body: '레거시 연동, UI/UX 개선, 배치·인터페이스, 모바일·웹 채널 확장 등 실제 창구·중앙 업무에 맞는 애플리케이션을 설계·구현합니다. 요구 변경에 탄력적으로 대응하는 유지보수 체계를 갖추고 있습니다.',
    visual: bg03,
    desc: '맞춤형 업무 프로그램 개발과 지속적인 기능 개선·유지보수를 제공합니다.',
    icon: item03,
    hoverBg: bg03,
  },
  {
    key: 'type04',
    titleEn: 'Infrastructure Services',
    title: '인프라 통합 유지 보수',
    summary: 'H/W·S/W·N/W를 아우르는 원스톱 기술 지원으로 IT 센터 가용성을 높입니다.',
    body: '예방 점검, 패치·버전 관리, 성능 튜닝, 백업·복구, 보안 장비 연동 등 인프라 스택 전반의 유지보수를 통합 제공합니다. 장애 대응 SLA와 보고 체계를 통해 가시적인 운영 품질을 확보합니다.',
    visual: bg04,
    desc: 'H/W·S/W·N/W를 아우르는 원스톱 기술 지원으로 IT 센터 가용성을 높입니다.',
    icon: item04,
    hoverBg: bg04,
  },
  {
    key: 'type05',
    titleEn: 'Branch IT Services',
    title: '금융 점포 통합 전산 서비스',
    summary: '새마을금고 점포 전산에 특화된 공급·현장 지원·통합 유지보수를 제공합니다.',
    body: '창구 단말·주변기기, 네트워크, 영업점 인프라를 아우르는 공급과 설치, 장애 대응 및 순회 점검을 통해 전국 점포의 전산 가동률을 지원합니다. 중앙회·지역금고 정책에 맞춘 표준 서비스 모델을 운영합니다.',
    visual: bg05,
    desc: '새마을금고 점포 전산에 특화된 공급·현장 지원·통합 유지보수를 제공합니다.',
    icon: item05,
    hoverBg: bg05,
  },
]
