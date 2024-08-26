"use client";
import Head from "next/head";
import "./scss/reset.scss";
import { usePathname } from "next/navigation";
import {
  Navigation,
  BlurOverlay,
  ProjectNav,
  MobileNav,
} from "./components/ui";
import React, { useEffect, useState } from "react";
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
import { projects } from "./components/project/projectData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/project");
  const isTablet = useMediaQuery("(max-width: 768px)");

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

  let metadata = {
    title: "Home | Jakob Tidemand Portfolio",
    description: "Developer portfolio for Jakob Tidemand 2024",
  };

  if (isProjectPage) {
    const projectId = pathname.split("/").pop();
    const project = projects.find((proj) => proj.id === projectId);

    if (project) {
      metadata = {
        title: project.pageTitle,
        description: project.pageDescription,
      };
    }
  }

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
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
