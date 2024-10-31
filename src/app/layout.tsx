import type { Metadata } from "next";
import "./globals.css";




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
