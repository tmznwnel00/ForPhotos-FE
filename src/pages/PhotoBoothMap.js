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

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const MapOverlay = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 12px;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;
`;

const BoothList = styled.div`
  padding: 16px;
`;

const BoothCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const BoothHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const BoothInfo = styled.div`
  flex: 1;
`;

const BoothName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
`;

const BoothLocation = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const BoothStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.isOpen ? '#4ade80' : '#ef4444'};
`;

const StatusText = styled.span`
  font-size: 12px;
  color: ${props => props.isOpen ? '#4ade80' : '#ef4444'};
  font-weight: 600;
`;

const BoothDetails = styled.div`
  padding: 16px;
`;

const BoothFeatures = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

const FeatureTag = styled.span`
  background: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
`;

const BoothActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.primary {
    background: #ff6b9d;
    color: white;
    
    &:hover {
      background: #e91e63;
    }
  }
  
  &.secondary {
    background: #f0f0f0;
    color: #333;
    
    &:hover {
      background: #e0e0e0;
    }
  }
`;

const PhotoBoothMap = () => {

  const photoBooths = [
    {
      id: 1,
      name: '인생네컷 강남점',
      location: '서울 강남구 강남대로 123',
      isOpen: true,
      distance: '0.3km',
      features: ['4컷', '6컷', '8컷', '프린트'],
      rating: 4.8,
      price: '4,000원'
    },
    {
      id: 2,
      name: '포토이즘 홍대점',
      location: '서울 마포구 홍대로 456',
      isOpen: true,
      distance: '0.8km',
      features: ['4컷', '6컷', '필터', '프린트'],
      rating: 4.6,
      price: '3,500원'
    },
    {
      id: 3,
      name: '포토그레이 신촌점',
      location: '서울 서대문구 연세로 789',
      isOpen: false,
      distance: '1.2km',
      features: ['4컷', '8컷', '프린트'],
      rating: 4.4,
      price: '4,500원'
    },
    {
      id: 4,
      name: '인생네컷 명동점',
      location: '서울 중구 명동길 321',
      isOpen: true,
      distance: '2.1km',
      features: ['4컷', '6컷', '8컷', '필터', '프린트'],
      rating: 4.9,
      price: '5,000원'
    }
  ];

  return (
    <PageContainer>
      <Header>
        <BackButton>←</BackButton>
        <Title>포토부스 지도</Title>
        <FilterButton>🔍</FilterButton>
      </Header>
      
      <MapContainer>
        <MapOverlay>
          <LocationInfo>
            📍 현재 위치: 서울 강남구
          </LocationInfo>
        </MapOverlay>
        <div>지도가 여기에 표시됩니다</div>
      </MapContainer>
      
      <BoothList>
        {photoBooths.map(booth => (
          <BoothCard key={booth.id}>
            <BoothHeader>
              <BoothInfo>
                <BoothName>{booth.name}</BoothName>
                <BoothLocation>{booth.location} • {booth.distance}</BoothLocation>
              </BoothInfo>
              <BoothStatus>
                <StatusDot isOpen={booth.isOpen} />
                <StatusText isOpen={booth.isOpen}>
                  {booth.isOpen ? '영업중' : '영업종료'}
                </StatusText>
              </BoothStatus>
            </BoothHeader>
            
            <BoothDetails>
              <BoothFeatures>
                {booth.features.map(feature => (
                  <FeatureTag key={feature}>{feature}</FeatureTag>
                ))}
              </BoothFeatures>
              
              <BoothActions>
                <ActionButton className="primary">
                  예약하기
                </ActionButton>
                <ActionButton className="secondary">
                  길찾기
                </ActionButton>
              </BoothActions>
            </BoothDetails>
          </BoothCard>
        ))}
      </BoothList>
    </PageContainer>
  );
};

export default PhotoBoothMap; 