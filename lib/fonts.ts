import { GeistSans } from 'geist/font/sans';
import localFont from 'next/font/local';

export const fontSans = GeistSans;
export const fontDisplay = localFont({
  src: '../app/styles/fonts/Satoshi-Variable.ttf',
  variable: '--font-display',
  display: 'swap',
});
