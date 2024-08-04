export const showMobileNav = {
  open: {
    width: "80%",
    height: "550px",
    top: "20px",
    right: "25px",
    padding: "2rem",
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: "0px",
    height: "0px",
    top: "1rem",
    right: "25px",
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const openCloseBtn = {
  open: {
    top: "30px",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    top: "0px",
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const buttonTextVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};
