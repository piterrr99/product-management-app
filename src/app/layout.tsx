import type { Metadata } from "next";
import localFont from "next/font/local";

import { MainHeader } from "../components/MainHeader";
import StoreProvider from "./StoreProvider";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: '%s | ToDo App',
    default: 'ToDo App'
  },
  description: "Web para gestionar tus productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}   
      >
        <MainHeader />
        <StoreProvider>
          {children}
        </StoreProvider>   
      </body>
    </html>
  );
}
