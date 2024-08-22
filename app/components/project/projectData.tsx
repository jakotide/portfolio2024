import { Url } from "next/dist/shared/lib/router/router";

export interface ProjectData {
  id: string;
  imageSrc: string;
  imageSrcTwo?: string;
  videoSrc?: string;
  imageAlt: string;
  cardNumber: string;
  projectTitle: string;
  description: string;
  descriptionTwo?: string;
  descriptionThree?: string;
  projectType: string;
  languages: string[];
  projectDate?: string;
  projectLink?: Url;
  projectLinkName?: string;
}

export const projects: ProjectData[] = [
  {
    id: "fse",
    imageSrc: "/images/fseshowcase.webp",
    videoSrc: "/videos/ferdvideo2.mp4",
    imageAlt: "Project cover of Ferd",
    cardNumber: "01",
    projectTitle: "Ferd Sosiale Entreprenører",
    description:
      "My first job as a developer was to create and host the results report website for Ferd Sosiale Entreprenører.",
    descriptionTwo:
      "I implemented the use of Fathom Analytics to track various metrics, including page traffic and user origin.",
    descriptionThree: " I am still hosting and maintaining their website.",
    projectType: "Freelance",
    languages: ["HTML", "CSS", "Javascript", "Fathom"],
    projectDate: "2023",
    projectLink: "https://resultatrapport-fse-2021-2022.no/",
    projectLinkName: "FSE",
  },
  {
    id: "topo",
    imageSrc: "/images/toposhowcase.webp",
    videoSrc: "/videos/topovideo.mp4",
    imageAlt: "Project cover of Topo",
    cardNumber: "02",
    projectTitle: "Topo",
    description:
      "TOPO is a venue booking site that allows users to register, book venues, create venues, check venue availability with a calendar and more.",
    descriptionTwo:
      "This site leverages Noroff's API to provide it's functionality. Users must register and log in to access the site's features. All the animations, button interactions and preloaders are mostly created using Framer Motion.",
    descriptionThree:
      "The design is based on a 3d animation theme with bright and vibrant colors. The images is created using midjourney and edited in figma. The page is also fully responsive.",
    projectType: "Project Exam",
    languages: ["React", "SCSS", "Framer Motion"],
    projectDate: "2023",
    projectLink: "https://topo-exam.netlify.app/",
    projectLinkName: "Topo",
  },
  {
    id: "sot",
    imageSrc: "/images/sotshowcase.webp",
    imageAlt: "Project cover of Sot",
    videoSrc: "/videos/sotvideo.mp4",
    cardNumber: "03",
    projectTitle: "Sot",
    projectDate: "2023",
    projectLink: "https://sotsotsot.netlify.app/",
    projectLinkName: "Sot",
    description:
      "This is a site I made to showcase some of the music I've created over the past couple of years.",
    descriptionTwo:
      "I used GSAP to incorporate animations, hover effects, and parallax images. Additionally, I used Lenis scroll library for smoother scrolling and animations.",
    descriptionThree: "The images are created using midjourney.",
    projectType: "Personal Project",
    languages: ["SCSS", "Javascript", "GSAP", "Lenis"],
  },
  {
    id: "b-diddy",
    imageSrc: "/images/bdiddyshowcase.webp",
    videoSrc: "/videos/bdiddyvideo.mp4",
    imageAlt: "Project cover of B-Diddy",
    cardNumber: "04",
    projectTitle: "B-Diddy",
    projectDate: "2023",
    projectLink: "https://b-diddy.netlify.app/",
    projectLinkName: "B-Diddy",
    description:
      "B-Diddy is an auction house that allows logged-in users to create listings, place bids, and sell items.",
    descriptionTwo:
      "This site leverages Noroff's API for its functionality. Users must register and log in to access all features. Animations are created using CSS and GSAP.",
    descriptionThree:
      "The site is designed in Figma and is inspired by the Neubrutalism design style. It features a marquee and a playful theme picker that allows users to change the homepage colors.",
    projectType: "Semester Project",
    languages: ["HTML", "SCSS", "Javascript", "GSAP"],
  },
  {
    id: "goose",
    imageSrc: "/images/goosescreen.png",
    imageAlt: "Project cover of Goose",
    cardNumber: "05",
    projectTitle: "Goose",
    projectDate: "2022",
    description:
      "For this assignment we were to showcase our design and programming skills that we acquired during our first year of study...",
    projectType: "Project Exam",
    languages: ["React", "SCSS", "Framer Motion"],
  },
];
