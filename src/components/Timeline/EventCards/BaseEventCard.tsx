import React from "react";

import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";

type Props = {
  children: React.ReactNode;
  icon: React.ReactNode;
  colors?: string[];
  tags: string[];
  selectedTags: string[];
};

const BaseEventCard = ({
  children,
  icon,
  colors,
  tags,
  selectedTags,
}: Props) => {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid sx={{ position: "relative" }} xs={1}>
        <Box sx={{ margin: 1 }}>
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
      </Grid>
      <Grid xs={12} md={11} sx={{ margin: 1 }}>
        <Card
          sx={{
            flex: 1,
            padding: 2,
          }}
          elevation={3}
        >
          {children}
          <Stack direction="row-reverse" spacing={1} marginY={1}>
            {(tags || []).map((tag) => (
              <Chip
                label={tag}
                key={tag}
                size="small"
                variant="outlined"
                color={selectedTags.includes(tag) ? "primary" : undefined}
              />
            ))}
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BaseEventCard;
