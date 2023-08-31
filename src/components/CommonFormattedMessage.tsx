import React from "react";

import { FormattedMessage, defineMessages } from "react-intl";

// TITLE

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
