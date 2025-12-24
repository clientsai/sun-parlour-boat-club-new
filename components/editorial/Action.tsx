import Link from 'next/link';
import { ReactNode } from 'react';

interface ActionProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
  external?: boolean;
}

export function Action({ href, children, variant = 'primary', className = '', external = false }: ActionProps) {
  const baseClass = `editorial-action editorial-action--${variant} ${className}`;
  
  if (external) {
    return (
      <a 
        href={href} 
        className={baseClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link href={href} className={baseClass}>
      {children}
    </Link>
  );
}
