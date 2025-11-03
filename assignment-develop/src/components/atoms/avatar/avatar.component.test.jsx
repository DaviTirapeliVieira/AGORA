import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AvatarComponent from './AvatarComponent'; // adjust the path if needed

describe('AvatarComponent', () => {
  const defaultProps = {
    src: 'https://example.com/avatar.jpg',
    alt: 'User Avatar',
  };

  it('renders with the correct src and alt attributes', () => {
    render(<AvatarComponent {...defaultProps} />);

    const avatar = screen.getByRole('img', { name: /user avatar/i });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', defaultProps.src);
    expect(avatar).toHaveAttribute('alt', defaultProps.alt);
  });

  it('applies the custom className if provided', () => {
    render(
      <AvatarComponent
        {...defaultProps}
        className="custom-avatar-class"
      />
    );

    const avatar = screen.getByRole('img');
    expect(avatar).toHaveClass('custom-avatar-class');
  });

  it('renders without className if none is provided', () => {
    render(<AvatarComponent {...defaultProps} />);

    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
  });
});
