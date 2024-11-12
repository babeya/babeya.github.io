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
import ProjectSection from "./ProjectSection";
import InfoSection from "./InfoSection";

type Props = {
  jobs: Queries.JobsJson[];
  projects: Queries.ProjectsJson[];
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
  page: { fontSize: 9, fontFamily: "Lato" },
});

const Resume = ({ jobs, projects, intl, lang }: Props) => (
  <Document>
    <Page style={styles.page} wrap size="A4">
      <InfoSection intl={intl} lang={lang} />
      <View>
        <JobSection jobs={jobs} intl={intl} lang={lang} />
        {/* <EducationSection education={education} intl={intl} lang={lang} /> */}
        <ProjectSection projects={projects} intl={intl} lang={lang} />
      </View>
    </Page>
  </Document>
);

export default Resume;
