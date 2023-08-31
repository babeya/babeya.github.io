import React from "react";

import { View, Text } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { TranslatedDate } from "../Translation";
import { JOB_TYPE_MESSAGES, TITLE_MESSAGES } from "../CommonFormattedMessage";

type Props = {
  job: Queries.JobsJsonEdge;
  intl: IntlShape;
};

const JobSection = ({
  job: {
    node: { company, title, from, to, type, desc },
  },
  intl: { formatMessage },
}: Props) => (
  <View>
    <Text>{company}</Text>
    <Text>{title && formatMessage(TITLE_MESSAGES[title])}</Text>
    <Text>{type && formatMessage(JOB_TYPE_MESSAGES[type])}</Text>
    <Text>
      {from && <TranslatedDate date={from} />} -{" "}
      {(to && <TranslatedDate date={to} />) || "TODAY"}
    </Text>
    <Text>{desc["fr"].childMarkdownRemark?.rawMarkdownBody}</Text>
  </View>
);
export default JobSection;
