import React from "react";

import { View, Text } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { GENERAL_MESSAGES } from "../../CommonFormattedMessage";

import { COMMON_STYLES } from "../CommonStyles";

import ProjectEntry from "./ProjectEntry";

export type ProjectSectionProps = {
  projects: Queries.ProjectsJson[];
  intl: IntlShape;
  lang: "fr" | "en";
};

/**
 * Render the project section of the pdf resume
 */
const ProjectSection = ({ projects, intl, lang }: ProjectSectionProps) => (
  <View style={COMMON_STYLES.section} wrap={false}>
    <Text style={COMMON_STYLES.sectionTitle}>
      {intl.formatMessage(GENERAL_MESSAGES.personalProjects)}
    </Text>
    {projects.map((project, idx) => (
      <ProjectEntry key={idx} project={project} intl={intl} lang={lang} />
    ))}
  </View>
);

export default ProjectSection;
