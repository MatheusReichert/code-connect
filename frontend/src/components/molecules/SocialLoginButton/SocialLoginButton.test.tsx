import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SocialLoginButton } from './SocialLoginButton';

describe('SocialLoginButton', () => {
  it('renders correctly for github', () => {
    render(<SocialLoginButton provider="github" />);
    expect(screen.getByText(/github/i)).toBeInTheDocument();
  });

  it('renders correctly for gmail', () => {
    render(<SocialLoginButton provider="gmail" />);
    expect(screen.getByText(/google/i)).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<SocialLoginButton provider="github" onClick={handleClick} />);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
