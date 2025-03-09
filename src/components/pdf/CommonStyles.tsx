import { StyleSheet, Font } from "@react-pdf/renderer";

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

export const COMMON_STYLES = StyleSheet.create({
  page: { fontSize: 9, fontFamily: "Lato" },
  section: {
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 7,
    //flexGrow: 1,
    borderLeft: "3pt solid #3498db",
    backgroundColor: "#f8f9fa",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#2c3e50",
  },
  entry: {
    marginTop: 10,
  },
  entryTitle: {
    fontSize: 12,
    fontWeight: 700,
  },
  entryLink: {
    color: "black",
  },
  entryDetail: {
    fontSize: 10,
    color: "#34495e",
  },
  entryTags: {
    fontSize: 8,
    color: "#34495e7a",
  },
});
