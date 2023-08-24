import React from "react";

import { TransitionGroup } from "react-transition-group";

import { FormattedMessage } from "react-intl";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";

import useTimelineData from "./useTimelineData";
import { JobCard, ProjectCard } from "./EventCards";

import TimelineHeader from "./Header";

const Timeline = () => {
  const { timelineData, setFilters, filters, availableTags } =
    useTimelineData();

  return (
    <Box>
      {/*<TimelineHeader data={timelineData} />*/}
      <Box>
        <TransitionGroup>
          {timelineData.map(({ node }) => (
            <Collapse key={node.id} mountOnEnter unmountOnExit>
              {node?.typename === "job" ? ( // TODO: auto generate __typename
                <JobCard
                  job={node as Queries.JobsJson}
                  selectedTags={filters.tags}
                />
              ) : (
                <ProjectCard
                  project={node as Queries.ProjectsJson}
                  selectedTags={filters.tags}
                />
              )}
            </Collapse>
          ))}
        </TransitionGroup>
      </Box>
    </Box>
  );
};

export default Timeline;
