import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import WorkIcon from "@mui/icons-material/Work";

import { TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = { job: Queries.JobsJson };

const JobCard = ({
  job: { company, desc, type, link, title, colors, tags },
}: Props) => (
  <BaseEventCard
    icon={<WorkIcon sx={{ fill: (colors && colors[1]) || undefined }} />}
    colors={colors}
    tags={tags || []} // TODO
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h5" sx={{ flex: 1 }}>
        {company}
      </Typography>
      {link ? (
        <IconButton href={link} target="__blank">
          <OpenInNewIcon />
        </IconButton>
      ) : null}
    </Box>

    <Typography variant="subtitle1">
      {title} <Typography variant="subtitle2">{type}</Typography>
    </Typography>
    <Typography>
      <TranslatedMarkdown lang="fr" content={desc} />
    </Typography>
  </BaseEventCard>
);

export default JobCard;
