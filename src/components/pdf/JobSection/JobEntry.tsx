import React from "react";

import { View, Text } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { TranslatedDate } from "../../Translation";
import {
  JOB_TYPE_MESSAGES,
  TITLE_MESSAGES,
} from "../../CommonFormattedMessage";

import { COMMON_STYLES } from "../CommonStyles";

type Props = {
  job: Queries.JobsJson;
  intl: IntlShape;
  lang: "fr" | "en";
};

const JobEntry = ({
  job: { company, title, from, to, type, desc, tags },
  intl: { formatMessage },
  lang,
}: Props) => (
  <View style={COMMON_STYLES.entry} wrap>
    <Text style={COMMON_STYLES.entryTitle}>
      {/** @ts-ignore */}
      {title && formatMessage(TITLE_MESSAGES[title])}, {company}
    </Text>
    <Text style={COMMON_STYLES.entryDetail}>
      {from && <TranslatedDate date={from} local={lang} />} -{" "}
      {(to && <TranslatedDate date={to} local={lang} />) || "TODAY"}{" "}
      {/** @ts-ignore */}
      {type && `, ${formatMessage(JOB_TYPE_MESSAGES[type])}`}
    </Text>
    <Text style={COMMON_STYLES.entryDetail}>{tags?.join(", ")}</Text>
  </View>
);

export default JobEntry;