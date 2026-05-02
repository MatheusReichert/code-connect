import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'social';
  showArrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', showArrow, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-bg-base hover:opacity-90 font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 w-full',
      ghost: 'bg-transparent text-muted hover:text-white border border-transparent hover:border-muted/20 py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2',
      social: 'bg-bg-card text-white hover:bg-bg-card/80 border border-muted/20 py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all w-full',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
