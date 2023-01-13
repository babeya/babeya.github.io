import React from "react";

import { TransitionGroup } from "react-transition-group";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";

import useTimelineData from "./useTimelineData";
import { JobCard, ProjectCard } from "./EventCards";
import Header from "./Header";

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
        <TransitionGroup>
          {timelineData.map(({ node }) => (
            <Collapse key={node.id} mountOnEnter unmountOnExit>
              {node?.typename === "job" ? ( // TODO: auto generate __typename
                <JobCard job={node} selectedTags={filters.tags}  />
              ) : (
                <ProjectCard project={node} selectedTags={filters.tags} />
              )}
            </Collapse>
          ))}
        </TransitionGroup>
      </Box>
    </Paper>
  );
};

export default Timeline;
