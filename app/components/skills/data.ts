export interface RowData {
  colors: string[];
  widths: number[];
  skills: string[];
  direction: number;
}

export const rowData: RowData[] = [
  {
    colors: ["blue", "green", "orange-ish", "dark-blue"],
    widths: [30, 50, 20, 20],
    skills: ["", "JavaScript", "", ""],
    direction: -1,
  },
  {
    colors: ["grey-blue", "yellow", "white", "cream"],
    widths: [30, 50, 20, 20],
    skills: ["", "CSS", "", "Git"],
    direction: 1,
  },
  {
    colors: ["dark-blue", "brown", "red", "light-green"],
    widths: [25, 25, 25, 25],
    skills: ["React", "", "HTML", ""],
    direction: -1,
  },
  {
    colors: ["red", "cream", "black", "grey"],
    widths: [30, 40, 30, 40],
    skills: ["Node.js", "", "GSAP", ""],
    direction: 1,
  },
  {
    colors: ["dark-grey", "orange", "yellow", "teal"],
    widths: [60, 10, 20, 20],
    skills: ["Framer Motion", "", "Github", ""],
    direction: -1,
  },
  {
    colors: ["light-green", "cream", "light-green", "pink"],
    widths: [30, 30, 20, 20],
    skills: ["", "Next.js", "", "Typescript"],
    direction: 1,
  },
];

export const containerReveal = {
  initial: {
    opacity: 0,
    // scale: 0,
  },
  animate: {
    opacity: 1,
    // scale: 1,
  },
};
