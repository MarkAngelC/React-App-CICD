import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Mark Castro/i);
  expect(nameElement).toBeInTheDocument();
});
