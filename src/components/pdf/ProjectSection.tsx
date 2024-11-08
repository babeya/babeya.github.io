import React from "react";

import { View, Text } from "@react-pdf/renderer";
import { IntlShape } from "react-intl";

import { TranslatedDate, getTranslatedMarkdownRemark } from "../Translation";
import { JOB_TYPE_MESSAGES, TITLE_MESSAGES } from "../CommonFormattedMessage";

import { COMMON_STYLES } from "./CommonStyles";

export type ProjectSectionProps = {
  project: Queries.ProjectsJsonEdge;
  intl: IntlShape;
  lang: "fr" | "en";
};

const ProjectSection = ({
  project: {
    node: { type, desc, tags, release, link },
  },
  intl: { formatMessage },
  lang,
}: ProjectSectionProps) => (
  <View style={COMMON_STYLES.block} wrap={false}>
    <View style={COMMON_STYLES.dateColumn}>
      <Text>{release && <TranslatedDate date={release} local={lang} />}</Text>
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

export default ProjectSection;
