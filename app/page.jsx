"use client";
import { ReactLenis } from "lenis/react";
import React, { useState, useEffect } from "react";
import {
  Preloader,
  SelectedWork,
  MoreWork,
  Hero,
  About,
  Skills,
} from "./components";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCircleInView, setIsCircleInView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2800);
  }, []);

  return (
    <ReactLenis root>
      <main style={{ overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Hero />
        <SelectedWork isCircleInView={isCircleInView} />
        <MoreWork setIsCircleInView={setIsCircleInView} />
        <About />
        <Skills />
      </main>
    </ReactLenis>
  );
};

export default Home;
