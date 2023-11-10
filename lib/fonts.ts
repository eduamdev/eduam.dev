import { GeistSans } from 'geist/font';
import localFont from 'next/font/local';

export const fontSerif = localFont({
  src: '../app/styles/fonts/Newsreader-Italic-VariableFont_opsz,wght.ttf',
  variable: '--font-newsreader-serif',
  display: 'swap',
  style: 'italic',
  fallback: [
    'ui-serif',
    'Georgia',
    'Cambria',
    'Times New Roman',
    'Times',
    'serif',
  ],
  adjustFontFallback: 'Times New Roman',
});

export const fontSans = GeistSans;
