export const showMobileNav = {
  open: {
    x: "0%",
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    x: "100%",
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const scaleSpan = {
  initial: {
    scale: 0,
    transition: {
      duration: 0.1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  hovered: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const itemSlide = {
  initial: {
    x: "-10px",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  hovered: {
    x: "8px",
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
