import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
})
