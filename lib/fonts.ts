import localFont from 'next/font/local';

export const interSans = localFont({
  src: './../assets/fonts/InterVariable.woff2',
  variable: '--font-sans',
  weight: '100 900',
});

export const fontSans = interSans;
