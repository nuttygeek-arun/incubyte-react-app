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

test('should render sum of provided input', () => {
  render(<App />);
  // getting input element
  const inputWrapper = screen.getByTestId("input");
  const inputElement = inputWrapper.querySelector("input");
  // providing value to input element
  fireEvent.change(inputElement, { target: { value: "1,2,3" } });
  // getting calculate button
  const calculateButton = screen.getByTestId('calculate');
  // triggering click on calculate button
  fireEvent.click(calculateButton);
  const outputValue = screen.getByTestId('output');
  expect(outputValue.innerHTML).toBe('Sum is: 6')
});
