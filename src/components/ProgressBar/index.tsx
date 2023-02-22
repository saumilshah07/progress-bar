import React, { FunctionComponent } from 'react';
import { ProgressBarComponentProps } from '../../types';
import { ProgressBarChild, ProgressBarLabel, ProgressBarWrapper } from './styled';

const ProgressBar: FunctionComponent<ProgressBarComponentProps> = ({ label, color = 'blue', progress, max = 100 }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarChild
        data-testid="progress-bar-child"
        progress={progress > max ? max : progress}
        color={progress > max ? 'red' : color}
      ></ProgressBarChild>
      <ProgressBarLabel>{label}</ProgressBarLabel>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
