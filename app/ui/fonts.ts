import {Inter, Raleway, Grey_Qo } from 'next/font/google';

export const inter = Inter({
  subsets: ["latin"] ,
  display: 'swap',
  variable: '--font-inter',
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-raleway'
});

export const greyQo = Grey_Qo({
  subsets: ["latin"],
  display: 'swap',
  weight: '400',
  variable: '--font-grey-qo',
});
