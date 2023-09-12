import React from "react";

import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { TranslatedDate, getTranslatedMarkdownRemark } from "../Translation";
import { JOB_TYPE_MESSAGES, TITLE_MESSAGES } from "../CommonFormattedMessage";

type Props = {
  job: Queries.JobsJsonEdge;
  intl: IntlShape;
  lang: "fr" | "en";
};

const styles = StyleSheet.create({
  block: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 4,
  },
  dateColumn: {
    width: 50,
  },
  detailsColumn: {
    flex: 1,
  },
  company: {
    fontSize: 12,
    marginBottom: 3,
    fontWeight: "bold",
  },
  jobInfo: {
    fontSize: 10,
    marginBottom: 3,
    fontStyle: "italic",
  },
});

const JobSection = ({
  job: {
    node: { company, title, from, to, type, desc },
  },
  intl: { formatMessage },
  lang,
}: Props) => (
  <View style={styles.block}>
    <View style={styles.dateColumn}>
      <Text>{from && <TranslatedDate date={from} local={lang} />} - </Text>
      <Text>
        {(to && <TranslatedDate date={to} local={lang} />) || "TODAY"}
      </Text>
    </View>
    <View style={styles.detailsColumn}>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.jobInfo}>
        {title && formatMessage(TITLE_MESSAGES[title])}
        {type && `, ${formatMessage(JOB_TYPE_MESSAGES[type])}`}
      </Text>
      <Text>
        {desc && getTranslatedMarkdownRemark(desc, lang)?.rawMarkdownBody}
      </Text>
    </View>
  </View>
);

export default JobSection;
