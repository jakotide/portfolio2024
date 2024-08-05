export interface MoreCardData {
  imageSrc: string;
  imageAlt: string;
  cardNumber: string;
  projectTitle: string;
  description: string;
  projectType: string;
  id: string;
}

export const moreCard: MoreCardData[] = [
  {
    id: "sot",
    imageSrc: "/images/sotscreen.png",
    imageAlt: "Project cover of Sot",
    cardNumber: "03",
    projectTitle: "Sot",
    description:
      "Site I made to showcase some of the music I've created over the past couple of years.",
    projectType: "Personal Project",
  },
  {
    id: "b-diddy",
    imageSrc: "/images/bdiddy-screen.png",
    imageAlt: "Project cover of B-Diddy",
    cardNumber: "04",
    projectTitle: "B-Diddy",
    description:
      "Auction house that logged in users can create, bid on and sell items using the Noroff auction API.",
    projectType: "Semester Project",
  },
  {
    id: "goose",
    imageSrc: "/images/goosescreen.png",
    imageAlt: "Project cover of B-Diddy",
    cardNumber: "05",
    projectTitle: "Goose",
    description:
      "Fictional synth review blog that tests out odd synthesizers and other devices. The blog posts are fetched using Wordpress REST API.",
    projectType: "Project Exam",
  },
];
