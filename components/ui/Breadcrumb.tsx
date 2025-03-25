import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm md:text-base text-white/60 max-w-full overflow-x-auto whitespace-nowrap py-2 px-1">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2 min-w-0">
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-white transition-colors truncate max-w-[150px] sm:max-w-[200px] md:max-w-none"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white truncate max-w-[150px] sm:max-w-[200px] md:max-w-none">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className="text-xs md:text-sm opacity-40 flex-shrink-0" 
            />
          )}
        </div>
      ))}
    </nav>
  );
} 