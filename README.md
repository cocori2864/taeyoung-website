# 태영설비기술사사무소 웹사이트

Figma 설계에서 추출한 React 컴포넌트 기반 웹사이트

## 📋 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── HeroSection.tsx  # 히어로 섹션
│   ├── ContentSection.tsx # 콘텐츠 섹션
│   └── NavigationButton.tsx # 네비게이션 버튼
├── styles/             # 스타일 및 디자인 시스템
│   ├── theme.ts        # 색상, 타이포그래피 정의
│   └── globals.css     # 글로벌 스타일
├── types/              # TypeScript 타입 정의
└── App.tsx             # 메인 App 컴포넌트
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary Blue**: `#1259D0`
- **Dark Text**: `#2B2F35`
- **Light Gray**: `#9EA3AB`
- **Light Blue BG**: `#E8EFFF`
- **White**: `#FFFFFF`

### 타이포그래피
- **Heading 2**: Noto Sans KR, 56px, Weight 350
- **Body Large**: Noto Sans KR, 20px, Weight 300
- **Body Small**: Roboto, 18px, Weight 400
- **Label**: Roboto, 14px, Weight 700

## 🚀 설치 및 실행

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 📦 주요 컴포넌트

### HeroSection
메인 히어로 섹션으로, 비디오 배경과 네비게이션 버튼을 포함합니다.

**Props:**
- `videoId: string` - 비디오 ID
- `onPreviousClick?: () => void` - 이전 클릭 핸들러
- `onNextClick?: () => void` - 다음 클릭 핸들러

### ContentSection
콘텐츠를 표시하는 섹션으로, 애니메이션과 텍스트를 포함합니다.

**Props:**
- `sectionNumber: string` - 섹션 번호
- `title: string` - 제목
- `description: string` - 설명
- `showAnimation?: boolean` - 애니메이션 표시 여부

### NavigationButton
네비게이션 버튼 컴포넌트

**Props:**
- `id: string` - 고유 ID
- `label: string` - 버튼 레이블
- `position: 'left' | 'right'` - 위치
- `onClick?: () => void` - 클릭 핸들러

## 🎯 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 애니메이션 지원 (Lottie)
- ✅ 타입스크립트 지원
- ✅ 접근성 준수 (A11y)
- ✅ 성능 최적화
- ✅ 한글 타이포그래피 최적화

## 🔧 기술 스택

- **React 18+** - UI 프레임워크
- **TypeScript** - 타입 안정성
- **CSS3** - 스타일링 및 애니메이션
- **Lottie React** - SVG 애니메이션

## 📝 라이선스

MIT License

## 🤝 기여

요청사항이나 버그 리포트는 이슈를 통해 제출해주세요.
