"use client";
import React, { useState } from "react";
import {
  SelectedWork,
  MoreWork,
  Hero,
  About,
  Skills,
  Contact,
  Footer,
} from "./components";

const Home = () => {
  const [isCircleInView, setIsCircleInView] = useState(false);

  return (
    <main style={{ overflow: "hidden" }}>
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
