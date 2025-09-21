import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import FrameCard from './components/FrameCard';
import BottomNavigation from './components/BottomNavigation';
import PoseRecommendation from './pages/PoseRecommendation';
import FilterEncyclopedia from './pages/FilterEncyclopedia';
import PhotoBoothMap from './pages/PhotoBoothMap';
import PhotoMusicRecommendation from './pages/PhotoMusicRecommendation';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import GalleryPage from './pages/GalleryPage';
import CameraPage from './pages/CameraPage';

const AppContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  padding-bottom: calc(80px + env(safe-area-inset-bottom, 0px));
  padding-top: env(safe-area-inset-top, 0px);
`;

const Content = styled.div`
  padding: 0;
`;

const LayoutControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
`;

const LayoutButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const LayoutButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${props => props.isActive ? '#ff6b9d' : '#999'};
  font-size: 16px;
`;

const SortButton = styled.button`
  background: none;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const FrameGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 16px;
`;

const QuickActions = styled.div`
  padding: 16px;
  background-color: #f8f9fa;
`;

const QuickActionsTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`;

const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const QuickActionButton = styled.button`
  background: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 16px 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const QuickActionIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const QuickActionLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

const HomePage = ({ onPageChange }) => {
  const [layoutMode, setLayoutMode] = useState('grid');
  const [selectedMainCategory, setSelectedMainCategory] = useState('brand');
  const [selectedSubCategory, setSelectedSubCategory] = useState('disney');

  const mainCategories = [
    { id: 'life', label: '인생네컷' },
    { id: 'brand', label: '브랜드관' },
    { id: 'artist', label: '작가관' },
    { id: 'entertainment', label: '엔터관' }
  ];

  const subCategories = [
    { id: 'disney', label: '디즈니-픽사' },
    { id: 'moomin', label: '무민' },
    { id: 'miffy', label: '미피' },
    { id: 'loopy', label: '잔망루피' },
    { id: 'culture', label: '한국문화재' }
  ];

  const frames = [
    {
      id: 1,
      previewBackground: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      frameBackground: '#f5e6d3',
      themeColor: '#667eea',
      themeIcon: '🏕️',
      themeName: '캠핑 테마'
    },
    {
      id: 2,
      previewBackground: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      frameBackground: '#1e3a8a',
      themeColor: '#3b82f6',
      themeIcon: '🚀',
      themeName: '우주 테마'
    },
    {
      id: 3,
      previewBackground: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      frameBackground: '#e0f2fe',
      themeColor: '#0ea5e9',
      themeIcon: '❄️',
      themeName: 'FROZEN'
    },
    {
      id: 4,
      previewBackground: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      frameBackground: '#f3e8ff',
      themeColor: '#8b5cf6',
      themeIcon: '👑',
      themeName: 'FROZEN'
    }
  ];

  const quickActions = [
    { id: 'camera', icon: '📷', label: '카메라' },
    { id: 'gallery', icon: '🖼️', label: '갤러리' },
    { id: 'pose', icon: '📸', label: '포즈' },
    { id: 'filter', icon: '🎨', label: '필터' },
    { id: 'map', icon: '🗺️', label: '지도' },
    { id: 'music', icon: '🎵', label: 'AI음악' },
    { id: 'profile', icon: '👤', label: '마이' },
    { id: 'settings', icon: '⚙️', label: '설정' }
  ];

  return (
    <>
      <Header />
      <FilterBar
        mainCategories={mainCategories}
        subCategories={subCategories}
        selectedMain={selectedMainCategory}
        selectedSub={selectedSubCategory}
        onMainSelect={setSelectedMainCategory}
        onSubSelect={setSelectedSubCategory}
      />
      <LayoutControls>
        <LayoutButtons>
          <LayoutButton
            isActive={layoutMode === 'list'}
            onClick={() => setLayoutMode('list')}
          >
            █
          </LayoutButton>
          <LayoutButton
            isActive={layoutMode === 'grid'}
            onClick={() => setLayoutMode('grid')}
          >
            █
          </LayoutButton>
        </LayoutButtons>
        <SortButton>
          최신순▽
        </SortButton>
      </LayoutControls>
      
      <QuickActions>
        <QuickActionsTitle>빠른 메뉴</QuickActionsTitle>
        <QuickActionsGrid>
          {quickActions.map(action => (
            <QuickActionButton 
              key={action.id}
              onClick={() => onPageChange(action.id)}
            >
              <QuickActionIcon>{action.icon}</QuickActionIcon>
              <QuickActionLabel>{action.label}</QuickActionLabel>
            </QuickActionButton>
          ))}
        </QuickActionsGrid>
      </QuickActions>
      
      <Content>
        <FrameGrid>
          {frames.map(frame => (
            <FrameCard key={frame.id} frame={frame} />
          ))}
        </FrameGrid>
      </Content>
    </>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (formData) => {
    console.log('로그인:', formData);
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const renderPage = () => {
    if (!isLoggedIn) {
      return <LoginPage onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'pose':
        return <PoseRecommendation />;
      case 'filter':
        return <FilterEncyclopedia />;
      case 'map':
        return <PhotoBoothMap />;
      case 'music':
        return <PhotoMusicRecommendation />;
      case 'profile':
        return <ProfilePage />;
      case 'gallery':
        return <GalleryPage />;
      case 'camera':
        return <CameraPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <AppContainer>
      {renderPage()}
      {isLoggedIn && (
        <BottomNavigation 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
        />
      )}
    </AppContainer>
  );
};

export default App; 