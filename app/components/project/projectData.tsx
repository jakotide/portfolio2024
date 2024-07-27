export interface ProjectData {
  id: string;
  imageSrc: string;
  imageAlt: string;
  cardNumber: string;
  projectTitle: string;
  description: string;
  descriptionTwo?: string;
  projectType: string;
  languages: string[];
}

export const projects: ProjectData[] = [
  {
    id: "fse",
    imageSrc: "/images/ferdsss.jpg",
    imageAlt: "Project cover of Ferd",
    cardNumber: "01",
    projectTitle: "Ferd Sosiale Entreprenører",
    description:
      "My first job as a developer was to create and host the results report website for FSE. I also implemented usefathom for analytic work.",
    projectType: "Freelance",
    languages: ["HTML", "CSS", "Javascript", "Fathom"],
  },
  {
    id: "topo",
    imageSrc: "/images/toposhowcase1.png",
    imageAlt: "Project cover of Topo",
    cardNumber: "02",
    projectTitle: "Topo",
    description:
      "TOPO is a venue booking site that allows users to register, book venues, create venues, check venue availability with a calendar and more.",
    descriptionTwo:
      "This site leverages Noroff's API to provide its functionality. Users must register and log in to access the site's features.",
    projectType: "Project Exam",
    languages: ["React", "SCSS", "Framer Motion"],
  },
  {
    id: "sot",
    imageSrc: "/images/sotscreen.png",
    imageAlt: "Project cover of Sot",
    cardNumber: "03",
    projectTitle: "Sot",
    description:
      "This is a site I made to showcase some of the music I've created over the past couple of years...",
    projectType: "Personal Project",
    languages: ["React", "SCSS", "Framer Motion"],
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
    languages: ["React", "SCSS", "Framer Motion"],
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
    languages: ["React", "SCSS", "Framer Motion"],
  },
];
