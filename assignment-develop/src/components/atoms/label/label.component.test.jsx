import { render, screen } from '@testing-library/react';
import Label from './label.component';

test('renders Label component', () => {
  render(<Label text="Label Text" />);
  expect(screen.getByText('Label Text')).toBeInTheDocument();
});
