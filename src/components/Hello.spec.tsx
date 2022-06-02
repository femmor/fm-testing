import { render, screen } from '@testing-library/react';
import Hello from './Hello';

it("should render 'Hello World'", () => {
  render(<Hello />);
  const helloElem = screen.getByText(/hello world/i);
  expect(helloElem).toBeInTheDocument();
});
