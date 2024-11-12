import { useMemo, useState } from "react";

import { useStaticQuery, graphql } from "gatsby";

import { TimelineFilters, TimelineNode, TimelineTag } from "../types";

import { mergeData, filterData, extractTags } from "./tools";

const TIMELINE_QUERY = graphql`
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
        shortDesc {
          en
          fr
        }
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
        typename
        validated
        desc {
          fr
          en
        }
      }
    }
  }
`;

type Result = {
  timelineData: TimelineNode[];
  tags: TimelineTag[];
  filters: TimelineFilters;
  setFilters: (newFilters: TimelineFilters) => void;
};

const useTimelineData = (): Result => {
  const data = useStaticQuery(TIMELINE_QUERY);
  const [filters, setFilters] = useState<TimelineFilters>({
    tags: [],
    type: [],
  });

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

  const tags = useMemo(
    () => extractTags(filteredTimelineData),
    [filteredTimelineData]
  );

  return {
    timelineData: filteredTimelineData,
    filters,
    tags,
    setFilters,
  };
};

export default useTimelineData;
