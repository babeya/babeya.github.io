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
  page: {
    fontSize: 9,
    fontFamily: "Lato",
    color: "#172033",
    backgroundColor: "#ffffff",
    paddingBottom: 10,
  },
  section: {
    marginHorizontal: 18,
    marginTop: 10,
    paddingTop: 7,
    borderTop: "1.2pt solid #d7dee8",
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#1455a0",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  entry: {
    marginTop: 8,
  },
  entryTitle: {
    fontSize: 10.5,
    fontWeight: 700,
    color: "#172033",
  },
  entryLink: {
    color: "#172033",
  },
  entryDetail: {
    fontSize: 9,
    color: "#29384d",
    lineHeight: 1.35,
  },
  entryTags: {
    fontSize: 7.5,
    color: "#596b83",
    marginTop: 2,
  },
});
