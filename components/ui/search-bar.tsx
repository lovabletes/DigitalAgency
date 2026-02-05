import { InputHTMLAttributes, ReactNode } from "react";
import { SearchIcon, LocationIcon } from "@/components/icons/icons";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  iconClassName?: string;
  buttonClassName?: string;
  onLocationClick?: () => void;
  onSearchClick?: () => void;
  locationText?: string | ReactNode;
  showLocationIcon?: boolean;
  showHeader?: boolean;
  headerText?: string;
  descriptionText?: string;
}

export function SearchBar({
  placeholder = "Search...",
  className = "",
  iconClassName = "",
  onLocationClick,
  onSearchClick,
  locationText,
  buttonClassName = '',
  showLocationIcon = true,
  ...props
}: Readonly<SearchBarProps>) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center gap-2 w-full">
        <div className="relative flex-1">
          <div
            className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
            style={{ paddingLeft: '12px' }}
          >
            <SearchIcon className={`h-4 w-4 text-gray-400 ${iconClassName}`} />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full h-11 pr-4 text-sm border border-gray-200 rounded-l-md bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
            style={{ paddingLeft: '40px' }}
            {...props}
          />
        </div>

        {showLocationIcon && (
          <button
            type="button"
            onClick={onLocationClick}
            className="h-11 px-3 border border-l-0 border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-r-md flex items-center justify-center transition-colors"
            aria-label="Search by location"
          >
            <LocationIcon className="h-5 w-5 text-gray-500" />
          </button>
        )}

        <button
          type="button"
          onClick={onSearchClick}
          className={`h-11 px-6 rounded-md flex items-center justify-center whitespace-nowrap transition-all
            ${buttonClassName || 'bg-primary text-white hover:bg-primary/90'}`}
        >
          Search
        </button>
      </div>

      {locationText && (
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          {locationText}
        </div>
      )}
    </div>
  );
}
