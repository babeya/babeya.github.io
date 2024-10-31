import React from "react";

import { DateTime } from "luxon";

import { useIntl } from "react-intl";
import { PDFDownloadLink } from "@react-pdf/renderer";

import PdfResume from "../../pdf";
import { useLangContext } from "../../Translation";

const generateResumeName = () =>
  `a_babey_resume_${DateTime.now().toLocaleString(DateTime.DATE_SHORT)}.pdf`;

type Props = {
  jobs: Queries.JobsJsonEdge[];
  projects: Queries.ProjectsJsonEdge[];
};

const ResumeDownloadLink = ({ jobs, projects }: Props) => {
  const intl = useIntl();
  const { lang } = useLangContext();

  return (
    <PDFDownloadLink
      document={
        <PdfResume jobs={jobs} projects={projects} intl={intl} lang={lang} />
      }
      fileName={generateResumeName()}
    >
      {({ blob, url, loading, error }) => <div>Télécharger</div>}
    </PDFDownloadLink>
  );
};

export default ResumeDownloadLink;
