import React from 'react';
import styles from './Section.module.scss';
import clsx from 'clsx';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  alternate?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  className,
  children,
  alternate = false,
}) => {
  return (
    <section
      id={id}
      className={clsx(
        styles.section,
        alternate && styles.section_alt,
        className
      )}
    >
      {title && (
        <h2 className={styles.section__title}>{title}</h2>
      )}
      <div className={styles.section__content}>
        {children}
      </div>
    </section>
  );
}; 