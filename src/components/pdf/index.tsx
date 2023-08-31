import React from "react";

import { IntlShape } from "react-intl";
import { View, Document, Page, Text } from "@react-pdf/renderer";

import JobSection from "./JobSection";

type Props = {
  jobs: Queries.JobsJsonEdge[];
  projects: Queries.ProjectsJsonEdge[];
  intl: IntlShape;
};

const Resume = ({ jobs, intl }: Props) => (
  <Document>
    <Page>
      <View>
        <Text>A.BABEY</Text>
        <Text>contact@ababey.com </Text>
      </View>

      {jobs.map((job) => (
        <JobSection job={job} intl={intl} />
      ))}
    </Page>
  </Document>
);

export default Resume;
