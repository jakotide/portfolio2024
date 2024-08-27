"use client";
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
import MetadataProvider from "./meta/metaprovider";
import { projects } from "@/app/components/project/projectData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/project");
  const isReturnedHomePage = pathname.startsWith("/#works");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const [metadata, setMetadata] = useState({
    title: "Jakob Tidemand | Frontend Developer",
    description: "Developer portfolio for Jakob Tidemand 2024",
  });

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

  useEffect(() => {
    const projectId = pathname.split("/").pop();
    const project = projectId
      ? projects.find((proj) => proj.id === projectId)
      : null;

    if (project) {
      setMetadata({
        title: project?.pageTitle || "Jakob Tidemand Portfolio",
        description:
          project?.pageDescription ||
          "Developer portfolio for Jakob Tidemand 2024",
      });
    }
  }, [pathname]);

  useEffect(() => {
    const updateMetadata = () => {
      if (
        window.location.pathname === "/" &&
        window.location.hash === "#works"
      ) {
        setMetadata({
          title: "Jakob Tidemand | Frontend Developer",
          description: "Developer portfolio for Jakob Tidemand 2024",
        });
      } else if (window.location.pathname === "/" && !window.location.hash) {
        setMetadata({
          title: "Jakob Tidemand | Frontend Developer",
          description: "Developer portfolio for Jakob Tidemand 2024",
        });
      }
    };

    updateMetadata();

    window.addEventListener("hashchange", updateMetadata);

    return () => {
      window.removeEventListener("hashchange", updateMetadata);
    };
  }, [pathname]);

  return (
    <html lang="en">
      <MetadataProvider
        seoTitle={metadata.title}
        seoDescription={metadata.description}
      />
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
