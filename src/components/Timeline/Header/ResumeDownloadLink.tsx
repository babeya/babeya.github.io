import React, { useMemo } from "react";

import { DateTime } from "luxon";

import { useIntl, FormattedMessage } from "react-intl";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import PdfResume from "../../pdf";
import { useLangContext } from "../../Translation";

import { TimelineNode } from "../types";

const generateResumeName = () =>
  `a_babey_resume_${DateTime.now().toLocaleString(DateTime.DATE_SHORT)}.pdf`;

type Props = {
  timelineData: TimelineNode[];
};

const usePdfResume = (timelineData: TimelineNode[]) => {
  const intl = useIntl();
  const { lang } = useLangContext();

  const projects = useMemo(
    () => [...timelineData].filter((node) => node.typename === "project"),
    [timelineData]
  );
  const school = useMemo(
    () => [...timelineData].filter((node) => node.typename === "shcool"),
    [timelineData]
  );
  const jobs = useMemo(
    () => [...timelineData].filter((node) => node.typename === "job"),
    [timelineData]
  );

  return {
    projects,
    school,
    jobs,
    intl,
    lang,
  };
};

const ResumeDownloadLink = ({ timelineData }: Props) => {
  const intl = useIntl();
  const { lang } = useLangContext();

  const projects = useMemo(
    () => [...timelineData].filter((node) => node.typename === "project"),
    [timelineData]
  );
  const school = useMemo(
    () => [...timelineData].filter((node) => node.typename === "shcool"),
    [timelineData]
  );
  const jobs = useMemo(
    () => [...timelineData].filter((node) => node.typename === "job"),
    [timelineData]
  );

  return (
    <PDFDownloadLink
      document={<PdfResume jobs={[]} projects={[]} intl={intl} lang={lang} />}
      fileName={generateResumeName()}
    >
      {
        // @ts-ignore
        ({ blob, url, loading, error }) => (
          <Button className="w-full sm:w-auto bg-purple-700 hover:bg-purple-600 text-white">
            <Download className="mr-2 h-4 w-4" />
            <FormattedMessage
              id="timeline.export"
              defaultMessage="Exporter le CV"
            />
          </Button>
        )
      }
    </PDFDownloadLink>
  );
};

export default ResumeDownloadLink;
