"use client";
import React from "react";
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
  return (
    <main style={{ overflow: "hidden" }}>
      <Hero id="hero" />
      <SelectedWork id="works" />
      <MoreWork />
      <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
};

export default Home;
