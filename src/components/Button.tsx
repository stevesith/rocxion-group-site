'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-2xl',
  {
    variants: {
      variant: {
        primary: [
          'text-gray-900',
          'hover:text-gray-900',
          'active:text-gray-900',
          'focus:ring-primary-focus focus:ring-offset-background',
          'disabled:bg-primary-disabled disabled:text-text-muted',
          'shadow-sm'
        ].concat([
          'bg-[#28beef]',
          'hover:bg-[#1fa5d9]',
          'active:bg-[#168bb8]'
        ]),
        secondary: [
          'bg-transparent text-white border border-white',
          'hover:bg-white/10 hover:text-white hover:border-white',
          'active:bg-white/20 active:text-white active:border-white',
          'focus:ring-white focus:ring-offset-background',
          'disabled:bg-white/30 disabled:text-white/50 disabled:border-white/50',
          'shadow-lg'
        ],
        accent: [
          'bg-accent text-text-inverse',
          'hover:bg-accent-hover',
          'active:bg-accent-active',
          'focus:ring-accent-focus focus:ring-offset-background',
          'disabled:bg-accent-disabled disabled:text-text-muted',
          'shadow-sm'
        ],
        outline: [
          'border border-primary text-primary bg-transparent',
          'hover:bg-primary hover:text-text-inverse',
          'active:bg-primary-active active:text-text-inverse',
          'focus:ring-primary-focus focus:ring-offset-background',
          'disabled:border-primary-disabled disabled:text-primary-disabled'
        ],
        ghost: [
          'text-primary bg-transparent',
          'hover:bg-primary-focus hover:text-primary-active',
          'active:bg-primary-focus',
          'focus:ring-primary-focus focus:ring-offset-background',
          'disabled:text-primary-disabled'
        ],
        destructive: [
          'bg-error text-text-inverse',
          'hover:bg-error-hover',
          'active:bg-red-700',
          'focus:ring-red-200 focus:ring-offset-background',
          'disabled:bg-red-200 disabled:text-text-muted',
          'shadow-sm'
        ],
        success: [
          'bg-success text-text-inverse',
          'hover:bg-success-hover',
          'active:bg-green-700',
          'focus:ring-green-200 focus:ring-offset-background',
          'disabled:bg-green-200 disabled:text-text-muted',
          'shadow-sm'
        ]
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        default: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl',
        icon: 'p-2'
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      fullWidth: false
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const buttonContent = (
      <>
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    return (
      <motion.div
        whileHover={!isDisabled ? { scale: 1.02 } : {}}
        whileTap={!isDisabled ? { scale: 0.98 } : {}}
        className="inline-block"
      >
        <button
          ref={ref}
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          disabled={isDisabled}
          {...props}
        >
          {buttonContent}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = 'Button';

export default Button;
export { buttonVariants };