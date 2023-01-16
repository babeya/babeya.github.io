import React from "react";

import { FormattedMessage } from "react-intl";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import WorkIcon from "@mui/icons-material/Work";

import { TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = { job: Queries.JobsJson; selectedTags: string[] };

const TranslatedTitle: { [key: string]: React.ReactNode } = {
  mobile: (
    <FormattedMessage
      id="job-title.mobile"
      defaultMessage="Développeur Mobile"
    />
  ),
  front: (
    <FormattedMessage
      id="job-title.front"
      defaultMessage="Développeur Front-end"
    />
  ),
  fullStack: (
    <FormattedMessage
      id="job-title.fullStack"
      defaultMessage="Développeur Full-Stack"
    />
  ),
  tv: (
    <FormattedMessage
      id="job-title.tv"
      defaultMessage="Développeur TV / Console"
    />
  ),
  integrator: (
    <FormattedMessage
      id="job-title.integrator"
      defaultMessage="Intégrateur Front-end"
    />
  ),
};

const JobCard = ({
  job: { company, desc, type, link, title, colors, tags },
  selectedTags,
}: Props) => (
  <BaseEventCard
    icon={<WorkIcon sx={{ fill: (colors && colors[1]) || undefined }} />}
    colors={colors}
    selectedTags={selectedTags}
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
      {title && TranslatedTitle[title] ? TranslatedTitle[title] : title}
    </Typography>
    <Typography variant="subtitle2">{type}</Typography>
    <Typography>
      <TranslatedMarkdown lang="fr" content={desc} />
    </Typography>
  </BaseEventCard>
);

export default JobCard;
