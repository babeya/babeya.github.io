import React from "react";

import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";

import { TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = { project: Queries.ProjectsJson };

const ProjectCard = ({ project: { name, desc, type, tags } }: Props) => (
  <BaseEventCard
    icon={type === "website" ? <WebIcon /> : null}
    tags={tags || []} // TODO
  >
    <Typography variant="h5">{name}</Typography>
    <Typography>
      <TranslatedMarkdown lang="fr" content={desc} />
    </Typography>
  </BaseEventCard>
);

export default ProjectCard;
