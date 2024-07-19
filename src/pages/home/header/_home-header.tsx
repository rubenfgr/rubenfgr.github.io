import useBaseUrl from "@docusaurus/useBaseUrl";
import Social from "@site/src/components/Social";
import React from "react";
import styles from "./_home-header.module.scss";

export default function HomeHeader(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>Rubén Rosales</h1>
        <h2 className={styles.header__subtitle}>
          DESARROLLADOR DE APLICACIONES WEB Y MULTIPLATAFORMA
        </h2>
        <Social />
      </div>

      <video className={styles.header__video} autoPlay muted loop>
        <source
          src={useBaseUrl("/video/main-header-video-background.mp4")}
          type="video/mp4"
        />
      </video>
    </header>
  );
}
