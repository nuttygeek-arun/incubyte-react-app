import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input field on the screen', () => {
  render(<App />);
  const linkElement = screen.getByTestId('input');
  expect(linkElement).toBeInTheDocument();
});
