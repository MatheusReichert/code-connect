import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SignupPage } from './SignupPage';

describe('SignupPage', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/crie sua conta no code connect/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
    expect(screen.getByText(/já tem conta/i)).toBeInTheDocument();
  });
});
