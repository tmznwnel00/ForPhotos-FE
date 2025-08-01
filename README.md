# 인생네컷 프레임 선택 앱

이 프로젝트는 한국의 인생네컷(사진부스) 앱의 프레임 선택 화면을 React로 구현한 것입니다.

## 주요 기능

- 📱 모바일 최적화된 반응형 디자인
- 🎨 Xdinary Heroes 테마의 프레임 카드
- ❤️ 좋아요 기능
- 🔍 필터링 기능 (전체, 인생네컷, 브랜드관, 작가관, 엔터관)
- 📱 하단 네비게이션 바

## 기술 스택

- React 18
- Styled Components
- CSS3

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 빌드
npm run build
```

## 프로젝트 구조

```
src/
├── components/
│   ├── FrameSelection.js    # 메인 프레임 선택 화면
│   ├── Header.js           # 상단 헤더 (시간, 상태바, 제목)
│   ├── FilterBar.js        # 필터 바
│   ├── FrameGrid.js        # 프레임 그리드
│   ├── FrameCard.js        # 개별 프레임 카드
│   └── BottomNavigation.js # 하단 네비게이션
├── App.js                  # 메인 앱 컴포넌트
├── index.js               # 앱 진입점
└── index.css              # 전역 스타일
```

## 주요 컴포넌트 설명

### FrameSelection
- 전체 화면의 레이아웃을 관리
- 필터 상태와 프레임 데이터를 관리

### Header
- 상단 상태바 (시간, 신호, WiFi, 배터리)
- 앱 제목과 검색 아이콘

### FilterBar
- 카테고리별 필터링 기능
- 선택된 필터 하이라이트

### FrameCard
- 개별 프레임 카드 디자인
- 좋아요 기능
- 사진 슬롯과 메인 사진 영역

### BottomNavigation
- 하단 네비게이션 바
- 홈, 폴더, 추가, 저장, 마이 페이지 아이콘

## 스타일링

- Styled Components를 사용한 컴포넌트 기반 스타일링
- 모바일 퍼스트 디자인
- CSS Grid와 Flexbox를 활용한 레이아웃
- 부드러운 애니메이션과 호버 효과

## 브라우저 지원

- Chrome (권장)
- Safari
- Firefox
- Edge

## 라이선스

MIT License
