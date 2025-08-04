import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  padding: 8px 0;
  padding-bottom: calc(8px + env(safe-area-inset-bottom, 0px));
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.isActive ? '#ff6b9d' : '#666'};
  font-size: 20px;
`;

const Label = styled.span`
  font-size: 10px;
  color: ${props => props.isActive ? '#ff6b9d' : '#666'};
  font-weight: ${props => props.isActive ? '600' : '400'};
`;

const BottomNavigation = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: '홈', icon: '🏠', isActive: currentPage === 'home' },
    { id: 'pose', label: '포즈', icon: '📸', isActive: currentPage === 'pose' },
    { id: 'filter', label: '필터', icon: '🎨', isActive: currentPage === 'filter' },
    { id: 'map', label: '지도', icon: '🗺️', isActive: currentPage === 'map' },
    { id: 'music', label: '음악', icon: '🎵', isActive: currentPage === 'music' }
  ];

  return (
    <NavContainer>
      <NavList>
        {navItems.map((item) => (
          <NavItem 
            key={item.id}
            onClick={() => onPageChange(item.id)}
          >
            <Icon isActive={item.isActive}>{item.icon}</Icon>
            <Label isActive={item.isActive}>{item.label}</Label>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default BottomNavigation; 