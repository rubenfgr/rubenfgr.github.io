import React from "react";
import styles from "./home-about.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function HomeAbout(): JSX.Element {
  return (
    <div className={styles.homeabout}>
      <div className={styles.homeabout_left}>
        <img
          className={styles.homeabout_img}
          src={useBaseUrl("pages/home/img/about_me.png")}
        />
      </div>
      <div className={styles.homeabout_right}>
        <h2 className={styles.homeabout_title}>SOBRE MÍ</h2>
        <p>
          Soy desarrollador de software Full Stack especializado en tecnologías
          web, especialmente NestJS y Angular, y buenos conocimientos de jest,
          react, react native, node, mysql, redis, linux, docker, elastic stack,
          websockets, php y laravel. También tengo experiencia en el diseño de
          interfaces de usuario, en la creación de prototipos con Figma o Penpot
          y diseño gráfico con inkscape, gimp o photoshop. Además, he trabajado
          en proyectos de IoT con arduino, esp32, raspberrypi, sensores,
          actuadores, MQTT, lora y lorawan, ttn e influxdb.
        </p>
        <div className={styles.homeabout_buttons}>
          <button className={styles.button___primary}>CONTACTO</button>
          <button className={styles.button___secondary}>CV PDF</button>
        </div>
      </div>
    </div>
  );
}
