'use client';

import { type SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const defaultProps = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
});

export function IconYoutube({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48" fill="currentColor" stroke="none" /></svg>);
}

export function IconGlobe({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>);
}

export function IconPhone({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
}

export function IconSmartphone({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" /></svg>);
}

export function IconVideo({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><polygon points="23 7 16 12 23 17" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>);
}

export function IconSearch({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>);
}

export function IconBarChart({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>);
}

export function IconUsers({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
}

export function IconTarget({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>);
}

export function IconMapPin({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>);
}

export function IconClock({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>);
}

export function IconMail({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>);
}

export function IconInstagram({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>);
}

export function IconTelegram({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>);
}

export function IconStar({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props} fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>);
}

export function IconChevronDown({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><polyline points="6 9 12 15 18 9" /></svg>);
}

export function IconArrowUp({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>);
}

export function IconMenu({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>);
}

export function IconX({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
}

export function IconSun({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>);
}

export function IconMoon({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>);
}

export function IconBuilding({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><rect x="1" y="6" width="22" height="15" rx="2" /><path d="M1 10h22" /><line x1="7" y1="6" x2="7" y2="3" /><line x1="17" y1="6" x2="17" y2="3" /></svg>);
}

export function IconBook({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>);
}

export function IconShoppingBag({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>);
}

export function IconActivity({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>);
}

export function IconArrowRight({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>);
}

export function IconSend({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>);
}

export function IconChat({ size = 24, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="10" r="0.5" fill="currentColor"/><circle cx="12" cy="10" r="0.5" fill="currentColor"/><circle cx="15" cy="10" r="0.5" fill="currentColor"/></svg>;
}

export function IconMegaphone({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M3 11l18-7v18l-18-7v-4z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>);
}

export function IconMessage({ size = 24, ...props }: IconProps) {
  return (<svg {...defaultProps(size)} {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /><circle cx="8.5" cy="11.5" r="0.5" fill="currentColor" /><circle cx="12" cy="11.5" r="0.5" fill="currentColor" /><circle cx="15.5" cy="11.5" r="0.5" fill="currentColor" /></svg>);
}
