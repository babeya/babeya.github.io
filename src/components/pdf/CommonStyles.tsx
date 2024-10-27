import { StyleSheet } from "@react-pdf/renderer";

export const COMMON_STYLES = StyleSheet.create({
  block: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 4,
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
    fontWeight: "bold",
  },
  title2: {
    fontSize: 10,
    marginBottom: 3,
    fontStyle: "italic",
  },
  title3: {
    fontSize: 10,
    marginBottom: 3,
    fontStyle: "italic",
  },
});
