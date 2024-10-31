import React from "react";

// import { TransitionGroup } from "react-transition-group";

import useTimelineData from "./useTimelineData";
import { JobCard, ProjectCard } from "./EventCards";
import { FormattedMessage } from "react-intl";
import TimelineHeader from "./Header";

const Timeline = () => {
  const { timelineData, setFilters, filters } = useTimelineData(); // availableTags, jobs, projects } =

  return (
    <div>
      <div>
        <FormattedMessage id="timeline.title" defaultMessage="Curriculum" />
      </div>
      {/*<TimelineHeader jobs={jobs} projects={projects} />*/}
      <div>
        <div>
          {timelineData.map((node) => (
            <div key={node.id}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
