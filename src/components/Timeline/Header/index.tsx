import React from "react";

import Box from "@mui/material/Box";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDoc from "../../pdf";
import { useIntl } from "react-intl";

type Props = {
  jobs: Queries.JobsJsonEdge[];
  projects: Queries.ProjectsJsonEdge[];
};

const TimelineHeader = ({ jobs, projects }: Props) => {
  const intl = useIntl();

  return (
    <Box>
      {typeof window !== "undefined" ? (
        <PDFDownloadLink
          document={<MyDoc jobs={jobs} projects={projects} intl={intl} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : <PictureAsPdfIcon />
          }
        </PDFDownloadLink>
      ) : null}
    </Box>
  );
};
export default TimelineHeader;
