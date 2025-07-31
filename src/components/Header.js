import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 100;
  padding: 0 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  font-size: 12px;
  color: #333;
`;

const Time = styled.span`
  font-weight: 600;
`;

const StatusIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SignalIcon = styled.div`
  width: 16px;
  height: 10px;
  display: flex;
  align-items: flex-end;
  gap: 1px;
  
  &::before,
  &::after,
  & > div {
    width: 2px;
    background-color: #333;
    border-radius: 1px;
  }
  
  &::before {
    content: '';
    height: 4px;
  }
  
  &::after {
    content: '';
    height: 6px;
  }
  
  & > div {
    height: 8px;
  }
`;

const WifiIcon = styled.div`
  width: 12px;
  height: 8px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid #333;
  }
`;

const BatteryIcon = styled.div`
  width: 20px;
  height: 10px;
  border: 1px solid #333;
  border-radius: 2px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    right: -3px;
    top: 2px;
    width: 2px;
    height: 4px;
    background-color: #333;
    border-radius: 0 1px 1px 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 1px;
    top: 1px;
    width: 14px;
    height: 6px;
    background-color: #333;
    border-radius: 1px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    border: 2px solid #666;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 6px;
    height: 2px;
    background-color: #666;
    transform: rotate(45deg);
    transform-origin: top left;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <StatusBar>
        <Time>1:05</Time>
        <StatusIcons>
          <SignalIcon>
            <div></div>
          </SignalIcon>
          <WifiIcon />
          <BatteryIcon />
          <span>100</span>
        </StatusIcons>
      </StatusBar>
      <TitleSection>
        <div></div>
        <Title>프레임</Title>
        <SearchIcon />
      </TitleSection>
    </HeaderContainer>
  );
};

export default Header; 