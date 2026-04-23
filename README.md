# 챗사피엔스 랜딩페이지

은퇴 전 40~60대 직장인을 위한 AI 부트캠프 랜딩페이지.
"마법학교 입학 허가서" 컨셉 — 판타지 40% + 진중함 60%.

## 기술 스택

- **Next.js 15** (App Router, React 19, TypeScript strict)
- **Tailwind CSS v4** (@theme 블록으로 디자인 토큰 관리)
- **motion** (LazyMotion + domAnimation, `prefers-reduced-motion` 대응)
- **Radix UI** (Accordion for FAQ, Slot for Button composition)
- **next/font** (Cinzel + Noto Serif KR, swap display)

## 프로젝트 구조

```
app/
  ├─ layout.tsx          # 루트 레이아웃 (폰트, 메타)
  ├─ page.tsx            # 12개 섹션 조립
  ├─ globals.css         # @theme 디자인 토큰, 텍스처, 애니메이션
  ├─ robots.ts           # robots.txt
  ├─ sitemap.ts          # sitemap.xml
  └─ api/register/       # POST 스텁 (Node runtime, console.log + {ok:true})
components/
  ├─ sections/           # 12개 섹션 1:1 매핑
  ├─ ui/                 # Button, SectionWrapper, GoldDivider, ScrollReveal, RegistrationForm
  ├─ motifs/             # EnrollmentSeal(inline SVG), ParchmentCard, WaxSealBadge, QuillDivider, ScrollUnfurl
  └─ providers/          # MotionProvider (LazyMotion)
lib/
  ├─ copy.ts             # 모든 카피 단일 진실 소스
  ├─ constants.ts        # 섹션 ID, 사이트 URL
  ├─ metadata.ts         # SEO 메타
  └─ cn.ts               # clsx + tailwind-merge
public/
  └─ textures/noise.svg  # 양피지 노이즈 (feTurbulence)
```

## 로컬 실행

```bash
pnpm install
pnpm dev
```

→ http://localhost:3000

## 스크립트

| 명령 | 설명 |
| --- | --- |
| `pnpm dev` | Turbopack 개발 서버 |
| `pnpm build` | 프로덕션 빌드 |
| `pnpm start` | 프로덕션 서버 |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript noEmit |

## Vercel 배포

1. Vercel 대시보드 → New Project → 이 저장소 Import
2. Framework Preset: **Next.js** (자동 감지)
3. Build Command / Output: 기본값 유지
4. Node.js 버전: **22 LTS 이상** (프로젝트 Settings → General에서 확인)
5. 환경 변수: 현재 `/api/register`는 스텁이므로 필요 없음.
   실제 리드 저장소 연결 시 다음 중 택일:
   - Resend / SendGrid API key (`RESEND_API_KEY`)
   - Vercel Marketplace DB (Neon, Supabase, Upstash 등)

### Fluid Compute

- API 라우트는 `runtime = "nodejs"`로 선언되어 Vercel Functions (Fluid Compute) 위에서 실행됩니다.
- Edge 런타임은 의도적으로 사용하지 않았습니다 — 추후 DB/이메일 SDK 호환성 확보 위함.

## 디자인 토큰

핵심 색상 (`app/globals.css` `@theme` 참조):

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--color-burgundy-800` | `#740001` | Primary (히어로 타이틀, CTA) |
| `--color-gold-500` | `#D3A625` | Secondary (테두리, 포인트) |
| `--color-gold-300` | `#E8C547` | 골드 텍스트 (어두운 배경) |
| `--color-parchment` | `#F4EDE0` | 기본 배경 |
| `--color-ink` | `#1C1008` | 본문 텍스트 |
| `--color-forest-700` | `#1A472A` | 체크/성공 |
| `--color-navy-700` | `#222F5B` | 브랜드 철학 섹션 |

**대비 검증**:
- 버건디 bg + 흰 글씨: 14.8:1 (AAA)
- 아이보리 bg + 잉크 글씨: 15.2:1 (AAA)
- 골드 bg + 잉크 글씨: 5.8:1 (AA)
- 골드 bg + 흰 글씨: **사용 금지** (2.1:1 실패)

## 접근성 체크리스트

- [x] Skip-to-content 링크 (`Tab` 첫 포커스)
- [x] 모든 버튼 `min-height ≥ 48px`
- [x] 본문 기본 18px (`--text-base: 1.125rem`)
- [x] `focus-visible` 2px 골드 아웃라인 전역
- [x] `prefers-reduced-motion` 완전 지원 (ScrollReveal / ScrollUnfurl / Hero seal)
- [x] `word-break: keep-all` — 한글 어절 단위 개행
- [x] 의미 있는 heading 계층 (h1 → h2 → h3)
- [x] `lang="ko"`, `color-scheme: light only`

## 카피 수정

모든 섹션 텍스트는 `lib/copy.ts` 한 파일에서만 관리합니다. 새 섹션이나 항목을 추가할 때도 여기서 구조를 확장하세요.

## 남은 TODO

- [ ] `/api/register` 실제 이메일 서비스 연동 (현재 `console.log` 스텁)
- [ ] OG 이미지 / favicon 자산 추가 (`public/images/og-image.jpg`, `public/images/favicon.ico`)
- [ ] 개인정보처리방침 / 이용약관 실제 페이지 작성 (현재 `href="#"` placeholder)
- [ ] 관측 (Sentry, Axiom, 또는 Vercel Observability) 연동
- [ ] 다국어 대응 (현재 ko only)

## 라이선스

© 2026 챗사피엔스. All rights reserved.
