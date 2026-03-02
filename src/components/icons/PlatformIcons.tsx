/**
 * Official platform SVG icons for Google Meet, Microsoft Teams, and Zoom.
 * Based on official brand guidelines. Work in both light and dark themes.
 */

interface IconProps {
  size?: number;
  className?: string;
}

export function GoogleMeetIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 87.5 72" fill="none" className={className}>
      <path d="M49.5 36l8.53-9.15 11.47-7.6v33.5l-11.47-7.6L49.5 36z" fill="#00832d" />
      <path d="M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54H9.46L0 51.5z" fill="#0066da" />
      <path d="M20.5 0L0 20.5l9.46 6H20.5l3-9.46L20.5 0z" fill="#e94235" />
      <path d="M20.5 20.5H0v31h20.5V20.5z" fill="#2684fc" />
      <path d="M73.5 8.25L69.5 19.25 49.5 36l20 16.75 3.5 11.25c3.77 0 6.94-2.97 7.28-6.72l.02-.28V14.5c0-3.59-3.06-6.5-6.8-6.5v.25z" fill="#00ac47" />
      <path d="M49.5 36v15.5H20.5V72h29c3.315 0 6-2.685 6-6V36z" fill="#00832d" />
      <path d="M55.5 0h-35v20.5h29V36l6.5-5.5V6c0-3.315-2.685-6-6-6z" fill="#ffbc00" />
    </svg>
  );
}

export function MicrosoftTeamsIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 2228.833 2073.333" className={className}>
      <path fill="#5059C9" d="M1554.637 777.5h575.713c54.391 0 98.483 44.092 98.483 98.483v524.398c0 199.901-162.051 361.952-361.952 361.952h-1.711c-199.901.028-361.975-161.996-362.004-361.897V828.971c.001-28.427 23.045-51.471 51.471-51.471z" />
      <circle fill="#5059C9" cx="1943.75" cy="440.583" r="233.25" />
      <circle fill="#7B83EB" cx="1218.083" cy="336.917" r="336.917" />
      <path fill="#7B83EB" d="M1667.323 777.5H717.01c-53.743 1.33-96.257 45.931-95.01 99.676v598.105c-7.505 322.519 247.657 590.16 570.167 598.053 322.51-7.893 577.671-275.534 570.167-598.053V877.176c1.245-53.745-41.268-98.346-95.011-99.676z" />
      <path opacity=".1" d="M1244.167 777.5v838.145c-.258 38.435-23.549 72.964-59.09 87.598a91.856 91.856 0 01-35.765 7.257H783.09c-3.57-9.523-6.998-19.048-10-28.571-18.702-56.535-28.263-115.639-28.333-175.239V877.02c-1.246-53.659 41.198-98.19 94.857-99.52h404.553z" />
      <path opacity=".2" d="M1192.167 777.5v890.145c0 19.32-3.715 38.44-10.929 56.33a91.463 91.463 0 01-48.161 48.827c-17.89 7.214-37.01 10.929-56.33 10.929H820.453c-5.952-9.523-11.762-19.048-17.143-28.571-5.381-9.524-9.905-19.048-14.286-28.572-18.702-56.535-28.263-115.639-28.333-175.239V877.02c-1.246-53.659 41.198-98.19 94.857-99.52h336.619z" />
      <path opacity=".2" d="M1192.167 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855H789.024c-18.702-56.535-28.263-115.639-28.333-175.239V877.02c-1.246-53.659 41.198-98.19 94.857-99.52h336.619z" />
      <path opacity=".2" d="M1140.167 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855H789.024c-18.702-56.535-28.263-115.639-28.333-175.239V877.02c-1.246-53.659 41.198-98.19 94.857-99.52h284.619z" />
      <linearGradient id="teams-a" gradientUnits="userSpaceOnUse" x1="198.099" y1="1683.073" x2="942.234" y2="394.261" gradientTransform="matrix(1 0 0 -1 0 2075.333)">
        <stop offset="0" stopColor="#5a62c3" />
        <stop offset=".5" stopColor="#4d55bd" />
        <stop offset="1" stopColor="#3940ab" />
      </linearGradient>
      <path fill="url(#teams-a)" d="M95.01 777.5h950.312c52.473 0 95.01 42.538 95.01 95.01v950.312c0 52.473-42.538 95.01-95.01 95.01H95.01c-52.473 0-95.01-42.538-95.01-95.01V872.51c0-52.472 42.538-95.01 95.01-95.01z" />
      <path fill="#fff" d="M820.211 1100h-163.99V1626.5h-132.39V1100H360.6V987.5h459.611V1100z" />
    </svg>
  );
}

export function ZoomIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" className={className}>
      <rect width="300" height="300" rx="60" fill="#2D8CFF" />
      <path d="M63.75 107.5c0-8.284 6.716-15 15-15h102.5c8.284 0 15 6.716 15 15v60c0 8.284-6.716 15-15 15H78.75c-8.284 0-15-6.716-15-15v-60z" fill="#fff" />
      <path d="M206.25 116.25l40-25v92.5l-40-25v-42.5z" fill="#fff" />
    </svg>
  );
}

/** Row of all three platform icons with names — for integration sections */
export function PlatformLogos({ iconSize = 20, showNames = true }: { iconSize?: number; showNames?: boolean }) {
  const platforms = [
    { icon: <GoogleMeetIcon size={iconSize} />, name: 'Google Meet' },
    { icon: <MicrosoftTeamsIcon size={iconSize} />, name: 'Teams' },
    { icon: <ZoomIcon size={iconSize} />, name: 'Zoom' },
  ];
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {platforms.map((p) => (
        <span key={p.name} className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
          {p.icon}
          {showNames && <span>{p.name}</span>}
        </span>
      ))}
    </div>
  );
}
