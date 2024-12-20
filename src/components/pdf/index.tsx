import React from "react";

import { IntlShape } from "react-intl";
import { View, Document, Page, Text, Link } from "@react-pdf/renderer";

import { COMMON_STYLES } from "./CommonStyles";
import { GENERAL_MESSAGES } from "../CommonFormattedMessage";

import JobSection from "./JobSection";
import ProjectSection from "./ProjectSection";
import SchoolSection from "./SchoolSection";
import InfoSection from "./InfoSection";
import AboutSection from "./AboutSection";

type Props = {
  jobs: Queries.JobsJson[];
  projects: Queries.ProjectsJson[];
  schools: Queries.SchoolsJson[];
  intl: IntlShape;
  lang: "fr" | "en";
};

const Resume = ({ jobs, projects, intl, lang, schools }: Props) => (
  <Document>
    <Page style={COMMON_STYLES.page} size="A4">
      <InfoSection intl={intl} lang={lang} />
      <View>
        <AboutSection intl={intl} lang={lang} />s
        {(jobs.length > 0 && (
          <JobSection jobs={jobs} intl={intl} lang={lang} />
        )) ||
          null}
        {(schools.length > 0 && (
          <SchoolSection schools={schools} intl={intl} lang={lang} />
        )) ||
          null}
        {(projects.length > 0 && (
          <ProjectSection projects={projects} intl={intl} lang={lang} />
        )) ||
          null}
      </View>
      <View
        fixed
        style={{
          position: "absolute",
          bottom: 2,
          color: "black",
          width: "100%",
        }}
      >
        <Text style={{ textAlign: "center" }}>
          {intl.formatMessage(GENERAL_MESSAGES.generatedOn)}{" "}
          <Link href="https://www.ababey.com">www.ababey.com</Link>
        </Text>
      </View>
    </Page>
  </Document>
);

export default Resume;
