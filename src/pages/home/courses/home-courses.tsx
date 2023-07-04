import React from "react";
import styles from "./home-courses.module.scss";
import { courses } from "./courses";

export default function HomeCourses(): JSX.Element {
  return (
    <div className={styles.homecourses}>
      <h2 className={styles.homecourses_title}>OTROS CURSOS</h2>
      <div className={styles.homecourses_container}>
        {courses.map((courses) => (
          <div className={styles.homecourses_courses_container}>
            <div className={styles.homecourses_courses_year}>
              <h3>{courses.year}</h3>
            </div>
            <div className={styles.homecourses_courses_items}>
              {courses.courses.map((course) => (
                <div
                  className={styles.homecourses_course_container}
                  onClick={() => window.open(course.url, "_blank")}
                >
                  <div className={styles.homecourses_course_icon}>
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div className={styles.homecourses_course_title}>
                    {course.title}. <span>{course.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
