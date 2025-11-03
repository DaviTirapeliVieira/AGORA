import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MainLayout from './main-layout.component';

// Mock the Header component
vi.mock('@/components/organisms/header', () => ({
  Header: () => <div>Mocked Header</div>,
}));

// Mock the Footer component
vi.mock('@/components/organisms/footer', () => ({
  Footer: () => <div>Mocked Footer</div>,
}));

// Mock the Content component
vi.mock('@/components/organisms/content/content.component', () => ({
  default: ({ children }) => <div>Mocked Content {children}</div>,
}));

describe('MainLayout', () => {
  it('renders the header', () => {
    render(<MainLayout>Test Content</MainLayout>);
    expect(screen.getByText('Mocked Header')).toBeInTheDocument();
  });

  it('renders the content with children', () => {
    render(<MainLayout>Test Content</MainLayout>);
    expect(screen.getByText('Mocked Content Test Content')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<MainLayout>Test Content</MainLayout>);
    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
  });

  it('renders the main layout container', () => {
    render(<MainLayout>Test Content</MainLayout>);
    const mainLayoutDiv = screen
      .getByText('Mocked Header')
      .closest('.main-layout');
    expect(mainLayoutDiv).toHaveClass('main-layout');
  });
});
