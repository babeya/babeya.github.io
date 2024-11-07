import React from "react";

import { TimelineNode } from "../types";

import ProjectCard from "./ProjectCard";
import SchoolCard from "./SchoolCard";
import JobCard from "./JobCard";

type TimelineCardProps = {
  node: TimelineNode;
  onTagClick?: (tag: string) => void;
  selectedTags: string[];
};

const TimelineCard = ({
  node,
  onTagClick,
  selectedTags,
}: TimelineCardProps) => {
  const { typename } = node;

  switch (typename) {
    case "job":
      return (
        <JobCard
          // @ts-ignore
          job={node}
          onTagClick={onTagClick}
          selectedTags={selectedTags}
        />
      );
    case "project":
      return (
        <ProjectCard
          // @ts-ignore
          project={node}
          onTagClick={onTagClick}
          selectedTags={selectedTags}
        />
      );
    case "school":
      return (
        <SchoolCard
          // @ts-ignore
          school={node}
          onTagClick={onTagClick}
          selectedTags={selectedTags}
        />
      );
    default:
      return null;
  }
};

export default TimelineCard;
