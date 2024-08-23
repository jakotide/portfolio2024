"use client";
// import type { Metadata } from "next";
import "./scss/reset.scss";
import { usePathname } from "next/navigation";
import {
  Navigation,
  BlurOverlay,
  ProjectNav,
  MobileNav,
} from "./components/ui";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import {
  LenisSmoothScroll,
  Cursor,
  Preloader,
  PageTransition,
} from "./components/effects/";
import {
  CursorProvider,
  ScrollProvider,
  TransitionContextProvider,
} from "./components/context/";
import { useMediaQuery, useScrollLock } from "./components/hooks/";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/project");
  const isTablet = useMediaQuery("(max-width: 796px)");

  useScrollLock(isLoading, 0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <CursorProvider>
          <ScrollProvider>
            <TransitionContextProvider>
              <AnimatePresence mode="wait">
                <PageTransition />
              </AnimatePresence>
              {isTablet ? "" : <Cursor />}

              {isProjectPage ? (
                <ProjectNav />
              ) : isTablet ? (
                <MobileNav />
              ) : (
                <Navigation />
              )}
              <BlurOverlay />
              <LenisSmoothScroll>{children}</LenisSmoothScroll>
            </TransitionContextProvider>
          </ScrollProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
