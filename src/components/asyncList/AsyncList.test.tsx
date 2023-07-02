import { render, screen } from '@testing-library/react';
import { AsyncList } from './AsyncList';

describe('AsyncList component verification', () => {
  test('01 - sohw food data', async () => {
    render(<AsyncList />);

    const pizza = await screen.findByText(/Pizzas/i);

    expect(pizza).toBeInTheDocument();
  });
});
