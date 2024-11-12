import React from "react";

import { View, Text } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { TranslatedDate } from "../../Translation";

import { COMMON_STYLES } from "../CommonStyles";

type Props = {
  school: Queries.SchoolsJson;
  intl: IntlShape;
  lang: "fr" | "en";
};

const SchoolEntry = ({
  school: { tags, from, to, link, school, diploma },
  intl: { formatMessage },
  lang,
}: Props) => (
  <View style={COMMON_STYLES.entry}>
    <Text style={COMMON_STYLES.entryTitle}>
      {diploma}, {school}
    </Text>
    <Text style={COMMON_STYLES.entryDetail}>
      {from && <TranslatedDate date={from} local={lang} />} -{" "}
      {(to && <TranslatedDate date={to} local={lang} />) || "TODAY"}{" "}
    </Text>
    <Text style={COMMON_STYLES.entryDetail}>{tags?.join(", ")}</Text>
  </View>
);

export default SchoolEntry;
