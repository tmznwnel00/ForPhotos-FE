import React from 'react';

function App() {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1>인생네컷 프레임 선택 앱</h1>
      <p>앱이 정상적으로 로드되었습니다!</p>
      <div style={{ 
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px'
      }}>
        <h2>프레임 카드 예시</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <div style={{
            backgroundColor: '#667eea',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Jooyeon</h3>
            <p>LIVELOCK</p>
          </div>
          <div style={{
            backgroundColor: '#764ba2',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Jun Han</h3>
            <p>LIVELOCK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 