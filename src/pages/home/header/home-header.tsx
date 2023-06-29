import React from "react";
import styles from "./home-header.module.scss";
import Social from "@site/src/components/Social";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function HomeHeader(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>Rubén Rosales Web</h1>
        <h2 className={styles.header__subtitle}>
          DESARROLLADOR DE SOFTWARE FULL STACK
        </h2>
        <Social />
      </div>

      <video className={styles.header__video} autoPlay muted loop>
        <source
          src={useBaseUrl("/video/header_video_background.mp4")}
          type="video/mp4"
        />
      </video>
    </header>
  );
}
