import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HomePage from './home-page.component';

// Mock MainLayout
vi.mock('@/components/templates/main-layout/main-layout.component', () => ({
  default: ({ children }) => <div>{children}</div>,
}));

describe('HomePage', () => {
  it('renders the user name', () => {
    render(<HomePage />);
    expect(screen.getByText('Davi Vieira')).toBeInTheDocument();
  });

  it('renders the user email', () => {
    render(<HomePage />);
    expect(screen.getByText('davi.vieira@example.com')).toBeInTheDocument();
  });

  it('renders the user bio', () => {
    render(<HomePage />);
    expect(
      screen.getByText('Desenvolvedor apaixonado por tecnologia, IA e inovação.')
    ).toBeInTheDocument();
  });

  it('renders the user image', () => {
    render(<HomePage />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://i.pravatar.cc/150?img=3');
  });
});
