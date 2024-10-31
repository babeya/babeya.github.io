import React from "react";

import ResumeDownloadLink from "./ResumeDownloadLink";
import TypeButtonGroup from "./TypeButtonGroup";

type Props = {
  jobs: Queries.JobsJsonEdge[];
  projects: Queries.ProjectsJsonEdge[];
};

const TimelineHeader = ({ jobs, projects }: Props) => (
  <div>
    <TypeButtonGroup />
    {typeof window !== "undefined" ? (
      <ResumeDownloadLink jobs={jobs} projects={projects} />
    ) : null}
  </div>
);
export default TimelineHeader;
