export type TimelineFilters = {
  type: string[];
  tags: string[];
};

export type TimelineNode =
  | Queries.JobsJson
  | Queries.ProjectsJson
  | Queries.SchoolsJson;

export type TimelineTag = {
  name: string;
  count: number;
};
