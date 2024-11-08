import { profile } from "console";
import { title } from "process";
import React from "react";

import { FormattedMessage, defineMessages } from "react-intl";

const TRANSLATED_GENERAL_MESSAGES_CONFIG = {
  title: {
    id: "profile.title",
    defaultMessage: "Développeur Javascript / Typescript",
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

// JOB_TYPE

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
