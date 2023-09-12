import React from "react";

import Box from "@mui/material/Box";

import ResumeDownloadLink from "./ResumeDownloadLink";

type Props = {
  jobs: Queries.JobsJsonEdge[];
  projects: Queries.ProjectsJsonEdge[];
};

const TimelineHeader = ({ jobs, projects }: Props) => (
  <Box>
    {typeof window !== "undefined" ? (
      <ResumeDownloadLink jobs={jobs} projects={projects} />
    ) : null}
  </Box>
);
export default TimelineHeader;
