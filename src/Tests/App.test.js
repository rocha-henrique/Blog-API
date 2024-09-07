import { render, screen } from '@testing-library/react';
import App from '../App';

test('Verifica se existe o Hello World', () => {
  render(<App />);
  const linkElement = screen.getByTestId('Hello');
  expect(linkElement).toBeInTheDocument();
});
