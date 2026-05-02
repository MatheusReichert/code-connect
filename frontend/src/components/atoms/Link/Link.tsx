import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { cn } from '../../../lib/cn';

export interface LinkProps extends RouterLinkProps {}

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
