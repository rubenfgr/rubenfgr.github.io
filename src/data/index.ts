// Archivo principal que combina todos los datos
import { personalInfo, contactInfo, socialLinks } from './personal';
import { skills } from './skills';
import { projects } from './projects';
import { experience } from './experience';
import { education, courses } from './education';
import { services } from './services';
import type { Portfolio, Project, Experience } from './types';

// Función helper para obtener proyectos por IDs
export const getProjectsByIds = (projectIds: string[]): Project[] => {
  return projects.filter(project => projectIds.includes(project.id));
};

// Función helper para obtener proyectos destacados
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured === true);
};

// Función helper para obtener proyectos por empresa
export const getProjectsByCompany = (company: string): Project[] => {
  return projects.filter(project => project.company === company);
};

// Función helper para obtener proyectos por tipo
export const getProjectsByType = (type: string): Project[] => {
  return projects.filter(project => project.type === type);
};

// Función helper para enriquecer experiencia con proyectos
export const getExperienceWithProjects = (): (Experience & { projects: Project[] })[] => {
  return experience.map(exp => ({
    ...exp,
    projects: getProjectsByIds(exp.projectIds)
  }));
};

// Portfolio completo
export const portfolioData: Portfolio = {
  personal: personalInfo,
  contact: contactInfo,
  social: socialLinks,
  skills,
  projects,
  experience,
  services,
  education,
  courses
};

// Exports individuales para uso granular
export {
  personalInfo,
  contactInfo,
  socialLinks,
  skills,
  projects,
  experience,
  education,
  courses,
  services
};

// Export de tipos
export * from './types';
