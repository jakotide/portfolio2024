export interface CardData {
  videoSrc: string;
  projectTitle: string;
  projectType: string;
  projectNumber: string;
  id: string;
  description: string;
}

export const cardData1: CardData = {
  id: "fse",
  videoSrc: "/videos/fsevideo.mp4",
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
  projectType: "Project Exam",
  projectNumber: "002",
  description: "Project Exam bla bla",
};
