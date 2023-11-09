import { Newsreader } from 'next/font/google';
import { GeistSans, GeistMono } from 'geist/font';

export const fontSerif = Newsreader({
  variable: '--font-newsreader-serif',
  subsets: ['latin'],
  axes: ['opsz'],
  style: 'italic',
});

export const fontSans = GeistSans;
export const fontMono = GeistMono;
