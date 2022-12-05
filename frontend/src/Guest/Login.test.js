import { render, screen } from '@testing-library/react';
import Login from "./login"

test('Email Field', () => {
  render(<Login />);
  const linkElement = screen.getByTestId("testid1");
  expect(linkElement).toBeInTheDocument();
});

test('Password Field', () => {
    render(<Login />);
    const linkElement = screen.getByTestId("testid1");
    expect(linkElement).toBeInTheDocument();
  });
  
  