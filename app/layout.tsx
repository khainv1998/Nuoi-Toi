import AOSProvider from "@/components/AOSProvider";
import type { Metadata } from "next";
import { Outfit, Pacifico, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuôi Tôi - Dự Án Minh Bạch Nhất Vũ Trụ",
  description: "Web app xin tiền donate với sao kê realtime, minh bạch 300%",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${outfit.variable} ${spaceMono.variable} ${pacifico.variable} antialiased`}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
