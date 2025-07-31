import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  padding: 16px;
  background-color: #ffffff;
`;

const MainCategories = styled.div`
  display: flex;
  gap: 24px;
  padding: 0 0 16px 0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MainCategory = styled.button`
  background: none;
  border: none;
  padding: 8px 0;
  font-size: 16px;
  font-weight: ${props => props.isSelected ? '600' : '400'};
  color: ${props => props.isSelected ? '#333' : '#666'};
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  transition: all 0.2s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.isSelected ? '20px' : '0'};
    height: 3px;
    background-color: #ff6b9d;
    border-radius: 2px;
    transition: all 0.2s ease;
  }
  
  &:hover {
    color: #333;
  }
`;

const SubCategories = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SubCategory = styled.button`
  background: ${props => props.isSelected ? '#ff6b9d' : '#f5f5f5'};
  color: ${props => props.isSelected ? '#ffffff' : '#333'};
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: ${props => props.isSelected ? '600' : '400'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.isSelected ? '#ff6b9d' : '#e0e0e0'};
  }
`;

const FilterBar = ({ mainCategories, subCategories, selectedMain, selectedSub, onMainSelect, onSubSelect }) => {
  return (
    <FilterContainer>
      <MainCategories>
        {mainCategories.map((category) => (
          <MainCategory
            key={category.id}
            isSelected={selectedMain === category.id}
            onClick={() => onMainSelect(category.id)}
          >
            {category.label}
          </MainCategory>
        ))}
      </MainCategories>
      <SubCategories>
        {subCategories.map((category) => (
          <SubCategory
            key={category.id}
            isSelected={selectedSub === category.id}
            onClick={() => onSubSelect(category.id)}
          >
            {category.label}
          </SubCategory>
        ))}
      </SubCategories>
    </FilterContainer>
  );
};

export default FilterBar; 