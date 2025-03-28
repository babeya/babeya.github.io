import React from "react";

import { IntlShape } from "react-intl";

import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";

import { EMAIL, EMAIL_LINK, GITHUB, LINKEDIN, NAME } from "../../config";

import { GENERAL_MESSAGES } from "../CommonFormattedMessage";

import { GithubPdfIcon, LinkedinPdfIcon, MailPdfIcon } from "./Icons";

type Props = {
  intl: IntlShape;
  lang: "fr" | "en";
};

const LEFT_ALIGN_PADDING = 10;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3498db",
    padding: 20,
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: { fontSize: 28, fontWeight: 700 },
  title: { fontSize: 14, marginTop: 5 },
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
  infoValue: { color: "white", marginLeft: 5 },
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
