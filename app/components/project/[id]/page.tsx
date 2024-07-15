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
    <main className={styles.project__container}>
      <div className={styles.project__content}>
        <h1 className={styles.project__h1}>{project.projectTitle}</h1>
        <div className={styles.project__desc__1}>{project.description}</div>
        <div className={styles.project__details}>
          <div className={styles.details__header}>{project.projectType}</div>
          <div>
            <div className={styles.details__header}>Languages Used</div>
            {project.languages.map((lang, i) => (
              <div key={i}>{lang}</div>
            ))}
          </div>
          <div className={styles.details__header}>2023</div>
        </div>
        <div className={styles.image__grid}>
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className={styles.project__img1}
          />
          <p className={styles.project__desc2}>{project.descriptionTwo}</p>
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className={styles.project__img2}
          />
          <p className={styles.project__desc3}>{project.description}</p>
        </div>
      </div>
    </main>
  );
};

export default Project;
