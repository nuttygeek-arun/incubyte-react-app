import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders input field on the screen', () => {
  render(<App />);
  const inputElement = screen.getByTestId('input');
  expect(inputElement).toBeInTheDocument();
});

test('renders calculate on the screen', () => {
  render(<App />);
  const calculateButton = screen.getByTestId('calculate');
  expect(calculateButton).toBeInTheDocument();
});
