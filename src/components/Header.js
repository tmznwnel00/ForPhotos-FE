import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 100;
  padding: 0 16px;
  border-bottom: 1px solid #f0f0f0;
  padding-top: env(safe-area-inset-top, 44px);
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #ff6b9d;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const StarIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  color: #ffd700;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '★';
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TitleSection>
        <BackButton>←</BackButton>
        <Title>프레임 선택</Title>
        <StarIcon />
      </TitleSection>
    </HeaderContainer>
  );
};

export default Header; 