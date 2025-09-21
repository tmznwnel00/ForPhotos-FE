import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: calc(80px + env(safe-area-inset-bottom, 0px));
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding-top: calc(16px + env(safe-area-inset-top, 44px));
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #ff6b9d;
  margin: 0;
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const FilterTabs = styled.div`
  display: flex;
  padding: 16px;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterTab = styled.button`
  background: ${props => props.isActive ? '#ff6b9d' : '#f0f0f0'};
  color: ${props => props.isActive ? '#ffffff' : '#333'};
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: ${props => props.isActive ? '600' : '400'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.isActive ? '#ff6b9d' : '#e0e0e0'};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  padding: 0 16px 16px;
`;

const PhotoItem = styled.div`
  aspect-ratio: 1;
  background: ${props => props.background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const PhotoOverlay = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;

const PhotoActions = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #ffffff;
    transform: scale(1.1);
  }
`;

const ShareButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #ffffff;
    transform: scale(1.1);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
`;

const EmptyTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
`;

const EmptyDescription = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
`;

const GalleryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      filter: 'vintage',
      likes: 24,
      isLiked: false,
      date: '2024-01-15'
    },
    {
      id: 2,
      url: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      filter: 'cute',
      likes: 18,
      isLiked: true,
      date: '2024-01-14'
    },
    {
      id: 3,
      url: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      filter: 'cool',
      likes: 32,
      isLiked: false,
      date: '2024-01-13'
    },
    {
      id: 4,
      url: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      filter: 'warm',
      likes: 15,
      isLiked: true,
      date: '2024-01-12'
    },
    {
      id: 5,
      url: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      filter: 'cute',
      likes: 28,
      isLiked: false,
      date: '2024-01-11'
    },
    {
      id: 6,
      url: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      filter: 'dark',
      likes: 21,
      isLiked: true,
      date: '2024-01-10'
    }
  ]);

  const filters = [
    { id: 'all', label: '전체' },
    { id: 'vintage', label: '빈티지' },
    { id: 'cute', label: '귀여운' },
    { id: 'cool', label: '시크' },
    { id: 'warm', label: '따뜻한' },
    { id: 'dark', label: '어두운' }
  ];

  const filteredPhotos = photos.filter(photo => 
    selectedFilter === 'all' || photo.filter === selectedFilter
  );

  const handleLike = (photoId) => {
    setPhotos(prev => prev.map(photo => 
      photo.id === photoId 
        ? { ...photo, isLiked: !photo.isLiked, likes: photo.isLiked ? photo.likes - 1 : photo.likes + 1 }
        : photo
    ));
  };

  const handleShare = (photoId) => {
    console.log(`사진 ${photoId} 공유`);
  };

  if (filteredPhotos.length === 0) {
    return (
      <PageContainer>
        <Header>
          <BackButton>←</BackButton>
          <Title>내 갤러리</Title>
          <FilterButton>🔍</FilterButton>
        </Header>
        
        <FilterTabs>
          {filters.map(filter => (
            <FilterTab
              key={filter.id}
              isActive={selectedFilter === filter.id}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </FilterTab>
          ))}
        </FilterTabs>
        
        <EmptyState>
          <EmptyIcon>📸</EmptyIcon>
          <EmptyTitle>아직 사진이 없어요</EmptyTitle>
          <EmptyDescription>
            첫 번째 인생네컷을 찍어보세요!
          </EmptyDescription>
        </EmptyState>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header>
        <BackButton>←</BackButton>
        <Title>내 갤러리</Title>
        <FilterButton>🔍</FilterButton>
      </Header>
      
      <FilterTabs>
        {filters.map(filter => (
          <FilterTab
            key={filter.id}
            isActive={selectedFilter === filter.id}
            onClick={() => setSelectedFilter(filter.id)}
          >
            {filter.label}
          </FilterTab>
        ))}
      </FilterTabs>
      
      <GalleryGrid>
        {filteredPhotos.map(photo => (
          <PhotoItem key={photo.id} background={photo.url}>
            <PhotoOverlay>{photo.filter}</PhotoOverlay>
            <PhotoActions>
              <LikeButton onClick={() => handleLike(photo.id)}>
                {photo.isLiked ? '❤️' : '🤍'}
              </LikeButton>
              <ShareButton onClick={() => handleShare(photo.id)}>
                📤
              </ShareButton>
            </PhotoActions>
          </PhotoItem>
        ))}
      </GalleryGrid>
    </PageContainer>
  );
};

export default GalleryPage;
