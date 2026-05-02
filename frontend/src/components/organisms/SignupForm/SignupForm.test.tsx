import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SignupForm } from './SignupForm';

describe('SignupForm', () => {
  it('calls onSubmit when passwords match', () => {
    const handleSubmit = vi.fn();
    render(<SignupForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'User' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText(/^senha/i), { target: { value: 'pass' } });
    fireEvent.change(screen.getByLabelText(/confirmar senha/i), { target: { value: 'pass' } });
    
    fireEvent.submit(screen.getByRole('button', { name: /cadastrar/i }).closest('form')!);

    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'User',
      email: 'test@test.com',
      password: 'pass',
    });
  });

  it('shows error and does not call onSubmit when passwords mismatch', async () => {
    const handleSubmit = vi.fn();
    render(<SignupForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/^senha/i), { target: { value: 'pass1' } });
    fireEvent.change(screen.getByLabelText(/confirmar senha/i), { target: { value: 'pass2' } });
    
    fireEvent.submit(screen.getByRole('button', { name: /cadastrar/i }).closest('form')!);

    await waitFor(() => {
      expect(screen.getByText(/as senhas não conferem/i)).toBeInTheDocument();
    });
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
