import { ReactNode } from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description?: ReactNode;
}

interface TimelineDenseProps {
  items: TimelineItem[];
  className?: string;
}

export function TimelineDense({ items, className = '' }: TimelineDenseProps) {
  return (
    <div className={`editorial-timeline ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="editorial-timeline__item">
          <time className="editorial-timeline__date">{item.date}</time>
          <div className="editorial-timeline__content">
            <h3 className="editorial-timeline__title">{item.title}</h3>
            {item.description && (
              <div className="editorial-timeline__description">{item.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
