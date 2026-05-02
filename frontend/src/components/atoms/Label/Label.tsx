import { LabelHTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn('text-white font-semibold text-sm mb-2 block', className)}
      {...props}
    />
  );
}
