import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.scss";
import Social from "../components/Social";
import HomeAbout from "./home/about/home-about";
import HomeServices from "./home/services/home-services";
import HomeProfessionalExperience from "./home/professional-experience/home-professional-experience";
import HomeSkills from "./home/skills/home-skills";
import HomeTraining from "./home/training/home-training";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomeHeader from "./home/header/home-header";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Rubén Rosales Web. Desarrollador de Software FullStack, diseño UI/UX, diseño Web y diseño de aplicaciones Web y Multiplataforma"
    >
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
      </main>
    </Layout>
  );
}
