import React from "react";

import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { TranslatedDate, getTranslatedMarkdownRemark } from "../Translation";
import { JOB_TYPE_MESSAGES, TITLE_MESSAGES } from "../CommonFormattedMessage";

import { COMMON_STYLES } from "./CommonStyles";

type Props = {
  job: Queries.JobsJsonEdge;
  intl: IntlShape;
  lang: "fr" | "en";
};

const JobSection = ({
  job: {
    node: { company, title, from, to, type, desc, tags },
  },
  intl: { formatMessage },
  lang,
}: Props) => (
  <View style={COMMON_STYLES.block} wrap={false}>
    <View style={COMMON_STYLES.dateColumn}>
      <Text>{from && <TranslatedDate date={from} local={lang} />} - </Text>
      <Text>
        {(to && <TranslatedDate date={to} local={lang} />) || "TODAY"}
      </Text>
    </View>
    <View style={COMMON_STYLES.detailsColumn}>
      <Text style={COMMON_STYLES.title1}>{company}</Text>
      <Text style={COMMON_STYLES.title2}>
        {title && formatMessage(TITLE_MESSAGES[title])}
        {type && `, ${formatMessage(JOB_TYPE_MESSAGES[type])}`}
      </Text>
      <Text style={COMMON_STYLES.title2}>{tags?.join(", ")}</Text>
      <Text>
        {desc && getTranslatedMarkdownRemark(desc, lang)?.rawMarkdownBody}
      </Text>
    </View>
  </View>
);

export default JobSection;
