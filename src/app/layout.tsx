import type { Metadata } from "next";
import "./globals.css";
import {Poppins,DM_Serif_Text} from 'next/font/google'


export const metadata: Metadata = {
  title: "Pranjal Jain - Portfolio",
  description: "Pranjal Jain Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
