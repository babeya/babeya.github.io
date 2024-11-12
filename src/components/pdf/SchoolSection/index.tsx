import React from "react";

import { View, Text } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { GENERAL_MESSAGES } from "../../CommonFormattedMessage";

import { COMMON_STYLES } from "../CommonStyles";

import SchoolEntry from "./SchoolEntry";

export type ProjectSectionProps = {
  schools: Queries.SchoolsJson[];
  intl: IntlShape;
  lang: "fr" | "en";
};

/**
 * Render the project section of the pdf resume
 */
const ProjectSection = ({ schools, intl, lang }: ProjectSectionProps) => (
  <View style={COMMON_STYLES.section}>
    <Text style={COMMON_STYLES.sectionTitle}>
      {intl.formatMessage(GENERAL_MESSAGES.personalProjects)}
    </Text>
    {schools.map((school, idx) => (
      <SchoolEntry key={idx} school={school} intl={intl} lang={lang} />
    ))}
  </View>
);

export default ProjectSection;
