export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const SITE = 'https://multinow-games.com';

// Las páginas en inglés viven bajo /en/; el español va en la raíz.
export function getLangFromUrl(url: URL): Lang {
  const { pathname } = url;
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
}

// Ruta sin prefijo de idioma: /en/servicios/medida/ -> /servicios/medida/
export function stripLang(pathname: string): string {
  if (pathname === '/en') return '/';
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname;
}

// Ruta neutra -> ruta en el idioma pedido: ('/#servicios', 'en') -> '/en/#servicios'
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

export function whatsappLink(message: string): string {
  return `https://wa.me/573155521479?text=${encodeURIComponent(message)}`;
}
