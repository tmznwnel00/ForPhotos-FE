import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const FrameImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`;

const PhotoSlots = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PhotoSlot = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 2px;
`;

const MainPhoto = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  bottom: 8px;
  width: 65%;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`;

const CardFooter = styled.div`
  padding: 12px;
  background-color: #f8f9fa;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const Artist = styled.div`
  font-size: 10px;
  color: #666;
  margin-bottom: 2px;
`;

const Album = styled.div`
  font-size: 10px;
  color: #666;
  margin-bottom: 8px;
`;

const Member = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #333;
`;

const LikeButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const HeartIcon = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  color: ${props => props.isLiked ? '#ff4757' : '#fff'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 12px;
    background-color: currentColor;
    border-radius: 8px 8px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 12px;
    background-color: currentColor;
    border-radius: 8px 8px 0 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

const FrameCard = ({ frame }) => {
  const [isLiked, setIsLiked] = useState(frame.isLiked);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const renderPhotoSlots = () => {
    const slots = frame.member === 'Group' ? 3 : 4;
    return Array.from({ length: slots }, (_, i) => (
      <PhotoSlot key={i} />
    ));
  };

  return (
    <CardContainer>
      <FrameImage>
        <PhotoSlots>
          {renderPhotoSlots()}
        </PhotoSlots>
        <MainPhoto>
          {frame.member}
        </MainPhoto>
        <LikeButton onClick={handleLike}>
          <HeartIcon isLiked={isLiked} />
        </LikeButton>
      </FrameImage>
      <CardFooter>
        <Title>{frame.title}</Title>
        <Artist>{frame.artist}</Artist>
        <Album>{frame.album}</Album>
        <Member>{frame.member}</Member>
      </CardFooter>
    </CardContainer>
  );
};

export default FrameCard; 