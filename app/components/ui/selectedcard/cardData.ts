export interface CardData {
  videoSrc: string;
  projectTitle: string;
  projectType?: string;
  projectNumber: string;
  id: string;
  description: string;
  projectTypeTablet?: string;
}

export const cardData1: CardData = {
  id: "fse",
  videoSrc: "/videos/fsevideolowq.mp4",
  projectTitle: "Ferd Sosiale Entreprenører",
  projectType: "Freelance",
  projectNumber: "001",
  description:
    "My first job as a developer was to create and host the results report website for FSE. I also implemented usefathom for analytic work.",
};

export const cardData2: CardData = {
  id: "topo",
  videoSrc: "/videos/topovideo.mp4",
  projectTitle: "TOPO",
  projectType: "Exam",
  projectTypeTablet: "Exam",
  projectNumber: "002",
  description:
    "TOPO is a venue booking site that allows users to register, book venues, create venues, check venue availability with a calendar and more.",
};
