import React from "react";

import Box from "@mui/material/Box";

type Props = {
  level: number;
  children: React.ReactNode;
  lineNumberTxt?: React.ReactNode;
};

const EditorLevels = ({ level }: { level: number }) => {
  const result = [];

  for (let i = 0; i < level; i += 1) {
    result.push(
      <Box
        sx={{ borderLeft: 1, paddingLeft: 2, borderColor: "#666" }}
        key={i}
      />
    );
  }

  return <React.Fragment>{result}</React.Fragment>;
};

const EditorBlock = ({ level, children, lineNumberTxt }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "5em", fontSize: "0.75em" }}>{lineNumberTxt}</Box>
      <EditorLevels level={level} />
      <Box>{children}</Box>
    </Box>
  );
};

export default EditorBlock;
