import React from "react";

import { TranslatedDate, TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = { project: Queries.ProjectsJson; selectedTags: string[] };

const ProjectCard = ({
  project: { name, desc, type, tags, from, link },
  selectedTags,
}: Props) => (
  <BaseEventCard
    //icon={type === "website" ? <WebIcon /> : null}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
    from={<TranslatedDate date={from} />}
    title={name}
    link={link}
  >
    <div>
      {/* @ts-ignore */}
      <TranslatedMarkdown content={desc} />
    </div>
  </BaseEventCard>
);

export default ProjectCard;
