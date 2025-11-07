import React from "react";

import { Briefcase } from "lucide-react";

import { TranslatedDate, TranslatedMarkdown } from "../../Translation";
import {
  TRANSLATED_JOB_TYPE,
  TRANSLATED_TITLE,
} from "../../CommonFormattedMessage";

import BaseEventCard from "./BaseEventCard";

type Props = {
  job: Queries.JobsJson;
  selectedTags: string[];
  onTagClick?: (tag: string) => void;
};

const JobCard = ({
  job: { company, desc, type, link, title, colors, tags, to, from },
  selectedTags,
  onTagClick,
}: Props) => (
  <BaseEventCard
    icon={<Briefcase className="h-6 w-6 text-primary" />}
    colors={colors}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
    from={<TranslatedDate date={from} />}
    to={<TranslatedDate date={to} />}
    title={title && TRANSLATED_TITLE[title] ? TRANSLATED_TITLE[title] : title}
    subtitle={
      <span>
        {company}
        {type && TRANSLATED_JOB_TYPE[type] ? (
          <> ({TRANSLATED_JOB_TYPE[type]})</>
        ) : (
          type
        )}
      </span>
    }
    link={link}
    onTagClick={onTagClick}
  >
    <div>
      {/* @ts-ignore */}
      <TranslatedMarkdown content={desc} />
    </div>
  </BaseEventCard>
);

export default JobCard;
