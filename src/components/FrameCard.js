import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const PreviewImage = styled.div`
  width: 100%;
  height: 120px;
  background: ${props => props.background || 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const PreviewPerson = styled.div`
  width: 60px;
  height: 80px;
  background: #ffffff;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background: #f0f0f0;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 20px;
    background: #f0f0f0;
    border-radius: 10px;
  }
`;

const FrameDesign = styled.div`
  width: 100%;
  height: 160px;
  background: ${props => props.background || '#f8f9fa'};
  position: relative;
  display: flex;
  flex-direction: column;
`;

const PhotoGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 8px;
`;

const PhotoSlot = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #666;
`;

const FrameBottom = styled.div`
  height: 40px;
  background: ${props => props.theme || '#667eea'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
  position: relative;
`;

const ThemeIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const FrameCard = ({ frame }) => {
  // const [isLiked, setIsLiked] = useState(frame.isLiked);

  // const handleLike = (e) => {
  //   e.stopPropagation();
  //   setIsLiked(!isLiked);
  // };

  const renderPhotoSlots = () => {
    return Array.from({ length: 8 }, (_, i) => (
      <PhotoSlot key={i}>
        {i + 1}
      </PhotoSlot>
    ));
  };

  return (
    <CardContainer>
      <PreviewImage background={frame.previewBackground}>
        <PreviewPerson />
      </PreviewImage>
      <FrameDesign background={frame.frameBackground}>
        <PhotoGrid>
          {renderPhotoSlots()}
        </PhotoGrid>
        <FrameBottom theme={frame.themeColor}>
          <ThemeIcon>{frame.themeIcon}</ThemeIcon>
          {frame.themeName}
        </FrameBottom>
      </FrameDesign>
    </CardContainer>
  );
};

export default FrameCard; 