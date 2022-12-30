import React from "react";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import Fab from "@mui/material/Fab";

type Props = {
  children: React.ReactNode;
  icon: React.ReactNode;
};

const BaseEventCard = ({ children, icon }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box sx={{ transform: "translate(-50%)" }}>
          <Fab size="medium" sx={{ pointerEvents: "none", boxShadow: "none" }}>
            {icon}
          </Fab>
        </Box>
      </Box>
      <Card sx={{ padding: 1, flex: 1 }} elevation={1}>
        {children}
      </Card>
    </Box>
  );
};

export default BaseEventCard;
