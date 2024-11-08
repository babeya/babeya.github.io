import React from "react";

import { GraduationCap } from "lucide-react";

import { TranslatedDate } from "../../Translation";
import { ReaderIcon } from "@radix-ui/react-icons";

import BaseEventCard from "./BaseEventCard";

type Props = {
  school: Queries.SchoolsJson;
  selectedTags: string[];
  onTagClick?: (tag: string) => void;
};

const SchoolCard = ({
  school: { school, diploma, tags, from, to, link },
  selectedTags,
  onTagClick,
}: Props) => (
  <BaseEventCard
    icon={<GraduationCap className="h-6 w-6 text-green-400" />}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
    from={<TranslatedDate date={from} />}
    to={<TranslatedDate date={to} />}
    title={diploma}
    subtitle={school}
    link={link}
    onTagClick={onTagClick}
  >
    <div />
  </BaseEventCard>
);

export default SchoolCard;
