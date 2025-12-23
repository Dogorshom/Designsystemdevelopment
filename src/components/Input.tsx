import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({ label, error, icon, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-neutral-700">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
            {icon}
          </div>
        )}
        <input
          className={`w-full h-14 px-4 ${icon ? 'pl-12' : ''} bg-neutral-200 rounded-xl border-2 ${
            error ? 'border-error ring-2 ring-error/20' : 'border-transparent focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20'
          } outline-none transition-all ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-error text-sm">{error}</p>
      )}
    </div>
  );
}
