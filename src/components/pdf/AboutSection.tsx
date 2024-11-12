import React from "react";

import { IntlShape } from "react-intl";

import { View, Text } from "@react-pdf/renderer";

import { COMMON_STYLES } from "./CommonStyles";
import { GENERAL_MESSAGES } from "../CommonFormattedMessage";

type Props = {
  intl: IntlShape;
  lang: "fr" | "en";
};

const AboutSection = ({ intl: { formatMessage } }: Props) => (
  <View style={COMMON_STYLES.section}>
    <Text style={COMMON_STYLES.sectionTitle}>
      {formatMessage(GENERAL_MESSAGES.about)}
    </Text>
    <Text style={COMMON_STYLES.entryDetail}>
      {formatMessage(GENERAL_MESSAGES.aboutContent)}
    </Text>
  </View>
);

export default AboutSection;
