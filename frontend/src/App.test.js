import { render, screen } from '@testing-library/react';
import App from './App';

test('rendering test', () => {
  render(<App />);
  const linkElement = screen.getByText("Hello world !");
  expect(linkElement).toBeInTheDocument();
});


