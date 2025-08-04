import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import FrameCard from './components/FrameCard';
import BottomNavigation from './components/BottomNavigation';
import PoseRecommendation from './pages/PoseRecommendation';
import FilterEncyclopedia from './pages/FilterEncyclopedia';
import PhotoBoothMap from './pages/PhotoBoothMap';
import MusicRecommendation from './pages/MusicRecommendation';

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

const HomePage = () => {
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'pose':
        return <PoseRecommendation />;
      case 'filter':
        return <FilterEncyclopedia />;
      case 'map':
        return <PhotoBoothMap />;
      case 'music':
        return <MusicRecommendation />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AppContainer>
      {renderPage()}
      <BottomNavigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </AppContainer>
  );
};

export default App; 