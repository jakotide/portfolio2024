"use client";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
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
  const scrollRef = useRef(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  return (
    <main>
      <Hero id="hero" />
      <div style={{ position: "relative", height: "360vh" }} ref={scrollRef}>
        <div style={{ position: "sticky", top: "calc(0vh - 100%)" }}>
          <SelectedWork id="works" />
        </div>
        <MoreWork id="morework" scrollYProgress={scrollYProgress} />
      </div>

      <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer id="footer" />
    </main>
  );
};

export default Home;
