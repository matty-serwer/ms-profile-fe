import {Inter, Raleway} from 'next/font/google';

export const inter = Inter({
  subsets: ["latin"] ,
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-raleway'
});

