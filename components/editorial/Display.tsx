import { ReactNode } from 'react';

interface DisplayProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function Display({ children, as: Component = 'h1', className = '' }: DisplayProps) {
  return (
    <Component className={`editorial-display ${className}`}>
      {children}
    </Component>
  );
}
