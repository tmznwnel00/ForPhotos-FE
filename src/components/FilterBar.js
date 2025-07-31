import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px 0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterOption = styled.button`
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
    width: ${props => props.isSelected ? '4px' : '0'};
    height: 4px;
    background-color: #333;
    border-radius: 50%;
    transition: all 0.2s ease;
  }
  
  &:hover {
    color: #333;
  }
`;

const FilterBar = ({ options, selected, onSelect }) => {
  return (
    <FilterContainer>
      {options.map((option) => (
        <FilterOption
          key={option.id}
          isSelected={selected === option.id}
          onClick={() => onSelect(option.id)}
        >
          {option.label}
        </FilterOption>
      ))}
    </FilterContainer>
  );
};

export default FilterBar; 