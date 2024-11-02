import React from "react";

import { FormattedMessage } from "react-intl";
import { BackpackIcon } from "@radix-ui/react-icons";

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
    icon={<BackpackIcon className="h-6 w-6 text-green-400" />}
    colors={colors}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
    from={<TranslatedDate date={from} />}
    to={<TranslatedDate date={to} />}
    title={title && TRANSLATED_TITLE[title] ? TRANSLATED_TITLE[title] : title}
    subtitle={company}
    link={link}
  >
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
