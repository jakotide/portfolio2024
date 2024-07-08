import React from "react";
import { motion } from "framer-motion";

const BlurRevealAnim = {
  initial: {
    opacity: 0,
    filter: "blur(20px)",
  },
  animate: {
    opacity: 1,
    filter: "0px",
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const BlurReveal = ({ children, isInView }) => {
  return (
    <motion.div
      variants={BlurRevealAnim}
      initial="initial"
      animate={isInView ? "animate" : ""}
    >
      {children}
    </motion.div>
  );
};
