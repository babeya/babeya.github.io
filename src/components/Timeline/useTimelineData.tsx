import { useMemo, useState } from "react";

import { useStaticQuery, graphql } from "gatsby";

import { DateTime } from "luxon";

import { TimelineFilters } from "./types";

const query = graphql`
  query allJobs {
    allProjectsJson(sort: { start: DESC }) {
      edges {
        node {
          desc {
            en {
              id
              childrenMarkdownRemark {
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
          name
          id
          start
          tags
          type
          link
          typename
        }
      }
    }
    allJobsJson(sort: { start: DESC }) {
      edges {
        node {
          link
          id
          start
          end
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
) =>
  [...(jobs || []), ...(projects || [])].sort(
    (elem1, elem2) =>
      DateTime.fromISO(elem2.node.start) - DateTime.fromISO(elem1.node.start)
  );

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
