import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

import BootstrapClient from "@/config/bootstrap-client";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dinezy | One stop Solution for Managing Restaurant",
  description: "Dinezy - One stop solution for managing restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
