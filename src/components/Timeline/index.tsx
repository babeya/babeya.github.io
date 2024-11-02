import React from "react";

import { FormattedMessage } from "react-intl";

import useTimelineData from "./useTimelineData";
import TimelineCard from "./TimelineCard";
import TimelineHeader from "./Header";

const Timeline = () => {
  const { timelineData, setFilters, filters } = useTimelineData(); // availableTags, jobs, projects } =
  console.log(timelineData);

  return (
    <div className="bg-gray-900 min-h-screen text-green-400 font-mono p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <FormattedMessage id="timeline.title" defaultMessage="Curriculum" />
      </h2>
      {/*<TimelineHeader jobs={jobs} projects={projects} />*/}
      <div className="relative max-w-4xl mx-auto">
        {/* Glowing timeline line with smooth edges */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5">
          <div className="absolute inset-0 timeline-line"></div>
          <div className="absolute inset-0 animate-pulse bg-green-400 blur-sm opacity-50"></div>
        </div>

        <div className="py-3">
          {timelineData.map((node) => (
            <TimelineCard key={node.id} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
