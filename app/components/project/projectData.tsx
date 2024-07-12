// projectData.ts
export interface ProjectData {
  id: string;
  imageSrc: string;
  imageAlt: string;
  cardNumber: string;
  projectTitle: string;
  description: string;
  projectType: string;
}

export const projects: ProjectData[] = [
  {
    id: "sot",
    imageSrc: "/images/sotscreen.png",
    imageAlt: "Project cover of Sot",
    cardNumber: "03",
    projectTitle: "Sot",
    description:
      "This is a site I made to showcase some of the music I've created over the past couple of years...",
    projectType: "Personal Project",
  },
  {
    id: "b-diddy",
    imageSrc: "/images/bdiddy-screen.png",
    imageAlt: "Project cover of B-Diddy",
    cardNumber: "04",
    projectTitle: "B-Diddy",
    description:
      "For this assignment we were to design and create an auction house that logged in users can create, bid on and sell items...",
    projectType: "Semester Project",
  },
  {
    id: "goose",
    imageSrc: "/images/goosescreen.png",
    imageAlt: "Project cover of Goose",
    cardNumber: "05",
    projectTitle: "Goose",
    description:
      "For this assignment we were to showcase our design and programming skills that we acquired during our first year of study...",
    projectType: "Project Exam",
  },
];
