import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import { cn } from '../../../lib/cn';

export type LinkProps = RouterLinkProps;

export function Link({ className, ...props }: LinkProps) {
  return (
    <RouterLink
      className={cn(
        'text-accent hover:underline transition-all font-semibold',
        className
      )}
      {...props}
    />
  );
}
