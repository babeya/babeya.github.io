import { useState, useMemo } from "react";

import { createTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

const useTheme = () => {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<"dark" | "light">(
    //  "dark" : "light"
    "dark"
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: [
            "Source Code Pro",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return {
    theme,
    mode,
    setMode,
  };
};

export default useTheme;
