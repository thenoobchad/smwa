import type { Metadata } from "next";
import localFont from "next/font/local"

import "./globals.css";


const poppins = localFont({
	src: "../public/fonts/Poppins-Medium.ttf",
	variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Excelgrid Foundation School",
  description: "Center for learning and excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden relative antialiased min-h-screen ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
