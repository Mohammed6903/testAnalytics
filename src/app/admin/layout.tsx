import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Sidebar } from "@/components/admin/Sidebar";
import siteConfig from "@/lib/config/siteConfig";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="bg-white border-r"> {/* Added fixed width and background */}
            <Sidebar />
          </div>
         
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}