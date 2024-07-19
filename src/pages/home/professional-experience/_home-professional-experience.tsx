import React from "react";
import styles from "./_home-professional-experience.module.scss";
import { professionalExperiencies } from "./_professional-experiencies";

export default function HomeProfessionalExperience(): JSX.Element {
  return (
    <div className={styles.homeexperience}>
      <h2 className={styles.homeexperience_title}>
      <span className="material-icons">work_history</span>
        EXPERIENCIA PROFESIONAL
      </h2>
      <div className={styles.homeexperience_container}>
        {professionalExperiencies &&
          professionalExperiencies.map((professionalExperience) => (
            <div className={styles.homeexperience_item_container}>
              <h3 className={styles.homeexperience_item_duration}>
                {professionalExperience.durationRange}
              </h3>
              <div className={styles.homeexperience_item_content}>
                <div className={styles.homeexperience_item_company}>
                  {professionalExperience.company}
                </div>
                <ul className={styles.homeexperience_item_experience_container}>
                  {professionalExperience.experiencies.map((experience) => (
                    <li>
                      <span>{experience.type}</span>
                      <span>. {experience.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
