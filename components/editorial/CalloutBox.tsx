import { ReactNode } from 'react';

interface CalloutBoxProps {
  children: ReactNode;
  tone?: 'info' | 'success' | 'warn' | 'neutral';
  className?: string;
}

export function CalloutBox({ children, tone = 'neutral', className = '' }: CalloutBoxProps) {
  return (
    <aside className={`editorial-callout editorial-callout--${tone} ${className}`}>
      {children}
    </aside>
  );
}
