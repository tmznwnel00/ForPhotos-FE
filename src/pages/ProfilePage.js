import React from 'react';
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

const SettingsButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const ProfileSection = styled.div`
  padding: 24px 16px;
  text-align: center;
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
  color: white;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  border: 4px solid rgba(255, 255, 255, 0.3);
`;

const UserName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const UserEmail = styled.p`
  font-size: 14px;
  margin: 0 0 20px 0;
  opacity: 0.9;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  opacity: 0.9;
`;

const MenuSection = styled.div`
  padding: 16px;
`;

const MenuGroup = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  overflow: hidden;
`;

const MenuItem = styled.button`
  width: 100%;
  padding: 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #333;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const MenuText = styled.span`
  flex: 1;
`;

const MenuArrow = styled.div`
  font-size: 16px;
  color: #999;
`;

const ProfilePage = () => {
  const user = {
    name: '김인생',
    email: 'lifecut@example.com',
    stats: {
      photos: 24,
      frames: 8,
      likes: 156
    }
  };

  const menuItems = [
    { icon: '📸', text: '내 사진', action: 'photos' },
    { icon: '❤️', text: '좋아요한 사진', action: 'likes' },
    { icon: '🎨', text: '내 필터', action: 'filters' },
    { icon: '📱', text: '앱 설정', action: 'settings' },
    { icon: '❓', text: '도움말', action: 'help' },
    { icon: '📞', text: '고객지원', action: 'support' },
    { icon: '📄', text: '이용약관', action: 'terms' },
    { icon: '🔒', text: '개인정보처리방침', action: 'privacy' }
  ];

  const handleMenuClick = (action) => {
    console.log(`${action} 클릭`);
  };

  return (
    <PageContainer>
      <Header>
        <BackButton>←</BackButton>
        <Title>마이페이지</Title>
        <SettingsButton>⚙️</SettingsButton>
      </Header>
      
      <ProfileSection>
        <ProfileImage>👤</ProfileImage>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
        
        <StatsContainer>
          <StatItem>
            <StatNumber>{user.stats.photos}</StatNumber>
            <StatLabel>사진</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{user.stats.frames}</StatNumber>
            <StatLabel>프레임</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{user.stats.likes}</StatNumber>
            <StatLabel>좋아요</StatLabel>
          </StatItem>
        </StatsContainer>
      </ProfileSection>
      
      <MenuSection>
        {menuItems.map((item, index) => (
          <MenuGroup key={index}>
            <MenuItem onClick={() => handleMenuClick(item.action)}>
              <MenuIcon>{item.icon}</MenuIcon>
              <MenuText>{item.text}</MenuText>
              <MenuArrow>›</MenuArrow>
            </MenuItem>
          </MenuGroup>
        ))}
      </MenuSection>
    </PageContainer>
  );
};

export default ProfilePage;
