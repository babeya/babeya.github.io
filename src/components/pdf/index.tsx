import React from "react";

import { IntlShape } from "react-intl";
import { View, Document, Page, StyleSheet, Text } from "@react-pdf/renderer";

import JobSection from "./JobSection";
import InfoSection from "./InfoSection";

type Props = {
  jobs: Queries.JobsJsonEdge[];
  projects: Queries.ProjectsJsonEdge[];
  intl: IntlShape;
  lang: "fr" | "en";
};

const styles = StyleSheet.create({
  page: { fontSize: 9 },
  layout: { display: "flex", flexDirection: "row", height: "100%" },
  info: { width: 125, backgroundColor: "#444", color: "#ffffff" },
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
    <Page style={styles.page}>
      <View style={styles.layout}>
        <InfoSection />
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Experiences</Text>
          {jobs.map((job) => (
            <JobSection job={job} intl={intl} lang={lang} />
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
