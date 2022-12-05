import { render, screen } from '@testing-library/react';
import ContactUs from "./ContactUs"

test('Name Field', () => {
  render(<ContactUs />);
  const linkElement = screen.getByTestId("testid1");
  expect(linkElement).toBeInTheDocument();
});


test('Phone Field', () => {
    render(<ContactUs />);
    const linkElement = screen.getByTestId("testid2");
    expect(linkElement).toBeInTheDocument();
  });

  
test('Concern Field', () => {
    render(<ContactUs />);
    const linkElement = screen.getByTestId("testid3");
    expect(linkElement).toBeInTheDocument();
  });