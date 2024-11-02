import { useMemo, useState } from "react";

import { useStaticQuery } from "gatsby";

import { TimelineFilters, TimelineNode, TimelineTag } from "../types";

import { TIMELINE_QUERY } from "./query";
import { mergeData, filterData, extractTags } from "./tools";

type Result = {
  timelineData: TimelineNode[];
  tags: TimelineTag[];
  filters: TimelineFilters;
  setFilters: (newFilters: TimelineFilters) => void;
};

const useTimelineData = (): Result => {
  const data = useStaticQuery(TIMELINE_QUERY);
  const [filters, setFilters] = useState<TimelineFilters>({ tags: [] });

  const jobs = data?.allJobsJson?.nodes || [];
  const projects = data?.allProjectsJson?.nodes || [];
  const schools = data?.allSchoolsJson?.nodes || [];

  const timelineData = useMemo(
    () => mergeData({ jobs, projects, schools }),
    [jobs, projects, schools]
  );

  const filteredTimelineData = useMemo(
    () => filterData(timelineData, filters),
    [filters, timelineData]
  );

  const tags = useMemo(() => extractTags(timelineData), [filteredTimelineData]);

  return {
    timelineData: filteredTimelineData,
    filters,
    tags,
    // jobs,
    // projects,
    setFilters,
    // availableTags,
  };
};

export default useTimelineData;
