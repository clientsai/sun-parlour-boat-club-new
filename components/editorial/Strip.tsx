import { ReactNode } from 'react';

interface StripProps {
  children: ReactNode;
  className?: string;
  ruled?: boolean;
  id?: string;
}

export function Strip({ children, className = '', ruled = false, id }: StripProps) {
  return (
    <section 
      id={id}
      className={`editorial-strip ${ruled ? 'editorial-strip--ruled' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
