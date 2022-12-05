import { render, screen } from '@testing-library/react';
import Search from './Search'

test('Title', () => {
  render(<Search />);
  const linkElement = screen.getByTestId("testid1");
  expect(linkElement).toBeInTheDocument();
});

test('Description', () => {
    render(<Search />);
    const linkElement = screen.getByTestId("testid1");
    expect(linkElement).toBeInTheDocument();
  });

  test('Button', () => {
    render(<Search />);
    const linkElement = screen.getByTestId("testid1");
    expect(linkElement).toBeInTheDocument();
  });