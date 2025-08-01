import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 414px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  padding: 8px 0;
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
  color: ${props => props.isActive ? '#007bff' : '#666'};
`;

const Label = styled.span`
  font-size: 10px;
  color: ${props => props.isActive ? '#007bff' : '#666'};
  font-weight: ${props => props.isActive ? '600' : '400'};
`;

const HomeIcon = styled(Icon)`
  &::before {
    content: '';
    width: 16px;
    height: 14px;
    background-color: currentColor;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
`;

const FolderIcon = styled(Icon)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 12px;
    border: 2px solid currentColor;
    border-radius: 2px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 12px;
    height: 8px;
    border: 2px solid currentColor;
    border-radius: 1px;
  }
`;

const AddIcon = styled(Icon)`
  &::before {
    content: '';
    width: 16px;
    height: 2px;
    background-color: currentColor;
    position: absolute;
  }
  
  &::after {
    content: '';
    width: 2px;
    height: 16px;
    background-color: currentColor;
    position: absolute;
  }
`;

const BookmarkIcon = styled(Icon)`
  &::before {
    content: '';
    width: 16px;
    height: 20px;
    border: 2px solid currentColor;
    border-radius: 2px 2px 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid currentColor;
  }
`;

const ProfileIcon = styled(Icon)`
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    border: 2px solid currentColor;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 4px;
    background-color: currentColor;
    border-radius: 0 0 4px 4px;
  }
`;

const BottomNavigation = () => {
  const navItems = [
    { id: 'home', label: '홈', icon: HomeIcon, isActive: true },
    { id: 'folders', label: '폴더', icon: FolderIcon, isActive: false },
    { id: 'add', label: '추가', icon: AddIcon, isActive: false },
    { id: 'bookmarks', label: '저장', icon: BookmarkIcon, isActive: false },
    { id: 'profile', label: '마이', icon: ProfileIcon, isActive: false }
  ];

  return (
    <NavContainer>
      <NavList>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavItem key={item.id}>
              <IconComponent isActive={item.isActive} />
              <Label isActive={item.isActive}>{item.label}</Label>
            </NavItem>
          );
        })}
      </NavList>
    </NavContainer>
  );
};

export default BottomNavigation; 