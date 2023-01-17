import React from "react";

import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

type Props = {
  children: React.ReactNode;
  icon: React.ReactNode;
  colors?: string[];
  tags: string[];
  selectedTags: string[];
  from?: React.ReactNode;
  to?: React.ReactNode;
};

const BaseEventCard = ({
  children,
  icon,
  colors,
  tags,
  selectedTags,
  from,
  to,
}: Props) => {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid sx={{ position: "relative", marginY: 1 }} xs={12}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid xs={4}>
            <Typography variant="overline">{from}</Typography>
          </Grid>
          <Grid>
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
          </Grid>
          <Grid xs={4} textAlign="right">
            <Typography variant="overline">{to}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Card
          sx={{
            margin: 1,
            flex: 1,
            padding: 2,
          }}
          elevation={3}
        >
          {children}
          <Stack direction="row-reverse" flexWrap="wrap">
            {(tags || []).map((tag) => (
              <Chip
                label={tag}
                key={tag}
                sx={{ margin: 0.5 }}
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
