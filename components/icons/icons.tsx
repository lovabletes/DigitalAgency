import React from "react";
import type { IconProps } from "./IconProps";

// Shared helper to normalize size + common SVG attributes
function SvgIcon({ children, width, height, size, className, color, ...rest
}: React.PropsWithChildren<IconProps & React.SVGProps<SVGSVGElement>>) {
  const w = size ?? width ?? "20";
  const h = size ?? height ?? "20";
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ?? "currentColor"}
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

// Common UI icons
export const SearchIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </SvgIcon>
);

export const DownloadIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </SvgIcon>
);

export const ColumnsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
  </SvgIcon>
);

export const DensityIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </SvgIcon>
);

export const ChevronUpIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </SvgIcon>
);

export const ChevronDownIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </SvgIcon>
);

export const ChevronLeftIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M14 6l-6 6 6 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export const ChevronRightIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M10 6l6 6-6 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export const PlusIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </SvgIcon>
);

export const DeleteIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </SvgIcon>
);

export const EditIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M3 17.25V21h3.75L18.81 8.94l-3.75-3.75L3 17.25Z" strokeWidth="1.8" />
    <path d="M14.06 5.19l3.75 3.75" strokeWidth="1.8" />
  </SvgIcon>
);

export const SaveIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M5 3h11l3 3v15H5V3Z" strokeWidth="1.8" />
    <path d="M15 3v5H7V3" strokeWidth="1.8" />
    <rect x="7" y="14" width="10" height="6" rx="1.5" strokeWidth="1.8" />
  </SvgIcon>
);

export const FilterIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M4 6h16M7 12h10M10 18h4" strokeWidth="1.8" strokeLinecap="round" />
  </SvgIcon>
);

export const RefreshIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M20 12a8 8 0 1 1-2.34-5.66" strokeWidth="1.8" />
    <path d="M20 4v5h-5" strokeWidth="1.8" />
  </SvgIcon>
);

export const EyeIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
  </SvgIcon>
);

export const ShareIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M15 8l-6 3 6 3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="7" r="2" strokeWidth="1.8" />
    <circle cx="18" cy="17" r="2" strokeWidth="1.8" />
    <circle cx="6" cy="12" r="2" strokeWidth="1.8" />
  </SvgIcon>
);

export const DuplicateIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="9" y="9" width="10" height="10" rx="2" strokeWidth="1.8" />
    <rect x="5" y="5" width="10" height="10" rx="2" strokeWidth="1.8" />
  </SvgIcon>
);

export const CheckCircleIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    <path d="M8.5 12.5l2.5 2.5 4.5-5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export const XCircleIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    <path d="M9 9l6 6M15 9l-6 6" strokeWidth="1.8" strokeLinecap="round" />
  </SvgIcon>
);

export const CheckIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M5 13l4 4L19 7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

// Navbar toggles
export const MenuIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1.8" strokeLinecap="round" />
  </SvgIcon>
);

export const CloseIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M6 6l12 12M18 6l-12 12" strokeWidth="1.8" strokeLinecap="round" />
  </SvgIcon>
);

// Group icons
export const CommunityCareerIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M3 7h18v10H7l-4 4V7Z" strokeWidth="1.8" />
    <path d="M12 7v10" strokeWidth="1.2" />
  </SvgIcon>
);

export const TiffinWellbeingIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M5 6h14M4 10h16M6 14h12M8 18h8" strokeWidth="1.8" />
  </SvgIcon>
);

// Sidebar domain icons (CMS)
export const DashboardIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z" strokeWidth="1.8" />
  </SvgIcon>
);

export const BooksIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M4 4h12a2 2 0 0 1 2 2v12" strokeWidth="1.8" />
    <path d="M4 4v14a2 2 0 0 0 2 2h12" strokeWidth="1.8" />
    <path d="M8 6h6" strokeWidth="1.8" />
  </SvgIcon>
);

export const NotesIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M6 3h9l3 3v15H6V3Z" strokeWidth="1.8" />
    <path d="M15 3v3h3" strokeWidth="1.8" />
    <path d="M8 9h8M8 13h8M8 17h6" strokeWidth="1.6" />
  </SvgIcon>
);

export const JobsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="3" y="8" width="18" height="11" rx="2" strokeWidth="1.8" />
    <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" strokeWidth="1.8" />
  </SvgIcon>
);

export const HostelsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M3 20V9l9-6 9 6v11" strokeWidth="1.8" />
    <path d="M9 20v-6h6v6" strokeWidth="1.8" />
  </SvgIcon>
);

export const DealsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M3 12l6 6 12-12" strokeWidth="1.8" />
    <circle cx="7" cy="7" r="2" strokeWidth="1.8" />
  </SvgIcon>
);

export const ExamsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M4 6h16M4 12h12M4 18h8" strokeWidth="1.8" />
  </SvgIcon>
);

export const ResourcesIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    <path d="M12 7v6l4 2" strokeWidth="1.8" />
  </SvgIcon>
);

export const SchemesIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M4 20V8l8-4 8 4v12" strokeWidth="1.8" />
    <path d="M8 12h8M8 16h8" strokeWidth="1.8" />
  </SvgIcon>
);

export const CommunityPostsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M3 7h18v10H7l-4 4V7Z" strokeWidth="1.8" />
  </SvgIcon>
);

export const CareersManageIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = JobsIcon; // same visual as Jobs

export const TiffinIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d=
      "M4 10h16M6 6h12M5 14h14M7 18h10" strokeWidth="1.8" />
  </SvgIcon>
);

export const WellbeingIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 21C7 17 5 14 5 10a7 7 0 0 1 14 0c0 4-2 7-7 11Z" strokeWidth="1.8" />
  </SvgIcon>
);

export const AdsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M3 8h14l4 4-4 4H3V8Z" strokeWidth="1.8" />
  </SvgIcon>
);

export const LeadsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" strokeWidth="1.8" />
    <path d="M3 21a9 9 0 0 1 18 0" strokeWidth="1.8" />
  </SvgIcon>
);

export const ConversionsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M4 4v6h6" strokeWidth="1.8" />
    <path d="M20 20v-6h-6" strokeWidth="1.8" />
    <path d="M4 10l7-7M20 14l-7 7" strokeWidth="1.8" />
  </SvgIcon>
);

export const SettingsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" strokeWidth="1.8" />
    <path d="M19.5 12c0-.46-.05-.9-.14-1.36l2.08-1.62-2-3.46-2.5 1a7.22 7.22 0 0 0-2.36-1.36l-.36-2.64h-4l-.36 2.64a7.22 7.22 0 0 0-2.36 1.36l-2.5-1-2 3.46 2.08 1.62c-.09.46-.14.9-.14 1.36 0 .46.05.9.14 1.36L1.12 15l2 3.46 2.5-1c.7.56 1.5 1 2.36 1.36l.36 2.64h4l.36-2.64c.86-.36 1.66-.8 2.36-1.36l2.5 1 2-3.46-2.08-1.62c.09-.46.14-.9.14-1.36Z" strokeWidth="1.3" />
  </SvgIcon>
);

export const MegaphoneIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="m3 11 18-5v12L3 14v-3z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export const GiftIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="3" y="8" width="18" height="4" rx="1" strokeWidth="1.8" />
    <path d="M12 8v13" strokeWidth="1.8" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" strokeWidth="1.8" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" strokeWidth="1.8" />
  </SvgIcon>
);

// General-purpose future-proof icons
export const AnalyticsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M4 20h16" strokeWidth="1.8" />
    <rect x="6" y="10" width="3" height="6" rx="1" strokeWidth="1.8" />
    <rect x="11" y="7" width="3" height="9" rx="1" strokeWidth="1.8" />
    <rect x="16" y="12" width="3" height="4" rx="1" strokeWidth="1.8" />
  </SvgIcon>
);

export const BellIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" strokeWidth="1.8" />
    <path d="M10 20h4" strokeWidth="1.8" />
  </SvgIcon>
);

export const CalendarIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="1.8" />
    <path d="M8 3v4M16 3v4M3 10h18" strokeWidth="1.8" />
  </SvgIcon>
);

export const ClockIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    <path d="M12 7v5l3 2" strokeWidth="1.8" />
  </SvgIcon>
);

export const UserIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeWidth="1.8" />
    <path d="M4 20a8 8 0 1 1 16 0" strokeWidth="1.8" />
  </SvgIcon>
);

export const UsersIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M16 11a3 3 0 1 0-6 0" strokeWidth="1.8" />
    <path d="M3 20a7 7 0 0 1 14 0" strokeWidth="1.8" />
    <path d="M17 7a3 3 0 1 1 0 6" strokeWidth="1.8" />
    <path d="M21 20a5 5 0 0 0-7-4" strokeWidth="1.8" />
  </SvgIcon>
);

export const TagIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M20 13l-7 7-9-9V4h7l9 9Z" strokeWidth="1.8" />
    <circle cx="7.5" cy="7.5" r="1.5" strokeWidth="1.8" />
  </SvgIcon>
);

export const UploadIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 17V7" strokeWidth="1.8" />
    <path d="M7 12l5-5 5 5" strokeWidth="1.8" />
    <path d="M5 21h14" strokeWidth="1.8" />
  </SvgIcon>
);

export const ImportIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 3v12" strokeWidth="1.8" />
    <path d="M7 8l5 5 5-5" strokeWidth="1.8" />
  </SvgIcon>
);

export const ExportIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 21V9" strokeWidth="1.8" />
    <path d="M17 14l-5-5-5 5" strokeWidth="1.8" />
  </SvgIcon>
);

export const PrintIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="6" y="3" width="12" height="6" rx="1.5" strokeWidth="1.8" />
    <rect x="6" y="13" width="12" height="8" rx="1.5" strokeWidth="1.8" />
    <path d="M6 10h12" strokeWidth="1.8" />
  </SvgIcon>
);

export const LinkIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 1 1 7 7l-1 1" strokeWidth="1.8" />
    <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 1 1-7-7l1-1" strokeWidth="1.8" />
  </SvgIcon>
);

export const ExternalLinkIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M14 3h7v7" strokeWidth="1.8" />
    <path d="M10 14L21 3" strokeWidth="1.8" />
    <path d="M21 14v7H3V3h7" strokeWidth="1.8" />
  </SvgIcon>
);

export const InfoIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    <path d="M12 10v6" strokeWidth="1.8" />
    <circle cx="12" cy="7" r="1" />
  </SvgIcon>
);

export const WarningIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 4l9 16H3l9-16Z" strokeWidth="1.8" />
    <path d="M12 10v4" strokeWidth="1.8" />
    <circle cx="12" cy="17" r="1" />
  </SvgIcon>
);

export const ErrorIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    <path d="M9 9l6 6M15 9l-6 6" strokeWidth="1.8" />
  </SvgIcon>
);

export const HomeIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M3 12l9-7 9 7" strokeWidth="1.8" />
    <path d="M5 10v10h14V10" strokeWidth="1.8" />
  </SvgIcon>
);

export const EyeOffIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M3 3l18 18" strokeWidth="1.8" />
    <path d="M2 12s4-6 10-6a9.7 9.7 0 0 1 5 1.4" strokeWidth="1.8" />
    <path d="M22 12s-4 6-10 6a9.7 9.7 0 0 1-5-1.4" strokeWidth="1.8" />
  </SvgIcon>
);

export const StarIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 3l3.1 6.3 6.9 1-5 4.8L18.2 22 12 18.7 5.8 22l1.2-6.9-5-4.8 6.9-1L12 3Z" strokeWidth="1.8" />
  </SvgIcon>
);

export const HeartIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 21s-7-4.4-9-8.2C1.5 10 3 6.5 6.7 6.5a4.7 4.7 0 0 1 5.3 3 4.7 4.7 0 0 1 5.3-3C20.9 6.5 22.5 10 21 12.8 19 16.6 12 21 12 21Z" strokeWidth="1.8" />
  </SvgIcon>
);

export const LocationIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M12 22s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12Z" strokeWidth="1.8" />
    <circle cx="12" cy="10" r="2.5" strokeWidth="1.8" />
  </SvgIcon>
);

export const PhoneIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M6.5 3h3L11 7l-2 1a12 12 0 0 0 6 6l1-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4Z" strokeWidth="1.8" />
  </SvgIcon>
);

export const MailIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
    <path d="M3 7l9 6 9-6" strokeWidth="1.8" />
  </SvgIcon>
);

export const AttachmentIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M8 12l7-7a4 4 0 1 1 6 6l-9 9a6 6 0 1 1-8.5-8.5l9-9" strokeWidth="1.8" />
  </SvgIcon>
);

export const LockIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="5" y="10" width="14" height="10" rx="2" strokeWidth="1.8" />
    <path d="M8 10V8a4 4 0 1 1 8 0v2" strokeWidth="1.8" />
  </SvgIcon>
);

export const UnlockIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="5" y="10" width="14" height="10" rx="2" strokeWidth="1.8" />
    <path d="M16 10V8a4 4 0 0 0-7.5-2" strokeWidth="1.8" />
  </SvgIcon>
);

export const UploadCloudIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M16 16l-4-4-4 4" strokeWidth="1.8" />
    <path d="M12 12v8" strokeWidth="1.8" />
    <path d="M20 16a4 4 0 0 0-3-6 6 6 0 0 0-11 .5A4.5 4.5 0 0 0 6 21h10" strokeWidth="1.8" />
  </SvgIcon>
);

export const CloudIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M20 16a4 4 0 0 0-3-6 6 6 0 0 0-11 .5A4.5 4.5 0 0 0 6 21h10" strokeWidth="1.8" />
  </SvgIcon>
);

export const SortIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M7 6h10M9 12h6M11 18h2" strokeWidth="1.8" strokeLinecap="round" />
  </SvgIcon>
);

// Brand icons
export const XIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export const GithubIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.79 1.05a9.3 9.3 0 0 1 5.08 0c1.94-1.33 2.79-1.05 2.79-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.96-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor" />
  </SvgIcon>
);

export const GoogleIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21.8 10.5h-9.3v3.6h5.3c-.5 2.5-2.8 4.4-5.3 4.4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.6 0 3 .6 4.1 1.6l2.9-2.9C16.3 2.7 14.2 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-.7-.1-1.3-.2-2z" />
  </SvgIcon>
);

export const FacebookIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </SvgIcon>
);

export const AppleIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.7 8.5c-.2-2.5-1.1-4.5-2.6-5.8-1.3-1.1-2.9-1.7-4.5-1.7h-.1c-.4 0-.8.1-1.2.2-.3.1-.6.2-.9.3-.3.1-.6.2-.9.2-.4 0-.8-.1-1.2-.2-.4-.1-.8-.2-1.2-.2h-.1c-1.6 0-3.2.6-4.4 1.7C.9 5.3 0 7.8 0 10.6c0 2.1.4 4 1.3 5.6.9 1.6 2.1 2.8 3.6 3.6 1.2.6 2.4.9 3.7.9.4 0 .8-.1 1.2-.2.4-.1.8-.2 1.2-.2.4 0 .8.1 1.2.2.4.1.8.2 1.2.2 1.3 0 2.6-.3 3.7-.9 1.5-.8 2.7-2 3.6-3.6.9-1.6 1.3-3.5 1.3-5.6 0-.4 0-.8-.1-1.2-.1-.4-.1-.8-.2-1.2zM12 5.5c.5 0 1.1.2 1.6.5.5.3.9.8 1.1 1.4.2.6.2 1.2 0 1.8-.2.6-.6 1.1-1.1 1.4-.5.3-1.1.5-1.6.5s-1.1-.2-1.6-.5c-.5-.3-.9-.8-1.1-1.4-.2-.6-.2-1.2 0-1.8.2-.6.6-1.1 1.1-1.4.5-.3 1.1-.5 1.6-.5z" />
  </SvgIcon>
);

// Requested domain icons
export const AdmissionsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M4 7h16v10H4z" strokeWidth="1.8" />
    <path d="M4 7l8 5 8-5" strokeWidth="1.8" />
  </SvgIcon>
);

export const DepartmentsIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="3" y="4" width="6" height="16" rx="1.5" strokeWidth="1.8" />
    <rect x="11" y="4" width="10" height="6" rx="1.5" strokeWidth="1.8" />
    <rect x="11" y="12" width="10" height="8" rx="1.5" strokeWidth="1.8" />
  </SvgIcon>
);

export const FinanceIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    <path d="M8.5 10.5c.6-1.3 2-2 3.5-2 1.9 0 3.5 1 3.5 2.5 0 1.8-1.7 2.2-3.5 2.5s-3.5.7-3.5 2.5c0 1.5 1.6 2.5 3.5 2.5 1.5 0 2.9-.7 3.5-2" strokeWidth="1.8" />
    <path d="M12 7v10" strokeWidth="1.8" />
  </SvgIcon>
);

export const TasksIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.8" />
    <path d="M7 9h6M7 13h10M7 17h8" strokeWidth="1.8" strokeLinecap="round" />
  </SvgIcon>
);

export const CalendarRangeIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="1.8" />
    <path d="M8 3v4M16 3v4M3 10h18" strokeWidth="1.8" />
    <rect x="6" y="12" width="6" height="6" rx="1" strokeWidth="1.8" />
    <rect x="14" y="14" width="4" height="4" rx="1" strokeWidth="1.8" />
  </SvgIcon>
);

export const NotificationDotIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
    <circle cx="16.5" cy="7.5" r="3" fill="currentColor" />
  </SvgIcon>
);

export const FileTextIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="1.8" />
    <path d="M14 2v6h6" strokeWidth="1.8" />
    <path d="M16 13H8" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16 17H8" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 9H8" strokeWidth="1.8" strokeLinecap="round" />
  </SvgIcon>
);

export const HashIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path d="M4 9h16" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4 15h16" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 3L8 21" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16 3l-2 18" strokeWidth="1.8" strokeLinecap="round" />
  </SvgIcon>
);


export const MoreHorizontalIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="1" strokeWidth="2" />
    <circle cx="19" cy="12" r="1" strokeWidth="2" />
    <circle cx="5" cy="12" r="1" strokeWidth="2" />
  </SvgIcon>
);

export const MinusIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
  </SvgIcon>
);

export const CircleIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
  </SvgIcon>
);

export const GripVerticalIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <circle cx="9" cy="12" r="1" />
    <circle cx="9" cy="5" r="1" />
    <circle cx="9" cy="19" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="15" cy="5" r="1" />
    <circle cx="15" cy="19" r="1" />
  </SvgIcon>
);

export const PanelLeftIcon: React.FC<IconProps & React.SVGProps<SVGSVGElement>> = (p) => (
  <SvgIcon {...p}>
    <rect width="18" height="18" x="3" y="3" rx="2" strokeWidth="1.8" />
    <path d="M9 3v18" strokeWidth="1.8" />
  </SvgIcon>
);

export const Icons = {
  // Common
  SearchIcon,
  DownloadIcon,
  ColumnsIcon,
  DensityIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
  FilterIcon,
  RefreshIcon,
  EyeIcon,
  ShareIcon,
  DuplicateIcon,
  CheckCircleIcon,
  XCircleIcon,
  CheckIcon,
  // Navbar toggles
  MenuIcon,
  CloseIcon,
  // General-purpose
  AnalyticsIcon,
  BellIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  UsersIcon,
  TagIcon,
  UploadIcon,
  ImportIcon,
  ExportIcon,
  PrintIcon,
  LinkIcon,
  ExternalLinkIcon,
  InfoIcon,
  WarningIcon,
  ErrorIcon,
  HomeIcon,
  EyeOffIcon,
  StarIcon,
  HeartIcon,
  LocationIcon,
  PhoneIcon,
  MailIcon,
  AttachmentIcon,
  LockIcon,
  UnlockIcon,
  UploadCloudIcon,
  CloudIcon,
  SortIcon,
  // Brands
  XIcon,
  GithubIcon,
  GoogleIcon,
  FacebookIcon,
  // Requested domain
  AdmissionsIcon,
  DepartmentsIcon,
  FinanceIcon,
  TasksIcon,
  CalendarRangeIcon,
  NotificationDotIcon,
  // Sidebar domain
  DashboardIcon,
  BooksIcon,
  NotesIcon,
  JobsIcon,
  HostelsIcon,
  DealsIcon,
  ExamsIcon,
  ResourcesIcon,
  SchemesIcon,
  CommunityPostsIcon,
  CommunityCareerIcon,
  CareersManageIcon,
  TiffinIcon,
  WellbeingIcon,
  TiffinWellbeingIcon,
  AdsIcon,
  LeadsIcon,
  ConversionsIcon,
  SettingsIcon,
  MegaphoneIcon,
  GiftIcon,
  FileTextIcon,
  HashIcon,
  MoreHorizontalIcon,
  MinusIcon,
  CircleIcon,
  GripVerticalIcon,
  PanelLeftIcon,
};



export type { IconProps };
