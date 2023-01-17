import React from "react";

import { FormattedMessage } from "react-intl";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import WorkIcon from "@mui/icons-material/Work";

import { TranslatedDate, TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";
import { DateTime } from "luxon";

type Props = { job: Queries.JobsJson; selectedTags: string[] };

const TRANSLATED_TITLE: { [key: string]: React.ReactNode } = {
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

const TRANSLATED_JOB_TYPE: { [key: string]: React.ReactNode } = {
  mission: <FormattedMessage id="job-type.mission" defaultMessage="Mission" />,
  internship: (
    <FormattedMessage id="job-type.internship" defaultMessage="Stage" />
  ),
  openEnded: <FormattedMessage id="job-type.openEnded" defaultMessage="CDI" />,
};

const JobCard = ({
  job: { company, desc, type, link, title, colors, tags, to, from },
  selectedTags,
}: Props) => (
  <BaseEventCard
    icon={<WorkIcon sx={{ fill: (colors && colors[1]) || undefined }} />}
    colors={colors}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
    from={<TranslatedDate date={from} />}
    to={<TranslatedDate date={to} />}
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
      {title && TRANSLATED_TITLE[title] ? TRANSLATED_TITLE[title] : title}
    </Typography>
    <Typography variant="subtitle2">
      {type && TRANSLATED_JOB_TYPE[type] ? TRANSLATED_JOB_TYPE[type] : type}
    </Typography>
    <Typography>
      <TranslatedMarkdown content={desc} />
    </Typography>
  </BaseEventCard>
);

export default JobCard;
