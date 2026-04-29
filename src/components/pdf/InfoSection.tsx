import React from "react";

import { IntlShape } from "react-intl";

import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";

import { EMAIL, EMAIL_LINK, GITHUB, LINKEDIN, NAME } from "../../config";

import { GENERAL_MESSAGES } from "../CommonFormattedMessage";

import { GithubPdfIcon, LinkedinPdfIcon, MailPdfIcon } from "./Icons";
import { PDF_COLORS } from "./CommonStyles";

type Props = {
  intl: IntlShape;
  lang: "fr" | "en";
};

const LEFT_ALIGN_PADDING = 10;

const styles = StyleSheet.create({
  header: {
    backgroundColor: PDF_COLORS.headerBg,
    borderBottom: `3pt solid ${PDF_COLORS.primary}`,
    paddingHorizontal: 18,
    paddingVertical: 16,
    color: PDF_COLORS.text,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: { fontSize: 25, fontWeight: 700, color: PDF_COLORS.text },
  title: { fontSize: 11, marginTop: 5, color: PDF_COLORS.primaryDark },
  blocTitle: {
    fontWeight: "bold",
    fontSize: 12,
    paddingVertical: 3,
    paddingLeft: LEFT_ALIGN_PADDING,
  },
  infoBloc: {
    paddingVertical: 3,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  infoType: {
    //fontWeight: "bold",
  },
  infoValue: { color: PDF_COLORS.text, marginLeft: 5, fontSize: 8.5 },
});

const InfoSection = ({ intl: { formatMessage } }: Props) => (
  <View style={styles.header}>
    <View>
      <Text style={styles.name}>{NAME}</Text>
      <Text style={styles.title}>{formatMessage(GENERAL_MESSAGES.title)}</Text>
    </View>
    <View>
      <View style={styles.infoBloc}>
        <MailPdfIcon />
        <Link src={EMAIL_LINK}>
          <Text style={styles.infoValue}>{EMAIL}</Text>
        </Link>
      </View>
      <View style={styles.infoBloc}>
        <GithubPdfIcon />
        <Link src={GITHUB}>
          <Text style={styles.infoValue}>babeya</Text>
        </Link>
      </View>
      <View style={styles.infoBloc}>
        <LinkedinPdfIcon />
        <Link href={LINKEDIN}>
          <Text style={styles.infoValue}>a-babey</Text>
        </Link>
      </View>
    </View>
  </View>
);

export default InfoSection;
