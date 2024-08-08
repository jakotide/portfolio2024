export interface CardData {
  videoSrc: string;
  projectTitle: string;
  projectType: string;
  projectNumber: string;
  id: string;
}

export const cardData1: CardData = {
  id: "fse",
  videoSrc: "/videos/fsevideo.mp4",
  projectTitle: "Ferd Sosiale Entreprenører",
  projectType: "Freelance",
  projectNumber: "001",
};

export const cardData2: CardData = {
  id: "topo",
  videoSrc: "/videos/topovideo.mp4",
  projectTitle: "TOPO",
  projectType: "Project Exam",
  projectNumber: "002",
};
