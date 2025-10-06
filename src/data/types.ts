// Tipos de datos para el portfolio
export interface ContactInfo {
  email: string;
  phone?: string;
  whatsapp?: string;
  location?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Stat {
  value: string; // Ej: "4+", "15+", "25+"
  label: string; // Ej: "Años de experiencia"
}

export interface Feature {
  icon: string; // Nombre del icono desde icons.ts
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design' | 'other';
}

export interface Course {
  title: string;
  duration: string;
  year: number;
  provider?: string;
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  grade: string;
  description?: string;
}

export interface Project {
  id: string; // ID único para referencias
  title: string;
  summary?: string;
  description?: string;
  technologies: string[];
  type: 'web' | 'mobile' | 'iot' | 'desktop' | 'api' | 'infrastructure';
  year?: number;
  company?: string;
  slug?: string;
  longDescription?: string;
  images?: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean; // Para destacar proyectos principales
  status?: 'completed' | 'in-progress' | 'maintained'; // Estado del proyecto
}

export interface Service {
  slug: string;
  icon?: string;
  features?: string[];
  price?: { from?: string; currency?: string } | string;
  ctaUrl?: string;
  order?: number;
}

// Separamos Experience de Projects
export interface Experience {
  id: string;
  company: string;
  position?: string; // Cargo específico
  period: string;
  description?: string; // Descripción general del trabajo
  projectIds: string[]; // Referencias a proyectos por ID
  achievements?: string[]; // Logros específicos en la empresa
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string; // Descripción breve para Hero
  summary: string; // Resumen más detallado para About
  profileImage?: string;
  cv?: string;
  stats: Stat[]; // Estadísticas clave
  features: Feature[]; // Características/especialidades
}

export interface Portfolio {
  personal: PersonalInfo;
  contact: ContactInfo;
  social: SocialLink[];
  skills: Skill[];
  projects: Project[]; // Ahora separado
  experience: Experience[]; // Solo info de empresa + referencias
  services?: Service[];
  education: Education[];
  courses: Course[];
}
