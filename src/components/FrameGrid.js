import React from 'react';
import styled from 'styled-components';
import FrameCard from './FrameCard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 0 4px;
`;

const FrameGrid = ({ frames }) => {
  return (
    <GridContainer>
      {frames.map((frame) => (
        <FrameCard key={frame.id} frame={frame} />
      ))}
    </GridContainer>
  );
};

export default FrameGrid; 