import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter component verification', () => {
  test('display zero initial count', () => {
    render(<Counter />);

    const result = screen.getByText(/clicked times: 0/i);

    expect(result).toBeInTheDocument();
  });

  test('display new counter after clic', () => {
    render(<Counter />);

    const button = screen.getByText(/click/i, { selector: 'button' });

    fireEvent.click(button);

    const result = screen.getByText(/clicked times: 1/i);

    expect(result).toBeInTheDocument();
  });
});
