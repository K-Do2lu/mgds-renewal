/**
 * /guide Icons 탭 — 사이트에서의 용도·표시 크기 (SCSS/컴포넌트 기준).
 */
import logoSvg from '@/assets/img/logo.svg'
import headerMenuSvg from '@/assets/img/header_menu.svg'
import menuBtnMoSvg from '@/assets/img/menu_btn_mo.svg'
import menuArrowMoSvg from '@/assets/img/menu_arrow_mo.svg'
import menuArrowActiveSvg from '@/assets/img/menu_arrow_active.svg'
import linkSvg from '@/assets/img/link.svg'
import logoDshopSvg from '@/assets/img/logo_dshop.svg'

import header01 from '@/assets/img/header_item_01.svg'
import header02 from '@/assets/img/header_item_02.svg'
import header03 from '@/assets/img/header_item_03.svg'
import header04 from '@/assets/img/header_item_04.svg'
import header05 from '@/assets/img/header_item_05.svg'
import header06 from '@/assets/img/header_item_06.svg'
import header07 from '@/assets/img/header_item_07.svg'
import header08 from '@/assets/img/header_item_08.svg'
import header09 from '@/assets/img/header_item_09.svg'
import header10 from '@/assets/img/header_item_10.svg'

import business01 from '@/assets/img/business_item_01.svg'
import business02 from '@/assets/img/business_item_02.svg'
import business03 from '@/assets/img/business_item_03.svg'
import business04 from '@/assets/img/business_item_04.svg'
import business05 from '@/assets/img/business_item_05.svg'
import business06 from '@/assets/img/business_item_06.svg'

import fileSvg from '@/assets/img/file.svg'
import arrowRightSvg from '@/assets/img/arrow_right.svg'
import pageIndiFirst from '@/assets/img/page_indi_lleft.svg'
import pageIndiPrev from '@/assets/img/page_indi_left.svg'
import pageIndiNext from '@/assets/img/page_indi_right.svg'
import pageIndiLast from '@/assets/img/page_indi_rright.svg'
import slideArrowLeft from '@/assets/img/slide_arrow_left.svg'

import downloadSvg from '@/assets/img/download.svg'
import logoFooterPng from '@/assets/img/logo_footer.png'

import partner01 from '@/assets/img/partner_01.svg'
import partner02 from '@/assets/img/partner_02.svg'
import partner03 from '@/assets/img/partner_03.svg'
import partner04 from '@/assets/img/partner_04.svg'
import partner05 from '@/assets/img/partner_05.svg'
import partner06 from '@/assets/img/partner_06.svg'

const megaNote = '`.mega-panel__thumb` 박스 clamp(72~104px), 내부 img 70%·contain'

const megaWrap = {
  width: '104px',
  height: '104px',
  borderRadius: '10px',
  background: '#f2f6ff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 20px rgba(18, 35, 70, 0.12)',
}

const megaImg = {
  width: '70%',
  height: '70%',
  objectFit: 'contain',
}

function megaItem(file, src, note) {
  return {
    file,
    src,
    note: note || megaNote,
    preview: { wrap: megaWrap, img: megaImg },
  }
}

export const guideIconSections = [
  {
    title: '헤더 · 로고 / 메뉴 / 모바일',
    items: [
      {
        file: 'logo.svg',
        src: logoSvg,
        note: '헤더 로고 `.logo` — width clamp(150px ~ 220px)',
        preview: { img: { width: '220px', height: 'auto' } },
      },
      {
        file: 'header_menu.svg',
        src: headerMenuSvg,
        note: '모바일(닫힘) 메뉴 `.menu-btn` 영역 — 아이콘 클램프 24~40px',
        preview: {
          wrap: { width: '32px', height: '32px' },
          img: { width: '100%', height: '100%', objectFit: 'contain' },
        },
      },
      {
        file: 'menu_btn_mo.svg',
        src: menuBtnMoSvg,
        note: '모바일(열린 상태 교체 아이콘)',
        preview: {
          wrap: { width: '32px', height: '32px' },
          img: { width: '100%', height: '100%', objectFit: 'contain' },
        },
      },
      {
        file: 'menu_arrow_mo.svg',
        src: menuArrowMoSvg,
        note: '모바일 섹션 토글 기본',
        preview: { wrap: { width: '24px', height: '24px' }, img: { width: '24px', height: '24px' } },
      },
      {
        file: 'menu_arrow_active.svg',
        src: menuArrowActiveSvg,
        note: '모바일 섹션 열림 상태',
        preview: { wrap: { width: '24px', height: '24px' }, img: { width: '24px', height: '24px' } },
      },
      {
        file: 'link.svg',
        src: linkSvg,
        note: '메가 외부 링크 제목 `.mega-panel__title-link-ico` — 약 1.22em',
        preview: { img: { width: '27px', height: '27px' } },
      },
      {
        file: 'logo_dshop.svg',
        src: logoDshopSvg,
        note: '모바일 드로어 MGDshop — height 18px',
        preview: { img: { height: '18px', width: 'auto' } },
      },
    ],
  },
  {
    title: '메가메뉴 썸네일 (header_item_01 ~ 10)',
    items: [
      megaItem('header_item_01.svg', header01),
      megaItem('header_item_02.svg', header02),
      megaItem('header_item_03.svg', header03),
      megaItem('header_item_04.svg', header04),
      megaItem('header_item_05.svg', header05),
      megaItem('header_item_06.svg', header06),
      megaItem('header_item_07.svg', header07),
      megaItem('header_item_08.svg', header08),
      megaItem('header_item_09.svg', header09, '현재 메뉴 데이터에 미연결 — 에셋만 보관'),
      megaItem('header_item_10.svg', header10),
    ],
  },
  {
    title: '메인 사업 카드 (business_item)',
    items: [
      {
        file: 'business_item_01.svg',
        src: business01,
        note: '그리드 카드 `.main-business__card-ico` — 40×40 박스, img 22×22',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'rgba(40, 108, 247, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '22px', height: '22px', objectFit: 'contain' },
        },
      },
      {
        file: 'business_item_02.svg',
        src: business02,
        note: '동일 규격',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'rgba(40, 108, 247, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '22px', height: '22px', objectFit: 'contain' },
        },
      },
      {
        file: 'business_item_03.svg',
        src: business03,
        note: '동일 규격',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'rgba(40, 108, 247, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '22px', height: '22px', objectFit: 'contain' },
        },
      },
      {
        file: 'business_item_04.svg',
        src: business04,
        note: '동일 규격',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'rgba(40, 108, 247, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '22px', height: '22px', objectFit: 'contain' },
        },
      },
      {
        file: 'business_item_05.svg',
        src: business05,
        note: '동일 규격',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'rgba(40, 108, 247, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '22px', height: '22px', objectFit: 'contain' },
        },
      },
      {
        file: 'business_item_06.svg',
        src: business06,
        note: '`더보기` 카드 + 동일 22px 규격',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.16)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '22px', height: '22px', objectFit: 'contain', filter: 'brightness(0) invert(1)' },
        },
      },
      {
        file: 'business_item (피처드)',
        src: business04,
        note: '`.main-business__featured-ico` — 박스 최대 ~130px, img 58%, 어두운 배경용 invert',
        preview: {
          wrap: {
            width: '130px',
            height: '130px',
            borderRadius: '18px',
            background: 'rgba(255,255,255,0.14)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '58%', height: '58%', objectFit: 'contain', filter: 'brightness(0) invert(1)' },
        },
      },
    ],
  },
  {
    title: '공지/목록 · 페이징 · 슬라이더 · 탑버튼',
    items: [
      {
        file: 'file.svg',
        src: fileSvg,
        note: '테이블 첨부 아이콘 (제목 줄) — 가이드 표시 18px',
        preview: { img: { width: '18px', height: '18px' } },
      },
      {
        file: 'arrow_right.svg',
        src: arrowRightSvg,
        note: 'TopBtn — `$top-btn-icon-size` 22px, 배경 `$top-btn-size` 50px',
        preview: {
          wrap: {
            width: '50px',
            height: '50px',
            borderRadius: '999px',
            background: '#6B7280',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '22px', height: '22px', filter: 'brightness(0) invert(1)', transform: 'rotate(-90deg)' },
        },
      },
      {
        file: 'page_indi_lleft.svg',
        src: pageIndiFirst,
        note: '페이징 처음 — 버튼 40px, 아이콘 16px',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            border: '1px solid rgba(29, 78, 216, 0.2)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '16px', height: '16px', objectFit: 'contain' },
        },
      },
      {
        file: 'page_indi_left.svg',
        src: pageIndiPrev,
        note: '이전',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            border: '1px solid rgba(29, 78, 216, 0.2)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '16px', height: '16px', objectFit: 'contain' },
        },
      },
      {
        file: 'page_indi_right.svg',
        src: pageIndiNext,
        note: '다음',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            border: '1px solid rgba(29, 78, 216, 0.2)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '16px', height: '16px', objectFit: 'contain' },
        },
      },
      {
        file: 'page_indi_rright.svg',
        src: pageIndiLast,
        note: '마지막',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            border: '1px solid rgba(29, 78, 216, 0.2)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '16px', height: '16px', objectFit: 'contain' },
        },
      },
      {
        file: 'slide_arrow_left.svg',
        src: slideArrowLeft,
        note: 'BaseSlider — width 11px, 원형 버튼 40×40',
        preview: {
          wrap: {
            width: '40px',
            height: '40px',
            borderRadius: '999px',
            border: '1px solid #d6e0f0',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          img: { width: '11px', height: 'auto' },
        },
      },
    ],
  },
  {
    title: '회사소개 · 푸터 · 협력사',
    items: [
      {
        file: 'download.svg',
        src: downloadSvg,
        note: 'CI 다운로드 — 24×24',
        preview: { img: { width: '24px', height: '24px' } },
      },
      {
        file: 'logo_footer.png',
        src: logoFooterPng,
        note: '푸터 로고 — width 180px',
        preview: { img: { width: '180px', height: 'auto' } },
      },
      {
        file: 'partner_01.svg',
        src: partner01,
        note: '협력사 카드 내 — height 20px',
        preview: {
          wrap: {
            minHeight: '56px',
            padding: '14px 18px',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '200px',
          },
          img: { height: '20px', width: 'auto', maxWidth: '100%', objectFit: 'contain' },
        },
      },
      {
        file: 'partner_02.svg',
        src: partner02,
        note: '동일 규격',
        preview: {
          wrap: {
            minHeight: '56px',
            padding: '14px 18px',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '200px',
          },
          img: { height: '20px', width: 'auto', maxWidth: '100%', objectFit: 'contain' },
        },
      },
      {
        file: 'partner_03.svg',
        src: partner03,
        note: '동일 규격',
        preview: {
          wrap: {
            minHeight: '56px',
            padding: '14px 18px',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '200px',
          },
          img: { height: '20px', width: 'auto', maxWidth: '100%', objectFit: 'contain' },
        },
      },
      {
        file: 'partner_04.svg',
        src: partner04,
        note: '동일 규격',
        preview: {
          wrap: {
            minHeight: '56px',
            padding: '14px 18px',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '200px',
          },
          img: { height: '20px', width: 'auto', maxWidth: '100%', objectFit: 'contain' },
        },
      },
      {
        file: 'partner_05.svg',
        src: partner05,
        note: '동일 규격',
        preview: {
          wrap: {
            minHeight: '56px',
            padding: '14px 18px',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '200px',
          },
          img: { height: '20px', width: 'auto', maxWidth: '100%', objectFit: 'contain' },
        },
      },
      {
        file: 'partner_06.svg',
        src: partner06,
        note: '동일 규격',
        preview: {
          wrap: {
            minHeight: '56px',
            padding: '14px 18px',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '200px',
          },
          img: { height: '20px', width: 'auto', maxWidth: '100%', objectFit: 'contain' },
        },
      },
    ],
  },
]
