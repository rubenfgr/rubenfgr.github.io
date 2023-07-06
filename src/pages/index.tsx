import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useIsBrowser from "@docusaurus/useIsBrowser";
import Layout from "@theme/Layout";
import React, { useRef } from "react";
import HomeAbout from "./home/about/_home-about";
import HomeCourses from "./home/courses/_home-courses";
import HomeHeader from "./home/header/_home-header";
import HomeProfessionalExperience from "./home/professional-experience/_home-professional-experience";
import HomeServices from "./home/services/_home-services";
import HomeSkills from "./home/skills/_home-skills";
import HomeTraining from "./home/training/_home-training";
import styles from "./index.module.scss";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const arrowUp = useRef<HTMLDivElement>(null);

  if (useIsBrowser()) {
    window.addEventListener("scroll", () => {
      if (arrowUp.current) {
        if (window.scrollY > 100) {
          arrowUp.current.style.visibility = "visible";
        } else {
          arrowUp.current.style.visibility = "hidden";
        }
      }
    });
  }

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Rubén Rosales Web. Desarrollador de Software FullStack, diseño UI/UX, diseño Web y diseño de aplicaciones Web y Multiplataforma"
    >
      <div
        className={styles.home_arrow_up}
        ref={arrowUp}
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="material-symbols-outlined">keyboard_arrow_up</span>
      </div>
      <HomeHeader />
      <main className={styles.home_main}>
        <div className={styles.home_item}>
          <HomeAbout />
        </div>

        <div className={styles.home_services}>
          <HomeServices />
        </div>
        <div className={styles.home_item}>
          <HomeSkills />
        </div>
        <div className={styles.home_experience}>
          <HomeProfessionalExperience />
        </div>
        <div className={styles.home_item}>
          <HomeTraining />
        </div>
        <div className={styles.home_courses}>
          <HomeCourses />
        </div>
      </main>
    </Layout>
  );
}
