import React from "react";

import { View, Text, Link } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { TranslatedDate } from "../../Translation";
import {
  JOB_TYPE_MESSAGES,
  TITLE_MESSAGES,
} from "../../CommonFormattedMessage";

import { COMMON_STYLES, PDF_COLORS } from "../CommonStyles";
import { StyleSheet } from "@react-pdf/renderer";

type Props = {
  job: Queries.JobsJson;
  intl: IntlShape;
  lang: "fr" | "en";
};

const STYLES = StyleSheet.create({
  meta: {
    color: PDF_COLORS.muted,
    marginTop: 1,
    marginBottom: 2,
  },
  bullet: {
    marginTop: 1.5,
  },
});

const JobEntry = ({
  job: { company, title, from, to, type, desc, tags, shortDesc, link },
  intl: { formatMessage },
  lang,
}: Props) => {
  const descriptions = shortDesc?.[lang] || [];

  return (
    <View style={COMMON_STYLES.entry} wrap={false}>
      <Text style={COMMON_STYLES.entryTitle}>
        {/** @ts-ignore */}
        {title && formatMessage(TITLE_MESSAGES[title])},{" "}
        {link ? (
          <Link href={link} style={COMMON_STYLES.entryLink}>
            {company}
          </Link>
        ) : (
          company
        )}
      </Text>
      <Text style={[COMMON_STYLES.entryDetail, STYLES.meta]}>
        {from && <TranslatedDate date={from} local={lang} />} -{" "}
      {(to && <TranslatedDate date={to} local={lang} />) ||
        (lang === "fr" ? "Aujourd'hui" : "Present")}{" "}
        {/** @ts-ignore */}
        {type && `, ${formatMessage(JOB_TYPE_MESSAGES[type])}`}
      </Text>
      {descriptions.map((desc, idx) => (
        <Text key={idx} style={[COMMON_STYLES.entryDetail, STYLES.bullet]}>
          {"• "}
          {desc}
        </Text>
      ))}
      <Text style={COMMON_STYLES.entryTags}>{tags?.join(", ")}</Text>
    </View>
  );
};

export default JobEntry;
