import { cn } from '../../../lib/cn';

export interface LogoProps {
  className?: string;
  variant?: 'large' | 'small';
}

export function Logo({ className, variant = 'small' }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn(
        'bg-accent rounded-lg flex items-center justify-center font-bold text-bg-base',
        variant === 'large' ? 'w-12 h-12 text-2xl' : 'w-8 h-8 text-lg'
      )}>
        C
      </div>
      <span className={cn(
        'font-bold text-white tracking-tight',
        variant === 'large' ? 'text-2xl' : 'text-xl'
      )}>
        Code Connect
      </span>
    </div>
  );
}
