import React from "react";

import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import useTimelineData from "./useTimelineData";
import TimelineCard from "./TimelineCard";
import TimelineHeader from "./Header";

const Timeline = () => {
  const { timelineData, setFilters, filters, tags } = useTimelineData(); // availableTags, jobs, projects } =

  return (
    <div className="bg-background min-h-screen text-foreground font-mono p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <FormattedMessage id="timeline.title" defaultMessage="Curriculum" />
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <TimelineHeader
          tags={tags}
          timelineData={timelineData}
          filters={filters}
          onFilterChange={setFilters}
        />
      </div>
      <div className="relative max-w-4xl mx-auto">
        {/* Glowing timeline line with smooth edges */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5">
          <div className="absolute inset-0 timeline-line"></div>
        </div>

        <motion.div
          className="py-3 relative"
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {timelineData.map((node) => (
            <TimelineCard
              key={node.id}
              node={node}
              selectedTags={filters.tags}
              onTagClick={(tag) => {
                const { tags } = filters;
                if (tags.includes(tag)) {
                  setFilters({
                    ...filters,
                    tags: tags.filter((t) => t !== tag),
                  });
                } else {
                  setFilters({ ...filters, tags: [...tags, tag] });
                }
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
