import type { Metadata } from "next";
import localFont from "next/font/local"
import { Toaster} from 'sonner';
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
        className={`overflow-x-hidden relative antialiased min-h-screen ${poppins.className} `}
      >
        {children}
        <Toaster richColors position="top-center"
        
          toastOptions={{
            style: {  borderRadius: '1px ' },
            classNames: {
              title: 'text-[16px]', 
              description: 'text-[16px]',
            },
          }}
        />
      </body>
    </html>
  );
}
