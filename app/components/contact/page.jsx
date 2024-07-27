import styles from "./contact.module.scss";
import { useCursor } from "../context/cursorContext/page";
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useScrollProvider } from "../context";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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
    try {
      console.log("Submitting form data:", formState);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response from server:", data);
      setSubmitMessage(data.message);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <section className={styles.contact__section}>
      <div className={styles.contact__grid}>
        <div className={`${styles.box} ${styles.box__line__side}`}></div>
        <div className={`${styles.box} ${styles.box__line}`}></div>
        <div className={`${styles.box} ${styles.box__1}`}></div>
        <div className={`${styles.box} ${styles.box__2}`}></div>
        <div className={`${styles.box} ${styles.box__3}`}></div>
        <div className={`${styles.box} ${styles.box__4}`}>
          <h1 className={styles.contact__h1}>Contact</h1>
        </div>
        <div className={`${styles.box} ${styles.box__5}`}></div>
        <div className={`${styles.box} ${styles.box__6}`}>
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
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            {submitMessage && <p>{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
