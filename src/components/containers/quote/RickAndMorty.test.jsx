import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RickAndMorty } from './RickAndMorty';

describe('RickAndMorty container', () => {
  it('clicks load button, checks character rendering', async () => {
    render(<RickAndMorty />);

    const button = screen.getByTestId('button');
    const h2 = screen.getByTestId('h2');

    fireEvent.click(button);
    expect(h2.innerHTML).not.toBeEmptyDOMElement;
  });
});
