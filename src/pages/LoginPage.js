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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Logo = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #ff6b9d;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 320px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  background-color: #f8f9fa;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
    background-color: #ffffff;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
  margin-bottom: 20px;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #e0e0e0;
  }
  
  span {
    padding: 0 16px;
    font-size: 14px;
    color: #666;
  }
`;

const SocialLoginButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #ffffff;
  color: #333;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  &:hover {
    border-color: #ff6b9d;
    background-color: #f8f9fa;
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 32px;
  font-size: 14px;
  color: #666;
  
  a {
    color: #ff6b9d;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} 로그인`);
  };

  return (
    <PageContainer>
      <LogoContainer>
        <Logo>📸</Logo>
        <Subtitle>나만의 인생네컷을 만들어보세요</Subtitle>
      </LogoContainer>
      
      <LoginForm onSubmit={handleSubmit}>
        <InputGroup>
          <Label>이메일</Label>
          <Input
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label>비밀번호</Label>
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </InputGroup>
        
        <LoginButton type="submit">
          로그인
        </LoginButton>
        
        <Divider>
          <span>또는</span>
        </Divider>
        
        <SocialLoginButton onClick={() => handleSocialLogin('Google')}>
          <span>🔍</span>
          Google로 계속하기
        </SocialLoginButton>
        
        <SocialLoginButton onClick={() => handleSocialLogin('Apple')}>
          <span>🍎</span>
          Apple로 계속하기
        </SocialLoginButton>
      </LoginForm>
      
      <SignupLink>
        계정이 없으신가요? <a href="#signup">회원가입</a>
      </SignupLink>
    </PageContainer>
  );
};

export default LoginPage;
