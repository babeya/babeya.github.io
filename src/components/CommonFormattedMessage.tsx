import React from "react";

import { FormattedMessage, defineMessages } from "react-intl";

const TRANSLATED_GENERAL_MESSAGES_CONFIG = {
  title: {
    id: "profile.title",
    defaultMessage: "Développeur Front-end (React / TypeScript)",
  },
  professionalExperiences: {
    id: "profile.professionalExperiences",
    defaultMessage: "Expériences professionnelles",
  },
  personalProjects: {
    id: "profile.personalProjects",
    defaultMessage: "Projets personnels",
  },
  education: {
    id: "profile.education",
    defaultMessage: "Formation",
  },
  about: {
    id: "profile.about",
    defaultMessage: "À propos",
  },
  aboutContent: {
    id: "profile.aboutContent",
    defaultMessage:
      "Développeur front-end avec plus de 10 ans d’expérience dans le développement d’applications web et mobiles. Spécialisé en React, Next.js et TypeScript, j’ai conçu des interfaces performantes et optimisées. Expérimenté en intégration d’APIs (GraphQL, REST) et bonnes pratiques de testing et CI/CD.",
  },
  generatedOn: {
    id: "profile.generatedOn",
    defaultMessage: "Généré sur",
  },
  contact: {
    id: "profile.contact",
    defaultMessage: "Contact",
  },
};

export const GENERAL_MESSAGES = defineMessages(
  TRANSLATED_GENERAL_MESSAGES_CONFIG
);

export const TRANSLATED_GENERAL_MESSAGES: { [key: string]: React.ReactNode } = {
  profileTitle: (
    <FormattedMessage {...TRANSLATED_GENERAL_MESSAGES_CONFIG.title} />
  ),
  professionalExperiences: (
    <FormattedMessage
      {...TRANSLATED_GENERAL_MESSAGES_CONFIG.professionalExperiences}
    />
  ),
  personalProjects: (
    <FormattedMessage
      {...TRANSLATED_GENERAL_MESSAGES_CONFIG.personalProjects}
    />
  ),
  education: (
    <FormattedMessage {...TRANSLATED_GENERAL_MESSAGES_CONFIG.education} />
  ),
  aboutContent: (
    <FormattedMessage {...TRANSLATED_GENERAL_MESSAGES_CONFIG.aboutContent} />
  ),
  contact: <FormattedMessage {...TRANSLATED_GENERAL_MESSAGES_CONFIG.contact} />,
};

// JOB TITLE
const TRANSLATED_TITLE_CONFIG = {
  mobile: {
    id: "job-title.mobile",
    defaultMessage: "Développeur Mobile",
  },
  front: {
    id: "job-title.front",
    defaultMessage: "Développeur Front-end",
  },
  fullStack: {
    id: "job-title.fullStack",
    defaultMessage: "Développeur Full-Stack",
  },
  tv: {
    id: "job-title.tv",
    defaultMessage: "Développeur TV / Console",
  },
  integrator: {
    id: "job-title.integrator",
    defaultMessage: "Intégrateur Front-end",
  },
};

export const TITLE_MESSAGES = defineMessages(TRANSLATED_TITLE_CONFIG);

export const TRANSLATED_TITLE: { [key: string]: React.ReactNode } = {
  mobile: <FormattedMessage {...TRANSLATED_TITLE_CONFIG.mobile} />,
  front: <FormattedMessage {...TRANSLATED_TITLE_CONFIG.front} />,
  fullStack: <FormattedMessage {...TRANSLATED_TITLE_CONFIG.fullStack} />,
  tv: <FormattedMessage {...TRANSLATED_TITLE_CONFIG.tv} />,
  integrator: <FormattedMessage {...TRANSLATED_TITLE_CONFIG.integrator} />,
};

const TRANSLATED_JOB_TYPE_CONFIG = {
  mission: { id: "job-type.mission", defaultMessage: "Mission" },
  internship: {
    id: "job-type.internship",
    defaultMessage: "Stage",
  },
  openEnded: { id: "job-type.openEnded", defaultMessage: "CDI" },
};

export const JOB_TYPE_MESSAGES = defineMessages(TRANSLATED_JOB_TYPE_CONFIG);

export const TRANSLATED_JOB_TYPE: { [key: string]: React.ReactNode } = {
  mission: <FormattedMessage {...TRANSLATED_JOB_TYPE_CONFIG.mission} />,
  internship: <FormattedMessage {...TRANSLATED_JOB_TYPE_CONFIG.internship} />,
  openEnded: <FormattedMessage {...TRANSLATED_JOB_TYPE_CONFIG.openEnded} />,
};

export const TRANSLATED_SKILLS_CONFIG = {
  title: {
    id: "skills.title",
    defaultMessage: "Compétences & Technologies",
  },
  frontEnd: {
    id: "skills.frontEnd",
    defaultMessage: "Front-end",
  },
  tests: {
    id: "skills.tests",
    defaultMessage: "Qualité & Tests",
  },
  performance: {
    id: "skills.performance",
    defaultMessage: "Performance & Optimisation",
  },
  apiAndData: {
    id: "skills.apiAndData",
    defaultMessage: "APIs & Gestion des données",
  },
  tools: {
    id: "skills.tools",
    defaultMessage: "Outils & DevOps",
  },
};

export const SKILLS_MESSAGES = defineMessages(TRANSLATED_SKILLS_CONFIG);

export const TRANSLATED_SKILLS: { [key: string]: React.ReactNode } = {
  title: <FormattedMessage {...TRANSLATED_SKILLS_CONFIG.title} />,
  frontEnd: <FormattedMessage {...TRANSLATED_SKILLS_CONFIG.frontEnd} />,
  tests: <FormattedMessage {...TRANSLATED_SKILLS_CONFIG.tests} />,
  performance: <FormattedMessage {...TRANSLATED_SKILLS_CONFIG.performance} />,
  apiAndData: <FormattedMessage {...TRANSLATED_SKILLS_CONFIG.apiAndData} />,
  tools: <FormattedMessage {...TRANSLATED_SKILLS_CONFIG.tools} />,
};
