import React from "react";

import { TranslatedDate, TranslatedMarkdown } from "../../Translation";
import { ReaderIcon } from "@radix-ui/react-icons";

import BaseEventCard from "./BaseEventCard";

type Props = { school: Queries.SchoolsJson; selectedTags: string[] };

const SchoolCard = ({
  school: { school, diploma, tags, from, to, link },
  selectedTags,
}: Props) => (
  <BaseEventCard
    icon={<ReaderIcon className="h-6 w-6 text-green-400" />}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
    from={<TranslatedDate date={from} />}
    to={<TranslatedDate date={to} />}
    title={diploma}
    subtitle={school}
    link={link}
  >
    <div />
  </BaseEventCard>
);

export default SchoolCard;
