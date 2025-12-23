import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'icon' | 'fab';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'default', className = '', children, ...props }: ButtonProps) {
  const baseClasses = 'transition-all duration-200 active:scale-98 touch-target flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'gradient-action text-white shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-neutral-300 bg-transparent text-neutral-900 hover:border-neutral-400',
    ghost: 'bg-transparent text-brand-secondary hover:bg-neutral-200'
  };

  const sizeClasses = {
    default: 'h-14 px-6 rounded-xl',
    icon: 'h-12 w-12 rounded-full bg-neutral-100',
    fab: 'h-16 w-16 rounded-full gradient-action text-white shadow-2xl'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
