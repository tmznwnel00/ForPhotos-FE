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

const PlayButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const MoodSection = styled.div`
  padding: 16px;
`;

const MoodTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`;

const MoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
`;

const MoodCard = styled.div`
  background: ${props => props.background || '#f8f9fa'};
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const MoodIcon = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
`;

const MoodName = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const MusicList = styled.div`
  padding: 16px;
`;

const MusicCard = styled.div`
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

const MusicHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
`;

const MusicCover = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`;

const MusicInfo = styled.div`
  flex: 1;
`;

const MusicTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
`;

const MusicArtist = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const MusicActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const MusicRecommendation = () => {
  const [selectedMood, setSelectedMood] = useState('happy');
  const [isPlaying, setIsPlaying] = useState(false);

  const moods = [
    {
      id: 'happy',
      name: '행복한',
      icon: '😊',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      id: 'romantic',
      name: '로맨틱한',
      icon: '💕',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 'cool',
      name: '시크한',
      icon: '😎',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'cute',
      name: '귀여운',
      icon: '🥰',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    }
  ];

  const musicList = [
    {
      id: 1,
      title: 'Dynamite',
      artist: 'BTS',
      mood: 'happy',
      cover: '🎵',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      id: 2,
      title: 'Butter',
      artist: 'BTS',
      mood: 'happy',
      cover: '🎵',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 3,
      title: 'Permission to Dance',
      artist: 'BTS',
      mood: 'happy',
      cover: '🎵',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 4,
      title: 'Stay',
      artist: 'Kid LAROI & Justin Bieber',
      mood: 'romantic',
      cover: '🎵',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      id: 5,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      mood: 'cool',
      cover: '🎵',
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
    }
  ];

  const filteredMusic = musicList.filter(music => 
    selectedMood === 'all' || music.mood === selectedMood
  );

  return (
    <PageContainer>
      <Header>
        <BackButton>←</BackButton>
        <Title>음악 추천</Title>
        <PlayButton onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? '⏸️' : '▶️'}
        </PlayButton>
      </Header>
      
      <MoodSection>
        <MoodTitle>분위기 선택</MoodTitle>
        <MoodGrid>
          {moods.map(mood => (
            <MoodCard
              key={mood.id}
              background={mood.background}
              onClick={() => setSelectedMood(mood.id)}
            >
              <MoodIcon>{mood.icon}</MoodIcon>
              <MoodName>{mood.name}</MoodName>
            </MoodCard>
          ))}
        </MoodGrid>
      </MoodSection>
      
      <MusicList>
        <MoodTitle>추천 음악</MoodTitle>
        {filteredMusic.map(music => (
          <MusicCard key={music.id}>
            <MusicHeader>
              <MusicCover background={music.background}>
                {music.cover}
              </MusicCover>
              <MusicInfo>
                <MusicTitle>{music.title}</MusicTitle>
                <MusicArtist>{music.artist}</MusicArtist>
              </MusicInfo>
              <MusicActions>
                <ActionButton>❤️</ActionButton>
                <ActionButton>📤</ActionButton>
              </MusicActions>
            </MusicHeader>
          </MusicCard>
        ))}
      </MusicList>
    </PageContainer>
  );
};

export default MusicRecommendation; 