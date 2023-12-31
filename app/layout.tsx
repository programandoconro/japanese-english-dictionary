import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Suspense} from "react";
import Spinner from "./components/spinner/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jissho clone",
  description: "Japanese-English dictionary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

    <Suspense fallback={<Spinner />}>
      {children}

    </Suspense>

    </body>
    </html>
  );
}
