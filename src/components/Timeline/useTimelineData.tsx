import { useMemo, useState } from "react";

import { useStaticQuery, graphql } from "gatsby";

import { DateTime } from "luxon";

import { TimelineFilters } from "./types";

const query = graphql`
  query allJobs {
    allProjectsJson {
      edges {
        node {
          desc {
            en {
              childrenMarkdownRemark {
                html
              }
            }
            fr {
              childMarkdownRemark {
                html
              }
            }
          }
          name
          id
          release
          tags
          type
          link
          typename
        }
      }
    }
    allJobsJson(sort: { from: DESC }) {
      edges {
        node {
          link
          id
          from
          to
          title
          tags
          type
          typename
          company
          colors
          desc {
            en {
              id
              childMarkdownRemark {
                html
              }
            }
            fr {
              id
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`;

const mergeDataRec = (
  result: (Queries.JobsJsonEdge | Queries.ProjectsJsonEdge)[],
  jobs: Queries.JobsJsonEdge[],
  projects: Queries.ProjectsJsonEdge[],
  jobIdx: number,
  projectIdx: number
): (Queries.JobsJsonEdge | Queries.ProjectsJsonEdge)[] => {
  if (jobIdx >= jobs.length) {
    return [...result, ...(projects.slice(projectIdx) || [])];
  }
  if (projectIdx >= projects.length) {
    return [...result, ...(jobs.slice(jobIdx) || [])];
  }

  const currentJob = jobs[jobIdx];
  const currentProject = projects[projectIdx];

  const jobEnd =
    (currentJob.node?.to && DateTime.fromISO(currentJob.node.to)) ||
    DateTime.now();
  const projectRelease =
    (currentProject.node?.release &&
      DateTime.fromISO(currentProject.node.release)) ||
    DateTime.now();

  if (jobEnd >= projectRelease) {
    return mergeDataRec(
      [...result, currentJob],
      jobs,
      projects,
      jobIdx + 1,
      projectIdx
    );
  }
  return mergeDataRec(
    [...result, currentProject],
    jobs,
    projects,
    jobIdx,
    projectIdx + 1
  );
};

const filterData = (
  timelineData: (Queries.JobsJsonEdge | Queries.ProjectsJsonEdge)[],
  { tags }: TimelineFilters
) =>
  timelineData.filter(
    (entry) =>
      !tags?.length || tags.every((tag) => entry.node.tags?.includes(tag))
  );

type Result = {
  timelineData: (Queries.JobsJsonEdge | Queries.ProjectsJsonEdge)[];
  filters: TimelineFilters;
  setFilters: (newFilters: TimelineFilters) => void;
  availableTags: string[];
};

const mergeData = (
  jobs: Queries.JobsJsonEdge[],
  projects: Queries.ProjectsJsonEdge[]
) => mergeDataRec([], jobs, projects, 0, 0);

const useTimelineData = (): Result => {
  const data = useStaticQuery(query);
  const [filters, setFilters] = useState<TimelineFilters>({ tags: [] });

  const jobs = data?.allJobsJson?.edges;
  const projects = data?.allProjectsJson?.edges;

  const timelineData = useMemo(
    () => mergeData(jobs || [], projects || []),
    [jobs, projects]
  );

  const filteredTimelineData = useMemo(
    () => filterData(timelineData, filters),
    [filters, timelineData]
  );

  const availableTags = useMemo(
    () =>
      Object.keys(
        filteredTimelineData.reduce(
          (acc, { node: { tags } }) => ({
            ...acc,
            ...(tags?.reduce(
              (tagAcc, tag) => ({ ...tagAcc, [tag || ""]: tag }),
              {}
            ) || {}),
          }),
          {}
        )
      ),
    [filteredTimelineData]
  );

  return {
    timelineData: filteredTimelineData,
    filters,
    setFilters,
    availableTags,
  };
};

export default useTimelineData;
