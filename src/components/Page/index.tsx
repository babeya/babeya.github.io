import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import { Settings } from "luxon";

import { ThemeProvider } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

import messages from "../../messages";

import { LangContext } from "../Translation";
import LangSelector from "../LangSelector";
import useTheme from "../Theme";
import LeftDrawer from "../LeftDrawer";

type Props = {
  children: React.ReactNode;
  lang: "fr" | "en";
};

const Page = ({ children, lang }: Props) => {
  useEffect(() => {
    Settings.defaultLocale = lang;
  }, [lang]);

  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <title>BABEY A.</title>
      </Helmet>
      <LangContext.Provider value={{ lang }}>
        <IntlProvider
          locale={lang}
          defaultLocale="fr"
          messages={lang === "fr" ? undefined : messages}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                maxHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h6">A. BABEY</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  overflow: "hidden",
                  alignItems: "flex-start",
                  position: "relative",
                }}
              >
                <LeftDrawer />
                <Paper
                  elevation={0}
                  sx={{ overflow: "scroll", flex: 1, maxHeight: "100vh" }}
                >
                  {children}
                </Paper>
              </Box>
              <Box>Hello</Box>
            </Box>
          </ThemeProvider>
        </IntlProvider>
      </LangContext.Provider>
    </>
  );
};

export default Page;
