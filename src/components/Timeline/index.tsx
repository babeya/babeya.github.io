import React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import useTimelineData from "./useTimelineData";
import { JobCard, ProjectCard } from "./EventCards";

type Props = {
  lang: string;
};

const Timeline = ({ lang }: Props) => {
  const data = useTimelineData();

  console.log(data);

  return (
    <Paper sx={{ padding: 4 }}>
      <Box sx={{ borderLeft: "2px solid grey" }}>
        {data.map(({ node }) =>
          node?.typename === "job" ? (
            <JobCard job={node} lang={lang} />
          ) : (
            <ProjectCard project={node} lang={lang} />
          )
        )}
      </Box>
    </Paper>
  );
};

export default Timeline;
