import React from "react";

import { View, Document, Page, Text } from "@react-pdf/renderer";

type Props = {
  job: Queries.JobsJsonEdge;
};

const JobSection = ({
  job: {
    node: { company, title, from, to, type, desc },
  },
}: Props) => (
  <View>
    <Text>{company}</Text>
    <Text>{title}</Text>
    <Text>
      {from} - {to}
    </Text>
    <Text>{desc["fr"].childMarkdownRemark?.rawMarkdownBody}</Text>
  </View>
);

export default JobSection;
