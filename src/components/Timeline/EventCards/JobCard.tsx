import React from "react";

import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import WorkIcon from "@mui/icons-material/Work";

import { TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = { job: Queries.JobsJson };

const JobCard = ({ job: { company, desc, type, colors, tags } }: Props) => (
  <BaseEventCard
    icon={<WorkIcon sx={{ fill: (colors && colors[1]) || undefined }} />}
    colors={colors}
  >
    <Typography variant="h5">{company}</Typography>
    <Typography>{type}</Typography>
    <Typography>
      <TranslatedMarkdown lang="fr" content={desc} />
    </Typography>
    <Stack direction="row-reverse" spacing={1}>
      {(tags || []).map((tag) => (
        <Chip label={tag} size="small" variant="outlined" />
      ))}
    </Stack>
  </BaseEventCard>
);

export default JobCard;
