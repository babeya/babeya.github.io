import React from "react";

import { DateTime } from "luxon";

import { FormattedMessage } from "react-intl";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

import PdfResume from "../../pdf";

import { TimelineNode } from "../types";

import { usePdfResume } from "./usePdfResume";

const generateResumeName = () =>
  `a_babey_resume_${DateTime.now().toLocaleString(DateTime.DATE_SHORT)}.pdf`;

type Props = {
  timelineData: TimelineNode[];
};

const ResumeDownloadLink = ({ timelineData }: Props) => {
  const { jobs, projects, schools, intl, lang } = usePdfResume(timelineData);

  return (
    <PDFDownloadLink
      document={
        <PdfResume
          jobs={jobs}
          projects={projects}
          schools={schools}
          intl={intl}
          lang={lang}
        />
      }
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
