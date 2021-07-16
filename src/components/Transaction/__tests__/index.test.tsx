import { render, screen } from '@testing-library/react';
import TransactionItem from '..';
import transaction from './mocks/transaction.json';

test('renders Transactions h1', () => {
  // @ts-ignore
  render(<TransactionItem transaction={transaction} />);

  const linkElement = screen.getByText(/Wednesday/i);
  expect(linkElement).toBeInTheDocument();
});
