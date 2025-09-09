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

const UploadButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const UploadSection = styled.div`
  padding: 24px 16px;
  text-align: center;
`;

const UploadArea = styled.div`
  border: 2px dashed #e0e0e0;
  border-radius: 16px;
  padding: 40px 20px;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 24px;
  
  &:hover {
    border-color: #ff6b9d;
    background-color: #fff5f8;
  }
  
  &.has-image {
    border-color: #ff6b9d;
    background-color: #fff5f8;
  }
`;

const UploadIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  color: #ff6b9d;
`;

const UploadText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const UploadSubtext = styled.div`
  font-size: 14px;
  color: #666;
`;

const ImagePreview = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 16px;
  border-radius: 12px;
  background: ${props => props.background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  position: relative;
  overflow: hidden;
`;

const AnalysisSection = styled.div`
  padding: 16px;
  background-color: #f8f9fa;
  margin: 16px;
  border-radius: 12px;
`;

const AnalysisTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AnalysisTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const AnalysisTag = styled.span`
  background: #ff6b9d;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
`;

const MoodIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const MoodIcon = styled.div`
  font-size: 24px;
`;

const MoodText = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 600;
`;

const MusicRecommendations = styled.div`
  padding: 16px;
`;

const RecommendationTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
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

const MusicTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
`;

const MusicArtist = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 4px 0;
`;

const MatchScore = styled.div`
  font-size: 12px;
  color: #ff6b9d;
  font-weight: 600;
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

const PhotoMusicRecommendation = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        analyzeImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (file) => {
    setIsAnalyzing(true);
    
    // 시뮬레이션된 이미지 분석 (실제로는 AI API 호출)
    setTimeout(() => {
      const mockAnalysis = {
        mood: 'happy',
        tags: ['밝은', '자연스러운', '따뜻한', '친구'],
        confidence: 0.85
      };
      setAnalysisResult(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getMoodIcon = (mood) => {
    const moodIcons = {
      happy: '😊',
      romantic: '💕',
      cool: '😎',
      cute: '🥰',
      energetic: '⚡',
      calm: '😌'
    };
    return moodIcons[mood] || '😊';
  };

  const getMoodText = (mood) => {
    const moodTexts = {
      happy: '행복한',
      romantic: '로맨틱한',
      cool: '시크한',
      cute: '귀여운',
      energetic: '에너지틱한',
      calm: '차분한'
    };
    return moodTexts[mood] || '행복한';
  };

  const musicRecommendations = [
    {
      id: 1,
      title: 'Dynamite',
      artist: 'BTS',
      matchScore: '95%',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      cover: '🎵'
    },
    {
      id: 2,
      title: 'Butter',
      artist: 'BTS',
      matchScore: '92%',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      cover: '🎵'
    },
    {
      id: 3,
      title: 'Permission to Dance',
      artist: 'BTS',
      matchScore: '88%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      cover: '🎵'
    },
    {
      id: 4,
      title: 'Stay',
      artist: 'Kid LAROI & Justin Bieber',
      matchScore: '85%',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      cover: '🎵'
    }
  ];

  return (
    <PageContainer>
      <Header>
        <BackButton>←</BackButton>
        <Title>음악 추천</Title>
        <UploadButton>📤</UploadButton>
      </Header>
      
      <UploadSection>
        <UploadArea 
          className={uploadedImage ? 'has-image' : ''}
          onClick={() => document.getElementById('image-upload').click()}
        >
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          {uploadedImage ? (
            <ImagePreview background={uploadedImage}>
              <img 
                src={uploadedImage} 
                alt="Uploaded" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ImagePreview>
          ) : (
            <>
              <UploadIcon>📸</UploadIcon>
              <UploadText>사진을 업로드하세요</UploadText>
              <UploadSubtext>AI가 사진을 분석하여 맞춤 음악을 추천해드려요</UploadSubtext>
            </>
          )}
        </UploadArea>
      </UploadSection>

      {isAnalyzing && (
        <AnalysisSection>
          <AnalysisTitle>
            🔍 사진을 분석하고 있어요...
          </AnalysisTitle>
        </AnalysisSection>
      )}

      {analysisResult && (
        <AnalysisSection>
          <AnalysisTitle>
            ✨ 분석 결과
          </AnalysisTitle>
          <AnalysisTags>
            {analysisResult.tags.map((tag, index) => (
              <AnalysisTag key={index}>{tag}</AnalysisTag>
            ))}
          </AnalysisTags>
          <MoodIndicator>
            <MoodIcon>{getMoodIcon(analysisResult.mood)}</MoodIcon>
            <MoodText>{getMoodText(analysisResult.mood)} 분위기</MoodText>
          </MoodIndicator>
        </AnalysisSection>
      )}

      <MusicRecommendations>
        <RecommendationTitle>추천 음악</RecommendationTitle>
        {musicRecommendations.map(music => (
          <MusicCard key={music.id}>
            <MusicHeader>
              <MusicCover background={music.background}>
                {music.cover}
              </MusicCover>
              <MusicInfo>
                <MusicTitle>{music.title}</MusicTitle>
                <MusicArtist>{music.artist}</MusicArtist>
                <MatchScore>일치도 {music.matchScore}</MatchScore>
              </MusicInfo>
              <MusicActions>
                <ActionButton>❤️</ActionButton>
                <ActionButton>▶️</ActionButton>
                <ActionButton>📤</ActionButton>
              </MusicActions>
            </MusicHeader>
          </MusicCard>
        ))}
      </MusicRecommendations>
    </PageContainer>
  );
};

export default PhotoMusicRecommendation;
