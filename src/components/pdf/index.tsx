import React from "react";

import { View, Document, Page, Text } from "@react-pdf/renderer";

type Props = {
  data: (Queries.JobsJsonEdge | Queries.ProjectsJsonEdge)[];
};

const Resume = ({ data }: Props) => (
  <Document>
    <Page>
      <View>
        <Text>A.BABEY</Text>
        <Text>contact@ababey.com </Text>
      </View>

      {data.map((elem) => (
        <View>
          <Text>{elem.node.company || elem.node.name}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default Resume;
