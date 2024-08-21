import React from "react";

import { IntlShape } from "react-intl";

import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";

import { GENERAL_MESSAGES } from "../CommonFormattedMessage";

type Props = {
  intl: IntlShape;
  lang: "fr" | "en";
};

const LEFT_ALIGN_PADDING = 10;

const styles = StyleSheet.create({
  name: { fontSize: 15, textAlign: "center", fontWeight: "bold" },
  title: { fontSize: 11, textAlign: "center", marginVertical: 10 },
  blocTitle: {
    fontWeight: "bold",
    fontSize: 12,
    paddingVertical: 3,
    paddingLeft: LEFT_ALIGN_PADDING,
  },
  infoBloc: {
    paddingVertical: 2,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  infoType: {
    fontWeight: "bold",
    paddingLeft: LEFT_ALIGN_PADDING,
  },
  infoValue: { paddingLeft: LEFT_ALIGN_PADDING, color: "blue" },
});

const InfoSection = ({ intl: { formatMessage } }: Props) => (
  <View>
    <Text style={styles.name}>A. BABEY</Text>
    <Text style={styles.title}>{formatMessage(GENERAL_MESSAGES.title)}</Text>
    <View>
      <View style={styles.infoBloc}>
        <Text style={styles.infoType}>E-mail</Text>
        <Link src="mailto:contact@ababey.com">
          <Text style={styles.infoValue}>contact@ababey.com</Text>
        </Link>
      </View>
      <View style={styles.infoBloc}>
        <Text style={styles.infoType}>Github</Text>
        <Link src="https://github.com/babeya">
          <Text style={styles.infoValue}>github.com/babeya</Text>
        </Link>
      </View>
      <View style={styles.infoBloc}>
        <Text style={styles.infoType}>LinkedIn</Text>
        <Link src="https://www.linkedin.com/in/a-babey/">
          <Text style={styles.infoValue}>linkedin.com/in/a-babey/</Text>
        </Link>
      </View>
    </View>
  </View>
);

export default InfoSection;
