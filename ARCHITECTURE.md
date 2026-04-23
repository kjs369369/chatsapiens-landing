# 챗사피엔스 랜딩페이지 — 아키텍처 설계서

## 프로젝트 개요

- 제품: 챗사피엔스 AI 부트캠프 랜딩페이지
- 타겟: 은퇴 1~3년 전 40~60대 직장인
- 컨셉: 마법학교 입학 허가서 메타포 (판타지 40% + 진중함 60%)
- 구조: 단일 페이지 스크롤 (12개 섹션)
- 배포: Vercel (Fluid Compute, Node.js 24 LTS)

## 1. 프로젝트 구조 (파일 트리)

```
/Users/kimjinsoo/aiclab/260423lan/
├── app/
│   ├── layout.tsx              # 루트 레이아웃 — 폰트 로드, metadata, html lang="ko"
│   ├── page.tsx                # 홈 페이지 — 12개 섹션 조립
│   ├── globals.css             # Tailwind v4 @import, CSS 변수, 텍스처 클래스
│   └── robots.ts               # SEO robots.txt 동적 생성
├── components/
│   ├── sections/               # 페이지 섹션 (1:1 매핑)
│   │   ├── HeroSection.tsx
│   │   ├── ProblemEmpathySection.tsx
│   │   ├── SolutionProposalSection.tsx
│   │   ├── CoreValuesSection.tsx
│   │   ├── DifferentiationSection.tsx
│   │   ├── OutcomeJourneySection.tsx
│   │   ├── TargetAudienceSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── ProgramDetailsSection.tsx
│   │   ├── BrandPhilosophySection.tsx
│   │   ├── FinalCtaSection.tsx
│   │   └── FooterSection.tsx
│   ├── ui/                     # 재사용 원자 컴포넌트
│   │   ├── Button.tsx
│   │   ├── GoldDivider.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── RegistrationForm.tsx
│   ├── motifs/                 # 판타지 모티프
│   │   ├── WaxSealBadge.tsx
│   │   ├── ParchmentCard.tsx
│   │   ├── QuillDivider.tsx
│   │   ├── ScrollUnfurl.tsx
│   │   └── EnrollmentSeal.tsx
│   └── providers/
│       └── MotionProvider.tsx
├── lib/
│   ├── constants.ts
│   ├── copy.ts                 # 모든 카피 텍스트 단일 진실 소스
│   └── metadata.ts
├── public/
│   ├── images/
│   │   ├── og-image.jpg
│   │   └── favicon.ico
│   └── textures/
│       └── noise.svg           # SVG feTurbulence
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

## 2. 디자인 토큰 (globals.css @theme 블록)

```
색상:
  --color-burgundy-900: #4A0001
  --color-burgundy:     #740001   (Primary)
  --color-burgundy-600: #950001
  --color-gold-light:   #E8C547
  --color-gold:         #D3A625   (Secondary)
  --color-gold-dark:    #A07818
  --color-forest:       #1A472A   (Supporting)
  --color-navy:         #222F5B   (Supporting)
  --color-parchment:    #F4EDE0   (배경)
  --color-parchment-dark: #E8DDD0
  --color-ink:          #1C1008

폰트:
  --font-display: 'Cinzel', 'Times New Roman', serif
  --font-body:    'Noto Serif KR', 'Georgia', serif

섹션 패딩: sm(3rem), md(5rem), lg(7rem), xl(10rem)
```

**다크모드**: 미지원 (`color-scheme: light only`) — 40~60대 타겟 단일 테마 집중

**양피지 텍스처**: SVG feTurbulence (~300bytes) + CSS radial-gradient 가장자리

## 3. 컴포넌트 Props 인터페이스 요약

- `Button`: variant (primary/secondary/ghost), size (sm/md/lg), href, children
- `SectionWrapper`: id, background (parchment/dark-navy/burgundy/white), paddingY
- `ScrollReveal`: delay, direction (up/fade), once (기본 true)
- `ParchmentCard`: bordered, elevated
- `WaxSealBadge`: text, color, size, animated
- `RegistrationForm`: placeholder, buttonLabel, onSuccess, endpoint

(세부 타입은 각 컴포넌트 파일 상단에 정의)

## 4. 애니메이션 전략

| 섹션 | 애니메이션 | 라이브러리 |
|------|-----------|-----------|
| 히어로 진입 | 두루마리 펼치기 (ScrollUnfurl) | Framer Motion |
| 히어로 씰 | 스탬프 찍기 (scale + rotate) | Framer Motion |
| 섹션 2~11 진입 | fadeUp 24px | Framer Motion ScrollReveal |
| 페인포인트 리스트 | stagger 0.08s | Framer Motion |
| FAQ 아코디언 | 높이 애니메이션 | Framer Motion AnimatePresence |
| CTA hover | scale 1.02 | CSS transition |
| GoldDivider 등장 | scaleX 0→1 | CSS animation |

**40~60대 모션 원칙**:
- `prefers-reduced-motion` 완전 지원
- 기본 duration 0.5s (경쾌함보다 품격)
- 무한 반복 금지
- 동시 애니메이션 최대 3개

## 5. 접근성 (40~60대 특화)

**폰트 크기 기준**:
- 본문: 18~20px, 버튼: 18~20px
- H2: 28~40px, 히어로 H1: 40~64px
- base font-size: 1.125rem (18px)

**색상 대비 (WCAG AA 이상)**:
- 버건디 bg + 흰 글씨: 14.8:1 ✅
- 아이보리 bg + 잉크 글씨: 15.2:1 ✅
- 골드 bg + 잉크 글씨: 5.8:1 ✅
- 골드 bg + 흰 글씨: 2.1:1 ❌ (금지)

**터치 타겟**: 모든 버튼 48px+, CTA는 `padding: 16px 32px`

**키보드**: `focus-visible` 2px 골드 아웃라인, Skip-to-content 링크, h1→h2→h3 계층

## 6. 의존성

**필수**:
- next@16, react@19, typescript@5
- tailwindcss@4 + @tailwindcss/postcss
- motion@12 (LazyMotion + domAnimation)

**UI**:
- @radix-ui/react-accordion (FAQ)
- @radix-ui/react-slot (Button composition)
- class-variance-authority, clsx, tailwind-merge
- lucide-react

**폰트**: `next/font/google` Cinzel + Noto Serif KR

## 7. 구현 순서 (Phase)

**Phase 1 — 스캐폴딩 (2~3h)**
- `pnpm create next-app@latest` + 의존성 설치
- globals.css `@theme` 디자인 토큰
- next/font 폰트 설정
- noise.svg 생성
- lib/copy.ts 카피 이관
- Vercel 연결

**Phase 2 — 공용 컴포넌트 (3~4h)**
- ui/ (Button, SectionWrapper, GoldDivider, ScrollReveal, RegistrationForm)
- motifs/ (ParchmentCard, WaxSealBadge, QuillDivider)
- providers/MotionProvider

**Phase 3 — 섹션 컴포넌트 (8~10h, 우선순위 순)**
- P1: HeroSection, FinalCtaSection, ProblemEmpathySection
- P2: SolutionProposal, CoreValues, Differentiation, ProgramDetails
- P3: OutcomeJourney, TargetAudience, Faq, BrandPhilosophy, Footer

**Phase 4 — 애니메이션 (4~5h)**
- 히어로 진입 시퀀스 (ScrollUnfurl + EnrollmentSeal)
- ScrollReveal 섹션별 적용
- prefers-reduced-motion 검증

**Phase 5 — 반응형 + 접근성 (3~4h)**
- 375/768/1024/1440 중단점 검증
- 터치 타겟 48px 확인
- axe-core 감사
- Lighthouse Performance ≥90, A11y ≥95

## 8. 주요 의사결정 (ADR)

**ADR-001 App Router**: 서버 컴포넌트로 정적 섹션 번들 최소화, next/font 최적
**ADR-002 Tailwind v4**: @theme 블록으로 디자인 토큰 단일 관리, Turbopack 궁합
**ADR-003 shadcn/ui 최소 사용**: Accordion + Slot만, Radix 접근성 활용, 커스텀 디자인 자유도
**ADR-004 motion 패키지**: LazyMotion + domAnimation ~17KB, useReducedMotion 훅 캡슐화
**ADR-005 단일 페이지**: 전환 퍼널 끊김 방지, 앵커 링크 내부 이동

## 9. 확정된 기본 결정 (사용자 영구승인 기반)

- **이메일 폼 endpoint**: `/api/register` 자체 API 스텁 (콘솔 로그만) — 추후 연동
- **CTA 링크**: `#register` 앵커 (FinalCtaSection으로 스크롤)
- **EnrollmentSeal**: 인라인 SVG 직접 제작 (원형 + 왁스 씰 그라디언트 + 별 장식)
- **카피**: 대화 이력 원본 12~14섹션 전문 사용, `lib/copy.ts` 이관
