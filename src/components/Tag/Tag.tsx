import React from "react";

import Typography from "@mui/material/Typography";

import EditorBlock from "../EditorBlock";

type Props = {
  name: string;
  level: number;
  lineNumberText?: React.ReactNode;
};

export const formatStartTagName = (name: string) => `<${name}>`;

export const formatEndTagName = (name: string) => `</${name}>`;

export const BaseTag = ({ name, level, lineNumberText }: Props) => (
  <EditorBlock level={level} lineNumberTxt={lineNumberText}>
    <Typography color="#C6FF00">{name}</Typography>
  </EditorBlock>
);

export const StartTag = ({ name, ...rest }: Props) => (
  <BaseTag {...rest} name={formatStartTagName(name)} />
);

export const EndTag = ({ name, ...rest }: Props) => (
  <BaseTag {...rest} name={formatEndTagName(name)} />
);
