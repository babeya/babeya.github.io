import React from "react";

/*import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  // PDFViewer,
} from "@react-pdf/renderer";*/

// Create styles
/*
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);*/

const PdfPage = ({ location }) => {
  console.log(location);

  const params = new URLSearchParams(location.search);

  return <div>WIP</div>;
};

export default PdfPage;
