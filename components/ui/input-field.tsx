import { InputFieldProps } from '@/types/auth-form';
import Link from 'next/link';

export default function InputField({
  label,
  actionLabel,
  actionLabelHref = '',
  error,
  className,
  type = 'text',
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <label htmlFor={props.name}>{label}</label>
        {actionLabel && (
          <Link href={actionLabelHref} className="text-primary-200">
            {actionLabel}
          </Link>
        )}
      </div>
      <input
        id={props.name}
        {...props}
        type={type}
        className={`bg-background rounded-lg p-3 ${className}`}
      />
      {error && <span className="text-tertiary-500">{error}</span>}
    </div>
  );
}
