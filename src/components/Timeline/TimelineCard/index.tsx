import React from "react";

import { TimelineNode } from "../types";

import ProjectCard from "./ProjectCard";
import SchoolCard from "./SchoolCard";
import JobCard from "./JobCard";

type TimelineCardProps = {
  node: TimelineNode;
};

const TimelineCard = ({ node }: TimelineCardProps) => {
  const { typename } = node;
  console.log(typename);

  switch (typename) {
    case "job":
      // @ts-ignore
      return <JobCard job={node} />;
    case "project":
      // @ts-ignore
      return <ProjectCard project={node} />;
    case "school":
      // @ts-ignore
      return <SchoolCard school={node} />;
    default:
      return null;
  }
};

export default TimelineCard;
