"use client";
import styles from "./project.module.scss";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { projects, ProjectData } from "../projectData";
import { BlurReveal } from "../../effects";
import { useInView } from "framer-motion";
import { useMediaQuery } from "../../hooks";
import React, { useRef } from "react";

const getProjectById = (id: string): ProjectData | undefined => {
  return projects.find((project) => project.id === id);
};

const Project = () => {
  const params = useParams();
  const id = params?.id;
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const botLinkRef = useRef(null);
  const isBotLinkInView = useInView(botLinkRef, { once: true });
  const isMobile = useMediaQuery("(max-width: 500px)");

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
          <BlurReveal isInView={isTitleInView} delay={1.3} duration={1}>
            <h1
              ref={titleRef}
              className={id === "fse" ? styles.fse__h1 : styles.project__h1}
            >
              {project.projectTitle}
            </h1>
          </BlurReveal>

          <p className={styles.project__desc__1}>{project.description}</p>

          <div className={styles.project__details}>
            {isMobile ? null : (
              <div className={styles.details__header}>
                {project.projectType}
              </div>
            )}

            <div>
              <div className={styles.details__header}>Languages Used</div>
              {project.languages.map((lang, i) => (
                <div key={i}>{lang}</div>
              ))}
            </div>

            {isMobile ? (
              <div>
                <div className={styles.details__header}>
                  {project.projectType}
                </div>
                <div className={styles.details__header}>
                  {project.projectDate}
                </div>
              </div>
            ) : (
              <div className={styles.details__header}>
                {project.projectDate}
              </div>
            )}
          </div>
        </div>
        <div className={styles.project__content__two}>
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className={styles.project__img1}
          />
          <p>{project.descriptionTwo}</p>
          <img
            src={project.imageSrcTwo}
            alt=""
            className={styles.project__img2}
          />
          <p>{project.descriptionThree}</p>
          <BlurReveal isInView={isBotLinkInView} delay={0} duration={1}>
            <div className={styles.visit__here}>Visit site here:</div>
            <Link
              href={project.projectLink ?? ""}
              target="_blank"
              className={styles.project__link}
              ref={botLinkRef}
            >
              {project.projectLinkName}
            </Link>
          </BlurReveal>
        </div>
      </div>
    </main>
  );
};

export default Project;
