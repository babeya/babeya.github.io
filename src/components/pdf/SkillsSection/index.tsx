import React from "react";

import { IntlShape } from "react-intl";

import { View, Text, StyleSheet } from "@react-pdf/renderer";

import { COMMON_STYLES, PDF_COLORS } from "./../CommonStyles";
import { SKILLS_MESSAGES } from "../../CommonFormattedMessage";

type Props = {
  intl: IntlShape;
  lang: "fr" | "en";
};

const STYLES = StyleSheet.create({
  skillLabel: {
    fontWeight: 700,
    color: PDF_COLORS.text,
  },
  skillsGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 2,
  },
  skillLine: {
    width: "50%",
    paddingRight: 8,
    marginTop: 3,
  },
});

const SkillsSection = ({ intl: { formatMessage } }: Props) => (
  <View style={COMMON_STYLES.section}>
    <Text style={COMMON_STYLES.sectionTitle}>
      {formatMessage(SKILLS_MESSAGES.title)}
    </Text>
    <View style={STYLES.skillsGrid}>
      <Text style={[COMMON_STYLES.entryDetail, STYLES.skillLine]}>
        <Text style={STYLES.skillLabel}>
          {formatMessage(SKILLS_MESSAGES.frontEnd)}
        </Text>
        <Text>
          : React, Next.js, TypeScript, JavaScript, React Native, TailwindCSS
        </Text>
      </Text>
      <Text style={[COMMON_STYLES.entryDetail, STYLES.skillLine]}>
        <Text style={STYLES.skillLabel}>
          {formatMessage(SKILLS_MESSAGES.tests)}
        </Text>
        <Text>: Jest, Cypress, React Testing Library</Text>
      </Text>
      <Text style={[COMMON_STYLES.entryDetail, STYLES.skillLine]}>
        <Text style={STYLES.skillLabel}>
          {formatMessage(SKILLS_MESSAGES.performance)}
        </Text>
        <Text>: Code-splitting, Lazy loading, Webpack, Lighthouse</Text>
      </Text>
      <Text style={[COMMON_STYLES.entryDetail, STYLES.skillLine]}>
        <Text style={STYLES.skillLabel}>
          {formatMessage(SKILLS_MESSAGES.apiAndData)}
        </Text>
        <Text>: GraphQL, REST, Apollo Client, data visualization</Text>
      </Text>
      <Text style={[COMMON_STYLES.entryDetail, STYLES.skillLine]}>
        <Text style={STYLES.skillLabel}>
          {formatMessage(SKILLS_MESSAGES.tools)}
        </Text>
        <Text>: Git, AWS, Docker, Firebase, CI/CD</Text>
      </Text>
    </View>
  </View>
);

export default SkillsSection;
