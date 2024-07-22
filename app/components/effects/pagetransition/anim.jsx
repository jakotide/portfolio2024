export const pageTransitionSlider = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: "0",

    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};
