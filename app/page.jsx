// "use client";
// import React, { useEffect } from "react";
// import {
//   SelectedWork,
//   MoreWork,
//   Hero,
//   About,
//   Skills,
//   Contact,
//   Footer,
// } from "./components";
// import { useBackgroundContext, useScrollProvider } from "./components/context";
// import { easeIn } from "framer-motion";

// const Home = () => {
//   const { bgColor } = useScrollProvider();

//   useEffect(() => {
//     // Update the background color of the main element
//     document.querySelector("main").style.backgroundColor = bgColor;
//     document.querySelector("main").style.transition =
//       "background-color 0.4s ease-in";
//   }, [bgColor]);

//   return (
//     <main style={{ overflow: "hidden", transition: 0.4, easeIn }}>
//       <Hero id="hero" />
//       <SelectedWork id="works" />
//       <MoreWork />
//       <About id="about" />
//       <Skills id="skills" />
//       <Contact id="contact" />
//       <Footer />
//     </main>
//   );
// };

// export default Home;
"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  SelectedWork,
  MoreWork,
  Hero,
  About,
  Skills,
  Contact,
  Footer,
} from "./components";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Set initial background color for main (on both server and client)
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.style.backgroundColor = "#f9f7e8";
    }

    // Array of sections with their IDs and background colors
    const sections = [
      { id: "hero", color: "#f9f7e8" },
      { id: "works", color: "#f9f7e8" },
      { id: "morework", color: "#171717" },
      { id: "about", color: "#171717" },
      { id: "skills", color: "#171717" },
      { id: "contact", color: "#aee0bc" },
      { id: "footer", color: "#171717" },
    ];

    // Create ScrollTriggers for each section
    sections.forEach(({ id, color }) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top 80%", // Trigger a little earlier
        end: "bottom 20%",
        onEnter: () => {
          console.log(`Entering section ${id}`);
          gsap.to(mainElement, { backgroundColor: color, overwrite: "auto" });
        },
        onEnterBack: () => {
          console.log(`Re-entering section ${id}`);
          gsap.to(mainElement, { backgroundColor: color, overwrite: "auto" });
        },
      });
    });

    // Clean up
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main
      style={{
        overflow: "hidden",
        transition: "0.4s ease-in",
        backgroundColor: "#f9f7e8",
      }}
    >
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
