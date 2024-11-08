import React from "react";

import { IntlShape } from "react-intl";
import {
  View,
  Document,
  Page,
  StyleSheet,
  Text,
  Font,
} from "@react-pdf/renderer";

import JobSection from "./JobSection";
import InfoSection from "./InfoSection";
import { GENERAL_MESSAGES } from "../CommonFormattedMessage";

type Props = {
  jobs: Queries.JobsJsonEdge[];
  projects: Queries.ProjectsJsonEdge[];
  intl: IntlShape;
  lang: "fr" | "en";
};

Font.register({
  family: "Lato",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: { fontSize: 9 },
  layout: { display: "flex", flexDirection: "row", height: "100%" },
  content: { flex: 1, paddingHorizontal: 10 },
  contentTitle: {
    borderTop: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    paddingVertical: 3,
    marginVertical: 4,
    fontSize: 13,
    fontWeight: "bold",
  },
});

const Resume = ({ jobs, intl, lang }: Props) => (
  <Document>
    <Page style={styles.page} wrap>
      <InfoSection intl={intl} lang={lang} />
      <View style={styles.content}>
        <Text style={styles.contentTitle}>
          {intl.formatMessage(GENERAL_MESSAGES.professionalExperiences)}
        </Text>
        {jobs.map((job) => (
          <JobSection job={job} intl={intl} lang={lang} />
        ))}
        <Text style={styles.contentTitle}>
          {intl.formatMessage(GENERAL_MESSAGES.personalProjects)}
        </Text>
        {/* {projects.map((project) => (
          <ProjectSection project={project} intl={intl} lang={lang} />
        ))} */}
        <Text style={styles.contentTitle}>
          {intl.formatMessage(GENERAL_MESSAGES.education)}
        </Text>
      </View>
    </Page>
  </Document>
);

export default Resume;
