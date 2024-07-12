// components/project/[id]/page.tsx
"use client";
import styles from "./project.module.scss";
import { notFound } from "next/navigation";
import { projects, ProjectData } from "../projectData"; // Adjust the path if needed
import { useParams } from "next/navigation";

const getProjectById = (id: string): ProjectData | undefined => {
  return projects.find((project) => project.id === id);
};

const Project = () => {
  const params = useParams();
  const id = params?.id;

  if (!id) {
    return <div>Loading...</div>;
  }

  const project = getProjectById(id as string);

  if (!project) {
    notFound(); // This will render the 404 page
  }

  return (
    <div>
      <h1>{project.projectTitle}</h1>
      <img src={project.imageSrc} alt={project.imageAlt} />
      <p>{project.description}</p>
      {/* Render other project details */}
    </div>
  );
};

export default Project;
