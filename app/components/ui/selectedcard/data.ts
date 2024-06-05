export interface CardData {
  id: number;
  imageSrc: string;
  number: string;
  type: string;
  title: string;
  description: string;
  className?: string;
}

export const cardData: CardData[] = [
  {
    id: 1,
    imageSrc: "/images/topo-image.png",
    number: "work 001",
    type: "Freelance",
    title: "Project Title 1",
    description: "Project Description 1",
    className: "selected__work__01",
  },
  {
    id: 2,
    imageSrc: "/images/ferdsss.jpg",
    number: "work 002",
    type: "Freelance",
    title: "Project Title 2",
    description: "Project Description 2",
    className: "selected__work__02",
  },
];
