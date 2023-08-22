import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import { Settings } from "luxon";

import { ThemeProvider } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

import messages from "../../messages";

import { LangContext } from "../Translation";
import LangSelector from "../LangSelector";
import useTheme from "../Theme";

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
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  A. Babey
                </Typography>
                <LangSelector />
              </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ paddingY: 0.5 }}>
              <Paper elevation={0}>{children}</Paper>
            </Container>
          </ThemeProvider>
        </IntlProvider>
      </LangContext.Provider>
    </>
  );
};

export default Page;
