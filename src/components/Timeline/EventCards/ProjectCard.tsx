import React from "react";

import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";

import { TranslatedDate, TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = { project: Queries.ProjectsJson; selectedTags: string[] };

const ProjectCard = ({
  project: { name, desc, type, tags, release, link },
  selectedTags,
}: Props) => (
  <BaseEventCard
    icon={type === "website" ? <WebIcon /> : null}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
    from={<TranslatedDate date={release} />}
    title={name}
    link={link}
  >
    <Typography component="div">
      {/* @ts-ignore */}
      <TranslatedMarkdown content={desc} />
    </Typography>
  </BaseEventCard>
);

export default ProjectCard;
