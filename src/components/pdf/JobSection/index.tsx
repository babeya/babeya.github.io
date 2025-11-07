import React from "react";

import { View, Text } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { GENERAL_MESSAGES } from "../../CommonFormattedMessage";

import { COMMON_STYLES } from "../CommonStyles";

import JobEntry from "./JobEntry";

type Props = {
  jobs: Queries.JobsJson[];
  intl: IntlShape;
  lang: "fr" | "en";
};

/**
 * Render the job section of the pdf resume
 */
const JobSection = ({ jobs, intl, lang }: Props) => (
  <View style={COMMON_STYLES.section}>
    <Text style={COMMON_STYLES.sectionTitle}>
      {intl.formatMessage(GENERAL_MESSAGES.professionalExperiences)}
    </Text>
    {jobs.map((job, idx) => (
      <JobEntry job={job} intl={intl} lang={lang} key={idx} />
    ))}
  </View>
);

export default JobSection;
