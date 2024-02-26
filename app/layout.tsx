import type { Metadata } from "next";
import { Archivo } from 'next/font/google'
import '@/assets/globals.css'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MintHouse Tennis-court booking system',
  description: 'Diego Tauchert & MintHouse Tennis-court booking system',
  keywords: 'MintHouse, booking system, coding challenge, Next Js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
