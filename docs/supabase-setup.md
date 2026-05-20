# Supabase 게시물·관리자 설정

공개 홈페이지(공지·자료실·입찰)와 **관리자 페이지**(`/admin`)가 Supabase를 사용합니다.  
환경 변수가 없으면 기존 **샘플 데이터**로 동작합니다.

## 1. Supabase 프로젝트

1. [supabase.com](https://supabase.com)에서 프로젝트 생성
2. **Settings → API**에서 URL, `anon` public key 복사
3. 프로젝트 루트에 **`.env` 파일** 생성 (`.env.example` 을 복사한 뒤 값 입력)
   - ⚠️ `.env.example` 만 수정하면 **적용되지 않습니다.** 반드시 `.env` 가 있어야 합니다.

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

4. `npm run dev` **재시작** (환경 변수 반영)

## 2. DB·Storage 스키마

Supabase 대시보드 → **SQL Editor** → `supabase/schema.sql` 내용 실행

- 테이블 `notice_posts`
- RLS: 비로그인은 **공개 글만** 조회, 로그인(관리자)은 CRUD
- Storage 버킷 `notice-attachments` (공개 읽기)

## 3. 관리자 계정

**Authentication → Users → Add user**  
이메일·비밀번호로 관리자 1명 이상 생성

로그인: `http://localhost:5173/admin/login`

## 4. 관리자 사용법

| 경로 | 설명 |
|------|------|
| `/admin/posts` | 게시물 목록·삭제 |
| `/admin/posts/new` | 새 글 (게시판·제목·본문·공개 여부) |
| `/admin/posts/{uuid}/edit` | 수정·첨부 추가 |

- **공개** 체크 시 홈페이지에 노출
- **HOT** 은 공지사항 목록 상단 고정용
- 첨부 파일은 새 글·수정 모두 작성 화면에서 추가 (새 글은 **등록** 시 함께 업로드)

## 5. 공개 사이트 URL

Supabase 연동 후 상세 URL은 **UUID** 기준입니다.

- 예: `/notice/board/550e8400-e29b-41d4-a716-446655440000`
- 샘플 모드: 기존처럼 `/notice/board/0` (숫자 인덱스)

## 6. 보안 참고

- `anon` 키는 프론트에 노출됩니다. **RLS**로 읽기/쓰기 범위를 제한합니다.
- 관리자만 글을 쓰려면 Supabase Auth 로그인이 필요합니다.
- 운영 시 관리자 이메일 도메인 제한 등은 RLS 정책을 추가로 조정하세요.
