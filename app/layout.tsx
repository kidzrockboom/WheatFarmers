import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wheat Farmers Nigeria",
  description: "wheat farmers association nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
