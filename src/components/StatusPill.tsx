import React from 'react';

interface StatusPillProps {
  status: 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}

export function StatusPill({ status, children }: StatusPillProps) {
  const statusColors = {
    success: 'bg-success-light text-success',
    warning: 'bg-warning-light text-warning',
    error: 'bg-error-light text-error',
    info: 'bg-info-light text-info'
  };

  return (
    <span className={`inline-flex items-center px-3 h-7 rounded-full text-xs ${statusColors[status]}`}>
      {children}
    </span>
  );
}
