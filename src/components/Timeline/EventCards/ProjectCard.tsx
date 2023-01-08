import React from "react";

import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";

import { TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = { project: Queries.ProjectsJson; selectedTags: string[] };

const ProjectCard = ({
  project: { name, desc, type, tags },
  selectedTags,
}: Props) => (
  <BaseEventCard
    icon={type === "website" ? <WebIcon /> : null}
    selectedTags={selectedTags}
    tags={tags || []} // TODO
  >
    <Typography variant="h5">{name}</Typography>
    <Typography>
      <TranslatedMarkdown lang="fr" content={desc} />
    </Typography>
  </BaseEventCard>
);

export default ProjectCard;
