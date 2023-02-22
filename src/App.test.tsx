import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const testData = [
  {
    name: '#progress1',
    progress: 0,
  },
];

describe('<App/>', () => {
  test('should render multiple progress bar update specific progress', async () => {
    const data = [
      ...testData,
      {
        name: '#progress2',
        progress: 0,
      },
    ];
    render(<App data={data} />);
    const progressBars = await screen.findAllByText(/0%/);
    expect(progressBars).toHaveLength(2);

    fireEvent.change(screen.getByTestId('select'), { target: { value: '#progress2' } });
    const add25Button = screen.getByRole('button', { name: '+25' });
    fireEvent.click(add25Button);
    const progressBar1 = await screen.findAllByText(/0%/);
    expect(progressBar1).toHaveLength(1);
    const progressBar2 = await screen.findAllByText(/25%/);
    expect(progressBar2).toHaveLength(1);
  });

  test('should update progress bar value when click on button', () => {
    render(<App data={testData} />);
    const add25Button = screen.getByRole('button', { name: '+25' });
    fireEvent.click(add25Button);
    expect(screen.queryByText('25%')).toBeInTheDocument();

    const add10Button = screen.getByRole('button', { name: '+10' });
    fireEvent.click(add10Button);
    expect(screen.queryByText('35%')).toBeInTheDocument();

    const minus10Button = screen.getByRole('button', { name: '-10' });
    fireEvent.click(minus10Button);
    expect(screen.queryByText('25%')).toBeInTheDocument();

    const minus25Button = screen.getByRole('button', { name: '-25' });
    fireEvent.click(minus25Button);
    expect(screen.queryByText('0%')).toBeInTheDocument();
  });

  test('should progress 0 when progress value less than 0', () => {
    render(<App data={testData} />);
    const minus25Button = screen.getByRole('button', { name: '-25' });
    fireEvent.click(minus25Button);
    expect(screen.queryByText('0%')).toBeInTheDocument();
  });
});
