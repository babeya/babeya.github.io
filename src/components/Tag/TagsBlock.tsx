import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import EditorBlock from "../EditorBlock";

import { StartTag, EndTag, formatEndTagName, formatStartTagName } from "./Tag";

type Props = {
  name: string;
  children: React.ReactNode;
  level: number;
};

export const TagsBlock = ({ name, children, level }: Props) => (
  <React.Fragment>
    <StartTag level={level} name={name} />
    <Box>{children}</Box>
    <EndTag level={level} name={name} />
  </React.Fragment>
);

export const InlineTagsBlock = ({ name, children, level }: Props) => (
  <EditorBlock level={level}>
    <Typography component="span" color="#C6FF00">
      {formatStartTagName(name)}
    </Typography>
    <Box component="span">{children}</Box>
    <Typography component="span" color="#C6FF00">
      {formatEndTagName(name)}
    </Typography>
  </EditorBlock>
);
