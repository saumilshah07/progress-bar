import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar';
import Button from './components/Button';
import Select from './components/Select';
import { calculateProgress } from './util';
import { AppActions, AppProgressBar, AppWrapper } from './App.styled';
import { ProgressBars, WrapperType } from './types';

const App: FunctionComponent<WrapperType> = ({ data }) => {
  const [progressBars, setProgressBar] = useState<ProgressBars[]>([]);
  const [selectedProgressBar, setSelectedProgressBar] = useState<string>('');

  useEffect(() => {
    setProgressBar(data);
    setSelectedProgressBar(data[0].name);
  }, []);

  const handleOnClick = useCallback(
    (operator: string, newProgress: number) => {
      const newBares = progressBars.map((progressBar) => {
        if (progressBar.name === selectedProgressBar) {
          return {
            ...progressBar,
            progress: calculateProgress(progressBar.progress, operator, newProgress),
          };
        }
        return progressBar;
      });

      setProgressBar(newBares);
    },
    [selectedProgressBar, progressBars],
  );

  return (
    <AppWrapper>
      <AppProgressBar>
        {progressBars.map(({ progress }, index) => (
          <ProgressBar key={index} label={`${progress}%`} progress={progress}></ProgressBar>
        ))}
      </AppProgressBar>
      <AppActions>
        <Select
          data-testid="select"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedProgressBar(e.target.value)}
        >
          {progressBars.map(({ name }, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </Select>
        <Button onClick={() => handleOnClick('-', 25)}>-25</Button>
        <Button onClick={() => handleOnClick('-', 10)}>-10</Button>
        <Button onClick={() => handleOnClick('+', 10)}>+10</Button>
        <Button onClick={() => handleOnClick('+', 25)}>+25</Button>
      </AppActions>
    </AppWrapper>
  );
};

export default App;
