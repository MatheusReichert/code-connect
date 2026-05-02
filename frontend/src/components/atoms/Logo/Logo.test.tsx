import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    render(<Logo />);
    expect(screen.getByText(/code connect/i)).toBeInTheDocument();
  });

  it('renders logo initial', () => {
    render(<Logo />);
    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('applies large variant styles', () => {
    render(<Logo variant="large" />);
    const initial = screen.getByText('C');
    expect(initial).toHaveClass('w-12');
    expect(initial).toHaveClass('h-12');
  });
});
