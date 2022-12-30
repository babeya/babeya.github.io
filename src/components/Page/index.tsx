import React, { useState, useMemo } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">A. Babey</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ paddingY: 2 }}>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Page;
