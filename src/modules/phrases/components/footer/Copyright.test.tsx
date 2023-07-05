import React from 'react';
import { render } from '@testing-library/react';
import Copyright from './Copyright';

describe('Copyright', () => {
  it('renders the copyright text', () => {
    const { getByText } = render(<Copyright />);
    expect(getByText('InterBanking')).toBeDefined();
  });
});