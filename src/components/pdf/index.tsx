import React from "react";

import { View, Document, Page, Text } from "@react-pdf/renderer";

import JobSection from "./JobSection";

type Props = {
  jobs: Queries.JobsJsonEdge[];
  projects: Queries.ProjectsJsonEdge[];
};

const Resume = ({ jobs }: Props) => (
  <Document>
    <Page>
      <View>
        <Text>A.BABEY</Text>
        <Text>contact@ababey.com </Text>
      </View>

      {jobs.map((job) => (
        <JobSection job={job} />
      ))}
    </Page>
  </Document>
);

export default Resume;
