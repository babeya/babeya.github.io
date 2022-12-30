import React from "react";

import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";

import { TranslatedMarkdown } from "../../Translation";

import BaseEventCard from "./BaseEventCard";

type Props = { project: Queries.ProjectsJson };

const ProjectCard = ({ project: { name, desc, type } }: Props) => (
  <BaseEventCard icon={type === "website" ? <WorkIcon /> : null}>
    <Typography variant="h5">{name}</Typography>
    <Typography>
      <TranslatedMarkdown lang="fr" content={desc} />
    </Typography>
  </BaseEventCard>
);

export default ProjectCard;
