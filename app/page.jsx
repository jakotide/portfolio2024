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
import { relative } from "path";

const Home = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <Hero id="hero" />

      <SelectedWork id="works" />
      <MoreWork id="morework" />

      <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer id="footer" />
    </main>
  );
};

export default Home;
