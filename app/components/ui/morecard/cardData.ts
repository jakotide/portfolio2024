export interface MoreCardData {
  imageSrc: string;
  imageAlt: string;
  cardNumber: string;
  projectTitle: string;
  description: string;
  projectType: string;
}

export const moreCard: MoreCardData[] = [
  {
    imageSrc: "/images/sotscreen.png",
    imageAlt: "Project cover of Sot",
    cardNumber: "03",
    projectTitle: "Sot",
    description:
      "This is a site I made to showcase some of the music I've created over the past couple of years. I used GSAP to incorporate animations, hover effects, and parallax images. Additionally, I used Lenis scroll library for smoother scrolling and animations.",
    projectType: "Personal Project",
  },
  {
    imageSrc: "/images/bdiddy-screen.png",
    imageAlt: "Project cover of B-Diddy",
    cardNumber: "04",
    projectTitle: "B-Diddy",
    description:
      "For this assignment we were to design and create an auction house that logged in users can create, bid on and sell items using the Noroff auction API.",
    projectType: "Semester Project",
  },
  {
    imageSrc: "/images/goosescreen.png",
    imageAlt: "Project cover of B-Diddy",
    cardNumber: "05",
    projectTitle: "Goose",
    description:
      "For this assignment we were to showcase our design and programming skills that we acquired during our first year of study. I created a fictional synth review blog that tested out odd synthesizers and other devices. The blog posts are fetched using Wordpress REST API.",
    projectType: "Project Exam",
  },
];
