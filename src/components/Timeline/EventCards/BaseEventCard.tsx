import React from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import Fab from "@mui/material/Fab";

type Props = {
  children: React.ReactNode;
  icon: React.ReactNode;
  colors?: string[];
};

const BaseEventCard = ({ children, icon, colors }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingY: 2,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box sx={{ transform: "translate(-50%)" }}>
          <Fab
            size="medium"
            sx={{
              pointerEvents: "none",
              boxShadow: "none",
              background: (colors && colors[0]) || undefined,
            }}
          >
            {icon}
          </Fab>
        </Box>
      </Box>
      <Card
        sx={{
          flex: 1,
          padding: 1,
        }}
        elevation={2}
      >
        {children}
      </Card>
    </Box>
  );
};

export default BaseEventCard;
