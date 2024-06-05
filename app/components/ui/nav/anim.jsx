export const navReveal = {
  initial: {
    filter: "blur(20px)",

    opacity: 0.3,
  },
  animate: {
    filter: "blur(0)",

    opacity: 1,
    transition: {
      duration: 1.4,
      delay: 3.4,
      ease: [0.76, 0, 0.24, 1],

      //   delayChildren: 3.9,
    },
  },
};
