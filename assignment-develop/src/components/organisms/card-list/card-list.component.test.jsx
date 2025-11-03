import { render, screen } from '@testing-library/react';
import CardList from './card-list.component';

const items = [
  { label: 'Label 1', info: 'Info 1' },
  { label: 'Label 2', info: 'Info 2' },
];

test('renders CardList component', () => {
  render(<CardList items={items} />);
  expect(screen.getByText('Label 1')).toBeInTheDocument();
  expect(screen.getByText('Info 1')).toBeInTheDocument();
  expect(screen.getByText('Label 2')).toBeInTheDocument();
  expect(screen.getByText('Info 2')).toBeInTheDocument();
});
