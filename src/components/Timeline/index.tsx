import React from "react";

import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import useTimelineData from "./useTimelineData";
import TimelineCard from "./TimelineCard";
import TimelineHeader from "./Header";

const Timeline = () => {
  const { timelineData, setFilters, filters, tags } = useTimelineData(); // availableTags, jobs, projects } =

  return (
    <section className="min-h-screen bg-background px-5 py-14 text-foreground sm:px-8">
      <h2 className="mb-7 text-center text-3xl font-semibold tracking-normal">
        <FormattedMessage id="timeline.title" defaultMessage="Curriculum" />
      </h2>
      <div className="relative mx-auto max-w-5xl">
        <TimelineHeader
          tags={tags}
          timelineData={timelineData}
          filters={filters}
          onFilterChange={setFilters}
        />
      </div>
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          className="relative border-y border-border"
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
    </section>
  );
};

export default Timeline;
