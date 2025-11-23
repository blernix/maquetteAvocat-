import { cn } from '@/lib/utils/cn'
import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode
  error?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const checkboxId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : 'checkbox')

    return (
      <div className="w-full">
        <div className="flex items-start">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              'mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 text-primary transition-colors duration-200',
              'focus:ring-2 focus:ring-primary focus:ring-opacity-20',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-red-500',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${checkboxId}-error` : undefined}
            {...props}
          />
          {label && (
            <label
              htmlFor={checkboxId}
              className="ml-3 cursor-pointer text-sm text-gray-700"
            >
              {label}
              {props.required && <span className="ml-1 text-red-600" aria-label="requis">*</span>}
            </label>
          )}
        </div>
        {error && (
          <p id={`${checkboxId}-error`} className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
