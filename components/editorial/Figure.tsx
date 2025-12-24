import { ReactNode } from 'react';

interface FigureProps {
  children: ReactNode;
  caption?: string;
  className?: string;
}

export function Figure({ children, caption, className = '' }: FigureProps) {
  return (
    <figure className={`editorial-figure ${className}`}>
      {children}
      {caption && (
        <figcaption className="editorial-figure__caption">{caption}</figcaption>
      )}
    </figure>
  );
}
