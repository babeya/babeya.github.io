import React from "react";

import { FormattedMessage } from "react-intl";

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
    // icon={<WorkIcon sx={{ fill: (colors && colors[1]) || undefined }} />}
    colors={colors}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
    from={<TranslatedDate date={from} />}
    to={<TranslatedDate date={to} />}
    title={company}
    link={link}
  >
    <div>
      {title && TRANSLATED_TITLE[title] ? TRANSLATED_TITLE[title] : title}
    </div>
    <div>
      {type && TRANSLATED_JOB_TYPE[type] ? TRANSLATED_JOB_TYPE[type] : type}
    </div>
    <div>
      {/* @ts-ignore */}
      <TranslatedMarkdown content={desc} />
    </div>
  </BaseEventCard>
);

export default JobCard;
