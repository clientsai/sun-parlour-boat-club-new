import { ReactNode } from 'react';

interface DeckProps {
  children: ReactNode;
  className?: string;
}

export function Deck({ children, className = '' }: DeckProps) {
  return (
    <p className={`editorial-deck ${className}`}>
      {children}
    </p>
  );
}
