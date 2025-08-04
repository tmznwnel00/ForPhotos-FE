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

const ShareButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const PoseCard = styled.div`
  margin: 16px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const PoseImage = styled.div`
  width: 100%;
  height: 300px;
  background: ${props => props.background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const PoseOverlay = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #333;
`;

const PoseInfo = styled.div`
  padding: 20px;
`;

const PoseTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
`;

const PoseDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 0 0 16px 0;
`;

const PoseTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #f0f0f0;
  color: #666;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
`;

const DifficultyBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;

const DifficultyLabel = styled.span`
  font-size: 12px;
  color: #666;
`;

const DifficultyLevel = styled.div`
  display: flex;
  gap: 4px;
`;

const DifficultyDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.filled ? '#ff6b9d' : '#e0e0e0'};
`;

const PoseRecommendation = () => {
  const [currentPose] = useState({
    id: 1,
    title: "오늘의 추천 포즈",
    description: "친구들과 함께 찍기 좋은 귀여운 포즈입니다. 손가락 V사인과 함께 웃는 표정으로 자연스러운 분위기를 연출해보세요!",
    background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    difficulty: 2,
    tags: ["친구", "귀여운", "V사인", "웃음"],
    category: "친구"
  });

  const renderDifficultyDots = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <DifficultyDot key={i} filled={i < level} />
    ));
  };

  return (
    <PageContainer>
      <Header>
        <BackButton>←</BackButton>
        <Title>오늘의 포즈</Title>
        <ShareButton>📤</ShareButton>
      </Header>
      
      <PoseCard>
        <PoseImage background={currentPose.background}>
          <PoseOverlay>추천</PoseOverlay>
          <div style={{ fontSize: '48px' }}>📸</div>
        </PoseImage>
        
        <PoseInfo>
          <PoseTitle>{currentPose.title}</PoseTitle>
          <PoseDescription>{currentPose.description}</PoseDescription>
          
          <PoseTags>
            {currentPose.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </PoseTags>
          
          <DifficultyBar>
            <DifficultyLabel>난이도:</DifficultyLabel>
            <DifficultyLevel>
              {renderDifficultyDots(currentPose.difficulty)}
            </DifficultyLevel>
          </DifficultyBar>
        </PoseInfo>
      </PoseCard>
    </PageContainer>
  );
};

export default PoseRecommendation; 