import React from 'react';
import { render } from '@testing-library/react';
import { Load } from './Load';

describe('Load component snappy', () => {
  it('renders LOAD button', () => {
    const { asFragment } = render(
      <Load />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
