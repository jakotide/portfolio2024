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
  const skillRef = useRef(null);

  const { scrollYProgress: moreWorkScrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: skillsScrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start start", "end start"],
  });
  return (
    <main>
      <Hero id="hero" />
      <div style={{ position: "relative", height: "360vh" }} ref={scrollRef}>
        <div style={{ position: "sticky", top: "calc(0vh - 100%)" }}>
          <SelectedWork id="works" />
        </div>
        <MoreWork id="morework" scrollYProgress={moreWorkScrollYProgress} />
      </div>
      <About id="about" />

      <div style={{ position: "relative" }}>
        <div
          style={{ position: "relative", zIndex: 1, height: "100%" }}
          ref={skillRef}
        >
          <Skills id="skills" scrollYProgress={skillsScrollYProgress} />
        </div>

        <div
          style={{
            position: "sticky",
            bottom: 0,
            height: "100vh",
            zIndex: 0,
          }}
        >
          <Contact id="contact" />
        </div>
      </div>
      <Footer id="footer" />
    </main>
  );
};

export default Home;
