"use client";
import styles from "./contact.module.scss";
import { useCursor } from "../../components/context/cursorContext/page";
import React, { useRef, useEffect, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { useScrollProvider } from "../../components/context";

const notificationAnimation = {
  initial: {
    opacity: 0,
    y: "20px",
  },
  animate: {
    opacity: 1,
    y: "0",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    y: "20px",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const Contact = ({ id }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const { handleHoverStart, handleHoverEnd } = useCursor();
  const ref = useRef(null);
  const contactInView = useInView(ref, { threshold: 1 });
  const { resetNavStyle } = useScrollProvider();

  useEffect(() => {
    if (contactInView) {
      resetNavStyle();
    }
  }, [contactInView, resetNavStyle]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message);
        setFormState({ name: "", email: "", message: "" });
      } else if (response.status === 429) {
        setSubmitMessage("Too many requests. Please try again later.");
      } else {
        setSubmitMessage(
          data.message || "An error occurred. Please try again."
        );
      }

      setShowNotification(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
  };

  const handleNotificationComplete = () => {
    if (showNotification) {
      setTimeout(() => setShowNotification(false), 4000);
    }
  };

  return (
    <section className={styles.contact__section} id={id}>
      <div className={styles.noise__container}></div>
      <h1 className={styles.contact__h1}>Contact</h1>
      <div className={styles.contact__content}>
        <form onSubmit={handleSubmit} className={styles.contact__form}>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Your Message*</label>
          <textarea
            name="message"
            id="message"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className={styles.send__btn}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            ref={ref}
            disabled={isSubmitting}
          >
            {isSubmitting ? <span className={styles.spinner}></span> : "Send"}
          </button>
          <AnimatePresence>
            {showNotification && (
              <motion.div
                key="notification"
                variants={notificationAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationComplete={handleNotificationComplete}
                className={styles.notification}
              >
                {submitMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
        {/* <div className={styles.contact__info}>
          <div>Or send me an email at:</div>
          <div>tidemand.dev@gmail.com</div>
          <div>+47 47864047</div>
        </div> */}
      </div>
    </section>
  );
};
