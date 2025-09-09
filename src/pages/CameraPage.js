import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  background-color: #000000;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: calc(80px + env(safe-area-inset-bottom, 0px));
  position: relative;
`;

const CameraHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: calc(16px + env(safe-area-inset-top, 44px)) 16px 16px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent);
`;

const TopControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  backdrop-filter: blur(10px);
`;

const FlashButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  backdrop-filter: blur(10px);
`;

const CameraView = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Viewfinder = styled.div`
  width: 300px;
  height: 400px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const GridLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
  }
  
  &::before {
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    transform: translateY(-50%);
  }
  
  &::after {
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    transform: translateX(-50%);
  }
`;

const FocusIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border: 2px solid #ff6b9d;
  border-radius: 50%;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const CameraControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
`;

const ControlRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const GalleryButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 8px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  backdrop-filter: blur(10px);
`;

const FilterButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CaptureButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid white;
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: transform 0.1s ease;
  
  &:active {
    transform: scale(0.95);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
  }
`;

const ModeButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 8px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  backdrop-filter: blur(10px);
`;

const BottomInfo = styled.div`
  text-align: center;
  color: white;
  font-size: 14px;
  opacity: 0.8;
`;

const CameraPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('normal');
  const [flashMode, setFlashMode] = useState('off');
  const cameraRef = useRef(null);

  const filters = [
    { id: 'normal', name: '일반', icon: '📷' },
    { id: 'vintage', name: '빈티지', icon: '📸' },
    { id: 'cute', name: '귀여운', icon: '🌸' },
    { id: 'cool', name: '시크', icon: '🖤' }
  ];

  const handleCapture = () => {
    setIsFocused(true);
    setTimeout(() => setIsFocused(false), 300);
    console.log('사진 촬영');
  };

  // const handleFilterChange = (filterId) => {
  //   setCurrentFilter(filterId);
  // };

  const handleFlashToggle = () => {
    const modes = ['off', 'on', 'auto'];
    const currentIndex = modes.indexOf(flashMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setFlashMode(modes[nextIndex]);
  };

  const getFlashIcon = () => {
    switch (flashMode) {
      case 'off': return '⚡';
      case 'on': return '⚡';
      case 'auto': return '⚡';
      default: return '⚡';
    }
  };

  return (
    <PageContainer>
      <CameraHeader>
        <TopControls>
          <CloseButton>✕</CloseButton>
          <FlashButton onClick={handleFlashToggle}>
            {getFlashIcon()}
          </FlashButton>
        </TopControls>
      </CameraHeader>
      
      <CameraView ref={cameraRef}>
        <Viewfinder>
          <GridLines />
          <FocusIndicator visible={isFocused} />
        </Viewfinder>
      </CameraView>
      
      <CameraControls>
        <ControlRow>
          <GalleryButton>🖼️</GalleryButton>
          <FilterButton>
            <span>{filters.find(f => f.id === currentFilter)?.icon}</span>
            <span>{filters.find(f => f.id === currentFilter)?.name}</span>
          </FilterButton>
          <ModeButton>🔄</ModeButton>
        </ControlRow>
        
        <ControlRow style={{ justifyContent: 'center' }}>
          <CaptureButton onClick={handleCapture} />
        </ControlRow>
        
        <BottomInfo>
          화면을 터치하여 포커스 조정
        </BottomInfo>
      </CameraControls>
    </PageContainer>
  );
};

export default CameraPage;
