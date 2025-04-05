import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { Header } from "@site/src/components/layout/Header";
import { Section } from "@site/src/components/common/Section";
import HomeAbout from "./home/about/_home-about";
import HomeCourses from "./home/courses/_home-courses";
import HomeProfessionalExperience from "./home/professional-experience/_home-professional-experience";
import HomeSkills from "./home/skills/_home-skills";
import HomeTraining from "./home/training/_home-training";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Rubén Rosales Web. Desarrollador de Software FullStack, diseño UI/UX, diseño Web y diseño de aplicaciones Web y Multiplataforma"
    >
      <Header 
        title="Rubén Rosales"
        subtitle="DESARROLLADOR DE APLICACIONES WEB Y MULTIPLATAFORMA"
      />
      
      <main>
        <Section id="about">
          <HomeAbout />
        </Section>

        <Section id="experience" alternate>
          <HomeProfessionalExperience />
        </Section>

        <Section id="skills">
          <HomeSkills />
        </Section>

        <Section id="training" alternate>
          <HomeTraining />
        </Section>

        <Section id="courses">
          <HomeCourses />
        </Section>
      </main>
    </Layout>
  );
}
