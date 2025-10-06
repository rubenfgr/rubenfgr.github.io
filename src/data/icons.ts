// Tipos para los iconos SVG
export type IconName =
  | 'code'
  | 'design'
  | 'iot'
  | 'layers'
  | 'github'
  | 'linkedin'
  | 'facebook'
  | 'email'
  | 'phone'
  | 'location'
  | 'arrow-right'
  | 'arrow-down'
  | 'external-link'
  | 'menu'
  | 'close'
  | 'sun'
  | 'moon';

export interface Icon {
  name: IconName;
  svg: string;
  viewBox?: string;
}

// Catálogo de iconos SVG del portfolio
export const icons: Record<IconName, Icon> = {
  code: {
    name: 'code',
    svg: `<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,
    viewBox: '0 0 24 24',
  },
  design: {
    name: 'design',
    svg: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>`,
    viewBox: '0 0 24 24',
  },
  iot: {
    name: 'iot',
    svg: `<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>`,
    viewBox: '0 0 24 24',
  },
  layers: {
    name: 'layers',
    svg: `<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>`,
    viewBox: '0 0 24 24',
  },
  github: {
    name: 'github',
    svg: `<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />`,
    viewBox: '0 0 24 24',
  },
  linkedin: {
    name: 'linkedin',
    svg: `<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />`,
    viewBox: '0 0 24 24',
  },
  facebook: {
    name: 'facebook',
    svg: `<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />`,
    viewBox: '0 0 24 24',
  },
  email: {
    name: 'email',
    svg: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>`,
    viewBox: '0 0 24 24',
  },
  phone: {
    name: 'phone',
    svg: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>`,
    viewBox: '0 0 24 24',
  },
  location: {
    name: 'location',
    svg: `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>`,
    viewBox: '0 0 24 24',
  },
  'arrow-right': {
    name: 'arrow-right',
    svg: `<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>`,
    viewBox: '0 0 24 24',
  },
  'arrow-down': {
    name: 'arrow-down',
    svg: `<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>`,
    viewBox: '0 0 24 24',
  },
  'external-link': {
    name: 'external-link',
    svg: `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>`,
    viewBox: '0 0 24 24',
  },
  menu: {
    name: 'menu',
    svg: `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`,
    viewBox: '0 0 24 24',
  },
  close: {
    name: 'close',
    svg: `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,
    viewBox: '0 0 24 24',
  },
  sun: {
    name: 'sun',
    svg: `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`,
    viewBox: '0 0 24 24',
  },
  moon: {
    name: 'moon',
    svg: `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`,
    viewBox: '0 0 24 24',
  },
};

// Helper para obtener un icono
export function getIcon(name: IconName): Icon | undefined {
  return icons[name];
}

// Helper para renderizar un icono como string HTML
export function renderIcon(
  name: IconName,
  options?: {
    width?: number;
    height?: number;
    className?: string;
    stroke?: string;
    fill?: string;
    strokeWidth?: number;
  }
): string {
  const icon = getIcon(name);
  if (!icon) return '';

  const {
    width = 24,
    height = 24,
    className = '',
    stroke = 'currentColor',
    fill = 'none',
    strokeWidth = 2,
  } = options || {};

  return `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="${icon.viewBox || '0 0 24 24'}"
    fill="${fill}"
    stroke="${stroke}"
    stroke-width="${strokeWidth}"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="${className}"
  >${icon.svg}</svg>`;
}
