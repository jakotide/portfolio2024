import { easeOut } from "framer-motion";

export const slide = {
  initial: {
    x: "0",
    y: "0",
  },
  exit: {
    y: "88vh",
    x: "-95vw",
    transition: { duration: 1.2, ease: [0.37, 0.84, 0.39, 0.99] },
  },
};

export const textReveal = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: { duration: 0.3, delay: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};

export const counterReveal = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: { duration: 0.2 },
  },
  //   exit: {
  //     opacity: 0,
  //     transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  //   },
};
