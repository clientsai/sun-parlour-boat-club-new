import { ReactNode } from 'react';

interface FactListProps {
  items: Array<{ term: string; description: ReactNode }>;
  className?: string;
}

export function FactList({ items, className = '' }: FactListProps) {
  return (
    <dl className={`editorial-fact-list ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="editorial-fact-list__item">
          <dt className="editorial-fact-list__term">{item.term}</dt>
          <dd className="editorial-fact-list__description">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
