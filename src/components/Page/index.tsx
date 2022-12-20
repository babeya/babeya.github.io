import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">{children}</Container>
  </React.Fragment>
);

export default Page;
