import React, { useState, useMemo } from "react";

import { Helmet } from "react-helmet";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import { LangContext } from "../Translation";

type Props = {
  children: React.ReactNode;
  lang: string;
};

const Page = ({ children, lang }: Props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"dark" | "light">(
    prefersDarkMode ? "dark" : "light"
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                A. Babey
              </Typography>
              <Button>🇫🇷</Button>
            </Toolbar>
          </AppBar>
          <Container maxWidth="md" sx={{ paddingY: 2 }}>
            {children}
          </Container>
        </ThemeProvider>
      </LangContext.Provider>
    </>
  );
};

export default Page;
