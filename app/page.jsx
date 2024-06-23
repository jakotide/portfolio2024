"use client";
import Hero from "./components/hero/page";
import { ReactLenis } from "lenis/react";
import React, { useState, useEffect } from "react";
import { Preloader, SelectedWork, MoreWork } from "./components";
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
      <main>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        <Hero />
        <SelectedWork isCircleInView={isCircleInView} />
        <MoreWork setIsCircleInView={setIsCircleInView} />
      </main>
    </ReactLenis>
  );
};

export default Home;
