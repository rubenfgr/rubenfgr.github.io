import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import styles from "./_home-about.module.scss";

export default function HomeAbout(): JSX.Element {
  
  const handleContact = () => {
    window.location.href = 'mailto:rubenfranciscogr@outlook.com?subject=Contacto desde tu Portfolio&body=Hola Rubén,%0D%0A%0D%0AHe visitado tu portfolio y me gustaría ponerme en contacto contigo.%0D%0A%0D%0AAtentamente,%0D%0A[Tu nombre]';
  }

  const handleWhatsapp = () => {
    window.open('https://walink.co/5d4560', '_blank');
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/doc/CV_RubenFGR_06_07_2024.pdf';
    link.download = 'CV_RubenFGR_06_07_2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className={styles.homeabout}>
      <div className={styles.homeabout_left}>
        <img
          alt="Perfil"
          className={styles.homeabout_img}
          src={useBaseUrl("img/main-about-profile.jpg")}
        />
      </div>
      <div className={styles.homeabout_right}>
        <h2 className={styles.homeabout_title}>
          <span className="material-icons">person</span>
          SOBRE MÍ
        </h2>
        <p>
        Desarrollador FullStack especializado en TypeScript/JavaScript, con experiencia en NodeJS, NestJS y Angular, y conocimientos en React, React Native y Laravel. Competencias en UI/UX, Docker, Linux, bases de datos SQL y Redis, IoT y sistemas de mensajería con MQTT y RabbitMQ. Trabajo con Scrum y tengo experiencia en CI/CD con GitLab, Git y GitHub. Manejo herramientas de diseño como Figma, Canva, Photoshop, Inkscape y edición de video con Shotcut. Enfocado en la creación de soluciones escalables y eficientes, siempre buscando la mejora continua e innovación tecnológica.
        </p>
        <div className={styles.homeabout_buttons}>
          <button className={styles.button___secondary} title="Contactar por Correo" onClick={handleContact}>
            <span className="material-icons">mail</span>
            <span>CONTACTO</span>
          </button>
          <button className={styles.button___secondary} title="Contactar por WhatsApp" onClick={handleWhatsapp}>
            <span className="material-icons">chat</span>
            <span>WHATSAPP</span>
          </button>
          <button className={styles.button___secondary} title="Descargar Curriculum Vitae" onClick={handleDownloadCV}>
            <span className="material-icons">download</span>
            <span>CV</span> 
          </button>
        </div>
      </div>
    </div>
  );
}
