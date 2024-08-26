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
  pageTitle: string;
  pageDescription: string;
}

export const projects: ProjectData[] = [
  {
    id: "fse",
    imageSrc: "/images/fseshowcase.webp",
    videoSrc: "/videos/fsevideolowq.mp4",
    imageAlt: "Project cover of Ferd",
    cardNumber: "01",
    projectTitle: "Ferd Sosiale Entreprenører",
    description:
      "My first job as a developer was to create and host the results report website for Ferd Sosiale Entreprenører.",
    descriptionTwo:
      "I implemented the use of Fathom Analytics to track various metrics, including page traffic and user origin.",
    descriptionThree: "I am still hosting and maintaining their website.",
    projectType: "Freelance",
    languages: ["HTML", "CSS", "Javascript", "Fathom"],
    projectDate: "2023",
    projectLink: "https://resultatrapport-fse-2021-2022.no/",
    projectLinkName: "FSE",
    pageTitle: "Ferd Sosiale Entreprenører - Results Report Website",
    pageDescription:
      "A results report website for Ferd Sosiale Entreprenører, showcasing their impact.",
  },
  {
    id: "topo",
    imageSrc: "/images/toposhowcase.webp",
    videoSrc: "/videos/topovideo.mp4",
    imageAlt: "Project cover of Topo",
    cardNumber: "02",
    projectTitle: "Topo",
    description:
      "TOPO is a venue booking site that allows users to register, book venues, create venues, check venue availability with a calendar, and more.",
    descriptionTwo:
      "This site leverages Noroff's API to provide its functionality. Users must register and log in to access the site's features. All animations, button interactions, and preloaders are mostly created using Framer Motion.",
    descriptionThree:
      "The design is based on a 3D animation theme with bright and vibrant colors. The images are created using MidJourney and edited in Figma. The page is also fully responsive.",
    projectType: "Project Exam",
    languages: ["React", "SCSS", "Framer Motion"],
    projectDate: "2023",
    projectLink: "https://topo-exam.netlify.app/",
    projectLinkName: "Topo",
    pageTitle: "Topo - Venue Booking Site",
    pageDescription:
      "A venue booking site that allows users to register, book venues, create venues, and more.",
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
      "I used GSAP to incorporate animations, hover effects, and parallax images. Additionally, I used the Lenis scroll library for smoother scrolling and animations.",
    descriptionThree: "The images are created using MidJourney.",
    projectType: "Personal Project",
    languages: ["SCSS", "Javascript", "GSAP", "Lenis"],
    pageTitle: "Sot - Music Showcase",
    pageDescription:
      "A personal project showcasing music with animations and smooth scrolling effects.",
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
    pageTitle: "B-Diddy - Auction House",
    pageDescription:
      "An auction house site allowing users to create listings, place bids, and sell items.",
  },
  {
    id: "goose",
    imageSrc: "/images/gooseshowcase.webp",
    videoSrc: "/videos/goosevideo.mp4",
    imageAlt: "Project cover of Goose",
    cardNumber: "05",
    projectTitle: "Goose",
    projectDate: "2022",
    description:
      "Goose is a synth review blog that tests out unusual synthesizers and other unique devices.",
    descriptionTwo:
      "The site is designed in Figma, and the images are created with MidJourney. It features a carousel and SVG drawing animations.",
    descriptionThree:
      "The blog posts are fetched using the WordPress REST API. Unfortunately, the site is no longer active.",
    projectType: "Project Exam",
    languages: ["HTML", "SCSS", "Javascript", "Wordpress"],
    pageTitle: "Goose - Synth Review Blog",
    pageDescription:
      "A synth review blog that tests out unusual synthesizers and unique devices.",
  },
];
