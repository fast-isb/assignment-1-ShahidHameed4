import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './navbar/Navbar'

test('renderTask01', () => {
  render(<App />);
  const linkElement = screen.getByTestId('testHeader');
  expect(linkElement).toBeInTheDocument();
});
test('renderTask02', () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId('testHeader');
  expect(linkElement).toHaveTextContent(/Profile/);
});
test('renderTask03', () => {
  render(<App />);
  const linkElement = screen.getByTestId('testHeader');
  expect(linkElement).toHaveTextContent();
});