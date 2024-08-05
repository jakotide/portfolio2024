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
      <Hero id="hero" />
      <SelectedWork isCircleInView={isCircleInView} id="works" />
      <MoreWork setIsCircleInView={setIsCircleInView} />
      {/* <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />  */}
    </main>
  );
};

export default Home;
