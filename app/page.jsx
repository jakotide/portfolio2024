"use client";
import { ReactLenis } from "lenis/react";
import React, { useState, useEffect, useRef } from "react";
import {
  Preloader,
  SelectedWork,
  MoreWork,
  Hero,
  About,
  Skills,
  Contact,
} from "./components";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCircleInView, setIsCircleInView] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2800);

    return () => clearTimeout(timeoutId);
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    // <ReactLenis root>
    <main style={{ overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <SelectedWork isCircleInView={isCircleInView} />
      <MoreWork setIsCircleInView={setIsCircleInView} />
      <About />
      <Skills />
      <Contact />
    </main>
    // </ReactLenis>
  );
};

export default Home;
