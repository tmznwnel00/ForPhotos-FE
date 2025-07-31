import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import FilterBar from './FilterBar';
import FrameGrid from './FrameGrid';
import BottomNavigation from './BottomNavigation';

const Container = styled.div`
  max-width: 414px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
  position: relative;
`;

const MainContent = styled.div`
  padding: 0 16px;
  padding-bottom: 80px;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  padding: 0 4px;
`;

const FrameCount = styled.span`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SortIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 6px solid #666;
    margin-bottom: 2px;
  }
  
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #666;
  }
`;

const FrameSelection = () => {
  const [selectedFilter, setSelectedFilter] = useState('전체');

  const filterOptions = [
    { id: '전체', label: '전체' },
    { id: '인생네컷', label: '인생네컷' },
    { id: '브랜드관', label: '브랜드관' },
    { id: '작가관', label: '작가관' },
    { id: '엔터관', label: '엔터관' }
  ];

  const frames = [
    {
      id: 1,
      title: 'LIVELOCK',
      artist: 'XDINARY HEROES',
      album: '4TH MINI ALBUM',
      member: 'Jooyeon',
      image: '/api/placeholder/300/400',
      isLiked: false
    },
    {
      id: 2,
      title: 'LIVELOCK',
      artist: 'XDINARY HEROES',
      album: '4TH MINI ALBUM',
      member: 'Jun Han',
      image: '/api/placeholder/300/400',
      isLiked: false
    },
    {
      id: 3,
      title: 'LIVELOCK',
      artist: 'XDINARY HEROES',
      album: '4TH MINI ALBUM',
      member: 'O.de',
      image: '/api/placeholder/300/400',
      isLiked: false
    },
    {
      id: 4,
      title: 'LIVELOCK',
      artist: 'XDINARY HEROES',
      album: '4TH MINI ALBUM',
      member: 'Group',
      image: '/api/placeholder/300/400',
      isLiked: false
    }
  ];

  return (
    <Container>
      <Header />
      <MainContent>
        <FilterBar 
          options={filterOptions}
          selected={selectedFilter}
          onSelect={setSelectedFilter}
        />
        <SubHeader>
          <FrameCount>1120 Frame</FrameCount>
          <SortIcon />
        </SubHeader>
        <FrameGrid frames={frames} />
      </MainContent>
      <BottomNavigation />
    </Container>
  );
};

export default FrameSelection; 