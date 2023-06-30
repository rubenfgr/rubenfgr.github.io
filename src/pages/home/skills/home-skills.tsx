import React from "react";
import styles from "./home-skills.module.scss";
import { skills } from "./skills";

export default function HomeSkills(): JSX.Element {
  return (
    <div>
      <h2 className={styles.homeskills_title}>SKILLS</h2>
      <div className={styles.homeskills_items_container}>
        {skills &&
          skills.map((skill) => (
            <div className={styles.homeskills_item}>
              <span>{skill.name}</span>
              <div className={styles.homeskills_bar_container}>
                <div
                  className={styles.homeskills_bar}
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span>{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
