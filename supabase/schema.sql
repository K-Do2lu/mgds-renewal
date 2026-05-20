-- MG 홈페이지 공지·자료실·입찰 게시물
-- Supabase SQL Editor에서 실행하세요.

create extension if not exists "pgcrypto";

create table if not exists public.notice_posts (
  id uuid primary key default gen_random_uuid(),
  board_key text not null check (board_key in ('board', 'archive', 'tender')),
  title text not null,
  content text not null default '',
  body text not null default '',
  published_at date not null default current_date,
  view_count integer not null default 0 check (view_count >= 0),
  is_hot boolean not null default false,
  is_published boolean not null default true,
  tender_no text,
  deadline text,
  attachments jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists notice_posts_board_published_idx
  on public.notice_posts (board_key, is_published, published_at desc);

create or replace function public.set_notice_posts_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists notice_posts_updated_at on public.notice_posts;
create trigger notice_posts_updated_at
  before update on public.notice_posts
  for each row execute function public.set_notice_posts_updated_at();

create or replace function public.increment_notice_view(post_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.notice_posts
  set view_count = view_count + 1
  where id = post_id and is_published = true;
end;
$$;

grant execute on function public.increment_notice_view(uuid) to anon, authenticated;

alter table public.notice_posts enable row level security;

drop policy if exists "공개 게시물 조회" on public.notice_posts;
create policy "공개 게시물 조회"
  on public.notice_posts for select
  to anon, authenticated
  using (is_published = true);

drop policy if exists "관리자 전체 조회" on public.notice_posts;
create policy "관리자 전체 조회"
  on public.notice_posts for select
  to authenticated
  using (true);

drop policy if exists "관리자 등록" on public.notice_posts;
create policy "관리자 등록"
  on public.notice_posts for insert
  to authenticated
  with check (true);

drop policy if exists "관리자 수정" on public.notice_posts;
create policy "관리자 수정"
  on public.notice_posts for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "관리자 삭제" on public.notice_posts;
create policy "관리자 삭제"
  on public.notice_posts for delete
  to authenticated
  using (true);

-- 첨부 파일 버킷 (Storage → New bucket 이름: notice-attachments, Public: ON)
insert into storage.buckets (id, name, public)
values ('notice-attachments', 'notice-attachments', true)
on conflict (id) do update set public = true;

drop policy if exists "첨부 공개 읽기" on storage.objects;
create policy "첨부 공개 읽기"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'notice-attachments');

drop policy if exists "관리자 첨부 업로드" on storage.objects;
create policy "관리자 첨부 업로드"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'notice-attachments');

drop policy if exists "관리자 첨부 수정" on storage.objects;
create policy "관리자 첨부 수정"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'notice-attachments');

drop policy if exists "관리자 첨부 삭제" on storage.objects;
create policy "관리자 첨부 삭제"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'notice-attachments');
