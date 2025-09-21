# 📸 인생네컷 앱 (ForPhotos-FE)

AI 기반 개인화 인생네컷 앱으로, 사진 촬영부터 음악 추천까지 모든 것을 한 번에!

## ✨ 주요 기능

### 🏠 **홈페이지**
- 프레임 선택 및 미리보기
- 빠른 메뉴 (8개 액션 버튼)
- 카테고리별 필터링
- 레이아웃 전환 (그리드/리스트)

### 📷 **카메라**
- 풀스크린 카메라 뷰
- 포커스 인디케이터
- 플래시 토글
- 필터 선택
- 촬영 기능

### 🖼️ **갤러리**
- 3열 그리드 레이아웃
- 필터별 사진 분류
- 좋아요/공유 기능
- 빈 상태 처리

### 🗺️ **포토부스 지도**
- 주변 포토부스 위치
- 영업 상태 표시
- 예약 및 길찾기 기능
- 특징별 분류

### 🎵 **AI 음악 추천**
- **사진 업로드** 기반 분석
- **AI 이미지 분석** (분위기 감지)
- **태그 분석** (밝은, 자연스러운, 따뜻한 등)
- **맞춤 음악 추천** (일치도 표시)
- **재생/좋아요/공유** 기능

### 📸 **포즈 추천**
- 매일 새로운 포즈 추천
- 난이도 표시
- 태그 시스템
- 공유 기능

### 🎨 **필터 백과사전**
- 카테고리별 필터 분류
- 검색 기능
- 필터 미리보기
- 상세 설명

### 👤 **프로필 관리**
- 사용자 정보 표시
- 통계 (사진, 프레임, 좋아요)
- 메뉴 리스트
- 설정 옵션

## 🛠️ 기술 스택

- **Frontend**: React 18, Styled Components
- **Styling**: CSS3, Flexbox, Grid
- **State Management**: React Hooks
- **Mobile**: PWA 지원, 반응형 디자인
- **AI**: 이미지 분석 시뮬레이션

## 🚀 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/사용자명/ForPhotos-FE.git

# 프로젝트 디렉토리로 이동
cd ForPhotos-FE

# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 빌드
npm run build
```

## 📱 모바일 최적화

- **아이폰 X 노치** 대응
- **안전 영역** 고려
- **터치 친화적** 인터페이스
- **480px 최대 너비** 모바일 최적화
- **네이티브 앱** 같은 느낌

## 🎯 사용자 경험

### **로그인 시스템**
- 이메일/비밀번호 로그인
- 소셜 로그인 (Google, Apple)
- 회원가입 링크

### **네비게이션**
- 하단 탭 네비게이션 (5개 메인 메뉴)
- 홈페이지 빠른 메뉴 (8개 액션)
- 페이지 간 원활한 이동

### **AI 기능**
- 사진 업로드 → AI 분석 → 음악 추천
- 실시간 분석 진행 표시
- 분석 결과 시각화

## 📁 프로젝트 구조

```
src/
├── components/           # 재사용 가능한 컴포넌트
│   ├── Header.js        # 상단 헤더
│   ├── FilterBar.js     # 필터 바
│   ├── FrameCard.js     # 프레임 카드
│   └── BottomNavigation.js # 하단 네비게이션
├── pages/               # 페이지 컴포넌트
│   ├── LoginPage.js     # 로그인 페이지
│   ├── CameraPage.js    # 카메라 페이지
│   ├── GalleryPage.js   # 갤러리 페이지
│   ├── PhotoBoothMap.js # 포토부스 지도
│   ├── PhotoMusicRecommendation.js # AI 음악 추천
│   ├── PoseRecommendation.js # 포즈 추천
│   ├── FilterEncyclopedia.js # 필터 백과사전
│   └── ProfilePage.js   # 프로필 페이지
├── App.js              # 메인 앱 컴포넌트
├── index.js            # 앱 진입점
└── index.css           # 전역 스타일
```

## 🎨 디자인 특징

- **모던한 UI**: 부드러운 애니메이션과 호버 효과
- **일관된 색상**: 핑크 계열 브랜드 컬러 (#ff6b9d)
- **직관적인 UX**: 사용하기 쉬운 인터페이스
- **반응형 디자인**: 모든 기기에서 최적화

## 🌟 주요 컴포넌트

### **Header**
- 아이폰 X 노치 대응
- 뒤로가기, 제목, 액션 버튼

### **BottomNavigation**
- 5개 메인 메뉴 (홈, 카메라, 갤러리, 지도, 마이)
- 활성 상태 표시
- 터치 친화적 디자인

### **PhotoMusicRecommendation**
- 드래그 앤 드롭 업로드
- AI 분석 시뮬레이션
- 분위기 기반 음악 추천
- 일치도 표시

## 🔧 개발 환경

- **Node.js**: 14.x 이상
- **npm**: 6.x 이상
- **React**: 18.2.0
- **Styled Components**: 최신 버전

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.

---

**인생네컷 앱으로 더 특별한 순간을 기록하세요! 📸✨**