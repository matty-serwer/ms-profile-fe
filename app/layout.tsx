import type { Metadata } from "next";
import { inter, raleway } from "@/app/ui/fonts";
import "./global.css";
import 'devicon/devicon.min.css'
import Header from "@/components/common/header/Header";


export const metadata: Metadata = {
  title: "LTDe Profile: Matthew Serwer",
  description: "A profile page for software developer Matthew Serwer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
