import { render, screen } from '@testing-library/react';
import App from '..';

test('renders Transactions h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Transactions/i);
  expect(linkElement).toBeInTheDocument();
});
