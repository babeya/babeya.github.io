import React from "react";

import { FormattedMessage } from "react-intl";

import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";

import { TranslatedDate, TranslatedMarkdown } from "../../Translation";
import {
  TRANSLATED_JOB_TYPE,
  TRANSLATED_TITLE,
} from "../../CommonFormattedMessage";

import BaseEventCard from "./BaseEventCard";

type Props = { job: Queries.JobsJson; selectedTags: string[] };

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
    title={company}
    link={link}
  >
    <Typography variant="subtitle1">
      {title && TRANSLATED_TITLE[title] ? TRANSLATED_TITLE[title] : title}
    </Typography>
    <Typography variant="subtitle2">
      {type && TRANSLATED_JOB_TYPE[type] ? TRANSLATED_JOB_TYPE[type] : type}
    </Typography>
    <Typography component="div">
      {/* @ts-ignore */}
      <TranslatedMarkdown content={desc} />
    </Typography>
  </BaseEventCard>
);

export default JobCard;
