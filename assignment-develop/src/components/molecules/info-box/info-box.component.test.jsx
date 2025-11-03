import { render, screen } from '@testing-library/react';
import InfoBox from './info-box.component';

test('renders InfoBox component', () => {
  render(<InfoBox label="Info Label" info="Some information" />);
  expect(screen.getByText('Info Label')).toBeInTheDocument();
  expect(screen.getByText('Some information')).toBeInTheDocument();
});
