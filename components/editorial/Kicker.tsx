import { ReactNode } from 'react';

interface KickerProps {
  children: ReactNode;
  className?: string;
}

export function Kicker({ children, className = '' }: KickerProps) {
  return (
    <p className={`editorial-kicker ${className}`}>
      {children}
    </p>
  );
}
