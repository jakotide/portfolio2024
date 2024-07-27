"use client";
import styles from "./project.module.scss";
import { notFound } from "next/navigation";
import { projects, ProjectData } from "../projectData";
import { useParams } from "next/navigation";
import { BlurReveal } from "../../effects";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

const getProjectById = (id: string): ProjectData | undefined => {
  return projects.find((project) => project.id === id);
};

const Project = () => {
  const params = useParams();
  const id = params?.id;
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });
  const imageRefTwo = useRef(null);
  const isImageTwonView = useInView(imageRefTwo, { once: true });

  if (!id) {
    return <div>Loading...</div>;
  }

  const project = getProjectById(id as string);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.project__container}>
      <div className={styles.project__content}>
        <div className={styles.project__landing}>
          <BlurReveal isInView={isTitleInView} delay={1.4} duration={1.2}>
            <h1 ref={titleRef} className={styles.project__h1}>
              {project.projectTitle}
            </h1>
          </BlurReveal>

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
        </div>

        <div className={styles.image__grid}>
          <BlurReveal isInView={isImageInView} duration={1} delay={0}>
            <img
              ref={imageRef}
              src={project.imageSrc}
              alt={project.imageAlt}
              className={styles.project__img1}
            />
          </BlurReveal>
          {/* <div className={styles.project__desc2}>
            <p>{project.descriptionTwo}</p>
          </div>

          <p className={styles.project__desc3}>{project.description}</p>
          <BlurReveal isInView={isImageTwonView} duration={1} delay={0}>
            <img
              ref={imageRefTwo}
              src={project.imageSrc}
              alt={project.imageAlt}
              className={styles.project__img2}
            />
          </BlurReveal> */}
        </div>
      </div>
    </main>
  );
};

export default Project;
