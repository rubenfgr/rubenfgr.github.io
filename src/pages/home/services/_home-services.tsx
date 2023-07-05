import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import styles from "./_home-services.module.scss";

export default function HomeServices(): JSX.Element {
  return (
    <div className={styles.homeservices}>
      <h2 className={styles.homeservices_title}>SERVICIOS</h2>
      <div className={styles.homeservices_container}>
        <div className={styles.homeservices_item}>
          <img
            className={styles.homeservices_item_img}
            src={useBaseUrl("pages/home/img/ux_ui_design.png")}
          />
          <h2 className={styles.homeservice_item_title}>DISEÑO UI/UX</h2>
          <p>
            <span className={styles.homeservice_item_text___marked}>
              Diseño de interfaces
            </span>{" "}
            con especial atención en la{" "}
            <span className={styles.homeservice_item_text___marked}>
              experiencia de usuario
            </span>{" "}
            para crear productos digitales intuitivos y atractivos
          </p>
        </div>
        <div className={styles.homeservices_item}>
          <img
            className={styles.homeservices_item_img}
            src={useBaseUrl("pages/home/img/web_design.png")}
          />
          <h2 className={styles.homeservice_item_title}>DISEÑO WEB</h2>
          <p>
            Diseño de sitios web{" "}
            <span className={styles.homeservice_item_text___marked}>
              atractivos, funcionales y adaptables a cualquier pantalla
            </span>
          </p>
        </div>
        <div className={styles.homeservices_item}>
          <img
            className={styles.homeservices_item_img}
            src={useBaseUrl("pages/home/img/multiplatform_design.png")}
          />
          <h2 className={styles.homeservice_item_title}>
            DISEÑO MULTIPLATAFORMA
          </h2>
          <p>
            Diseño de aplicaciones multiplataforma que{" "}
            <span className={styles.homeservice_item_text___marked}>
              funcionan en la Web, iOS, Android, Windows, MacOS y Linux
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
