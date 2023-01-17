import React from "react";

import { TransitionGroup } from "react-transition-group";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";

import useTimelineData from "./useTimelineData";
import { JobCard, ProjectCard } from "./EventCards";
import { FormattedMessage } from "react-intl";

const Timeline = () => {
  const { timelineData, setFilters, filters, availableTags } =
    useTimelineData();

  return (
    <Box>
      <Typography textAlign="center" variant="h3" marginY={2}>
        <FormattedMessage id="timeline.title" defaultMessage="Curriculum" />
      </Typography>
      <Box>
        <TransitionGroup>
          {timelineData.map(({ node }) => (
            <Collapse key={node.id} mountOnEnter unmountOnExit>
              {node?.typename === "job" ? ( // TODO: auto generate __typename
                <JobCard job={node} selectedTags={filters.tags} />
              ) : (
                <ProjectCard project={node} selectedTags={filters.tags} />
              )}
            </Collapse>
          ))}
        </TransitionGroup>
      </Box>
    </Box>
  );
};

export default Timeline;
