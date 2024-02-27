import type { Metadata } from "next";
import { Archivo } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from "@/lib/utils"
import AppProvider from '@/providers/AppProvider';

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
    <html lang="en" suppressHydrationWarning className="box-content">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased mx-auto flex justify-center",
          archivo.className
        )}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
