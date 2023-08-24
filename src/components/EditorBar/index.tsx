import React from "react";

import { FormattedMessage } from "react-intl";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CodeIcon from "@mui/icons-material/Code";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const EditorBar = () => (
  <Box display="flex" alignItems="center">
    <Box>
      <Typography marginY={2}>
        <FormattedMessage id="timeline.title" defaultMessage="Curriculum" />
      </Typography>
    </Box>
    <Box flex={1} />
    <Box>
      <IconButton size="small">
        <CodeIcon />
      </IconButton>
      <IconButton size="small">
        <TextSnippetIcon />
      </IconButton>
      <IconButton size="small">
        <PictureAsPdfIcon />
      </IconButton>
    </Box>
  </Box>
);

export default EditorBar;
