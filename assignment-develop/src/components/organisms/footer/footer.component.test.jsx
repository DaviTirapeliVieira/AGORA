import { render, screen } from '@testing-library/react';
import Footer from './footer.component';

test('renders Footer component', () => {
  render(<Footer text="© 2025 MyApp. All rights reserved." />);
  expect(
    screen.getByText('© 2025 MyApp. All rights reserved.'),
  ).toBeInTheDocument();
});
