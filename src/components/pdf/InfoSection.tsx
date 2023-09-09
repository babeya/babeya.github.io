import React from "react";

import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";

const LEFT_ALIGN_PADDING = 10;

const styles = StyleSheet.create({
  info: {
    width: 125,
    backgroundColor: "#444",
    color: "#ffffff",
    paddingTop: 10,
    height: "100%",
  },
  name: { fontSize: 15, paddingLeft: LEFT_ALIGN_PADDING },
  title: { fontSize: 11, paddingLeft: LEFT_ALIGN_PADDING, marginVertical: 10 },
  blocTitle: {
    fontWeight: "bold",
    fontSize: 12,
    backgroundColor: "#222",
    paddingVertical: 3,
    paddingLeft: LEFT_ALIGN_PADDING,
  },
  infoBloc: {
    paddingVertical: 5,
  },
  infoType: {
    fontWeight: "bold",
    paddingLeft: LEFT_ALIGN_PADDING,
    marginBottom: 3,
  },
  infoValue: { paddingLeft: LEFT_ALIGN_PADDING, color: "#fff" },
});

const InfoSection = () => (
  <View style={styles.info}>
    <Text style={styles.name}>A. BABEY</Text>
    <Text style={styles.title}>Javascript Typescript developer</Text>
    <View>
      <Text style={styles.blocTitle}>Personal info</Text>
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
