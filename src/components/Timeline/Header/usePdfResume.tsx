import { useMemo } from "react";

import { useIntl } from "react-intl";

import { useLangContext } from "../../Translation";

import { TimelineNode } from "../types";

/**
 * Hook to filter the PDF resume data from the timeline data
 */
export const usePdfResume = (timelineData: TimelineNode[]) => {
  const intl = useIntl();
  const { lang } = useLangContext();

  // We filter the timeline data to get the projects, schools, and jobs
  // instead of using data from the query to have sort and filters already applied
  // @ts-ignore
  const projects: Queries.ProjectsJson[] = useMemo(
    () => [...timelineData].filter((node) => node.typename === "project"),
    [timelineData]
  );

  // @ts-ignore
  const schools: Queries.SchoolsJson[] = useMemo(
    () => [...timelineData].filter((node) => node.typename === "shcool"),
    [timelineData]
  );

  // @ts-ignore
  const jobs: Queries.JobsJson[] = useMemo(
    () => [...timelineData].filter((node) => node.typename === "job"),
    [timelineData]
  );

  return {
    projects,
    schools,
    jobs,
    intl,
    lang,
  };
};
