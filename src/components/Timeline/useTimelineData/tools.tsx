import { DateTime } from "luxon";

import { TimelineFilters, TimelineNode, TimelineTag } from "../types";

export const mergeData = (data: {
  jobs: Queries.JobsJson[];
  projects: Queries.ProjectsJson[];
  schools: Queries.SchoolsJson[];
}): TimelineNode[] =>
  [...data.jobs, ...data.projects, ...data.schools].sort(
    ({ from: from1 }, { from: from2 }) =>
      (from2 ? DateTime.fromISO(from2).toMillis() : DateTime.now().toMillis()) -
      (from1 ? DateTime.fromISO(from1).toMillis() : DateTime.now().toMillis())
  );

export const filterData = (
  timelineData: TimelineNode[],
  { tags }: TimelineFilters
) =>
  timelineData.filter(
    (entry) => !tags?.length || tags.every((tag) => entry.tags?.includes(tag))
  );

const countTags = (timelineData: TimelineNode[]) =>
  timelineData.reduce((acc, { tags }) => {
    tags?.forEach((tag) => {
      if (tag) {
        acc[tag] = (acc[tag] || 0) + 1;
      }
    });
    return acc;
  }, {} as Record<string, number>);

const tagRecordToArray = (tagRecord: Record<string, number>): TimelineTag[] =>
  Object.entries(tagRecord).map(([name, count]) => ({ name, count }));

const sortTags = (tags: TimelineTag[]) =>
  tags.sort((a, b) => b.count - a.count);

export const extractTags = (timelineData: TimelineNode[]) =>
  sortTags(tagRecordToArray(countTags(timelineData)));
