"use client";
import React, { useRef, useLayoutEffect } from "react";
import { useScroll } from "framer-motion";
import { ButtonNav } from "./components/ui";

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
    layoutEffect: false,
  });

  const { scrollYProgress: skillsScrollYProgress } = useScroll({
    target: skillRef,
    offset: ["center start", "end start"],
    layoutEffect: false,
  });

  return (
    <main>
      <ButtonNav />
      <Hero id="hero" />
      <div style={{ position: "relative", height: "100%" }} ref={scrollRef}>
        <div style={{ position: "sticky", top: "calc(0vh - 100%)", zIndex: 0 }}>
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
            height: "100%",
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
