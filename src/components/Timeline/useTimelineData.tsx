import { useMemo, useState } from "react";

import { useStaticQuery, graphql } from "gatsby";

import { DateTime } from "luxon";

import { TimelineFilters } from "./types";

const query = graphql`
  query allJobs {
    allProjectsJson {
      nodes {
        desc {
          en {
            id
            childrenMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
          fr {
            id
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
        name
        id
        from
        tags
        type
        link
        typename
      }
    }
    allJobsJson {
      nodes {
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
              rawMarkdownBody
            }
          }
          fr {
            id
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
      }
    }
    allSchoolsJson {
      nodes {
        diploma
        from
        id
        link
        school
        tags
        to
        validated
      }
    }
  }
`;

type TimelineNode =
  | Queries.JobsJson
  | Queries.ProjectsJson
  | Queries.SchoolsJson;

const mergeData = (data: {
  jobs: Queries.JobsJson[];
  projects: Queries.ProjectsJson[];
  schools: Queries.SchoolsJson[];
}): TimelineNode[] =>
  [...data.jobs, ...data.projects, ...data.schools].sort(
    ({ from: from1 }, { from: from2 }) =>
      (from2 ? DateTime.fromISO(from2).toMillis() : DateTime.now().toMillis()) -
      (from1 ? DateTime.fromISO(from1).toMillis() : DateTime.now().toMillis())
  );

const filterData = (timelineData: TimelineNode[], { tags }: TimelineFilters) =>
  timelineData.filter(
    (entry) => !tags?.length || tags.every((tag) => entry.tags?.includes(tag))
  );

type Result = {
  timelineData: TimelineNode[];
  filters: TimelineFilters;
  setFilters: (newFilters: TimelineFilters) => void;
  // availableTags: string[];
  // jobs: Queries.JobsJsonEdge[];
  // projects: Queries.ProjectsJsonEdge[];
};

const useTimelineData = (): Result => {
  const data = useStaticQuery(query);
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
  /*
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
  );*/

  return {
    timelineData: filteredTimelineData,
    filters,
    // jobs,
    // projects,
    setFilters,
    // availableTags,
  };
};

export default useTimelineData;
