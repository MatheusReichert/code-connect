import { Input } from '../../atoms/Input/Input';
import type { InputProps } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { cn } from '../../../lib/cn';

interface FormFieldProps extends InputProps {
  label: string;
  errorMessage?: string;
}

export function FormField({ label, errorMessage, className, ...props }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col w-full', className)}>
      <Label htmlFor={props.id}>{label}</Label>
      <Input error={!!errorMessage} {...props} />
      {errorMessage && (
        <span className="text-red-500 text-xs mt-1 font-medium">{errorMessage}</span>
      )}
    </div>
  );
}
