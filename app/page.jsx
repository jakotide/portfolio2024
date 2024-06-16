"use client";
import Hero from "./components/hero/page";

import React, { useState, useEffect, use } from "react";
import { Preloader, SelectedWork, PatternContainer } from "./components";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2800);
  }, []);

  return (
    <main>
      {/* <PatternContainer /> */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Hero />
      <SelectedWork />
    </main>
  );
};

export default Home;
