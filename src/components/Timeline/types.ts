export type TimelineFilters = {
  type?: "jobs" | "projects";
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
