import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Lato",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
      fontWeight: 700,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    fontFamily: "Lato",
  },
  header: {
    backgroundColor: "#3498db",
    padding: 20,
    color: "white",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 700,
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 5,
  },
  section: {
    margin: 10,
    padding: 15,
    flexGrow: 1,
    borderLeft: "3pt solid #3498db",
    backgroundColor: "#f8f9fa",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 10,
    color: "#2c3e50",
  },
  entry: {
    marginBottom: 10,
  },
  entryTitle: {
    fontSize: 14,
    fontWeight: 700,
  },
  entryDetail: {
    fontSize: 12,
    color: "#34495e",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#7f8c8d",
    fontSize: 10,
  },
  icon: {
    marginRight: 5,
    width: 10,
    height: 10,
  },
});

// Create Document Component
export default function FunkyCVTemplate() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your Name</Text>
          <Text style={styles.headerSubtitle}>Software Engineer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <FontAwesomeIcon style={styles.icon} icon="user" /> About Me
          </Text>
          <Text style={styles.entryDetail}>
            A passionate software engineer with expertise in web development and
            a knack for creating elegant solutions to complex problems.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <FontAwesomeIcon style={styles.icon} icon="briefcase" /> Work
            Experience
          </Text>
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>
              Senior Developer, Tech Innovators Inc.
            </Text>
            <Text style={styles.entryDetail}>2018 - Present</Text>
            <Text style={styles.entryDetail}>
              • Led development of a high-traffic e-commerce platform
            </Text>
            <Text style={styles.entryDetail}>
              • Mentored junior developers and implemented best practices
            </Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>
              Full Stack Developer, StartUp Solutions
            </Text>
            <Text style={styles.entryDetail}>2015 - 2018</Text>
            <Text style={styles.entryDetail}>
              • Developed and maintained multiple client websites
            </Text>
            <Text style={styles.entryDetail}>
              • Implemented responsive design principles across projects
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <FontAwesomeIcon style={styles.icon} icon="graduation-cap" />{" "}
            Education
          </Text>
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>BSc in Computer Science</Text>
            <Text style={styles.entryDetail}>
              University of Technology, 2015
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <FontAwesomeIcon style={styles.icon} icon="cogs" /> Skills
          </Text>
          <Text style={styles.entryDetail}>
            JavaScript, React, Node.js, Python, SQL, Git, Agile Methodologies
          </Text>
        </View>

        <View style={styles.footer}>
          <Text>
            <Link src="mailto:your.email@example.com">
              your.email@example.com
            </Link>{" "}
            | (123) 456-7890 | City, Country
          </Text>
        </View>
      </Page>
    </Document>
  );
}
