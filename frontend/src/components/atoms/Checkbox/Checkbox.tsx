import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
      <div className={cn('flex items-center gap-2', className)}>
        <input
          id={id}
          type="checkbox"
          ref={ref}
          className="w-4 h-4 rounded bg-bg-card border-muted/20 text-accent focus:ring-accent accent-accent transition-all cursor-pointer"
          {...props}
        />
        {label && (
          <label htmlFor={id} className="text-muted text-sm cursor-pointer select-none">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
