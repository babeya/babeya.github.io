import React from "react";

import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";

import { TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = { job: Queries.JobsJson };

const JobCard = ({ job: { company, desc, type, colors } }: Props) => (
  <BaseEventCard
    icon={<WorkIcon sx={{ fill: (colors && colors[1]) || undefined }} />}
    colors={colors}
  >
    <Typography variant="h5">{company}</Typography>
    <Typography>{type}</Typography>
    <Typography>
      <TranslatedMarkdown lang="fr" content={desc} />
    </Typography>
  </BaseEventCard>
);

export default JobCard;
