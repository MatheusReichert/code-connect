import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox label="Remember me" />);
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
  });

  it('toggles state when clicked', () => {
    render(<Checkbox label="Toggle" />);
    const checkbox = screen.getByLabelText(/toggle/i) as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('respects defaultChecked prop', () => {
    render(<Checkbox label="Checked" defaultChecked />);
    const checkbox = screen.getByLabelText(/checked/i) as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });
});
