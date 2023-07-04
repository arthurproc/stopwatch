import React, { FC } from 'react';

import { ProgressContainer } from '../styles/StyledComponents';

type ProgressBarProps = {
  value: number;
  max: number;
};

const ProgressBar: FC<ProgressBarProps> = ({ value, max }) => {
  return (
    <ProgressContainer>
      <progress value={value} max={max} />
    </ProgressContainer>
  );
};

export default ProgressBar;
