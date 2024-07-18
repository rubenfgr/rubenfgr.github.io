import React from "react";
import styles from "./_home-training.module.scss";
import { trainings } from "./_trainings";

export default function HomeTraining(): JSX.Element {
  return (
    <div>
      <h2 className={styles.hometraining_title}>
        <span className="material-icons">school</span>
        FORMACIÓN
      </h2>
      <div className={styles.hometraining_top}>
        {trainings.map((academicFormation) => (
          <div
            className={styles.hometraining_top_item_container}
            onClick={() => window.open(academicFormation.url, "_blank")}
          >
            <div className={styles.hometraining_top_item_icon}>
              <span className="material-symbols-outlined">school</span>
            </div>
            <h3 className={styles.hometraining_top_item_duration}>
              {academicFormation.duration}
            </h3>
            <h2 className={styles.hometraining_top_item_title}>
              {academicFormation.title}
            </h2>
            <div className={styles.hometraining_top_item_school}>
              {academicFormation.school}
            </div>
            <div className={styles.hometraining_top_item_average}>
              Nota media: <span>{academicFormation.average}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
