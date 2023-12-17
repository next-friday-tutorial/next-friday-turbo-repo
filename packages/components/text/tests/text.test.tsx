import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '../src';

describe('Text Component', () => {
  test('renders the text passed as children', () => {
    render(<Text>Hello World</Text>);

    const span = screen.getByText('Hello World');

    expect(span).toBeInTheDocument();
  });
});
