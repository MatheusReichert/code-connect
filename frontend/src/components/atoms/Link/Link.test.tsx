import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Link } from './Link';

describe('Link', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Link to="/test">Test Link</Link>
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /test link/i })).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(
      <MemoryRouter>
        <Link to="/test">Test Link</Link>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies standard styles', () => {
    render(
      <MemoryRouter>
        <Link to="/test">Test Link</Link>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).toHaveClass('text-accent');
  });
});
