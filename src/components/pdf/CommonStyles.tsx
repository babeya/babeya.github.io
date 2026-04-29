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

export const PDF_COLORS = {
  page: "#ffffff",
  headerBg: "#f6f9f7",
  text: "#0f172a",
  textSoft: "#334155",
  muted: "#64748b",
  border: "#dce7df",
  primary: "#16a34a",
  primaryDark: "#15803d",
};

export const COMMON_STYLES = StyleSheet.create({
  page: {
    fontSize: 9,
    fontFamily: "Lato",
    color: PDF_COLORS.text,
    backgroundColor: PDF_COLORS.page,
    paddingBottom: 10,
  },
  section: {
    marginHorizontal: 18,
    marginTop: 10,
    paddingTop: 7,
    borderTop: `1.2pt solid ${PDF_COLORS.border}`,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: PDF_COLORS.primaryDark,
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
    color: PDF_COLORS.text,
  },
  entryLink: {
    color: PDF_COLORS.text,
  },
  entryDetail: {
    fontSize: 9,
    color: PDF_COLORS.textSoft,
    lineHeight: 1.35,
  },
  entryTags: {
    fontSize: 7.5,
    color: PDF_COLORS.muted,
    marginTop: 2,
  },
});
