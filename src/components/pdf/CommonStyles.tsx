import { StyleSheet } from "@react-pdf/renderer";

export const COMMON_STYLES = StyleSheet.create({
  block: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 4,
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

  dateColumn: {
    width: 50,
  },
  detailsColumn: {
    flex: 1,
  },
  title1: {
    fontSize: 12,
    marginBottom: 3,
    //fontWeight: "bold",
  },
  title2: {
    fontSize: 10,
    marginBottom: 3,
    // fontStyle: "italic",
  },
  title3: {
    fontSize: 10,
    marginBottom: 3,
    // fontStyle: "italic",
  },
});
