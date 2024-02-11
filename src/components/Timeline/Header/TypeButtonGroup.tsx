import React from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import WorkIcon from "@mui/icons-material/Work";
import WebIcon from "@mui/icons-material/Web";

const TypeButtonGroup = () => (
  <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button>
      <WorkIcon />
    </Button>
    <Button>
      <WebIcon />
    </Button>
  </ButtonGroup>
);

export default TypeButtonGroup;
