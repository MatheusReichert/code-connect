import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../../lib/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'social';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-bg-base hover:opacity-90 font-bold py-3 px-6 rounded-lg transition-all',
      ghost: 'bg-transparent text-muted hover:text-white border border-transparent hover:border-muted/20 py-3 px-6 rounded-lg transition-all',
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
      />
    );
  }
);

Button.displayName = 'Button';
