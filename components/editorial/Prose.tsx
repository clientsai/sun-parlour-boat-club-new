import { ReactNode } from 'react';

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export function Prose({ children, className = '' }: ProseProps) {
  return (
    <div className={`editorial-prose ${className}`}>
      {children}
    </div>
  );
}
