import { ReactNode } from 'react';

interface CanvasProps {
  children: ReactNode;
  className?: string;
}

export function Canvas({ children, className = '' }: CanvasProps) {
  return (
    <div className={`editorial-canvas ${className}`}>
      {children}
    </div>
  );
}
