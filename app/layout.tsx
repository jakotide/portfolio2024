"use client";
// import type { Metadata } from "next";
// import "./scss/globals.scss";
import "./scss/reset.scss";
import { usePathname } from "next/navigation";
import { Navigation, BlurOverlay, ProjectNav } from "./components/ui";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  LenisSmoothScroll,
  Cursor,
  Preloader,
  PageTransition,
} from "./components/effects/";
import { CursorProvider, ScrollProvider, Tra } from "./components/context/";
// export const metadata: Metadata = {
//   title: "Home | Jakob Tidemand - Frontend developer",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/project");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2800);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <CursorProvider>
          <ScrollProvider>
            <Cursor />
            {isProjectPage ? <ProjectNav /> : <Navigation />}
            <BlurOverlay />
            <LenisSmoothScroll>{children}</LenisSmoothScroll>
          </ScrollProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
