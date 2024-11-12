import React from "react";

import { View, Text, Link } from "@react-pdf/renderer";
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
  job: { company, title, from, to, type, desc, tags, shortDesc, link },
  intl: { formatMessage },
  lang,
}: Props) => (
  <View style={COMMON_STYLES.entry} wrap>
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
    <Text style={COMMON_STYLES.entryDetail}>
      {from && <TranslatedDate date={from} local={lang} />} -{" "}
      {(to && <TranslatedDate date={to} local={lang} />) || "TODAY"}{" "}
      {/** @ts-ignore */}
      {type && `, ${formatMessage(JOB_TYPE_MESSAGES[type])}`}
    </Text>
    {shortDesc && shortDesc[lang]
      ? shortDesc[lang].map((desc) => (
          <Text style={COMMON_STYLES.entryDetail}>
            {"• "}
            {desc}
          </Text>
        ))
      : null}
    <Text style={COMMON_STYLES.entryTags}>{tags?.join(", ")}</Text>
  </View>
);

export default JobEntry;
