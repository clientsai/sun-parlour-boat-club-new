import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className={`editorial-breadcrumbs ${className}`}>
      <ol className="editorial-breadcrumbs__list">
        {items.map((item, index) => (
          <li key={index} className="editorial-breadcrumbs__item">
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="editorial-breadcrumbs__link">
                {item.label}
              </Link>
            ) : (
              <span className="editorial-breadcrumbs__current" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
