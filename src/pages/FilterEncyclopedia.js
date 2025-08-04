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

const SearchButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const SearchBar = styled.div`
  padding: 16px;
  background-color: #f8f9fa;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  font-size: 14px;
  background-color: #ffffff;
  
  &:focus {
    outline: none;
    border-color: #ff6b9d;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  padding: 16px 16px 0 16px;
  gap: 16px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryTab = styled.button`
  background: ${props => props.isActive ? '#ff6b9d' : '#f0f0f0'};
  color: ${props => props.isActive ? '#ffffff' : '#333'};
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: ${props => props.isActive ? '600' : '400'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.isActive ? '#ff6b9d' : '#e0e0e0'};
  }
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 16px;
`;

const FilterCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const FilterImage = styled.div`
  width: 100%;
  height: 120px;
  background: ${props => props.background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const FilterInfo = styled.div`
  padding: 12px;
`;

const FilterName = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
`;

const FilterDescription = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
  line-height: 1.3;
`;

const FilterEncyclopedia = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: '전체' },
    { id: 'vintage', label: '빈티지' },
    { id: 'cute', label: '귀여운' },
    { id: 'cool', label: '시크' },
    { id: 'warm', label: '따뜻한' },
    { id: 'dark', label: '어두운' }
  ];

  const filters = [
    {
      id: 1,
      name: '빈티지 필터',
      description: '옛날 사진 같은 느낌',
      category: 'vintage',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '📷'
    },
    {
      id: 2,
      name: '귀여운 필터',
      description: '파스텔톤으로 귀여운 느낌',
      category: 'cute',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      icon: '🌸'
    },
    {
      id: 3,
      name: '시크 필터',
      description: '모노톤으로 세련된 느낌',
      category: 'cool',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '🖤'
    },
    {
      id: 4,
      name: '따뜻한 필터',
      description: '노란빛으로 따뜻한 느낌',
      category: 'warm',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '☀️'
    },
    {
      id: 5,
      name: '어두운 필터',
      description: '고대비로 강렬한 느낌',
      category: 'dark',
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      icon: '🌙'
    },
    {
      id: 6,
      name: '드림 필터',
      description: '몽환적인 느낌',
      category: 'cute',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      icon: '✨'
    }
  ];

  const filteredFilters = filters.filter(filter => {
    const matchesCategory = selectedCategory === 'all' || filter.category === selectedCategory;
    const matchesSearch = filter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         filter.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageContainer>
      <Header>
        <BackButton>←</BackButton>
        <Title>필터 백과사전</Title>
        <SearchButton>🔍</SearchButton>
      </Header>
      
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="필터 검색..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchBar>
      
      <CategoryTabs>
        {categories.map(category => (
          <CategoryTab
            key={category.id}
            isActive={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </CategoryTab>
        ))}
      </CategoryTabs>
      
      <FilterGrid>
        {filteredFilters.map(filter => (
          <FilterCard key={filter.id}>
            <FilterImage background={filter.background}>
              {filter.icon}
            </FilterImage>
            <FilterInfo>
              <FilterName>{filter.name}</FilterName>
              <FilterDescription>{filter.description}</FilterDescription>
            </FilterInfo>
          </FilterCard>
        ))}
      </FilterGrid>
    </PageContainer>
  );
};

export default FilterEncyclopedia; 