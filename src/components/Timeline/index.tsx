import React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import useTimelineData from "./useTimelineData";
import { JobCard, ProjectCard } from "./EventCards";
import Header from "./Header";

type Props = {};

const Timeline = () => {
  const { timelineData, setFilters, filters, availableTags } =
    useTimelineData();

  return (
    <Paper sx={{ padding: 4, paddingLeft: 6 }}>
      <Header
        filters={filters}
        setFilters={setFilters}
        availableTags={availableTags}
      />

      <Divider sx={{ marginY: 2 }} />

      <Box sx={{ borderLeft: "2px solid grey" }}>
        {timelineData.map(({ node }) =>
          node?.typename === "job" ? ( // TODO: auto generate __typename
            <JobCard job={node} key={node.id} selectedTags={filters.tags} />
          ) : (
            <ProjectCard
              project={node}
              key={node.id}
              selectedTags={filters.tags}
            />
          )
        )}
      </Box>
    </Paper>
  );
};

export default Timeline;
