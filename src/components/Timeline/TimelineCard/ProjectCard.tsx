import React from "react";

import { Code } from "lucide-react";

import { TranslatedDate, TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = {
  project: Queries.ProjectsJson;
  selectedTags: string[];
  onTagClick?: (tag: string) => void;
};

const ProjectCard = ({
  project: { name, desc, type, tags, from, link },
  selectedTags,
  onTagClick,
}: Props) => (
  <BaseEventCard
    icon={<Code className="h-6 w-6 text-primary" />}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
    from={<TranslatedDate date={from} />}
    title={name}
    link={link}
    onTagClick={onTagClick}
  >
    <div>
      {/* @ts-ignore */}
      <TranslatedMarkdown content={desc} />
    </div>
  </BaseEventCard>
);

export default ProjectCard;
