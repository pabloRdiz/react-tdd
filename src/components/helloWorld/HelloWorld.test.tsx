import { HelloWorld } from './HelloWorld';
import { render, screen } from '@testing-library/react';

describe('HelloWorld component verification', () => {
  test('01 - render hello world', () => {
    render(<HelloWorld />);

    const title = screen.getByText(/hello world/i);

    expect(title).toBeInTheDocument();
  });
});
