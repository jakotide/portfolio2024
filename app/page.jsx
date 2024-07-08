"use client";
import React, { useState, useEffect } from "react";
import {
  Preloader,
  SelectedWork,
  MoreWork,
  Hero,
  About,
  Skills,
  Contact,
  Footer,
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

  return (
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
      <Footer />
    </main>
  );
};

export default Home;
