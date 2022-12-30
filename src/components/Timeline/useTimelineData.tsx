import { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";

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
          type
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

  if (currentJob.node?.from || 0 >= (currentProject.node?.release || 0)) {
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

const mergeData = (
  jobs: Queries.JobsJsonEdge[],
  projects: Queries.ProjectsJsonEdge[]
) => mergeDataRec([], jobs, projects, 0, 0);

const useTimelineData = () => {
  const data = useStaticQuery(query);

  const jobs = data?.allJobsJson?.edges;
  const projects = data?.allProjectsJson?.edges;

  return useMemo(() => mergeData(jobs || [], projects || []), [jobs, projects]);
};

export default useTimelineData;
