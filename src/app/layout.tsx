import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientProvider from '@/context/ClientProvider';
import Header from "@/components/Header";
import MainSidebar from '@/components/MainSidebar';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TopSMS",
  description: "Test for EUX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <ClientProvider>
          <Header />
          <div className="flex flex-grow overflow-x-hidden mx-2.5 mb-2.5 gap-5">
            <MainSidebar />
            <main className="flex-grow py-5 overflow-x-hidden h-full">
              {children}
            </main>
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
