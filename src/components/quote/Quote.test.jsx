import React from 'react';
import { render } from '@testing-library/react';
import { Quote } from './Quote';

describe('Quote component Snaparoo', () => {
  it('renders quote area', () => {
    const { asFragment } = render(
      <Quote />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
