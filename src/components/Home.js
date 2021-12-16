import React, { useState } from "react";
import styles from "./Home.module.css";
import MenuBar from "./menu/MenuBar";
import Main from "./layout/Main";
import HowToUse from "./layout/HowToUse";
import StartWizzroom from "./layout/StartWizzroom";
import JoinWizzroom from "./layout/JoinWizzroom";
import Contact from "./layout/Contact";

function Home() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(true);
    } else if (scrolled <= 0) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: document.documentElement.scrollIntoView,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={styles.container}>
      <div
        className={styles.top}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <i className="fas fa-chevron-up"></i>
      </div>
      <div className={styles.menuBar}>
        <MenuBar />
      </div>
      <div className={styles.content}>
        <div className={styles.shapesContainer}>
          <div
            className={styles.shape}
            data-aos="fade-down-left"
            data-aos-duration="1500"
            data-aos-delay="100"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-down-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-down-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          ></div>
          <div
            className={styles.shape}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-down-right"
            data-aos-duration="500"
            data-aos-delay="200"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-down-right"
            data-aos-duration="500"
            data-aos-delay="100"
          ></div>
          <div
            className={styles.shape}
            data-aos="zoom-out"
            data-aos-duration="2000"
            data-aos-delay="500"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-up-right"
            data-aos-duration="500"
            data-aos-delay="200"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-delay="100"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="0"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="0"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-up-right"
            data-aos-duration="500"
            data-aos-delay="100"
          ></div>
          <div
            className={styles.shape}
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-delay="0"
          ></div>
        </div>
        <Main scrollToId="home" />
        <HowToUse scrollToId="howTo" />
        <StartWizzroom scrollToId="start" />
        <div className={styles.joinWizzroom}>
          <JoinWizzroom scrollToId="join" />
        </div>
        <Contact scrollToId="contact" />
      </div>
    </div>
  );
}

export default Home;
