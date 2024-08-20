// data.jsx
export const createNavItems = (
  isWorkHovered,
  setIsWorkHovered,
  isAboutHovered,
  setIsAboutHovered,
  isSkillsHovered,
  setIsSkillsHovered,
  isContactHovered,
  setIsContactHovered
) => [
  {
    id: "works",
    text: "works",
    hoverState: isWorkHovered,
    setHoverState: setIsWorkHovered,
  },
  {
    id: "about",
    text: "about",
    hoverState: isAboutHovered,
    setHoverState: setIsAboutHovered,
  },
  {
    id: "skills",
    text: "skills",
    hoverState: isSkillsHovered,
    setHoverState: setIsSkillsHovered,
  },
  {
    id: "contact",
    text: "contact",
    hoverState: isContactHovered,
    setHoverState: setIsContactHovered,
  },
];
