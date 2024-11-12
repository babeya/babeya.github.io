import React from "react";

import { View, Text } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { TranslatedDate } from "../../Translation";

import { COMMON_STYLES } from "../CommonStyles";

type Props = {
  project: Queries.ProjectsJson;
  intl: IntlShape;
  lang: "fr" | "en";
};

const ProjectEntry = ({
  project: { type, desc, tags, from, link, name },
  intl: { formatMessage },
  lang,
}: Props) => (
  <View style={COMMON_STYLES.entry} wrap>
    <Text style={COMMON_STYLES.entryTitle}>{name}</Text>
    <Text style={COMMON_STYLES.entryDetail}>
      {from && <TranslatedDate date={from} local={lang} />}
      {/** @ts-ignore */}
      {/*type && `, ${formatMessage(JOB_TYPE_MESSAGES[type])}`*/}
    </Text>
    <Text style={COMMON_STYLES.entryDetail}>{tags?.join(", ")}</Text>
  </View>
);

export default ProjectEntry;
