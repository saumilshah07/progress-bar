import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from './index';

describe('<ProgressBar />', () => {
  it('renders progress bar correct label', () => {
    render(<ProgressBar label={'90%'} progress={90} />);
    const label = screen.getByText(/90%/i);
    expect(label).toBeInTheDocument();
  });
});
